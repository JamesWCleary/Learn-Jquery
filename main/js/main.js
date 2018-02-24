$(document).ready(function() {                       // READY FUNCTION

	//BASIC SELECTORS
	$("body p.lead").css("border", "4px solid red"); // CSS STYLE SELECT
	$("#lesson-1").css("border", "4px solid grey");  // ID SELECT
	$("*").css("text-decoration", "none");           // ALL SELECT

	// BASIC ANIMATIONS
	$(".box:first").hide(500).delay(300).show(800); // HIDE SHOW DELAY ANIMATIONS
	$(".box:last").slideUp(500).slideDown(800);     // SLIDE ANIMATION
	$(".box:nth-child(2)").fadeOut(500).fadeIn(500);      // FADE ANIMATION

	// INDEX FILTERS

	// RELATIONSHIP FILTERS

	// ATTRIBUTE FILTERS


});
