<template>
  <div class="activity-wrap">
    <div class="activity-wrap-content" @click="goActivity()">
      <img
        class="activity-wrap-egg"
        src="@/assets/imgs/openBox/buyEggBox/egg1.png"
      />
      <img
        class="activity-wrap-egg-bottom"
        src="@/assets/imgs/home/activity/egg-bottom-stone.png"
      />
      <img
        class="activity-wrap-right"
        src="@/assets/imgs/openBox/buyEggBox/activity-right.png"
      />
    </div>

    <!-- <img src="../../assets/imgs/activity/home/egg.png" /> -->
  </div>
</template>

<script>
export default {
      setup(props,context) {

          const goActivity = ()=> {
               context.emit("goActivity");
          }
          return {
              goActivity
          }
      }
};
</script>

<style lang="less" scoped>
.activity-wrap {
  position: fixed;
  bottom: 30px;
  right: 13px;
  width: 291px;
  height: 331px;
  z-index: 999;
  .activity-wrap-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    widows: 100%;
    height: 100%;
    cursor: pointer;
    .activity-wrap-egg {
      width: calc(277px * 0.5);
      height: calc(344px * 0.5);
      position: absolute;
      top: 30px;
      animation: activityEgg 2s infinite alternate;
      -webkit-animation: activityEgg 2s infinite alternate;
      z-index: 9999;
    }
    .activity-wrap-egg-bottom {
      width: calc(394px * 0.7);
      height: calc(351px * 0.7);
      position: absolute;
    }
    .activity-wrap-right {
      width: calc(58px * 0.8);
      height: calc(58px * 0.8);
      position: absolute;
      top: 250px;
    }
  }
}
</style>