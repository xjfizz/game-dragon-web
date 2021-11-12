<template>
  <div class="my-dragon-detail">
    <Header :headIndex="3"></Header>
    <div class="main-content">
      <detail1></detail1>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from "vue";
import { useRouter } from "vue-router";
import Header from "@/components/HeaderMarketPlace";

import common from "@/utils/common";

import detail1 from "./components/detail/detail1.vue";
import detail2 from "./components/detail/detail2.vue";

export default {
  name: "myDragonDetail",
  components: {
    Header,
    detail1,
    detail2,
  },
  setup() {
    const router = useRouter();
    const state = reactive({});

    // const { myMainlandState } = myMainland();

    onMounted(() => {
      common.goTopScroll();
     // init();
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="less" scoped >
.my-dragon-detail {
  width: 100%;
  height: 100vh;
  background: #282523;
  .main-content {
    display: flex;
    // padding-top: 24px;
    // height: 100%;
    width: 100%;
    position: absolute;
    top: 80px;
    bottom: 0px;
    left: 0px;
    display: flex;
    justify-content: center;
  }
  .create-selete-img {
    // visibility: hidden;
    position: absolute;
    z-index: -10000;
    top: -2000px;
    left: 0;
  }
}
@keyframes eggMove {
  from {
    margin-top: -10px;
  }
  to {
    margin-top: -40px;
  }
}
@-webkit-keyframes eggMove {
  from {
    margin-top: -10px;
  }
  to {
    margin-top: -40px;
  }
}
</style>