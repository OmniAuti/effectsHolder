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
  x.style.transitionDelay = `${sevenArr.indexOf(x) * 100}ms`;
});

window.addEventListener("scroll", () => {
  var twoHeight = window.innerHeight - two.getBoundingClientRect().top;
  var thirdHeight = window.innerHeight - three.getBoundingClientRect().top;
  var fourHeight = window.innerHeight - four.getBoundingClientRect().top;
  var fiveHeight = window.innerHeight - five.getBoundingClientRect().top;
  var sixHeight = window.innerHeight - six.getBoundingClientRect().top;
  var sevenHeight = window.innerHeight - seven.getBoundingClientRect().top;

  if (twoHeight > window.innerHeight / 3) {
    twoText.classList.add("active-two");
  }

  if (thirdHeight > window.innerHeight / 3) {
    threeText.classList.add("active-three");
  }

  if (fourHeight > window.innerHeight / 3) {
    fourArr.forEach((x) => {
      x.style.transform = `translateX(0)`;
      x.style.opacity = `1`;
    });
  }

  if (fiveHeight > window.innerHeight / 3) {
    fiveArr.forEach((x) => {
      x.style.fontSize = "100px";
    });
  }

  if (sixHeight > window.innerHeight / 3) {
    sixArr.forEach((x) => {
      x.style.textShadow = "-2.5px 2.5px 0px #000, -2.5px 2.5px 0px #000";
    });
  }

  if (sevenHeight > window.innerHeight / 3) {
    sevenArr.forEach((x) => {
      x.style.transform = "translateY(0)";
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
});
