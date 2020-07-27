"use strict";

// 스크롤시 navbar 투명화
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// navbar 메뉴 클릭시 해당 section으로 이동
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove("open");
  scrollIntoView(link);
});

// navbar 토글 버튼 for mobile
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

// Home의 contact me 버튼 클릭시 맨 하단의 contact section으로 이동
const contactMe = document.querySelector(".home__contact");
contactMe.addEventListener("click", () => {
  scrollIntoView("#contact");
});

// 함수 - 지정한 위치로 스크롤
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth", block: "center" });
  console.log(selector, "로 이동");
}
// 스크롤시 Home section 투명화
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY < homeHeight) {
    home.style.opacity = 1 - window.scrollY / homeHeight;
  }
});

// 클릭시 페이지 맨 위로 이동하는 Arrow up 버튼 생성
const arrowUp = document.querySelector(".arrow_up");
arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

// Arrow up 버튼 스크롤시 나타내기
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});
