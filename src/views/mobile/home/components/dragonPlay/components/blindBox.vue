
<template>
  <div class="head">
    <div class="content">
      <!-- <img
        v-show="!isShow"
        src="@/assets/imgs/dragonPlay/blindBox/blindBox.png"
      /> -->
      <!-- <div class="lottie">
        <lottie
          :options="defaultOptions"
          :height="500"
          :width="500"
          v-on:animCreated="handleAnimation"
        />
      </div> -->
      <div  ref="confettiCon" id="confettiCon" class="lottie">
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
import Confetti from "@/assets/lottie/open-box/data1.json";
// let Confetti = {"v":"5.5.4","fr":30,"ip":0,"op":30,"w":400,"h":640,"nm":"A[01-05].png 合成 1","ddd":0,"assets":[{"id":"image_0","w":784,"h":660,"p":"@/assets/lottie/open-box/images/img_0.png","e":0},{"id":"image_1","w":784,"h":660,"p":"http://192.168.0.106:8848/open-box/images/img_1.png","e":0},{"id":"image_2","w":784,"h":660,"p":"http://192.168.0.106:8848/open-box/images/img_2.png","e":0},{"id":"image_3","w":784,"h":660,"p":"http://192.168.0.106:8848/open-box/images/img_3.png","e":0},{"id":"image_4","w":784,"h":660,"p":"http://192.168.0.106:8848/open-box/images/img_4.png","e":0},{"id":"image_5","w":784,"h":660,"p":"http://192.168.0.106:8848/open-box/images/img_5.png","e":0}],"layers":[{"ddd":0,"ind":2,"ty":2,"nm":"A05.png","cl":"png","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[198,384,0],"ix":2},"a":{"a":0,"k":[392,330,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":11,"op":12,"st":11,"bm":0},{"ddd":0,"ind":3,"ty":2,"nm":"A04.png","cl":"png","refId":"image_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[198,384,0],"ix":2},"a":{"a":0,"k":[392,330,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":12,"op":13,"st":12,"bm":0},{"ddd":0,"ind":4,"ty":2,"nm":"A03.png","cl":"png","refId":"image_2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[198,384,0],"ix":2},"a":{"a":0,"k":[392,330,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":13,"op":14,"st":13,"bm":0},{"ddd":0,"ind":5,"ty":2,"nm":"A02.png","cl":"png","refId":"image_3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[198,384,0],"ix":2},"a":{"a":0,"k":[392,330,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":14,"op":15,"st":14,"bm":0},{"ddd":0,"ind":6,"ty":2,"nm":"A01.png","cl":"png","refId":"image_4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[198,384,0],"ix":2},"a":{"a":0,"k":[392,330,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":15,"op":16,"st":15,"bm":0},{"ddd":0,"ind":7,"ty":2,"nm":"A01.png","cl":"png","refId":"image_4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[198,384,0],"ix":2},"a":{"a":0,"k":[392,330,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":6,"op":7,"st":6,"bm":0},{"ddd":0,"ind":8,"ty":2,"nm":"A02.png","cl":"png","refId":"image_3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[198,384,0],"ix":2},"a":{"a":0,"k":[392,330,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":7,"op":8,"st":7,"bm":0},{"ddd":0,"ind":9,"ty":2,"nm":"A03.png","cl":"png","refId":"image_2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[198,384,0],"ix":2},"a":{"a":0,"k":[392,330,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":8,"op":9,"st":8,"bm":0},{"ddd":0,"ind":10,"ty":2,"nm":"A04.png","cl":"png","refId":"image_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[198,384,0],"ix":2},"a":{"a":0,"k":[392,330,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":9,"op":10,"st":9,"bm":0},{"ddd":0,"ind":11,"ty":2,"nm":"A05.png","cl":"png","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[198,384,0],"ix":2},"a":{"a":0,"k":[392,330,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":10,"op":11,"st":10,"bm":0},{"ddd":0,"ind":13,"ty":2,"nm":"A01.png","cl":"png","refId":"image_5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[198,384,0],"ix":2},"a":{"a":0,"k":[392,330,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":16,"op":30,"st":0,"bm":0},{"ddd":0,"ind":14,"ty":2,"nm":"A01.png","cl":"png","refId":"image_5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[198,384,0],"ix":2},"a":{"a":0,"k":[392,330,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":6,"st":0,"bm":0}],"markers":[]};

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
      isShow: true,
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
      // state.isShow = true;

      state.anim.goToAndPlay(0, true);
      // setTimeout(() => {
      //   state.isShow = false;
      // },2000);
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
