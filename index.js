// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((r="undefined"!=typeof globalThis?globalThis:r||self).cdf={})}(this,(function(r){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,a=o.__lookupGetter__,c=o.__lookupSetter__;t=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?e:function(r,n,t){var e,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(a.call(r,n)||c.call(r,n)?(e=r.__proto__,r.__proto__=o,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),y="get"in t,p="set"in t,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,n,t.get),p&&f&&f.call(r,n,t.set),r};var l=t;function y(r,n,t){l(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var p=Math.floor;function v(r){return p(r)===r&&r>0}var s=Number.POSITIVE_INFINITY,b=Number.NEGATIVE_INFINITY;function d(r){return r==r&&r>b&&r<s}function w(r){return r!=r}var m=Math.round,A=Math.ceil;function h(r){return r<0?A(r):p(r)}function g(r){return r===s||r===b}var _="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function j(){return _&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString;var E=Object.prototype.hasOwnProperty;function N(r,n){return null!=r&&E.call(r,n)}var O="function"==typeof Symbol?Symbol.toStringTag:"";var S=j()?function(r){var n,t,e;if(null==r)return U.call(r);t=r[O],n=N(r,O);try{r[O]=void 0}catch(n){return U.call(r)}return e=U.call(r),n?r[O]=t:delete r[O],e}:function(r){return U.call(r)},I="function"==typeof Uint32Array;var T="function"==typeof Uint32Array?Uint32Array:null;var F,H="function"==typeof Uint32Array?Uint32Array:void 0;F=function(){var r,n,t;if("function"!=typeof T)return!1;try{n=new T(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(I&&t instanceof Uint32Array||"[object Uint32Array]"===S(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?H:function(){throw new Error("not implemented")};var P=F,G="function"==typeof Float64Array;var V="function"==typeof Float64Array?Float64Array:null;var B,L="function"==typeof Float64Array?Float64Array:void 0;B=function(){var r,n,t;if("function"!=typeof V)return!1;try{n=new V([1,3.14,-3.14,NaN]),t=n,r=(G&&t instanceof Float64Array||"[object Float64Array]"===S(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?L:function(){throw new Error("not implemented")};var M=B,x="function"==typeof Uint8Array;var W="function"==typeof Uint8Array?Uint8Array:null;var k,C="function"==typeof Uint8Array?Uint8Array:void 0;k=function(){var r,n,t;if("function"!=typeof W)return!1;try{n=new W(n=[1,3.14,-3.14,256,257]),t=n,r=(x&&t instanceof Uint8Array||"[object Uint8Array]"===S(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?C:function(){throw new Error("not implemented")};var Y=k,R="function"==typeof Uint16Array;var X="function"==typeof Uint16Array?Uint16Array:null;var q,z="function"==typeof Uint16Array?Uint16Array:void 0;q=function(){var r,n,t;if("function"!=typeof X)return!1;try{n=new X(n=[1,3.14,-3.14,65536,65537]),t=n,r=(R&&t instanceof Uint16Array||"[object Uint16Array]"===S(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?z:function(){throw new Error("not implemented")};var D,J={uint16:q,uint8:Y};(D=new J.uint16(1))[0]=4660;var K,Q,Z=52===new J.uint8(D.buffer)[0];!0===Z?(K=1,Q=0):(K=0,Q=1);var $={HIGH:K,LOW:Q},rr=new M(1),nr=new P(rr.buffer),tr=$.HIGH,er=$.LOW;function or(r,n){return rr[0]=n,r[0]=nr[tr],r[1]=nr[er],r}function ur(r,n){return 1===arguments.length?or([0,0],r):or(r,n)}var ir,fr,ar=!0===Z?1:0,cr=new M(1),lr=new P(cr.buffer);function yr(r){return cr[0]=r,lr[ar]}!0===Z?(ir=1,fr=0):(ir=0,fr=1);var pr={HIGH:ir,LOW:fr},vr=new M(1),sr=new P(vr.buffer),br=pr.HIGH,dr=pr.LOW;function wr(r,n){return sr[br]=r,sr[dr]=n,vr[0]}var mr=[0,0];function Ar(r,n,t,e){return w(r)||g(r)?(n[e]=r,n[e+t]=0,n):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}y((function(r){return Ar(r,[0,0],1,0)}),"assign",Ar);var hr=[0,0],gr=[0,0];function _r(r,n){var t,e,o,u,i;return 0===n||0===r||w(r)||g(r)?r:(Ar(r,hr,1,0),n+=hr[1],n+=function(r){var n=yr(r);return(n=(2146435072&n)>>>20)-1023|0}(r=hr[0]),n<-1074?(o=r,ur(mr,0),u=mr[0],u&=2147483647,i=yr(o),wr(u|=i&=2147483648,mr[1])):n>1023?r<0?b:s:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,ur(gr,r),t=gr[0],t&=2148532223,e*wr(t|=n+1023<<20,gr[1])))}var jr=1.4426950408889634,Ur=1/(1<<28);function Er(r){var n;return w(r)||r===s?r:r===b?0:r>709.782712893384?s:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Ur?1+r:function(r,n,t){var e,o,u,i;return _r(1-(n-(e=r-n)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),t)}(r-.6931471803691238*(n=h(r<0?jr*r-.5:jr*r+.5)),1.9082149292705877e-10*n,n)}var Nr=.6931471805599453,Or=/./;function Sr(r){return"boolean"==typeof r}var Ir=Boolean.prototype.toString;var Tr=j();function Fr(r){return"object"==typeof r&&(r instanceof Boolean||(Tr?function(r){try{return Ir.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===S(r)))}function Hr(r){return Sr(r)||Fr(r)}function Pr(){return new Function("return this;")()}y(Hr,"isPrimitive",Sr),y(Hr,"isObject",Fr);var Gr="object"==typeof self?self:null,Vr="object"==typeof window?window:null,Br="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Lr="object"==typeof Br?Br:null;var Mr=function(r){if(arguments.length){if(!Sr(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Pr()}if(Gr)return Gr;if(Vr)return Vr;if(Lr)return Lr;throw new Error("unexpected error. Unable to resolve global object.")}(),xr=Mr.document&&Mr.document.childNodes,Wr=Int8Array;function kr(){return/^\s*function\s*([^(]*)/i}var Cr=/^\s*function\s*([^(]*)/i;y(kr,"REGEXP",Cr);var Yr=Array.isArray?Array.isArray:function(r){return"[object Array]"===S(r)};function Rr(r){return null!==r&&"object"==typeof r}function Xr(r){var n,t,e,o;if(("Object"===(t=S(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(n=Cr.exec(e.toString()))return n[1]}return Rr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}y(Rr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(n){var t,e;if(!Yr(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}(Rr));var qr,zr="function"==typeof Or||"object"==typeof Wr||"function"==typeof xr?function(r){return Xr(r).toLowerCase()}:function(r){var n;return null===r?"null":"object"===(n=typeof r)?Xr(r).toLowerCase():n};function Dr(r){return"function"===zr(r)}function Jr(r){return r}qr=function(r,n){var t,e;if(!Dr(r))throw new TypeError("invalid argument. First argument must be a function. Value: `"+r+"`.");if(arguments.length<2)t=Jr;else if(!Dr(t=n))throw new TypeError("invalid argument. Hash function argument must be a function. Value: `"+t+"`.");return y(o,"cache",e={}),o;function o(){var n,o,u,i;for(n=new Array(arguments.length),i=0;i<arguments.length;i++)n[i]=arguments[i];return u=t(n).toString(),N(e,u)?e[u]:(o=r.apply(null,n),e[u]=o,o)}}((function(r,n){var t;return 0===n?0===r?1:0:(t=n*(n+1)/2,r<0||r>t?0:(r>t/2&&(r=t-r),qr(r-n,n-1)+qr(r,n-1)))}));var Kr=qr;function Qr(r,n){var t,e,o;if(w(r)||!v(n)||!d(n))return NaN;if(r<0)return 0;if((r=m(r))>=n*(n+1)/2)return 1;for(t=Er(-n*Nr),o=0,e=0;e<=r;e++)o+=Kr(e,n)*t;return o}function Zr(r){var n,t,e;return v(r)&&d(r)?(t=Er(-r*Nr),n=r*(r+1)/2,function(e){var o,u;if(w(e))return NaN;if(e<0)return 0;if((e=m(e))>=n)return 1;for(u=0,o=0;o<=e;o++)u+=Kr(o,r)*t;return u}):(e=NaN,function(){return e})}y(Qr,"factory",Zr),r.default=Qr,r.factory=Zr,Object.defineProperty(r,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map
