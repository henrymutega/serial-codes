 function generate_serial(){
   var initial_string = document.getElementById('init').value.toUpperCase();
   var final_string = document.getElementById('final').value.toUpperCase();
   var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
   var string_length = 5;
   var random_string = "";
   for(var i = 0; i < string_length; i++){
     var randomString = Math.floor(Math.random() * characters.length);
     random_string += characters.substring(randomString,randomString+1);
   }
   document.getElementById('display').value = initial_string + random_string + final_string;
 }
