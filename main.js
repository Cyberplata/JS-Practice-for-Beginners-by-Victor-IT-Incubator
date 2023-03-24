//переменные
const userName = 'Bob';
let age = 23;
//условные конструкции
if(userName === 'Bob'){
    alert(`Привет, ${userName}!`);
} else {
    alert(`Я тебя не знаю`)
}
//циклы
for (let index = 0; index < 3; index++) {
    alert(index);
    
}
//массив
const array = ['a', 'b', 'c', 'd'];
alert(array[0]); 

//объект (сущность)
const user = {
    name: 'Bob',
    age: 23
}
alert(user.name);

//функция
function getUser() {
    const name = prompt('Твоё имя друг?', '');
    const age = prompt('Сколько тебе лет?');
    if(name) {
        alert(`Привет, ${name}!`);       
    }

    return (
        { name: name, age: age } 
        )
}

const itUser = getUser();
console.log(itUser);