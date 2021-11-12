<template>
  <div
    class="wrap1"
    v-if="!!dragonDetail.countDownTime && dragonDetail.status == 1"
  >
    <div class="left">
      <div class="top">
        <div class="top-wrap" @click="back">
          <div class="back-btn">
            <img src="@/assets/imgs/myMainland/myDragon/back.png" alt="" />
          </div>
          <div class="back-text">Back</div>
        </div>
      </div>
      <div class="detail-color">
        <div
          class="color-wrap"
          :class="'top-color-status' + dragonLocalTypeList[dragonDetail.clazz]"
        >
          # {{ dragonDetail.no }}
        </div>
        <div class="color-genesis" v-if="dragonDetail.no <= 10000">Genesis</div>
        <div class="seng-dragon" @click="sendDragon">
          <img
            src="@/assets/imgs/myMainland/dragonDetail/send.png"
            alt=""
          />
          <div class="send-dragon-text">Transfer</div>
        </div>
      </div>
      <div class="tetail-title">
        <div class="title-name">Dragon</div>
        <div class="title-color"># {{ dragonDetail.no }}</div>
      </div>
      <div class="mid-wrap">
        <div class="mid-egg">
          <img
            class="egg-img"
            :src="dragonEggImgHandle(dragonDetail.clazz)"
            alt=""
          />
          <img
            class="egg-bottom-img"
            src="@/assets/imgs/myMainland/myDragon/egg-bottom.png"
            alt=""
          />
        </div>
        <!-- <div class="mid-egg-bottom">
            
            </div> -->
        <div class="mid-egg-bottom-stone">
          <img
            src="@/assets/imgs/myMainland/myDragon/egg-bottom-stone.png"
            alt=""
          />
        </div>
      </div>
      <div class="mid-des">Egg is hatching</div>
      <div class="bottom">
        <div class="time-list">
          <div
            class="time-item"
            v-for="(item2, index2) in dragonDetail.countDownTime"
            :key="index2"
          >
            {{ item2 }}
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="right-wrap">
        <div class="right-about">
          <div class="title">About</div>
          <div class="about-content">
            <div class="about-content-wrap">
              <div class="about-top">
                <div class="about-left">
                  <div class="about-left-top">Class</div>
                  <div class="about-left-bottom">
                    <div class="left-bottom-img">
                      <img
                        :src="dragonClazzImgHandle(dragonDetail.clazz)"
                        alt=""
                      />
                    </div>
                    <div class="left-bottom-text">
                      {{ dragonLocalTypeName[dragonDetail.clazz] }} Dragon
                    </div>
                  </div>
                </div>
                <div class="about-mid">
                  <div class="about-mid-top">Breed count</div>
                  <div class="about-mid-bottom">
                    {{ dragonDetail.breedCount }}/7
                  </div>
                </div>
              </div>
              <div class="right-about-bottom">
                <div class="title">Owner</div>
                <div class="address">
                  {{ myAddress }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from "vue";
import { useRouter } from "vue-router";





import common from "@/utils/common";
import myDragonDetail from "@/views/pc/myMainland/use/myDragonDetail";
import myDragon from "@/views/pc/myMainland/use/myDragon";
import dragonCreate from "../../../../components/dragonCreate/indexCreateDetail.vue";
import indexCreateUpload from "../../../../components/dragonCreate/indexCreateUpload.vue";
import lottie from "vue-lottie/src/lottie.vue";

export default {
  name: "detail1",
  components: {
  
    dragonCreate,
    indexCreateUpload,
    lottie,
  
  },
  setup() {
    const router = useRouter();
    const state = reactive({});
    const {
      dragonEggImgHandle,
      myDragonState,
      createDragon,
      createDragonPart,
      dragonClazzImgHandle,
    } = myDragon();
    const {
      myDragonDetailState,
      init,
      back,
      openDradonEgg,
      handleAnimation,
      sendDragon,
    } = myDragonDetail();
    onMounted(() => {
      common.goTopScroll();
    });

    return {
      ...toRefs(state),
      ...toRefs(myDragonState),
      ...toRefs(myDragonDetailState),
      dragonEggImgHandle,
      back,
      openDradonEgg,
      createDragon,
      createDragonPart,
      handleAnimation,
      handleAnimation,
      dragonClazzImgHandle,
      sendDragon,
    };
  },
};
</script>

<style lang="less" scoped >
.wrap1 {
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin-top: 30px;
  .left {
    width: 463px;
    // background-color: #ff5400;
    .top {
      display: flex;
      align-items: center;
      .top-wrap {
        display: flex;
        align-items: center;
        cursor: pointer;
        .back-btn {
          display: flex;
          align-items: center;
          img {
            width: calc(48px * 0.5);
            height: calc(48px * 0.5);
          }
        }
        .back-text {
          display: flex;
          align-items: center;
          margin-left: 4px;
          font-size: 14px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          color: #ffffff;
        }
      }
    }
    .detail-color {
      margin-top: 29px;
      display: flex;
      align-items: center;
      .color-wrap {
        width: 68px;
        height: 20px;
        background: #d58047;
        border-radius: 4px;
        font-size: 14px;
        font-family: GothamRounded-Medium, GothamRounded;
        font-weight: 500;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        white-space:nowrap;

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
      .color-genesis {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 8px;
        width: 71px;
        height: 20px;
        background: #8247d5;
        border-radius: 4px;
        font-size: 14px;
        font-family: GothamRounded-Medium, GothamRounded;
        font-weight: 500;
        color: #ffffff;
      }
      .seng-dragon {
        width: 140px;
        height: 50px;
        border-radius: 25px;
        border: 1px solid rgba(255, 255, 255, 0.28);
        font-size: 16px;
        font-family: GothamRounded-Medium, GothamRounded;
        font-weight: 500;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: auto;
        cursor: pointer;
        img {
          width: 20px;
          height: 20px;
        }
        .send-dragon-text {
          margin-left: 9px;
        }
      }
    }
    .tetail-title {
      margin-top: 16px;
      display: flex;
      align-items: center;
      .title-name {
        font-size: 28px;
        font-family: GothamRounded-Medium, GothamRounded;
        font-weight: 500;
        color: #ffffff;
      }
      .title-color {
        margin-left: 10px;
        font-size: 28px;
        font-family: GothamRounded-Medium, GothamRounded;
        font-weight: 500;
        color: #ffffff;
      }
    }
    .mid-wrap {
      width: 100%;
      height: 488px;
      position: relative;
      // background-color: #ff5400;
      .mid-egg {
        width: 100%;
        position: absolute;
        top: 30px;
        left: 50%;
        transform: translateX(-50%);
        animation: eggMove 2s infinite alternate;
        -webkit-animation: eggMove 2s infinite alternate;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        z-index: 500;
        .egg-img {
          width: calc(602px * 0.4);
          height: calc(536px * 0.4);
        }
        .egg-bottom-img {
          margin-top: -170px;
          width: calc(488px * 0.7);
          height: calc(365px * 0.7);
        }
      }

      .mid-egg-bottom-stone {
        position: absolute;
        top: 180px;
        left: 50%;
        transform: translateX(-50%);
        img {
          width: calc(463px * 1);
          height: calc(239px * 1);
        }
      }
    }
    .mid-des {
      display: flex;
      justify-content: center;
      font-size: 16px;
      font-family: GothamRounded-Book, GothamRounded;
      font-weight: normal;
      color: #ffffff;
    }
    .bottom {
      .time-list {
        display: flex;
        justify-content: center;
        margin-top: 16px;
        .time-item {
          width: 28px;
          height: 28px;
          background: #09090a;
          border-radius: 4px;
          font-size: 14px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          color: #ffc763;
          line-height: 17px;
          margin-right: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
  .right {
    width: 737px;
    height: 700px;
    min-height: 700px;
    overflow-y: scroll;
    .right-wrap {
      // height: 1000px;
      // overflow-y: scroll;
      margin-left: 126px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      // background-color: #ff5400;
      .right-about {
        .title {
          font-size: 20px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          color: #ffffff;
        }
        .about-content {
          width: 591px;
          height: 190px;
          background: #282523;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          margin-top: 16px;
          .about-content-wrap {
            padding: 24px 32px;
            .about-top {
              display: flex;
              // justify-content: space-between;
              .about-left {
                .about-left-top {
                  font-size: 16px;
                  font-family: GothamRounded-Book, GothamRounded;
                  font-weight: normal;
                  color: #ffffff;
                  opacity: 0.48;
                }
                .about-left-bottom {
                  margin-top: 8px;
                  display: flex;
                  align-items: center;
                  .left-bottom-img {
                    margin-left: -10px;
                    img {
                      width: 32px;
                      height: 32px;
                    }
                  }
                  .left-bottom-text {
                    font-size: 14px;
                    font-family: GothamRounded-Medium, GothamRounded;
                    font-weight: 500;
                    color: #ffffff;
                    white-space: nowrap;
                  }
                }
              }
              .about-mid {
                margin-left: 100px;
                .about-mid-top {
                  font-size: 16px;
                  font-family: GothamRounded-Book, GothamRounded;
                  font-weight: normal;
                  color: #ffffff;
                  opacity: 0.48;
                  white-space: nowrap;
                }
                .about-mid-bottom {
                  display: flex;
                  align-items: center;
                  height: 32px;
                  margin-top: 8px;
                  font-size: 14px;
                  font-family: GothamRounded-Medium, GothamRounded;
                  font-weight: 500;
                  color: #ffffff;
                }
              }
              .about-right {
                margin-left: 100px;
                .about-right-top {
                  font-size: 16px;
                  font-family: GothamRounded-Book, GothamRounded;
                  font-weight: normal;
                  color: #ffffff;
                  opacity: 0.48;
                }
                .about-right-bottom {
                  display: flex;
                  align-items: center;
                  height: 32px;
                  margin-top: 8px;
                  font-size: 14px;
                  font-family: GothamRounded-Medium, GothamRounded;
                  font-weight: 500;
                  color: #ffffff;
                }
              }
            }
            .right-about-bottom {
              margin-top: 32px;
              .title {
                font-size: 16px;
                font-family: GothamRounded-Book, GothamRounded;
                font-weight: normal;
                color: #ffffff;
                opacity: 0.48;
              }
              .address {
                margin-top: 8px;
                font-size: 14px;
                font-family: GothamRounded-Medium, GothamRounded;
                font-weight: 500;
                color: #ffffff;
              }
            }
          }
        }
      }
      .right-status {
        margin-top: 40px;
        .title {
          font-size: 20px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          color: #ffffff;
        }
        .content {
          width: 591px;
          height: 92px;
          background: #282523;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          margin-top: 16px;
          .content-wrap {
            padding: 24px 32px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .status-item {
              .status-top {
                font-size: 16px;
                font-family: GothamRounded-Book, GothamRounded;
                font-weight: normal;
                color: #ffffff;
                opacity: 0.48;
              }
              .status-bottom {
                display: flex;
                align-items: center;
                margin-top: 8px;
                img {
                  width: 20px;
                  height: 20px;
                }
                .text {
                  margin-left: 10px;
                  font-size: 20px;
                  font-family: GothamRounded-Medium, GothamRounded;
                  font-weight: 500;
                  color: #ffffff;
                }
              }
            }
          }
        }
      }
      .right-parts {
        margin-top: 40px;
        .title {
          font-size: 20px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          color: #ffffff;
        }
        .content {
          width: 591px;
          height: 141px;
          background: #282523;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          margin-top: 16px;
          .content-wrap {
            padding: 24px 32px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .item {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 33%;
              margin-bottom: 32px;
              .item-img {
                width: calc(80px * 0.5);
                height: calc(80px * 0.5);
                img {
                  width: calc(80px * 0.5);
                  height: calc(80px * 0.5);
                }
              }
              .item-text {
                margin-left: 8px;
                font-size: 12px;
                font-family: GothamRounded-Medium, GothamRounded;
                font-weight: 500;
                color: #ffffff;
                white-space: nowrap;
              }
            }
          }
        }
      }

      .right-parents {
        margin-top: 40px;
        .title {
          font-size: 20px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          color: #ffffff;
        }
        .content {
          width: 591px;
          height: 141px;
          background: #282523;
          border-radius: 8px;
          //   border: 1px solid rgba(255, 255, 255, 0.08);
          margin-top: 16px;
          .content-wrap {
            padding: 24px 32px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            .no-data {
              display: flex;
              justify-content: center;
              font-size: 16px;
              font-family: GothamRounded-Book, GothamRounded;
              font-weight: normal;
              color: #ffffff;
              line-height: 24px;
              opacity: 0.48;
            }
          }
        }
      }
    }
  }
}
</style>