jQuery(function($) {
	$('.js-mainslick').slick({
		infinite: true,
		initialSlide: 2,
		autoplay: false,
		autoplaySpeed: 2000,
		speed: 2000,
		cssEase: 'linear',
		slidesToShow: 1,
		dots: true,
		arrows: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		pauseOnDotsHover: false,
	})
	
	// slider page index 5img
	$('.c-slider').slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 6900,
		infinite: true,
		centerMode: true,
		pauseOnHover: false,
		pauseOnFocus: false,
		cssEase: 'linear',
		slidesToShow: 6,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 767,
				rows: 2,
				settings: {
				slidesToShow: 1,
				}
			},
		]
	});
});