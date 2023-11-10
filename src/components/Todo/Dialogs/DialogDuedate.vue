<template>
  <v-dialog
    ref="dialog"
    :value="true"
    :return-value.sync="dateRange"
    persistent
    width="290px"
  >
    <v-date-picker
      v-model="dateRange"
      :min="todayISOString"
      :range="true"
      scrollable
    >
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
      todayISOString: new Date().toISOString().substr(0, 10),
      dateRange: [],
    };
  },
  methods: {
    saveDate() {
      let payload = {
        id: this.item.id,
        start: this.dateRange[0],
        end: this.dateRange[1],
      };
      this.$store.dispatch("updateDate", payload);
      this.$emit("close");
    },
  },
};
</script>
