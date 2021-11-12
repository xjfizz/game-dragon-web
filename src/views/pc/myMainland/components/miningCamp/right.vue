<template>
  <earnedDetail
    v-if="earnedDetailShow"
    @initMiningCamp="initMiningCamp"
  ></earnedDetail>
  <earnPart v-if="earnPartShow" @initMiningCamp="initMiningCamp"></earnPart>
  <cancelEarn
    v-if="cancelEarnShow"
    @initMiningCamp="initMiningCamp"
  ></cancelEarn>
  <div class="right-main">
    <div class="right-main-wrap" v-if="miningCampList.length > 0">
      <div
        class="item"
        :class="
          index == dragonEggListPageInfo.pageSize - 1 ? 'item-last-child' : ''
        "
        v-for="(item, index) in miningCampList"
        :key="index"
      >
        <div class="dragon-img">
          <div class="dragon-wrap">
            <dragonCreate
              ref="dragonCreate"
              :dragonImgEye="createDragon(item.heroVo.parts[0])"
              :dragonImgWing="createDragon(item.heroVo.parts[4])"
              :dragonImgHorn="createDragon(item.heroVo.parts[2])"
              :dragonImgBody="createDragon(item.heroVo.parts[6])"
              :dragonImgTotems="createDragon(item.heroVo.parts[1])"
              :dragonImgEar="createDragon(item.heroVo.parts[3])"
              :dragonImgTail="createDragon(item.heroVo.parts[5])"
            ></dragonCreate>
          </div>
        </div>
        <div class="dragon-breed">
          <div class="top">
            <div
              class="top-color"
              :class="'top-color-status' + dragonLocalTypeList[item.clazz]"
            >
              # {{ item.heroVo.no }}
            </div>
          </div>
          <div class="bottom">
            <!-- Breed count: {{ item.breedCount }} -->
            <el-tooltip
              :content="' Breed count: ' + item.heroVo.breedCount"
              placement="bottom"
            >
              <div>Breed count: {{ item.heroVo.breedCount }}</div>
            </el-tooltip>
          </div>
        </div>
        <div class="dragon-power">
          <div class="top">Hash Power</div>
          <div class="bottom">{{ item.pawnDragon.power }}</div>
        </div>
        <div class="dragon-dmp">
          <div class="top">Est. Reward(DMP)</div>
          <div class="bottom">
            {{ common.formatValue4(item.pawnDragon.expProfit) }} DMP
          </div>
        </div>
        <div class="dragon-time">
          <div class="top">Time left</div>
          <div class="bottom">
            {{ item.countDownTime }}
          </div>
        </div>
        <div class="dragon-opts">
          <div
            v-if="!item.isFinshTime && !item.isOverThreeHour"
            class="removal-btn opts-hover opts-hover-no"
          >
            Rewards
          </div>
          <div
            v-if="!item.isFinshTime && item.isOverThreeHour"
            class="removal-btn opts-hover"
            @click="rewards(item)"
          >
            Rewards
          </div>
          <div
            v-if="!item.isFinshTime"
            class="cancel-btn opts-hover"
            @click="cancelStaking(item)"
          >
            Cancel staking
          </div>
          <div
            v-if="item.isFinshTime"
            class="claim-btn opts-hover"
            @click="claim(item)"
          >
            Claim
          </div>
        </div>
      </div>
    </div>
    <div v-else class="right-main-wrap no-data">
      <div class="no-data-title">No staked</div>
      <div class="no-data-des">* Stake Dragons, earn DMP</div>
    </div>
  </div>
  <div class="page-wrp">
    <!-- page -->
    <page
      v-if="dragonEggListPageInfo.totalPages > 1"
      :pageInfo="dragonEggListPageInfo"
      @leftPage="leftPage"
      @rightPage="rightPage"
      @search="search"
    ></page>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs, ref, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import dragonCreate from "@/views/pc/myMainland/components/dragonCreate/mingingCampLsitCreateDragon.vue";
import dragonLocalTypeList from "@/views/pc/myMainland/use/dragonLocalTypeList";
import common from "@/utils/common";
import myDragon from "@/views/pc/myMainland/use/myDragon";
// import miningCampRightHandle from "../../use/miningCamp/right.js";
import miningCampRightHandle from "../../use/miningCamp/right";
import page from "@/components/page/index.vue";
import earnedDetail from "./components/earnedDetail.vue";
import earnPart from "./components/earnPart.vue";
import cancelEarn from "./components/cancelEarn.vue";

export default {
  name: "miningCampRight",
  components: {
    dragonCreate,
    earnedDetail,
    earnPart,
    cancelEarn,
    page,
  },
  setup(prop, context) {
    const router = useRouter();
    const state = reactive({});

    const {
      rightInit,
      miningCampRightState,
      claim,
      rewards,
      cancelStaking,
      leftPage,
      rightPage,
      search,
    } = miningCampRightHandle(context);
    const { createDragon } = myDragon();
    onMounted(() => {
      rightInit();
    });
    const initMiningCamp = () => {
     context.emit("initMiningCamp");
    };

    onBeforeUnmount(() => {
      // miningCampRightState.miningCampList = []
      miningCampRightState.miningCampList.map((item) => {
        if (item.countDownFn) {
          clearInterval(item.countDownFn);
        }
      });
    });

    return {
      ...toRefs(state),
      ...toRefs(miningCampRightState),
      dragonLocalTypeList,
      createDragon,
      claim,
      rewards,
      cancelStaking,
      leftPage,
      rightPage,
      search,
      initMiningCamp,
      common,
    };
  },
};
</script>


<style lang="less" scoped>
.right-main {
  .right-main-wrap {
    width: 970px;
    height: calc(544px * 0.95);
    min-height: calc(544px * 0.95);
    overflow-y: scroll;
    background: #282523;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    .item {
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      padding: 0 24px 0 16px;
      height: 85px;
      min-height: 85px;
      .dragon-img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 54px;
        min-height: 54px;
        .dragon-wrap {
        }
      }
      .dragon-breed {
        margin-left: 8px;
        .top {
          .top-color {
            width: 68px;
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
        .bottom {
          margin-top: 8px;
          // width: 200px;
          font-size: 12px;
          font-family: GothamRounded-Book, GothamRounded;
          font-weight: normal;
          color: rgba(255, 255, 255, 0.48);
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          /*! autoprefixer: off */
          -webkit-box-orient: vertical;
          /* autoprefixer: on */
          -webkit-line-clamp: 1;
          word-break: break-all; /*追加这一行代码*/
        }
      }
      .dragon-power {
        margin-left: 54px;
        .top {
          font-size: 16px;
          font-family: GothamRounded-Book, GothamRounded;
          font-weight: normal;
          color: rgba(255, 255, 255, 0.48);
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          /*! autoprefixer: off */
          -webkit-box-orient: vertical;
          /* autoprefixer: on */
          -webkit-line-clamp: 1;
          word-break: break-all; /*追加这一行代码*/
        }
        .bottom {
          margin-top: 11px;
          font-size: 14px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          color: #ffffff;
        }
      }
      .dragon-dmp {
        margin-left: 40px;
        .top {
          font-size: 16px;
          font-family: GothamRounded-Book, GothamRounded;
          font-weight: normal;
          color: rgba(255, 255, 255, 0.48);
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          /*! autoprefixer: off */
          -webkit-box-orient: vertical;
          /* autoprefixer: on */
          -webkit-line-clamp: 1;
          word-break: break-all; /*追加这一行代码*/
        }
        .bottom {
          margin-top: 11px;
          font-size: 14px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          color: #ffffff;
        }
      }
      .dragon-time {
        margin-left: 29px;
        .top {
          font-size: 16px;
          font-family: GothamRounded-Book, GothamRounded;
          font-weight: normal;
          color: rgba(255, 255, 255, 0.48);
        }
        .bottom {
          margin-top: 11px;
          font-size: 14px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          color: #ffffff;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          /*! autoprefixer: off */
          -webkit-box-orient: vertical;
          /* autoprefixer: on */
          -webkit-line-clamp: 1;
          word-break: break-all; /*追加这一行代码*/
        }
      }
      .dragon-opts {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-left: auto;
        .opts-hover:hover {
          opacity: 0.55;
        }
        .opts-hover-no {
          opacity: 0.55;
        }
        .cancel-btn {
          margin-top: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 153px;
          height: 14px;
          font-size: 14px;
          font-family: GothamRounded-Book, GothamRounded;
          font-weight: normal;
          color: rgba(255, 255, 255, 0.48);
          cursor: pointer;
        }
        .removal-btn {
          margin-left: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 153px;
          height: 32px;
          border-radius: 25px;
          border: 1px solid #ffc763;
          font-size: 16px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          color: #ffc763;
          cursor: pointer;
        }
        .claim-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 153px;
          height: 32px;
          background: #ffc763;
          border-radius: 25px;
          background: #ffc763;

          font-size: 16px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          color: #2e0b00;
          cursor: pointer;
        }
      }
    }
    .item-last-child {
      border: none;
    }
  }
  .no-data {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .no-data-title {
      font-size: 24px;
      font-family: GothamRounded-Medium, GothamRounded;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.48);
    }
    .no-data-des {
      margin-top: 8px;
      font-size: 16px;
      font-family: GothamRounded-Book, GothamRounded;
      font-weight: normal;
      color: rgba(255, 255, 255, 0.48);
    }
  }
}
</style>
