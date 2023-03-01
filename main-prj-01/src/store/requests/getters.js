export default {
    requests(state, _1, _2, rootGetters) {
        const coachId = rootGetters.userId;
        return state.requests.filter(req => req.coachId === coachId);

    },
    hasRequests(state) {
        return state.requests && state.requests.length > 0;
    }
}