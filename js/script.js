$(document).ready(function() {
  // Function to calculate the position of the second section
  function secondSectionPosition() {
    return $('.services').offset().top;
  }

  $(window).scroll(function() {
    if ($(this).scrollTop() > secondSectionPosition()) {
      $('.contact-button').fadeIn();
    } else {
      $('.contact-button').fadeOut();
      $('.contact-form').fadeOut();
    }
  });

  $('#contactBtn').click(function() {
    $('.contact-form').fadeToggle();
    $('#contactBtn').fadeOut();
  });
  $('#contactForm').submit(function(e) {
    e.preventDefault();
    $('#contactForm')[0].reset();
    $('#contactForm').fadeOut(function() {
      $('.thank-you-message').fadeIn();
    });
  });
  // Close button functionality
  $('.contact-form .close-btn').click(function() {
    $('.contact-form').fadeOut();
    $('#contactBtn').fadeToggle();
  });
});
