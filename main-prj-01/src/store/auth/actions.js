export default {
    async login(context, payload){
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBfteY760D27NDW52uYDM8xdEE4vOTPUZ4 ', {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        })
        const responseData = await response.json();

        if (!response.ok){
            const error = responseData.message || 'Cannot signup the user';
            throw error;
        }

        context.commit('setUser', {
            userId: responseData.localId,
            token: responseData.idToken,
            tokenExpiration: responseData.expiresIn
        });
        

    },
    async signup(context, payload){
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBfteY760D27NDW52uYDM8xdEE4vOTPUZ4 ', {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        })

        const responseData = await response.json();

        if (!response.ok){
            const error = responseData.message || 'Cannot signup the user';
            throw error;
        }

        context.commit('setUser', {
            userId: responseData.localId,
            token: responseData.idToken,
            tokenExpiration: responseData.expiresIn
        })

    },
    logout(context){
        context.commit('setUser', {
            userId: null,
            token: null,
            tokenExpiration: null
        })
    }
}