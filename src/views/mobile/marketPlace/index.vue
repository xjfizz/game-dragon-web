

<template>
  <div class="main">
    <div class="main-head">
      <Header :headIndex="1"></Header>
    </div>
    <div class="mian-container">
      <div class="mian-container-left">
        <left></left>
      </div>
      <div class="mian-container-right">
          <right></right>
      </div>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from "vue";
import { useRouter } from "vue-router";
// import Header from "@/components/Header";
import Header from "@/components/HeaderMarketPlace";
import left from "./components/left.vue";
import right from "./components/right.vue";
import Bottom from "@/components/Bottom";

export default {
  name: "marketPlace",
  components: {
    Header,
    left,
    right,
    Bottom
  },
  setup() {
    const router = useRouter();
    const state = reactive({});
    onMounted(() => {});

    const goToDetail = (item) => {
      router.push({ path: `/product/${item.goodsId}` });
    };

    const tips = () => {};

    return {
      ...toRefs(state),
      goToDetail,
      tips,
    };
  },
};
</script>

<style lang="less" scoped >
.main {
  // height: 100%;
  .main-head {
    height: 80px;
    background: #050303;
  }
  .mian-container {
    color: #ffffff;
    background-color: #282523;
   //  height: 988px;
    min-height: 988px;
    display: flex;
    // padding: 38px 24px;
    .mian-container-left {
      // width: 20%;
     flex: 4;
      min-height: 100%;
      background: #282423;
      box-shadow: 1px 0px 0px 0px rgba(255, 255, 255, 0.12);
      padding: 38px 24px;
      border-right: 1px solid rgba(255, 255, 255, 0.12);
    }
    .mian-container-right{
      // width: 100%;
        // width: 80%;
      flex: 20;
       height: 100%;
       min-height: 100%;
       padding: 38px 24px;
       background: #282423;
      }
  }
}
</style>