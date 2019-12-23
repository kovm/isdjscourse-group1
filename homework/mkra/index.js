module.exports.createSeaBattle = createSeaBattle();

function createSeaBattle () {
   const missFire = -1;
   const hitFire = 0;
   const deathHit = 1;
   let battleField = createBattleField(10, 10);
   const usedCells = [];
   battleField = createShips(battleField);

   return function parentFn (x) {
      return function childFn (y) {
         validate(x, y, usedCells);

         if (checkEndGame(battleField)) {
            // eslint-disable-next-line no-throw-literal
            throw 'Game over';
         } else if (battleField[x][y] === true) {
            battleField[x][y] = false;
            usedCells.push([x, y]);
            if (isShipDestroyed(battleField, x, y)) {
               return deathHit;
            }
            return hitFire;
         } else if (battleField[x][y] === null) {
            battleField[x][y] = missFire;
            usedCells.push([x, y]);
            return missFire;
         }
      };
   };
}

function createShips (array) {
   for (let i = 0; i < 4; i++) {
      array[0][i] = true;
   }
   for (let i = 0; i < 7; i++) {
      if (i < 3) {
         array[2][i] = true;
      } else if (i > 3) {
         array[2][i] = true;
      }
   }
   for (let i = 0; i < 8; i++) {
      if (i < 2) {
         array[4][i] = true;
      } else if (i > 2 && i < 5) {
         array[4][i] = true;
      } else if (i > 5 && i < 8) {
         array[4][i] = true;
      }
   }
   for (let i = 0; i <= 6; i++) {
      if (i % 2) {
         array[6][i] = true;
      }
   }
   return array;
}

function checkEndGame (array) {
   let result = true;
   for (const rows of array) {
      for (const cell of rows) {
         if (cell === true) {
            result = false;
            return result;
         }
      }
   }
   return result;
}

function createBattleField (rows, columns) {
   const battleField = [];
   for (let i = 0; i < rows; i++) {
      battleField[i] = [];
      for (let j = 0; j < columns; j++) {
         battleField[i][j] = null;
      }
   }
   return battleField;
}

function isShipDestroyed (array, x, y) {
   let result = true;
   let checkX = true;
   let checkY = true;
   let leftKey = y - 1;
   let rightKey = y + 1;
   let upperKey = x + 1;
   let bottomKey = x - 1;

   while (array[upperKey][y] !== null && array[bottomKey][y] !== null) {
      if (array[upperKey][y] === true || array[bottomKey][y] === true) {
         checkX = false;
      }
      upperKey++;
      bottomKey--;
   }

   while (array[x][leftKey] !== null && array[x][rightKey] !== null) {
      if (array[x][leftKey] === true || array[x][rightKey] === true) {
         checkY = false;
      }
      leftKey--;
      rightKey++;
   }
   result = checkX === checkY;
   return result;
}

function validate (currentX, currentY, array) {
   let result = false;
   let oldX;
   let oldY;
   if (currentX < 0 || currentX > 9) {
      // eslint-disable-next-line no-throw-literal
      throw 'You are enter incorrect number (correct = 0-9)';
   }
   if (currentY < 0 || currentY > 9) {
      // eslint-disable-next-line no-throw-literal
      throw 'You are enter incorrect number (correct = 0-9)';
   }
   if (typeof (currentX) !== 'number' || typeof (currentY) !== 'number') {
      // eslint-disable-next-line no-throw-literal
      throw 'You are enter incorrect data';
   }
   for (const old of array) {
      for (let i = 0; i < 2; i++) {
         if (i === 0) {
            oldX = old[i];
         } else {
            oldY = old[i];
         }
      }
      result = oldX === currentX && oldY === currentY;
      if (result) {
         // eslint-disable-next-line no-throw-literal
         throw 'You already shot in this cell';
      }
   }
}

let seaBattle = createSeaBattle();
