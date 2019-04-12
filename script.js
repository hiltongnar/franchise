function getZipcode(zipcode) {
  console.log(zipcode);
  $('#modal--zipcode').val(zipcode)
}

function formSubmit(name) {
  var serializedData = $(document.forms[name]).serializeObject();
  var url = 'https://script.google.com/macros/s/AKfycbxZ2uzQUrIj5h4wGXQq4IFHmgMCIX8H3UvovkzMAzHj0rtVUNuC/exec';

  var jqxhr = $.ajax({
    url,
    method: "GET",
    dataType: "json",
    data: serializedData,
    success: function(data){
      console.log('success', data);
    }
  });
}


$(document).ready(function(){
   //event handlers;
   $('#form-quote').submit(function(e){
     e.preventDefault();

     formSubmit(e.currentTarget.name);
  });

  $('#go-btn').click(function(){
    var zipcode = $('#zipcode').val();
    var email = $('[name=emai]');
    getZipcode()
  });

});
