const createSeaBattle = require('./index.js');
const seaBattle = createSeaBattle();

test('seaBattle has roper 10 of ships with correct quantity of ship decks', () => {
   let hit = 0;
   let kill = 0;
   for (let y = 0; y <= 9; y++) {
      for (let x = 0; x <= 9; x++) {
         // seaBattle(y)(x);
         switch (seaBattle(y)(x)) {
         case 1:
            kill += 1;
            break;
         case 0:
            hit += 1;
            break;
         }
      }
   }

   expect(kill).toBe(10);
   expect(hit).toBe(10);
});
