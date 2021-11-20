let animationTimeline = gsap.timeline({
    scrollTrigger:{
        trigger: ".introSection",
        start: "0%",
        end: "100%",
        markers: false, //markery pokazują gdzie zaczyna się animacja
        scrub: true, //przy scrollowaniu uaktywnia fromTo
        pin:true, //przykleja to kółko
    },
});
animationTimeline.fromTo(".introSection", {clipPath: 'circle(10%)'}, {clipPath: 'circle(80%)', duration:4});
animationTimeline.fromTo(".fizykografika", {opacity:1}, {opacity:0, duration:1},"-=4");
animationTimeline.fromTo(".introText", {opacity:0}, {opacity:1, duration:1});