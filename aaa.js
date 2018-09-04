/**
 * Created by oye on 5/7/2018.
 */

debugger;





person = new Object();
person.firstname="Bill";
person.lastname="Gates";
person.age=56;
person.eyecolor="blue";




// how to intercept the Ajax

/** IOS used  **/
// var s_ajaxListener = new Object();
// s_ajaxListener.tempOpen = XMLHttpRequest.prototype.open;
// XMLHttpRequest.prototype.open = function () {
//     this.addEventListener('readystatechange', function () {
//         var result = eval("(" + this.responseText + ")");
//         if (result.statusCode == 200 && result.message == "Authorized") {
//             var temp = this.responseText;
//             console.log(temp);
//             // window.stop();
//             // window.webkit.messageHandlers.observe.postMessage(temp);
//         }
//     }, false);
//     s_ajaxListener.tempOpen.apply(this, arguments);
// }


// (function (open) {
//         XMLHttpRequest.prototype.open = function () {
//             this.addEventListener("readystatechange", function () {
//                 console.log(this.responseText);
//                 console.log("URL:" + this.responseURL);
//             }, false);
//             open.apply(this, arguments);
//         };
//     }
// )
// (XMLHttpRequest.prototype.open);


// var xhr = new XMLHttpRequest();
// xhr.open("GET","//www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc");
// xhr.send();
// xhr.onreadystatechange= function () {
//     if(xhr.readyState==4 && xhr.status == 200){
//         console.log(xhr.responseText);
//     }else{
//         alert(xhr.statusText);
//     }
// }
//
//
// if (typeof $ != "undefined") {
//     $(document).ajaxSuccess(function (event, xhr, settings) {
//         try {
//             console.log(xhr.responseText);
//         } catch (e) {
//         }
//     });
// }