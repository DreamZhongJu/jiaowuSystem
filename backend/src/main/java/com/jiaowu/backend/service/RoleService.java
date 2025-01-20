package com.jiaowu.backend.service;

import com.jiaowu.backend.pojo.Role;
import com.jiaowu.backend.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleService implements IRoleService {
    @Autowired
    RoleRepository roleRepository;

    @Override
    public Role getRole(Integer roleId) {
        return roleRepository.findById(roleId).orElseThrow(() -> {
            throw new IllegalArgumentException("用户不存在，参数异常");
        });
    }
}
