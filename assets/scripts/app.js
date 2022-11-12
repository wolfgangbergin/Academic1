const ADD_MODLE = document.querySelector('#add_modal')

const ADD_MOVIE = ()=>{
   
    ADD_MODLE.classList.toggle('visible')
}
const ADD_MOVIE_BUTTON = document.querySelector('#ADD_MOVIE_BUTTON')
ADD_MOVIE_BUTTON.addEventListener('click', ADD_MOVIE )