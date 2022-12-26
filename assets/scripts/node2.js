'use strict'


const AAAkimTest = 'AAAkimTest';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

let jobob = {aa: 'AA', bb:'BB'};
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
    console.log(...items);
  },
};




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
