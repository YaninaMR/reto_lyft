$(document).ready(function() {
  /* evento input si no hay interaccion es porque hay un evento*/
  var $email = $('#inputEmail');
  var $password = $('#inputPassword');
  var $checked = $('input[type=checkbox]');
  var $button = $('#signup');
  // asociando eventos a los inputs
      

  /* inicio de obtener data  */ 
  var emailLogin = localStorage.getItem("correo"); 
  var passLogin = localStorage.getItem("password");                
  /* fin de obtener data */  
  function validatelogeo(){
    return ($email.eq(0).val()===emailLogin)&&($password.eq(0).val()===passLogin);
  }
  function validateChecked(){
   return $checked.is(':checked');
  }
  function validateAll(){
   return validatelogeo()&&validateChecked() ;
  }
  

  
   function  activeButton(){
     
     if(validateAll()){ 
     $button.attr('disabled', false);
     $button.css('background','#BF87F2');
       }else{
        $button.attr('disabled', true);
        $button.css('background','#AC9CB7');
       }
   }
  
   $email.on('input', function(event) {
       event.preventDefault(); 
       activeButton(); 
   });

    $password.on('input', function(event) {
       activeButton();
   }); 

   $checked.on('click', function(event){
       // event.target.checked;
       
       activeButton();
       //var CheckOption = $(this).is(':checked');
       //   console.log($(this).is(':checked'));
    
    }); 
   
});
  
 