(function() {
  //Фугнкция отвечает за плавную прокрутку до якарей, к которым привязаны ссылки

    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });
    
}());