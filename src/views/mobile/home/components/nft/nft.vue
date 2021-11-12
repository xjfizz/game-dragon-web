
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
    <div class="bottom">
      <div class="bottom-btn" @click="getMore">Get More</div>
      <div class="bottom-left-img"><img src="@/assets/imgs/right-m.png" /></div>
    </div>
    <div class="content">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in swiperList" :key="index">
          <div class="item">
            <img :src="item.icon" />
            <div class="item-name">Fire Dragon</div>
            <div class="item-color">(#10123)</div>
          </div>
        </van-swipe-item>
      </van-swipe>
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
          text: "Fire Dragon",
          color: "(#10123)",
          icon: require("@/assets/imgs/dragon/dragon-fire-m.png"),
        },
        {
          num: 2,
          text: "Thunder Dragon",
          color: "(#11123)",
          icon: require("@/assets/imgs/dragon/dragon-thunder-m.png"),
        },
        {
          num: 3,
          text: "Rock Dragon",
          color: "(#14621)",
          icon: require("@/assets/imgs/dragon/dragon-stone-m.png"),
        },
        {
          num: 4,
          text: "Storm Dragon",
          color: "(#18013)",
          icon: require("@/assets/imgs/dragon/dragon-storm-m.png"),
        },

        {
          num: 5,
          text: "Water Dragon",
          color: "(#16621)",
          icon: require("@/assets/imgs/dragon/dragon-water-m.png"),
        },
      ],
    });
    onMounted(() => {});
    const getMore = () => {
      context.emit("createEgg");
    };

    return {
      ...toRefs(state),
      getMore,
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
    margin-top: 24px;
    text-align: center;
    span {
      width: 640px;
      height: 200px;
      font-size: 28px;
      font-family: GothamRounded-Book, GothamRounded;
      font-weight: normal;
      color: #ffffff;
      line-height: 42px;
      opacity: 0.83;
    }
  }
  .bottom {
    margin-top: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    .bottom-btn {
      font-size: 28px;
      font-family: GothamRounded-Book, GothamRounded;
      font-weight: normal;
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
      img {
        width: 20px;
        height: 24px;
      }
    }
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    .my-swipe {
      width: 682px;
      height: 550px;
      .van-swipe-item {
        height: 550px;
        width: 682px;
        .item {
          width: 682px;
          height: 498px;

          border-radius: 32px;
          position: relative;
          display: flex;
          justify-content: center;

          img {
            width: 682px;
            height: 498px;
          }
          .item-name {
            font-size: 32px;
            font-family: GothamRounded-Medium, GothamRounded;
            font-weight: 500;
            color: #ffffff;
            line-height: 38px;
            text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.12);
            position: absolute;
            bottom: 50px;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          .item-color {
            font-size: 26px;
            font-family: GothamRounded-Book, GothamRounded;
            font-weight: normal;
            color: #ffffff;
            opacity: 0.63;
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translate(-50%, -50%);
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
}
</style>
