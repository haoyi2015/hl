<?php

    class Openssl {
        /**
         * 设置session
         * @param String $val   加密字符串
         */

        public static function get($val){
            //解密
            $key = "1234567887654321";
            $iv = "1234567887654321";
            $decrypted = openssl_decrypt(($val), 'aes-128-cbc', $key, OPENSSL_ZERO_PADDING, $iv);
            $decrypted = json_decode(trim($decrypted),true);
            return $decrypted;
            //echo $decrypted['user'];//var_dump($decrypted);
        }
        public static function getToken(){
            $v = '1234567887654321';
            $key = mt_rand();
            $hash = hash_hmac("sha1", $v . mt_rand() . time(), $key, true);
            $token = str_replace('=', '', strtr(base64_encode($hash), '+/', '-_'));
            return $token;
        }
        public static function getSign($appSecret, $params){
            if (!is_array($params))
                $params = array();
            ksort($params);
            $text = '';
            foreach ($params as $k => $v) {
                $text .= $k . $v;
            }
            return strtoupper(sha1($appSecret . $text . $appSecret));
        }
    }
?>