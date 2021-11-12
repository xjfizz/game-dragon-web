<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-contain">
        <div class="modal-content">
          <div class="light-wrap"></div>
          <div class="modal-contain-title">
            <img src="@/assets/imgs/openBox/buyEggBox/card-title.png" alt="" />
          </div>
          <div class="modal-contain-text">
            <div class="modal-contain-text-top-img">
              <img :src="buyEggImg" />
              <!-- <img src="@/assets/imgs/openBox/buyEggBox/egg2.png" /> -->
            </div>

            <div class="modal-contain-text-top-img-bottom">
              <img src="@/assets/imgs/openBox/buyEggBox/egg-bottom.png" />
            </div>
            <div class="modal-contain-text-mid-text">
              <div class="modal-contain-text-mid-text-top">
                You've got a Genesis Dragon Egg
              </div>
              <div class="modal-contain-text-mid-text-mid">
                Genesis Dragon Egg has been successfully distributed, please
                click "My Mainland" to check your egg
              </div>
              <!-- <div class="modal-contain-text-mid-text-bottom"></div> -->
            </div>
          </div>
        </div>
        <div class="modal-buy" @click="confirm">
          <img src="@/assets/imgs/openBox/buyEggBox/buy-btn.png" />
        </div>
      </div>
      <div class="close" @click="closeBox">
        <img src="@/assets/imgs/openBox/buyEggBox/close.png" alt="" />
      </div>
    </div>
  </div>
</template>
 




<script>
import { reactive, toRefs, onMounted } from "vue";
import selectDragon from "@/views/pc/activity/use/dragon/selectDragon";

export default {
  name: "buyEggBox",
  props: {
    classHeader: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, context) {
    // const state = reactive({});
    onMounted(() => {});
    let { state, dragonLocalTypeList } = selectDragon();
    const closeBox = () => {
      console.log("state", state, dragonLocalTypeList);
      // context.emit("closeBox");
    };
    const confirm = () => {
      context.emit("closeBox");
    };

    return {
      ...toRefs(state),
      dragonLocalTypeList,
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
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999999;
}
.modal {
  width: 1030px;
  height: 689px;
  // background: #140500;
  border-radius: 16px;
  position: relative;

  .modal-contain {
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("../../../assets/imgs/openBox/buyEggBox/card-bc.png");
    .modal-content {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      position: relative;
      .light-wrap {
        position: absolute;
        top: 50px;
        left: 50%;
        transform: translateX(-50%);
        width: 418px;
        height: 473px;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url("../../../assets/imgs/openBox/buyEggBox/egg-wrap.png");
      }
      .modal-contain-title {
        margin-top: 113px;
        text-align: center;
        z-index: 99;
        img {
          width: 353px;
          height: 58px;
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
        display: flex;
        flex-direction: column;

        align-items: center;
        .modal-contain-text-top-img {
          z-index: 99;
          img {
            // width: 185px;
            // height: 187px;
            width: 174px;
            height: 219px;
            transform: scale(0.9);
          }
        }
        .modal-contain-text-top-img-bottom {
          z-index: 99;
          img {
            width: 135px;
            height: 21px;
          }
        }
        .modal-contain-text-mid-text {
          margin-top: 20px;
          .modal-contain-text-mid-text-top {
            font-size: 18px;
            font-family: GothamRounded;
            font-weight: bold;
            color: #794126;
            line-height: 28px;
          }
          .modal-contain-text-mid-text-mid {
            font-size: 18px;
            font-family: GothamRounded;
            font-weight: bold;
            color: #794126;
            line-height: 28px;
          }
        }
      }
    }
    .modal-buy {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 22px;
      cursor: pointer;
      img {
        width: 180px;
        height: 79px;
      }
    }
  }

  .close {
    cursor: pointer;
    position: absolute;
    right: -20px;
    top: 10px;
    img {
      width: 77px;
      height: 77px;
    }
  }
}
</style>