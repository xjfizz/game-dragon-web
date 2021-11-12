<template>
  <div class="receive-main">
    <submitSuccessful
      v-if="submitSuccessShow"
      @closeBox="closeBox"
      :submitBoxForm="submitBoxForm"
    ></submitSuccessful>
    <verificationImgCode v-if="verificationCodeShow"></verificationImgCode>
    <div class="top"></div>
    <div class="bottom">
      <div class="top-wrap">
        <div class="title">Event Rules</div>
        <div class="content-des">
          <div class="content-des-item">
            Community IDO Event Information: <br />
            To reward the Dragon Mainland community for their support we are
            happy to announce the DMS community IDO event.
          </div>
          <div class="content-des-item">
            The total amount of DMS for this community offering is 1,000,000
            DMS. For the event we will use a whitelisting process for
            registration which will be available from 12pm UTC, November 1 to
            12pm UTC, November 3.
          </div>
          <div class="content-des-item">
            Please note, it’s open for all Dragon Mainland fans to participate.
            Once the registration period has been completed the system will
            randomly select 1000 accounts to be whitelisted for the IDO.
          </div>
          <div class="content-des-item">
            These 1000 accounts will then be allowed to purchase 1000 DMS for
            0.25 BNB on November 5. To be clear, 0.25 BNB buys a user 1000 DMS.
          </div>
          <div class="content-des-item">
            Detailed rules are as follows: <br />
            Amount of IDO：1,000,000 DMS Price：0.25 BNB (1000 DMS) <br />
            Whitelist Number：1000 accounts (1000 DMS per account) <br />
            Registration Period：11.01 - 11.03 ( 12pm utc) <br />
            Whitelist Winning Accounts Announced：11.03 - 11.05 ( 12pm utc)
            <br />
            Payment Time：11.05 - 11.06 ( 12pm utc)
          </div>
          <div class="content-des-item">
            Rules: Please fill in your email and BSC wallet address on this page
            during the registration period. ( Only the users who have completed
            the registration process are eligible for the whitelist ) Following
            the deadline for registration we will have a two-day whitelist
            announcement. Good luck!
          </div>
        </div>
      </div>
      <div class="bottom-line">
        <div class="line"></div>
        <div class="text">Submit section</div>
        <div class="line"></div>
      </div>
      <div class="bottom-wrap">
        <div class="title">Information Submission</div>
        <div class="content">
          <div class="submit-item">
            <div class="item">
              <div class="item-title">Email</div>
              <div class="item-input">
                <el-input
                  disabled
                  v-model="form.email"
                  placeholder="Please write Email"
                ></el-input>
              </div>
            </div>
            <div class="item">
              <div class="item-title" @click="openTips">
                * BSC Address(BEP-20)
                <div class="item-title-tips">！</div>
              </div>
              <div class="item-input">
                <el-input
                  disabled
                  v-model="form.walletAddress"
                  placeholder="Please write BSC Address"
                ></el-input>
              </div>
            </div>
          </div>

          <div class="submit-btn">
            <div
              v-if="form.email && form.walletAddress"
              class="btn"
              @click="submit"
            >
              Submit
            </div>

            <div v-else class="btn no-submit">Submit</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from "vue";
import { useRouter } from "vue-router";
import dragonSignUpHandle from "./use/dragonSignUp.js";
import submitSuccessful from "@/components/modalBox/submit-successful/commonIndex.vue";
import common from "@/utils/common";
import { getSession, getToken, setCookie } from "@/utils/auth.js";
import verificationImgCode from "@/components/modalBox/imgCode/verificationImgCode.vue";

export default {
  name: "dragonSignUp",
  components: {
    submitSuccessful,
    verificationImgCode,
  },
  setup() {
    const router = useRouter();
    const state = reactive({});
    onMounted(() => {
      //  if (!getToken()) {
      //     return router.push({ path: "/login" });
      // }
      common.goTopScroll();
    });

    let {
      dragonSignUpState,

      submit,
      closeBox,

      openTips,
    } = dragonSignUpHandle();

    return {
      ...toRefs(state),
      ...toRefs(dragonSignUpState),

      submit,
      closeBox,

      openTips,
    };
  },
};
</script>

<style lang="less" scoped>
.receive-main {
  width: 100%;
  height: 2300px;
  //  background-color: #ff5400;
  .top {
    height: 680px;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("../../../assets/imgs/dragonSignUp/top-bc.png");
  }
  .bottom {
    //height: 1950px;
    height: 1700px;
    background: linear-gradient(
      180deg,
      #1f1c1f 0%,
      #2d1f1c 5%,
      #221d1d 18%,
      #1f1c1f 49%,
      #291e16 75%,
      #120804 90%,
      #100602 100%
    );
    display: flex;
    flex-direction: column;
    //   justify-content: center;
    align-items: center;
    .top-wrap {
      width: 1200px;
      .title {
        margin-top: 50px;
        font-size: 42px;
        font-family: WendyOne-Regular, WendyOne;
        font-weight: 400;
        color: #ffffff;
        line-height: 64px;
        text-align: center;
      }
      .content-des {
        margin-top: 40px;
        .content-des-item {
          margin-bottom: 60px;
          font-size: 28px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          color: #ffffff;
          line-height: 31px;
        }
      }
    }
    .bottom-line {
      display: flex;
      align-items: center;
      margin-top: 30px;
      .line {
        width: 550px;
        height: 1px;
        opacity: 0.08;
        background-color: #ffffff;
      }
      .text {
        margin-left: 28px;
        margin-right: 28px;
        font-size: 14px;
        font-family: GothamRounded-Book, GothamRounded;
        font-weight: normal;
        color: #ffffff;
        line-height: 17px;
        opacity: 0.38;
      }
    }
    .bottom-wrap {
      margin-top: 20px;
      display: flex;
      align-items: center;
      flex-direction: column;
      .title {
        font-size: 42px;
        font-family: WendyOne-Regular, WendyOne;
        font-weight: 400;
        color: #ffffff;
        line-height: 64px;
      }
      .content {
        margin-top: 50px;
        .submit-item {
          display: flex;
          margin-bottom: 48px;
          .item {
            margin-right: 24px;
            .item-title {
              font-size: 14px;
              font-family: GothamRounded-Book, GothamRounded;
              font-weight: normal;
              color: #747171;
              line-height: 17px;
              //  opacity: 0.55;
              .item-title-tips {
                margin-left: 5px;
                color: #ff5400;
                display: inline-block;
                cursor: pointer;
                opacity: 1;
              }
            }
            .item-input {
              margin-top: 16px;
              height: 48px;
              width: 486px;
              border-radius: 24px;
              border: 1px solid rgba(255, 255, 255, 0.18);
              padding: 0 10px;
              display: flex;
              align-items: center;
              justify-content: space-between;
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
        }
        .submit-img {
          .submit-img-title {
            font-size: 14px;
            font-family: GothamRounded-Book, GothamRounded;
            font-weight: normal;
            color: #ffffff;
            line-height: 21px;
            opacity: 0.55;
          }
          .submit-img-wrap {
            margin-top: 16px;
            display: flex;
            justify-content: space-between;

            .item-img {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              width: 316px;
              height: 316px;
              border-radius: 6px;
              border: 1px solid rgba(255, 255, 255, 0.18);
              position: relative;
              cursor: pointer;
              .up-add {
                opacity: 0;
                position: absolute;
                width: 316px;
                height: 316px;
                z-index: 999;
                cursor: pointer;
              }
              .img-nodata {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .img {
                  width: 24px;
                  height: 24px;
                }
                .img-des {
                  margin-top: 18px;
                  width: 200px;
                  font-size: 14px;
                  font-family: Poppins-Regular, Poppins;
                  font-weight: 400;
                  color: #ffffff;
                  line-height: 21px;
                  opacity: 0.48;
                  text-align: center;
                }
              }
              .img-data {
                img {
                  width: 316px;
                  height: 316px;
                  border-radius: 6px;
                }
              }
            }
          }
        }
        .submit-btn {
          margin-top: 80px;
          display: flex;
          justify-content: center;
          .btn {
            width: 148px;
            height: 50px;
            background: #ffc763;
            border-radius: 25px;
            opacity: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 16px;
            font-family: GothamRounded-Medium, GothamRounded;
            font-weight: 500;
            color: #2e0b00;
            line-height: 19px;
            cursor: pointer;
          }
          .no-submit {
            opacity: 0.2;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
<style lang="less">
.item-img {
  .el-upload--picture-card {
    background: transparent !important;
    border: none;
    width: 316px;
    height: 316px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>