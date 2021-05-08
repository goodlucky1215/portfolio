"use strict";
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

window.addEventListener("wheel", e => e.preventDefault(), { passive:false })

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
  let innerheight = window.innerHeight*page;
  document.querySelector("#section__All").style.transform = `translateY(${-innerheight}px)`;
  document.querySelector("#section__All").style.transition = `all 600ms`;
}

const navbar__menu__item = document.querySelectorAll('.navbar__menu__item');

for (let i = 0; i < navbar__menu__item.length; i++) {
  navbar__menu__item[i].addEventListener("click", function () {
    page=i;
    pageUpDown(0);
  });
}