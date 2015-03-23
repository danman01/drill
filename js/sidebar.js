$(function(){
  watchDocTocClicks();
})

function watchDocTocClicks() {
 $('li.toctree-l1').on('click', function(){
    make_current(this);
  })

  $('li[class^=toctree]')
  .filter(function(){ 
    return $(this).next('ul').length > 0;
  })
  .on("click", function(){
    $.each( $(this).next("ul"), function(i){
      $(this).toggle("slide");
    })
  })
}

function make_current(that) {
  remove_current();
  $(that).addClass("current");
  $(that).next('ul').addClass("current");
}

function remove_current() {
  $(".current").removeClass("current");
}


