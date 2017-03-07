$.noConflict();
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
  $('#info-form').on('submit', function(e) {
   e.preventDefault();
   var user = $('#name').val();
   showmsg(user);
 });

  function showmsg(user){
   var msg='Hi, '+user+'! Thank you for entering the contest! Good luck!';
   $('#button-message').append(msg);
 }
});