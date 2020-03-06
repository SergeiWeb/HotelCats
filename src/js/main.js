$(window).ready(function() {

	let roomsSlider  = $('.rooms-slider'),
			rewiewsSlider = $('.rewievs-slider');

	roomsSlider.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		fade: true,
		dots: true,
		dotsClass: 'slider__dots',
		prevArrow: $('.rooms-left__arrow'),
		nextArrow: $('.rooms-right__arrow'),
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
				}
			}
		]
	});

	rewiewsSlider.slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: false,
		dots: true,
		dotsClass: 'slider__dots rewievs-slider__dots',
		prevArrow: $('.rewievs-left__arrow'),
		nextArrow: $('.rewievs-right__arrow'),
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				}
			}
		]
	});


	// Burger

	let burgerMenu = $('.navbar-burger'),
			navbar     = $('.navbar');

	burgerMenu.on('click', function() {
		navbar.toggleClass('active');
		$(this).toggleClass('active');
		$('body').toggleClass('block');
	});

});
