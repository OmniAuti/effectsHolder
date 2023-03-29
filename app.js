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
    letter.style.textShadow = `0px 0px ${boxCenter}px #000`;
    letter.style.fontSize = `${170 - boxCenter}px`;
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
    x.style.transform = `translate(${zipTop}vw, ${evenZip / 2.5}vh)`;
  });

  zipLettersOdd.forEach((x) => {
    var padding = x.getAttribute("data-padding");
    var oddZip = 50 - zipPercent - padding;
    if (oddZip <= -5) oddZip = 0;
    x.style.transform = `translate( ${zipTop}vw,${oddZip / 2.5}vh)`;
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

horizontalObserver.observe(document.querySelector(".horizontal-intro"));
verticalObserver.observe(document.querySelector(".vertical-intro"));
oneAtATimeObserver.observe(document.querySelector(".one-at-a-time"));
growingTextObserver.observe(document.querySelector(".growing-text"));
waveTextObserver.observe(document.querySelector(".wave-text"));
smokeyTextObserver.observe(document.querySelector(".smokey-text"));
focusTextObserver.observe(document.querySelector(".focus"));
rotateTextObserver.observe(document.querySelector(".rotate-text"));
waterfallObserver.observe(document.querySelector(".waterfall"));
highlightText.observe(document.querySelector(".highlight-sentence"));
settleObserver.observe(document.querySelector(".settle-text"));
zipperObserver.observe(document.querySelector(".zip-container-section"));

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight / 2;
