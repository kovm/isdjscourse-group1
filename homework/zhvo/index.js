// Fizz Buzz task
for (let i = 1; i <= 100; i++) {
   if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
   } else if (i % 5 === 0) {
      console.log('Buzz');
   } else if (i % 3 === 0) {
      console.log('Fizz');
   } else {
      console.log(i);
   }
};

// Palindrome task

// Func 1. modifies the input, 2. calls check function 'checkFunc' or returns an error
const isPalind = input => {
   if (typeof input === 'string' && input.length > 1) {
      const inpt = input.replace(/\s/g, '');
      return checkFunc(inpt);
   } else if (typeof input === 'number') {
      const inpt = input.toString();
      return checkFunc(inpt);
   } else {
      return 'Error! Please enter either a number or a string that contains not less than 2 characters.';
   }
};

// Func checks if input is a palindrome
const checkFunc = data => {
   for (let i = 0; i < data.length; i++) {
      for (let j = data.length - 1; j >= 0; j--) {
         if (data[i] === data[j]) {
            return true;
         } else {
            return false;
         }
      }
   }
};
console.log(isPalind(' taco cat'));
