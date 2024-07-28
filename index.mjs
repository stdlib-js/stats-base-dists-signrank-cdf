// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-positive-integer@v0.3.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-finite@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@v0.3.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.2.3-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ln-two@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-memoize@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.2-esm/index.mjs";var a;var l=a=d((function(t,s){var e;return 0===s?0===t?1:0:(e=s*(s+1)/2,t<0||t>e?0:(t>e/2&&(t=e-t),a(t-s,s-1)+a(t,s-1)))}));function f(t,d){var o,a,f;if(r(t)||!s(d)||!e(d))return NaN;if(t<0)return 0;if((t=i(t))>=d*(d+1)/2)return 1;for(o=n(-d*m),f=0,a=0;a<=t;a++)f+=l(a,d)*o;return f}function j(t){var d,a;return s(t)&&e(t)?(a=n(-t*m),d=t*(t+1)/2,function(s){var e,n;if(r(s))return NaN;if(s<0)return 0;if((s=i(s))>=d)return 1;for(n=0,e=0;e<=s;e++)n+=l(e,t)*a;return n}):o(NaN)}t(f,"factory",j);export{f as default,j as factory};
//# sourceMappingURL=index.mjs.map
