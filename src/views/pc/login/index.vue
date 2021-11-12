

<template>
<div class="main">
  <imgCode v-if="loginCodeShow"></imgCode> 
    <div class="main-head">
      <Header :headIndex="2" @headHandle="headHandle"></Header>
    </div>
    <div class="login-wrap">
      <div class="login-form" v-show="loginBoxState == 0">
        <!-- <div class="login-item1" @click="loginByBinance('en')">
          <img src="@/assets/imgs/login/binance.png" />
          <div class="login-text">Login with Binance</div>
        </div> -->
        <!-- !loginNonce -->
        <div v-if="!loginNonce" class="login-item2" @click="loginByMetaMaskGo">
          <img src="@/assets/imgs/login/metamask.png" />
          <div class="login-text">Login with MetaMask</div>
        </div>
        <div v-else class="login-item2 login-item2Clicked">
          <img src="@/assets/imgs/login/metamask2.png" />
          <div class="login-text">Login with MetaMask</div>
        </div>
        <div class="login-item3" v-if="loginType != 3" @click="loginByEmail">
          <img src="@/assets/imgs/login/email.png" />
          <div class="login-text">Login with email & password</div>
        </div>
        <div class="login-email" v-if="loginType == 3">
          <div class="login-email-wrap">
            <div
              class="item"
              :class="focusEmailAddressShow ? 'item-focus' : ''"
            >
              <div class="item-title">
                <div>Email address</div>
              </div>
              <div class="item-input">
                <el-input
                  v-model="login.email.address"
                  placeholder="Email"
                  @focus="focusInput('focusEmailAddressShow')"
                  @blur="blurInput('focusEmailAddressShow')"
                ></el-input>
              </div>
            </div>
            <div class="item" :class="focusPasswordShow ? 'item-focus' : ''">
              <div class="item-title">
                <div>Password</div>
                <div class="item-title-password" @click="goForgetPassword">forget password？</div>
              </div>
              <div class="item-input">
                <el-input
                  v-model="login.email.password"
                  placeholder="Password"
                  type="password"
                  @focus="focusInput('focusPasswordShow')"
                  @blur="blurInput('focusPasswordShow')"
                ></el-input>
              </div>
            </div>
            <div class="item-btn">
              <div class="login-btn" @click="loginByEmailGo">Sign in</div>
              <div class="login-des-wrap">
                <div class="login-des-text">Don’t have an account?</div>
                <div class="login-des-register" @click="goRegister">
                  Get started
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 弹框组件 -->

      <!-- 绑定邮箱 -->
      <bindEmailBox
        v-show="loginBoxState == 1"
        @bindEmailAddress="bindEmailAddress"
      ></bindEmailBox>

      <!-- 注册 -->
      <registerBox
        v-show="loginBoxState == 2"
        @signUp="signUp"
        @goLogin="goLogin"
      ></registerBox>

      <!-- 忘记密码 -->
      <forgetPassword
        v-show="loginBoxState == 4"
        @forgetPassword="forgetPassword"
      ></forgetPassword>

        <!-- 输入验证码 -->
      <inputCode
        v-show="loginBoxState == 5"
        @validForgetPassword="validForgetPassword"
      ></inputCode>


      <verificationEmail
        v-show="loginBoxState == 3"
        @validEmailCode="validEmailCode"
      ></verificationEmail>

      <!-- 弹框组件 -->
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs, inject, getCurrentInstance } from "vue";
import { useRouter, useRoute } from "vue-router";
import { initWallet, getSiner } from "@/utils/metaMask/ethers.js";
import { setSession, setToken, getCookie } from "@/utils/auth.js";
import Header from "@/components/HeaderMarketPlace";
import bindEmailBox from "./components/bind-email-box.vue";
import registerBox from "./components/register-box.vue";
import forgetPassword from "./components/forgetPassword.vue";
import inputCode from "./components/inputCode.vue";
import verificationEmail from "./components/verificationEmail.vue";
import { ElMessage } from "element-plus";
import { useI18n } from "vue-i18n"; //要在js中使用国际化
import loginHandle from "./use/login.js";
import imgCode from "@/components/modalBox/imgCode/loginImgCode.vue";

export default {
  name: "login",
  components: {
    Header,
    bindEmailBox,
    registerBox,
    verificationEmail,
    forgetPassword,
    inputCode,
    imgCode,
  },
  setup() {
    const {
      state,
      loginByEmail,
      loginByEmailGo,
      registerByEmailGo,
      validEmail,
      loginByMetaMaskGo,
      focusInput,
      blurInput,
      bindEmailAddress,
      goRegister,
      signUp,
      forgetPassword,
      goLogin,
      loginByBinance,
      validEmailCode,
      validForgetPassword,
      goForgetPassword,
      headHandle,
    } = loginHandle();
    return {
      ...toRefs(state),

      loginByEmail,
      loginByEmailGo,
      registerByEmailGo,
      validEmail,
      loginByMetaMaskGo,
      focusInput,
      blurInput,
      bindEmailAddress,
      goRegister,
      signUp,
      forgetPassword,
      goLogin,
      loginByBinance,
      validEmailCode,
      validForgetPassword,
      goForgetPassword,
      headHandle,
    };
  },
};
</script>

<style lang="less" scoped >
.main {
  background-color: #282523;
  .main-head {
    height: 80px;
    background: #050303;
  }
  .login-wrap {
    background-color: #282523;

    min-width: 420px;
    padding-top: 120px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    //   position: absolute;
    //   top: 50%;
    //   left: 50%;
    //  transform: translate(-50%,-50%);
    .login-form {
      .login-item1 {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 420px;
        min-width: 420px;
        height: 50px;
        background: #ffc763;

        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 8px;
        margin-bottom: 24px;
        cursor: pointer;

        img {
          width: 28px;
          height: 28px;
          //  margin-left: 98px;
        }
        .login-text {
          margin-left: 20px;
          font-size: 16px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          color: #2e0b00;
        }
      }
      .login-item2Clicked {
        opacity: 0.55;
      }
      .login-item2 {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 420px;
        min-width: 420px;
        height: 50px;
       
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 8px;
        margin-bottom: 24px;
        cursor: pointer;
        img {
          width: 32px;
          height: 32px;
          // margin-left: 98px;
        }
        .login-text {
          margin-left: 20px;
          font-size: 16px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          color: #ffffff;
          // color: #2e0b00;
        }
      }

      .login-item3 {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 420px;
        min-width: 420px;
        height: 50px;
        background: #FFC763;
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 8px;
        margin-bottom: 24px;
        cursor: pointer;
        img {
          width: 28px;
          height: 28px;
          // margin-left: 78px;
        }
        .login-text {
          margin-left: 10px;
          font-size: 16px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          // color: #ffffff;
          color: #2e0b00;
        }
      }
      .login-item1:hover {
        opacity: 0.55;
      }
      .login-item2:hover {
        opacity: 0.55;
      }
      .login-item3:hover {
        opacity: 0.55;
      }
      .login-email {
        width: 420px;
        height: 390px;
        background: #1a1716;
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.12);

        .login-email-wrap {
          margin: 40px 20px;
          .item-focus {
            border-bottom: 1px solid #ffc763 !important;
          }
          .item {
            border-bottom: 1px solid rgba(242, 242, 242, 0.18);
            // opacity: 0.18;
            // height: 80px;
            margin-bottom: 44px;
            .item-title {
              font-size: 16px;
              font-family: GothamRounded-Bold, GothamRounded;
              font-weight: bold;
              color: #ffffff;
              display: flex;
              justify-content: space-between;
              .item-title-password {
                font-size: 14px;
                font-family: GothamRounded-Book, GothamRounded;
                font-weight: normal;
                color: #ffc763;
                cursor: pointer;
              }
            }
            .item-input {
              /deep/ input::-webkit-input-placeholder {
                opacity: 0.26;
                font-size: 14px;
                font-family: GothamRounded-Book, GothamRounded;
                font-weight: normal;
                color: #ffffff;
              }
              /deep/ input::-moz-input-placeholder {
                opacity: 0.26;
                font-size: 14px;
                font-family: GothamRounded-Book, GothamRounded;
                font-weight: normal;
                color: #ffffff;
              }
              /deep/ input::-ms-input-placeholder {
                opacity: 0.26;
                font-size: 14px;
                font-family: GothamRounded-Book, GothamRounded;
                font-weight: normal;
                color: #ffffff;
              }
              /deep/ .el-input__inner {
                // width: 271px;
                height: 38px;
                background: #1a1716;
                border-radius: 24px;
                border: none;
                padding: 0;
                opacity: 0.86;
                font-size: 14px;
                font-family: GothamRounded-Book, GothamRounded;
                font-weight: normal;
                color: #ffffff;
              }
            }
          }
          .item-btn {
            // display: flex;
            // justify-content: space-between;
            .login-btn {
              width: 234px;
              height: 48px;
              background: #ffc763;
              border-radius: 24px;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 16px;
              font-family: GothamRounded-Bold, GothamRounded;
              font-weight: bold;
              color: #2e0b00;
              cursor: pointer;
            }
            .login-des-wrap {
              margin-top: 24px;
              display: flex;
              .login-des-text {
                font-size: 14px;
                font-family: GothamRounded-Book, GothamRounded;
                font-weight: normal;
                color: #ffffff;
              }
              .login-des-register {
                margin-left: 10px;
                font-size: 14px;
                font-family: GothamRounded-Bold, GothamRounded;
                font-weight: bold;
                color: #ffc763;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
}
</style>