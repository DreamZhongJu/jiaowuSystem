package com.jiaowu.backend.controller;

import com.jiaowu.backend.pojo.ResponseMessage;
import com.jiaowu.backend.pojo.Role;
import com.jiaowu.backend.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/role")
public class RoleController {
    @Autowired
    RoleService roleService;

    // 查询用户
    @GetMapping("/search")
    public ResponseMessage<Role> get(@RequestParam int id) {
        Role role = roleService.getRole(id);
        return ResponseMessage.success(role);
    }
}
