export default {
    async registerCoach(context, data) {
        const userId = context.rootGetters.userId;
        const coach = {
            firstName: data.first,
            lastName: data.last,
            hourlyRate: data.rate,
            dscription: data.desc,
            areas: data.areas
        };

        const resposne = await fetch(`https://web-coach-124f7-default-rtdb.asia-southeast1.firebasedatabase.app/coaches/${userId}.json`, {
            method: 'PUT',
            body: JSON.stringify(coach)
        });

        // const resposneData = await resposne.json();
        if (!resposne.ok) {
            // error
        }
        context.commit('registerCoach', {
            ...coach,
            id: userId
        });
    }
}