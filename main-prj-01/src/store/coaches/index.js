import mutations from './mutations.js';
import getters from './getters.js';
import actions from './actions.js';

export default {
    namespaced: true,
    state() {
        return {
            coaches: [
                {
                    id: 'c1',
                    firstName: 'sandeep',
                    lastName: 'choudhary',
                    description: 'description_description_description_description_description_description',
                    areas: ['fronend', 'backend'],
                    hourlyRate: 12
                },
                {
                    id: 'c2',
                    firstName: 'sandeep',
                    lastName: 'choudhary',
                    description: 'description_description_description_description_description_description',
                    areas: ['career', 'backend', 'automation'],
                    hourlyRate: 34
                }
            ]
        }
    },
    actions,
    getters,
    mutations,
}