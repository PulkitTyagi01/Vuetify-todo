<template>
  <v-btn class="button-sort" @click="doneSorting" color="primary">
    Done Sorting
  </v-btn>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    doneSorting() {
      this.$store.commit("toggleSorting");
    },
  },
};
</script>

<style scoped>
.button-sort {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
