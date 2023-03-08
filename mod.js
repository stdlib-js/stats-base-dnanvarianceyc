// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,t=Object.defineProperty,a=Object.prototype,n=a.toString,o=a.__defineGetter__,i=a.__defineSetter__,u=a.__lookupGetter__,l=a.__lookupSetter__;function c(r,e,t,a){var n,o,i,u,l,c,f,_;if(r<=0)return NaN;if(1===r||0===a)return(l=t[0])==l&&r-e>0?0:NaN;for(o=a<0?(1-r)*a:0,_=0;_<r&&(l=t[o])!=l;_++)o+=a;if(_===r)return NaN;for(o+=a,n=l,u=0,_+=1,f=1;_<r;_++)(l=t[o])==l&&(u+=1/((f+=1)*(f-1))*(c=f*l-(n+=l))*c),o+=a;return(i=f-e)<=0?NaN:u/i}function f(r,e,t,a,n){var o,i,u,l,c,f,_,p;if(r<=0)return NaN;if(1===r||0===a)return(c=t[n])==c&&r-e>0?0:NaN;for(i=n,p=0;p<r&&(c=t[i])!=c;p++)i+=a;if(p===r)return NaN;for(i+=a,o=c,l=0,p+=1,_=1;p<r;p++)(c=t[i])==c&&(l+=1/((_+=1)*(_-1))*(f=_*c-(o+=c))*f),i+=a;return(u=_-e)<=0?NaN:l/u}e=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var c,f,_,p;if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(u.call(r,e)||l.call(r,e)?(c=r.__proto__,r.__proto__=a,delete r[e],r[e]=t.value,r.__proto__=c):r[e]=t.value),_="get"in t,p="set"in t,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&o&&o.call(r,e,t.get),p&&i&&i.call(r,e,t.set),r},e(c,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:f});export{c as default,f as ndarray};
//# sourceMappingURL=mod.js.map