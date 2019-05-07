(function() {
  //добавляет адресса стрелкам быстрого перехода к следующей секции
  const arrows = document.querySelectorAll('.section__arrow');
  
  let idSection = [ '#works', '#skills', '#git', '#cooperation'];
  let index = 0;

  arrows.forEach( (i) => {

    i.setAttribute( 'href', idSection[index] );
    index++;

    i.addEventListener( 'click', runingDownArrow );
    
  });

  function runingDownArrow(e) {    

    e.target.classList.remove('section__arrow--animation');
    setTimeout( () => {
      e.target.classList.add('section__arrow--run');

      setTimeout( () => {
        e.target.classList.remove('section__arrow--run');
        e.target.classList.add('section__arrow--animation');
      }, 1000);
    }, 100);    
  }

  //плавность при переходе по якорным ссылкам
  var $page = $('html, body');

  $('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
  });

}());