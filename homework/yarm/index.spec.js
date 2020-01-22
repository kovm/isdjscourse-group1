createSeaBattle = require('./index.js');
let seaBattle = createSeaBattle();
test('kill 1deck ship', () => {
   expect(seaBattle(3)(0)).toBe(1);
});
