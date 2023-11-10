<template>
  <div>
    <v-app id="inspire">
      <v-main>
        <router-view></router-view>
        <the-snackbar></the-snackbar>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import TheLogin from "./views/TheLogin.vue";
import DateTime from "./components/Todo/DateTime.vue";
import TheSearch from "./components/tools/TheSearch.vue";
import TheSnackbar from "./components/Global/TheSnackbar.vue";
export default {
  components: {
    "the-snackbar": TheSnackbar,
    "the-search": TheSearch,
    "date-time": DateTime,
    "the-login": TheLogin,
  },
  mounted() {
    this.$store.commit("setUserdetails");
    this.$store.dispatch("getTasks");
  },
};
</script>

<style>
.v-app-bar-title__content {
  width: 220px;
}
</style>
<!-- .header-container {
  max-width: none;
} -->

