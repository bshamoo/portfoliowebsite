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
    var home_color = 'linear-gradient(270deg, #ff1e1e, #1e90ff)';
    var about_color = 'linear-gradient(270deg, #e91818, #187de9)';
    var work_color = 'linear-gradient(270deg, #d21212, #126ad2)';
    var resume_color = 'linear-gradient(270deg, #bc0c0c, #0c56bc)';
    var contact_color = 'linear-gradient(270deg, #a50606, #0643a5)';

    //var home_color = 'linear-gradient(270deg, #1effe4, #1e90ff)';
    //var about_color = 'linear-gradient(270deg, #18e9d0, #187de9)';
    //var work_color = 'linear-gradient(270deg, #12d2bb, #126ad2)';
    //var resume_color = 'linear-gradient(270deg, #0cbca7, #0c56bc)';
    //var contact_color = 'linear-gradient(270deg, #06a58b, #0643a5)';

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