

<template>
  <div class="main">
    <div class="top">
      <div class="left">1800 Dragons</div>
      <div class="right">
        <selectList
          :selectList="selectList1"
          :selectItem="selectItem1"
          :selectListShow="selectListShow1"
        ></selectList>
        <selectList
          :selectList="selectList2"
          :selectItem="selectItem1"
          :selectListShow="selectListShow1"
        ></selectList>
      </div>
    </div>
    <div class="content">
      <div class="wrap">
        <div
          class="item"
          v-for="(item, index) in dragonList"
          :key="index"
          @click="goDetail(item)"
        >
          <div
            v-if="item.status == 2 && item.sale == 1"
            class="item-status3 item-selected"
          >
            <div class="item-wrap">
              <div
                class="top-color"
                :class="'top-color-status' + dragonLocalTypeList[item.clazz]"
              >
                # {{ item.no }}
              </div>
              <div class="top-breed">
                Breed count: {{ item.breedCount || 0 }}
              </div>
              <div class="top-ce">
                <div class="top-ce-img">
                  <img :src="dragonClazzImgHandle(item.clazz)" alt="" />
                </div>

                <div class="top-ce-des">CE: {{ item.ce }}</div>
              </div>
              <div class="mid-egg">
                <div class="egg-img">
                  <dragonCreate
                    ref="dragonCreate"
                    :dragonImgEye="createDragon(item.parts[0])"
                    :dragonImgWing="createDragon(item.parts[4])"
                    :dragonImgHorn="createDragon(item.parts[2])"
                    :dragonImgBody="createDragon(item.parts[6])"
                    :dragonImgTotems="createDragon(item.parts[1])"
                    :dragonImgEar="createDragon(item.parts[3])"
                    :dragonImgTail="createDragon(item.parts[5])"
                  ></dragonCreate>
                </div>
              </div>
              <div class="mid-bottom">
                <div class="mid-bottom-fh">
                  <span>+</span>
                  <span>+</span>
                </div>
                <div class="mid-bottom-number">0.065</div>
                <div class="mid-bottom-price">$212</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from "vue";
// import { useRouter } from "vue-router";
import selectList from "@/components/selectList/selectList.vue";
import markrtPlaceHandle from "../use/dragonList.js";

export default {
  name: "marketPlace",
  components: {
    selectList,
  },
  setup() {
    //  const router = useRouter();
    const state = reactive({});
    onMounted(() => {
      init();
    });
    const {
      marketPlaceState,
      handleSelect,
      handleSelectLeave,
      selectItem,
      init,
    } = markrtPlaceHandle();

    return {
      ...toRefs(state),
      ...toRefs(marketPlaceState),
      handleSelect,
      handleSelectLeave,
      selectItem,
      init,
    };
  },
};
</script>

<style lang="less" scoped >
.main {
  padding-left: 40px;
  padding-right: 60px;
  .top {
    display: flex;
    justify-content: space-between;
    .left {
      font-size: 28px;
      font-family: GothamRounded-Medium, GothamRounded;
      font-weight: 500;
      color: #ffffff;
    }
    .right {
      display: flex;
      justify-content: space-between;
    }
  }
  .content {
    margin-top: 30px;
    display: flex;
    align-content: flex-start;
    flex-flow: row wrap;
    .item {
      cursor: pointer;
      width: 222px;
      height: 311px;
      flex: 1;
      max-width: 222px;
      min-width: 222px;
      margin-right: 18px;
      margin-bottom: 20px;
      .top-color-status1 {
        background: #d58047;
      }
      .top-color-status2 {
        background: #d5b32d;
      }
      .top-color-status3 {
        background: #44a3cf;
      }
      .top-color-status4 {
        background: #53b372;
      }
      .top-color-status5 {
        background: #926b59;
      }
      .item-selected:hover {
        background-color: #1a1716;
      }
      .item-status3 {
        width: 222px;
        height: 311px;
        background: #282523;
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.12);

        .item-wrap {
          margin: 12px;
        }

        .top-color {
          width: 68px;
          height: 20px;
          border-radius: 4px;
          font-size: 14px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          color: #ffffff;
          line-height: 17px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .top-breed {
          margin-top: 8px;
          font-size: 12px;
          font-family: GothamRounded-Book, GothamRounded;
          font-weight: normal;
          color: #ffffff;
          line-height: 14px;
          opacity: 0.48;
        }
        .top-ce {
          margin-top: 10px;
          display: flex;
          align-items: center;
          .top-ce-img {
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            img {
              width: 20px;
              height: 20px;
            }
          }
          .top-ce-des {
            margin-left: 5px;
            font-size: 12px;
            font-family: GothamRounded-Book, GothamRounded;
            font-weight: normal;
            color: #ffffff;
            line-height: 14px;
            opacity: 0.48;
          }
        }
        .mid-egg {
          position: relative;
          width: 197px;
          height: 177px;
          .egg-img {
            display: flex;
            justify-content: center;
            img {
              width: calc(602px * 0.3);
              height: calc(536px * 0.3);
            }
          }
          .egg-des {
            margin-top: -5px;
            display: flex;
            justify-content: center;
            font-size: 12px;
            font-family: GothamRounded-Book, GothamRounded;
            font-weight: normal;
            color: #ffffff;
            line-height: 14px;
            opacity: 0.48;
            // width: 222px;
          }
        }
        .mid-bottom {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 20px;
          font-family: GothamRounded-Book, GothamRounded;
          font-weight: normal;
          color: #ffffff;
          .mid-bottom-fh {
            display: flex;
            flex-direction: column;
            font-size: 12px;
            font-family: GothamRounded-Book, GothamRounded;
            font-weight: normal;
            color: #ffffff;
          }
          .mid-bottom-number {
            margin-left: 8px;
          }
          .mid-bottom-price {
            margin-left: 8px;
            font-size: 14px;
            font-family: GothamRounded-Book, GothamRounded;
            font-weight: normal;
            color: #ffffff;
            opacity: 0.48;
          }
        }
      }
    }
    .item:hover {
      background: #141313;
    }
  }
}
</style>