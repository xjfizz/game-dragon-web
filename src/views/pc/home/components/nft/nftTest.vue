
<template>
  <div class="main">
    <div class="head">
      <span>NFT Marketplace</span>
    </div>
    <div class="head-des">
      <span
        >Players can earn income by trading the NFT of Dragons, Dragon Skulls,
        Land and Buildings, and we will charge part of that for the community
        maintenance and airdrop reward</span
      >
    </div>
    <div class="content">
      <div
        class="left-btn"
        @click="moveLeft()"
        @mouseenter="mouseenterLeft"
        @mouseleave="mouseleaveLeft"
      >
        <img
          v-if="leftIconHover"
          class="left-btn-icon"
          src="../../../../../assets/imgs/swiper-left-black.png"
        />
        <img
          v-if="!leftIconHover"
          class="left-btn-icon-hover"
          src="../../../../../assets/imgs/swiper-right-white.png"
        />
      </div>
      <div class="mid-wrap">
        <div class="mid-wrap-swiper">
          <div
            class="mid-wrap-item"
            v-for="(item, index) in swiperList"
            :key="index"
          >
            <img :src="item.icon" />
          </div>
        </div>
      </div>
      <div
        class="right-btn"
        @click="moveRight()"
        @mouseenter="mouseenterRight"
        @mouseleave="mouseleaveRight"
      >
        <img
          v-if="!rightIconHover"
          class="right-btn-icon"
          src="../../../../../assets/imgs/swiper-right-white.png"
        />
        <img
          v-if="rightIconHover"
          class="right-btn-icon-hover"
          src="../../../../../assets/imgs/swiper-left-black.png"
        />
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-btn" @click="getMore">Get More</div>
      <div class="bottom-left-img"><img src="@/assets/imgs/right.png" /></div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import anime from "animejs";
// import { useRouter } from 'vue-router'

// import { useStore } from "vuex";

export default {
  props: {
    classHeader: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, context) {
    console.log(props);
    // const store = useStore();
    // const router = useRouter()
    const state = reactive({
      swiperList: [
        {
          num: 1,
          icon: require("@/assets/imgs/dragon/dragon-fire.png"),
        },
        {
          num: 2,
          icon: require("@/assets/imgs/dragon/dragon-thunder.png"),
        },
        {
          num: 3,
          icon: require("@/assets/imgs/dragon/dragon-stone.png"),
        },
        {
          num: 4,
          icon: require("@/assets/imgs/dragon/dragon-storm.png"),
        },

        {
          num: 5,
          icon: require("@/assets/imgs/dragon/dragon-water.png"),
        },
      ],
      currentIndex: 0, //默认显示图片
      timer: null, //定时器
      leftIconHover: false,
      rightIconHover: false,
    });
    onMounted(() => {});
    const getMore = () => {
      context.emit("createEgg");
    };

    const moveRight = (e) => {
      const width = document.querySelector(".mid-wrap-swiper").offsetWidth / 5; //-273
      console.log("changeImg", e, state, width);
      if (state.currentIndex >= 2) {
        return;
      } else {
        state.currentIndex++;
        anime({
          targets: ".mid-wrap-swiper",
          translateX: -width * state.currentIndex, // 一个item
        });
      }
    };
    const moveLeft = (e) => {
      console.log("changeImg", e, state);
      const width = document.querySelector(".mid-wrap-swiper").offsetWidth / 5; //-273
      if (state.currentIndex <= 0) {
        return;
      } else {
        state.currentIndex--;
        anime({
          targets: ".mid-wrap-swiper",
          translateX: -width * state.currentIndex, // 一个item
        });
      }
    };
    const mouseenterLeft = () => {
      state.leftIconHover = true;
    };
    const mouseleaveLeft = () => {
      state.leftIconHover = false;
    };
    const mouseenterRight = () => {
      state.rightIconHover = true;
    };
    const mouseleaveRight = () => {
      state.rightIconHover = false;
    };
    return {
      ...toRefs(state),
      getMore,
      moveRight,
      moveLeft,
      mouseenterLeft,
      mouseleaveLeft,
      mouseenterRight,
      mouseleaveRight,
    };
  },
};
</script>

<style lang="less" scoped >
.main {
  //   padding-bottom: 120px;
  .head {
    display: flex;
    justify-content: center;
    span {
      font-size: 48px;
      font-family: GothamRounded-Medium, GothamRounded;
      color: #ffffff;
    }
  }
  .head-des {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    span {
      width: 924px;
      height: 96px;
      font-size: 24px;
      font-family: GothamRounded;
      color: #ffffff;
      text-align: center;
      line-height: 32px;
    }
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 62px;
    .left-btn {
      width: 54px;
      height: 54px;
      margin-right: 20px;
      border-radius: 50%;
      margin-top: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      .left-btn-icon {
        width: 54px;
        height: 54px;
      }
      .left-btn-icon-hover {
        width: 54px;
        height: 54px;
        -ms-transform: rotate(180deg); /* IE 9 */
        -webkit-transform: rotate(180deg); /* Safari and Chrome */
        transform: rotate(180deg);
      }
    }
    .mid-wrap {
      // width: 1224px;
       width: 1210px;
      height: 386px;
      //  / background-color: #eedfd7;
      overflow: hidden;
      // position: relative;
      .mid-wrap-swiper {
        display: flex;
        // min-width: 2040px;
        min-width: 2025px;
        //   position: relative;
        //   left: -388px;
        //  background-color: #ff5400;
        .mid-wrap-item {
          // width: 386px;
          // height: 322px;
          width: 383px;
          height: 386px;
          margin-right: 10px;
          margin-left: 10px;
          img {
            width: 383px;
            height: 386px;
          }
        }
        .mid-wrap-item:last-child {
          // margin-right: 0;
        }
      }
    }
    .right-btn {
      width: 54px;
      height: 54px;
      margin-left: 20px;
      border-radius: 50%;
      margin-top: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      .right-btn-icon {
        width: 54px;
        height: 54px;
      }
      .right-btn-icon-hover {
        width: 54px;
        height: 54px;
        -ms-transform: rotate(180deg); /* IE 9 */
        -webkit-transform: rotate(180deg); /* Safari and Chrome */
        transform: rotate(180deg);
      }
    }
  }
  .bottom {
    margin-top: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    .bottom-btn {
      font-size: 24px;
      font-family: GothamRounded-Medium, GothamRounded;
      font-weight: 500;
      color: #ffc763;
      display: flex;
      justify-content: center;
      align-items: flex-end;
    }
    .bottom-left-img {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 10px;
      // margin-top: 5px;
      img {
        width: 13px;
        height: 19px;
      }
    }
  }
}
</style>
