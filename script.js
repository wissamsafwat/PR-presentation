const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('previous_button');
const nextBtn = document.getElementById('next_button');
let currentIndex = 0;

function updateSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

    
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide(currentIndex);
}


function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide(currentIndex);
}


nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);


document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') {
        event.preventDefault(); 
        nextSlide();
    } else if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        event.preventDefault();
        prevSlide();
    }
});