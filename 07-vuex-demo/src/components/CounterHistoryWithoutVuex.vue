<template>
  <h1>Counter History Without Vuex</h1>
  <div id="history">
    <span class="value" v-for="(num, index) in countHistory" :key="index">{{
      num
    }}</span>
  </div>
</template>

<script>
export default {
  props: ["countHistory"],
};
</script>

<style scoped>
div#history {
  display: flex;
  flex-direction: row;
  width: 80%;
}

span.value {
  width: 10%;
  margin: 5px;
}
</style>