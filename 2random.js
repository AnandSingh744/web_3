const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from(".nlink", {
    stagger: .2,
    y: 10,
    duration: 1,
    ease: Power2,
    opacity: 0
})

Shery.textAnimate("#headings h1", {

    style: 2,
    y: 10,
    delay: 0.3,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

gsap.from(".anim2", {
    y: 50,
    stagger: .3,
    opacity: 0,
    ease: Expo,
    duration: 1
})

Shery.imageEffect("#imgntext img", {
    style: 3,
    debug: true
})



// GSAP animations
gsap.from(".nlink", {
    stagger: 0.2,
    y: 10,
    duration: 1,
    ease: Power2,
    opacity: 0
});

Shery.textAnimate("#headings h1", {
    style: 2,
    y: 10,
    delay: 0.3,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1
});

gsap.from(".anim2", {
    y: 50,
    stagger: 0.3,
    opacity: 0,
    ease: Expo,
    duration: 1
});

/*Shery.imageEffect("#imgntext img", {
    style: 3,

    config: {
        "uFrequencyX": { "value": 11.57, "range": [0, 100] },
        "uFrequencyY": { "value": 4.96, "range": [0, 100] }, "uFrequencyZ": { "value": 45.45, "range": [0, 100] }, "geoVertex": { "range": [1, 64], "value": 18.7 }, "zindex":
            { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.75 }, "gooey": { "value": false }, "infiniteGooey":
            { "value": false }, "growSize": {
                "value": 4, "range": [1, 15]
            }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal":
            { "value": 1.56, "range": [1, 5] }, 
        "noEffectGooey": { "value": true }, "onMouse": {
            "value": 1
        }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball":
            { "value": 0.2, "range": [0, 2] }, "discard_threshold":
            { "value": 0.5, "range": [0, 1] }, "antialias_threshold":
            { "value": 0.002, "range": [0, 0.1] }, "noise_height":
            { "value": 0.5, "range": [0, 2] }, "noise_scale": {
                "value": {},
                "range": [0, 100]
            }
    },
    
})*
