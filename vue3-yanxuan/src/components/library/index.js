import AppBanner from './AppBanner.vue'


export default {
    install(app) {
        // 全局注册组件
        app.component(AppBanner.name, AppBanner);
      
    }
}