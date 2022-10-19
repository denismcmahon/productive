<template>
  <div>
    <h2>Profile</h2>
    <div class="card">
      <ul class="list-group" v-if="user">
        <li class="list-group-item">Email: {{ user.email }}</li>
        <li class="list-group-item">Username: {{ user.username }}</li>
        <li class="list-group-item">Name: {{ user.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script> 
import draggable from 'vuedraggable'; 
import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {
      // for new tasks
      newTask: "",
      // 4 arrays to keep track of our 4 statuses
      arrBackLog: [
        { name: "Code Sign Up Page" },
        { name: "Test Dashboard" },
        { name: "Style Registration" },
        { name: "Help with Designs" },
      ],
      arrInProgress: [],
      arrTested: [],
      arrDone: []
    }
  },
  computed: mapGetters(['user']),
  methods: {
    ...mapActions(['getProfile']),
    // add new tasks method
    add: function() {
      if(this.newTask) {
        this.arrBackLog.push({ name: this.newTask });
        this.newTask = "";
      }
    }
  },
  components: {
    // import draggable as a component
    draggable
  },
  created() {
    this.getProfile();
  },
};
</script>

<style></style>
