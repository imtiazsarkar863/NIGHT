
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page2",
        start: "top 0%",
        end: "+=1200",
        scrub: 1,
        ease: "none",
        pin: true,
    }
});

tl.to(".img4", {

    y: -1600,
    duration: 0.4
})
tl.to(".img5", {

    y: -1600,
    duration: 0.4
}, "<")
tl.to(".img6", {

    y: -1600,
    duration: 0.4
}, "<");
tl.to(".img7", {
    y: -2000,
    duration: 0.4
}, "<");