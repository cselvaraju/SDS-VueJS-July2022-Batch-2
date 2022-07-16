<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{name: 'about'}">About</router-link> | 
    <router-link to="/contact">Contact Us</router-link> | 
    <a href="/contact">Contact Link</a>
    <p>
      <button @click="home">Home</button>
      <button @click="back">Back</button>
      <button @click="forward">Forward</button>
    </p>
  </nav>
  <router-view/>
</template>

<script>
  export default {
    methods: {
      home() {
        this.$router.push('/');
      },

      back() {
        this.$router.back();
      },

      forward() {
        this.$router.go(1);
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
