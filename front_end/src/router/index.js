import { createRouter, createWebHistory } from 'vue-router'

// 路由配置
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/LoginView'),
    meta: {
      isKeepAlive: false,
      requiresAuth: false // 登录页面不需要鉴权
    }
  },
  // 学生端
  {
    path: '/student',
    name: 'Student',
    component: () => import(/* webpackChunkName: "index" */ '@/views/StudentView'),
    meta: {
      isKeepAlive: true,
      requiresAuth: true, // 需要鉴权
      role: 2 // 学生角色
    },
    children: [
      {
        path: 'index',
        name: 'StudentIndex',
        components: {
          stuTable: () => import(/* webpackChunkName: "score" */ '@/components/main_content/common/welcome.vue')
        }
      },
      {
        path: 'score',
        name: 'StuScoreManage',
        components: {
          stuTable: () => import(/* webpackChunkName: "score" */ '@/components/main_content/student/ScoreManager.vue')
        }
      },
      {
        path: 'profile',
        name: 'StuProfile',
        components: {
          stuTable: () => import(/* webpackChunkName: "score" */ '@/components/main_content/student/StuProfile.vue')
        }
      },
      {
        path: 'updatepwd',
        name: 'StuUpdatePwd',
        components: {
          stuTable: () => import(/* webpackChunkName: "score" */ '@/components/main_content/student/UpdatePwd.vue')
        }
      }
    ]
  },
  // 教师端
  {
    path: '/teacher',
    name: 'TeacherView',
    component: () => import('@/views/TeacherView'),
    meta: {
      requiresAuth: true, // 需要鉴权
      role: 1 // 教师角色
    },
    redirect: '/teacher/index', // 默认重定向到 /teacher/index
    children: [
      {
        path: 'index',
        name: 'TeacherIndex',
        components: {
          teaTable: () => import(/* webpackChunkName: "score" */ '@/components/main_content/common/welcome.vue')
        }
      },
      {
        path: 'course',
        name: 'ScoreManage',
        components: {
          teaTable: () => import(/* webpackChunkName: "score" */ '@/components/main_content/common/welcome.vue')
        }
      },
      {
        path: 'countscore',
        name: 'CountScore',
        components: {
          teaTable: () => import(/* webpackChunkName: "score" */ '@/components/main_content/teacher/CountScore.vue')
        }
      },
      {
        path: 'profile',
        name: 'TeaProfile',
        components: {
          teaTable: () => import(/* webpackChunkName: "score" */ '@/components/main_content/teacher/TeaProfile.vue')
        }
      },
      {
        path: 'updatepwd',
        name: 'TeaUpdatePwd',
        components: {
          teaTable: () => import(/* webpackChunkName: "score" */ '@/components/main_content/teacher/TeaUpdatePwd.vue')
        }
      }
    ]
  },
  // 管理员端
  {
    path: '/admin',
    name: 'AdminView',
    component: () => import(/* webpackChunkName: "notfound" */ '@/views/AdminView'),
    meta: {
      requiresAuth: true, // 需要鉴权
      role: 0 // 管理员角色
    },
    children: [
      {
        path: 'index',
        name: 'AdminIndex',
        components: {
          adminTable: () => import(/* webpackChunkName: "score" */ '@/components/main_content/common/welcome.vue')
        }
      },
      {
        path: 'stumanage',
        name: 'StudentManage',
        components: {
          adminTable: () => import(/* webpackChunkName: "score" */ '@/components/main_content/admin/StudentManage.vue')
        }
      },
      {
        path: 'teamanage',
        name: 'TeacherManage',
        components: {
          adminTable: () => import(/* webpackChunkName: "score" */ '@/components/main_content/admin/TeacherManage.vue')
        }
      },
      {
        path: 'coursemanage',
        name: 'CourseManage',
        components: {
          adminTable: () => import(/* webpackChunkName: "score" */ '@/components/main_content/admin/CourseManage.vue')
        }
      },
      {
        path: 'majormanage',
        name: 'MajorManage',
        components: {
          adminTable: () => import(/* webpackChunkName: "score" */ '@/components/main_content/admin/MajorManage.vue')
        }
      },
      {
        path: 'account/:role',
        name: 'StuAccount',
        components: {
          adminTable: () => import(/* webpackChunkName: "score" */ '@/components/main_content/admin/AccountManage.vue')
        }
      },
      {
        path: 'profile',
        name: 'AdminProfile',
        components: {
          adminTable: () => import(/* webpackChunkName: "score" */ '@/components/main_content/admin/AdminProfile.vue')
        }
      },
      {
        path: 'updatepwd',
        name: 'AdminUpdatePwd',
        components: {
          adminTable: () => import(/* webpackChunkName: "score" */ '@/components/main_content/admin/AdminUpdatePwd.vue')
        }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*', // 匹配所有未定义路径
    name: 'NotFound',
    component: () => import('@/views/NotFoundView.vue'), // 404 页面
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('authToken'); // 从 sessionStorage 获取 Token
  const role = parseInt(sessionStorage.getItem('userRole'), 10); // 从 sessionStorage 获取角色

  if (to.meta.requiresAuth) {
    if (!token) {
      // 如果没有 Token，跳转到登录页面
      return next({ path: '/login', query: { redirect: to.fullPath } });
    }

    if (to.meta.role !== undefined && to.meta.role !== role) {
      // 如果角色不匹配，跳转到没有权限页面或首页
      return next({ path: '/unauthorized' }); // 使用明确的 "无权限" 路径
    }
  }
  // 放行
  next();
});

export default router;