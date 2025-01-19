package com.jiaowu.backend.controller;

import com.jiaowu.backend.pojo.ResponseMessage;
import com.jiaowu.backend.pojo.User;
import com.jiaowu.backend.pojo.dto.UserDto;
import com.jiaowu.backend.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController //允许接口方法返回对象，转换成json文本
@RequestMapping("/user")
public class UserController {
    @Autowired
    IUserService userService;
    //REST——请求方法
    //增加
    //// 注册
    @PostMapping("/register")
    public ResponseMessage<User> addUser(@Validated @RequestBody UserDto user) {
        User userNew =  userService.add(user);
        return ResponseMessage.success(userNew);
    }

    //// 登录
    @PostMapping("/login")
    public ResponseMessage<User> loginUser(@RequestBody UserDto user) {
        Map<String, Object> loginResponse = userService.login(user);
        return ResponseMessage.success(loginResponse);
    }

    //查询
    @GetMapping("/{userId}") // localhost:8080/user/{userId} method:get
    public ResponseMessage<User> get(@PathVariable Integer userId) {
        User userNew =  userService.getUser(userId);
        return ResponseMessage.success(userNew);
    }
    @GetMapping("/all")
    public ResponseMessage<User> getAll() {
        List<User> userNew =  userService.getAll();
        return ResponseMessage.success();
    }
    //修改
    @PutMapping
    public ResponseMessage<User> edit(@Validated @RequestBody UserDto userId) {
        User userNew =  userService.edit(userId);
        return ResponseMessage.success(userNew);
    }
    //删除
    @DeleteMapping("/{userId}")
    public ResponseMessage<User> delete(@PathVariable Integer userId) {
        userService.delete(userId);
        return ResponseMessage.success();
    }
}
