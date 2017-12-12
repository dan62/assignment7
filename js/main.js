// JavaScript Document


	function emailValidation()
    {
		var email = document.getElementById('email');
		var emailm = document.getElementById('email_vm');
		 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Form1.email.value))  
  {  
    return (true)  
  }  
    emailm.innerHTML = "You have entered an invalid email address!" 
    return (false)   
  } 
  
  function ordinaryValidation1()
  {
	  var userm = document.getElementById('username_vm');
	  if(Form1.username.value.length < 8)
    {
        userm.innerHTML = "Should be greater than 8 characters!"
		
    }
  }
  
  function ordinaryValidation2()
  {
	  var password1 = document.getElementById('password1_vm');
	  if(Form1.password1.value.length < 8)
    {
        password1.innerHTML = "Should be greater than 8 characters!"
		
    }
  }
  
  function checkPass()
  {
	  var passwordERROR = document.getElementById('password2_vm');
	  if (Form1.password1.value !== Form1.password2.value) {
        passwordERROR.innerHTML = "Passwords do not match!"
    }
  }

 