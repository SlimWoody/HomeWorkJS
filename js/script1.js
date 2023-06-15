// ---------------- Задача 1 ---------------------

let favoriteMovie = prompt('Введите Ваш любимый фильм: ');
let film = 'Матрица'; 
let film2 = 'Дрожь земли'

function myFavoriteMovie(favoriteMovie){
    if(film == favoriteMovie){
        alert('Отличный фильм, мне он тоже очень нравится!');
    } else if(film2 == favoriteMovie){
        alert('Лучший фильм того времени');
    } else{
        alert('Попробуте снова')
    }
}
myFavoriteMovie(favoriteMovie);