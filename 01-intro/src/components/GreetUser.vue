<template>
  <div>
    <!-- <h3>Greetings {{ friend }}. You are {{ age }} years old.</h3> -->
    <h3>{{ message() }}</h3>
  </div>
</template>

<script>
export default {
    props: [
        'friend',
        'age'
    ],

    methods: {
        message() {
            return `Welcome ${this.friend}. 
            You are ${this.age} years old.`;
        }
    }
}
</script>

<style>

</style>