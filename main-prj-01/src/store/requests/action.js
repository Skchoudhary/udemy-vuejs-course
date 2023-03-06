export default {
    async requestCoach(context, payload) {
        const data = {
            email: payload.email,
            message: payload.message,
        }

        const response = await fetch(`https://web-coach-124f7-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${payload.coach_id}.json`, {
            method: 'POST',
            body: JSON.stringify(data)
        });
        const responseData = await response.json();
        if(!response.ok){
            const error = new Error(responseData.message || 'Not able to save fetch requests.')
            throw error;
        }
        data.id = responseData.lastName
        data.coachId = payload.coach_id
        context.commit('requestCoach', data);
    },
    async loadRequests(context) {
        const coach_id = context.rootGetters.userId;
        const response = await fetch(`https://web-coach-124f7-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${coach_id}.json`)

        const responseData = await response.json();
        if (!response.ok) {
            const error = new Error(responseData.message || 'Something went wrong!');
            throw error;
        }
        const requests =[];
        for (let key in responseData){
            let request = {
                id: key,
                message: responseData[key].message,
                email: responseData[key].email,
                coachId: coach_id
            }
            requests.push(request);
        }
        context.commit('setRequests',requests)
    }
}