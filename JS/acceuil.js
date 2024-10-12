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

const cardWidth = document.querySelector('.destinations_carousel_card').offsetWidth;
const gap = 20; 

// Maximum scrollable width (entire scrollable area minus the visible width)
const maxScroll = carousel.scrollWidth - carousel.clientWidth;

let scrollAmount = 0;

// Function to handle clicking the next button
nextBtn.addEventListener('click', () => {
    if (scrollAmount < maxScroll) {
        scrollAmount += cardWidth + gap; // Scroll one card's width + the gap between cards
        if (scrollAmount > maxScroll) scrollAmount = maxScroll; // Prevent over-scrolling
        carousel.style.transform = `translateX(-${scrollAmount}px)`;
    }
});

// Function to handle clicking the previous button
prevBtn.addEventListener('click', () => {
    if (scrollAmount > 0) {
        scrollAmount -= cardWidth + gap; // Scroll back one card's width + the gap
        if (scrollAmount < 0) scrollAmount = 0; // Prevent under-scrolling
        carousel.style.transform = `translateX(-${scrollAmount}px)`;
    }
});



