document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)

    // gsap.set(".hero-image", { rotation: 90 });
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



    gsap.set(".triangle", { yPercent: 25, rotation: -90 });
    gsap.set(".dotsWhite", { yPercent: 10 });
    gsap.set(".middel-image", { yPercent: -20 });
    gsap.set(".bottom-section", { yPercent: 5 });

    gsap.to(".triangle", {
        yPercent: -5,
        rotation: 40,
        ease: "none",
        scrollTrigger: {
            trigger: ".bottom-section",
            scrub: 1
        },
    });

    gsap.to(".dotsWhite", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
            trigger: ".bottom-section",
            scrub: 1
        },
    });


    gsap.to(".middel-image", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
            trigger: ".bottom-section",
            scrub: 1
        },
    });

    gsap.to(".mid-img-caption", {
        yPercent: 200,
        ease: "none",
        scrollTrigger: {
            trigger: ".bottom-section",
            // markers:true,
            end: "bottom center",
            scrub: 1
        },
    });

    gsap.to(".bottom-section", {
        yPercent: -5,
        ease: "none",
        scrollTrigger: {
            trigger: ".bottom-section",
            // markers:true,
            end: "bottom center",
            scrub: 1
        },
    });
});


