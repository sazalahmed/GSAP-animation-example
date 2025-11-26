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
        smooth: 1.2,
        effects: true,
        smoothTouch: 0.2,
    });



    // horizontal scrolling
    const slideItem = gsap.utils.toArray(".slider_item");
    gsap.to(slideItem, {
        xPercent: -100 * (slideItem.length - 1),
        // duration: 2.5,
        ease: "power1.out",
        scrollTrigger: {
            trigger: ".horizontal_slider",
            pin: true,
            scrub: 1,
            start: "top 200",
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









});
