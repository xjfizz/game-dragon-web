<template>
  <div class="receive-main">
    <div class="top"></div>
    <div class="bottom">
      <div class="top-wrap">
        <div class="title">
          List of All Applicants : {{ rankListPageInfo.total }}
        </div>
        <div class="content-des">
          <div class="content-des-item"></div>
        </div>
      </div>
      <div
        class="load-wrap"
        v-loading="loadingForm.loadingShow"
        :element-loading-text="loadingForm.loadingShowText"
        element-loading-spinner="el-icon-loading"
      >
        <div class="bottom-wrap">
          <div class="rank-list">
            <div class="item-title">
              <div class="item-left">Address</div>
              <div class="item-right">Payment Status</div>
            </div>
            <div class="item-content" v-if="rankList.length > 0">
              <div class="item" v-for="(item, index) in rankList" :key="index">
                <div class="item-left">
                  <el-tooltip
                    effect="dark"
                    :content="item.walletAddress"
                    placement="bottom"
                  >
                    <div class="item-mid-text">
                      {{ item.walletAddress }}
                    </div>
                  </el-tooltip>
                </div>
                <div class="item-right">
                  <div class="selected">
                    <img
                      v-if="item.bnbPayStatus == 3"
                      src="../../../assets/imgs/dragonSignUp/selected.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="no-data">No data</div>
          </div>
        </div>

        <div class="bottom-page">
          <!-- page -->

          <page
            v-if="rankListPageInfo.totalPages > 1"
            :pageInfo="rankListPageInfo"
            @leftPage="leftPage"
            @rightPage="rightPage"
            @search="search"
          ></page>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from "vue";
import { useRouter } from "vue-router";
import dragonSignUpHandle from "./use/dragonSignUpResult.js";

import common from "@/utils/common";
import { getSession, getToken, setCookie } from "@/utils/auth.js";
import page from "@/components/page/index.vue";

export default {
  name: "dragonSignUp",
  components: {
    page,
  },
  setup() {
    const router = useRouter();
    const state = reactive({});
    onMounted(() => {
      //  if (!getToken()) {
      //     return router.push({ path: "/login" });
      // }
      common.goTopScroll();
      initList();
    });

    let {
      dragonSignUpState,
      submit,
      closeBox,
      openTips,
      leftPage,
      rightPage,
      search,
      initList,
      pay,
    } = dragonSignUpHandle();

    return {
      ...toRefs(state),
      ...toRefs(dragonSignUpState),
      submit,
      closeBox,
      openTips,
      leftPage,
      rightPage,
      search,
      initList,
      pay,
    };
  },
};
</script>

<style lang="less" scoped>
.receive-main {
  width: 100%;
  height: 2400px;
  //  background-color: #ff5400;
  .top {
    height: 680px;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("../../../assets/imgs/dragonSignUp/top-bc.png");
  }
  .bottom {
    //height: 1950px;
    height: 1900px;
    background: linear-gradient(
      180deg,
      #1f1c1f 0%,
      #2d1f1c 5%,
      #221d1d 18%,
      #1f1c1f 49%,
      #291e16 75%,
      #120804 90%,
      #100602 100%
    );
    display: flex;
    flex-direction: column;
    //   justify-content: center;
    align-items: center;

    .top-wrap {
      width: 1200px;
      .title {
        margin-top: 50px;
        font-size: 42px;
        font-family: WendyOne-Regular, WendyOne;
        font-weight: 400;
        color: #ffffff;
        line-height: 64px;
        text-align: center;
      }
      .content-des {
        margin-top: 40px;
        .content-des-item {
          margin-bottom: 60px;
          font-size: 28px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          color: #ffffff;
          line-height: 31px;
        }
      }
    }

    .pay-address {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 10px;
      width: 1000px;
      .left {
        width: 486px;
        height: 48px;
        border-radius: 24px;
        border: 1px solid rgba(255, 255, 255, 0.18);
        font-size: 14px;
        font-family: GothamRounded-Book, GothamRounded;
        font-weight: normal;
        color: #ffffff;
        line-height: 17px;
        display: flex;
        justify-content: center;
        align-items: center;
        // opacity: 0.38;
        margin-right: 100px;
      }
      .right {
        width: calc(200px * 1);
        height: calc(80px * 1);
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url("../../../assets/imgs/activity/home/openBox/start-btn.png");
        display: flex;
        justify-content: center;
        // align-items: center;
        cursor: pointer;
        .text {
          margin-top: 20px;
          font-size: 24px;
          font-family: GothamRounded;
          font-weight: bold;
          color: #794126;
        }
      }
      .no-pay {
        opacity: 0.55;
      }
    }
    .bottom-line {
      display: flex;
      align-items: center;
      margin-top: 30px;
      .line {
        width: 550px;
        height: 1px;
        opacity: 0.08;
        background-color: #ffffff;
      }
      .text {
        margin-left: 28px;
        margin-right: 28px;
        font-size: 14px;
        font-family: GothamRounded-Book, GothamRounded;
        font-weight: normal;
        color: #ffffff;
        line-height: 17px;
        opacity: 0.38;
      }
    }
    .bottom-wrap {
      margin-top: 50px;
      display: flex;
      align-items: center;
      flex-direction: column;
      .rank-list {
        width: 1000px;
        // height: calc(684px * 1.5);
        background-color: #1e1d1d;
        border: 1px solid rgba(102, 81, 81, 0.3);
        // background-repeat: no-repeat;
        // background-size: cover;
        // background-image: url("../../../assets/imgs/dragonSignUp/rank-bc.png");
        .item-title {
          width: 100%;
          height: 46px;
          border-bottom: 1px solid rgba(102, 81, 81, 0.3);
          display: flex;
          align-items: center;
          font-size: 13px;
          font-family: GothamRounded;
          font-weight: bold;
          color: #ffffff;
          line-height: 22px;
          .item-left {
            flex: 2;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .item-right {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
        .item-content {
          .item {
            width: 100%;
            height: 47px;
            border-bottom: 1px solid rgba(102, 81, 81, 0.3);
            display: flex;
            justify-content: center;
            align-items: center;
            .item-left {
              flex: 2;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 13px;
              font-family: Gotham;
              font-weight: bold;
              color: #ffffff;
              line-height: 22px;
              opacity: 0.34;
              margin-left: 20px;
              .item-mid-text {
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
            .item-right {
              flex: 1;
              display: flex;
              justify-content: center;
              align-items: center;
              .selected {
                width: 30px;
                height: 30px;
                background: #010101;
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 3px;
                display: flex;
                justify-content: center;
                align-items: center;
                img {
                  width: 22px;
                  height: 17px;
                }
              }
            }
          }
        }
        .no-data {
          padding: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 13px;
          font-family: Gotham;
          font-weight: bold;
          color: #ffffff;
          opacity: 0.55;
        }
      }
    }
    .bottom-page {
    }
  }
}
</style>
<style lang="less">
.item-img {
  .el-upload--picture-card {
    background: transparent !important;
    border: none;
    width: 316px;
    height: 316px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>