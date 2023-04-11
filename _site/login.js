function initClient() {
    gapi.load('auth2', function() {
    gapi.auth2.init({
      client_id: '993484742540-l1ds0mvlm8pu62d54fa6q6878f2aprid.apps.googleusercontent.com',

    // client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com', // Replace with your own client ID
      cookiepolicy: 'single_host_origin',
      scope: 'profile email'
    }).then(function() {
        renderButton();
      });
    });
  }
  
  function renderButton() {
    gapi.signin2.render('g-signin', {
      'scope': 'profile email',
      'width': 200,
      'height': 40,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': onSignIn,
      'onfailure': onFailure
    });
  }
  
  function onSignIn(googleUser) {
    // Get user's Google profile information
    var profile = googleUser.getBasicProfile();
    console.log('Name: ' + profile.getName());
    console.log('Email: ' + profile.getEmail());
  
    // Add code here to handle the signed-in user, e.g., display their information, load restricted content, etc.
  }
  
  function onFailure(error) {
    console.log(error);
  }
  
  // Load the Google API client and initialize the sign-in functionality
  initClient();