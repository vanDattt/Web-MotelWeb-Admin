var url = window.location.href;
if(url.indexOf('page=')==-1 || url.indexOf('page=1')>-1){
  document.getElementById('Prev_button').style.display = "none"
}

function GoToNextPage() {
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
	var url = window.location.href;
  var pos = url.indexOf('page=');
  pos = pos + 5;
  let pagenum= url.substring(pos);
  num = parseInt(pagenum) - 1;
  pagenum = num.toString();
  url = url.substring(0,pos)+pagenum;
	window.location=url;
}
