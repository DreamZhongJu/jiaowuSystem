export const Info = {
  
  staticHandle: [
    {
      title: "主页",
      path: "/admin/index",
    },
    {
      title: "学生管理",
      path: '/admin/stumanage'
    },
    {
      title: "教师管理",
      path: '/admin/teamanage'
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
      title: "账号管理",
      contain: [
        { title: '学生账号', path: '/admin/account/student' },
        { title: '教师账号', path: '/admin/account/teacher' },
        { title: '管理员账号', path: '/admin/account/admin' }
      ]
    },
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
