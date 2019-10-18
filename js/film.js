const genre_1 = 'фантастика'
const genre_2 = 'боевик'
const genre_3 = 'приключения'
const genre_4 = 'фентези'
const genre_5 = 'драма'
const genre_6 = 'комедия'

let start_film_1 = '10:00'
let start_film_2 = '20:00'
let start_film_3 = '22:00'
let start_film_4 = '01:00'

let film_name_1 = 'Человек-паук'
let film_name_2 = 'Собачья жизнь 2'
let film_name_3 = 'История игрушек 4'
let film_name_4 = 'Люди в черном: Интернешнл'

element_title_film_1 = document.getElementById('title-film-1')
element_title_film_2 = document.getElementById('title-film-2')
element_title_film_3 = document.getElementById('title-film-3')
element_title_film_4 = document.getElementById('title-film-4')

element_genre_1 = document.getElementById('genre-film-1')
element_genre_2 = document.getElementById('genre-film-2')
element_genre_3 = document.getElementById('genre-film-3')
element_genre_4 = document.getElementById('genre-film-4')

element_start_film_1 = document.getElementById('start-film-1')
element_start_film_2 = document.getElementById('start-film-2')
element_start_film_3 = document.getElementById('start-film-3')
element_start_film_4 = document.getElementById('start-film-4')

element_title_film_1.innerHTML = film_name_1
element_title_film_2.innerHTML = film_name_2
element_title_film_3.innerHTML = film_name_3
element_title_film_4.innerHTML = film_name_4

element_genre_1.innerHTML = genre_1
element_genre_2.innerHTML = genre_2 + ', ' + genre_3
element_genre_3.innerHTML = genre_1 + ', ' + genre_2
element_genre_4.innerHTML = genre_6 + ', ' + genre_1

element_start_film_1.innerHTML = start_film_1
element_start_film_2.innerHTML = start_film_2
element_start_film_3.innerHTML = start_film_3
element_start_film_4.innerHTML = start_film_4