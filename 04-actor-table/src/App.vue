<template>
<div class="container">
  <actor-table></actor-table>
</div>
</template>

<script>
import ActorTable from './components/ActorTable.vue';

export default {
  name: 'App',

  components: {
    ActorTable,
  },
  
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
