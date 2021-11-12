<template>
  <div class="right-main">
      <router-view></router-view>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from "vue";
import { useRouter } from "vue-router";

import Header from "@/components/HeaderMarketPlace";

import common from "@/utils/common";
import myMainland from "@/views/pc/myMainland/use/myMainland";

export default {
  name: "marketPlace",
  components: {
    Header,
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

<style lang="less" scoped>
    .right-main{}
</style>