var myFirebaseRef = new Firebase("https://alstraintimes.firebaseio.com/");


var currentTrainName = null
var currentDestination = null
var currentTrainTime = null
var currentFrequency =null



$("#submit").on('click', function(){

	  currentTrainName = $("#train_name").val();
	console.log(currentTrainName);

});
