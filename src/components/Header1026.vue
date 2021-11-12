
<template>
  <div class="head" :style="classHeader">
    <div class="head-wrap">
      <div class="head-content">
        <div class="icon" @click="goPath('/', 1)">
          <img src="../assets/imgs/dragon-icon4.png" alt="" />
        </div>
        <div class="menu-wrap">
          <div
            :class="
              selectItem == 1
                ? 'menu-item' + selectItem + ' menu-item-hover' + selectItem
                : 'menu-item' + selectItem
            "
            @click="goPath('/', 1)"
          >
            <span>Home</span>
          </div>
          <div
            :class="
              selectItem == 2
                ? 'menu-item' + selectItem + ' menu-item-hover' + selectItem
                : 'menu-item' + selectItem
            "
            @click="goPath('/myMainland/myDragon', 2)"
          >
            <span>My Mainland</span>
          </div>

          <div
            :class="
              selectItem == 4
                ? 'menu-item' + selectItem + ' menu-item-hover' + selectItem
                : 'menu-item' + selectItem
            "
            @click="goPath('/marketPlace', 4)"
          >
            <span>Marketplace</span>
          </div>
          <div
            :class="
              selectItem == 4
                ? 'menu-item' + selectItem + ' menu-item-hover' + selectItem
                : 'menu-item' + selectItem
            "
            @click="goPath('/Swap', 3)"
          >
            <span>Swap</span>
          </div>

          <div
            :class="
              selectItem == 5
                ? 'menu-item' + selectItem + ' menu-item-hover' + selectItem
                : 'menu-item' + selectItem
            "
            @mouseenter="mouseEnter5"
            @mouseleave="mouseLeave5"
          >
            <!-- <span>FAQ</span> -->
            <span>Community</span>
            <div class="item-img">
              <img
                v-if="!mouseListShow5"
                src="@/assets/imgs/head/community/down2.png"
              />
              <img
                v-else
                class="item-img-up"
                src="@/assets/imgs/head/community/down2.png"
              />
            </div>
            <div class="selectItem-list5" v-if="mouseListShow5">
              <div class="selectItem-list-wrap">
                <div
                  class="selectItem-list-item"
                  v-for="(item, index) in menuCommunityList"
                  :key="index"
                  @click="goCommunity(item)"
                >
                  <div class="selectItem-list-item-icon">
                    <img :src="item.itemIcon" />
                  </div>
                  <div class="selectItem-list-item-text">
                    {{ item.itemText }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            :class="
              selectItem == 8
                ? 'menu-item' + selectItem + ' menu-item-hover' + selectItem
                : 'menu-item' + selectItem
            "
            @mouseenter="mouseEnter7"
            @mouseleave="mouseLeave7"
          >
            <span>Play to Earn</span>

            <div class="item-img">
              <img
                v-if="!mouseListShow7"
                src="@/assets/imgs/head/community/down2.png"
              />
              <img
                v-else
                class="item-img-up"
                src="@/assets/imgs/head/community/down2.png"
              />
            </div>
            <div class="selectItem-list7" v-if="mouseListShow7">
              <!-- mouseListShow6 -->
              <div class="selectItem-list-wrap">
                <div
                  class="selectItem-list-item"
                  v-for="(item, index) in earnList"
                  :key="index"
                  @click="goEarn(item)"
                >
                  <div class="selectItem-list-item-icon" v-if="item.itemIcon">
                    <img :src="item.itemIcon" />
                  </div>
                  <div class="selectItem-list-item-text">
                    {{ item.itemText }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            :class="
              selectItem == 7
                ? 'menu-item' + selectItem + ' menu-item-hover' + selectItem
                : 'menu-item' + selectItem
            "
            @mouseenter="mouseEnter6"
            @mouseleave="mouseLeave6"
          >
            <!-- <span>Download</span> -->
            <span>More</span>

            <div class="item-img">
              <img
                v-if="!mouseListShow6"
                src="@/assets/imgs/head/community/down2.png"
              />
              <img
                v-else
                class="item-img-up"
                src="@/assets/imgs/head/community/down2.png"
              />
            </div>
            <div class="selectItem-list6" v-if="mouseListShow6">
              <!-- mouseListShow6 -->
              <div class="selectItem-list-wrap">
                <div
                  class="selectItem-list-item"
                  v-for="(item, index) in menuMoreList"
                  :key="index"
                  @click="goMore(item)"
                >
                  <div class="selectItem-list-item-icon" v-if="item.itemIcon">
                    <img :src="item.itemIcon" />
                  </div>
                  <div class="selectItem-list-item-text">
                    {{ item.itemText }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div
          :class="
            selectItem == 7
              ? 'menu-item' + selectItem + ' menu-item-hover' + selectItem
              : 'menu-item' + selectItem
          "
          @click="goPath('/login', 7)"
        >
          <span>Login</span>
        </div> -->
        </div>
      </div>
    </div>
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
      mouseListShow5: false,
      mouseListShow6: false,
      mouseListShow7: false,
      menuCommunityList: [
        {
          itemIcon: require("@/assets/imgs/head/community/community-icon1.png"),
          itemText: "Discord",
          type: 1,
        },
        {
          itemIcon: require("@/assets/imgs/head/community/community-icon2.png"),
          itemText: "Telegram",
          type: 2,
        },
        {
          itemIcon: require("@/assets/imgs/head/community/community-icon3.png"),
          itemText: "Twitter",
          type: 3,
        },
        // {
        //   itemIcon: require("@/assets/imgs/head/community/community-icon4.png"),
        //   itemText: "Reddit",
        //   type: 4,
        // },
        // {
        //   itemIcon: require("@/assets/imgs/head/community/community-icon5.png"),
        //   itemText: "Medium",
        //   type: 5,
        // },
        {
          itemIcon: require("@/assets/imgs/head/community/community-icon6.png"),
          itemText: "Youtube",
          type: 6,
        },
      ],
      menuMoreList: [
        //   {
        //   itemIcon: require("@/assets/imgs/head/community/more-icon5.png"),
        //   itemText: "DMP",
        //   type: 5,
        // },
        {
          itemText: "About us",
          type: 1,
        },
        {
          itemText: "Whitepaper",
          type: 2,
        },
        // {
        //   itemText: "FAQ",
        //   type: 3,
        // },
        {
          itemText: "Download",
          type: 4,
        },
      ],
      earnList: [
        //   {
        //   itemIcon: require("@/assets/imgs/head/community/more-icon5.png"),
        //   itemText: "DMP",
        //   type: 5,
        // },
        {
          itemText: "FAQ",
          type: 1,
        },
        {
          itemIcon: require("@/assets/imgs/head/community/more-icon6.png"),
          itemText: "DMS",
          type: 2,
        },
        {
          itemIcon: require("@/assets/imgs/head/community/more-icon5.png"),
          itemText: "DMP",
          type: 3,
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
        // state.selectItem = type;
        router.push(e);
        // context.emit("createEgg");
      } else if (type == 3) {
        context.emit("createEgg");
      } else if (type == 4) {
        router.push(e);
      }
    };
    const mouseEnter5 = () => {
      state.mouseListShow5 = true;
    };
    const mouseLeave5 = () => {
      state.mouseListShow5 = false;
    };
    const mouseEnter6 = () => {
      state.mouseListShow6 = true;
    };
    const mouseLeave6 = () => {
      state.mouseListShow6 = false;
    };
    const mouseEnter7 = () => {
      state.mouseListShow7 = true;
    };
    const mouseLeave7 = () => {
      state.mouseListShow7 = false;
    };
    const goCommunity = (item) => {
      if (item.type == 1) {
        // Discord
        window.open("https://discord.gg/BHysnZgJVS", "_blank");
      } else if (item.type == 2) {
        // Telegram
        window.open("https://t.me/dragon_mainland", "_blank");
      } else if (item.type == 3) {
        // Twitter
        window.open("https://twitter.com/DragonMainland", "_blank");
      } else if (item.type == 4) {
        // Reddit
        window.open("https://www.reddit.com/r/DragonMainland/", "_blank");
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
        state.selectItem = 7;
        router.push("/aboutUs");
      } else if (item.type == 2) {
        // https://dragon1164.s3.ap-southeast-1.amazonaws.com/document/DMS_white_paper.pdf
        window.open(
          "https://dragonmainland.s3.ap-southeast-1.amazonaws.com/paper/DMS+White+Paper.pdf",
          "_blank"
        );
      } else if (item.type == 3) {
        window.open(
          "https://dragon-mainland.gitbook.io/dragonmainland/",
          "_blank"
        );
      } else if (item.type == 4) {
        context.emit("createEgg");
      } else if (item.type == 5) {
        state.selectItem = 7;
        router.push("/dmp");
      }
    };
    const goEarn = (item) => {
      if (item.type == 1) {
        window.open(
          "https://dragon-mainland.gitbook.io/dragonmainland/",
          "_blank"
        );
      } else if (item.type == 2) {
        state.selectItem = 8;
        router.push("/dms");
      } else if (item.type == 3) {
        state.selectItem = 8;
        router.push("/dmp");
      }
    };

    return {
      ...toRefs(state),
      count,
      goPath,
      mouseEnter5,
      mouseLeave5,
      mouseEnter6,
      mouseLeave6,
      mouseEnter7,
      mouseLeave7,
      goCommunity,
      goMore,
      goEarn,
    };
  },
};
</script>

<style lang="less" scoped >
.head {
  width: 100%;
  // height: 89px;
  height: 90px;
  z-index: 300;
  display: flex;
  justify-content: center;
  .head-wrap {
    min-width: 1440px;
    height: 100%;
    padding: 0 0px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("../assets/imgs/head/head-bc.png");
    .head-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 71px;
      .icon {
        cursor: pointer;
        img {
          width: 151px;
          height: 72px;
          transform: scale(0.7);
        }
      }
      .menu-wrap {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        font-size: 16px;
        font-weight: 500;
        .menu-item1 {
          position: relative;
          cursor: pointer;
          white-space: nowrap;
          margin-right: 20px;
          // margin-right: 10px;
          display: flex;
          align-items: center;
          min-width: 48px;
          height: 40px;
          border-radius: 4px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-left: 24px;
          padding-right: 24px;
          .item-img {
            display: flex;
            align-items: center;
            // margin-top: 2px;
            img {
              margin-left: 5px;
              width: 18px;
              height: 18px;
            }
            .item-img-up {
              -ms-transform: rotate(180deg); /* IE 9 */
              -webkit-transform: rotate(180deg); /* Safari and Chrome */
              transform: rotate(180deg);
            }
          }

          span {
            font-size: 16px;
            font-family: GothamRounded-Medium, GothamRounded;
            font-weight: 500;
            color: #ffffff;
            line-height: 19px;
            text-shadow: 0px 2px 0px rgba(76, 18, 0, 0.48);
          }
        }
        .menu-item-hover1 {
          background: linear-gradient(
            to right,
            rgba(76, 17, 0, 0.4) 0%,
            rgba(76, 17, 0, 0.08) 50%,
            rgba(76, 17, 0, 0.4) 100%
          );

          span {
            font-size: 16px;
            font-family: GothamRounded-Medium;
            color: #ffffff;
            opacity: 1;
          }
        }
        .menu-item1:hover {
          background: linear-gradient(
            to right,
            rgba(76, 17, 0, 0.3) 0%,
            rgba(76, 17, 0, 0.08) 50%,
            rgba(76, 17, 0, 0.3) 100%
          );

          span {
            font-size: 16px;
            font-family: GothamRounded-Medium;
            color: #ffffff;
            opacity: 1;
          }
        }

        .menu-item2 {
          position: relative;
          cursor: pointer;
          white-space: nowrap;
          margin-right: 20px;
          display: flex;
          align-items: center;
          .item-img {
            display: flex;
            align-items: center;
            img {
              margin-left: 5px;
              width: 18px;
              height: 18px;
            }
          }

          span {
            font-size: 16px;
            font-family: GothamRounded-Medium, GothamRounded;
            color: #ffffff;
            opacity: 0.68;
          }
        }
        .menu-item-hover2 {
          span {
            font-size: 16px;
            font-family: GothamRounded-Bold, GothamRounded;
            font-weight: bold;
            color: #ffffff;
            opacity: 1;
          }
        }
        .menu-item2:hover {
          span {
            font-size: 16px;
            font-family: GothamRounded-Medium, GothamRounded;
            // font-weight: bold;
            color: #ffffff;
            opacity: 1;
          }
        }

        .menu-item3 {
          position: relative;
          cursor: pointer;
          white-space: nowrap;
          margin-right: 20px;
          display: flex;
          align-items: center;
          .item-img {
            display: flex;
            align-items: center;
            img {
              margin-left: 5px;
              width: 18px;
              height: 18px;
            }
          }

          span {
            font-size: 16px;
            font-family: GothamRounded-Medium, GothamRounded;
            color: #ffffff;
            opacity: 0.68;
          }
        }
        .menu-item-hover3 {
          span {
            font-size: 16px;
            font-family: GothamRounded-Bold, GothamRounded;
            font-weight: bold;
            color: #ffffff;
            opacity: 1;
          }
        }
        .menu-item3:hover {
          span {
            font-size: 16px;
            font-family: GothamRounded-Medium, GothamRounded;
            // font-weight: bold;
            color: #ffffff;
            opacity: 1;
          }
        }

        .menu-item4 {
          position: relative;
          cursor: pointer;
          white-space: nowrap;
          margin-right: 20px;
          display: flex;
          align-items: center;
          .item-img {
            display: flex;
            align-items: center;
            img {
              margin-left: 5px;
              width: 18px;
              height: 18px;
            }
          }

          span {
            font-size: 16px;
            font-family: GothamRounded-Medium, GothamRounded;
            color: #ffffff;
            opacity: 0.68;
          }
        }
        .menu-item-hover4 {
          span {
            font-size: 16px;
            font-family: GothamRounded-Bold, GothamRounded;
            font-weight: bold;
            color: #ffffff;
            opacity: 1;
          }
        }
        .menu-item4:hover {
          span {
            font-size: 16px;
            font-family: GothamRounded-Medium, GothamRounded;
            // font-weight: bold;
            color: #ffffff;
            opacity: 1;
          }
        }

        .menu-item5 {
          position: relative;
          cursor: pointer;
          white-space: nowrap;
          margin-right: 20px;
          position: relative;
          display: flex;
          align-items: center;
          .item-img {
            display: flex;
            align-items: center;
            img {
              margin-left: 5px;
              width: 18px;
              height: 18px;
            }
          }

          span {
            font-size: 16px;
            font-family: GothamRounded-Medium, GothamRounded;
            color: #2e0b00;
            opacity: 0.68;
          }
        }
        .menu-item-hover5 {
          span {
            font-size: 16px;
            font-family: GothamRounded-Bold, GothamRounded;
            font-weight: bold;
            color: #2e0b00;
            opacity: 1;
          }
        }
        .menu-item5:hover {
          span {
            font-size: 16px;
            font-family: GothamRounded-Medium, GothamRounded;
            // font-weight: bold;
            color: #2e0b00;
            opacity: 1;
          }
        }

        .menu-item6 {
          position: relative;
          cursor: pointer;
          white-space: nowrap;
          margin-right: 20px;
          // margin-right: 10px;
          display: flex;
          align-items: center;
          min-width: 48px;
          height: 40px;
          border-radius: 4px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-left: 24px;
          padding-right: 24px;
          .item-img {
            display: flex;
            align-items: center;
            // margin-top: 2px;
            img {
              margin-left: 5px;
              width: 18px;
              height: 18px;
            }
            .item-img-up {
              -ms-transform: rotate(180deg); /* IE 9 */
              -webkit-transform: rotate(180deg); /* Safari and Chrome */
              transform: rotate(180deg);
            }
          }

          span {
            font-size: 16px;
            font-family: GothamRounded-Medium, GothamRounded;
            font-weight: 500;
            color: #ffffff;
            line-height: 19px;
            text-shadow: 0px 2px 0px rgba(76, 18, 0, 0.48);
          }
        }
        .menu-item-hover6 {
          background: linear-gradient(
            to right,
            rgba(76, 17, 0, 0.4) 0%,
            rgba(76, 17, 0, 0.08) 50%,
            rgba(76, 17, 0, 0.4) 100%
          );

          span {
            font-size: 16px;
            font-family: GothamRounded-Medium;
            color: #ffffff;
            opacity: 1;
          }
        }
        .menu-item6:hover {
          background: linear-gradient(
            to right,
            rgba(76, 17, 0, 0.3) 0%,
            rgba(76, 17, 0, 0.08) 50%,
            rgba(76, 17, 0, 0.3) 100%
          );

          span {
            font-size: 16px;
            font-family: GothamRounded-Medium;
            color: #ffffff;
            opacity: 1;
          }
        }
        .selectItem-list5 {
          position: absolute;
          top: 30px;
          left: -10px;
          width: 186px;
          min-height: 284px;
          z-index: 9999;
          .selectItem-list-wrap {
            // margin-top: 31px;
            margin-top: 20px;
            // padding-top: 16px;
            // padding-bottom: 16px;
            border-radius: 4px;
            background-repeat: no-repeat;
            background-size: cover;
            background-image: url("../assets/imgs/head/sub-menu-bc.png");
            .selectItem-list-item {
              display: flex;
              align-items: center;
              height: 44px;
              .selectItem-list-item-icon {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-left: 16px;
                margin-right: 10px;
                img {
                  width: 44px;
                  height: 44px;
                }
              }
              .selectItem-list-item-text {
                font-size: 14px;
                font-family: GothamRounded-Book, GothamRounded;
                font-weight: normal;
                color: #ffffff;
                opacity: 0.83;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
              }
            }
            .selectItem-list-item:first-child {
              border-radius: 4px 4px 0 0;
            }
            .selectItem-list-item:last-child {
              border-radius: 0 0 4px 4px;
            }

            .selectItem-list-item:hover {
              //  background: #333332;
              background: linear-gradient(
                to right,
                rgba(76, 17, 0, 0.3) 0%,
                rgba(76, 17, 0, 0.08) 50%,
                rgba(76, 17, 0, 0.3) 100%
              );
            }
          }
        }
        .selectItem-list6 {
          position: absolute;
          top: 30px;
          left: -50px;
          // width: 160px;
          // min-height: 160px;
          width: 186px;
          height: 284px;
          border-radius: 4px;
          z-index: 9999;

          .selectItem-list-wrap {
            // width: calc(186px * 0.9) ;
            // height:calc(284px* 0.75) ;
            border-radius: 4px;
            margin-top: 20px;
            background-repeat: no-repeat;
            background-size: cover;
            background-image: url("../assets/imgs/head/sub-menu-bc.png");
            .selectItem-list-item {
              display: flex;
              align-items: center;
              height: 40px;
              .selectItem-list-item-icon {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-left: 8px;
                img {
                  width: 44px;
                  height: 44px;
                }
              }
              .selectItem-list-item-text {
                margin-left: 24px;
                font-size: 14px;
                font-family: GothamRounded-Book, GothamRounded;
                font-weight: normal;
                color: #ffffff;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0.83;
              }
            }
            .selectItem-list-item:first-child {
              border-radius: 4px 4px 0 0;
            }
            .selectItem-list-item:last-child {
              border-radius: 0 0 4px 4px;
              //  margin-left: 0px;
              .selectItem-list-item-text {
                //  margin-left: 0px;
              }
            }

            .selectItem-list-item:hover {
              // background: #333332;
              background: linear-gradient(
                to right,
                rgba(76, 17, 0, 0.3) 0%,
                rgba(76, 17, 0, 0.08) 50%,
                rgba(76, 17, 0, 0.3) 100%
              );
            }
          }
        }

        .selectItem-list7 {
          position: absolute;
          top: 30px;
          left: 0px;
          // width: 160px;
          // min-height: 160px;
          // width: 186px;
          // height: 284px;
          border-radius: 4px;
          z-index: 9999;

          .selectItem-list-wrap {
            width: calc(186px * 0.9);
            height: calc(284px * 0.45);
            border-radius: 4px;
            margin-top: 20px;
            background-repeat: no-repeat;
            background-size: cover;
            background-image: url("../assets/imgs/head/sub-menu-bc.png");
            .selectItem-list-item {
              display: flex;
              align-items: center;
              height: 40px;
              .selectItem-list-item-icon {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-left: 8px;
                img {
                  width: 44px;
                  height: 44px;
                }
              }
              .selectItem-list-item-text {
                margin-left: 0px;
                font-size: 14px;
                font-family: GothamRounded-Book, GothamRounded;
                font-weight: normal;
                color: #ffffff;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0.83;
              }
            }
            .selectItem-list-item:first-child {
              border-radius: 4px 4px 0 0;
              .selectItem-list-item-text {
                margin-left: 50px;
              }
            }
            .selectItem-list-item:last-child {
              border-radius: 0 0 4px 4px;
              .selectItem-list-item-text {
              }
            }

            .selectItem-list-item:hover {
              // background: #333332;
              background: linear-gradient(
                to right,
                rgba(76, 17, 0, 0.3) 0%,
                rgba(76, 17, 0, 0.08) 50%,
                rgba(76, 17, 0, 0.3) 100%
              );
            }
          }
        }

        .menu-item7 {
          position: relative;
          cursor: pointer;
          white-space: nowrap;
          //  margin-right: 24px;
          margin-right: 20px;
          display: flex;
          align-items: center;
          min-width: 48px;
          height: 40px;
          border-radius: 4px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-left: 24px;
          padding-right: 24px;
          .item-img {
            display: flex;
            align-items: center;
            // margin-top: 2px;
            img {
              margin-left: 5px;
              width: 18px;
              height: 18px;
            }
            .item-img-up {
              -ms-transform: rotate(180deg); /* IE 9 */
              -webkit-transform: rotate(180deg); /* Safari and Chrome */
              transform: rotate(180deg);
            }
          }

          span {
            font-size: 16px;
            font-family: GothamRounded-Medium, GothamRounded;
            font-weight: 500;
            color: #ffffff;
            line-height: 19px;
            text-shadow: 0px 2px 0px rgba(76, 18, 0, 0.48);
          }
        }
        .menu-item-hover7 {
          background: linear-gradient(
            to right,
            rgba(76, 17, 0, 0.4) 0%,
            rgba(76, 17, 0, 0.08) 50%,
            rgba(76, 17, 0, 0.4) 100%
          );

          span {
            font-size: 16px;
            font-family: GothamRounded-Medium;
            color: #ffffff;
            opacity: 1;
          }
        }
        .menu-item7:hover {
          background: linear-gradient(
            to right,
            rgba(76, 17, 0, 0.3) 0%,
            rgba(76, 17, 0, 0.08) 50%,
            rgba(76, 17, 0, 0.3) 100%
          );

          span {
            font-size: 16px;
            font-family: GothamRounded-Medium;
            color: #ffffff;
            opacity: 1;
          }
        }

        .menu-item8 {
          position: relative;
          cursor: pointer;
          white-space: nowrap;
          //  margin-right: 24px;
          margin-right: 20px;
          display: flex;
          align-items: center;
          min-width: 48px;
          height: 40px;
          border-radius: 4px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-left: 24px;
          padding-right: 24px;
          .item-img {
            display: flex;
            align-items: center;
            // margin-top: 2px;
            img {
              margin-left: 5px;
              width: 18px;
              height: 18px;
            }
            .item-img-up {
              -ms-transform: rotate(180deg); /* IE 9 */
              -webkit-transform: rotate(180deg); /* Safari and Chrome */
              transform: rotate(180deg);
            }
          }

          span {
            font-size: 16px;
            font-family: GothamRounded-Medium, GothamRounded;
            font-weight: 500;
            color: #ffffff;
            line-height: 19px;
            text-shadow: 0px 2px 0px rgba(76, 18, 0, 0.48);
          }
        }
        .menu-item-hover8 {
          background: linear-gradient(
            to right,
            rgba(76, 17, 0, 0.4) 0%,
            rgba(76, 17, 0, 0.08) 50%,
            rgba(76, 17, 0, 0.4) 100%
          );

          span {
            font-size: 16px;
            font-family: GothamRounded-Medium;
            color: #ffffff;
            opacity: 1;
          }
        }
        .menu-item8:hover {
          background: linear-gradient(
            to right,
            rgba(76, 17, 0, 0.3) 0%,
            rgba(76, 17, 0, 0.08) 50%,
            rgba(76, 17, 0, 0.3) 100%
          );

          span {
            font-size: 16px;
            font-family: GothamRounded-Medium;
            color: #ffffff;
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>
