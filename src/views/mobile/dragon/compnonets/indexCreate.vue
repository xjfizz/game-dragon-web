

<template>
  <div class="dragon-main">
    <div class="dragon-container">
      <img
        class="dragon-container-img"
        style="width: 100%; height: 100%; z-index: 99"
        fit="fit"
        v-if="dragon.eye"
        :src="dragon.eye"
      />
      <img
        class="dragon-container-img"
        style="width: 100%; height: 100%; z-index: 99"
        fit="fit"
        v-if="dragon.wing"
        :src="dragon.wing"
      />
      <img
        class="dragon-container-img"
        style="width: 100%; height: 100%; z-index: 99"
        fit="fit"
        v-if="dragon.totems"
        :src="dragon.totems"
      />

      <img
        class="dragon-container-img"
        style="width: 100%; height: 100%; z-index: 98"
        fit="fit"
        v-if="dragon.body"
        :src="dragon.body"
      />
      <img
        style="width: 100%; height: 100%; z-index: 97"
        fit="fit"
        v-if="dragon.horn"
        :src="dragon.horn"
      />
      <img
        class="dragon-container-img"
        style="width: 100%; height: 100%; z-index: 97"
        fit="fit"
        v-if="dragon.ear"
        :src="dragon.ear"
      />
      <img
        class="dragon-container-img"
        style="width: 100%; height: 100%; z-index: 97"
        fit="fit"
        v-if="dragon.tail"
        :src="dragon.tail"
      />
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs, nextTick } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "dragonCreate",
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
      dragon: {},
    });
    onMounted(async () => {
      state.swiperList = [];
    });
    const initDragon = (e) => {
      console.log("e", e);
      state.dragon = e;
    };
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
      initDragon,
    };
  },
};
</script>

<style lang="less" scoped >
.dragon-main {
   display: flex;
  justify-content: center;
//   align-items: center;

  background-color: #000;
  background: rgba(0, 0, 0, 0);
  // opacity: 0;
  .dragon-container {
    width: 600px;
    height: 600px;
    // margin-top: 100px;
    // width: 436px;
    // height: 391px;
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
