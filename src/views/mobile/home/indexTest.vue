

<template>
  <div class="main">
    <!-- 弹框-start -->
    <gameVideo v-if="gameVideoShow" @closeBox="closeVideoBox"></gameVideo>
    <playGame v-if="playGameShow" @closeBox="closePlayGameBox"></playGame>
    <activityBox
      v-if="activityBoxShow"
      @closeActivity="closeActivity"
      @learnMore="learnMore"
    ></activityBox>
    <!-- 弹框-start -->
    <div class="top">
      <div class="top-bac">
        <Header
          :headIndex="1"
          :classHeader="classHeader"
          @createEgg="createEgg"
        ></Header>
        <div class="container">
          <div class="container-top">
            <div class="top-img">
              <img src="../../../assets/imgs/top-icon-m.png" />
            </div>
            <div class="top-text">
              <div>The world’s first 3D turn-based NFT game</div>
              <div>Start the journey now!</div>
            </div>
            <div class="top-btns">
              <div class="gameVideo-btn" @click="openVideoBox">
                <img src="../../../assets/imgs/videoGame.png" />
              </div>
              <div class="playGame-btn" @click="openPlayGameBox">
                <img src="../../../assets/imgs/playGame.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mid">
      <div class="mid-fantastic">
        <div class="mid-line"></div>
        <div class="mid-fantastic-title">How fantastic it is</div>
        <div class="mid-fantastic-text">
          <div>
            Dragon Mainland is presented to players in a brand-new way of
            fighting including military formation, attribute grading, map
            exploration, AR hunting, PVP (ladder tournament) and multiplayer
            PVE, etc
          </div>
        </div>
        <div class="mid-fantastic-swiper">
          <swiper></swiper>
        </div>
      </div>
      <div class="mid-dragonplay">
        <dragonPlay @createEgg="createEgg"></dragonPlay>
      </div>
      <div class="mid-nft">
        <nft @createEgg="createEgg"></nft>
      </div>
    </div>
    <div v-if="!activityBoxShow" class="activity-wrap">
      <div class="activity-wrap-content"   @click="goActivity()">
        <img
          class="activity-wrap-egg"
          src="@/assets/imgs/activity/home/egg.png"
        />
        <img
          class="activity-wrap-egg-bottom"
          src="@/assets/imgs/activity/home/egg-bottom.png"
        />
        <img
          class="activity-wrap-right"
          src="@/assets/imgs/activity/home/right.png"
        
        />
      </div>

      <!-- <img src="../../assets/imgs/activity/home/egg.png" /> -->
    </div>
    <Bottom @createEgg="createEgg"></Bottom>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs, inject, watch } from "vue";
import { useRouter } from "vue-router";
import Header from "@/components/HeaderMobile";
import Bottom from "@/components/Bottom";
import swiper from "./components/swiper/swiper";
import dragonPlay from "./components/dragonPlay/dragonPlay";
import nft from "./components/nft/nft";
import gameVideo from "@/components/modalBox/gameVideo/index.vue";
import playGame from "@/components/modalBox/playGame/index.vue";
import activityBox from "@/components/modalBox/activityBox/index.vue";
// import NCWeb3 from "@/utils/metaMask/web3.js";
import initWallet from "@/utils/metaMask/ethers.js";
import common from "@/utils/common";
import { setSession, getSession } from "@/utils/auth.js";

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
  },

  setup(props) {
    const API = inject("API");
    // const Web3 = inject("Web3");
    console.log(props);
    const router = useRouter();
    const state = reactive({
      gameVideoShow: false,
      playGameShow: false,
      activityBoxShow: false,
      homeHeight: "",
    });
    watch(state.homeHeight, (newValue, oldValue) => {
      console.log("homeHeight1", newValue, oldValue);
    });
    onMounted(() => {
      showActivity()
      //首页屏幕高设置
      window.onresize = () => {
        state.homeHeight = document.documentElement.clientHeight + "px";
        console.log("homeHeight2", state.homeHeight);
      };
       common.goTopScroll()
    });

    const setActivityNoFirst = ()=> {
      setSession('isNoFirstHome',true)
    }
    const showActivity = ()=> {
      if(!getSession('isNoFirstHome')) {
         state.activityBoxShow =  true
         setActivityNoFirst()
      }
     
    }


    const goToDetail = (item) => {
      router.push({ path: `/product/${item.goodsId}` });
    };

    const tips = () => {};
    // 打开视频弹框
    const openVideoBox = () => {
      state.gameVideoShow = true;
    };
    // 关闭视频弹框
    const closeVideoBox = () => {
      state.gameVideoShow = false;
    };
    const openPlayGameBox = () => {
      state.playGameShow = true;
      let params = {
        code: "123456",
        loginType: 2,
        phone: "18899999997",
        pwd: "",
        wappCode: "admin",
      };
      API.login.login(params).then((res) => {
        console.log("res", res);
      });
    };
    // 关闭视频弹框
    const closePlayGameBox = () => {
      state.playGameShow = false;
    };
    const createEgg = () => {
     state.playGameShow = true;
      // initMoney();
    };
    const initMoney = async () => {
      let res = await initWallet();
      console.log("initMoney", res);
    };
    // 打开首页活动弹框
    const goActivity = () => {
      router.push({path:'/activity',query:{id:123}});

     
    };
    const closeActivity = () => {
      state.activityBoxShow = false;
    };
     const learnMore = () => {
       closeActivity()
      router.push({path:'/activity',query:{id:123}});

    };

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
      learnMore
    };
  },
};
</script>

<style lang="less" scoped >
// @topHeight:`state.homeHeight`;
.main {
  .top {
    //  height: var(homeHeight);
    height: 100vh;
    z-index: auto;
    .top-bac {
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      // background-position: bottom;
      background-size: cover;
      background-image: url("../../../assets/imgs/home-bac.png");
    }
    .container {
      //   width: 1200px;
      margin: 140px auto 0;
      // position: relative;
      .container-top {
        // max-width: 86%;
        word-break: break-word;
        margin: 0 auto;
        .top-img {
          margin: 0 220px 0 693px;
          img {
            width: 502px;
            height: 318px;
          }
        }
        .top-text {
          text-align: center;
          margin: 0 auto;
          min-width: 961px;
          font-family: GothamRounded-Bold, GothamRounded;
          color: #2e0b00;
          font-size: 48px;
          word-wrap: break-word;
          word-break: normal;
          word-break: break-all;
        }
        .top-btns {
          display: flex;
          justify-content: center;
          margin: 40px auto;
          .gameVideo-btn {
            margin-right: 35px;
            cursor: pointer;
            img {
              width: 201px;
              height: 80px;
            }
          }
          .playGame-btn {
            cursor: pointer;
            img {
              width: 201px;
              height: 80px;
            }
          }
        }
      }
    }
  }
  .mid {
    // width: 1920px;
    min-height: 2883px;
    background: linear-gradient(180deg, #4c1200 0%, #140c09 100%);
    .mid-fantastic {
      height: 960px;
      text-align: center;
      .mid-line {
        width: 100%;
        height: 94px;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url("../../../assets/imgs/mid-line.png");
      }
      .mid-fantastic-title {
        margin-top: 86px;
        color: #ffffff;
        font-size: 64px;
        text-align: center;
        font-family: GothamRounded-Bold, GothamRounded;
        font-weight: bold;
      }
      .mid-fantastic-text {
        margin-top: 40px;
        display: flex;
        justify-content: center;
        div {
          width: 924px;
          height: 96px;
          font-size: 24px;
          font-weight: 500;
          color: #ffffff;
          line-height: 32px;
          font-family: GothamRounded-Medium, GothamRounded;
        }
      }
      .mid-fantastic-swiper {
        margin-top: 100px;
        color: #ffffff;
        font-size: 24px;
        display: flex;
        justify-content: center;
      }
    }
    .mid-dragonplay {
      min-height: 960px;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url("../../../assets/imgs/dragonPlay-bac.png");
      padding-top: 80px;
    }
    .mid-nft {
      min-height: 960px;
      padding-top: 120px;
      //  padding-bottom: 920px;
    }
  }
  .activity-wrap {
    position: fixed;
    bottom: 20px;
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
        width: 139px;
        height: 141px;
        position: absolute;
        top: 30px;
        animation: activityEgg 2s infinite alternate;
        -webkit-animation: activityEgg 2s infinite alternate;
        z-index: 9999;
      }
      .activity-wrap-egg-bottom {
        width: 291px;
        height: 116px;
        position: absolute;
      }
      .activity-wrap-right {
        width: 36px;
        height: 36px;
        position: absolute;
        bottom: 110px;
       
      }
    }
  }
  @keyframes activityEgg {
    from {
      margin-top: -20px;
    }
    to {
      margin-top: 10px;
    }
  }
  @-webkit-keyframes activityEgg {
    from {
      margin-top: -20px;
    }
    to {
      margin-top: 10px;
    }
  }
}
.classHeader {
  background-color: #ff5400;
}
</style>