const nav = document.querySelector("#nav");
const navButton = document.querySelector("#nav-button");
const navButtonImg = document.querySelector("#nav-button-img");

navButton.onclick = () => {
  if (nav.classList.toggle("open")) {
    navButtonImg.src = "/assets/menu-close.svg";
  } else {
    navButtonImg.src = "/assets/menu-open.svg";
  }
};
