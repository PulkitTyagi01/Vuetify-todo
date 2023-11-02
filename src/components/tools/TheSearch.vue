<template>
  <v-text-field
    :value="$store.state.search"
    @input="$store.commit('setSearch', $event)"
    @focus="searchClosed = false"
    @blur="searchClosed = true"
    class="mt-1 expanding-search"
    :class="{ closed: searchClosed && !$store.state.search }"
    placeholder="Search"
    prepend-inner-icon="mdi-magnify"
    filled
    dense
    clearable
  ></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      search: null,
      searchClosed: true,
    };
  },
};
</script>

<style scoped>
.v-input__slot::after {
  border: none !important;
  border-color: transparent !important;
}
.v-input__slot::before {
  border-color: transparent !important;
}
.v-input.expanding-search.closed {
  max-width: 45px !important;
}

.closed .v-input__slot {
  background: transparent !important;
}

.closed .v-input__slot:hover {
  cursor: pointer;
}
</style>
