<template>
  <div class="comp">
    <button v-on:click="btnClicked">Click Me!</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            user: 'Selva',
        }
    },

    methods: {
        btnClicked() {
            // alert('OUCH!! That hurt!' + '\n' + this.user + ' Please be gentle!!');
            alert(`Welcome ${this.user} to VueJS.`)
        }
    }
}
</script>

<style scoped>
    div.comp {
        border: 2px;
    }
</style>