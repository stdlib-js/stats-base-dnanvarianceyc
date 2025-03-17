// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";function t(r,e,t,n,s){var i,d,a,f,o,u,m,l;if(r<=0)return NaN;if(1===r||0===n)return(o=t[s])==o&&r-e>0?0:NaN;for(d=s,l=0;l<r&&(o=t[d])!=o;l++)d+=n;if(l===r)return NaN;for(d+=n,i=o,f=0,l+=1,m=1;l<r;l++)(o=t[d])==o&&(f+=1/((m+=1)*(m-1))*(u=m*o-(i+=o))*u),d+=n;return(a=m-e)<=0?NaN:f/a}function n(r,n,s,i){return t(r,n,s,i,e(r,i))}r(n,"ndarray",t);export{n as default,t as ndarray};
//# sourceMappingURL=index.mjs.map
