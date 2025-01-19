import { createStore } from 'vuex'

export default createStore({
  state: {
    // 用户信息
    account: {
      token: 0,
      username: '111',
      user_id: 111,
      role:'teacher'
    },
    // 点击的侧边栏功能
    menuInfo: {
      title: '主页',
      path: '/index'
    },
    // 需要统计的课程
    countScoreCourse: ''
  },
  mutations: {
    setToken(state, payload) {
      state.account.token = payload.token
      state.account.username = payload.username
      state.account.user_id = payload.user_id
      state.account.role = payload.role
    },
    setMenuActive(state, payload) {
      state.menuInfo.title = payload.title
      state.menuInfo.path = payload.path
    },
    setCountScore(state, payload) {
      state.countScoreCourse = payload
    }
  },
  actions: {
  
  },
  modules: {
  
  }
})
