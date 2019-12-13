const counterFB = (function () {
   const a = 100;
   const dividers = {
      Fizz: 3,
      Buzz: 5
   };
   const logs = Object.keys(dividers);
   function counterLog () {
      for (let i = 1; i <= a; i++) {
         if (!(i % dividers.Fizz)) {
            if (!(i % dividers.Buzz)) {
               console.log(`${logs[0]}${logs[1]}`);
            } else {
               console.log(`${logs[0]}`);
            }
         } else {
            if (!(i % dividers.Buzz)) {
               console.log(`${logs[1]}`);
            } else {
               console.log(i);
            }
         }
      }
   }
   return { logging: counterLog };
})();
counterFB.logging();
function isPalindrome (test) {
   if (typeof (test) === 'number' || typeof (test) === 'string') {
      const regExp = /[^A-Za-zА-Яа-яЁёІіЇї0-9]/g;
      const newtest = test.toString().replace(regExp, '').toLowerCase();
      const testLoop = Math.floor(newtest.length / 2);
      for (let i = 1; i <= testLoop; i++) {
         if (newtest[i - 1] !== newtest[newtest.length - i]) {
            console.log(`${test} - isn't a palindrome`);
            break;
         } else {
            if (i === testLoop) {
               console.log(`${test} - is a palindrome`);
            }
         }
      }
   } else {
      console.log('Incorrect data');
   }
}
isPalindrome('Eva, can I see bees in a cave?');
