$(document).ready(function () {
   $('.main__slider').slick({
      arrows: true,
      dots: false
   });
});

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
   $('.clients-logo__slider').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: true,
      dots: false
   });
});

$(document).ready(function () {
   $('.responsive__slider').slick({
      arrows: true,
      dots: false
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
