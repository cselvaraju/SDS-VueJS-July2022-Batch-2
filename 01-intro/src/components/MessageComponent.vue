<template>
  <div>
    <label>
        Enter your message: 
        <!-- <input type="text" v-bind:value="message" v-on:input="onInputChange($event)"/> -->
        <input type="text" :value="message" @input="onInputChange($event)"/>
        <!-- <input type="text" v-model="message"> -->
    </label>
    <p>
        Your message is: {{ message }}
    </p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            message: ''
        }
    },

    methods: {
        onInputChange(evt) {
            this.message = evt.target.value;
        }
    }
}
</script>

<style>

</style>