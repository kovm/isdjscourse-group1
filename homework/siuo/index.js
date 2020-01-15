const count = 100;

for (let i = 1; i <= count; i++) {
   if (i % 5 === 0 && i % 3 === 0) {
      console.log('FizzBuzz');
   } else if (i % 5 === 0) {
      console.log('Buzz');
   } else if (i % 3 === 0) {
      console.log('Fizz');
   } else {
      console.log(i);
   }
}

function isPolindrome (str) {
   if (typeof str !== 'string' && typeof str !== 'number') {
      return console.log('Enter a number or a string more than 3 characters, please!');
   } else if (!/\w{3,}/.test(str)) {
      return console.log('Enter a number or a string more than 3 characters, please!');
   }
   const someStr = str.toString();
   let i = 0;
   let j = someStr.length - 1;
   for (let l = 0; l <= someStr.length / 2; l++) {
      if (someStr[i] !== someStr[j]) {
         return `${someStr} isn't a palindrome!`;
      }
      i++;
      j--;
   }
   return `${someStr} is a palindrome!`;
}

console.log(isPolindrome('1g '));
