let maa = prompt('Enter your name: ');
document.querySelector('.formed').addEventListener('submit', (event)=> {
   event.preventDefault(); // By this we don't get data on browser window  
   let x = event.target.password.value;
   let y = event.target.checker.value;   
   if(x === y) {
     alert('Password matching');
     console.log(event.target.username.value);
     console.log(event.target.email.value);
     console.log(x);
     console.log(y);
     alert("You are great Mr. " + maa);
}
else{
    alert('Password is not matching');
}
// For reseting I can use
   event.target.username.value = '';
   event.target.email.value = '';
   event.target.password.value = '';
   event.target.checker.value = '';
});