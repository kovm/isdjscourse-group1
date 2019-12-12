// 1
hw21();
function hw21 () {
   let n = 1;
   while (n <= 100) {
      if (n % 3 === 0 && n % 5 === 0) {
         console.log('FizzBuzz');
      } else if (n % 3 === 0 && n % 5 !== 0) {
         console.log('Fizz');
      } else if (n % 5 === 0 && n % 3 !== 0) {
         console.log('Buzz');
      } else {
         console.log(n);
      }
      n++;
   }
};

// 2
hw2();
function hw2 () {
   let a1 = [];
   a1 = prompt();
   if (a1.length > 0) {
      const a2 = [];
      for (let l = 0; l < a1.length; l++) {
         a2.push(a1[l]);
      }
      for (let i = 0; i < a1.length; i++) {
         if (a1[i] = a2[i]) {
            console.log('It is a palindrome');
         } else {
            console.log('It is not a palindrome');
         }
      }
   } else {
      console.log('Enter some value');
   }
};
