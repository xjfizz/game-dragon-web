<template>
  <div class="right-main">
      <convert />
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from "vue";
import { useRouter } from "vue-router";

import common from "@/utils/common";
import convert from "./convert.vue";

export default {
  name: "right",
  components: {
    convert,
  },
  setup() {
    const router = useRouter();
    const state = reactive({});

    onMounted(() => {
      common.goTopScroll();
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="less" scoped >
.right-main {
}
</style>

