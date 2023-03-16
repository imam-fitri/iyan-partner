var HYVOR_TALK_DOMAIN = "https://talk.hyvor.com";!function(){"use strict";function t(t){return document.getElementById(t)}function n(t,n){if(!n)return t;for(var e in n)t.style[e]=n[e];return t}function e(t,n,e){"string"==typeof n&&(n=[n]),n.forEach((function(n){t.addEventListener(n,e)}))}function o(t,n,e){"string"==typeof n&&(n=[n]),n.forEach((function(n){t.removeEventListener(n,e)}))}function i(t,e,o){void 0===e&&(e=null),void 0===o&&(o=null);var i=document.createElement(t);return i=function(t,n){if(!n)return t;for(var e in n)t.setAttribute(e,n[e]);return t}(i=n(i,e),o)}function r(t,n){t.appendChild(n)}function a(t){t.parentElement&&t.parentElement.removeChild(t)}function c(t){var n=l(t);return{top:n.top+window.scrollY,left:n.left+window.scrollX}}function l(t){return t.getBoundingClientRect()}function s(t,n,i){void 0===i&&(i={});var r={close:function(){return o(window,"message",receive)},post:function(e,o){try{var i=JSON.stringify({event:e,data:o});t.postMessage(i,n)}catch(t){}},receive:function(t){var e;try{e=JSON.parse(t.data?t.data:"{}")}catch(t){return}var o=e.event,r=e.data;t.origin===n&&"function"==typeof i[o]&&i[o](r)}};return e(window,"message",r.receive),r}var u=function(){function t(){}return t.get=function(t){try{return window.localStorage.getItem(t)||""}catch(t){}},t.set=function(t,n){try{window.localStorage.setItem(t,n)}catch(t){}},t.remove=function(t){try{window.localStorage.removeItem(t)}catch(t){}},t}();function d(t){console.error("Error in loading Hyvor Talk: "+t)}function f(t){return window[t]}function p(t,n){n.length||(n=[n]);var e,o=!0,i=n.length;for(e=0;e<i;e++)(t.target===n[e]||n[e].contains(t.target))&&(o=!1);return o}!function(){var v,h,g,m,y,w,k,b,x,I,E=!1,T=!1,C=new function(){return{iframeResize:function(t){var e=t.height;n(v,{visibility:"hidden",height:0}),n(v,{height:e+4+"px",visibility:"visible"})},callback:function(t){"function"==typeof H.onEvent&&H.onEvent(t.type,t.id)},scrollToElement:function(t){var n=c(g),e=f("innerHeight"),o=n.top+t.top;e>t.height&&!t.setToTop&&(o-=e/2,o+=t.height/2),window.scrollTo({top:o,behavior:"smooth"})},openImageModal:function(t){!function(t){var n=i("div",{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e9});r(document.body,n);var o=i("img",{borderRadius:"5px",maxWidth:"calc(100% - 60px)",maxHeight:"calc(100% - 60px)"},{src:t});r(n,o);var c=i("span",{position:"absolute",right:0,top:0,display:"inline-block",padding:"20px",color:"#fff",fontWeight:"600",fontSize:"30px",lineHeight:"15px",cursor:"pointer"});function l(){a(n)}c.innerHTML="&times;",e(c,"click",l),r(n,c),e(n,"click",(function(t){p(t,o)&&l()}))}(t.src)},openPopupMessage:function(t){!function(t,o,c,l){var s=i("div",{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e9});r(document.body,s);var u=i("div");u.style.cssText=o,n(u,{padding:20,maxWidth:"100%",minWidth:200,fontSize:14}),r(s,u);var d=i("div");d.innerHTML=t,r(u,d);var f=i("div",{marginTop:15});r(u,f);var v=i("span");function h(){a(s)}r(f,v),v.style.cssText=c,v.innerHTML=l,n(v,{padding:"7px 16px",display:"inline-block",float:"right",cursor:"pointer",fontSize:"80%"}),e(v,"click",h),e(s,"click",(function(t){p(t,u)&&h()}))}(t.text,t.style,t.buttonStyle,t.close)},lst:function(t){t.token&&u.set("hyvor_talk_lst",t.token)},fixScrollForNewComments:function(t){t.top+c(g).top>=window.scrollY||window.scrollBy(0,t.height)}}},S="HYVOR_TALK_WEBSITE";if(void 0===f(S))return d(S+" is not set.");if(!(b=parseInt(f(S))))return d(S+" is invalid");var H=f("HYVOR_TALK_CONFIG");"object"!=typeof H&&(H={});m=f("HYVOR_TALK_DOMAIN"),x=function(t){for(var n=null,e=[],o=window.location.search.substr(1).split("&"),i=0;i<o.length;i++)(e=o[i].split("="))[0]===t&&(n=decodeURIComponent(e[1]));return n}("ht-comment-id");var L="hyvor-talk-view";if(!(g=t(L))){var O=t("hyvor-talk-script");if(!O)return d("View not found");var M=O.parentElement;if(!M)return d("Script parent not found");g=i("div",null,{id:L}),M.insertBefore(g,O)}n(g,{maxWidth:"100%"}),g.innerHTML="",(function(){if(H.loadMode){var i=H.loadMode;if("click"===i&&H.clickId){var r=t(H.clickId);if(r)return e(r,"click",(function(){R(),n(r,{display:"none"})})),!1}else if("scroll"===i){function a(){var t=c(g).top;f("scrollY")+f("innerHeight")>=t-100&&(R(),o(window,["load","scroll"],a))}return e(window,["load","scroll"],a),a(),!1}}return!0}()||x)&&R();function R(){if(!E){y=H.url||function(){var t=!1,n=document.querySelector("link[rel='canonical']");t=n?n.getAttribute("href"):location.href.split("#")[0].split("?")[0];return t}(),w=H.id||y,k=H.title||document.title,E=!0;var t=function(){var t={pageIdentifier:w,pageURL:y,hostname:location.hostname,port:location.port,protocol:location.protocol,title:k};H.language&&(t.language=H.language);H.authorEmail&&(t.authorEmail=H.authorEmail);x&&(t.targetCommentId=x);H.sso&&H.sso.hash&&H.sso.userData&&(t.sso=JSON.stringify(H.sso));var n=u.get("hyvor_talk_lst");n&&(t.lst=n);H.palette&&(t.palette=JSON.stringify(H.palette));return m+"/api/embed/"+b+"/iframe?"+(e=t,Object.keys(e).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&"));var e}();e(v=i("iframe",{width:"1px",minWidth:"100%",border:"none",userSelect:"none"},{src:t,id:"hyvor-talk-iframe",name:"hyvor-talk-iframe",allowTranparency:!0,tabindex:0,scrolling:"no",frameborder:0}),"load",_),g.innerHTML="",g.appendChild(v),h=v.contentWindow,I=new s(h,m,C),e(window,["resize","load","DOMContentLoaded"],N),window.hyvor_talk={reload:function(t){void 0===t&&(t=null),t&&(window.HYVOR_TALK_CONFIG=t,H=t),E=!1,R()},setPalette:function(t){I.post("setPalette",t)}}}}function _(){var t;T=!0,N(),t=!1,e(window,["DOMContentLoaded","load","scroll"],(function(){var n,e,o=(n=l(g)).bottom>0&&n.right>0&&n.left<f("innerWidth")&&n.top<f("innerHeight");o!==t&&(t=o,e=o,I.post("iframeVisibilityChange",{visibility:e}))})),e(window,"keyup",(function(t){"body"!==t.target.tagName.toLowerCase()||t.shiftKey||t.altKey||t.ctrlKey||(["n","c","x","z","r","Escape","u","i"].indexOf(t.key)>-1&&v.focus(),I.post("keyNavigation",{key:t.key}))}))}function N(){T&&I.post("iframeResizeRequest")}}()}();