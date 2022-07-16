<template>
  <td @keyup.esc="cancelEdit">
    <span v-if="index !== selectedIndex">{{ selectedActor.name }}</span>
    <span v-else>
      <input type="text" v-model="selectedActor.name" />
    </span>
  </td>
  <td @keyup.esc="cancelEdit">
    <span v-if="index !== selectedIndex">
      {{ selectedActor.city }}
    </span>
    <span v-else>
      <input type="text" v-model="selectedActor.city" />
    </span>
  </td>
  <td>
    <span v-if="index !== selectedIndex">
      <button class="btn btn-primary" @click="editActor">
        <i class="fa fa-edit"></i>
      </button>
      <button class="btn btn-danger" @click="deleteActor">
        <i class="fa fa-trash-o"></i>
      </button>
    </span>
    <span v-else>
      <button class="btn btn-primary" @click="cancelEdit">
        <i class="fa fa-undo"></i>
      </button>
      <button class="btn btn-danger" @click="saveActor">
        <i class="fa fa-save"></i>
      </button>
    </span>
  </td>
</template>

<script>
export default {
  props: ["actor", "index", "selectedIndex"],

  emits: ["delete-actor", "edit-actor", "save-actor", "cancel-edit"],

  data() {
    return {
      selectedActor: Object.assign({}, this.actor),
    };
  },

  methods: {
    // deleteActor() {
    //     this.$emit('delete-actor', this.actor.id);
    // }
    deleteActor() {
      this.$emit("delete-actor", this.index);
    },

    editActor() {
      this.$emit("edit-actor", this.index);
    },

    saveActor() {
        this.$emit('save-actor', {
            index: this.index,
            actor: this.selectedActor
        });
    },

    cancelEdit() {
        this.selectedActor = this.actor;
        this.$emit('cancel-edit', this.index);
    },
  },
};
</script>

<style>
</style>