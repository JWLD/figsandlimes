// scroll down page to div
function jumpTo(dest, mobile) {
    if (dest !== null) {
        if (dest == 'landing') {
            var target = '.section.' + dest;
        } else {
            var target = '.divider.' + dest;
        }

		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 500);
	}

	// close menu on mobile
	if (mobile) {
		$("#mobileMenu").css("opacity", "0");
		$("#mobileMenu").css("pointer-events", "none");
		$(".menuIconBar").removeClass("change");
	}
}

// mobile menu
function toggleMobileMenu() {
	if ($("#mobileMenu").css("opacity") == 0) {
		$("#mobileMenu").css("opacity", "1");
		$("#mobileMenu").css("pointer-events", "auto");

		// animate menu button
		$(".menuIconBar").addClass("change");
	} else {
		$("#mobileMenu").css("opacity", "0");
		$("#mobileMenu").css("pointer-events", "none");

		// animate menu button
		$(".menuIconBar").removeClass("change");
	}
}
