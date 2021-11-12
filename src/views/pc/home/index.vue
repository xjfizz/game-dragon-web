

<template>
  <div class="home-main">
    <!-- 弹框-start -->
    <gameVideo v-if="gameVideoShow" @closeBox="closeVideoBox"></gameVideo>
    <playGame v-if="playGameShow" @closeBox="closePlayGameBox"></playGame>
    <!-- <activityBox
      v-if="activityBoxShow"
      @closeActivity="closeActivity"
      @learnMore="learnMore"
    ></activityBox> -->

    <activityStart
      v-if="activityStartShow"
      @closeActivity="closeActivityStart"
    ></activityStart>
    <!-- 弹框-start -->
    <!-- :style="{height:homeHeight}" -->
    <div class="top" @mousemove="touchmove">
      <!-- 前景-start -->

      <div
        class="front-bac1"
        :style="{
          transform: `translateX(${frontTransform.front1.translateX}) translateY(${frontTransform.front1.translateY})`,
        }"
      >
        <img src="@/assets/imgs/home/front-bac/front-bac1.png" alt="" />
      </div>
      <!-- <div class="front-bac2" :style="{
          transform: `translateX(${frontTransform.front2.translateX}) translateY(${frontTransform.front2.translateY})`,
        }">
        <img src="@/assets/imgs/home/front-bac/front-bac2.png" alt="" />
      </div> -->
      <div
        class="front-bac3"
        :style="{
          transform: `translateX(${frontTransform.front3.translateX}) translateY(${frontTransform.front3.translateY})`,
        }"
      >
        <img src="@/assets/imgs/home/front-bac/front-bac3.png" alt="" />
      </div>
      <div class="front-bac4">
        <img src="@/assets/imgs/home/front-bac/front-bac4.png" alt="" />
      </div>

      <!-- 前景-end -->
      <Header :headIndex="1" @createEgg="createEgg"></Header>
      <div class="wrap">
        <div class="top-icon">
          <img src="@/assets/imgs/home/home-top-logo2.png" alt="" />
        </div>
        <div class="top-title">
          <div class="title-text">
            Battle for Our Homeland! Immersive 3D Crypto NFT Game
          </div>
        </div>
        <div class="top-btns">
          <div class="gameVideo-btn" @click="openVideoBox">
            <img src="../../../assets/imgs/home/home-top-gameVideo-btn.png" />
          </div>
          <div class="playGame-btn" @click="openPlayGameBox">
            <img src="../../../assets/imgs/home/home-top-gamePlay-btn.png" />
          </div>
        </div>
      </div>
      <div class="top-bottom-bac"></div>
    </div>
    <div class="content">
      <div class="content-dragon-mainLand">
        <div class="wrap">
          <div class="video-wrap">
            <div class="video-content-left">
              <img
                src="@/assets/imgs/home/home-mainLand-content-left.png"
                alt=""
              />
            </div>
             <HomeVideo></HomeVideo>
            <!-- <div class="video-content">
              <div class="video-title">A Sneak Peak of Dragon Mainland</div>
              <div class="video-mid">
                <HomeVideo></HomeVideo>
              </div>
            </div> -->
          </div>
          <div class="video-des">
            Dragon Mainland combines PvP and PvE combat, advanced breeding, turn
            based card strategy, NTF trading, DeFi, and collectibles into the
            industry’s most exciting GameFi platform. Get ready to "Play to
            Earn"!
          </div>
        </div>
      </div>
      <div class="content-fantastic">
        <div class="wrap">
          <div class="wrap-top">
            <div class="title">Check this out</div>
            <div class="text">
              Augmented Reality hunting, military formations, attribute
              hierarchy, PVP (ladder tournament), and multiplayer PVE and more!
              Dragon Mainland aims to be the most engaging, fully immersive 3D
              encrypted game
            </div>
          </div>
          <div class="wrap-bottom">
            <div class="swiper">
              <swiper></swiper>
            </div>
          </div>
        </div>
      </div>
      <div class="content-play">
        <div class="wrap">
          <dragonPlay @createEgg="createEgg"></dragonPlay>
        </div>
      </div>
      <div class="content-nft">
        <div class="wrap">
          <nft @createEgg="createEgg"></nft>
        </div>
      </div>

      <candyBox v-if="isShow" @goSubmit="goSubmit"></candyBox>
       <!-- <candyBox  @goSubmit="goSubmit"></candyBox> -->
      <!-- <activityRightBox @goActivity="goActivity"></activityRightBox> -->
      <Bottom @createEgg="createEgg"></Bottom>
    </div>
    <!-- <Bottom @createEgg="createEgg"></Bottom> -->
  </div>
</template>

<script>
import { reactive, onMounted, toRefs, inject, watch } from "vue";
import { useRouter } from "vue-router";
import Header from "@/components/Header";
import Bottom from "@/components/Bottom";
import swiper from "./components/swiper/swiper";
import dragonPlay from "./components/dragonPlay/dragonPlay";
import nft from "./components/nft/nft";
import gameVideo from "@/components/modalBox/gameVideo/index.vue";
import playGame from "@/components/modalBox/playGame/index.vue";
import activityBox from "@/components/modalBox/activityBox/index.vue";
import activityStart from "@/components/modalBox/activityBox/activityStart.vue";
import HomeVideo from "@/components/video/HomeVideo.vue";
// import NCWeb3 from "@/utils/metaMask/web3.js";
import initWallet from "@/utils/metaMask/ethers.js";
import common from "@/utils/common";
import { setSession, getSession, getStorage, getToken } from "@/utils/auth.js";
import activityHandle from "../activity/use/activity/activity.js";
import activityRightBox from "./components/activity/index";
import candyBox from "./components/candy/index";
import homeHandle from "./use/home.js";

export default {
  name: "home",
  components: {
    Header,
    swiper,
    dragonPlay,
    nft,
    Bottom,
    gameVideo,
    playGame,
    activityBox,
    activityStart,
    HomeVideo,
    activityRightBox,
    candyBox,
  },

  setup(props) {
    const API = inject("API");
    const router = useRouter();
    const homeState = reactive({});

    let { timeFormat } = activityHandle();
    let {
      goToDetail,
      tips,
      openVideoBox,
      closeVideoBox,
      openPlayGameBox,
      closePlayGameBox,
      createEgg,
      initMoney,
      goActivity,
      closeActivity,
      learnMore,
      touchmove,
      closeActivityStart,
      goSubmit,
      state,
      isShowActivity,
      showActivity,
    } = homeHandle();

    watch(state.homeHeight, (newValue, oldValue) => {});
    onMounted(() => {
      showActivity();
      isShowActivity()
      //首页屏幕高设置
      window.onresize = () => {
        state.homeHeight = document.documentElement.clientHeight + "px";
        state.homeHeight = document.documentElement.clientHeight + "px";
      };
      common.goTopScroll();
    });

    return {
      ...toRefs(state),
      goToDetail,
      tips,
      openVideoBox,
      closeVideoBox,
      openPlayGameBox,
      closePlayGameBox,
      createEgg,
      initMoney,
      goActivity,
      closeActivity,
      learnMore,
      touchmove,
      closeActivityStart,
      goSubmit,
    };
  },
};
</script>

<style lang="less" scoped >
// @topHeight:`state.homeHeight`;
.home-main {
  // min-height: 5540px;
  min-height: 5370px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("../../../assets/imgs/home/home-main-bac.png");
  .top {
    height: 1315px;
    // height: 100vh; // 235px
    width: 100%;
    display: flex;
    // justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 99;
    left: 0px;
    overflow: hidden;
    // background: linear-gradient(180deg, #473121 0%, #221d1d 100%);
    // background-repeat: no-repeat;
    // background-size: cover;
    // background-image: url("../../../assets/imgs/home/home-top-bac.png");
    .front-bac1 {
      position: absolute;
      top: 0;
      left: 0%;
      width: 105%;
      height: 100%;
      z-index: 101;
      img {
        position: absolute;
        inset: 0px;
        box-sizing: border-box;
        padding: 0px;
        border: none;
        margin: auto;
        display: block;
        width: 0px;
        height: 0px;
        min-width: 100%;
        max-width: 100%;
        min-height: 100%;
        max-height: 100%;
        //object-fit: cover;
      }
    }
    .front-bac2 {
      position: absolute;
      top: 0;
      left: 0%;
      width: 110%;
      height: 110%;
      z-index: 100;
      img {
        position: absolute;
        inset: 0px;
        box-sizing: border-box;
        padding: 0px;
        border: none;
        margin: auto;
        display: block;
        width: 0px;
        height: 0px;
        min-width: 100%;
        max-width: 100%;
        min-height: 100%;
        max-height: 100%;
        object-fit: cover;
      }
    }
    .front-bac3 {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 105%;
      height: 100%;
      z-index: 99;
      transition: transform 0.2s ease-out 0s;
      img {
        position: absolute;
        inset: 0px;
        box-sizing: border-box;
        padding: 0px;
        border: none;
        margin: auto;
        display: block;
        width: 0px;
        height: 0px;
        min-width: 100%;
        max-width: 100%;
        min-height: 100%;
        max-height: 100%;
        object-fit: cover;
      }
    }

    .front-bac4 {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      transition: transform 0.2s ease-out 0s;
      z-index: 98;
      img {
        position: absolute;
        inset: 0px;
        box-sizing: border-box;
        padding: 0px;
        border: none;
        margin: auto;
        display: block;
        width: 0px;
        height: 0px;
        min-width: 100%;
        max-width: 100%;
        min-height: 100%;
        max-height: 100%;
        object-fit: cover;
      }
    }
    .wrap {
      width: 1200px;
      text-align: center;
      z-index: 200;
      .top-icon {
        // margin-top: 176px;
        margin-top: 100px;
        img {
          width: 526px;
          height: 247px;
        }
      }
      .top-title {
        // margin-top: 106px;
        margin-top: 5px;
        width: 100%;
        display: flex;
        justify-content: center;
        .title-text {
          // width: 1051px;
          width: 950px;
          height: 128px;
          font-size: 54px;
          font-family: WendyOne-Regular, WendyOne;
          font-weight: 400;
          color: #000000;
          line-height: 64px;
          letter-spacing: 1px;
        }
      }
      .top-btns {
        margin-top: 55px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        position: relative;
        .gameVideo-btn {
          margin-right: 42px;
          img {
            width: 179px;
            height: 72px;
            cursor: pointer;
          }
        }
        .playGame-btn {
          img {
            width: 179px;
            height: 72px;
            cursor: pointer;
          }
        }
      }
    }
    .top-bottom-bac {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 337px;
      // background-repeat: no-repeat;
      // background-size: cover;
      // background-image: url("../../../assets/imgs/home/home-top-bottom-bac.png");
    }
  }
  .content {
    position: relative;
    z-index: 100;
    margin-top: -200px;
    width: 100%;
    // min-height: 3000px;
    // background-repeat: no-repeat;
    // background-size: cover;
    // background-image: url("../../../assets/imgs/home/home-content-bac.png");
    .content-dragon-mainLand {
      height: 960px;
      display: flex;
      justify-content: center;
      .wrap {
        width: 1200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 65px;
        .video-wrap {
          display: flex;
          justify-content: center;
          position: relative;
          .video-content-left {
            position: absolute;
            left: -180px;
            bottom: -58px;
            img {
              width: 254px;
              height: 182px;
            }
          }
        
        }
        .video-des {
          margin-top: 30px;
          text-align: center;
          // width: 702px;
          width: 840px;
          height: 128px;
          font-size: 24px;
          font-family: GothamRounded;
          font-weight: normal;
          color: #ffffff;
          line-height: 32px;
          opacity: 0.83;
        }
      }
    }
    .content-fantastic {
      height: 960px;
      display: flex;
      justify-content: center;
      .wrap {
        margin-top: 120px;
        .wrap-top {
          display: flex;
          align-items: center;
          flex-direction: column;
          .title {
            width: 437px;
            height: 50px;
            font-size: 48px;
            font-family: WendyOne-Regular, WendyOne;
            font-weight: 400;
            color: #ffffff;
            line-height: 50px;
            letter-spacing: 1px;
            text-align: center;
          }
          .text {
            text-align: center;
            margin-top: 24px;
            width: 924px;
            height: 96px;
            font-size: 24px;
            font-family: GothamRounded-Book, GothamRounded;
            font-weight: normal;
            color: #ffffff;
            line-height: 32px;
            opacity: 0.83;
          }
        }
        .wrap-bottom {
          margin-top: 80px;
          .swiper {
          }
        }
      }
    }
    .content-play {
      height: 960px;
      display: flex;
      justify-content: center;

      .wrap {
        width: 1200px;
      }
    }
    .content-nft {
      height: 960px;
      display: flex;
      justify-content: center;

      .wrap {
        // width: 1200px;
      }
    }
  }
}
</style>