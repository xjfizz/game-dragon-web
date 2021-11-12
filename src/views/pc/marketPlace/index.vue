

<template>
  <noData v-if="$process_env === 'production'"></noData>
  <div class="marketPlace-main">
    <Header :headIndex="1"></Header>
    <div class="mian-container">
      <div class="mian-container-left">
        <left></left>
      </div>
      <div class="mian-container-right">
        <right></right>
      </div>
    </div>
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
import common from "@/utils/common";
import noData from "@/components/modalBox/no-data";

export default {
  name: "marketPlace",
  components: {
    Header,
    left,
    right,
    Bottom,
    noData,
  },
  setup() {
    const router = useRouter();
    const state = reactive({});
    onMounted(() => {
      common.goTopScroll();
    });

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
.marketPlace-main {
  background-color: #282523;
  height: calc(100% - 156px);
  //  min-height: 100%;

  .mian-container {
    color: #ffffff;
    background-color: #282523;
    display: flex;
    flex-direction: row;
    height: 100%;
    .mian-container-left {
      // width: 20%;
      flex: 4;
      height: 100%;
      overflow: auto;
      background: #282423;
      box-shadow: 1px 0px 0px 0px rgba(255, 255, 255, 0.12);
      padding: 38px 24px;
      border-right: 1px solid rgba(255, 255, 255, 0.12);
    }
    .mian-container-right {
      flex: 20;
      padding: 38px 0 38px 0px;
      background: #282423;
      height: 100%;
      overflow: auto;
      // min-height: 700px;
      // overflow-y: scroll;
    }
  }
  .main-bottom {
    padding-top: 50px;
    background-color: #282523;
  }
}
</style>