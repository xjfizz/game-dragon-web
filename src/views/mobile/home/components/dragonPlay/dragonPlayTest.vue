
<template>
  <div class="head">
    <div class="head-top">
      <span>DragonPlay</span>
    </div>
    <div class="head-mid">
      <div class="menu-list">
        <div
          class="menu-list-item"
          @click="selectPlayItem(1)"
          :class="dragonPlayType == 1 ? 'menu-list-item-selected' : ''"
        >
          <span>Create Egg <br>(Pre-sale)</span>
        </div>
        <div
          class="menu-list-item"
          @click="selectPlayItem(2)"
          :class="dragonPlayType == 2 ? 'menu-list-item-selected' : ''"
        >
          <span>Characteristic</span>
        </div>
        <div
          class="menu-list-item"
          @click="selectPlayItem(3)"
          :class="dragonPlayType == 3 ? 'menu-list-item-selected' : ''"
        >
          <span>Blind Box</span>
        </div>
        <div
          class="menu-list-item"
          @click="selectPlayItem(4)"
          :class="dragonPlayType == 4 ? 'menu-list-item-selected' : ''"
        >
          <span>Synthesis for Bone</span>
        </div>
      </div>
      <div class="menu-eggs">
        <div class="menu-eggs-img">
          <div class="menu-eggs-img-wrap1">
            <img class="eggs-img1" src="@/assets/imgs/eggs/egg1.png" />
            <div class="eggs-img-bottom"></div>
          </div>
        </div>

        <div class="menu-eggs-img">
          <div class="menu-eggs-img-wrap2">
            <img class="eggs-img2" src="@/assets/imgs/eggs/egg2.png" />
            <div class="eggs-img-bottom"></div>
          </div>
        </div>

        <div class="menu-eggs-img">
          <div class="menu-eggs-img-wrap3">
            <img class="eggs-img3" src="@/assets/imgs/eggs/egg3.png" />
            <div class="eggs-img-bottom">
              <img src="@/assets/imgs/eggs/egg-bottom.png" alt="" />
            </div>
          </div>
        </div>

        <div class="menu-eggs-img">
          <div class="menu-eggs-img-wrap4">
            <img class="eggs-img4" src="@/assets/imgs/eggs/egg4.png" />
            <div class="eggs-img-bottom"></div>
          </div>
        </div>

        <div class="menu-eggs-img">
          <div class="menu-eggs-img-wrap5">
            <img class="eggs-img5" src="@/assets/imgs/eggs/egg5.png" />
            <div class="eggs-img-bottom"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="head-bottom">
      <div class="head-bottom-text">
        <span>
          Genesis Dragon NFT can be opened in Genesis Dragon Egg, which is very
          collectible and can be traded or auctioned in the NFT market
        </span>
      </div>
      <div class="head-bottom-btn">
        <img src="@/assets/imgs/create-btn.png" />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
// import { useRouter } from 'vue-router'

// import { useStore } from "vuex";

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
      dragonPlayType: 1, // dragonPlay 类型
    });
    onMounted(() => {});
    const selectPlayItem = (item) => {
      console.log(item);
      state.dragonPlayType = item;
    };
    return {
      ...toRefs(state),
      selectPlayItem,
    };
  },
};
</script>

<style lang="less" scoped >
.head {
  text-align: center;
  .head-top {
    // margin-top: 80px;
    font-size: 64px;
    font-family: GothamRounded-Bold, GothamRounded;
    font-weight: bold;
    color: #ffffff;
  }
  .head-mid {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 40px;
  
    .menu-list {
      min-width: 792px;
      min-height: 64px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 44px;
      // border: 2px solid rgba(255, 255, 255, 0.1);
      display: flex;
      justify-content: space-between;
      .menu-list-item {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 204px;
        cursor: pointer;
        // height: 64px;
        padding: 18px 48px;
        // background: linear-gradient(180deg, #4c1200 0%, #140c09 100%);
        // border-radius: 44px;
        span {
          font-size: 18px;
          font-family: GothamRounded-Bold, GothamRounded;
          font-weight: bold;
          color: #ffffff;
          text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.12);
        }
      }
      .menu-list-item:hover {
        width: 204px;
        height: 64px;
        background: linear-gradient(180deg, #4c1200 0%, #140c09 100%);
        border-radius: 44px;
        opacity: 0.55;
        span {
          font-size: 18px;
          font-family: GothamRounded-Bold, GothamRounded;
          font-weight: bold;
          color: #ffffff;
          line-height: 22px;
          text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.12);
        }
      }
      .menu-list-item-selected {
        width: 204px;
        height: 64px;
        background: linear-gradient(180deg, #4c1200 0%, #140c09 100%);
        border-radius: 44px;
        span {
          font-size: 18px;
          font-family: GothamRounded-Bold, GothamRounded;
          font-weight: bold;
          color: #ffffff;
          line-height: 22px;
          text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.12);
        }
      }
    }
    .menu-eggs {
      display: flex;
      margin-top: 43px;
      // position: relative;
      .menu-eggs-img {
        .menu-eggs-img-wrap1 {
          background-repeat: no-repeat;
          background-size: cover;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          .eggs-img1 {
            width: 173px;
            height: 218px;
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
          background-repeat: no-repeat;
          background-size: cover;
          padding-top: 43px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          .eggs-img2 {
            width: 203px;
            height: 256px;
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
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
          width: 488px;
          height: 365px;
          //   background-image: url("../../../../assets/imgs/eggs/egg-bottom.png");
          .eggs-img3 {
            width: 322px;
            height: 402px;
            bottom: 40px;
            left: 0px;
            position: relative;
            animation: ghostUpdown 2s infinite alternate;
            -webkit-animation: ghostUpdown 2s infinite alternate;
          }
          .eggs-img-bottom {
           img {
            bottom: -60px;
            left: 0px;
            position: absolute;
              width: 488px;
              height: 365px;
            //   width: 322px;
            // height: 402px;
            }
          }
        }
        .menu-eggs-img-wrap4 {
          background-repeat: no-repeat;
          background-size: cover;
          padding-top: 43px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          .eggs-img4 {
            width: 203px;
            height: 256px;
          }
          .eggs-img-bottom {
            margin-top: 20px;
            width: 106px;
            height: 12px;
            background: #250e07;
            opacity: 0.38;
            border-radius: 50%;
            transform: scale(1, 0.7);
          }
        }
        .menu-eggs-img-wrap5 {
          background-repeat: no-repeat;
          background-size: cover;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          .eggs-img5 {
            width: 169px;
            height: 213px;
          }
          .eggs-img-bottom {
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
    }
  }
  .head-bottom {
    margin-top: 46px;
    .head-bottom-text {
      display: flex;
      justify-content: center;
      span {
        width: 924px;
        height: 64px;
        font-size: 24px;
        font-family: GothamRounded-Medium, GothamRounded;
        font-weight: 500;
        color: #ffffff;
      }
    }
    .head-bottom-btn {
      margin-top: 20px;
      img {
        width: 200px;
        height: 80px;
      }
    }
  }
}
 @keyframes ghostUpdown {
            from {
                margin-top: -30px;
            }
            to {
                margin-top: 10px;
            }
        }     
        @-webkit-keyframes ghostUpdown {
            from {
                margin-top: -30px;
            }
            to {
                margin-top: 10px;
            }
        }
</style>
