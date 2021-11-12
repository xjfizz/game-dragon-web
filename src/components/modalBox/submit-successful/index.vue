<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-contain">
        <div class="modal-content">
          <div class="modal-contain-title">
            <span>Submit successful!</span>
          </div>
          <div class="modal-contain-text">
            <div class="modal-contain-text-top-text">
              Please continue to follow us on Twitter and Telegram, as the
              winner of the prize will be announced after the activity
              concludes.
            </div>
          </div>
        </div>
      </div>
      <div class="model-bottom-wrap">
        <div class="modal-close" @click="closeBox">
          <!-- <img src="@/assets/imgs/openBox/play-game/play-game-close.png" /> -->
          <div class="model-text">To Invite</div>
        </div>
      </div>
    </div>
  </div>
</template>
 




<script>
import { reactive, toRefs, onMounted } from "vue";

export default {
  name: "submitSuccessful",
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
      context.emit("closeBox");
    };
    const confirm = () => {
      context.emit("closeBox");
    };

    return {
      ...toRefs(state),
      closeBox,
      confirm,
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
  background-color: rgba(0, 0, 0, 0.86);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999999;
}
.modal {
  width: 836px;
  height: 527px;
  // background: #140500;
  border-radius: 16px;
  position: relative;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  //flex-direction: column;
  .modal-contain {
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("../../../assets/imgs/openBox/play-game/play-game-bc.png");
    .modal-content {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      .modal-contain-title {
        // margin-top: 113px;
        margin-top: 150px;
        text-align: center;
        span {
          font-size: 48px;
          font-family: GothamRounded-Medium;
          color: #2e0b00;
          line-height: 54px;
        }
      }
      .modal-contain-text {
        margin-top: 69px;
        width: 572px;
        text-align: center;
        font-size: 24px;
        font-family: GothamRounded-Medium;
        color: #2e0b00;
        line-height: 32px;

        .modal-contain-text-top-img {
          img {
            width: 36px;
            height: 36px;
          }
        }
        .modal-contain-text-mid-text {
          margin-top: 20px;
        }
        .modal-contain-text-mid-img {
          img {
            width: 36px;
            height: 36px;
          }
        }
      }
    }
  }
  .model-bottom-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    .modal-close {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 40px;
      cursor: pointer;
      width: 148px;
      height: 68px;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url("../../../assets/imgs/openBox/play-game/close.png");
      .model-text {
        font-size: 20px;
        font-family: GothamRounded-Medium, GothamRounded;
        font-weight: 500;
        color: #603311;
        line-height: 24px;
        text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.12);
      }
    }
  }
}
</style>