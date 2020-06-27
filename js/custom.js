$(function(){
	//counter
	 $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
});

//count-down timer 
const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Dec 25, 2020 00:00:00').getTime(),
    x = setInterval(function() {    

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

     

    }, second)

//Back-top
	
	$('.back-top').click(function(){
	$('html, body').animate({scrollTop:0},1500);	
	});
	
	$(window).scroll(function(){
		var scrolling = $(this).scrollTop();
		if (scrolling >20){
			$('.back-top').fadeIn(500);
		}
		else{
			$('.back-top').fadeOut(500); 
		}
		
	});


	//light2
	$(window).scroll(function(){
		var scrolling = $(this).scrollTop();
		if (scrolling >200){
			$('.navbar').addClass('light2');
		}
		
		else{
			$('.navbar').removeClass('light2'); 
		}
		
		
//animation scroll js
    var html_body = $('html, body');
    $('.navbar-light .navbar-nav .nav-link').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
                return false;
            }
        }
    });
		 
		 //site music control js
    var sound = $("#jingle_bell")[0],
        pauseBtn = $(".sound_toggle_btn"),
        playing = false;
    pauseBtn.on('click',function(){
        $(this).children('span').toggleClass('icofont-ui-play icofont-ui-pause');
        if(playing == true){
            sound.play();
            playing = "false";
        }
        else{
            sound.pause();
            playing = true;
        }

    });

    // DEFAULT VOLUME
    sound.volume = '0.3';
    $('.slider-input').on('change',function(){
        var getValue = $(this).val()/10;
        sound.volume = getValue;
    });

    var $window = $(window),
        windowWidth = $window.width(),
        windowHeight =  $window.height();



		
			});
