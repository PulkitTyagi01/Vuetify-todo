<template>
  <div>
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
    <v-stepper non-linear>
      <v-stepper-header>
        <v-stepper-step editable step="1"> WHY </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step editable step="2"> WHEN </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3" editable> HOW ? </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card class="mb-6 pa-5 " :class="switch1 ? 'card' : 'cards'" height="200px">
            <div class="my-class">
              <h3>Step - 1</h3>
              <v-switch v-model="switch1"></v-switch>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni ad
              similique, pariatur ipsam nesciunt, expedita cupiditate voluptates
              maiores eos iure rerum reiciendis laborum officia illo nemo
              inventore error accusamus dicta explicabo tempore aspernatur?
              Dignissimos sed ex, at voluptatum quaerat dolor cum sint. Veniam
              sed obcaecati consectetur reprehenderit voluptatibus nam
              praesentium quis vero nostrum odit? Voluptas at voluptatem iste
              sint distinctio mollitia, fugiat porro laudantium repudiandae ea,
              ducimus eligendi nesciunt dolorum beatae veritatis voluptatum
              cupiditate. Non animi unde iste veritatis aperiam expedita
              explicabo iusto deserunt, qui, aut similique facilis quos ipsum
              culpa maxime dignissimos? Numquam aliquam repellat amet fuga
              consequatur aspernatur?
            </p>
          </v-card>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card class="mb-6 pa-5" :class="switch1 ? 'card' : 'cards'" height="200px">
            <div class="my-class">
              <h3>Step - 2</h3>
              <v-switch v-model="switch1"></v-switch>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni ad
              similique, pariatur ipsam nesciunt, expedita cupiditate voluptates
              maiores eos iure rerum reiciendis laborum officia illo nemo
              inventore error accusamus dicta explicabo tempore aspernatur?
              Dignissimos sed ex, at voluptatum quaerat dolor cum sint. Veniam
              sed obcaecati consectetur reprehenderit voluptatibus nam
              praesentium quis vero nostrum odit? Voluptas at voluptatem iste
              sint distinctio mollitia, fugiat porro laudantium repudiandae ea,
              ducimus eligendi nesciunt dolorum beatae veritatis voluptatum
              cupiditate. Non animi unde iste veritatis aperiam expedita
              explicabo iusto deserunt, qui, aut similique facilis quos ipsum
              culpa maxime dignissimos? Numquam aliquam repellat amet fuga
              consequatur aspernatur?
            </p></v-card
          >
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card class="mb-6 pa-5" :class="switch1 ? 'card' : 'cards'" height="200px">
            <div class="my-class">
              <h3>Step - 3</h3>
              <v-switch v-model="switch1"></v-switch>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni ad
              similique, pariatur ipsam nesciunt, expedita cupiditate voluptates
              maiores eos iure rerum reiciendis laborum officia illo nemo
              inventore error accusamus dicta explicabo tempore aspernatur?
              Dignissimos sed ex, at voluptatum quaerat dolor cum sint. Veniam
              sed obcaecati consectetur reprehenderit voluptatibus nam
              praesentium quis vero nostrum odit? Voluptas at voluptatem iste
              sint distinctio mollitia, fugiat porro laudantium repudiandae ea,
              ducimus eligendi nesciunt dolorum beatae veritatis voluptatum
              cupiditate. Non animi unde iste veritatis aperiam expedita
              explicabo iusto deserunt, qui, aut similique facilis quos ipsum
              culpa maxime dignissimos? Numquam aliquam repellat amet fuga
              consequatur aspernatur?
            </p></v-card
          >
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
import DateTime from "@/components/Todo/DateTime.vue";
import TheSearch from "@/components/tools/TheSearch.vue";
export default {
  components: {
    DateTime,
    TheSearch,
  },
  data() {
    return {
      switch1: false,
      drawer: false,
      items: [
        { title: "Todo", icon: "mdi-format-list-checks", to: "TheTodo" },
        { title: "About", icon: "mdi-help-box", to: "about" },
        { title: "Section", icon: "mdi-check", to: "section" },
      ],
    };
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
};
</script>

<style scoped>
h3 {
  text-align: center;
  margin-bottom: 5px;
  padding: 3px;
}
.header-container {
  max-width: none;
}
.btn-3 {
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
}
.cards {
  background-color: rgba(138, 179, 165, 0.441);
}
.card {
  background-color: rgb(8, 8, 8) !important;
  color: white;
}
.my-class {
  display: flex;
  justify-content: space-between;
}
</style>
