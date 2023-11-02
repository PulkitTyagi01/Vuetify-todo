<template>
  <div class="pa-4">
    <p>{{ item.details }}</p>
    <p class="create">Created By - {{ item.createdby }}</p>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style>
p.create{
  font-size:small;
  font-weight: bolder;
  color: rgb(27, 26, 26);
}
</style>