// TOGGLE MENU

function showHideMenu() {
  document.getElementById("menu-container").classList.toggle("show");
  document.getElementById("nav").classList.toggle("transparent");
  document.getElementById("logo-r").classList.toggle("logo-change");
}

// fade in effect nav

// const checkpoint = 300;
// window.addEventListener("scroll", () => {
//   const currentScroll = window.pageXOffset;
//   if (currentScroll == checkpoint) {
//     opacity = 1 - currentScroll / checkpoint;
//   } else {
//     opacity = 0;
//   }
//   document.getElementById("nav").style.opacity = opacity;
// });

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
