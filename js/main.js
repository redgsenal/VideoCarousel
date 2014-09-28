$(function(){
	$('a.play-video-btn').click(function(){
		console.log('play');
		$this = $(this);
		var videoUrl = $this.data('video-url');
		var videoRatio = $this.data('video-ratio');
		
		console.log('url: ' + videoUrl);
		console.log('ratio: ' + videoRatio);
		
		var videoWrapper = $this.parent().find('.carousel-video-wrapper');
		console.log(videoWrapper);
		videoWrapper.fadeIn(function(){
			videoWrapper.animate({height: '500px'},'400','swing',function(){
				// do video here
				console.log('video play');
				var videoContent = videoWrapper.find('.carousel-video');
				var videoSource = $("<iframe width='500' height='500' src='http://www.youtube.com/embed/Jk0jDCGBvZ8'></iframe>");
				
				videoContent.append(videoSource);
				videoContent.show();
			});
		});
		
		//show the hidden video container and animate expand
		
	});
	
	$('a.video-wrapper-close').click(function(){
		console.log('close');
		$this = $(this);
		var videoWrapper = $this.parent('.carousel-video-wrapper');
		// close video
		// animate: revert height
		var videoContent = videoWrapper.find('.carousel-video');
		videoContent.fadeOut().empty()
		videoWrapper.animate({height: '300px'},'400','swing',function(){
			videoWrapper.fadeOut();
		});
	});
});
