<template v-slot:extension>
  <v-app>
    <Header />
  </v-app>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",
  mounted() {
    this.$store.dispatch("loadServers");
  },
  components: {
    Header,
  },
};
</script>
