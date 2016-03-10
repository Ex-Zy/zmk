$(document).ready(function() {
	$blocks = $(".advantage__unit");
	$buttons = $(".advantage__top .btn");

	$buttons.click(function(event) {
		event.preventDefault();
		if(!$(this).hasClass('is-active')){
			$buttons.removeClass('is-active');
			$blocks.hide();

			$(this).addClass('is-active');
			$('#'+$(this).data('target')).show();
		}
	});
	$('.js-slider-top').slick({
		slidesToShow: 1,
		cssEase: 'linear',
		fade: true,
	});
	$('.slider-nav__thumb').on('click', function() {
		var id = $(this).index();
		$('.slider-top').slick('slickGoTo', id);
	});
	$(".fancybox").fancybox({
		openEffect	: 'elastic',
		closeEffect	: 'elastic',

		helpers : {
			title : {
				type : 'inside'
			}
		}
	});
});