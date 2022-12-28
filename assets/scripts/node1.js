'use strict';
Object.prototype.l = console.log
Object.prototype.d = console.dir
//______________________________________________________________________________________

// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const wolfFunc15 = function (param1) {
  let tempArr = param1.split('+');
  const regex = /[a-z]{3}\d+\s[a-z]{3}\d+/g;
  tempArr.forEach((value) => {
    value = value.includes('Delayed') ? '😞 ' + value : value;
    value =
      value.replaceAll('_', ' ').replaceAll(';', ' ').slice(0, -5) +
      `(${value.slice(-5).replaceAll(':', 'h')})`;

    let [temp8] = value.match(regex);

    l(
      value
        .replaceAll(
          regex,
          `from ${temp8
            .toUpperCase()
            .replaceAll(/\s/g, ' to ')
            .replaceAll(/\d/g, '')}`
        )
        .padStart(45, ' ')
    );
  });
};
wolfFunc15(flights);

