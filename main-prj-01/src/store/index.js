import { createStore } from 'vuex';

import coachStores from './coaches/index.js';
import resquestStores from './requests/index.js';
import authStores from './auth/index.js';

const store = createStore({
    modules: {
        coaches: coachStores,
        requests: resquestStores,
        auth: authStores,
    },
})

export default store;
