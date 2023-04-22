// document.getElementById("fleche-left").addEventListener("click", function () {
//   alert("Fleche gauche");
// });
// document.getElementById("fleche-right").addEventListener("click", function () {
//   alert("Fleche droite");
// });

const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];


let IndexActuel = 0; // commencer avec la première slide

let bannerImg = document.getElementById("banner-img");
let bannerText = document.querySelector("#banner p");
let dots = document.querySelectorAll(".dot");

function changementSlide() {
  bannerImg.src = "./assets/images/slideshow/" + slides[IndexActuel].image;
  bannerText.innerHTML = slides[IndexActuel].tagLine;
  // alert(slides[IndexActuel].image);

  // mettre à jour les classes des points
  for (let i = 0; i < dots.length; i++) { // Parcourt la liste des balises Dot supprime et remplace Dot_selected
    if (i === IndexActuel) {
      dots[i].classList.add("dot_selected");
    } else {
      dots[i].classList.remove("dot_selected");
    }
  }
}

document.getElementById("fleche-right").addEventListener("click", function() {
  IndexActuel = IndexActuel + 1;
  if (IndexActuel >= slides.length) {
    IndexActuel = 0; // si on arrive à la fin, on retourne au début
  }
  changementSlide();
});

document.getElementById('fleche-left').addEventListener('click', function() {
  if (IndexActuel > 0) {
    IndexActuel = IndexActuel - 1;
  } else {
    IndexActuel = slides.length - 1; // si on arrive au début, on retourne à la fin
  }
  changementSlide();
});
