<template>
  <v-dialog :value="true" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5"> Edit Task </v-card-title>
      <v-card-text
        >Are you sure you want to edit this task ?<v-text-field
          v-model="taskTitle"
          @keyup.enter="EditTask(item.id)"
        ></v-text-field
      ></v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('close')"> Cancel </v-btn>
        <v-btn
          color="red darken-1"
          :disabled="taskTitleInvalid"
          text
          @click="EditTask(item.id)"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      taskTitle: null,
    };
  },
  methods: {
    EditTask(id) {
      if (!this.taskTitleInvalid) {
        this.$store.dispatch("editTask", { id: id, taskTitle: this.taskTitle });
        this.$emit("close");
      }
    },
  },
  computed: {
    taskTitleInvalid() {
      return !this.taskTitle || this.taskTitle === this.item.title;
    },
  },
  mounted() {
    this.taskTitle = this.item.title;
  },
};
</script>
