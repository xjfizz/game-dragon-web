

<template>
  <div class="dragon-main">
    <div class="dragon-container">
      <div class="dragon-container-item">
        <dragon
          :dragonImgEye="categoryList[0]"
          :dragonImgWing="categoryList[1]"
          :dragonImgHorn="categoryList[2]"
          :dragonImgBody="categoryList[3]"
          :dragonImgTotems="categoryList[4]"
          :dragonImgEar="categoryList[5]"
          :dragonImgTail="categoryList[6]"
        ></dragon>
      </div>

      <div class="dragon-container-item">
        <dragon
          :dragonImgEye="categoryList1[0]"
          :dragonImgWing="categoryList[1]"
          :dragonImgHorn="categoryList[2]"
          :dragonImgBody="categoryList[3]"
          :dragonImgTotems="categoryList[4]"
          :dragonImgEar="categoryList[5]"
          :dragonImgTail="categoryList[6]"
        ></dragon>
      </div>

      <div class="dragon-container-item">
        <dragon
          :dragonImgEye="categoryList[0]"
          :dragonImgWing="categoryList1[1]"
          :dragonImgHorn="categoryList[2]"
          :dragonImgBody="categoryList[3]"
          :dragonImgTotems="categoryList[4]"
          :dragonImgEar="categoryList[5]"
          :dragonImgTail="categoryList[6]"
        ></dragon>
      </div>

      <div class="dragon-container-item">
        <dragon
          :dragonImgEye="categoryList[0]"
          :dragonImgWing="categoryList[1]"
          :dragonImgHorn="categoryList1[2]"
          :dragonImgBody="categoryList[3]"
          :dragonImgTotems="categoryList[4]"
          :dragonImgEar="categoryList[5]"
          :dragonImgTail="categoryList[6]"
        ></dragon>
      </div>

      <div class="dragon-container-item">
        <dragon
          :dragonImgEye="categoryList[0]"
          :dragonImgWing="categoryList[1]"
          :dragonImgHorn="categoryList[2]"
          :dragonImgBody="categoryList1[3]"
          :dragonImgTotems="categoryList[4]"
          :dragonImgEar="categoryList[5]"
          :dragonImgTail="categoryList[6]"
        ></dragon>
      </div>

      <div class="dragon-container-item">
        <dragon
          :dragonImgEye="categoryList[0]"
          :dragonImgWing="categoryList[1]"
          :dragonImgHorn="categoryList[2]"
          :dragonImgBody="categoryList[3]"
          :dragonImgTotems="categoryList1[4]"
          :dragonImgEar="categoryList[5]"
          :dragonImgTail="categoryList[6]"
        ></dragon>
      </div>

      <div class="dragon-container-item">
        <dragon
          :dragonImgEye="categoryList[0]"
          :dragonImgWing="categoryList[1]"
          :dragonImgHorn="categoryList[2]"
          :dragonImgBody="categoryList[3]"
          :dragonImgTotems="categoryList[4]"
          :dragonImgEar="categoryList1[5]"
          :dragonImgTail="categoryList[6]"
        ></dragon>
      </div>

      <div class="dragon-container-item">
        <dragon
          :dragonImgEye="categoryList[0]"
          :dragonImgWing="categoryList[1]"
          :dragonImgHorn="categoryList[2]"
          :dragonImgBody="categoryList[3]"
          :dragonImgTotems="categoryList[4]"
          :dragonImgEar="categoryList[5]"
          :dragonImgTail="categoryList1[6]"
        ></dragon>
      </div>

       <div class="dragon-container-item">
        <dragon
          :dragonImgEye="categoryList1[0]"
          :dragonImgWing="categoryList1[1]"
          :dragonImgHorn="categoryList[2]"
          :dragonImgBody="categoryList[3]"
          :dragonImgTotems="categoryList[4]"
          :dragonImgEar="categoryList[5]"
          :dragonImgTail="categoryList[6]"
        ></dragon>
      </div>

       <div class="dragon-container-item">
        <dragon
          :dragonImgEye="categoryList1[0]"
          :dragonImgWing="categoryList1[1]"
          :dragonImgHorn="categoryList1[2]"
          :dragonImgBody="categoryList1[3]"
          :dragonImgTotems="categoryList1[4]"
          :dragonImgEar="categoryList1[5]"
          :dragonImgTail="categoryList1[6]"
        ></dragon>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs, nextTick } from "vue";
import { useRouter } from "vue-router";
import dragon from "./compnonets/index.vue";

export default {
  name: "home",
  components: {
    dragon,
  },

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
       categoryList1: [
        {
          name: "龙眼",
          url: require("@/assets/dragon/thunder-dragon/1/Thunder_eye01.png"),
        },
        {
          name: "龙翅膀",
          url: require("@/assets/dragon/thunder-dragon/1/Thunder_wing01.png"),
        },
        {
          name: "龙图腾",
          url: require("@/assets/dragon/thunder-dragon/1/Thunder_horn01.png"),
        },
        {
          name: "龙身",
          url: require("@/assets/dragon/thunder-dragon/1/Thunder_body01.png"),
        },
        {
          name: "龙角",
          url: require("@/assets/dragon/thunder-dragon/1/Thunder_totems01.png"),
        },
        {
          name: "龙耳",
          url: require("@/assets/dragon/thunder-dragon/1/Thunder_ear01.png"),
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
      getDragonImgList()
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

    const getDragonImgList = () => {

    }

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
  background-color: #333333;
  .dragon-container {
    display: flex;
    flex-wrap:wrap;
   
    .dragon-container-item{
        margin-right: 10px;
        margin-bottom: 10px;
    }   
  }
}
</style>