(function() {

  const logo = document.querySelector( '.logo__images' );

  logo.addEventListener( 'click', logoSpin );
  
  function logoSpin() {
    if( !logo.classList.contains( 'logo-spin' ) ) {
      logo.classList.add( 'logo-spin' );
    }

    setTimeout( () => {
      logo.classList.remove( 'logo-spin' );
    }, 1000 );
    
  }

}());