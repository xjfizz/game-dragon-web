<template>
  <div class="page-main">
    <div class="page-left" @click="leftPage">
      <img src="../../assets/imgs/page/left.png" alt="" />
    </div>
    <div class="page-text">Page</div>
    <div class="page-input">
      <el-input
        v-model="pageInfo.currentPage"
        :min="1"
        :max="pageInfo.totalPages"
        type="number"
        @keyup.enter="search"
      ></el-input>
    </div>
    <div class="page-size">of {{ pageInfo.totalPages }}</div>
    <div class="page-right" @click="rightPage">
      <img src="../../assets/imgs/page/right.png" alt="" />
    </div>
  </div>
</template>

    <script>
import { reactive, toRefs, onMounted } from "vue";
import pageHandle from "@/components/page/use/index.js";
export default {
  setup(props, context) {
    console.log("page---------props", props);
    const state = reactive({});
    const { initPage, pageState, leftPage, rightPage, search } =
      pageHandle(context);

    return {
      ...toRefs(state),
      ...toRefs(pageState),
      initPage,
      leftPage,
      rightPage,
      search,
    };
  },
};
</script>

<style scoped lang="less">
.page-main {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 21px;
  margin-bottom: 21px;
  .page-left {
    width: 58px;
    height: 34px;
    background: #282523;
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    img {
      width: 18px;
      height: 18px;
    }
  }
  .page-text {
    margin-left: 8px;
    font-size: 14px;
    font-family: GothamRounded-Book, GothamRounded;
    font-weight: normal;
    color: #ffffff;
    line-height: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .page-input {
    margin-left: 4px;
    width: 60px;
    height: 34px;
    background: #1a1716;
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    display: flex;
    justify-content: center;
    align-items: center;

    /deep/ input::-webkit-input-placeholder {
      opacity: 0.47;
      color: #ffffff;
      font-size: 14px;
    }
    /deep/ input::-moz-input-placeholder {
      opacity: 0.47;
      color: #ffffff;
      font-size: 14px;
    }
    /deep/ input::-ms-input-placeholder {
      opacity: 0.47;
      color: #ffffff;
      font-size: 14px;
    }
    /deep/ .el-input__inner {
      // width: 271px;
      background: transparent;
      border: none;
      border-radius: 48px;
      font-size: 14px;
      opacity: 0.68;
      color: #ffffff;
      padding: 0 0 0 10px;
    }
  }
  .page-size {
    margin-left: 4px;
    font-size: 14px;
    font-family: GothamRounded-Book, GothamRounded;
    font-weight: normal;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .page-right {
    margin-left: 8px;
    width: 58px;
    height: 34px;
    background: #282523;
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    img {
      width: 18px;
      height: 18px;
    }
  }
}
</style>