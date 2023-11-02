<template>
  <div>
    <div v-if="timely">
      <v-skeleton-loader
        v-bind="attrs"
        type="card-avatar, article, actions"
      ></v-skeleton-loader>
    </div>
    <div v-else>
      <v-navigation-drawer :mobile-breakpoint="768" v-model="drawer" app>
        <v-img
          class="pa-4 pt-7"
          src="../assets/mon.jpg"
          height="160"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        >
          <v-avatar class="mb-2">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
          <div class="white--text text-subtitle-1 font-weight-bold">
            {{ $store.state.username }}
          </div>
        </v-img>
        <v-list dense nav>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            @click="goTo(item.to)"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-btn class="btn-3 primary" @click="logout">Logout</v-btn>
      </v-navigation-drawer>

      <v-app-bar
        app
        color="#fcb69f"
        dark
        prominent
        height="160"
        src="../assets/mon.jpg"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <v-container class="header-container pa-0">
          <v-row>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <the-search></the-search>
          </v-row>
          <v-row>
            <v-app-bar-title class="text-h4 ml-4">Vuetify-TODO</v-app-bar-title>
          </v-row>
          <v-row>
            <date-time></date-time>
          </v-row>
        </v-container>
      </v-app-bar>
      <div class="home">
        <field-add-task></field-add-task>
        <list-task v-if="$store.state.tasks.length" />
        <no-task v-else></no-task>
        <done-sorting v-if="$store.state.sorting"></done-sorting>
      </div>
    </div>
  </div>
</template>

<script>
import TheSearch from "../components/tools/TheSearch.vue";
import DoneSorting from "@/components/Todo/DoneSorting.vue";
import FieldAddTask from "@/components/Todo/FieldAddTask.vue";
import ListTask from "@/components/Todo/ListTask.vue";
import NoTask from "@/components/Todo/NoTask.vue";
import DateTime from "@/components/Todo/DateTime.vue";
export default {
  data() {
    return {
      drawer: null,
      items: [
        { title: "Todo", icon: "mdi-format-list-checks", to: "TheTodo" },
        { title: "About", icon: "mdi-help-box", to: "about" },
      ],
      attrs: {
        class: "mb-6",
        boilerplate: true,
        elevation: 2,
      },
      timely: true,
    };
  },
  name: "Home",
  components: {
    "field-add-task": FieldAddTask,
    "list-task": ListTask,
    "no-task": NoTask,
    "done-sorting": DoneSorting,
    "the-search": TheSearch,
    "date-time": DateTime,
  },
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    },
  },
  methods: {
    goTo(name) {
      this.$router.push({ name: name, params: { param: "nwdnuowbfuwnwn " } });
    },
    logout() {
      this.$store.commit("logout");
      this.$router.push("/");
    },
  },
  mounted() {
    setTimeout(() => {
      this.timely = false;
    }, 1000);
  },
};
</script>

<style scoped>
.btn-3 {
  top: 55%;
  left: 50%;
  transform: translateX(-50%);
}
</style>
