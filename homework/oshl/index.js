(function () {
   'use strict';
   // Task 1 The River Battle
   function createSeaBattle () {
      const river = [0, 0, 1, 1, 0, 0, 1, 0, 1, 0];
      function checkX (x) {
         if (typeof x !== 'number') {
            throw new Error('X is not a number');
         } else if (x < 0 || x > 9) {
            throw new Error('X is out of the field');
         } else if (river[x] === -1) {
            throw new Error('You\'ve already shot at this coordinates');
         } else if (river[x] === 0) {
            river[x] = -1;
            return -1;
         } else if (river[x] === 1) {
            river[x] = -1;
            if (river[x - 1] === 1 || river[x + 1] === 1) {
               return 0;
            } else {
               return 1;
            }
         }
      }
      function checkY (y) {
         if (typeof y !== 'number') {
            throw new Error('Y is not a number');
         } else if (y !== 0) {
            throw new Error('Y is out of the field');
         } else {
            return;
         };
      }

      if (river.indexOf(1, 0) === -1) {
         throw new Error('The all ships are killed');
      } else {
         return checkX(x),
                checkY(y);
      }
   };

   let seaBattle = createSeaBattle();
   seaBattle('0')('0'); // throw an exception
   seaBattle([])({}); // throw an exception
   seaBattle(42)(-19); // throw an exception
   seaBattle(0)(0); // return  0
   seaBattle(1)(0); // return  1
   seaBattle(1)(0); // throw an exception
   seaBattle(2)(0); // return -1
   seaBattle(3)(0); // return -1
   seaBattle(4)(0); // return  1
   seaBattle(5)(0); // return -1
   seaBattle(6)(0); // return -1
   seaBattle(7)(0); // return -1
   seaBattle(8)(0); // return  1
   seaBattle(9)(0); // throw an exception 
})();
