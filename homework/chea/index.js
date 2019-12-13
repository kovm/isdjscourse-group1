// main start
// Polindrom check
const str = prompt('Entervalue to check is it polindrom');
if (str !== null) {
   console.log((str || 'Empty string') + ' is ' + (isPolyndrom(str) ? '' : 'not ') + 'polyndrom');
}

// NumbersPrinting
printNumbers();
// main end.

function printNumbers () {
   for (let i = 1; i <= 100; i++) {
      let out = '';
      if (i % 3 === 0) {
         out += 'Fizz';
      }
      if (i % 5 === 0) {
         out += 'Buzz';
      }
      console.log(out.length > 0 ? out : i);
   }
}

function isPolyndrom (str) {
   str = '' + str;
   const len = str.length;
   if (len === 0) {
      return false;
   }
   for (let i = 0; i <= len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
         return false;
      }
   }
   return true;
}
