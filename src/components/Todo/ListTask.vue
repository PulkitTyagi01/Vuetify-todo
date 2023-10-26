<template>
  <v-list flat class="pt-0">
    <draggable :list="$store.getters.tasksfiltered" handle=".handle">
      <the-task
        v-for="item in $store.getters.tasksfiltered"
        :key="item.id"
        :item="item"
      ></the-task>
    </draggable>
  </v-list>
</template>

<script>
import draggable from "vuedraggable";
import TheTask from "./TheTask.vue";
export default {
  components: {
    "the-task": TheTask,
    draggable,
  },
};
</script>
