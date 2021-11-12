
<template>
  <div class="main">
    <div class="menu-eggs">
      <transition-group name="move">
        <div
          :class="'menu-eggs-img-wrap' + (index + 1)"
          v-for="(item, index) in eggsList"
          :key="item.id"
          @click="switchEgg(item, index)"
        >
          <img
            v-if="item && item.img"
            class="cusor_point"
            :class="'eggs-img' + (index + 1)"
            :src="item.img"
          />
          <div class="eggs-img-bottom" v-if="item && item.img">
            <!-- <img
              v-if="index == 2"
              src="@/assets/imgs/eggs/egg-bottom.png"
              alt=""
            /> -->
          </div>
        </div>
        <div class="eggs-img-bottom-mid">
          <img src="@/assets/imgs/eggs/egg-bottom.png" alt="" />
        </div>
      </transition-group>
    </div>
    <div class="head-bottom">
      <div class="head-bottom-text">
        <div>
          Players get Genesis Dragon NFT from Genesis Dragon Eggs which are
          limited and collectible, besides,these NFTs could be trade in the NFT
          Marketplace.
        </div>
      </div>
      <div class="head-bottom-btn" @click="createEgg">
        <img src="@/assets/imgs/create-btn.png" />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, ref } from "vue";

export default {
  props: {
    classHeader: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, context) {
    console.log(props);
    const state = reactive({
      eggsList: [
        { id: 1, img: require("@/assets/imgs/eggs/egg1.png") },
        { id: 2, img: require("@/assets/imgs/eggs/egg2.png") },
        { id: 3, img: require("@/assets/imgs/eggs/egg3.png") },
        { id: 4, img: require("@/assets/imgs/eggs/egg4.png") },
        { id: 5, img: require("@/assets/imgs/eggs/egg5.png") },
      ],
      previous: 0,
      now: Date.now(),
      show: true,
    });
    onMounted(() => {});
    // console.log(item, index);
    const createEgg = () => {
      context.emit("createEgg");
    };

    // 获取元素样式
    const getDomSty = (el) => {
      console.log("getDomSty", el);
      return window.getComputedStyle(el);
    };
    // 获取元素dom
    const getDom = (el) => {
      return document.querySelector(el);
    };
    // 切换蛋动画
    const switchEgg = (item, index) => {
      state.now = Date.now();
      if (state.now - state.previous > 1000) {
        /* 
          龙蛋旋转逻辑处理
        */
        let index2;
        let isClockwise;

        if (index == 0) {
          // 逆时针
          index2 = index + 1;
          isClockwise = false;
        } else if (index == 1) {
          // 逆时针
          index2 = index + 1;
          isClockwise = false;
          // state.previous = state.now;
        } else if (index == 2) {
          // 不旋转
          return;
        } else if (index == 3) {
          // 顺时针
          index2 = index - 1;
          isClockwise = true;
          // state.previous = state.now;
        } else if (index == 4) {
          // 顺时针
          index2 = index - 1;
          isClockwise = true;
        }

        if (isClockwise) {
          // 顺时针
          let item = state.eggsList.shift();
          setTimeout(() => {
            state.eggsList.push(item);
            setTimeout(() => {
              switchEgg(item, index2);
            }, 100);
          }, 500);
        } else {
          // 逆时针
          let item = state.eggsList.pop();
          // state.eggsList[0].img = null
          setTimeout(() => {
            state.eggsList.unshift(item);
            setTimeout(() => {
              switchEgg(item, index2);
            }, 100);
          }, 500);
        }
      }
    };
    return {
      ...toRefs(state),
      createEgg,
      switchEgg,
    };
  },
};
</script>

<style lang="less" scoped >
.main {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .menu-eggs {
    display: flex;
    margin-top: 104px;
    width: 100%;
    height: 380px;
    position: relative;
    .cusor_point {
      cursor: pointer;
      transition: all 2s;
    }
    .cusor_point:hover {
      // transform: scale(1.1);
    }
    .menu-eggs-img-wrap1 {
      top: 0;
      left: 40px;
      position: absolute;
      transition: 1s;
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: 99;
      width: 173px;
      .eggs-img1 {
        width: 137px;
        height: 174px;
      }
      .eggs-img-bottom {
        margin-top: 28px;
        width: 98px;
        height: 12px;
        background: #250e07;
        opacity: 0.18;
        border-radius: 50%;
        transform: scale(1, 0.7);
      }
    }

    .menu-eggs-img-wrap2 {
      top: 30px;
      left: 220px;
      position: absolute;
      transition: 1s;
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: 99;
      width: 203px;
      .eggs-img2 {
        width: 162px;
        height: 203px;
      }
      .eggs-img-bottom {
        margin-top: 20px;
        width: 98px;
        height: 12px;
        background: #250e07;
        opacity: 0.38;
        border-radius: 50%;
        transform: scale(1, 0.7);
      }
    }

    .menu-eggs-img-wrap3 {
      left: 50%;
      top: 20px;
      transform: translate(-50%);
      position: absolute;
      transition: 1s;
      width: 322px;

      .eggs-img3 {
        width: 258px;
        height: 321px;
        animation: eggMove 2s infinite alternate;
        -webkit-animation: eggMove 2s infinite alternate;
      }
      .eggs-img-bottom {
        img {
          position: absolute;
          left: 50%;
          top: 90px;
          transform: translateX(-50%);
          position: absolute;
          width: 488px;
          height: 365px;
        }
      }
    }

    .eggs-img-bottom-mid {
      left: 50%;
      top: 40px;
      position: absolute;
      transform: translateX(-50%);

      img {
        width: 488px;
        height: 365px;
      }
    }

    .menu-eggs-img-wrap4 {
      top: 30px;
      right: 220px;
      position: absolute;
      transition: 1s;
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: 99;
      width: 203px;
      .eggs-img4 {
        width: 162px;
        height: 203px;
      }
      .eggs-img-bottom {
        margin-top: 10px;
        width: 106px;
        height: 12px;
        background: #250e07;
        opacity: 0.38;
        border-radius: 50%;
        transform: scale(1, 0.7);
      }
    }

    .menu-eggs-img-wrap5 {
      top: 0;
      right: 40px;
      position: absolute;
      transition: 1s;
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: 99;
      width: 169px;
      .eggs-img5 {
        width: 134px;
        height: 170px;
      }
      .eggs-img-bottom {
        margin-top: 10px;
        margin-top: 47px;
        width: 106px;
        height: 12px;
        background: #250e07;
        opacity: 0.18;
        border-radius: 50%;
        transform: scale(1, 0.7);
      }
    }
  }

  .head-bottom {
    margin-top: 20px;
    text-align: center;
    .head-bottom-text {
      display: flex;
      justify-content: center;
      div {
        width: 924px;
        height: 64px;
        font-size: 24px;
        font-family: GothamRounded-Book, GothamRounded;
        font-weight: normal;
        color: #ffffff;
        line-height: 32px;
        opacity: 0.83;
      }
    }
    .head-bottom-btn {
      margin-top: 54px;
      cursor: pointer;
      img {
        width: 200px;
        height: 80px;
      }
    }
  }

  @keyframes eggMove {
    from {
      margin-top: 10px;
    }
    to {
      margin-top: -40px;
    }
  }
  @-webkit-keyframes eggMove {
    from {
      margin-top: 10px;
    }
    to {
      margin-top: -40px;
    }
  }
  .move-enter,
  .move-leave-to {
    opacity: 0;
  }
  .move-enter-to,
  .move-leave {
    opacity: 1;
  }
  .move-enter-active,
  .move-leave-active {
    transition: all 1s;
  }
}
</style>
