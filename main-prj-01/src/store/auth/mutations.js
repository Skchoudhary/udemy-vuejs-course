export default {
    setUser(state, payload){
        state.userId = payload.userId;
        state.token = payload.token;
    },
    setAutoLogout(state) {
        state.didAutoLogout = true;
      }
}