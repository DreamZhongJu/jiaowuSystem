import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'

const app = createApp(App);

// 配置全局错误处理器
app.config.errorHandler = (err, vm, info) => {
    console.error('Error:', err); // 打印错误信息
    console.error('Component Info:', info); // 打印出错的组件信息
    if (vm) {
        console.error('Component Instance:', vm); // 打印组件实例
    }
};

// 挂载应用
app.use(router)
    .use(store)
    .mount('#app');