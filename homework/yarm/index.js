// Palindrome

function palindrome (str) {
   if (typeof str === 'number' || typeof str === 'string') {
      str = str.toString().toLowerCase().replace(/\s/g, '');
   } else {
      return console.log('Error input, please to correct check your request enter in string format example "your word" or just enter a number');
   };

   const arr = str.split('');
   const arrLength = (arr.length % 2) ? ((arr.length - 1) / 2) : (arr.length / 2);
   let textShift = '';
   let textPop = '';

   for (let i = 0; i < arrLength; i++) {
      textShift += arr.shift();
      textPop += arr.pop();
   }
   return textShift === textPop;
}
palindrome('ANna KA NNa');

// FizzBuzz

for (let i = 1; i <= 100; i++) {
   if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
   } else if (i % 3 === 0) {
      console.log('Fizz');
   } else if (i % 5 === 0) {
      console.log('Buzz');
   } else {
      console.log(i);
   }
}
