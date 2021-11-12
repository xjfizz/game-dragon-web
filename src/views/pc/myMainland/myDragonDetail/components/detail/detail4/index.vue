<template>
  <div class="wrap4" v-if="dragonDetail.status == 2 && dragonDetail.sale == 1">
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
          <img src="@/assets/imgs/myMainland/dragonDetail/send.png" alt="" />
          <div class="send-dragon-text">Transfer</div>
        </div>
      </div>
      <div class="tetail-title">
        <div class="title-name">Dragon</div>
        <div class="title-color"># {{ dragonDetail.no }}</div>
      </div>
      <div class="detail-talent" v-if="false">
        <div class="title">Talent:</div>
        <div class="value" v-if="dragonDetail.talent.level - 1 > 0">
          <div
            class="item"
            v-for="(item, index) in dragonDetail.talent.level - 1"
            :key="index"
          >
            <img
              src="@/assets/imgs/myMainland/dragonDetail/five-star.png"
              alt=""
            />
          </div>
        </div>
        <div class="value" v-else>
          <div class="item">
            <img
              src="@/assets/imgs/myMainland/dragonDetail/five-star-empty.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="mid-wrap">
        <div class="mid-egg">
          <!-- <img
                class="egg-img"
                :src="dragonEggImgHandle(dragonDetail.clazz)"
                alt=""
              /> -->
          <div class="egg-img">
            <dragonCreate
              ref="dragonCreate"
              :dragonImgEye="createDragon(dragonDetail.parts[0])"
              :dragonImgWing="createDragon(dragonDetail.parts[4])"
              :dragonImgHorn="createDragon(dragonDetail.parts[2])"
              :dragonImgBody="createDragon(dragonDetail.parts[6])"
              :dragonImgTotems="createDragon(dragonDetail.parts[1])"
              :dragonImgEar="createDragon(dragonDetail.parts[3])"
              :dragonImgTail="createDragon(dragonDetail.parts[5])"
            ></dragonCreate>
          </div>
          <!-- <img
                class="egg-bottom-img"
                src="@/assets/imgs/myMainland/myDragon/egg-bottom.png"
                alt=""
              /> -->
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
      <div class="mid-des">
        * The marketplace will be open for trading soon, so stay tuned !
      </div>
      <!-- <div class="bottom">
            <div class="time-list">
              <div
                class="time-item"
                v-for="(item2, index2) in dragonDetail.countDownTime"
                :key="index2"
              >
                {{ item2 }}
              </div>
            </div>
          </div> -->
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
                <div class="about-right">
                  <div class="about-right-top">CE</div>
                  <div class="about-right-bottom">
                    {{ dragonDetail.ce }}
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

        <div class="right-status">
          <div class="title">Stats</div>
          <div class="content">
            <div class="content-wrap">
              <div class="status-item">
                <div class="status-top">Health</div>
                <div class="status-bottom">
                  <img
                    src="@/assets/imgs/myMainland/stats/heatthy.png"
                    alt=""
                  />
                  <div class="text">{{ dragonDetail.health }}</div>
                </div>
              </div>
              <div class="status-item">
                <div class="status-top">Attack</div>
                <div class="status-bottom">
                  <img src="@/assets/imgs/myMainland/stats/attack.png" alt="" />
                  <div class="text">{{ dragonDetail.attack }}</div>
                </div>
              </div>
              <div class="status-item">
                <div class="status-top">Defense</div>
                <div class="status-bottom">
                  <img
                    src="@/assets/imgs/myMainland/stats/defense.png"
                    alt=""
                  />
                  <div class="text">{{ dragonDetail.defend }}</div>
                </div>
              </div>
              <div class="status-item">
                <div class="status-top">Speed</div>
                <div class="status-bottom">
                  <img src="@/assets/imgs/myMainland/stats/speed.png" alt="" />
                  <div class="text">{{ dragonDetail.speed }}</div>
                </div>
              </div>
              <div class="status-item">
                <div class="status-top">LifeForce</div>
                <div class="status-bottom">
                  <img src="@/assets/imgs/myMainland/stats/spirit.png" alt="" />
                  <div class="text">{{ dragonDetail.intellect }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right-parts">
          <div class="title">Body parts</div>
          <div class="content">
            <div class="content-wrap">
              <div class="item">
                <div class="item-img">
                  <img :src="createDragonPart(dragonDetail.parts[0])" alt="" />
                </div>
                <div class="item-text">
                  {{ dragonDetail.parts[0].dnaNameEn }}
                </div>
              </div>
              <div class="item">
                <div class="item-img">
                  <img :src="createDragonPart(dragonDetail.parts[3])" alt="" />
                </div>
                <div class="item-text">
                  {{ dragonDetail.parts[3].dnaNameEn }}
                </div>
              </div>
              <div class="item">
                <div class="item-img">
                  <img :src="createDragonPart(dragonDetail.parts[2])" alt="" />
                </div>
                <div class="item-text">
                  {{ dragonDetail.parts[2].dnaNameEn }}
                </div>
              </div>
              <div class="item">
                <div class="item-img">
                  <img :src="createDragonPart(dragonDetail.parts[4])" alt="" />
                </div>
                <div class="item-text">
                  {{ dragonDetail.parts[4].dnaNameEn }}
                </div>
              </div>
              <div class="item">
                <div class="item-img">
                  <img :src="createDragonPart(dragonDetail.parts[1])" alt="" />
                </div>
                <div class="item-text">
                  {{ dragonDetail.parts[1].dnaNameEn }}
                </div>
              </div>
              <div class="item">
                <div class="item-img">
                  <img :src="createDragonPart(dragonDetail.parts[5])" alt="" />
                </div>
                <div class="item-text">Tail</div>
              </div>
            </div>
          </div>
        </div>

        <div class="right-skill">
          <div class="title">Skills</div>
          <div class="content">
            <div class="content-wrap">
              <div class="item">
                <img
                  src="@/assets/imgs/myMainland/dragonDetail/skill-bc.png"
                  alt=""
                />
              </div>
              <div class="item">
                <img
                  src="@/assets/imgs/myMainland/dragonDetail/skill-bc.png"
                  alt=""
                />
              </div>
              <div class="item">
                <img
                  src="@/assets/imgs/myMainland/dragonDetail/skill-bc.png"
                  alt=""
                />
              </div>
              <div class="item">
                <img
                  src="@/assets/imgs/myMainland/dragonDetail/skill-bc.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div class="right-parents">
          <div class="title">Parents</div>
          <div class="content">
            <div class="content-wrap">
              <div class="no-data">no Data</div>
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
.wrap4 {
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin-top: 30px;
  .left {
    width: 463px;

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
        white-space: nowrap;
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
    .detail-talent {
      display: flex;
      align-items: center;
      margin-top: 12px;
      .title {
        font-size: 16px;
        font-family: GothamRounded-Book, GothamRounded;
        font-weight: normal;
        color: #ffffff;
        opacity: 0.48;
      }
      .value {
        margin-left: 10px;
        display: flex;
        align-items: center;
        .item {
          margin-right: 5px;
          img {
            width: 14px;
            height: 14px;
          }
        }
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
          // position: relative;
          // z-index: 10000;
          width: 300px;
          height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
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
      text-align: center;
      width: 388px;
      height: 48px;
      font-size: 16px;
      font-family: GothamRounded-Book, GothamRounded;
      font-weight: normal;
      color: #ffffff;
      line-height: 24px;
      opacity: 0.48;
      margin: 0 auto;
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
          min-height: 141px;
          background: #282523;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          margin-top: 16px;
          .content-wrap {
            padding: 24px 32px 0 32px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .item {
              display: flex;
              align-items: center;
              justify-content: flex-start;
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

      .right-skill {
        margin-top: 40px;
        height: 700px;
        .title {
          font-size: 20px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          color: #ffffff;
        }
        .content {
          width: 591px;
          height: 640px;
          background: #282523;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          margin-top: 16px;
          .content-wrap {
            padding: 40px 40px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .item {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 50%;
              margin-bottom: 32px;
              // cursor: pointer;
              img {
                width: calc(240px * 0.8);
                height: calc(320px * 0.8);
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
        margin-top: 20px;
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