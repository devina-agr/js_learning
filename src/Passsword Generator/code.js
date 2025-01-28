const passwordBox= document.getElementById('pass');
const btn= document.getElementById('btn');
const length= 12;
const upper= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lower= 'abcdefghijklmnopqrstuvwxyz';
const number= '0123456789';
const symbol= '!@#$%^&*()_+';

const allChars= upper+lower+number+symbol;

function generatePassword(){
    let password= '';
    password+= upper[Math.floor(Math.random()*upper.length)];
    password+= lower[Math.floor(Math.random()*lower.length)];
    password+= number[Math.floor(Math.random()*number.length)];
    password+= symbol[Math.floor(Math.random()*symbol.length)];
    while(length> password.length){
        password+= allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value= password;
}
btn.addEventListener('click', generatePassword);