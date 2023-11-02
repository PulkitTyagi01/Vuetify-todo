<template>
  <v-text-field
    @keyup.enter="addTasks"
    v-model="taskTitle"
    class="pa-3"
    outlined
    label="Add Task"
    clearable
    hide-details
  >
    <template v-slot:append>
      <v-icon @click="addTasks" color="primary" :disabled="!taskTitle"
        >mdi-plus</v-icon
      >
    </template>
  </v-text-field>
</template>

<script>
export default {
  data() {
    return {
      taskTitle: "",
    };
  },
  methods: {
    addTasks() {
      console.log(this.user);
      if (this.taskTitle) {
        this.$store.dispatch("addTask", {
          title: this.taskTitle,
          user: this.user,
        });
        this.taskTitle = "";
      }
    },
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>
