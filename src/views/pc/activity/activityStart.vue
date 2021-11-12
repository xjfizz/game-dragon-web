<template>
  <div class="main">
    <div class="top">
      <div class="header"></div>
      <div class="top-content">
        <div class="wrap">
          <invitFirst></invitFirst>
        </div>
        <div class="right">
          <!-- <div class="help">
            <img
              src="@/assets/imgs/activity/activity/index/help-icon.png"
              alt=""
              @click="showHelp"
            />

            <helpBox v-show="helpShow"></helpBox>
          </div> -->

          <div class="tips">
            <img
              src="@/assets/imgs/activity/activity/index/tips-icon.png"
              alt=""
              @click="showTips"
            />

            <tipsBox v-show="tipsShow" @closeBox="showTips"></tipsBox>
          </div>

         
          <div v-if="false" class="qrcode" ref="qrCodeUrlRef"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from "vue";
import { useRouter } from "vue-router";
import invitFirst from "./components/invitation/invitFirst.vue";
import activityStart from "./use/activity/activityStart.js";
import activityHandle from "./use/activity/activity";
import helpBox from "./components/help-box.vue";
import tipsBox from "./components/tips-box.vue";

export default {
  name: "activity",
  components: {
    invitFirst,
    helpBox,
    tipsBox,
  },
  setup() {
    const router = useRouter();
    onMounted(() => {
      initPage();
    });
    const { initPage,goSubmit } = activityStart();
    let { showHelp, showTips, activityData } = activityHandle();

    return {
      ...toRefs(activityData),
      showHelp,
      showTips,
      goSubmit
    };
  },
};
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  // height: 2880px;
  min-height: 1080px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("../../../assets/imgs/activity/activity/index/main-bc.png");
  .top {
    height: 1080px;
    // position: relative;
    .header {
      position: relative;
      z-index: 99;
      height: 158px;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url("../../../assets/imgs/activity/activityStart/head-bc.png");
    }
    .top-content {
      position: relative;
      .wrap {
        display: flex;
        justify-content: center;
      }
      .right {
        position: absolute;
        top: -60px;
        right: 25px;
        z-index: 100;
        .help {
          cursor: pointer;
          display: flex;
          justify-content: flex-end;
          img {
            width: 100px;
            height: 93px;
          }
        }
        .tips {
          cursor: pointer;
          margin-top: 11px;
          display: flex;
          justify-content: flex-end;
          img {
            width: 97px;
            height: 90px;
          }
        }
        .candy {
          cursor: pointer;
          margin-top: 11px;

          .right-hand {
            width: 78px;
            height: 64px;
            position: absolute;
            right: 150px;
            top: 180px;
            animation: eggMove 3s infinite alternate;
            -webkit-animation: eggMove 3s infinite alternate;
          }
          .candy {
            width: calc(92px * 1.2) ;
            height:calc(134px * 1.2) ;
          }
        }
        .qrcode {
          position: absolute;
          top: -20px;
          right: 150px;
          background-color: #fff; //设置白色背景色
          padding: 6px; // 利用padding的特性，挤出白边
          box-sizing: border-box;
          img {
            width: 132px;
            height: 132px;
          }
        }
      }
    }
  }
}

@keyframes eggMove {
  from {
    left: -80px;
  }
  to {
    left: -100px;
  }
}
@-webkit-keyframes eggMove {
  from {
  left: -80px;
  }
  to {
    left: -100px;
  }
}
</style>