// var fourArr = Array.from(fourText.children);
// var fiveArr = Array.from(fiveText.children);
// var sixArr = Array.from(sixText.children);
// var sevenArr = Array.from(sevenText.children);

// fourArr.forEach((x) => {
//   x.style.transitionDelay = `${fourArr.indexOf(x) * 100}ms`;
// });
// fiveArr.forEach((x) => {
//   x.style.transitionDelay = `${fiveArr.indexOf(x) * 200}ms`;
// });
// sixArr.forEach((x) => {
//   x.style.transitionDelay = `${sixArr.indexOf(x) * 100}ms`;
// });
// sevenArr.forEach((x) => {
//   x.style.transitionDelay = `${sevenArr.indexOf(x) * 15}ms`;
// });

// window.addEventListener("scroll", () => {
//   var twoHeight = window.innerHeight - two.getBoundingClientRect().top;
//   var thirdHeight = window.innerHeight - three.getBoundingClientRect().top;
//   var fourHeight = window.innerHeight - four.getBoundingClientRect().top;
//   var fiveHeight = window.innerHeight - five.getBoundingClientRect().top;
//   var sixHeight = window.innerHeight - six.getBoundingClientRect().top;
//   var sevenHeight = window.innerHeight - seven.getBoundingClientRect().top;
//   var elevenHeight = window.innerHeight - eleven.getBoundingClientRect().top;
//   var twelveHeight = window.innerHeight - twelve.getBoundingClientRect().top;
//   var thirteenHeight =
//     window.innerHeight - thirteen.getBoundingClientRect().top;

//   if (fiveHeight > window.innerHeight / 2) {
//     fiveArr.forEach((x) => {
//       x.style.fontSize = "100px";
//     });
//   } else {
//     fiveArr.forEach((x) => {
//       x.style.fontSize = "0px";
//     });
//   }

//   if (sixHeight > window.innerHeight / 2) {
//     sixArr.forEach((x) => {
//       x.style.textShadow = "-2.5px 2.5px 0px #000, -2.5px 2.5px 0px #000";
//     });
//   } else {
//     sixArr.forEach((x) => {
//       x.style.textShadow = "0px 0px 50px #000, 0px 0px 50px #000";
//     });
//   }

//   if (
//     spanOne.getBoundingClientRect().top < window.innerHeight / 3 &&
//     spanOne.getBoundingClientRect().top > 250
//   ) {
//     spanOne.classList.add("span-active");
//     spanThree.classList.remove("span-active");
//     spanTwo.classList.remove("span-active");
//   } else if (
//     spanTwo.getBoundingClientRect().top < window.innerHeight / 3 &&
//     spanTwo.getBoundingClientRect().top > 250
//   ) {
//     spanOne.classList.remove("span-active");
//     spanTwo.classList.add("span-active");
//     spanThree.classList.remove("span-active");
//   } else if (
//     spanThree.getBoundingClientRect().top < window.innerHeight / 3 &&
//     spanThree.getBoundingClientRect().top > 250
//   ) {
//     spanTwo.classList.remove("span-active");
//     spanThree.classList.add("span-active");
//   }

//   var windowHalf = window.innerHeight / 2;

//   // console.log(ten.clientHeight, window.innerHeight);
//   // var lineMaskWidth =
//   //   ((ten.getBoundingClientRect().top - ten.clientHeight) /
//   //     (windowHalf - ten.clientHeight)) *
//   //   100;
//   // tenLineMask.forEach((x) => {
//   //   if (lineMaskWidth <= 0) {
//   //     x.style.width = 0;
//   //   } else if (lineMaskWidth >= 110) {
//   //     lineMaskWidth = 110;
//   //   } else {
//   //     x.style.width = `${lineMaskWidth}%`;
//   //   }
//   // });

//   var textEnd = window.innerHeight / 2;
//   var textStart = window.innerHeight / 2 + textRoll[0].clientHeight;
//   var textGap = textStart - textEnd;
//   // console.log(textStart - textEnd);
//   textRoll.forEach((x) => {
//     if (x.getBoundingClientRect().top <= textEnd) {
//       x.childNodes[1].style.width = "0%";
//     }
//     if (x.getBoundingClientRect().top >= textStart) {
//       x.childNodes[1].style.width = "100%";
//     }
//     if (x.getBoundingClientRect().top <= textStart) {
//       var linePercent =
//         ((x.getBoundingClientRect().top - textStart) / textGap) * -100;
//       x.childNodes[1].style.width = `${100 - linePercent}%`;
//     }
//   });

//   if (elevenHeight > window.innerHeight / 2) {
//     elevenBox.forEach((x) => {
//       x.style.transform = "rotateX(-90deg)";
//     });
//   } else {
//     elevenBox.forEach((x) => {
//       x.style.transform = "rotateX(0deg)";
//     });
//   }

//   const waterfall = document.querySelectorAll(".fall-cont");

//   if (twelveHeight > window.innerHeight / 2) {
//     waterfall.forEach((x) => {
//       x.style.transform = "translateY(0%)";
//     });
//   } else {
//     waterfall.forEach((x) => {
//       x.style.transform = "translateY(-100%)";
//     });
//   }

//   // if (thirteenHeight > window.innerHeight / 3) {
//   //   document.querySelectorAll(".settling-cont > div").forEach((x) => {
//   //     console.log("ojk");
//   //     x.style.transform = "translateY(0%)";
//   //   });
//   // } else {
//   //   document.querySelectorAll(".settling-cont > div").forEach((x) => {
//   //     var up = x.getAttribute("data-settle");

//   //     x.style.transform = `translateY(${up}%)`;
//   //   });
//   // }

//   var middleOfScreen = window.innerHeight / 2;

//   var percentage =
//     middleOfScreen /
//     document.querySelector(".settling-cont").getBoundingClientRect().top;
//   if (percentage >= 1) {
//     percentage = 1;
//   }
//   const settleArr = Array.from(
//     document.querySelector(".settling-cont").children
//   );
//   settleArr.forEach((x) => {
//     dataAtt = x.getAttribute("data-settle");
//     let settleDown = Number(dataAtt) + percentage * 100;

//     if (settleDown > 0) {
//       settleDown = 0;
//     }
//     if (
//       middleOfScreen >=
//       document.querySelector(".settling-cont").getBoundingClientRect().top
//     ) {
//       settleDown = 0;
//     }
//     x.style.transform = `translateY(${settleDown}%)`;
//   });
//   // console.log(percentage);

//   const zipCont = document.querySelector(".zip-container");
//   const middlePlusZip = middleOfScreen - zipCont.clientHeight;

//   var zipPercent = (middlePlusZip / zipCont.getBoundingClientRect().top) * 100;
//   const zipLettersOdd = document.querySelectorAll(
//     ".zip-letter:nth-of-type(odd)"
//   );
//   const zipLettersEven = document.querySelectorAll(
//     ".zip-letter:nth-of-type(even)"
//   );

//   var evenZip = -50 + zipPercent;
//   var oddZip = 50 - zipPercent;

//   if (evenZip >= 0) evenZip = 0;
//   if (oddZip <= 0) oddZip = 0;

//   // console.log(zipPercent)
//   zipLettersEven.forEach((x) => {
//     x.style.transform = `translateY(${evenZip}vh)`;
//   });
//   zipLettersOdd.forEach((x) => {
//     x.style.transform = `translateY(${oddZip}vh)`;
//   });

//   var contPer = zipPercent;
//   if (contPer >= 50) contPer = 50;

//   zipCont.style.right = `${contPer}%`;
// });

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
      rootMargin: `${window.innerHeight}px 0px -${window.innerHeight / 2}px 0px`,
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
    rootMargin: "0px 0px -150px 0px",
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
  
    var zipTop = ( zipParent.getBoundingClientRect().top / window.innerHeight * 100);
    if (zipTop <= 0) zipTop = 0;
  
    var zipPercent = (middlePlusZip / zipCont.getBoundingClientRect().top) * 100;
    if (zipPercent >= 100) {
      zipPercent = 100
    }
    if (zipPercent <= 0) {
      zipPercent = 0
    }
    const zipLettersOdd = document.querySelectorAll(
      ".zip-letter:nth-of-type(odd)"
    );
    const zipLettersEven = document.querySelectorAll(
      ".zip-letter:nth-of-type(even)"
    );
  if (zipParent.getBoundingClientRect().top <= 0 ) return
  
    zipLettersEven.forEach((x) => {
      var padding = x.getAttribute("data-padding");
      var evenZip = (-50 + zipPercent) - padding;
      if (evenZip >= 0) evenZip = 0;
  
      x.style.transform = `translate(${zipTop}vw, ${evenZip}vh)`;
    });
  
    zipLettersOdd.forEach((x) => {
      var padding = x.getAttribute("data-padding");
      var oddZip = (50 - zipPercent) - padding;
      if (oddZip <= 0) oddZip = 0;
      x.style.transform = `translate( ${zipTop}vw,${oddZip}vh)`;
    });
}

const zipperObserver = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
        window.addEventListener("scroll", handleZipperText);
    } else {
        window.removeEventListener('scroll', handleZipperText)
    }
}, {threshold: 0.5})

horizontalObserver.observe(document.querySelector(".horizontal-intro"));
verticalObserver.observe(document.querySelector(".vertical-intro"));
oneAtATimeObserver.observe(document.querySelector(".one-at-a-time"));
growingTextObserver.observe(document.querySelector(".growing-text"));
waveTextObserver.observe(document.querySelector(".wave-text"));
smokeyTextObserver.observe(document.querySelector(".smokey-text"));
rotateTextObserver.observe(document.querySelector(".rotate-text"));
waterfallObserver.observe(document.querySelector(".waterfall"));
highlightText.observe(document.querySelector(".highlight-sentence"));
settleObserver.observe(document.querySelector(".settle-text"));
zipperObserver.observe(document.querySelector(".zip-container-section"))


