# **概述**

本项目是一个基于 **达梦数据库 (DM Database)**、**Spring Boot** 和 **Vue 3** 技术栈开发的教务管理系统。旨在为高校或教育机构提供一套高效、实用的教务管理解决方案，涵盖从用户登录到各类教务功能的全流程管理。本项目不仅实现了基本功能，还针对性能、用户体验和代码结构进行了优化，具有较强的可扩展性和实际应用价值。

---

# **功能介绍**

- **用户登录与注册**  
  提供安全、高效的登录注册功能，支持用户唯一性校验，密码加密存储，保障用户数据安全。

- **页面 Token 存储与鉴权**  
  使用 JWT 技术进行用户身份验证，支持前端页面的 `Token` 保存和过期处理，确保用户访问权限控制。

- **角色管理**  
  支持按角色分配权限（管理员、教师、学生），为不同用户提供不同的操作界面和功能模块。

- **课程管理**  
  实现课程的增删改查功能，支持课程安排、教师分配及学生选课等操作。

- **成绩管理**  
  学生端可查看个人成绩，教师端可录入、修改学生成绩，并支持成绩统计和导出功能。

- **个人信息管理**  
  用户可以自主修改个人信息及密码，保障用户隐私数据的安全性和可维护性。

- **数据统计与报表生成**  
  支持对学生成绩、课程安排等数据进行统计分析，并生成可视化报表，方便管理人员决策。

- **系统配置管理**  
  管理员可对系统的基础信息（如专业、年级、班级等）进行配置，确保系统的灵活性与扩展性。

---


# 文件树

## 前端

```
C:.
├─assets 网页图片以及样式
│ ├─css 样式文件 (全局和模块化 CSS)
│ ├─img 图片资源 (如 logo、背景图等)
│ ├─js 公共的 JavaScript 工具函数
│ └─lib 第三方库
│ └─iconfont 图标字体库
├─components vue组件
│ ├─common 公共组件 (如按钮、弹窗等)
│ ├─header_nav 顶部导航条组件
│ ├─login 登录页相关组件
│ ├─main_content 主内容区组件
│ │ ├─admin 管理员相关功能组件
│ │ ├─home 首页相关组件
│ │ ├─profile 用户个人信息相关组件
│ │ ├─student 学生功能相关组件
│ │ └─teacher 教师功能相关组件
│ └─side_nav 侧边栏导航组件
├─network 网络请求模块 (封装 axios 请求)
├─router 路由
│ └─aside 路由侧边栏配置
├─store Vuex 状态管理
└─views 页面视图 (对应具体路由页面)

```

## 后端
```
C:.
├── src
├── main
│ ├── java
│ │ └── com
│ │ └── jiaowu
│ │ └── backend
│ │ ├── controller 控制层 (处理请求并返回响应)
│ │ ├── exception 异常统一处理 (全局异常捕获)
│ │ ├── pojo 传输以及存储数据结构
│ │ │ └── dto 数据传输对象 (用于前后端交互)
│ │ ├── repository 数据访问层 (操作数据库)
│ │ ├── security 安全模块 (如生成秘钥、用户验证)
│ │ └── service 业务逻辑层 (核心功能实现)
│ └── resources 配置文件及模板文件
│ ├── static 静态资源 (如前端打包文件)
│ └── templates 页面模板 (如 Thymeleaf 模板)
└── test
└── java
└── com
└── jiaowu
└── backend 单元测试与集成测试

```

# **鸣谢**

本项目以他人的项目（[成绩管理系统](https://gitee.com/DeitySpark/score-management-system)）为基础，进行了重大功能改进和优化，在代码结构、功能模块以及用户体验上都进行了全面升级。在此特别感谢原作者的开源贡献，为本项目的开发提供了重要参考与帮助。