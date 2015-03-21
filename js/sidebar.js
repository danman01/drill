// sidebar javascript
$(function(){

  $('li[class^=toctree]')
    .filter(function(){ 
      return $(this).next('ul').length > 0;
    })
      .on("click", function(){
        $.each( $(this).next("ul"), function(i){
          $(this).toggle("slide");
        })
      })
})

