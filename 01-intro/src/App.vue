<template>
  <div class="container">
    <h1>Welcome to VueJS</h1>
    <h2>Author: C Selvaraju</h2>
    <!-- <welcome-page></welcome-page>
    <event-handling></event-handling>
    <greet-user v-bind:friend="friendName" v-bind:age="friendAge"></greet-user>
    <default-value></default-value>
    <message-component></message-component> -->

    <!-- <actor-list></actor-list> -->

    <actor-table></actor-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      friendName: 'ABCD',
      friendAge: 25
    }
  }
}
</script>

<style scoped>
  h2 {
    border: 3px dashed orange;
  }
</style>