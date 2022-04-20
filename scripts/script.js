// TOGGLE MENU
const hamburger = document.getElementById("hamburger-ctr");
const menuLinks = document.querySelectorAll("menu-link");
const homeLink = document.getElementById("home-link");
const aboutLink = document.getElementById("about-link");
const contactLink = document.getElementById("contact-link");

function menuToggle() {
  document.getElementById("menu-container").classList.toggle("show");
  document.getElementById("nav").classList.toggle("transparent");
  document.getElementById("logo-r").classList.toggle("logo-change");
}

menuLinks.forEach((link) => {
  link.addEventListener("click", menuToggle);
});

hamburger.addEventListener("click", menuToggle);
homeLink.addEventListener("click", menuToggle);
aboutLink.addEventListener("click", menuToggle);
contactLink.addEventListener("click", menuToggle);

// Top scroll navbar
window.addEventListener("scroll", function () {
  const navSideContainer = document.querySelector("#nav-insideContainer");
  const logoName = document.querySelector("#logo-name");
  let windowPosition = window.scrollY > 0;

  navSideContainer.classList.toggle(
    "nav-insideContainer-active",
    windowPosition
  );
  logoName.classList.toggle("logo-hide", windowPosition);
  navSideContainer.classList.toggle("navbar-contents-acitve", windowPosition);
});

// cursor

// document.addEventListener("DOMContentLoaded", () => {
//   let mousePosX = 0,
//     mousePosY = 0,
//     mouseCircle = document.getElementById("mouse-circle");

//   document.onmousemove = (e) => {
//     mousePosX = e.pageX;
//     mousePosY = e.pageY;
//   };

//   let delay = 6,
//     revisedMousePosX = 0,
//     revisedMousePosY = 0;

//   function delayMouseFollow() {
//     requestAnimationFrame(delayMouseFollow);

//     revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
//     revisedMousePosY += (mousePosY - revisedMousePosY) / delay;

//     mouseCircle.style.top = revisedMousePosY + "px";
//     mouseCircle.style.left = revisedMousePosX + "px";
//   }
//   delayMouseFollow();
// });
