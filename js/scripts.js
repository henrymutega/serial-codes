 function generate_serial(){
   var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
   var string_length = 5;
   var random_string = "FC2";
   for(var i = 0; i < string_length; i++){
     var randomString = Math.floor(Math.random() * characters.length);
     random_string += characters.substring(randomString,randomString+1);
   }
   document.getElementById('display').value = random_string;
 }
