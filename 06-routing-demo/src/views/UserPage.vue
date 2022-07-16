<template>
  <div>
    <h1>
        User Page
    </h1>
    <p>
        Hey! your user ID is: {{ userId }}
    </p>
  </div>
</template>

<script>
export default {

    data() {
        return {
            userId: this.$route.params.id,
        }
    },
}
</script>

<style>

</style>