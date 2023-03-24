const one = document.querySelector(".one");
const two = document.querySelector(".two");
const twoText = document.querySelector(".two p");
const three = document.querySelector(".three");
const threeText = document.querySelector(".three p");
const four = document.querySelector(".four");
const fourText = document.querySelector(".four p");
const five = document.querySelector(".five");
const fiveText = document.querySelector(".five p");
const six = document.querySelector(".six");
const sixText = document.querySelector(".six p");
const seven = document.querySelector(".seven");
const sevenText = document.querySelector(".seven p");
const ten = document.querySelector(".ten");
const eleven = document.querySelector(".eleven");
const elevenBox = document.querySelectorAll(".eleven > .box");

const twelve = document.querySelector(".twelve");
const thirteen = document.querySelector(".thirteen");

const textRoll = document.querySelectorAll(".text-roll");
const tenLineMask = document.querySelectorAll(".line-mask");

const spanOne = document.querySelector(".span-one");
const spanTwo = document.querySelector(".span-two");
const spanThree = document.querySelector(".span-three");

var fourArr = Array.from(fourText.children);
var fiveArr = Array.from(fiveText.children);
var sixArr = Array.from(sixText.children);
var sevenArr = Array.from(sevenText.children);

fourArr.forEach((x) => {
  x.style.transitionDelay = `${fourArr.indexOf(x) * 100}ms`;
});
fiveArr.forEach((x) => {
  x.style.transitionDelay = `${fiveArr.indexOf(x) * 200}ms`;
});
sixArr.forEach((x) => {
  x.style.transitionDelay = `${sixArr.indexOf(x) * 100}ms`;
});
sevenArr.forEach((x) => {
  x.style.transitionDelay = `${sevenArr.indexOf(x) * 15}ms`;
});

window.addEventListener("scroll", () => {
  var twoHeight = window.innerHeight - two.getBoundingClientRect().top;
  var thirdHeight = window.innerHeight - three.getBoundingClientRect().top;
  var fourHeight = window.innerHeight - four.getBoundingClientRect().top;
  var fiveHeight = window.innerHeight - five.getBoundingClientRect().top;
  var sixHeight = window.innerHeight - six.getBoundingClientRect().top;
  var sevenHeight = window.innerHeight - seven.getBoundingClientRect().top;
  var elevenHeight = window.innerHeight - eleven.getBoundingClientRect().top;
  var twelveHeight = window.innerHeight - twelve.getBoundingClientRect().top;
  var thirteenHeight =
    window.innerHeight - thirteen.getBoundingClientRect().top;

  if (twoHeight > window.innerHeight / 2) {
    twoText.classList.add("active-two");
  } else {
    twoText.classList.remove("active-two");
  }

  if (thirdHeight > window.innerHeight / 2) {
    threeText.classList.add("active-three");
  } else {
    threeText.classList.remove("active-three");
  }

  if (fourHeight > window.innerHeight / 2) {
    fourArr.forEach((x) => {
      x.style.transform = `translateX(0)`;
      x.style.opacity = `1`;
    });
  } else {
    fourArr.forEach((x) => {
      x.style.transform = `translateX(100vw)`;
    });
  }

  if (fiveHeight > window.innerHeight / 2) {
    fiveArr.forEach((x) => {
      x.style.fontSize = "100px";
    });
  } else {
    fiveArr.forEach((x) => {
      x.style.fontSize = "0px";
    });
  }

  if (sixHeight > window.innerHeight / 2) {
    sixArr.forEach((x) => {
      x.style.textShadow = "-2.5px 2.5px 0px #000, -2.5px 2.5px 0px #000";
    });
  } else {
    sixArr.forEach((x) => {
      x.style.textShadow = "0px 0px 50px #000, 0px 0px 50px #000";
    });
  }

  if (sevenHeight > window.innerHeight / 2) {
    sevenArr.forEach((x) => {
      x.style.transform = "translateY(0)";
    });
  } else {
    sevenArr.forEach((x) => {
      x.style.transform = "translateY(100vh)";
    });
  }

  if (
    spanOne.getBoundingClientRect().top < window.innerHeight / 3 &&
    spanOne.getBoundingClientRect().top > 250
  ) {
    spanOne.classList.add("span-active");
    spanThree.classList.remove("span-active");
    spanTwo.classList.remove("span-active");
  } else if (
    spanTwo.getBoundingClientRect().top < window.innerHeight / 3 &&
    spanTwo.getBoundingClientRect().top > 250
  ) {
    spanOne.classList.remove("span-active");
    spanTwo.classList.add("span-active");
    spanThree.classList.remove("span-active");
  } else if (
    spanThree.getBoundingClientRect().top < window.innerHeight / 3 &&
    spanThree.getBoundingClientRect().top > 250
  ) {
    spanTwo.classList.remove("span-active");
    spanThree.classList.add("span-active");
  }

  var windowHalf = window.innerHeight / 2;

  // console.log(ten.clientHeight, window.innerHeight);
  // var lineMaskWidth =
  //   ((ten.getBoundingClientRect().top - ten.clientHeight) /
  //     (windowHalf - ten.clientHeight)) *
  //   100;
  // tenLineMask.forEach((x) => {
  //   if (lineMaskWidth <= 0) {
  //     x.style.width = 0;
  //   } else if (lineMaskWidth >= 110) {
  //     lineMaskWidth = 110;
  //   } else {
  //     x.style.width = `${lineMaskWidth}%`;
  //   }
  // });

  var textEnd = window.innerHeight / 2;
  var textStart = window.innerHeight / 2 + textRoll[0].clientHeight;
  var textGap = textStart - textEnd;
  // console.log(textStart - textEnd);
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

  if (elevenHeight > window.innerHeight / 2) {
    elevenBox.forEach((x) => {
      x.style.transform = "rotateX(-90deg)";
    });
  } else {
    elevenBox.forEach((x) => {
      x.style.transform = "rotateX(0deg)";
    });
  }

  const waterfall = document.querySelectorAll(".fall-cont");

  if (twelveHeight > window.innerHeight / 2) {
    waterfall.forEach((x) => {
      x.style.transform = "translateY(0%)";
    });
  } else {
    waterfall.forEach((x) => {
      x.style.transform = "translateY(-100%)";
    });
  }

  // if (thirteenHeight > window.innerHeight / 3) {
  //   document.querySelectorAll(".settling-cont > div").forEach((x) => {
  //     console.log("ojk");
  //     x.style.transform = "translateY(0%)";
  //   });
  // } else {
  //   document.querySelectorAll(".settling-cont > div").forEach((x) => {
  //     var up = x.getAttribute("data-settle");

  //     x.style.transform = `translateY(${up}%)`;
  //   });
  // }

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
    if (settleDown >= 0) settleDown = 0;
    if (settleDown * -1 <= dataAtt) settleDown = dataAtt;
    x.style.transform = `translateY(${settleDown}%)`;
  });
  // console.log(percentage);
});

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
