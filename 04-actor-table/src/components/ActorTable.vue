<template>
  <div>
    <h2>List of Actors</h2>

    <table class="table table-hover">
      <thead>
        <th>Name</th>
        <th>City</th>
        <th>Action</th>
      </thead>
      <tbody>
        <tr
          v-for="(actor, index) in actorList"
          :key="actor.id"
          @dblclick="editActor(index)"
          @keyup.esc="cancelEdit(index)"
        >
          <actor-item
            :actor="actor"
            :index="index"
            :selectedIndex="selectedIndex"
            @edit-actor="editActor($event)"
            @delete-actor="deleteActor($event)"
            @save-actor="saveActor($event)"
            @cancel-edit="cancelEdit($event)"
          ></actor-item>
        </tr>
      </tbody>
    </table>
    <p>
      <button class="btn btn-primary" @click="toggleForm">{{ btnText }}</button>
    </p>
    <div v-if="formFlag">
      <h3>Add Actor Form</h3>
      <label> Actor Name: <input type="text" v-model="newActorName" /> </label>
      <br />
      <label> Actor City: <input type="text" v-model="newActorCity" /> </label>
      <br />
      <button @click="addActor">Add Actor</button>
    </div>
    <!-- <div v-else>
        No form to show
    </div> -->
  </div>
</template>

<script>
import ActorItem from "./ActorItem.vue";

export default {
  components: {
    ActorItem,
  },

  data() {
    return {
      actorList: [
        { id: 101, name: "Amitabh Bachhan", city: "Mumbai" },
        { id: 102, name: "Kamal Hasan", city: "Chennai" },
        { id: 103, name: "Madhubala", city: "Delhi" },
        { id: 104, name: "Deepika Padukone", city: "Mumbai" },
        { id: 105, name: "Rajnikant", city: "Chennai" },
      ],
      newActorName: "",
      newActorCity: "",
      formFlag: false,
      btnText: this.formFlag ? "Hide Form" : "Show Form",
      selectedActor: {},
      selectedIndex: -1,
    };
  },

  methods: {
    // deleteActor(id) {
    //     this.actorList = this.actorList.filter(item => item.id !== id);
    // },

    deleteActor(ndx) {
      this.actorList.splice(ndx, 1);
    },

    addActor() {
      const actor = {
        name: this.newActorName,
        city: this.newActorCity,
      };
      this.actorList.push(actor);
      this.newActorName = this.newActorCity = "";
    },

    editActor(ndx) {
      this.selectedIndex = ndx;
      this.selectedActor = {
        id: this.actorList[ndx].id,
        name: this.actorList[ndx].name,
        city: this.actorList[ndx].city,
      };
    },

    saveActor(eventObject) {
      this.actorList[eventObject.index] = eventObject.actor;
      this.selectedIndex = -1;
    },

    cancelEdit(ndx) {
      console.log(this.selectedActor);
      this.actorList[ndx] = Object.assign({}, this.selectedActor);
      this.selectedIndex = -1;
    },

    toggleForm() {
      this.formFlag = !this.formFlag;
      this.btnText = this.formFlag ? "Hide Form" : "Show Form";
    },
  },
};
</script>

<style>
</style>