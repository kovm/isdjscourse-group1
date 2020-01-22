let seaBattle = require('./index');
seaBattle = seaBattle.createSeaBattle();

test('First function return function', () => {
   expect(typeof (seaBattle())).toBe('function');
});

test('Second function return number', () => {
   expect(typeof (seaBattle(1)(1))).toBe('number');
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

test('Function return number between', () => {
   expect(seaBattle(2)(2)).betweenRange(-1, 1);
});

test('Validate', () => {
   expect(seaBattle('a')()).toBe(Error);
});
