/* SET RANDOM LOADER COLORS FOR DEMO PURPOSES */	


	
	
	$progress = $('.progress-bar');
	$percent = $('.percentage');
	
	/* CHANGE LOADER SKIN */
	$('.skin').click(function(){
		var whichColor = $(this).attr('id');
		setSkin(whichColor);
	});
	

	
	/* WHEN LOADED */
	$(window).load(function() {
		loaded = true;
	});
	
	/*** FUNCTIONS ***/
	
	/* LOADING */
	function preload(imgArray) {
		var increment = Math.floor(100 / imgArray.length);
		$(imgArray).each(function() {
			$('<img>').attr("src", this).load(function() {
				$progress.animate({
					width: "+=" + increment + "%"
				}, 100);
			});
		});
		calcPercent = setInterval(function() {
			
			//loop through the items
			$percent.text(Math.floor(($progress.width() / $('.loader').width()) * 100) + '%');
			
		});
	}
	
	function stripesAnimate() {
		animating();
		stripesAnim = setInterval(animating, 2500);
	}

	function animating() {
		$stripes.animate({
			marginLeft: "-=30px"
		}, 25000, "linear").append('');
	} 
	
	function setSkin(skin){
		$('.loader').attr('class', 'loader '+skin);
		$('span').hasClass('loaded') ? $('span').attr('class', 'loaded '+skin) : $('span').attr('class', skin);
	}

	