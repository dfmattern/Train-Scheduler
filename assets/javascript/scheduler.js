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
    let trainName = $("#trainName").val().trim();
    let destination =$("#destination").val().trim(); 
    let firstTrain = $("#first-train-time").val().trim();
    let frequency = $("#train-frequency").val().trim();

    //push to database
    database.ref().push({
        trainName: trainName,
        destination : destination,
        firstTrain : firstTrain,
        frequency : frequency
    });
    alert("Train add Successful!")
});


database.ref().on("child_added", function(childSnapshot){

    let newTrain = childSnapshot.val().trainName;
    let newLocation = childSnapshot.val().destination;
    let newFirstTrain = childSnapshot.val().firstTrain;
    let newFrequency = childSnapshot.val().frequency;

    let startTimeConvert = moment(newFirstTrain, "hh:mm").subtract(1, "years");
    //console.log(startTimeConvert);

    //current time
    let currentTime = moment();
    //console.log(currentTime);

    //difference between current and first time
    let timeDifference = moment().diff(moment(startTimeConvert), "minutes");
    //console.log(timeDifference);

    //time apart remainder
    let remainder = timeDifference % newFrequency;
    //console.log(remainder);

    //minutes until next train
    let arrivalMinutes = newFrequency-remainder;

    //next arrival
    let nextTrain = moment().add(arrivalMinutes, "minutes");
    let nextTrainTime = moment(nextTrain).format("hh:mm");
    console.log(nextTrainTime);

    //apend new info to table
    $("#table-body").append(
        '<tr><td>' + newTrain +
        '</td><td>'+ newLocation +
        '</td><td>'+ newFrequency +
        '</td><td>'+ nextTrainTime +
        '</td><td>'+ arrivalMinutes + '</td></tr>');

    //clear inputs
    $("#trainName").val("");
    $("#destination").val("");
    $("#first-train-time").val("");
    $("#train-frequency").val("");
    return false;

    //error handler
    function errors (errorObject){
        console.log("Errors handled: " + errorObject.code);
        
    }



    
    

    
    


    


    




})

})