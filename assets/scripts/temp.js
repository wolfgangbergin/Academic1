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

