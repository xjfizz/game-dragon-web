<template>
  <div
    class="modal-backdrop"
    
  >
    <div class="modal">
      <div
        class="modal-contain"
        v-loading="buyLoading"
        element-loading-text="redemption loading..."
        element-loading-spinner="el-icon-loading"
      >
        <div class="modal-content">
          <!-- <div class="title">Gift your Dragon</div> -->
          <div class="title-des">Please enter the correct redemption code</div>
          <div class="send-address">
            <div class="item-input">
              <el-input
                v-model="dragonExchangeForm.code"
                placeholder="Please enter the correct redemption code"
                @keyup.enter="confirm"
              ></el-input>
            </div>
          </div>
          <div class="send-tips">Please note that you must use the wallet address where you purchased the voucher in order to successfully redeem the dragon eggs</div>
          <div class="send-btns">
            <div class="cancel-btn" @click="closeBox">Cancel</div>
            <div
              v-if="dragonExchangeForm.code"
              class="submit-btn"
              @click="confirm"
            >
              Confirm
            </div>
            <div v-if="!dragonExchangeForm.code" class="submit-btn-no-data">
              Confirm
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 




<script>
import { reactive, toRefs, onMounted } from "vue";
import selectDragon from "@/views/pc/activity/use/dragon/selectDragon";
import myDragon from "@/views/pc/myMainland/use/myDragon";
export default {
  name: "exchangeDragon",
  props: {
    classHeader: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, context) {
    const state = reactive({});
    onMounted(() => {
      myDragonState.dragonExchangeForm.code = "";
    });
    const { myDragonState, closeBox, confirm } = myDragon();
    // const closeBox = () => {
    //   // context.emit("closeBox");
    // };
    // const confirm = () => {
    //   context.emit("closeBox");
    // };

    return {
      ...toRefs(state),
      ...toRefs(myDragonState),
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
  background-color: rgba(20, 19, 19, 0.86);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999999;
}
.modal {
  width: 588px;
  //   height: 488px;
  height: 400px;
  background: #282523;
  border-radius: 8px;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.12);

  .modal-contain {
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    .modal-content {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      position: relative;
      .title {
        margin-top: 32px;
        font-size: 24px;
        font-family: GothamRounded-Medium, GothamRounded;
        font-weight: 500;
        color: #ffffff;
      }
      .title-des {
        width: 498px;
        height: 42px;
        font-size: 20px;
        font-family: GothamRounded-Book, GothamRounded;
        font-weight: normal;
        color: #ffffff;
        line-height: 21px;
        display: flex;
        justify-content: center;
        margin-top: 50px;
      }
      .send-address {
        margin-top: 10px;
        .item-input {
          margin-top: 16px;
          height: 48px;
          width: 486px;
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
          img {
            width: 36px;
            height: 36px;
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
      .send-tips {
        font-size: 12px;
        font-family: GothamRounded-Book, GothamRounded;
        font-weight: normal;
        color: #67c23a;
        line-height: 21px;
        margin-top: 50px;
        width: 498px;
        text-align: center;
      }
      .send-btns {
        display: flex;
        align-items: center;
        margin-top: 50px;
        .cancel-btn {
          width: 148px;
          height: 50px;
          border-radius: 25px;
          border: 1px solid rgba(255, 255, 255, 0.28);
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 16px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          color: #ffffff;
          cursor: pointer;
        }
        .cancel-btn:hover {
          opacity: 0.66;
        }
        .submit-btn {
          margin-left: 80px;
          width: 148px;
          height: 50px;
          background: #ffc763;
          border-radius: 25px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 16px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          color: #2e0b00;
          cursor: pointer;
        }
        .submit-btn:hover {
          opacity: 0.66;
        }
        .submit-btn-no-data {
          margin-left: 80px;
          width: 148px;
          height: 50px;
          background: #ffc763;
          border-radius: 25px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 16px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          color: #2e0b00;
          cursor: pointer;
          opacity: 0.5;
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

