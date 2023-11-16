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
    <div class="about pa-6 pb-0">
      <h1>About Vuetify Todo !</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        delectus aperiam, commodi earum, molestias quas odit harum porro
        provident beatae alias quod expedita iusto tempora corporis! Eum
        repellat blanditiis alias, beatae deserunt autem, amet, laborum et
        libero consectetur quae aut quaerat recusandae reprehenderit illo sed
        provident harum error voluptatibus tenetur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        delectus aperiam, commodi earum, molestias quas odit harum porro
        provident beatae alias quod expedita iusto tempora corporis! Eum
        repellat blanditiis alias, beatae deserunt autem, amet, laborum et
        libero consectetur quae aut quaerat recusandae reprehenderit illo sed
        provident harum error voluptatibus tenetur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        delectus aperiam, commodi earum, molestias quas odit harum porro
        provident beatae alias quod expedita iusto tempora corporis! Eum
        repellat blanditiis alias, beatae deserunt autem, amet, laborum et
        libero consectetur quae aut quaerat recusandae reprehenderit illo sed
        provident harum error voluptatibus tenetur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        delectus aperiam, commodi earum, molestias quas odit harum porro
        provident beatae alias quod expedita iusto tempora corporis! Eum
        repellat blanditiis alias, beatae deserunt autem, amet, laborum et
        libero consectetur quae aut quaerat recusandae reprehenderit illo sed
        provident harum error voluptatibus tenetur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        delectus aperiam, commodi earum, molestias quas odit harum porro
        provident beatae alias quod expedita iusto tempora corporis! Eum
        repellat blanditiis alias, beatae deserunt autem, amet, laborum et
        libero consectetur quae aut quaerat recusandae reprehenderit illo sed
        provident harum error voluptatibus tenetur.
      </p>
    </div>

    <v-bottom-navigation class="mb-0 bottom " color="primary" horizontal>
      <v-btn @click="sheet = !sheet">
        <span>Recents</span>

        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn >
        <span>Favorites</span>

        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn>
        <span>Nearby</span>

        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <v-bottom-sheet v-model="sheet">
      <v-sheet class="text-center" height="200px">
        <v-btn class="mt-6" text color="red" @click="sheet = !sheet">
          close
        </v-btn>
        <div class="py-3">
          This is a bottom sheet using the controlled by v-model instead of
          activator
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
import TheSearch from "../components/tools/TheSearch.vue";
import DateTime from "@/components/Todo/DateTime.vue";
export default {
  data() {
    return {
      sheet: false,
      drawer: null,
      items: [
        { title: "Todo", icon: "mdi-format-list-checks", to: "TheTodo" },
        { title: "About", icon: "mdi-help-box", to: "about" },
        { title: "Section", icon: "mdi-check", to: "section" },
      ],
    };
  },
  components: {
    "the-search": TheSearch,
    "date-time": DateTime,
  },
  methods: {
    goTo(name) {
      this.$router.push({ name: name, params: { param: "nwdnuowbfuwnwn " } });
    },
  },
};
</script>

<style scoped>
.header-container {
  max-width: none;
}
div.v-main__wrap {
  padding-bottom: 0px;
}
.bottom {
  bottom: -99px !important;
  background-color: rgba(143, 214, 223, 0.621);
  color: black;
}
</style>
