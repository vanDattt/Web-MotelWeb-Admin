const accountService=require("../../components/accounts/accountModel/accountService")
function getInfo(obj,abc) {
        uname = obj.className;
        var url = window.location.href;
        var pos = url.indexOf('user-accounts');
        pos = pos + 13;
        url = url.substring(0,pos);
        window.location=(url+'/'+uname);
}
