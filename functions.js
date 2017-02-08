$(document).ready(function() {
    $('#faqPic').css('height', $('#faqText').css('height'));
});

$(window).resize(function() {
    $('#faqPic').css('height', $('#faqText').css('height'));
});

// scroll down page to div
function jumpTo(dest, mobile) {
    // close menu on mobile
    if (mobile) {
        $("#mobileMenu").css("opacity", "0");
        $("#mobileMenu").css("pointer-events", "none");
        $(".menuIconBar").removeClass("change");
    }

    // if on band page return to main page
    if ((document.title).split(" ")[0] == 'Bands:') {
        location.assign('../index.html');
        return;
    }

    if (dest !== null) {
        // set target
        if (dest == 'landing') {
            var target = '#landing';
        } else {
            var target = '.divider.' + dest;
        }

        // animated scroll to target
        $('html, body').animate({
			scrollTop: $(target).offset().top
		}, 500);
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

// open contact box
function openContact(origin) {
    if (origin == 'main') {
        $('.bandPageOnly').css('display', 'none');
    } else {
        $('.bandPageOnly').css('display', 'block');
    }

    $('#contactWrap').css('left', 'calc(50vw - 175px)');
}

// close contact form
function closeForm() {
    $('#contactWrap').css('left', '-400px');
}

// show header bar when scrolling down
$(document).scroll(function() {
    if ((document.title).split(" ")[0] != 'Bands:') {
        if ($(window).scrollTop() >= 600) {
            $(".navBar").css("top", "-3px");
        } else {
            $(".navBar").css("top", "-90px");
        }
    }
});

// open video
function playVideo(url, box) {
	$(box.childNodes[1]).css('top', '0px');

	// load embedded YouTube video
	setTimeout(function() {
        $(box.childNodes[1]).attr('src', 'https://www.youtube.com/embed/' + url + '?autoplay=1');
	}, 500);
}
