// ==UserScript==
// @name        vite-userscript-template
// @version     0.0.0
// @description Ship a userscript like a Vite app — local HMR and a single .user.js for Tampermonkey, Greasemonkey and Violentmonkey.
// @icon        https://greasify.github.io/vite-userscript-template/greasify.svg
// @homepage    https://greasify.github.io/vite-userscript-template/
// @match       https://example.com/
// @updateURL   https://greasify.github.io/vite-userscript-template/vite-userscript-template.meta.js
// @downloadURL https://greasify.github.io/vite-userscript-template/vite-userscript-template.user.js
// ==/UserScript==
;
(function (css) {
  var style = document.createElement('style')
  style.textContent = css
  ;(document.head || document.documentElement).appendChild(style)
})(".basic-userscript{border-top:1px solid #000}.actions{gap:8px;display:flex}\n");
(async function () {
function e(e,t){let n=document.createElement(`button`);return n.type=`button`,n.textContent=e,n.addEventListener(`click`,t),n}function t(){let t=0,n=document.createElement(`div`);n.className=`basic-userscript`;let r=document.createElement(`h1`);r.textContent=`Basic userscript`;let i=document.createElement(`p`),a=document.createElement(`div`);a.className=`actions`;function o(){i.textContent=`Count: ${t}`}function s(){t+=1,o()}function c(){--t,o()}function l(){t=0,o()}return a.append(e(`-`,c),e(`Reset`,l),e(`+`,s)),n.append(r,i,a),o(),n}await new Promise(e=>setTimeout(e,1)),document.body&&document.body.append(t());
})();
