<template>
  <div>
    City is: {{ city || 'No city information!!' }}
  </div>
</template>

<script>
export default {
    data() {
        return {
            city: ''
        }
    }
}
</script>

<style>

</style>