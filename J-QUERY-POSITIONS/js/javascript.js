$(function() {
    var $window = $(window);
    $advert = $('#slideEffect');
    $endZone = $('#footer').offset().top - $window.height() -500;
  console.log($endZone);
    $window.on('scroll', function(){
      if ( $window.scrollTop() < $endZone) {
        
        $advert.hide();
      }
      else {
        $advert.show();
      }
    })
  });