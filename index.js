let navbar = document.querySelector(".navBar");
let img = document.getElementById("img");
let lastScroll = "0";

window.addEventListener("scroll", () => {
  const accueilSection = document.getElementById("accueil");
  const menuSection = document.getElementById("menu-section");
  const boissonSection = document.getElementById("boisson");
  // navbar effect
  if (window.scrollY < lastScroll) {
    navbar.style.height = "13vh";
    navbar.style.opacity = "1";
  } else {
    navbar.style.height = "0";
    navbar.style.opacity = "0";
  }
  lastScroll = window.scrollY;

  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  if (scrollValue > 0.3) {
    img.style.opacity = "1";
    img.style.transform = "none";
  }

  if (scrollValue > 0.45) {
    document.getElementById("accueil").classList.add("anim1");
  }

  if (scrollValue > 0.75) {
    document.getElementById("menu-section").classList.add("anim2");
  }

  if (scrollValue > 0.9) {
    document.getElementById("boisson").classList.add("anim3");
  }
});

function defilerImages() {
  var indexMenu = 0;
  var indexDrinks = 0;
  var menuImages = [
    "./img1.jpg",
    "./img2.jpg",
    "./img3.jpg",
    "./img4.jpg",
    "./img5.jpg",
    "./img6.jpg",
    "./img7.jpg",
    "./img8.jpg",
    "./img9.jpg",
    "./img10.jpg",
    "./img11.jpg",
  ];
  var drinksImages = [
    "./drink1.jpg",
    "./drink2.jpg",
    "./drink3.jpg",
    "./drink4.jpg",
    "./drink5.jpg",
    "./drink6.jpg",
    "./drink7.jpg",
    "./drink8.jpg",
    "./drink9.jpg",
  ];
  var menuElement = document.getElementById("menu");
  var drinksElement = document.getElementById("drinks");

  menuElement.style.transition = "opacity 0.5s";
  drinksElement.style.transition = "opacity 0.5s";

  setInterval(function () {
    menuElement.style.opacity = "0";
    setTimeout(function () {
      menuElement.src = menuImages[indexMenu];
      menuElement.style.opacity = "1";
      indexMenu = (indexMenu + 1) % menuImages.length;
    }, 500);
  }, 3000);

  setTimeout(function () {
    setInterval(function () {
      drinksElement.style.opacity = "0";
      setTimeout(function () {
        drinksElement.src = drinksImages[indexDrinks];
        drinksElement.style.opacity = "1";
        indexDrinks = (indexDrinks + 1) % drinksImages.length;
      }, 500);
    }, 3000);
  }, 1500);
}

function openMail() {
  var emailAddress = "contact@example.com";
  window.open("mailto:" + emailAddress, "_blank");
}

// Appel de la fonction au chargement de la page
window.onload = defilerImages;
