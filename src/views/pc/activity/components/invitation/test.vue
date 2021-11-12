<template>
  <div class="invit-main">
    <div class="left">
      <div class="left-wrap">
        <div v-if="invitUserRankList.length > 0" class="left-main">
          <div class="content">
            <div class="list">
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
            <div class="page-wrap"></div>
          </div>
          <div class="content-bottom">
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
                  v-for="(item, index) in 5"
                  :key="index"
                  :class="
                    item + (page.pageBtnsWrap - 1) * 5 == page.currentPage
                      ? 'item-selected'
                      : ''
                  "
                  @click="getPage(item + (page.pageBtnsWrap - 1) * 5)"
                >
                  <div class="text">
                    {{ item + (page.pageBtnsWrap - 1) * 5 }}
                  </div>
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

        <div v-else class="noData">No data at the momentarily</div>
      </div>
    </div>
    <div class="right">
      <div class="right-wrap">
        <div class="top-no-link" v-if="!isLinkMetaMask">
          <div class="top">
            <img
              @click="linkWallet"
              src="@/assets/imgs/activity/activityStart/walletConnect.png"
              alt=""
            />
          </div>
          <div class="mid">Take the time and get the value reward!</div>
        </div>
        <div class="top-link" v-else>
          <div class="top">
            <div class="top-title">Your invitation link:</div>
            <div class="top-content">
              <div class="top-content-wrap">
                {{ invitLink || "noData" }}
              </div>
            </div>
          </div>
          <div class="bottom">
            <div class="bottom-img" @click="copyLink(invitLink, $event)">
              <img
                src="@/assets/imgs/activity/activityStart/copy-link.png"
                alt=""
              />
            </div>
            <!-- <div class="bottom-img">
              <img
                src="@/assets/imgs/activity/activityStart/downLoad-poster.png"
                alt=""
              />
            </div> -->
          </div>
          <div class="myInvitation">
            <div class="title">Quantities of my invitations</div>
            <div class="value">{{ recommendNumber }}</div>
          </div>
          <div class="myAddress">
            <div class="title">My Address:</div>
            <div class="address">{{ wallet.address || "no data" }}</div>
          </div>
        </div>

        <div class="bottom">
          <div class="bottom-title">invitation's reward</div>
          <div class="bottom-content">
            <div class="item">1. Prize pool: 100 (eggs)</div>
            <div class="item">
              2. Start time: 10.09.2021 (00:00:00 UTC+4)
            </div>
            <div class="item">3. Release time: After the pre-sale period has come to end</div>
            <div class="item">
              4. Airdrop rules:A Genesis Dragon Egg and token(DMS) awards are only available to the top 100
            </div>
            <div class="item">
              * That invitation is available if the person you invite signs the wallet and register the email
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
import activityStart from "../../use/activity/activityStart.js";
import { setSession, getSession, getStorage, getToken } from "@/utils/auth.js";
export default {
  name: "invitFirst",
  components: {},
  setup() {
    const state = reactive({});
    const router = useRouter();
    onMounted(() => {
     init();
     getinvitUserRankList();
      if (!getToken()) {
        // return router.push({ path: "/login" });
        return;
      } else {
        linkWallet()
      }

      // getInvitLink();
    });

    let {
      getinvitUserRankList,
      activityStartState,
      linkWallet,
      copyLink,
      isLinkMetaMask,
      getInvitLink,
      init,
      getPage,
      nextPage,
    } = activityStart();

    return {
      ...toRefs(state),
      ...toRefs(activityStartState),
      isLinkMetaMask,
      linkWallet,
      copyLink,
      getPage,
      nextPage,
    };
  },
};
</script>

<style lang="less" scoped>
.invit-main {
  margin-top: 56px;
  width: 1293px;
  // height: 672px;
  height: 757px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("../../../../../assets/imgs/activity/activityStart/invit-crad-bc2.png");
  display: flex;
  .left {
    width: 605px;
    // height: 670px;
    height: 650px;
    position: relative;
    .left-wrap {
      width: 522px;
      // height: 550px;
      height: 650px;
      position: absolute;
      left: 60px;
      top: 180px;
      // background-color: #ff5400;
      //   opacity: 0.1;
      .content {
        width: 522px;
        // height: 441px;
        height: 520px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-image: url("../../../../../assets/imgs/activity/activityStart/invit-list-bc-red.png");
        overflow: hidden;
        .list {
          margin: 20px 20px 20px 20px;
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
      }
      .content-bottom {
        margin-top: 5px;
        .wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          .item-left {
            width: 35px;
            height: 34px;
            background-repeat: no-repeat;
            background-size: cover;
            background-image: url("../../../../../assets/imgs/activity/activity/index/page-bc.png");
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
          .item-wrap {
            display: flex;
          }
          .item {
            width: 35px;
            height: 34px;
            background-repeat: no-repeat;
            background-size: cover;
            background-image: url("../../../../../assets/imgs/activity/activity/index/page-bc.png");
            margin-right: 10px;
            // position: relative;
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
            background-image: url("../../../../../assets/imgs/activity/activity/index/page-bc-selected.png");
            margin-right: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            .text {
              // position: absolute;
              // top: 4px;
              // left: 10px;
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
            background-image: url("../../../../../assets/imgs/activity/activity/index/page-bc.png");
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
      .noData {
        margin-top: 230px;
        font-size: 22px;
        font-family: GothamRounded;
        font-weight: bold;
        color: #d28d8c;
        display: flex;
        justify-content: center;
      }
    }
  }
  .right {
    width: 672px;
    height: 670px;
    position: relative;
    .right-wrap {
      width: 594px;
      height: 500px;
      position: absolute;
      left: 50px;
      top: 60px;
      .top-no-link {
        // height: 250px;
        margin-bottom: 60px;
        .top {
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          img {
            width: 461px;
            height: 125px;
          }
        }
        .mid {
          margin-top: 26px;
          display: flex;
          justify-content: center;
          font-size: 20px;
          font-family: GothamRounded;
          font-weight: bold;
          color: #794126;
          line-height: 30px;
        }
      }
      .top-link {
        height: 300px;
        .top {
          .top-title {
            font-size: 24px;
            font-family: Gotham;
            font-weight: bold;
            color: #794126;
          }
          .top-content {
            width: 594px;
            height: 118px;
            background-repeat: no-repeat;
            background-size: cover;
            background-image: url("../../../../../assets/imgs/activity/activityStart/invit-link-bc.png");
            .top-content-wrap {
              padding: 20px;
              font-size: 20px;
              font-family: Gotham;
              font-weight: bold;
              color: #ffffff;
              word-wrap: break-word; // 只对英文起作用，以单词作为换行依据。
            }
          }
        }
        .bottom {
          margin-top: 6px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          .bottom-img {
            cursor: pointer;
            img {
              width: 208px;
              height: 64px;
            }
          }
          // .bottom-img:first-child {
          //   margin-right: 47px;
          // }
        }
        .myInvitation {
          display: flex;
          align-items: center;
          margin-top: 10px;
          .title {
            font-size: 22px;
            font-family: GothamRounded;
            font-weight: bold;
            color: #794126;
            line-height: 28px;
            margin-right: 10px;
          }
          .value {
            font-size: 22px;
            font-family: GothamRounded;
            font-weight: bold;
            color: #794126;
            line-height: 28px;
          }
        }
        .myAddress {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          margin-top: 10px;
          width: 100%;
          .title {
            font-size: 22px;
            font-family: GothamRounded;
            font-weight: bold;
            color: #794126;
            line-height: 28px;
            margin-right: 10px;
            width: 150px;
          }
          .address {
            width: 400px;
            font-size: 22px;
            font-family: GothamRounded;
            font-weight: bold;
            color: #794126;
            line-height: 28px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            /*! autoprefixer: off */
            -webkit-box-orient: vertical;
            /* autoprefixer: on */
            -webkit-line-clamp: 2;
            word-break: break-all; /*追加这一行代码*/
          }
        }
      }

      .bottom {
        margin-top: 40px;
        .bottom-title {
          font-size: 24px;
          font-family: GothamRounded;
          font-weight: bold;
          color: #794126;
          line-height: 22px;
        }
        .bottom-content {
          width: 90%;
          margin-top: 20px;
          .item {
            font-size: 18px;
            font-family: GothamRounded;
            font-weight: bold;
            color: #794126;
            line-height: 22px;
            margin-bottom: 15px;
          }
        }
      }
    }
  }
}
</style>