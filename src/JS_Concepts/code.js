//**********************************HISTORY OF API******************************************************

// const url='https://api.github.com/users/devina-agr';
// const xhr=new XMLHttpRequest();
// xhr.open('GET',url);
// xhr.onreadystatechange=(()=>{
//     console.log(xhr.responseText);
//     if(xhr.readyState===4){
//         const data=JSON.parse(xhr.responseText);
//         console.log(data.name);
//     }
// })
// xhr.send();


//*********************************PROMISE************************************************************


// const promise=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log('User is here!');
//         resolve();
//     },1000)
// }).then(()=>{
//     console.log('Promise is resolved');
// }).catch(()=>{
//     console.log('Promise is rejected');
// });


//*********************************PROMISE WITH PARAMETER**********************************************

// const promise1 =new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log('User is here!');
//         resolve({
//             username:'devina',
//             age:20,
//             password:'1234'
//         });
//     },1000)
// }).then((user)=>{
//     console.log(user);
//     return user.password;
// }).then((password)=>{
//     console.log(password);
// }).catch(()=>{
//     console.log('Promise is rejected');
// }).finally(()=>{
//     console.log('Promise is done');
// });



//+++++++++++++++++++++++++++++++++++++++++async await++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const promise =new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let error=true;
//         if(!error){
//             resolve({
//                 username:'devina',
//                 age:20,
//                 password:'1234'
//             });
//         }else{
//             reject('Error occured');
//         }
//     },1000)
// })
// async function consume(){
//     try{
//         const response=await promise;
//         console.log(response);
//     }catch(e){
//         console.log(e);
//     }
// }
// consume();

//+++++++++++++++++++++++++++++++++++++++++FETCH API++++++++++++++++++++++++++++++++++++++++++++++++++++++
//by try catch

// async function getUsers(){
//
//     try{
//         const res= await fetch('https://jsonplaceholder.typicode.com/users');
//         const data=await res.json();
//         console.log(data);
//     }catch(e){
//         console.log(e);
//     }
// }
// getUsers();

//by then catch

//
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((e)=>{
//         console.log(e);
//     });

//+++++++++++++++++++++++++++++++++++++++++Prototype++++++++++++++++++++++++++++++++++++++++++++++++++++++

//prototype is a property of a function that points to an object
//prototype is used to add new properties to the object
//prototype is used to add new methods to the object


// function user(username, password) {
//     this.username = username;
//     this.password = password;
//     console.log(this.username);
//     console.log(this.password);
// }
// user.prototype.increment=function (){
//     console.log(++this.password);
// }
//
// // Object.prototype.increment=function (){
// //     console.log('increment');
// // }
// const p= new user("john", "1234");
// p.increment();

// user.prototype.login = function () {
//     if (!this.username) {
//         console.log("missing username");
//         return;
//     }
//     return `${this.username} just loged in!`;
// }




//+++++++++++++++++++++++++++++++++++++++++Object.create++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Object.create is used to create a new object with the prototype of the object passed as a parameter
//it is just like inheritance in OOP
//it is helpful when we want to create a new object with the prototype of the existing object

// let person={
//     name:'john',
//     age:20,
//     greet(){
//         console.log('hello');
//     }
// }
//
// //We can make a new object with the prototype of the person object
// Object.prototype.Devina=function(){
//     console.log('Devina');                   //this will be added to the prototype of the object
// }
// person.Devina();


//*********************************************__proto__*****************************************************

//__proto__ is a property of an object that points to the prototype of the object
//__proto__ is used to access the prototype of the object
//it is just like inheritance in OOP
//it is helpful when we want to access the prototype of the object

// const tr={
//     name:'john',
//     age:20,
//     greet(){
//         console.log('hello');
//     }
// }
//
// const tr1={
//     name:'joe',
//     age:21,
//     greet(){
//         console.log('hello joe');
//     },
//     __proto__:tr           //this will inherit the properties of the tr object
//}
//
// tr1.__proto__.greet();        //this will call the greet method of the tr object
// tr1.greet();                 //this will call the greet method of the tr1 object


//MODERN WAY OF INHERITANCE

// Object.setPrototypeOf(tr1,tr);      //tr1 can access the properties of tr object.


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// const inher={
//     name:'Devina Agrawal',
//     age:20,
//     email:'devina@gmail'
// }
// String.prototype.truelength=()=>{
//     console.log('true length is', inher.name.trim().length);
// }
// inher.name.truelength();

// let name='Devina Agrawal';
//
// String.prototype.truelength=function(){
//     console.log('true length is', this.trim().length);
// }
// name.truelength();
// 'Devina'.truelength();         //Truelength() is assigned to the prototype of the string object


//this keyword refers to the global variable
//when we have access to window than this refers to window, but when node environment is only there then it refers to an empty object



//+++++++++++++++++++++++++++++++++++++++++++CALL+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function userName(){
//     this.userName=userName;
// }
// function create(username, email){
//     userName.call(this, username)        //call is used to call the function userName and pass the object to it and this is used to tell the object to which the function is called i.e., it basically tells that use my 'this' instead of the 'this' of the userName function
//     this.email=email
// }
// const newUser=new create('devina', 'devina@gmail')
// console.log(newUser);


//********************************************CLASS************************************************************************************


// class user{
//     constructor(username, password, email){
//         this.username=username;
//         this.password=password;
//         this.email=email;
//     }
//     login(){
//         return `${this.username} just logged in!`;
//     }
//     encrypt(){
//         return ` ${this.password.toUpperCase()} Password is encrypted`;
//     }
// }
// const newUser=new user('devina', 'abcd', 'devina@gmail');
// console.log(newUser.login());
// console.log(newUser.encrypt());

//function constructor*************************************************************************************************************

// function User(username, password, email){
//     this.username=username;
//     this.password=password;
//     this.email=email;
// }
// User.prototype.login=function(){
//    // console.log(`${this.username} just logged in!`);             it will return undefined therefore we use return
//     return `${this.username} just logged in!`;
// }
// User.prototype.encrypt=function(){
//     return `${this.password.toUpperCase()} Password is encrypted`;
// }
// const newUser=new User('Harsh', 'abcd', 'harsh@gmail');
// console.log(newUser.login());
// console.log(newUser.encrypt());
//
// //Inheritance**********************************************************************************************************************
//
// class Teacher extends User{
//     constructor(username, password, email, section){
//         super(username, password, email);
//         this.section=section;
//     }
//     addSubject(){
//         return `${this.username} teaches ${this.subject}`;
//     }
// }
// const newTeacher=new Teacher('Devina', 'abcd', 'devina@gmail', 'A');
// newTeacher.subject='Maths';
// console.log(newTeacher);
// console.log(newTeacher.addSubject());
//
// console.log(newTeacher instanceof User);           //true
// console.log(newTeacher instanceof Teacher);        //true
// console.log(newTeacher instanceof Object);         //true
// console.log(Teacher instanceof User);              //false
//this is because Teacher is a class and not an object so instanceof doesn't apply to it


//**************************************STATIC METHOD*******************************************************************************

// if we add static keyword to a method then we cannot access it using the object of the class but we can access it using the class itself


// class Teacher{
//     constructor(username, password, email, section){
//         this.username=username;
//         this.password=password;
//         this.email=email;
//         this.section=section;
//     }
//      static addSubject(){
//         return `${this.username} teaches ${this.subject}`;
//     }
// }
//
// const newTeacher=new Teacher('Devina', 'abcd', 'devina@gmail', 'A');
// newTeacher.subject='Maths';
// console.log(newTeacher);
// console.log(newTeacher.addSubject());   //ERROR


//Bind**************************************************************************************************************************

//bind is used to bind the object to the function and return the function

// class React {
//     constructor() {
//         this.name = 'React';
//         this.series = 'JS';
//
//         document.querySelector('button').addEventListener('click', this.handleClick.bind(this));    //dont call handleClick() because it will call the function immediately
//     }
//
//     handleClick() {
//         console.log("clicked");
//         console.log(this);       //this will refer to the button element
//         console.log(this.name);     //this works because we have binded the object to the function
//     }
// }
//     const app=new React();


//****************************************OBJECTS properties alterations************************************************************************************

// const descripter=Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log(descripter);
//
// const pizza={
//     name:'Pizza',
//     price:200,
//     size:'large',
//
//     onSale:function(){
//         return `${this.name} is on sale`;
//     }
// }
// const descripter1=Object.getOwnPropertyDescriptor(pizza, 'price');
// console.log(descripter1);
// Object.defineProperty(pizza, 'price', {
//     writable:false,
//     enumerable:false,
//     configurable:false     //if we set it to false then we cannot change the property of the object
// })
// const descripter2=Object.getOwnPropertyDescriptor(pizza, 'price');
// console.log(descripter2);
//
// for(let [key, value] of Object.entries(pizza)){
//     if(typeof value!=='function') {
//         console.log(key, value);     //it will not show the price because enumerable is set to false
//     }
// }

//*********************************GETTERS AND SETTERS****************************************************************************************


// class User{
//     constructor(username, password){
//         this.username=username;
//         this.password=password;
//     }
//     get password(){
//         return `${this._password.toUpperCase()}devina`;
//     }
//     set password(value) {
//         if (value.length < 6) {
//             console.log('Password is too short');
//         }
//         else {
//             this._password = value;     //we never use return in set, it only sets the value.
//         }
//     }
// }
//
// const me=new User('devina', 'abcdef');
// console.log(me);
// console.log(me.password);


//**********************************getter and setter using function*******************************************************

// function User(username, password){
//     this._username=username;
//     this._password=password;
//     Object.defineProperty(this, 'username', {
//         get: function(){
//             return `${this._username.toUpperCase()}`;
//         },
//         set: function(value){
//                 this._username=value;
//         }
//     })
//     Object.defineProperty(this, 'password', {
//         get: function(){
//             return `${this._password}devina`;
//         },
//         set: function(value){
//             this._password=value;
//         }
//     })
// }
//
// const me=new User('devina', 'abcdef');
// console.log(me);
// console.log(me.username);
// console.log(me.password);

// we can also use objects for getter and setter




//**************************************LEXICAL SCOPE****************************************************************************************

//lexical scope is refered to a scope of a variable that is defined in the outer function but can be accessed in the inner function

//child can access the properties of parent but parent cannot access the properties of child function
//Also sibling functions cannot access each other's properties

// function outer() {
//     const name = 'Devina';
//
//     function inner() {
//         console.log(name);        //it will print Devina because inner function has access to the outer function
//     }
//     inner();
// }
// //console.log(name);       //error because name is not defined outside the function
// outer();


//**************************************CLOSURE****************************************************************************************


//closure is a function that has access to the outer function even after the outer function has returned
//it is a combination of a function and the lexical environment within which that function was declared
//it return the whole lexical environment of the outer function


// function outer() {
//     const name = 'Devina';
//
//     function inner() {
//         console.log(name);        //it will print Devina because inner function has access to the outer function
//     }
//     return inner;
// }
// const innerFunc=outer();
// innerFunc();    //it will print Devina because inner function has access to the outer function



//******************************************************************************************************************************


    // document.getElementById('orange').addEventListener('click', function(){
    //     document.body.style.backgroundColor='orange';
    // })
    // document.getElementById('green').addEventListener('click', function(){
    //     document.body.style.backgroundColor='green';
    // })

//Doing the above code using function

 function handleClick(color){
    return function(){
        document.body.style.backgroundColor=`${color}`;
    }
 }
document.getElementById('orange').addEventListener('click', handleClick('orange'));
document.getElementById('green').onclick=handleClick('green');




