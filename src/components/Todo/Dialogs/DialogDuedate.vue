<template>
  <v-dialog
    ref="dialog"
    :value="true"
    :return-value.sync="date"
    persistent
    width="290px"
  >
    <v-date-picker v-model="date" scrollable>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="$emit('close')"> Cancel </v-btn>
      <v-btn text color="primary" @click="saveDate"> OK </v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      date: null,
    };
  },
  methods: {
    saveDate() {
      let payload = {
        id: this.item.id,
        dueDate: this.date,
      };
      this.$store.dispatch("updateDate", payload);
      this.$emit("close");
    },
  },
  mounted() {
    if (this.item.dueDate) {
      this.date = this.item.dueDate;
    }
  },
};
</script>
