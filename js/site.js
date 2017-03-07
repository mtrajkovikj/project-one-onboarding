$.noConflict();
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
  $('#info-form').on('submit', function(e) {
   e.preventDefault();
   var user = $('#name').val();
   showmsg(user);
 });

