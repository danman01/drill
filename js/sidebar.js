$(function(){
  watchDocTocClicks();
})

function watchDocTocClicks() {
  $('li[class^=toctree]')
  .filter(function(){ 
    return $(this).next('ul').length > 0;
  })
  .on("click", function(){
    make_current(this);
    $.each( $(this).next("ul"), function(i){
      $(this).toggle("slide");
    })
  })
}

function make_current(that) {
  $(".current").removeClass("current");
  var l1 = $(that).parents(".toctree-l1").addClass("current");
  $(that).addClass("current");
}


