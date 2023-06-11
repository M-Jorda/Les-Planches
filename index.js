let navbar = document.querySelector(".navBar");
let img = document.getElementById("img");
let lastScroll = "0";

window.addEventListener('scroll', () => {
  // navbar effect
  if (window.scrollY < lastScroll) {
    navbar.style.height = "13vh";
    navbar.style.opacity = "1";
  } else {
    navbar.style.height = "0";
    navbar.style.opacity = "0";
  }
  lastScroll = window.scrollY;
  
  let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
     if (scrollValue > 0.30) {
        img.style.opacity = "1";
        img.style.transform = "none";
    }
    
  if (scrollValue > 0.45) {
    document.getElementById('accueil').classList.add('anim1');
  }

  if (scrollValue > 0.75) {
    document.getElementById('menu-section').classList.add('anim2');
  }

  if (scrollValue > 0.90) {
    document.getElementById('boisson').classList.add('anim3');
  }
});



function defilerImages() {
  var indexMenu = 0;
  var indexDrinks = 0;
  var menuImages = [
    "./img/img1.jpg",
    "./img/img2.jpg",
    "./img/img3.jpg",
    "./img/img4.jpg",
    "./img/img5.jpg",
    "./img/img6.jpg",
    "./img/img7.jpg",
    "./img/img8.jpg",
    "./img/img9.jpg",
    "./img/img10.jpg",
    "./img/img11.jpg"
  ];
  var drinksImages = [
    "./img/drink1.jpg",
    "./img/drink2.jpg",
    "./img/drink3.jpg",
    "./img/drink4.jpg",
    "./img/drink5.jpg",
    "./img/drink6.jpg",
    "./img/drink7.jpg",
    "./img/drink8.jpg",
    "./img/drink9.jpg"
  ];
  var menuElement = document.getElementById("menu");
  var drinksElement = document.getElementById("drinks");

  menuElement.style.transition = "opacity 0.5s";
  drinksElement.style.transition = "opacity 0.5s";

  setInterval(function() {
    menuElement.style.opacity = "0";
    setTimeout(function() {
      menuElement.src = menuImages[indexMenu];
      menuElement.style.opacity = "1";
      indexMenu = (indexMenu + 1) % menuImages.length;
    }, 500);
  }, 3000);

  setTimeout(function() {
    setInterval(function() {
      drinksElement.style.opacity = "0";
      setTimeout(function() {
        drinksElement.src = drinksImages[indexDrinks];
        drinksElement.style.opacity = "1";
        indexDrinks = (indexDrinks + 1) % drinksImages.length;
      }, 500);
    }, 3000);
  }, 1500);
}


// Appel de la fonction au chargement de la page
window.onload = defilerImages;
