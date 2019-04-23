//Функция отвечает за появление мониторов с примерами работ, при открытии секции с примерами
(function() {
  
  const listItems = document.querySelectorAll( ".works__example" );
        
  let isScrolling = false;
 
  window.addEventListener( "scroll", throttleScroll, false );
  document.addEventListener( "DOMContentLoaded", scrolling, false );

  //определение момента скролинга
  function throttleScroll( e ) {
    if ( isScrolling == false ) {
      window.requestAnimationFrame( function() {
        scrolling( e );
        isScrolling = false;
      });
    }
    isScrolling = true;
  }  

  //выполнение анимации при появлении элемента в этой функции
  function scrolling( e ) {
    for ( var i = 0; i < listItems.length; i = i + 2 ) {
      var listItem = listItems[i];

      if (isPartiallyVisible(listItem)) {
        listItem.classList.add( "anim-come-left" );
      } else {
        listItem.classList.remove( "anim-come-left" );
      }
    }

    for ( var i = 1; i < listItems.length; i = i + 2 ) {
      var listItem = listItems[i];
      if ( isPartiallyVisible(listItem) ) {
        listItem.classList.add( "anim-come-right" );
      } else {
        listItem.classList.remove( "anim-come-right" );
      }
    }    
  }

  //определение частично видимого элемента
  function isPartiallyVisible( el ) {
    const elementBoundary = el.getBoundingClientRect();

    let top = elementBoundary.top,
        bottom = elementBoundary.bottom,
        height = elementBoundary.height;

    return ( ( top + height >= 0 ) && ( height + window.innerHeight >= bottom) );
  }

  //определение полностью видимого элемента
  function isFullyVisible(el) {
    const elementBoundary = el.getBoundingClientRect();

    let top = elementBoundary.top,
        bottom = elementBoundary.bottom;

    return ( (top >= 0) && ( bottom <= window.innerHeight) );
  }

}());