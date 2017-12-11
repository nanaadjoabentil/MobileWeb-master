
function signup()
{
  $.ajax({
   url: "http://nanaadjoabentil.000webhostapp.com/table.php",
   type: 'POST',
   data: {

   },
   error: function(response) {
      alert(" fail" + response);
   },
   success: function(response) {
      alert("Success");
   },
});
}
