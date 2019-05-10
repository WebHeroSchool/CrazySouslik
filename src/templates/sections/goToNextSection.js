(function() {
  //добавляет адресса стрелкам быстрого перехода к следующей секции
  const arrows = document.querySelectorAll('.section__arrow-link');
  
  let idSection = [ '#works', '#skills', '#git', '#cooperation'];
  let index = 0;

  arrows.forEach( (i) => {

    i.href = idSection[ index ];
    index++;
    
    //стрелка бежит вниз по клику
    i.addEventListener( 'click', function(e) {

      e.target.classList.remove('section__arrow-link--animation');
      setTimeout( () => {
        e.target.classList.add('section__arrow-link--run');
  
        setTimeout( () => {
          e.target.classList.remove('section__arrow-link--run');
          e.target.classList.add('section__arrow-link--animation');
        }, 1000);
      }, 100);    
    });

  });

  //плавность при переходе по якорным ссылкам
  var $page = $('html, body');

  $('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
  });

}());