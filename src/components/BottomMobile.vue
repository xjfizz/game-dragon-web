
<template>
  <div class="main">
    <div class="main-wrap">
      <div class="top">
        <div class="top-icon">
          <img src="@/assets/imgs/bottom/logo-m.png" />
        </div>
        <div class="top-contacts" @click="goContact()">
          Contact us：alex@dragonmainland.io
        </div>
        <div class="top-friends">
          <img src="@/assets/imgs/bottom/discord.png" @click="goOther(1)" />
          <img src="@/assets/imgs/bottom/telegram.png" @click="goOther(2)" />
          <img src="@/assets/imgs/bottom/Twitter.png" @click="goOther(3)" />
          <img src="@/assets/imgs/bottom/Reddit.png" @click="goOther(4)" />
          <img src="@/assets/imgs/bottom/medium.png" @click="goOther(5)" />
          <img src="@/assets/imgs/bottom/YouTube.png" @click="goOther(6)" />
        </div>
      </div>
      <div class="mid">
        <div class="mid-title">Subscribe To Our Newsletter</div>
        <div class="mid-input">
          <el-input
            v-model="searchKey"
            class="item-input"
            placeholder="Your email address"
          ></el-input>
          <img
            @click="goSubScribe"
            src="@/assets/imgs/bottom/bottom-right-m.png"
          />
        </div>
      </div>
      <div class="bottom">
        <div class="left">
          <div class="left-mid-item" @click="goPath(1)"><span>Home</span></div>
          <div class="left-mid-item" @click="goPath(2)">
            <span>Terms of Use</span>
          </div>
          <div class="left-mid-item" @click="goPath(3)">
            <span>Marketplace</span>
          </div>
          <div class="left-mid-item" @click="goPath(4)">
            <span>Privacy Policy</span>
          </div>
        </div>
        <div class="right">
          <div class="right-mid-item" @click="goPath(5)">
            <span>About us</span>
          </div>
          <div class="right-mid-item" @click="goPath(6)"><span>FAQ</span></div>
          <div class="right-mid-item" @click="goPath(7)">
            <span>Download</span>
          </div>
          <div class="right-mid-item" @click="goPath(8)">
            <span>Whitepaper</span>
          </div>
        </div>
      </div>
      <div class="bottom-line">
        <div class="line"></div>
        <div class="text">Dragon Mainland © 2021, All rights reserved</div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";

export default {
  props: {
    classHeader: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, context) {
    console.log(props);
    const state = reactive({
      searchKey: "",
    });
    onMounted(() => {
      console.log("1111", state.classHeader, state.name);
    });
    const goPath = (type) => {
      if (type == 1) {
        // window.open("https://dragon-mainland.gitbook.io/dragonmainland/", "_blank");
      } else if (type == 2) {
        window.open(
          "https://dragon-mainland.gitbook.io/dragonmainland/official-resourse/terms-of-use",
          "_blank"
        );
      } else if (type == 3) {
        window.open(
          "https://dragon-mainland.gitbook.io/dragonmainland/gameplay/marketplace",
          "_blank"
        );
      } else if (type == 4) {
        window.open(
          "https://dragon-mainland.gitbook.io/dragonmainland/official-resourse/privacy-policy",
          "_blank"
        );
      } else if (type == 5) {
        window.open(
          "https://dragon-mainland.gitbook.io/dragonmainland/dragon-mainland/inspiration",
          "_blank"
        );
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
          "https://s3.ap-southeast-1.amazonaws.com/dragonmainland.io/document/DMS_white_paper.pdf",
          "_blank"
        );
      }
    };
    const goOther = (type) => {
      if (type == 1) {
        window.open("https://discord.gg/rUZ6fwDwzg", "_blank");
      } else if (type == 2) {
        window.open("https://t.me/dragon_mainland", "_blank");
      } else if (type == 3) {
        window.open("https://twitter.com/DragonMainland", "_blank");
      } else if (type == 4) {
        window.open("https://www.reddit.com/user/DragonMainland", "_blank");
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
      window.open("mailto:services@dragonmainland.io", "_blank");
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
.main {
  // width: 1920px;

  // min-height: 327px;
  background: #050303;
  display: flex;
  justify-content: center;
  .main-wrap {
    width: 100%;
    background: #050303;
    padding: 38px 64px;
    .top {
      .top-icon {
        img {
          width: 168px;
          height: 80px;
        }
      }
      .top-contacts {
        margin-top: 32px;
        font-size: 28px;
        font-family: GothamRounded-Book, GothamRounded;
        font-weight: normal;
        color: #ffffff;
        line-height: 34px;
        opacity: 0.86;
      }
      .top-friends {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 42px;
        img {
          width: 80px;
          height: 80px;
        }
      }
    }
    .mid {
      margin-top: 80px;
      .mid-title {
        font-size: 32px;
        font-family: GothamRounded-Book, GothamRounded;
        font-weight: normal;
        color: #ffffff;
        line-height: 38px;
      }
      .mid-input {
        margin-top: 32px;
        height: 96px;
        background: #141514;
        border-radius: 48px;
        border: 2px solid rgba(255, 255, 255, 0.28);
        padding: 0 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .item-input {
          width: 90%;
        }
        img {
          width: 72px;
          height: 72px;
        }
        /deep/ input::-webkit-input-placeholder {
          opacity: 0.47;
          color: #ffffff;
          font-size: 28px;
        }
        /deep/ input::-moz-input-placeholder {
          opacity: 0.47;
          color: #ffffff;
          font-size: 28px;
        }
        /deep/ input::-ms-input-placeholder {
          opacity: 0.47;
          color: #ffffff;
          font-size: 28px;
        }
        /deep/ .el-input__inner {
          // width: 271px;
          background: #141514;
          border: none;
          border-radius: 48px;
          font-size: 28px;
          opacity: 0.86;
          color: #ffffff;
        }
      }
    }
    .bottom {
      display: flex;
      margin-top: 80px;
      .left {
        flex: 1;
        .left-mid-item {
          margin-bottom: 48px;
          cursor: pointer;
          opacity: 0.86;
          span {
            font-size: 28px;
            font-family: GothamRounded-Book, GothamRounded;
            font-weight: normal;
            color: #ffffff;
            line-height: 34px;
          }
        }
      }
      .right {
        flex: 1;
        .right-mid-item {
          margin-bottom: 48px;
          cursor: pointer;
          opacity: 0.86;
          span {
            font-size: 28px;
            font-family: GothamRounded-Book, GothamRounded;
            font-weight: normal;
            color: #ffffff;
            line-height: 34px;
          }
        }
      }
    }
    .bottom-line {
      margin-top: 78px;
      .line {
        width: 100%;
        height: 2px;
        opacity: 0.08;
        background-color: #ffffff;
        // border: 2px solid #ffffff;
      }
      .text {
        margin-top: 24px;
        font-size: 22px;
        font-family: GothamRounded-Book, GothamRounded;
        font-weight: normal;
        color: #ffffff;
        line-height: 26px;
        opacity: 0.47;
      }
    }
  }
}
</style>
