

<template>
  <div class="main">
    <div class="main-head">
      <Header :headIndex="2"></Header>
    </div>

    <div class="login-wrap">
      <div class="login-form" v-show="loginBoxState == 0">
        <div class="login-item1" @click="loginByBinance">
          <img src="@/assets/imgs/login/binance.png" />
          <div class="login-text">Login with Binance</div>
        </div>
        <div class="login-item2" @click="loginByMetaMaskGo">
          <img src="@/assets/imgs/login/metamask.png" />
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
                <div class="item-title-password">forgot password？</div>
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

      <!-- 弹框组件 -->
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs, inject } from "vue";
import { useRouter } from "vue-router";
import { initWallet, getSiner } from "@/utils/metaMask/ethers.js";
import { setStorage, setToken } from "@/utils/auth.js";
import Header from "@/components/HeaderMarketPlace";
import bindEmailBox from "./components/bind-email-box.vue";
import registerBox from "./components/register-box.vue";
import { ElMessage } from "element-plus";

export default {
  name: "home",
  components: {
    Header,
    bindEmailBox,
    registerBox,
  },
  setup() {
    const API = inject("API");
    const $message = inject("$message");

    const router = useRouter();
    const state = reactive({
      loginType: 1, // 1:binance 2:metaMask 3:email
      metaMaskAddress: "", // metaMask 钱包地址
      metaMaskSign: "", // metaMask 钱包签名
      login: {
        email: {
          address: "",
          password: "",
        },
      },
      focusEmailAddressShow: false,
      focusPasswordShow: false,
      loginBoxState: 0, // 0: 不弹框  1: 绑定邮箱弹框 2: 注册
    });
    onMounted(() => {});

    const loginByEmail = () => {
      state.loginType = 3;
    };


    const loginByBinance = () => {
      $message.success('please wait develop')
    };
    // metaMask 登录
    const loginByMetaMaskGo = () => {
      getmetaMaskAddress(getNonceStr, getSign, loginSignByMetaMask);
    };

    const loginSignByMetaMask = () => {
      let params = {
        loginType: 101,
        openId: state.metaMaskAddress,
        sign: state.metaMaskSign,
      };
      API.login.loginSign(params).then((res) => {
        if (res.code == 0) {
          setStorage("user", res.data);
          setToken(res.data.token);
          if (res.data.status == 4) {
            $message.warning("请绑定邮箱地址!");
            state.loginBoxState = 1;
          } else {
            loginSuccess(res.data);
          }
        } else {
          $message.error(res.msg);
        }
      });
    };

    // 邮箱登录
    const loginByEmailGo = () => {
      if (!state.login.email.address) {
        focusInput(state.focusEmailAddressShow);
        return $message.warning("请填写邮箱");
      }
      if (!state.login.email.password) {
        focusInput(state.focusPasswordShow);
        return $message.warning("请填写邮箱密码");
      }
      let params = {
        loginType: 3,
        email: state.login.email.address,
        pwd: state.login.email.password,
      };
      // registerByEmail
      API.login.loginByEmail(params).then((res) => {
        console.log("loginByEmailGo", res);
        if (res.code == 0) {
          // setStorage("user", res.data);
          setToken(res.data.token);
          if (res.data.status == 102) {
            $message.warning("请绑定钱包地址!");
            getmetaMaskAddress(getNonceStr, getSign, bindMetaMaskAddress);
          } else {
            loginSuccess(res.data);
          }
        } else {
          $message.error(res.msg);
          // validEmail();
        }
      });
    };

    const validEmail = () => {
      let params = {
        email: state.login.email.address,
      };
      // registerByEmail
      API.login.validByEmail(params).then((res) => {});
    };

    const registerByEmailGo = () => {
      let params = {
        email: state.login.email.address,
        pwd: state.login.email.password,
        repwd: state.login.email.password,
      };
      // registerByEmail
      API.login.registerByEmail(params).then((res) => {});
    };

    // 获取钱包地址
    const getmetaMaskAddress = async (callBack1, callBack2, callBack3) => {
      let res = await initWallet();
      console.log("metaMaskAddress", res);
      state.metaMaskAddress = res;
      callBack1(callBack2, callBack3);
    };

    // 获取签名
    const getSign = (req, callBack) => {
      getSiner(req.data).then((res2) => {
        console.log("signer", res2);
        state.metaMaskSign = res2;
        callBack ? callBack() : "";
      });
    };

    // 绑定钱包地址
    const bindMetaMaskAddress = () => {
      let params = {
        loginType: 0,
        openId: state.metaMaskAddress,
        sign: state.metaMaskSign,
      };
      // registerByEmail
      API.login.bindMetaMask(params).then((res) => {
        if (res.code == 0) {
          loginSuccess(res.data);
        }
      });
    };

    // 绑定邮箱地址
    const bindEmailAddress = (data) => {
      let params = {
        email: data.email.address,
        pwd: data.email.password,
      };
      // registerByEmail
      API.login.bindEmail(params).then((res) => {
        if (res.code == 0) {
          loginSuccess(res.data);
        }
      });
    };

    // 注册邮箱
    const signUp = (data) => {
      let params = {
        lang: 0,
        email: data.email.address,
        pwd: data.email.password,
        repwd: data.email.password,
      };

      // registerByEmail
      API.login.registerByEmail(params).then((res) => {
        if (res.code == 0) {
          // loginSuccess(res.data);
        } else {
          $message.warning(res.msg);
        }
      });
    };

    // 获取签名地址字符串
    const getNonceStr = (callBack2, callBack3) => {
      let params = {
        pubAddr: state.metaMaskAddress,
      };
      API.login.loginNonce(params).then((res) => {
        callBack2(res, callBack3);
      });
    };

    // 登录成功
    const loginSuccess = (data) => {
      if (data) {
        setStorage("user", data);
      }
      $message.success("登录成功!");
      setTimeout(() => {
        router.back();
      }, 1000);
    };

    const focusInput = (key) => {
      state[key] = true;
    };
    const blurInput = (key) => {
      state[key] = false;
    };
    const goRegister = () => {
      state.loginBoxState = 2;
    };

    const goLogin = () => {
      state.loginBoxState = 0;
    };
  
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
      goLogin,
      loginByBinance
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
          width: 28px;
          height: 28px;
          // margin-left: 98px;
        }
        .login-text {
          margin-left: 20px;
          font-size: 16px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          color: #ffffff;
        }
      }

      .login-item3 {
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
          width: 28px;
          height: 28px;
          // margin-left: 78px;
        }
        .login-text {
          margin-left: 10px;
          font-size: 16px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          color: #ffffff;
        }
      }
      .login-item1:hover {
        opacity: 0.85;
      }
      .login-item2:hover {
        opacity: 0.85;
      }
      .login-item3:hover {
        opacity: 0.85;
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