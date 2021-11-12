

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
      <div class="item" v-for="(item, index) in dragonList" :key="index">
        <div class="top">
          <div class="top-color" :class="'top-color-type' + item.type">
            <div>{{ item.colorKey }}</div>
          </div>
          <div class="top-breed">
            <div>Breed count: {{ item.breedCount }}</div>
          </div>
          <div class="top-ce">
            <img :src="item.icon" />
            <div class="top-ce-text">CE:</div>
            <div class="top-ce-num">{{ item.ceNum }}</div>
          </div>
        </div>
        <div class="mid">
          <img :src="item.dragonImg" />
        </div>
        <div class="bottom">
          <div class="left">
            <div>+</div>
            <div>+</div>
          </div>
          <div class="mid">
            <div>{{ item.bottmoNum }}</div>
          </div>
          <div class="right">
            <div>${{ item.price }}</div>
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
      init()
    });
    const {marketPlaceState, handleSelect, handleSelectLeave, selectItem,init } = markrtPlaceHandle();

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
      padding: 12px 12px 18px 12px;
      min-width: 221px;
      min-height: 311px;
      background: #1a1716;
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.12);
      margin-right: 24px;
      margin-bottom: 24px;
      cursor: pointer;
      .top {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        .top-color {
          min-width: 68px;
          min-height: 20px;
          border-radius: 4px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 14px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          color: #ffffff;
        }
        .top-color-type1 {
          background: #d58047;
        }
        .top-color-type2 {
          background: #d5b32d;
        }
        .top-color-type3 {
          background: #44a3cf;
        }
        .top-color-type4 {
          background: #53b372;
        }
        .top-color-type5 {
          background: #926b59;
        }
        .top-color-type6 {
          background: #d58047;
        }
        .top-breed {
          margin-top: 8px;
          font-size: 12px;
          font-family: GothamRounded-Book, GothamRounded;
          font-weight: normal;
          color: #ffffff;
          opacity: 0.48;
        }
        .top-ce {
          margin-top: 10px;
          display: flex;
          align-items: center;
          img {
            width: 16px;
            height: 16px;
          }
          .top-ce-text {
            margin-left: 5px;
            font-size: 12px;
            font-family: GothamRounded-Book, GothamRounded;
            font-weight: normal;
            color: #ffffff;
            opacity: 0.48;
          }
          .top-ce-num {
            margin-left: 5px;
            font-size: 12px;
            font-family: GothamRounded-Book, GothamRounded;
            font-weight: normal;
            color: #ffffff;
            opacity: 0.48;
          }
        }
      }
      .mid {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 197px;
          height: 197px;
        }
      }
      .bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        .left {
          display: flex;
          flex-direction: column;
          width: 8px;
          height: 16px;
          font-size: 12px;
          font-family: GothamRounded-Book, GothamRounded;
          font-weight: normal;
          color: #ffffff;
          line-height: 8px;
          margin-right: 8px;
        }
        .mid {
          margin-right: 8px;
          font-size: 20px;
          font-family: GothamRounded-Book, GothamRounded;
          font-weight: normal;
          color: #ffffff;
        }
        .right {
          font-size: 14px;
          font-family: GothamRounded-Book, GothamRounded;
          font-weight: normal;
          color: #ffffff;
          opacity: 0.48;
        }
      }
    }
    .item:hover {
      background: #141313;
    }
  }
}
</style>