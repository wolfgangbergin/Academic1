let starWars = {
  Title: 'Star Wars',
  imageURL: './free.png',
  rating: '5',
  id: Math.random(),
};
let wolmanJake = {
  Title: 'wolfman jack',
  imageURL: './free.png',
  rating: '5',
  id: Math.random(),
};
let Swimming = {
  Title: 'Swimming',
  imageURL: './free.png',
  rating: '5',
  id: Math.random(),
};
let jalapeño = {
  Title: 'jalapeño',
  imageURL: './free.png',
  rating: '5',
  id: Math.random(),
};
//let MOVIES = [starWars, wolmanJake, Swimming, jalapeño];
let MOVIES = [];

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

let YES = document.getElementById('yes');
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
