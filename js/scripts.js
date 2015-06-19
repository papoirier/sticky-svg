function animateShape() {
	// ANIMATIONS & COLORS // ----------------------------------
	var animationToPublishers = $("#animation-to-publishers"),
		animationToAdvertisers = $("#animation-to-advertisers"),
		animationToReaders = $("#animation-to-readers");
	var animationToYellow = $("#animation-to-yellow"),
		animationToPink = $("#animation-to-pink"),
		animationToOrange = $("#animation-to-orange");

	var flagYellow = true;
	var flagPink = true;
	var flagOrange = true;

	var	colorYellow = "rgba(253,209,71,0.5)";
	var	colorPink = "rgba(250, 169, 56,0.5)";
	var	colorOrange = "rgba(242, 127, 138,0.5)";

	function animateYellow() {
		animationToPublishers[0].beginElement();
		animationToYellow[0].beginElement();
	}
	function animatePink() {
		animationToAdvertisers[0].beginElement();
		animationToPink[0].beginElement();
	}
	function animateOrange() {
		animationToReaders[0].beginElement();
		animationToOrange[0].beginElement();
	}

	function addColorClass(theClass) {
		if(!$("#bottom").is('[class*=theClass]')) {
    		$("#bottom").removeClass()
    		$("#bottom").addClass(theClass);
    	};
	}
	// DIV HEIGHTS // ------------------------------------------
	var h = $(window).height();

	var one = $("#one").height();
	var sha = $("#shape").height();
	var abouts = $(".abouts").css({"height":h + "px"})
	
	var pub = $("#pub").offset().top;
	var adv = $("#adv").offset().top;
	var rea = $("#rea").offset().top; 

	var all = rea;
	console.log(rea);

	$(window).scroll(function(){
	    var y = $(window).scrollTop();		
		if (y < pub) {
	    	$("#shape").css({"position":"absolute", "top":  one + pub - sha});
	    };
	    if (y >= pub && y <= rea) {
	    	$("#shape").css({"position":"fixed", "top": pub - sha});
	    };
	    
	    if (y > rea) {
	    	$("#shape").css({"position":"absolute", "top": rea + one - sha});
	    	// $("#shape").removeClass();
	    	// $("#shape").addClass("absolutely");
	    };
	    // yellow
	    if( (y < pub && flagYellow == true) || ((y < pub && flagPink == false)) ) {
	    	animateYellow();
	    	flagYellow = false;
	    	flagPink = true;
	    	flagOrange = true;
	    }
	    // pink
	    if( (y >= pub && y < adv && flagPink == true) || (y >= pub && y < adv && flagOrange == false) || (y >= pub && y < adv && flagYellow == false) ){
	    	animatePink();
	    	flagYellow = true;
	    	flagPink = false;
	    	flagOrange = true;
	    }
	    // orange
	    if( (y >= adv && flagOrange == true) || (y >= adv && flagPink == false)) {
	    	animateOrange();
	    	flagYellow = true;
	    	flagPink = true;
	    	flagOrange = false;
	    }
	});
}

$(document).ready(function() {
	animateShape();
	
	$(window).resize(function() {
		animateShape();
	});
	$(window).trigger('resize');


	
});