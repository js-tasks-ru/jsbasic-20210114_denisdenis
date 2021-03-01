function initCarousel() {
  // Ширина слайда
  let slideWidth = document.querySelector('.carousel__slide').offsetWidth;

  // Контейнер карусели, его общая ширина и стартовая позиция
  let container = document.querySelector('.carousel__inner');
  let containerWidth = document.querySelectorAll('.carousel__slide').length * slideWidth;
  let containerPosition = 0;

  // Определяем правую и левую стрелки
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let arrowLeft = document.querySelector('.carousel__arrow_left');

  // Левая стрелка со старта скрыта
  arrowLeft.style.display = 'none';

  arrowRight.onclick = function() {
    containerPosition = containerPosition - slideWidth;
    container.style.transform = `translateX(${containerPosition}px)`;

    // Если от ширины контейнера осталась ширина одного слайда - скрываем arrowRight
    if ((containerWidth + containerPosition) == slideWidth) arrowRight.style.display = 'none';

    // Покажем arrowLeft, если она скрыта
    arrowLeft.style.display = '';
  }

  arrowLeft.onclick = function() {
    containerPosition = containerPosition + slideWidth;
    container.style.transform = `translateX(${containerPosition}px)`;

    // Если текущая позиция контейнера == 0, скрываем arrowLeft
    if (containerPosition == 0) arrowLeft.style.display = 'none';

    // Покажем arrowRight, если она скрыта
    arrowRight.style.display = '';
  }  
}
