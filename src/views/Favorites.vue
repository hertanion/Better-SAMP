<template>
  <div>
    <v-simple-table>
      <thead>
        <tr>
          <th class="text-left">HostName</th>
          <th class="text-left">Players</th>
          <th class="text-left">Ping</th>
          <th class="text-left">Mode</th>
          <th class="text-left">Language</th>
          <th class="text-left">Game</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in servers" :key="item.hostname">
          <td>{{ item.hostname }}</td>
          <td>{{ item.players }}</td>
          <td>{{ item.ping }}</td>
          <td>{{ item.mode }}</td>
          <td>{{ item.lang }}</td>
          <v-btn class="mx-3 my-2" small fab>
            <v-icon>mdi-play</v-icon>
          </v-btn>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
const { ipcRenderer } = require("electron");
export default {
  name: "Favorites",
  data: function() {
    return {
      servers: []
    };
  },

  beforeCreate: function () {
    ipcRenderer.send("Favorite:Get");
    ipcRenderer.on("Favorite:Data", (event, res) => {
      this.servers = res
    })
    ipcRenderer.off()
  },
};
</script>
