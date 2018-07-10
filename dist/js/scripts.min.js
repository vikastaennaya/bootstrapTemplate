var bootstrap = {
	mobileMenu: function mobileMenu() {
		$('.mobile-trigger').on('click', function () {
			$(this).next().attr('data-state', 'open');
		})
	},

	mobileClose: function mobileClose() {
		$('.close-mobile-menu').on('click', function () {
			$(this).parent().removeAttr('data-state');
		})
	},

	stickyMenu: function stickyMenu() {
		$(window).on('scroll', function () {
			var navbar = $('.top-navbar');
			var sticky = navbar.offset().top;
			if (sticky > 0) {
				navbar.attr('data-state' , 'sticky')
			} else {
				navbar.removeAttr('data-state');
			}
		})
		
	},

	backToTop: function backToTop()  {
		$('.back-to-top').on('click', function () {
			window.scrollTo(0, 0);
		})
	},

	navigationMenu: function navigationMenu(el) {
		el.on('click', function () {
			if($('.top-navbar').length > 0) {
				$('.top-navbar').attr('data-state' , 'sticky');
			}

			var scrollTo = $(this).attr('data-link').toLowerCase();
			var scrollPunkt = $('section#'+ scrollTo +'').offset().top;
			$('html, body').animate({
				scrollTop: scrollPunkt
			  }, 1000);

			//if mobile resolution
			if($('.mobile-menu[data-state="open"]').length > 0) {
				$('.mobile-menu').removeAttr('data-state');
			}
		});
	},

	popupFunc: function popupFunc() {
		$('.portfolio-img-wrap').on('click', function () {
			$(this).parent().find('.popup-container').removeAttr('data-state');
		});

		$('.popup-close').on('click', function () {
			$(this).parents('.popup-container').attr('data-state', 'hidden');
		});
	},

	formValidation: function formValidation() {
		$('.form-submit-button').on('click', function () {
			if($('.contact-form').find('.form-input:invalid').length > 0) {
				$('.form-group').each(function() {
					var errorMessage = $(this).find('.form-input').attr('data-error-message');

					if($(this).find('.form-input:invalid').length > 0) {
						console.log('poszlo');
						$(this).find('.form-error').text(errorMessage);
					} else {
						$(this).find('.form-error').html('');
					}
				});

				return false;
		    }
		})
	}
}

bootstrap.mobileMenu();
bootstrap.mobileClose();
bootstrap.stickyMenu();
bootstrap.backToTop();
bootstrap.navigationMenu($('span[data-link]'));
bootstrap.popupFunc();
bootstrap.formValidation();
