//! slider start
let slideIndex = 1;
showSlides(slideIndex);

setInterval(() => {
  showSlides((slideIndex += 1));
}, 4000);

function plusSlide(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const slides = document.getElementsByClassName("slider-item");
  const dots = document.getElementsByClassName("slider-dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}

//! slider end

//! slideIndexReviews start
let slideIndexReviews = 1;
showSlidesReviews(slideIndexReviews);

setInterval(() => {
  showSlidesReviews((slideIndexReviews += 1));
}, 4000);

function plusSlideReviews(n) {
  showSlidesReviews((slideIndexReviews += n));
}

function currentSlide(n) {
  showSlidesReviews((slideIndexReviews = n));
}

function showSlidesReviews(n) {
  const slidesReviews = document.getElementsByClassName("slider-reviews-item");
  if (n > slidesReviews.length) {
    slideIndexReviews = 1;
  }
  if (n < 1) {
    slideIndexReviews = slidesReviews.length;
  }
  for (let i = 0; i < slidesReviews.length; i++) {
    slidesReviews[i].style.display = "none";
  }

  slidesReviews[slideIndexReviews - 1].style.display = "flex";
}

