module.exports.createSeaBattle = createSeaBattle;

function createSeaBattle () {
   const battleFields = [
      [1, 1, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 1, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 1, 1, 1, 0, 1, 0, 1, 1]
   ];

   let result;

   function hit (y, x) {
      battleFields[y][x] = 2;
   }

   function check (y, x) {
      battleFields[y][x] = 3;
   }
   function endGame () {
      let result;
      for (const y of battleFields) {
         if (y.some(elem => elem === 1)) {
            result = false;
            break;
         } else {
            result = true;
         }
      }
      return result;
   }

   return (y) => {
      return (x) => {
         if (typeof x !== 'number' || typeof y !== 'number') {
            throw new Error('You have enter wrong value, enter number');
         }
         if (endGame()) {
            throw new Error('Game over, no ships was left');
         }
         if (y > battleFields.length - 1 || x > battleFields[0].length - 1 || y < 0 || x < 0) {
            throw new Error('You have enter wrong number, enter 0-9');
         }
         const target = battleFields[y][x];
         switch (target) {
         case (0):
            check(y, x);
            result = -1;
            break;
         case (3):
         case (2):
            throw new Error('You have already shooted in this cell');
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

            break;
         }
         }

         console.log(result);
         return result;
      };
   };
}
// "Mимо": -1
// "Ранил": 0,
// "Убил": 1

const seaBattle = createSeaBattle();
seaBattle(0)(0);
seaBattle(0)(1);
seaBattle(9)(9);
seaBattle(9)(8);
seaBattle(4)(4);
seaBattle(4)(4);
