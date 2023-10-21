const swiper2 = new Swiper('.sample-slider-2', {
  loop: true,                         
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
clickable: true,
  },
  keyboard: true,
});

/*************************************************************************** video ***/ 

const video = document.getElementById("video");
const circlePlayButton = document.getElementById("circle-play-b");

function togglePlay() {
	if (video.paused || video.ended) {
		video.play();
	} else {
		video.pause();
	}
}

circlePlayButton.addEventListener("click", togglePlay);
video.addEventListener("playing", function () {
	circlePlayButton.style.opacity = 0;
});
video.addEventListener("pause", function () {
	circlePlayButton.style.opacity = 1;
});

// ///////////////////////////////////////////// counter ////
const counters = document.querySelectorAll(".count");
const speed = 10;

const startCounters = () => {
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = parseInt(+counter.getAttribute("data-target"));
      const count = parseInt(+counter.innerText);
      const increment = Math.trunc(target / speed);
      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 1000);
      } else {
        count.innerText = target;
      }
    };
    updateCount();
  });
}

window.addEventListener('scroll',startCounters)

/************************************************************************** form gift */
let btnGiftRial = document.querySelectorAll('.btn-gift-rial');
let moneyRial = document.querySelector('.money-rial');
let moneyDollar = document.querySelector('.money-dollar');
let amountMoney = document.querySelector('.amount-money');
let gridRadios3 = document.getElementById('gridRadios3');
let gridRadios1 = document.getElementById('gridRadios1');

btnGiftRial.forEach(function(btnGift){
  btnGift.addEventListener('click',function(e){
    e.preventDefault();
    btnGiftRial.forEach((item)=>{
      item.classList.remove('active-btn-gift');
    })
    e.target.classList.add('active-btn-gift');
    moneyRial.value = e.target.innerText;
    amountMoney.innerText = e.target.innerText;
  })
})

let btnGiftDollar = document.querySelectorAll('.btn-gift-dollar');

btnGiftDollar.forEach(function(btnGift){
  btnGift.addEventListener('click',function(e){
    e.preventDefault();
    btnGiftDollar.forEach((item)=>{
      item.classList.remove('active-btn-gift')
    })
    e.target.classList.add('active-btn-gift');
    moneyDollar.value = e.target.innerText;
    amountMoney.innerText = e.target.innerText;
  })
})

gridRadios3.addEventListener('change',function(){
  if(gridRadios3.checked == true){
    moneyRial.value = '';
    amountMoney.innerText = '';
    btnGiftRial.forEach((item)=>{
      item.classList.remove('active-btn-gift');
    })
  }
})

gridRadios1.addEventListener('change',function(){
  if(gridRadios1.checked == true){
    moneyDollar.value = '';
    amountMoney.innerText = '';
    btnGiftDollar.forEach((item)=>{
      item.classList.remove('active-btn-gift');
    })
  }
})
