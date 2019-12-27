function FizzBuzz () {
   const numbers = [];
   for (let n = 1; n <= 100; n++) {
      switch (0) {
      case (n % 3 || n % 5):
         numbers.push('FizzBuzz');
         break;
      case (n % 3):
         numbers.push('Fizz');
         break;
      case (n % 5):
         numbers.push('Buzz');
         break;
      default:
         numbers.push(n);
      }
   }
   console.log(numbers.join(', '));
}
FizzBuzz();

function isPolindrome (subject) {
   if (typeof subject !== 'number' && typeof subject !== 'string') {
      return false;
   }
   return subject.toString()
      .toLowerCase()
      .replace(/\s/g, '')
      .split('')
      .every((element, index, arr) => element === arr[arr.length - index - 1]);
}

const subject1 = 131;
const subject2 = 'потоп';
const subject3 = '12311';
const subject4 = '345543';
const subject5 = 'Аргентина манит негра';
console.log(isPolindrome(subject1));
console.log(isPolindrome(subject2));
console.log(isPolindrome(subject3));
console.log(isPolindrome(subject4));
console.log(isPolindrome(subject5));
