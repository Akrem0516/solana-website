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


function for_large(){
    let scrollAmount = 0;
    const cardWidth = document.querySelector('.destinations_carousel_card').offsetWidth; 
    const gap = 35; 
    const numberOfCards = document.querySelectorAll('.destinations_carousel_card').length;
    
    // Calculate the maximum scroll width
    const maxScroll = (cardWidth + gap ) * ( numberOfCards - "4" ) ;
    console.log(maxScroll)
    
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
x.addEventListener("change", () => {
    for_large();
});

if(x.matches){
    for_large();
}




function for_mediumlarge(){
    let scrollAmount = 0;
    const cardWidth = document.querySelector('.destinations_carousel_card').offsetWidth; 
    const gap = 20; 
    const numberOfCards = document.querySelectorAll('.destinations_carousel_card').length;
    
    // Calculate the maximum scroll width
    const maxScroll = (cardWidth + gap) * ( numberOfCards - "3" );
    
    
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
y.addEventListener("change", () => {
    for_mediumlarge();
});

if(y.matches){
    for_mediumlarge();
}






function for_mediumsmall(){
    let scrollAmount = 0;
    const cardWidth = document.querySelector('.destinations_carousel_card').offsetWidth; 
    const gap = 10; 
    const numberOfCards = document.querySelectorAll('.destinations_carousel_card').length;
    
    // Calculate the maximum scroll width
    const maxScroll = (cardWidth + gap) * (numberOfCards - "2");
    
    
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
z.addEventListener("change", () => {
    for_mediumsmall();
});

if(z.matches){
    for_mediumsmall();
}





function for_small(){
    let scrollAmount = 0;
    const cardWidth = document.querySelector('.destinations_carousel_card').offsetWidth; 
    const gap = 9; 
    const numberOfCards = document.querySelectorAll('.destinations_carousel_card').length;
    
    // Calculate the maximum scroll width
    const maxScroll = (cardWidth + gap) * (numberOfCards - "2");
    
    
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
s.addEventListener("change", () => {
    for_small();
});

if(s.matches){
    for_small();
}