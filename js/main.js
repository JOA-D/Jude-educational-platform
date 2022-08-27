var big_wrapper;
var hamburger_menu;
var btn;

function declare() {
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
}

const main = document.querySelector("main");

declare();

function events() {
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
}

events();

$(document).on("click", "ul li", function () {
  $(this).addClass("btn").siblings().removeClass("btn");
});
