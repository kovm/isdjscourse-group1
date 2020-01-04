function createSeaBattle (a, b) {
   try {
      if (a === '') {
         throw new Error('an exception');
      }
      if (isNaN(a)) {
         throw new Error('an exception');
      }
      a = Number(a);
      if (a < 0) {
         throw new Error('an exception');
      }
      if (a > 10) {
         throw new Error('an exception');
      }
   } catch (e) {
      return e;
   }

   var seaMap = [
      {
         id: '01',
         ship: false,
         shot: false,
         x: 0,
         y: 0
      },
      {
         id: '02',
         ship: false,
         shot: false,
         x: 0,
         y: 1
      },
      {
         id: '03',
         ship: false,
         shot: false,
         x: 0,
         y: 2
      },
      {
         id: '04',
         ship: true,
         shot: false,
         x: 0,
         y: 3
      },
      {
         id: '05',
         ship: false,
         shot: false,
         x: 0,
         y: 4
      },
      {
         id: '06',
         ship: false,
         shot: false,
         x: 0,
         y: 5
      },
      {
         id: '07',
         ship: true,
         shot: false,
         x: 0,
         y: 6
      },
      {
         id: '08',
         ship: true,
         shot: false,
         x: 0,
         y: 7
      },
      {
         id: '09',
         ship: false,
         shot: false,
         x: 0,
         y: 8
      },
      {
         id: '10',
         ship: false,
         shot: false,
         x: 0,
         y: 9
      }
   ];
   var shotCount = [];
   var shotX = (a - 1);
   console.log(shotX + ' ShotX');
   function shots () {
      shotCount.push(shotX);
      seaMap[shotX].shot = true;
   }
   console.log(seaMap);
   shots();
   console.log(shotCount, seaMap);
   function shipOne () {
      if (seaMap[6].shot === true && seaMap[7].shot === true) {
         return console.log('Killed !!!');
      } else if ((seaMap[6].shot === true && seaMap[7].shot === false) || (seaMap[6].shot === false && seaMap[7].shot === true)) {
         return console.log('Wound 2 double deck ship!!!');
      }
   }

   function shipTwo () {
      if (seaMap[3].shot === true) {
         return console.log('Killed single deck ship!!!');
      }
   }
   if (seaMap[a - 1].ship === true) {
      return shipOne() + shipTwo();
   } else {
      console.log('U R miss!!!');
   }

   console.log(seaMap, shotX, seaMap.length, seaMap[shotX].shot);
};

createSeaBattle(3);
