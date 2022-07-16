<template>
  <div id="parent">
    <h1>Parent Component</h1>
    <label>
      Enter favourite fruit:
      <input type="text" v-model="favFruit" />
    </label>
    <button @click="sendDataToChild">Send Data to Child</button>

    <p>Child Favourite Dish is: {{ childFavDish }}</p>

    <child-component
      :parentFavFruit="dataForChild"
      @dish-event="getChildFavDish($event)"
    >
    </child-component>
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent.vue";

export default {
  components: {
    ChildComponent,
  },

  data() {
    return {
      favFruit: "",
      dataForChild: "",
      childFavDish: "",
    };
  },

  methods: {
    sendDataToChild() {
      this.dataForChild = this.favFruit;
    },

    getChildFavDish(evt) {
      // console.log(evt);
      this.childFavDish = evt;
    },
  },
};
</script>

<style scoped>
#parent {
  border: 3px solid red;
  margin: 3px;
  padding: 3px;
}
</style>