// Cache selectors
var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight()+15,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });


// Bind to scroll
$(window).scroll(function(){
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }
   
});

// Square Color Change Bind Based on Active Class
$(document).ready(function() {
    var home_color = 'linear-gradient(270deg, #4aa6ff, #1e90ff)';
    var about_color = 'linear-gradient(270deg, #388de8, #187de9)';
    var work_color = 'linear-gradient(270deg, #3178cc, #126ad2)';
    var resume_color = 'linear-gradient(270deg, #2562b8, #0c56bc)';
    var contact_color = 'linear-gradient(270deg, #1c4e9e, #0643a5)';

    $("#square").css('background', home_color);
    $("#square").css('background-size', '400% 400%');
        $("#square").css('-webkit-animation', 'AnimationName 12s ease infinite')
        $("#square").css('-moz-animation', 'AnimationName 12s ease infinite')
        $("#square").css('-o-animation', 'AnimationName 12s ease infinite')
        $("#square").css('animation', 'AnimationName 12s ease infinite')
    $(window).scroll(function(){
        if ($('li.nav-home').hasClass('active')) {
          $("#square").css('background', home_color);
        }
        if($('li.nav-about').hasClass('active')) {
          $("#square").css('background', about_color);
        }
        else if($('li.nav-work').hasClass('active')) {
          $("#square").css('background', work_color);
        }
        else if($('li.nav-resume').hasClass('active')) {
          $("#square").css('background', resume_color);
        }
        else if($('li.nav-contact').hasClass('active')) {
          $("#square").css('background', contact_color);
        }
        $("#square").css('background-size', '400% 400%');
        $("#square").css('-webkit-animation', 'AnimationName 15s ease infinite')
        $("#square").css('-moz-animation', 'AnimationName 15s ease infinite')
        $("#square").css('-o-animation', 'AnimationName 15s ease infinite')
        $("#square").css('animation', 'AnimationName 15s ease infinite')
    });
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 200, function(){

        window.location.hash = hash;
      });
    }
  });
});