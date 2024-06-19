let carousels = {
    'carousel-1': { currentIndex: 0, items: document.querySelectorAll('#carousel-1 .carousel-item') },
    'carousel-2': { currentIndex: 0, items: document.querySelectorAll('#carousel-2 .carousel-item') },
    'carousel-3': { currentIndex: 0, items: document.querySelectorAll('#carousel-3 .carousel-item') }
};

const visibleItems = 5; // Number of visible items

function updateCarousel(carouselId) {
    const carouselData = carousels[carouselId];
    const items = carouselData.items;
    const carousel = document.getElementById(carouselId);
    const itemWidth = items[0].clientWidth + 20; // Including padding
    const offset = -carouselData.currentIndex * itemWidth;
    carousel.style.transform = `translateX(${offset}px)`;

    document.querySelector(`[data-carousel="${carouselId}"].prev`).style.display = carouselData.currentIndex > 0 ? 'block' : 'none';
    document.querySelector(`[data-carousel="${carouselId}"].next`).style.display = carouselData.currentIndex < items.length - visibleItems ? 'block' : 'none';
}

function nextSlide(carouselId) {
    if (carousels[carouselId].currentIndex < carousels[carouselId].items.length - visibleItems) {
        carousels[carouselId].currentIndex++;
        updateCarousel(carouselId);
    }
}

function prevSlide(carouselId) {
    if (carousels[carouselId].currentIndex > 0) {
        carousels[carouselId].currentIndex--;
        updateCarousel(carouselId);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    for (let carouselId in carousels) {
        updateCarousel(carouselId);
    }
});


