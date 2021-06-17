let matchText='guk_9319358714';
let pasword= document.getElementById('pswd');
let btn = document.getElementById('btn');
let first = ()=>{
if(pasword.value.toLowerCase() == matchText){
    window.location.href='middle.html';
}else{
 alert('Invalid Password');   
}
}
// btn.addEventListener('click',first());