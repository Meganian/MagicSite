var $ = jQuery.noConflict();

$(document).ready(function($) {
	"use strict";


	//Scroll Menu
	function menuToggle()
	{
		var windowWidth = $(window).width();
		var navbar = $('.navbar');
		var topBar2 = $('.top-bar2');
		var navbarBrand = $('.navbar-brand');
		if(windowWidth > 767 ){
			$(window).on('scroll', function(){
				if( $(window).scrollTop()>405 ){
                    navbar.addClass('navbar-fixed-top animated fadeIn').removeClass('main-nav');
                    topBar2.css('left','120px');
                    navbarBrand.addClass('change-logo');
				} else {
                    navbar.removeClass('navbar-fixed-top').addClass('main-nav');
                    topBar2.css('left','26px');
                    navbarBrand.removeClass('change-logo');
				}
			});
		}else{ //@include pading
            navbar.addClass('main-nav');
            navbarBrand.addClass(this);
		};
	}

	menuToggle();

	// Navigation Scroll

	$(window).scroll(function(event) {
		Scroll();
	});

	$('.navbar-collapse').find('a').click(function() {
		$('html, body').animate({scrollTop: $(this.hash).offset().top -79}, 1000);
		return false;
	});

	// User define function
	function Scroll() {
		var contentTop      =   [];
		var contentBottom   =   [];
		var winTop      =   $(window).scrollTop();
		var rangeTop    =   200;
		var rangeBottom =   500;
		$('.navbar-collapse').find('.scroll a').each(function(){
			contentTop.push( $( $(this).attr('href') ).offset().top);
			contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
		});
		$.each( contentTop, function(i){
			if ( winTop > contentTop[i] - rangeTop ){
				$('.navbar-collapse li.scroll')
				.removeClass('active')
				.eq(i).addClass('active');
			}
		})
	};

	$(document).ready(function () {
		$(".navbar-nav li a").click(function(event) {
		$(".navbar-collapse").collapse('hide');
		});
	});

	//Parallax Scrolling
	$(window).bind('load', function () {
		parallaxInit();
	});
	function parallaxInit() {
		$("#promo-one").parallax("50%", 0.3);
		$("#promo-two").parallax("50%", 0.3);
		$("#fun-fact").parallax("50%", 0.3);
	}
	parallaxInit();



	//Pretty Photo
	 $("a[data-gallery^='prettyPhoto']").prettyPhoto({
	  social_tools: false
	 });

	//Isotope
	var winDow = $(window);
			// Needed variables
	var $container=$('.portfolio-items');
	var $filter=$('.filter');

	try{
		$container.imagesLoaded( function(){
			$container.show();
			$container.isotope({
				filter:'*',
				layoutMode:'masonry',
				animationOptions:{
					duration:750,
					easing:'linear'
				}
			});
		});
	} catch(err) {
	}

	winDow.bind('resize', function(){
		var selector = $filter.find('a.active').attr('data-filter');

		try {
			$container.isotope({
				filter	: selector,
				animationOptions: {
					duration: 750,
					easing	: 'linear',
					queue	: false,
				}
			});
		} catch(err) {
		}
		return false;
	});

	// Isotope Filter
	$filter.find('a').click(function(){
		var selector = $(this).attr('data-filter');

		try {
			$container.isotope({
				filter	: selector,
				animationOptions: {
					duration: 750,
					easing	: 'linear',
					queue	: false,
				}
			});
		} catch(err) {

		}
		return false;
	});


	var filterItemA	= $('.filter a');

	filterItemA.on('click', function(){
		var $this = $(this);
		if ( !$this.hasClass('active')) {
			filterItemA.removeClass('active');
			$this.addClass('active');
		}
	});


	//Initiat WOW JS
	new WOW().init();

	//smoothScroll
	smoothScroll.init();


});

