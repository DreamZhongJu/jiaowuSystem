package com.jiaowu.backend.repository;

import com.jiaowu.backend.pojo.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    // 根据 user_num 查找用户
    Optional<User> findByNum(String userNum);
}
