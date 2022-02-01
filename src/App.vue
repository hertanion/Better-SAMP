<template v-slot:extension>
  <v-app>
    <Header />
  </v-app>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",
  data: function() {
    return {
      // servers: [],
    };
  },
  components: {
    Header,
  },
};
</script>
