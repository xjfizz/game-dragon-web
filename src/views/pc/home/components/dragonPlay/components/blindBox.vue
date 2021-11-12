
<template>
  <div class="head">
    <!-- 弹框-start -->
    <blindBox
      ref="blindBoxRef"
      v-if="blindBoxShow"
      @closeBox="closeBindBox"
    ></blindBox>
    <!-- 弹框-end -->

    <div class="content">
      <div ref="confettiCon" id="confettiCon" class="lottie">
        <lottie :options="defaultOptions" v-on:animCreated="handleAnimation" />
      </div>
    </div>
    <div class="btn" @click="play">
      <img src="@/assets/imgs/dragonPlay/blindBox/open-btn.png" />
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, ref, nextTick } from "vue";

import lottie from "vue-lottie/src/lottie.vue";
import Confetti from "@/assets/lottie/open-box/data.json";
import blindBox from "@/components/modalBox/blindBox/index";

export default {
  components: {
    lottie,
    blindBox,
  },
  props: {
    classHeader: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, context) {
    console.log(props, context);
    const confettiCon = ref(null);
    const state = reactive({
      blindBoxShow: false,
      isShow: true,
      defaultOptions: {
        container: confettiCon.value,
        animationData: Confetti,
        loop: false,
        autoplay: false,
      },
      anim: {},
    });

  
    onMounted(() => {});
    // const play = () => {
    //   context.emit("createEgg");
    // };
    const handleAnimation = (anim) => {
      state.anim = anim;
      console.log(anim);
    };
    const play = () => {
      state.anim.goToAndPlay(0, true);
      setTimeout(() => {
        state.blindBoxShow = true;
      }, 1000);
    };
    const closeBindBox = () => {
      state.blindBoxShow = false;
    };
    return {
      ...toRefs(state),
      play,
      handleAnimation,
      closeBindBox,
    };
  },
};
</script>

<style lang="less" scoped >
.head {
  .content {
    // margin-top: 120px;
    img {
      // width: 352px;
      // height: 320px;
      width: 352px;
      height: 320px;
      transform: scale(0.4);
    }
    .lottie {
      width: 352px;
      height: 320px;
    }
  }
  .btn {
    margin-top: 50px;
    cursor: pointer;
    img {
      width: 200px;
      height: 80px;
    }
  }
}
</style>
