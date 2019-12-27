let dev3, dev5, dev15;
function fizzBuzz () {
   let unit = '';
   let count = 0;
   do {
      count = count + 1;
      dev3 = Number.isInteger(count / 3);
      dev5 = Number.isInteger(count / 5);
      dev15 = Number.isInteger(count / 15);
      if (dev15) {
         unit = 'FizzBuzz';
      } else if (dev3) {
         unit = 'Fizz';
      } else if (dev5) {
         unit = 'Buzz';
      } else {
         unit = count;
      }
      console.log(unit);
   } while (count < 100);
}
fizzBuzz();
function isLucky (myString) {
   let bulResult = false; let resultExp = '';
   const strArray = String(myString).split('');
   const strLength = strArray.length;
   const resultYes = 'Yes, you are lucky! Your expression is centrally symmetrical!';
   const resultNo = 'No, not at this time...';
   const wrongInput = 'Please, try string or number only';
   let i = 0;
   let j = strLength - 1;
   if ((typeof myString === 'string') || (typeof myString === 'number')) {
      do {
         if (strArray[i] === strArray[j]) {
            bulResult = true;
            i = i + 1;
            j = j - 1;
         } else {
            bulResult = false;
            i = j + 1;
         }
      } while (i < j);
   } else {
      console.log(wrongInput);
   }
   if (bulResult) {
      resultExp = resultYes;
   } else {
      resultExp = resultNo;
   }
   console.log(`Your array has the next following elements ${strArray} and
   the length of your array or number of its symbols is: ${strLength}
   ${resultExp}`);
}
isLucky(34543);
isLucky('ertre');
isLucky('abba');
isLucky('tyuio');
isLucky('trewqp');
isLucky([1, 2, 1]);
isLucky({ toString: () => 'aaa' });
