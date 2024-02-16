gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

const cont = document.querySelector("#container");
const pens = [
  {
    title: "Ribbon Stack",
    author: "Chris Gannon",
    url: "https://codepen.io/chrisgannon/pen/MWGRVrx"
  },
  {
    title: "GSAP Plains",
    author: "Brent Morton",
    url: "https://codepen.io/b1mind/pen/QWmLXmO"
  },
  {
    title: "Parametric spider",
    author: "Fabio Ottaviani",
    url: "https://codepen.io/supah/pen/vYdwbQK"
  },
  {
    title: "Alphabet Soup",
    author: "Ryan Mulligan",
    url: "https://codepen.io/hexagoncircle/pen/ExoKBgW"
  },
  {
    title: "Bubblegum",
    author: "Natalia 🤟",
    url: "https://codepen.io/natszafraniec/pen/oNGmoOa"
  },
  {
    title: "Chess Movement",
    author: "Peter Norton",
    url: "https://codepen.io/graphilla/pen/QWmNyXv"
  },
  {
    title: "Hack",
    author: "Jamie Coulter",
    url: "https://codepen.io/jcoulterdesign/pen/abYNyLq"
  },
  {
    title: "A little to the right",
    author: "Alex Trost",
    url: "https://codepen.io/a-trost/pen/jOZXdoP"
  },
  {
    title: "ScrollSmoother",
    author: "Malven",
    url: "https://codepen.io/cmalven/pen/PoEJvjE"
  },
  {
    title: "Chroma Cycle",
    author: "Chris Gannon",
    url: "https://codepen.io/chrisgannon/pen/vYaGJgM"
  },

  {
    title: "CSSkateboard",
    author: "Ryan Mulligan",
    url: "https://codepen.io/hexagoncircle/pen/GRBJLwE"
  },
  {
    title: "Isopleths",
    author: "Louis Hoebregts",
    url: "https://codepen.io/Mamboleoo/pen/KKZRvEp"
  },
  {
    title: "Invert Text",
    author: "Craig Roblewsky",
    url: "https://codepen.io/PointC/pen/ZErvbPR"
  },
  {
    title: "Spider UI",
    author: "Elegant Seagulls",
    url: "https://codepen.io/elegantseagulls/pen/WNyNXMQ"
  },
  {
    title: "Stop Motion",
    author: "h1",
    url: "https://codepen.io/huxhu/pen/JjGNeOy"
  },
  {
    title: "Generative Plants",
    author: "Louis Hoebregts",
    url: "https://codepen.io/Mamboleoo/pen/mdqybaG"
  },
  {
    title: "MetroGnome",
    author: "Ryan Mulligan",
    url: "https://codepen.io/hexagoncircle/pen/JjOaabp"
  },
  {
    title: "Scrolling Rainbow",
    author: "Fabio Ottaviani",
    url: "https://codepen.io/supah/pen/MWroVZG"
  },
  {
    title: "Maze",
    author: "Tom Miller",
    url: "https://codepen.io/creativeocean/pen/YzaEVwo"
  },
  {
    title: "Orion Icon",
    author: "Louis Hoebregts",
    url: "https://codepen.io/Mamboleoo/pen/OJEJLZB"
  },
  {
    title: "3D Scrolling",
    author: "Tom Miller",
    url: "https://codepen.io/creativeocean/pen/gOvYEgq"
  },
  {
    title: "Silkscreen Squiggles",
    author: "Tom Miller",
    url: "https://codepen.io/creativeocean/pen/abLGMwv"
  },
  {
    title: "Jello",
    author: "Peter Barr",
    url: "https://codepen.io/petebarr/pen/LYzBoeg"
  },
  {
    title: "Footer Sorrow",
    author: "Steve G",
    url: "https://codepen.io/ste-vg/pen/PoQgvBK"
  },
  {
    title: "3D turn",
    author: "Sikriti Dakau",
    url: "https://codepen.io/dev_loop/pen/zYPVeQx"
  },
  {
    title: "Elastic Accordian",
    author: "Fabio Ottaviani",
    url: "https://codepen.io/supah/pen/rNKraQJ"
  },
  {
    title: "Interpolate",
    author: "Tom Miller",
    url: "https://codepen.io/creativeocean/pen/bGvyRWd"
  },
  {
    title: "Drag Demo",
    author: "Eric Van Holtz",
    url: "https://codepen.io/vanholtzco/pen/abEOead"
  },
  {
    title: "Radial Time Picker",
    author: "Jhey",
    url: "https://codepen.io/jh3y/pen/rNvLpxd"
  },
  {
    title: "GSAP Observer",
    author: "Fabio Ottaviani",
    url: "https://codepen.io/supah/pen/BaJKyyz"
  },
  {
    title: "Top 10 albums",
    author: "Adum Kuhn",
    url: "https://codepen.io/cobra_winfrey/pen/yLEwKKg"
  }
];
const shuffledPens = gsap.utils.shuffle(pens);
shuffledPens.forEach((pen, i) => {
  let cardHTML = `
  
  <div class="section">
     <a href="${pen.url}" target="_blank" class="card">
      <img src="${pen.url}/image/small.png" alt="">
      </a>
      <div class="hide">
        <h2>${pen.title}</h2>
      </div>
      <p>${pen.author}</p>
  </div> 
  
  `;
  if (i == pens.length - 1) {
    cardHTML = `
    <div class="section">
       <a href="${pen.url}" target="_blank" class="card">
      <img src="${pen.url}/image/small.png" alt="">
      </a>
      <div class="hide">
        <h2>${pen.title}</h2>
      </div>
      <p>${pen.author}</p>
  </div> 
   <div class="section end">
   <div class="hide">
      <h2>What will you make in 2023?</h2>
   </div>
   </div>`;
  }

  cont.insertAdjacentHTML("beforeend", cardHTML);
});

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
