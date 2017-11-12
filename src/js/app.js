import sayHello from './lib/sayHello.js';
import $ from 'jquery';
import 'slick-carousel';

$('.click-submenu').click(function() {
  $('.submenu').toggleClass('expand');
});

$('.click-right-submenu').click(function() {
  $('.right-submenu').toggleClass('expand');
});

$(document).on('click', function(e) {
  if (!$(e.target).closest('body').length) {
    $('.submenu').hide();
    $('.right-submenu').hide();
  }
  e.stopPropagation();
});


$('.js-gallery').slick({
  dots: true
});



sayHello();
