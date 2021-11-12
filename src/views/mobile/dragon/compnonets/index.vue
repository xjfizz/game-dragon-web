

<template>
  <div class="dragon-main">
    <div class="dragon-container">
      <el-image
        class="dragon-container-img"
        style="width: 100%; height: 100%; z-index: 99"
        fit="fit"
        :src="dragonImgEye.url"
      ></el-image>
      <el-image
        class="dragon-container-img"
        style="width: 100%; height: 100%; z-index: 99"
        fit="fit"
        :src="dragonImgWing.url"
      ></el-image>
      <el-image
        class="dragon-container-img"
        style="width: 100%; height: 100%; z-index: 99"
        fit="fit"
        :src="dragonImgTotems.url"
      ></el-image>

      <el-image
        class="dragon-container-img"
        style="width: 100%; height: 100%; z-index: 98"
        fit="fit"
        :src="dragonImgBody.url"
      ></el-image>
      <el-image
        style="width: 100%; height: 100%; z-index: 97"
        fit="fit"
        :src="dragonImgHorn.url"
      ></el-image>
      <el-image
        class="dragon-container-img"
        style="width: 100%; height: 100%; z-index: 97"
        fit="fit"
        :src="dragonImgEar.url"
      ></el-image>
      <el-image
        class="dragon-container-img"
        style="width: 100%; height: 100%; z-index: 97"
        fit="fit"
        :src="dragonImgTail.url"
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
  props: {
    dragonImgEye: {
      type: String,
      default: "",
    },
    dragonImgWing: {
      type: String,
      default: "",
    },
    dragonImgHorn: {
      type: String,
      default: "",
    },
    dragonImgBody: {
      type: String,
      default: "",
    },

    dragonImgTotems: {
      type: String,
      default: "",
    },
    dragonImgEar: {
      type: String,
      default: "",
    },
    dragonImgTail: {
      type: String,
      default: "",
    },
  },

  setup() {
    const router = useRouter();
    const state = reactive({
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
  background-color: #000;
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
