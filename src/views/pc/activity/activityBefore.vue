<template>
  <div class="main">
    <!-- 弹框-start -->
    <buyEggBox v-if="buyEggBoxShow" @closeBox="closeBox"></buyEggBox>
    <activityBefore
      v-if="activityBeforeShow"
      @closeBox="activityBeforeCloseBox"
    ></activityBefore>
    <invitation
      v-if="myInvitationShow"
      @closeBox="closeInvitation"
    ></invitation>
    <!-- 弹框-start -->
    <div class="top">
      <div class="header"></div>
      <div class="top-content">
        <div class="left">
          <div class="my-invitation" @click="showInvitation">
            <div class="text">
              My <br />
              invitation
            </div>
          </div>
          <!-- <div class="my-dragon" @click="getMyDragon">
            <div class="text">
              My <br />
              dragon
            </div>
          </div> -->
        </div>
        <div class="mid-dragin-select">
          <dragonSelect></dragonSelect>
        </div>
        <!-- <div class="mid-count-down" v-else>
          <countDown></countDown>
        </div> -->
        <div class="right">
          <div class="help">
            <img
              src="@/assets/imgs/activity/activity/index/help-icon.png"
              alt=""
              @click="showInvitation"
            />

            <helpBox v-show="helpShow"></helpBox>
          </div>

          <div class="tips">
            <img
              src="@/assets/imgs/activity/activity/index/tips-icon.png"
              alt=""
              @click="showInvitation"
            />

            <tipsBox v-show="tipsShow" @closeBox="showTips"></tipsBox>
          </div>
          <div v-if="false" class="qrcode" ref="qrCodeUrlRef"></div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-top">
        <!-- <div class="title">Honor list</div> -->
        <div class="list">
          <!-- <div class="list-left">
            <leftRank></leftRank>
          </div> -->
          <div class="list-right">
            <rightRank></rightRank>
          </div>
        </div>
      </div>
      <div class="bottom-bottom">
        <div class="title">Invitation Airdrop</div>
        <div class="des">
          <div class="des-item">1.Total rewards: 100 (eggs) + 15500 (DMS)</div>
          <div class="des-item">
            2.Available time: from 10/09/2021(UTC+4) to the end of all rounds'
            rush
          </div>
          <div class="des-item">3.Release time: after the entire pre-sale</div>
          <div class="des-item">
            4.Airdrop rules:A Genesis Dragon Egg and token(DMS) rewards are only
            available to the top 100
          </div>
          <div class="des-item">
            * The invitation is only valid if the invitee has signed the wallet
            or registered the email address
          </div>
        </div>
        <div class="list">
          <div class="list-wrap">
            <bottomRule></bottomRule>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs, ref, onBeforeUnmount } from "vue";

import leftRank from "./components/leftRank.vue";
import rightRank from "./components/rightRankActivityBefore.vue";
import bottomRule from "./components/bottomRule.vue";
import dragonSelect from "./components/dragonSelectActivityBefore.vue";
import countDown from "./components/countDown.vue";
import selectDragon from "./use/dragon/selectDragon";
import helpBox from "./components/help-box.vue";
import tipsBox from "./components/tips-box.vue";
import activityHandle from "./use/activity/activityBefore";
import buyEggBox from "@/components/modalBox/buyEggBox/index.vue";
import activityBefore from "@/components/modalBox/activityBefore/index.vue";
import invitation from "@/components/modalBox/activityBox/invitation.vue";
import common from "@/utils/common";

export default {
  name: "activity",
  components: {
    leftRank,
    rightRank,
    bottomRule,
    helpBox,
    tipsBox,
    dragonSelect,
    countDown,
    buyEggBox,
    invitation,
    activityBefore,
  },
  setup() {
    onMounted(() => {
      common.goTopScroll();
      // init();
     // getQrcodeUrl();
    });
    onBeforeUnmount(() => {
      clearInterval(activityData.timeInterval);
    });
    let {
      selectRightDragon,
      selectLeftDragon,
      init,
      state,
      closeBox,
      getMyDragon,
    } = selectDragon();
    let {
      showHelp,
      showTips,
      activityData,
      closeInvitation,
      showInvitation,
      getQrcodeUrl,
      qrCodeUrlRef,
      activityBeforeCloseBox,
    } = activityHandle();

    return {
      ...toRefs(state),
      ...toRefs(activityData),
      selectRightDragon,
      selectLeftDragon,
      showHelp,
      showTips,
      closeBox,
      closeInvitation,
      showInvitation,
      getMyDragon,
      qrCodeUrlRef,
      activityBeforeCloseBox,
    };
  },
};
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  // height: 2880px;
  min-height: 3300px;
  // min-height:3100px;
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
      background-image: url("../../../assets/imgs/activity/activity/index/head-bc.png");
    }
    .top-content {
      display: flex;
      height: 892px;
      position: relative;
      .left {
        position: absolute;
        top: 135px;
        left: 0px;
        width: 156px;
        .my-invitation {
          width: 156px;
          height: 87px;
          background-repeat: no-repeat;
          background-size: cover;
          background-image: url("../../../assets/imgs/activity/activity/index/left-opt-bc.png");
          position: relative;
          cursor: pointer;
          .text {
            position: absolute;
            top: 13px;
            left: 10px;
            font-family: GothamRounded;
            font-size: 26px;
            font-weight: 400;
            color: #ffffff;
            line-height: 27px;
            text-align: center;
          }
        }
        .my-dragon {
          width: 156px;
          height: 87px;
          margin-top: 44px;
          background-repeat: no-repeat;
          background-size: cover;
          background-image: url("../../../assets/imgs/activity/activity/index/left-opt-bc.png");
          position: relative;
          cursor: pointer;
          .text {
            position: absolute;
            top: 13px;
            left: 10px;
            font-family: GothamRounded;
            font-size: 26px;
            font-weight: 400;
            color: #ffffff;
            line-height: 27px;
            text-align: center;
          }
        }
      }
      .mid-dragin-select {
        width: 1200px;
        height: 892px;
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
      }
      .mid-count-down {
        width: 665px;
        height: 507px;
        position: absolute;
        top: -130px;
        left: 50%;
        transform: translateX(-50%);
      }
      .right {
        position: absolute;
        top: -60px;
        right: 25px;
        z-index: 100;
        .help {
          cursor: pointer;
          img {
            width: 100px;
            height: 93px;
          }
        }
        .tips {
          cursor: pointer;
          margin-top: 11px;
          img {
            width: 97px;
            height: 90px;
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
  .bottom {
    // height: 1744px;
    min-height: 1752px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .bottom-top {
      //width: 1255px;
      margin-top: 60px;
      .title {
        text-align: center;
        font-size: 42px;
        font-family: WendyOne-Regular;
        font-weight: 400;
        color: #ffffff;
        line-height: 27px;
      }
      .list {
        display: flex;
        justify-content: center;
        margin-top: 69px;
        .list-left {
          width: 601px;
          height: 897px;
          margin-right: 86px;
        }
        .list-right {
          width: 601px;
          height: 897px;
        }
      }
    }
    .bottom-bottom {
      width: 1255px;
      .title {
        font-size: 42px;
        font-family: WendyOne-Regular;
        font-weight: 400;
        color: #ffffff;
        line-height: 27px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .des {
        margin-top: 48px;
        .des-item {
          font-size: 26px;
          font-family: GothamRounded;
          font-weight: 400;
          color: #ffffff;
          line-height: 36px;
        }
      }
      .list {
        margin-top: 26px;
        display: flex;
        justify-content: center;
        .list-wrap {
          width: 845px;
          height: 626px;
          // background-color: #ff5400;
        }
      }
    }
  }
}
@keyframes eggMove {
  from {
    margin-top: -60px;
  }
  to {
    margin-top: -20px;
  }
}
@-webkit-keyframes eggMove {
  from {
    margin-top: -60px;
  }
  to {
    margin-top: -20px;
  }
}

@keyframes scaleDraw {
  /*定义关键帧、scaleDrew是需要绑定到选择器的关键帧名称*/
  0% {
    transform: scale(1); /*开始为原始大小*/
  }
  25% {
    transform: scale(1.1); /*放大1.1倍*/
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.1);
  }
}
.transitionRouter-enter-active,
.transitionRouter-leave-active {
  transition: all 0.4s;
}

.transitionRouter-enter,
.transitionRouter-leave {
  transform: translate3d(100%, 0, 0);
}
</style>