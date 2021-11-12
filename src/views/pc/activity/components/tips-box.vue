<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-contain">
        <div class="modal-content">
          <div class="light-wrap"></div>
          <div class="modal-contain-title">
            <img
              src="@/assets/imgs/activity/activity/tips-bc-title.png"
              alt=""
            />
          </div>
          <div class="modal-contain-text">
            <div class="modal-contain-text-top-img">
              <!-- <img :src="buyEggImg" /> -->
              <img src="@/assets/imgs/openBox/buyEggBox/egg1.png" />
            </div>

            <div class="modal-contain-text-top-img-bottom">
              <img src="@/assets/imgs/openBox/buyEggBox/egg-bottom.png" />
            </div>
            <div class="modal-contain-text-mid-text">
              <div class="modal-contain-text-mid-text-top">
                There are a total of 10,000 Genesis Dragon Eggs, 95% of which
                are available for users to purchase, 1% are for airdrops, and
                the remaining 4% are for later community rewards
              </div>
              <!-- <div class="modal-contain-text-mid-text-mid">
             
              </div> -->
              <div class="modal-contain-text-mid-text-bottom">
                <div class="item">
                  Those who invite new users to reach the top 100 in the ranking
                  will be rewarded with 1 egg and certain tokens
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="modal-buy" @click="confirm">
          <img src="@/assets/imgs/openBox/buyEggBox/buy-btn.png" />
        </div> -->
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
      context.emit("closeBox");
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
  width: calc(1086px * 0.7);
  height: calc(1172px * 0.7);
  // background: #140500;
  border-radius: 16px;
  position: relative;

  .modal-contain {
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("../../../../assets/imgs/activity/activity/tips-bc.png");
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
        background-image: url("../../../../assets/imgs/openBox/buyEggBox/egg-wrap.png");
      }
      .modal-contain-title {
        margin-top: 53px;
        text-align: center;
        z-index: 99;
        img {
          // width: 353px;
          // height: 58px;
          width: calc(677px * 0.7);
          height: calc(69px * 0.7);
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
          margin-top: 60px;
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
          margin-top: 30px;
          .modal-contain-text-mid-text-top {
            font-size: 18px;
            font-family: GothamRounded;
            font-weight: bold;
            color: #794126;
            line-height: 28px;
            text-align: left;
          }
          .modal-contain-text-mid-text-mid {
            font-size: 18px;
            font-family: GothamRounded;
            font-weight: bold;
            color: #794126;
            line-height: 28px;
          }
          .modal-contain-text-mid-text-bottom {
            margin-top: 32px;
            font-size: 18px;
            font-family: GothamRounded;
            font-weight: bold;
            color: #794126;
            line-height: 28px;
            text-align: left;
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
    right: 10px;
    top: 10px;
    img {
      width: calc(77px * 0.7);
      height: calc(77px * 0.7);
    }
  }
}
</style>