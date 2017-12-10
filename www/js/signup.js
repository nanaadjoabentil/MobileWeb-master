

function signup()
{
  var fullname = document.getElementById('fullname').value;
  var age = document.getElementById('age').value;
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var tel = document.getElementById('tel').value;
  var email = document.getElementById('email').value;
  var org = document.getElementById('org').value;

  var info = 'fullname='+fullname+ '&age='+age + '&username='+username + '&password='+password + '&tel='+tel + '&email='+email + '&org='+org;

  $.ajax({
   url: "http://nanaadjoabentil.000webhostapp.com/signup.php",
   type: 'POST',
   data: {
      fullname: fullname,
      age: age,
      username: username,
      password: password,
      tel: tel,
      email: email,
      org: org
   },
   error: function(response) {
      alert(" fail" + response);
   },
   success: function(response) {
      window.location.href ="signin.html"
   },
});
}
 var signUp = document.getElementById("signUp");
 signUp.addEventListener("click", signup);
