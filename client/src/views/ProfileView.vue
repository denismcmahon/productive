<template>
  <div>
    <h2>Profile</h2>
    <div class="row">
      <div class="card">
        <ul class="list-group" v-if="user">
          <li class="list-group-item">Email: {{ user.email }}</li>
          <li class="list-group-item">Username: {{ user.username }}</li>
          <li class="list-group-item">Name: {{ user.name }}</li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col form-inline">
        <b-form-input v-model="newTask" placeholder="Enter Task" @keyup.enter="add">
        </b-form-input>
        <b-button @click="add" variant="primary" class="ml-3">Add</b-button>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-3">
        <div class="p-2 alert alert-secondary">
          <h3>Back Log</h3>
          <draggable v-model="arrBackLog" group="people" @start="drag=true" @end="drag=false" item-key="id">
            <template #item="{element}">
              <div>{{element.name}}</div>
            </template>
          </draggable>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script> 
import draggable from 'vuedraggable'; 
import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {
      drag: false,
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
