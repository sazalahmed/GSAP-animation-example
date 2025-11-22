// ============= Scroll Smoother =================//
// all content should be the id (id="smooth-content")
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
    smooth: 2,
    effects: true,
    smoothTouch: 0.1,
});









const timeline = gsap.timeline()




// ============= banner aimation =================//
gsap.from(".main_menu .navbar-nav li", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
});




gsap.from(".wsus__banner_text h5", {
    y: -300,
    duration: 1,
});

gsap.from(".wsus__banner_text h1", {
    y: 200,
    duration: 1,
    duration: 2.5,
    ease: "bounce.out",
    // y: -500
});

gsap.from(".wsus__banner_text p", {
    x: 200,
    duration: 1,
});

gsap.from(".wsus__banner_text a.common_btn", {
    x: -200,
    duration: 1,
});

gsap.from(".inpression_img", {
    scale: .5,
    duration: 2,
});

gsap.to(".circle_box svg", {
    rotate: 360,
    repeat: -1,
    duration: 40,
});

// another property
// delay: 1,
// borderRadius: 100,
// repeat: 3,
// repeat: -1, (for infinit)
// yoyo: true, (got and back)



// timeline
// const timeline = gsap.timeline()
// টাইমলাইন ব্যবহার করলে sequence অনুযায়ী একটার পর একটা অ্যানিমেশন চলবে

// উদাহরণ

// timeline.from(".wsus__banner_text h5", {
//     y: -300,
//     duration: 1,
// });

// timeline.from(".wsus__banner_text h1", {
//     y: 200,
//     duration: 1,
// });

// এখন h5 এর পরে h1 অ্যানিমেশন আসবে






//==========scroll triggrt==========
gsap.from(".wsus__section_heading h5", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: ".wsus__section_heading h5",
        scroller: "body",
        start: "200",
        end: "350",
        // scrub: true,
        // markers: true,
    }
});

gsap.from(".wsus__section_heading h2", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: ".wsus__section_heading h2",
        scroller: "body",
        start: "300",
        end: "550",
        // scrub: true,
        // markers: true,
    }
});

timeline.from(".wsus__ai_section .col-xl-4", {
    opacity: 0,
    y: 100,
    duration: 10,
    stagger: 3,
    scrollTrigger: {
        trigger: ".wsus__ai_section .col-xl-4",
        scroller: "body",
        start: "200",
        end: "1200",
        scrub: true,
        // markers: true,
    }
});

// gsap.to("#page_2 h1", {
//     transform: "translateX(-150%)",
//     scrollTrigger: {
//         trigger: "#page_2",
//         scroller: "body",
//         markers: true,
//         start: "top 0%",
//         end: "top -100%",
//         scrub: 2,
//         pin: true,
//     }
// });



