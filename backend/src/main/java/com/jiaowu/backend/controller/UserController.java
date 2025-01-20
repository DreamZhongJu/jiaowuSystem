package com.jiaowu.backend.controller;

import com.jiaowu.backend.pojo.ResponseMessage;
import com.jiaowu.backend.pojo.User;
import com.jiaowu.backend.pojo.dto.UserDto;
import com.jiaowu.backend.pojo.dto.UserPasswordDto;
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
    @GetMapping("/search")
    public ResponseMessage<User> get(@RequestParam String userId) {
        System.out.println("Received userId: " + userId); // 打印接收的参数
        User userNew = userService.getUser(userId);
        return ResponseMessage.success(userNew);
    }

    @GetMapping("/all")
    public ResponseMessage<User> getAll() {
        List<User> userNew =  userService.getAll();
        return ResponseMessage.success(userNew);
    }

    //修改
    @PutMapping("/edit/{userId}")
    public ResponseMessage<User> edit(@PathVariable String userId, @RequestBody UserDto userDto) {
        userService.edit(userId, userDto);
        return ResponseMessage.success();
    }

    @PutMapping("/password/{userId}")
    public ResponseMessage<User> updatePassword(@PathVariable String userId, @RequestBody UserPasswordDto userDto) throws Exception {
        userService.updatePassword(userId, userDto);
        return ResponseMessage.success();
    }

    //删除
    @DeleteMapping("/{userId}")
    public ResponseMessage<User> delete(@PathVariable Integer userId) {
        userService.delete(userId);
        return ResponseMessage.success();
    }
}
