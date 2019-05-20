// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 引入Vant 开始
import Vant from 'vant';
import 'vant/lib/index.css';

// 引入公共样式
import './assets/css/common.css';
import './assets/iconfont/iconfont.css';

// 全局组件开始
import ListItem from './components/common/ListItem';
import CellList from './components/common/CellList';
Vue.component(ListItem.name,ListItem);
Vue.component(CellList.name,CellList);


Vue.use(Vant);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
