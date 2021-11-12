
<template>
  <div class="main">
    <div class="head">
      <span>NFT Marketplace</span>
    </div>
    <div class="head-des">
      <span
        >Players can earn income by trading the NFT of Dragons, Dragon Bones,
        Land and Buildings, and we will charge part of that for the community
        maintenance and airdrop reward</span
      >
    </div>
    <div class="content">
      <div class="content-item">
        <img
          src="@/assets/imgs/dragon/dragon-fire.png"
          
        />
      </div>
      <div class="content-item">
        <img
          src="@/assets/imgs/dragon/dragon-thunder.png"
         
        />
      </div>
      <div class="content-item">
        <img
          src="@/assets/imgs/dragon/dragon-storm.png"
          
        />
      </div>
      <div class="content-item">
        <img
          src="@/assets/imgs/dragon/dragon-water.png"
          
        />
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-btn" @click="getMore">Get More</div>
      <div class="bottom-left-img"><img src="@/assets/imgs/right.png" /></div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
// import { useRouter } from 'vue-router'

// import { useStore } from "vuex";

export default {
  props: {
    classHeader: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, context) {
    console.log(props);
    // const store = useStore();
    // const router = useRouter()
    const state = reactive({});
    onMounted(() => {});
    const getMore = () => {
      context.emit("createEgg");
    };
    return {
      ...toRefs(state),
      getMore,
    };
  },
};
</script>

<style lang="less" scoped >
.main {
  //   padding-bottom: 120px;
  .head {
    display: flex;
    justify-content: center;
    span {
      font-size: 64px;
      font-family: GothamRounded-Bold, GothamRounded;
      font-weight: bold;
      color: #ffffff;
    }
  }
  .head-des {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    span {
      width: 924px;
      height: 96px;
      font-size: 24px;
      font-family: GothamRounded-Medium, GothamRounded;
      font-weight: 500;
      color: #ffffff;
      text-align: center;
      line-height: 32px;
    }
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-top: 110px;
    .content-item {
      margin-right: 27px;
      img {
        width: 279px;
        height: 313px;
      }
    }
  }
  .bottom {
    margin-top: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    .bottom-btn {
      font-size: 24px;
      font-family: GothamRounded-Medium, GothamRounded;
      font-weight: 500;
      color: #ffc763;
      display: flex;
      justify-content: center;
      align-items: flex-end;
    }
    .bottom-left-img {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 10px;
      margin-top: 5px;
      img {
        width: 13px;
        height: 19px;
      }
    }
  }
}
</style>
