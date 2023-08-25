import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../views/index';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        title: '首页',
      },
      component: IndexPage
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '';
  next();
  // // 拦截校验
  // if (!user && to.path !== '/login') {
  //     next('/login');
  // } else if (to.meta.permission) {
  //     user.permission === to.meta.permission ? next() : message.alert('没有权限');
  // } else {
  //     next();
  // }
})

export default router;
