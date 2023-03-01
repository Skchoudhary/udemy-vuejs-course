export default {
    requestCoach(context, payload) {
        const data = {
            email: payload.email,
            message: payload.message,
            id: new Date().toDateString(),
            coachId: payload.coach_id,
        }
        context.commit('requestCoach', data);
    }
}