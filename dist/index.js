"use strict";var o=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var y=o(function(C,m){
function b(a,e,t,i,p){var s,v,c,f,r,q,u,n;if(a<=0)return NaN;if(a===1||i===0)return r=t[p],r===r&&a-e>0?0:NaN;for(v=p,n=0;n<a&&(r=t[v],r!==r);n++)v+=i;if(n===a)return NaN;for(v+=i,s=r,f=0,n+=1,u=1,n;n<a;n++)r=t[v],r===r&&(u+=1,s+=r,q=u*r-s,f+=1/(u*(u-1))*q*q),v+=i;return c=u-e,c<=0?NaN:f/c}m.exports=b
});var x=o(function(D,j){
var k=require('@stdlib/strided-base-stride2offset/dist'),E=y();function O(a,e,t,i){return E(a,e,t,i,k(a,i))}j.exports=O
});var R=o(function(F,N){
var S=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=x(),g=y();S(l,"ndarray",g);N.exports=l
});var h=require("path").join,w=require('@stdlib/utils-try-require/dist'),z=require('@stdlib/assert-is-error/dist'),A=R(),d,_=w(h(__dirname,"./native.js"));z(_)?d=A:d=_;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
