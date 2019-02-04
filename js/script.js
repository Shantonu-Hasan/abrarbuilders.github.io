var isMobile = {
	    Android: function() {
	        return navigator.userAgent.match(/Android/i);
	    },
	    BlackBerry: function() {
	        return navigator.userAgent.match(/BlackBerry/i);
	    },
	    iOS: function() {
	        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	    },
	    Opera: function() {
	        return navigator.userAgent.match(/Opera Mini/i);
	    },
	    Windows: function() {
	        return navigator.userAgent.match(/IEMobile/i);
	    },
	    any: function() {
	        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	    }
	};
function aspect(){
	var src="";
	
	//alert($("#iimg").attr("src"));
	if($("#fimg").exists())src=$("#fimg").attr("src");
	else if($("#iimg").exists())src=$("#iimg").attr("src");
	else if($("#himg").exists())src=$("#himg").attr("src");
	else if($("#aimg").exists())src=$("#aimg").attr("src");
	else if($("#cimg").exists())src=$("#cimg").attr("src");
	else if($("#mimg").exists())src=$("#mimg").attr("src");
	
	var img = new Image();
	img.src=src;
	$(window).height();$(window).width();
	var newHeight=$(window).height();var newWidth=$(window).width();
	//document.write("<br/>new w : "+newWidth+" = new h : "+newHeight);
	//document.write("<br/>new exp : "+img.height+"/"+img.width);
	if($(window).width()>$(window).height()){
		newHeight=(img.height/img.width)*$(window).width();
		newWidth=$(window).width();
	}
	else{
		newWidth=(img.width/img.height*$(window).height());
		newHeight=$(window).height();
	}
	//document.write("<br/>window w : "+$(window).width()+" = window h : "+$(window).height());
	//document.write("<br/>new w : "+newWidth+" = new h : "+newHeight);
	//alert(newWidth);
	if($("#fimg").exists()){
		$("#fimg").attr("height",newHeight);$("#fimg").attr("width",newWidth);
	}
	else if($("#iimg").exists()){
		$("#iimg").attr("height",newHeight);$("#iimg").attr("width",newWidth);
	}
	else if($("#himg").exists()){
		$("#himg").attr("height",newHeight);$("#himg").attr("width",newWidth);
	}
	else if($("#aimg").exists()){
		$("#aimg").attr("height",newHeight);$("#aimg").attr("width",newWidth);
	}
	else if($("#cimg").exists()){
		$("#cimg").attr("height",newHeight);$("#cimg").attr("width",newWidth);
	}
	else if($("#mimg").exists()){
		$("#mimg").attr("height",newHeight);$("#mimg").attr("width",newWidth);
	}
}
function hello(){
	alert("hello");
}
(function($){
	$(document).ready(function(){
		jQuery.fn.exists = function(){return this.length>0;}
		//if(!window.location.href.match(/about/gi)){		
			$.ajax({url:"page_content/left_bar.html",
	        	success:function(result){
			  		$("#leftBar").html(result);
	    		}
	        });
		//}
		$(window).resize(function(){
			aspect();
		});
		//if($("#img").exists())alert("exist");
		if(isMobile.any() && $("#fimg").exists()){	$("#fimg").attr("src","images/featured_mob.jpg");}
		else if(isMobile.any() && $("#iimg").exists()){	$("#iimg").attr("src","images/models_mob.jpg");		}
		else if(isMobile.any() && $("#himg").exists()){	$("#himg").attr("src","images/heli1_mob.jpg");}
		else if(isMobile.any() && $("#aimg").exists()){	$("#aimg").attr("src","images/models_mob.jpg");}
		else if(isMobile.any() && $("#cimg").exists()){	$("#cimg").attr("src","images/heli2_mob.jpg");}
		else if(isMobile.any() && $("#mimg").exists()){	$("#mimg").attr("src","images/vend_mob.jpg");}
		else if(isMobile.any() && $("#jimg").exists()){	$("#jimg").attr("src","images/heli1_mob.jpg");}
		else{
			if($(window).width()<1135)
				$("body").css("width","1140px");
			else
				$("body").css("width",$(window).width());
		}
		
		$(".modelGroup").click(function(){
			/*$.ajax({url:"page_content/left_bar.html",
	        	success:function(result){
			  		//$("#leftBar").html(result);
	    		}
	        });*/
			//alert($(this).attr("href"));
			if($($(this).attr("href")).hasClass("hideModel")){	//expands list
				$(".showModel").removeClass("showModel").addClass("hideModel");
				//$(".modelGroup").css("color","black");$(this).css("color","white");
				$(".modelGroup").removeClass("active");$(this).addClass("active");
				$($(this).attr("href")).removeClass("hideModel showModel").addClass("showModel");
			}
			else if($($(this).attr("href")).hasClass("showModel")){	//collapses list
				//$(".modelGroup").css("color","black");
				$(this).removeClass("active");
				$($(this).attr("href")).removeClass("hideModel showModel").addClass("hideModel");
			}
			//$($(this).attr("href")).css("display","block");
		});

		//$("body").css("width","1140px");
		jQuery.fn.initFunctions = function() {
	        //alert("called");
	            $(".lightbox").colorbox({title: function(){
	                var img=null;;
	                var next=null;	//alert(next);
	                var qString=new Array();
	                var url="";
	                //alert($(this).attr('href'));
	                return '&nbsp;';
	            },
	            onClosed:function(){
		            //$(this).initFunctions();
	            	$(this).preventDefault();
				},
				onComplete:function(){
					$(this).initFunctions();//alert('onComplete: colorbox has displayed the loaded content');
				},
				inline:false
				});
	    };
	    $(this).initFunctions();		//mandatory
	});
})(jQuery);