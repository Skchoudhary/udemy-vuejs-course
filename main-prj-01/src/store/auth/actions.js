let timer;

export default {
    async auth(context, payload){
        const mode = payload.mode;
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBfteY760D27NDW52uYDM8xdEE4vOTPUZ4';

        if (mode === 'signup'){
           url =  'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBfteY760D27NDW52uYDM8xdEE4vOTPUZ4';
        }

        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        });
        const responseData = await response.json();

        if (!response.ok){
            const error = responseData.message || 'Cannot signup the user';
            throw error;
        }

        const expiresIn = responseData.expiresIn * 1000;
        const expirationDate = new Date().getTime() + expiresIn;

        timer = setTimeout(function() {
            context.dispatch('autoLogout');
        }, expiresIn);

        localStorage.userId= responseData.localId;
        localStorage.token = responseData.idToken;
        localStorage.tokenExpiration = expirationDate;

        context.commit('setUser', {
            userId: responseData.localId,
            token: responseData.idToken,
        });
    },
    async login(context, payload){
        context.dispatch('auth', {
            ...payload,
            mode:'login'
        });

    },
    async signup(context, payload){
        context.dispatch('auth', {
            ...payload,
            mode:'signup'
        });

    },
    tryLogin(context){
        const userId = localStorage.getItem('userId');
        const token = localStorage.getItem('token');
        const tokenExpiration = localStorage.getItem('tokenExpiration');

        const expireIn = +tokenExpiration - new Date().getTime();

        if (expireIn < 0){
            return;
        }

        timer =setTimeout(() => {
            context.dispatch('autoLogout');
        }, expireIn);
        if(userId && token){
            context.commit('setUser', {
                userId: userId,
                token: token,
                tokenExpiration: null
            });
        }
    },
    logout(context){
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('tokenExpiration');

        clearTimeout(timer);
        context.commit('setUser', {
            userId: null,
            token: null,
        })
    },
    autoLogout(context) {
        context.dispatch('logout');
        context.commit('setAutoLogout');
      }
}