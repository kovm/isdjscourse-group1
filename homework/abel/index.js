// regular task

for (let i = 1; i <= 100; i++) {
   if ((i % 3 === 0) && (i % 5 === 0)) {
      console.log('FizzBuzz');
   } else if (i % 3 === 0) {
      console.log('Fizz');
   } else if (i % 5 === 0) {
      console.log('Buzz');
   } else {
      console.log(i);
   }
}

// -----------------------------------------------------

console.log('');

// -----------------------------------------------------

// advanced task
function isPalindrome (element) {
   if (typeof element === 'number') {
      element = element.toString();
   }

   if (typeof element !== 'string') {
      return 'Ошибка валидации';
   }

   element = element.toLowerCase();

   let result = '';

   for (let i = 0; i < element.length; i++) {
      if (element[i] === element[element.length - 1 - i]) {
         result = 'Сравниваемые строки являются палиндромами';
      } else {
         result = 'Сравниваемые строки не являются палиндромами';
         return result;
      }
   }
   return result;
}

const test1 = isPalindrome('потоп');
const test2 = isPalindrome(444);
const test3 = isPalindrome(1584);
const test4 = isPalindrome(null);
const test5 = isPalindrome(' Aa ');
const test6 = isPalindrome(undefined);
const test7 = isPalindrome({});
const test8 = isPalindrome([1, 2, 1]);

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);
console.log(test6);
console.log(test7);
console.log(test8);
