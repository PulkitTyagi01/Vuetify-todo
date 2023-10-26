<template>
  <div class="home">
    <field-add-task></field-add-task>
    <list-task v-if="$store.state.tasks.length" />
    <no-task v-else></no-task>
    <done-sorting v-if="$store.state.sorting"></done-sorting>
  </div>
</template>

<script>
import DoneSorting from "@/components/Todo/DoneSorting.vue";
import FieldAddTask from "@/components/Todo/FieldAddTask.vue";
import ListTask from "@/components/Todo/ListTask.vue";
import NoTask from "@/components/Todo/NoTask.vue";
export default {
  name: "Home",
  components: {
    "field-add-task": FieldAddTask,
    "list-task": ListTask,
    "no-task": NoTask,
    "done-sorting": DoneSorting,
  },
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    },
  },
};
</script>
