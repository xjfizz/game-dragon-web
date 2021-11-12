

<template>
  <div class="dragon-main">
    <div class="dragon-container">
      <img
        class="dragon-container-img"
        style="z-index: 99"
        fit="fit"
        v-if="dragon.dragonImgEye"
        :src="dragon.dragonImgEye"
      />
      <img
        class="dragon-container-img"
        style="z-index: 99"
        fit="fit"
        v-if="dragon.dragonImgWing"
        :src="dragon.dragonImgWing"
      />
      <img
        class="dragon-container-img"
        style="z-index: 99"
        fit="fit"
        v-if="dragon.dragonImgTotems"
        :src="dragon.dragonImgTotems"
      />

      <img
        class="dragon-container-img"
        style="z-index: 98"
        fit="fit"
        v-if="dragon.dragonImgBody"
        :src="dragon.dragonImgBody"
      />
      <img
        class="dragon-container-img"
        style="z-index: 97"
        fit="fit"
        v-if="dragon.dragonImgHorn"
        :src="dragon.dragonImgHorn"
      />
      <img
        class="dragon-container-img"
        style="z-index: 97"
        fit="fit"
        v-if="dragon.dragonImgEar"
        :src="dragon.dragonImgEar"
      />
      <img
        class="dragon-container-img"
        style="z-index: 97"
        fit="fit"
        v-if="dragon.dragonImgTail"
        :src="dragon.dragonImgTail"
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

  setup(props, context) {
    console.log("props", props);
    const router = useRouter();
    const state = reactive({
      loading: true,
      dragon: props,
    });
    onMounted(async () => {});
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

    const tips = () => {};

    return {
      ...toRefs(state),
      initDragon,
    };
  },
};
</script>

<style lang="less" scoped >
.dragon-main {
  display: flex;
  justify-content: center;
  background-color: #000;
  background: rgba(0, 0, 0, 0);
  // opacity: 0;
  .dragon-container {
    // width: 600px;
    // height: 600px;
    width: 180px;
    height: 180px;
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
      width: 180px;
      height: 180px;
    }
  }
}
</style>
