<template>
  <div>
    <h2>Actors List</h2>
    <ul>
        <li v-for="actor in actorList" :key="actor.name">
            Name: {{ actor.name }} City: {{ actor.city }}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
            actorList: [
                {name: 'Amitabh Bachhan', city: 'Mumbai'},
                {name: 'Kamal Hasan', city: 'Chennai'},
                {name: 'Madhubala', city: 'Delhi'},
                {name: 'Deepika Padukone', city: 'Mumbai'},
                {name: 'Rajnikant', city: 'Chennai'},
            ]
        }
    }
}
</script>

<style>

</style>