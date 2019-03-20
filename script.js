function getZipcode(zipcode) {
  console.log(zipcode);
  $('#modal--zipcode').val(zipcode)
}


$(document).ready(function() {
   //event handlers;
   $('#go-btn').click(function(){
     var zipcode = $('#zipcode').val();
     getZipcode(zipcode);
   })
 });
