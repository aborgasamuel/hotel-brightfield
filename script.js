document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
 });var instance = M.Carousel.init({
    fullWidth: true,
    indicators: true
  });

  // Or with jQuery

  // slide function


  document.addEventListener('DOMContentLoaded', function(autoslide) {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(autoslide){
    $('.carousel').carousel();
  });


  $('.carousel').carousel({
    padding: 300   
});
autoplay();
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}

  // Or with jQuery

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });
        