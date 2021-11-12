

<template>
  <div class="main">
    <!-- 弹框-start -->
    <playGame v-if="buyEggBoxShow" @closeBox="closeBox"></playGame>

    <!-- 弹框-start -->
    <div class="main-wrap">
      <div class="top">
        <img src="@/assets/imgs/activity/activity/logo.png" />
      </div>
      <div class="mid">
        <div class="mid-content">
          <div class="content-top">Genesis Dragon Eggs Rush:</div>
          <!-- <div class="content-bottom">2021.08.25- 2021.08.31</div> -->
        </div>
      </div>
      <div class="bottom">
        <div class="content">
          <div
            class="content-top"
            v-loading="loading"
            element-loading-text="buying..."
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(66, 12, 12, 0.8)"
          >
            <div class="left">
              <div
                class="item"
                :class="selectDragonItem.id == item.id ? 'item-selected' : ''"
                v-for="(item, index) in dragonList"
                :key="index"
                @click="selectDragon(item)"
              >
                <img :src="item.dragonImg" />
              </div>
              <!-- <div class="item">
                <img src="@/assets/imgs/activity/activity/dragon/dragon2.png" />
              </div>
              <div class="item">
                <img src="@/assets/imgs/activity/activity/dragon/dragon3.png" />
              </div>
              <div class="item">
                <img src="@/assets/imgs/activity/activity/dragon/dragon4.png" />
              </div>
              <div class="item">
                <img src="@/assets/imgs/activity/activity/dragon/dragon5.png" />
              </div> -->
            </div>
            <div class="right">
              <div class="right-wrap">
                <div class="purchase-left">
                  <div class="left-egg">
                    <img :src="selectDragonItem.dragonEggImg" />
                  </div>
                  <div class="left-egg-bottom">
                    <img src="@/assets/imgs/activity/activity/egg_bottom.png" />
                  </div>
                  <div class="left-egg-text">
                    {{ selectDragonItem.eggName }}
                  </div>
                </div>
                <div class="purchase-right">
                  <div class="purchase-title">
                    <!-- Only:{{ selectDragonItem.eggNum }} Eggs -->
                    Only: ? ? ? Eggs
                  </div>
                  <div class="purchase-content">
                    <div class="item">
                      <div class="item-icon"></div>
                      <div class="item-text">{{ selectDragonItem.eggDes }}</div>
                    </div>

                    <div class="item">
                      <div class="item-icon"></div>
                      <div class="item-text">
                        The only opportunity to purchase Genesis Dragon egg and
                        will not be available thereafter
                      </div>
                    </div>

                    <div class="item">
                      <div class="item-icon"></div>
                      <div class="item-text">
                        Each address can only get one Genesis Dragon Egg
                      </div>
                    </div>
                  </div>
                  <div class="purchase-bottom">
                    <div class="purchase-bottom-img" @click="buyEgg">
                      <img
                        src="@/assets/imgs/activity/activity/create-btn.png"
                      />
                    </div>
                    <div class="purchase-bottom-select">
                      <div class="select-title">Pay Using:</div>
                      <div class="select-item">
                        <!-- <el-dropdown
                          @command="selectPay"
                          trigger="click"
                          style="
                            background-color: rgba(0, 0, 0, 0);
                            border: none;
                          "
                        >
                          <div class="select-item-btn">
                            <img
                              src="@/assets/imgs/activity/activity/pay1.png"
                            />
                            {{ payTypeText[payType - 1].name
                            }}<i class="el-icon-arrow-down el-icon--right"></i>
                          </div>
                          <template #dropdown>
                            <el-dropdown-menu
                              class="select-item-drop"
                              style="background-color: #280e06; border: none"
                            >
                              <el-dropdown-item
                                command="1"
                                class="select-item-drop"
                                style="
                                  background-color: #280e06;
                                  color: #ffffff;
                                "
                                >BNB</el-dropdown-item
                              >
                            </el-dropdown-menu>
                          </template>
                        </el-dropdown> -->

                        <selectListActivity
                          :selectList="selectList1"
                          :selectItem="selectItem1"
                          :selectListShow="selectListShow1"
                        ></selectListActivity>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="content-bottom">
            <div class="bottom-wrap">
              <div class="bottom-wrap-title">
                Genesis Dragon Eggs Rush：Purchase Process
              </div>
              <div class="bottom-wrap-content">
                <!-- <div class="item">
                  <div class="item-icon"></div>
                  <div class="item-text">
                    <div class="item-text-title">
                      The snapping process is divided into five stages
                    </div>
                    <div class="item-text-time">
                      <div class="time-icon"></div>
                      2021.08.25 - 2021.08.31
                    </div>
                    <div class="item-text-time">
                      <div class="time-icon"></div>
                      2021.09.01 - 2021.09.07
                    </div>
                    <div class="item-text-time">
                      <div class="time-icon"></div>
                      2021.09.08 - 2021.09.14
                    </div>
                    <div class="item-text-time">
                      <div class="time-icon"></div>
                      2021.09.15 - 2021.09.21
                    </div>
                    <div class="item-text-time">
                      <div class="time-icon"></div>
                      2021.09.22 - 2021.09.28
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="item-icon"></div>
                  <div class="item-text">
                    Number of Genesis Dragon Egg：9800
                  </div>
                </div>
                <div class="item">
                  <div class="item-icon"></div>
                  <div class="item-text">
                    Purchase Time：8PM every night during the event
                  </div>
                </div> -->
                <div class="item">
                  <div class="item-icon"></div>
                  <div class="item-text">
                    For more information, please stay tuned.
                  </div>
                </div>
                <div class="item">
                  <div class="item-icon"></div>
                  <div class="item-text">We will launch the campaign soon.</div>
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
import buyEggBox from "@/components/modalBox/buyEggBox/index.vue";
import playGame from "@/components/modalBox/playGame/index.vue";
import selectListActivity from "@/components/selectList/selectListActivity.vue";
import common from "@/utils/common";

export default {
  name: "activity",
  components: { buyEggBox, playGame, selectListActivity },
  setup() {
    const router = useRouter();
    const state = reactive({
      loading: false,
      buyEggBoxShow: false,
      payTypeText: [
        { key: 1, name: "BNB" },
        // { key: 2, name: "WX" },
      ],
      payType: 1,
      dragonList: [
        {
          id: 1,
          type: 1,
          dragonImg: require("@/assets/imgs/activity/activity/dragon/dragon1.png"),
          dragonEggImg: require("@/assets/imgs/activity/activity/dragon/egg/dragonEgg1.png"),
          eggName: "Fire Egg",
          eggDes: "Fire Dragon：Violent battle",
          eggNum: 200,
        },
        {
          id: 2,
          type: 2,
          dragonImg: require("@/assets/imgs/activity/activity/dragon/dragon2.png"),
          dragonEggImg: require("@/assets/imgs/activity/activity/dragon/egg/dragonEgg2.png"),
          eggName: "Thunder Egg",
          eggDes: "Thunder Dragon：Skill damage",
          eggNum: 300,
        },
        {
          id: 3,
          type: 3,
          dragonImg: require("@/assets/imgs/activity/activity/dragon/dragon3.png"),
          dragonEggImg: require("@/assets/imgs/activity/activity/dragon/egg/dragonEgg3.png"),
          eggName: "Water Egg",
          eggDes: "Water Dragon：Auxiliary regeneration",
          eggNum: 400,
        },
        {
          id: 4,
          type: 4,
          dragonImg: require("@/assets/imgs/activity/activity/dragon/dragon4.png"),
          dragonEggImg: require("@/assets/imgs/activity/activity/dragon/egg/dragonEgg4.png"),
          eggName: "Storm Egg",
          eggDes: "Storm Dragon：Agile attack",
          eggNum: 500,
        },
        {
          id: 5,
          type: 5,
          dragonImg: require("@/assets/imgs/activity/activity/dragon/dragon5.png"),
          dragonEggImg: require("@/assets/imgs/activity/activity/dragon/egg/dragonEgg5.png"),
          eggName: "Rock Egg",
          eggDes: "Rock Dragon：Defensive control",
          eggNum: 200,
        },
      ],
      selectDragonItem: {},
      selectListShow1: false,
      selectItem1: {},
      selectList1: [
        {
          id: 1,
          name: "BNB",
          img: require("@/assets/imgs/activity/activity/pay1.png"),
        },
      ],
    });
    onMounted(() => {
      init();
      common.goTopScroll()
    });

    const init = () => {
      state.selectDragonItem = state.dragonList[0];
    };
    const selectPay = (command) => {
      console.log(command);
      state.payType = command;
    };
    const selectDragon = (item) => {
      console.log(item);
      state.selectDragonItem = item;
    };
    const buyEgg = (item) => {
      state.loading = true;
      setTimeout(() => {
        state.loading = false;
        state.buyEggBoxShow = true;
      }, 2000);
    };
    const closeBox = (item) => {
      state.buyEggBoxShow = false;
    };

    

    return {
      ...toRefs(state),
      selectPay,
      selectDragon,
      buyEgg,
      closeBox,
    };
  },
};
</script>

<style lang="less" scoped >
.main {
  .main-wrap {
    width: 1920px;
    // height: 2485px;
    height: 1500px;
    background: linear-gradient(315deg, #2e0b00 0%, #2e0b00 100%);
    margin: 0 auto;
    .top {
      // height: 92px;
      height: 78px;
      background: #050303;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: calc(134 * 0.8px);
        height: calc(64 * 0.8px);
      }
    }
    .mid {
      // height: 142px;
      height: 108px;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url("../../../assets/imgs/activity/activity/mid-bc.png");
      display: flex;
      justify-content: center;
      //   align-items: center;
      .mid-content {
        display: flex;
        align-items: center;
        .content-top {
          // margin-top: 6px;
          font-size: 48px;
          font-family: GothamRounded-Bold;
          font-weight: bold;
          color: #ffffff;
          text-align: center;
        }
        .content-bottom {
          margin-top: 10px;
          font-size: 24px;
          font-family: GothamRounded;
          color: #ffffff;
          text-align: center;
        }
      }
    }
    .bottom {
      width: 1200px;
      margin: 0 auto;
      margin-top: 47px;
      .content {
        .content-top {
          display: flex;
          justify-content: space-between;
          .left {
            width: 180px;
            height: 660px;
            // background: rgba(25, 23, 22, 0.29);
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 8px;
            //  padding: 12px 36px;
            .item {
              display: flex;
              justify-content: center;
              align-items: center;
              // margin-bottom: 24px;
              cursor: pointer;
              width: 100%;
              height: 132px;
              img {
                width: 108px;
                height: 108px;
              }
            }
            .item:hover {
              background: rgba(245, 158, 100, 0.05);
              //border: 1px solid #f59e64;
            }
            .item-selected {
              background: rgba(245, 158, 100, 0.18);
              border: 1px solid #f59e64;
              width: calc(100% - 2px);
              height: 130px;
            }
            .item:first-child {
              border-radius: 8px 8px 0 0;
            }
            .item:last-child {
              border-radius: 0 0 8px 8px;
            }
          }
          .right {
            width: 996px;
            height: 660px;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 8px;
            .right-wrap {
              margin: 183px 32px 0 32px;
              display: flex;
              .purchase-left {
                width: 382px;
                height: 282px;
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                margin-right: 40px;
                .left-egg {
                  position: absolute;
                  top: 0;
                  z-index: 99;

                  img {
                    width: 185px;
                    height: 187px;
                    animation: activityEgg 2s infinite alternate;
                    -webkit-animation: activityEgg 2s infinite alternate;
                  }
                }
                .left-egg-bottom {
                  position: absolute;
                  bottom: 40px;
                  img {
                    width: 382px;
                    height: 151px;
                  }
                }
                .left-egg-text {
                  position: absolute;
                  bottom: 0;
                  font-size: 24px;
                  font-family: Gotham Rounded-Medium, Gotham Rounded;
                  color: #ffffff;
                }
              }
              .purchase-right {
                .purchase-title {
                  font-size: 32px;
                  font-family: Gotham Rounded-Bold, Gotham Rounded;
                  font-weight: bold;
                  color: #ffffff;
                }
                .purchase-content {
                  margin-top: 30px;
                  width: 486px;
                  .item {
                    margin-bottom: 30px;
                    display: flex;
                    align-items: flex-start;
                    .item-icon {
                      min-width: 8px;
                      height: 8px;
                      background: #ffffff;
                      border-radius: 50%;
                      margin-top: 6px;
                    }
                    .item-text {
                      margin-left: 10px;
                      font-size: 16px;
                      font-family: Gotham Rounded-Book, Gotham Rounded;
                      font-weight: normal;
                      color: #ffffff;
                      opacity: 0.86;
                    }
                  }
                }
                .purchase-bottom {
                  display: flex;
                  align-items: center;
                  .purchase-bottom-img {
                    cursor: pointer;
                    img {
                      width: 150px;
                      height: 60px;
                    }
                  }
                  .purchase-bottom-select {
                    margin-left: 55px;
                    display: flex;
                    align-items: center;
                    .select-title {
                      font-size: 14px;
                      font-family: Gotham Rounded-Book, Gotham Rounded;
                      font-weight: normal;
                      color: #ffffff;
                      // width: 150px;
                    }
                    .select-item {
                      margin-left: 10px;
                    }
                  }
                }
              }
            }
          }
        }
        .content-bottom {
          margin-top: 24px;
          width: 1200px;
          //height: 666px;
          height: 323px;
          background: rgba(25, 23, 22, 0.2800000011920929);
          border: 1px solid rgba(255, 255, 255, 0.07999999821186066);
          border-radius: 8px;
          .bottom-wrap {
            margin: 0 auto;
            margin-top: 80px;
            width: 800px;
            .bottom-wrap-title {
              font-size: 32px;
              font-family: Gotham Rounded-Bold, Gotham Rounded;
              font-weight: bold;
              color: #ffffff;
              display: flex;
              justify-content: center;
            }
            .bottom-wrap-content {
              margin-top: 30px;
              .item {
                display: flex;
                align-items: flex-start;
                margin-top: 20px;
                .item-icon {
                  min-width: 12px;
                  width: 12px;
                  height: 12px;
                  background: #f59e64;
                  border-radius: 50%;
                  margin-top: 10px;
                }
                .item-text {
                  margin-left: 20px;
                  font-size: 24px;
                  font-family: Gotham Rounded-Book, Gotham Rounded;
                  font-weight: normal;
                  color: #ffffff;
                  opacity: 0.86;
                  .item-text-title {
                  }
                  .item-text-time {
                    display: flex;
                    align-items: center;
                    margin-top: 8px;
                    .time-icon {
                      min-width: 8px;

                      border-radius: 50%;
                      // margin-top: 8px;
                      width: 8px;
                      height: 8px;
                      background: rgba(255, 255, 255, 0.8600000143051147);
                      margin-right: 10px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    /deep/ .el-loading-spinner .el-loading-text {
      color: #ecf5ff;
    }
    /deep/ .el-loading-spinner .el-icon-loading {
      color: #ecf5ff;
    }
  }
  @keyframes activityEgg {
    from {
      margin-top: -30px;
    }
    to {
      margin-top: -10px;
    }
  }
  @-webkit-keyframes activityEgg {
    from {
      margin-top: -30px;
    }
    to {
      margin-top: -10px;
    }
  }
}
.par-top20 {
  margin-top: 30px;
}
</style>