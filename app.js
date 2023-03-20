const one = document.querySelector('.one');
const two = document.querySelector('.two');
const twoText = document.querySelector('.two p');
const three = document.querySelector('.three');
const threeText = document.querySelector('.three p');
const four = document.querySelector('.four');
const fourText = document.querySelector('.four p');
const five = document.querySelector('.five');
const fiveText = document.querySelector('.five p');
const six = document.querySelector('.six');
const sixText = document.querySelector('.six p');

var fourArr = Array.from(fourText.childNodes)
var fiveArr = Array.from(fiveText.childNodes);
var sixArr = Array.from(sixText.childNodes);

   fourText.childNodes.forEach(x => {
    x.style.transitionDelay = `${fourArr.indexOf(x) * 100}ms`
   })
   fiveText.childNodes.forEach(x => {
    x.style.transitionDelay = `${fiveArr.indexOf(x) * 200}ms`
   })
   sixText.childNodes.forEach(x => {
    x.style.transitionDelay = `${(sixArr.indexOf(x))* 100}ms`
   })

window.addEventListener('scroll', () => {
    var twoHeight = window.innerHeight - two.getBoundingClientRect().top;
    var thirdHeight = window.innerHeight - three.getBoundingClientRect().top;
    var fourHeight = window.innerHeight - four.getBoundingClientRect().top;
    var fiveHeight = window.innerHeight - five.getBoundingClientRect().top;
    var sixHeight = window.innerHeight - six.getBoundingClientRect().top;
   if (twoHeight > window.innerHeight / 3) {
    twoText.classList.add('active-two')
   }
   if (thirdHeight > window.innerHeight / 3) {
    threeText.classList.add('active-three')
   }


   if (fourHeight > window.innerHeight / 3) {
    fourText.childNodes.forEach(x => {
        x.style.transform = `translateX(0)`
        x.style.opacity = `1`
       })
   }

   if (fiveHeight > window.innerHeight / 3) {
    fiveText.childNodes.forEach(x => {
        x.style.fontSize = '100px'
    })
   }
   if (sixHeight > window.innerHeight / 3) {
    sixText.childNodes.forEach(x => {
        x.style.textShadow = '-2.5px 2.5px 7.5px #000, 2.5px -2.5px 10px #000'
    })
   }


})


