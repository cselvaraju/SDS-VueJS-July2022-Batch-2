<template>
  <div>
    <h2>This is the Welcome Page</h2>
    Welcome to Bangalore <span id="guest">{{ guestName }}</span>
  </div>
</template>

<script>
export default {
    // data: function() {

    // }

    data() {
        return {
            guestName: 'Amitabh Bachhan',
        }
    },
}
</script>

<style scoped>
    h2 {
        background-color: blue;
        color: yellow;
    }

    #guest {
        font-weight: bold;
    }
</style>