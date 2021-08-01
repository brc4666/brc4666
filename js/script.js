
const topNav = document.querySelector(".topnav")
const homeButton = topNav.querySelector('.nav--home');
const cottageButton = topNav.querySelector('.nav--cottage');
const debugButton = topNav.querySelector('.debug');
const carouselSection = document.querySelector(".carousel");
const headerSection = document.querySelector(".content-header__container");

function scrollFunction() {
  const carousel = document.querySelector(".carousel");
  return;
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    carousel.style.display  = "none";
  } else {
    carousel.style.display  = "auto";
  }
}


homeButton.addEventListener('click', e => {
  window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
   });
})

cottageButton.addEventListener('click', e => {
  const scrollAmount = 20 + carouselSection.clientHeight + headerSection.clientHeight;
  /// const cottageSection = document.querySelector(".content-cottage-details")
  // cottageSection.scrollIntoView( {behavior:'smooth', block: 'start'});
  //return;
  //console.log( cottageSection);
  window.scrollTo( {
    top: scrollAmount,  
    left: 0,
    behavior: 'smooth' 
  });
})


debugButton.addEventListener('click', e => {
  const scrollAmount = 20 + carouselSection.clientHeight + headerSection.clientHeight;
  console.log("carouselSection.clientHeight: " + carouselSection.clientHeight);
  console.log("headerSection.clientHeight: " + headerSection.clientHeight);
  console.log("scrollAmount: " + scrollAmount);
//  console.log( window );
  
  //window.scrollBy(0, window.scrollY);
  
})