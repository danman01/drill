// sidebar javascript
$(function(){

  $('li[class^=toctree]')
    .filter(function(){ 
      return $(this).next('ul').length > 0;
    })
      .on("click", function(){
        $(".sphinxsidebar ul").find(".current").removeClass("current");
        $(this).parents(".toctree-l1").addClass("current"); // or this addClass current
        $.each( $(this).next("ul"), function(i){
          $(this).toggle("slide");
        })
      })
})

