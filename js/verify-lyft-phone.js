
var countries=[{name: 'peru', code: 51 },{name: 'rusia', code: 7 },{name: 'brasil', code: 56}];
$(document).ready(function() {
  
  //var countries=[{name: 'peru', code: 51 },{name: 'mexico', code: 52 },{name: 'brasil', code: 56}];
        /* inicio de cargar data  
        var tel = localStorage.getItem("numero");
        var country  = localStorage.getItem("pais");         
        $country.eq(0).val(country);
        $codePostal.eq(0).val(tel);
        activeButtonNext()
         fin de cargar data */ 
  var $verifyCode = $('#verify-code');
   var $btnSend = $('#btnnext'); 

  /* inicio de obtener data  */ 
  var firstCodeRandom = localStorage.getItem("codigo");             
  /* fin de obtener data */ 

  function validateCode(){
    return parseInt(firstCodeRandom) === parseInt($verifyCode.eq(0).val());
  }
  
  function  activeButtonNext(){
     
     if(validateCode()){ 
        $btnSend.attr('disabled', false);
        $btnSend.css('background','linear-gradient( rgb(131, 3, 110) 10%,rgb(166, 6, 120) 35%, rgb(215, 9, 134) 50%)');
      }else{
        $btnSend.attr('disabled', true);
        $btnSend.css('background','#9F9DAB');

       }
  }
 
  $verifyCode.on('input',function(){
   
   activeButtonNext();

  }); 


});
  
 