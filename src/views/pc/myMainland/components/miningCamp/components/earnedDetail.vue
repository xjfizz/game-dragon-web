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
          <div class="title">Earned Details</div>
          <div class="content">
            <div class="detail-top">
              <div class="detail-left">Dragon selected</div>
              <div class="detail-right">
                <div class="total"># {{ localEarnDetail.no }}</div>
                <div class="power">Hash power: {{ localEarnDetail.power }}</div>
              </div>
            </div>
            <div class="detail-mid">
              <div class="detail-left">Stake time</div>
              <div class="detail-right">{{ localEarnDetail.hours }}h</div>
            </div>
            <div class="detail-mid-require">
              <div class="detail-left">Stamina Consumption</div>
              <div class="detail-right">{{ localEarnDetail.bodyPower }}</div>
            </div>

            <div class="detail-mid-bottom">
              <div class="detail-left">Earned Reward(DMP):</div>
              <div class="detail-right">
                {{ localEarnDetail.earnedReward }} DMP
              </div>
            </div>

            <div class="tips" v-if="false">
              * Not enough! You only have 20 stamina left.
            </div>
          </div>

          <div class="content-btns">
            <!-- <div class="cancel select-hover" @click="stakeAgain">
              Stake Again
            </div> -->
            <div
              v-if="localEarnDetail.status == 1"
              class="confirm select-hover"
              @click="claimNow"
            >
              Claim Now
            </div>
            <div v-else class="confirm select-hover no-data">Claim Now</div>
          </div>
        </div>
      </div>

      <div v-if="!loadingForm.loadingShow" class="close" @click="cancelClaim">
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
    const {
      miningCampRightState,

      stakeAgain,
      claimNow,
      cancelClaim,
    } = miningCampRightHandle(context);

    return {
      ...toRefs(selectDragonState),

      ...toRefs(miningCampRightState),

      stakeAgain,
      claimNow,
      cancelClaim,
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
        height: 340px;
        // margin-bottom: 38px;
        .detail-top {
          display: flex;
          justify-content: space-between;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          .detail-left {
            font-size: 16px;
            font-family: GothamRounded-Book, GothamRounded;
            font-weight: normal;
            color: rgba(255, 255, 255, 0.48);
          }
          .detail-right {
            font-size: 13px;
            font-family: GothamRounded-Medium, GothamRounded;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            .total {
              display: flex;
              justify-content: flex-end;
            }
            .power {
              margin-top: 8px;
              font-size: 13px;
              font-family: GothamRounded-Medium, GothamRounded;
              font-weight: 500;
              color: rgba(255, 255, 255, 0.48);
            }
          }
        }
        .detail-mid {
          display: flex;
          justify-content: space-between;
          padding-bottom: 16px;
          margin-top: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
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
          }
        }
        .detail-mid-require {
          display: flex;
          justify-content: space-between;
          padding-bottom: 37px;
          margin-top: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 1);
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
          }
        }
        .detail-mid-bottom {
          display: flex;
          justify-content: space-between;
          margin-top: 16px;
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
        margin-top: 38px;
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

