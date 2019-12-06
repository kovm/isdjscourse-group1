$(document).ready(function() {
$('.answer').hide();
$('.content h2').toggle(function(){
$(this).next('.answer').fadeIn(1000);
},
function(){
	$(this).next('.answer').fadeOut(1000);
});
});
