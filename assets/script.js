let input = document.querySelector(".search-bar-input");
input.value = "";

input.addEventListener("click", function () {
  this.parentElement.querySelector(".label").classList.add("make-top");
});

input.addEventListener("blur", function () {
  if (input.value == "") {
    this.parentElement.querySelector(".label").classList.remove("make-top");
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 70) {
    document.querySelector("nav").classList.add("shadow");
  } else {
    document.querySelector("nav").classList.remove("shadow");
  }
});

let slide2 = document.querySelector(".img-swiper");
let btnPrevious2 = document.querySelector(".btn-previous2");
let btnNext2 = document.querySelector(".btn-next2");

slide2.addEventListener("wheel", function (e) {
  e.preventDefault();
  slide2.scrollLeft += e.deltaY;
});

btnPrevious2.addEventListener("click", function () {
  slide2.scrollLeft += 200;
  slide2.style.scrollBehavior = "smooth";
});

btnNext2.addEventListener("click", function () {
  slide2.scrollLeft -= 200;
  slide2.style.scrollBehavior = "smooth";
});
