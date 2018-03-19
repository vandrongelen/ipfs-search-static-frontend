$(function () {
   // your code goes here
   $(".dropdown-menu a").click(function(){
     var selText = $(this).text();
     $(this).parents('.input-group-append').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
   });

   $("button.btn.btn-outline-secondary").on('click', function(e) {
     $(this).css({
       'outline':'none !important',
       'box-shadow':'none'
     });
   });

});
