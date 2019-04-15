// функция показывает текст при наведении на изображение примера работы(сайт/игра)

( function() {

  const elem = document.querySelectorAll('.works__site');

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