
//*******************************************DATE & TIME****************************************************************

let myDate1= new Date();
let myDate= new Date(2025,0,1,12,34,56);
let myDate3= new Date("12-10-2024");
console.log(myDate1.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate3.toLocaleString())


let myTimeStamp= Date.now()
console.log(myTimeStamp)
console.log(myDate3.getTime())
console.log(myDate3.getDate())
console.log(myDate3.getDay())     // returns the day SUN=0, MON=1 n so on


let newDate=new Date()
console.log(newDate.getMonth()+1)
console.log(newDate.getDate())

console.log(`${newDate.getDate()} is today's date`)

console.log(newDate.toLocaleString(`default`,{
    weekday: "long"  // gives the full name
}))


//************************************************************************************************************************

function login(username){
    if(!username){
        console.log("missing username")
        return
    }
    return `${username} just loged in!`

}
console.log(login())


( ()=>{
    console.log("hello")
})();

//*******************************************ARRAYS**********************************************************************

const arr=[1,2,34,53,5]
for(let i of arr){
     console.log(i)
}

//MAP IN ARRAY

const map=new Map()
map.set(1,'a')
map.set(2,'f')
map.set(1,'a')
for(const [key, value] of map){
    console.log(key, value)
}

const short={
    js:"javascript",
    java:"java",
    py:"python"
}
for(const key in short){
    console.log(short[key])
}

//********************************for each loop********************************************************************************

const arr_foreach=['a','d','f']

arr_foreach.forEach((items,index, arr)=>{
    console.log(items, index, arr)
})



const nums=[1,2,3,4,5,6,7,8,9]

const newNums=nums.filter( (num)=>{
    if(num>5)
{
    return num
}
})
console.log(newNums)


let arr_foreach2=[1,2,3,4,5,6,7,8,9,10]
const a=[]
arr_foreach2.forEach((items)=>{
    a.push(items*2)
})
console.log(a)



let arr_foreach3=[1,2,3,4,5,6,7,8,9,10]
const b=arr_foreach3.map((items)=>{
    return (items*2)
})
console.log(b)


//Operations***************************************************************************************************************************

document.querySelector('h1').style.backgroundColor='red'


document.getElementById('d').addEventListener('click', (e)=>{
    console.log("you clicked me")
},false)

document.getElementById('n').addEventListener('click', (e)=>{
    console.log("you clicked me only")
    e.stopPropagation()
},true)


//remove an element*********************************************************************************************************************

document.getElementById('n').addEventListener('click', (e)=>{
   const rem= e.target
    rem.remove()
 })


//Changing content*********************************************************************************************************************

    // document.querySelector('.name').innerHTML = "Devina Agrawal"
 function changeName() {
     let current = document.getElementById('name');
     if (current.innerHTML === "Devina Agrawal") {
         current.innerHTML = "Devina"
     } else {
         current.innerHTML = "Devina Agrawal"
     }
 }
//console.log("changed")
//const change= setTimeout(changeName,2000)
let c;
const change=(()=>{
     c=setInterval(changeName,2000)})
document.getElementById('strt').addEventListener('click',change);

//stop the timeout
document.getElementById('stop').addEventListener('click', () => {
    clearInterval(c); // Clear the interval using the stored ID
    console.log("stopped");
});
// const rem= e.target.parentNode
//e.preventdefault() stops the default behaviour of the element