var RMS=RMS?RMS:function(){function e(e){var t,r=new Array;return r[0]=e>>>24>>>0,r[1]=e<<8>>>24>>>0,r[2]=e<<16>>>24,r[3]=e<<24>>>24,t=String(r[0])+"."+String(r[1])+"."+String(r[2])+"."+String(r[3])}var t=location.protocol+"//cdid.c-ctrip.com/model-poc2/h",r=location.protocol.replace("http","ws")+"//cdid.c-ctrip.com/model-poc2/w",n=!1,o=location.protocol+"//"+location.host,i=function(){},c=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},s=function(){function e(e){this.init(e)}var t=window,r=function(){var e;return t.XMLHttpRequest&&"withCredentials"in new t.XMLHttpRequest?e=t.XMLHttpRequest:t.XDomainRequest&&(e=t.XDomainRequest),e}(),n=["head","get","post","put","delete"],o={};e.prototype.init=function(e){var t=this;t.xhr=new r,t.method=e.method,t.url=e.url,t.success=e.success,t.error=e.error;try{t.xhr.timeout=2e3,t.xhr.ontimeout=function(){},e.credentials===!0&&(t.xhr.withCredentials=!0)}catch(n){}var o=e.params?e.params:e.data;return t.headers=e.headers,t.send(o),t},e.prototype.send=function(e){var t=this;return void 0!==t.success&&(t.xhr.onload=function(){t.success.call(this,this.responseText)}),void 0!==t.error&&(t.xhr.error=function(){t.error.call(this,this.responseText)}),t.xhr.open(t.method,t.url,!0),void 0!==t.headers&&t.setHeaders(),e?t.xhr.send(e):t.xhr.send(),t},e.prototype.setHeaders=function(){var e,t=this,r=t.headers;try{for(e in r)r.hasOwnProperty(e)&&t.xhr.setRequestHeader(e,r[e])}catch(n){}return t};for(var i=0;i<n.length;i++)!function(){var t=n[i];o[t]=function(r,n){var o={};if(void 0===r)throw new Error("CORS: url must be defined");return"object"==typeof r?o=r:("function"==typeof n&&(o.success=n),o.url=r),o.method=t.toUpperCase(),new e(o).xhr}}();return o}(),a=function(){var e=!1||!!document.documentMode;return e&&document.documentMode&&document.documentMode<10},u=function(e,t,r){if(n)return setTimeout(function(){u(e,t,r)},30);if(n=!0,!a()){var c=t+"="+r+"&serverName="+o;s.post({url:e,credentials:!0,params:c,method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},success:function(e){n=!1,e&&i(e)},error:function(){i("cors error"),n=!1}})}},d=!1;return{init:function(e){if(!d){d=!0,e=e?e:{};var t=(new Date,this);window.__bfi=window.__bfi||[],window.__bfi.push(["_getFP",function(e){t.fp=e},!1]),window.__bfi.push(["_getStatus",function(e){t.vid=e.vid},!1]),window.__bfi.push(["_getPageid",function(r,n){!r&&n&&(e.pageId||(e.pageId=n+"")),t.pageId=n}]);var r=/^https?:\/\/((global\.secure\.ctrip\.com)|(secure\.ctrip\.com\.hk)|(m\.ctrip\.com)|(secure\.ctrip\.com)|(secure\.trip\.com)|(secure\.ctrip\.sg)|(secure\.ctrip\.my)|(secure\.ctrip\.co.kr))/;if(window&&window.location){var n=r.exec(window.location);n&&n.length>1&&!function(){var e="//webresource.c-ctrip.com/resaresonline/risk/ubtrms/md.min.e5b77f13.js",t=10;setTimeout(function(){var t=document.createElement("script");t.type="text/javascript",t.id="rmsd__script",t.async=!0,t.src=("https:"==document.location.protocol?"https:":"http:")+e;var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(t,r)},t),window.rmsd__startScriptLoad=1*new Date}()}var o=function(){var e=window.__rmsbfi||[],t=e.push=function(){for(var e=arguments,t=0,r=e.length,n=0;r>n;n++)try{if("function"==typeof e[n])e[n]();else if("[object Array]"===Object.prototype.toString.call(e[n])){if(2!=e[n].length)continue;var o=e[n][0],i=e[n][1];"string"==typeof o&&"_getRmsToken"===o&&"function"==typeof i&&i(RMS.getRmsToken())}}catch(c){t++}return t};for(window.__rmsbfi=e;e.length>0;)t(e.shift())};o()}},getRmsToken:function(){var t="fp="+(this.fp?this.fp:"");t+="&vid="+(this.vid?this.vid:""),t+="&pageId="+(this.pageId?this.pageId:"");var r=/\_RGUID=([a-z0-9\-]+)(;|$)/.exec(document.cookie),n=/guid\_\_=([a-z0-9\-]+)(;|$)/.exec(document.cookie);if(r&&r.length>1){var o=r[1].replace(/\-/g,"");t+="&r="+o}else if(n&&n.length>1){var o=n[1].replace(/\-/g,"");t+="&r="+o}else t+="&r="+window.CHLOROFP_STATUS;var i=window.CHLOROFP_IP;if(!i){var c=/\_RF1=([0-9\.]+)(;|$)/.exec(document.cookie);c&&c.length>1&&(i=c[1])}isNaN(Number(i))||(i=e(Number(i))),i&&(i=i.replace(/^\s+|\s+$/g,"")),t+="&ip="+i,t+="&screen="+screen.width+"x"+screen.height;var s=(new Date).getTimezoneOffset()/60;return t+="&tz="+(0>s?"+":"-")+Math.abs(s),t+="&blang="+navigator.language||navigator.userLanguage,t+="&oslang="+navigator.language||navigator.systemLanguage,t+="&ua="+encodeURIComponent(navigator.userAgent),t+="&v=m14"},ping:function(e){if(window&&window.location&&"WebSocket"in window){var n=!0,o=/^https?:\/\/((global\.secure\.ctrip\.com)|(secure\.ctrip\.com\.hk)|(m\.ctrip\.com)|(secure\.ctrip\.com)|(secure\.trip\.com)|(secure\.ctrip\.sg)|(secure\.ctrip\.my)|(secure\.ctrip\.co.kr))/,s=o.exec(window.location);if(n=s){if(!e){var a=/\_RGUID=([a-z0-9\-]+)(;|$)/.exec(document.cookie),d=/guid\_\_=([a-z0-9\-]+)(;|$)/.exec(document.cookie);a&&a.length>1?e=a[1].replace(/\-/g,""):d&&d.length>1&&(e=d[1].replace(/\-/g,""))}if(e){e=e+"_"+c(1,100),i(e);var p=new WebSocket(r);p.addEventListener("open",function(){p.send(e)}),p.addEventListener("message",function(t){var r=t.data;i("websocket: ",r),"OK"===r?p.close():p.send(r+":"+e)}),u(t,"requestId",e)}}}}}}();RMS.init(),RMS.ping();
//# sourceMappingURL=mrms.js.955b0d6d.map