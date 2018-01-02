$(document).ready(function() {
  /* evento input si no hay interaccion es porque hay un evento*/
  var $email = $('#inputEmail');
  var $password = $('#inputPassword');
  var $repassword = $('#inputrePassword');
  var $checked = $('input[type=checkbox]');
  var $button = $('#signup');
  var $firstName = $('#first-name'); 
  var $lastName = $('#last-name'); 

  var PATERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{1,4}$/;
  var NAME = /^[a-zA-Z]+[a-zA-Z]$/;

  // asociando eventos a los inputs
   
   

   console.log(PATERNEMAIL.test($email.val())); 
   console.log(!PATERNEMAIL.test($email.val()));
  
  function validateUser(){
    return  NAME.test($firstName.val()) && NAME.test($lastName.val());
  }
  
  function validateEmail(){
   return PATERNEMAIL.test($email.val());
  } 
  function validatePassword(){
   return $password.val().length >= 6;
  }
  function samePasswords(){
   return $password.val() === $repassword.val();
  };
  function validateChecked(){
   return $checked.is(':checked');
  }
  function validateAll(){
   return validateUser()&&validateEmail()&&validateChecked()&&samePasswords() ;
  }
  
 
  function  activeButton(){
     
     if(validateAll()){ 
     $button.attr('disabled', false);
     $button.css('background','linear-gradient( rgb(131, 3, 110) 10%,rgb(166, 6, 120) 35%, rgb(215, 9, 134) 50%)');
      }else{
        $button.attr('disabled', true);
        $button.css('background','#9F9DAB');

       }
   }
   function  desactiveButton(){
     $button.attr('disabled',true);
     $button.css('background','red');
   }

   var  $msgname  =$('#msg-name');

   function  msgvalidname(){
      var  $msg = $('#error').closest('.form-group').find('.alert-error').text("por favor complete su nombre y apellidos,solo en caracteres alphabeticos.");
       
      if(validateUser()){
        $msg.hide();
       return $msgname.hide();
      }else{
       $msg.show();
       return $msgname.show();
      }  
   }
    
   function  msgvalidmail(){
      var  $msg = $('#errore').closest('.form-group').find('.alert-error').text("por favor ingrese un correo valido");
      if(validateEmail()){
       $msg.hide();
      }else{
       $msg.show();
      }  
   }
   function  msgvalidpasswd(){
      var  $msg = $('#errorp').closest('.form-group').find('.alert-error').text("por favor ingresas mas de 6 o más dígitos");
      if(validatePassword()){
       $msg.hide();
      }else{
       $msg.show();
      }  
   }
   function  msgvalidrepasswd(){
      var  $msg = $('#errorr').closest('.form-group').find('.alert-error').text("tus contraseñas no coinciden.");
      if(samePasswords()){
       $msg.hide();
      }else{
       $msg.show();
      }  
    }
   $firstName.on('focus', function(event){
    event.preventDefault();
    msgvalidname()
    });

   $firstName.on('input', function(event){
    event.preventDefault();
     msgvalidname()
     activeButton(); 
     
    });
   
   
   $lastName.on('input', function(event){
    msgvalidname()
    activeButton(); 
    });

   $email.on('input', function(event) {
       //event.preventDefault(); 
       msgvalidmail();
       activeButton(); 
   });

   $password.on('input', function(event) {
       msgvalidpasswd();
       activeButton();
   }); 
   $repassword.on('input', function(event) {
       msgvalidrepasswd();
       activeButton();
   }); 


   $checked.on('click', function(event){
       activeButton();
        localStorage.setItem("correo", $email.val());
        localStorage.setItem("password",$password.val());
        $email.val()='';
        $password.val() ='';
    }); 
   
  
 /* function  validateEmail(parambooleam){
        if(parambooleam){
         console.log("hola soy TRUE");
         activeButton();
        }
        else{
         console.log("hola falsazo");
        }
    }
  
  validateEmail(email());


   $email.on('input', function(event) {
       event.preventDefault();  
       // console.log(event.target.value);
      var PATERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
       // variable booleana que sera true o false
        PATERNEMAIL.test($(this).val());
      //validEmail = PATERNEMAIL.test($(this).val()); 
      //validateEmail(validEmail);
   });
   $password.on('input', function(event) {
      // console.log(event.target.value);
      var validPass = $(this).val().length >= 6;
      // console.log(validPass);
      return validPass;
   }); 
    

    /* if(validEmail){
        console.log("hola soy TRUE");
       }
      else{
        console.log("hola falsazo");
      }*/
   

  /*
    is_username_valid = function() {
      return $username_input.val().length >= 3;
    };
  */ 

  // console.log($email.val());
});
  
 