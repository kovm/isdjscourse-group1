for (let i = 1; i <= 100; i += 1) {
   let output = '';
   if (i % 3 === 0) {
      output += 'Fizz';
   }
   if (i % 5 === 0) {
      output += 'Bazz';
   }
   console.log(output || i);
}

const isPali = (input) => {
   if (!input) {
      return false;
   }
   let str = input.toString();
   const strLength = str.length;
   str = str.toLowerCase();
   for (let i = 0; i < strLength; i += 1) {
      if (str[i] !== str[strLength - 1 - i]) {
         return false;
      }
   }
   return true;
};

isPali(123321);
