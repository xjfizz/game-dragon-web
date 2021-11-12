<template>
  <div @click="test" class="container" ref="container"></div>
</template>

<script setup>
import { ref, toRefs, watch, onMounted, reactive, nextTick } from "vue";
import * as echarts from "echarts";

const props = defineProps({
  options: {
    type: Object,
    default: {},
    required: true,
  },
});
const state = reactive({});
const container = ref(null);
let chart = null;
const { options } = toRefs(props);
watch(
  options,
  (newOptions) => {
    initChart();
  },
  { deep: true }
);

onMounted(() => {
  chart = echarts.init(container.value);
  initChart();
  window.addEventListener("resize", () => {
    console.log("chart", chart);
    chart && chart.resize();
  });
});

const initChart = () => {
  chart.setOption(props.options);
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
