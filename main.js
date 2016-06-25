$(document).ready(function () {
    $("#profile").click(function () {
        $("#nav_dropdown").toggle();
    });

    
   
		
});

jQuery(document).ready(function($) {
    $('.my-slider').unslider({
        animation: 'fade', 
        autoplay: true, 
        arrows: true,
        nav:false,
        arrows: {
	//  Unslider default behaviour
	prev: '<a class="unslider-arrow prev"><i class="material-icons">keyboard_arrow_left</i></a>',
	next: '<a class="unslider-arrow next"><i class="material-icons">keyboard_arrow_right</i></a>',

	//  Example: generate buttons to start/stop the slider autoplaying
//	stop: '<a class="unslider-pause" />',
//	start: '<a class="unslider-play">Play</a>'
}

    });
});