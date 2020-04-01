$(document).ready(function () {
   $('.main__slider').slick({
      arrows: true,
      dots: false
   });
});

window.onscroll = function fixedHeader() {
   let header = document.querySelector('.menu');
   if (window.pageYOffset > 850 && window.innerWidth > 960) {
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
      // autoplay: true,
      // autoplaySpeed: 2000,
      responsive: [{
         breakpoint: 1300,
         settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            dots: false
         }
      }, {
         breakpoint: 1050,
         settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            dots: false
         }
      }, {
         breakpoint: 840,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            dots: false
         }
      }, {
         breakpoint: 615,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            dots: false
         }
      }, {
         breakpoint: 414,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false
         }
      },
      {
         // breakpoint: 320,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false
         }
      }]
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
