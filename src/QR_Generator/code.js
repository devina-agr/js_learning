let qr=document.getElementById("qr");
let qrimg=document.getElementById("qrimg");
let url=document.getElementById("url");

function generateQR(){
    qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+url.value;
}