module.exports.createSeaBattle = createSeaBattle;
function createSeaBattle (a) {
   return (b) => {
      try {
         if (b === '') {
            throw new Error('an exception Empty string');
         }
         if (isNaN(b)) {
            throw new Error('an exception Not a Number');
         }
         b = Number(b);
         if (b < 0) {
            throw new Error('an exception less then 0');
         }
         if (b > 0) {
            throw new Error('an exception bigger then 0');
         }
      } catch (e) {
         return e;
      }
      try {
         if (a === '') {
            throw new Error('an exception Empty string');
         }
         if (isNaN(a)) {
            throw new Error('an exception not a number');
         }
         a = Number(a);
         if (a < 0) {
            throw new Error('an exception less then 0');
         }
         if (a > 9) {
            throw new Error('an exception bigger then 9');
         }
      } catch (e) {
         return e;
      }
      const seaMap = [
         {
            id: '00',
            x: { ship: false, shot: true },
            y: { ship: false, shot: false }
         },
         {
            id: '01',
            x: { ship: false, shot: true },
            y: { ship: false, shot: false }
         },
         {
            id: '02',
            x: { ship: false, shot: true },
            y: { ship: false, shot: false }
         },
         {
            id: '03',
            x: { ship: true, shot: false },
            y: { ship: false, shot: false }
         },
         {
            id: '04',
            x: { ship: false, shot: true },
            y: { ship: false, shot: true }
         },
         {
            id: '05',
            x: { ship: false, shot: true },
            y: { ship: false, shot: false }
         },
         {
            id: '06',
            x: { ship: true, shot: false },
            y: { ship: false, shot: false }
         },
         {
            id: '07',
            x: { ship: true, shot: false },
            y: { ship: false, shot: false }
         },
         {
            id: '08',
            x: { ship: false, shot: true },
            y: { ship: false, shot: false }
         },
         {
            id: '09',
            x: { ship: false, shot: true },
            y: { ship: false, shot: false }
         }
      ];

      const shotOver = seaMap.filter(gameOver);
      function gameOver (value) {
         return (value.x.shot !== true);
      }
      console.log(shotOver);

      try {
         if (shotOver.length === 0) {
            throw new Error('an exception NO MORE SHOTS - Game Over');
         }
         if (seaMap[a].x.shot === true) {
            throw new Error('an exception U shot allready');
         }
      } catch (e) {
         return e;
      }
      function shots () {
         seaMap[a].x.shot = true;
         seaMap[b].y.shot = true;
      }

      shots();

      function shipOne () {
         if (seaMap[6].x.shot === true && seaMap[7].x.shot === true) {
            return console.log('Killed !!!');
         } else if ((seaMap[6].x.shot === true && seaMap[7].x.shot === false) || (seaMap[6].x.shot === false && seaMap[7].x.shot === true)) {
            return console.log('Wound 2 double deck ship!!!');
         }
      }

      function shipTwo () {
         if (seaMap[3].x.shot === true) {
            return console.log('Killed single deck ship!!!');
         }
      }; console.log(seaMap, seaMap.length, seaMap[a].shot);

      function shot () {
         if (a === 3) {
            shipTwo();
         } else if (a === 6 || a === 7) {
            shipOne();
         } else {
            return console.log('U R miss!!!');
         }
      };
      shot();
   };
};

createSeaBattle(3)(0);
createSeaBattle(4)(-15);
createSeaBattle(6)(0);
createSeaBattle(5)(0);
