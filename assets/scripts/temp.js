// const kim = {
//   name: 'kim',
//   age: 22,
//   house: { address: '612 miner', rooms: { bathRooms: [2], bedRooms: [444] } },
// };
// const beasts = ['ant', 'bison', 'camel', 'duck', 'Zebra', kim, 'wolf'];

//___________________________________________________
function greet(param1) {
  return (param2) => {
    console.log(`${param1}  says ${param2}`);
  };
}

greet('Wolfman')('HI');

//___________________________________________________

let greet = (function greet(param1) {
  return (param2) => {
    console.log(`${param1}  says ${param2}`);
  };
})('Wolfman');
console.dir(greet);
greet('HI');

function greet(param1) {
  return (param2) => {
    console.log(`${param1}  says ${param2}`);
  };
}

let tempKim = greet('Wolfman');
tempKim('HI');
console.dir(tempKim);

//___________________________________________________

function greet(param1) {
  return (wolfTemp = (param2) => {
    console.log(`${param1}  says ${param2}`);
  });
}

greet('Wolfman')('HI')(function greet(param1) {
  let count = 0;
  AAAwolf = function AAAtempName(param2) {
    console.log(`count: ${count} `);
  };
})();
this.AAAwolf();
console.log(this.AAAwolf);
console.log(this);

//___________________________________________________

let increaseCount;
let AAAwolf;
let count = { age: 22 };

let jojo = { name: `JOJO1` };

(function greet(param1, param2) {
  param2.name += `2`;
  console.log(param2);
  let tempKim = param1;
  AAAwolf = function AAAtempName() {
    console.log(`count: ${param1.age} `);
  };
  increaseCount = function () {
    tempKim.age++;
  };
})(count, jojo);

console.log(jojo);

increaseCount();
increaseCount();
increaseCount();
increaseCount();
increaseCount();
increaseCount();
increaseCount();
increaseCount();

AAAwolf();

//___________________________________________________
let wolfTemp = () => {
  let arr = [];
  let i;
  for (i = 0; i < 13; i++) {
    arr.push(() => console.log(i));
  }
  return arr;
};

let fs = wolfTemp();

console.dir(fs[0]);

fs.forEach((func) => func());

//___________________________________________________

let i;

let wolfTemp = () => {
  let arr = [];

  for (i = 0; i < 13; i++) {
    arr.push(() => console.log(i));
  }
  i += 100;
  return arr;
};

let fs = wolfTemp();
i += 100000000;
console.dir(fs[0]);

fs.forEach((func) => func());

//___________________________________________________

let makeFunc;
let increaseI;
let i;

let wolfTemp = (() => {
  makeFunc = (increaseI = () => {
    i += 100;
  })();

  let arr = [];

  for (i = 0; i < 13; i++) {
    arr.push(() => console.log(i));
  }

  return arr;
})();

let fs = wolfTemp;

increaseI();
increaseI();
increaseI();
console.dir(fs[0]);

fs.forEach((func) => func());

//___________________________________________________

var DDD = 0;

let wolfTemp = () => {
  let arr = [];

  for (AAA = 0; AAA < 3; AAA++) {
    let tempLocal = AAA;
    mich = `AAA ${AAA}`;
    DDD++;

    arr.push((CCC) =>
      console.log(`tempLocal ${tempLocal} ${mich} CCC ${CCC} DDD ${DDD}`)
    );
  }
  return arr;
};

let fs = wolfTemp();

console.dir(fs[0]);

fs.forEach((func) => func(fs.indexOf(func)));

//___________________________________________________

var wolfTemp = () => {
  var arr1 = [];

  for (var AAA = 0; AAA < 3; AAA++) {
    let banana = AAA;
    arr1.push(
      ((param) => {
        console.log(`kimTemp: ${param} banana: ${banana}`);
      }).bind(null, AAA)
    );
  }

  return arr1;
};

var fs = wolfTemp();

console.dir(fs[0]);

fs.forEach((func) => func());

//___________________________________________________

var wolfTemp = () => {
  var arr1 = [];

  for (var AAA = 0; AAA < 3; AAA++) {
    var jojoTemp = (function (banana) {
      arr1.push(() => {
        console.log(`banana: ${banana}`);
      });
    })(AAA);
  }

  return arr1;
};

var fs = wolfTemp();

console.dir(fs[0]);

fs.forEach((func) => func());

//___________________________________________________

var wolfTemp = () => {
  var arr1 = [];

  for (var AAA = 0; AAA < 3; AAA++) {
    arr1.push(
      (function (banana) {
        return () => console.log(banana);
      })(AAA)
    );
  }
  return arr1;
};

var fs = wolfTemp();

console.dir(fs[0]);

fs.forEach((func) => func());

//___________________________________________________
var increaseAAAA;

const wolfTemp = (() => {
  const arr1 = [];
  const TEST = `TEST`

  for (let AAA = 0; AAA < 5; AAA++) {
    const AAAA = AAA;
    increaseAAAA = () => {
      AAAA++;
    };
    arr1.push((() => {
      const attribute = AAA;
      console.log(`${AAAA} ${attribute} ${TEST}`);
    }));
  }
 

  return arr1;
})();

const fs = wolfTemp;
 
//increaseAAAA()


console.dir(fs[0]);

fs.forEach((func) => func());

//______________________________________________________________________________________
let makeGreeting = (lang) => {
    return function (fName, lName) {
      lang === `en` ? console.log(`hello ${fName} ${lName}`) : null;
      lang === `es` ? console.log(`hole ${fName} ${lName}`) : null;
  
    };
  };
  
  
  let greetEnglish = makeGreeting('en')
  console.dir(greetEnglish)
  greetEnglish('wolfgang', `bergin`)
  
  
  let greetSpanish = makeGreeting('es')
  console.dir(greetSpanish)
  greetSpanish('wolfgang', `bergin`)
  
  let tempWolf = makeGreeting('en')
  
  console.log(makeGreeting('en') == makeGreeting('en'))
  console.log(makeGreeting === makeGreeting)
  
  //______________________________________________________________________________________

const hiLater = () => {
    const HI = 'hi';
    setTimeout(
      (wolfTemp = () => {
        console.log(HI);
      }),
      5000
    );
    console.dir(wolfTemp);
  };
  
  hiLater();

//___________________________________________________

let kim = {age: 22};
const hiLater = (param1) => {

  param1(kim)

  
};

hiLater((param2)=>{param2.age ++});
hiLater((param2)=>{param2.age ++});

hiLater((param2)=>{param2.age--});
hiLater((param2)=>{param2.age--});
hiLater((param2)=>{param2.age--});


console.dir(kim.age);

  //______________________________________________________________________________________
  function calcAge(birthYear) {
    const age = 2037 - birthYear;
  
    function printAge() {
      let output = `${AAA}, You are ${age}, born in ${birthYear}`;
      console.log(output);
  
      if (birthYear >= 1981 && birthYear <= 1996) {
        const AAA = 'kim';
        const str = `Oh, and you're a millenal, ${AAA}`;
        var millennial = true;
        console.log(str);
        function add(a, b) {
          return a + b;
        }
       output = 'New Output';
      }
      console.log(millennial);
      console.log(output); 
    }
    //console.log( add(3, 4))
  
    printAge();
    return age;
  }
  
  const AAA = 'wolfMan';
  
  calcAge(1991);
  //______________________________________________________________________________________
//______________________________________________________________________________________

// console.log(wolf);
//  console.log(age)
//  console.log(AAA)
// const AAA = 'AAA';

// let age = 'age';

// var wolf = 'wolfTemp';

//______________________________________________________________________________________

// function addDecl(a, b) {
//   return a + b;
// }
// var addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// console.log(addDecl(2,3))
// console.log(addExpr(2,3))
// console.log(addArrow(2,3))
//______________________________________________________________________________________

// if(!numProducts) addDecl()
// var numProducts = 10;

// function addDecl(a, b) {
//   console.log(`all Products deleted!`)
// }
//______________________________________________________________________________________

// class wolfTemp extends Object {
//   constructor(props) {
//     super(props);
//     this.age = props.age;
//     this.testFunc = function(){
//       (() =>{
//         console.log(this);
//     } )()
//     };
//   }
// }

// let jobob = new wolfTemp({ age: 52 });
// jobob.car = 'ford';
// let kim = { car: 'dodge' };
// kim.testFunc = jobob.testFunc

//  jobob.testFunc();
// kim.testFunc();

//______________________________________________________________________________________
// let micTemp = { age: 99 }
// console.log(this)
// let wolfTemp = function(){
//   console.log(this)
// }
// wolfTemp.call(micTemp)
// let kimTemp = ()=>{
//   console.log(this)
// }
// kimTemp()
//______________________________________________________________________________________
// var AAA = 'AAA';

// let wolfTemp = {
//   this: 47,
//   tempFunc: function () {
//     (() => {
//       console.log(this);
//     }).call();
//   },
// };
// wolfTemp.tempFunc();
//______________________________________________________________________________________
// let tempWolf = ()=>{
//   console.log(this)
// }

// let kim = {age: 22}

// kim.f = function(){
//   console.log(this)
//   tempWolf()} ;

// kim.f()

//______________________________________________________________________________________
class wolfTemp extends Object {
    constructor(props) {
      super(props);
      this.age = props.age;
      this.testFunc = function(){
        (() =>{
          console.log(this);
      } )()
      };
    }
  }
  
  let jobob = new wolfTemp({ age: 52 });
  jobob.car = 'ford';
  let kim = { car: 'dodge' };
  kim.testFunc = jobob.testFunc
  
   jobob.testFunc();
  kim.testFunc();

  //______________________________________________________________________________________


var ABB = function(){
  
    console.log(this)
    let ABC = ()=>{
      console.log(this )
    }
    ABC()
  
  if(true){
  
  
  }
  
  }
  
  let AAAcar = 'AAAcar'
  
  ABB.call(ABB)


  //______________________________________________________________________________________
var firstName = 'kim313';
{
  let banana = 'banana313';
  var wolfMan = {
    firstName: 'wolfMan',
    year: 1981,
    calcAge: function () {
     
      let wolfTemp = ()  =>{
        if (this.year >= 1981 && this.year <= 1996){
          return ` and you are a millennial! `;
        }else {return null}
         
      };
      console.log(`${2037 - this.year} ${banana} ${wolfTemp() || ''}`);
    },
    greet: () => {
      console.log(`hay ${this.firstName}  ${banana} `);
    },
  };
}

// wolfMan.calcAge();

//______________________________________________________________________________________

let jojo = {
  firstName: 'jojo',
  year: 2036,
};
jojo.calcAge = wolfMan.calcAge;

// jojo.calcAge()

function wolfTest(){
  console.log(this)
}
// wolfTest()
//______________________________________________________________________________________


var addExpr = function (...rest) {
  console.log(rest)
  let temp = [...arguments]
  return rest.reduce((total, number)=>{ return total + number}, 0)
 
};




console.log(addExpr(2,3,4,5,6 ,7,2,3,4,5,6 ,7))



// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic', undefined],

  starterMenu: [
    'Focaccia',
    'Bruschetta',
    'Garlic Bread',
    'Caprese Salad',
    undefined,
  ],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (mainInd, staterInd, categoriesInd) {
    return [
      this.mainMenu[mainInd],
      this.starterMenu[staterInd],
      this.categories[categoriesInd],
    ];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 23,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderWolf: function (props) {
    let tempArr = [];

    for (const day in props) {
      const { open, close } = props[day];
      tempArr.push(open);
      tempArr.push(close);
    }
    return tempArr;
  },
  orderDelivery: function ({
    address,
    mainIndex,
    starterIndex,
    time = starterIndex ?? 'when it"s ready',
  }) {
    console.log(time);
    console.log(address);
    console.log(mainIndex);
    console.log(starterIndex);
  },
  orderPasta: function (AA, ...rest) {
    console.log(AA);
    console.log(rest);
    // console.log(...arguments)
  },

  orderWolf: function (param1, param2, param3, param4, param5) {
    let kimTemp =
      param1 ?? ((param2 && param3) || param4 || ('banana' && param5)) ?? 777;
    console.log(
      param1 ?? ((param2 && param3) || param4 || ('banana' && param5)) ?? 777
    );
  },
  orderPizza: function (param1, ...rest) {
    let temp = '';
    rest.forEach((i) => {
      temp += ` and ${i}`;
    });

    console.log(`ordeing pizza with ${param1}${temp}!`);
  },
};

//______________________________________________________________________________________

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
  'Substitute players': ['wolf', 'kim', 'mic'],
  odds: {
    team1: 10.33,
    x: 3.25,
    team2: 9.33,
  },
};

let {
  players: [players1, players2],
  'Substitute players': joBob,
  odds: { team1, x: draw, team2 },
  score,
  scored,
} = game;

let [gk, ...fieldPlayers] = players1;

const allPlayers = [...players1, ...players2];

let players1Final = [...players1, ...joBob];

function printGoals(...restPlayers) {
   console.log(...restPlayers)
}
 printGoals(...scored, `And the fanle score: ${score}`, );


// team1 < team2  && console.log('team1 will win!')
// team1 > team2  && console.log('team2 will win!')
// team1 === team2  && console.log('it will be a draw!')
//______________________________________________________________________________________

let wolfFunc3 = (day, temp)=>{
  temp === 'closed' && console.log(`On ${day} we are ${temp}`)
  if (temp === 0){
    console.log(`on ${day}, we open 24 Houres`) 
    return
  } 
 
  temp === 'closed' || console.log(`on ${day}, we open at ${temp}`) 
}

for (const day of weekdays) {
  let temp = restaurant.openingHours[day]?.open ?? 'closed';
  wolfFunc3(day, temp)
}
//______________________________________________________________________________________
'use strict';

const starWars = {
  Title: 'Star Wars',
  imageURL: './free.png',
  rating: '5',
  id: Math.random(),
};

const wolmanJake = {
  Title: 'wolfman jack',
  imageURL: './free.png',
  rating: '5',
  id: Math.random(),
};
const Swimming = {
  Title: 'Swimming',
  imageURL: './free.png',
  rating: '5',
  id: Math.random(),
};
const jalapeño = {
  Title: 'jalapeño',
  imageURL: './free.png',
  rating: '5',
  id: Math.random(),
};

let MOVIES = [];
let YES = document.getElementById('yes');
const MOVIE_LIST_ELE = document.getElementById('movie-list');

const BACKDROP_TOGGLE_ELE = document.querySelector('#backdrop');

const ADD_MODLE_ELE = document.getElementById('add_modal');

const TOGGLE_ADD_MOVIE_HANDLER = () => {
  ADD_MODLE_ELE.classList.toggle('visible');
};
const HEADER_BUTTON_CLICK = () => {
  TOGGLE_ADD_MOVIE_HANDLER();
  TOGGLE_BACKDROP();
};
const TOGGLE_BACKDROP = () => {
  BACKDROP_TOGGLE_ELE.classList.toggle('visible');
};
const BACKDROP_CLICK = () => {
  if (ADD_MODLE_ELE.classList.contains('visible')) {
    TOGGLE_ADD_MOVIE_HANDLER();
  } else if (DELETE_MODAL.classList.contains('visible')) {
    TOGGLE_DELETE_MODAL();
  }
  TOGGLE_BACKDROP();
};
const CANCEL_ADD_MOVIE_HANDLER = () => {
  TOGGLE_ADD_MOVIE_HANDLER();
  CLEAR_INPUT_HANDLER();
  TOGGLE_BACKDROP();
};
const HEADER_BUTTON_ELE = document.body.children[3].querySelector('button');

HEADER_BUTTON_ELE.addEventListener('click', HEADER_BUTTON_CLICK);

const CANCEL_BUTTON_ELE = ADD_MODLE_ELE.querySelector('.btn.btn--passive');
CANCEL_BUTTON_ELE.addEventListener('click', CANCEL_ADD_MOVIE_HANDLER);

BACKDROP_TOGGLE_ELE.addEventListener('click', BACKDROP_CLICK);

const ADD_MOVIE_BUTTON_ELE = ADD_MODLE_ELE.lastElementChild.lastElementChild;

const MOVIE_TITLE = ADD_MODLE_ELE.querySelector('[name=title]');
const IMAGE_URL = ADD_MODLE_ELE.querySelector('[name=image-url]');
const RATING = ADD_MODLE_ELE.querySelector('[name=rating]');
const SECTION = document.querySelector('section');
const DELETE_MODAL = document.querySelector('#delete-modal');
const NO_CANCEL = document.querySelectorAll('.btn--passive')[1];
const TOGGLE_DELETE_MODAL = () => {
  DELETE_MODAL.classList.toggle('visible');
};

const NO_CANCEL_HANDLER = () => {
  TOGGLE_DELETE_MODAL();
  TOGGLE_BACKDROP();
};
NO_CANCEL.addEventListener('click', NO_CANCEL_HANDLER);

const TOGGLE_SECTION = () => {
  if (MOVIES.length === 0) {
    SECTION.style.display = 'block';
  } else if (MOVIES.length > 0) {
    SECTION.style.display = 'none';
  }
};

function CLEAR_INPUT_HANDLER() {
  MOVIE_TITLE.value = 'Forrest Gump';
  IMAGE_URL.value = './free.png';
  RATING.value = '5';
}

function YES_CLICK(ELE) {
  let listItems = MOVIE_LIST_ELE.children;
  for (let li of listItems) {
    if (li.id == ELE.id) {
      li.remove();
    }
  }

  let tempArr = MOVIES.filter((movie) => {
    return movie.id !== ELE.id;
  });
  MOVIES = [...tempArr];

  RENDER_MOVIE_HANDLER(MOVIES);
  //   listItem.remove();
  TOGGLE_DELETE_MODAL();
  TOGGLE_BACKDROP();
}

const REMOVE_BUTTON_HANDLER = (ELE) => {
  YES.replaceWith(YES.cloneNode(true));
  YES = document.getElementById('yes');

  YES.addEventListener('click', YES_CLICK.bind(null, ELE));
  // yes.addEventListener('click', YES_CLICK);

  TOGGLE_DELETE_MODAL();
  TOGGLE_BACKDROP();
};

const RENDER_MOVIE_HANDLER = (MOVIES) => {
  let dF = new DocumentFragment();

  MOVIES.forEach((ELE) => {
    let listItem = document.createElement('li');
    listItem.id = ELE.id;
    listItem.classList.add('movie-element');
    let removeButton = document.createElement('button');
    removeButton.addEventListener('click', () =>
      REMOVE_BUTTON_HANDLER(ELE, listItem)
    );
    removeButton.textContent = 'Delete!';

    listItem.innerHTML = `<div >
    <p>Tittle ${ELE.Title} </p>
    <p>Rating ${ELE.rating} stars</p>
    <img src="${ELE.imageURL}" class='img movie-element__image '></img>
    
    </div>`;
    listItem.append(removeButton);
    dF.append(listItem);
  });
  MOVIE_LIST_ELE.replaceChildren(dF);

  CLEAR_INPUT_HANDLER();
  TOGGLE_SECTION();
};

const ADD_MOVIE_HANDLER = () => {
  let Title = MOVIE_TITLE.value;
  let imageURL = IMAGE_URL.value;
  let rating = RATING.value;
  let id = Math.random();

  if (Title.trim() === '') {
    alert('must enter movie title');
    return;
  } else if (+rating > 5 || +rating < 1) {
    alert('must enter valid movie rating');
    return;
  }

  const newMovie = { Title, imageURL, rating, id };

  MOVIES.push(newMovie);

  RENDER_MOVIE_HANDLER(MOVIES);
  TOGGLE_ADD_MOVIE_HANDLER();
  TOGGLE_BACKDROP();
};

ADD_MOVIE_BUTTON_ELE.addEventListener('click', function testName() {
  ADD_MOVIE_HANDLER();
});

RENDER_MOVIE_HANDLER(MOVIES);

//______________________________________________________________________________________
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const AAAkimTest = 'AAAkimTest';
let jobob = { aa: 'AA', bb: 'BB' };
let mick;
let aa;
const openingHours = {
  thu: {
    open: 12,
    close: 99,
  },
  fri: {
    open: 11,
    close: 99,
    wolfMan: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic', 'kimBo'],
  },
  sat: {
    open: 0, // Open 24 hours
    close: 88,
  },
};

const restaurant = {
  AAAkimTest,
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic', 'kimBo'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,

  orderPizza(...items) {
    function tempFunc(rest) {
      let tempItems = ``
      for (const test of rest) {
       
        tempItems += ` ${ test}`
      }
      return tempItems
    };
    let message = ` ordering pizza with${tempFunc(items)}!`;
    console.log(message);
    return message;
  },
};

restaurant.orderPizza?.('cheese', 'mushrooms', 'Bacon');
//___________________________________________________
// let tempObj = {
//   camel: 3,
//   duck: 5,
//   wolf: 10,
//   ant: 0,
//   bison: 0,
//   Zebra: 0,
// };



// for(const key in tempObj){
//   let temp = beasts.indexOf(key)
//   let number = tempObj[key]

//   number && console.log(`the zoo has ${tempObj[key]} ${beasts[temp]}'s`)
//   number || console.log(`the zoo has no ${beasts[temp]}'s`)
// }
// for(const key of Object.keys(tempObj)){
//   let temp = beasts.indexOf(key)
//   let number = tempObj[key]

//    number && console.log(`the zoo has ${tempObj[key]} ${beasts[temp]}'s`)
//   number || console.log(`the zoo has no ${beasts[temp]}'s`)
// }

// let [, , , , , , [,,,,,{house:{rooms:{bedRooms:[mich]}}}]] = game.scored;


// console.log(mich);


// for (const [day, { open, close }] of Object.entries(openingHours)) {
//   open &&
//     console.log(
//       `On ${day}, We open at ${open} and close at ${close} `
//     );
//   open ?? console.log(`On ${day}, we are not open! `);

//   open ||
//     (open === 0 && console.log(`On ${day}, we open 24 Houres! `));
// }


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

// for (const [key ,player] of game.scored.entries()) console.log(`Goal ${key +1}: ${player}`)

//___________________________________________________
// let average = 0;
// let odds = Object.values(game.odds);
// for (const odd of odds) average += odd;
// console.log(average / odds.length);

//___________________________________________________

// for (const [team, odd] of Object.entries(game.odds)) {
//   // console.log(
//   //   `Odd of ${(game[team] && `victory ` + `${game[team]}`) ?? `draw`}: ${odd}`
//   // );
//   console.log(
//     `Odd of ${(team === `x` && `draw`) || `victory ` + `${game[team]}`}: ${odd}`
//   );
// }

//___________________________________________________
let scorers = {};

for (const player of game.scored) {


  scorers[player] ? ++scorers[player] : (scorers[player] = 1);



   !scorers[player] ? scorers[player] ??= 1 : ++scorers[player];
  
  (!scorers[player] && (scorers[player] ??= 1)) || ++scorers[player];

   (scorers[player] && ++scorers[player]) || (scorers[player] = 1);

  
}

console.log(scorers);


//______________________________________________________________________________________
// const kim1 = {
//   name: 'kim',
//   age: 22,
//   house: { address: '612 miner', rooms: { bathRooms: [2], bedRooms: [444] } },
// };
// const kim2 = kim1;
// let { ...kim3 } = kim2;
// const beastArr = ['wolf', 'kim', 'banana', 'banana', 'banana', '', ' '];
// function wolfMan7() {
//   console.log(this);
//   return this;
// }

// let wolfMap = new Map();

// const rest = new Map();
// rest.banana = 'banana212'
// rest.wolfMan8 = function (param1, param2) {
//  this.set(param1, param2)

// };

// rest.set('name', 'kim"s');
// rest.set(1, 'Detroit');
// rest.set(2, 'Ann arbor');
// rest
//   .set('categories', restaurant.categories)
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'we are open :-)')
//   .set(false, 'we are closed :-(');

// const time = 21;

// const testArr1 = [1, 2];

// rest.set([1, 2], 'wolfTest313');
// rest.set(wolfMap, wolfMap);

//   rest.set(document.querySelector('h1'), "Favorite Movies")

// d(rest)
// l(rest.wolfMan8('apple', 'apple'))
//  for (const value of rest) console.log(value);

// const qArr = [
//   ['question', 'what is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'correct :-)'],
//   [false, 'wrong try again :-('],
// ];


// const q = new Map(qArr);

// let wolfFunc9 = function (param1, param2) {
//    this.set(param1, param2);
 
// }.bind(q);

// q.set('kimFunc9', wolfFunc9);

// q.kimFunc9 = wolfFunc9

// let kimFunc9 = q.get('kimFunc9');

//  q.kimFunc9('attribute', {name: 'attribute'});



// d(q);



// console.log([...q])
// console.log([...q.entries()])
// console.log(q.keys())
// console.log(q.values())

// const answer = +(prompt('your answer'));

// l(q.get('question'));

// l(q.get(q.get('correct') === answer))

//  l([...q])

//___________________________________________________


//______________________________________________________________________________________

// const kim1 = {
//   name: 'kim',
//   age: 22,
//   house: { address: '612 miner', rooms: { bathRooms: [2], bedRooms: [444] } },
// };
// const kim2 = kim1;
// let { ...kim3 } = kim2;
// const beastArr = ['wolf', 'kim', 'banana', 'banana', 'banana', '', ' '];
// function wolfMan7() {
//   console.log(this);
//   return this;
// }





// const qArr = [
//   ['question', 'what is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'correct :-)'],
//   [false, 'wrong try again :-('],
 
// ];

// const q = new Map(qArr);



// q.set('kimFunc9', function (param1,) {

//   if( this.has(param1)){
//     return this.get(param1) 
//   }
//  l(`not found`)
// }.bind(q));

// q.set('attribute',function(param1){
//   alert(this.get(param1)) 
//   }.bind(q))

// let kimFunc9 = q.get('kimFunc9');



// kimFunc9('attribute')('question')
// kimFunc9('attribute')(3)

// console.log([...q]);
// console.log([...q.entries()]);
// console.log(q.keys());
// console.log(q.values());

// const answer = +prompt('your answer');

// l(q.get('question'));

// l(q.get(q.get('correct') === answer));

// l([...q]);
//______________________________________________________________________________________
/* 
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);


//  l([...new Set(gameEvents.values())])

//  l(gameEvents.delete(64))
//  l(gameEvents.get(64))



 

// l(`An event happened, on average, every ${[...gameEvents.keys()].pop()  / gameEvents.size } minutes`)
 

for (const [min, event] of gameEvents.entries()) {
  // l(`[${min <= 45?`first` : 'second'} half] ${min}:  ${event} `);
  l(`[${(min <= 45 && `first`) || 'second'} half] ${min}:  ${event} `);
}
//______________________________________________________________________________________
//______________________________________________________________________________________
let airline1 = 'Crackhead airlines Detroit';
let airline2 = airline1;

let plane = 'A320';

// l(Number(plane[1]) + +plane[1])
// l('B707'.length)

// l(airline1.indexOf('C'))
// l(airline1.indexOf('C'))
// l(airline1.lastIndexOf('r'))
// l(airline1.lastIndexOf('r'))
// l(airline1.indexOf('Detroit'))
// l(airline1.indexOf('Detroit'))
//l( typeof plane)

// l(airline1.slice(airline1.lastIndexOf('a'), airline1.lastIndexOf(' ')))

// l(airline1.slice(airline1.lastIndexOf('a'), -8))
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
  let formula = index % 4;

  formula === 0
    ? l(`${seat} is a left side window seat! `)
    : formula === 1
    ? l(`${seat} is a left side aisle seat! `)
    : formula === 2
    ? l(`${seat} is a right side aisle seat! `)
    : formula === 3
    ? l(`${seat} is a right side window seat! `)
    : formula === -1
    ? l(`${seat} not on this flight! `)
    : null;

  // (formula === 0 && l(`${seat} is a left side window seat! `)) ||
  //   (formula === 1 &&  l(`${seat} is a left side aisle seat! `)) ||
  //   (formula === 2 &&  l(`${seat} is a right side aisle seat! `)) ||
  //   (formula === 3 &&  l(`${seat} is a right side window seat! `)) ||
  //   (formula === -1 &&  l(`${seat} not on this flight! `))

  // switch (formula) {
  //   case 0:
  //     l(`${seat} is a left side window seat! `);
  //     break;
  //   case 1:
  //     l(`${seat} is a left side aisle seat! `);
  //     break;
  //   case 2:
  //     l(`${seat} is a right side aisle seat! `);
  //     break;
  //   case 3:
  //     l(`${seat} is a right side window seat! `);
  //     break;
  //   case -1:
  //     l(`${seat} not on this flight!`);
  //     break;
  //   default:
  //     l(` error something went wrong`);
  //     break;
  // }
};

isWindowSeat(`Seat: AA`, airPlaneSeats);
isWindowSeat(`Seat: AB`, airPlaneSeats);
isWindowSeat(`Seat: AC`, airPlaneSeats);
isWindowSeat(`Seat: AD`, airPlaneSeats);
isWindowSeat(`Seat: AE`, airPlaneSeats);
isWindowSeat(`Seat: AF`, airPlaneSeats);
isWindowSeat(`Seat: AG`, airPlaneSeats);
isWindowSeat(`Seat: AH`, airPlaneSeats);
isWindowSeat(`Seat: AI`, airPlaneSeats);
isWindowSeat(`Seat: AJ`, airPlaneSeats);
isWindowSeat(`Seat: AK`, airPlaneSeats);
isWindowSeat(`Seat: AL`, airPlaneSeats);
isWindowSeat(`Seat: AM`, airPlaneSeats);
isWindowSeat(`Seat: Ao`, airPlaneSeats);
//______________________________________________________________________________________
