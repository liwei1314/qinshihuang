
 (function () { //导航条		
     var $ul = $("#proinfo"),
         $lis = $ul.find("li"); //父级

     $lis.hover(function () {
         $(this).find(".prosmore").removeClass('hide');
     }, function () {
         $(this).find(".prosmore").addClass('hide');

     });
    
 })();

 $(function () {
     bannerListFn( // 横幅图片左右移
         $(".banner"),
         $(".img-btn-list"),
         $(".left-btn"),
         $(".right-btn"),
         3000,
         true
     );

 });
 $(".index-teachersin").cslide(); //轮播
 




/*  $.getJSON('../json/index.json',function(data){
    console.log(45,data)
 
  
    
}); */