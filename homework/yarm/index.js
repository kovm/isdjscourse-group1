function createSeaBattle (a) {
   return (b) => {
      try {
         if (b === '') {
            throw new Error('an exception');
         }
         if (isNaN(b)) {
            throw new Error('an exception');
         }
         b = Number(b);
         if (b < 1) {
            throw new Error('an exception');
         }
         if (b > 10) {
            throw new Error('an exception');
         }
      } catch (e) {
         return e;
      }
      try {
         if (a === '') {
            throw new Error('an exception');
         }
         if (isNaN(a)) {
            throw new Error('an exception');
         }
         a = Number(a);
         if (a < 1) {
            throw new Error('an exception');
         }
         if (a > 10) {
            throw new Error('an exception');
         }
      } catch (e) {
         return e;
      }
      const seaMap = [
         {
            id: '01',
            ship: false,
            shot: false,
            x: { ship: false, shot: false },
            y: { ship: false, shot: false }
         },
         {
            id: '02',
            ship: false,
            shot: false,
            x: { ship: false, shot: false },
            y: { ship: false, shot: false }
         },
         {
            id: '03',
            ship: false,
            shot: false,
            x: { ship: false, shot: false },
            y: { ship: false, shot: false }
         },
         {
            id: '04',
            ship: true,
            shot: false,
            x: { ship: true, shot: false },
            y: { ship: false, shot: false }
         },
         {
            id: '05',
            ship: false,
            shot: false,
            x: { ship: false, shot: true },
            y: { ship: false, shot: true }
         },
         {
            id: '06',
            ship: false,
            shot: false,
            x: { ship: false, shot: false },
            y: { ship: true, shot: false }
         },
         {
            id: '07',
            ship: true,
            shot: false,
            x: { ship: false, shot: false },
            y: { ship: false, shot: false }
         },
         {
            id: '08',
            ship: true,
            shot: false,
            x: { ship: false, shot: false },
            y: { ship: false, shot: false }
         },
         {
            id: '09',
            ship: false,
            shot: false,
            x: { ship: false, shot: false },
            y: { ship: false, shot: false }
         },
         {
            id: '10',
            ship: false,
            shot: false,
            x: { ship: false, shot: false },
            y: { ship: false, shot: false }
         }
      ];

      const shotX = (a - 1);
      const shotY = (b - 1);
      console.log(shotX + ' ShotX');
      try {
         if ((seaMap[shotX].x.shot === true) && seaMap[shotY].y.shot === true) {
            throw new Error('an exception');
         }
      } catch (e) {
         return e;
      }
      function shots () {
         seaMap[shotX].x.shot = true;
         seaMap[shotY].y.shot = true;
      }
      console.log(seaMap);

      shots();
      console.log(seaMap);

      function shipOne () {
         if (seaMap[6].shot === true && seaMap[7].shot === true) {
            return console.log('Killed !!!');
         } else if ((seaMap[6].shot === true && seaMap[7].shot === false) || (seaMap[6].shot === false && seaMap[7].shot === true)) {
            return console.log('Wound 2 double deck ship!!!');
         }
      }

      function shipTwo () {
         if (seaMap[3].x.ship === true && seaMap[5].y.ship === true) {
            return console.log('Killed single deck ship!!!');
         }
      }; console.log(seaMap, shotX, seaMap.length, seaMap[shotX].shot);

      function shot () {
         if (seaMap[a - 1].x.ship === true && seaMap[b - 1].y.ship === true) {
            return shipOne() + shipTwo();
         } else {
            return console.log('U R miss!!!');
         }
      };
      shot();
   };
};

createSeaBattle(3)(4);
createSeaBattle(4)(6);
createSeaBattle(6)(7);
createSeaBattle(5)(5);
