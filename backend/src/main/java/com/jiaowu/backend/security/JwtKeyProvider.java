package com.jiaowu.backend.security;

import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

import java.security.Key;
import java.util.Base64;

public class JwtKeyProvider {
    // 原始密钥字符串
    static String secret = "湖北大学计算机学院";

    // 扩充字符串，确保长度达到 256 位（32 字节）
    private static final String EXPANDED_SECRET = expandSecretTo256Bits(secret);

    // Base64 编码后的密钥
    private static final String SECRET_KEY = Base64.getEncoder().encodeToString(EXPANDED_SECRET.getBytes());

    // 将密钥字符串解码并生成 Key 对象
    public static Key getKey() {
        return Keys.hmacShaKeyFor(Decoders.BASE64.decode(SECRET_KEY));
    }

    // 扩充密钥字符串到 256 位（32 字节）
    private static String expandSecretTo256Bits(String secret) {
        StringBuilder expandedSecret = new StringBuilder(secret);
        while (expandedSecret.length() < 32) { // 32 字节 = 256 位
            expandedSecret.append(secret); // 复制原始字符串
        }
        // 截取到正好 32 字节长度
        return expandedSecret.substring(0, 32);
    }
}