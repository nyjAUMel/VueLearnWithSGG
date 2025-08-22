<template>
  <div class="container">
    <Section />
    <List />
  </div>
</template>

<script>
import Section from "./components/Search.vue";
import List from "./components/List.vue";
export default {
  name: "AppComponent",
  components: {
    Section,
    List,
  },
};
</script>

<style scoped>
</style>