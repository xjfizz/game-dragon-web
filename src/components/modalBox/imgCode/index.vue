<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div
        class="modal-contain"
        v-loading="sendLoading"
        element-loading-text="Loading..."
        element-loading-spinner="el-icon-loading"
      >
        <div class="modal-content">
          <div class="title">Please Complete The Security Verification</div>
          <div class="mid">
            <div class="code-left">
              <div class="item-input">
                <el-input
                  v-model="bugImgForm.code"
                  placeholder="Please enter the code"
                  @keyup.enter="confirm"
                ></el-input>
              </div>
            </div>
            <div class="code-right" @click="getCode">
              <img :src="bugImgForm.img" alt="" />
            </div>
          </div>
          <div v-if="bugImgForm.code" class="bottom" @click="confirm">
            Confirm
          </div>
          <div v-else class="bottom no-data">Confirm</div>
        </div>
      </div>

      <div class="close" @click="closeImgCodeBox">
        <img src="@/assets/imgs/openBox/img-code/close.png" alt="" />
      </div>
    </div>
  </div>
</template>
 




<script>
import { reactive, toRefs, onMounted } from "vue";
import selectDragon from "@/views/pc/activity/use/dragon/selectDragon";


export default {
  name: "imgCode",
  props: {
    classHeader: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, context) {
    const imgCodeState = reactive({});
 

    let { state, confirm, getCode, closeImgCodeBox } = selectDragon();

    return {
      ...toRefs(imgCodeState),
      ...toRefs(state),
      confirm,
      getCode,
      closeImgCodeBox,
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
  height: 347px;
  background: #282523;
  border-radius: 8px;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.12);

  .modal-contain {
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    .modal-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .title {
        margin-top: 32px;
        font-size: 24px;
        font-family: GothamRounded-Medium, GothamRounded;
        color: #ffffff;
        text-align: center;
        font-family: GothamRounded-Blod, GothamRounded;
      }
      .mid {
        margin-top: 54px;
        display: flex;
        align-items: center;

        .code-left {
          display: flex;
          align-items: center;
          .item-input {
            height: 56px;
            width: 250px;
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
        .code-right {
          display: flex;
          align-items: center;
          cursor: pointer;
          img {
            width: 186px;
            height: 56px;
          }
        }
      }
      .bottom {
        margin-top: 70px;
        width: 148px;
        height: 50px;
        background: #ffc763;
        border-radius: 25px;
        font-size: 16px;
        font-family: Helvetica;
        color: #2e0b00;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: GothamRounded-Medium, GothamRounded;
        cursor: pointer;
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
    img {
      width: 32px;
      height: 32px;
    }
  }
}
</style>

