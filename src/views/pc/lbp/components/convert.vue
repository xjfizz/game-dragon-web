<template>
  <div class="convert-title-main">
    <div class="convert-wrap">
      <div class="title">Convert</div>
      <div class="content">
        <div v-if="loacalGetItem == 2" id="dmsItem" class="content-item">
          <div class="item-top">
            <div class="top-left">You pay</div>
            <div class="top-right">
              Balance: {{ convertStateForm.dms.balance }}
            </div>
          </div>
          <div class="item-bottom">
            <div class="item-input">
              <div class="input-img">
                <img src="@/assets/imgs/lbp/DMS.png" alt="" />
                <div class="text">DMS</div>
              </div>
              <el-input
                v-model="convertStateForm.dms.inputValue"
                placeholder="Enter an amount"
                @keyup.enter="confirm"
              ></el-input>
            </div>
          </div>
          <div
            v-if="
              convertStateForm.dms.inputValue > convertStateForm.dms.balance
            "
            class="item-des"
          >
            *Not enough
          </div>
        </div>

        <div v-else id="usdtItem" class="content-item">
          <div class="item-top">
            <div class="top-left">You pay</div>
            <div class="top-right">
              Balance: {{ convertStateForm.usdt.balance }}
            </div>
          </div>
          <div class="item-bottom">
            <div class="item-input">
              <div class="input-img">
                <img src="@/assets/imgs/lbp/USDT.png" alt="" />
                <div class="text">USDT</div>
              </div>
              <el-input
                v-model="convertStateForm.usdt.inputValue"
                placeholder="Enter an amount"
                @keyup.enter="confirm"
              ></el-input>
            </div>
          </div>
          <div
            v-if="
              convertStateForm.usdt.inputValue > convertStateForm.usdt.balance
            "
            class="item-des"
          >
            *Not enough
          </div>
        </div>

        <div class="content-mid">
          <img @click="swapItem" src="@/assets/imgs/lbp/change.png" alt="" />
        </div>

        <div v-if="loacalGetItem == 2" id="usdtItem" class="content-item">
          <div class="item-top">
            <div class="top-left">You receive</div>
            <div class="top-right">
              Balance: {{ convertStateForm.usdt.balance }}
            </div>
          </div>
          <div class="item-bottom">
            <div class="item-input">
              <div class="input-img">
                <img src="@/assets/imgs/lbp/USDT.png" alt="" />
                <div class="text">USDT</div>
              </div>
              <el-input
                v-model="convertStateForm.usdt.inputValue"
                placeholder="Enter an amount"
                @keyup.enter="confirm"
              ></el-input>
            </div>
          </div>
          <div
            v-if="
              convertStateForm.usdt.inputValue > convertStateForm.usdt.balance
            "
            class="item-des"
          >
            *Not enough
          </div>
        </div>

        <div v-else id="dmsItem" class="content-item">
          <div class="item-top">
            <div class="top-left">You receive</div>
            <div class="top-right">
              Balance: {{ convertStateForm.dms.balance }}
            </div>
          </div>
          <div class="item-bottom">
            <div class="item-input">
              <div class="input-img">
                <img src="@/assets/imgs/lbp/DMS.png" alt="" />
                <div class="text">DMS</div>
              </div>
              <el-input
                v-model="convertStateForm.dms.inputValue"
                placeholder="Enter an amount"
                @keyup.enter="confirm"
              ></el-input>
            </div>
          </div>
          <div
            v-if="
              convertStateForm.dms.inputValue > convertStateForm.dms.balance
            "
            class="item-des"
          >
            *Not enough
          </div>
        </div>

        <div class="content-bottom">
          <div class="title">Slippage Tolerance</div>
          <div class="bottom-list">
            <div
              class="list-item"
              :class="item.id == localSelectedPrice.id ? 'item-selected' : ''"
              v-for="(item, index) in list"
              :key="index"
              @click="selectPrice(item)"
            >
              {{ item.value }}
            </div>
            <div
              class="list-item list-item-input"
              :class="4 == localSelectedPrice.id ? 'item-selected' : ''"
            >
              <div class="item-input">
                <el-input
                  @blur="blurDefineIput"
                 @keyup.enter="blurDefineEnter"
                  v-model="definePrice.value"
                ></el-input>
                <div class="item-unit">%</div>
              </div>
            </div>
          </div>
          <div class="bottom-btn">
            <div class="btn-wrap" @click="convert">Convert</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from "vue";
import { useRouter } from "vue-router";

import common from "@/utils/common";
import convertStateHandle from "../use/convert";

export default {
  name: "topTtitle",
  components: {},
  setup() {
    const router = useRouter();
    const state = reactive({});
    const {
      convertState,
      swapItem,
      selectPrice,
      confirm,
      init,
      blurDefineIput,
      convert,
      blurDefineEnter,
    } = convertStateHandle();
    onMounted(() => {
      common.goTopScroll();
      init();
    });

    return {
      ...toRefs(state),
      ...toRefs(convertState),
      swapItem,
      selectPrice,
      confirm,
      blurDefineIput,
      convert,
      blurDefineEnter,
    };
  },
};
</script>

<style lang="less" scoped >
.convert-title-main {
  // width: 384px;
  margin-top: 72px;
  min-height: 700px;
  background: #282523;
  box-shadow: 0px 16px 36px 0px rgba(0, 0, 0, 0.48);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  .convert-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 24px;
    .title {
      font-size: 24px;
      font-family: GothamRounded-Medium, GothamRounded;
      font-weight: 500;
      color: #ffffff;
    }
    .content {
      margin-top: 64px;
      .content-item {
        height: 110px;
        .item-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .top-left {
            font-size: 17px;
            font-family: GothamRounded-Medium, GothamRounded;
            font-weight: 500;
            color: #ffffff;
          }
          .top-right {
            font-size: 13px;
            font-family: GothamRounded-Medium, GothamRounded;
            font-weight: 500;
            color: #ffffff;
          }
        }
        .item-bottom {
          margin-top: 11px;
          .item-input {
            margin-top: 16px;
            width: 300px;
            height: 54px;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.12);
            padding: 0 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: #1a1716;
            .item-input {
              width: 80%;
            }
            .input-img {
              display: flex;
              align-items: center;
              img {
                width: 24px;
                height: 24px;
              }
              .text {
                margin-left: 4px;
                font-size: 15px;
                font-family: GothamRounded-Medium, GothamRounded;
                font-weight: 500;
                color: #ffffff;
              }
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
        .item-des {
          margin-top: 10px;
          font-size: 13px;
          font-family: GothamRounded-Book, GothamRounded;
          font-weight: normal;
          color: #ff5151;
        }
      }
      .content-mid {
        margin-top: 26px;
        margin-bottom: 26px;
        display: flex;
        justify-content: center;
        img {
          cursor: pointer;
          width: 40px;
          height: 40px;
        }
      }
      .content-bottom {
        margin-top: 43px;
        .title {
          font-size: 14px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          color: #ffffff;
        }
        .bottom-list {
          display: flex;
          justify-content: space-between;
          margin-top: 11px;
          .list-item {
            width: 72px;
            height: 40px;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.12);
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
            font-family: GothamRounded-Medium, GothamRounded;
            font-weight: 500;
            color: #ffffff;
            cursor: pointer;

            .item-input {
              height: 38px;
              border-radius: 8px;
              border: 1px solid rgba(255, 255, 255, 0.12);
              padding: 0 0px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              background: #1a1716;
               width: 75px;

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
                 padding: 0 0 0 4px;
              }
            }
            .item-unit {
            }
          }
          .item-selected {
            // background: rgba(245, 158, 100, 0.18);
            border: 1px solid #f59e64;
          }
          .list-item-input{
               width: 75px;
          }
        }

        .bottom-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 40px;
          .btn-wrap {
            width: 268px;
            height: 48px;
            background: #ffc763;
            border-radius: 24px;
            font-size: 16px;
            font-family: GothamRounded-Medium, GothamRounded;
            font-weight: 500;
            color: #2e0b00;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
          }
          .btn-wrap:hover{
            opacity: 0.68;
          }
        }
      }
    }
  }
}
</style>

