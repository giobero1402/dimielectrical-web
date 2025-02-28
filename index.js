let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.c-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});

let show = false;
function showMenu(){
    if(!show){
        document.querySelector('.mobile-header').style.display = `block`;
        show = true;
        return;
    }
    document.querySelector('.mobile-header').style.display = `none`;
    show = false;
}

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('#link');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            document.querySelector('.mobile-header').style.display = `none`;
            show = false;
        })
    })
});