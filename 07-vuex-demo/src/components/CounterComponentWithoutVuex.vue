<template>
  <div id="counter">
    <h2>Counter Without Vuex</h2>
    <p>
        <button @click="decrement">-</button>
        {{ count }}
        <button @click="increment">+</button>
    </p>
  </div>
</template>

<script>
export default {
    props: [ 'count' ],

    methods: {
        increment() {
            this.$emit('increment');
        },

        decrement() {
            this.$emit('decrement');
        }
    }
}
</script>

<style>

</style>