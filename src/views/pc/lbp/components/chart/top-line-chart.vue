<template>
  <Chart :options="barChartOptionCreator()" />
</template>

<script setup>
import Chart from "@/components/echart/index.vue";
import barChartOptionCreator from "./data.js";
</script>