
<template>
  <div class="bottom-main">
    <div class="main-wrap">
      <div class="wrap-top">
        <div class="left">
          <div class="left-top">
            <img src="@/assets/imgs/bottom/logo1.png" />
          </div>
          <div class="left-bottom">
            <img src="@/assets/imgs/bottom/discord.png" @click="goOther(1)" />
            <img src="@/assets/imgs/bottom/telegram.png" @click="goOther(2)" />
            <img src="@/assets/imgs/bottom/Twitter.png" @click="goOther(3)" />
            <img src="@/assets/imgs/bottom/Reddit.png" @click="goOther(4)" />
            <img src="@/assets/imgs/bottom/medium.png" @click="goOther(5)" />
            <img src="@/assets/imgs/bottom/YouTube.png" @click="goOther(6)" />
          </div>
          <div class="left-bottom-text" @click="goContact()">
            Contact us：services@dragonmainland.io
          </div>
          <!-- <div class="left-yx">Dragon Mainland © 2021, All rights reserved</div> -->
        </div>
        <div class="left-mid">
          <div class="left-mid-left">
            <div class="left-mid-item" @click="goPath(1)">
              <span>Home</span>
            </div>

            <div class="left-mid-item" @click="goPath(3)">
              <span>Marketplace</span>
            </div>
            <div class="left-mid-item" @click="goPath(5)">
              <span>About us</span>
            </div>
          </div>
          <div class="left-mid-right">
            <div class="right-mid-item" @click="goPath(7)">
              <span>Download</span>
            </div>
            <div class="right-mid-item" @click="goPath(6)">
              <span>FAQ</span>
            </div>

            <div class="right-mid-item" @click="goPath(8)">
              <span>Whitepaper</span>
            </div>
          </div>
        </div>

        <div class="right">
          <div class="top">
            <span>SUBSCRIBE TO OUR NEWSLETTER</span>
          </div>
          <div class="bottom">
            <el-input
              v-model="searchKey"
              class="item-input"
              placeholder="Your email address"
            ></el-input>
            <img
              @click="goSubScribe"
              src="@/assets/imgs/bottom/bottom-right.png"
            />
          </div>
        </div>
      </div>
      <div class="wrap-bottom">
        <div class="bottom-line">
          <div class="line"></div>
          <div class="text">
            <div class="item-left">
              Dragon Mainland © 2021, All rights reserved
            </div>
            <div class="item-right">
              <div class="item" @click="goPath(2)">Terms of Use</div>
              <div class="item" @click="goPath(4)">Privacy Policy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import { useRouter } from "vue-router";
export default {
  props: {
    classHeader: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, context) {
    const router = useRouter();
    const state = reactive({
      searchKey: "",
    });
    onMounted(() => {
      console.log("1111", state.classHeader, state.name);
    });
    const goPath = (type) => {
      if (type == 1) {
        router.push("/");
      } else if (type == 2) {
        window.open(
          "https://dragon-mainland.gitbook.io/dragonmainland/official-resourse/terms-of-use",
          "_blank"
        );
      } else if (type == 3) {
        router.push("/marketPlace");
      } else if (type == 4) {
        window.open(
          "https://dragon-mainland.gitbook.io/dragonmainland/official-resourse/privacy-policy",
          "_blank"
        );
      } else if (type == 5) {
        router.push("/aboutUs");
      } else if (type == 6) {
        window.open(
          "https://dragon-mainland.gitbook.io/dragonmainland/",
          "_blank"
        );
      } else if (type == 7) {
        //window.open("https://dragon-mainland.gitbook.io/dragonmainland/", "_blank");
        context.emit("createEgg");
      } else if (type == 8) {
        window.open(
          "https://dragonmainland.s3.ap-southeast-1.amazonaws.com/paper/DMS+White+Paper.pdf",
          "_blank"
        );
      }
    };
    const goOther = (type) => {
      if (type == 1) {
        window.open("https://discord.gg/BHysnZgJVS", "_blank");
      } else if (type == 2) {
        window.open("https://t.me/dragon_mainland", "_blank");
      } else if (type == 3) {
        window.open("https://twitter.com/DragonMainland", "_blank");
      } else if (type == 4) {
        window.open("https://www.reddit.com/r/DragonMainland", "_blank");
      } else if (type == 5) {
        window.open(" https://medium.com/@dragonmainland", "_blank");
      } else if (type == 6) {
        window.open(
          "https://www.youtube.com/channel/UCQaTBCOp-KZ-lgH9V6BJo7Q",
          "_blank"
        );
      }
    };

    const goSubScribe = () => {
      context.emit("createEgg");
    };

    const goContact = () => {
      window.open("mailto:services@dragonmainland.io?subject=dragon", "_blank");
    };
    return {
      ...toRefs(state),
      goPath,
      goOther,
      goSubScribe,
      goContact,
    };
  },
};
</script>

<style lang="less" scoped >
.bottom-main {
  display: flex;
  justify-content: center;
  .main-wrap {
    min-height: 327px;
    padding-bottom: 50px;
    .wrap-top {
      display: flex;
      justify-content: space-between;
      // width: 1200px;
      width: 1200px;
      .left {
        margin-top: 18px;
        // margin-left: 380px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        .left-top {
          img {
            // width: 152px;
            // height: 82px;
            width: calc(151px * 1.2) ;
            height: calc(72px * 1.2);
            // transform: scale(0.7);
          }
        }
        .left-bottom {
          img {
            cursor: pointer;
            // width: 40px;
            // height: 40px;
              width: 48px;
            height: 48px;
            margin-right: 4px;
          }
        }
        .left-bottom-text {
          margin-top: 16px;
          margin-left: 10px;
          font-size: 16px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          color: #ffffff;
          line-height: 17px;
          cursor: pointer;
          opacity: 0.86;
        }
        .left-yx {
          margin-top: 85px;
          margin-left: 10px;
          font-size: 12px;
          font-family: GothamRounded;
          font-weight: 500;
          color: #ffffff;
          opacity: 0.47;
        }
      }
      .left-mid {
        margin-top: 50px;
        // margin-left: 331px;
        display: flex;
        .left-mid-left {
          margin-right: 89px;
          .left-mid-item {
            margin-bottom: 26px;
            cursor: pointer;
            opacity: 0.68;
            span {
              font-size: 18px;
              font-family: GothamRounded;
              color: #ffffff;
            }
          }
        }
        .left-mid-right {
          .right-mid-item {
            margin-bottom: 26px;
            cursor: pointer;
            opacity: 0.68;
            span {
              font-size: 16px;
              font-family: GothamRounded;
              color: #ffffff;
            }
          }
        }
      }

      .right {
        // margin-left: 107px;
        margin-top: 50px;
        .top {
          span {
            font-size: 16px;
            font-family: GothamRounded-Medium, GothamRounded;
            font-weight: 500;
            color: #ffffff;
          }
        }
        .bottom {
          margin-top: 26px;
          height: 48px;
          width: 271px;
          // background: #141514;
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
    .wrap-bottom {
      .bottom-line {
        margin-top: 78px;
        .line {
          width: 100%;
          height: 1px;
          opacity: 0.08;
          background-color: #ffffff;
          // border: 2px solid #ffffff;
        }
        .text {
          margin-top: 22px;
          font-size: 13px;
          font-family: GothamRounded-Book, GothamRounded;
          font-weight: normal;
          color: #ffffff;
          line-height: 26px;
          opacity: 0.47;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .item-left {
          }
          .item-right {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            .item {
              margin-left: 56px;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>
