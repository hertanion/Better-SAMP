<template v-slot:extension>
  <v-app>
    <Header />
  </v-app>
</template>

<script>
//const { ipcRenderer } = require("electron");
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>
