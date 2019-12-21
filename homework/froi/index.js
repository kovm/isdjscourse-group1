function FizzBuzz () {
   const numbers = [];
   for (let i = 1; i <= 100; i++) {
      let n = i;
      switch (true) {
      case (n % 3 === 0 && n % 5 === 0):
         n = 'FizzBuzz';
         break;
      case (n % 3 === 0):
         n = 'Fizz';
         break;
      case (n % 5 === 0):
         n = 'Buzz';
         break;
      default:
      }
      numbers.push(n);
   }
   console.log(numbers.join(', '));
   document.body.append(numbers.join(', '));
}
FizzBuzz();

function isPolindrome (subject) {
   if (typeof subject !== 'number' || typeof subject !== 'string' || subject === undefined) {
      return false;
   }
   return subject.toLowerCase()
      .split('').filter(element => element !== ' ')
      .every((element, index, arr) => element === arr[arr.length - index - 1]);
}

const subject1 = 'кот';
const subject2 = 'потоп';
const subject3 = '12311';
const subject4 = '345543';
const subject5 = 'Аргентина манит негра';
console.log(isPolindrome(subject1));
console.log(isPolindrome(subject2));
console.log(isPolindrome(subject3));
console.log(isPolindrome(subject4));
console.log(isPolindrome(subject5));
