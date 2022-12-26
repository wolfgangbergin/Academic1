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

const AAAkimTest = 'AAAkimTest';
let jobob = { aa: 'AA', bb: 'BB' };
let mick;

function wolfFunc4(param1) {
  console.log('wolfFunc4Ran');
  return param1;
}
const openingHours = {
  thu: {
    open: 12,
    close: 99,
  },
  fri: {
    open: 11,
    close: 88,
    wolfMan: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic', 'kimBo'],
  },
  sat: {
    open: 0, // Open 24 hours
    close: 77,
  },
  sun: {
    banana: 'banana',
    apple: 'apple',
  },
};

const restaurant = {
  AAAkimTest,
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic', 'kimBo'],
  starterMenu: [
    'Focaccia',
    'Focaccia',
    'Bruschetta',
    'Garlic Bread',
    'Caprese Salad',
    'Garlic Bread',
    'Garlic Bread',
  ],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,

  orderPizza(...items) {
    function tempFunc(rest) {
      let tempItems = ``;
      for (const test of rest) {
        tempItems += ` ${test}`;
      }
      return tempItems;
    }
    let message = ` ordering pizza with${tempFunc(items)}!`;

    return message;
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
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// l(game.scored.slice(-1))
//______________________________________________________________________________________
//______________________________________________________________________________________
//______________________________________________________________________________________
let airline1 = 'Crackhead airlines Detroit';
let airline2 = airline1;

let plane = 'A320';



// const correctName = function (param1) {
//   let temp1 = param1.toLowerCase();

//   let temp2 = temp1[0].toUpperCase();

//   return temp2 + temp1.slice(1);
// };


// l(correctName(`kIm`))

//______________________________________________________________________________________

// const badEmail = '                    Wolf  Gang@yaHoo.Com   \n'
// const correctEmail = (param1, )=>{
//  return param1.toLocaleLowerCase().trim().replace(/ /g, "")

// }

// l(correctEmail('   kIm  @ Gmail.com \n', ))
//______________________________________________________________________________________

// const priceGBP = '288,97£'

// const priceUSD = priceGBP.replace('£', '$').replace(',','.')
// l(priceUSD)
//______________________________________________________________________________________


// const Message = ` all passengers come to boarding door 23. Boarding door 23!`
// l(Message.replace('door', 'gate'))
// l(Message.replace(/door/g, 'gate'))
//______________________________________________________________________________________
// const plain = 'Airbus A320neo'

// // l(plain.includes('neo'))
// // l(plain.startsWith('Airbus'))
 

// l(plain.startsWith('Airbus') && plain.endsWith('neo') )

//______________________________________________________________________________________

const checkBaggage = function(param1){

return param1.includes('explosives')
};





l(checkBaggage('some normal stuff and some explosives'))
l(checkBaggage('I have a laptop, some food and a pocket knife'))
l(checkBaggage('I have a laptop, some food and a pocket knife'))
l(checkBaggage('I have a laptop, some food and a pocket knife'))






















