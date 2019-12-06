
<?php
    　/**
     * 签名
     * @param $appSecret
     * @param $params
     * @return string
     */
    public function sign($appSecret, $params)
    {
        if (!is_array($params))
            $params = array();
        ksort($params);
        $text = '';
        foreach ($params as $k => $v) {
            $text .= $k . $v;
        }
        return strtoupper(sha1($appSecret . $text . $appSecret));
    }
?>