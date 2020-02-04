// The first task
function dividers () {
   for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
         console.log('FizzBuzz');
      } else if (i % 3 === 0) {
         console.log('Fizz');
      } else if (i % 5 === 0) {
         console.log('Buzz');
      }
   }
}

dividers();

/* The second, advanced task.
 The palindromeChecker function checks the type of an input,
 (it has to be string or number), divides an input into the two halves,
 reverts the second half and finally compares the two halves. */

 function palindromeChecker (input) {
   let inputFirstHalf, inputSecondHalf, inputMiddleIndex, secondHalfReverted;
   if (typeof (input) !== 'number' && typeof (input) !== 'string') {
       console.log('Please type number or string.');
       return false;
   }
   input = input.toString().toLowerCase().replace(/\s+/g, '');
   if (input.length <= 1) {
       console.log('Please type more symbols.');
       return false;
   }
   inputMiddleIndex = Math.floor(input.length / 2) + input.length % 2;;
   inputFirstHalf = input.slice(0, inputMiddleIndex);
   secondHalfReverted = input => {
       let secondHalf = '';
       for (let i = input.length - 1; i >= inputMiddleIndex - 1; i--) {
          secondHalf += input[i];
       }
       return secondHalf;
   };
   inputSecondHalf = secondHalfReverted(input);
   if (inputFirstHalf === inputSecondHalf) {
     console.log('It is a palindrome');
     return true;
  }
}

palindromeChecker(undefined);
palindromeChecker([2, 'dust']);
palindromeChecker('Xa  nax   ');
palindromeChecker(10501);
palindromeChecker('   ');
palindromeChecker(null);
palindromeChecker();
