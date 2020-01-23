module.exports.createSeaBattle = createSeaBattle;
function SeaBattle () {
   const SQUARE_SIZE = 10;
   const EMPTY_VALUE = 4;
   const SHIP_VALUE = 5;
   const EMPTY_FIRE = -1;
   const DAMAGE_FIRE = 0;
   const DESTROY_FIRE = 1;

   const square = fillSquare();

   function random (n) {
      return Math.floor(Math.random() * Math.floor(n));
   }

   function fillSquare () {
      const square = [[]];
      for (let i = 0; i < SQUARE_SIZE; i++) {
         square[i] = new Array(SQUARE_SIZE).fill(EMPTY_VALUE);
      }
      square[0][0] = SHIP_VALUE; square[1][0] = SHIP_VALUE; square[2][0] = SHIP_VALUE; square[3][0] = SHIP_VALUE;
      square[5][0] = SHIP_VALUE; square[6][0] = SHIP_VALUE;
      square[8][0] = SHIP_VALUE; square[9][0] = SHIP_VALUE;

      square[0][2] = SHIP_VALUE; square[1][2] = SHIP_VALUE; square[2][2] = SHIP_VALUE;
      square[4][2] = SHIP_VALUE; square[5][2] = SHIP_VALUE; square[6][2] = SHIP_VALUE;
      square[8][2] = SHIP_VALUE; square[9][2] = SHIP_VALUE;

      square[0][4] = SHIP_VALUE;
      square[2][4] = SHIP_VALUE;
      square[4][4] = SHIP_VALUE;

      square[random(9)][6 + random(SQUARE_SIZE - 6)] = SHIP_VALUE;
      return square;
   }

   function hasNotDestroedShips () {
      for (let x = 0; x < SQUARE_SIZE; x++) {
         for (let y = 0; y < SQUARE_SIZE; y++) {
            if (SHIP_VALUE === square[x][y]) {
               return true;
            }
         }
      }
      return false;
   }

   function validateSquareSize (x, y) {
      if (x < 0 || x >= SQUARE_SIZE) {
         throw new Error('x should be in range [0..' + (SQUARE_SIZE - 1) + ']!');
      }
      if (y < 0 || y >= SQUARE_SIZE) {
         throw new Error('y should be in range [0..' + (SQUARE_SIZE - 1) + ']!');
      }
   }

   function validateFire (x, y) {
      if (isNaN(x) || !Number.isInteger(x)) {
         throw new Error('x is not an integer number!');
      }
      if (isNaN(y) || !Number.isInteger(y)) {
         throw new Error('y is not an integer number!');
      }
      validateSquareSize(x, y);
      if (!hasNotDestroedShips()) {
         throw new Error('Game is over!!!!');
      }
      if (DESTROY_FIRE >= square[x][y]) {
         throw new Error('Position was already fired!!!');
      }
   }

   function safeGetValue (x, y) {
      try {
         validateSquareSize(x, y);
      } catch (e) {
         return EMPTY_VALUE;
      }
      return square[x][y];
   }

   function isShipNotDestroyedInDirection (x, y, dx, dy) {
      do {
         x += dx;
         y += dy;
      }
      while (DAMAGE_FIRE === safeGetValue(x, y));
      return SHIP_VALUE === safeGetValue(x, y);
   }

   this.fire = function (x, y) {
      validateFire(x, y);
      if (EMPTY_VALUE === square[x][y]) {
         square[x][y] = EMPTY_FIRE;
      } else if (SHIP_VALUE === square[x][y]) {
         if (isShipNotDestroyedInDirection(x, y, -1, 0) ||
         isShipNotDestroyedInDirection(x, y, 1, 0) ||
         isShipNotDestroyedInDirection(x, y, 0, -1) ||
         isShipNotDestroyedInDirection(x, y, 0, 1)) {
            square[x][y] = DAMAGE_FIRE;
         } else {
            square[x][y] = DESTROY_FIRE;
         }
      }
      return square[x][y];
   };
}

function createSeaBattle () {
   const battle = new SeaBattle();
   return (x) => {
      return (y) => {
         return battle.fire(x, y);
      };
   };
}
