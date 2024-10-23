const airlines = document.querySelector(".airlines");


let scrollStep = 1; 
let scrollDirection = 1; 

function autoScroll() {
    airlines.scrollLeft += scrollStep * scrollDirection; 

    // If it reaches the right end, reverse the direction
    if (airlines.scrollLeft >= airlines.scrollWidth - airlines.clientWidth) {
        scrollDirection = -1;
    }

    // If it reaches the left end, reverse the direction
    if (airlines.scrollLeft <= 0) {
        scrollDirection = 1;
    }
}

// Scroll every 10ms for a smooth effect
setInterval(autoScroll, 30);






const carousel = document.querySelector('.destinations_carousel');
const nextBtn = document.querySelector('.fa-circle-chevron-right');
const prevBtn = document.querySelector('.fa-circle-chevron-left');

var x = window.matchMedia("(min-width: 1201px)");
var y = window.matchMedia("(min-width : 801px) and (max-width : 1200px)");
var z = window.matchMedia("(min-width : 321px) and (max-width : 800px)");
var s = window.matchMedia("(max-width: 320px)");


function carouselmovement(j,h){
    let scrollAmount = 0;
    const cardWidth = document.querySelector('.destinations_carousel_card').offsetWidth; 
    const gap = j; 
    const numberOfCards = document.querySelectorAll('.destinations_carousel_card').length;
    
    // Calculate the maximum scroll width
    const maxScroll = (cardWidth + gap ) * ( numberOfCards - h ) ;
    
    nextBtn.addEventListener('click', () => {
        if (scrollAmount < maxScroll) {
            scrollAmount += cardWidth + gap; 
            if (scrollAmount > maxScroll) scrollAmount = maxScroll; 
            carousel.style.transform = `translateX(-${scrollAmount}px)`;
        }
    });
    
    prevBtn.addEventListener('click', () => {
        if (scrollAmount > 0) {
            scrollAmount -= cardWidth + gap; 
            if (scrollAmount < 0) scrollAmount = 0; // Prevent overflow
            carousel.style.transform = `translateX(-${scrollAmount}px)`;
        }
    });
}

// Large screens
x.addEventListener("change", () => {
    carouselmovement(35, 4);
});

if(x.matches){
    carouselmovement(35, 4);
}


// Medium large screens
y.addEventListener("change", () => {
    carouselmovement(20, 3);
});

if(y.matches){
    carouselmovement(20, 3);
}




// Medium small screens
z.addEventListener("change", () => {
    carouselmovement(10, 2);
});

if(z.matches){
    carouselmovement(10, 2);
}




// small screens
s.addEventListener("change", () => {
    carouselmovement(9, 2);
});

if(s.matches){
    carouselmovement(9 ,2);
}