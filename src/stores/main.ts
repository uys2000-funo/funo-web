export const useMainStore = defineStore("MainStore", {
  state: () => {
    return {
      layout: "default",
    };
  },
  actions: {
    setLayout(value: string) {
      this.layout = value;
    },
  },
  getters: {
    getLayout: (state) => {
      return state.layout;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot));
}
