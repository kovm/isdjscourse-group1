function createSeaBattle () {
   const battleFields = [
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1]
   ];

   let result;

   function hit (y, x) {
      battleFields[y][x] = 2;
   }

   function check (y, x) {
      battleFields[y][x] = 3;
   }

   function coordY (y) {
      function coordX (x) {
         if (typeof x !== typeof y !== 'number' && y > battleFields.length - 1 && x > battleFields[0].length) {
            result = false;
         }
         const target = battleFields[y][x];
         switch (target) {
         case (0):
            check(y, x);
            result = -1;
            break;
         case (3):
         case (2):
            result = 'checked';
            break;
         case (1): {
            const start = (n) => (n === 0) ? n : n - 1;
            const end = (n) => (n === battleFields.length - 1) ? n : n + 1;
            const arround = [];
            for (let a = start(y); a <= end(y); a++) {
               for (let b = start(x); b <= end(x); b++) {
                  if (a === y && b === x) {
                     continue;
                  }
                  arround.push(battleFields[a][b]);
               }
            }
            const empty = arround.includes(0);
            const cheked = arround.includes(3);
            const hited = arround.includes(2);
            const intact = arround.includes(1);
            if (intact) {
               result = 0;
               hit(y, x);
            } else if (hited) {
               result = 1;
               hit(y, x);
            } else if (empty || cheked) {
               result = 1;
               hit(y, x);
            }

            console.log(`arround = ${arround}`);
            break;
         }
         }

         console.log(result);
         console.log(battleFields);
         return result;
      }
      return coordX;
   }
   return coordY;
}
// "Mимо": -1
// "Ранил":  0,
// "Убил":    1

const seaBattle = createSeaBattle();
seaBattle(0)(1);
seaBattle(0)(0);
seaBattle(0)(2);
