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
    var home_color = 'rgb(30, 144, 255)';
    var home_bg = 'linear-gradient(0deg, rgba(22, 22, 22, 0.4),  rgba(22, 22, 22, 0.4)), linear-gradient(0deg, rgba(30, 144, 255, 0.6),  rgba(30, 144, 255, 0.6)), url("css/BlurBackground.gif")';
    var about_color = 'rgb(24, 125, 233)';
    var about_bg = 'linear-gradient(0deg, rgba(22, 22, 22, 0.4),  rgba(22, 22, 22, 0.4)), linear-gradient(0deg, rgba(24, 125, 233, 0.6),  rgba(24, 125, 233, 0.6)), url("css/BlurBackground.gif")';
    var work_color = 'rgb(18, 106, 210)';
    var work_bg = 'linear-gradient(0deg, rgba(22, 22, 22, 0.4),  rgba(22, 22, 22, 0.4)), linear-gradient(0deg, rgba(18, 106, 210, 0.6),  rgba(18, 106, 210, 0.6)), url("css/BlurBackground.gif")';
    var resume_color = 'rgb(12, 86, 188)';
    var resume_bg = 'linear-gradient(0deg, rgba(22, 22, 22, 0.4),  rgba(22, 22, 22, 0.4)), linear-gradient(0deg, rgba(12, 86, 188, 0.6),  rgba(12, 86, 188, 0.6)), url("css/BlurBackground.gif")';
    var contact_color = 'rgb(6, 67, 165)';
    var contact_bg = 'linear-gradient(0deg, rgba(22, 22, 22, 0.4),  rgba(22, 22, 22, 0.4)), linear-gradient(0deg, rgba(6, 67, 165, 0.6),  rgba(6, 67, 165, 0.6)), url("css/BlurBackground.gif")';
    
    $("#square").css('background-color', home_color);
    $("#top, #bottom, #left, #right").css('background-image', home_bg);
    $(window).scroll(function(){
        if ($('li.nav-home').hasClass('active')) {
            $("#square").css('background-color', home_color);
            $("#top, #bottom, #left, #right").css('background-image', home_bg);
        }
        if($('li.nav-about').hasClass('active')) {
            $("#square").css('background-color', about_color);
            $("#top, #bottom, #left, #right").css('background-image', about_bg);
        }
        else if($('li.nav-work').hasClass('active')) {
            $("#square").css('background-color', work_color);
            $("#top, #bottom, #left, #right").css('background-image', work_bg);
        }
        else if($('li.nav-resume').hasClass('active')) {
            $("#square").css('background-color', resume_color);
            $("#top, #bottom, #left, #right").css('background-image', resume_bg);
        }
        else if($('li.nav-contact').hasClass('active')) {
            $("#square").css('background-color', contact_color);
            $("#top, #bottom, #left, #right").css('background-image', contact_bg);
        }
    });
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 200, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});