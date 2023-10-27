let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".main",
        start: "50% 50%",
        end: "100% 50%",
        scrub: 0,
        pin: true
    }
})

tl.to(".top", {
    top: "-50%",
}, "a")

.to(".bottom", {
    bottom: "-50%",
}, "a")

// .to(".bottom-h", {
//         bottom: "-70%"
// }, "a")
//
// .to(".top-h", {
//     top: "70%"
// }, "a")

.to(".content", {
    marginTop: "0%",
}, "a")

gsap.to(".main-parent h1, i", {
    y: 100,
    duration: 2.5,
    delay: 1,
    yoyo: true,
    repeat: -1,
    ease: "power3.inOut",
})