<template>
  <div class="count-down-mid-wrap">
    <div class="item-wrap">
      <div class="item">{{ time.hours }}</div>
      <div class="item-fh">:</div>
      <div class="item">{{ time.minutes }}</div>
      <div class="item-fh">:</div>
      <div class="item">{{ time.seconds }}</div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from "vue";
import activityHandle from "../use/activity/activity";
export default {
  setup() {
    onMounted(() => {
      timeRest();
      document.addEventListener("visibilitychange", timeCheck);
    });

    let { activityData, timeRest, timeCheck } = activityHandle();

    return {
      ...toRefs(activityData),
    };
  },
};
</script>

<style lang="less" scoped>
.count-down-mid-wrap {
  position: relative;
  width: 665px;
  // height: 507px;
  height: 405px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("../../../../assets/imgs/activity/countDown/countDown5.png");
  .item-wrap {
    position: absolute;
    bottom: 40px;
    left: 0;
    width: 100%;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    .item {
      width: 72px;
      height: 72px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 2px;
      font-size: 44px;
      font-family: GothamRounded;
      font-weight: bold;
      color: #ffffff;
      text-shadow: 0px 3px 0px rgba(89, 42, 25, 0.65);
    }
    .item-fh {
      width: 22px;
      height: 72px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 2px;
      font-size: 44px;
      font-family: GothamRounded;
      font-weight: bold;
      color: #ffffff;
      text-shadow: 0px 3px 0px rgba(89, 42, 25, 0.65);
    }
    .item-fh:last-child {
      margin: 0;
    }
  }
}
</style>