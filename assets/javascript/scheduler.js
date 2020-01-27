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

  let database = firebase.database();

  //get info from add train button

    $("#add-train").on("click", function(event){
        //prevent default btn behavior
        event.preventDefault();
        //console.log(this);
    
    //get add train values
    let trainName = $("#trainName").val();
    let destination =$("#destination").val(); 
    let firstTrain = $("#first-train-time").val();
    let frequency = $("#train-frequency").val();

    database.ref().push({
        trainName: trainName,
        destination : destination,
        firstTrain : firstTrain,
        frequency : frequency
    });
});
database.ref().on("child_added", function(childSnapshot){

    let newTrain = childSnapshot.val().trainName;
    let newLocation = childSnapshot.val().destination;
    let newFirstTrain = childSnapshot.val().firstTrain;
    let newFrequency = childSnapshot.val().frequency;


})

})