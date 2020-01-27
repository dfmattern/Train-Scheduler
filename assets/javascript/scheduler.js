$(document).ready(function(){
   // console.log("Ready!");

   //inititalize firebase
   let firebaseConfig = {
    apiKey: "AIzaSyB80ILQDhA7GAc5ALl4fPWKkoAZAySLAYQ",
    authDomain: "train-scheduler-98905.firebaseapp.com",
    databaseURL: "https://train-scheduler-98905.firebaseio.com",
    projectId: "train-scheduler-98905",
    storageBucket: "train-scheduler-98905.appspot.com",
    messagingSenderId: "582075434885",
    appId: "1:582075434885:web:b76e34d411e758dee0a6ec"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    
})