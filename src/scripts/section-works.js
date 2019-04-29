//Функция для включения анимации(печать текста) при наведении на изображении примеров работ
( function() {

  const elem = document.querySelectorAll('.works__link');

  elem.forEach( (i) => {

    i.addEventListener( 'mouseover', getNextElem, true );
    i.addEventListener( 'mouseout', closeNextElem, true );

  }); 

  function getNextElem(e) {
    e.target.parentNode.nextElementSibling.classList.add( 'text-typing' );
  }
  function closeNextElem(e) {
    e.target.parentNode.nextElementSibling.classList.remove( 'text-typing' ); 
  }
  
}());