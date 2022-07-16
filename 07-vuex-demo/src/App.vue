<template>
  <div>
    <h1>Vuex Demo</h1>
    <!-- <counter-component-without-vuex
      :count="count"
      @increment="increment"
      @decrement="decrement"
    ></counter-component-without-vuex>

    <counter-history-without-vuex
      :countHistory="countHistory"
    ></counter-history-without-vuex> -->

    <counter-with-vuex></counter-with-vuex>
    <counter-history-with-vuex></counter-history-with-vuex>
  </div>
</template>

<script>
// import CounterComponentWithoutVuex from "./components/CounterComponentWithoutVuex.vue";
// import CounterHistoryWithoutVuex from "./components/CounterHistoryWithoutVuex.vue";
import CounterWithVuex from './components/CounterWithVuex.vue';
import CounterHistoryWithVuex from './components/CounterHistoryWithVuex.vue';

export default {
  name: "App",

  components: {
    // CounterComponentWithoutVuex,
    // CounterHistoryWithoutVuex,
    CounterWithVuex,
    CounterHistoryWithVuex,
  },

  data() {
    return {
      count: 0,
      countHistory: [],
    };
  },

  methods: {
    increment() {
      this.count++;
      this.countHistory.push(this.count);
    },

    decrement() {
      this.count--;
      this.countHistory.push(this.count);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
