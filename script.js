//Script for login.html, firebase

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDXZ9mhCHUrI_9IV00BXjEHLBYy8aJIE0Q",
    authDomain: "form-e83a0.firebaseapp.com",
    databaseURL: "https://form-e83a0.firebaseio.com",
    projectId: "form-e83a0",
    storageBucket: "form-e83a0.appspot.com",
    messagingSenderId: "863279997982",
    appId: "1:863279997982:web:52d57477e33294832a7a0f",
    measurementId: "G-7G19VF67T2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  function signUp()
  {
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    alert("Signed Up");
  }

  function signIn()
  {
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    alert("Signed In" + email.value);
  }
  function signOut()
  {
    auth.signOut();
    alert("Signed Out")
  }
  auth.onAuthStateChanged(function(user){
    if(user)
    {
      window.location="https://sahilvoona.github.io/HTCSHackathonUpNews/about.html";
      var email = user.email;
      alert("Active User"+ email.value)
    }else{
      alert("No Active User");
    }
  })
