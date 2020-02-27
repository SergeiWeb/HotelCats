$(window).ready(function() {

	let roomsSlider = $('.rooms-slider');

	roomsSlider.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		dots: true,
		dotsClass: 'rooms-slider__dots',
		prevArrow: $('.left-arrow'),
		nextArrow: $('.right-arrow'),
	});

});
