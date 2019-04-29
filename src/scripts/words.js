//функция для включения анимации смены слов на секции welcom(animate smoke)
(function() {

  const text = document.querySelectorAll('.smoke__item');
  let index = 0;
 
  setInterval( () => {
    
    if ( index === 3 ) {
      index = 0;
    }
    come( index );   
    
  }, 5000);
    
  function come(i) {
    
    if ( text[i].classList.contains('smoke__out') ){
      text[ i ].classList.remove('smoke__out');
    }
  
    text[i].classList.add('smoke__come');
    
    setTimeout( () => {
      out( index );
      }, 4000);
  }

  function out(i) {
    
    text[ i ].classList.remove('smoke__come');
    text[ i ].classList.add('smoke__out');
    
    index++;
  }

}());