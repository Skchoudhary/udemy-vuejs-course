Vue.createApp({
    data() {
        return {
            classInput: '',
            toggleShow: true,
            backgroundColor: ''
        }
    },
    computed: {
        inputClass() {

            if (this.classInput === 'user1') {
                return this.classInput;
            }
            else if (this.classInput === 'user2') {
                return this.classInput;
            }
            else {
                return ''
            }
        },
        toggleClass() {
            if (this.toggleShow) {
                return 'visible';
            }
            else {
                return 'hidden'
            }
        }
    },
    methods: {
        togglePara() {
            this.toggleShow = !this.toggleShow;
        }
    }
}).mount('#assignment')