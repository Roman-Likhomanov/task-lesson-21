!function(){"use strict";function t(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function n(n){return function(n){if(Array.isArray(n))return t(n)}(n)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(n)||function(n,e){if(n){if("string"==typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(n,e):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,n,e){t.innerHTML="<table>\n        <tbody>\n        ".concat(n.map((function(t,n){return"<tr>".concat(t.map((function(t,e){return'<td\n                      class="cell cell--'.concat(t?"alive":"dead",'"\n                      data-x="').concat(e,'" data-y="').concat(n,'"\n                      >\n                      </td>')})).join(""),"</tr>")})).join(""),"\n        </tbody>\n        </table>");var r=t.querySelector("table");r&&r.addEventListener("click",(function(t){var n=t.target;if(n.matches(".cell")){var r=Number(n.getAttribute("data-x")),a=Number(n.getAttribute("data-y"));e(r,a)}}))}function r(t,n,e){return!(e<0||e>=t.length||n<0||n>t.length)&&Boolean(t[e][n])}function a(t){return t.map((function(n,e){return n.map((function(n,a){return function(t,n,e){var a=function(t,n,e){for(var a=0,o=e-1;o<=e+1;o++)for(var i=n-1;i<=n+1;i++)o===e&&i===n||(a+=Number(r(t,i,o)));return a}(t,n,e),o=r(t,n,e);return!((!o||3!==a&&2!==a)&&(o||3!==a))}(t,a,e)}))}))}function o(t){for(var n=0;n<t.length;n+=1)for(var e=t[n],r=0;r<e.length;r+=1)if(e[r])return!0;return!1}var i=Array(10).fill(0).map((function(t){return Array(10).fill(!1)}));function c(t){var r,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,u=i.map((function(t){return n(t)})),l=document.createElement("div");function d(t,n){u[n][t]=!u[n][t],e(l,u,d)}l.classList.add("game-field"),e(l,u,d),t.appendChild(l);var f=document.createElement("button");f.classList.add("game-control"),f.innerHTML="Start",t.appendChild(f);var m=document.createElement("button");m.classList.add("game-reset"),m.innerHTML="Reset",t.appendChild(m);var s=document.createElement("input");s.setAttribute("type","range"),t.appendChild(s),s.addEventListener("change",(function(t){c=20*Number(s.value)}));var p=[];f.addEventListener("click",(function(t){var n=t.target;"Stop"===n.innerHTML?(n.innerHTML="Start",clearTimeout(r)):(n.innerHTML="Stop",u=a(u),e(l,u,d),r=window.setTimeout((function t(){if(p.push(u.toString()),p[p.length-1]===p[p.length-3])return f.innerHTML="Start",void(p=[]);u=a(u),e(l,u,d),o(u)?window.setTimeout(t,c):f.innerHTML="Start"}),c))})),m.addEventListener("click",(function(){u=i.map((function(t){return n(t)})),e(l,u,d)}))}var u=document.createElement("div"),l=document.createElement("div");document.body.appendChild(u),document.body.appendChild(l),c(u),c(l)}();
//# sourceMappingURL=bundle.js.map