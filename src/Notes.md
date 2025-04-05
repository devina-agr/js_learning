
# JAVASCRIPT NOTES


- **Javascript** is a _single-threaded language_, which means it can execute only one task at a time.

- **Javascript** is a _non-blocking language_, which means it can execute multiple tasks at a time.

- **Javascript** is a _synchronous language_, which means it can execute only one task at a time.


## BASICS 

### NaN 
Nan type is 'number', but it returns NaN when a given string can't be converted into a number.(Eg: "33abc" => NaN).

- Boolean(1)=> true
- Boolean("")=> false
- comparisons <,>,>=,<= and equality check == works differently, comparison converts num to a number, treating it as 0.
- undefined always gives false when compared with 0.


### DATATYPES

the way in which data is stored in memory and accessed, the datatype can be classified into two types:

 1) #### Primitive (call by value) :
    they are of seven types:

     -  String
     -  Number 
     -  Boolean 
     -  null 
     -  undefined 
     -  symbols=> Symbol('123') 
     -  BigInt=> 123456n

####  2) Non-Primitive (call by reference) : 

they are of three types:
  -  Array [] 
  -  Objects {} 
  -  Functions function(){}
 

### typeof null = object

###  Two types of memories:

#### 1) Stack (used in primitive) :
  a copy of the original value is provided.

#### 2) Heap (used in non-primitive) :
  a reference of the original value is given.


###  string interpolation (``) 
use this instead of +, to concatenate two strings.

Example:

        name="devina"
        `hello my name is ${name}`

     const name= new String("Devina")

     console.log(name[2])=> v`



Some common methods of string:

- charAt()
- indexOf()
- toUpperCase()
- toLoweCase()
- length()
- substring(start_index, end_index)
- slice()
- trim()
- replace(to_be_replaced, replaced_by)
- includes()
- split(separator, limit)



### NUMBERS

Various methods of number:


    const price = new Number(100)
    console.log(price)
    console.log(price.toString().length)
    console.log(price.toFixed(2))      //fix the decimal place to 2 - 100.00
    console.log(price.toPrecision(3))   //gives round-off values 102.39=102.4
    const hun= 10000000
    console.log(hun.toLocaleString())    //10,000,000
    console.log(hun.toLocaleString('en-IN'))    //1,00,00,000

### Math library

Some common methods:

- abs()
- min()
- max()
- round()
- ceil()
- floor()
- random()

### random() method:

    console.log(Math.floor((Math.random()*10)+1))


### Dates in js

### type of date is OBJECT

    let myDate= new Date()

----------------------------------------------------------------------------------------------------------------------------------------------------

    console.log(myDate)

    // 2023-03-01T12:03:00.900Z

------------------------------------------------------------------------------

    console.log(myDate.toString()) 

    // Wed Mar 01 2023 12:03:41 GMT+0000 (Coordinated Universal Time)

------------------------------------------------------------------------------

    console.log(myDate.toDateString())

    // Wed Mar 01 2023

------------------------------------------------------------------------------
    console.log(myDate.toLocaleString()) 
    // 3/1/2023, 12:04:46 PM


### Declaring dates:

     let d= new Date(2025, 0, 25, hr, mins, sec)
     console.log(d.toDateString())        // day Jan 25 2025

Another method:

    let d= new Date("2025-01-23")
               OR
    let d= new Date("DD-MM-YY")

    
### Dates in ms for comparison:

      let myTimeStamp = Date.now()
      console.log(myTimeStamp)       // it gives time in ms from 1 Jan 1970 till date


### Now we can take the time till our declared date:

    let d= new Date(2025, 0, 25)
    console.log(d.getTime());      //it gives time in ms from 1 Jan 1970 to the declared date


Now, we can compare these two.

### We can also convert them to sec:
  

    console,log(Math.floor(Date.now()/1000))
    // time in sec


Some methods :

- getMonth()
- getYear()
- getDate()


### We can also customize the date and time:

        newDate.toLocaleString('default',{
        weekday:"long",
        timeZone:"  "
        })

--------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------


## ARRAYS

Some methods of array in js:

- push(value)
- pop()
- unshift(value)  -> adds the value in the start of the array
- shift()  -> pops the first element
- includes(value)  -> results true or false
- indexOf(value)
- join()  -> change the array into a string
- slice(start_index, end_index)  -> end_index not included [original array remains unchanged]
- splice(start_index, end_index)  -> end_index included [values are removed from the original array]
- concat() -> it concat the two array. It returns a new array
- spread values => all= [...hero1 , ...hero2]
- flat(infinity) -> it merges the arrays of array into the main array. Instead of infinity we can give the actual depth of the arrays of array which we want to merge
eg:
            `const myarr = [1,2,3,[4,5],[6,7,[9,9,10]]]
            myarr.flat(infinity) => [1,2,3,4,5,6,7,8,9,10]`


### Slice and Splice:

Difference between these two:

- End_index is included in splice unlike slice.
- Original array is changed in splice unlike slice i.e., the values which are spliced are removed from the original array.


### Checking and converting :


#### CHECKING:

        console.log(Array.isArray("Devina"))  //returns false

#### CONVERTING:

        console.log(Array.from("Devina"))     //returns [d,e,v,i,n,a]
 
### NOTE:

_**We can not directly convert an object into an array and gives an empty array if we try to do so, for doing so we need to specify whether we want the array of keys or values.**_


### Convert multiple variables, arrays into a single array.


        let sc1=100
        let scr2=200
        let scr3=300

        console.log(Array.of(scr1,scr2,scr3))      //[100,200,300]


It converts a set of elements into an array.


-----------------------------------------------------------------------------------

##  OBJECTS


Objects can be made in two ways, namely:

1) #### Object literals  (not singleton)
2) #### Object using Constructor (Singleton)


- ### Object using Constructor:

       Object.create


          const user= new Object()
          user.name="devina"
          user.age=20

- ### Object Literals:

       

       const mySymbol = Symbol("key1")

        const jsUser = {
           name: "Devina",
           "full name": "Devina Agrawal",
           [mySymbol]: "key1",     //DECLARING A SYMBOL
           age: 20,
           login: true
        }

There are two ways to access data from an object:

1) By dot method

           console.log(jsUser.name)

2) By square brackets


         console.log(jsUser["full name"])
         console.log(jsUser[mySymbol])     //ACCESSING A SYMBOL

**Note:** Give the key in the form of a string inside the square bracket.

###  Changing and freezing values of an object:

        jsUser.age=21

It overrides the existing value.

        Object.freeze(jsUser)

It freezes the object and any changes made will not  be reflected.


### Functions in an Object:


    jsUser.greeting= function(){
      console.log(`Hello, ${this.name}`)
    }
     console.loh(jsUser.greeting())


### Objects in an Object:

        const jsUser = {
         fullName: {
           userName:{
               firstName:"Devina"
               lastName:"Agrawal"
           }
         }
        }

        console.log(jsUser.fullName?.userName.fisrtName);


**NOTE:** 

- We can do many layers of nesting inside an object.

- While accessing we can add a ? to give a condition that if the specific object exists then proceed further. 

### Merging two objects:


         obj1={1:"a",2:"b"}
         obj2={3:"c",2:"d"}

         obj3= Object.assign({}, obj1, obj2)

                  OR

         obj3= {...obj1, ...obj2}


         console.log(obj3)

### Array of objects

#### Inputs from database is mostly in form of an array of objects

        user=[
          {
            id: 1,
            email: someone@gmail.com
          }
          {
            id: 2,
            email: somebody@gmail.com
          }
        ]

#### Accessing the values:


        user[1].email

### Accessing keys and values of an object:

        console.log(Object.keys(jsUser));
        console.log(Object.values(jsUser));
        console.log(Object.entries(jsUser));  //Array of arrays(key, value pair)

**NOTE:** The output is in the form of an array, which can be easily traversed using loops.

### Checking whether a property exists in an object or not:

        console.log(user.hasOwnProperty("name"));
        //returns boolean value

### **Destructuring

Instead of using dot and [], we can also access elements by destructuring:

**SYNTAX:**

        const {key_to_access: reference_variable} = Object_name

        console.log(reference_variable)  
        // gives the value of the respected key


------------------------------------------------------------------------------------


## FUNCTIONS

**SYNTAX**

        function greet(<parameters will be given here>){
          console.log("hello world!")
        }

**Reference of function :**
 
        greet

**Execution of function:**

        greet(<arguments will be given here>)

**NOTE:**  If we want to store the result of the function in a variable then we need to return it instead of printing it.

        function add_two_num(n1 = 0, n2 = 0){
           return n1+ n2
        }
       
        const res = add_two_num(2,3)
        console.log(res)     // output= 5


**NOTE:** If value is not given, it gives undefined.

### Variable arguments:

        function addPrice(...num)

**NOTE:** This is known as rest operator and can take multiple inputs and _stores them in an array_.

### Passing Object as an argument in a function:


        function handleObj(anyObj){
            console.log(`${anyObj.username} just logged in!`);
        }

Calling it:

        handleObj({
             username:"devina",
             email: "devina@gmail.com"
             login: false
        })

**NOTE:** We can also make an object separately and pass its name as an argument.


### Passing array as an argument in a function:

        const myArr = [1,2,3,4,5,6]
        
        function newFunc(anyArr){
           return anyArr[2]
        }
       
Calling it:

        console.log(newFunc(myArr))


 **IMPORTANT:**

#### If we hold a function in a variable and call the function before declaring it, it will give an error, unlike the simple declared function in which, if we call the function before where it is declared, no error occurs.
_The way of calling the function before it is declared is known as_ **HOISTING**

--------------------------------------------------------------------------------------------

## ARROW FUNCTION


**SYNTAX**


    const new_func = () => {
        user="devina"
        console.log(Hello, ${user})
    }
    new_func()

Another method:

    const new_func = (num1, num2) => (num1 + num2)    //implicit
    
    new_func()


**NOTE**: If we use `{ }` then we need to write `return` statement.

#### To return an object:

    const new_func = (num1, num2) => ({ name:"devina" })    

    new_func()

**NOTE:** To return an object we need to wrap it in `()`.

--------------------------------------------------------------------------------------


## Immediately Invoked Function Expressions (IIFE)


- _For avoiding the pollution created by the global scope, we use IIFE._
- _It executes the function immediately._

**SYNTAX:**

    (<function wrapped>) (<execution>);

Example:
    

    //Named IIFE
    (function store(){
        console.log("DB connected");
    })();


    //Arrow Function:
    ( (<parameter>) => {
        console.log("DB connected");
    })(<argument>);

**NOTE:** We need to add `;` in the end to stop the function call.

---------------------------------------------------------------------------------------------------


## Javascript Execution Context


- Javascript is a single-threaded language.
-  **The value of `this` in browser is window object**.

JS runs the file in mainly two phase:

- Firstly, a **GLOBAL EXECUTION CONTEXT** is made, this is referred by a variable called, **this**.


- Second is, **FUNCTION EXECUTION CONTEXT**.


- Third is, **Eval Execution Context**.

The execution process in js:

- **Memory Creation Phase**
- **Execution Phase**

Whenever a function is executed a new box is created called, **NEW EXECUTION CONTEXT**
this includes:
- New variable environment
- Execution thread
 
Then again **Memory phase** and **execution phase** is made and the **global execution phase** is not made has it is made only once.


The function returns the value to the **Global Execution Context**.

And, after the work is done, the **NEW EXECUTION CONTEXT** made is now deleted.

----------------------------------------------------------------------------------------------

### Points to remember:

#### - Nullish Coalescing Operator (??): null undefined

        let val1;
        val1 = null ?? 10    //10


This operator is helpful when we use database, we do not get the response directly, we get mostly two values or null values or no response i.e., undefined, then in this condition our code structure gets disturbed. Therefore, to handle such condition this operator is used.

#### - False values:

false, 0, -0, BigInt-> 0n, "", null, undefined, NaN.

#### - Ternary Operator

SYNTAX:
        
            condition ? true : false


#### - Map

1) It is a key value pair.
2) Values are unique.
3) Ordered.

         const map =new Map()
         map.set("IN", "India")
         map.set("US", "USA")

        for(const [key, values] of map){
            console.log(key, ':', values);
        }


- Objects are not iterable using for of.

--------------------------------------------------------------------------------------------------------


## Various types of FOR LOOPS

### 1) For of Loop:

- Mostly used for arrays, map.
- Not used for objects.

**SYNTAX:**

        
        for( const val of arr){
           //statement
        }

### 2) For in loop:

- Mostly used for objects.
- It can be used for array also, but if we print the key in array it will give the index number.


**SYNTAX:**

    obj={
        js:"javascript",
        py:"python",
        java:"java"
    }
    
    for(const keys in obj){
        console.log(keys);
        console.log(obj[keys]);
    }

### 2) For each loop:

**SYNTAX:**


        coding=["java", "python", "cpp", "javascript"]
        
        coding.forEach((val, index, arr)=>{
            console.log(val);
        })


Another method:


       coding=["java", "python", "cpp", "javascript"]        
        
        function printMe(val){
            console.log(val)
        }

        coding.forEach(printMe)


#### For each loop in Array of Objects:

- This loop does not return any value, so we cannot store it in a variable.

**SYNTAX:**


    const myCoding=[
        {
        lan: "java",
        fileName:"java"
        }
        {
        lan: "java",
        fileName:"java"
        }
        {
        lan: "java",
        fileName:"java"
        }
    
    ]


    myCoding.forEach((items)=>{
        console.log(items.lan);
    })


----------------------------------------------------------------------------------------------


## Some important functions:


### 1) Filter():

**SYNTAX:**

        const num=[1,2,3,4,5,6,7,8,9]
        
        const res= num.filter((n)=>{
          return n>4
        })

        console.log(res)


### 2) Map():

**SYNTAX:**

        const num=[1,2,3,4,5,6,7,8,9]
        
        const res= num.map((n)=>{
          return n+1
        })

        console.log(res)

#### Chaining:

        const num=[1,2,3,4,5,6,7,8,9]
        
        const res= num
                   .map((n)=> n*10)
                   .map((n)=> n+1)
                   .filter((n)=> n>=30)
        )

        console.log(res)


### 3) Reduce():

**SYNTAX:**


        const nums=[1,2,3,4]
         
        const res= nums.reduce((acc, currVal)=>{
            return acc+currVal
        },0)
        console.log(res)
    

---------------------------------------------------------------------------------------------------------


## Document Object Model (DOM)

Diagram of document object:

**Window -> Document -> HTML =>{Head => ( Meta-> Attribute ) || (title -> text node)} || {(Body) -> Div -> attribute}**


### DOM methods:

                       
#### 1) document.getElementById

If we try to get `document.getElementById('title').class`, it will give undefined.

Some methods:

- `.getAttribute()`
- `.setAttribute()`
- `.style`
- `.textContent` = This gives all the content, also the once hidden by any CSS property
- `.innerHTML`  = This gives all the content including the HTML tags inside it.
- `.innerText` = This gives only the content which is displayed on the website.


#### 2) document.getElementByClassName

**This returns a HTMLCollection**

- We can apply basic for loop on HTMLCollection.

- For applying forEach loop on HTMLCollection, we need to convert it into an array.

        const myH1= document.getElementByClassName('h1');
        const myArr = Array.from(myH1);


#### 3) document.querySelector(' ')

Selects the first item of the given type.

-  '#' for id.
- '.' for class.
- We can also take input field. `document.querySelector('input[type="password"]')`

#### 4) document.querySelectorAll(' ')

Gives a _nodeList_ of all the items of the given type.

**We can use forEach loop to traverse on the given nodeList.**

As it returns a nodeList not an array, so the traversal is different.

        const myH1= document.querySelectorAll('h1')

        myh1   // gives a nodeList of all the h1 present.

        myH1[1].style.color='green'


**NOTE:** We can convert a nodeList into an array by:

        const myH1= document.querySelectorAll('h1');
        const myArr = Array.from(myH1);

- Now we can apply map function on it.



### children property:

It returns a HTMLCollection.

        const parent= document.querySelector('.parent')

        console.log(parent.children);
        console.log(parent.children[2]);
        console.log(parent.children[2].innerHTML);

    
Some more methods which can be applied on parent:

- `parent.firstElementChild`  - gives the whole HTML of first child.
- `parent.lastElementChild`   - gives the whole HTML of last child.

We can also get the parent and sibling of an element:

        const dayOne = document.querySelector('.day')

        console.log(dayOne);          //gives the whole HTML of dayOne

        console.log(dayOne.parentElement);

        console.log(dayOne.nextElementSibling); 


- `childNodes`

It gives a nodeList, which includes all the attributes like, line break, comment, div, text and all detailed information.

### Creating Elements:

        const div= document.createElement('div')
        div.className= "main"
        div.id= Math.round(Math.random()*10 +1)


### Adding text to the created element:

        div.innerText= "hello!"
                OR
        const txt= document.createTextNode("hello!")
        div.appendChild(txt)

### Attaching it to the document body:

        document.body.appendChild(div)


### Selecting the nth item:

       const li= document.querySelector(' li:nth-child(2) ')

### Editing text of the item selected:

        const newLi = document.createElement('li')
        newLi.innerText("golang")
        li.replaceWith(newLi)

                  OR

        li.innerHTML = "golang"

                  OR

        li.outerHTML = '<li> golang </li>'


### Remove an item:

        li.remove()


### addEventListener()


**SYNTAX:**

        <element>.addEventListener('<event_name> ', (<event_object>)=>{callback_function}, false)
        

**NOTE:** false is used as default, it is used to stop the event from bubbling up.

**Example:**

        const btn = document.querySelectorAll('button')
        btn.forEach((bt)=>{
            bt.addEventListener('click', (e)=>{
               console.log(e);             //gives a complete mouse event with many other things.
               console.log(e.target);     // gives the exact target from where the event came.
                
                // (e.target.id), by this way we can access the id of, where the event occurred.
            }, false)
        })

**Methods:**

- `e.target` - gives the exact target from where the event occurred.
- `e.target.id` - gives the id of the target.
- `e.target.className` - gives the class of the target.
- `e.target.parentNode` - gives the parent of the target.
- `e.target.parentElement` - gives the parent of the target.
- `e.target.nextElementSibling` - gives the next sibling of the target.
- `e.target.previousElementSibling` - gives the previous sibling of the target.
- `e.target.nodeName` - gives the name of the target.
- `e.target.tagName` - gives the tag name of the target.


### Event propagation:

It has two contexts:

1) #### Event Bubbling: (default)

     By default, the event bubbles up from the target to the parent.
  **Bubbling up** means, the event occurs at the target and then goes to the parent.

   But, if we want to stop the event from bubbling up, we can use `e.stopPropagation()`.

2) #### Event Capturing

It is the opposite of bubbling up, it starts from the parent and goes to the target.

###  Some more methods:
 
- `e.preventDefault()` -  prevents the default behaviour of the event occurred.
- `document.querySelector('height').value` - `.value` is used to get the value of the selected item.
- `parseInt()` - parse the string value to int.
- `isNaN()` - it returns true if the value is NaN, and false otherwise.

- `setInterval(function(){}, 1000, "Hi")`  - it runs the function after every given time, we can also pass the arguments.

- `clearInterval()` - stops the interval.
- `setTimeout(function(){}, 1000)` - it runs the function only once after the given time.
- `clearTimeout()` - it stops the timeout, it is used when we want to stop the timeout before it occurs, it is used with the addEventListener.



### Synchronous and Asynchronous:

1) **Synchronous** - it waits for the previous task to complete.
2) **Asynchronous** - it does not wait for the previous task to complete.

- **Blocking code** - it stops the execution of the code until the task is completed.
- **Non-blocking code** - it does not stop the execution of the code until the task is completed.
    


### API

- **API** - Application Programming Interface, it is used to connect two applications.It is used to get data from the server.



### XMLHttp Request

- It is used to make a request to the server and get the data from the server.
- It is used to send data to the server.
- It is used to get data from the server.

        const request = new XMLHttpRequest();

        request.open('GET', '<link>', true);

        request.onreadystatechange = function() {
            console.log(request.readyState);

            if(request.readyState === 4){
                const data =  JSON.parse(this.responseText);    //converts the string to object
                console.log(data.<any_attribute>);
            }
        }

        request.send();


### Promise

A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.


- It is used to handle asynchronous code.
- It is used to handle the response of the server.


A promise has three states:

1) **Pending** - The initial state of a promise, neither fulfilled nor rejected.
2) **Fulfilled** - The promise has been fulfilled, and the result is available.
3) **Rejected** - The promise has been rejected, and the error is available.


    const promise = new Promise((resolve, reject) => {
        const x = 10;
        const y = 20;
    
        if(x + y === 30){
            resolve("Success");
        } else {
            reject("Error");
        }
    });
    promise
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            console.log("Promise is settled");
        });

NOTE: We can use multiple `then` and `catch` methods to handle the response of the server.

### async and await:

- Alternative of then and catch.

        const promise = new Promise((resolve, reject) => {
            const x = 10;
            const y = 20;
        
            if(x + y === 30){
                resolve("Success");
            } else {
                reject("Error");
            }
        });
        

        //async function

        async function getData(){
            try{
                const res = await promise;
                console.log(res);
            } catch(err){
                console.log(err);
            } finally{
                console.log("Promise is settled");
            }
        }
        
        getData();


### Fetch API:


- **Using async and await:**

        async function getUsers(){
            const resp = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await resp.json();
            console.log(data);
            data.forEach((user) => {
                console.log(user.name);
            });
        }

- **Using then and catch:**

        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                data.forEach((user) => {
                    console.log(user.name);
                });
            })
            .catch((error) => {
                console.log(error);
            });

**IMP:** _When we make a request to promise and an error of 404 occurs, it does not go to the catch block, it goes to the then block and gives an error in the console._
_We get an error only when it was not able to make a request to the server._


### Working of fetch API:


**1) Data:**

- Onfulfilled[]
- On rejection[]

These arrays are private and are not accessible to the user.

**2) Web Browser/ Node:**

It makes a network request to the server and gets the data.
