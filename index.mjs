// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-positive-integer@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-finite@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ln-two@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-memoize@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";var a;a=d((function(t,s){var e;return 0===s?0===t?1:0:(e=s*(s+1)/2,t<0||t>e?0:(t>e/2&&(t=e-t),a(t-s,s-1)+a(t,s-1)))}));var l=s,f=e,j=r,p=i,h=n,u=m,c=a;var v=s,b=o,x=e,g=i,N=r,y=n,w=m,z=a;var k=function(t,s){var e,r,i;if(j(t)||!l(s)||!f(s))return NaN;if(t<0)return 0;if((t=p(t))>=s*(s+1)/2)return 1;for(e=h(-s*u),i=0,r=0;r<=t;r++)i+=c(r,s)*e;return i},q=function(t){var s,e;return v(t)&&x(t)?(e=y(-t*w),s=t*(t+1)/2,function(r){var i,n;if(N(r))return NaN;if(r<0)return 0;if((r=g(r))>=s)return 1;for(n=0,i=0;i<=r;i++)n+=z(i,t)*e;return n}):b(NaN)};t(k,"factory",q);var A=k;export{A as default,q as factory};
//# sourceMappingURL=index.mjs.map
