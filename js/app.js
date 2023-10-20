const filter_btns = document.querySelectorAll(".filter-btn");
const skills_wrap = document.querySelector(".skills");
const skills_bars = document.querySelectorAll(".skill-progress");
const records_wrap = document.querySelector(".records");
const records_numbers = document.querySelectorAll(".number");
const footer_input = document.querySelector(".footer-input");
const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".links a");

footer_input.addEventListener("focus", () => {
  footer_input.classList.add("focus");
});

footer_input.addEventListener("blur", () => {
  if (footer_input.value != "") return;
  footer_input.classList.remove("focus");
});

function closeMenu() {
  navbar.classList.remove("open");
  document.body.classList.remove("stop-scrolling");
}

hamburger_menu.addEventListener("click", () => {
  if (!navbar.classList.contains("open")) {
    navbar.classList.add("open");
    document.body.classList.add("stop-scrolling");
  } else {
    closeMenu();
  }
});

links.forEach((link) => link.addEventListener("click", () => closeMenu()));

filter_btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    filter_btns.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");

    let filterValue = btn.dataset.filter;

    $(".grid").isotope({ filter: filterValue });
  })
);

$(".grid").isotope({
  itemSelector: ".grid-item",
  layoutMode: "fitRows",
  transitionDuration: "0.6s",
});

window.addEventListener("scroll", () => {
  skillsEffect();
  countUp();
});

function checkScroll(el) {
  let rect = el.getBoundingClientRect();
  if (window.innerHeight >= rect.top + el.offsetHeight) return true;
  return false;
}

function skillsEffect() {
  if (!checkScroll(skills_wrap)) return;
  skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));
}

function countUp() {
  if (!checkScroll(records_wrap)) return;
  records_numbers.forEach((numb) => {
    const updateCount = () => {
      let currentNum = +numb.innerText;
      let maxNum = +numb.dataset.num;
      let speed = 200;
      const increment = Math.ceil(maxNum / speed);

      if (currentNum < maxNum) {
        numb.innerText = currentNum + increment;
        setTimeout(updateCount, 1);
      } else {
        numb.innerText = maxNum;
      }
    };

    setTimeout(updateCount, 400);
  });
}

var mySwiper = new Swiper(".swiper-container", {
  speed: 1100,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});
const user_circle = {
  rotation : 0,
  angle: 0,
  width: 0,
}

let image_circle = document.querySelector('.image-circle');
let circles = document.querySelectorAll('.circle-img');
let user_list = document.querySelector('.user-list');

user_circle.angle = 360 / circles.length; // Angle by per user
user_circle.width = image_circle.offsetWidth // Circle Width
        
circles.forEach(circle => { // loop for all 
  circle.style.transform =
    `rotateZ(${user_circle.rotation}deg)
    translateX(${user_circle.width * 0.5}px) 
    rotate(${user_circle.rotation * -1}deg)`;

    circle.style.left = `${user_circle.width * 0.4 }px`
    circle.style.top = `${user_circle.width * 0.4 }px`
    user_circle.rotation += user_circle.angle;
})

gsap.to(".circle-1", {rotation: 360, duration: 30, repeat: -1, ease: Power1.easeInOut});

gsap.to(".circle-1-image-1-content", {rotation: -360, duration: 30, repeat: -1, ease: Power1.easeInOut});

gsap.to(".circle-1-image-2-content", {rotation: -360, duration: 30, repeat: -1, ease: Power1.easeInOut});

gsap.to(".circle-1-image-3-content", {rotation: -360, duration: 30, repeat: -1, ease: Power1.easeInOut});

gsap.to(".circle-1-image-4-content", {rotation: -360, duration: 30, repeat: -1, ease: Power1.easeInOut});

gsap.to(".circle-1-image-5-content", {rotation: -360, duration: 30, repeat: -1, ease: Power1.easeInOut});

gsap.to(".circle-1-image-6-content", {rotation: -360, duration: 30, repeat: -1, ease: Power1.easeInOut});


gsap.to(".circle-2", {rotation: -360, duration: 30, repeat: -1, ease: Power1.easeInOut});

gsap.to(".circle-2-image-1-content", {rotation: 360, duration: 30, repeat: -1, ease: Power1.easeInOut});

gsap.to(".circle-2-image-2-content", {rotation: 360, duration: 30, repeat: -1, ease: Power1.easeInOut});

gsap.to(".circle-2-image-3-content", {rotation: 360, duration: 30, repeat: -1, ease: Power1.easeInOut});


jQuery(document).ready(function($) {
   function randomInteger(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
   }

   function randomChange(el) {
      el.find('.circle-image-content-first').toggleClass('circle-image-content-hide');
      el.find('.circle-image-content-second').toggleClass('circle-image-content-hide');
   }
   
   $('.circle-image-content').each(function() {
      var el = $(this);
      setTimeout(function() {
         setInterval(function(){
            randomChange(el);
         }, randomInteger(5000, 8000));
      }, randomInteger(2000, 10000));
   });
   
   function scaleCircle() {
      var containerWidth = $('.circle-outer-container').width();
      var containerMaxWidth = 500;
      
      console.log('scale', containerWidth, containerMaxWidth);
      
      if (containerWidth < containerMaxWidth) {
         $('.circle-container').css({ transform: 'scale('+ containerWidth/containerMaxWidth +')' });;
      }
   }
   scaleCircle();
   $(window).resize(function() {
      scaleCircle();
   });
});
