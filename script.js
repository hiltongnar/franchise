function getZipcode(zipcode) {
  console.log(zipcode);
}


$(document).ready(function() {
   //event handlers;
   $('#go-btn').click(function(){
     var zipcode = $('#zipcode').val();
     getZipcode(zipcode);
   })
 });
