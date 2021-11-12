<template>
  <div v-if="false" class="mydragon">blindBOx</div>
  <div v-else class="npData">
    <div class="noData-wrap">
      <div class="no-dragon">
        <img src="../../../assets/imgs/myMainland/no-data.png" alt="" />
      </div>
      <div class="no-data-title">No data</div>
      <div class="no-data-des">
        * The blind box will be open soon, so stay tuned !
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from "vue";
import { useRouter } from "vue-router";

import common from "@/utils/common";
import myMainland from "@/views/pc/myMainland/use/myMainland";

export default {
  name: "blindBox",
  components: {},
  setup() {
    const router = useRouter();
    const state = reactive({});
    const { myMainlandState } = myMainland();
    onMounted(() => {
      myMainlandState.leftItemSelected = 2;
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
.my-dragon-main {
}
</style>