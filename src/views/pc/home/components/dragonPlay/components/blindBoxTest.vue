
<template>
  <div class="head">
    <div class="content">
      <img
        v-show="!isShow"
        src="@/assets/imgs/dragonPlay/blindBox/blindBox.png"
      />
      <!-- <div class="lottie">
        <lottie
          :options="defaultOptions"
          :height="500"
          :width="500"
          v-on:animCreated="handleAnimation"
        />
      </div> -->
      <div v-show="isShow" ref="confettiCon" id="confettiCon" class="lottie">
        <lottie :options="defaultOptions" v-on:animCreated="handleAnimation" />
      </div>
    </div>
    <div class="btn" @click="play">
      <img src="@/assets/imgs/dragonPlay/blindBox/open-btn.png" />
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, ref } from "vue";
// import lottie from "vue-lottie";
import lottie from "vue-lottie/src/lottie.vue";
// import * as animationData from "../../../../../assets/lottie/data.json";
// const animationData = require("@/assets/lottie/data.json")
// import Confetti from "@/assets/lottie/confetti.json";
// import Confetti from "@/assets/lottie/data.json";
// import Confetti from "@/assets/lottie/pinjump.json";
// import Confetti from "@/assets/lottie/data11.json";
import Confetti from "@/assets/lottie/data11.json";

export default {
  components: {
    lottie,
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
      isShow: false,
      defaultOptions: {
        container: confettiCon.value,
        animationData: Confetti,
        loop: false,
        autoplay: false,
      },
      // anim: {},
      // videoUrl: require(`@/assets/lottie/images/${item.p}`),
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
      state.isShow = true;

      state.anim.goToAndPlay(0, true);
      setTimeout(() => {
        state.isShow = false;
      },2000);
    };
    return {
      ...toRefs(state),
      play,
      handleAnimation,
    };
  },
};
</script>

<style lang="less" scoped >
.head {
  .content {
    margin-top: 120px;
    img {
      width: 352px;
      height: 320px;
    }
    .lottie {
      width: 352px;
      height: 320px;
    }
  }
  .btn {
    margin-top: 116px;
    cursor: pointer;
    img {
      width: 200px;
      height: 80px;
    }
  }
}
</style>
