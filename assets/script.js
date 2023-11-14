

// initialisation des variables
let SlideIndex = 0;
const banner = document.querySelector(".banner-img");
const arrowleft = document.querySelector(".arrow_left");
const arrowright = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");


const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


// showSlide
function showSlide(index) {
    banner.src = `./assets/images/slideshow/${slides[index].image}`;
}


// Clique fleches
arrowleft.addEventListener('click', function () {
    SlideIndex = (SlideIndex - 1 + slides.length) % slides.length;
    showSlide(SlideIndex); // affichage du nouveau slide
    selectDots(SlideIndex); // affichage dots
});

arrowright.addEventListener('click', function () {
    SlideIndex = (SlideIndex + 1) % slides.length;
    showSlide(SlideIndex);
    selectDots(SlideIndex);
});


							// DOTS


// Ajout des Dots
slides.forEach((slide, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");

    if (index === 0) {
        dot.classList.add("dot_selected"); // rajout du Dot au reload (1er slide)
    }

    dot.addEventListener('click', function () { // Clique du Dot
        SlideIndex = index;
        showSlide(SlideIndex);
        selectDots(SlideIndex);
    });
    dots.appendChild(dot);
});


// Ajout background dots
function selectDots(index) {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, dotIndex) => {
        dot.classList.toggle("dot_selected", dotIndex === index); // background blanc si dotIndex = index
    });
}
