$(function() {

  console.log("test");
  var handle = $( "#custom-handle" );
  var handleb = $( "#custom-handleb" );

  $("#slider").slider({
      range: true,
      step: 5,
      values: [2 , 50],
      min: 2,
      max: 100,
      animate: "fast",
      classes: {
        "ui-slider" : "highlight"
      },
      create: function() {
        handle.text( '$' + $( this ).slider( "values" , 0) );
        handleb.text( '$' + $( this ).slider( "values" , 1 ) );
        },
      slide: function( event, ui ) {
          handle.text( '$' + ui.values[0] );
          handleb.text( '$' + ui.values[1] );
        }
    });

  $(".filter-easy").click(function(){
      $(".item").not(".easy-item").css("display", "none");
      $(".item").filter(".easy-item").css("display", "flex");
      $(".item").filter(".easy-item").slice(0, 13).show();
      $(".item").filter(".easy-item").slice(12).css("display" , "none");
      $(".easy-header").css("display" , "block");
      $(".brush-header").not(".easy-header").css("display", "none");
      $(".easy-top-container").css("display" , "flex");
  });

  $(".item").hover(function() {
    $(this).children(".item-overlay").css("opacity", "1");
  }, function() {
    $(this).children(".item-overlay").css("opacity", "0");
  });

  $(".item-overlay").click(function() {
    window.location.assign("./product-page.html");
  });

  $(".easy-icon-container").click(function() {
    $(this).find(".icon-inactive").css("display", "none");
    $(this).find(".icon-active").css("display", "block");
    $(this).unbind("mouseenter mouseleave");
    $(this).find(".easy-icon-text").css("font-weight", "600");
    if ($(this).hasClass("sun-icon")) {
      console.log("true");
      $(".easy-item").not(".sun-active").css("display" , "none");
      $(".sun-active").css("display" , "flex");
      $(".easy-item").slice(13).css("display" , "none");
    } else {
      console.log("false");
    }
    if ($(this).hasClass("soil-icon")) {
      console.log("true");
      $(".easy-item").not(".soil-active").css("display" , "none");
      $(".soil-active").css("display" , "flex");
      $(".easy-item").slice(13).css("display" , "none");
    } else {
      console.log("false");
    }
    if ($(this).hasClass("water-icon")) {
      console.log("true");
      $(".easy-item").not(".water-active").css("display" , "none");
      $(".water-active").css("display" , "flex");
    } else {
      console.log("false");
    }
    if ($(this).hasClass("temp-icon")) {
      console.log("true");
      $(".easy-item").not(".temp-active").css("display" , "none");
      $(".temp-active").css("display" , "flex");
      $(".easy-item").slice(13).css("display" , "none");
    } else {
      console.log("false");
    }
  });

  $(".easy-icon-container").hover(function() {
    $(this).find(".icon-inactive").css("display", "none");
    $(this).find(".icon-active").css("display", "block");
  }, function() {
    $(this).find(".icon-active").css("display", "none");
    $(this).find(".icon-inactive").css("display", "block");
  });

});
