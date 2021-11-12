<template>
  <div class="receive-main">
    <submitSuccessful
      v-if="submitSuccessShow"
      @closeBox="closeBox"
    ></submitSuccessful>
    <div class="top"></div>
    <div class="bottom">
      <div class="top-wrap">
        <div class="title">Event Rules</div>
        <div class="content-des">
          <div class="content-des-time">
            <img
              src="@/assets/imgs/activity/activityReceive/clock.png"
              alt=""
            />
            <div class="time-title">
              Available time: from 10/09/2021(UTC+4) to the end of all rounds' rush
            </div>
          </div>
          <div class="content-des-word">
            <img src="@/assets/imgs/activity/activityReceive/word.png" alt="" />
            <div class="time-title">Only 3 steps</div>
          </div>
          <div class="content-des-steps">
            <div class="steps1">
              <div class="step-title">Step 1: Follow tasks</div>
              <div class="step-content">
                <div class="left">
                  <img
                    src="@/assets/imgs/activity/activityReceive/step.png"
                    alt=""
                  />
                </div>
                <div class="right">
                  Following our Twitter:
                  <div class="text" @click="goHref1">
                   https://twitter.com/DragonMainland
                  </div>
                   <br />
                  Entering our telegram:
                  <div class="text" @click="goHref2">
                    https://t.me/dragon_mainland
                  </div>
                   <br />
                  Telegram Channel:
                  <div class="text" @click="goHref3">
                    https://t.me/dragonmainland_ann
                  </div>
                </div>
              </div>
            </div>
            <div class="steps2">
              <div class="step-title">Step 2: Forwarding tasks</div>
              <div class="step-content">
                <div class="left">
                  <img
                    src="@/assets/imgs/activity/activityReceive/step.png"
                    alt=""
                  />
                </div>
                <div class="right">
                  RT with comments #DMS #DragonMainland #PlayToEarn and
                  @3*friends
                  <br />
                 
                   <div class="text" @click="goHref4">
                   https://twitter.com/DragonMainland/status/1446725239669329922?s=20
                  </div>
                </div>
              </div>
            </div>
            <div class="steps3">
              <div class="step-title">Step 3: Follow tasks</div>
              <div class="step-content">
                <div class="left">
                  <img
                    src="@/assets/imgs/activity/activityReceive/step.png"
                    alt=""
                  />
                </div>
                <div class="right">
                  Visit the official website to register for an email address
                  and sign the wallet
                  <br />
                   <div class="text" @click="goHref5">
                   https://dragonmainland.io/#/home
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="content-des-bottom">
            After completing the above three steps, you will be able to
            participate in an airdrop.
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
              <div class="item-title"  @click="openTips">* BSC Address(BEP-20) 
                <div class="item-title-tips">
                  ！
                </div>
              </div>
              <div class="item-input">
                <el-input
                  :disabled="isEdit"
                  v-model="form.bscAddress"
                  placeholder="Please write BSC Address"
                ></el-input>
              </div>
            </div>
          </div>

          <div class="submit-item">
            <div class="item">
              <div class="item-title">* Telegram account</div>
              <div class="item-input">
                <el-input
                  :disabled="isEdit"
                  v-model="form.teleGramAccount"
                  placeholder="Please write teleGramAccount"
                ></el-input>
              </div>
            </div>
            <div class="item">
              <div class="item-title">* Twitter account</div>
              <div class="item-input">
                <el-input
                  :disabled="isEdit"
                  v-model="form.twitterAccount"
                  placeholder="Please write twitterAccount"
                ></el-input>
              </div>
            </div>
          </div>

          <div v-if="!isEdit" class="submit-btn">
            <div
              v-if="
                form.email &&
                form.bscAddress &&
                form.teleGramAccount &&
                form.twitterAccount && 
                form.bscAddress
              "
              class="btn"
              @click="submit"
            >
              Submit
            </div>

            <div v-else class="btn no-submit">Submit</div>
          </div>

          <div v-else class="submit-btn">
            <div class="btn" @click="editMesage">Edit</div>
          </div>
        </div>
      </div>
    </div>
    <candyBox @goSubmit="goSubmit"></candyBox>
    <activityRightBox
      v-if="!activityBoxShow"
      @goActivity="goActivity"
    ></activityRightBox>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from "vue";
import { useRouter } from "vue-router";
import activityReceiveMessage from "./use/activity/activityReceiveMessage.js";
import submitSuccessful from "@/components/modalBox/submit-successful/index.vue";
import common from "@/utils/common";
import { getSession, getToken, setCookie } from "@/utils/auth.js";
import activityRightBox from "@/views/pc/home/components/activity/index";

export default {
  name: "activity",
  components: {
    submitSuccessful,
    activityRightBox,
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
      activityReceiveState,
      getFile1,
      getFile2,
      getFile3,
      submit,
      closeBox,
      goHref1,
      goHref2,
      goHref3,
      goHref4,
      goHref5,
      goActivity,
      editMesage,
      openTips,
    } = activityReceiveMessage();

    return {
      ...toRefs(state),
      ...toRefs(activityReceiveState),
      getFile1,
      getFile2,
      getFile3,
      submit,
      closeBox,
      goHref1,
      goHref2,
      goHref3,
      goHref4,
      goHref5,
      goActivity,
      editMesage,
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
    background-image: url("../../../assets/imgs/activity/activityReceive/top-bc.png");
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
        .content-des-time {
          display: flex;
          align-items: center;
          margin-bottom: 39px;
          img {
            width: 24px;
            height: 24px;
            margin-right: 16px;
          }
          .time-title {
            font-size: 26px;
            font-family: GothamRounded-Medium, GothamRounded;
            font-weight: 500;
            color: #ffffff;
            line-height: 31px;
          }
        }
        .content-des-word {
          display: flex;
          align-items: center;
          margin-bottom: 39px;
          img {
            width: 18px;
            height: 22px;
            margin-right: 16px;
          }
          .time-title {
            font-size: 26px;
            font-family: GothamRounded-Medium, GothamRounded;
            font-weight: 500;
            color: #ffffff;
            line-height: 31px;
          }
        }
        .content-des-steps {
          .steps1 {
            margin-bottom: 60px;
            .step-title {
              font-size: 26px;
              font-family: GothamRounded-Book, GothamRounded;
              font-weight: normal;
              color: #ffffff;
              line-height: 39px;
            }
            .step-content {
              display: flex;
              margin-top: 20px;
              .left {
                margin-right: 50px;
                img {
                  margin-top: 10px;
                  width: 34px;
                  height: 42px;
                }
              }
              .right {
                width: 1000px;
                font-size: 26px;
                font-family: GothamRounded-Book, GothamRounded;
                font-weight: normal;
                color: #ffffff;
                line-height: 39px;
                .text {
                  display: inline-block;
                  color: #ffc763;
                  cursor: pointer;
                }
              }
            }
          }
          .steps2 {
            margin-bottom: 60px;
            .step-title {
              font-size: 26px;
              font-family: GothamRounded-Book, GothamRounded;
              font-weight: normal;
              color: #ffffff;
              line-height: 39px;
            }
            .step-content {
              display: flex;
              margin-top: 20px;
              .left {
                margin-right: 50px;
                img {
                  margin-top: 10px;
                  width: 34px;
                  height: 42px;
                }
              }
              .right {
                width: 1000px;
                font-size: 26px;
                font-family: GothamRounded-Book, GothamRounded;
                font-weight: normal;
                color: #ffffff;
                line-height: 39px;
                 .text {
                  display: inline-block;
                  color: #ffc763;
                  cursor: pointer;
                }
              }
            }
          }
          .steps3 {
            margin-bottom: 60px;
            .step-title {
              font-size: 26px;
              font-family: GothamRounded-Book, GothamRounded;
              font-weight: normal;
              color: #ffffff;
              line-height: 39px;
            }
            .step-content {
              display: flex;
              margin-top: 20px;
              .left {
                margin-right: 50px;
                img {
                  margin-top: 10px;
                  width: 34px;
                  height: 42px;
                }
              }
              .right {
                width: 1000px;
                font-size: 26px;
                font-family: GothamRounded-Book, GothamRounded;
                font-weight: normal;
                color: #ffffff;
                line-height: 39px;
                 .text {
                  display: inline-block;
                  color: #ffc763;
                  cursor: pointer;
                }
              }
            }
          }
        }
        .content-des-bottom {
          font-size: 26px;
          font-family: GothamRounded-Book, GothamRounded;
          font-weight: normal;
          color: #ffffff;
          line-height: 39px;
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
              .item-title-tips{
                margin-left:5px;
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