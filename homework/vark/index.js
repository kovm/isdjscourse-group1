var randomNumberTo50 = 1 + Math.floor(Math.random() * (50 + 1 - 1));
var programNumber = randomNumberTo50;
var promptToPlay = "Попробуй отгадать число от 1 до 50 "; 
var userInput = prompt(promptToPlay);
var userGuess = parseInt(userInput, 10);
var previosGuess;
var maxAttempts = 10;
var currentAttepmtIndex;
for (currentAttepmtIndex = 1; currentAttepmtIndex <= maxAttempts; currentAttepmtIndex += 1) {
	//if (isNaN(userGuess)) {
	//	alert("Only numbers");
	//} else {
	/*if(previosGuess === 0) {
		previosGuess = userGuess;
		userGuess = prompt('Enter the number');

	} else*/
	if (userGuess == programNumber) {
		alert('You win! with ' + currentAttepmtIndex + 'attempt(s)');
		break;

	} else if (Math.abs(programNumber - userGuess) < Math.abs(programNumber - previosGuess)) {
		previosGuess = userGuess;
		userGuess = prompt('Hoter');

	} else {
		previosGuess = userGuess;
		userGuess = prompt('Colder');
	}
	//}
	if (currentAttepmtIndex === maxAttempts - 1) {
		alert('you lose');
	}
}