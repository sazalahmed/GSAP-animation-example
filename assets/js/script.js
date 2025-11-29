$(function () {

    "use strict";

    // menu fix js
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            if ($('.main_menu').offset() != undefined) {
                if (!$('.main_menu').hasClass("menu_fix")) {
                    $('.main_menu').addClass("menu_fix");
                }
            }
        }
        else {
            if ($('.main_menu').offset() != undefined) {
                $('.main_menu').removeClass("menu_fix");
            }
        }
    });

    // select js
    $('.select_js').niceSelect();














    //========== GSAP code here ==========
    document.addEventListener("DOMContentLoaded", () => {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)
    });

    const timeline = gsap.timeline();


    const smoother = ScrollSmoother.create({
        smooth: 2,
        effects: true
    });

    // menu animation
    gsap.from(".main_menu .navbar-nav .nav-item", {
        y: -100,
        opacity: 0,
        stagger: 0.2,
    });



    // banner text animation 01
    const splitHeadline = new SplitText(".main_heading", { type: "chars" });
    const splitTagline = new SplitText(".tagline", { type: "words" });

    timeline.from(".sub_heading", {
        x: -150,
        opacity: 0,
        duration: 1.5,
        ease: "bounce.out",
    }).to(".sub_heading", {
        x: 0,
        opacity: 1,
    })

    timeline.from(splitHeadline.chars, {
        y: 100,
        rotationX: 90,
        opacity: 0,
        stagger: 0.03,
        transformOrigin: "center top",
        // perspective: 400,
        ease: "power2.out",
        duration: 0.4,
    }, 1).to(splitHeadline.chars, {
        color: "#704eeb",
    });

    timeline.from(splitTagline.words, {
        y: 60,
        opacity: 0,
        filter: "blur(16px)",
        stagger: 0.12,
        duration: 0.3,
        ease: "power3.out",
    }, 2.5).to(splitTagline.words, {
        filter: "blur(0px)",
    });

    timeline.from(".wsus__banner_text .common_btn", {
        y: 100,
        opacity: 0,
    }).to(".wsus__banner_text .common_btn", {
        y: 0,
        opacity: 1,
    })


    timeline.from(".wsus__banner_img", {
        // x: 300,
        scale: .3,
        // rotation: 360,
        skewY: '45deg',
        transformOrigin: "center top",
        opacity: 0,
        ease: "bounce.out",
        duration: 2,
    }, 2).to(".wsus__banner_img", {
        // x: 0,
        scale: 1,
        // rotation: 0,
        skewY: '0deg',
        opacity: 1,
    });


    // banner text animation 02
    // const splitHeadline = SplitText.create(".main_heading", { type: "chars" });
    // const splitTagline = SplitText.create(".tagline", { type: "words" });

    // timeline.from(splitHeadline.chars, {
    //     y: 20,
    //     autoAlpha: 0,
    //     stagger: 0.05,
    //     duration: 0.7,
    //     filter: "blur(2px)",
    //     ease: "power3.out",

    // });

    // timeline.from(splitTagline.words, {
    //     y: 60,
    //     opacity: 0,
    //     filter: "blur(16px)",
    //     stagger: 0.12,
    //     duration: 0.7,
    //     ease: "power3.out",
    // }).to(splitTagline.words, {
    //     filter: "blur(0px)",
    // })



    // smooth scrolling
    ScrollSmoother.create({
        smooth: 2,
        effects: true,
        smoothTouch: 0.2,

    });



    // horizontal scrolling
    const slideItem = gsap.utils.toArray(".slider_item");
    gsap.to(slideItem, {
        xPercent: -100 * (slideItem.length - 1),
        // duration: 2.5,
        // ease: "power1.out",
        smooth: 2,
        scrollTrigger: {
            trigger: ".horizontal_slider",
            pin: true,
            scrub: 1,
            start: "top 200",
            smooth: 2,
        }
    });



    // 3D image zoom
    window.addEventListener("load", () => {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".image_zoom",
                start: "top 80",
                end: "+=150%",
                pin: true,
                scrub: true,
            }
        }).to(".zoom_main_img img", {
            scale: 2,
            z: 350,
            transformOrigin: "center center",
            ease: "power1.inOut"
        })
    });



    // single image zoom
    window.addEventListener("load", () => {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".single_image_zoom",
                start: "top 250",
                end: "+=150%",
                pin: true,
                scrub: true,
            }
        }).to(".single_zoom_main_img img", {
            scale: 2,
            z: 350,
            transformOrigin: "center center",
            ease: "power1.inOut"
        })
    });



    // horizontal scroll gallery
    if (document.querySelector(".horizontal_gallery")) {
        const horizontalSections = gsap.utils.toArray(".horizontal_gallery_area");

        horizontalSections.forEach(function (sec, i) {
            const pinWrap = sec.querySelector(".horizontal_gallery_content");
            let pinWrapWidth;
            let horizontalScrollLength;
            function refresh() {
                pinWrapWidth = pinWrap.scrollWidth;
                horizontalScrollLength = pinWrapWidth - window.innerWidth;
            }
            refresh();
            gsap.to(pinWrap, {
                scrollTrigger: {
                    scrub: true,
                    trigger: sec,
                    pin: sec,
                    start: "center center",
                    end: () => `+=${pinWrapWidth}`,
                    invalidateOnRefresh: true
                },
                x: () => -horizontalScrollLength,
                ease: "none"
            });
            ScrollTrigger.addEventListener("refreshInit", refresh);
        });
    }



    // vertical scrolling
    const cardsWrappers = gsap.utils.toArray(".vertical_slider_item");
    const cards = gsap.utils.toArray(".vertical_slider_content");

    cardsWrappers.forEach((wrapper, i) => {
        const card = cards[i];
        let scale = 1,
            rotation = 0;
        if (i !== cards.length - 1) {
            scale = 0.9 + 0.025 * i;
            rotation = -10;
        }
        gsap.to(card, {
            scale: scale,
            rotationX: rotation,
            transformOrigin: "top center",
            ease: "none",
            scrollTrigger: {
                trigger: wrapper,
                start: "top 0" + (100 + 50 * i),
                end: "bottom 100",
                endTrigger: ".vertical_scroll_slider",
                scrub: true,
                pin: wrapper,
                pinSpacing: false,
                id: i + 1
            }
        });
    });




});
