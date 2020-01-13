(function () {
   'use strict';
   // Task 1
   console.log('----- Task 1 -----');
   for (let i = 1; i <= 100; i++) {
      if (i % 5 === 0 && i % 3 === 0) {
         console.log('FizzBuzz');
      } else if (i % 3 === 0) {
         console.log('Fizz');
      } else if (i % 5 === 0) {
         console.log('Buzz!!!');
      } else {
         console.log(i);
      }
   }

   // Task 2. Palindrome
   console.log('----- Task 2 -----');
   function palindromeChecker (val) {
      const _val = typeof val;
      if (_val !== 'number' && _val !== 'string') {
         console.log('The value isn\'t a string or a number');
         return;
      } else if (!val) {
         console.log('Please, enter a valid value');
         return;
      }
      const arr = val.toString().toLowerCase().split('');
      for (let n = 1; n <= Math.floor(arr.length / 2); n++) {
         if (arr[n - 1] !== arr[arr.length - n]) {
            console.log(`${val} is not a palindrome`);
            return;
         }
      }
      console.log(`${val} is a palindrome`);
   }

   palindromeChecker();
   palindromeChecker(null);
   palindromeChecker([1, 2, 1]);
   palindromeChecker('Aa');
   palindromeChecker(1);
})();
