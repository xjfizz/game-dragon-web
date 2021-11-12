
<template>
  <div class="head" :style="classHeader">
    <div class="head-wrap">
      <div class="icon"></div>
      <div class="menu-wrap" @click="showMenu">
        <img src="@/assets/imgs/mobile-right-menu.png" />
      </div>
    </div>
    <van-popup
      v-model:show="menuShow"
      position="right"
      :style="{ height: '100%', width: '50%', background: '#09090a' }"
    >
      <div class="menu">
        <div class="menu-content">
          <div class="menu-top">
            <img src="@/assets/imgs/head/menu/close.png" @click="close" />
          </div>
          <div class="menu-wrap">
            <div class="item" @click="goPath('/', 1)">
              <div class="item-menu-title">Home</div>
            </div>
            <div class="item" @click="goPath('/staking', 2)">
              <div class="item-menu-title">staking</div>
            </div>
            <div class="item" @click="goPath('/Land', 3)">
              <div class="item-menu-title">Land</div>
            </div>
            <div class="item" @click="goPath('/marketPlace', 4)">
              <div class="item-menu-title">Marketplace</div>
            </div>
            <div class="item">
              <div class="item-menu-title" @click="showCommunityMenu">
                Community
                <div v-if="!communityShow" class="item-menu-title-img">
                  <img src="@/assets/imgs/head/menu/down.png" />
                </div>
                <div v-else class="item-menu-title-img-up">
                  <img src="@/assets/imgs/head/menu/down.png" />
                </div>
              </div>
              <div class="item-list" v-show="communityShow">
                <div
                  class="item-list-item"
                  v-for="(item, index) in menuCommunityList"
                  :key="index"
                  @click="goCommunity(item)"
                >
                  <div class="item-list-item-img">
                    <img :src="item.itemIcon" />
                  </div>
                  <div class="item-list-item-text">{{ item.itemText }}</div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="item-menu-title" @click="showMoreMenu">
                More
                <div v-if="!moreShow" class="item-menu-title-img">
                  <img src="@/assets/imgs/head/menu/down.png" />
                </div>
                <div v-else class="item-menu-title-img-up">
                  <img src="@/assets/imgs/head/menu/down.png" />
                </div>
              </div>
              <div class="item-list" v-show="moreShow">
                <div class="item-list-item"   v-for="(item, index) in menuMoreList"
                :key="index"
                @click="goMore(item)">
                  <div class="item-list-item-text">{{item.itemText}}</div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, computed } from "vue";
import { useRouter } from "vue-router";

import { useStore } from "vuex";

export default {
  props: {
    classHeader: {
      type: Object,
      default: () => {},
    },
    headIndex: {
      type: String,
      default: "",
    },
  },
  setup(props, context) {
    console.log("==", props.classHeader, context);
    const store = useStore();
    const router = useRouter();
    const state = reactive({
      classHeader: props.classHeader,
      name: "",
      selectItem: 1,
      menuShow: false,
      communityShow: false,
      moreShow: false,
      menuCommunityList: [
        {
          itemIcon: require("@/assets/imgs/head/menu/icon1.png"),
          itemText: "Discord",
          type: 1,
        },
        {
          itemIcon: require("@/assets/imgs/head/menu/icon2.png"),
          itemText: "Telegram",
          type: 2,
        },
        {
          itemIcon: require("@/assets/imgs/head/menu/icon3.png"),
          itemText: "Twitter",
          type: 3,
        },
        {
          itemIcon: require("@/assets/imgs/head/menu/icon4.png"),
          itemText: "Reddit",
          type: 4,
        },
        {
          itemIcon: require("@/assets/imgs/head/menu/icon5.png"),
          itemText: "Medium",
          type: 5,
        },
        {
          itemIcon: require("@/assets/imgs/head/menu/icon6.png"),
          itemText: "Youtube",
          type: 6,
        },
      ],

        menuMoreList: [
        {
          itemText: "About us",
          type: 1,
        },
        {
          itemText: "Whitepaper",
          type: 2,
        },
        {
          itemText: "FAQ",
          type: 3,
        },
        {
          itemText: "Download",
          type: 4,
        },
      ],
    });
    onMounted(() => {
      console.log("1111", state.classHeader, state.name);
      if (props.headIndex) {
        state.selectItem = props.headIndex;
      }
    });
    const count = computed(() => {
      return store.state.cartCount;
    });

    const goPath = (e, type) => {
      if (type == 1) {
        console.log("e", e);
        state.selectItem = type;
        router.push(e);
      } else if (type == 2) {
        context.emit("createEgg");
      } else if (type == 3) {
        context.emit("createEgg");
      } else if (type == 4) {
        router.push(e);
      }
    };
    const showMenu = () => {
      state.menuShow = true;
      console.log("showMenu", state.menuShow);
    };
    const close = () => {
      state.menuShow = false;
    };
    const showCommunityMenu = () => {
      state.communityShow = !state.communityShow;
    };
    const showMoreMenu = () => {
      state.moreShow = !state.moreShow;
    };

    const goCommunity = (item) => {
      if (item.type == 1) {
        // Discord
        window.open("https://discord.gg/rUZ6fwDwzg", "_blank");
      } else if (item.type == 2) {
        // Telegram
        window.open("https://t.me/dragon_mainland", "_blank");
      } else if (item.type == 3) {
        // Twitter
        window.open("https://twitter.com/DragonMainland", "_blank");
      } else if (item.type == 4) {
        // Reddit
        window.open("https://www.reddit.com/user/DragonMainland", "_blank");
      } else if (item.type == 5) {
        // Medium
        window.open(" https://medium.com/@dragonmainland", "_blank");
      } else if (item.type == 6) {
        // Youtube
        window.open(
          "https://www.youtube.com/channel/UCQaTBCOp-KZ-lgH9V6BJo7Q",
          "_blank"
        );
      }
    };

    
    const goMore = (item) => {
      if (item.type == 1) {
        state.selectItem = 6;
        router.push("/aboutUs");
      } else if (item.type == 2) {
        // https://dragon1164.s3.ap-southeast-1.amazonaws.com/document/DMS_white_paper.pdf
        window.open(
          "https://s3.ap-southeast-1.amazonaws.com/dragonmainland.io/document/DMS_white_paper.pdf",
          "_blank"
        );
      } else if (item.type == 3) {
        window.open(
          "https://dragon-mainland.gitbook.io/dragonmainland/",
          "_blank"
        );
      } else if (item.type == 4) {
        context.emit("createEgg");
      }
    };

    return {
      ...toRefs(state),
      count,
      goPath,
      showMenu,
      close,
      showCommunityMenu,
      showMoreMenu,
      goCommunity,
      goMore,
    };
  },
};
</script>

<style lang="less" scoped >
.head {
  width: 100%;
  height: 128px;
  // position: fixed;
  // top: 0;
  // left: 0;
  // background: #fff;
  z-index: -1;

  .head-wrap {
    // justify-content: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 34px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    // background: #ffffff;
    // opacity: 0;

    .icon {
      width: 168px;
      height: 80px;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: 0;
      background-image: url("../assets/imgs/dragon-icon1-m.png");
    }
    .menu-wrap {
      margin-left: auto;
      img {
        cursor: pointer;
        width: 48px;
        height: 48px;
      }
    }
    .color {
      display: flex;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 2px;
      .color-item {
        flex: 1;
        height: 2px;
      }
    }
  }
  .menu {
    width: 100%;
    min-height: 100%;
    background: #09090a;
    .menu-content {
      padding-left: 32px;
      padding-right: 32px;
      background: #09090a;
      min-height: 100%;
      .menu-top {
        position: relative;
        height: 52px;
        img {
          position: absolute;
          right: 0px;
          top: 32px;
          width: 52px;
          height: 52px;
          cursor: pointer;
        }
      }
      .menu-wrap {
        margin-top: 82px;
        .item {
          margin-bottom: 64px;
          cursor: pointer;

          .item-menu-title {
            font-size: 32px;
            font-family: GothamRounded-Book, GothamRounded;
            font-weight: normal;
            color: #ffffff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .item-menu-title-img {
              display: flex;
              align-items: center;

              img {
                width: 24px;
                height: 20px;
              }
            }
            .item-menu-title-img-up {
              display: flex;
              align-items: center;
              img {
                width: 24px;
                height: 20px;
                -ms-transform: rotate(180deg); /* IE 9 */
                -webkit-transform: rotate(180deg); /* Safari and Chrome */
                transform: rotate(180deg);
              }
            }
          }
          .item-list {
            padding-top: 32px;
            .item-list-item {
              cursor: pointer;
              display: flex;
              align-items: center;
              height: 80px;
              .item-list-item-img {
                display: flex;
                align-items: center;
                img {
                  width: 80px;
                  height: 80px;
                }
              }
              .item-list-item-text {
                font-size: 28px;
                font-family: GothamRounded-Book, GothamRounded;
                font-weight: normal;
                color: #ffffff;
                opacity: 0.83;
              }
            }
          }
        }
      }
    }
  }
}
</style>
