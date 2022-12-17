const nav = document.querySelector("#nav");
const navButton = document.querySelector("#nav-button");
const navButtonImg = document.querySelector("#nav-button-img");

navButton.onclick = () => {
  if (nav.classList.toggle("open")) {
    navButtonImg.src = "/assets/menu-close.png";
  } else {
    navButtonImg.src = "/assets/menu-open.png";
  }
};
