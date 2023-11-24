let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-image");
const totalSlides = slides.length;

function moveSlide(direction) {
  slides[currentSlide].style.display = "none";
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  slides[currentSlide].style.display = "block";
}