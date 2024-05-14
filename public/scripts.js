document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.set(".hero-section", { yPercent: 10 });

    gsap.to(".hero-image", {
        ease: "none",
        // duration: 2,
        yPercent: -10,
        scrollTrigger: {
            trigger: ".header",
            duration: 3,
            start: "top",
            end: "+=150",
            // markers: true,
            scrub: 1
        },
    });

    gsap.to(".hero-section", {
        yPercent: -5,
        ease: "none",
        scrollTrigger: {
            trigger: ".hero-section",
            end: "bottom center",
            scrub: 1
        },
    });

    gsap.to(".animate", {
        ease: "none",
        // duration: 2,
        yPercent: -5,
        scrollTrigger: {
            trigger: ".investments",
            duration: 2,
            start: "top",
            end: "+=150",
            // markers: true,
            scrub: 1
        },
    });

    gsap.to(".logo-s", {
        ease: "none",
        // duration: 2,
        yPercent: -15,
        scrollTrigger: {
            trigger: ".projects",
            duration: 2,
            start: "top",
            end: "+=150",
            // markers: true,
            scrub: 1
        },
    });

});
