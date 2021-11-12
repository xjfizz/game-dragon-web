<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-contain">
        <div class="modal-content">
          <div class="modal-contain-title">
            <span>Coming Soon!</span>
          </div>
          <div class="modal-contain-text">
            <div class="modal-contain-text-top-text">
              Our developers are working hard on new features,please stay tuned
            </div>
            <!-- <div class="modal-contain-text-top-img">
              <img src="@/assets/imgs/openBox/play-game/face1.png" />
              <img src="@/assets/imgs/openBox/play-game/face2.png" />
              <img src="@/assets/imgs/openBox/play-game/face3.png" />
            </div> -->
            <!-- <div class="modal-contain-text-mid-text">Stay tuned!</div> -->
            <!-- <div class="modal-contain-text-mid-img">
              <img src="@/assets/imgs/openBox/play-game/face4.png" />
              <img src="@/assets/imgs/openBox/play-game/face5.png" />
            </div> -->
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
  name: "playGame",
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
        font-family:GothamRounded-Medium;
        color: #2e0b00;
        line-height: 32px;

        .modal-contain-text-top-img {
           img {
            width: 36px;
            height: 36px;
          }
        }
        .modal-contain-text-mid-text{
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