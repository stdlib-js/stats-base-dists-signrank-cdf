// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).cdf=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,v=/^(\d+)e/,d=/\.0$/,h=/\.0*e/,b=/(\..*[^0])0*e/;function w(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=s.call(n,b,"$1e"),n=s.call(n,h,"e"),n=s.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,y,"e-0$1"),r.alternate&&(n=s.call(n,g,"$1."),n=s.call(n,v,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var A=String.fromCharCode,E=Array.isArray;function j(r){return r!=r}function _(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,o,a,c,f,l,s,p,y,g,v;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)c+=n;else{if(e=void 0!==n.precision,!(n=_(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,j(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,j(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!j(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=j(a)?String(n.arg):A(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,g=n.padRight,v=void 0,(v=y-p.length)<0?p:p=g?p+m(v):m(v)+p)),c+=n.arg||"",f+=1}return c}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function T(r){var e,t,n,i;for(t=[],i=0,n=U.exec(r);n;)(e=r.slice(i,U.lastIndex-n[0].length)).length&&t.push(e),t.push(I(n)),i=U.lastIndex,n=U.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function x(r){var e,t;if("string"!=typeof r)throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[T(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return S.apply(null,e)}var F,k=Object.prototype,V=k.toString,N=k.__defineGetter__,O=k.__defineSetter__,G=k.__lookupGetter__,L=k.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(G.call(r,e)||L.call(r,e)?(n=r.__proto__,r.__proto__=k,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&N&&N.call(r,e,t.get),a&&O&&O.call(r,e,t.set),r};var $=F;function C(r,e,t){$(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var H=Math.floor;function P(r){return H(r)===r&&r>0}var W=Number.POSITIVE_INFINITY,B=Number.NEGATIVE_INFINITY;function M(r){return r==r&&r>B&&r<W}function R(r){return r!=r}var Z=Math.round,X=Math.ceil;function Y(r){return r<0?X(r):H(r)}var z=1023,q=1023,D=-1023,J=-1074;function K(r){return r===W||r===B}var Q=2147483648,rr=2147483647;var er="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function tr(){return er&&"symbol"==typeof Symbol.toStringTag}var nr=Object.prototype.toString;var ir=Object.prototype.hasOwnProperty;function or(r,e){return null!=r&&ir.call(r,e)}var ar="function"==typeof Symbol?Symbol:void 0,ur="function"==typeof ar?ar.toStringTag:"";var cr=tr()?function(r){var e,t,n;if(null==r)return nr.call(r);t=r[ur],e=or(r,ur);try{r[ur]=void 0}catch(e){return nr.call(r)}return n=nr.call(r),e?r[ur]=t:delete r[ur],n}:function(r){return nr.call(r)},fr="function"==typeof Uint32Array;var lr="function"==typeof Uint32Array?Uint32Array:null;var sr,pr="function"==typeof Uint32Array?Uint32Array:void 0;sr=function(){var r,e,t;if("function"!=typeof lr)return!1;try{e=new lr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(fr&&t instanceof Uint32Array||"[object Uint32Array]"===cr(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var yr=sr,gr="function"==typeof Float64Array;var vr="function"==typeof Float64Array?Float64Array:null;var dr,hr="function"==typeof Float64Array?Float64Array:void 0;dr=function(){var r,e,t;if("function"!=typeof vr)return!1;try{e=new vr([1,3.14,-3.14,NaN]),t=e,r=(gr&&t instanceof Float64Array||"[object Float64Array]"===cr(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var br=dr,wr="function"==typeof Uint8Array;var mr="function"==typeof Uint8Array?Uint8Array:null;var Ar,Er="function"==typeof Uint8Array?Uint8Array:void 0;Ar=function(){var r,e,t;if("function"!=typeof mr)return!1;try{e=new mr(e=[1,3.14,-3.14,256,257]),t=e,r=(wr&&t instanceof Uint8Array||"[object Uint8Array]"===cr(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Er:function(){throw new Error("not implemented")};var jr=Ar,_r="function"==typeof Uint16Array;var Sr="function"==typeof Uint16Array?Uint16Array:null;var Ur,Ir="function"==typeof Uint16Array?Uint16Array:void 0;Ur=function(){var r,e,t;if("function"!=typeof Sr)return!1;try{e=new Sr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(_r&&t instanceof Uint16Array||"[object Uint16Array]"===cr(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ir:function(){throw new Error("not implemented")};var Tr,xr={uint16:Ur,uint8:jr};(Tr=new xr.uint16(1))[0]=4660;var Fr,kr,Vr=52===new xr.uint8(Tr.buffer)[0];!0===Vr?(Fr=1,kr=0):(Fr=0,kr=1);var Nr={HIGH:Fr,LOW:kr},Or=new br(1),Gr=new yr(Or.buffer),Lr=Nr.HIGH,$r=Nr.LOW;function Cr(r,e,t,n){return Or[0]=r,e[n]=Gr[Lr],e[n+t]=Gr[$r],e}function Hr(r){return Cr(r,[0,0],1,0)}C(Hr,"assign",Cr);var Pr,Wr,Br=!0===Vr?1:0,Mr=new br(1),Rr=new yr(Mr.buffer);function Zr(r){return Mr[0]=r,Rr[Br]}!0===Vr?(Pr=1,Wr=0):(Pr=0,Wr=1);var Xr={HIGH:Pr,LOW:Wr},Yr=new br(1),zr=new yr(Yr.buffer),qr=Xr.HIGH,Dr=Xr.LOW;function Jr(r,e){return zr[qr]=r,zr[Dr]=e,Yr[0]}var Kr=[0,0];var Qr=22250738585072014e-324;var re=4503599627370496;function ee(r,e,t,n){return R(r)||K(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<Qr?(e[n]=r*re,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}C((function(r){return ee(r,[0,0],1,0)}),"assign",ee);var te=2146435072;var ne=2220446049250313e-31,ie=2148532223,oe=[0,0],ae=[0,0];function ue(r,e){var t,n,i,o,a,u;return 0===e||0===r||R(r)||K(r)?r:(ee(r,oe,1,0),r=oe[0],e+=oe[1],e+=function(r){var e=Zr(r);return(e=(e&te)>>>20)-z|0}(r),e<J?(i=0,o=r,Hr.assign(i,Kr,1,0),a=Kr[0],a&=rr,u=Zr(o),Jr(a|=u&=Q,Kr[1])):e>q?r<0?B:W:(e<=D?(e+=52,n=ne):n=1,Hr.assign(r,ae,1,0),t=ae[0],t&=ie,n*Jr(t|=e+z<<20,ae[1])))}var ce=.6931471803691238,fe=1.9082149292705877e-10,le=1.4426950408889634,se=709.782712893384,pe=-745.1332191019411,ye=1/(1<<28),ge=-ye;function ve(r){var e;return R(r)||r===W?r:r===B?0:r>se?W:r<pe?0:r>ge&&r<ye?1+r:function(r,e,t){var n,i,o,a;return ue(1-(e-(n=r-e)*(o=n-(i=n*n)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-(e=Y(r<0?le*r-.5:le*r+.5))*ce,e*fe,e)}var de=.6931471805599453,he=/./;function be(r){return"boolean"==typeof r}var we=Boolean,me=Boolean.prototype.toString;var Ae=tr();function Ee(r){return"object"==typeof r&&(r instanceof we||(Ae?function(r){try{return me.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===cr(r)))}function je(r){return be(r)||Ee(r)}C(je,"isPrimitive",be),C(je,"isObject",Ee);var _e="object"==typeof self?self:null,Se="object"==typeof window?window:null,Ue="object"==typeof global?global:null,Ie="object"==typeof globalThis?globalThis:null;var Te=function(r){if(arguments.length){if(!be(r))throw new TypeError(x("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Ie)return Ie;if(_e)return _e;if(Se)return Se;if(Ue)return Ue;throw new Error("unexpected error. Unable to resolve global object.")}(),xe=Te.document&&Te.document.childNodes,Fe=Int8Array;function ke(){return/^\s*function\s*([^(]*)/i}var Ve=/^\s*function\s*([^(]*)/i;C(ke,"REGEXP",Ve);var Ne=Array.isArray?Array.isArray:function(r){return"[object Array]"===cr(r)};function Oe(r){return null!==r&&"object"==typeof r}function Ge(r){var e,t,n,i;if(("Object"===(t=cr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Ve.exec(n.toString()))return e[1]}return Oe(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}C(Oe,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(x("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Ne(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Oe));var Le,$e="function"==typeof he||"object"==typeof Fe||"function"==typeof xe?function(r){return Ge(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Ge(r).toLowerCase():e};function Ce(r){return"function"===$e(r)}function He(r){return r}Le=function(r,e){var t,n;if(!Ce(r))throw new TypeError(x("invalid argument. First argument must be a function. Value: `%s`.",r));if(arguments.length<2)t=He;else if(!Ce(t=e))throw new TypeError(x("invalid argument. Hash function argument must be a function. Value: `%s`.",t));return C(i,"cache",n={}),i;function i(){var e,i,o,a;for(e=new Array(arguments.length),a=0;a<arguments.length;a++)e[a]=arguments[a];return o=t(e).toString(),or(n,o)?n[o]:(i=r.apply(null,e),n[o]=i,i)}}((function(r,e){var t;return 0===e?0===r?1:0:(t=e*(e+1)/2,r<0||r>t?0:(r>t/2&&(r=t-r),Le(r-e,e-1)+Le(r,e-1)))}));var Pe=Le;function We(r,e){var t,n,i;if(R(r)||!P(e)||!M(e))return NaN;if(r<0)return 0;if((r=Z(r))>=e*(e+1)/2)return 1;for(t=ve(-e*de),i=0,n=0;n<=r;n++)i+=Pe(n,e)*t;return i}return C(We,"factory",(function(r){var e,t,n;return P(r)&&M(r)?(t=ve(-r*de),e=r*(r+1)/2,function(n){var i,o;if(R(n))return NaN;if(n<0)return 0;if((n=Z(n))>=e)return 1;for(o=0,i=0;i<=n;i++)o+=Pe(i,r)*t;return o}):(n=NaN,function(){return n})})),We}));
//# sourceMappingURL=index.js.map
