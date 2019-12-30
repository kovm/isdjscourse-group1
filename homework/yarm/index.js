function createSeaBattle (a, b) {
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
   const shotCount = [];
   const shotX = seaMap[a].id;
   function shots () {
      shotCount.push(shotX);
      seaMap[a].shot = true;
   }
   console.log(seaMap);
   shots();
   console.log(shotCount, seaMap);
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
   function shipTwo () {
      if (seaMap[3].shot === true) {
         return console.log('Shot!!!');
      }
   }
   shipTwo();

   console.log(seaMap, shotX, seaMap.length, seaMap[a].shot);
};
createSeaBattle(3);
createSeaBattle(6);
createSeaBattle(0);
