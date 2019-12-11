// Fizz Buzz task
for (let i = 1; i <= 100; i++) {
   if (i % 3 === 0 && i % 5 === 0) { console.log('FizzBuzz'); } else if (i % 5 === 0) { console.log('Buzz'); } else if (i % 3 === 0) { console.log('Fizz'); } else console.log(i);
};

// Palindrome task
const checkFunc = input => {
   if (typeof input === 'string' && input.length > 1) {
      const inpt = input.replace(/ /g, '');
      for (let i = 0; i < inpt.length; i++) {
         for (let j = inpt.length - 1; j >= 0; j--) {
            if (inpt[i] === inpt[j]) {
               return true;
            } else return false;
         }
      }
   } else if (typeof input === 'number') {
      const inpt = input.toString();
      for (let i = 0; i < inpt.length; i++) {
         for (let j = inpt.length - 1; j >= 0; j--) {
            if (inpt[i] === inpt[j] && inpt.length > 1) {
               return true;
            } else return false;
         }
      }
   } else return 'Please enter either a number or a string that contains not less than 2 characters.';
};
console.log(checkFunc(' taco cat'));
