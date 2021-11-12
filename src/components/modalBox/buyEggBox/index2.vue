<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-contain">
        <div class="modal-content">
          <div class="modal-contain-title">
            <span> Congratulations!</span>
          </div>
          <div class="modal-contain-text">
            <div class="modal-contain-text-top-img">
              <img src="@/assets/imgs/openBox/buyEggBox/egg.png" />
            </div>
            <div class="modal-contain-text-mid-text">
              <div class="modal-contain-text-mid-text-top">
                You've got a Genesis Dragon Egg.
              </div>
              <div class="modal-contain-text-mid-text-mid">
                Genesis Dragon eggs will be distributed to your address on
                2021.10.1
              </div>
              <!-- <div class="modal-contain-text-mid-text-bottom"></div> -->
            </div>
          </div>
        </div>
      </div>
      <div class="modal-close" @click="closeBox">
        <img src="@/assets/imgs/openBox/play-game/play-game-close.png" />
      </div>
    </div>
  </div>
</template>
 




<script>
import { reactive, toRefs, onMounted } from "vue";

export default {
  name: "buyEggBox",
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
        margin-top: 113px;
        text-align: center;
        span {
          font-size: 48px;
          font-family: GothamRounded-Bold, GothamRounded;
          font-weight: bold;
          color: #2e0b00;
          line-height: 54px;
        }
      }
      .modal-contain-text {
        // margin-top: 69px;
        width: 572px;
        text-align: center;
        font-size: 24px;
        font-family: GothamRounded-Bold, GothamRounded;
        font-weight: bold;
        color: #2e0b00;
        line-height: 32px;

        .modal-contain-text-top-img {
          img {
            width: 142px;
            height: 147px;
          }
        }
        .modal-contain-text-mid-text {
          // margin-top: 20px;
          .modal-contain-text-mid-text-top {
            font-size: 24px;
            font-family: Gotham Rounded-Bold, Gotham Rounded;
            font-weight: bold;
            color: #2e0b00;
          }
          .modal-contain-text-mid-text-mid {
            font-size: 24px;
            font-family: Gotham Rounded-Bold, Gotham Rounded;
            font-weight: bold;
            color: #2e0b00;
          }
        }
      }
    }
  }
  .modal-close {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    cursor: pointer;
    img {
      width: 200px;
      height: 83px;
    }
  }
}
</style>