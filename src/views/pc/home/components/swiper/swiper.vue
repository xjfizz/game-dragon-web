
<template>
  <div class="head">
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
          <div class="mid-wrap-item-title">{{ item.text }}</div>
          <img class="mid-wrap-item-img" :src="item.icon" />
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
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
// import { useRouter } from 'vue-router'

// import { useStore } from "vuex";
import anime from "animejs";

export default {
  props: {
    classHeader: {
      type: Object,
      default: () => {},
    },
  },
  setup() {
    // const store = useStore();
    // const router = useRouter()
    const state = reactive({
      swiperList: [
        {
          num: 1,
          text: "Map + Roguelike",
          icon: require("../../../../../assets/imgs/swiper/swiper-img2.png"),
        },
        {
          num: 2,
          text: "AR Visuals",
          icon: require("../../../../../assets/imgs/swiper/swiper-img3.png"),
        },
        {
          num: 2,
          text: "Battle Scenes",
          icon: require("../../../../../assets/imgs/swiper/swiper-img5.png"),
        },
        {
          num: 2,
          text: "Breeding System",
          icon: require("../../../../../assets/imgs/swiper/swiper-img4.png"),
        },

        {
          num: 0,
          text: "3D Characteristics",
          icon: require("../../../../../assets/imgs/swiper/swiper-img1.png"),
        },
      ],
      currentIndex: 0, //默认显示图片
      timer: null, //定时器
      leftIconHover: false,
      rightIconHover: false,
    });
    onMounted(() => {});

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
.head {
  display: flex;
  align-items: center;
  .left-btn {
    width: 54px;
    height: 54px;
    margin-right: 20px;
    border-radius: 50%;
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
    width: 1230px;
    // height: 286px;
    height: 300px;
    overflow: hidden;
    .mid-wrap-swiper {
      display: flex;
      // min-width: 2015px;
      min-width: 2045px;
      .mid-wrap-item {
        // width: 383px;
        // height: 286px;
        width: 390px;
        height: 300px;
        margin-right: 10px;
        margin-left: 10px;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url("../../../../../assets/imgs/swiper/fantastic-swiper-img-bc.png");
        .mid-wrap-item-title {
          margin-top: 36px;
          margin-left: 30px;
          font-size: 24px;
          font-family: GothamRounded-Bold, GothamRounded;
          font-weight: bold;
          color: #603311;
          line-height: 29px;
        }
        .mid-wrap-item-img {
          margin-top: 19px;
          margin-left: 30px;
          width: 336px;
          height: 189px;
          // border-radius: 16px;
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
</style>
