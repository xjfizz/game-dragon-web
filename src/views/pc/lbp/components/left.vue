<template>
  <div class="left-main">
    <div class="top-title">
      <topTtitle />
    </div>
    <div class="top-line-chart">
      <topLineChart />
    </div>
    <div class="top-pool">
      <topPool />
    </div>
    <div class="top-transactions">
      <topTransactions />
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from "vue";
import { useRouter } from "vue-router";

import common from "@/utils/common";
import topTtitle from "./topTitle.vue";
import topPool from "./topPool.vue";
import topTransactions from "./topTransactions.vue";
import topLineChart from "./chart/top-line-chart.vue";

export default {
  name: "left",
  components: {
    topTtitle,
    topPool,
    topTransactions,
    topLineChart,
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
.left-main {
  .top-title {
  }
  .top-line-chart {
    margin-top: 24px;
    height: 380px;
    background: #1a1716;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.12);
  }
  .top-pool {
    margin-top: 40px;
  }
  .top-transactions {
    margin-top: 40px;
  }
}
</style>

