//функция, которая скрывает боковое меню при клике на body
(function() {
  const asideMenu = document.querySelector('.menu__label'),
        chekMenu = document.getElementById('menu__check');

  document.body.addEventListener('click', (e) => {    
    
    if ( chekMenu.checked ) {

      if (e.target === asideMenu || e.target === chekMenu ) {
        
      } else {
        chekMenu.checked = false;
      }
    }
  });

}());