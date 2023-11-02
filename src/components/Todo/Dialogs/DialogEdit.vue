<template>
  <v-dialog :value="true" persistent max-width="400">
    <v-card>
      <v-card-title class="text-h5"> Edit Task </v-card-title>
      <v-card-text
        >Are you sure you want to edit this task ?
        <v-text-field
          v-model="taskTitle"
          @keyup.enter="EditTask(item.id)"
        ></v-text-field>
        <v-textarea
          filled
          :value="item.details"
          v-model="taskDetails"
          name="input-7-4"
          label="Details"
        ></v-textarea>
        <h4>Created By - {{item.createdby}}</h4>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('close')"> Cancel </v-btn>
        <v-btn
          color="red darken-1"
          :disabled="taskInvalid"
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
      taskDetails: null,
    };
  },
  methods: {
    EditTask(id) {
      if (!this.taskTitleInvalid) {
        this.$store.dispatch("editTask", {
          id: id,
          taskTitle: this.taskTitle,
          taskDetails: this.taskDetails,
        });
        this.$emit("close");
      }
    },
  },
  computed: {
    taskInvalid() {
      return (
        !this.taskTitle ||
        !this.taskDetails ||
        (this.taskTitle === this.item.title &&
          this.taskDetails === this.item.details)
      );
    },
    user() {
      return this.$store.getters.user;
    },
  },
  mounted() {
    this.taskTitle = this.item.title;
    this.taskDetails = this.item.details;
  },
};
</script>
