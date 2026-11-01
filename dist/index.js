"use strict";var f=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var n=f(function(H,o){
var d=require('@stdlib/utils-memoize/dist'),v;function g(r,e){var i;return e===0?r===0?1:0:(i=e*(e+1)/2,r<0||r>i?0:(r>i/2&&(r=i-r),v(r-e,e-1)+v(r,e-1)))}v=d(g);o.exports=v
});var c=f(function(J,q){
var l=require('@stdlib/math-base-assert-is-positive-integer/dist'),y=require('@stdlib/math-base-assert-is-finite/dist'),h=require('@stdlib/math-base-assert-is-nan/dist'),w=require('@stdlib/math-base-special-round/dist'),z=require('@stdlib/math-base-special-exp/dist'),I=require('@stdlib/constants-float64-ln-two/dist'),L=n();function P(r,e){var i,a,t,u;if(h(r)||!l(e)||!y(e))return NaN;if(r<0)return 0;if(r=w(r),i=e*(e+1)/2,r>=i)return 1;for(a=z(-e*I),u=0,t=0;t<=r;t++)u+=L(t,e)*a;return u}q.exports=P
});var p=f(function(K,m){
var F=require('@stdlib/math-base-assert-is-positive-integer/dist'),O=require('@stdlib/utils-constant-function/dist'),R=require('@stdlib/math-base-assert-is-finite/dist'),b=require('@stdlib/math-base-special-round/dist'),j=require('@stdlib/math-base-assert-is-nan/dist'),k=require('@stdlib/math-base-special-exp/dist'),A=require('@stdlib/constants-float64-ln-two/dist'),B=n();function C(r){var e,i;if(!F(r)||!R(r))return O(NaN);return i=k(-r*A),e=r*(r+1)/2,a;function a(t){var u,s;if(j(t))return NaN;if(t<0)return 0;if(t=b(t),t>=e)return 1;for(s=0,u=0;u<=t;u++)s+=B(u,r)*i;return s}}m.exports=C
});var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),N=c(),E=p();D(N,"factory",E);module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
