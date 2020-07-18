"use strict";

//스크롤시 navbar 투명화
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

//navbar 메뉴 클릭시 해당 section으로 이동
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  console.log(event.target.dataset.link);
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth", block: "center" });
});
