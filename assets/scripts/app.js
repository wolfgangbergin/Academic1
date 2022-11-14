const MOVIE_LIST_ELE = document.getElementById('movie-list');
const BACKDROP_TOGGLE_ELE = document.querySelector('#backdrop');
let starWars = { Title: 'Star Wars', imageURL: './free.png', rating: '5' };
let wolmanJake = { Title: 'wolfman jack', imageURL: './free.png', rating: '5' };
let  Swimming = { Title: 'Swimming', imageURL: './free.png', rating: '5' };
const MOVIES = [starWars, wolmanJake, Swimming ];

const ADD_MODLE_ELE = document.getElementById('add_modal');

const TOGGLE_ADD_MOVIE_HANDLER = () => {
  ADD_MODLE_ELE.classList.toggle('visible');
  TOGGLE_BACKDROP_HANDLER();
};

const TOGGLE_BACKDROP_HANDLER = () => {
  BACKDROP_TOGGLE_ELE.classList.toggle('visible');
  console.log('back drop')
};
const BACKDROP_CLICK_HANDLER = () => {
  TOGGLE_ADD_MOVIE_HANDLER();
 
};
const CANCEL_ADD_MOVIE_HANDLER = () => {
  TOGGLE_ADD_MOVIE_HANDLER();
  CLEAR_INPUT_HANDLER();
};
const HEADER_BUTTON_ELE = document.body.children[3].querySelector('button');

HEADER_BUTTON_ELE.addEventListener('click', TOGGLE_ADD_MOVIE_HANDLER);

const CANCEL_BUTTON_ELE = ADD_MODLE_ELE.querySelector('.btn.btn--passive');
CANCEL_BUTTON_ELE.addEventListener('click', CANCEL_ADD_MOVIE_HANDLER);

BACKDROP_TOGGLE_ELE.addEventListener('click', BACKDROP_CLICK_HANDLER);

const ADD_MOVIE_BUTTON_ELE = ADD_MODLE_ELE.lastElementChild.lastElementChild;

const MOVIE_TITLE = ADD_MODLE_ELE.querySelector('[name=title]');
const IMAGE_URL = ADD_MODLE_ELE.querySelector('[name=image-url]');
const RATING = ADD_MODLE_ELE.querySelector('[name=rating]');
const SECTION = document.querySelector('section');
const DELETE_MODAL = document.querySelector('#delete-modal')
const NO_CANCEL = document.querySelectorAll('.btn--passive')[1]
const TOGGLE_DELETE_MODAL = () =>{
    DELETE_MODAL.classList.toggle('visible')
}

const NO_CANCEL_HANDLER = ()=>{
    TOGGLE_DELETE_MODAL()
    TOGGLE_BACKDROP_HANDLER() 
}
NO_CANCEL.addEventListener('click', NO_CANCEL_HANDLER )

const TOGGLE_SECTION = () => {
  if (MOVIES.length === 0) {
    SECTION.style.display = 'block';
  }
  SECTION.style.display = 'none';
};

function CLEAR_INPUT_HANDLER() {
  MOVIE_TITLE.value = 'wolfman jack';
  IMAGE_URL.value = './free.png';
  RATING.value = '5';
}

const REMOVE_BUTTON_HANDLER = ()=>{
  
    DELETE_MODAL.classList.toggle('visible')
    TOGGLE_BACKDROP_HANDLER() 
}

const RENDER_MOVIE_HANDLER = (MOVIES) => {
  let dF = new DocumentFragment();

  MOVIES.forEach((ELE) => {
    let removeButton = document.createElement('button')
    removeButton.addEventListener('click', REMOVE_BUTTON_HANDLER);
    removeButton.textContent = 'Delete!'
    let listItem = document.createElement('li');
    listItem.classList.add('movie-element');
    
    listItem.innerHTML = `<div >
    <p>Tittle ${ELE.Title} </p>
    <p>Rating ${ELE.rating} stars</p>
    <img src="${ELE.imageURL}" class='img movie-element__image '></img>
    
    </div>`;
    listItem.append(removeButton)
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

  if (Title.trim() === '') {
    alert('must enter movie title');
    return;
  } else if (+rating > 5 || +rating < 1) {
    alert('must enter valid movie rating');
    return;
  }

  const newMovie = { Title, imageURL, rating };

  MOVIES.push(newMovie);

  RENDER_MOVIE_HANDLER(MOVIES);
  TOGGLE_ADD_MOVIE_HANDLER();
};

ADD_MOVIE_BUTTON_ELE.addEventListener('click', () => ADD_MOVIE_HANDLER());
