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
