

<template>
  <div class="main">
    <div class="top">
      <div class="left">{{ pageInfo.total || 0 }} Dragons</div>
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
      <div class="wrap" v-if="dragonList.length > 0">
        <div
          class="item"
          v-for="(item, index) in dragonList"
          :key="index"
          @click="goDetail(item)"
        >
          <div class="item-status3 item-selected">
            <div class="item-wrap">
              <div
                class="top-color"
                :class="
                  'top-color-status' + dragonLocalTypeList[item.heroVo.clazz]
                "
              >
                # {{ item.heroVo.no }}
              </div>
              <div class="top-breed">
                Breed count: {{ item.heroVo.breedCount || 0 }}
              </div>
              <div class="top-ce">
                <div class="top-ce-img">
                  <img :src="dragonClazzImgHandle(item.heroVo.clazz)" alt="" />
                </div>

                <div class="top-ce-des">CE: {{ item.heroVo.ce }}</div>
              </div>
              <div class="mid-egg">
                <div class="egg-img">
                  <dragonCreate
                    ref="dragonCreate"
                    :dragonImgEye="createDragon(item.heroVo.parts[0])"
                    :dragonImgWing="createDragon(item.heroVo.parts[4])"
                    :dragonImgHorn="createDragon(item.heroVo.parts[2])"
                    :dragonImgBody="createDragon(item.heroVo.parts[6])"
                    :dragonImgTotems="createDragon(item.heroVo.parts[1])"
                    :dragonImgEar="createDragon(item.heroVo.parts[3])"
                    :dragonImgTail="createDragon(item.heroVo.parts[5])"
                  ></dragonCreate>
                </div>
              </div>
              <div class="mid-bottom">
                <div class="mid-bottom-fh">
                  <img src="@/assets/imgs/openBox/marketPlace/bnb.png" alt="" />
                </div>
                <div class="mid-bottom-number">{{ item.price || 0 }}</div>
                <div class="mid-bottom-price">$212</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- page -->
      <page
        v-if="pageInfo.totalPages > 1"
        :pageInfo="pageInfo"
        @leftPage="leftPage"
        @rightPage="rightPage"
        @search="search"
      ></page>
      <div v-else class="npData">
        <div class="noData-wrap">
          <div class="no-dragon">
            <img src="@/assets/imgs/myMainland/no-data.png" alt="" />
          </div>
          <div class="no-data-title">No data</div>
          <div class="no-data-des">
            * The marketplace will be open soon, so stay tuned !
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
import myDragon from "@/views/pc/myMainland/use/myDragon";
import dragonCreate from "@/views/pc/myMainland/components/dragonCreate/index.vue";
import page from "@/components/page/index.vue";
export default {
  name: "marketPlace",
  components: {
    selectList,
    dragonCreate,
    page,
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
      leftPage,
      rightPage,
      search,
      goDetail,
    } = markrtPlaceHandle();

    const { dragonClazzImgHandle, createDragon } = myDragon();
    return {
      ...toRefs(state),
      ...toRefs(marketPlaceState),
      handleSelect,
      handleSelectLeave,
      selectItem,
      init,
      dragonClazzImgHandle,
      createDragon,
      leftPage,
      rightPage,
      search,
      goDetail,
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

    .wrap {
      display: flex;
      flex-wrap: wrap;
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
              img {
                width: 44px;
                height: 44px;
              }
            }
            .mid-bottom-number {
              margin-left: 2px;
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
}
</style>