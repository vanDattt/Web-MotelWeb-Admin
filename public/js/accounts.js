var url = window.location.href;
if(url.indexOf('page=')==-1 || url.indexOf('page=1')>-1){
  document.getElementById('Prev_button').style.display = "none"
}

function GoToNextPage() {
  event.preventDefault();
	var url = window.location.href;
  var pos = url.indexOf('page=');
	if(pos==-1)
	{
		window.location=(url+'?page=2');
	}
	else {
    pos = pos + 5;
    let pagenum= url.substring(pos);
    num = parseInt(pagenum) + 1;
    pagenum = num.toString();
    url = url.substring(0,pos)+pagenum;
		window.location=url;
	}
}

function GoToPreviousPage() {
  event.preventDefault();
	var url = window.location.href;
  var pos = url.indexOf('page=');
  pos = pos + 5;
  let pagenum= url.substring(pos);
  num = parseInt(pagenum) - 1;
  pagenum = num.toString();
  url = url.substring(0,pos)+pagenum;
	window.location=url;
}

function ReturnHome() {
  event.preventDefault();
  window.location="/rooms";
}

function GoToAccountsPage(){
  event.preventDefault();
  window.location="/accounts";
}

function CheckValid() {
  if(username.value.length==0||fullname.value.length==0||password.value.length==0||phoneNumber.value.length==0||date.value.length==0||email.value.length==0)
  alert("Don't leave any blank box");
  else
  alert("Update successful you will need to log in your account again");
};
