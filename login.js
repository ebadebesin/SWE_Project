// function startApp() {
//   gapi.load('auth2', function() {
//       gapi.auth2.init({
//           client_id: '993484742540-g568052f5eqvm3t1f4u2frs4ueltgidq.apps.googleusercontent.com'
//       }).then(function(auth2) {
//           const googleSignInBtn = document.getElementById('googleSignInBtn');
//           const googleSignOutBtn = document.getElementById('googleSignOutBtn');
          
//           googleSignInBtn.addEventListener('click', function() {
//               auth2.signIn().then(function(googleUser) {
//                   console.log('Signed in as: ' + googleUser.getBasicProfile().getName());
//                   googleSignInBtn.style.display = 'none';
//                   googleSignOutBtn.style.display = 'block';
//               }).catch(function(error) {
//                   console.log('Error signing in:', error);
//               });
//           });

//           googleSignOutBtn.addEventListener('click', function() {
//               auth2.signOut().then(function() {
//                   console.log('Signed out.');
//                   googleSignInBtn.style.display = 'block';
//                   googleSignOutBtn.style.display = 'none';
//               }).catch(function(error) {
//                   console.log('Error signing out:', error);
//               });
//           });
//       });
//   });
// }

// window.addEventListener('load', startApp);



// function initClient() {
//     gapi.load('auth2', function() {
//     gapi.auth2.init({
//       client_id: '993484742540-g568052f5eqvm3t1f4u2frs4ueltgidq.apps.googleusercontent.com',  // client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com', // Replace with your own client ID
//       cookiepolicy: 'single_host_origin',
//       scope: 'profile email'
//     }).then(function() {
//         renderButton();
//       });
//     });
//   }
  
//   function renderButton() {
//     gapi.signin2.render('g-signin', {
//       'scope': 'profile email',
//       'width': 200,
//       'height': 40,
//       'longtitle': true,
//       'theme': 'dark',
//       'onsuccess': onSignIn,
//       'onfailure': onFailure
//     });
//   }
  

//   function onSignIn(googleUser) {
//     // Get user's Google profile information
//     var profile = googleUser.getBasicProfile();
//     console.log('Name: ' + profile.getName());
//     console.log('Email: ' + profile.getEmail());
  
//     // Add code here to handle the signed-in user, e.g., display their information, load restricted content, etc.
//   }
//   // function onSignIn(googleUser) {
//   //   var auth = googleUser.getAuthResponse();
//   //   getUserEmail(auth);
//   //   getUserName(auth);
//   // }

//   function onFailure(error) {
//     console.log(error);
//   }
//   // window.addEventListener('load', startApp);
  
//   // Load the Google API client and initialize the sign-in functionality
//   initClient();
//   onSignIn()
// window.addEventListener('load', onSignIn);

function initGoogleAuth() {
  // gapi.client
  //       .init({
  //         clientId:'993484742540-g568052f5eqvm3t1f4u2frs4ueltgidq.apps.googleusercontent.com',
  //         scope: "email",
  //         plugin_name:'App Name that you used in google developer console API'
  //       })
  gapi.load('auth2', function() {
    gapi.auth2.init({
      client_id: '993484742540-g568052f5eqvm3t1f4u2frs4ueltgidq.apps.googleusercontent.com',
      cookiepolicy: 'single_host_origin'
    });
  });
}

initGoogleAuth();

function onSignIn(googleUser) {
  // Get the user's ID token and other profile information.
  var id_token = googleUser.getAuthResponse().id_token;
  var profile = googleUser.getBasicProfile();
  var name = profile.getName();
  var email = profile.getEmail();
  var imageUrl = profile.getImageUrl();
  console.log(profile.email);
  console.log(id_token);

  // TODO: Send the ID token to your server for validation and to create a user session.
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}
