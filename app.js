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
const fillText = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    let idx = -10;
    const int = setInterval(() => {
      if (idx >= 325) clearInterval(int);
      document.querySelector(".fill-wrapper p").style.backgroundPosition = `${
        idx * 4
      }% ${idx * 0.25}%`;
      idx++;
    }, 10);
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
}, options);

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
fillText.observe(document.querySelector(".fill-text"));
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
      dragTail.style.transition = "transform ease-in-out 250ms";
      dragTail.style.top = `${el.offsetTop + (newY - drugY)}px`;
      dragTail.style.left = `${el.offsetLeft + (newX - drugX)}px`;
      dragTail.style.transform = `translate(${trailX}px, ${trailY}px)`;
      dragTail.style.filter = ` blur(2.5px)`;
      //-------------------------
      dragTailTwo.style.transition = "transform ease-in-out 250ms";
      dragTailTwo.style.top = `${el.offsetTop + (newY - drugY)}px`;
      dragTailTwo.style.left = `${el.offsetLeft + (newX - drugX)}px`;
      dragTailTwo.style.transform = `translate(${trailX * 2}px, ${
        trailY * 2
      }px)`;
      dragTailTwo.style.filter = ` blur(5px)`;
      //-------------------------
      dragTailThree.style.transition = "transform ease-in-out 250ms";
      dragTailThree.style.top = `${el.offsetTop + (newY - drugY)}px`;
      dragTailThree.style.left = `${el.offsetLeft + (newX - drugX)}px`;
      dragTailThree.style.transform = `translate(${trailX * 3}px, ${
        trailY * 3
      }px)`;
      dragTailThree.style.filter = ` blur(10px)`;
    }
  });

  el.addEventListener("mouseup", (e) => {
    movementEl = false;
    dragTail.style.transition = "all ease 250ms";
    dragTailTwo.style.transition = "all ease 250ms";
    dragTailThree.style.transition = "all ease 250ms";
    //
    dragTail.style.top = `${el.offsetTop + (newY - drugY)}px`;
    dragTail.style.left = `${el.offsetLeft + (newX - drugX)}px`;
    //
    dragTailTwo.style.top = `${el.offsetTop + (newY - drugY)}px`;
    dragTailTwo.style.left = `${el.offsetLeft + (newX - drugX)}px`;
    //
    dragTailThree.style.top = `${el.offsetTop + (newY - drugY)}px`;
    dragTailThree.style.left = `${el.offsetLeft + (newX - drugX)}px`;
    //
    dragTail.style.transform = `none`;
    dragTailTwo.style.transform = `none`;
    dragTailThree.style.transform = `none`;
    dragTail.style.filter = ` blur(0px)`;
    dragTailTwo.style.filter = ` blur(0px)`;
    dragTailThree.style.filter = ` blur(0px)`;
    setTimeout(() => {
      dragTail.style.transition = "none";
    }, 300);
  });

  el.addEventListener("mouseleave", (e) => {
    movementEl = false;
  });
});

const test = document.querySelector(".container-morph");

test.addEventListener("mouseover", () => {
  test.style.filter = "contrast(20)";
  document.querySelector(".og").style.opacity = "0";
  document.querySelector(".morph").style.opacity = "1";
  setTimeout(() => {
    test.style.filter = "contrast(1)";
  }, 500);
});
test.addEventListener("mouseleave", () => {
  setTimeout(() => {
    document.querySelector(".og").style.opacity = "1";
    document.querySelector(".morph").style.opacity = "0";
    test.style.filter = "contrast(1)";
  }, 500);
});
