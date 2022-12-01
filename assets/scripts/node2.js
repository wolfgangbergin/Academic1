const flight = `F1234`;

const wolfman = {
  name: 'wolfman',
  passport: 16865,
};

const checkIn = (flightNum, passenger) => {
  flightNum = `F999`;
  passenger.name = `Mr.` + passenger;

  passenger.passport === 16865 ? console.log('success'):console.log(` terrorist`)
};

checkIn(flight, wolfman);


const newPassport = (person)=>{
    person.passport = Math.trunc(Math.random() * 10000000)
}