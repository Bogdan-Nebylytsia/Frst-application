'use strict';

const numberOfFilms = +prompt("How many films have you already watched?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (+personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (+personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else if (+personalMovieDB.count > 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}

for (let i = 0; i < 2; i++) {
    const a = prompt('One of the last movies you watched?', ''),
          b = prompt('How much would you rate him?', '');
    
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
          
}


console.log(personalMovieDB);