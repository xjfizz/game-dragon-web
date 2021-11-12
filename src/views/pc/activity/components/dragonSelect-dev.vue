<template>
  <div
    class="dragon-select-mid-wrap"
    v-loading="BuyLoading"
    element-loading-text="Buying..."
    element-loading-spinner="el-icon-loading"
  >
    <!-- BuyLoading -->

    <div class="egg-wrap">
      <img :src="selectDragonItem.dragonEggImg" alt="" />
    </div>
    <div class="egg-bottom-wrap">
      <div class="text">
        <img
          src="@/assets/imgs/activity/activity/index/money-type.png"
          alt=""
        />
        <!-- {{ dragonNumber > 0 && selectDragonIndex == 1 ? selectDragonItem.eggPrice : '???' }} -->
        <!-- {{ dragonNumber > 0 || selectDragonIndex == 1 ? selectDragonItem.eggPrice : '???' }} {{selectDragonIndex}} -->
        <div v-if="selectDragonIndex == 4">
          <!-- water -->
          {{ selectDragonItem.eggPrice }}
        </div>
        <div v-else-if="selectDragonIndex == 3">
          <!-- fire -->
          ???
        </div>
         <div v-else-if="selectDragonIndex == 1">
          <!-- fire -->
          0.1
        </div>
        <div v-else>???</div>
      </div>
      <img src="@/assets/imgs/activity/activity/index/egg-bottom.png" alt="" />
    </div>

    <div
      class="dragon-item dragon-item1"
      :class="selectDragonIndex1 == 3 ? 'dragon-item-bc3' : ''"
    >
      <img
        :src="dragonList[0].dragonImg"
        alt=""
        :class="
          'dragon-img-item' +
          selectDragonIndex1 +
          (dragonType != dragonList[0].type || dragonNumber == 0
            ? ' dragonEnbleBuy'
            : '')
        "
      />
    </div>
    <div
      class="dragon-item dragon-item2"
      :class="selectDragonIndex2 == 3 ? 'dragon-item-bc2' : ''"
    >
      <img
        :src="dragonList[1].dragonImg"
        alt=""
        :class="
          'dragon-img-item' +
          selectDragonIndex2 +
          (dragonType != dragonList[1].type ? ' dragonEnbleBuy' : '')
        "
      />
    </div>
    <div
      class="dragon-item dragon-item3"
      :class="selectDragonIndex3 == 3 ? 'dragon-item-bc1' : ''"
    >
      <img
        :src="dragonList[2].dragonImg"
        alt=""
        :class="
          'dragon-img-item' +
          selectDragonIndex3 +
          (dragonType != dragonList[2].type ? ' dragonEnbleBuy' : '')
        "
      />
    </div>
    <div
      class="dragon-item dragon-item4"
      :class="selectDragonIndex4 == 3 ? 'dragon-item-bc4' : ''"
    >
      <img
        :src="dragonList[3].dragonImg"
        alt=""
        :class="
          'dragon-img-item' +
          selectDragonIndex4 +
          (dragonType != dragonList[3].type ? ' dragonEnbleBuy' : '')
        "
      />
    </div>
    <div
      class="dragon-item dragon-item5"
      :class="selectDragonIndex5 == 3 ? 'dragon-item-bc5' : ''"
    >
      <img
        :src="dragonList[4].dragonImg"
        alt=""
        :class="
          'dragon-img-item' +
          selectDragonIndex5 +
          (dragonType != dragonList[4].type ? ' dragonEnbleBuy' : '')
        "
      />
    </div>
    <div class="right-move-icon" @click="selectRightDragon">
      <img
        src="@/assets/imgs/activity/activity/index/left-move-icon.png"
        alt=""
      />
    </div>
    <div class="left-move-icon" @click="selectLeftDragon">
      <img
        src="@/assets/imgs/activity/activity/index/left-move-icon.png"
        alt=""
      />
    </div>
    <div class="buy-bottom">
      <div class="bottom-text">
        <!-- {{selectDragonItem.eggName}} Dragon: Violent battle -->
        {{ selectDragonItem.eggDes }}
        <div
          class="bottom-text-des"
          v-if="
            dragonType == dragonList[selectDragonIndex - 1].type &&
            dragonNumber != 0
          "
        >
          Only {{ dragonNumber || 0 }} Eggs
        </div>
        <div class="bottom-text-des" v-else>
          {{ dragonList[selectDragonIndex - 1].eggDesDown }}
        </div>
      </div>
      <div
        v-if="
          dragonType == dragonList[selectDragonIndex - 1].type &&
          dragonNumber != 0 &&
          !isClicking && !isDragonLock
        "
        class="bottom-btn"
        @click="getBuyImgCode"
      >
        <div class="text">{{ isDragonLock ? 'Paying' :'Purchase' }}</div>
      </div>
      <!-- <div v-if="false" class="bottom-btn" @click="getBuyImgCode">
        <div class="text">Purchase</div>
      </div> -->

      <div v-else class="bottom-btn dragonEnbleBuy">
        <div class="text">{{ isDragonLock ? 'Paying' :'Purchase' }}</div>
      </div>
     <div class="lock-wrap" v-if="isDragonLock">
        <div class="lock-text">
          A dragon egg has been locked, please pay before
        </div>
       <div class="lock-time">
          {{
            Moment(isDragonLockTime).utc(0).format("HH:mm:ss UTC")
          }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs,inject } from "vue";
import selectDragon from "../use/dragon/selectDragon";

export default {
  setup() {
    onMounted(() => {
      init();
      dragonInit();
    });
    const Moment = inject("$Moment");

    let {
      selectRightDragon,
      selectLeftDragon,
      init,
      state,
      getBuyImgCode,
      dragonInit,
    } = selectDragon();

    return {
      ...toRefs(state),
      selectRightDragon,
      selectLeftDragon,
      getBuyImgCode,
      Moment
    };
  },
};
</script>
<style lang="less">
.dragon-select-mid-wrap {
  .el-loading-mask {
    background: rgba(0, 0, 0, 0.7);
  }
}
</style>
<style lang="less" scoped>
.dragon-select-mid-wrap {
  position: relative;
  width: 100%;
  height: 100%;

  .egg-wrap {
    z-index: 99;
    width: 184px;
    height: 187px;
    position: absolute;
    top: 40px;
    left: 51%;
    transform: translateX(-50%);
    animation: eggMove 2s infinite alternate;
    -webkit-animation: eggMove 2s infinite alternate;
    img {
      width: 184px;
      height: 187px;
      transform: scale(1.8);
    }
  }
  .egg-bottom-wrap {
    width: 510px;
    height: 456px;
    position: absolute;
    top: -60px;
    left: 50%;
    transform: translateX(-50%);
    img {
      width: 510px;
      height: 456px;
    }
    .text {
      position: absolute;
      bottom: 90px;
      left: 52%;
      width: 118px;
      transform: translateX(-50%);
      height: 44px;
      // background-color: #ffffff;
      font-size: 18px;
      font-family: GothamRounded-Medium;
      font-weight: bold;
      color: #ffe378;

      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 26px;
        height: 29px;
        margin-right: 5px;
      }
    }
  }
  .right-move-icon {
    position: absolute;
    top: 490px;
    // right: 300px;
    right: 300px;
    cursor: pointer;
    img {
      width: 59px;
      height: 54px;
      transform: scale(0.9);
    }
  }
  .left-move-icon {
    position: absolute;
    top: 490px;
    left: 300px;
    cursor: pointer;
    img {
      width: 59px;
      height: 54px;
      transform: rotateY(180deg) scale(0.9);
    }
  }
  .dragon-item {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 366px;
      height: 276px;
    }
  }
  .dragonEnbleBuy {
    opacity: 0.2;
  }
  .dragon-item1 {
    top: -40px;
    left: 110px;
  }
  .dragon-item-bc1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 397px;
    height: 308px;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("../../../../assets/imgs/activity/activity/index/dragon/dragon-bc/dragon1.png");
    transform: scale(1.1);
  }
  .dragon-img-item1 {
    transform: scale(0.5);
  }
  .dragon-item2 {
    top: 140px;
    left: -30px;
  }
  .dragon-item-bc2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 397px;
    height: 308px;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("../../../../assets/imgs/activity/activity/index/dragon/dragon-bc/dragon2.png");
    transform: scale(1.1);
  }
  .dragon-img-item2 {
    transform: scale(0.7);
  }
  .dragon-item3 {
    left: 35%;
    top: 325px;
    // transform: translateX(-50%);
    margin: auto; /* 有了这个就自动居中了 */
  }
  .dragon-item-bc3 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 397px;
    height: 308px;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("../../../../assets/imgs/activity/activity/index/dragon/dragon-bc/dragon3.png");
    transform: scale(1.1);
  }
  .dragon-img-item3 {
    transform: scale(1);
  }
  .dragon-item4 {
    top: 140px;
    right: -30px;
  }
  .dragon-item-bc4 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 397px;
    height: 308px;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("../../../../assets/imgs/activity/activity/index/dragon/dragon-bc/dragon4.png");
    transform: scale(1.1);
  }
  .dragon-img-item4 {
    transform: scale(0.7);
  }
  .dragon-item5 {
    top: -40px;
    right: 110px;
  }
  .dragon-item-bc5 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 397px;
    height: 308px;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("../../../../assets/imgs/activity/activity/index/dragon/dragon-bc/dragon5.png");
    transform: scale(1.1);
  }
  .dragon-img-item5 {
    transform: scale(0.5);
  }
  .buy-bottom {
    position: absolute;
    left: 50%;
    bottom: 62px;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    .bottom-text {
      font-size: 26px;
      font-family: GothamRounded;
      font-weight: 400;
      color: #ffffff;
      line-height: 36px;
      text-shadow: 0px 6px 6px rgba(0, 0, 0, 0.29);
      text-align: center;
      .bottom-text-des {
        margin-top: 5px;
      }
    }
    .bottom-btn {
      margin-top: 20px;
      width: calc(265px * 0.8);
      height: calc(114px * 0.8);
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url("../../../../assets/imgs/activity/activity/index/buy-btn.png");
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      .text {
        font-size: 24px;
        font-family: GothamRounded;
        font-weight: bold;
        color: #794126;
      }
    }
    .lock-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 45px;
      width: 1200px;
      font-size: 18px;
      font-family: GothamRounded;
      font-weight: 400;
      color: #ffffff;
      line-height: 36px;
      text-shadow: 0px 6px 6px rgba(0, 0, 0, 0.29);
      text-align: center;
      .lock-text {
        //  width: 800px;
      }
      .lock-time {
        margin-left: 10px;
        // width: 300px;
      }
    }
  }
  @keyframes eggMove {
    from {
      margin-top: -60px;
    }
    to {
      margin-top: -20px;
    }
  }
  @-webkit-keyframes eggMove {
    from {
      margin-top: -60px;
    }
    to {
      margin-top: -20px;
    }
  }
}
</style>