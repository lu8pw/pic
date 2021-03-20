$(function() {
    "use strict";
    function s() {
        return /(Android|webOS|Phone|iPad|iPod|BlackBerry|Windows Phone)/i.test(navigator.userAgent)
    }
    function e() {
        $(".homepage-header").css({
            width: $(window).width(),
            height: $(window).height()
        })
    }
    function a(s) {
        $(".vegas-container").each(function() {
            $(this).vegas("pause")
        }),
        $("#" + s)[0]._vegas && $("#" + s).vegas("play"),
        $("body").addClass("demo-playing")
    }
    
    $(window).resize(function() {
        e()
    }).resize(),
    $("html").addClass("animate"),

    $(".homepage-header").vegas({
        overlay: !0,
        transitionDuration: 2e3,
        delay: 4e3,
        slides: [{
            src: "https://cdn.jsdelivr.net/gh/lu8pw/CDN/dy/0d3a870e457348e58dea965ae7d73001.jpg",
            color: "#DBC9B3",
			animation: "random",
            transition: "fade2",
            transitionDuration: 1e3
        },
        {
            src: "https://cdn.jsdelivr.net/gh/lu8pw/CDN/dy/7a4ab8eb374745c0a1151cede5527431.jpg",
            color: "#F6B700",
			animation: "random",
            transition: "random",
        },
        {
            src: "https://cdn.jsdelivr.net/gh/lu8pw/CDN/dy/Uc71d759829b8404faef53eceec3a6a77h.jpg",
            color: "#C47F48",
			animation: "random",
            transition: "random"
        },
        {
            src: "https://cdn.jsdelivr.net/gh/lu8pw/CDN/dy/a0808a3645d242f78eb2efff43aecb9c.jpg",
            color: "#EFAF41",
            animation: "random",
			transition: "random"
        },
        {
            src: "https://cdn.jsdelivr.net/gh/lu8pw/CDN/dy/e56be338dde244dfb52375575dd0cd05.jpg",
            color: "#CBC2B9",
            animation: "random",
			transition: "random"
        },
        {
            src: "https://cdn.jsdelivr.net/gh/lu8pw/CDN/dy/xfb.jpg",
            color: "#ECA24D",
            animation: "random",
			transition: "random"
        }
		/*
		,
        {
            src: "falsh_img/unsplash6.jpg",
            color: "#B89E2F",
            animation: "random"
        },
        {
            src: "falsh_img/unsplash7.jpg",
            color: "#7BBBBB",
            animation: "random",
            transition: "swirlRight2"
        }
		*/
		],
        walk: function(s, e) {
            s = null,
            $(".vegas-timer-progress").css("backgroundColor", e.color)
        }
    });
    
});
//# sourceMappingURL=app.min.js.map
