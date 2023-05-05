// JavaScript for navigation bar 

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 650) {
          $("#navbar").css("background" , "#FDE9FF");       // Change color of navbar after scrolling
        }
  
        else{
            $("#navbar").css("background" , "");  	
        }
    })
  })