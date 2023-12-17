const app = Vue.createApp({
    data() {
        return {
            apiKey: "",
            baseApi: "",
            searchQuery: "Yangon",
            errorMsg: "Please enter valid country or location",
            isError: false,
            weather: {},
        }

    },

    mounted() {
        this.fetchWeather()
    },

    methods: {
        async fetchWeather() {
            this.isLoading == true;
            const response = await fetch(`
            ${this.baseApi}?q=${this.searchQuery}&units=metric&APPID=${this.apiKey}
            `);

            if (response.status === 200) {
                const data = await response.json();
                this.weather = data;
                this.isError = false;
            } else {
                this.isError = true;
            }

        },

        getCurrentDate() {
            let currentDate = new Date();
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday'];
            let date = currentDate.getDate();
            let month = months[currentDate.getMonth()];
            let year = currentDate.getFullYear();
            let day = days[currentDate.getDay()];
            return `${date} ${month} ${year} ${day}`;
        }
    }
});

app.mount("#app");