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

function getRandomNumber() {
    const number = Math.round(Math.random() * 100);
    return number;
}

function getUserName(params) {
    let condition = true;
    let name;
    while (condition) { //true
        name = prompt('Твоё имя, друг?', '');
        if(name){
            condition = false;
        }
    }
    return name;
}

getUserName();