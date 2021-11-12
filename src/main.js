import { createApp } from 'vue'
import { ActionBar, ActionBarIcon, ActionBarButton, Divider, Popup, Overlay, Loading, Dialog, ContactCard, Form, AddressEdit, AddressList, Field, CellGroup, Cell, SwipeCell, Icon, Stepper, Card, Checkbox, CheckboxGroup, Button, Swipe, SwipeItem, PullRefresh, List, Tab, Tabs, SubmitBar, Toast, Skeleton, Slider } from 'vant'
import App from './App.vue'
import store from './store'
import router from './router'
// import 'lib-flexible/flexible'
import 'amfe-flexible'

/* 
适配方案-amfe-flexible 包更改 setRemUnit()
  if (docEl.clientWidth >= 1200) {
      var rem = docEl.clientWidth / 10
      docEl.style.fontSize = rem + 'px'
    } else {
      var rem = docEl.clientWidth / 3.90625
      docEl.style.fontSize = rem + 'px'
    }


*/
import 'vant/lib/index.css'; // 全局引入样式
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import '@/common/css/font/font.less'; // 字体文件
import '@/assets/style/less/variables.less' // 全局 less
import anime from 'animejs'
// import html2canvas from 'html2canvas';
import videoPlayer from 'vue-video-player/src'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
// import * as LottiePlayer from '@lottiefiles/lottie-player'
// import Vconsole from 'vconsole';
import API from '@/api/index'
// import Web3 from 'web3'
// import getWeb3 from '@/utils/metaMask/web3.js'
import { ElMessage } from 'element-plus';
import autoView from '@/utils/autoView'
import Moment from 'moment'
import i18n from './language/i18n'


// 监听客户端窗口
// window.addEventListener('resize', () => {
//   let timer;
//   if (timer) {
//     window.clearTimeout(timer);
//   }
//   timer = window.setTimeout(() => {
//     autoView()
//   }, 100)

// })




const app = createApp(App) // 创建实例

// 全局过滤器
app.config.globalProperties.$filters = {
  prefix(url) {
    if (url && url.startsWith('http')) {
      return url
    } else {
      url = `http://backend-api-01.newbee.ltd${url}`
      return url
    }
  }
}

app.config.globalProperties.$process_env = process.env.NODE_ENV

app.provide('API', API)
// app.provide('Web3',Web3)
app.provide('$message', ElMessage)
app.provide('$Moment', Moment)


app.use(ActionBarButton)
  .use(ActionBarIcon)
  .use(ActionBar)
  .use(Divider)
  .use(Popup)
  .use(Overlay)
  .use(Loading)
  .use(Dialog)
  .use(Toast)
  .use(ContactCard)
  .use(Form)
  .use(AddressEdit)
  .use(AddressList)
  .use(Field)
  .use(CellGroup)
  .use(Cell)
  .use(SwipeCell)
  .use(Icon)
  .use(Stepper)
  .use(Card)
  .use(Button)
  .use(Swipe)
  .use(SwipeItem)
  .use(PullRefresh)
  .use(List)
  .use(Tab)
  .use(Tabs)
  .use(SubmitBar)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Skeleton)
  .use(Slider)
  .use(ElementPlus)
  .use(anime)
  // .use(html2canvas)
  .use(videoPlayer)
  .use(i18n)
// .use(LottiePlayer)






app.use(router)
app.use(store)

app.mount('#app')