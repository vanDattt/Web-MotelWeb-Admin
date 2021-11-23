var a = 1;

function signIn() {
      if(document.getElementById("user").value == "aaa" && document.getElementById("pass").value == "123") {
        location.href = '/rooms';
      return false;
      } else {
      alert("wrong user/pass");
      return false;
      }
}
