
<template>
  <div class="main">
    <div class="menu-eggs" name="list" mode="out-in">
      <transition-group>
        <div
          :class="'menu-eggs-img-wrap' + (index + 1)"
          v-for="(item, index) in eggsList"
          :key="item.id"
          @click="switchEgg(item, index)"
        >
          <img :class="'eggs-img' + (index + 1)" :src="item.img" />
          <div class="eggs-img-bottom">
            <img
              v-if="index == 2"
              src="@/assets/imgs/eggs/egg-bottom-m.png"
              alt=""
            />
          </div>
        </div>
      </transition-group>

     
    </div>
    <div class="head-bottom">
      <div class="head-bottom-text">
        <div>
          Genesis Dragon NFT can be opened in Genesis Dragon Egg, which is very
          collectible and can be traded or auctioned in the NFT market
        </div>
      </div>
      <div class="head-bottom-btn" @click="createEgg">
        <img src="@/assets/imgs/create-btn.png" />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";

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
        { id: 1, img: require("@/assets/imgs/eggs/egg1-m.png") },
        { id: 2, img: require("@/assets/imgs/eggs/egg2-m.png") },
        { id: 3, img: require("@/assets/imgs/eggs/egg3-m.png") },
        { id: 4, img: require("@/assets/imgs/eggs/egg4-m.png") },
        { id: 5, img: require("@/assets/imgs/eggs/egg5-m.png") },
      ],
      previous: 0,
      now: Date.now(),
      show: true,
    });
    onMounted(() => {});
    const createEgg = () => {
      context.emit("createEgg");
    };
    // 切换蛋动画
    const switchEgg = (item, index) => {
      // console.log(item, index);
      state.now = Date.now();
      if (state.now - state.previous > 100) {
        let index2 = index - 2 >= 0 ? index - 2 : index + 1;
        for (let i = 0; i < index2; i++) {
          console.log("=========", index);
          state.eggsList.push(state.eggsList.shift());
        }
        state.previous = state.now;
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
    margin-top: 84px;
    width: 90%;
    height: 402px;
    position: relative;
    .menu-eggs-img-wrap1 {
      top: 0;
      left: 0;
      position: absolute;
      transition: 1s;
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: 99;
      width: 90px;
      .eggs-img1 {
        width: 90px;
        height: 114px;
      }
      .eggs-img-bottom {
        margin-top: 10px;
        width: 64px;
        height: 6px;
        background: #250e07;
        opacity: 0.18;
        border-radius: 50%;
        transform: scale(1, 0.7);
      }
    }

    .menu-eggs-img-wrap2 {
      top: 30px;
      left: 120px;
      position: absolute;
      transition: 1s;
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: 99;
      width: 104px;
      .eggs-img2 {
        width: 104px;
        height: 132px;
      }
      .eggs-img-bottom {
        margin-top: 10px;
        width: 64px;
        height: 6px;
        background: #250e07;
        opacity: 0.18;
        border-radius: 50%;
        transform: scale(1, 0.7);
      }
    }

    .menu-eggs-img-wrap3 {
      left: 50%;
      top: 30px;
      transform: translate(-50%);
      position: absolute;
      transition: 1s;
      width: 166px;

      .eggs-img3 {
        width: 166px;
        height: 208px;
        animation: eggMove 2s infinite alternate;
        -webkit-animation: eggMove 2s infinite alternate;
      }
      .eggs-img-bottom {
        img {
          position: absolute;
          left: 50%;
          top: -50px;
          transform: translateX(-50%);
          position: absolute;
          width: 480px;
          height: 402px;
        }
      }
    }

    .menu-eggs-img-wrap4 {
      top: 30px;
      right: 120px;
      position: absolute;
      transition: 1s;
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: 99;
      width: 104px;
      .eggs-img4 {
        width: 104px;
        height: 132px;
      }
      .eggs-img-bottom {
        margin-top: 10px;
        width: 64px;
        height: 6px;
        background: #250e07;
        opacity: 0.18;
        border-radius: 50%;
        transform: scale(1, 0.7);
      }
    }

    .menu-eggs-img-wrap5 {
      top: 0;
      right: 0;
      position: absolute;
      transition: 1s;
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: 99;
      width: 90px;
      .eggs-img5 {
        width: 90px;
        height: 114px;
      }
      .eggs-img-bottom {
        margin-top: 10px;
        width: 64px;
        height: 6px;
        background: #250e07;
        opacity: 0.18;
        border-radius: 50%;
        transform: scale(1, 0.7);
      }
    }
  }

  .head-bottom {
   // margin-top: 46px;
    text-align: center;
    .head-bottom-text {
      display: flex;
      justify-content: center;
      div {
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
    .head-bottom-btn {
      margin-top: 48px;
      cursor: pointer;
      img {
        width: 220px;
        height: 80px;
      }
    }
  }

  @keyframes eggMove {
    from {
      margin-top: -30px;
    }
    to {
      margin-top: 10px;
    }
  }
  @-webkit-keyframes eggMove {
    from {
      margin-top: -30px;
    }
    to {
      margin-top: 10px;
    }
  }
}
</style>
