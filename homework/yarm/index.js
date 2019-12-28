function createSeaBattle (a, b) {
   const seaMap = [
      {
         id: '01',
         ship: false,
         x: 0,
         y: 0
      },
      {
         id: '02',
         ship: false,
         x: 0,
         y: 1
      },
      {
         id: '03',
         ship: false,
         x: 0,
         y: 2
      },
      {
         id: '04',
         ship: true,
         x: 0,
         y: 3
      },
      {
         id: '05',
         ship: false,
         x: 0,
         y: 4
      },
      {
         id: '06',
         ship: false,
         x: 0,
         y: 5
      },
      {
         id: '07',
         ship: true,
         x: 0,
         y: 6
      },
      {
         id: '08',
         ship: true,
         x: 0,
         y: 7
      },
      {
         id: '09',
         ship: false,
         x: 0,
         y: 8
      },
      {
         id: '10',
         ship: false,
         x: 0,
         y: 9
      }
   ];
   const shotCount = [];
   const shotX = seaMap[a].id;
   function shots () {
      shotCount.push(shotX);
   }
   shots();
   console.log(shotCount);
   function shipOne () {
      if (seaMap[+shotX].ship === seaMap[6].ship || seaMap[+shotX].ship === seaMap[7].ship) {
         return console.log('Shot!!!');
      } else {
         return console.log('NO ship crashed');
      }
   }
   if (seaMap[a].ship === true) {
      return shipOne();
   } else {
      console.log('U R miss!!!');
   }

   console.log(seaMap, shotX, seaMap.length, seaMap[0].ship);
};
createSeaBattle(3);
createSeaBattle(6);
createSeaBattle(0);
