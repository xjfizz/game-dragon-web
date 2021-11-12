<template>
  <div class="login-form">
    <div class="login-form-wrap">
      <div class="item-wrap">
        <div
          class="form-item"
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

        <div class="form-item" :class="focusPasswordShow ? 'item-focus' : ''">
          <div class="item-title">
            <div>set Password</div>
            <div class="item-title-password">(min 6 char)</div>
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
        <!-- <div class="register-aggrement">
          <div class="register-icon" @click="select">
            <img
              v-if="isSelectedAggrement"
              src="@/assets/imgs/login/selected.png"
            />
            <img v-else src="@/assets/imgs/login/un-selected.png" />
          </div>
          <div class="register-text">
            I have read and agreed to
            <span class="aggrement1">Terms of Use</span>
            and
            <span class="aggrement2">Privacy Policy</span>
          </div>
        </div> -->
        <div class="item-btn">
          <!-- isSelectedAggrement -->
          <div v-if="true" class="login-btn" @click="signUp">
            Sign Up
          </div>
          <div v-else class="login-btn login-btn-no">Sign Up</div>
          <div class="login-des-wrap">
            <div class="login-des-text">have an account?</div>
            <div class="login-des-register" @click="goLogin">Go Login</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 




<script>
import { reactive, toRefs, onMounted, inject } from "vue";
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
    const state = reactive({
      login: {
        email: {
          address: "",
          password: "",
        },
      },
      focusEmailAddressShow: false,
      focusPasswordShow: false,
      isSelectedAggrement: false,
    });
    onMounted(() => {});
    const focusInput = (key) => {
      state[key] = true;
    };
    const blurInput = (key) => {
      state[key] = false;
    };
    const bindEmail = () => {
      if (!state.login.email.address) {
        focusInput(state.focusEmailAddressShow);
        return $message.warning(t(`message.pleaseWriteEamilAddress`));
      }
      if (!state.login.email.password) {
        focusInput(state.focusPasswordShow);
        return $message.warning(t(`message.pleaseWriteEamilPassword`));
      }
      // if (state.login.email.password.length != 6) {
      //   focusInput(state.focusPasswordShow);
      //   return $message.warning(t(`message.pleaseWriteEamilPassword6`));
      // }
      context.emit("bindEmailAddress", state.login);
    };
    const select = () => {
      state.isSelectedAggrement = !state.isSelectedAggrement;
    };
    const signUp = () => {
      if (!state.login.email.address) {
        focusInput(state.focusEmailAddressShow);
        return $message.warning(t(`message.pleaseWriteEamilAddress`));
      }
      if (!state.login.email.password) {
        focusInput(state.focusPasswordShow);
        return $message.warning(t(`message.pleaseWriteEamilPassword`));
      }
      // if (state.login.email.password.length != 6) {
      //   focusInput(state.focusPasswordShow);
      //   return $message.warning(t(`message.pleaseWriteEamilPassword6`));
      // }
      context.emit("signUp", state.login);
    };
    const goLogin = () => {
      context.emit("goLogin");
    };
    return {
      ...toRefs(state),
      focusInput,
      blurInput,
      bindEmail,
      select,
      signUp,
      goLogin,
    };
  },
};
</script>

<style scoped lang="less">
.login-form {
  width: 420px;
  min-height: 420px;
  background: #1a1716;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  .login-form-wrap {
    margin: 40px 30px;
    .form-title {
      font-size: 20px;
      font-family: GothamRounded-Medium, GothamRounded;
      font-weight: 500;
      color: #ffffff;
    }
    .form-des {
      margin-top: 15px;
      font-size: 14px;
      font-family: GothamRounded-Book, GothamRounded;
      font-weight: normal;
      color: #ffffff;
      opacity: 0.68;
    }
    .item-wrap {
      margin-top: 44px;
      .item-focus {
        border-bottom: 1px solid #ffc763 !important;
      }
      .form-item {
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
          align-items: center;
          .item-title-password {
            margin-left: 10px;
            font-size: 14px;
            font-family: GothamRounded-Book, GothamRounded;
            font-weight: normal;
            color: #ffffff;
            opacity: 0.68;
          }
        }
        .item-input {
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
      }
      .register-aggrement {
        margin-top: 54px;
        display: flex;
        align-items: flex-start;
        // flex-wrap: wrap;
        .register-icon {
          display: flex;
          align-items: center;
          img {
            margin-top: 8px;
            width: 16px;
            height: 16px;
          }
        }
        .register-text {
          font-size: 14px;
          font-family: GothamRounded-Book, GothamRounded;
          font-weight: normal;
          color: #ffffff;
          line-height: 30px;
          margin-left: 10px;
          opacity: 0.68;
          //   display: flex;
          //   flex-wrap: wrap;
          .aggrement1 {
            color: #ffc763;
            margin-right: 10px;
            margin-left: 10px;
          }
          .aggrement2 {
            color: #ffc763;
            margin-right: 10px;
            margin-left: 10px;
          }
        }
      }
      .item-btn {
        // display: flex;
        // justify-content: space-between;
        margin-top: 18px;
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
        .login-btn-no {
          opacity: 0.68;
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
</style>