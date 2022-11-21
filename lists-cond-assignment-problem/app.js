Vue.createApp({
    data() {
        return {
            goalText: '',
            goalList: [],
            hideList: false,
            buttonCaption: 'Hide'
        }
    },
    computed: {
        listClass() {
            if (this.hideList) {
                this.buttonCaption = 'Show';
                return 'hide';
            } else {
                this.buttonCaption = 'Hide';
                return 'show';
            }
        },

    },
    methods: {
        addTask() {
            this.goalList.push(this.goalText);
        },
        toggleList() {
            this.hideList = !this.hideList;
        }
    }

}).mount('#assignment')