<template>
  <exchangeDragon v-if="exchangeDragonShow"></exchangeDragon>
  <!-- <div
    class="exchangeDragon-wrap"
    v-if="$process_env === 'production' ? isShowExchange : true"
  > -->
  <div class="exchangeDragon-wrap">
    <div class="exchange-btn" @click="exchangeDragonClick">Redeem</div>
  </div>
  <div
    v-if="dragonList.length > 0"
    class="my-dragon-main"
    v-loading="loadingForm.loadingShow"
    :element-loading-text="loadingForm.loadingShowText"
    element-loading-spinner="el-icon-loading"
  >
    <div class="my-dragon-top">
      <div class="left">{{ dragonEggListPageInfo.total || 0 }} Dragons</div>
      <div class="right"></div>
    </div>
    <div class="my-dragon-bottom">
      <div class="wrap">
        <div
          class="item"
          v-for="(item, index) in dragonList"
          :key="index"
          @click="goDetail(item)"
        >
          <div
            v-if="!!item.countDownTime && item.status == 1"
            class="item-status1 item-selected"
          >
            <div class="item-wrap">
              <div
                class="top-color"
                :class="'top-color-status' + dragonLocalTypeList[item.clazz]"
              >
                # {{ item.no }}
              </div>
              <div class="top-breed">
                Breed count: {{ item.breedCount || 0 }}
              </div>
              <div class="top-ce">
                <div class="top-ce-img">
                  <img :src="dragonClazzImgHandle(item.clazz)" alt="" />
                </div>

                <!-- <div class="top-ce-des">CE: {{ item.ce }}</div> -->
              </div>
              <div class="mid-egg">
                <div class="egg-img">
                  <img :src="dragonEggImgHandle(item.clazz)" alt="" />
                </div>
                <div class="egg-des">Egg is hatching</div>
              </div>
              <div class="mid-bottom">
                <div class="time-list">
                  <div
                    class="time-item"
                    v-for="(item2, index2) in item.countDownTime"
                    :key="index2"
                  >
                    {{ item2 }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="!item.countDownTime && item.status == 1"
            class="item-status2 item-selected"
          >
            <div class="item-wrap">
              <div
                class="top-color"
                :class="'top-color-status' + dragonLocalTypeList[item.clazz]"
              >
                # {{ item.no }}
              </div>
              <div class="top-breed">
                Breed count: {{ item.breedCount || 0 }}
              </div>
              <div class="top-ce">
                <div class="top-ce-img">
                  <img :src="dragonClazzImgHandle(item.clazz)" alt="" />
                </div>

                <!-- <div class="top-ce-des">CE: {{ item.ce }}</div> -->
              </div>
              <div class="mid-egg">
                <div class="egg-img">
                  <img
                    v-show="!item.isStartDragon"
                    :src="dragonEggImgHandle(item.clazz)"
                    alt=""
                  />
                  <div
                    v-if="item.isStartDragon"
                    ref="eggToDragon"
                    id="eggToDragon"
                    class="lottie"
                  >
                    <lottie
                      :options="defaultOptions"
                      v-on:animCreated="handleAnimation"
                    />
                  </div>
                </div>
              </div>
              <div class="mid-bottom" v-show="!item.isStartDragon">
                <div class="mid-bottom-btn" @click.stop="openDradonEgg(item)">
                  Claim
                </div>
              </div>
            </div>
          </div>

          <div
            v-if="item.status == 2 && item.sale == 1"
            class="item-status3 item-selected"
          >
            <div class="item-wrap">
              <div
                class="top-color"
                :class="'top-color-status' + dragonLocalTypeList[item.clazz]"
              >
                # {{ item.no }}
              </div>
              <div class="top-breed">
                Breed count: {{ item.breedCount || 0 }}
              </div>
              <div class="top-ce">
                <div class="top-ce-img">
                  <img :src="dragonClazzImgHandle(item.clazz)" alt="" />
                </div>

                <div class="top-ce-des">CE: {{ item.ce }}</div>
              </div>
              <div class="mid-egg">
                <div class="egg-img">
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
              <div class="mid-bottom">
                <div class="mid-bottom-fh">
                  <img
                    src="../../../assets/imgs/myMainland/bnb-coin.png"
                    alt=""
                  />
                </div>
                <div class="mid-bottom-number">0.065</div>
                <div class="mid-bottom-price">$212</div>
              </div>
            </div>
          </div>
          <div
            v-if="item.status == 2 && item.sale == 0"
            class="item-status4 item-selected"
          >
            <div class="item-wrap">
              <div
                class="top-color"
                :class="'top-color-status' + dragonLocalTypeList[item.clazz]"
              >
                # {{ item.no }}
              </div>
              <div class="top-breed">
                Breed count: {{ item.breedCount || 0 }}
              </div>
              <div class="top-ce">
                <div class="top-ce-img">
                  <img :src="dragonClazzImgHandle(item.clazz)" alt="" />
                </div>

                <div class="top-ce-des">CE: {{ item.ce }}</div>
              </div>
              <div
                class="mid-egg"
                :class="item.lockStatus == 2 ? 'dragon-lock-status' : ''"
              >
                <div class="egg-img">
                  <!-- <img
                    :src="createDragon(item.parts[0])"
                    alt=""
                  /> -->
                  <!-- <img src="../../../assets/dragon/dragon-part/eye/fire/Fire_eye02.png" alt=""> -->
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
              <div v-if="item.lockStatus == 2" class="dragon-lock">
                Staking in progress…
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- page -->
    <page
      v-if="dragonEggListPageInfo.totalPages > 1"
      :pageInfo="dragonEggListPageInfo"
      @leftPage="leftPage"
      @rightPage="rightPage"
      @search="search"
    ></page>
    <div
      class="create-selete-img"
      v-if="selectLocalDragon && loadingForm.loadingShow"
    >
      <div class="dragon">
        <indexCreateUpload
          ref="dragonCreate"
          :dragonImgEye="createDragon(selectLocalDragon.parts[0])"
          :dragonImgWing="createDragon(selectLocalDragon.parts[4])"
          :dragonImgHorn="createDragon(selectLocalDragon.parts[2])"
          :dragonImgBody="createDragon(selectLocalDragon.parts[6])"
          :dragonImgTotems="createDragon(selectLocalDragon.parts[1])"
          :dragonImgEar="createDragon(selectLocalDragon.parts[3])"
          :dragonImgTail="createDragon(selectLocalDragon.parts[5])"
        ></indexCreateUpload>
      </div>
    </div>
  </div>
  <div v-else class="npData">
    <div class="noData-wrap">
      <div class="no-dragon">
        <img src="@/assets/imgs/myMainland/no-data.png" alt="" />
      </div>
      <div class="no-data-title">No data</div>
      <div class="no-data-des">
        * The marketplace will be open soon, so stay tuned !
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs, ref, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";

import common from "@/utils/common";
import myDragon from "@/views/pc/myMainland/use/myDragon";
import myMainland from "@/views/pc/myMainland/use/myMainland";
import dragonLocalTypeList from "./use/dragonLocalTypeList";
import dragonCreate from "./components/dragonCreate/index.vue";
import indexCreateUpload from "./components/dragonCreate/indexCreateUpload.vue";
import lottie from "vue-lottie/src/lottie.vue";
import page from "@/components/page/index.vue";
import exchangeDragon from "./components/exchangeDragon/index.vue";
export default {
  name: "myDragon",
  components: {
    dragonCreate,
    indexCreateUpload,
    lottie,
    page,
    exchangeDragon,
  },
  setup() {
    const router = useRouter();
    const state = reactive({});

    const {
      dragonEggList,
      openDradonEgg,
      myDragonState,
      dragonEggImgHandle,
      dragonClazzImgHandle,
      goDetail,
      createDragon,
      handleAnimation,
      startClaimTest,
      leftPage,
      rightPage,
      search,
      timeCheck,
      exchangeDragonClick,
      showExchange,
    } = myDragon();
    const { myMainlandState } = myMainland();
    onMounted(() => {
      myMainlandState.leftItemSelected = 1;
      common.goTopScroll();
      dragonEggList();
      showExchange();
      document.addEventListener("visibilitychange", timeCheck);
    });

    onBeforeUnmount(() => {
      // miningCampRightState.miningCampList = []
      if (myDragonState.dragonList && myDragonState.dragonList.length > 0) {
        myDragonState.dragonList.map((item) => {
          if (item.countDownFn) {
            clearInterval(item.countDownFn);
          }
        });
      }
    });

    return {
      ...toRefs(state),
      ...toRefs(myDragonState),
      openDradonEgg,
      dragonEggImgHandle,
      dragonClazzImgHandle,
      goDetail,
      dragonLocalTypeList,
      createDragon,
      handleAnimation,
      startClaimTest,
      leftPage,
      rightPage,
      search,
      exchangeDragonClick,
    };
  },
};
</script>

<style lang="less" scoped >
.exchangeDragon-wrap {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 124px 0 104px;
  .exchange-btn {
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
  }
}
.my-dragon-main {
  margin: 0 104px 0 104px;
  // height: 700px;
  // min-height: 700px;
  // overflow-y: scroll;
  .my-dragon-top {
    height: 40px;
    .left {
      font-size: 28px;
      font-family: GothamRounded-Medium, GothamRounded;
      font-weight: 500;
      color: #ffffff;
      line-height: 34px;
    }
  }
  .my-dragon-bottom {
    margin-top: 30px;
    .wrap {
      display: flex;
      flex-wrap: wrap;
      //   justify-content: flex-start;
      .item {
        cursor: pointer;
        width: 222px;
        height: 311px;
        flex: 1;
        max-width: 222px;
        min-width: 222px;
        margin-right: 18px;
        margin-bottom: 20px;
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
        .item-selected:hover {
          background-color: #1a1716;
        }
        .item-status1 {
          width: 222px;
          height: 311px;
          background: #282523;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.12);

          .item-wrap {
            margin: 12px;
          }

          .top-color {
            width: 68px;
            min-width: 68px;
            height: 20px;
            padding: 2px 3px;
            border-radius: 4px;
            font-size: 14px;
            font-family: GothamRounded-Medium, GothamRounded;
            font-weight: 500;
            color: #ffffff;
            line-height: 17px;
            display: flex;
            justify-content: center;
            align-items: center;
            white-space: nowrap;
          }

          .top-breed {
            margin-top: 8px;
            font-size: 12px;
            font-family: GothamRounded-Book, GothamRounded;
            font-weight: normal;
            color: #ffffff;
            line-height: 14px;
            opacity: 0.48;
          }
          .top-ce {
            margin-top: 10px;
            display: flex;
            align-items: center;
            .top-ce-img {
              width: 20px;
              height: 20px;
              display: flex;
              align-items: center;
              img {
                width: 20px;
                height: 20px;
              }
            }
            .top-ce-des {
              margin-left: 5px;
              font-size: 12px;
              font-family: GothamRounded-Book, GothamRounded;
              font-weight: normal;
              color: #ffffff;
              line-height: 14px;
              opacity: 0.48;
            }
          }
          .mid-egg {
            position: relative;
            width: 197px;
            height: 190px;
            .egg-img {
              display: flex;
              justify-content: center;
              img {
                width: calc(602px * 0.3);
                height: calc(536px * 0.3);
              }
            }
            .egg-des {
              margin-top: -5px;
              display: flex;
              justify-content: center;
              font-size: 12px;
              font-family: GothamRounded-Book, GothamRounded;
              font-weight: normal;
              color: #ffffff;
              line-height: 14px;
              opacity: 0.48;
              // width: 222px;
            }
          }
          .mid-bottom {
            .time-list {
              display: flex;
              justify-content: center;
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
        .item-status2 {
          width: 222px;
          height: 311px;
          background: #282523;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.12);

          .item-wrap {
            margin: 12px;
          }

          .top-color {
            width: 68px;
            min-width: 68px;
            height: 20px;
            padding: 2px 3px;
            border-radius: 4px;
            font-size: 14px;
            font-family: GothamRounded-Medium, GothamRounded;
            font-weight: 500;
            color: #ffffff;
            line-height: 17px;
            display: flex;
            justify-content: center;
            align-items: center;
            white-space: nowrap;
          }
          .top-breed {
            margin-top: 8px;
            font-size: 12px;
            font-family: GothamRounded-Book, GothamRounded;
            font-weight: normal;
            color: #ffffff;
            line-height: 14px;
            opacity: 0.48;
          }
          .top-ce {
            margin-top: 10px;
            display: flex;
            align-items: center;
            .top-ce-img {
              width: 20px;
              height: 20px;
              display: flex;
              align-items: center;
              img {
                width: 20px;
                height: 20px;
              }
            }
            .top-ce-des {
              margin-left: 5px;
              font-size: 12px;
              font-family: GothamRounded-Book, GothamRounded;
              font-weight: normal;
              color: #ffffff;
              line-height: 14px;
              opacity: 0.48;
            }
          }
          .mid-egg {
            position: relative;
            width: 197px;
            height: 177px;
            .egg-img {
              display: flex;
              justify-content: center;
              img {
                width: calc(602px * 0.3);
                height: calc(536px * 0.3);
              }
              .lottie {
                width: 200px;
                height: 220px;
              }
            }
            .egg-des {
              margin-top: -5px;
              display: flex;
              justify-content: center;
              font-size: 12px;
              font-family: GothamRounded-Book, GothamRounded;
              font-weight: normal;
              color: #ffffff;
              line-height: 14px;
              opacity: 0.48;
              // width: 222px;
            }
          }
          .mid-bottom {
            display: flex;
            justify-content: center;
            align-items: center;
            .mid-bottom-btn {
              width: 108px;
              height: 32px;
              border-radius: 25px;
              border: 1px solid #ffc763;
              font-size: 16px;
              font-family: GothamRounded-Medium, GothamRounded;
              font-weight: 500;
              color: #ffc763;
              line-height: 19px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
        }

        .item-status3 {
          width: 222px;
          height: 311px;
          background: #282523;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.12);

          .item-wrap {
            margin: 12px;
          }

          .top-color {
            width: 68px;
            min-width: 68px;
            height: 20px;
            padding: 2px 3px;
            border-radius: 4px;
            font-size: 14px;
            font-family: GothamRounded-Medium, GothamRounded;
            font-weight: 500;
            color: #ffffff;
            line-height: 17px;
            display: flex;
            justify-content: center;
            align-items: center;
            white-space: nowrap;
          }
          .top-breed {
            margin-top: 8px;
            font-size: 12px;
            font-family: GothamRounded-Book, GothamRounded;
            font-weight: normal;
            color: #ffffff;
            line-height: 14px;
            opacity: 0.48;
          }
          .top-ce {
            margin-top: 10px;
            display: flex;
            align-items: center;
            .top-ce-img {
              width: 20px;
              height: 20px;
              display: flex;
              align-items: center;
              img {
                width: 20px;
                height: 20px;
              }
            }
            .top-ce-des {
              margin-left: 5px;
              font-size: 12px;
              font-family: GothamRounded-Book, GothamRounded;
              font-weight: normal;
              color: #ffffff;
              line-height: 14px;
              opacity: 0.48;
            }
          }
          .mid-egg {
            position: relative;
            width: 197px;
            height: 177px;
            .egg-img {
              display: flex;
              justify-content: center;
              img {
                width: calc(602px * 0.3);
                height: calc(536px * 0.3);
              }
            }
            .egg-des {
              margin-top: -5px;
              display: flex;
              justify-content: center;
              font-size: 12px;
              font-family: GothamRounded-Book, GothamRounded;
              font-weight: normal;
              color: #ffffff;
              line-height: 14px;
              opacity: 0.48;
              // width: 222px;
            }
          }
          .mid-bottom {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            font-family: GothamRounded-Book, GothamRounded;
            font-weight: normal;
            color: #ffffff;
            .mid-bottom-fh {
              display: flex;
              justify-content: center;
              align-items: center;
              img {
                width: calc(28px * 0.7);
                height: calc(28px * 0.7);
              }
            }
            .mid-bottom-number {
              margin-left: 3px;
            }
            .mid-bottom-price {
              margin-left: 8px;
              font-size: 14px;
              font-family: GothamRounded-Book, GothamRounded;
              font-weight: normal;
              color: #ffffff;
              opacity: 0.48;
            }
          }
        }

        .item-status4 {
          width: 222px;
          height: 311px;
          background: #282523;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.12);

          .item-wrap {
            margin: 12px;
          }

          .top-color {
            width: 68px;
            min-width: 68px;
            height: 20px;
            padding: 2px 3px;
            border-radius: 4px;
            font-size: 14px;
            font-family: GothamRounded-Medium, GothamRounded;
            font-weight: 500;
            color: #ffffff;
            line-height: 17px;
            display: flex;
            justify-content: center;
            align-items: center;
            white-space: nowrap;
          }
          .top-breed {
            margin-top: 8px;
            font-size: 12px;
            font-family: GothamRounded-Book, GothamRounded;
            font-weight: normal;
            color: #ffffff;
            line-height: 14px;
            opacity: 0.48;
          }
          .top-ce {
            margin-top: 10px;
            display: flex;
            align-items: center;
            .top-ce-img {
              width: 20px;
              height: 20px;
              display: flex;
              align-items: center;
              img {
                width: 20px;
                height: 20px;
              }
            }
            .top-ce-des {
              margin-left: 5px;
              font-size: 12px;
              font-family: GothamRounded-Book, GothamRounded;
              font-weight: normal;
              color: #ffffff;
              line-height: 14px;
              opacity: 0.48;
            }
          }
          .mid-egg {
            position: relative;
            width: 197px;
            height: 177px;
            .egg-img {
              display: flex;
              justify-content: center;
              img {
                width: calc(602px * 0.3);
                height: calc(536px * 0.3);
              }
            }
            .egg-des {
              margin-top: -5px;
              display: flex;
              justify-content: center;
              font-size: 12px;
              font-family: GothamRounded-Book, GothamRounded;
              font-weight: normal;
              color: #ffffff;
              line-height: 14px;
              opacity: 0.48;
              // width: 222px;
            }
          }
          .mid-bottom {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            font-family: GothamRounded-Book, GothamRounded;
            font-weight: normal;
            color: #ffffff;
            .mid-bottom-fh {
              display: flex;
              justify-content: center;
              align-items: center;
              img {
                width: calc(28px * 0.7);
                height: calc(28px * 0.7);
              }
            }
            .mid-bottom-number {
              margin-left: 8px;
            }
            .mid-bottom-price {
              margin-left: 8px;
              font-size: 14px;
              font-family: GothamRounded-Book, GothamRounded;
              font-weight: normal;
              color: #ffffff;
              opacity: 0.48;
            }
          }
          .dragon-lock {
            display: flex;
            justify-content: center;
            margin-top: 10px;
            font-size: 12px;
            font-family: GothamRounded-Book, GothamRounded;
            font-weight: normal;
            color: rgba(255, 255, 255, 0.48);
          }
          .dragon-lock-status {
            opacity: 0.48;
          }
        }
      }
    }
  }
  .create-selete-img {
    // visibility: hidden;
    position: absolute;
    z-index: -10000;
    top: -2000px;
    left: 0;
  }
}
</style>
