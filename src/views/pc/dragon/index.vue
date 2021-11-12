

<template>
  <div class="dragon-main">
    <div class="dragon-container">
     <el-image
        class="dragon-container-img"
        style="width: 100%; height: 100%; z-index: 99"
        fit="fit"
        :src="categoryList[0].url"
      ></el-image>
      <el-image
        class="dragon-container-img"
        style="width: 100%; height: 100%; z-index: 99"
        fit="fit"
        :src="categoryList[1].url"
      ></el-image>
      <el-image
        class="dragon-container-img"
        style="width: 100%; height: 100%; z-index: 99"
        fit="fit"
        :src="categoryList[2].url"
      ></el-image>

      <el-image
        class="dragon-container-img"
        style="width: 100%; height: 100%; z-index: 98"
        fit="fit"
        :src="categoryList[3].url"
      ></el-image>
      <el-image
        style="width: 100%; height: 100%; z-index: 97"
        fit="fit"
         :src="categoryList[4].url"
      ></el-image>
      <el-image
        class="dragon-container-img"
        style="width: 100%; height: 100%; z-index: 97"
        fit="fit"
         :src="categoryList[5].url"
      ></el-image>
      <el-image
        class="dragon-container-img"
        style="width: 100%; height: 100%; z-index: 97"
        fit="fit"
        :src="categoryList[6].url"
      ></el-image>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs, nextTick } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "home",
  components: {},
  setup() {
    const router = useRouter();
    const state = reactive({
      categoryList: [
        {
          name: "龙眼",
          url: require("@/assets/dragon/fire-dragon/1/Fire_eye01.png"),
        },
        {
          name: "龙翅膀",
          url: require("@/assets/dragon/fire-dragon/1/Fire_wing01.png"),
        },
        {
          name: "龙图腾",
          url: require("@/assets/dragon/fire-dragon/1/Fire_horn01.png"),
        },
        {
          name: "龙身",
          url: require("@/assets/dragon/fire-dragon/1/Fire_body01.png"),
        },
        {
          name: "龙角",
          url: require("@/assets/dragon/fire-dragon/1/Fire_totems01.png"),
        },
        {
          name: "龙耳",
          url: require("@/assets/dragon/fire-dragon/1/Fire_ear01.png"),
        },

        {
          name: "龙尾",
          url: require("@/assets/dragon/fire-dragon/1/Fire_tail01.png"),
        },
      ],
      loading: true,
    });
    onMounted(async () => {
      state.swiperList = [];
    });

    nextTick(() => {
      window.addEventListener("scroll", () => {
        let scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        scrollTop > 100
          ? (state.headerScroll = true)
          : (state.headerScroll = false);
      });
    });

    const goToDetail = (item) => {
      router.push({ path: `/product/${item.goodsId}` });
    };

    const tips = () => {};

    return {
      ...toRefs(state),
      goToDetail,
      tips,
    };
  },
};
</script>

<style lang="less" scoped >
.dragon-main {
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: #333333;
  background-color:#000;
  background: rgba(0, 0, 0, 0);
  // opacity: 0;
  .dragon-container {
    width: 150px;
    height: 150px;
   // background-color: #c5aeae;
    position: relative;
     opacity: 1;
    .dragon-container-img {
      position: absolute;
      left: 0;
      top: 0;
    }
  }
}
</style>