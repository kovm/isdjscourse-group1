// Fizz Buzz task
for(let i = 1; i <= 100; i++){
  if (i % 3 == 0 && i % 5 == 0)
	console.log('FizzBuzz');
  else if(i % 5 == 0)
	console.log('Buzz');
  else if(i % 3 == 0)
	console.log('Fizz');
  else console.log(i);
};


// Palindrome task
let checkFunc = input => {
let inpt = input.toString();
  for(let i = 0; i < inpt.length; i++) {
	for(let j = inpt.length - 1; j >= 0; j--) {
  	if (inpt[i] === inpt[j]) {
    	return true;
  	} else return false;
	}
  }
};

// check for Palindrome task
console.log(checkFunc('taco cat')); 	// true
console.log(checkFunc('waterfall')); 	// false
console.log(checkFunc(345543)); 	// true
console.log(checkFunc(692344)); 	// false
