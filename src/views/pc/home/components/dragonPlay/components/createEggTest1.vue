
<template>
  <div class="main">
    <div class="menu-eggs">
      <div class="dragon-item dragon-item1" @click="switchEgg(1)">
        <img
          :src="eggsList[0].img"
          alt=""
          class="'dragon-img-item1'"
          :class="'dragon-item-bc' + selectDragonIndex1"
        />
      </div>

      <div class="dragon-item dragon-item2" @click="switchEgg(2)">
        <img
          :src="eggsList[1].img"
          alt=""
          class="'dragon-img-item2"
          :class="'dragon-item-bc' + selectDragonIndex2"
        />
      </div>
      <div class="dragon-item dragon-item3" @click="switchEgg(3)">
        <img
          :src="eggsList[2].img"
          alt=""
          class="'dragon-img-item3"
          :class="'dragon-item-bc' + selectDragonIndex3"
        />
      </div>
      <div class="dragon-item dragon-item4" @click="switchEgg(4)">
        <img
          :src="eggsList[3].img"
          alt=""
          class="'dragon-img-item4"
          :class="'dragon-item-bc' + selectDragonIndex4"
        />
      </div>
      <div class="dragon-item dragon-item5" @click="switchEgg(5)">
        <img
          :src="eggsList[4].img"
          alt=""
          class="'dragon-img-item5"
          :class="'dragon-item-bc' + selectDragonIndex5"
        />
      </div>
      <div class="dragon-egg-bottom1"></div>
      <div class="dragon-egg-bottom2"></div>
      <div class="dragon-egg-bottom3">
         <img src="@/assets/imgs/eggs/egg-bottom.png" alt="" />
      </div>
      <div class="dragon-egg-bottom4"></div>
      <div class="dragon-egg-bottom5"></div>
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
import { reactive, toRefs, onMounted, ref } from "vue";
import createEggHandle from "./use/createEgg";
export default {
  props: {
    classHeader: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, context) {
    console.log(props);
    const state = reactive({});
    onMounted(() => {});
    let { createEgg, switchEgg, createEggData } = createEggHandle(context);

    return {
      ...toRefs(state),
      ...toRefs(createEggData),
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
    // margin-top: 70px;
    width: 100%;
    height: 380px;
    position: relative;
    .dragon-item {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .dragon-item1 {
      top: 0px;
      left: 40px;
    }
    .dragon-item-bc1 {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 184px;
      height: 187px;
      transform: scale(1);
    }

    .dragon-img-item1 {
      transform: scale(1);
    }
   
    .dragon-item2 {
      top: 40px;
      left: 220px;
    }
    .dragon-item-bc2 {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 184px;
      height: 187px;
      transform: scale(1.2);
    }
    .dragon-img-item2 {
      transform: scale(1.2);
    }
    .dragon-item3 {
      // left: 50%;
      // top: 20px;
      // transform: translate(-50%);
      position: absolute;
      left: 43%;
      top: 60px;
      margin: auto; /* 有了这个就自动居中了 */
    }
    .dragon-item-bc3 {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 184px;
      height: 187px;
      transform: scale(1.5);
       animation: eggMove 2s infinite alternate;
      -webkit-animation: eggMove 2s infinite alternate;
    }

    .dragon-img-item3 {
      transform: scale(1.5);
     
    }
    .dragon-item4 {
      top: 40px;
      right: 220px;
    }
    .dragon-item-bc4 {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 184px;
      height: 187px;
      transform: scale(1.2);
    }

    .dragon-img-item4 {
      transform: scale(1.2);
    }
    .dragon-item5 {
      top: 0px;
      right: 40px;
    }
    .dragon-item-bc5 {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 184px;
      height: 187px;
      transform: scale(1);
    }

    .dragon-img-item5 {
      transform: scale(1);
    }


     .dragon-egg-bottom1 {
      position: absolute;
      top: 200px;
      left: 80px;
      width: 98px;
      height: 12px;
      background: #250e07;
      opacity: 0.38;
      border-radius: 50%;
      transform: scale(1, 0.7);
    }
     .dragon-egg-bottom2 {
      position: absolute;
      top: 250px;
      left: 260px;
      width: 98px;
      height: 12px;
      background: #250e07;
      opacity: 0.38;
      border-radius: 50%;
      transform: scale(1, 0.7);
    }
     .dragon-egg-bottom3 {
      position: absolute;
      top: 60px;
      left: 370px;
   
      // transform: scale(1, 0.7);
       img {
        width: 488px;
        height: 365px;
      }
    }
     .dragon-egg-bottom4 {
      position: absolute;
      top: 250px;
      right: 260px;
      width: 98px;
      height: 12px;
      background: #250e07;
      opacity: 0.38;
      border-radius: 50%;
      transform: scale(1, 0.7);
    }
     .dragon-egg-bottom5 {
      position: absolute;
      top: 200px;
      right: 80px;
      width: 98px;
      height: 12px;
      background: #250e07;
      opacity: 0.38;
      border-radius: 50%;
      transform: scale(1, 0.7);
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
