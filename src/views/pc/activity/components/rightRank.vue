<template>
  <div class="rank-main">
    <div class="rank-wrap">
      <div class="rank-wrap-content">
        <div class="rank-title">Invitation Ranking</div>
        <div class="rank-key-list">
          <div class="item-number">Number</div>
          <div class="item-address">Address</div>
          <div class="item-quantity">Quantity</div>
        </div>
        <div v-if="invitUserRankList.length > 0" class="rank-list">
          <div
            class="item"
            v-for="(item, index) in invitUserRankList"
            :key="index"
          >
            <div class="item-left">
              <div class="img">
                <img
                  v-if="index + 1 + ((page.currentPage - 1) * page.pageSize) == 1"
                  src="@/assets/imgs/activity/activity/index/rank-number1.png"
                  alt=""
                />
                <img
                  v-if="index + 1 + ((page.currentPage - 1) * page.pageSize) == 2"
                  src="@/assets/imgs/activity/activity/index/rank-number2.png"
                  alt=""
                />
                <img
                  v-if="index + 1 + ((page.currentPage - 1) * page.pageSize) == 3"
                  src="@/assets/imgs/activity/activity/index/rank-number3.png"
                  alt=""
                />
              </div>

              <div class="left-text">No.{{ index + 1 + ((page.currentPage - 1) * page.pageSize) }}</div>
            </div>
            <div class="item-mid">
              <el-tooltip
                class="item"
                effect="dark"
                :content="item.openId"
                placement="bottom"
                v-if="item.openId"
              >
                <div class="item-mid-text">
                  {{ item.openId || "no data" }}
                </div>
              </el-tooltip>
              <div v-if="!item.openId" class="item-mid-text">
                {{ item.openId || "no address" }}
              </div>
            </div>
            <div class="item-right">{{ item.cnt }}</div>
          </div>
        </div>
        <div v-else class="rank-list-noData">No data at the momentarily</div>
        <div class="rank-bottom" v-if="invitUserRankList.length > 0" >
          <div class="wrap">
            <div class="item-left" @click="nextPage(-1)">
              <img
                src="@/assets/imgs/activity/activity/index/page-right.png"
                alt=""
              />
            </div>
            <div v-if="page.pageBtns <= 5" class="item-wrap">
              <div
                class="item"
                v-for="(item, index) in page.pageBtns"
                :key="index"
                :class="item == page.currentPage ? 'item-selected' : ''"
                @click="getPage(item)"
              >
                <div class="text">{{ item }}</div>
              </div>
            </div>

            <div v-if="page.pageBtns > 5" class="item-wrap">
              <div
                class="item"
                v-for="(item, index) in (page.pageBtnsWrap*5 > page.pageBtns ? page.pageBtns%5 : 5)"
                :key="index"
                :class="
                  item + (page.pageBtnsWrap - 1) * 5 == page.currentPage
                    ? 'item-selected'
                    : ''
                "
                @click="getPage(item + (page.pageBtnsWrap - 1) * 5)"
              >
                <div class="text">{{ item + (page.pageBtnsWrap - 1) * 5 }}</div>
              </div>
            </div>
            <!-- <div class="item" v-for="(item,index) in page.pageBtns" :key="index" :class="item == page.currentPage ? 'item-selected' : ''" @click="getPage(item)">
                <div class="text">{{item}}</div>
              </div> -->

            <div class="item-right" @click="nextPage(1)">
              <img
                src="@/assets/imgs/activity/activity/index/page-right.png"
                alt=""
              />
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
import activityStart from "../use/activity/activityStart.js";

export default {
  name: "leftRank",

  setup() {
    const state = reactive({});
    onMounted(() => {
      initPage()
      getinvitUserRankList();
    });
 
  
    let { getinvitUserRankList, activityStartState, getPage, nextPage,initPage } =
      activityStart();

    return {
      ...toRefs(state),
      ...toRefs(activityStartState),
      getPage,
      nextPage,
    };
  },
};
</script>

<style lang="less" scoped>
.rank-main {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("../../../../assets/imgs/activity/activity/index/right-rank-bc.png");
  display: flex;
  justify-content: flex-end;
  .rank-wrap {
    width: 564px;
    height: 659px;
    // background-color: #6b6b6b;

    .rank-wrap-content {
      margin-left: 31px;
      margin-right: 22px;
      .rank-title {
        margin-top: 47px;
        font-size: 29px;
        font-family: WendyOne-Regular;
        font-weight: bold;
        color: #ffffff;
        text-shadow: 0px 4px 0px rgba(131, 71, 39, 0.45);
        display: flex;
        justify-content: center;
      }
      .rank-key-list {
        margin-top: 30px;
        display: flex;
        font-size: 22px;
        font-family: GothamRounded;
        font-weight: bold;
        color: #794126;
        .item-number {
          flex: 8;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .item-address {
          flex: 16;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .item-quantity {
          flex: 12;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .rank-list {
        // margin-top: 42px;
        margin: 42px 10px 0 10px;
        overflow-y: hidden;
        height: 398px;

        .item {
          display: flex;
          align-items: center;
          margin-bottom: 25px;
          .item-left {
            display: flex;
            align-items: center;
            flex: 7;
            .img {
              width: 33px;
              height: 28px;
              margin-right: 5px;
              img {
                width: 33px;
                height: 28px;
              }
            }

            .left-text {
              font-size: 22px;
              font-family: GothamRounded;
              font-weight: bold;
              color: #f0d4bc;
            }
          }
          .item-mid {
            flex: 11;

            .item-mid-text {
              display: flex;
              align-items: center;
              // justify-content: center;
              font-size: 22px;
              font-family: GothamRounded;
              font-weight: bold;
              color: #f0d4bc;
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
            flex: 6;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            font-family: GothamRounded;
            font-weight: bold;
            color: #f0d4bc;
          }
        }
        .item:last-child {
          margin-bottom: 0;
        }
      }
      .rank-list-noData {
        margin: 42px 10px 0 10px;
        overflow-y: hidden;
        height: 398px;
        font-size: 22px;
        font-family: GothamRounded;
        font-weight: bold;
        color: #d28d8c;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .rank-bottom {
        margin-top: 30px;
        .wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          .item-wrap {
            display: flex;
          }
          .item-left {
            width: 35px;
            height: 34px;
            background-repeat: no-repeat;
            background-size: cover;
            background-image: url("../../../../assets/imgs/activity/activity/index/page-bc.png");
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 10px;
            cursor: pointer;
            position: relative;
            img {
              position: absolute;
              top: 6px;
              left: 12px;
              width: 11px;
              height: 17px;
              transform: rotateY(180deg);
            }
          }
          .item {
            width: 35px;
            height: 34px;
            background-repeat: no-repeat;
            background-size: cover;
            background-image: url("../../../../assets/imgs/activity/activity/index/page-bc.png");

            margin-right: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            .text {
              // position: absolute;
              // top: 4px;
              // left: 10px;
              cursor: pointer;
              font-size: 22px;
              font-family: Arial;
              font-weight: bold;
              color: #935128;
            }
          }

          .item-selected {
            width: 35px;
            height: 34px;
            background-repeat: no-repeat;
            background-size: cover;
            background-image: url("../../../../assets/imgs/activity/activity/index/page-bc-selected.png");
            margin-right: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            .text {
              // position: absolute;
              // top: 4px;
              // left: 10px;
              cursor: pointer;
              font-size: 22px;
              font-family: Arial;
              font-weight: bold;
              color: #935128;
            }
          }
          .item-right {
            width: 35px;
            height: 34px;
            background-repeat: no-repeat;
            background-size: cover;
            background-image: url("../../../../assets/imgs/activity/activity/index/page-bc.png");
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            position: relative;
            img {
              position: absolute;
              top: 8px;
              left: 12px;
              width: 11px;
              height: 17px;
            }
          }
        }
      }
    }
  }
}
</style>