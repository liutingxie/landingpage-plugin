/*
* @Author: liutingxie
* @Date:   2018-01-18 21:20:01
* @Last Modified by:   liutingxie
* @Last Modified time: 2018-01-26 17:32:30
*/
jQuery(document).ready(function($) {
	$('#demo-slider').carousel('pause');

	$('#demo-cryptocurrency-slider-plugin').carousel({
	  	interval: 2000
	});

	$('#demo-slider-plugin-slider').carousel({
		interval: 2000
	});

	$('.author-donate button').on('click', function() {
		$('.modal').modal('toggle');
	});

	$('.copy-button').on('click', function(e) {
		e.preventDefault();
		var inputText = $('[aria-describedby=' + $(this).attr('id') + ']');
		inputText.focus();
        inputText[0].setSelectionRange(0, inputText[0].value.length);
		document.execCommand('copy', true);
	});

	// $('body').scrollspy({ target: '#navbar-demo' });

	$(window).scroll(function(event) {
		// puzzle();
	});


});
