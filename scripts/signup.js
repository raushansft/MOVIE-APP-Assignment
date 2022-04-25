
  

  
let userData;
let check=JSON.parse(localStorage.getItem(userData));
if(check===null){
    userData=[];
}else{
    userData=check;
}

  document.querySelector('form').addEventListener('submit',function(){
      event.preventDefault();
      let userObj={
          name: document.querySelector('#name').value,
          number: document.querySelector('#number').value,
          email: document.querySelector('#email').value,
          password: document.querySelector('#password').value,

      };
      
    //   console.log(userObj.name=="")
      userData.push(userObj);
      localStorage.setItem('userData',JSON.stringify(userData)); 
      
  })
  