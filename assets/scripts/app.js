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

// restaurant.orderPizza && restaurant.orderPizza('cheese', 'mushrooms', 'sausage',  'Bacon', 'pineapple')

let tempWolf = function (price, tax, description) {
  tax = tax ?? 0.05;
  description = description ?? `default item`;
  const total = price * (1 + tax);
  console.log(`${description} with tax: $${total}`);
};

tempWolf(100, 0, '');
// console.log(3 || 'wolf')
// console.log(''||'wolf')
// console.log(true||0)
// console.log(undefined||null)
// console.log(undefined||null||0||NaN||false||''||null||'wolf')

// console.log(0 || false || undefined || '' || 'banana');
// console.log(0 && 'banana' && 7777 && 313 && true);
// console.log(null ?? undefined ?? restaurant.kim ?? restaurant.wolf ?? 'banana');

// console.log(true && 'banana' && 7777 && 313 && restaurant.wolf &&'wolf');

// const letterArr = ['a', 'b', 'c', 'd'];
// restaurant.orderPizza(undefined, 'wolf', false, false, null);

// const newArr = [1,2,3, ...tempArr]

// const [ ...others] = [1,2,3, ...tempArr]
// let [pizza, Pasta, Risotto, ...banana ] = [...restaurant.mainMenu, ...restaurant.starterMenu,]
// console.log(pizza,  Pasta, Risotto, banana)
// console.log( banana)
// sat,
// let { sat, ...weekDays} = restaurant.openingHours

// console.log( sat,)
// console.log( weekDays)
//  restaurant.orderPasta(...letterArr, ...newArr)

// const wolfMan = 'wolfMan'

// const newMenu = [...restaurant.mainMenu, 'wolfMan', ...tempArr]

// const newResteurant = {firstYear:1994, ...restaurant, ...wolfMan}

// console.log(newResteurant)
// console.log(restaurant)

// const newArr = [4,5,6, ...tempArr]
// let arr = [1,2,3,4]
// let copy = Object.create(restaurant)
// console.log(copy)

// restaurant.orderDelivery({
//  time: undefined,
//   address: '612 miner',
//   mainIndex: 2,
//   starterIndex: null,
// });

// console.log(restaurant.orderWolf(restaurant.openingHours))

// let { openingHours: hours, name, categories: categoriesWolf } = restaurant;
// console.log(hours);
// let {menu = 'wolfTES',starterMenu: starter = []} = restaurant
// console.log(starter)
// console.log(menu)
// const {banana = 'banana', categories: styles = []} =restaurant

// console.log(banana)
// console.log(styles)

//: {thu:{open, close}, fri, sat}

//  let { openingHours, name, categories: categoriesWolf } = restaurant;

//  let {thu:{open: o, close: c}, fri, sat} = openingHours

//  console.log(o,  c);

// const kim = { firstName: 'kim313', lastName: 'price', age: 22 };

// const kim2 = Object.create(kim, {});

// const kim3 = Object.create(kim2, {
//   job:{
//     configurable:true,
//     writable:true,
//     enumerable:true,
//     value: 'roofer'

//   },
//   Hobbies:{
//     configurable:true,
//     writable:true,
//     enumerable:true,
//     value:'computers'
//   }
// });

// console.log(kim3.Hobbies);
