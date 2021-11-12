<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div
        class="modal-contain"
        v-loading="loading"
        element-loading-text="Loading..."
        element-loading-spinner="el-icon-loading"
      >
        <div class="modal-content">
          <div class="title">Select Dragons</div>
          <div class="content">
            <div class="content-title">
              <div class="content-title-left">
                <div class="dragon-num">
                  <div class="total-num">
                    {{ dragonEggListPageInfo.total || 0 }} Dragons
                  </div>
                  <div class="select-num">
                    ({{ miningWaitCampListSelected.length || 0 }} dragons
                    selected)
                  </div>
                </div>
              </div>
              <div class="content-title-right">
                <div class="stamina-title">Stamina:</div>
                <div class="stamina-need" v-if="staminaForm.userPower">
                  {{ staminaForm.userPower.power }}
                </div>
                <div class="stamina-mid">/</div>
                <div class="stamina-total">{{ staminaForm.maxPower }}</div>
                <div
                  class="stamina-question"
                  @mouseenter="mouseenterPower"
                  @mouseleave="mouseleavePower"
                >
                  <img
                    src="@/assets/imgs/myMainland/miningCamp/selectDragons/question-line.png"
                    alt=""
                  />
                </div>
                <div class="power-recover" v-if="powerRecoverShow">
                  <div class="recover-wrap">
                    <div class="power-point">
                      <div class="power-title">Recover 1 point：</div>
                      <div
                        v-if="
                          staminaForm.maxPower >= staminaForm.userPower.power
                        "
                        class="power-time"
                      >
                        {{ staminaForm.timeList[1].countDownTime }}
                      </div>
                      <div v-else class="power-time">00:00:00</div>
                    </div>
                  </div>

                  <div class="recover-wrap">
                    <div class="power-point">
                      <div class="power-title">Recover all：</div>
                      <div
                        v-if="
                          staminaForm.maxPower >= staminaForm.userPower.power
                        "
                        class="power-time"
                      >
                        {{ staminaForm.timeList[0].countDownTime }}
                      </div>
                      <div v-else class="power-time">00:00:00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              v-if="dragonEggListPageInfo.total > 0"
              class="content-list"
            >
              <div
                class="dragon-item select-dragon-hover"
                v-for="(item, index) in miningWaitCampList"
                :key="index"
                @click="selectDradon(item, item.isSelected ? 2 : 1)"
              >
                <div class="item-wrap">
                  <div class="top">
                    <div
                      class="top-color"
                      :class="
                        'top-color-status' + dragonLocalTypeList[item.clazz]
                      "
                    >
                      # {{ item.no }}
                    </div>
                    <div class="select-btn">
                      <img
                        v-if="!item.isSelected"
                        src="@/assets/imgs/myMainland/miningCamp/selectDragons/select-btn-no.png"
                        alt=""
                      />
                      <img
                        v-else
                        src="@/assets/imgs/myMainland/miningCamp/selectDragons/select-btn-selected.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="breed">Breed count: {{ item.breedCount }}</div>
                  <div class="ce">
                    <div class="ce-img">
                      <img :src="dragonClazzImgHandle(item.clazz)" alt="" />
                    </div>
                    <div class="ce-text">CE:</div>
                    <div class="ce-value">{{ item.ce }}</div>
                  </div>
                  <div class="dragon-img">
                    <div class="dragon-wrap">
                      <dragonCreate
                        ref="dragonCreate"
                        :dragonImgEye="createDragon(item.parts[0])"
                        :dragonImgWing="createDragon(item.parts[4])"
                        :dragonImgHorn="createDragon(item.parts[2])"
                        :dragonImgBody="createDragon(item.parts[6])"
                        :dragonImgTotems="createDragon(item.parts[1])"
                        :dragonImgEar="createDragon(item.parts[3])"
                        :dragonImgTail="createDragon(item.parts[5])"
                      ></dragonCreate>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="content-list-no">No data</div>

            <div class="bottom-wrap">
              <div class="page-wrap">
                <!-- page -->
                <page
                  v-if="dragonEggListPageInfo.totalPages > 1"
                  :pageInfo="dragonEggListPageInfo"
                  @leftPage="leftPage"
                  @rightPage="rightPage"
                  @search="search"
                ></page>
              </div>
              <div class="btns-wrap">
                <div class="cancel-btn select-hover" @click="closeSelectBox">
                  Cancel
                </div>
                <div
                  v-if="miningWaitCampListSelected.length > 0"
                  class="continue-btn select-hover"
                  @click="continueSelect"
                >
                  Continue
                </div>
                <div v-else class="continue-btn select-hover no-data">
                  Continue
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="close" @click="closeSelectBox">
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
import miningCampLeftHandle from "../../../use/miningCamp/left";
import page from "@/components/page/index.vue";
export default {
  name: "selectDragon",
  components: {
    dragonCreate,
    page,
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
      //  init();
    });

    // let { state, confirm, getCode, closeImgCodeBox } = selectDragon();
    const { dragonClazzImgHandle, createDragon } = myDragon();
    const {
      miningCampLeftState,
      init,
      selectDradon,
      closeSelectBox,
      continueSelect,
      leftPage,
      rightPage,
      search,
      mouseleavePower,
      mouseenterPower,
      test,
    } = miningCampLeftHandle(context);

    return {
      ...toRefs(selectDragonState),

      ...toRefs(miningCampLeftState),

      dragonLocalTypeList,
      dragonClazzImgHandle,
      createDragon,
      selectDradon,
      closeSelectBox,
      continueSelect,
      leftPage,
      rightPage,
      search,
      mouseleavePower,
      mouseenterPower,
      test,
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
  width: 1080px;
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
      margin: 32px 48px;
      .title {
        font-size: 28px;
        font-family: GothamRounded-Medium, GothamRounded;
        font-weight: 500;
        color: #ffffff;
        display: flex;
        justify-content: center;
      }
      .content {
        margin-top: 32px;
        .content-title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .content-title-left {
            .dragon-num {
              display: flex;
              align-items: center;
              .total-num {
                font-size: 28px;
                font-family: GothamRounded-Medium, GothamRounded;
                font-weight: 500;
                color: #ffffff;
                height: 34px;
                line-height: 34px;
              }
              .select-num {
                margin-left: 10px;
                font-size: 16px;
                font-family: GothamRounded-Medium, GothamRounded;
                font-weight: 500;
                color: #ffffff;
                height: 28px;
                line-height: 34px;
                opacity: 0.63;
              }
            }
          }
          .content-title-right {
            display: flex;
            align-items: center;
            height: 22px;
            font-size: 16px;
            font-family: GothamRounded-Book, GothamRounded;
            font-weight: normal;
            color: #ffffff;
            line-height: 19px;
            position: relative;
            .power-recover {
              position: absolute;
              left: 0;
              top: 30px;
              width: 168px;
              height: 168px;
              background: #050303;
              border-radius: 4px;
              opacity: 0.86;
              z-index: 99999;
              .recover-wrap {
                // padding: 16px;
                .power-point:last-child {
                  border: none;
                }
                .power-point {
                  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                  padding: 16px;
                  .power-title {
                    font-size: 14px;
                    font-family: GothamRounded-Book, GothamRounded;
                    font-weight: normal;
                    color: rgba(255, 255, 255, 0.48);
                  }
                  .power-time {
                    margin-top: 8px;
                    width: 90px;
                    height: 20px;
                    font-size: 14px;
                    font-family: GothamRounded-Medium, GothamRounded;
                    font-weight: 500;
                    color: #ffffff;
                    line-height: 17px;
                    letter-spacing: 2px;
                  }
                }
              }
            }
            .stamina-title {
              opacity: 0.68;
            }
            .stamina-need {
              margin-left: 10px;
            }
            .stamina-mid {
              margin-left: 5px;
              opacity: 0.68;
            }
            .stamina-total {
              margin-left: 5px;
            }
            .stamina-question {
              margin-left: 10px;
              img {
                width: 28px;
                height: 28px;
              }
            }
          }
        }
        .content-list {
          margin-top: 16px;
          display: flex;
          // justify-content: space-around;
          .dragon-item:last-child {
            margin-right: 0;
          }
          .dragon-item {
            width: 222px;
            height: 311px;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            cursor: pointer;
            margin-right: 24px;
            .item-wrap {
              padding: 12px;
              .top {
                display: flex;
                align-items: center;
                justify-content: space-between;
                .top-color {
                  width: 68px;
                  min-height: 20px;
                  min-width: 68px;
                  padding: 2px 3px;
                  border-radius: 4px;
                  font-size: 14px;
                  font-family: GothamRounded-Medium, GothamRounded;
                  font-weight: 500;
                  color: #ffffff;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  white-space: nowrap;
                }
                .select-btn {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  img {
                    width: 20px;
                    height: 20px;
                  }
                }

                .top-color-status1 {
                  background: #d58047;
                }
                .top-color-status2 {
                  background: #d5b32d;
                }
                .top-color-status3 {
                  background: #44a3cf;
                }
                .top-color-status4 {
                  background: #53b372;
                }
                .top-color-status5 {
                  background: #926b59;
                }
              }
              .breed {
                margin-top: 8px;
                font-size: 12px;
                font-family: GothamRounded-Book, GothamRounded;
                font-weight: normal;
                color: rgba(255, 255, 255, 0.48);
              }
              .ce {
                margin-top: 4px;
                display: flex;
                align-items: center;
                font-size: 12px;
                font-family: GothamRounded-Book, GothamRounded;
                font-weight: normal;
                color: rgba(255, 255, 255, 0.48);
                .ce-img {
                  width: 20px;
                  height: 20px;
                  display: flex;
                  align-items: center;
                  img {
                    width: 20px;
                    height: 20px;
                  }
                }
                .ce-text {
                  margin-left: 5px;
                }
                .ce-value {
                  margin-left: 5px;
                }
              }
              .dragon-img {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 197px;
                min-height: 197px;
                .dragon-wrap {
                }
              }
            }
          }
        }
        .content-list-no {
          height: 311px;
          margin-top: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-family: GothamRounded-Book, GothamRounded;
          font-weight: normal;
          color: rgba(255, 255, 255, 0.48);
        }
        .bottom-wrap {
          display: flex;
          justify-content: space-between;
          margin-top: 62px;
          .page-wrap {
          }
          .btns-wrap {
            display: flex;
            align-items: center;
            .cancel-btn {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 148px;
              height: 50px;
              border-radius: 25px;
              border: 1px solid rgba(255, 255, 255, 0.28);
              font-size: 16px;
              font-family: GothamRounded-Medium, GothamRounded;
              font-weight: 500;
              color: #ffffff;
              cursor: pointer;
            }
            .continue-btn {
              margin-left: 24px;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 148px;
              height: 50px;
              background: #ffc763;
              box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.38);
              border-radius: 25px;
              font-size: 16px;
              font-family: GothamRounded-Medium, GothamRounded;
              font-weight: 500;
              color: #2e0b00;
              cursor: pointer;
            }
          }
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

