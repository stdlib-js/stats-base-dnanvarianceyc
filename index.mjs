// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";function n(r,n,e,a){var t,N,f,i,u,o,d,s;if(r<=0)return NaN;if(1===r||0===a)return(u=e[0])==u&&r-n>0?0:NaN;for(N=a<0?(1-r)*a:0,s=0;s<r&&(u=e[N])!=u;s++)N+=a;if(s===r)return NaN;for(N+=a,t=u,i=0,s+=1,d=1;s<r;s++)(u=e[N])==u&&(i+=1/((d+=1)*(d-1))*(o=d*u-(t+=u))*o),N+=a;return(f=d-n)<=0?NaN:i/f}function e(r,n,e,a,t){var N,f,i,u,o,d,s,l;if(r<=0)return NaN;if(1===r||0===a)return(o=e[t])==o&&r-n>0?0:NaN;for(f=t,l=0;l<r&&(o=e[f])!=o;l++)f+=a;if(l===r)return NaN;for(f+=a,N=o,u=0,l+=1,s=1;l<r;l++)(o=e[f])==o&&(u+=1/((s+=1)*(s-1))*(d=s*o-(N+=o))*d),f+=a;return(i=s-n)<=0?NaN:u/i}r(n,"ndarray",e);export{n as default,e as ndarray};
//# sourceMappingURL=index.mjs.map
