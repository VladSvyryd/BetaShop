$(window).ready(function(){
	popMenu();
	
	
	flipNav();
	
});
$(window).scroll(function(){
	
	var wScroll = $(this).scrollTop();
	
	if(wScroll > $(".menu").offset().top - ($(window).height() / 1.5)) {
		console.log("hi");
		
		$(".items figure").each(function(i){
		
		setTimeout(function(){
			
		
		$(".items figure").eq(i).addClass("isShowing");
			
		}, 150*(i+1));
		});
	}
	
	/*
	
	*/
		
});

function popMenu(){
	
	var  menuOff = true;
	   $(".menu_button").click(function(){
		   
	if(menuOff){
		$(".sector li").each(function(i){
			setTimeout(function(){
		$(".sector li").eq(i).removeClass("menuAnimeIn").addClass("menuAnimeOut");
				
		},150*(i*1));
		});
		menuOff = false;
			   console.log(menuOff);
	  }
	else if(!menuOff){
		//$(".menu_button").click(function(){
		   
		$(".sector li").each(function(i){
			setTimeout(function(){
		$(".sector li").eq(i).removeClass("menuAnimeOut").addClass("menuAnimeIn");
				
		},150*(i*1));
		});
		
	   //});
		menuOff = true;
		console.log(menuOff);
	}
	   });
		
	
}

function flipNav(){
	$("ul>.li").click(function(arg){
		$(arg.target.children[0]).slideToggle("slow");
		
	});
	
	/*
	$("ul .li").click(function(){
        $(".li").each(function(i){
			c
		});
    });*/

}




