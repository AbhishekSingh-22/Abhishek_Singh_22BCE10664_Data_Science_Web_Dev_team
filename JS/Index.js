$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 650) {
          $("#navbar").css("background" , "#FDE9FF");
        }
  
        else{
            $("#navbar").css("background" , "");  	
        }
    })
  })