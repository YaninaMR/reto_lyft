$(document).ready(function() {
  /* evento input si no hay interaccion es porque hay un evento*/
  var $email = $('#inputEmail');
  var $password = $('#inputPassword');
  //var $checked = $('input[type=checkbox]');
  var $button = $('#signup');
  var PATERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
  // asociando eventos a los inputs
      
   console.log(PATERNEMAIL.test($email.val())); 
   console.log(!PATERNEMAIL.test($email.val()));

  function validateEmail(){
   return PATERNEMAIL.test($email.val());
  } 
  function validatePassword(){
   return $password.val().length >= 6;
  }
  /*function validateChecked(){
   return $checked.is(':checked');
  }*/
  function validateAll(){
   return validateEmail() && validatePassword(); //&& validateChecked() ;
  }
  

  
   function  activeButton(){
     
     if(validateAll()){ 
     $button.attr('disabled', false);
     $button.css('background','yellow');
       }else{
        $button.attr('disabled', true);
       }
   }
  
   
   $email.on('input', function(event) {
       event.preventDefault(); 
       activeButton(); 
   });

    $password.on('input', function(event) {
       activeButton();
   }); 

    $('#test').html();
    localStorage.key=value;
   
  /* $checked.on('click', function(event){
       // event.target.checked;
       
       activeButton();
       //var CheckOption = $(this).is(':checked');
       //   console.log($(this).is(':checked'));
    
    });*/ 
   
  
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
  
 