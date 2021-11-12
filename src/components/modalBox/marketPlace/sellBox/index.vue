<template>
  <div class="modal-backdrop">
    <div
      class="modal"
      v-loading="loadingForm.loadingShow"
      :element-loading-text="loadingForm.loadingShowText"
      element-loading-spinner="el-icon-loading"
    >
      <div class="modal-contain">
        <div class="modal-content">
          <div class="title">Sell Dragon</div>
          <div class="title-des">
            Select your sell method for Dragon #123568
          </div>
          <div class="sell-btns">
            <div
              class="btn1 btnHover"
              :class="sellForm.type == 1 ? 'btn-selected' : ''"
              @click="selectMethod(1)"
            >
              <div class="btn-text">Fixed Price</div>
              <div class="btn-img" v-if="sellForm.type == 1">
                <img
                  src="@/assets/imgs/openBox/marketPlace/selected.png"
                  alt=""
                />
              </div>
            </div>
            <div
              class="btn2 btnHover"
              :class="sellForm.type == 2 ? 'btn-selected' : ''"
              @click="selectMethod(2)"
            >
              <div class="btn-text">Auction</div>
              <div class="btn-img" v-if="sellForm.type == 2">
                <img
                  src="@/assets/imgs/openBox/marketPlace/selected.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="sell-way">
            <div class="way1" v-if="sellForm.type == 1">
              <div class="way-des">
                Your asset will be listed on the Marketplace with a fixed price.
                In order to get it back, you’ll have to cancel the sale.
              </div>
              <div class="way-item">
                <div class="item-title">Price</div>
                <div class="item-input-wrap">
                  <div class="input-img">
                    <img
                      src="@/assets/imgs/openBox/marketPlace/bnb.png"
                      alt=""
                    />
                  </div>
                  <div class="item-input">
                    <el-input
                      v-model="sellForm.price"
                      placeholder="Amount"
                      @keyup.enter="confirm"
                    ></el-input>
                  </div>
                </div>
              </div>
            </div>
            <div class="way2" v-if="sellForm.type == 2">
              <div class="way-des">
                Your asset will be listed on the Marketplace withauction, In
                order to get it back, you’ll have to cancel the sale.sale.
              </div>
              <div class="way-item">
                <div class="item-title">Start Price</div>
                <div class="item-input-wrap">
                  <div class="input-img">
                    <img
                      src="@/assets/imgs/openBox/marketPlace/bnb.png"
                      alt=""
                    />
                  </div>
                  <div class="item-input">
                    <el-input
                      v-model="sellForm.startPrice"
                      placeholder="Start Price"
                      @keyup.enter="confirm"
                    ></el-input>
                  </div>
                </div>
              </div>

              <div class="way-item">
                <div class="item-title">End Price</div>
                <div class="item-input-wrap">
                  <div class="input-img">
                    <img
                      src="@/assets/imgs/openBox/marketPlace/bnb.png"
                      alt=""
                    />
                  </div>
                  <div class="item-input">
                    <el-input
                      v-model="sellForm.endPrice"
                      placeholder="End Price"
                      @keyup.enter="confirm"
                    ></el-input>
                  </div>
                </div>
              </div>

              <div class="way-item">
                <div class="item-title">Duration</div>
                <div class="item-input-wrap">
                  <div class="input-img">Days</div>
                  <div class="item-input">
                    <el-input
                      v-model="sellForm.days"
                      placeholder="Days"
                      @keyup.enter="confirm"
                    ></el-input>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bottom">
            <div class="cancel-btn" @click="cancelSell">Cancel</div>
            <div v-if="(sellForm.type == 1 && sellForm.price) || (sellForm.type == 2 && (sellForm.startPrice && sellForm.endPrice && sellForm.days))" class="confirm-btn" @click="confirmSell">Confirm</div>
            <div v-if="(sellForm.type == 1 && !sellForm.price) || (sellForm.type == 2 && (!sellForm.startPrice || !sellForm.endPrice || !sellForm.days))"  class="confirm-btn no-data">Confirm</div>
          </div>
        </div>
      </div>

      <div class="close" @click="cancelSell">
        <img src="@/assets/imgs/openBox/img-code/close.png" alt="" />
      </div>
    </div>
  </div>
</template>
 




<script>
import { reactive, toRefs, onMounted } from "vue";
import myDragonDetail from "@/views/pc/myMainland/use/myDragonDetail.js";

export default {
  name: "verificationImgCode",
  props: {
    classHeader: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, context) {
    const state = reactive({});
    const { myDragonDetailState, selectMethod, cancelSell, confirmSell } =
      myDragonDetail();
    return {
      ...toRefs(state),
      ...toRefs(myDragonDetailState),
      selectMethod,
      cancelSell,
      confirmSell,
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
  background-color: rgba(20, 19, 19, 0.86);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999999;
}
.modal {
  width: 588px;
  // height: 660px;
  height: 600px;
  background: #282523;
  border-radius: 8px;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.12);

  .modal-contain {
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 32px 50px;
    .modal-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      .title {
        font-size: 24px;
        font-family: GothamRounded-Medium, GothamRounded;
        font-weight: 500;
        color: #ffffff;
      }
      .title-des {
        width: 100%;
        margin-top: 40px;
        font-size: 14px;
        font-family: GothamRounded-Book, GothamRounded;
        font-weight: normal;
        color: #ffffff;
      }
      .sell-btns {
        width: 100%;
        margin-top: 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .btn1 {
          width: 232px;
          height: 63px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.28);
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          .btn-text {
            font-size: 16px;
            font-family: GothamRounded-Medium, GothamRounded;
            font-weight: 500;
            color: #ffffff;
          }
          .btn-img {
            margin-left: 27px;
            img {
              width: 20px;
              height: 20px;
            }
          }
        }

        .btn2 {
          width: 232px;
          height: 63px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.28);
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          .btn-text {
            font-size: 16px;
            font-family: GothamRounded-Medium, GothamRounded;
            font-weight: 500;
            color: #ffffff;
          }
          .btn-img {
            margin-left: 27px;
            img {
              width: 20px;
              height: 20px;
            }
          }
        }
        .btnHover:hover {
          opacity: 0.68;
        }
        .btn-selected {
          border: 1px solid #ffc763;
        }
      }
      .sell-way {
        margin-top: 16px;
        height: 240px;
        .way1 {
          .way-des {
            width: 490px;
            height: 42px;
            font-size: 14px;
            font-family: GothamRounded-Book, GothamRounded;
            font-weight: normal;
            color: #ffffff;
            line-height: 21px;
            opacity: 0.48;
            margin-bottom: 24px;
          }
          .way-item {
            display: flex;
            align-items: center;
            justify-content: space-between;

            margin-bottom: 10px;
            .item-title {
              font-size: 16px;
              font-family: GothamRounded-Book, GothamRounded;
              font-weight: normal;
              color: #ffffff;
            }
            .item-input-wrap {
              display: flex;
              align-items: center;
              .input-img {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 44px;
                height: 44px;
                margin-right: 8px;
                img {
                  width: 44px;
                  height: 44px;
                }
              }
              .item-input {
                height: 48x;
                width: 138px;
                border-radius: 8px;
                border: 1px solid rgba(255, 255, 255, 0.12);
                padding: 0 10px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                background: #1a1716;
                .item-input {
                  width: 90%;
                }

                /deep/ input::-webkit-input-placeholder {
                  opacity: 0.47;
                  color: #ffffff;
                  font-size: 14px;
                }
                /deep/ input::-moz-input-placeholder {
                  opacity: 0.47;
                  color: #ffffff;
                  font-size: 14px;
                }
                /deep/ input::-ms-input-placeholder {
                  opacity: 0.47;
                  color: #ffffff;
                  font-size: 14px;
                }
                /deep/ .el-input__inner {
                  // width: 271px;
                  background: transparent;
                  border: none;
                  border-radius: 48px;
                  font-size: 14px;
                  opacity: 0.68;
                  color: #ffffff;
                }
              }
            }
          }
        }

        .way2 {
          .way-des {
            width: 490px;
            height: 42px;
            font-size: 14px;
            font-family: GothamRounded-Book, GothamRounded;
            font-weight: normal;
            color: #ffffff;
            line-height: 21px;
            opacity: 0.48;
            margin-bottom: 24px;
          }
          .way-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
            .item-title {
              font-size: 16px;
              font-family: GothamRounded-Book, GothamRounded;
              font-weight: normal;
              color: #ffffff;
            }
            .item-input-wrap {
              display: flex;
              align-items: center;
              .input-img {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 44px;
                height: 44px;

                font-size: 16px;
                font-family: GothamRounded-Book, GothamRounded;
                font-weight: normal;
                color: #ffffff;
                margin-right: 8px;
                img {
                  width: 44px;
                  height: 44px;
                }
              }
              .item-input {
                height: 48x;
                width: 138px;
                border-radius: 8px;
                border: 1px solid rgba(255, 255, 255, 0.12);
                padding: 0 10px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                background: #1a1716;
                .item-input {
                  width: 90%;
                }

                /deep/ input::-webkit-input-placeholder {
                  opacity: 0.47;
                  color: #ffffff;
                  font-size: 14px;
                }
                /deep/ input::-moz-input-placeholder {
                  opacity: 0.47;
                  color: #ffffff;
                  font-size: 14px;
                }
                /deep/ input::-ms-input-placeholder {
                  opacity: 0.47;
                  color: #ffffff;
                  font-size: 14px;
                }
                /deep/ .el-input__inner {
                  // width: 271px;
                  background: transparent;
                  border: none;
                  border-radius: 48px;
                  font-size: 14px;
                  opacity: 0.68;
                  color: #ffffff;
                }
              }
            }
          }
        }
      }
      .title {
      }
      .title {
      }

      .bottom {
        margin-top: 40px;
        display: flex;
        justify-content: center;
        align-items: center;

        .cancel-btn {
          width: 148px;
          height: 50px;
          border-radius: 25px;
          border: 1px solid rgba(255, 255, 255, 0.28);
          font-size: 16px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          color: #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
        .confirm-btn {
          margin-left: 16px;
          width: 148px;
          height: 50px;
          background: #ffc763;
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
      }
      .no-data {
        opacity: 0.55;
      }
    }
  }

  .close {
    cursor: pointer;
    position: absolute;
    right: -17px;
    top: -17px;
    z-index: 10000;
    img {
      width: 32px;
      height: 32px;
    }
  }
}
</style>

