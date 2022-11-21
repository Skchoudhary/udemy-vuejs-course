const app = Vue.createApp({
    data() {
        return {
            myName: 'Sandeep',
            myAge: 25,
            randomImage: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80'

        }
    },
    methods: {
        ageAfterFiveYears() {
            return this.myAge + 5;
        },
        randomNumber() {
            return Math.random();
        }
    }
});

app.mount('#assignment');