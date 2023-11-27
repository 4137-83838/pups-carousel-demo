 var previousButton, nextButton;
    var carouselContainer, cards, pageDots;
    var leftSlideIndex = 0; 

    window.addEventListener('DOMContentLoaded', function (e) {
      previousButton = document.querySelector('.previous');
      nextButton = document.querySelector('.next');
      carouselContainer = document.querySelector('.tiles');
      cards = carouselContainer.querySelectorAll('.slide');
      pageDots = document.querySelectorAll('.paginationDots li');
    
      previousButton.addEventListener('click', previousSlide);
      nextButton.addEventListener('click', nextSlide);
    
      pageDots.forEach(function (dot) {
        dot.addEventListener('click', function (e) {
          goToSlide(Array.prototype.slice.call(pageDots).indexOf(e.target)); 
        });
      });
    });
    
    function previousSlide() {
      if (leftSlideIndex > 0) { 
        goToSlide(leftSlideIndex - 1);
      } else {
        goToSlide(cards.length - 1);
      }
    }
    
    function nextSlide() {
      if (leftSlideIndex < cards.length - 1) { 
        goToSlide(leftSlideIndex + 1);
      } else {
        goToSlide(0);
      }
    }
    
    function goToSlide(nextLeftSlideIndex) {
      $(carouselContainer).animate({
        scrollLeft: carouselContainer.offsetWidth / 3 * nextLeftSlideIndex },
      {
        duration: 200 });
    
    
      pageDots.forEach(function (dot) {
        dot.classList.remove('active');
      });
    
      pageDots[nextLeftSlideIndex].classList.add('active');
    
      leftSlideIndex = nextLeftSlideIndex;
    }