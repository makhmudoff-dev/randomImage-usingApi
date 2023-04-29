$(document).ready(function () {
  // API access key
  const accessKey = '_UTg-Kvv-SmjULg0dHO1iRWWkxvVIfxn7e0-8OuPc3c';

  // Event listener for button click
  $('#get-image-button').on('click', function () {
    // Make request to Unsplash API
    $.get(
      `https://api.unsplash.com/photos/random?client_id=${accessKey}`,
      function (data) {
        // Set image source to returned URL
        $('#image').attr('src', data.urls.regular);
      }
    );
  });
});
