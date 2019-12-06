<?php

class EncryptUtil
{
    const UID_AES_KEY = 'YOUR_AES_KEY_STR';

    public static function decrypt($data, $key = self::UID_AES_KEY)
    {
        $data = base64_decode($data);
        $hash = md5($key);
        $cipherText = substr($data, 16);
        $salt = substr($data, 8, 8);
        $rounds = 3;
        $hashSalt = $hash . $salt;
        $md5Hash[] = md5($hashSalt, true);
        $result = $md5Hash[0];
        for ($i = 1; $i < $rounds; $i++) {
            $md5Hash[$i] = md5($md5Hash[$i - 1] . $hashSalt, true);
            $result .= $md5Hash[$i];
        }
        $key = substr($result, 0, 32);
        $iv = substr($result, 32, 16);
        return openssl_decrypt($cipherText, 'aes-256-cbc', $key, true, $iv);
    }

    public static function encrypt($data, $key = self::UID_AES_KEY)
    {
        $hash = md5($key);
        $salt = openssl_random_pseudo_bytes(8);
        $salted = '';
        $dx = '';
        while (strlen($salted) < 48) {
            $dx = md5($dx . $hash . $salt, true);
            $salted .= $dx;
        }
        $key = substr($salted, 0, 32);
        $iv = substr($salted, 32, 16);
        $encryptedData = openssl_encrypt($data, 'aes-256-cbc', $key, OPENSSL_RAW_DATA, $iv);
        return base64_encode('Salted__' . $salt . $encryptedData);
    }
}
?>