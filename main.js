"use strict";

/* 화면 내리고 올리기 */
let section__All= document.querySelector("#section__All");
let fa_hand_point_up = document.querySelectorAll(".fa-hand-point-up");
let fa_hand_point_down = document.querySelectorAll(".fa-hand-point-down");

let page = 0;
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
window.onload = function() {
  pagedown();
  pageup();
}

let mouseWheel = true;
document.addEventListener("mousewheel", function (e) {
  if (!mouseWheel) {
    return false;
  }
  setTimeout(()=> {
    mouseWheel = true;
  }, 1000); 
  mouseWheel = false;
  let delta = e.wheelDelta;
  if (delta < 0) {
    console.log(delta);
    pageUpDown(+1);
  } else {
    //e.wheelDelta가 +이면
    pageUpDown(-1);
  }
});

function pageup(){
  fa_hand_point_up.forEach((point_up)=>{
    point_up.setAttribute("onClick", "pageUpDown(-1)");
  })
}
function pagedown(){
  fa_hand_point_down.forEach((point_down)=>{
    point_down.setAttribute("onClick", "pageUpDown(+1)");
  })
}
function pageUpDown(updown){
  page+=updown;
  if(page<0) page=0;
  else if(page>=fa_hand_point_up.length-1) page=fa_hand_point_up.length-1;

  window.scrollTo({
    top: window.innerHeight*page,
    behavior: "smooth"
  });
}

const navbar__menu__item = document.querySelectorAll('.navbar__menu__item');

for (let i = 0; i < navbar__menu__item.length; i++) {
  navbar__menu__item[i].addEventListener("click", function () {
    page=i;
    pageUpDown(0);
  });
}

/* 모달 창 열기 */
let main__project = document.querySelectorAll(".section__three__main__project");
let modal__bg = document.querySelectorAll(".modal__bg");
let modal__close = document.querySelectorAll(".modal__close");
for (let i = 0; i < main__project.length; i++) {
  main__project[i].addEventListener("click",function () {
    modal__bg[i].style.display="grid";
  });
}
for (let i = 0; i < modal__close.length; i++) {
  modal__close[i].addEventListener("click",function () {
    modal__bg[i].style.display="none";
  });
}


/* 비디오 속도 조절 */
const v = document.querySelectorAll(".my_video");
v.forEach(function(userItem) {
  userItem.playbackRate = 3;
});