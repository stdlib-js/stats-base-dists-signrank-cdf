// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,t=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,a=e.__lookupGetter__,f=e.__lookupSetter__;n=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(a.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,p="set"in t,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,t.get),p&&i&&i.call(r,n,t.set),r};var c=n;function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var y=Math.floor;function p(r){return y(r)===r&&r>0}var v=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;function b(r){return r==r&&r>s&&r<v}function w(r){return r!=r}var d=Math.round,m=Math.ceil;function A(r){return r<0?m(r):y(r)}function g(r){return r===v||r===s}var h="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function _(){return h&&"symbol"==typeof Symbol.toStringTag}var j=Object.prototype.toString;var U=Object.prototype.hasOwnProperty;function E(r,n){return null!=r&&U.call(r,n)}var N="function"==typeof Symbol?Symbol.toStringTag:"";var O=_()?function(r){var n,t,e;if(null==r)return j.call(r);t=r[N],n=E(r,N);try{r[N]=void 0}catch(n){return j.call(r)}return e=j.call(r),n?r[N]=t:delete r[N],e}:function(r){return j.call(r)},S="function"==typeof Uint32Array;var I="function"==typeof Uint32Array?Uint32Array:null;var F,T="function"==typeof Uint32Array?Uint32Array:void 0;F=function(){var r,n,t;if("function"!=typeof I)return!1;try{n=new I(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(S&&t instanceof Uint32Array||"[object Uint32Array]"===O(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?T:function(){throw new Error("not implemented")};var H=F,G="function"==typeof Float64Array;var P="function"==typeof Float64Array?Float64Array:null;var V,B="function"==typeof Float64Array?Float64Array:void 0;V=function(){var r,n,t;if("function"!=typeof P)return!1;try{n=new P([1,3.14,-3.14,NaN]),t=n,r=(G&&t instanceof Float64Array||"[object Float64Array]"===O(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?B:function(){throw new Error("not implemented")};var L=V,M="function"==typeof Uint8Array;var x="function"==typeof Uint8Array?Uint8Array:null;var W,k="function"==typeof Uint8Array?Uint8Array:void 0;W=function(){var r,n,t;if("function"!=typeof x)return!1;try{n=new x(n=[1,3.14,-3.14,256,257]),t=n,r=(M&&t instanceof Uint8Array||"[object Uint8Array]"===O(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?k:function(){throw new Error("not implemented")};var C=W,Y="function"==typeof Uint16Array;var R="function"==typeof Uint16Array?Uint16Array:null;var X,q="function"==typeof Uint16Array?Uint16Array:void 0;X=function(){var r,n,t;if("function"!=typeof R)return!1;try{n=new R(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Y&&t instanceof Uint16Array||"[object Uint16Array]"===O(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?q:function(){throw new Error("not implemented")};var z,D={uint16:X,uint8:C};(z=new D.uint16(1))[0]=4660;var J,K,Q=52===new D.uint8(z.buffer)[0];!0===Q?(J=1,K=0):(J=0,K=1);var Z={HIGH:J,LOW:K},$=new L(1),rr=new H($.buffer),nr=Z.HIGH,tr=Z.LOW;function er(r,n,t,e){return $[0]=r,n[e]=rr[nr],n[e+t]=rr[tr],n}function or(r){return er(r,[0,0],1,0)}l(or,"assign",er);var ur,ir,ar=!0===Q?1:0,fr=new L(1),cr=new H(fr.buffer);function lr(r){return fr[0]=r,cr[ar]}!0===Q?(ur=1,ir=0):(ur=0,ir=1);var yr={HIGH:ur,LOW:ir},pr=new L(1),vr=new H(pr.buffer),sr=yr.HIGH,br=yr.LOW;function wr(r,n){return vr[sr]=r,vr[br]=n,pr[0]}var dr=[0,0];function mr(r,n,t,e){return w(r)||g(r)?(n[e]=r,n[e+t]=0,n):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}l((function(r){return mr(r,[0,0],1,0)}),"assign",mr);var Ar=[0,0],gr=[0,0];function hr(r,n){var t,e,o,u,i,a;return 0===n||0===r||w(r)||g(r)?r:(mr(r,Ar,1,0),n+=Ar[1],n+=function(r){var n=lr(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Ar[0]),n<-1074?(o=0,u=r,or.assign(o,dr,1,0),i=dr[0],i&=2147483647,a=lr(u),wr(i|=a&=2147483648,dr[1])):n>1023?r<0?s:v:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,or.assign(r,gr,1,0),t=gr[0],t&=2148532223,e*wr(t|=n+1023<<20,gr[1])))}function _r(r){var n;return w(r)||r===v?r:r===s?0:r>709.782712893384?v:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,o,u,i;return hr(1-(n-(e=r-n)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),t)}(r-.6931471803691238*(n=A(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}var jr=.6931471805599453,Ur=/./;function Er(r){return"boolean"==typeof r}var Nr=Boolean.prototype.toString;var Or=_();function Sr(r){return"object"==typeof r&&(r instanceof Boolean||(Or?function(r){try{return Nr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===O(r)))}function Ir(r){return Er(r)||Sr(r)}function Fr(){return new Function("return this;")()}l(Ir,"isPrimitive",Er),l(Ir,"isObject",Sr);var Tr="object"==typeof self?self:null,Hr="object"==typeof window?window:null,Gr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Pr="object"==typeof Gr?Gr:null;var Vr=function(r){if(arguments.length){if(!Er(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Fr()}if(Tr)return Tr;if(Hr)return Hr;if(Pr)return Pr;throw new Error("unexpected error. Unable to resolve global object.")}(),Br=Vr.document&&Vr.document.childNodes,Lr=Int8Array;function Mr(){return/^\s*function\s*([^(]*)/i}var xr=/^\s*function\s*([^(]*)/i;l(Mr,"REGEXP",xr);var Wr=Array.isArray?Array.isArray:function(r){return"[object Array]"===O(r)};function kr(r){return null!==r&&"object"==typeof r}function Cr(r){var n,t,e,o;if(("Object"===(t=O(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(n=xr.exec(e.toString()))return n[1]}return kr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}l(kr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(n){var t,e;if(!Wr(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}(kr));var Yr,Rr="function"==typeof Ur||"object"==typeof Lr||"function"==typeof Br?function(r){return Cr(r).toLowerCase()}:function(r){var n;return null===r?"null":"object"===(n=typeof r)?Cr(r).toLowerCase():n};function Xr(r){return"function"===Rr(r)}function qr(r){return r}var zr=Yr=function(r,n){var t,e;if(!Xr(r))throw new TypeError("invalid argument. First argument must be a function. Value: `"+r+"`.");if(arguments.length<2)t=qr;else if(!Xr(t=n))throw new TypeError("invalid argument. Hash function argument must be a function. Value: `"+t+"`.");return l(o,"cache",e={}),o;function o(){var n,o,u,i;for(n=new Array(arguments.length),i=0;i<arguments.length;i++)n[i]=arguments[i];return u=t(n).toString(),E(e,u)?e[u]:(o=r.apply(null,n),e[u]=o,o)}}((function(r,n){var t;return 0===n?0===r?1:0:(t=n*(n+1)/2,r<0||r>t?0:(r>t/2&&(r=t-r),Yr(r-n,n-1)+Yr(r,n-1)))}));function Dr(r,n){var t,e,o;if(w(r)||!p(n)||!b(n))return NaN;if(r<0)return 0;if((r=d(r))>=n*(n+1)/2)return 1;for(t=_r(-n*jr),o=0,e=0;e<=r;e++)o+=zr(e,n)*t;return o}function Jr(r){var n,t,e;return p(r)&&b(r)?(t=_r(-r*jr),n=r*(r+1)/2,function(e){var o,u;if(w(e))return NaN;if(e<0)return 0;if((e=d(e))>=n)return 1;for(u=0,o=0;o<=e;o++)u+=zr(o,r)*t;return u}):(e=NaN,function(){return e})}l(Dr,"factory",Jr);export{Dr as default,Jr as factory};
//# sourceMappingURL=mod.js.map
