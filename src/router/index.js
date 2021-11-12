import { createRouter, createWebHashHistory } from 'vue-router'
// import { setSession, getSession } from "@/utils/auth.js";


// const setDeviceType = () => {
//   const deviceType = _isMobile() ? "mobile" : "pc";
//   setSession('deviceType',deviceType)
//   console.log('deviceType-route1',deviceType)
//   return deviceType
// };

// const _isMobile = () => {

//   let flag = document.documentElement.clientWidth <= 1200
//   return flag;
// };

// setDeviceType()

let deviceType = 'pc' //  getSession('deviceType') ? getSession('deviceType') : setDeviceType() // getSession('deviceType') // 'mobile' // mobile pc
console.log('deviceType-route2', deviceType)
const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(`@/views/${deviceType}/home/index.vue`),  // resolve => require(['@/views/pc/home/index.vue'],resolve ), // import(/* webpackChunkName: "home" */),
      meta: {
        keepAlive: 1,
        keepAlive: false
      }
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: () => import(`@/views/${deviceType}/aboutUs/index.vue`), // require( '@/views/pc/aboutUs/index.vue'), // import(/* webpackChunkName: "home" */ `@/views/${deviceType}/aboutUs/index.vue`),
      meta: {
        index: 1
      }
    },
    {
      path: '/dragonSignUp',
      name: 'dragonSignUp',
      component: () => import(`@/views/${deviceType}/dragonSignUp/index.vue`), // require( '@/views/pc/aboutUs/index.vue'), // import(/* webpackChunkName: "home" */ `@/views/${deviceType}/aboutUs/index.vue`),
      meta: {
        index: 1
      }
    },
    {
      path: '/dragonSignUpRank',
      name: 'dragonSignUpRank',
      component: () => import(`@/views/${deviceType}/dragonSignUp/rank.vue`), // require( '@/views/pc/aboutUs/index.vue'), // import(/* webpackChunkName: "home" */ `@/views/${deviceType}/aboutUs/index.vue`),
      meta: {
        index: 1
      }
    },
    {
      path: '/dragonSignUpResult',
      name: 'dragonSignUpResult',
      component: () => import(`@/views/${deviceType}/dragonSignUp/rankResult.vue`), // require( '@/views/pc/aboutUs/index.vue'), // import(/* webpackChunkName: "home" */ `@/views/${deviceType}/aboutUs/index.vue`),
      meta: {
        index: 1
      }
    },
    {
      path: '/dmp',
      name: 'dmp',
      component: () => import(`@/views/${deviceType}/dmp/index.vue`), // require( '@/views/pc/aboutUs/index.vue'), // import(/* webpackChunkName: "home" */ `@/views/${deviceType}/aboutUs/index.vue`),
      meta: {
        index: 1
      }
    },
    {
      path: '/dms',
      name: 'dms',
      component: () => import(`@/views/${deviceType}/dms/index.vue`), // require( '@/views/pc/aboutUs/index.vue'), // import(/* webpackChunkName: "home" */ `@/views/${deviceType}/aboutUs/index.vue`),
      meta: {
        index: 1
      }
    },
    {
      path: '/activity',
      name: 'activity',
      component: () => import(`@/views/${deviceType}/activity/index.vue`), // require( '@/views/pc/activity/index.vue'), // import(/* webpackChunkName: "about" */ `@/views/${deviceType}/activity/index.vue`),
      meta: {
        index: 1
      }
    },
    {
      path: '/activityBefore',
      name: 'activityBefore',
      component: () => import(`@/views/${deviceType}/activity/activityBefore.vue`), // require( '@/views/pc/activity/index.vue'), // import(/* webpackChunkName: "about" */ `@/views/${deviceType}/activity/index.vue`),
      meta: {
        index: 1
      }
    },
    {
      path: '/activityStart',
      name: 'activityStart',
      component: () => import(`@/views/${deviceType}/activity/activityStart.vue`), // require( '@/views/pc/activity/index.vue'), // import(/* webpackChunkName: "about" */ `@/views/${deviceType}/activity/index.vue`),
      meta: {
        index: 1
      }
    },
    {
      path: '/activityReceiveMesage',
      name: 'activityReceiveMesage',
      component: () => import(`@/views/${deviceType}/activity/activityReceiveMesage.vue`), // require( '@/views/pc/activity/index.vue'), // import(/* webpackChunkName: "about" */ `@/views/${deviceType}/activity/index.vue`),
      meta: {
        index: 1
      }
    },
    {
      path: '/marketPlace',
      name: 'marketPlace',
      component: () => import(`@/views/${deviceType}/marketPlace/index.vue`),  //  require( '@/views/pc/marketPlace/index.vue'), //  import(/* webpackChunkName: "home" */ `@/views/${deviceType}/marketPlace/index.vue`),
      meta: {
        index: 1
      }
    },
    {
      path: '/marketPlace/detail/:id',
      name: 'marketPlaceDetail',
      component: () => import(`@/views/${deviceType}/marketPlace/detail.vue`),  //  require( '@/views/pc/marketPlace/index.vue'), //  import(/* webpackChunkName: "home" */ `@/views/${deviceType}/marketPlace/index.vue`),
      meta: {
        index: 1
      },
    },
    {
      path: '/lbp',
      name: 'lbp',
      component: () => import(`@/views/${deviceType}/lbp/index.vue`),  //  require( '@/views/pc/marketPlace/index.vue'), //  import(/* webpackChunkName: "home" */ `@/views/${deviceType}/marketPlace/index.vue`),
      meta: {
        index: 1
      }
    },
    {
      path: '/pledge',
      name: 'pledge',
      component: () => import(`@/views/${deviceType}/pledge/index.vue`),  //  require( '@/views/pc/marketPlace/index.vue'), //  import(/* webpackChunkName: "home" */ `@/views/${deviceType}/marketPlace/index.vue`),
      meta: {
        index: 1
      }
    },
    {
      path: '/myMainland',
      name: 'myMainland',
      component: () => import(`@/views/${deviceType}/myMainland/index.vue`),  //  require( '@/views/pc/marketPlace/index.vue'), //  import(/* webpackChunkName: "home" */ `@/views/${deviceType}/marketPlace/index.vue`),
      meta: {
        index: 1
      },
      children: [
        {
          path: '/myMainland/myDragon',
          name: 'myDragon',
          component: () => import(`@/views/${deviceType}/myMainland/myDragon.vue`),  //  require( '@/views/pc/marketPlace/index.vue'), //  import(/* webpackChunkName: "home" */ `@/views/${deviceType}/marketPlace/index.vue`),
          meta: {
            index: 1
          },
        },
        {
          path: '/myMainland/blindBox',
          name: 'blindBox',
          component: () => import(`@/views/${deviceType}/myMainland/blindBox.vue`),  //  require( '@/views/pc/marketPlace/index.vue'), //  import(/* webpackChunkName: "home" */ `@/views/${deviceType}/marketPlace/index.vue`),
          meta: {
            index: 1
          },
        },
        {
          path: '/myMainland/miningCamp',
          name: 'miningCamp',
          component: () => import(`@/views/${deviceType}/myMainland/miningCamp.vue`),  //  require( '@/views/pc/marketPlace/index.vue'), //  import(/* webpackChunkName: "home" */ `@/views/${deviceType}/marketPlace/index.vue`),
          meta: {
            index: 1
          },
        }
      ]
    },

    {
      path: '/myMainland/myDragonDetail/:id',
      name: 'myDragonDetail',
      component: () => import(`@/views/${deviceType}/myMainland/myDragonDetail/index.vue`),  //  require( '@/views/pc/marketPlace/index.vue'), //  import(/* webpackChunkName: "home" */ `@/views/${deviceType}/marketPlace/index.vue`),
      meta: {
        index: 1
      },
    },
    {
      path: '/myMainland2',
      name: 'myMainland2',
      component: () => import(`@/views/${deviceType}/myMainland/index2.vue`),  //  require( '@/views/pc/marketPlace/index.vue'), //  import(/* webpackChunkName: "home" */ `@/views/${deviceType}/marketPlace/index.vue`),
      meta: {
        index: 1
      }
    },
    {
      path: '/dragon',
      name: 'dragon',
      component: () => import(`@/views/${deviceType}/dragon/index.vue`),  // require( '@/views/pc/dragon/index.vue'), // import(/* webpackChunkName: "home" */ `@/views/${deviceType}/dragon/index.vue`),
      meta: {
        index: 1
      }
    },
    // {
    //   path: '/dragonTest',
    //   name: 'dragonTest',
    //   component: () =>  import(`@/views/${deviceType}/dragon/dragonTest.vue`),  // require( '@/views/pc/dragon/dragonTest.vue'), // import(/* webpackChunkName: "home" */ `@/views/${deviceType}/dragon/dragonTest.vue`),
    //   meta: {
    //     index: 1
    //   }
    // },
    {
      path: '/login',
      name: 'login',
      component: () => import(`@/views/${deviceType}/login/index.vue`), // require( '@/views/pc/login/index.vue'), //  import(/* webpackChunkName: "login" */ `@/views/${deviceType}/login/index.vue`),
      meta: {
        index: 1
      }
    },

    {
      path: '/authLogin',
      name: 'authLogin',
      component: () => import(`@/views/${deviceType}/login/authLogin.vue`), // require( '@/views/pc/login/index.vue'), //  import(/* webpackChunkName: "login" */ `@/views/${deviceType}/login/index.vue`),
      meta: {
        index: 1
      }
    },
    {
      path: '/notAllowArea',
      name: 'notAllowArea',
      component: () => import(`@/views/${deviceType}/notAllowArea/index.vue`), // require( '@/views/pc/login/index.vue'), //  import(/* webpackChunkName: "login" */ `@/views/${deviceType}/login/index.vue`),
      meta: {
        index: 1
      }
    },

  ]
})

export default router