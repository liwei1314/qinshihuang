;(function($) {
    $.fn.extend({
        "cslide": function(config) {
			var u = $(this).children(".imgbox").find("ul");//需要切换内容的父级
         	var w= u.find("li");//需要切换内容
			var t= $(this).children(".titlebox").find("li");//需要切换内容的标题
			var first = w.eq(0).clone().css("left",w.length*100+"%");
			var last = w.eq(w.length-1).clone().css("left","-100%");
			u.append(first);
			u.prepend(last);
			w.each(function(){
				var n=$(this).index()-1;
				$(this).css("left",n*100+"%");
			  });
			var i=0;
			var s = w.length;
	/* 		console.log(15,s) */
			//配置相关变量
            config = config || {},
            automatic = config.automatic || false;
			time = config.time || 3000;
            
			$(this).children(".next").click(function(){
					u.stop(true,true);
					if(i-1>-s){
						i-=1;
						u.animate({left:i+'00%'});
					}else{
						i-=1;
						u.animate({left:i+'00%'});
						i=0;
						u.animate({left:i+'00%'},0);
					}
					
					t.eq(-i).addClass("cur").siblings(".cur").removeClass("cur");
				});
			$(this).children(".prev").click(function(){
					u.stop(true,true);
					if(i<0){
						i+=1;
						u.animate({left:i+'00%'});
					}else{
						i+=1;
						u.animate({left:i+'00%'});
						i=-s+1;
						u.animate({left:i+'00%'},0);
					}
					
					t.eq(-i).addClass("cur").siblings(".cur").removeClass("cur");
				});
			t.eq(-i).addClass("cur").siblings(".cur").removeClass("cur");
			t.mouseover(function(){
				u.stop(true,true);
				var l=$(this).index();
				i=-l;
				u.animate({left:i+'00%'});
				$(this).addClass("cur").siblings(".cur").removeClass("cur");
			});  
            var a=true;
			if($(this).children(".imgbox").find("div").hasClass("list")){pay=false};//列表自动切换，不需要自动切换false
			function clock(){
				if(a){
			  	if(i-1>-s){
						i-=1;
						u.animate({left:i+'00%'});
					}else{
						i-=1;
						u.animate({left:i+'00%'});
						i=0;
						u.animate({left:i+'00%'},0);
						
				}}
				
				t.eq(-i).addClass("cur").siblings(".cur").removeClass("cur");
				
		   }
		   if(automatic){var ctime = setInterval(clock,time);}
		   $(this).hover(function(){
				a=false;
				$(this).children(".prev,.next").show();
			},function(){
				a=true;
				$(this).children(".prev,.next").show();
			}
			);
		   
            return $(this); 
        },
		
		"mywarp": function(config) {
			//配置相关变量
            config = config || {},
            vn = config.vn || 4;
			var imgbox = $(this).children(".imgbox");
			$(this).children(".imgbox").wrapInner("<ul></ul>");
			var zs = $(this).find(".list").length/vn;
			var yu = $(this).find(".list").length%vn
			if(yu!==0){
				$(this).find(".list").slice(0, vn-yu).clone().appendTo(imgbox);
			}
			for(i=0;i<zs;i++){
				$(this).find(".list").slice(i*vn, (i+1)*vn).wrapAll('<li />');
				$(this).children('.titlebox').append('<li>'+ (i+1) +'</li>');
			}
			return $(this);
		}
		
		
    });
	
})(jQuery);
