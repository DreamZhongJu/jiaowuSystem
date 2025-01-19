package com.jiaowu.backend.exception;

import com.jiaowu.backend.pojo.ResponseMessage;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice //统一处理
public class GlobalExceptionHanderAdvice {
    // 记录日志
    Logger log = LoggerFactory.getLogger(GlobalExceptionHanderAdvice.class);

    @ExceptionHandler({Exception.class})
    public ResponseMessage handleException(Exception e, HttpServletRequest request, HttpServletResponse response) {

        log.error(e.getMessage(), e);
        return new ResponseMessage(500,e.getMessage(),null);
    }
}
