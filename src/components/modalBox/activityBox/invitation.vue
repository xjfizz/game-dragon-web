<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-contain">
        <div class="modal-content">
          <div class="right-wrap">
            <div class="modal-contain-title">
              <img
                src="@/assets/imgs/openBox/buyEggBox/invitation-title.png"
                alt=""
              />
            </div>
            <div class="top-no-link" v-if="!isLinkMetaMask">
              <div class="top">
                <img
                  @click="linkWallet(1)"
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
                    {{ invitLink }}
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
                <div class="title">Quantities of my invitations:</div>
                <div class="value">{{ recommendNumber }}</div>
              </div>
              <div class="myAddress">
                <div class="title">My Address:</div>
                <div class="address">
                  {{ wallet.address || "no data" }}
                </div>
              </div>
            </div>

            <div class="bottom">
              <div class="bottom-title">Bonus for invitation</div>
              <div class="bottom-content">
                <div class="item">1. Prize pool: 100 (eggs)</div>
                <div class="item">2. Available time: from 10/09/2021(UTC+4) to the end of all rounds' rush</div>
                <div class="item">
                  3.Release time: After the pre-sale period has come to end
                </div>
                  <div class="item">
                  4.Airdrop rules:A Genesis Dragon Egg and token(DMS) rewards are only available to the top 100
                </div>
                <div class="item">
                  * The invitation is only valid if the invitee has signed the wallet or registered the email address
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="close" @click="closeBox">
        <img src="@/assets/imgs/openBox/buyEggBox/close.png" alt="" />
      </div>
    </div>
  </div>
</template>
 




<script>
import { reactive, toRefs, onMounted } from "vue";
import activityStart from "@/views/pc/activity/use/activity/activityStart.js";

export default {
  name: "buyEggBox",
  props: {
    classHeader: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, context) {
    const state = reactive({});
    onMounted(() => {
      getMyRecommend()
    });

    const closeBox = () => {
      context.emit("closeBox");
    };
    const confirm = () => {
      context.emit("closeBox");
    };

    let {
      getinvitUserRankList,
      activityStartState,
      linkWallet,
      copyLink,
      isLinkMetaMask,
      getMyRecommend,
    } = activityStart();

    return {
      ...toRefs(state),
      ...toRefs(activityStartState),
      isLinkMetaMask,
      linkWallet,
      copyLink,
      closeBox,
      confirm,
    };
  },
};
</script>

<style scoped lang="less">
.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999999;
}
.modal {
  // width: 1030px;
  // height: 689px;
   width: 1032px;
  height: 740px;
  // background: #140500;
  border-radius: 16px;
  position: relative;

  .modal-contain {
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("../../../assets/imgs/openBox/buyEggBox/card-bc2.png");
    .modal-content {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      position: relative;
      width: 1030px;
      height: 689px;
      position: relative;
      .right-wrap {
        width: 70%;
        .modal-contain-title {
          text-align: center;
          z-index: 99;
          margin-top: 30px;
          img {
            width: 469px;
            height: 48px;
          }
        }
        .top-no-link {
          height: 250px;
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
          height: 280px;
          .top {
            .top-title {
              font-size: 24px;
              font-family: GothamRounded;
              font-weight: bold;
              color: #794126;
            }
            .top-content {
              width: 764px;
              height: 108px;
              background-repeat: no-repeat;
              background-size: cover;
              background-image: url("../../../assets/imgs/openBox/buyEggBox/invitation-link-bc.png");
              .top-content-wrap {
                padding: 20px;
                font-size: 20px;
                font-family: GothamRounded;
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
            //   margin-right: 95px;
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
              width: 610px;
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

  .close {
    cursor: pointer;
    position: absolute;
    right: -20px;
    top: 10px;
    img {
      width: 77px;
      height: 77px;
    }
  }
}
</style>