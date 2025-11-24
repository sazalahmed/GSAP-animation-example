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
        smooth: 1.5,
        effects: true,
    });


    // horizontal scrolling
    const slideItem = gsap.utils.toArray(".slider_item");
    gsap.to(slideItem, {
        xPercent: -100 * (slideItem.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".horizontal_slider",
            pin: true,
            scrub: 1,
            start: "top 200",
        }
    });









});
