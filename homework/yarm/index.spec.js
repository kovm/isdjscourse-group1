createSeaBattle = require('./index.js');
let seaBattle = createSeaBattle();
test('kill 1deck ship', () => {
   expect(seaBattle(3)(0)).toBe(1);
});
test('U missed!!!', () => {
   expect(seaBattle(2)(0)).toBe(-1);
});
test('WRONG input data', () => {
   expect(seaBattle(22)(0)).toStrictEqual(Error('an exception bigger then 9'));
});
