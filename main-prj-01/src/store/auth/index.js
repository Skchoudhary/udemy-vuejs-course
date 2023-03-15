import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';

export default {
    state(){
        return {
            userId: null,
            toke: null,
            didAutoLogout: false
        }
    },
    mutations,
    getters,
    actions
}