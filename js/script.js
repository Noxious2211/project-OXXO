$(document).ready(function () {
   $('.main__slider').slick({
      arrows: true,
      dots: false
   });
});

window.onscroll = function fixedHeader() {
   let header = document.querySelector('.second__menu');
   if (window.pageYOffset > 850 && window.innerWidth > 769) {
      header.classList.add('menu-fixed')
   } else {
      header.classList.remove('menu-fixed')
   }
};

$(document).ready(function () {
   $('.second__second-slider').slick({
      arrows: true,
      dots: false
   });
});

$(document).ready(function () {
   $('.clients__slider').slick({
      arrows: true,
      dots: false
   });
});

$(document).ready(function () {
   $('.galery__slider-mobile').slick({
      arrows: true,
      dots: false
   });
});


$(document).ready(function () {
   $('.clients-logo__slider').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000,
   });
});

$(document).ready(function () {
   $('.responsive__slider').slick({
      arrows: true,
      dots: false,
      autoplay: true,
      autoplaySpeed: 3000,
   });
});

let acc = document.getElementsByClassName("footer__accordeon-btn");
let i;

for (i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.style.display === "block") {
         panel.style.display = "none";
      } else {
         panel.style.display = "block";
      }
   });
}

document.querySelector('.menu-icon-wrapper').onclick = function () {
   document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
}
