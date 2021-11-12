<template>
  <div class="verificat-form">
    <div class="verificat-form-content">
      <div class="title">Activate account</div>
      <div class="des">
        You have registered successfully, please enter
        <div class="email">{{formEmail.email}}</div>
        to receive Captcha
      </div>
      <div class="input-code">
        <div class="item-input">
          <el-input
            maxlength="6"
            v-model="formEmail.code"
            placeholder="Please enter 6 digits Captcha"
          ></el-input>
        </div>
      </div>
      <div v-if="formEmail.code" class="submit-btn" @click="validEmail">
        Activate
      </div>
      <div v-else class="submit-btn no-data">Activate</div>
    </div>
  </div>
</template>
 




<script>
import { reactive, onMounted, toRefs, inject, getCurrentInstance } from "vue";
import { useRouter, useRoute } from "vue-router";
import { initWallet, getSiner } from "@/utils/metaMask/ethers.js";
import { setSession, setToken, getCookie } from "@/utils/auth.js";

import loginHandle from "../use/login.js";
import { useI18n } from "vue-i18n"; //要在js中使用国际化


export default {
  name: "playGame",
  props: {
    classHeader: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, context) {
    const $message = inject("$message");
    const { t } = useI18n();

    const { state } = loginHandle();
    
    const validEmail = () => {
      console.log('formEmail', state.formEmail)
      context.emit("validEmailCode");
    };

    return {
      ...toRefs(state),
      validEmail,
    };
  },
};
</script>

<style scoped lang="less">
.verificat-form {
  width: 420px;
  height: 420px;
  background: #1a1716;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  .verificat-form-content {
    margin: 38px 30px;
    .title {
      font-size: 20px;
      font-family: GothamRounded-Medium, GothamRounded;
      font-weight: 500;
      color: #ffffff;
      line-height: 24px;
    }
    .des {
      margin-top: 13px;
      font-size: 14px;
      font-family: GothamRounded-Book, GothamRounded;
      font-weight: normal;
      color: #ffffff;
      line-height: 20px;
      opacity: 0.68;

      .email {
        display: inline-block;

      }
    }
    .input-code {
      border-bottom: 1px solid rgba(242, 242, 242, 0.18);
      margin-top: 80px;
      /deep/ input {
        caret-color: rgba(242, 242, 242, 0.58); // 设置光标的颜色
      }
      /deep/ input::-webkit-input-placeholder {
        opacity: 0.28;
        font-size: 14px;
        font-family: GothamRounded-Book, GothamRounded;
        font-weight: normal;
        color: #cbcbd4;
      }
      /deep/ input::-moz-input-placeholder {
        opacity: 0.28;
        font-size: 14px;
        font-family: GothamRounded-Book, GothamRounded;
        font-weight: normal;
        color: #cbcbd4;
      }
      /deep/ input::-ms-input-placeholder {
        opacity: 0.28;
        font-size: 14px;
        font-family: GothamRounded-Book, GothamRounded;
        font-weight: normal;
        color: #cbcbd4;
      }
      /deep/ .el-input__inner {
        // width: 271px;
        height: 28px;
        background: #1a1716;
        border-radius: 24px;
        border: none;
        padding: 0;
        opacity: 1;
        font-size: 14px;
        font-family: GothamRounded-Book, GothamRounded;
        font-weight: normal;
        color: #cbcbd4;
      }
    }
    .submit-btn {
      margin-top: 85px;
      width: 234px;
      height: 48px;
      background: #ffc763;
      border-radius: 24px;
      font-size: 16px;
      font-family: GothamRounded-Bold, GothamRounded;
      font-weight: bold;
      color: #2e0b00;
      line-height: 19px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .no-data {
      opacity: 0.55;
    }
  }
}
</style>