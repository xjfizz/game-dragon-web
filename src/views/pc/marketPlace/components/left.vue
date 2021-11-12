

<template>
  <div class="main">
    <div class="top">
      <div class="top-title">
        <div class="top-title-left">Filter (1)</div>
        <div class="top-title-right">Clear filter</div>
      </div>
      <div class="top-select">
        <div class="top-item-list">
          <div
            class="top-item"
            :class="filterSelectItem == 1 ? 'top-item-select' : ''"
            @click="selectFilterItem(1)"
          >
            General
          </div>
          <div
            class="top-item"
            :class="filterSelectItem == 2 ? 'top-item-select' : ''"
            @click="selectFilterItem(2)"
          >
            Parts
          </div>
          <div
            class="top-item"
            :class="filterSelectItem == 3 ? 'top-item-select' : ''"
            @click="selectFilterItem(3)"
          >
            Stats
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="general" v-if="filterSelectItem == 1">
        <div class="content-item-class">
          <div class="item-title">CLASS</div>
          <div class="item-wrap">
            <div
              class="item"
              v-for="(item, index) in classList"
              :key="index"
              @click="selectClass(item)"
            >
              <div class="select">
                <img
                  v-if="!item.selected"
                  src="@/assets/imgs/marketplace/class/no-selected.png"
                />
                <img
                  v-else
                  src="@/assets/imgs/marketplace/class/selected.png"
                />
              </div>
              <div class="goods">
                <div class="goods-icon">
                  <img :src="item.icon" />
                </div>
                <div class="goods-text">
                  {{ item.text }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="content-item-stage">
          <div class="item-title">STAGE</div>
          <div class="item-wrap">
            <div
              class="item"
              v-for="(item, index) in stageList"
              :key="index"
              @click="selectStage(item)"
            >
              <div class="select">
                <img
                  v-if="!item.selected"
                  src="@/assets/imgs/marketplace/class/no-selected.png"
                />
                <img
                  v-else
                  src="@/assets/imgs/marketplace/class/selected.png"
                />
              </div>
              <div class="goods">
                <div class="goods-text">
                  {{ item.text }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="content-breed">
          <div class="item-title">BREED COUNT</div>
          <div class="item-wrap">
            <div class="item-slider">
              <el-slider
                class="slider"
                v-model="breedValue"
                :show-tooltip="false"
                range
                @change="onChangeBreed"
              ></el-slider>
            </div>
            <div class="item-slider-value">
              <div>{{ breedValue[0] }}</div>
              <div>{{ breedValue[1] }}</div>
            </div>
          </div>
        </div>

        <div class="content-ce">
          <div class="item-title">BREED COUNT</div>
          <div class="item-title-des">CE 1 - CE 1000</div>
          <div class="item-wrap">
            <div class="item-slider">
              <el-slider
                class="slider"
                v-model="ceValue"
                :show-tooltip="false"
                range
                @change="onChangeCe"
              ></el-slider>
            </div>
            <!-- <div class="item-slider-value">
              <span>{{ breedValue[0] }}</span>
              <span>{{ breedValue[1] }}</span>
            </div> -->
          </div>
        </div>

        <div class="content-pureness">
          <div class="item-title">PURENESS</div>

          <div class="item-wrap">
            <div class="item-slider">
              <el-slider
                :max="6"
                class="slider"
                v-model="purenessValue"
                :marks="purenessMarks"
                :show-tooltip="false"
                @change="onChangeCe"
              ></el-slider>
            </div>
            <!-- <div class="item-slider-value">
              <span>{{ breedValue[0] }}</span>
              <span>{{ breedValue[1] }}</span>
            </div> -->
          </div>
        </div>
      </div>

      <div class="parts" v-if="filterSelectItem == 2">
        <div class="top">
          <div class="search">
            <el-input
              v-model="searchValue"
              placeholder="Search parts and abilities"
            >
              <template #prefix>
                <i class="el-input__icon el-icon-search search-icon"></i>
              </template>
            </el-input>
          </div>
        </div>
        <div class="content">
          <div class="content-title">SUGGESTION</div>
          <div class="content-list">
            <div class="item" v-for="(item, index) in searchList" :key="index">
              <div class="left">
                <img :src="item.icon" />
              </div>
              <div class="right">
                <div class="right-top">
                  {{ item.partName }}
                </div>
                <div class="right-bottom">
                  {{ item.dragonName }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="stats" v-if="filterSelectItem == 3">
        <div class="content">
          <div class="item">
            <slider sliderTitle="ATTACK"></slider>
          </div>
          <div class="item">
            <slider sliderTitle="DEFENSE"></slider>
          </div>
          <div class="item">
            <slider sliderTitle="STAMINA"></slider>
          </div>
          <div class="item">
            <slider sliderTitle="SPEED"></slider>
          </div>
          <div class="item">
            <slider sliderTitle="INTELLIGENCE"></slider>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from "vue";
// import { useRouter } from "vue-router";
import slider from "./slider.vue";

export default {
  name: "left",
  components: {
    slider,
  },
  setup() {
    // const router = useRouter();
    const state = reactive({
      filterSelectItem: 1,
      classList: [
        {
          id: 1,
          icon: require("@/assets/imgs/marketplace/class/class-icon1.png"),
          text: "Fire",
        },
        {
          id: 1,
          icon: require("@/assets/imgs/marketplace/class/class-icon2.png"),
          text: "Storm",
        },
        {
          id: 1,
          icon: require("@/assets/imgs/marketplace/class/class-icon3.png"),
          text: "Thunder",
        },
        {
          id: 1,
          icon: require("@/assets/imgs/marketplace/class/class-icon4.png"),
          text: "Water",
        },
        {
          id: 1,
          icon: require("@/assets/imgs/marketplace/class/class-icon5.png"),
          text: "Stone",
        },
      ],
      stageList: [
        {
          id: 1,
          text: "Egg",
        },
        {
          id: 1,
          text: "Adult",
        },
      ],
      breedValue: [40, 80],
      ceValue: [40, 80],
      purenessValue: 3,
      purenessMarks: {
        0: "any",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
      },
      searchValue: "",
      searchList: [
        {
          icon: require("@/assets/imgs/marketplace/parts/wing.png"),
          partName: "Wing",
          deagonName: "Fire Dragon",
        },
        {
          icon: require("@/assets/imgs/marketplace/parts/eye.png"),
          partName: "Eye",
          deagonName: "Fire Dragon",
        },
        {
          icon: require("@/assets/imgs/marketplace/parts/horn.png"),
          partName: "Horn",
          deagonName: "Fire Dragon",
        },
        {
          icon: require("@/assets/imgs/marketplace/parts/ear.png"),
          partName: "Ear",
          deagonName: "Water Dragon",
        },
        {
          icon: require("@/assets/imgs/marketplace/parts/totems.png"),
          partName: "Totem",
          deagonName: "Storm Dragon",
        },
        {
          icon: require("@/assets/imgs/marketplace/parts/tail.png"),
          partName: "Tail",
          deagonName: "Storm Dragon",
        },
        {
          icon: require("@/assets/imgs/marketplace/parts/tail2.png"),
          partName: "Tail",
          deagonName: "Water Dragon",
        },
      ],
      attackSlider: {
        title: "ATTACK",
        list: [40, 80],
      },
    });
    onMounted(() => {});
    const selectFilterItem = (e) => {
      state.filterSelectItem = e;
    };
    const selectClass = (e) => {
      e.selected = !e.selected;
    };
    const selectStage = (e) => {
      e.selected = !e.selected;
    };
    const onChangeBreed = (e) => {
      console.log(e);
    };
    const onChangeCe = (e) => {
      console.log(e);
    };
    return {
      ...toRefs(state),
      selectFilterItem,
      selectClass,
      selectStage,
      onChangeBreed,
      onChangeCe,
    };
  },
};
</script>

<style lang="less" scoped >
.main {
  .top {
    width: 100%;
    .top-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .top-title-left {
        font-size: 20px;
        font-family: GothamRounded-Medium, GothamRounded;
        font-weight: 500;
        color: #ffffff;
        line-height: 24px;
      }
      .top-title-right {
        font-size: 14px;
        font-family: GothamRounded-Book, GothamRounded;
        font-weight: normal;
        color: #ffc763;
        line-height: 17px;
      }
    }
    .top-select {
      margin-top: 24px;
      .top-item-list {
        width: 100%;
        height: 38px;
        // background: rgba(245, 158, 100, 0.18);
        border-radius: 4px;
        border: 1px solid #514d4a;
        display: flex;
        align-items: center;
        .top-item {
          flex: 1;
          height: 38px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-right: 1px solid #514d4a;
          cursor: pointer;
          font-size: 12px;
          font-family: GothamRounded-Book, GothamRounded;
          font-weight: normal;
          color: #ffffff;
        }
        .top-item:last-child {
          border-right: none;
        }
        .top-item:hover {
          background: rgba(245, 158, 100, 0.1);
        }
        .top-item-select {
          background: rgba(245, 158, 100, 0.18);
          //background:#ff5400;
        }
      }
    }
  }
  .content {
    margin-top: 24px;
    .general {
      .content-item-class {
        .item-title {
          font-size: 11px;
          font-family: GothamRounded-Book, GothamRounded;
          font-weight: normal;
          color: #ffffff;
          opacity: 0.48;
        }
        .item-wrap {
          margin-top: 12px;
          display: flex;
          flex-wrap: wrap;
          .item {
            display: flex;
            align-items: center;
            width: 50%;
            margin-bottom: 16px;
            cursor: pointer;
            // justify-content: space-between;
            .select {
              margin-left: 8px;
              width: 20px;
              height: 20px;
              display: flex;
              justify-content: center;
              align-items: center;
              img {
                width: 20px;
                height: 20px;
              }
            }
            .goods {
              display: flex;
              align-items: center;
              margin-left: 8px;
              width: 100%;

              .goods-icon {
                width: 20px;
                height: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                img {
                  width: 20px;
                  height: 20px;
                }
              }
              .goods-text {
                margin-left: 4px;
                font-size: 11px;
                font-family: GothamRounded-Medium, GothamRounded;
                font-weight: 500;
                color: #ffffff;
                display: flex;
                justify-content: center;
                align-items: center;
              }
            }
          }
        }
      }
      .content-item-stage {
        margin-top: 40px;
        .item-title {
          font-size: 11px;
          font-family: GothamRounded-Book, GothamRounded;
          font-weight: normal;
          color: #ffffff;
          opacity: 0.48;
        }
        .item-wrap {
          margin-top: 12px;
          display: flex;
          flex-wrap: wrap;
          .item {
            display: flex;
            align-items: center;
            width: 50%;
            margin-bottom: 16px;
            cursor: pointer;
            // justify-content: space-between;
            .select {
              margin-left: 8px;
              width: 20px;
              height: 20px;
              display: flex;
              justify-content: center;
              align-items: center;
              img {
                width: 20px;
                height: 20px;
              }
            }
            .goods {
              display: flex;
              align-items: center;
              margin-left: 8px;
              width: 100%;

              .goods-icon {
                width: 20px;
                height: 20px;
                img {
                  width: 20px;
                  height: 20px;
                }
              }
              .goods-text {
                margin-left: 8px;
                font-size: 11px;
                font-family: GothamRounded-Medium, GothamRounded;
                font-weight: 500;
                color: #ffffff;
                display: flex;
                justify-content: center;
                align-items: center;
              }
            }
          }
        }
      }
      .content-breed {
        margin-top: 40px;
        .item-title {
          font-size: 11px;
          font-family: GothamRounded-Book, GothamRounded;
          font-weight: normal;
          color: #ffffff;
          opacity: 0.48;
        }
        .item-wrap {
          margin-top: 12px;

          .item-slider {
            .slider {
              /deep/ .el-slider__runway {
                background-color: #1a1716;
                height: 5px;
              }
              /deep/ .el-slider__bar {
                background-color: #f59e64;
                height: 5px;
              }
              /deep/ .el-slider__button {
                width: 12px;
                height: 12px;
                background-color: #dddddd;
                border: 1px solid #ffffff;
              }
            }
          }
          .item-slider-value {
            display: flex;
            justify-content: space-between;
            margin-top: 2px;
            font-size: 11px;
            font-family: GothamRounded-Medium, GothamRounded;
            font-weight: 500;
            color: #ffffff;
          }
        }
      }
      .content-ce {
        margin-top: 40px;
        .item-title {
          font-size: 11px;
          font-family: GothamRounded-Book, GothamRounded;
          font-weight: normal;
          color: #ffffff;
          opacity: 0.48;
        }
        .item-title-des {
          margin-top: 12px;
          font-size: 11px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          color: #ffffff;
        }
        .item-wrap {
          margin-top: 12px;

          .item-slider {
            .slider {
              /deep/ .el-slider__runway {
                background-color: #1a1716;
                height: 5px;
              }
              /deep/ .el-slider__bar {
                background-color: #f59e64;
                height: 5px;
              }
              /deep/ .el-slider__button {
                width: 12px;
                height: 12px;
                background-color: #dddddd;
                border: 1px solid #ffffff;
              }
            }
          }
          .item-slider-value {
            display: flex;
            justify-content: space-between;
            margin-top: 12px;
            font-size: 11px;
            font-family: GothamRounded-Medium, GothamRounded;
            font-weight: 500;
            color: #ffffff;
          }
        }
      }

      .content-pureness {
        margin-top: 40px;
        .item-title {
          font-size: 11px;
          font-family: GothamRounded-Book, GothamRounded;
          font-weight: normal;
          color: #ffffff;
          opacity: 0.48;
        }

        .item-wrap {
          margin-top: 12px;

          .item-slider {
            .slider {
              /deep/ .el-slider__runway {
                background-color: #1a1716;
                height: 5px;
              }
              /deep/ .el-slider__bar {
                // background-color: #f59e64;
                background-color: #1a1716;
                height: 5px;
              }
              /deep/ .el-slider__stop {
                // top: -3px;
                width: 10px;
                height: 10px;
                background: #1a1716;
                border-radius: 10px;
              }
              /deep/ .el-slider__marks-text {
                color: #ffffff;
              }
              /deep/ .el-slider__button {
                width: 12px;
                height: 12px;
                background-color: #dddddd;
                border: 1px solid #ffffff;
              }
            }
          }
          .item-slider-value {
            display: flex;
            justify-content: space-between;
            margin-top: 12px;
            font-size: 11px;
            font-family: GothamRounded-Medium, GothamRounded;
            font-weight: 500;
            color: #ffffff;
          }
        }
      }
    }
    .parts {
      .top {
        .search {
          /deep/ .el-input__inner {
            // width: 271px;
            height: 40px;
            background: #1a1716;
            border-radius: 4px;
            border: 1px solid rgba(255, 255, 255, 0.16);
            color: #ffffff;
            opacity: 0.47;
          }
          /deep/ input::-webkit-input-placeholder {
            opacity: 0.47;
            color: #ffffff;
          }
          /deep/ input::-moz-input-placeholder {
            opacity: 0.47;
            color: #ffffff;
          }
          /deep/ input::-ms-input-placeholder {
            opacity: 0.47;
            color: #ffffff;
          }
          .search-icon {
            color: #ffffff;
          }
        }
      }
      .content {
        .content-title {
          font-size: 11px;
          font-family: GothamRounded-Book, GothamRounded;
          font-weight: normal;
          color: #ffffff;
          opacity: 0.48;
        }
        .content-list {
          margin-top: 21px;
          .item {
            display: flex;
            align-items: center;
            margin-bottom: 24px;
            .left {
              margin-right: 8px;
              img {
                width: 24px;
                height: 24px;
              }
            }
            .right {
              .right-top {
                font-size: 11px;
                font-family: GothamRounded-Medium, GothamRounded;
                font-weight: 500;
                color: #ffffff;
              }
              .right-bottom {
                margin-top: 4px;
                font-size: 11px;
                font-family: GothamRounded-Book, GothamRounded;
                font-weight: normal;
                color: #ffffff;
                opacity: 0.68;
              }
            }
          }
        }
      }
    }
    .stats {
      .content {
        .item {
          margin-bottom: 40px;
        }
      }
    }
  }
}
</style>