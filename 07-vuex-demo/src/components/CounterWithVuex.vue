<template>
  <div id="counter">
    <h2>Counter USING Vuex</h2>
    <p>
      <button @click="decrement">-</button>
      {{ count }}
      <button @click="increment">+</button>
      &nbsp;
      <button @click="incrementAfter2s">Increment in 2s</button>
    </p>
    <p>
        Squared Count: {{ squaredCount }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
    //   count: this.$store.state.count,
    };
  },

  computed: {
    count() {
        return this.$store.state.count;
    },

    squaredCount() {
        return this.$store.getters.squaredCount;
    }
  },

  methods: {
    increment() {
    //   this.$store.state.count++;
    //   this.$store.state.countHistory.push(this.count);
        // this.$store.commit('increment');
        this.$store.dispatch('increment');
    },

    decrement() {
    //   this.$store.state.count--;
    //   this.$store.state.countHistory.push(this.count);
        // this.$store.commit('decrement');
        this.$store.dispatch('decrement');
    },

    incrementAfter2s() {
        this.$store.dispatch('incrementAfter2s');
    }
  },
};
</script>

<style>
</style>