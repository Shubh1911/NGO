document.addEventListener('DOMContentLoaded', function() {
    // Get button and navigation list elements
    const toggleBtn = document.getElementById('toggleBtn');
    const List = document.querySelector('.nav__list');
  
    // Toggle the display of the navigation list on button click using mousedown event
    toggleBtn.addEventListener('mousedown', function(event) {
      // Prevent default action on touch devices
      event.preventDefault();
  
      if (List.style.display === 'none') {
        List.style.display = 'block';
      } else {
        List.style.display = 'none';
      }
    }, { passive: true });
  });
  