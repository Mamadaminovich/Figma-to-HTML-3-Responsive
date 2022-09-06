$(function () {
  $(".menu__btn").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
  });

  $(".leading__video-play").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });

  let btn1 = document.querySelector(".content-box-item-1");
  let btn2 = document.querySelector(".content-box-item-2");
  let btn3 = document.querySelector(".content-box-item-3");
  let demo1 = document.querySelector("#demo-1");
  let demo2 = document.querySelector("#demo-2");
  let demo3 = document.querySelector("#demo-3");
  $(btn1).on("click", function () {
    demo1.style.display = "block";
    demo2.style.display = "none";
    demo3.style.display = "none";
    btn2.classList.remove("content-box-item-2--active");
    btn3.classList.remove("content-box-item-3--active");
    btn1.classList.toggle("content-box-item-1--active");
  });
  $(btn2).on("click", function () {
    demo1.style.display = "none";
    demo2.style.display = "block";
    demo3.style.display = "none";
    btn2.classList.toggle("content-box-item-2--active");
    btn1.classList.remove("content-box-item-1--active");
    btn3.classList.remove("content-box-item-3--active");
  });
  $(btn3).on("click", function () {
    demo1.style.display = "none";
    demo2.style.display = "none";
    demo3.style.display = "block";
    btn2.classList.remove("content-box-item-2--active");
    btn1.classList.remove("content-box-item-1--active");
    btn3.classList.toggle("content-box-item-3--active");
  });


});
