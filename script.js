
gsap.registerPlugin(ScrollTrigger);

// Hero animation
gsap.from(".reveal", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: "power4.out"
});

// Services heading animation
gsap.from(".section-title", {
    scrollTrigger: {
        trigger: ".section-title",
        start: "top 85%"
    },

    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
});

// Cards animation
gsap.from(".card", {
    scrollTrigger: {
        trigger: ".cards",
        start: "top 80%"
    },

    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.25,
    ease: "power3.out"
});
