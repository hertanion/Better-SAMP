<template v-slot:default>
  <v-simple-table dark>
    <template v-slot:default>
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
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: "Favorites",
  data() {
    return {
      servers: [
        {
          hostname: "Test server",
          players: 999,
          ping: 100,
          mode: "Standart",
          lang: "Russian",
        },
      ],
    };
  },
};
</script>
