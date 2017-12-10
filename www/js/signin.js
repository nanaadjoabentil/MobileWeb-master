function signin()
{
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  $.ajax({
   url: "http://nanaadjoabentil.000webhostapp.com/signin.php",
    type: 'POST',
   data: {
      username : username,
      password : password
   },
   error: function() {
      alert('Failed');
   },
   dataType: 'json',
   contentType: 'application/json',
   success: function(data) {
    alert('success');
    window.location.assign = '../pages/post.html';
   }
});
}
