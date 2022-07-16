<template>
  <div id="child">
    <h1>Child Component</h1>
    Parent favourite fruit is: {{ parentFavFruit }}
    <p>
        <label>
            Favourite Dish: 
            <input type="text" v-model="favDish">
        </label> 
        <button @click="sendDataToParent">Send data to Parent</button>
    </p>
  </div>
</template>

<script>
export default {
    props: [ 'parentFavFruit' ],

    data() {
        return {
            favDish: '',
        }
    },

    methods: {
        sendDataToParent() {
            this.$emit('dish-event', this.favDish);
        },
    }
}
</script>

<style scoped>
    #child {
        border: 3px solid blue;
        margin: 3px;
        padding: 3px;
    }
</style>