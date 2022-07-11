function initCarousel() {
    let carousel = document.querySelector('.carousel');
    let carouselInner = document.querySelector('.carousel__inner'); 
    let slides = document.querySelectorAll('.carousel__slide');
    let slideWidth = carouselInner.offsetWidth; 
  
    let carouselArrowRight = document.querySelector('.carousel__arrow_right');
    let carouselArrowLeft = document.querySelector('.carousel__arrow_left');
    carouselArrowLeft.style.display = 'none';
  
    let currentSlideCount = 1;
    let position = 0; 
  
    carousel.addEventListener('click', (event) => {
      if (event.target.closest('.carousel__arrow_right')) {
        currentSlideCount += 1;
        position += slideWidth;
        carouselInner.style.transform = `translateX(-${position}px)`;
      } else if (event.target.closest('.carousel__arrow_left')) {
        position = position - slideWidth;
        carouselInner.style.transform = `translateX(-${position}px)`;
        currentSlideCount -= 1;
      }
      if (currentSlideCount > 1) {
        carouselArrowLeft.style.display = 'flex';
      } else {
        carouselArrowLeft.style.display = 'none';
      } if (currentSlideCount === slides.length) {
        carouselArrowRight.style.display = 'none';
      } else {
        carouselArrowRight.style.display = 'flex';
      }
    });
}
