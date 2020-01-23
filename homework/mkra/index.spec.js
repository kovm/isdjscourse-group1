let seaBattle = require('./index');
seaBattle = seaBattle.createSeaBattle();

test('First function returns a function', () => {
   expect(typeof (seaBattle())).toBe('function');
});

test('Second function returns a number', () => {
   expect(typeof (seaBattle(1)(1))).toBe('number');
});

test('Coordinate "x" and "y" must be between range from 0 to 9', () => {
   expect(() => seaBattle(22)(-3).toTrow());
});

test('Second function returns number between range from -1 to 1', () => {
   expect(seaBattle(0)(2)).betweenRange(-1, 1);
});

test('Function returns error if you shoot in cell twice', () => {
   expect(() => seaBattle(2)(2).toTrow());
});

test('Parameters of functions must be a numbers', () => {
   expect(() => seaBattle('a')().toTrow());
});

expect.extend({
   betweenRange (received) {
      const floor = -1;
      const upper = 1;
      const pass = received >= floor && received <= upper;
      if (pass) {
         return {
            message: () => `expected ${received} 
                not to be within range ${floor} - ${upper}`,
            pass: true
         };
      } else {
         return {
            message: () => `${received} 
                to be within range ${floor} - ${upper}`,
            pass: false
         };
      }
   }
});
