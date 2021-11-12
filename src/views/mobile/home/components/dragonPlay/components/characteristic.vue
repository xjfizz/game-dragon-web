
<template>
  <div class="head">
    <div class="content">
      <div class="content-left">
        <div class="content-left-wrap">
          <!-- 龙身 body -->
          <div class="content-left-item1" @mouseleave="mouseleave()">
            <div class="item item-hover">
              <div class="item-select-left" v-if="selectItem == 1">
                <div class="item-select-left-wrap">
                  <div
                    class="item-img"
                    v-for="(item, index) in dragon.body"
                    :key="index"
                    @click="selectParts(item)"
                  >
                    <img :src="item.url" />
                  </div>
                </div>
              </div>
              <img
                @mouseenter="mouseenter(1)"
                :src="dragonSelect.body.url || dragon.body[0].url"
              />
            </div>
          </div>
          <!-- 龙眼 eye -->
          <div class="content-left-item2" @mouseleave="mouseleave()">
            <div class="item item-hover">
              <div class="item-select-left" v-if="selectItem == 2">
                <div class="item-select-left-wrap">
                  <div
                    class="item-img"
                    v-for="(item, index) in dragon.eye"
                    :key="index"
                    @click="selectParts(item)"
                  >
                    <img :src="item.url" />
                  </div>
                </div>
              </div>
              <img
                @mouseenter="mouseenter(2)"
                :src="dragonSelect.eye.url || dragon.eye[0].url"
              />
            </div>
          </div>
          <!-- 龙耳 ear -->
          <div class="content-left-item3" @mouseleave="mouseleave()">
            <div class="item item-hover">
              <div class="item-select-left" v-if="selectItem == 3">
                <div class="item-select-left-wrap">
                  <div
                    class="item-img"
                    v-for="(item, index) in dragon.ear"
                    :key="index"
                    @click="selectParts(item)"
                  >
                    <img :src="item.url" />
                  </div>
                </div>
              </div>
              <img
                @mouseenter="mouseenter(3)"
                :src="dragonSelect.ear.url || dragon.ear[0].url"
              />
            </div>
          </div>
          <!-- 龙角 horn -->
          <div class="content-left-item4" @mouseleave="mouseleave()">
            <div class="item item-hover">
              <div class="item-select-left" v-if="selectItem == 4">
                <div class="item-select-left-wrap">
                  <div
                    class="item-img"
                    v-for="(item, index) in dragon.horn"
                    :key="index"
                    @click="selectParts(item)"
                  >
                    <img :src="item.url" />
                  </div>
                </div>
              </div>
              <img
                @mouseenter="mouseenter(4)"
                :src="dragonSelect.horn.url || dragon.horn[0].url"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="content-mid" ref="imgDownload">
        <!-- <img src="@/assets/imgs/dragonPlay/characteristic/dragon.png" /> -->
        <dragonCreate
          ref="dragonCreate"
          v-if="dragon.eye[0].createUrl"
          :dragonImgEye="dragonSelect.eye.createUrl || dragon.eye[0].createUrl"
          :dragonImgWing="
            dragonSelect.wing.createUrl || dragon.wing[0].createUrl
          "
          :dragonImgHorn="
            dragonSelect.horn.createUrl || dragon.horn[0].createUrl
          "
          :dragonImgBody="
            dragonSelect.body.createUrl || dragon.body[0].createUrl
          "
          :dragonImgTotems="
            dragonSelect.totems.createUrl || dragon.totems[0].createUrl
          "
          :dragonImgEar="dragonSelect.ear.createUrl || dragon.ear[0].createUrl"
          :dragonImgTail="
            dragonSelect.tail.createUrl || dragon.tail[0].createUrl
          "
        ></dragonCreate>
      </div>
      <div class="content-right">
        <div class="content-right-wrap">
          <div class="content-right-item1" @mouseleave="mouseleave()">
            <!-- 龙翅膀 wing -->
            <div class="item item-hover">
              <div class="item-select-right" v-if="selectItem == 5">
                <div class="item-select-right-wrap">
                  <div
                    class="item-img"
                    v-for="(item, index) in dragon.wing"
                    :key="index"
                    @click="selectParts(item)"
                  >
                    <img :src="item.url" />
                  </div>
                </div>
              </div>
              <img
                @mouseenter="mouseenter(5)"
                :src="dragonSelect.wing.url || dragon.wing[0].url"
              />
              <!-- <img src="@/assets/imgs/dragonPlay/characteristic/dragon.png" /> -->
            </div>
          </div>
          <!-- 龙图腾 totems -->
          <div class="content-right-item2" @mouseleave="mouseleave()">
            <div class="item item-hover">
              <div class="item-select-right" v-if="selectItem == 6">
                <div class="item-select-right-wrap">
                  <div
                    class="item-img"
                    v-for="(item, index) in dragon.totems"
                    :key="index"
                    @click="selectParts(item)"
                  >
                    <img :src="item.url" />
                  </div>
                </div>
              </div>
              <img
                @mouseenter="mouseenter(6)"
                :src="dragonSelect.totems.url || dragon.totems[0].url"
              />
            </div>
          </div>
          <!-- 龙尾巴 tail -->
          <div class="content-right-item3" @mouseleave="mouseleave()">
            <div class="item item-hover">
              <div class="item-select-right" v-if="selectItem == 7">
                <div class="item-select-right-wrap">
                  <div
                    class="item-img"
                    v-for="(item, index) in dragon.tail"
                    :key="index"
                    @click="selectParts(item)"
                  >
                    <img :src="item.url" />
                  </div>
                </div>
              </div>
              <img
                @mouseenter="mouseenter(7)"
                :src="dragonSelect.tail.url || dragon.tail[0].url"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-rand" @click="refreshDragon">
        <span>Randomize</span>
        <img src="@/assets/imgs/dragonPlay/characteristic/refresh-rand.png" />
      </div>
      <div class="bottom-down" @click="createImg">
        <img src="@/assets/imgs/dragonPlay/characteristic/down-btn.png" />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, ref } from "vue";
import dragonCreate from "../../../../dragon/compnonets/indexCreate.vue";
import html2canvas from "html2canvas";

export default {
  components: {
    dragonCreate,
  },
  props: {
    classHeader: {
      type: Object,
      default: () => {},
    },
  },
  setup() {
    const dragonCreate = ref(null);
    // const imgDownload = ref(null)
    const state = reactive({
      selectItem: null,
      dragonSelect: {
        // 选择的龙对象
        body: {},
        eye: {},
        ear: {},
        horn: {},
        wing: {},
        totems: {},
        tail: {},
      },
      dragon: {
        body: [
          {
            key: 1, // 龙类型
            partKey: 1, // 部件类型
            url: require("@/assets/imgs/dragonPlay/characteristic/dragon-splicing/body/dragon-body1.png"),
            createUrl: require("@/assets/imgs/dragonPlay/characteristic/dragon-splicing/body/createDragon/dragon-body1.png"),
          },
          {
            key: 2,
            partKey: 1, // 部件类型
            url: require("@/assets/imgs/dragonPlay/characteristic/dragon-splicing/body/dragon-body2.png"),
            createUrl: require("@/assets/imgs/dragonPlay/characteristic/dragon-splicing/body/createDragon/dragon-body2.png"),
          },
        ],
        eye: [
          {
            key: 1,
            partKey: 2, // 部件类型
            url: require("@/assets/imgs/dragonPlay/characteristic/dragon-splicing/eye/dragon-eye1.png"),
            createUrl: require("@/assets/imgs/dragonPlay/characteristic/dragon-splicing/eye/createDragon/dragon-eye1.png"),
          },
          {
            key: 2,
            partKey: 2, // 部件类型
            url: require("@/assets/imgs/dragonPlay/characteristic/dragon-splicing/eye/dragon-eye2.png"),
            createUrl: require("@/assets/imgs/dragonPlay/characteristic/dragon-splicing/eye/createDragon/dragon-eye2.png"),
          },
        ],
        ear: [
          {
            key: 1,
            partKey: 3, // 部件类型
            url: require("@/assets/imgs/dragonPlay/characteristic/dragon-splicing/ear/dragon-ear1.png"),
            createUrl: require("@/assets/imgs/dragonPlay/characteristic/dragon-splicing/ear/createDragon/dragon-ear1.png"),
          },
          {
            key: 2,
            partKey: 3, // 部件类型
            url: require("@/assets/imgs/dragonPlay/characteristic/dragon-splicing/ear/dragon-ear2.png"),
            createUrl: require("@/assets/imgs/dragonPlay/characteristic/dragon-splicing/ear/createDragon/dragon-ear2.png"),
          },
        ],
        horn: [
          {
            key: 1,
            partKey: 4, // 部件类型
            url: require("@/assets/imgs/dragonPlay/characteristic/dragon-splicing/horn/dragon-horn1.png"),
            createUrl: require("@/assets/imgs/dragonPlay/characteristic/dragon-splicing/horn/createDragon/dragon-horn1.png"),
          },
          {
            key: 2,
            partKey: 4, // 部件类型
            url: require("@/assets/imgs/dragonPlay/characteristic/dragon-splicing/horn/dragon-horn2.png"),
            createUrl: require("@/assets/imgs/dragonPlay/characteristic/dragon-splicing/horn/createDragon/dragon-horn2.png"),
          },
        ],
        wing: [
          {
            key: 1,
            partKey: 5, // 部件类型
            url: require("@/assets/imgs/dragonPlay/characteristic/dragon-splicing/wing/dragon-wing1.png"),
            createUrl: require("@/assets/imgs/dragonPlay/characteristic/dragon-splicing/wing/createDragon/dragon-wing1.png"),
          },
          {
            key: 2,
            partKey: 5, // 部件类型
            url: require("@/assets/imgs/dragonPlay/characteristic/dragon-splicing/wing/dragon-wing2.png"),
            createUrl: require("@/assets/imgs/dragonPlay/characteristic/dragon-splicing/wing/createDragon/dragon-wing2.png"),
          },
        ],
        totems: [
          {
            key: 1,
            partKey: 6, // 部件类型
            url: require("@/assets/imgs/dragonPlay/characteristic/dragon-splicing/totems/dragon-totems1.png"),
            createUrl: require("@/assets/imgs/dragonPlay/characteristic/dragon-splicing/totems/createDragon/dragon-totems1.png"),
          },
          {
            key: 2,
            partKey: 6, // 部件类型
            url: require("@/assets/imgs/dragonPlay/characteristic/dragon-splicing/totems/dragon-totems2.png"),
            createUrl: require("@/assets/imgs/dragonPlay/characteristic/dragon-splicing/totems/createDragon/dragon-totems2.png"),
          },
        ],
        tail: [
          {
            key: 1,
            partKey: 7, // 部件类型
            url: require("@/assets/imgs/dragonPlay/characteristic/dragon-splicing/tail/dragon-tail1.png"),
            createUrl: require("@/assets/imgs/dragonPlay/characteristic/dragon-splicing/tail/createDragon/dragon-tail1.png"),
          },
          {
            key: 2,
            partKey: 7, // 部件类型
            url: require("@/assets/imgs/dragonPlay/characteristic/dragon-splicing/tail/dragon-tail2.png"),
            createUrl: require("@/assets/imgs/dragonPlay/characteristic/dragon-splicing/tail/createDragon/dragon-tail2.png"),
          },
        ],
      },
    });
    onMounted(() => {
      init();
    });
    const init = () => {
      refreshDragon();
    };
    const refreshDragon = () => {
      console.log("0000000000");
      let dragon = {
        body: state.dragon.body[
          Math.floor(Math.random() * state.dragon.body.length)
        ].createUrl,
        eye: state.dragon.eye[
          Math.floor(Math.random() * state.dragon.eye.length)
        ].createUrl,
        ear: state.dragon.ear[
          Math.floor(Math.random() * state.dragon.ear.length)
        ].createUrl,
        horn: state.dragon.horn[
          Math.floor(Math.random() * state.dragon.horn.length)
        ].createUrl,
        wing: state.dragon.wing[
          Math.floor(Math.random() * state.dragon.wing.length)
        ].createUrl,
        totems:
          state.dragon.totems[
            Math.floor(Math.random() * state.dragon.totems.length)
          ].createUrl,
        tail: state.dragon.tail[
          Math.floor(Math.random() * state.dragon.tail.length)
        ].createUrl,
      };
      dragonCreate.value.initDragon(dragon);
    };
    // 初始化一条龙
    const initDragon = (data) => {
      let dragon = {
        body:
          data && data.body.createUrl
            ? data.body.createUrl
            : state.dragon.body[0].createUrl,
        eye:
          data && data.eye.createUrl
            ? data.eye.createUrl
            : state.dragon.eye[0].createUrl,
        ear:
          data && data.ear.createUrl
            ? data.ear.createUrl
            : state.dragon.ear[0].createUrl,
        horn:
          data && data.horn.createUrl
            ? data.horn.createUrl
            : state.dragon.horn[0].createUrl,
        wing:
          data && data.wing.createUrl
            ? data.wing.createUrl
            : state.dragon.wing[0].createUrl,
        totems:
          data && data.totems.createUrl
            ? data.totems.createUrl
            : state.dragon.totems[0].createUrl,
        tail:
          data && data.tail.createUrl
            ? data.tail.createUrl
            : state.dragon.tail[0].createUrl,
      };
      dragonCreate.value.initDragon(dragon);
    };
    // 鼠标移入
    const mouseenter = (e) => {
      state.selectItem = e;
    };
    // 鼠标移入
    const mouseleave = () => {
      state.selectItem = null;
    };
    // 选择部件
    const selectParts = (e) => {
      console.log("e", e);
      if (e.partKey == 1) {
        // 身体
        state.dragonSelect.body = e;
      } else if (e.partKey == 2) {
        // 眼睛
        state.dragonSelect.eye = e;
      } else if (e.partKey == 3) {
        // 耳朵
        state.dragonSelect.ear = e;
      } else if (e.partKey == 4) {
        // 角
        state.dragonSelect.horn = e;
      } else if (e.partKey == 5) {
        // 翅膀
        state.dragonSelect.wing = e;
      } else if (e.partKey == 6) {
        // 图腾
        state.dragonSelect.totems = e;
      } else if (e.partKey == 7) {
        // 尾巴
        state.dragonSelect.tail = e;
      }
      initDragon(state.dragonSelect);
      console.log("state.dragonSelect", state.dragonSelect);
      console.log("state.dragonSelect", state.dragonSelect.body.createUrl);
    };

    // 生成图片
    const createImg = () => {
      const width = document.querySelector(".dragon-main").offsetWidth;
      const height = document.querySelector(".dragon-main").offsetHeight + 30;
      html2canvas(document.querySelector(".dragon-main"), {
        width,
        height,
        scrollY: 0,
        scrollX: 0,
        backgroundColor: null, //设置图片背景为透明
        dpi: window.devicePixelRatio * 2,
        scale: 1,
        useCORS: true,
      }).then((canvas) => {
        console.log("canvas", canvas);
        const href = canvas.toDataURL("image/png");
        downloadImage(href);
      });
    };
    const downloadImage = (url) => {
      // 如果是在网页中可以直接创建一个 a 标签直接下载
      let a = document.createElement("a");
      a.href = url;
      a.download = "dragon";
      a.click();
    };
    return {
      ...toRefs(state),
      mouseenter,
      mouseleave,
      selectParts,
      dragonCreate,
      initDragon,
      init,
      refreshDragon,
      createImg,
      downloadImage,
    };
  },
};
</script>

<style lang="less" scoped >
.head {
  // background-color: #ff5400;
  // opacity: 0.55;
  // margin-top: 93px;
  width: 100%;
  .content {
    display: flex;
    justify-content: center;
    .item-hover:hover {
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url("../../../../../../assets/imgs/dragonPlay/characteristic/item-bac-selected.png") !important;
    }
    .item-select-left {
      position: absolute;
      width: 440px;
      height: 80px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 40px;
      border: 2px solid rgba(255, 255, 255, 0.1);
      right: 120px;
      .item-select-left-wrap {
        display: flex;
        // justify-content: space-between;
        .item-img {
          margin-left: 5px;
          img {
            width: 80px;
            height: 80px;
          }
        }
      }
    }
    .item-select-right {
      position: absolute;
      width: 440px;
      height: 80px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 40px;
      border: 2px solid rgba(255, 255, 255, 0.1);
      left: 120px;
      .item-select-right-wrap {
        display: flex;
        // justify-content: space-between;
        .item-img {
          margin-left: 5px;
          img {
            width: 80px;
            height: 80px;
          }
        }
      }
    }
    .content-left {
      margin-top: 83px;
      width: 30%;
      .content-left-wrap {
        .content-left-item1 {
          display: flex;
          justify-content: flex-end;
          margin-right: -100px;
          .item {
            position: relative;
            cursor: pointer;
            width: 126px;
            height: 126px;
            background-repeat: no-repeat;
            background-size: cover;
            background-image: url("../../../../../../assets/imgs/dragonPlay/characteristic/item-bac.png");
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 80px;
              height: 80px;
            }
          }
        }
        .content-left-item2 {
          display: flex;
          justify-content: flex-end;
          margin-right: -40px;
          margin-top: -30px;
          .item {
            position: relative;
            cursor: pointer;
            width: 126px;
            height: 126px;
            background-repeat: no-repeat;
            background-size: cover;
            background-image: url("../../../../../../assets/imgs/dragonPlay/characteristic/item-bac.png");
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 80px;
              height: 80px;
            }
          }
        }
        .content-left-item3 {
          display: flex;
          justify-content: flex-end;
          margin-right: -40px;
          margin-top: -30px;
          .item {
            position: relative;
            cursor: pointer;
            width: 126px;
            height: 126px;
            background-repeat: no-repeat;
            background-size: cover;
            background-image: url("../../../../../../assets/imgs/dragonPlay/characteristic/item-bac.png");
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 80px;
              height: 80px;
            }
          }
        }
        .content-left-item4 {
          display: flex;
          justify-content: flex-end;
          margin-right: -100px;
          margin-top: -30px;
          .item {
            position: relative;
            cursor: pointer;
            width: 126px;
            height: 126px;
            background-repeat: no-repeat;
            background-size: cover;
            background-image: url("../../../../../../assets/imgs/dragonPlay/characteristic/item-bac.png");
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 80px;
              height: 80px;
            }
          }
        }
      }
    }
    .content-mid {
      height: 391px;
      // margin-top: 145px;
      width: 40%;
      img {
        width: 436px;
        height: 391px;
      }
    }
    .content-right {
      margin-top: 83px;
      margin-left: -100px;
      width: 30%;
      .content-right-wrap {
        .content-right-item1 {
          display: flex;
          // margin-left: 100px;
          margin-top: 60px;
          .item {
            position: relative;
            cursor: pointer;
            width: 126px;
            height: 126px;
            background-repeat: no-repeat;
            background-size: cover;
            background-image: url("../../../../../../assets/imgs/dragonPlay/characteristic/item-bac.png");
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 80px;
              height: 80px;
            }
          }
        }
        .content-right-item2 {
          display: flex;
          margin-left: 40px;
          margin-top: -30px;
          .item {
            position: relative;
            cursor: pointer;
            width: 126px;
            height: 126px;
            background-repeat: no-repeat;
            background-size: cover;
            background-image: url("../../../../../../assets/imgs/dragonPlay/characteristic/item-bac.png");
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 80px;
              height: 80px;
            }
          }
        }
        .content-right-item3 {
          display: flex;
          //  margin-left: -100px;
          margin-top: -30px;
          .item {
            position: relative;
            cursor: pointer;
            width: 126px;
            height: 126px;
            background-repeat: no-repeat;
            background-size: cover;
            background-image: url("../../../../../../assets/imgs/dragonPlay/characteristic/item-bac.png");
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 80px;
              height: 80px;
            }
          }
        }
      }
    }
  }
  .bottom {
    //margin-top: 40px;
    position: relative;
    z-index: 9999 !important;
    .bottom-rand {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      z-index: 9999 !important;
      span {
        font-size: 24px;
        font-family: GothamRounded-Medium, GothamRounded;
        font-weight: 500;
        color: #ffc763;
        line-height: 32px;
        margin-right: 10px;
      }
      img {
        width: 21px;
        height: 20px;
      }
    }
    .bottom-down {
      margin-top: 32px;
      cursor: pointer;
      img {
        width: 200px;
        height: 80px;
      }
    }
  }
}
</style>
