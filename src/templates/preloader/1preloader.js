(function() {

  document.body.onload = function() {

    const preloader = document.querySelector( '.preloader'),
          progressDisplay = document.querySelector( '.percentDisplay');

    let images = document.images,
        progress = 0,
        imagesTotalCount = images.length,
        imagesLoadedCount = 0,
        imageClone = new Image();        

    for( let i = 0; i < imagesTotalCount; i++ ) {

      imageClone.src = images[i].src;
      imageClone.onload = imageLoaded;
      imageClone.onerror = imageLoaded();
    }

    function imageLoaded() {

      progress = (( (100 / imagesTotalCount) * imagesLoadedCount ) << 0 );

      progressDisplay.innerHTML = progress + '%';
      imagesLoadedCount++;

      if ( imagesLoadedCount >= imagesTotalCount ) {
      
        setTimeout( function() {          
            
          if( !preloader.classList.contains( 'preloader__done' ) ) {
            preloader.classList.add( 'preloader__done' );

            //отложенная загрузка суслика для облегчения
            const souslikPictur = document.querySelector('.souslik__staps');

            souslikPictur.src = 'images/souslik-walk.png';
          }
        }, 1000);
      }
    }
  }
  
}());