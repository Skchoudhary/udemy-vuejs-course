export default {
    requestCoach(state, payload) {
        state.requests.push(payload)
    },
    setRequests(store, payload) {
        store.requests = payload;
    }
}