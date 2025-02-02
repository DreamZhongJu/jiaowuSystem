package com.jiaowu.backend.service;

import com.jiaowu.backend.pojo.User;
import com.jiaowu.backend.pojo.dto.UserDto;
import com.jiaowu.backend.pojo.dto.UserPasswordDto;
import com.jiaowu.backend.repository.UserRepository;
import com.jiaowu.backend.security.JwtKeyProvider;
import io.jsonwebtoken.Jwts;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.security.Key;

@Service // spring bean
public class UserService implements IUserService {
    @Autowired
    UserRepository userRepository;
    @Override
    public User add(UserDto user) {

        User userPojo = new User();

        BeanUtils.copyProperties(user, userPojo);

        return userRepository.save(userPojo);
    }

    @Override
    public User getUser(String userId) {
        return userRepository.findByNum(userId).orElseThrow(() -> {
            throw new IllegalArgumentException("用户不存在，参数异常");
        });
    }

    @Override
    public User edit(String userNum, UserDto userDto) {
        // 1. 查找用户是否存在
        Optional<User> optionalUser = userRepository.findByNum(userNum);
        if (optionalUser.isEmpty()) {
            throw new EntityNotFoundException("用户未找到，ID: " + userNum);
        }

        User existingUser = optionalUser.get();

        // 2. 更新用户信息（只更新非空字段）
        if (userDto.getName() != null) {
            existingUser.setName(userDto.getName());
        }
        if (userDto.getEmail() != null) {
            existingUser.setEmail(userDto.getEmail());
        }
        if(userDto.getPassword() != null) {
            existingUser.setPassword(userDto.getPassword());
        }
        // 3. 保存更新后的用户信息
        return userRepository.save(existingUser);
    }

    @Override
    public void updatePassword(String userId, UserPasswordDto userDto) throws Exception {
        // 1. 查找用户是否存在
        Optional<User> optionalUser = userRepository.findByNum(userId);
        if (optionalUser.isEmpty()) {
            throw new EntityNotFoundException("用户未找到，ID: " + userId);
        }

        User existingUser = optionalUser.get();
        try{
            if(existingUser.getPassword().equals(userDto.getOldPassword())) {
                existingUser.setPassword(userDto.getNewPassword());
                userRepository.save(existingUser);
            }
            else{
                throw new Exception("旧密码错误");
            }
        }
        catch(Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public void delete(Integer userId) {
        userRepository.deleteById(userId);
    }

    @Override
    public List<User> getAll() {
        return (List<User>)userRepository.findAll();
    }

    private final Key key = JwtKeyProvider.getKey();

    @Override
    public Map<String, Object> login(UserDto user) {
        // 验证用户名和密码
        User foundUser = userRepository.findByNum(user.getNum())
                .orElseThrow(() -> new RuntimeException("用户不存在"));

        if (!foundUser.getPassword().equals(user.getPassword())) {
            throw new RuntimeException("用户名或密码错误");
        }

        // 生成 JWT
        String token = Jwts.builder()
                .setSubject(foundUser.getNum()) // 用户标识
                .claim("role", foundUser.getRole()) // 添加自定义的角色信息
                .setIssuedAt(new Date()) // 签发时间
                .setExpiration(new Date(System.currentTimeMillis() + 86400000)) // 过期时间（1天）
                .signWith(key) // 签名
                .compact();

        // 返回数据
        return Map.of(
                "userNum", foundUser.getNum(),
                "userName", foundUser.getName(),
                "token", token,
                "role", foundUser.getRole()
        );
    }
}
