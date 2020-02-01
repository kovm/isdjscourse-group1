
function createSeaBattle () {
   const seaMap = [
      {
         id: '00',
         x: { ship: false, shot: false },
         y: { ship: false, shot: false }
      },
      {
         id: '01',
         x: { ship: false, shot: false },
         y: { ship: false, shot: false }
      },
      {
         id: '02',
         x: { ship: false, shot: false },
         y: { ship: false, shot: false }
      },
      {
         id: '03',
         x: { ship: true, shot: false },
         y: { ship: false, shot: false }
      },
      {
         id: '04',
         x: { ship: false, shot: false },
         y: { ship: false, shot: false }
      },
      {
         id: '05',
         x: { ship: false, shot: false },
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
         x: { ship: false, shot: false },
         y: { ship: false, shot: false }
      },
      {
         id: '09',
         x: { ship: false, shot: false },
         y: { ship: false, shot: false }
      }
   ];

   return (a) => {
      return (b) => {
         try {
            if (isNaN(b) || isNaN(a) || (Number.isSafeInteger(a)) !== true || (Number.isSafeInteger(b)) !== true) {
               throw new Error('an exception Not a Number');
            }
            b = Number(b);
            a = Number(a);
            if (b < 0 || a < 0) {
               throw new Error('an exception less then 0');
            }
            if (b > 0) {
               throw new Error('an exception bigger then 0');
            }
            if (a > 9) {
               throw new Error('an exception bigger then 9');
            }
            if (seaMap[a].x.shot === true) {
               throw new Error('an exception U Shoot already');
            }
         } catch (e) {
            return e;
         }
         let shipCount = [];
         seaMap[a].x.shot = true;
         seaMap[b].y.shot = true;
         shipCount = seaMap.filter(item => item.x.shot === true && item.x.ship);
         console.log(shipCount);
         try {
            if (shipCount.length === 3) {
               throw new Error('an exception NO MORE SHIPS - Game Over');
            }
         } catch (e) {
            return e;
         }
         if (a === 3) {
            if (seaMap[3].x.shot === true) {
               return 1;
            }
         } else if (a === 6 || a === 7) {
            if (seaMap[6].x.shot === true && seaMap[7].x.shot === true) {
               return 1;
            } else if ((seaMap[6].x.shot === true && seaMap[7].x.shot === false) || (seaMap[6].x.shot === false && seaMap[7].x.shot === true)) {
               return 0;
            }
         } else {
            return -1;
         };
      };
   };
}
const seaBattle = createSeaBattle();
seaBattle(3)(0);

module.exports = createSeaBattle;
