// $(document).ready(function(){

//     if (document.cookie.indexOf('visited=true') == -1) {
//         var fifteenDays = 1000*60*60*24*15;
//         var expires = new Date((new Date()).valueOf() + fifteenDays);
//         document.cookie = "visited=true;expires=" + expires.toUTCString();
//         $('#flag').trigger('click');
//      $('#myModal').modal('toggle');
//     }

// });

// if( $.cookie("visited")!='visited'){
//     $.cookie("visited", "visited"); 
//     $('#dialogDivId').dialog();
// }
// function getCookie(c_name) { var i,x,y,ARRcookies=document.cookie.split(";"); for (i=0;i<ARRcookies.length;i++) { x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("=")); y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1); x=x.replace(/^\s+|\s+$/g,""); if (x==c_name) { return unescape(y); } } }

// function setCookie(c_name,value,exdays) { var exdate=new Date(); exdate.setDate(exdate.getDate() + exdays); var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString()); document.cookie=c_name + "=" + c_value; }

// function checkCookie() { var popup=getCookie("popup"); if (popup==null && popup=="") { document.getElementById("popupDivID").style.display="block"; }
// }
