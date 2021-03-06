$(document).ready(function() {
  $('.hamburger').on('click', function() {
    $('.hamburger').toggleClass('arrow');
  });

  var testimonials = $('#testimonials-carousel');
  testimonials.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
    dots: true
  });

  var instaowl = $('#insta');
  instaowl.owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    items: 4,
    dots: true,
    responsiveClass: true,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 2
      },
      // breakpoint from 480 up
      500: {
        items: 2,
        nav: false
      },
      // breakpoint from 768 up
      768: {
        items: 4
      }
    }
  });

  $('#testimonials-prev > a').click(function(e) {
    testimonials.trigger('prev.owl.carousel');
    e.preventDefault();
  });

  $('#testimonials-next > a').click(function(e) {
    testimonials.trigger('next.owl.carousel');
    e.preventDefault();
  });

  $('#insta-prev > a').click(function(e) {
    instaowl.trigger('prev.owl.carousel');
    e.preventDefault();
  });

  $('#insta-next > a').click(function(e) {
    instaowl.trigger('next.owl.carousel');
    e.preventDefault();
  });
});

// $(function() {
//   $('.jcarousel').jcarousel({
//     // Configuration goes here
//   });
// });
//
// $(function() {
//   $('.jcarousel').jcarousel({
//     // Core configuration goes here
//   });
//
//   $('.jcarousel-prev').jcarouselControl({
//     target: '-=1'
//   });
//
//   $('.jcarousel-next').jcarouselControl({
//     target: '+=1'
//   });
// });

// Get carousel elements

// var tLeftButton = $('#testimonials-prev');
// var tRightButton = $('#testimonials-next');
//
// // Get number of <li> elements in carousel
//
// var tItemCount = document
//   .getElementById('testimonials-ul')
//   .querySelectorAll('li').length;
//
// // Set length based on that
//
// var tWidth = tItemCount * 100 + 'vw';
// $('.testimonials ul').css('width', tWidth);
//
// // Button functionality
//
// var tPosition = 0;
// console.log(tPosition);
//
// tRightButton.click(function() {
//   if (tPosition < tItemCount - 1) {
//     tPosition++;
//     var m = '-' + 100 * tPosition + 'vw';
//     $('.testimonials ul').animate(
//       {
//         left: m
//       },
//       500
//     );
//     greyButton();
//   }
// });
//
// tLeftButton.click(function() {
//   if (tPosition > 0) {
//     tPosition--;
//     var m = '-' + 100 * tPosition + 'vw';
//     $('.testimonials ul').animate(
//       {
//         left: m
//       },
//       500
//     );
//     greyButton();
//   }
// });
//
// // Grey out buttons if not useable
//
// var greyButton = function() {
//   if (tPosition == 0) {
//     tLeftButton.css('opacity', '1');
//     tLeftButton.css('cursor', 'default');
//   } else if (tPosition == tItemCount - 1) {
//     tRightButton.css('opacity', '1');
//     tRightButton.css('cursor', 'default');
//   } else {
//     tRightButton.css('opacity', '1');
//     tRightButton.css('cursor', 'pointer');
//     tLeftButton.css('opacity', '1');
//     tLeftButton.css('cursor', 'pointer');
//   }
// };
//
// greyButton();
//
// // And finally, if there's only one quote, kill the buttons altogether
//
// if (tItemCount == 1) {
//   $('.testimonials-control').css('display', 'none');
// }
