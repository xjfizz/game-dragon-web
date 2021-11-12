<template>
  <div class="my-mainland-main">
    <Header :headIndex="3"></Header>
    <div class="main-content">
      <div class="content-left">
        <left></left>
      </div>
      <div class="content-right">
        <right></right>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from "vue";
import { useRouter } from "vue-router";
import Header from "@/components/HeaderMarketPlace";
import left from "./components/left/index.vue";
import right from "./components/right/index.vue";

import common from "@/utils/common";
import myMainland from "@/views/pc/myMainland/use/myMainland";

export default {
  name: "marketPlace",
  components: {
    Header,
    left,
    right,
  },
  setup() {
    const router = useRouter();
    const state = reactive({});
    const { myMainlandState } = myMainland();
    onMounted(() => {
      common.goTopScroll();
    });

    return {
      ...toRefs(state),
      ...toRefs(myMainlandState),
    };
  },
};
</script>

<style lang="less" scoped >
.my-mainland-main {
  background-color: #282523;
  height: calc(100% -114px);
  .main-content {
    background-color: #282523;
    display: flex;
    // padding-top: 24px;
    display: flex;
    flex-direction: row;
    height: 100%;
    // width: 100%;
    // position: absolute;
    // top: 80px;
    // bottom: 0px;
    // left: 0px;
    .content-left {
      background: #282423;
      padding-top: 24px;
      width: 260px;
      height: 100%;
      overflow: auto;
      // background-color: #ff5400;
      border-right: 1px solid rgba(255, 255, 255, 0.12);
    }
    .content-right {
      background: #282423;
      padding-top: 24px;
      width: 1660px;
      height: 100%;
      overflow: auto;
      // background-color: #928f8d;
    }
  }
  //   :root ::-webkit-scrollbar {
  //   width: 0px;
  //   /* height: 100px; */
  // }

  // :root ::-webkit-scrollbar-thumb {
  //   background-color: #3c1103;
  //   border-radius: 3px;
  // }
}
</style>

<style>
</style>