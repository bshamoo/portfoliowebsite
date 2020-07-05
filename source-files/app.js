// Cache selectors
var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });


// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }
   
});

// Square Color Change Bind Based on Active Class
$(document).ready(function() {
    $("#square").css('background-color', '#39AFEE');
    $("#top, #bottom, #left, #right").css('background-image', 'linear-gradient(0deg, rgba(22, 22, 22, 0.4),  rgba(22, 22, 22, 0.4)), linear-gradient(0deg, rgba(57, 175, 238, 0.6),  rgba(57, 175, 238, 0.6)), url("css/BlurBackground.gif")');
    $(window).scroll(function(){
        if ($('li.nav-home').hasClass('active')) {
            $("#square").css('background-color', '#39AFEE');
            $("#top, #bottom, #left, #right").css('background-image', 'linear-gradient(0deg, rgba(22, 22, 22, 0.4),  rgba(22, 22, 22, 0.4)), linear-gradient(0deg, rgba(57, 175, 238, 0.6),  rgba(57, 175, 238, 0.6)), url("css/BlurBackground.gif")');
        }
        if($('li.nav-about').hasClass('active')) {
            $("#square").css('background-color', '#AD396B');
            $("#top, #bottom, #left, #right").css('background-image', 'linear-gradient(0deg, rgba(22, 22, 22, 0.4),  rgba(22, 22, 22, 0.4)), linear-gradient(0deg, rgba(173, 57, 107, 0.6),  rgba(173, 57, 107, 0.6)), url("css/BlurBackground.gif")');
        }
        else if($('li.nav-work').hasClass('active')) {
            $("#square").css('background-color', '#B239EE');
            $("#top, #bottom, #left, #right").css('background-image', 'linear-gradient(0deg, rgba(22, 22, 22, 0.4),  rgba(22, 22, 22, 0.4)), linear-gradient(0deg, rgba(178, 57, 238, 0.6),  rgba(178, 57, 238, 0.6)), url("css/BlurBackground.gif")');
        }
        else if($('li.nav-resume').hasClass('active')) {
            $("#square").css('background-color', '#53e0b1');
            $("#top, #bottom, #left, #right").css('background-image', 'linear-gradient(0deg, rgba(22, 22, 22, 0.4),  rgba(22, 22, 22, 0.4)), linear-gradient(0deg, rgba(83, 224, 177, 0.6),  rgba(83, 224, 177, 0.6)), url("css/BlurBackground.gif")');
        }
        else if($('li.nav-contact').hasClass('active')) {
            $("#square").css('background-color', '#EE7639');
            $("#top, #bottom, #left, #right").css('background-image', 'linear-gradient(0deg, rgba(22, 22, 22, 0.4),  rgba(22, 22, 22, 0.4)), linear-gradient(0deg, rgba(238, 118, 57, 0.6),  rgba(238, 118, 57, 0.6)), url("css/BlurBackground.gif")');
        }
    });
});