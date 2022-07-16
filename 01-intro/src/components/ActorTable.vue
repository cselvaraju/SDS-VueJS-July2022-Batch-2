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
        <tr v-for="(actor, index) in actorList" :key="actor.name">
          <td>{{ actor.name }}</td>
          <td>{{ actor.city }}</td>
          <td>
            <button class="btn btn-danger" @click="deleteActor(index)">
                <i class="fa fa-trash-o fa-3x"></i>
            </button>
            <i class="fa-solid fa-snowflake"></i>
          </td>
        </tr>
      </tbody>
    </table>
    <p>
        <button class="btn btn-primary" @click="toggleForm">{{ btnText }}</button>
    </p>
    <div v-if="formFlag">
        <h3>Add Actor Form</h3>
        <label>
            Actor Name: <input type="text" v-model="newActorName">
        </label>
        <br>
        <label>
            Actor City: <input type="text" v-model="newActorCity">
        </label>
        <br>
        <button @click="addActor">Add Actor</button>
    </div>
    <!-- <div v-else>
        No form to show
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      actorList: [
        { name: "Amitabh Bachhan", city: "Mumbai" },
        { name: "Kamal Hasan", city: "Chennai" },
        { name: "Madhubala", city: "Delhi" },
        { name: "Deepika Padukone", city: "Mumbai" },
        { name: "Rajnikant", city: "Chennai" },
      ],
      newActorName: '',
      newActorCity: '',
      formFlag: false,
      btnText: this.formFlag ? 'Hide Form' : 'Show Form',
    };
  },

  methods: {
    deleteActor(ndx) {
        this.actorList.splice(ndx, 1);
    },

    addActor() {
        const actor = {
            name: this.newActorName,
            city: this.newActorCity
        };
        this.actorList.push(actor);
        this.newActorName = this.newActorCity = '';
    },

    toggleForm() {
        this.formFlag = !this.formFlag;
        this.btnText = this.formFlag ? 'Hide Form' : 'Show Form'
    }
  }
};
</script>

<style>
</style>