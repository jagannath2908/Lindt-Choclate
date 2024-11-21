document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    const slides = document.getElementsByClassName("slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    function showSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
    }

    function changeSlide(n) {
        slideIndex += n;
        if (slideIndex > slides.length) {slideIndex = 1}
        if (slideIndex < 1) {slideIndex = slides.length}
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex-1].style.display = "block";
    }

    prevButton.addEventListener('click', () => changeSlide(-1));
    nextButton.addEventListener('click', () => changeSlide(1));

    showSlides();
    setInterval(showSlides, 5000); // Change image every 5 seconds

    // Add hover effect to chocolate cards
    const chocolateCards = document.querySelectorAll('.chocolate-card');
    chocolateCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
            card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.boxShadow = '';
        });
    });
});