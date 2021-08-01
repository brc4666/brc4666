const tracker = document.querySelector('.carousel__tracker');
const slides = Array.from(tracker.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left') ;
const dotsNav = document.querySelector('.carousel__indicator__container');
const dots = Array.from( dotsNav.children );
const slidewidth = slides[0].getBoundingClientRect().width;
const carouselDescriptions = ["Sunset over the Solway Firth",
                              "View to Scotland from Allony Beach", 
                              "Cottages on West Green, Allonby "];


function updateCarouselImageDescription( currentSlideIndex ) {
  const descElement = document.querySelector(".carousel__nav__text");
  descElement.innerHTML = carouselDescriptions[ currentSlideIndex ];
}

// Arrange the slides next to one another
slides.forEach( (slide, index) => {
  slides[index].style.left = slidewidth * index + 'px';
})
// display initial image text
updateCarouselImageDescription(0);



function moveSlideIndicator (currentSlideIndex, targetSlideIndex) {
  // console.log("Moving slide indicator: " + currentSlideIndex + ' ' + targetSlideIndex);
  dots[currentSlideIndex].classList.remove('current-slide');
  dots[targetSlideIndex].classList.add('current-slide');
}

const moveSlide = (currentSlide, targetSlide) => {
  // move onto target slide
  const amountToMove = targetSlide.style.left;
  tracker.style.transform = 'translateX(-' + amountToMove +')';

  // update which slide is now the current slide 
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');

  // Now update the dots indicator
  const currentSlideIndex = slides.findIndex(slide => slide === currentSlide);
  const targetSlideIndex = slides.findIndex(slide => slide === targetSlide);
  moveSlideIndicator(currentSlideIndex, targetSlideIndex);

  // And finally update the text description
  updateCarouselImageDescription( targetSlideIndex );
  
}

nextButton.addEventListener('click', e => {
  // find the current and next slides based on the current-slide class 
  const currentSlide = tracker.querySelector('.current-slide');
  var nextSlide = currentSlide.nextElementSibling;
  if (!nextSlide) {
    // clicked right on last slide ... so reset to first slide
    nextSlide = slides[0];
  }
  // call the moveSlide function
  moveSlide(currentSlide, nextSlide);
})

prevButton.addEventListener('click', e => {
  // find the current and previous slides based on the current-slide class 
  const currentSlide = tracker.querySelector('.current-slide');
  var prevSlide = currentSlide.previousElementSibling;
  if (!prevSlide) {
    // clicked left on first slide ... so reset to last slide
    prevSlide = slides[ slides.length - 1 ];
  }
  // call the moveSlide function
  moveSlide(currentSlide, prevSlide);
})

dotsNav.addEventListener('click', e => {
  // Check we have clicked a button rather than just the nav bar 
  const targetDot = e.target.closest('button');
  if (!targetDot) return;
  // Now find the index of the dot the user has clicked
  // and then the associated slide 
  const targetDotIndex = dots.findIndex(dot => dot === targetDot);
  const currentSlide = tracker.querySelector('.current-slide');
  const targetSlide = slides[targetDotIndex];
  // Now we can move to the target slide
  moveSlide(currentSlide, targetSlide);
})