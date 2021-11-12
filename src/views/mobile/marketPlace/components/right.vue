

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

export default {
  name: "marketPlace",
  components: {
    selectList,
  },
  setup() {
    //  const router = useRouter();
    const state = reactive({
      dragonList: [
        {
          type: 1,
          colorKey: "# 1601",
          breedCount: 3,
          icon: require("@/assets/imgs/marketplace/class/class-icon1.png"),
          ceNum: 200,
          dragonImg: require("@/assets/imgs/marketplace/dragons/dragon1.png"),
          bottmoNum: 0.167,
          price: 547,
        },
        {
          type: 2,
          colorKey: "# 1800",
          breedCount: 3,
          icon: require("@/assets/imgs/marketplace/class/class-icon3.png"),
          ceNum: 400,
          dragonImg: require("@/assets/imgs/marketplace/dragons/dragon2.png"),
          bottmoNum: 0.168,
          price: 777,
        },
        {
          type: 3,
          colorKey: "# 1606",
          breedCount: 3,
          icon: require("@/assets/imgs/marketplace/class/class-icon4.png"),
          ceNum: 500,
          dragonImg: require("@/assets/imgs/marketplace/dragons/dragon3.png"),
          bottmoNum: 0.127,
          price: 444,
        },
        {
          type: 6,
          colorKey: "# 1038",
          breedCount: 3,
          icon: require("@/assets/imgs/marketplace/class/class-icon1.png"),
          ceNum: 200,
          dragonImg: require("@/assets/imgs/marketplace/dragons/dragonEgg.png"),
          bottmoNum: 0.267,
          price: 666,
        },
        {
          type: 4,
          colorKey: "# 1410",
          breedCount: 3,
          icon: require("@/assets/imgs/marketplace/class/class-icon2.png"),
          ceNum: 200,
          dragonImg: require("@/assets/imgs/marketplace/dragons/dragon4.png"),
          bottmoNum: 0.567,
          price: 234,
        },
        {
          type: 5,
          colorKey: "# 1106",
          breedCount: 3,
          icon: require("@/assets/imgs/marketplace/class/class-icon5.png"),
          ceNum: 300,
          dragonImg: require("@/assets/imgs/marketplace/dragons/dragon5.png"),
          bottmoNum: 0.367,
          price: 123,
        },
        {
          type: 1,
          colorKey: "# 1601",
          breedCount: 3,
          icon: require("@/assets/imgs/marketplace/class/class-icon1.png"),
          ceNum: 200,
          dragonImg: require("@/assets/imgs/marketplace/dragons/dragon1.png"),
          bottmoNum: 0.167,
          price: 547,
        },
        {
          type: 2,
          colorKey: "# 1800",
          breedCount: 3,
          icon: require("@/assets/imgs/marketplace/class/class-icon3.png"),
          ceNum: 400,
          dragonImg: require("@/assets/imgs/marketplace/dragons/dragon2.png"),
          bottmoNum: 0.168,
          price: 777,
        },
        {
          type: 3,
          colorKey: "# 1606",
          breedCount: 3,
          icon: require("@/assets/imgs/marketplace/class/class-icon4.png"),
          ceNum: 500,
          dragonImg: require("@/assets/imgs/marketplace/dragons/dragon3.png"),
          bottmoNum: 0.127,
          price: 444,
        },
        {
          type: 6,
          colorKey: "# 1038",
          breedCount: 3,
          icon: require("@/assets/imgs/marketplace/class/class-icon1.png"),
          ceNum: 200,
          dragonImg: require("@/assets/imgs/marketplace/dragons/dragonEgg.png"),
          bottmoNum: 0.267,
          price: 666,
        },
        {
          type: 4,
          colorKey: "# 1410",
          breedCount: 3,
          icon: require("@/assets/imgs/marketplace/class/class-icon2.png"),
          ceNum: 200,
          dragonImg: require("@/assets/imgs/marketplace/dragons/dragon4.png"),
          bottmoNum: 0.567,
          price: 234,
        },
        {
          type: 5,
          colorKey: "# 1106",
          breedCount: 3,
          icon: require("@/assets/imgs/marketplace/class/class-icon5.png"),
          ceNum: 300,
          dragonImg: require("@/assets/imgs/marketplace/dragons/dragon5.png"),
          bottmoNum: 0.367,
          price: 123,
        },
        {
          type: 1,
          colorKey: "# 1601",
          breedCount: 3,
          icon: require("@/assets/imgs/marketplace/class/class-icon1.png"),
          ceNum: 200,
          dragonImg: require("@/assets/imgs/marketplace/dragons/dragon1.png"),
          bottmoNum: 0.167,
          price: 547,
        },
        {
          type: 2,
          colorKey: "# 1800",
          breedCount: 3,
          icon: require("@/assets/imgs/marketplace/class/class-icon3.png"),
          ceNum: 400,
          dragonImg: require("@/assets/imgs/marketplace/dragons/dragon2.png"),
          bottmoNum: 0.168,
          price: 777,
        },
        {
          type: 3,
          colorKey: "# 1606",
          breedCount: 3,
          icon: require("@/assets/imgs/marketplace/class/class-icon4.png"),
          ceNum: 500,
          dragonImg: require("@/assets/imgs/marketplace/dragons/dragon3.png"),
          bottmoNum: 0.127,
          price: 444,
        },
        {
          type: 6,
          colorKey: "# 1038",
          breedCount: 3,
          icon: require("@/assets/imgs/marketplace/class/class-icon1.png"),
          ceNum: 200,
          dragonImg: require("@/assets/imgs/marketplace/dragons/dragonEgg.png"),
          bottmoNum: 0.267,
          price: 666,
        },
        {
          type: 4,
          colorKey: "# 1410",
          breedCount: 3,
          icon: require("@/assets/imgs/marketplace/class/class-icon2.png"),
          ceNum: 200,
          dragonImg: require("@/assets/imgs/marketplace/dragons/dragon4.png"),
          bottmoNum: 0.567,
          price: 234,
        },
        {
          type: 5,
          colorKey: "# 1106",
          breedCount: 3,
          icon: require("@/assets/imgs/marketplace/class/class-icon5.png"),
          ceNum: 300,
          dragonImg: require("@/assets/imgs/marketplace/dragons/dragon5.png"),
          bottmoNum: 0.367,
          price: 123,
        },
      ],
      selectListShow1: false,
      selectItem1: {},
      selectList1: [
        { id: 1, name: "All" },
        { id: 2, name: "For sale" },
        { id: 3, name: "NOt For sale" },
      ],
      selectList2: [
        { id: 1, name: "Lowest Price" },
        { id: 2, name: "Highest Price" },
        { id: 3, name: "Latest" },
      ],
    });
    onMounted(() => {});
    const handleSelect = () => {
      state.selectListShow1 = true;
    };
    const handleSelectLeave = () => {
      state.selectListShow1 = false;
    };
    const selectItem = (item) => {
      state.selectItem1 = item;
    };
    return {
      ...toRefs(state),
      handleSelect,
      handleSelectLeave,
      selectItem,
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
          width: 68px;
          height: 20px;
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