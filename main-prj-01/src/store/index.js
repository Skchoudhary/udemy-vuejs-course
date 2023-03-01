import { createStore } from 'vuex';

import coachStores from './coaches/index.js';
import resquestStores from './requests/index.js';

const store = createStore({
    modules: {
        coaches: coachStores,
        requests: resquestStores,
    },
    state() {
        return {
            userId: 'c3'
        }
    },
    getters: {
        userId(state) {
            return state.userId;
        }
    }
})

export default store;
