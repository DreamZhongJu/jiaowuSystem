package com.jiaowu.backend.service;

import com.jiaowu.backend.pojo.User;
import com.jiaowu.backend.pojo.dto.UserDto;

import java.util.List;
import java.util.Map;

public interface IUserService {
    /**
     * 插入用户
     *
     * @param user
     * @return
     */
    User add(UserDto user);

    /**
     * 查询用户
     * @param userId
     * @return
     */
    User getUser(String userId);

    /**
     * 修改用户
     * @param userNum
     * @param userDto
     * @return
     */
    User edit(String userNum, UserDto userDto);

    void delete(Integer userId);

    List<User> getAll();

    /**
     * 用户登录
     * @param user
     */
    Map<String, Object> login(UserDto user);
}
