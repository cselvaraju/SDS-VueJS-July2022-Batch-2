<template>
<div>
  <label>
    Enter your message: 
    <input type="text" v-model="message">
  </label>
  <p>
    Your message: {{ message }}
  </p>
  <p>
    Reversed message: {{ computedReverseMessage }}
  </p>
</div>
</template>

<script>

export default {
  name: 'App',

  data() {
    return {
      message: '',
    }
  },

  methods: {

    reverseMessage() {
      return this.message.split('').reverse().join('');
    }

  },

  computed: {

    computedReverseMessage() {
      return this.message.split('').reverse().join('');
    }

  }

}
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
