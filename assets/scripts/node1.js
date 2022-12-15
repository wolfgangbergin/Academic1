'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic', 'kimBo'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
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
  },
  orderPizza: function (param1, param2, param3, param4, param5) {
  
    console.log(
      'kimTemp'
    );
  },
};
restaurant.orderPizza()

// restaurant.mainMenu.push(restaurant.openingHours);

// let [, , , { thu, fri, sat }] = restaurant.mainMenu;

// let {open: O, close: C} = fri;
// console.log(O,  C)

// console.log(open, close, styles );
// [styles, close, open, ] = [open, close, styles];
// console.log(open, close, styles);

// let [AAA, BBB, CCC] = restaurant.mainMenu;
// console.log(AAA, BBB, CCC);
// [CCC, BBB, AAA] = [AAA, BBB, CCC];
// console.log(AAA, BBB, CCC);

// function tempJo1({...param1}){
//   console.log(param1)
//   }
// function tempJo2(...param1){
//   let wolfTemp = param1[0]

//   let {age, ...rest} = wolfTemp

//   console.log(rest);
//   console.log(age);

//   }
// const APPLE = 'apple'
// let kim = { fName: 'kimbobo', lName: 'price', age: 90, address: '612 miner' };
// const obj2 = { AA: 'aa', BB: 'bb', CC: 'cc' };

// const arr = ['aa','bb','cc']

// let {fName, ...rest}   = kim

//  tempJo1(fName, )
// tempJo2(kim)
