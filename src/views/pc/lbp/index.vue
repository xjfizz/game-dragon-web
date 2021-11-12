<template>
  <div class="my-mainland-main">
    <Header :headIndex="4"></Header>
    <div class="main-wrap">
      <div class="main-content">
        <div class="content-left">
          <left />
        </div>
        <div class="content-right">
          <right />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from "vue";
import { useRouter } from "vue-router";
import Header from "@/components/HeaderMarketPlace";
import common from "@/utils/common";
import myMainland from "@/views/pc/myMainland/use/myMainland";
import left from "./components/left.vue";
import right from "./components/right.vue";

export default {
  name: "marketPlace",
  components: {
    Header,
    left,
    right,
  },
  setup() {
    const router = useRouter();
    const state = reactive({});
    const { myMainlandState } = myMainland();
    onMounted(() => {
      common.goTopScroll();
    });

    return {
      ...toRefs(state),
      ...toRefs(myMainlandState),
    };
  },
};
</script>

<style lang="less" scoped >
.my-mainland-main {
  background-color: #282523;
  min-height: 2000px;
  .main-wrap {
    width: 1200px;
    height: 1000px;
    margin: auto;
    .main-content {
      display: flex;
      justify-content: space-between;
      height: 100%;
      .content-left {
        width: 792px;
      height: 100%;
      }
      .content-right {
        width: 384px;
      height: 100%;
      }
    }
  }
}
</style>

<style>
</style>