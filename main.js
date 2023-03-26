//переменные
// const userName = 'Bob';
// let age = 23;
//условные конструкции
// if(userName === 'Bob'){
//     alert(`Привет, ${userName}!`);
// } else {
//     alert(`Я тебя не знаю`)
// }
//циклы
// for (let index = 0; index < 3; index++) {
//     alert(index);
    
// }
//массив
// const array = ['a', 'b', 'c', 'd'];
// alert(array[0]); 

//объект (сущность)
// const user = {
//     name: 'Bob',
//     age: 23
// }
// alert(user.name);

//функция
// function getUser() {
//     const name = prompt('Твоё имя друг?', '');
//     const age = prompt('Сколько тебе лет?');
//     if(name) {
//         alert(`Привет, ${name}!`);       
//     }

//     return (
//         { name: name, age: age } 
//         )
// }

// const itUser = getUser();
// console.log(itUser);


const settings = {
    min: 0,
    max: 100,
    attempts: 10
}

//преобразовали в стрелочную функцию
const getRandomNumber = () => Math.round(Math.random() * 100);

function getUserName(params) {
    let condition = true;
    let name;
    while (condition) { //true
        name = prompt('Твоё имя, друг?', '');
        if(name){
            condition = false;
        } else {
            alert("Пиши, не выпендривайся");
        }
    }
    return name;
}

const userName = getUserName(); // то что функция вернёт мы хотим сохранить
const randomNumber = getRandomNumber();

function game(objSettings, number, name) {
    //создаём массив
    const answers = [];

    // приветствие
    alert(`Привет, ${name}!
    Я загадал число в интервале от ${objSettings.min} до ${objSettings.max}.
    У тебя есть ${objSettings.attempts} попыток отгадать его. Го?`)
    // цикл ответ-проверка
    for (let index = 0; index < objSettings.attempts; index++) {
        const answer = prompt('Давай свой варик', 'Введи число')
        answers.push(answer)
        if(answer > number) {
            alert(`Моё число меньше. 
            Осталось ${objSettings.attempts - index - 1} попыток
            ${answers.join()}`) //все наши ответы-массива склеивает в одну строку с помощью метода join()
        } else if(answer < number) {
            alert(`Моё число больше. 
            Осталось ${objSettings.attempts - index - 1} попыток
            ${answers.join()}`);
        } else {
            //ПОБЕДА!
            alert('You win!!!');
            return
        }
    }
    // проигрыш
    alert('Ты лузер! С тебя 10 баксов!!!')
}

game(settings, randomNumber, userName);
