<template>
  <div>
    <v-list-item
      @click="doneTask(item.id)"
      :class="{ 'blue lighten-4 ': item.done }"
    >
      <template v-slot:default>
        <v-list-item-action>
          <v-checkbox :input-value="item.done" color="primary"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            >{{ item.title }}</v-list-item-title
          >
        </v-list-item-content>
        <v-list-item-action v-if="item.dueDate">
          <v-list-item-action-text>
            <v-icon small>mdi-calendar</v-icon>
            {{ item.dueDate | niceDate }}</v-list-item-action-text
          >
        </v-list-item-action>
        <v-list-item-action>
          <task-menu :task="item"></task-menu>
        </v-list-item-action>
        <v-list-item-action v-if="$store.state.sorting">
          <v-btn color="primary" icon class="handle">
            <v-icon>mdi-drag-horizontal-variant</v-icon>
          </v-btn>
        </v-list-item-action>
      </template>
    </v-list-item>
    <!-- <v-divider></v-divider> -->
    <extra-details :item="item" v-if="item.done"></extra-details>
    <v-divider></v-divider>
  </div>
</template>

<script>
import { format } from "date-fns";
import ExtraDetails from "./ExtraDetails.vue";
import TaskMenu from "./TaskMenu.vue";
export default {
  props: ["item"],
  components: {
    "task-menu": TaskMenu,
    "extra-details": ExtraDetails,
  },
  filters: {
    niceDate(value) {
      return format(new Date(value), "MMM dd");
    },
  },
  methods: {
    doneTask(id) {
      this.$store.dispatch("checkTask", id);
    },
  },
};
</script>

<style scoped>
.sortable-drag {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}
</style>
