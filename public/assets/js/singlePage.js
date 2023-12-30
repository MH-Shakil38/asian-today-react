$(document).ready(function(){
    // Listen for click events on tab links
    $('.tab-link').on('click', function (e) {
      // Prevent default link behavior
      e.preventDefault();
      
      // Get the href attribute of the clicked tab
      var tabId = $(this).attr('href');
      
      // Show the corresponding tab content
      $('.tab-content').children().removeClass('show active');
      $(tabId).addClass('show active');
      
      // Your custom logic here to select the desired div based on the tabId
      if (tabId === '#content1') {
        $('#customDiv').text('You selected Tab 1!');
      } else if (tabId === '#content2') {
        $('#customDiv').text('You selected Tab 2!');
      }
    });
  });