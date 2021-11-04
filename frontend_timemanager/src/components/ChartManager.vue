<template>
  <div>
    <HighChart
        v-bind:userID="userID"
    ></HighChart>
    <BubbleChart
        v-if="user.role"
        v-bind:userID="userID"
        v-bind:user="user"
    ></BubbleChart>
    <LineYearChart
      v-bind:user="user"
    ></LineYearChart>
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
    userID: Number,
    user: Object
  }
}
</script>

<style scoped>

</style>