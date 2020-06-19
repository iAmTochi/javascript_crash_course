// const name = 'John';
// const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x= null;
// const y = undefined
// let z;

// console.log(typeof z);



// const name = 'John';
// const age = 30;

// // Concatenation
// console.log('My name is '+name+' and I am '+age);
// // Template String
// const hello = `My name is ${name} and I am ${age}`;
// console.log(hello)

// const s = 'Hello World!';
// console.log(s.split(' '));

// Arrays - variables that holds multiple values
// const fruits =  ['apples','oranges','pears'];
// fruits[3] = 'grapes';
// fruits.push('mangoes');
// fruits.unshift('strewberries');
// fruits.pop() ;

// console.log(Array.isArray('apples'));
// console.log(fruits.indexOf('oranges'));

// console.log(fruits);

// Object Literal
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies','sports'],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA'
//     }
// }
// person.email = 'john@gmail.com';
 

// const { firstName, lastName, hobbies, address:{city}} = person;
// console.log(person)

// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist appointment',
//         isCompleted: false
//     }
// ];

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

// Forloop
// for(let i = 0; i < todos.length; i++){
//     console.log(todos[i].text)
// }

// for(let todo of todos){
//     console.log(todo.text)
// }

// High order of arrays methods
// forEach, map, filters
// todos.forEach(function(todo){
//     console.log(todo.text)
// });

// const todoText = todos.map(function(todo){
//  return todo.text;
// });
// console.log(todoText);

// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted === true;
// }).map(function(todo){
//        return todo.text;
//     });

//     console.log(todoCompleted);

//I will start at 1:00:00 next time

// const addNums = (num1 = 2, num2 = 3) => {
//     return num1 + num2;
// }

// console.log(addNums(3,8))

//==============
// OOP
// =============

//Construcor function
// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
// }

  
// Class 
// class Person{
//     constructor(firstName, lastName, dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }

    
//     getBirthYear(){
//         return this.dob.getFullYear();
//     }

//     getFullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// // Instantiate Object
// const person1 = new Person('John', 'Doe', '01-24-1991');
// const person2 = new Person('Jane', 'Doe', '01-24-1986');
// console.log(person1.dob.getFullYear())
// console.log(person2)


//=============================
// The project
//===============================

//Single element
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('#my-form'));

//Multliple Selector
// console.log(document.querySelectorAll('.item'))
// console.log(document.getElementsByClassName('item'))

// const items = document.querySelectorAll('.item');
// items.forEach((items) => console.log(items))

// const ul = document.querySelector('.items');

// // ul.lastElementChild.remove()


// ul.firstElementChild.textContent = "Hello Tochi";
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = "<h1>Hello</h1>"

// const btn = document.querySelector('.btn');
// btn.style.background = 'purple';


// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (e) => {
//     e.preventDefault()
//     document.querySelector('#my-form').style.background = "#ccc"
// })

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myForm.addEventListener('submit', onSubmit)

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(()=> msg.remove(), 3000)
    } else {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);
        // clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
    
    
}