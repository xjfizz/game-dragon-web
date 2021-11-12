
<template>
  <div class="main">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in swiperList" :key="index">
        <div class="item">
          <div class="item-title">{{ item.text }}</div>
          <img :src="item.icon" />
        </div>
      </van-swipe-item>
 </van-swipe>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";

export default {
  props: {},
  setup() {
    const state = reactive({
      swiperList: [
        {
          num: 1,
          text: "Map + Roguelike",
          icon: require("../../../../../assets/imgs/swiper/swiper-img2.png"),
        },
        {
          num: 2,
          text: "AR Show",
          icon: require("../../../../../assets/imgs/swiper/swiper-img3.png"),
        },
        {
          num: 2,
          text: "Turn-based Combat",
          icon: require("../../../../../assets/imgs/swiper/swiper-img5.png"),
        },
        {
          num: 2,
          text: "Breeding System",
          icon: require("../../../../../assets/imgs/swiper/swiper-img4.png"),
        },

        {
          num: 0,
          text: "3D Characteristic",
          icon: require("../../../../../assets/imgs/swiper/swiper-img1.png"),
        },
      ],
    });
    onMounted(() => {});

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="less" scoped >
.main {
  width: 100%;
  display: flex;
  justify-content: center;
  .my-swipe {
    width: 670px;
    height: 500px;
    .van-swipe-item {
      // width: 670px;
      height: 460px;
      width: 670px;
      background: rgba(255, 255, 255, 0.92);
      border-radius: 32px;

      // background-color: #ff5400;
      .item {
        // background-color: #ff5400;
        margin: 48px 32px;
        .item-title {
          font-size: 28px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          color: #603311;
          line-height: 34px;
          text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.12);
          display: flex;
        }
        img {
          margin-top: 16px;
          width: 606px;
          height: 336px;
          border-radius: 24px;
        }
      }
    }
    /deep/ .van-swipe__indicators {
      bottom: 0px;
      .van-swipe__indicator {
        width: 10px;
        height: 10px;
        // background-color: #ff5400;
        margin-right: 15px;
      }
    }
  }
}
</style>
