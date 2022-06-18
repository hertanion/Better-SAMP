<template>
  <div class="my-12">
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
        <tr v-for="item in getServers" :key="item.IP">
          <td>{{ item.name }}</td>
          <td>{{ item.players }}</td>
          <td>{{ item.ping }}</td>
          <td>{{ item.mode }}</td>
          <td>{{ item.lang }}</td>
          <v-btn class="mx-3 my-3" small>
            <v-icon>mdi-play</v-icon>
          </v-btn>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Favorites",

  computed: mapGetters(["getServers"])
};
</script>
