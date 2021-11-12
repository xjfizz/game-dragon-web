
<template>
  <div id="app">
    <router-view
      v-if="isRouterAlive"
      class="router-view"
      v-slot="{ Component }"
    >
      <keep-alive>
        <transition :name="transitionName">
          <component :is="Component" />
        </transition>
      </keep-alive>
      <!-- <transition :name="transitionName">
          <component :is="Component" v-if="!router.meta.keepAlive" />
        </transition> -->
    </router-view>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import { onMounted, reactive, toRefs, nextTick } from "vue";
import { useRouter, useRoute } from "vue-router";
import { setSession, getSession } from "@/utils/auth.js";
import { useStore } from "vuex";
export default {
  mounted() {
    document.getElementById("app").style.display = "block";
    setTimeout(() => {
      document.getElementById("appLoading").style.display = "none";
    }, 1000);
  },

  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const state = reactive({
      transitionName: "slide-left",
      isRouterAlive: true,
    });

    onMounted(async () => {
      // let isAllowArea = await store.dispatch("login/SET_AlLOW_AREA");
      // console.log(
      //   "------------startDragon-----------------------",
      //   isAllowArea
      // );
      // if (!isAllowArea) {
      //   return router.replace("/notAllowArea");
      // }
    });

    const firstShow = () => {
      document.getElementById("app").style.display = "block";
      document.getElementById("appLoading").style.display = "none";
    };

    router.beforeEach(async (to, from) => {
      console.log("to-------------", to);
      if (to.fullPath != "/notAllowArea") {
        console.log("store", store);
        if (!store.state.login.allowArea) {
          console.log("2222222222222222");
          await store.dispatch("login/SET_AlLOW_AREA");
        }

        console.log(
          "-------startDragon---------------",
          store.state.login.allowArea
        );
        if (store.state.login.allowArea == 2) {
          return router.replace("/notAllowArea");
        }
      }
      if (to.meta.index > from.meta.index) {
        state.transitionName = "slide-left"; // 向左滑动
      } else if (to.meta.index < from.meta.index) {
        // 由次级到主级
        state.transitionName = "slide-right";
      } else {
        state.transitionName = ""; // 同级无过渡效果
      }
    });

    return {
      ...toRefs(state),
      router,
    };
  },
};
</script>

<style lang="less">
html,
body {
  height: 100%;
  width: 100%;
  // overflow-x: hidden;
  // overflow-y: scroll;
}
#app {
  height: 100%;
  width: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

.router-view {
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: 0 auto;
  -webkit-overflow-scrolling: touch;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  height: 100%;
  will-change: transform;
  transition: all 500ms;
  position: absolute;
  backface-visibility: hidden;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.van-badge--fixed {
  z-index: 1000;
}
</style>
<style>
</style>
