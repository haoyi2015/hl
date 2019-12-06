<?php
    require_once('EncryptUtil.php');

    /*开启会话*/
    if (!session_id()) session_start();
    if($_SERVER['REQUEST_METHOD'] == 'OPTIONS'){
        //  解决预请求OPTIONS
        header('Access-Control-Allow-Origin:*');
        header('Access-Control-Allow-Headers:Accept,Referer,Host,Keep-Alive,User-Agent,X-Requested-With,Cache-Control,Content-Type,Cookie,Authorization');
        header('Access-Control-Allow-Credentials:true');
        header('Access-Control-Allow-Methods:GET,POST,OPTIONS');
        header('Access-Control-Max-Age:1728000');
        header('Content-Type:text/plain charset=UTF-8');
        header('Access-Control-Expose-Headers:getResponseHeader()');
        header('Content-Length: 0', true);
        header('status: 200');
        header('HTTP/1.0 204 No Content');
        exit;
    }else{
        //   获取ajax请求header
       header("charset=utf-8");
        // 指定允许其他域名访问  
       header('Access-Control-Allow-Origin:http://192.168.43.137:9528');
       // 设置Credentials
       header('Access-Control-Allow-Credentials:true');
       // 响应类型  
       header('Access-Control-Allow-Methods:*');  
       // 响应头设置  
       //header('Access-Control-Allow-Headers:x-requested-with,content-type');
       header('Access-Control-Allow-Headers:,"x-requested-with,Authorization"');
    }
    //echo session::get('username');//var_dump($_SESSION["username"]);
    class Response{
        public static function json($code,$message="",$data=array()){
            $result=array(
              'code'=>$code,
              'msg'=>$message,
              'data'=>$data 
            );
            //输出json
            //echo json_encode($result,JSON_UNESCAPED_UNICODE);
            echo json_encode($result,true);
            exit;
        }
    }
    class Session{

        /**
         * 设置session
         * @param String $name   session name
         * @param Mixed  $data   session data
         * @param Int    $expire 超时时间(秒) 24*3600*15, //SESSION保存15天
         */

        public static function set($name, $data, $expire=600){
            $session_data = array();
            $session_data['data'] = $data;
            $session_data['expire'] = time()+$expire;
            $_SESSION[$name] = $session_data;
        }

        /**
         * 读取session
         * @param  String $name  session name
         * @return Mixed
         */
        public static function get($name){
            if(isset($_SESSION[$name])){
                if($_SESSION[$name]['expire']>time()){
                    return $_SESSION[$name]['data'];
                }else{
                    self::clear($name);
                }
            }
            return false;
        }

        /**
         * 清除session
         * @param  String  $name  session name
         */
        private static function clear($name){
            unset($_SESSION[$name]);
        }

    }
?>