

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
            <div class="mid-line"></div>
          </div>
        </div>
      </div>
    </div>

      <div class="mid">
      <div class="mid-fantastic">
       
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
    <Bottom @createEgg="createEgg"></Bottom>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs, inject, watch } from "vue";
import { useRouter } from "vue-router";
import Header from "@/components/HeaderMobile";
import Bottom from "@/components/BottomMobile";
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
      showActivity();
      //首页屏幕高设置
      window.onresize = () => {
        state.homeHeight = document.documentElement.clientHeight + "px";
        console.log("homeHeight2", state.homeHeight);
      };
      common.goTopScroll();
    });

    const setActivityNoFirst = () => {
      setSession("isNoFirstHome", true);
    };
    const showActivity = () => {
      if (!getSession("isNoFirstHome")) {
        state.activityBoxShow = true;
        setActivityNoFirst();
      }
    };

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
      router.push({ path: "/activity", query: { id: 123 } });
    };
    const closeActivity = () => {
      state.activityBoxShow = false;
    };
    const learnMore = () => {
      closeActivity();
      router.push({ path: "/activity", query: { id: 123 } });
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
      learnMore,
    };
  },
};
</script>

<style lang="less" scoped >
// @topHeight:`state.homeHeight`;
.main {
  .top {
     height: 960px;
    // min-height: 100vh;
    z-index: auto;
    .top-bac {
      width: 100%;
      // height: 100vh;
      height: 100%;
      min-height: 100%;
      position: relative;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url("../../../assets/imgs/home-bac-m.png");
    }
    .container {
      margin: 74px auto 0;
      .container-top {
        //margin: 0 auto;
        .top-img {
          margin: 0 auto;
          display: flex;
          justify-content: center;
          img {
            width: 380px;
            height: 242px;
          }
        }
        .top-text {
          text-align: center;
          margin: 30px auto 0;
          width: 684px;
          font-size: 52px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          color: #2e0b00;
          line-height: 64px;
        }
        .top-btns {
          display: flex;
          justify-content: center;
          margin: 72px auto 0;
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
        .mid-line {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 92px;
          background-repeat: no-repeat;
          background-size: cover;
          background-image: url("../../../assets/imgs/mid-line-m.png");
        }
      }
    }
  }
    .mid {
    // width: 1920px;
    //min-height: 4442px;
    background: linear-gradient(180deg, #4c1200 0%, #140c09 100%);
    .mid-fantastic {
      height: 1024px;
      text-align: center;
       padding-top: 70px;
        
     
      .mid-fantastic-title {
        color: #ffffff;
        font-size:48px; // 64px;
        text-align: center;
        font-family: GothamRounded-Medium, GothamRounded;
       
      }
      .mid-fantastic-text {
        margin-top: 24px;
        display: flex;
        justify-content: center;
        div {
          width: 640px;
          font-size: 28px;
          font-weight: 500;
          color: #ffffff;
          line-height: 42px;
          font-family:  GothamRounded;
          opacity: 0.83;
        }
      }
      .mid-fantastic-swiper {
        margin-top: 48px;
        color: #ffffff;
        font-size: 24px;
        display: flex;
        justify-content: center;
      }
    }
    .mid-dragonplay {
      min-height: 1224px;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url("../../../assets/imgs/dragonPlay-bac-m.png");
      padding-top: 80px;
    }
    .mid-nft {
      min-height: 1118px;
      padding-top: 120px;
      //  padding-bottom: 920px;
    }
  }
}
</style>