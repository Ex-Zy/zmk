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
	$(".js-twentytwenty").twentytwenty({
		default_offset_pct: 0.57
	});

	$('.js-dropdown li').on('click', function(e){
		var parent = $(this).parents('.js-dropdown');
		var lis = parent.find('li');

		if (!parent.hasClass('is-open')) {
			parent.addClass('is-open');
			return;
		}

		lis.removeClass('is-active');
		$(this).addClass('is-active');

		parent.removeClass('is-open');

		e.stopPropagation();
	})
});