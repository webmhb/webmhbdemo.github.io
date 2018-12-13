(function(jQuery){


	// Page Loading JavaSCript
	jQuery(window).on('load', function(){
		jQuery('.page-load').fadeOut();
	});


	// init Isotope
	var jQuerygrid = jQuery('.grid').isotope({
		// options
	});
	// filter items on button click
	jQuery('.filter-groups').on( 'click', 'li', function() {
	  var filterValue = jQuery(this).attr('data-filter');
		jQuery('.filter-groups li').addClass('active2');
	  jQuerygrid.isotope({ filter: filterValue });
	});
	// filter items on button click
	jQuery('.filter-groups').on( 'click', 'li', function() {
		jQuery(this).addClass('active2').siblings().removeClass('active2');
	});


	// filter items on button click in navbar
//	jQuery('.navmenu').on( 'click', 'a', function() {
//		jQuery(this).addClass('li-active').siblings().removeClass('li-active');
//	});


	//Circle Animations
	jQuery('#cir1').circleProgress({
    value: 0.9,
    size: 180,
    startAngle: 105,
    fill: {
      color: "#30bae7"
    }
	});

	jQuery('#cir2').circleProgress({
	  value: 0.75,
	  size: 180,
	  startAngle: 105,
	  fill: {
		color: "#d74680"
	  }
	});

	jQuery('#cir3').circleProgress({
	  value: 0.70,
	  size: 180,
	  startAngle: 105,
	  fill: {
		color: "#15C7A8"
	  }
	});

	jQuery('#cir4').circleProgress({
	  value: 0.85,
	  size: 180,
	  startAngle: 105,
	  fill: {
		color: "#EB7D4B"
	  }
	});




})(jQuery);
