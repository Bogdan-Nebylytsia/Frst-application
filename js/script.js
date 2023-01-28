'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function () {
        personalMovieDB.count = +prompt("How many films have you already watched?", '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many films have you already watched?", '');
        }
    },

    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('One of the last movies you watched?', ''),
                b = prompt('How much would you rate him?', '');
            
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    
    detectPersonalLevel: function () {
        if (+personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (+personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else if (+personalMovieDB.count > 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },

    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');

            if (genre === '' || genre == null) {
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach(function (item, i) {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },

    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    }
};