Vue.createApp({
    data() {
        return {
            outputText: '',
            enterTextValue: '',
        }
    },
    methods: {
        showAlert() {
            alert('hello');
        },
        showText(event) {
            this.outputText = event.target.value;

        },
        enterText(event) {
            this.enterTextValue = event.target.value;
        }
    }
}).mount('#assignment')