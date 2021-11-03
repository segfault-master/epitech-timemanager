<template>
  <div>
    <HighChart
        v-bind:userID="userID"
    ></HighChart>
    <BubbleChart
        v-bind:userID="userID"
    ></BubbleChart>
    <LineYearChart></LineYearChart>
  </div>
</template>

<script>

import HighChart from "@/components/Highchart";
import BubbleChart from "@/components/BubbleChart";
import LineYearChart from "@/components/LineYearChart";

export default {
  name: "ChartManager",
  components: {
    HighChart,
    BubbleChart,
    LineYearChart
  },
  props: {
    userID: Number
  }
}
</script>

<style scoped>

</style>