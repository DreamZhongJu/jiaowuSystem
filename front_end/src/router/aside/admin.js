export const Info = {
  
  staticHandle: [
    {
      title: "主页",
      path: "/admin/index",
    },
    {
      title: "用户管理",
      path: '/admin/usermanage'
    },
    {
      title: "课程管理",
      path: '/admin/coursemanage'
    },
    {
      title: "专业管理",
      path: '/admin/majormanage'
    }
  ],
  
  openalHandle: [
    {
      title: "个人中心",
      contain:
        [
          {title: '个人信息', path: '/admin/profile'},
          { title: '修改密码', path: '/admin/updatepwd'}
        ],
    }
  ]
}
