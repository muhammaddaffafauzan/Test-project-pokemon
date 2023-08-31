import { createStore } from "vuex";
import data from "./modules/data";
const store = createStore({
  state: {
    isLoading: false,
  },
  modules: {
   data
  },
});

export default store;