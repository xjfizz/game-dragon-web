<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-close" @click="closeBox">
        <img src="@/assets\imgs\openBox/close-video.png" />
      </div>
      <div class="modal-content">
        <div class="left">
          <div class="left-egg">
            <img src="@/assets/imgs/activity/home/openBox/egg.png" />
          </div>
          <div class="left-bottom">
            <img src="@/assets/imgs/activity/home/openBox/egg-bottom.png" />
          </div>
        </div>
        <div class="right">
          <div class="right-title">Genesis Dragon Eggs Rush！</div>
          <div class="right-text">
            The only chance to get a Genesis Dragon Egg <br />
            Limited Time ! <br />
            Limited quantity!
          </div>
          <div class="right-img" @click="learnMore">
            <div class="right-img-text">Learn More</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 




<script>
import { reactive, toRefs, onMounted } from "vue";

export default {
  name: "activityBox",
  props: {
    classHeader: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, context) {
    const state = reactive({});
    onMounted(() => {});

    const closeBox = () => {
      context.emit("closeActivity");
    };
    const learnMore = () => {
      context.emit("learnMore");
    };

    return {
      ...toRefs(state),
      closeBox,
      learnMore,
    };
  },
};
</script>

<style scoped lang="less">
.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  // background-color: rgba(0, 0, 0, 0.86);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999999;
}
.modal {
  width: 100%;
  // height: 1080px;
  height: 100%;

  position: relative;

  background-repeat: no-repeat;
  // background-position: bottom;
  background-size: cover;
  background-image: url("../../../assets/imgs/activity/home/openBox/bc.png");
  display: flex;
  justify-content: center;
  align-items: center;
  .modal-content {
    width: 1200px;

    height: 450px;
    position: relative;
    display: flex;
    justify-content: center;
    .left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      margin-right: 42px;
      .left-egg {
        position: absolute;
        top: -80px;
        z-index: 100;
        img {
          width: 343px;
          height: 355px;
          animation: activityEgg 2s infinite alternate;
          -webkit-animation: activityEgg 2s infinite alternate;
        }
      }
      .left-bottom {
        // position: absolute;
        // top: 180px;
        width: 714px;
        height: 282px;
        img {
          width: 714px;
          height: 282px;
        }
      }
    }
    .right {
      position: relative;
      width: 675px;
      .right-title {
        width: 675px;
        font-size: 48px;
        font-family: Gotham Rounded-Bold, Gotham Rounded;
        font-weight: bold;
        color: #ffffff;
        line-height: 56px;
      }
      .right-text {
        font-size: 24px;
        font-family: Gotham Rounded-Medium, Gotham Rounded;
        font-weight: 500;
        color: #ffffff;
        line-height: 50px;
        opacity: 0.68;
      }
      .right-img {
        margin-top: 70px;
        width: 200px;
        height: 80px;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url("../../../assets/imgs/activity/home/openBox/start-btn.png");
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        .right-img-text {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 20px;
          font-family: Gotham Rounded-Bold, Gotham Rounded;
          font-weight: bold;
          color: #603311;
          line-height: 23px;
          text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.12215311825275421);
        }
      }
    }
  }
  .modal-close {
    position: absolute;
    right: 200px;
    top: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    img {
      width: 48px;
      height: 48px;
    }
  }
  @keyframes activityEgg {
    from {
      margin-top: -20px;
    }
    to {
      margin-top: 10px;
    }
  }
  @-webkit-keyframes activityEgg {
    from {
      margin-top: -20px;
    }
    to {
      margin-top: 10px;
    }
  }
}
</style>