(function($, document, window){
	
	$(document).ready(function(){

		// Cloning main navigation for mobile menu
		$(".mobile-navigation").append($(".main-navigation .menu").clone());

		// Mobile menu toggle 
		$(".menu-toggle").click(function(){
			$(".mobile-navigation").slideToggle();
		});

		// hero-slider
		$(".hero-slider").flexslider({
			controlNav: false,
			directionNav: true,
			animation: "fade",
			prevText:'<i class="fa fa-angle-left"></i>',
			nextText:'<i class="fa fa-angle-right"></i>',
		});

		$(".testimonial-slider").flexslider({
			controlNav: true,
			directionNav: false,
			animation: "slide"
		});});

	$(window).load(function(){
		var $container = $('.filterable-items');

	    $container.isotope({
	        filter: '*',
	        layoutMode: 'fitRows',
	        animationOptions: {
	            duration: 750,
	            easing: 'linear',
	            queue: false
	        }
	    });

	    $('.filterable-nav a').click(function(e){
	    	e.preventDefault();
	        $('.filterable-nav .current').removeClass('current');
	        $(this).addClass('current');

	        var selector = $(this).attr('data-filter');
	        $container.isotope({
	            filter: selector,
	            animationOptions: {
	                duration: 750,
	                easing: 'linear',
	                queue: false
	            }
	         });
	         return false;
	    });
	    $('.mobile-filter').change(function(){

	        var selector = $(this).val();
	        $container.isotope({
	            filter: selector,
	            animationOptions: {
	                duration: 750,
	                easing: 'linear',
	                queue: false
	            }
	         });
	         return false;
	    });
	});


	document.addEventListener('DOMContentLoaded', function() {
		var thumbnails = document.querySelectorAll('.thumbnail');
		var largePhoto = document.getElementById('large-photo');
		var previousThumbnail = null;
		var previousLargeSrc = largePhoto.getAttribute('src');

		thumbnails.forEach(function(thumbnail) {
			thumbnail.addEventListener('click', function() {
				var newLargeSrc = this.getAttribute('data-large');
				var newSmallSrc = this.getAttribute('data-small');

				if (previousThumbnail) {
					// Update the previously clicked thumbnail with the previous large image
					previousThumbnail.setAttribute('src', previousLargeSrc);
					previousThumbnail.classList.remove('active');
				}

				// Update the large photo with the new large image
				largePhoto.setAttribute('src', newLargeSrc);

				// Update the clicked thumbnail to show the previous large photo
				this.setAttribute('src', previousLargeSrc);
				this.classList.add('active');

				// Update previous state for the next interaction
				previousThumbnail = this;
				previousLargeSrc = newLargeSrc;
			});
		});
	});

})(jQuery, document, window);