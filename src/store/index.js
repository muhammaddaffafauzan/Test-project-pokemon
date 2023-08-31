import { createStore } from "vuex";
import pokemon from "./modules/pokemon";
const store = createStore({
  state: {
    isLoading: false,
  },
  modules: {
   pokemon
  },
});

export default store;