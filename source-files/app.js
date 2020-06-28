$(document).ready(function(){       
    var scroll_pos = 0;
    $("#square").css('background-color', '#EE7639');
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if(scroll_pos >= 900 && scroll_pos < 1900) {
            $("#square").css('background-color', '#AD396B');
        }
        else if(scroll_pos >= 1900 && scroll_pos < 2800) {
            $("#square").css('background-color', '#B239EE');
        } 
        else if(scroll_pos >= 2800 && scroll_pos < 3700) {
            $("#square").css('background-color', '#39EEA2');
        } 
        else if(scroll_pos >= 3700) {
            $("#square").css('background-color', '#39AFEE');
        } 
        else {
            $("#square").css('background-color', '#EE7639');
        }
    });
});

// Cache selectors
var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight()+100,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
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
