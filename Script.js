// create our variables

const hamburger = document.querySelector(
    ".header .nav-bar .nav-list .hamburger"
  );
  const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
  const mobile_item = document.querySelectorAll(
    ".header .nav-bar .nav-list ul li a"
  );
  const header = document.querySelector(".header.container");
  
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
  
  document.addEventListener("scroll", () => {
    let scroll_position = window.scrollY;
    if (scroll_position > 250) {
      header.style.backgroundColor = "#274567";
    } else {
      header.style.backgroundColor = "transparent";
    }
  });