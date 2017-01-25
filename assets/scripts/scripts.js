jQuery(document).ready(function(){

	$('.background').removeClass('lazy');
	$('.background-2-3').removeClass('lazy-2-3');
	$('.background-half').removeClass('lazy-half');
	// $('.hej').removeAttr('style');
	$('.block-hover').css('min-height', $(window).height());
	$('.block-start-project').css('min-height', $(window).height());
	$('.background').css('min-height', $(window).height());
	$('.background-2-3').css('min-height', $(window).height() / 3 * 2);	
	$('.background-half').css('min-height', $(window).height() / 2);

	/********** ON CLICK FUNCTIONS **************/

	$('.slide-menu').click(function(){
		// $('.navbar').css('background-color', '#c6b9a7');
		$('.top-menu').slideToggle('fast');
		$('.navbar').toggleClass('background-navbar');
	});

	$('.arrow').click(function(){
		$('html, body').animate({ scrollTop: $('.section').offset().top }, 'slow');
	});

	$('.contact-hover').click(function(){
		$('.block-start-project').fadeIn();
	});

	$('.close-start-project').click(function(){
		$('.block-start-project').fadeOut();
	});
	/********** OPEN OFFER-ONE ******************/

	$('.special-offer-one').click(function(){
		$('.offer-one').fadeIn();
	});

	/********** OPEN OFFER-TWO ******************/

	$('.special-offer-two').click(function(){
		$('.offer-two').fadeIn();
	});

	/********** OPEN SERVICE1 ******************/

	$('.service1').click(function(){
		$('.form-service1').fadeIn();
	});
	
	/********** OPEN SERVICE2 ******************/

	$('.service2').click(function(){
		$('.form-service2').fadeIn();
	});
	
	/********** OPEN SERVICE3 ******************/

	$('.service3').click(function(){
		$('.form-service3').fadeIn();
	});

	/********** OPEN-FORM-SUPPORT ***************/
	$('.open-form-support').click(function(){
		$('.start-project').fadeIn();
	});

	/********** CLOSE-FORM-SUPPORT **************/
	$('.close-form-support').click(function(){
		$('.form-support').fadeOut();
	});

	/********** CLOSE-FORM-OFFER **************/
	$('.close-form-offer').click(function(){
		$('.form-offer').fadeOut();
	});

	/********** CLOSE-FORM-OFFER **************/
	$('.close-form-support').click(function(){
		$('.start-project').fadeOut();
	});


	/********** PREVENT DEFAULT *****************/
	$('.preventdefault').click(function( event ) {
		event.preventDefault();
	});

	/********** ANIMATE SLOGAN TEXT *************/

	$('.slogan-row-one').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$('.slogan-row-two').css('display', 'block').addClass('animated fadeInRightBig');
	});

	$('.slogan-row-two').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$('.slogan-row-three').css('display', 'block').addClass('animated fadeInLeftBig');
	});

	/********** CONTACT HOVER ******************/

	$('.contact-hover').hover(function(){
		$('.block-hover').fadeToggle('slow');
		$('.contact-hover h4').toggleClass('pulse');
	});

	/********** SPECIAL OFFERS HOVER ***********/

	$('.special-offer').hover(function(){
		$(this).toggleClass('pulse');
	});


	$('.sliderImages').slick({
	dots: true,
	infinite: true,
	speed: 1000,
	fade: true,
	slide: 'div',
	cssEase: 'linear',
	autoplay: true,
	autoplaySpeed: 3000
	});

	$('#right-menu').sidr({
	name: 'sidr-right',
	side: 'right'
	});

	
	/************ TEAM IMAGES FADE IN ******************/

	jQuery('img[usemap]').rwdImageMaps();

	var personImage = null;
	var personText = null;

	jQuery('#Map area').each(function() { 
		jQuery(this).hover(function() {

		var thisPerson = jQuery(this).attr('alt');
		personImage = "#" + thisPerson;	
		personText = "." + thisPerson;
		
		console.log(personText);

		

		jQuery(thisPerson).hide();
		jQuery(personImage).fadeIn();
	
		console.log(jQuery("." + thisPerson).html());
		jQuery("." + thisPerson).fadeIn().find("h2").delay(2000).fadeIn().parent().find("p").hide().delay(700).fadeIn();
		
		},
		function() {
			jQuery(personImage).hide();
			jQuery(personText).hide();
			
		});
	});	



}); //end ready

