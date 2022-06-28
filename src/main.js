// 轮播图逻辑
// console.log('实现轮播图的业务逻辑')
// // tab栏切换的逻辑
// console.log('实现tabs标签页的逻辑')
import './banner.js';
import './tabs.js'
// import './styles/index.css'
import './styles/index.less';
import $ from 'jquery';
// 引入字体图标文件
import './assets/fonts/iconfont.css'
// $('#swiper').css('background-color', 'red')
// import './app.vue'
import { createApp } from 'vue'
import App from './app.vue'

const app = createApp(App)

Vue.mount('#app')

// class App {
//   static a = 123
// }

// console.log(App.a)

// 引入图片-使用
import imgUrl from './assets/1.gif'
const theImg = document.createElement("img")
theImg.src = imgUrl
document.body.appendChild(theImg)
