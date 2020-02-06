const seaFieldWithShips = [0, 1, 0, 1, 0, 0, 1, 1, 0, 0];

const seaFieldWithoutShips = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function gameOver () {
   const amountOfSettedShips = 3;

   let amountOfKilledShips = 0;
   for (const item of seaFieldWithoutShips) {
      if (item === 'killed') {
         amountOfKilledShips++;
      }
   }

   if (amountOfSettedShips === amountOfKilledShips) {
      return true;
   } else {
      return false;
   }
}

function createSeaBattle () {
   return (x) => {
      return (y) => {
         try {
            if (gameOver()) {
               throw new Error('Game is over! Ships are over!');
            } else if (!Number.isInteger(x)) {
               throw new Error('"x" - is not a number! Enter a number, please!');
            } else if (x > 9 | x < 0) {
               throw new Error('"x" - should be from 0 to 9!');
            } else if (typeof seaFieldWithoutShips[x] === 'string') {
               throw new Error('You have already shot at these coordinates!');
            }

            if (seaFieldWithShips[x] === 0) {
               seaFieldWithoutShips[x] = 'missed';
               return console.log('-1');
            } else if (seaFieldWithShips[x - 1] === 0 & seaFieldWithShips[x + 1] === 0) {
               seaFieldWithoutShips[x] = 'killed';
               return console.log('1');
            } else if ((seaFieldWithShips[x - 1] === 0 & seaFieldWithoutShips[x + 1] === 'wounded') |
               (seaFieldWithShips[x + 1] === 0 & seaFieldWithoutShips[x - 1] === 'wounded')) {
               seaFieldWithoutShips[x] = 'killed';
               return console.log('1');
            } else if (seaFieldWithShips[x - 1] === 1 | seaFieldWithShips[x + 1] === 1) {
               seaFieldWithoutShips[x] = 'wounded';
               return console.log('0');
            } else {
               console.log('What are you?');
            }
         } catch (err) {
            console.log(err.message);
         }
      };
   };
}

console.log('index.js is connected!');

exports.createSeaBattle = createSeaBattle;
