export default {
    registerCoach(store, payload) {
        store.coaches.push(payload);
    },
    setCoaches(store, payload) {
        store.coaches = payload;
    }
}