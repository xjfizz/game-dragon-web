<template>
  <div
    class="mining-camp-main"
    v-loading="loadingForm.loadingShow"
    :element-loading-text="loadingForm.loadingShowText"
    element-loading-spinner="el-icon-loading"
  >
    <div class="top">
      <top></top>
    </div>
    <div class="mining-camp-main-title">My staked</div>
    <div class="bottom">
      <div class="left">
        <left @initMiningCamp="initMiningCamp"></left>
      </div>
      <div class="right">
        <right @initMiningCamp="initMiningCamp"></right>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from "vue";
import { useRouter } from "vue-router";

import common from "@/utils/common";
import myMainland from "@/views/pc/myMainland/use/myMainland";
import top from "@/views/pc/myMainland/components/miningCamp/top.vue";
import left from "@/views/pc/myMainland/components/miningCamp/left.vue";
import right from "@/views/pc/myMainland/components/miningCamp/right.vue";
import miningCampIndexHandle from "@/views/pc/myMainland/use/miningCamp/index.js";
import miningCampLeftHandle from "@/views/pc/myMainland/use/miningCamp/left";
export default {
  name: "miningCamp",
  components: {
    top,
    left,
    right,
  },
  setup() {
    const router = useRouter();
    const state = reactive({});
    const { myMainlandState } = myMainland();
    const { initMiningCamp } = miningCampIndexHandle();
    const { miningCampLeftState } = miningCampLeftHandle();
    onMounted(() => {
      myMainlandState.leftItemSelected = 3;
      common.goTopScroll();
    });

    return {
      ...toRefs(state),
      ...toRefs(myMainlandState),
      ...toRefs(miningCampLeftState),
      initMiningCamp,
    };
  },
};
</script>

<style lang="less" scoped >
.mining-camp-main {
  //  margin: 32px 104px 0 104px;
  margin: 0px 104px 0 104px;
  // height:calc 700px;
  // min-height: 700px;
  // overflow-y: auto;
  .top {
    // background-color: #bdbdbd;
  }
  .mining-camp-main-title {
    margin-top: 20px;
    width: 103px;
    height: 21px;
    font-size: 20px;
    font-family: GothamRounded-Medium, GothamRounded;
    font-weight: 500;
    color: #ffffff;
    line-height: 21px;
  }
  .bottom {
    display: flex;
    align-items: flex-start;
    // margin-top: 41px;
    margin-top: 21px;

    .left {
    }
    .right {
      margin-left: 24px;
      // width: 100%;
    }
  }
}
</style>