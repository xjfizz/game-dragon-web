<template>
  <div class="login-form">
    <div class="login-form-wrap">
      <div class="form-title">Create Account with MetaMask</div>
      <div class="form-des">
        Your email address will receive important link. This email address and
        password will be used to log in to our website
      </div>
      <div class="item-wrap">
        <div
          class="form-item"
          :class="focusEmailAddressShow ? 'item-focus' : ''"
        >
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
          <div class="login-btn" @click="bindEmail">Create</div>
        </div>
      </div>
    </div>
  </div>
</template>
 




<script>
import { reactive, toRefs, onMounted,inject} from "vue";
import { useI18n } from 'vue-i18n'//要在js中使用国际化

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
    const { t  } = useI18n()
    const state = reactive({
      login: {
        email: {
          address: "",
          password: "",
        },
      },
      focusEmailAddressShow: false,
      focusPasswordShow: false,
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
    return {
      ...toRefs(state),
      focusInput,
      blurInput,
      bindEmail,
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
    margin: 38px 30px;
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
      }
    }
  }
}
</style>