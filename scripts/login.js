document.querySelector('form').addEventListener('submit',function(){
    event.preventDefault();
    let email=document.querySelector('#email').value;
    let password=document.querySelector('#password').value;
    let userData=JSON.parse(localStorage.getItem('userData'));
    let login=true;
    // console.log(userData)
    userData.forEach(user => {
        if(user.email==email && user.password==password){
            alert("Login SucessFull");
            location.href="./index.html";
            login=false;
        }
        
    });
    if(login)
    alert("Enter Correct Details");
})