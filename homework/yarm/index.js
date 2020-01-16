function createSeaBattle (a, b) {
   try {
      if ((a || b) === '') {
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
         x1: false,
         y1: false
      },
      {
         id: '02',
         ship: false,
         shot: false,
         x: false,
         y: false
      },
      {
         id: '03',
         ship: false,
         shot: false,
         x: false,
         y: false
      },
      {
         id: '04',
         ship: true,
         shot: false,
         x: true,
         y: true
      },
      {
         id: '05',
         ship: false,
         shot: false,
         x: false,
         y: false
      },
      {
         id: '06',
         ship: false,
         shot: false,
         x: false,
         y: false
      },
      {
         id: '07',
         ship: true,
         shot: false,
         x: false,
         y: false
      },
      {
         id: '08',
         ship: true,
         shot: false,
         x: false,
         y: false
      },
      {
         id: '09',
         ship: false,
         shot: false,
         x: false,
         y: false
      },
      {
         id: '10',
         ship: false,
         shot: false,
         x: false,
         y: false
      }
   ];

   var shotX = (a - 1);
   console.log(shotX + ' ShotX');
   function shots () {
      seaMap[shotX].shot = true;
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
      if (seaMap[3].x === true) {
         return console.log('Killed single deck ship!!!');
      }
   }; console.log(seaMap, shotX, seaMap.length, seaMap[shotX].shot);

   function shot () {
      if (seaMap[a - 1].ship === true) {
         return shipOne() + shipTwo();
      } else {
         return console.log('U R miss!!!');
      }
   };
   shot();
};

createSeaBattle(3);
createSeaBattle(4);
createSeaBattle(6);
