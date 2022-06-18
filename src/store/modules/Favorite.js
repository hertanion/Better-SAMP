import { ipcRenderer } from "electron";

export default {
  state: {
    servers: [],
  },
  mutations: {
    updateServers(state, servers) {
      state.servers = servers;
    },
  },
  actions: {
    loadServers(ctx) {
      ipcRenderer.on("Favorite:Data", (event, res) => {
        ctx.commit("updateServers", res);
      });
      ipcRenderer.send("Favorite:Get");
    },
  },
  getters: {
    getServers(state) {
      console.log("call getServers")
      return state.servers;
    },
  },
};
