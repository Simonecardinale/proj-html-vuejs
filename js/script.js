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
                        title: "Taking back to the old school",
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
        }
    }
});

