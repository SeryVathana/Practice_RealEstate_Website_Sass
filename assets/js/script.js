const header = document.querySelector(".header");
const favIcon = document.querySelectorAll(".property__card-favorite");
const toggleNav = document.querySelectorAll(".toggle-nav");
const nav = document.querySelector(".nav");

function checkHeader() {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  });
}

checkHeader();

function checkFavIcon() {
  for (let i = 0; i < favIcon.length; i++) {
    favIcon[i].addEventListener("click", () => {
      favIcon[i].classList.toggle("active");
    });
  }
}

checkFavIcon();

function checkNavbar() {
  for (let i = 0; i < toggleNav.length; i++) {
    toggleNav[i].addEventListener("click", () => {
      if (!toggleNav[0].classList.contains("active")) {
        toggleNav[0].classList.add("active");
        toggleNav[1].classList.remove("active");
        nav.classList.add("active");
      } else if (!toggleNav[1].classList.contains("active")) {
        toggleNav[0].classList.remove("active");
        toggleNav[1].classList.add("active");
        nav.classList.remove("active");
      }
    });
  }
}

checkNavbar();
