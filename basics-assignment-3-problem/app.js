Vue.createApp({
    data() {
        return {
            resultNum: 0,
        }
    },
    watch: {

        resultNum() {
            const that = this;
            setTimeout(function () {
                that.resultNum = 0;
            }, 5000);
        }
    },
    computed: {
        result() {
            if (this.resultNum < 37) {
                return 'Not there yet';
            }
            else if (this.resultNum > 37) {
                return 'Too much!';
            }
            else {
                return this.resultNum;
            }
        }
    },
    methods: {
        add(value) {
            this.resultNum += value;
        }
    }
}).mount('#assignment');