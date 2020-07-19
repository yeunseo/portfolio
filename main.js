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
  scrollIntoView(link);
});

//Home의 contact me 버튼 클릭시 맨 하단의 contact section으로 이동
const contactMe = document.querySelector(".home__contact");
contactMe.addEventListener("click", () => {
  scrollIntoView("#contact");
});

//스크롤시 Home section 투명화
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY < homeHeight) {
    home.style.opacity = 1 - window.scrollY / homeHeight;
  }
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth", block: "center" });
}
