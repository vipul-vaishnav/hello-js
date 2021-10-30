"use strict";

const navBtn = document.querySelector(".nav__dropdown-btn");
const navContent = document.querySelector(".nav__dropdown-content");
const navDropdownList = document.querySelector(".nav__dropdown-list");
const settingsMenu = document.querySelector(".settings");
const settingsMenuBtn = document.querySelector(".sub-menu");
const backBtn = document.querySelector(".back-btn");

navBtn.addEventListener("click", () => {
  navContent.classList.toggle("scale-up");
  //   settingsMenu.classList.remove("show");
  //   navDropdownList.style.visibility = "visible";
  //   navDropdownList.style.pointerEvents = "auto";
});

settingsMenuBtn.addEventListener("click", () => {
  settingsMenu.classList.add("show");
  navDropdownList.style.visibility = "hidden";
  navDropdownList.style.pointerEvents = "none";
});

backBtn.addEventListener("click", () => {
  settingsMenu.classList.remove("show");
  navDropdownList.style.visibility = "visible";
  navDropdownList.style.pointerEvents = "auto";
});
