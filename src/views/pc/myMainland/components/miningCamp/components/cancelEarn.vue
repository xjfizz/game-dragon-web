<template>
  <div class="modal-backdrop">
    <div
      class="modal"
      v-loading="loadingForm.loadingShow"
      :element-loading-text="loadingForm.loadingShowText"
      element-loading-spinner="el-icon-loading"
    >
      <div class="modal-contain">
        <div class="modal-content">
          <div class="title">Cancel staking</div>
          <div class="content">
            <div class="detail-top">
              The current staking has not been completed, are you sure cancel
              it?
            </div>

            <div class="detail-mid">
              <div class="detail-left">Est. Reward(DMP)</div>
              <div class="detail-right">
                {{ localEarnDetail.earnedReward }} DMP
              </div>
            </div>
            <div class="detail-mid">
              <div class="detail-left">Stamina Consumption</div>
              <div class="detail-right">
                <div class="detail-text">
                  {{ localEarnDetail.bodyPower }}
                </div>
                <!-- <div class="detail-img">
                  <img
                    src="@/assets/imgs/myMainland/miningCamp/selectDragons/question-line.png"
                    alt=""
                  />
                </div> -->
              </div>
            </div>

            <!-- <div class="tips" v-if="true">
              * Not enough! You only have 20 stamina left.
            </div> -->
          </div>

          <div class="content-btns">
            <div class="cancel select-hover" @click="backToList">
              Back to list
            </div>
            <div
              v-if="localEarnDetail.status == 1"
              class="confirm select-hover"
              @click="sureCancelEarn"
            >
              Sure
            </div>
            <div v-else class="confirm select-hover no-data">Sure</div>
          </div>
        </div>
      </div>

      <div v-if="!loadingForm.loadingShow" class="close" @click="backToList">
        <img src="@/assets/imgs/openBox/img-code/close.png" alt="" />
      </div>
    </div>
  </div>
</template>
 




<script>
import { reactive, toRefs, onMounted } from "vue";
import selectDragon from "@/views/pc/activity/use/dragon/selectDragon";
import dragonLocalTypeList from "@/views/pc/myMainland/use/dragonLocalTypeList";
import myDragon from "@/views/pc/myMainland/use/myDragon";
import dragonCreate from "@/views/pc/myMainland/components/dragonCreate/campSelectCreateDragon.vue";
import miningCampRightHandle from "../../../use/miningCamp/right";
import page from "@/components/page/index.vue";
import selectList from "@/components/selectList/selectListDetail.vue";
export default {
  name: "earnedDetail",
  components: {
    dragonCreate,
    page,
    selectList,
  },
  props: {
    classHeader: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, context) {
    const selectDragonState = reactive({});
    onMounted(() => {
      // init();
    });

    // let { state, confirm, getCode, closeImgCodeBox } = selectDragon();
    // const { dragonClazzImgHandle, createDragon } = myDragon();
    const { miningCampRightState, sureCancelEarn, backToList } =
      miningCampRightHandle(context);

    return {
      ...toRefs(selectDragonState),
      ...toRefs(miningCampRightState),
      sureCancelEarn,
      backToList,
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
  background-color: rgba(20, 19, 19, 0.86);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999999;
}
.modal {
  width: 588px;
  height: 660px;
  background: #282523;
  border-radius: 8px;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.12);

  .modal-contain {
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    .modal-content {
      margin: 32px 70px;
      .title {
        font-size: 28px;
        font-family: GothamRounded-Medium, GothamRounded;
        font-weight: 500;
        color: #ffffff;
        display: flex;
        justify-content: center;
      }
      .content {
        margin-top: 60px;
        // height: 340px;
        // margin-bottom: 38px;
        .detail-top {
          text-align: center;
          font-size: 18px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          color: #ffffff;
          // margin-top: 174px;
          line-height: 27px;
        }
        .detail-top-des {
          text-align: left;
          font-size: 14px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          color: #ffffff;
          margin-top: 20px;
          line-height: 20px;
          opacity: 0.68;
        }
        .detail-mid {
          display: flex;
          justify-content: space-between;
          margin-top: 80px;
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          .detail-left {
            font-size: 16px;
            font-family: GothamRounded-Book, GothamRounded;
            font-weight: normal;
            color: rgba(255, 255, 255, 0.48);
          }
          .detail-right {
            font-size: 16px;
            font-family: GothamRounded-Medium, GothamRounded;
            font-weight: 500;
            color: #ffffff;
            cursor: pointer;
            display: flex;
            align-items: center;
            .detail-text {
              display: flex;
              align-items: center;
            }
            .detail-img {
              margin-left: 5px;
              img {
                width: 20px;
                height: 20px;
              }
            }
          }
        }

        .tips {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 69px;
          font-size: 16px;
          font-family: GothamRounded-Book, GothamRounded;
          font-weight: normal;
          color: #ff5151;
        }
      }

      .content-btns {
        margin-top: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        .cancel {
          width: 148px;
          height: 50px;
          border-radius: 25px;
          border: 1px solid rgba(255, 255, 255, 0.28);
          font-size: 16px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          color: #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
        .confirm {
          margin-left: 24px;
          width: 148px;
          height: 50px;
          background: #ffc763;
          box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.38);
          border-radius: 25px;
          font-size: 16px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          color: #2e0b00;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
      }

      .no-data {
        opacity: 0.55;
      }
    }
  }

  .close {
    cursor: pointer;
    position: absolute;
    right: -17px;
    top: -17px;
    img {
      width: 32px;
      height: 32px;
    }
  }
}
</style>

