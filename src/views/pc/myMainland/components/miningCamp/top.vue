<template>
  <div class="top-main">
    <div class="top-title">
      <div class="title-left">
        <div class="left-text">Mining Camp</div>
        <div class="left-des">Stake Dragons, Earn DMP</div>
      </div>
      <div v-if="false" class="title-right">
        <div class="right-title">APR</div>
        <div class="right-value">
          <div class="value">126.32</div>
          <div class="value-unit">%</div>
        </div>
      </div>
    </div>
    <div class="top-content">
      <div class="top-content-item">
        <div class="left">
          <img src="@/assets/imgs/myMainland/miningCamp/top/icon1.png" alt="" />
        </div>
        <div class="right">
          <div class="top">Total Staked Dragons</div>
          <div class="bottom">{{topData.totalDragons.value}}</div>
        </div>
      </div>

      <div class="top-content-item">
        <div class="left">
          <img src="@/assets/imgs/myMainland/miningCamp/top/icon2.png" alt="" />
        </div>
        <div class="right">
          <div class="top">Total Mined DMP</div>
          <div class="bottom">{{topData.totalDmp.value}}</div>
        </div>
      </div>

      <div class="top-content-item">
        <div class="left">
          <img src="@/assets/imgs/myMainland/miningCamp/top/icon3.png" alt="" />
        </div>
        <div class="right">
          <div class="top">Total Users</div>
          <div class="bottom">{{topData.totalUsers.value}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs, ref } from "vue";
import { useRouter } from "vue-router";
import miningCampTopHandle from "../../use/miningCamp/top";

export default {
  name: "miningCampRight",
  components: {},
  setup() {
    const router = useRouter();
    const state = reactive({});

    const { miningCampTopState,initTop } = miningCampTopHandle();

    onMounted(() => {
      initTop()
    });

    return {
      ...toRefs(state),
      ...toRefs(miningCampTopState),
    };
  },
};
</script>


<style lang="less" scoped>
.top-main {
  .top-title {
    display: flex;
    align-items: center;
    .title-left {
      border-right: 2px solid rgba(255, 255, 255, 0.12);
      padding-right: 31px;
      .left-text {
        font-size: 28px;
        font-family: GothamRounded-Medium, GothamRounded;
        font-weight: 500;
        color: #ffffff;
        height: 28px;
        line-height: 28px;
      }
      .left-des {
        font-size: 14px;
        font-family: GothamRounded-Book, GothamRounded;
        font-weight: normal;
        color: #ffffff;
        opacity: 0.48;
        // height: 21px;
        // line-height: 21px;
      }
    }
    .title-right {
      padding-left: 23px;
      .right-title {
        font-size: 14px;
        font-family: GothamRounded-Book, GothamRounded;
        font-weight: normal;
        color: #ffffff;
      }
      .right-value {
        display: flex;
        align-items: flex-end;
        .value {
          font-size: 28px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          color: #ffffff;
          height: 30px;
          line-height: 30px;
        }
        .value-unit {
          font-size: 14px;
          font-family: GothamRounded-Book, GothamRounded;
          font-weight: normal;
          color: #ffffff;
          height: 21px;
          line-height: 21px;
        }
      }
    }
  }
  .top-content {
    margin-top: 20px;
    // width: 1452px;
    // height: 144px;
    height: 130px;

    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    display: flex;
    justify-content: space-around;
    align-items: center;
    .top-content-item {
      display: flex;
      align-items: center;
      .left {
        img {
          width: 65px;
          height: 64px;
        }
      }
      .right {
        margin-left: 16px;
        .top {
          height: 14px;
          font-size: 14px;
          font-family: GothamRounded-Book, GothamRounded;
          font-weight: normal;
          color: #ffffff;
          line-height: 17px;
          opacity: 0.48;
        }
        .bottom {
          margin-top: 4px;
          height: 30px;
          font-size: 28px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          color: #ffffff;
          line-height: 30px;
        }
      }
    }
  }
}
</style>