

<template>
  <div class="auth-main">
    <div class="login-text">
      <div class="icon">
        <img src="../../../assets/imgs/login/login-valid.png" alt="" />
      </div>
      <div class="text">
        Your email address successfully verified. Please go to the Web and sign
        in again ！
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs, inject, getCurrentInstance } from "vue";

export default {
  name: "authLogin",

  setup() {
    const API = inject("API");
    const state = reactive({});
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="less" scoped >
.auth-main {
  background-color: #282523;
  display: flex;
  justify-content: center;
  //   align-items: center;
  .login-text {
    margin-top: 10%;
    width: 1200px;
    height: 160px;
    min-height: 160px;
    padding: 20px;
    background: #039964;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .icon {
      img {
        width: 64px;
        height: 64px;
      }
    }
    .text {
      margin-top: 20px;
      font-size: 16px;
      font-family: Poppins-Regular, Poppins;
      font-weight: 400;
      color: #ffffff;
      text-align: center;
    }
  }
}

@media screen and (max-width: 900px) {
  .auth-main {
    background-color: #282523;
    display: flex;
    justify-content: center;
    //   align-items: center;
    .login-text {
      margin-top: 30%;
      width: 1200px;
      height: 560px;
      min-height: 560px;
      background: #039964;
      padding: 30px;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
    //  align-items: center;
      justify-content: flex-start;
      .icon {
       
        img {
          width: 128px;
          height: 128px;
        }
      }
      .text {
        margin-top: 30px;
        font-size:58px;
        font-family: Poppins-Regular, Poppins;
        font-weight: 400;
        color: #ffffff;
        text-align: center;
      }
    }
  }
}
</style>