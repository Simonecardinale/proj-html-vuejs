var app = new Vue({
    el: '#app',
    data: {
        menu: ["Home", "Meet The Band", "Live Dates", "Latest News", "Albums", "Fans"],
        show: "show",
        hide: "hide"
    },
    methods: {
        clickMenu() {
            if(this.show == "hide"){
                this.show = "show"
                this.hide = "hide"
            }else if(this.show == "show") {
                this.show = "hide"
                this.hide="show"
            }
            console.log(this.show);
        }
    }
});

