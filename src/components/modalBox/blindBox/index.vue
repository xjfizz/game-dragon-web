<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-close" @click="closeBox">
        <img src="@/assets\imgs\openBox/close-video.png" />
      </div>
      <div class="bindBox-wrap">
        <div ref="bindBoxRef" id="bindBoxRef" class="lottie">
          <lottie
            :options="defaultOptions"
            v-on:animCreated="handleAnimation"
          />
        </div>
      </div>
    </div>
  </div>
</template>
 




<script>
import { reactive, toRefs, onMounted, ref } from "vue";
import lottie from "vue-lottie/src/lottie.vue";
import Confetti from "@/assets/lottie/open-box/data2.json";
export default {
  name: "gameVideo",
  props: {
    classHeader: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    lottie,
  },
  setup(props, context) {
    const bindBoxRef = ref(null);
    const state = reactive({
      defaultOptions: {
        container: bindBoxRef.value,
        animationData: Confetti,
        loop: false,
        autoplay: false,
      },
      anim: {},
    });
    onMounted(() => {
      setTimeout(() => {
        play();
      }, 100);
    });

    const closeBox = () => {
      context.emit("closeBox");
      // play()
    };
    const confirm = () => {
      context.emit("closeBox");
    };
    const handleAnimation = (anim) => {
      state.anim = anim;
      console.log(anim);
    };
    const play = () => {
      console.log("1111");
      state.anim.goToAndPlay(0, true);
    };

    return {
      ...toRefs(state),
      closeBox,
      confirm,
      handleAnimation,
      play,
    };
  },
};
</script>

<style scoped lang="less">
.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.86);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999999;
}
.modal {
  width: 80%;
  height: 720px;
  border-radius: 16px;
  position: relative;
  .modal-close {
    position: absolute;
    right: -78px;
    top: -34px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 48px;
      height: 48px;
    }
  }
}
.bindBox-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .lottie {
    width: 100%;
    height: 100%;
  }
}
</style>