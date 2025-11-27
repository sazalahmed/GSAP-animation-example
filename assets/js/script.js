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
    document.addEventListener("DOMContentLoaded", (event) => {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
    });


    // smooth scrolling
    // window স্মুথ স্ক্রলিং এর জন্য সমস্ত কন্টেন্ট আইডির ভিতরে  রাখতে হবে  (id="smooth-content")
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
                start: "top " + (100 + 50 * i),
                end: "bottom 0",
                endTrigger: ".vertical_scroll_slider",
                scrub: true,
                pin: wrapper,
                pinSpacing: false,
                id: i + 1
            }
        });
    });




});
