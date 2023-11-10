<template>
  <div class="notfound">
    <h3>ERROR 404 --- PAGE YOU ARE LOOKING FOR DOES NOT EXIST</h3>
    <v-btn class="btn-4" outlined @click="gototodo">Get Me Out Of Here !</v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    gototodo() {
      this.$router.push("/todo");
    },
  },
};
</script>

<style scoped>
.notfound {
  margin-top: 50px;
  text-align: center;
  color: rgb(154, 146, 146);
  font-size: x-large;
}
.btn-4{
    border-color: rgb(142, 140, 138);
}
</style>
