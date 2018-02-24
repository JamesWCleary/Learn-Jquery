$(document).ready(function() {                       							// READY FUNCTION

	//BASIC SELECTORS
	$("body p.lead").css("border", "4px solid red"); 							// CSS STYLE SELECT
	$("#lesson-1").css("border", "4px solid grey");  							// ID SELECT
	$("*").css("text-decoration", "none");          							// ALL SELECT

	// BASIC ANIMATIONS
	$(".box:first").hide(500).delay(300).show(800); 							// HIDE SHOW DELAY ANIMATIONS
	$(".box:nth-child(4)").slideUp(500).slideDown(800);     					// SLIDE ANIMATION
	$(".box:nth-child(2)").fadeOut(500).fadeIn(500);                            // FADE ANIMATION
	$(".box:nth-child(3)").animate({height: "200px"}, 500);						// CSS ANIMAMATION
	$(".box:nth-child(3)").animate({height: "50px"}, 800);						// CSS ANIMAMATION

	// INDEX FILTERS
	$("p:first").css("border", "4px solid white");                              // FIRST INDEX
	$("p:last").css("border", "4px solid white"); 								// LAST INDEX
	$("p:gt(3)").css("border", "4px solid white");								// GREATER THEN INDEX
	$("p:lt(2)").css("border", "4px solid white");								// LESS THAT INDEX
	$("p:eq(2)").css("border", "4px solid white");								// EQUAL TO INDEX

	// RELATIONSHIP FILTERS
	$("h2:has(span)").css("border", "4px solid grey");							// HAS CHILD FILTER
	$(".box:parent").css("border", "4px solid grey");							// IS PARENT FILTER

});
