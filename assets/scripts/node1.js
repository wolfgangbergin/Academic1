'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//______________________________________________________________________________________
let tempNumber = 0;
const wolfFunc9 = function (param1) {
  const characters1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let tempArr = [];

  for (let i = 0; i < param1; i++) {
    let tempF = Math.floor(i / characters1.length);
    tempArr.push(
      `Seat: ${characters1.charAt(tempF)}${characters1.charAt(i - 26 * tempF)}`
    );
  }

  return tempArr;
};

const airPlaneSeats = wolfFunc9(56);

//for (const [key ,Seat ]of airPlaneSeats.entries()) l(key, Seat);

const isWindowSeat = (seat, airPlane) => {
  let index = airPlane.indexOf(seat);
  let formula = index ;
  switch (formula) {
    case 0:
      l(`${seat} is a left side window seat! `);
      break;
      case 1:
      l(`${seat} is a left side aisle seat! `);
      break;
      case 2:
      l(`${seat} is a right side aisle seat! `);
      break;
    case 3:
      l(`${seat} is a right side window seat! `);
      break;
  }
};

isWindowSeat(`Seat: AA`, airPlaneSeats);
isWindowSeat(`Seat: AB`, airPlaneSeats);
isWindowSeat(`Seat: AC`, airPlaneSeats);
isWindowSeat(`Seat: AD`, airPlaneSeats);
