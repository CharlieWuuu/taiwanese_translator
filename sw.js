if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const t=e=>n(e,o),u={module:{uri:o},exports:l,require:t};s[o]=Promise.all(i.map((e=>u[e]||t(e)))).then((e=>(r(...e),l)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/About-nyyFqnLY.js",revision:null},{url:"assets/Home-CV7SH-Rz.js",revision:null},{url:"assets/Home-DdM1lw1W.css",revision:null},{url:"assets/index-rj6ePb1F.js",revision:null},{url:"assets/index-TehcyhLt.css",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"index.html",revision:"ee742de53fadb3604262a859dabb610f"},{url:"icons/icon-192x192.png",revision:"032a034e781f405b3a99a34d354a8914"},{url:"icons/icon-512x512.png",revision:"ce08835635e2ce04a90d0c2d8b1c47c5"},{url:"manifest.webmanifest",revision:"a662250cf7cae0236ec7ec6705f1ab6b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
