export const Info = {
  staticHandle: [
    {
      title: "主页",
      path: "/teacher/index",
    },
    {
    title: "课程管理",
    path: "/teacher/course"
    },
    {
    title: "成绩统计",
    path: "/teacher/countscore"
    }
  ],
  openalHandle: [
    {
      title: "个人中心",
      contain: [
        { title: '个人信息', path: '/teacher/profile' },
        { title: '修改密码', path: '/teacher/updatepwd' }
      ]
    }
  ]
}
