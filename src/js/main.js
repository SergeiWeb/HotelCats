$(window).ready(function() {

	let roomsSlider  = $('.rooms-slider'),
			rewiewsSlider = $('.rewievs-slider');

	roomsSlider.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		dots: true,
		dotsClass: 'slider__dots',
		prevArrow: $('.rooms-left__arrow'),
		nextArrow: $('.rooms-right__arrow'),
	});

	rewiewsSlider.slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: true,
		dots: true,
		dotsClass: 'slider__dots',
		prevArrow: $('.rewievs-left__arrow'),
		nextArrow: $('.rewievs-right__arrow'),
	});

});
