<template>
  <v-card ref="form" max-width="350" max-height="500" class="login-form">
    <div class="text-decoration-underline pt-1">
      <p class="text-center text--primary font-weight-bold text-h5">Registration</p>
    </div>
    
    <v-card-text>
      <v-text-field
        v-model="username"
        label="Username"
        :rules="[() => !!username || 'This field is required']"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        :rules="[() => !!password || 'This field is required']"
        type="password"
        label="Password"
        required
      ></v-text-field>
    </v-card-text>
    <v-divider class="mt-5"></v-divider>
    <v-card-actions>
      <v-btn text @click="cancel"> Cancel </v-btn>
      <v-spacer></v-spacer>

      <v-btn
        class="btn"
        text
        @click="registration({ username: username, password: password })"
      >
        Submit
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    registration(payload) {
      if (this.username !== "" && this.password !== "") {
        this.$store.dispatch("registerUser", payload);
        setTimeout(() => {
          this.$router.push("/todo");
        }, 500);
      }
    },
    cancel() {
      this.username = "";
      this.password = "";
    },
  },
};
</script>

<style scoped>
.login-form {
  margin-top: -15px;
  top: 50% !important;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.5) !important;
  background-color: aliceblue;
}
.btn:hover {
  background-color: rgb(4, 154, 241);
}
.v-main__wrap {
  margin: auto;
}

.btn-2 {
  border: none;
}
</style>
