function loadVeriteCoJS(){LazyLoad.js("js/verite.co.core.js")}LazyLoad=function(e){function u(t,n){var r=e.createElement(t),i;for(i in n)n.hasOwnProperty(i)&&r.setAttribute(i,n[i]);return r}function a(e){var t=r[e],n,o;if(t){n=t.callback;o=t.urls;o.shift();i=0;if(!o.length){n&&n.call(t.context,t.obj);r[e]=null;s[e].length&&l(e)}}}function f(){var n=navigator.userAgent;t={async:e.createElement("script").async===!0};(t.webkit=/AppleWebKit\//.test(n))||(t.ie=/MSIE/.test(n))||(t.opera=/Opera/.test(n))||(t.gecko=/Gecko\//.test(n))||(t.unknown=!0)}function l(i,o,l,p,d){var v=function(){a(i)},m=i==="css",g=[],y,b,w,E,S,x;t||f();if(o){o=typeof o=="string"?[o]:o.concat();if(m||t.async||t.gecko||t.opera)s[i].push({urls:o,callback:l,obj:p,context:d});else for(y=0,b=o.length;y<b;++y)s[i].push({urls:[o[y]],callback:y===b-1?l:null,obj:p,context:d})}if(r[i]||!(E=r[i]=s[i].shift()))return;n||(n=e.head||e.getElementsByTagName("head")[0]);S=E.urls;for(y=0,b=S.length;y<b;++y){x=S[y];if(m)w=t.gecko?u("style"):u("link",{href:x,rel:"stylesheet"});else{w=u("script",{src:x});w.async=!1}w.className="lazyload";w.setAttribute("charset","utf-8");if(t.ie&&!m)w.onreadystatechange=function(){if(/loaded|complete/.test(w.readyState)){w.onreadystatechange=null;v()}};else if(m&&(t.gecko||t.webkit))if(t.webkit){E.urls[y]=w.href;h()}else{w.innerHTML='@import "'+x+'";';c(w)}else w.onload=w.onerror=v;g.push(w)}for(y=0,b=g.length;y<b;++y)n.appendChild(g[y])}function c(e){var t;try{t=!!e.sheet.cssRules}catch(n){i+=1;i<200?setTimeout(function(){c(e)},50):t&&a("css");return}a("css")}function h(){var e=r.css,t;if(e){t=o.length;while(--t>=0)if(o[t].href===e.urls[0]){a("css");break}i+=1;e&&(i<200?setTimeout(h,50):a("css"))}}var t,n,r={},i=0,s={css:[],js:[]},o=e.styleSheets;return{css:function(e,t,n,r){l("css",e,t,n,r)},js:function(e,t,n,r){l("js",e,t,n,r)}}}(this.document);LazyLoad.js("http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js",loadVeriteCoJS);