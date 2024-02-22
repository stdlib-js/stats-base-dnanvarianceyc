"use strict";var y=function(r,u){return function(){return u||r((u={exports:{}}).exports,u),u.exports}};var N=y(function(A,p){
function R(r,u,s,i){var q,v,f,o,a,e,t,n;if(r<=0)return NaN;if(r===1||i===0)return a=s[0],a===a&&r-u>0?0:NaN;for(i<0?v=(1-r)*i:v=0,n=0;n<r&&(a=s[v],a!==a);n++)v+=i;if(n===r)return NaN;for(v+=i,q=a,o=0,n+=1,t=1,n;n<r;n++)a=s[v],a===a&&(t+=1,q+=a,e=t*a-q,o+=1/(t*(t-1))*e*e),v+=i;return f=t-u,f<=0?NaN:o/f}p.exports=R
});var l=y(function(B,j){
function S(r,u,s,i,q){var v,f,o,a,e,t,n,c;if(r<=0)return NaN;if(r===1||i===0)return e=s[q],e===e&&r-u>0?0:NaN;for(f=q,c=0;c<r&&(e=s[f],e!==e);c++)f+=i;if(c===r)return NaN;for(f+=i,v=e,a=0,c+=1,n=1,c;c<r;c++)e=s[f],e===e&&(n+=1,v+=e,t=n*e-v,a+=1/(n*(n-1))*t*t),f+=i;return o=n-u,o<=0?NaN:a/o}j.exports=S
});var k=y(function(C,d){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=N(),E=l();_(b,"ndarray",E);d.exports=b
});var O=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),w=k(),m,x=g(O(__dirname,"./native.js"));h(x)?m=w:m=x;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
