<template>
  <div class="main-div">
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
            <v-card
              class="mb-6 pa-5 cardss"
              :class="switch1 ? 'card' : 'cards'"
              height="200px"
            >
              <div class="my-class">
                <h3>Step - 1</h3>
                <v-switch v-model="switch1"></v-switch>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
                ad similique, pariatur ipsam nesciunt, expedita cupiditate
                voluptates maiores eos iure rerum reiciendis laborum officia
                illo nemo inventore error accusamus dicta explicabo tempore
                aspernatur? Dignissimos sed ex, at voluptatum quaerat dolor cum
                sint. Veniam sed obcaecati consectetur reprehenderit
                voluptatibus nam praesentium quis vero nostrum odit? Voluptas at
                voluptatem iste sint distinctio mollitia, fugiat porro
                laudantium repudiandae ea, ducimus eligendi nesciunt dolorum
                beatae veritatis voluptatum cupiditate. Non animi unde iste
                veritatis aperiam expedita explicabo iusto deserunt, qui, aut
                similique facilis quos ipsum culpa maxime dignissimos? Numquam
                aliquam repellat amet fuga consequatur aspernatur?
              </p>
              <p>
                You Rated - <span class="rating">{{ rating }}</span>
              </p>
            </v-card>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card
              class="mb-6 pa-5 cardss"
              :class="switch1 ? 'card' : 'cards'"
              height="200px"
            >
              <div class="my-class">
                <h3>Step - 2</h3>
                <v-switch v-model="switch1"></v-switch>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
                ad similique, pariatur ipsam nesciunt, expedita cupiditate
                voluptates maiores eos iure rerum reiciendis laborum officia
                illo nemo inventore error accusamus dicta explicabo tempore
                aspernatur? Dignissimos sed ex, at voluptatum quaerat dolor cum
                sint. Veniam sed obcaecati consectetur reprehenderit
                voluptatibus nam praesentium quis vero nostrum odit? Voluptas at
                voluptatem iste sint distinctio mollitia, fugiat porro
                laudantium repudiandae ea, ducimus eligendi nesciunt dolorum
                beatae veritatis voluptatum cupiditate. Non animi unde iste
                veritatis aperiam expedita explicabo iusto deserunt, qui, aut
                similique facilis quos ipsum culpa maxime dignissimos? Numquam
                aliquam repellat amet fuga consequatur aspernatur?
              </p>
              <p>You Rated {{ rating }}</p>
            </v-card>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card
              class="mb-6 pa-5 cardss"
              :class="switch1 ? 'card' : 'cards'"
              height="200px"
            >
              <div class="my-class">
                <h3>Step - 3</h3>
                <v-switch v-model="switch1"></v-switch>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
                ad similique, pariatur ipsam nesciunt, expedita cupiditate
                voluptates maiores eos iure rerum reiciendis laborum officia
                illo nemo inventore error accusamus dicta explicabo tempore
                aspernatur? Dignissimos sed ex, at voluptatum quaerat dolor cum
                sint. Veniam sed obcaecati consectetur reprehenderit
                voluptatibus nam praesentium quis vero nostrum odit? Voluptas at
                voluptatem iste sint distinctio mollitia, fugiat porro
                laudantium repudiandae ea, ducimus eligendi nesciunt dolorum
                beatae veritatis voluptatum cupiditate. Non animi unde iste
                veritatis aperiam expedita explicabo iusto deserunt, qui, aut
                similique facilis quos ipsum culpa maxime dignissimos? Numquam
                aliquam repellat amet fuga consequatur aspernatur?
              </p>
              <p>You Rated {{ rating }}</p>
            </v-card>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
      <!-- <div v-if="dailogRating">
      <dialog-rating></dialog-rating>
    </div> -->
    </div>
    <div class="rater-div" id="app">
      <v-app id="inspire">
        <div class="text-center">
          <v-dialog v-model="dialog" width="300">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
                Rate Me
              </v-btn>
            </template>

            <v-card class="elevation-16 mx-auto" width="300">
              <v-card-title class="text-h5"> Rate Our Framework </v-card-title>
              <v-card-text>
                If you enjoy using Vuetify, please take a few seconds to rate
                your experience with the framework. It really helps!

                <div class="text-center mt-12">
                  <v-rating
                    v-model="rating"
                    color="yellow darken-3"
                    background-color="grey darken-1"
                    empty-icon="$ratingFull"
                    half-increments
                    hover
                    large
                  ></v-rating>
                </div>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions class="justify-space-between bomber">
                <v-btn text @click="dialog = false"> No Thanks </v-btn>
                <v-btn color="primary" text @click="dialog = false">
                  Rate Now
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-app>
    </div>
  </div>
</template>

<script>
import DialogRating from "@/components/Todo/Dialogs/DialogRating.vue";
import DateTime from "@/components/Todo/DateTime.vue";
import TheSearch from "@/components/tools/TheSearch.vue";
export default {
  components: {
    rating: null,
    DateTime,
    TheSearch,
    DialogRating,
  },
  data() {
    return {
      switch1: false,
      drawer: false,
      dialog: false,
      dialogRating: true,
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
.rating {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: bolder;
}
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

.cardss {
  height: 100% !important;
}

.rater-div {
  min-height: 0vh !important;
}
.main-div {
  padding-bottom: 10px !important;
}
</style>
