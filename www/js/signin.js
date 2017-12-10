


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
   error: function(response) {
      alert('Failed' + response);
   },
   success: function(response) {
    window.location.href = '../pages/post.html';
   }
});
}

var signIn = document.getElementById("signIn");
signIn.addEventListener("click", signin);
