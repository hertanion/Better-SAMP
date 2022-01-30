<template>
  <div>
    <v-system-bar fixed style="-webkit-app-region: drag">
      <v-icon>mdi-message</v-icon>
      <span>Better SA-MP 0.3.7</span>
      <v-spacer></v-spacer>
      <v-icon @click="toTrayApp" style="-webkit-app-region: no-drag"
        >mdi-minus</v-icon
      >
      <v-icon @click="closeApp" style="-webkit-app-region: no-drag"
        >mdi-close</v-icon
      >
    </v-system-bar>
    <v-card class="pt-5" fixed>
      <v-tabs grow v-model="current_tab" color="#7d7d6c">
        <v-tabs-slider dark></v-tabs-slider>
        <v-tab v-for="tab of tabs" :key="tab.id" :to="tab.route">
          {{ tab.name }}
        </v-tab>
      </v-tabs>
    </v-card>
    <router-view></router-view>
  </div>
</template>

<script>
const { ipcRenderer } = require("electron");
export default {
  data: () => ({
    current_tab: "/",
    tabs: [
      { id: 0, name: "Favorites", route: "/" },
      { id: 1, name: "Internet", route: "/internet" },
      { id: 2, name: "Addons", route: "/addons" },
      { id: 3, name: "Settings", route: "/settings" },
    ],
  }),

  methods: {
    closeApp: () => {
      ipcRenderer.send("Click:Close");
    },

    toTrayApp: () => {
      ipcRenderer.send("Click:ToTray");
    },
  },
};
</script>
