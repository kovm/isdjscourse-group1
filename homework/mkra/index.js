module.exports.createSeaBattle = createSeaBattle;

function createSeaBattle () {
   const missFire = -1;
   const hitFire = 0;
   const deathHit = 1;
   const usedCells = [];
   const battleField = createShips(createBattleField(10, 10));

   return (x) => {
      return (y) => {
         validate(x, y, usedCells);

         if (checkEndGame(battleField)) {
            throw new Error('Game over');
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
   for (const rows of array) {
      for (const cell of rows) {
         if (cell === true) {
            return false;
         }
      }
   }
   return true;
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
   let bottomKey = y - 1;
   let upperKey = y + 1;
   let rightKey = x + 1;
   let leftKey = x - 1;

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
   let oldX;
   let oldY;
   if (currentX < 0 || currentX > 9) {
      throw new Error('You are enter incorrect number (correct = 0-9)');
   }
   if (currentY < 0 || currentY > 9) {
      throw new Error('You are enter incorrect number (correct = 0-9)');
   }
   if (typeof (currentX) !== 'number' || typeof (currentY) !== 'number') {
      throw new Error('You are enter incorrect data');
   }
   for (const old of array) {
      for (let i = 0; i < 2; i++) {
         if (i === 0) {
            oldX = old[i];
         } else {
            oldY = old[i];
         }
      }
      if (oldX === currentX && oldY === currentY) {
         throw new Error('You already shot in this cell');
      }
   }
}
