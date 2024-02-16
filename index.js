gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

const cont = document.querySelector("#container");


// create the scrollSmoother before your scrollTriggers
const smoother = ScrollSmoother.create({
  smooth: 1.5
});
smoother.paused(true);

let splitHeading = new SplitText(".heading h1", { type: "chars" });
let chars = splitHeading.chars;

gsap.set(".green", { opacity: 1, scaleX: 0, scaleY: 0.005 });
gsap.set(".heading", { opacity: 0.1, transformOrigin: "center" });

let intro = gsap.timeline({
  onComplete: () => {
    smoother.paused(false);
    gsap.set(".heading", { overflow: "visible" });
  }
});

intro
  .to(".green", {
    scaleX: 1,
    ease: "expo.out",
    transformOrigin: "center center"
  })
  .to(".green", {
    scaleY: 1,
    duration: 0.8,
    ease: "expo.out",
    transformOrigin: "center center"
  })
  .set("header, footer, #smooth-content", { autoAlpha: 1 })
  .to(".green", {
    scaleY: 0,
    ease: "sine.out",
    transformOrigin: "top center"
  })
  .from(chars, {
    opacity: 0,
    duration: 0.8,
    yPercent: 100,
    ease: "expo.out",
    stagger: 0.03
  });

let scrollTween = gsap.to(container, {
  x: () => -(cont.scrollWidth - document.documentElement.clientWidth) + "px",
  ease: "none",
  scrollTrigger: {
    trigger: cont,
    invalidateOnRefresh: true,
    pin: true,
    scrub: true,
    end: () => "+=" + cont.offsetWidth * 10
  }
});

let sections = gsap.utils.toArray(".section");

gsap.to(chars, {
  duration: 0.8,
  yPercent: "random(-300, 300)",
  xPercent: "random(-300, 300)",
  rotate: "random(-360, 360)",
  ease: "expo.out",
  stagger: 0.03,
  immediateRender: false,
  scrollTrigger: {
    trigger: ".section--lg",
    start: "left left",
    scrub: true,
    end: "right left",
    containerAnimation: scrollTween
  }
});

sections.forEach((section, i) => {
  let card = section.querySelector(".card");
  let text = section.querySelector("h2");
  let p = section.querySelector("p");

  let mySplitText = new SplitText(text, { type: "chars" });
  let chars = mySplitText.chars;

  gsap.set(chars, { yPercent: 120 });
  gsap.set(card, { z: 0 });
  gsap.set(p, { opacity: 0 });

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "left right",
      end: "left center",
      scrub: true,
      containerAnimation: scrollTween,
      onLeave: () => {
        gsap.set(chars, { yPercent: 120, opacity: 1 });
        gsap.to(chars, {
          duration: 0.8,
          yPercent: 0,
          ease: "expo.out",
          stagger: 0.03
        });
        gsap.to(p, {
          opacity: 0.6,
          duration: 0.5,
          delay: 0.4
        });
      },
      onEnterBack: () => {
        gsap.to([chars, p], {
          opacity: 0,
          duration: 0.33
        });
      }
    }
  });

  tl.from(card, {
    y: `random([-${window.innerHeight * 2}, ${window.innerHeight * 2}])`,
    rotationX: 360,
    rotationZ: 360,
    z: -2000,
    xPercent: 100,
    opacity: 0
  });
});
