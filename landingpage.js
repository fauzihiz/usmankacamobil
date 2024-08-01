//carousel
    let currentSlide = 0;
    let startX, isDragging = false;

    function moveSlide(n) {
        const slides = document.querySelectorAll('.carousel-slide img');
        const totalSlides = slides.length;
        currentSlide = (currentSlide + n + totalSlides) % totalSlides;
        updateSlidePosition();
    }

    function updateSlidePosition() {
        const slides = document.querySelector('.carousel-slide');
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    document.addEventListener('DOMContentLoaded', () => {
        updateSlidePosition();

        const carousel = document.querySelector('.carousel');

// Add swipe functionality for touch devices
        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        });

        carousel.addEventListener('touchmove', (e) => {
            if (!startX) return;
            let moveX = e.touches[0].clientX;
            let diffX = startX - moveX;

            if (diffX > 50) {
                moveSlide(1);
                startX = null;
                isDragging = false;
            } else if (diffX < -50) {
                moveSlide(-1);
                startX = null;
                isDragging = false;
            }
        });

// Add drag functionality for mouse devices
        carousel.addEventListener('mousedown', (e) => {
            startX = e.clientX;
            isDragging = true;
        });

        carousel.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            let moveX = e.clientX;
            let diffX = startX - moveX;

            if (diffX > 50) {
                moveSlide(1);
                startX = null;
                isDragging = false;
            } else if (diffX < -50) {
                moveSlide(-1);
                startX = null;
                isDragging = false;
            }
        });

        carousel.addEventListener('mouseup', () => {
            isDragging = false;
        });

        carousel.addEventListener('mouseleave', () => {
            isDragging = false;
        });
    });
