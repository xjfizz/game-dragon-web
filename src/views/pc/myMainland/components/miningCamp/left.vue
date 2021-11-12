<template>
  <selectDragon v-if="selectDragonShow" @initMiningCamp="initMiningCamp"></selectDragon>
  <confirmDetails v-if="confirmDetailsShow"  @initMiningCamp="initMiningCamp"></confirmDetails>
  <div class="left-main">
    <div class="stake-content">
      <div class="content-wrap">
        <div class="stake-content-top">
          <div class="left" @click="test">
            <img
              src="@/assets/imgs/myMainland/miningCamp/top/icon1.png"
              alt=""
            />
          </div>
          <div class="mid">
            <div class="mid-title">My Total Dragons</div>
            <div class="mid-num">
              <div class="num">{{ myPledge.totalDragons || 0 }}</div>
              <div class="num-des">
                (Hash power: {{ myPledge.totalPower || 0 }})
              </div>
            </div>
          </div>
          
          <div v-if="isCheckAuthorization" class="right right-hover" @click="startSelectDragon">Stake</div>
          <div v-else class="right right-hover" @click="startAuthorization">Approve</div>
        </div>
        <div class="stake-content-mid">
          <div class="left">
            <img
              src="@/assets/imgs/myMainland/miningCamp/top/icon2.png"
              alt=""
            />
          </div>
          <div class="mid">
            <div class="mid-title">Accumulated DMP Collected</div>
            <div class="mid-num">
              <div class="num">{{ myPledge.totalProfit || 0 }}</div>
            </div>
          </div>
        </div>
        <div class="stake-content-bottom">
          <div
            v-if="myPledge.stakedDragons > 0"
            class="stake-content-bottom-wrap"
          >
            <div class="stake-content-bottom-top">
              <div class="stake-content-bottom-top-title">
                My Staked Dragons
              </div>
              <div class="stake-content-bottom-top-des">
                <div class="des">
                  (Hash power: {{ myPledge.stakedPower || 0 }})
                </div>
                <div class="value">{{ myPledge.stakedDragons || 0 }}</div>
              </div>
            </div>
            <div class="stake-content-bottom-mid">
              <div class="stake-content-bottom-mid-title">Est. Reward(DMP)</div>
              <div class="stake-content-bottom-mid-des">
                <div class="value">{{ myPledge.totalExpProfit || 0 }}</div>
              </div>
            </div>
            <div class="stake-content-bottom-bottom">
              <div class="stake-content-bottom-bottom-des">
                Unearned Reward(DMP):
              </div>
              <div class="stake-content-bottom-bottom-value">
                {{ myPledge.remProfit || 0 }}
              </div>
            </div>
          </div>
          <div v-else class="stake-content-bottom-wrap no-data">No staked</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs, ref } from "vue";
import { useRouter } from "vue-router";
import dragonCreate from "@/views/pc/myMainland/components/dragonCreate/mingingCampLsitCreateDragon.vue";
import dragonLocalTypeList from "@/views/pc/myMainland/use/dragonLocalTypeList";
import common from "@/utils/common";
import myDragon from "@/views/pc/myMainland/use/myDragon";
// import miningCampRightHandle from "../../use/miningCamp/right.js";
import miningCampLeftHandle from "../../use/miningCamp/left";

import page from "@/components/page/index.vue";
import selectDragon from "./components/selectDragon.vue";
import confirmDetails from "./components/confirmDetails.vue";

export default {
  name: "miningCampLeft",
  components: {
    dragonCreate,
    selectDragon,
    confirmDetails,
  },
  setup(prop,context) {
    const router = useRouter();
    const state = reactive({});
  
    const { miningCampLeftState, stakeDragons, initLeftData,test, checkAuthorization,startSelectDragon,startAuthorization  } =
      miningCampLeftHandle(context);
    const initMiningCamp = ()=> {
      context.emit('initMiningCamp')
    }
    const { createDragon } = myDragon();
    onMounted(() => {
      initLeftData();
      checkAuthorization()
    });

    return {
      ...toRefs(state),
      ...toRefs(miningCampLeftState),
      dragonLocalTypeList,
      createDragon,
      stakeDragons,
      startSelectDragon,
      startAuthorization,
      test,
      initMiningCamp,
    };
  },
};
</script>



<style lang="less" scoped>
.left-main {
  .title {
    width: 103px;
    height: 21px;
    font-size: 20px;
    font-family: GothamRounded-Medium, GothamRounded;
    font-weight: 500;
    color: #ffffff;
    line-height: 21px;
  }
  .stake-content {
    // margin-top: 16px;
    width: calc(484px * 0.95);
    height: calc(544px * 0.95);
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("../../../../../assets/imgs/myMainland/miningCamp/left/left-bc.png");
    display: flex;
    justify-content: center;
    // align-items: center;
    .content-wrap {
      //   padding: 54px 43px;
      padding: 34px 23px;

      .stake-content-top {
        display: flex;
        align-items: center;
        border-bottom: 1px solid rgba(46, 11, 0, 0.08);
        padding-bottom: 20px;
        .left {
          img {
            width: calc(65px * 0.6);
            height: calc(64px * 0.6);
          }
        }
        .mid {
          margin-left: 12px;

          .mid-title {
            font-size: 14px;
            font-family: GothamRounded-Book, GothamRounded;
            font-weight: normal;
            color: #2e0b00;
            line-height: 17px;
          }
          .mid-num {
            display: flex;
            align-items: flex-end;

            .num {
              width: 37px;
              height: 30px;
              font-size: 28px;
              font-family: GothamRounded-Medium, GothamRounded;
              font-weight: 500;
              color: #2e0b00;
              line-height: 30px;
            }
            .num-des {
              height: 21px;
              font-size: 14px;
              font-family: GothamRounded-Book, GothamRounded;
              font-weight: normal;
              color: #2e0b00;
              line-height: 21px;
              text-overflow: ellipsis;
              display: -webkit-box;
              /*! autoprefixer: off */
              -webkit-box-orient: vertical;
              /* autoprefixer: on */
              -webkit-line-clamp: 1;
              word-break: break-all; /*追加这一行代码*/
            }
          }
        }
        .right {
          margin-left: auto;
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
        .right-hover:hover {
          opacity: 0.55;
        }
      }
      .stake-content-mid {
        // margin-top: 34px;
        margin-top: 20px;

        display: flex;
        align-items: center;
        .left {
          img {
            width: calc(65px * 0.6);
            height: calc(64px * 0.6);
          }
        }
        .mid {
          margin-left: 12px;
          .mid-title {
            font-size: 14px;
            font-family: GothamRounded-Book, GothamRounded;
            font-weight: normal;
            color: #2e0b00;
            line-height: 17px;
          }
          .mid-num {
            display: flex;
            align-items: flex-end;
            .num {
              width: 37px;
              height: 30px;
              font-size: 28px;
              font-family: GothamRounded-Medium, GothamRounded;
              font-weight: 500;
              color: #2e0b00;
              line-height: 30px;
            }
          }
        }
      }
      .stake-content-bottom {
        margin-top: 30px;

        .stake-content-bottom-wrap {
          width: 404px;
          height: 228px;
          background: #2e0b00;
          border-radius: 8px;
          border: 2px solid rgba(216, 154, 92, 0.28);

          .stake-content-bottom-top {
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            padding-right: 24px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: center;
            height: 80px;
            .stake-content-bottom-top-title {
              font-size: 14px;
              font-family: GothamRounded-Book, GothamRounded;
              font-weight: normal;
              color: #ffffff;
              opacity: 0.48;
            }
            .stake-content-bottom-top-des {
              display: flex;
              align-items: center;
              margin-top: 3px;
              .des {
                font-size: 14px;
                font-family: GothamRounded-Book, GothamRounded;
                font-weight: normal;
                color: #ffffff;
                margin-right: 4px;
              }
              .value {
                font-size: 24px;
                font-family: GothamRounded-Medium, GothamRounded;
                font-weight: 500;
                color: #ffffff;
              }
            }
          }
          .stake-content-bottom-mid {
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            padding-right: 24px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: center;
            height: 80px;
            .stake-content-bottom-mid-title {
              font-size: 14px;
              font-family: GothamRounded-Book, GothamRounded;
              font-weight: normal;
              color: #ffffff;
              opacity: 0.48;
            }
            .stake-content-bottom-mid-des {
              display: flex;
              align-items: center;
              margin-top: 3px;
              .des {
                font-size: 14px;
                font-family: GothamRounded-Book, GothamRounded;
                font-weight: normal;
                color: #ffffff;
                margin-right: 4px;
              }
              .value {
                font-size: 24px;
                font-family: GothamRounded-Medium, GothamRounded;
                font-weight: 500;
                color: #ffffff;
              }
            }
          }
          .stake-content-bottom-bottom {
            padding-right: 24px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            height: 63px;
            .stake-content-bottom-bottom-des {
              font-size: 14px;
              font-family: GothamRounded-Book, GothamRounded;
              font-weight: normal;
              color: #ffffff;
              opacity: 0.48;
              margin-right: 8px;
            }
            .stake-content-bottom-bottom-value {
              font-size: 16px;
              font-family: GothamRounded-Medium, GothamRounded;
              font-weight: 500;
              color: #ffffff;
            }
          }
        }
        .no-data {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 24px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.48);
        }
      }
    }
  }
}
</style>