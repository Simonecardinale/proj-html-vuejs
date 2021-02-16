var app = new Vue({
    el: '#app',
    data: {
        menu: ["Home", "Meet The Band", "Live Dates", "Latest News", "Albums", "Fans"],
        show: "show",
        hide: "hide",
        blogArray:[ 
            {
                blogpost: [
                    {
                        img: "music/images/blog_music_techo-1200x600.jpg",
                        title: "Technology and music",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae praesentium aperiam",
                    },
                    {
                        img: "music/images/blog-post3-400x600.jpg",
                        title: "While my guitar gently weeps",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae praesentium aperiam"
                    },
                    {
                        img: "music/images/blog-post4-400x600.jpg",
                        title: "It just sounds better",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae praesentium aperiam"
                    },
                    {
                        img: "music/images/blog_flavor_rock-1200x600.jpg",
                        title: "The flavor of rock",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae praesentium aperiam"
                    },
                ],
                blogpostRight: [
                    {
                        img:"music/images/blog-post1-400x600.jpg",
                        title: "Taking back to the old s",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae praesentium aperiam"
                    },
                    {
                        img:"music/images/blog-post2-400x600.jpg",
                        title: "While my guitar gently weeps",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae praesentium aperiam"
                    },
                ]
            }
        ],
        datesArray: [
            {
                date: "17/08/2020 GEM FESTIVAL 2020 ANAKALA, GEORGIA",
                title: "Untold Stories",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                dateShow:"hide",
                visible: "show",
                notVisible: "hide"
            },
            {
                date: "24/9/2020 GROOVEFEST DOMINICAL REPUBLIC",
                title: "Untold Stories",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                dateShow:"hide",
                visible: "show",
                notVisible: "hide"
            },
            {
                date: "31/10/2020 OASIS FESTIVAL 2020 MARRAKECH, MOROCCO",
                title: "Untold Stories",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                dateShow:"hide",
                visible: "show",
                notVisible: "hide"
            },
            {
                date: "07/11/2020 MOGA FESTIVAL - ESSAOURIA, MOROCCO",
                title: "Untold Stories",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                dateShow:"hide",
                visible: "show",
                notVisible: "hide"
            },
            {
                date: "10/12/2020 ENVISION FESTIVAL - UVITA, COSTA RICA",
                title: "Untold Stories",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                dateShow:"hide",
                visible: "show",
                notVisible: "hide"
            },
        ],
    },
    methods: {

        // funzione per aprire il l'hamburger menu

        clickMenu() {
            if(this.show == "hide"){
                this.show = "show"
                this.hide = "hide"
            }else if(this.show == "show") {
                this.show = "hide"
                this.hide="show"
            }
            console.log(this.blogArray);
        },


        clickDates(index) {
            if(this.datesArray[index].dateShow == "hide") {
                this.datesArray[index].dateShow = "flex"
                this.datesArray[index].visible = "hide"
                this.datesArray[index].notVisible = "show"
            } else {
                this.datesArray[index].dateShow = "hide"
                this.datesArray[index].visible = "show"
                this.datesArray[index].notVisible = "hide"
            }
        }
    }
});

