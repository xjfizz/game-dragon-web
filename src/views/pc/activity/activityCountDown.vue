<template>
  <div class="main">
    <div class="top">
      <div class="header"></div>
      <div class="top-content">
        <div class="left">
          <div class="my-invitation">
            <div class="text">
              my <br />
              invitation
            </div>
          </div>
          <div class="my-dragon">
            <div class="text">
              my <br />
              dragon
            </div>
          </div>
        </div>
        <div class="mid">
          <div class="mid-wrap">
            <div class="item-wrap">
              <div class="item">{{time.hours}}111</div>
              <div class="item-fh">:</div>
              <div class="item">{{time.minutes}}</div>
              <div class="item-fh">:</div>
              <div class="item">{{time.seconds}}</div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="help" @mouseenter="showHelp" @mouseleave="showHelp">
            <img
              src="@/assets/imgs/activity/activity/index/help-icon.png"
              alt=""
            />
          </div>
          <transition name="transitionRouter">
            <helpBox v-if="helpShow"></helpBox>
          </transition>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-top">
        <!-- <div class="title">Honor list</div> -->
        <div class="list">
          <div class="list-left">
            <leftRank></leftRank>
          </div>
          <div class="list-right">
            <rightRank></rightRank>
          </div>
        </div>
      </div>
      <div class="bottom-bottom">
        <div class="title">Purchase Rules</div>
        <div class="des">
          <div class="des-item">1.Airdrop quantity:100(eggs)+24,000(DMS)</div>
          <div class="des-item">2.Deadline:after the pre-sale</div>
          <div class="des-item">
            3.Release time of airdrop:eggs will be released in October,DMS will
            be released after game online
          </div>
          <div class="des-item">
            4.Reward details(Attributes are distributed randomly)
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
import { reactive, onMounted, toRefs } from "vue";
import { useRouter } from "vue-router";
import leftRank from "./components/leftRank.vue";
import rightRank from "./components/rightRank.vue";
import bottomRule from "./components/bottomRule.vue";
import helpBox from "./components/help-box.vue";
import selectDragon from "./use/dragon/selectDragon";
import activityHandle from "./use/activity/activity";

export default {
  name: "activity",
  components: {
    leftRank,
    rightRank,
    bottomRule,
    helpBox,
  },
  setup() {
    onMounted(() => {
      init();
      timeRest()
    });
    let { selectRightDragon, selectLeftDragon, init, state } = selectDragon();
    let { showHelp, activityData, timeRest } = activityHandle();

    return {
      ...toRefs(state),
      ...toRefs(activityData),
      selectRightDragon,
      selectLeftDragon,
      showHelp,
    };
  },
};
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  // height: 2880px;
  min-height: 3000px;
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
      .mid {
        width: 665px;
        height: 507px;
        position: absolute;
        top: -130px;
        left: 50%;
        transform: translateX(-50%);
        .mid-wrap {
          position: relative;
          width: 665px;
          height: 507px;
          background-repeat: no-repeat;
          background-size: cover;
          background-image: url("../../../assets/imgs/activity/countDown/countDown.png");
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
      }
      .right {
        position: absolute;
        top: -60px;
        right: 25px;
        cursor: pointer;
        z-index: 99;
        .help {
          cursor: pointer;
          img {
            width: 100px;
            height: 93px;
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
.transitionRouter-enter-active,
.transitionRouter-leave-active {
    transition: all 0.4s;
}

.transitionRouter-enter,
.transitionRouter-leave{
    transform: translate3d(100%, 0, 0);
}

</style>