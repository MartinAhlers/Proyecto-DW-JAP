$(document).ready(function(){
	var video = $('video')[0];
   $('video').bind('timeupdate', function(){
      var initime = Math.floor(video.currentTime);
      var endtime = Math.floor(video.duration);
      var porcentaje = initime/endtime*889;
      $('#initime').html(initime); 
      $('#endtime').html(endtime);	
      $('#progress').width(porcentaje);
    });
   $('#playlistvid li a').click(function(e){
         e.preventDefault();
         $('video')[0].src = this;
         video.play();
	  });
    $('#play').click(function(){
        video.play();    
		});
	$('#pause').click(function(){
        video.pause();    
		});
	$('#stop').click(function(){
        video.pause();
        video.currentTime = 0;
        });
	$('#forward').click(function(){
        video.currentTime = video.currentTime + 1.5;    
		});
	$('#back').click(function(){
        video.currentTime = video.currentTime - 1.5;    
		});
	$('#volcontrol').change(function(){
      video.volume = volcontrol.value/100;
	});
	$('#Fullscreen').click(function(){
      video.webkitRequestFullScreen();
       
	});
	
	var audio = $('audio')[0];
      $('audio').bind('timeupdate', function(){
      var initimeaudio = Math.floor(audio.currentTime);
      var endtimeaudio = Math.floor(audio.duration);
      var porcentajeaudio = initimeaudio/endtimeaudio*889;
        $('#progressaudio').width(porcentajeaudio);
      $('#initimeaudio').html(initimeaudio); 
      $('#endtimeaudio').html(endtimeaudio);	
     
    });
	  $('#playlist li a').click(function(e){
         e.preventDefault();
         $('audio')[0].src = this;
         audio.play();
         
	  });
    $('#playaudio').click(function(){
        audio.play();    
		});
	$('#pauseaudio').click(function(){
        audio.pause();    
		});
	$('#stopaudio').click(function(){
        audio.pause();
        audio.currentTime = 0;
        });
	$('#forwardaudio').click(function(){
        audio.currentTime = audio.currentTime + 1.5;    
		});
	$('#backaudio').click(function(){
        audio.currentTime = audio.currentTime - 1.5;    
		});
	$('#volcontrolaudio').change(function(){
      audio.volume = volcontrolaudio.value/100;
	});
	

});
 
