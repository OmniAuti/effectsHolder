//  ---------------- TITLE CHANGE -----------------

const title = document.querySelector("title");

var titleArr = [
  "Aeriz | Aeroponic Cannabis",
  "Clean Cannabis | Aeriz",
  "Aeriz | Clean Cannabis",
  "Aeroponic Cannabis | Aeriz",
];

var titleIdx = 0;
setInterval(() => {
  if (titleIdx > titleArr.length - 1) {
    titleIdx = 0;
  }
  title.innerText = titleArr[titleIdx];
  titleIdx++;
}, 5000);

//  ---------------- INTERSECTION OBSERVER -----------------
let options = {
  threshold: 0.9,
};

// HORIZONTAL INTRO
const horizontalObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    entries[0].target.children[0].classList.add("acitve-horizontal-intro");
    horizontalObserver.unobserve(document.querySelector(".horizontal-intro"));
  }
}, options);

// VERTICAL INTRO
const verticalObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    entries[0].target.children[0].classList.add("active-vertical-intro");
    verticalObserver.unobserve(document.querySelector(".vertical-intro"));
  }
}, options);

// ONE AT A TIME
const oneAtATimeObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    Array.from(entries[0].target.children[0].children).forEach((span) => {
      span.style.transform = "translateX(0)";
      span.style.opacity = "1";
      oneAtATimeObserver.unobserve(document.querySelector(".one-at-a-time"));
    });
  }
}, options);

// WAVE TEXT
const waveTextObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    Array.from(entries[0].target.children[0].children).forEach((span) => {
      span.style.transform = "translateY(0)";
    });
    waveTextObserver.unobserve(document.querySelector(".wave-text"));
  }
}, options);

// GROWING TEXT
const growingTextObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    Array.from(entries[0].target.children[0].children).forEach((span) => {
      span.style.fontSize = "100px";
    });
    growingTextObserver.unobserve(document.querySelector(".growing-text"));
  }
}, options);

// SMOKEY TEXT
const smokeyTextObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    Array.from(entries[0].target.children[0].children).forEach((span) => {
      span.style.textShadow = "-2.5px 2.5px 0px #000, -2.5px 2.5px 0px #000";
    });
    smokeyTextObserver.unobserve(document.querySelector(".smokey-text"));
  }
}, options);

// HIGHTLIGHT PARAGRAPH
document.querySelectorAll(".hightlight-paragraph p span").forEach((x) => {
  const highlightParagraph = new IntersectionObserver(
    (entries) => {
      if (entries[0].boundingClientRect.top <= 0) return;
      if (entries[0].boundingClientRect.top >= window.innerHeight) return;
      if (entries[0].isIntersecting) {
        document
          .querySelectorAll(".hightlight-paragraph p span")
          .forEach((x) => {
            x.classList.remove("highlight-active");
          });
        entries[0].target.classList.add("highlight-active");
      } else {
        document
          .querySelectorAll(".hightlight-paragraph p span")
          .forEach((x) => {
            x.classList.remove("highlight-active");
          });
        entries[0].target.classList.add("highlight-active");
      }
    },
    {
      threshold: 0.5,
      rootMargin: `${window.innerHeight}px 0px -${
        window.innerHeight / 2
      }px 0px`,
    }
  );
  highlightParagraph.observe(x);
});

// HIGHLIGHT SENTENCE
function handleHighlightText() {
  const textRoll = document.querySelectorAll(".text-roll");
  var textEnd = window.innerHeight / 2;
  var textStart = window.innerHeight / 2 + textRoll[0].clientHeight;
  var textGap = textStart - textEnd;
  textRoll.forEach((x) => {
    if (x.getBoundingClientRect().top <= textEnd) {
      x.childNodes[1].style.width = "0%";
    }
    if (x.getBoundingClientRect().top >= textStart) {
      x.childNodes[1].style.width = "100%";
    }
    if (x.getBoundingClientRect().top <= textStart) {
      var linePercent =
        ((x.getBoundingClientRect().top - textStart) / textGap) * -100;
      x.childNodes[1].style.width = `${100 - linePercent}%`;
    }
  });
}

const highlightText = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      window.addEventListener("scroll", handleHighlightText);
    } else {
      window.removeEventListener("scroll", handleHighlightText);
    }
  },
  { threshold: 0, rootMargin: "0px 0px 0px 0px" }
);

const rotateTextObserver = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      Array.from(entries[0].target.children).forEach((x) => {
        x.style.transform = "rotateX(-90deg)";
      });
      //   rotateTextObserver.unobserve(document.querySelector(".rotate-text"));
    } else {
      Array.from(entries[0].target.children).forEach((x) => {
        x.style.transform = "rotateX(0deg)";
      });
    }
  },
  {
    threshold: 0.9,
  }
);

const waterfallObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    Array.from(entries[0].target.children[0].children).forEach((x) => {
      x.style.transform = "translateY(0%)";
    });
    // waterfallObserver.unobserve(document.querySelector(".waterfall"));
  } else {
    Array.from(entries[0].target.children[0].children).forEach((x) => {
      x.style.transform = "translateY(-100%)";
    });
  }
}, options);

function handleSettleText() {
  var middleOfScreen = window.innerHeight / 2;
  var percentage =
    middleOfScreen /
    document.querySelector(".settling-cont").getBoundingClientRect().top;
  if (percentage >= 1) {
    percentage = 1;
  }
  const settleArr = Array.from(
    document.querySelector(".settling-cont").children
  );
  settleArr.forEach((x) => {
    dataAtt = x.getAttribute("data-settle");
    let settleDown = Number(dataAtt) + percentage * 100;

    if (settleDown > 0) {
      settleDown = 0;
    }
    if (
      middleOfScreen >=
      document.querySelector(".settling-cont").getBoundingClientRect().top
    ) {
      settleDown = 0;
    }
    x.style.transform = `translateY(${settleDown}%)`;
  });
}

const settleObserver = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      window.addEventListener("scroll", handleSettleText);
    } else {
      window.removeEventListener("scroll", handleSettleText);
    }
  },
  { threshold: 0, rootMargin: "0px 0px 0px 0px" }
);

function handleZipperText() {
  const middleOfScreen = window.innerHeight / 2;
  const zipCont = document.querySelector(".zip-container");
  const zipParent = document.querySelector(".zip-container-section");
  const middlePlusZip = middleOfScreen - zipCont.clientHeight;

  var zipTop =
    (zipParent.getBoundingClientRect().top / window.innerHeight) * 75;
  if (zipTop <= 0) zipTop = 0;

  var zipPercent = (middlePlusZip / zipCont.getBoundingClientRect().top) * 75;
  if (zipPercent >= 100) {
    zipPercent = 100;
  }
  if (zipPercent <= 0) {
    zipPercent = 0;
  }
  const zipLettersOdd = document.querySelectorAll(
    ".zip-letter:nth-of-type(odd)"
  );
  const zipLettersEven = document.querySelectorAll(
    ".zip-letter:nth-of-type(even)"
  );
  if (zipParent.getBoundingClientRect().top <= 0) return;

  zipLettersEven.forEach((x) => {
    var padding = x.getAttribute("data-padding");
    var evenZip = -50 + zipPercent - padding;
    if (evenZip >= 5) evenZip = 0;
    x.style.transform = `translate(${zipTop}vw, ${evenZip / 1.5}vh)`;
  });

  zipLettersOdd.forEach((x) => {
    var padding = x.getAttribute("data-padding");
    var oddZip = 50 - zipPercent - padding;
    if (oddZip <= -5) oddZip = 0;
    x.style.transform = `translate( ${zipTop}vw,${oddZip / 1.5}vh)`;
  });
}

const zipperObserver = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      window.addEventListener("scroll", handleZipperText);
    } else {
      window.removeEventListener("scroll", handleZipperText);
    }
  },
  { threshold: 0.5 }
);

// FILLING TEXT
const fillText = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      let idx = -110;
      const int = setInterval(() => {
        document.querySelector(".fill-wrapper p").style.backgroundPosition = `${
          idx * 4
        }% ${idx * 0.25}%`;
        idx++;
        console.log(idx);
        if (idx * 0.25 >= 190) {
          document.querySelector(".fill-wrapper p").style.backgroundColor =
            "#000";
          document.querySelector(".fill-wrapper p").style.backgroundClip =
            "none";
          clearInterval(int);
        }
      }, 5);
    }
    // } else {
    //   console.log("ok");
    //   const int = setInterval(() => {
    //     let idx = 325;
    //     if (idx <= -10) clearInterval(int);
    //     document.querySelector(".fill-wrapper p").style.backgroundPosition = `${
    //       idx * 4
    //     }% ${idx * 0.25}%`;
    //     idx--;
    //   }, 10);
    // }
  },
  {
    threshold: 0.7,
  }
);

// COMING SOON TEXT
var timer = null;
var movementTrack;
function comingSoon() {
  if (document.querySelector(".coming-soon").getBoundingClientRect().top <= 0) {
    return;
  }
  // GETTING DIRECTION FOR AFTER MOVEMENT -------
  var direction;
  if (
    document.querySelector(".coming-soon").getBoundingClientRect().top <=
    movementTrack
  ) {
    // console.log("down");
    direction = "down";
  } else if (
    document.querySelector(".coming-soon").getBoundingClientRect().top >=
    movementTrack
  ) {
    // console.log("up");
    direction = "up";
  }

  var scale =
    window.innerHeight /
    document.querySelector(".coming-soon").getBoundingClientRect().top /
    2;
  var topPos = scale * 17;

  if (scale >= 2.2) return;
  if (topPos >= 40) return;
  if (scale >= 2.2) scale = 2.2;
  if (topPos >= 40) topPos = 40;

  document.querySelector(
    ".coming-soon h2"
  ).style.transform = `translate3d(0px, ${40 - topPos}vw, 0px) scale3d(${
    3.2 - scale
  }, ${3.2 - scale}, 1)`;
  // MOVEMENT AFTER TIMEOUT ----------------
  if (timer) {
    clearTimeout(timer);
  }

  timer = setTimeout(function () {
    var idx = 0;
    const funStuff = setInterval(() => {
      if (idx >= 0.5) {
        clearInterval(funStuff);
      }
      if (scale >= 2.2) {
        clearInterval(funStuff);
        return;
      }
      if (topPos >= 40) {
        clearInterval(funStuff);
        return;
      }
      idx += 0.05;
      if (direction === "down") {
        if (scale >= 2.2) {
          clearInterval(funStuff);
          return;
        }
        if (topPos >= 40) {
          clearInterval(funStuff);
          return;
        }
        document.querySelector(
          ".coming-soon h2"
        ).style.transform = `translate3d(0px, ${
          40 - topPos - idx
        }vw, 0px) scale3d(${3.2 - scale - idx * 0.05}, ${
          3.2 - scale - idx * 0.05
        }, 1)`;
      } else if (direction === "up") {
        if (scale >= 2.2) {
          clearInterval(funStuff);
          return;
        }
        if (topPos >= 40) {
          clearInterval(funStuff);
          return;
        }
        document.querySelector(
          ".coming-soon h2"
        ).style.transform = `translate3d(0px, ${
          40 - topPos + idx
        }vw, 0px) scale3d(${3.2 - scale + idx * 0.05}, ${
          3.2 - scale + idx * 0.05
        }, 1)`;
      } else {
        clearInterval(funStuff);
        return;
      }
    }, 25);
  }, 150);
  movementTrack = document
    .querySelector(".coming-soon")
    .getBoundingClientRect().top;
}

const comingSoonObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    window.addEventListener("scroll", comingSoon);
  } else {
    window.removeEventListener("scroll", comingSoon);
  }
});

// COME TOGETHER
const comeTogetherObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    document.querySelector(".together p").style.letterSpacing = "normal";
  } else {
    document.querySelector(".together p").style.letterSpacing = "100px";
  }
}, options);

//--------------------------------------------------------------------------

// FOCUS TEXT
function focusText(e) {
  const x = e.clientX;
  const y = e.clientY;

  var splitFocus = Array.from(document.querySelectorAll(".focus-text span"));

  splitFocus.forEach((letter) => {
    var box = letter.getBoundingClientRect();
    var boxCenter =
      Math.floor(
        Math.sqrt(
          Math.pow(x - (box.left + box.width / 2), 2) +
            Math.pow(y - (box.top + box.height / 2), 2)
        )
      ) * 0.1;

    if (boxCenter > 20) {
      boxCenter = 20;
    }
    if (boxCenter < 0) {
      boxCenter = 2.5;
    }
    letter.style.textShadow = `0px 0px ${boxCenter * 1.25}px #000`;
    //letter.style.transform = `scale(1.${boxCenter})`; -- KEEP THIS FOR POPCORN TEXT
    letter.style.fontSize = `${170 - boxCenter * 0.5}px`;
  });
}

const focusTextObserver = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      document.querySelector(".focus").addEventListener("mousemove", focusText);
    } else {
      document
        .querySelector(".focus")
        .removeEventListener("mousemove", focusText);
    }
  },
  { threshold: 0.5 }
);

// SCROLL SKEW TEXT

let currentPos = window.pageYOffset;
const scrollText = document.querySelector(".skew-text");
const scrollBox = document.querySelectorAll(".skew-box");
const scrollH = document.querySelector(".skew-h2");

const scrollSkew = () => {
  const newPos = window.pageYOffset;
  const diff = newPos - currentPos;
  var speed = diff * 0.15;

  if (speed >= 2) {
    speed = 2;
  }
  if (speed <= -2) {
    speed = -2;
  }
  // console.log(speed);
  scrollText.style.transform = `skewY(${speed}deg)`;
  scrollH.style.transform = `skewY(${speed}deg)`;
  scrollBox.forEach((x) => {
    x.style.transform = `skewY(${speed}deg)`;
  });

  currentPos = newPos;

  requestAnimationFrame(scrollSkew);
};

scrollSkew();

// const scrollSkewObserver = new IntersectionObserver(
//   (entries) => {
//     if (entries[0].isIntersecting) {
//       scrollSkew();
//       console.log("it");
//     } else {
//       console.log("done");
//     }
//   },
//   { threshold: 0, rootMargin: "0px 0px 0px 0px" }
// );

horizontalObserver.observe(document.querySelector(".horizontal-intro"));
verticalObserver.observe(document.querySelector(".vertical-intro"));
oneAtATimeObserver.observe(document.querySelector(".one-at-a-time"));
growingTextObserver.observe(document.querySelector(".growing-text"));
waveTextObserver.observe(document.querySelector(".wave-text"));
smokeyTextObserver.observe(document.querySelector(".smokey-text"));
// rotateTextObserver.observe(document.querySelector(".rotate-text"));
waterfallObserver.observe(document.querySelector(".waterfall"));
highlightText.observe(document.querySelector(".highlight-sentence"));
settleObserver.observe(document.querySelector(".settle-text"));
zipperObserver.observe(document.querySelector(".zip-container-section"));
// fillText.observe(document.querySelector(".fill-text"));
comingSoonObserver.observe(document.querySelector(".coming-soon"));
comeTogetherObserver.observe(document.querySelector(".together"));
focusTextObserver.observe(document.querySelector(".focus"));
// scrollSkewObserver.observe(document.querySelector(".skew-scroll"));

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight / 2;

// THIS SECTION IS FOR BUTTONS ONLY -------------------------

const btn = document.querySelectorAll(".btn-default");

btn.forEach((b) =>
  b.addEventListener("mouseenter", (e) => {
    var rect = b.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top; //y position within the element.
    b.style.setProperty("--btnFillTop", `${y}px`);
    b.style.setProperty("--btnFillLeft", `${x}px`);
    // FIX THIS LATER SHOUDLNT BOTH RUN AT SAME TIME
    b.style.setProperty("--btnFillTop", `${y}px`);
    b.style.setProperty("--btnFillLeft", `${x}px`);
  })
);

const rotateBox = document.querySelectorAll(".rotate-box-menu");

rotateBox.forEach((box) => {
  box.addEventListener("mouseenter", (e) => {
    var rect = box.getBoundingClientRect();
    var rectMiddle = rect.height / 2 + rect.top;
    var y = e.clientY; //y position within the element.
    if (y > rectMiddle) {
      box.classList.add("bottom-enter-menu");
    }
    if (y < rectMiddle) {
      box.classList.add("top-enter-menu");
    }
    console.log(rectMiddle, y);
  });
  box.addEventListener("mouseleave", () => {
    box.classList.remove("bottom-enter-menu");
    box.classList.remove("top-enter-menu");
  });
});

const rotateFluidBox = document.querySelectorAll(".rotate-fluid-container");

rotateFluidBox.forEach((box) => {
  box.addEventListener("mouseenter", (e) => {
    var rect = box.getBoundingClientRect();
    var rectMiddle = rect.height / 2 + rect.top;
    var y = e.clientY; //y position within the element.
    if (y > rectMiddle) {
      box.classList.add("bottom-fluid-enter-menu");
    }
    if (y < rectMiddle) {
      box.classList.add("top-fluid-enter-menu");
    }
  });
  box.addEventListener("mouseleave", () => {
    box.classList.remove("bottom-fluid-enter-menu");
    box.classList.remove("top-fluid-enter-menu");
  });
});

document
  .querySelector(".drip-container-black")
  .addEventListener("mouseenter", () => {
    document.querySelector(".drip-three-black").classList.add("drip-black");
  });

document.querySelector(".drip-container").addEventListener("mouseenter", () => {
  document.querySelector(".drip-three").classList.add("drip-rgba");
});

//DRAG AND DROP FEATURE -----------------------------------------------

const dragContainer = document.querySelector(".drag-drop");
const dragTail = document.querySelector(".drag-tail");
const dragTailTwo = document.querySelector(".drag-tail-two");
const dragTailThree = document.querySelector(".drag-tail-three");
const dragEl = document.querySelectorAll(".drag");
dragEl.forEach((el) => {
  let movementEl = false;
  var drugX,
    drugY,
    newY,
    newX = 0;

  var trailX,
    trailY = 0;

  el.addEventListener("mousedown", (e) => {
    e.preventDefault();
    drugX = e.clientX - el.offsetLeft;
    drugY = e.clientY - el.offsetTop;
    movementEl = true;
  });

  el.addEventListener("mousemove", (e) => {
    e.preventDefault();
    if (movementEl === true) {
      //
      if (newX > drugX) {
        trailX = -20;
      } else if (newX < drugX) {
        trailX = 20;
      } else if (newX === drugX) {
        trailX = 0;
      }
      if (newY > drugY) {
        trailY = -20;
      } else if (newY < drugY) {
        trailY = 20;
      } else if (newY === drugY) {
        trailY = 0;
      }
      //
      // console.log(trailX, trailY);
      newX = e.clientX - el.offsetLeft;
      newY = e.clientY - el.offsetTop;
      el.style.top = `${el.offsetTop + (newY - drugY)}px`;
      el.style.left = `${el.offsetLeft + (newX - drugX)}px`;
      // dragTail.style.transition = "transform ease-in-out 250ms";
      // dragTail.style.top = `${el.offsetTop + (newY - drugY)}px`;
      // dragTail.style.left = `${el.offsetLeft + (newX - drugX)}px`;
      // dragTail.style.transform = `translate(${trailX}px, ${trailY}px)`;
      dragTail.style.filter = ` blur(2px)`;

      dragTail.animate(
        {
          left: `${el.offsetLeft + (newX - drugX)}px`,
          top: `${el.offsetTop + (newY - drugY)}px`,
        },
        { duration: 150, fill: "forwards" }
      );

      //   //-------------------------
      //   dragTailTwo.style.transition = "transform ease-in-out 250ms";
      //   dragTailTwo.style.top = `${el.offsetTop + (newY - drugY)}px`;
      //   dragTailTwo.style.left = `${el.offsetLeft + (newX - drugX)}px`;
      //   dragTailTwo.style.transform = `translate(${trailX * 2}px, ${
      //     trailY * 2
      //   }px)`;
      dragTailTwo.style.filter = ` blur(4px)`;

      dragTailTwo.animate(
        {
          left: `${el.offsetLeft + (newX - drugX)}px`,
          top: `${el.offsetTop + (newY - drugY)}px`,
        },
        { duration: 250, fill: "forwards" }
      );

      //   //-------------------------
      //   dragTailThree.style.transition = "transform ease-in-out 250ms";
      //   dragTailThree.style.top = `${el.offsetTop + (newY - drugY)}px`;
      //   dragTailThree.style.left = `${el.offsetLeft + (newX - drugX)}px`;
      //   dragTailThree.style.transform = `translate(${trailX * 3}px, ${
      //     trailY * 3
      //   }px)`;
      dragTailThree.style.filter = ` blur(6px)`;

      dragTailThree.animate(
        {
          left: `${el.offsetLeft + (newX - drugX)}px`,
          top: `${el.offsetTop + (newY - drugY)}px`,
        },
        { duration: 350, fill: "forwards" }
      );
    }
  });

  el.addEventListener("mouseup", (e) => {
    movementEl = false;
    // dragTail.style.transition = "all ease 250ms";
    // dragTailTwo.style.transition = "all ease 250ms";
    // dragTailThree.style.transition = "all ease 250ms";
    // //
    dragTail.style.top = `${el.offsetTop + (newY - drugY)}px`;
    dragTail.style.left = `${el.offsetLeft + (newX - drugX)}px`;
    //
    dragTailTwo.style.top = `${el.offsetTop + (newY - drugY)}px`;
    dragTailTwo.style.left = `${el.offsetLeft + (newX - drugX)}px`;
    //
    dragTailThree.style.top = `${el.offsetTop + (newY - drugY)}px`;
    dragTailThree.style.left = `${el.offsetLeft + (newX - drugX)}px`;
    // //
    // dragTail.style.transform = `none`;
    // dragTailTwo.style.transform = `none`;
    // dragTailThree.style.transform = `none`;
    dragTail.style.filter = ` blur(0px)`;
    dragTailTwo.style.filter = ` blur(0px)`;
    dragTailThree.style.filter = ` blur(0px)`;
    // setTimeout(() => {
    //   dragTail.style.transition = "none";
    // }, 300);
  });

  el.addEventListener("mouseleave", (e) => {
    movementEl = false;
  });
});

/* ============================== */

let centerVec, mouseVec;
let total = 25;
let initialForce = 2;
let friction = 0.8;
let springForce = 1;
let k = 0.1;
let mouseThreshold = 60;
let mouseRepelForce = 0.1;
let forceToCenter = 0.008;
let minDist = 100;
let minDistSQ = minDist * minDist;
let particles = [];
let count = 0;
let instructionVisible = false;

function init() {
  centerVec = new Vector(
    document.querySelector(".water-droplets-bunch").clientWidth / 2,
    document.querySelector(".water-droplets-bunch").clientHeight / 2
  );
  mouseVec = new Vector();

  window.addEventListener("mousemove", inputMove);
  window.addEventListener("touchmove", inputMove, { passive: false });
  window.addEventListener("resize", resize);

  update();
}

function inputMove(e) {
  if (e.type == "touchmove") e.preventDefault();

  var x, y;
  if (e.type.indexOf("mouse") >= 0) {
    x = e.clientX;
    y = e.clientY;
  } else {
    x = e.changedTouches[0].clientX;
    y = e.changedTouches[0].clientY;
  }

  mouseVec.x = x;
  mouseVec.y = y;
}

function resize() {
  centerVec.x = document.querySelector(".water-droplets-bunch").innerWidth / 2;
  centerVec.y = document.querySelector(".water-droplets-bunch").innerHeight / 2;
}

function create() {
  const color = "transparent";

  const colorStr = `transparent`;

  const particle = new Particle(colorStr, centerVec.x, centerVec.y, friction);

  particle.velocity.x = Math.random() * initialForce - initialForce * 0.5;
  particle.velocity.y = Math.random() * initialForce - initialForce * 0.5;

  particles.push(particle);
  count = particles.length;
}

function update() {
  requestAnimationFrame(update);
  if (count < total) create();

  for (let i = 0; i < count; i++) {
    particles[i].update();
    repelToMouse(particles[i]);
    if (count == total) {
      attactToCenter(particles[i]);
      if (!instructionVisible) {
        instructionVisible = true;
      }
    }
  }

  //   for(let i = 0; i < count-1; i++){
  //     const particleA = particles[i]

  //     for(let j = i + 1; j < count; j++){
  //       const particleB = particles[j]
  //       //repel(particleA, particleB)
  //     }
  //   }

  for (let i = 0; i < count; i++) {
    const particleA = particles[i];

    for (let j = 0; j < count; j++) {
      const particleB = particles[j];
      repel2(particleA, particleB);
    }
  }
}

function repel(particleA, particleB) {
  const force = Vector.sub(particleB.position, particleA.position);
  const dist = force.mag();

  if (dist < minDist) {
    const x = dist - minDist;
    force.normalize();
    force.mult(-1 * k * x);

    particleA.velocity.sub(force);
    particleB.velocity.add(force);
  }
}

// from generative-design book:
// https://editor.p5js.org/generative-design/sketches/M_6_1_03
function repel2(particleA, particleB) {
  const force = Vector.sub(particleA.position, particleB.position);
  const dist = force.mag();

  if (dist > 0 && dist < minDist) {
    const ramp = 0.5;
    const strength = -5;
    const s = Math.pow(dist / minDist, 1 / ramp);
    const f = (s * 9 * strength * (1 / (s + 1) + (s - 3) / 4)) / dist;
    force.mult(f);

    particleA.velocity.sub(force);
  }
}

function repelToMouse(particle) {
  const force = Vector.sub(mouseVec, particle.position);
  const dist = force.mag();
  if (dist < mouseThreshold) {
    const x = dist - mouseThreshold;
    //force.normalize()
    force.mult(-1 * k * x);
    force.mult(mouseRepelForce);

    particle.velocity.sub(force);
  }
}

function attactToCenter(particle) {
  const force = Vector.sub(centerVec, particle.position);
  const dist = force.mag();

  if (dist > minDist) {
    const x = dist - minDist;
    force.normalize();
    force.mult(-1 * k * x);
    force.mult(forceToCenter);

    particle.velocity.sub(force);
  }
}

class Vector {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;

    return this;
  }

  add(v) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }

  mult(n) {
    this.x *= n;
    this.y *= n;
    return this;
  }

  div(n) {
    this.x /= n;
    this.y /= n;
    return this;
  }

  magSQ() {
    return this.x * this.x + this.y * this.y;
  }

  mag() {
    return Math.sqrt(this.magSQ());
  }

  normalize() {
    let m = this.mag();
    if (m != 0) this.div(m);

    return this;
  }

  limit(n) {
    let m = this.mag();
    if (m > n) {
      this.normalize();
      this.mult(n);
    }

    return this;
  }

  static add(v1, v2) {
    return new Vector(v1.x, v1.y).add(v2);
  }

  static sub(v1, v2) {
    return new Vector(v1.x, v1.y).sub(v2);
  }

  static mult(v1, n) {
    return new Vector(v1.x, v1.y).mult(n);
  }

  static div(v1, n) {
    return new Vector(v1.x, v1.y).div(n);
  }
}

class Particle {
  constructor(color = "#000000", x = 0, y = 0, friction = 1) {
    this.position = new Vector(x, y);
    this.velocity = new Vector();
    this.acceleration = new Vector();
    this.friction = friction;
    this.k = 0.1;

    this.el = document.createElement("div");
    document.querySelector(".water-droplets-bunch").appendChild(this.el);
    this.el.className = "droplet-bunch";

    this.el.style.backgroundColor = color;
    this.size = this.el.offsetWidth;
    this.sizeHalf = this.size / 2;

    this.update();
  }

  applyForce(forceVector) {
    this.acceleration.add(forceVector);
  }

  // attract(targetVector, intensity){
  //   const force = Vector.sub(targetVector, this.position)
  //   const d = force.mag()
  //   force.mult(intensity * Math.exp(-0.02 * d))
  //   this.applyForce(force)
  // }

  //   springTo(targetVector, distMin, intensity){
  //     const force = Vector.sub(targetVector, this.position)
  //     const d = force.mag()
  //     const x = d - distMin;
  //     force.normalize()
  //     force.mult(-1 * this.k * x)
  //     force.mult(intensity)

  //     this.applyForce(force)

  //   }

  //   repelTo(targetVector, distMin, intensity){
  //     const force = Vector.sub(targetVector, this.position)
  //     const d = force.mag()

  //     if(d < distMin){
  //       const x = d - distMin;
  //       force.normalize()
  //       force.mult(-1 * this.k * x)
  //       force.mult(intensity)

  //       this.applyForce(force)
  //     }

  //   }

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.mult(this.friction);
    this.position.add(this.velocity);

    this.acceleration.mult(0);

    this.el.style.transform = `translate(${
      this.position.x - this.sizeHalf
    }px, ${this.position.y - this.sizeHalf}px)`;
  }
}

init();
