function Jg(t,e){for(var r=0;r<e.length;r++){const n=e[r];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(n,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();function e0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var uh={exports:{}},Ha={},ch={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vs=Symbol.for("react.element"),t0=Symbol.for("react.portal"),r0=Symbol.for("react.fragment"),n0=Symbol.for("react.strict_mode"),i0=Symbol.for("react.profiler"),s0=Symbol.for("react.provider"),a0=Symbol.for("react.context"),l0=Symbol.for("react.forward_ref"),o0=Symbol.for("react.suspense"),u0=Symbol.for("react.memo"),c0=Symbol.for("react.lazy"),Jc=Symbol.iterator;function d0(t){return t===null||typeof t!="object"?null:(t=Jc&&t[Jc]||t["@@iterator"],typeof t=="function"?t:null)}var dh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fh=Object.assign,hh={};function ii(t,e,r){this.props=t,this.context=e,this.refs=hh,this.updater=r||dh}ii.prototype.isReactComponent={};ii.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ii.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ph(){}ph.prototype=ii.prototype;function Ru(t,e,r){this.props=t,this.context=e,this.refs=hh,this.updater=r||dh}var Ou=Ru.prototype=new ph;Ou.constructor=Ru;fh(Ou,ii.prototype);Ou.isPureReactComponent=!0;var ed=Array.isArray,mh=Object.prototype.hasOwnProperty,Au={current:null},gh={key:!0,ref:!0,__self:!0,__source:!0};function vh(t,e,r){var n,i={},s=null,a=null;if(e!=null)for(n in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)mh.call(e,n)&&!gh.hasOwnProperty(n)&&(i[n]=e[n]);var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(n in l=t.defaultProps,l)i[n]===void 0&&(i[n]=l[n]);return{$$typeof:vs,type:t,key:s,ref:a,props:i,_owner:Au.current}}function f0(t,e){return{$$typeof:vs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Fu(t){return typeof t=="object"&&t!==null&&t.$$typeof===vs}function h0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var td=/\/+/g;function xl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?h0(""+t.key):e.toString(36)}function qs(t,e,r,n,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case vs:case t0:a=!0}}if(a)return a=t,i=i(a),t=n===""?"."+xl(a,0):n,ed(i)?(r="",t!=null&&(r=t.replace(td,"$&/")+"/"),qs(i,e,r,"",function(c){return c})):i!=null&&(Fu(i)&&(i=f0(i,r+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(td,"$&/")+"/")+t)),e.push(i)),1;if(a=0,n=n===""?".":n+":",ed(t))for(var l=0;l<t.length;l++){s=t[l];var u=n+xl(s,l);a+=qs(s,e,r,u,i)}else if(u=d0(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=n+xl(s,l++),a+=qs(s,e,r,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ns(t,e,r){if(t==null)return t;var n=[],i=0;return qs(t,n,"","",function(s){return e.call(r,s,i++)}),n}function p0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Be={current:null},Ys={transition:null},m0={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:Ys,ReactCurrentOwner:Au};function xh(){throw Error("act(...) is not supported in production builds of React.")}$.Children={map:Ns,forEach:function(t,e,r){Ns(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return Ns(t,function(){e++}),e},toArray:function(t){return Ns(t,function(e){return e})||[]},only:function(t){if(!Fu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$.Component=ii;$.Fragment=r0;$.Profiler=i0;$.PureComponent=Ru;$.StrictMode=n0;$.Suspense=o0;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m0;$.act=xh;$.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=fh({},t.props),i=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Au.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)mh.call(e,u)&&!gh.hasOwnProperty(u)&&(n[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)n.children=r;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];n.children=l}return{$$typeof:vs,type:t.type,key:i,ref:s,props:n,_owner:a}};$.createContext=function(t){return t={$$typeof:a0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:s0,_context:t},t.Consumer=t};$.createElement=vh;$.createFactory=function(t){var e=vh.bind(null,t);return e.type=t,e};$.createRef=function(){return{current:null}};$.forwardRef=function(t){return{$$typeof:l0,render:t}};$.isValidElement=Fu;$.lazy=function(t){return{$$typeof:c0,_payload:{_status:-1,_result:t},_init:p0}};$.memo=function(t,e){return{$$typeof:u0,type:t,compare:e===void 0?null:e}};$.startTransition=function(t){var e=Ys.transition;Ys.transition={};try{t()}finally{Ys.transition=e}};$.unstable_act=xh;$.useCallback=function(t,e){return Be.current.useCallback(t,e)};$.useContext=function(t){return Be.current.useContext(t)};$.useDebugValue=function(){};$.useDeferredValue=function(t){return Be.current.useDeferredValue(t)};$.useEffect=function(t,e){return Be.current.useEffect(t,e)};$.useId=function(){return Be.current.useId()};$.useImperativeHandle=function(t,e,r){return Be.current.useImperativeHandle(t,e,r)};$.useInsertionEffect=function(t,e){return Be.current.useInsertionEffect(t,e)};$.useLayoutEffect=function(t,e){return Be.current.useLayoutEffect(t,e)};$.useMemo=function(t,e){return Be.current.useMemo(t,e)};$.useReducer=function(t,e,r){return Be.current.useReducer(t,e,r)};$.useRef=function(t){return Be.current.useRef(t)};$.useState=function(t){return Be.current.useState(t)};$.useSyncExternalStore=function(t,e,r){return Be.current.useSyncExternalStore(t,e,r)};$.useTransition=function(){return Be.current.useTransition()};$.version="18.3.1";ch.exports=$;var b=ch.exports;const Kt=e0(b),g0=Jg({__proto__:null,default:Kt},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v0=b,x0=Symbol.for("react.element"),y0=Symbol.for("react.fragment"),_0=Object.prototype.hasOwnProperty,w0=v0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k0={key:!0,ref:!0,__self:!0,__source:!0};function yh(t,e,r){var n,i={},s=null,a=null;r!==void 0&&(s=""+r),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(n in e)_0.call(e,n)&&!k0.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)i[n]===void 0&&(i[n]=e[n]);return{$$typeof:x0,type:t,key:s,ref:a,props:i,_owner:w0.current}}Ha.Fragment=y0;Ha.jsx=yh;Ha.jsxs=yh;uh.exports=Ha;var o=uh.exports,io={},_h={exports:{}},ft={},wh={exports:{}},kh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,O){var I=P.length;P.push(O);e:for(;0<I;){var B=I-1>>>1,U=P[B];if(0<i(U,O))P[B]=O,P[I]=U,I=B;else break e}}function r(P){return P.length===0?null:P[0]}function n(P){if(P.length===0)return null;var O=P[0],I=P.pop();if(I!==O){P[0]=I;e:for(var B=0,U=P.length,mt=U>>>1;B<mt;){var Z=2*(B+1)-1,me=P[Z],ze=Z+1,et=P[ze];if(0>i(me,I))ze<U&&0>i(et,me)?(P[B]=et,P[ze]=I,B=ze):(P[B]=me,P[Z]=I,B=Z);else if(ze<U&&0>i(et,I))P[B]=et,P[ze]=I,B=ze;else break e}}return O}function i(P,O){var I=P.sortIndex-O.sortIndex;return I!==0?I:P.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var u=[],c=[],d=1,f=null,h=3,m=!1,x=!1,p=!1,_=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(P){for(var O=r(c);O!==null;){if(O.callback===null)n(c);else if(O.startTime<=P)n(c),O.sortIndex=O.expirationTime,e(u,O);else break;O=r(c)}}function w(P){if(p=!1,y(P),!x)if(r(u)!==null)x=!0,q(k);else{var O=r(c);O!==null&&z(w,O.startTime-P)}}function k(P,O){x=!1,p&&(p=!1,v(N),N=-1),m=!0;var I=h;try{for(y(O),f=r(u);f!==null&&(!(f.expirationTime>O)||P&&!M());){var B=f.callback;if(typeof B=="function"){f.callback=null,h=f.priorityLevel;var U=B(f.expirationTime<=O);O=t.unstable_now(),typeof U=="function"?f.callback=U:f===r(u)&&n(u),y(O)}else n(u);f=r(u)}if(f!==null)var mt=!0;else{var Z=r(c);Z!==null&&z(w,Z.startTime-O),mt=!1}return mt}finally{f=null,h=I,m=!1}}var j=!1,S=null,N=-1,C=5,E=-1;function M(){return!(t.unstable_now()-E<C)}function L(){if(S!==null){var P=t.unstable_now();E=P;var O=!0;try{O=S(!0,P)}finally{O?F():(j=!1,S=null)}}else j=!1}var F;if(typeof g=="function")F=function(){g(L)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,H=R.port2;R.port1.onmessage=L,F=function(){H.postMessage(null)}}else F=function(){_(L,0)};function q(P){S=P,j||(j=!0,F())}function z(P,O){N=_(function(){P(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,q(k))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(P){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var I=h;h=O;try{return P()}finally{h=I}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,O){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var I=h;h=P;try{return O()}finally{h=I}},t.unstable_scheduleCallback=function(P,O,I){var B=t.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?B+I:B):I=B,P){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=I+U,P={id:d++,callback:O,priorityLevel:P,startTime:I,expirationTime:U,sortIndex:-1},I>B?(P.sortIndex=I,e(c,P),r(u)===null&&P===r(c)&&(p?(v(N),N=-1):p=!0,z(w,I-B))):(P.sortIndex=U,e(u,P),x||m||(x=!0,q(k))),P},t.unstable_shouldYield=M,t.unstable_wrapCallback=function(P){var O=h;return function(){var I=h;h=O;try{return P.apply(this,arguments)}finally{h=I}}}})(kh);wh.exports=kh;var S0=wh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j0=b,ut=S0;function T(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sh=new Set,$i={};function hn(t,e){Vn(t,e),Vn(t+"Capture",e)}function Vn(t,e){for($i[t]=e,t=0;t<e.length;t++)Sh.add(e[t])}var Jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),so=Object.prototype.hasOwnProperty,b0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rd={},nd={};function N0(t){return so.call(nd,t)?!0:so.call(rd,t)?!1:b0.test(t)?nd[t]=!0:(rd[t]=!0,!1)}function C0(t,e,r,n){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E0(t,e,r,n){if(e===null||typeof e>"u"||C0(t,e,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ue(t,e,r,n,i,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Te[t]=new Ue(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Te[e]=new Ue(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Te[t]=new Ue(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Te[t]=new Ue(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Te[t]=new Ue(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Te[t]=new Ue(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Te[t]=new Ue(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Te[t]=new Ue(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Te[t]=new Ue(t,5,!1,t.toLowerCase(),null,!1,!1)});var Iu=/[\-:]([a-z])/g;function Du(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Iu,Du);Te[e]=new Ue(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Iu,Du);Te[e]=new Ue(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Iu,Du);Te[e]=new Ue(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Te[t]=new Ue(t,1,!1,t.toLowerCase(),null,!1,!1)});Te.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Te[t]=new Ue(t,1,!1,t.toLowerCase(),null,!0,!0)});function Bu(t,e,r,n){var i=Te.hasOwnProperty(e)?Te[e]:null;(i!==null?i.type!==0:n||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(E0(e,r,i,n)&&(r=null),n||i===null?N0(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):i.mustUseProperty?t[i.propertyName]=r===null?i.type===3?!1:"":r:(e=i.attributeName,n=i.attributeNamespace,r===null?t.removeAttribute(e):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?t.setAttributeNS(n,e,r):t.setAttribute(e,r))))}var sr=j0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Cs=Symbol.for("react.element"),wn=Symbol.for("react.portal"),kn=Symbol.for("react.fragment"),Uu=Symbol.for("react.strict_mode"),ao=Symbol.for("react.profiler"),jh=Symbol.for("react.provider"),bh=Symbol.for("react.context"),$u=Symbol.for("react.forward_ref"),lo=Symbol.for("react.suspense"),oo=Symbol.for("react.suspense_list"),Wu=Symbol.for("react.memo"),cr=Symbol.for("react.lazy"),Nh=Symbol.for("react.offscreen"),id=Symbol.iterator;function hi(t){return t===null||typeof t!="object"?null:(t=id&&t[id]||t["@@iterator"],typeof t=="function"?t:null)}var de=Object.assign,yl;function ki(t){if(yl===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);yl=e&&e[1]||""}return`
`+yl+t}var _l=!1;function wl(t,e){if(!t||_l)return"";_l=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var n=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){n=c}t.call(e.prototype)}else{try{throw Error()}catch(c){n=c}t()}}catch(c){if(c&&n&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=n.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var u=`
`+i[a].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=a&&0<=l);break}}}finally{_l=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?ki(t):""}function P0(t){switch(t.tag){case 5:return ki(t.type);case 16:return ki("Lazy");case 13:return ki("Suspense");case 19:return ki("SuspenseList");case 0:case 2:case 15:return t=wl(t.type,!1),t;case 11:return t=wl(t.type.render,!1),t;case 1:return t=wl(t.type,!0),t;default:return""}}function uo(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case kn:return"Fragment";case wn:return"Portal";case ao:return"Profiler";case Uu:return"StrictMode";case lo:return"Suspense";case oo:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case bh:return(t.displayName||"Context")+".Consumer";case jh:return(t._context.displayName||"Context")+".Provider";case $u:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Wu:return e=t.displayName||null,e!==null?e:uo(t.type)||"Memo";case cr:e=t._payload,t=t._init;try{return uo(t(e))}catch{}}return null}function T0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return uo(e);case 8:return e===Uu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function zr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ch(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function z0(t){var e=Ch(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,s=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(a){n=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Es(t){t._valueTracker||(t._valueTracker=z0(t))}function Eh(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),n="";return t&&(n=Ch(t)?t.checked?"true":"false":t.value),t=n,t!==r?(e.setValue(t),!0):!1}function la(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function co(t,e){var r=e.checked;return de({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function sd(t,e){var r=e.defaultValue==null?"":e.defaultValue,n=e.checked!=null?e.checked:e.defaultChecked;r=zr(e.value!=null?e.value:r),t._wrapperState={initialChecked:n,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ph(t,e){e=e.checked,e!=null&&Bu(t,"checked",e,!1)}function fo(t,e){Ph(t,e);var r=zr(e.value),n=e.type;if(r!=null)n==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(n==="submit"||n==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ho(t,e.type,r):e.hasOwnProperty("defaultValue")&&ho(t,e.type,zr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ad(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var n=e.type;if(!(n!=="submit"&&n!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function ho(t,e,r){(e!=="number"||la(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var Si=Array.isArray;function On(t,e,r,n){if(t=t.options,e){e={};for(var i=0;i<r.length;i++)e["$"+r[i]]=!0;for(r=0;r<t.length;r++)i=e.hasOwnProperty("$"+t[r].value),t[r].selected!==i&&(t[r].selected=i),i&&n&&(t[r].defaultSelected=!0)}else{for(r=""+zr(r),e=null,i=0;i<t.length;i++){if(t[i].value===r){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function po(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(T(91));return de({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ld(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(T(92));if(Si(r)){if(1<r.length)throw Error(T(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:zr(r)}}function Th(t,e){var r=zr(e.value),n=zr(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),n!=null&&(t.defaultValue=""+n)}function od(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function zh(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mo(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?zh(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ps,Mh=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,n,i){MSApp.execUnsafeLocalFunction(function(){return t(e,r,n,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ps=Ps||document.createElement("div"),Ps.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ps.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Wi(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var Ei={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},M0=["Webkit","ms","Moz","O"];Object.keys(Ei).forEach(function(t){M0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ei[e]=Ei[t]})});function Lh(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||Ei.hasOwnProperty(t)&&Ei[t]?(""+e).trim():e+"px"}function Rh(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=Lh(r,e[r],n);r==="float"&&(r="cssFloat"),n?t.setProperty(r,i):t[r]=i}}var L0=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function go(t,e){if(e){if(L0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(T(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(T(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(T(61))}if(e.style!=null&&typeof e.style!="object")throw Error(T(62))}}function vo(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xo=null;function Vu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yo=null,An=null,Fn=null;function ud(t){if(t=_s(t)){if(typeof yo!="function")throw Error(T(280));var e=t.stateNode;e&&(e=Xa(e),yo(t.stateNode,t.type,e))}}function Oh(t){An?Fn?Fn.push(t):Fn=[t]:An=t}function Ah(){if(An){var t=An,e=Fn;if(Fn=An=null,ud(t),e)for(t=0;t<e.length;t++)ud(e[t])}}function Fh(t,e){return t(e)}function Ih(){}var kl=!1;function Dh(t,e,r){if(kl)return t(e,r);kl=!0;try{return Fh(t,e,r)}finally{kl=!1,(An!==null||Fn!==null)&&(Ih(),Ah())}}function Vi(t,e){var r=t.stateNode;if(r===null)return null;var n=Xa(r);if(n===null)return null;r=n[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(T(231,e,typeof r));return r}var _o=!1;if(Jt)try{var pi={};Object.defineProperty(pi,"passive",{get:function(){_o=!0}}),window.addEventListener("test",pi,pi),window.removeEventListener("test",pi,pi)}catch{_o=!1}function R0(t,e,r,n,i,s,a,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(r,c)}catch(d){this.onError(d)}}var Pi=!1,oa=null,ua=!1,wo=null,O0={onError:function(t){Pi=!0,oa=t}};function A0(t,e,r,n,i,s,a,l,u){Pi=!1,oa=null,R0.apply(O0,arguments)}function F0(t,e,r,n,i,s,a,l,u){if(A0.apply(this,arguments),Pi){if(Pi){var c=oa;Pi=!1,oa=null}else throw Error(T(198));ua||(ua=!0,wo=c)}}function pn(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function Bh(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function cd(t){if(pn(t)!==t)throw Error(T(188))}function I0(t){var e=t.alternate;if(!e){if(e=pn(t),e===null)throw Error(T(188));return e!==t?null:t}for(var r=t,n=e;;){var i=r.return;if(i===null)break;var s=i.alternate;if(s===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===r)return cd(i),t;if(s===n)return cd(i),e;s=s.sibling}throw Error(T(188))}if(r.return!==n.return)r=i,n=s;else{for(var a=!1,l=i.child;l;){if(l===r){a=!0,r=i,n=s;break}if(l===n){a=!0,n=i,r=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===r){a=!0,r=s,n=i;break}if(l===n){a=!0,n=s,r=i;break}l=l.sibling}if(!a)throw Error(T(189))}}if(r.alternate!==n)throw Error(T(190))}if(r.tag!==3)throw Error(T(188));return r.stateNode.current===r?t:e}function Uh(t){return t=I0(t),t!==null?$h(t):null}function $h(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=$h(t);if(e!==null)return e;t=t.sibling}return null}var Wh=ut.unstable_scheduleCallback,dd=ut.unstable_cancelCallback,D0=ut.unstable_shouldYield,B0=ut.unstable_requestPaint,ye=ut.unstable_now,U0=ut.unstable_getCurrentPriorityLevel,Hu=ut.unstable_ImmediatePriority,Vh=ut.unstable_UserBlockingPriority,ca=ut.unstable_NormalPriority,$0=ut.unstable_LowPriority,Hh=ut.unstable_IdlePriority,qa=null,Ut=null;function W0(t){if(Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(qa,t,void 0,(t.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:q0,V0=Math.log,H0=Math.LN2;function q0(t){return t>>>=0,t===0?32:31-(V0(t)/H0|0)|0}var Ts=64,zs=4194304;function ji(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function da(t,e){var r=t.pendingLanes;if(r===0)return 0;var n=0,i=t.suspendedLanes,s=t.pingedLanes,a=r&268435455;if(a!==0){var l=a&~i;l!==0?n=ji(l):(s&=a,s!==0&&(n=ji(s)))}else a=r&~i,a!==0?n=ji(a):s!==0&&(n=ji(s));if(n===0)return 0;if(e!==0&&e!==n&&!(e&i)&&(i=n&-n,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(n&4&&(n|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=n;0<e;)r=31-Mt(e),i=1<<r,n|=t[r],e&=~i;return n}function Y0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Q0(t,e){for(var r=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Mt(s),l=1<<a,u=i[a];u===-1?(!(l&r)||l&n)&&(i[a]=Y0(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function ko(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function qh(){var t=Ts;return Ts<<=1,!(Ts&4194240)&&(Ts=64),t}function Sl(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function xs(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Mt(e),t[e]=r}function G0(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var n=t.eventTimes;for(t=t.expirationTimes;0<r;){var i=31-Mt(r),s=1<<i;e[i]=0,n[i]=-1,t[i]=-1,r&=~s}}function qu(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var n=31-Mt(r),i=1<<n;i&e|t[n]&e&&(t[n]|=e),r&=~i}}var Y=0;function Yh(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Qh,Yu,Gh,Xh,Kh,So=!1,Ms=[],_r=null,wr=null,kr=null,Hi=new Map,qi=new Map,fr=[],X0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fd(t,e){switch(t){case"focusin":case"focusout":_r=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":kr=null;break;case"pointerover":case"pointerout":Hi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qi.delete(e.pointerId)}}function mi(t,e,r,n,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:r,eventSystemFlags:n,nativeEvent:s,targetContainers:[i]},e!==null&&(e=_s(e),e!==null&&Yu(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function K0(t,e,r,n,i){switch(e){case"focusin":return _r=mi(_r,t,e,r,n,i),!0;case"dragenter":return wr=mi(wr,t,e,r,n,i),!0;case"mouseover":return kr=mi(kr,t,e,r,n,i),!0;case"pointerover":var s=i.pointerId;return Hi.set(s,mi(Hi.get(s)||null,t,e,r,n,i)),!0;case"gotpointercapture":return s=i.pointerId,qi.set(s,mi(qi.get(s)||null,t,e,r,n,i)),!0}return!1}function Zh(t){var e=Qr(t.target);if(e!==null){var r=pn(e);if(r!==null){if(e=r.tag,e===13){if(e=Bh(r),e!==null){t.blockedOn=e,Kh(t.priority,function(){Gh(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qs(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=jo(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var n=new r.constructor(r.type,r);xo=n,r.target.dispatchEvent(n),xo=null}else return e=_s(r),e!==null&&Yu(e),t.blockedOn=r,!1;e.shift()}return!0}function hd(t,e,r){Qs(t)&&r.delete(e)}function Z0(){So=!1,_r!==null&&Qs(_r)&&(_r=null),wr!==null&&Qs(wr)&&(wr=null),kr!==null&&Qs(kr)&&(kr=null),Hi.forEach(hd),qi.forEach(hd)}function gi(t,e){t.blockedOn===e&&(t.blockedOn=null,So||(So=!0,ut.unstable_scheduleCallback(ut.unstable_NormalPriority,Z0)))}function Yi(t){function e(i){return gi(i,t)}if(0<Ms.length){gi(Ms[0],t);for(var r=1;r<Ms.length;r++){var n=Ms[r];n.blockedOn===t&&(n.blockedOn=null)}}for(_r!==null&&gi(_r,t),wr!==null&&gi(wr,t),kr!==null&&gi(kr,t),Hi.forEach(e),qi.forEach(e),r=0;r<fr.length;r++)n=fr[r],n.blockedOn===t&&(n.blockedOn=null);for(;0<fr.length&&(r=fr[0],r.blockedOn===null);)Zh(r),r.blockedOn===null&&fr.shift()}var In=sr.ReactCurrentBatchConfig,fa=!0;function J0(t,e,r,n){var i=Y,s=In.transition;In.transition=null;try{Y=1,Qu(t,e,r,n)}finally{Y=i,In.transition=s}}function e1(t,e,r,n){var i=Y,s=In.transition;In.transition=null;try{Y=4,Qu(t,e,r,n)}finally{Y=i,In.transition=s}}function Qu(t,e,r,n){if(fa){var i=jo(t,e,r,n);if(i===null)Ll(t,e,n,ha,r),fd(t,n);else if(K0(i,t,e,r,n))n.stopPropagation();else if(fd(t,n),e&4&&-1<X0.indexOf(t)){for(;i!==null;){var s=_s(i);if(s!==null&&Qh(s),s=jo(t,e,r,n),s===null&&Ll(t,e,n,ha,r),s===i)break;i=s}i!==null&&n.stopPropagation()}else Ll(t,e,n,null,r)}}var ha=null;function jo(t,e,r,n){if(ha=null,t=Vu(n),t=Qr(t),t!==null)if(e=pn(t),e===null)t=null;else if(r=e.tag,r===13){if(t=Bh(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ha=t,null}function Jh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(U0()){case Hu:return 1;case Vh:return 4;case ca:case $0:return 16;case Hh:return 536870912;default:return 16}default:return 16}}var pr=null,Gu=null,Gs=null;function ep(){if(Gs)return Gs;var t,e=Gu,r=e.length,n,i="value"in pr?pr.value:pr.textContent,s=i.length;for(t=0;t<r&&e[t]===i[t];t++);var a=r-t;for(n=1;n<=a&&e[r-n]===i[s-n];n++);return Gs=i.slice(t,1<n?1-n:void 0)}function Xs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ls(){return!0}function pd(){return!1}function ht(t){function e(r,n,i,s,a){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(r=t[l],this[l]=r?r(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ls:pd,this.isPropagationStopped=pd,this}return de(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ls)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ls)},persist:function(){},isPersistent:Ls}),e}var si={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xu=ht(si),ys=de({},si,{view:0,detail:0}),t1=ht(ys),jl,bl,vi,Ya=de({},ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ku,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==vi&&(vi&&t.type==="mousemove"?(jl=t.screenX-vi.screenX,bl=t.screenY-vi.screenY):bl=jl=0,vi=t),jl)},movementY:function(t){return"movementY"in t?t.movementY:bl}}),md=ht(Ya),r1=de({},Ya,{dataTransfer:0}),n1=ht(r1),i1=de({},ys,{relatedTarget:0}),Nl=ht(i1),s1=de({},si,{animationName:0,elapsedTime:0,pseudoElement:0}),a1=ht(s1),l1=de({},si,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),o1=ht(l1),u1=de({},si,{data:0}),gd=ht(u1),c1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},d1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},f1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function h1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=f1[t])?!!e[t]:!1}function Ku(){return h1}var p1=de({},ys,{key:function(t){if(t.key){var e=c1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Xs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?d1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ku,charCode:function(t){return t.type==="keypress"?Xs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),m1=ht(p1),g1=de({},Ya,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vd=ht(g1),v1=de({},ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ku}),x1=ht(v1),y1=de({},si,{propertyName:0,elapsedTime:0,pseudoElement:0}),_1=ht(y1),w1=de({},Ya,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),k1=ht(w1),S1=[9,13,27,32],Zu=Jt&&"CompositionEvent"in window,Ti=null;Jt&&"documentMode"in document&&(Ti=document.documentMode);var j1=Jt&&"TextEvent"in window&&!Ti,tp=Jt&&(!Zu||Ti&&8<Ti&&11>=Ti),xd=" ",yd=!1;function rp(t,e){switch(t){case"keyup":return S1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function np(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Sn=!1;function b1(t,e){switch(t){case"compositionend":return np(e);case"keypress":return e.which!==32?null:(yd=!0,xd);case"textInput":return t=e.data,t===xd&&yd?null:t;default:return null}}function N1(t,e){if(Sn)return t==="compositionend"||!Zu&&rp(t,e)?(t=ep(),Gs=Gu=pr=null,Sn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return tp&&e.locale!=="ko"?null:e.data;default:return null}}var C1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _d(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!C1[t.type]:e==="textarea"}function ip(t,e,r,n){Oh(n),e=pa(e,"onChange"),0<e.length&&(r=new Xu("onChange","change",null,r,n),t.push({event:r,listeners:e}))}var zi=null,Qi=null;function E1(t){mp(t,0)}function Qa(t){var e=Nn(t);if(Eh(e))return t}function P1(t,e){if(t==="change")return e}var sp=!1;if(Jt){var Cl;if(Jt){var El="oninput"in document;if(!El){var wd=document.createElement("div");wd.setAttribute("oninput","return;"),El=typeof wd.oninput=="function"}Cl=El}else Cl=!1;sp=Cl&&(!document.documentMode||9<document.documentMode)}function kd(){zi&&(zi.detachEvent("onpropertychange",ap),Qi=zi=null)}function ap(t){if(t.propertyName==="value"&&Qa(Qi)){var e=[];ip(e,Qi,t,Vu(t)),Dh(E1,e)}}function T1(t,e,r){t==="focusin"?(kd(),zi=e,Qi=r,zi.attachEvent("onpropertychange",ap)):t==="focusout"&&kd()}function z1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qa(Qi)}function M1(t,e){if(t==="click")return Qa(e)}function L1(t,e){if(t==="input"||t==="change")return Qa(e)}function R1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Rt=typeof Object.is=="function"?Object.is:R1;function Gi(t,e){if(Rt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!so.call(e,i)||!Rt(t[i],e[i]))return!1}return!0}function Sd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jd(t,e){var r=Sd(t);t=0;for(var n;r;){if(r.nodeType===3){if(n=t+r.textContent.length,t<=e&&n>=e)return{node:r,offset:e-t};t=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Sd(r)}}function lp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?lp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function op(){for(var t=window,e=la();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=la(t.document)}return e}function Ju(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function O1(t){var e=op(),r=t.focusedElem,n=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&lp(r.ownerDocument.documentElement,r)){if(n!==null&&Ju(r)){if(e=n.start,t=n.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=r.textContent.length,s=Math.min(n.start,i);n=n.end===void 0?s:Math.min(n.end,i),!t.extend&&s>n&&(i=n,n=s,s=i),i=jd(r,s);var a=jd(r,n);i&&a&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>n?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var A1=Jt&&"documentMode"in document&&11>=document.documentMode,jn=null,bo=null,Mi=null,No=!1;function bd(t,e,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;No||jn==null||jn!==la(n)||(n=jn,"selectionStart"in n&&Ju(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Mi&&Gi(Mi,n)||(Mi=n,n=pa(bo,"onSelect"),0<n.length&&(e=new Xu("onSelect","select",null,e,r),t.push({event:e,listeners:n}),e.target=jn)))}function Rs(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var bn={animationend:Rs("Animation","AnimationEnd"),animationiteration:Rs("Animation","AnimationIteration"),animationstart:Rs("Animation","AnimationStart"),transitionend:Rs("Transition","TransitionEnd")},Pl={},up={};Jt&&(up=document.createElement("div").style,"AnimationEvent"in window||(delete bn.animationend.animation,delete bn.animationiteration.animation,delete bn.animationstart.animation),"TransitionEvent"in window||delete bn.transitionend.transition);function Ga(t){if(Pl[t])return Pl[t];if(!bn[t])return t;var e=bn[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in up)return Pl[t]=e[r];return t}var cp=Ga("animationend"),dp=Ga("animationiteration"),fp=Ga("animationstart"),hp=Ga("transitionend"),pp=new Map,Nd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(t,e){pp.set(t,e),hn(e,[t])}for(var Tl=0;Tl<Nd.length;Tl++){var zl=Nd[Tl],F1=zl.toLowerCase(),I1=zl[0].toUpperCase()+zl.slice(1);Ar(F1,"on"+I1)}Ar(cp,"onAnimationEnd");Ar(dp,"onAnimationIteration");Ar(fp,"onAnimationStart");Ar("dblclick","onDoubleClick");Ar("focusin","onFocus");Ar("focusout","onBlur");Ar(hp,"onTransitionEnd");Vn("onMouseEnter",["mouseout","mouseover"]);Vn("onMouseLeave",["mouseout","mouseover"]);Vn("onPointerEnter",["pointerout","pointerover"]);Vn("onPointerLeave",["pointerout","pointerover"]);hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),D1=new Set("cancel close invalid load scroll toggle".split(" ").concat(bi));function Cd(t,e,r){var n=t.type||"unknown-event";t.currentTarget=r,F0(n,e,void 0,t),t.currentTarget=null}function mp(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var n=t[r],i=n.event;n=n.listeners;e:{var s=void 0;if(e)for(var a=n.length-1;0<=a;a--){var l=n[a],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Cd(i,l,c),s=u}else for(a=0;a<n.length;a++){if(l=n[a],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Cd(i,l,c),s=u}}}if(ua)throw t=wo,ua=!1,wo=null,t}function ee(t,e){var r=e[zo];r===void 0&&(r=e[zo]=new Set);var n=t+"__bubble";r.has(n)||(gp(e,t,2,!1),r.add(n))}function Ml(t,e,r){var n=0;e&&(n|=4),gp(r,t,n,e)}var Os="_reactListening"+Math.random().toString(36).slice(2);function Xi(t){if(!t[Os]){t[Os]=!0,Sh.forEach(function(r){r!=="selectionchange"&&(D1.has(r)||Ml(r,!1,t),Ml(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Os]||(e[Os]=!0,Ml("selectionchange",!1,e))}}function gp(t,e,r,n){switch(Jh(e)){case 1:var i=J0;break;case 4:i=e1;break;default:i=Qu}r=i.bind(null,e,r,t),i=void 0,!_o||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(e,r,{capture:!0,passive:i}):t.addEventListener(e,r,!0):i!==void 0?t.addEventListener(e,r,{passive:i}):t.addEventListener(e,r,!1)}function Ll(t,e,r,n,i){var s=n;if(!(e&1)&&!(e&2)&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var l=n.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=n.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Qr(l),a===null)return;if(u=a.tag,u===5||u===6){n=s=a;continue e}l=l.parentNode}}n=n.return}Dh(function(){var c=s,d=Vu(r),f=[];e:{var h=pp.get(t);if(h!==void 0){var m=Xu,x=t;switch(t){case"keypress":if(Xs(r)===0)break e;case"keydown":case"keyup":m=m1;break;case"focusin":x="focus",m=Nl;break;case"focusout":x="blur",m=Nl;break;case"beforeblur":case"afterblur":m=Nl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=md;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=n1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=x1;break;case cp:case dp:case fp:m=a1;break;case hp:m=_1;break;case"scroll":m=t1;break;case"wheel":m=k1;break;case"copy":case"cut":case"paste":m=o1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=vd}var p=(e&4)!==0,_=!p&&t==="scroll",v=p?h!==null?h+"Capture":null:h;p=[];for(var g=c,y;g!==null;){y=g;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,v!==null&&(w=Vi(g,v),w!=null&&p.push(Ki(g,w,y)))),_)break;g=g.return}0<p.length&&(h=new m(h,x,null,r,d),f.push({event:h,listeners:p}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&r!==xo&&(x=r.relatedTarget||r.fromElement)&&(Qr(x)||x[er]))break e;if((m||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,m?(x=r.relatedTarget||r.toElement,m=c,x=x?Qr(x):null,x!==null&&(_=pn(x),x!==_||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=c),m!==x)){if(p=md,w="onMouseLeave",v="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(p=vd,w="onPointerLeave",v="onPointerEnter",g="pointer"),_=m==null?h:Nn(m),y=x==null?h:Nn(x),h=new p(w,g+"leave",m,r,d),h.target=_,h.relatedTarget=y,w=null,Qr(d)===c&&(p=new p(v,g+"enter",x,r,d),p.target=y,p.relatedTarget=_,w=p),_=w,m&&x)t:{for(p=m,v=x,g=0,y=p;y;y=xn(y))g++;for(y=0,w=v;w;w=xn(w))y++;for(;0<g-y;)p=xn(p),g--;for(;0<y-g;)v=xn(v),y--;for(;g--;){if(p===v||v!==null&&p===v.alternate)break t;p=xn(p),v=xn(v)}p=null}else p=null;m!==null&&Ed(f,h,m,p,!1),x!==null&&_!==null&&Ed(f,_,x,p,!0)}}e:{if(h=c?Nn(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var k=P1;else if(_d(h))if(sp)k=L1;else{k=z1;var j=T1}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=M1);if(k&&(k=k(t,c))){ip(f,k,r,d);break e}j&&j(t,h,c),t==="focusout"&&(j=h._wrapperState)&&j.controlled&&h.type==="number"&&ho(h,"number",h.value)}switch(j=c?Nn(c):window,t){case"focusin":(_d(j)||j.contentEditable==="true")&&(jn=j,bo=c,Mi=null);break;case"focusout":Mi=bo=jn=null;break;case"mousedown":No=!0;break;case"contextmenu":case"mouseup":case"dragend":No=!1,bd(f,r,d);break;case"selectionchange":if(A1)break;case"keydown":case"keyup":bd(f,r,d)}var S;if(Zu)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Sn?rp(t,r)&&(N="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(N="onCompositionStart");N&&(tp&&r.locale!=="ko"&&(Sn||N!=="onCompositionStart"?N==="onCompositionEnd"&&Sn&&(S=ep()):(pr=d,Gu="value"in pr?pr.value:pr.textContent,Sn=!0)),j=pa(c,N),0<j.length&&(N=new gd(N,t,null,r,d),f.push({event:N,listeners:j}),S?N.data=S:(S=np(r),S!==null&&(N.data=S)))),(S=j1?b1(t,r):N1(t,r))&&(c=pa(c,"onBeforeInput"),0<c.length&&(d=new gd("onBeforeInput","beforeinput",null,r,d),f.push({event:d,listeners:c}),d.data=S))}mp(f,e)})}function Ki(t,e,r){return{instance:t,listener:e,currentTarget:r}}function pa(t,e){for(var r=e+"Capture",n=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Vi(t,r),s!=null&&n.unshift(Ki(t,s,i)),s=Vi(t,e),s!=null&&n.push(Ki(t,s,i))),t=t.return}return n}function xn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ed(t,e,r,n,i){for(var s=e._reactName,a=[];r!==null&&r!==n;){var l=r,u=l.alternate,c=l.stateNode;if(u!==null&&u===n)break;l.tag===5&&c!==null&&(l=c,i?(u=Vi(r,s),u!=null&&a.unshift(Ki(r,u,l))):i||(u=Vi(r,s),u!=null&&a.push(Ki(r,u,l)))),r=r.return}a.length!==0&&t.push({event:e,listeners:a})}var B1=/\r\n?/g,U1=/\u0000|\uFFFD/g;function Pd(t){return(typeof t=="string"?t:""+t).replace(B1,`
`).replace(U1,"")}function As(t,e,r){if(e=Pd(e),Pd(t)!==e&&r)throw Error(T(425))}function ma(){}var Co=null,Eo=null;function Po(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var To=typeof setTimeout=="function"?setTimeout:void 0,$1=typeof clearTimeout=="function"?clearTimeout:void 0,Td=typeof Promise=="function"?Promise:void 0,W1=typeof queueMicrotask=="function"?queueMicrotask:typeof Td<"u"?function(t){return Td.resolve(null).then(t).catch(V1)}:To;function V1(t){setTimeout(function(){throw t})}function Rl(t,e){var r=e,n=0;do{var i=r.nextSibling;if(t.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){t.removeChild(i),Yi(e);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);Yi(e)}function Sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function zd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var ai=Math.random().toString(36).slice(2),It="__reactFiber$"+ai,Zi="__reactProps$"+ai,er="__reactContainer$"+ai,zo="__reactEvents$"+ai,H1="__reactListeners$"+ai,q1="__reactHandles$"+ai;function Qr(t){var e=t[It];if(e)return e;for(var r=t.parentNode;r;){if(e=r[er]||r[It]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=zd(t);t!==null;){if(r=t[It])return r;t=zd(t)}return e}t=r,r=t.parentNode}return null}function _s(t){return t=t[It]||t[er],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Nn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(T(33))}function Xa(t){return t[Zi]||null}var Mo=[],Cn=-1;function Fr(t){return{current:t}}function te(t){0>Cn||(t.current=Mo[Cn],Mo[Cn]=null,Cn--)}function J(t,e){Cn++,Mo[Cn]=t.current,t.current=e}var Mr={},Fe=Fr(Mr),He=Fr(!1),on=Mr;function Hn(t,e){var r=t.type.contextTypes;if(!r)return Mr;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===e)return n.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in r)i[s]=e[s];return n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function qe(t){return t=t.childContextTypes,t!=null}function ga(){te(He),te(Fe)}function Md(t,e,r){if(Fe.current!==Mr)throw Error(T(168));J(Fe,e),J(He,r)}function vp(t,e,r){var n=t.stateNode;if(e=e.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in e))throw Error(T(108,T0(t)||"Unknown",i));return de({},r,n)}function va(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mr,on=Fe.current,J(Fe,t),J(He,He.current),!0}function Ld(t,e,r){var n=t.stateNode;if(!n)throw Error(T(169));r?(t=vp(t,e,on),n.__reactInternalMemoizedMergedChildContext=t,te(He),te(Fe),J(Fe,t)):te(He),J(He,r)}var qt=null,Ka=!1,Ol=!1;function xp(t){qt===null?qt=[t]:qt.push(t)}function Y1(t){Ka=!0,xp(t)}function Ir(){if(!Ol&&qt!==null){Ol=!0;var t=0,e=Y;try{var r=qt;for(Y=1;t<r.length;t++){var n=r[t];do n=n(!0);while(n!==null)}qt=null,Ka=!1}catch(i){throw qt!==null&&(qt=qt.slice(t+1)),Wh(Hu,Ir),i}finally{Y=e,Ol=!1}}return null}var En=[],Pn=0,xa=null,ya=0,vt=[],xt=0,un=null,Gt=1,Xt="";function Hr(t,e){En[Pn++]=ya,En[Pn++]=xa,xa=t,ya=e}function yp(t,e,r){vt[xt++]=Gt,vt[xt++]=Xt,vt[xt++]=un,un=t;var n=Gt;t=Xt;var i=32-Mt(n)-1;n&=~(1<<i),r+=1;var s=32-Mt(e)+i;if(30<s){var a=i-i%5;s=(n&(1<<a)-1).toString(32),n>>=a,i-=a,Gt=1<<32-Mt(e)+i|r<<i|n,Xt=s+t}else Gt=1<<s|r<<i|n,Xt=t}function ec(t){t.return!==null&&(Hr(t,1),yp(t,1,0))}function tc(t){for(;t===xa;)xa=En[--Pn],En[Pn]=null,ya=En[--Pn],En[Pn]=null;for(;t===un;)un=vt[--xt],vt[xt]=null,Xt=vt[--xt],vt[xt]=null,Gt=vt[--xt],vt[xt]=null}var lt=null,it=null,re=!1,Tt=null;function _p(t,e){var r=yt(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function Rd(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,lt=t,it=Sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,lt=t,it=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=un!==null?{id:Gt,overflow:Xt}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=yt(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,lt=t,it=null,!0):!1;default:return!1}}function Lo(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ro(t){if(re){var e=it;if(e){var r=e;if(!Rd(t,e)){if(Lo(t))throw Error(T(418));e=Sr(r.nextSibling);var n=lt;e&&Rd(t,e)?_p(n,r):(t.flags=t.flags&-4097|2,re=!1,lt=t)}}else{if(Lo(t))throw Error(T(418));t.flags=t.flags&-4097|2,re=!1,lt=t}}}function Od(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;lt=t}function Fs(t){if(t!==lt)return!1;if(!re)return Od(t),re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Po(t.type,t.memoizedProps)),e&&(e=it)){if(Lo(t))throw wp(),Error(T(418));for(;e;)_p(t,e),e=Sr(e.nextSibling)}if(Od(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(T(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){it=Sr(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}it=null}}else it=lt?Sr(t.stateNode.nextSibling):null;return!0}function wp(){for(var t=it;t;)t=Sr(t.nextSibling)}function qn(){it=lt=null,re=!1}function rc(t){Tt===null?Tt=[t]:Tt.push(t)}var Q1=sr.ReactCurrentBatchConfig;function xi(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(T(309));var n=r.stateNode}if(!n)throw Error(T(147,t));var i=n,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(T(284));if(!r._owner)throw Error(T(290,t))}return t}function Is(t,e){throw t=Object.prototype.toString.call(e),Error(T(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ad(t){var e=t._init;return e(t._payload)}function kp(t){function e(v,g){if(t){var y=v.deletions;y===null?(v.deletions=[g],v.flags|=16):y.push(g)}}function r(v,g){if(!t)return null;for(;g!==null;)e(v,g),g=g.sibling;return null}function n(v,g){for(v=new Map;g!==null;)g.key!==null?v.set(g.key,g):v.set(g.index,g),g=g.sibling;return v}function i(v,g){return v=Cr(v,g),v.index=0,v.sibling=null,v}function s(v,g,y){return v.index=y,t?(y=v.alternate,y!==null?(y=y.index,y<g?(v.flags|=2,g):y):(v.flags|=2,g)):(v.flags|=1048576,g)}function a(v){return t&&v.alternate===null&&(v.flags|=2),v}function l(v,g,y,w){return g===null||g.tag!==6?(g=$l(y,v.mode,w),g.return=v,g):(g=i(g,y),g.return=v,g)}function u(v,g,y,w){var k=y.type;return k===kn?d(v,g,y.props.children,w,y.key):g!==null&&(g.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===cr&&Ad(k)===g.type)?(w=i(g,y.props),w.ref=xi(v,g,y),w.return=v,w):(w=na(y.type,y.key,y.props,null,v.mode,w),w.ref=xi(v,g,y),w.return=v,w)}function c(v,g,y,w){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=Wl(y,v.mode,w),g.return=v,g):(g=i(g,y.children||[]),g.return=v,g)}function d(v,g,y,w,k){return g===null||g.tag!==7?(g=tn(y,v.mode,w,k),g.return=v,g):(g=i(g,y),g.return=v,g)}function f(v,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=$l(""+g,v.mode,y),g.return=v,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Cs:return y=na(g.type,g.key,g.props,null,v.mode,y),y.ref=xi(v,null,g),y.return=v,y;case wn:return g=Wl(g,v.mode,y),g.return=v,g;case cr:var w=g._init;return f(v,w(g._payload),y)}if(Si(g)||hi(g))return g=tn(g,v.mode,y,null),g.return=v,g;Is(v,g)}return null}function h(v,g,y,w){var k=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return k!==null?null:l(v,g,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Cs:return y.key===k?u(v,g,y,w):null;case wn:return y.key===k?c(v,g,y,w):null;case cr:return k=y._init,h(v,g,k(y._payload),w)}if(Si(y)||hi(y))return k!==null?null:d(v,g,y,w,null);Is(v,y)}return null}function m(v,g,y,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return v=v.get(y)||null,l(g,v,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Cs:return v=v.get(w.key===null?y:w.key)||null,u(g,v,w,k);case wn:return v=v.get(w.key===null?y:w.key)||null,c(g,v,w,k);case cr:var j=w._init;return m(v,g,y,j(w._payload),k)}if(Si(w)||hi(w))return v=v.get(y)||null,d(g,v,w,k,null);Is(g,w)}return null}function x(v,g,y,w){for(var k=null,j=null,S=g,N=g=0,C=null;S!==null&&N<y.length;N++){S.index>N?(C=S,S=null):C=S.sibling;var E=h(v,S,y[N],w);if(E===null){S===null&&(S=C);break}t&&S&&E.alternate===null&&e(v,S),g=s(E,g,N),j===null?k=E:j.sibling=E,j=E,S=C}if(N===y.length)return r(v,S),re&&Hr(v,N),k;if(S===null){for(;N<y.length;N++)S=f(v,y[N],w),S!==null&&(g=s(S,g,N),j===null?k=S:j.sibling=S,j=S);return re&&Hr(v,N),k}for(S=n(v,S);N<y.length;N++)C=m(S,v,N,y[N],w),C!==null&&(t&&C.alternate!==null&&S.delete(C.key===null?N:C.key),g=s(C,g,N),j===null?k=C:j.sibling=C,j=C);return t&&S.forEach(function(M){return e(v,M)}),re&&Hr(v,N),k}function p(v,g,y,w){var k=hi(y);if(typeof k!="function")throw Error(T(150));if(y=k.call(y),y==null)throw Error(T(151));for(var j=k=null,S=g,N=g=0,C=null,E=y.next();S!==null&&!E.done;N++,E=y.next()){S.index>N?(C=S,S=null):C=S.sibling;var M=h(v,S,E.value,w);if(M===null){S===null&&(S=C);break}t&&S&&M.alternate===null&&e(v,S),g=s(M,g,N),j===null?k=M:j.sibling=M,j=M,S=C}if(E.done)return r(v,S),re&&Hr(v,N),k;if(S===null){for(;!E.done;N++,E=y.next())E=f(v,E.value,w),E!==null&&(g=s(E,g,N),j===null?k=E:j.sibling=E,j=E);return re&&Hr(v,N),k}for(S=n(v,S);!E.done;N++,E=y.next())E=m(S,v,N,E.value,w),E!==null&&(t&&E.alternate!==null&&S.delete(E.key===null?N:E.key),g=s(E,g,N),j===null?k=E:j.sibling=E,j=E);return t&&S.forEach(function(L){return e(v,L)}),re&&Hr(v,N),k}function _(v,g,y,w){if(typeof y=="object"&&y!==null&&y.type===kn&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Cs:e:{for(var k=y.key,j=g;j!==null;){if(j.key===k){if(k=y.type,k===kn){if(j.tag===7){r(v,j.sibling),g=i(j,y.props.children),g.return=v,v=g;break e}}else if(j.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===cr&&Ad(k)===j.type){r(v,j.sibling),g=i(j,y.props),g.ref=xi(v,j,y),g.return=v,v=g;break e}r(v,j);break}else e(v,j);j=j.sibling}y.type===kn?(g=tn(y.props.children,v.mode,w,y.key),g.return=v,v=g):(w=na(y.type,y.key,y.props,null,v.mode,w),w.ref=xi(v,g,y),w.return=v,v=w)}return a(v);case wn:e:{for(j=y.key;g!==null;){if(g.key===j)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){r(v,g.sibling),g=i(g,y.children||[]),g.return=v,v=g;break e}else{r(v,g);break}else e(v,g);g=g.sibling}g=Wl(y,v.mode,w),g.return=v,v=g}return a(v);case cr:return j=y._init,_(v,g,j(y._payload),w)}if(Si(y))return x(v,g,y,w);if(hi(y))return p(v,g,y,w);Is(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(r(v,g.sibling),g=i(g,y),g.return=v,v=g):(r(v,g),g=$l(y,v.mode,w),g.return=v,v=g),a(v)):r(v,g)}return _}var Yn=kp(!0),Sp=kp(!1),_a=Fr(null),wa=null,Tn=null,nc=null;function ic(){nc=Tn=wa=null}function sc(t){var e=_a.current;te(_a),t._currentValue=e}function Oo(t,e,r){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===r)break;t=t.return}}function Dn(t,e){wa=t,nc=Tn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ve=!0),t.firstContext=null)}function St(t){var e=t._currentValue;if(nc!==t)if(t={context:t,memoizedValue:e,next:null},Tn===null){if(wa===null)throw Error(T(308));Tn=t,wa.dependencies={lanes:0,firstContext:t}}else Tn=Tn.next=t;return e}var Gr=null;function ac(t){Gr===null?Gr=[t]:Gr.push(t)}function jp(t,e,r,n){var i=e.interleaved;return i===null?(r.next=r,ac(e)):(r.next=i.next,i.next=r),e.interleaved=r,tr(t,n)}function tr(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var dr=!1;function lc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bp(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Zt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function jr(t,e,r){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,V&2){var i=n.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e,tr(t,r)}return i=n.interleaved,i===null?(e.next=e,ac(n)):(e.next=i.next,i.next=e),n.interleaved=e,tr(t,r)}function Ks(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,qu(t,r)}}function Fd(t,e){var r=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?i=s=a:s=s.next=a,r=r.next}while(r!==null);s===null?i=s=e:s=s.next=e}else i=s=e;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:n.shared,effects:n.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function ka(t,e,r,n){var i=t.updateQueue;dr=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,a===null?s=c:a.next=c,a=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;a=0,d=c=u=null,l=s;do{var h=l.lane,m=l.eventTime;if((n&h)===h){d!==null&&(d=d.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=t,p=l;switch(h=e,m=r,p.tag){case 1:if(x=p.payload,typeof x=="function"){f=x.call(m,f,h);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=p.payload,h=typeof x=="function"?x.call(m,f,h):x,h==null)break e;f=de({},f,h);break e;case 2:dr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else m={eventTime:m,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=m,u=f):d=d.next=m,a|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do a|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);dn|=a,t.lanes=a,t.memoizedState=f}}function Id(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var n=t[e],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(T(191,i));i.call(n)}}}var ws={},$t=Fr(ws),Ji=Fr(ws),es=Fr(ws);function Xr(t){if(t===ws)throw Error(T(174));return t}function oc(t,e){switch(J(es,e),J(Ji,t),J($t,ws),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:mo(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=mo(e,t)}te($t),J($t,e)}function Qn(){te($t),te(Ji),te(es)}function Np(t){Xr(es.current);var e=Xr($t.current),r=mo(e,t.type);e!==r&&(J(Ji,t),J($t,r))}function uc(t){Ji.current===t&&(te($t),te(Ji))}var ae=Fr(0);function Sa(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Al=[];function cc(){for(var t=0;t<Al.length;t++)Al[t]._workInProgressVersionPrimary=null;Al.length=0}var Zs=sr.ReactCurrentDispatcher,Fl=sr.ReactCurrentBatchConfig,cn=0,ue=null,ke=null,je=null,ja=!1,Li=!1,ts=0,G1=0;function Me(){throw Error(T(321))}function dc(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!Rt(t[r],e[r]))return!1;return!0}function fc(t,e,r,n,i,s){if(cn=s,ue=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Zs.current=t===null||t.memoizedState===null?J1:ev,t=r(n,i),Li){s=0;do{if(Li=!1,ts=0,25<=s)throw Error(T(301));s+=1,je=ke=null,e.updateQueue=null,Zs.current=tv,t=r(n,i)}while(Li)}if(Zs.current=ba,e=ke!==null&&ke.next!==null,cn=0,je=ke=ue=null,ja=!1,e)throw Error(T(300));return t}function hc(){var t=ts!==0;return ts=0,t}function At(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?ue.memoizedState=je=t:je=je.next=t,je}function jt(){if(ke===null){var t=ue.alternate;t=t!==null?t.memoizedState:null}else t=ke.next;var e=je===null?ue.memoizedState:je.next;if(e!==null)je=e,ke=t;else{if(t===null)throw Error(T(310));ke=t,t={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},je===null?ue.memoizedState=je=t:je=je.next=t}return je}function rs(t,e){return typeof e=="function"?e(t):e}function Il(t){var e=jt(),r=e.queue;if(r===null)throw Error(T(311));r.lastRenderedReducer=t;var n=ke,i=n.baseQueue,s=r.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}n.baseQueue=i=s,r.pending=null}if(i!==null){s=i.next,n=n.baseState;var l=a=null,u=null,c=s;do{var d=c.lane;if((cn&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),n=c.hasEagerState?c.eagerState:t(n,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=f,a=n):u=u.next=f,ue.lanes|=d,dn|=d}c=c.next}while(c!==null&&c!==s);u===null?a=n:u.next=l,Rt(n,e.memoizedState)||(Ve=!0),e.memoizedState=n,e.baseState=a,e.baseQueue=u,r.lastRenderedState=n}if(t=r.interleaved,t!==null){i=t;do s=i.lane,ue.lanes|=s,dn|=s,i=i.next;while(i!==t)}else i===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function Dl(t){var e=jt(),r=e.queue;if(r===null)throw Error(T(311));r.lastRenderedReducer=t;var n=r.dispatch,i=r.pending,s=e.memoizedState;if(i!==null){r.pending=null;var a=i=i.next;do s=t(s,a.action),a=a.next;while(a!==i);Rt(s,e.memoizedState)||(Ve=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),r.lastRenderedState=s}return[s,n]}function Cp(){}function Ep(t,e){var r=ue,n=jt(),i=e(),s=!Rt(n.memoizedState,i);if(s&&(n.memoizedState=i,Ve=!0),n=n.queue,pc(zp.bind(null,r,n,t),[t]),n.getSnapshot!==e||s||je!==null&&je.memoizedState.tag&1){if(r.flags|=2048,ns(9,Tp.bind(null,r,n,i,e),void 0,null),be===null)throw Error(T(349));cn&30||Pp(r,e,i)}return i}function Pp(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=ue.updateQueue,e===null?(e={lastEffect:null,stores:null},ue.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function Tp(t,e,r,n){e.value=r,e.getSnapshot=n,Mp(e)&&Lp(t)}function zp(t,e,r){return r(function(){Mp(e)&&Lp(t)})}function Mp(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!Rt(t,r)}catch{return!0}}function Lp(t){var e=tr(t,1);e!==null&&Lt(e,t,1,-1)}function Dd(t){var e=At();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:t},e.queue=t,t=t.dispatch=Z1.bind(null,ue,t),[e.memoizedState,t]}function ns(t,e,r,n){return t={tag:t,create:e,destroy:r,deps:n,next:null},e=ue.updateQueue,e===null?(e={lastEffect:null,stores:null},ue.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(n=r.next,r.next=t,t.next=n,e.lastEffect=t)),t}function Rp(){return jt().memoizedState}function Js(t,e,r,n){var i=At();ue.flags|=t,i.memoizedState=ns(1|e,r,void 0,n===void 0?null:n)}function Za(t,e,r,n){var i=jt();n=n===void 0?null:n;var s=void 0;if(ke!==null){var a=ke.memoizedState;if(s=a.destroy,n!==null&&dc(n,a.deps)){i.memoizedState=ns(e,r,s,n);return}}ue.flags|=t,i.memoizedState=ns(1|e,r,s,n)}function Bd(t,e){return Js(8390656,8,t,e)}function pc(t,e){return Za(2048,8,t,e)}function Op(t,e){return Za(4,2,t,e)}function Ap(t,e){return Za(4,4,t,e)}function Fp(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ip(t,e,r){return r=r!=null?r.concat([t]):null,Za(4,4,Fp.bind(null,e,t),r)}function mc(){}function Dp(t,e){var r=jt();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&dc(e,n[1])?n[0]:(r.memoizedState=[t,e],t)}function Bp(t,e){var r=jt();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&dc(e,n[1])?n[0]:(t=t(),r.memoizedState=[t,e],t)}function Up(t,e,r){return cn&21?(Rt(r,e)||(r=qh(),ue.lanes|=r,dn|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ve=!0),t.memoizedState=r)}function X1(t,e){var r=Y;Y=r!==0&&4>r?r:4,t(!0);var n=Fl.transition;Fl.transition={};try{t(!1),e()}finally{Y=r,Fl.transition=n}}function $p(){return jt().memoizedState}function K1(t,e,r){var n=Nr(t);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Wp(t))Vp(e,r);else if(r=jp(t,e,r,n),r!==null){var i=De();Lt(r,t,n,i),Hp(r,e,n)}}function Z1(t,e,r){var n=Nr(t),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Wp(t))Vp(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,l=s(a,r);if(i.hasEagerState=!0,i.eagerState=l,Rt(l,a)){var u=e.interleaved;u===null?(i.next=i,ac(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}r=jp(t,e,i,n),r!==null&&(i=De(),Lt(r,t,n,i),Hp(r,e,n))}}function Wp(t){var e=t.alternate;return t===ue||e!==null&&e===ue}function Vp(t,e){Li=ja=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function Hp(t,e,r){if(r&4194240){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,qu(t,r)}}var ba={readContext:St,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useInsertionEffect:Me,useLayoutEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useMutableSource:Me,useSyncExternalStore:Me,useId:Me,unstable_isNewReconciler:!1},J1={readContext:St,useCallback:function(t,e){return At().memoizedState=[t,e===void 0?null:e],t},useContext:St,useEffect:Bd,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,Js(4194308,4,Fp.bind(null,e,t),r)},useLayoutEffect:function(t,e){return Js(4194308,4,t,e)},useInsertionEffect:function(t,e){return Js(4,2,t,e)},useMemo:function(t,e){var r=At();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var n=At();return e=r!==void 0?r(e):e,n.memoizedState=n.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},n.queue=t,t=t.dispatch=K1.bind(null,ue,t),[n.memoizedState,t]},useRef:function(t){var e=At();return t={current:t},e.memoizedState=t},useState:Dd,useDebugValue:mc,useDeferredValue:function(t){return At().memoizedState=t},useTransition:function(){var t=Dd(!1),e=t[0];return t=X1.bind(null,t[1]),At().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var n=ue,i=At();if(re){if(r===void 0)throw Error(T(407));r=r()}else{if(r=e(),be===null)throw Error(T(349));cn&30||Pp(n,e,r)}i.memoizedState=r;var s={value:r,getSnapshot:e};return i.queue=s,Bd(zp.bind(null,n,s,t),[t]),n.flags|=2048,ns(9,Tp.bind(null,n,s,r,e),void 0,null),r},useId:function(){var t=At(),e=be.identifierPrefix;if(re){var r=Xt,n=Gt;r=(n&~(1<<32-Mt(n)-1)).toString(32)+r,e=":"+e+"R"+r,r=ts++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=G1++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ev={readContext:St,useCallback:Dp,useContext:St,useEffect:pc,useImperativeHandle:Ip,useInsertionEffect:Op,useLayoutEffect:Ap,useMemo:Bp,useReducer:Il,useRef:Rp,useState:function(){return Il(rs)},useDebugValue:mc,useDeferredValue:function(t){var e=jt();return Up(e,ke.memoizedState,t)},useTransition:function(){var t=Il(rs)[0],e=jt().memoizedState;return[t,e]},useMutableSource:Cp,useSyncExternalStore:Ep,useId:$p,unstable_isNewReconciler:!1},tv={readContext:St,useCallback:Dp,useContext:St,useEffect:pc,useImperativeHandle:Ip,useInsertionEffect:Op,useLayoutEffect:Ap,useMemo:Bp,useReducer:Dl,useRef:Rp,useState:function(){return Dl(rs)},useDebugValue:mc,useDeferredValue:function(t){var e=jt();return ke===null?e.memoizedState=t:Up(e,ke.memoizedState,t)},useTransition:function(){var t=Dl(rs)[0],e=jt().memoizedState;return[t,e]},useMutableSource:Cp,useSyncExternalStore:Ep,useId:$p,unstable_isNewReconciler:!1};function Et(t,e){if(t&&t.defaultProps){e=de({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}function Ao(t,e,r,n){e=t.memoizedState,r=r(n,e),r=r==null?e:de({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Ja={isMounted:function(t){return(t=t._reactInternals)?pn(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var n=De(),i=Nr(t),s=Zt(n,i);s.payload=e,r!=null&&(s.callback=r),e=jr(t,s,i),e!==null&&(Lt(e,t,i,n),Ks(e,t,i))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var n=De(),i=Nr(t),s=Zt(n,i);s.tag=1,s.payload=e,r!=null&&(s.callback=r),e=jr(t,s,i),e!==null&&(Lt(e,t,i,n),Ks(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=De(),n=Nr(t),i=Zt(r,n);i.tag=2,e!=null&&(i.callback=e),e=jr(t,i,n),e!==null&&(Lt(e,t,n,r),Ks(e,t,n))}};function Ud(t,e,r,n,i,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,s,a):e.prototype&&e.prototype.isPureReactComponent?!Gi(r,n)||!Gi(i,s):!0}function qp(t,e,r){var n=!1,i=Mr,s=e.contextType;return typeof s=="object"&&s!==null?s=St(s):(i=qe(e)?on:Fe.current,n=e.contextTypes,s=(n=n!=null)?Hn(t,i):Mr),e=new e(r,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ja,t.stateNode=e,e._reactInternals=t,n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function $d(t,e,r,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,n),e.state!==t&&Ja.enqueueReplaceState(e,e.state,null)}function Fo(t,e,r,n){var i=t.stateNode;i.props=r,i.state=t.memoizedState,i.refs={},lc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=St(s):(s=qe(e)?on:Fe.current,i.context=Hn(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ao(t,e,s,r),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ja.enqueueReplaceState(i,i.state,null),ka(t,r,i,n),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Gn(t,e){try{var r="",n=e;do r+=P0(n),n=n.return;while(n);var i=r}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Bl(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function Io(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var rv=typeof WeakMap=="function"?WeakMap:Map;function Yp(t,e,r){r=Zt(-1,r),r.tag=3,r.payload={element:null};var n=e.value;return r.callback=function(){Ca||(Ca=!0,Qo=n),Io(t,e)},r}function Qp(t,e,r){r=Zt(-1,r),r.tag=3;var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var i=e.value;r.payload=function(){return n(i)},r.callback=function(){Io(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){Io(t,e),typeof n!="function"&&(br===null?br=new Set([this]):br.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),r}function Wd(t,e,r){var n=t.pingCache;if(n===null){n=t.pingCache=new rv;var i=new Set;n.set(e,i)}else i=n.get(e),i===void 0&&(i=new Set,n.set(e,i));i.has(r)||(i.add(r),t=gv.bind(null,t,e,r),e.then(t,t))}function Vd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Hd(t,e,r,n,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=Zt(-1,1),e.tag=2,jr(r,e,1))),r.lanes|=1),t)}var nv=sr.ReactCurrentOwner,Ve=!1;function Ie(t,e,r,n){e.child=t===null?Sp(e,null,r,n):Yn(e,t.child,r,n)}function qd(t,e,r,n,i){r=r.render;var s=e.ref;return Dn(e,i),n=fc(t,e,r,n,s,i),r=hc(),t!==null&&!Ve?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,rr(t,e,i)):(re&&r&&ec(e),e.flags|=1,Ie(t,e,n,i),e.child)}function Yd(t,e,r,n,i){if(t===null){var s=r.type;return typeof s=="function"&&!Sc(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=s,Gp(t,e,s,n,i)):(t=na(r.type,null,n,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var a=s.memoizedProps;if(r=r.compare,r=r!==null?r:Gi,r(a,n)&&t.ref===e.ref)return rr(t,e,i)}return e.flags|=1,t=Cr(s,n),t.ref=e.ref,t.return=e,e.child=t}function Gp(t,e,r,n,i){if(t!==null){var s=t.memoizedProps;if(Gi(s,n)&&t.ref===e.ref)if(Ve=!1,e.pendingProps=n=s,(t.lanes&i)!==0)t.flags&131072&&(Ve=!0);else return e.lanes=t.lanes,rr(t,e,i)}return Do(t,e,r,n,i)}function Xp(t,e,r){var n=e.pendingProps,i=n.children,s=t!==null?t.memoizedState:null;if(n.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(Mn,tt),tt|=r;else{if(!(r&1073741824))return t=s!==null?s.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,J(Mn,tt),tt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=s!==null?s.baseLanes:r,J(Mn,tt),tt|=n}else s!==null?(n=s.baseLanes|r,e.memoizedState=null):n=r,J(Mn,tt),tt|=n;return Ie(t,e,i,r),e.child}function Kp(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function Do(t,e,r,n,i){var s=qe(r)?on:Fe.current;return s=Hn(e,s),Dn(e,i),r=fc(t,e,r,n,s,i),n=hc(),t!==null&&!Ve?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,rr(t,e,i)):(re&&n&&ec(e),e.flags|=1,Ie(t,e,r,i),e.child)}function Qd(t,e,r,n,i){if(qe(r)){var s=!0;va(e)}else s=!1;if(Dn(e,i),e.stateNode===null)ea(t,e),qp(e,r,n),Fo(e,r,n,i),n=!0;else if(t===null){var a=e.stateNode,l=e.memoizedProps;a.props=l;var u=a.context,c=r.contextType;typeof c=="object"&&c!==null?c=St(c):(c=qe(r)?on:Fe.current,c=Hn(e,c));var d=r.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==n||u!==c)&&$d(e,a,n,c),dr=!1;var h=e.memoizedState;a.state=h,ka(e,n,a,i),u=e.memoizedState,l!==n||h!==u||He.current||dr?(typeof d=="function"&&(Ao(e,r,d,n),u=e.memoizedState),(l=dr||Ud(e,r,l,n,h,u,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=u),a.props=n,a.state=u,a.context=c,n=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{a=e.stateNode,bp(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Et(e.type,l),a.props=c,f=e.pendingProps,h=a.context,u=r.contextType,typeof u=="object"&&u!==null?u=St(u):(u=qe(r)?on:Fe.current,u=Hn(e,u));var m=r.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||h!==u)&&$d(e,a,n,u),dr=!1,h=e.memoizedState,a.state=h,ka(e,n,a,i);var x=e.memoizedState;l!==f||h!==x||He.current||dr?(typeof m=="function"&&(Ao(e,r,m,n),x=e.memoizedState),(c=dr||Ud(e,r,c,n,h,x,u)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,x,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,x,u)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=x),a.props=n,a.state=x,a.context=u,n=c):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),n=!1)}return Bo(t,e,r,n,s,i)}function Bo(t,e,r,n,i,s){Kp(t,e);var a=(e.flags&128)!==0;if(!n&&!a)return i&&Ld(e,r,!1),rr(t,e,s);n=e.stateNode,nv.current=e;var l=a&&typeof r.getDerivedStateFromError!="function"?null:n.render();return e.flags|=1,t!==null&&a?(e.child=Yn(e,t.child,null,s),e.child=Yn(e,null,l,s)):Ie(t,e,l,s),e.memoizedState=n.state,i&&Ld(e,r,!0),e.child}function Zp(t){var e=t.stateNode;e.pendingContext?Md(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Md(t,e.context,!1),oc(t,e.containerInfo)}function Gd(t,e,r,n,i){return qn(),rc(i),e.flags|=256,Ie(t,e,r,n),e.child}var Uo={dehydrated:null,treeContext:null,retryLane:0};function $o(t){return{baseLanes:t,cachePool:null,transitions:null}}function Jp(t,e,r){var n=e.pendingProps,i=ae.current,s=!1,a=(e.flags&128)!==0,l;if((l=a)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),J(ae,i&1),t===null)return Ro(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=n.children,t=n.fallback,s?(n=e.mode,s=e.child,a={mode:"hidden",children:a},!(n&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=rl(a,n,0,null),t=tn(t,n,r,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=$o(r),e.memoizedState=Uo,t):gc(e,a));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return iv(t,e,a,n,l,i,r);if(s){s=n.fallback,a=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:n.children};return!(a&1)&&e.child!==i?(n=e.child,n.childLanes=0,n.pendingProps=u,e.deletions=null):(n=Cr(i,u),n.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Cr(l,s):(s=tn(s,a,r,null),s.flags|=2),s.return=e,n.return=e,n.sibling=s,e.child=n,n=s,s=e.child,a=t.child.memoizedState,a=a===null?$o(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~r,e.memoizedState=Uo,n}return s=t.child,t=s.sibling,n=Cr(s,{mode:"visible",children:n.children}),!(e.mode&1)&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n,e.memoizedState=null,n}function gc(t,e){return e=rl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ds(t,e,r,n){return n!==null&&rc(n),Yn(e,t.child,null,r),t=gc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function iv(t,e,r,n,i,s,a){if(r)return e.flags&256?(e.flags&=-257,n=Bl(Error(T(422))),Ds(t,e,a,n)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=n.fallback,i=e.mode,n=rl({mode:"visible",children:n.children},i,0,null),s=tn(s,i,a,null),s.flags|=2,n.return=e,s.return=e,n.sibling=s,e.child=n,e.mode&1&&Yn(e,t.child,null,a),e.child.memoizedState=$o(a),e.memoizedState=Uo,s);if(!(e.mode&1))return Ds(t,e,a,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var l=n.dgst;return n=l,s=Error(T(419)),n=Bl(s,n,void 0),Ds(t,e,a,n)}if(l=(a&t.childLanes)!==0,Ve||l){if(n=be,n!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,tr(t,i),Lt(n,t,i,-1))}return kc(),n=Bl(Error(T(421))),Ds(t,e,a,n)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=vv.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,it=Sr(i.nextSibling),lt=e,re=!0,Tt=null,t!==null&&(vt[xt++]=Gt,vt[xt++]=Xt,vt[xt++]=un,Gt=t.id,Xt=t.overflow,un=e),e=gc(e,n.children),e.flags|=4096,e)}function Xd(t,e,r){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),Oo(t.return,e,r)}function Ul(t,e,r,n,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=r,s.tailMode=i)}function em(t,e,r){var n=e.pendingProps,i=n.revealOrder,s=n.tail;if(Ie(t,e,n.children,r),n=ae.current,n&2)n=n&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xd(t,r,e);else if(t.tag===19)Xd(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}if(J(ae,n),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(r=e.child,i=null;r!==null;)t=r.alternate,t!==null&&Sa(t)===null&&(i=r),r=r.sibling;r=i,r===null?(i=e.child,e.child=null):(i=r.sibling,r.sibling=null),Ul(e,!1,i,r,s);break;case"backwards":for(r=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Sa(t)===null){e.child=i;break}t=i.sibling,i.sibling=r,r=i,i=t}Ul(e,!0,r,null,s);break;case"together":Ul(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ea(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function rr(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),dn|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(T(153));if(e.child!==null){for(t=e.child,r=Cr(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=Cr(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function sv(t,e,r){switch(e.tag){case 3:Zp(e),qn();break;case 5:Np(e);break;case 1:qe(e.type)&&va(e);break;case 4:oc(e,e.stateNode.containerInfo);break;case 10:var n=e.type._context,i=e.memoizedProps.value;J(_a,n._currentValue),n._currentValue=i;break;case 13:if(n=e.memoizedState,n!==null)return n.dehydrated!==null?(J(ae,ae.current&1),e.flags|=128,null):r&e.child.childLanes?Jp(t,e,r):(J(ae,ae.current&1),t=rr(t,e,r),t!==null?t.sibling:null);J(ae,ae.current&1);break;case 19:if(n=(r&e.childLanes)!==0,t.flags&128){if(n)return em(t,e,r);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),J(ae,ae.current),n)break;return null;case 22:case 23:return e.lanes=0,Xp(t,e,r)}return rr(t,e,r)}var tm,Wo,rm,nm;tm=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Wo=function(){};rm=function(t,e,r,n){var i=t.memoizedProps;if(i!==n){t=e.stateNode,Xr($t.current);var s=null;switch(r){case"input":i=co(t,i),n=co(t,n),s=[];break;case"select":i=de({},i,{value:void 0}),n=de({},n,{value:void 0}),s=[];break;case"textarea":i=po(t,i),n=po(t,n),s=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(t.onclick=ma)}go(r,n);var a;r=null;for(c in i)if(!n.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(a in l)l.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&($i.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in n){var u=n[c];if(l=i!=null?i[c]:void 0,n.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(r||(r={}),r[a]=u[a])}else r||(s||(s=[]),s.push(c,r)),r=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&($i.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ee("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}r&&(s=s||[]).push("style",r);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};nm=function(t,e,r,n){r!==n&&(e.flags|=4)};function yi(t,e){if(!re)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function Le(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,n=0;if(e)for(var i=t.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=r,e}function av(t,e,r){var n=e.pendingProps;switch(tc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(e),null;case 1:return qe(e.type)&&ga(),Le(e),null;case 3:return n=e.stateNode,Qn(),te(He),te(Fe),cc(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Fs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Tt!==null&&(Ko(Tt),Tt=null))),Wo(t,e),Le(e),null;case 5:uc(e);var i=Xr(es.current);if(r=e.type,t!==null&&e.stateNode!=null)rm(t,e,r,n,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!n){if(e.stateNode===null)throw Error(T(166));return Le(e),null}if(t=Xr($t.current),Fs(e)){n=e.stateNode,r=e.type;var s=e.memoizedProps;switch(n[It]=e,n[Zi]=s,t=(e.mode&1)!==0,r){case"dialog":ee("cancel",n),ee("close",n);break;case"iframe":case"object":case"embed":ee("load",n);break;case"video":case"audio":for(i=0;i<bi.length;i++)ee(bi[i],n);break;case"source":ee("error",n);break;case"img":case"image":case"link":ee("error",n),ee("load",n);break;case"details":ee("toggle",n);break;case"input":sd(n,s),ee("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},ee("invalid",n);break;case"textarea":ld(n,s),ee("invalid",n)}go(r,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?n.textContent!==l&&(s.suppressHydrationWarning!==!0&&As(n.textContent,l,t),i=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&As(n.textContent,l,t),i=["children",""+l]):$i.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ee("scroll",n)}switch(r){case"input":Es(n),ad(n,s,!0);break;case"textarea":Es(n),od(n);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(n.onclick=ma)}n=i,e.updateQueue=n,n!==null&&(e.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=zh(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof n.is=="string"?t=a.createElement(r,{is:n.is}):(t=a.createElement(r),r==="select"&&(a=t,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):t=a.createElementNS(t,r),t[It]=e,t[Zi]=n,tm(t,e,!1,!1),e.stateNode=t;e:{switch(a=vo(r,n),r){case"dialog":ee("cancel",t),ee("close",t),i=n;break;case"iframe":case"object":case"embed":ee("load",t),i=n;break;case"video":case"audio":for(i=0;i<bi.length;i++)ee(bi[i],t);i=n;break;case"source":ee("error",t),i=n;break;case"img":case"image":case"link":ee("error",t),ee("load",t),i=n;break;case"details":ee("toggle",t),i=n;break;case"input":sd(t,n),i=co(t,n),ee("invalid",t);break;case"option":i=n;break;case"select":t._wrapperState={wasMultiple:!!n.multiple},i=de({},n,{value:void 0}),ee("invalid",t);break;case"textarea":ld(t,n),i=po(t,n),ee("invalid",t);break;default:i=n}go(r,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Rh(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Mh(t,u)):s==="children"?typeof u=="string"?(r!=="textarea"||u!=="")&&Wi(t,u):typeof u=="number"&&Wi(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&($i.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ee("scroll",t):u!=null&&Bu(t,s,u,a))}switch(r){case"input":Es(t),ad(t,n,!1);break;case"textarea":Es(t),od(t);break;case"option":n.value!=null&&t.setAttribute("value",""+zr(n.value));break;case"select":t.multiple=!!n.multiple,s=n.value,s!=null?On(t,!!n.multiple,s,!1):n.defaultValue!=null&&On(t,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ma)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Le(e),null;case 6:if(t&&e.stateNode!=null)nm(t,e,t.memoizedProps,n);else{if(typeof n!="string"&&e.stateNode===null)throw Error(T(166));if(r=Xr(es.current),Xr($t.current),Fs(e)){if(n=e.stateNode,r=e.memoizedProps,n[It]=e,(s=n.nodeValue!==r)&&(t=lt,t!==null))switch(t.tag){case 3:As(n.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&As(n.nodeValue,r,(t.mode&1)!==0)}s&&(e.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[It]=e,e.stateNode=n}return Le(e),null;case 13:if(te(ae),n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(re&&it!==null&&e.mode&1&&!(e.flags&128))wp(),qn(),e.flags|=98560,s=!1;else if(s=Fs(e),n!==null&&n.dehydrated!==null){if(t===null){if(!s)throw Error(T(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(T(317));s[It]=e}else qn(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Le(e),s=!1}else Tt!==null&&(Ko(Tt),Tt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(n=n!==null,n!==(t!==null&&t.memoizedState!==null)&&n&&(e.child.flags|=8192,e.mode&1&&(t===null||ae.current&1?Se===0&&(Se=3):kc())),e.updateQueue!==null&&(e.flags|=4),Le(e),null);case 4:return Qn(),Wo(t,e),t===null&&Xi(e.stateNode.containerInfo),Le(e),null;case 10:return sc(e.type._context),Le(e),null;case 17:return qe(e.type)&&ga(),Le(e),null;case 19:if(te(ae),s=e.memoizedState,s===null)return Le(e),null;if(n=(e.flags&128)!==0,a=s.rendering,a===null)if(n)yi(s,!1);else{if(Se!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Sa(t),a!==null){for(e.flags|=128,yi(s,!1),n=a.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),e.subtreeFlags=0,n=r,r=e.child;r!==null;)s=r,t=n,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return J(ae,ae.current&1|2),e.child}t=t.sibling}s.tail!==null&&ye()>Xn&&(e.flags|=128,n=!0,yi(s,!1),e.lanes=4194304)}else{if(!n)if(t=Sa(a),t!==null){if(e.flags|=128,n=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),yi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!re)return Le(e),null}else 2*ye()-s.renderingStartTime>Xn&&r!==1073741824&&(e.flags|=128,n=!0,yi(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(r=s.last,r!==null?r.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ye(),e.sibling=null,r=ae.current,J(ae,n?r&1|2:r&1),e):(Le(e),null);case 22:case 23:return wc(),n=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==n&&(e.flags|=8192),n&&e.mode&1?tt&1073741824&&(Le(e),e.subtreeFlags&6&&(e.flags|=8192)):Le(e),null;case 24:return null;case 25:return null}throw Error(T(156,e.tag))}function lv(t,e){switch(tc(e),e.tag){case 1:return qe(e.type)&&ga(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qn(),te(He),te(Fe),cc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return uc(e),null;case 13:if(te(ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(T(340));qn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return te(ae),null;case 4:return Qn(),null;case 10:return sc(e.type._context),null;case 22:case 23:return wc(),null;case 24:return null;default:return null}}var Bs=!1,Re=!1,ov=typeof WeakSet=="function"?WeakSet:Set,A=null;function zn(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){he(t,e,n)}else r.current=null}function Vo(t,e,r){try{r()}catch(n){he(t,e,n)}}var Kd=!1;function uv(t,e){if(Co=fa,t=op(),Ju(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var a=0,l=-1,u=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var m;f!==r||i!==0&&f.nodeType!==3||(l=a+i),f!==s||n!==0&&f.nodeType!==3||(u=a+n),f.nodeType===3&&(a+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===t)break t;if(h===r&&++c===i&&(l=a),h===s&&++d===n&&(u=a),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}r=l===-1||u===-1?null:{start:l,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(Eo={focusedElem:t,selectionRange:r},fa=!1,A=e;A!==null;)if(e=A,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,A=t;else for(;A!==null;){e=A;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var p=x.memoizedProps,_=x.memoizedState,v=e.stateNode,g=v.getSnapshotBeforeUpdate(e.elementType===e.type?p:Et(e.type,p),_);v.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(w){he(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,A=t;break}A=e.return}return x=Kd,Kd=!1,x}function Ri(t,e,r){var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Vo(e,r,s)}i=i.next}while(i!==n)}}function el(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var n=r.create;r.destroy=n()}r=r.next}while(r!==e)}}function Ho(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function im(t){var e=t.alternate;e!==null&&(t.alternate=null,im(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[It],delete e[Zi],delete e[zo],delete e[H1],delete e[q1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function sm(t){return t.tag===5||t.tag===3||t.tag===4}function Zd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||sm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qo(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=ma));else if(n!==4&&(t=t.child,t!==null))for(qo(t,e,r),t=t.sibling;t!==null;)qo(t,e,r),t=t.sibling}function Yo(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(n!==4&&(t=t.child,t!==null))for(Yo(t,e,r),t=t.sibling;t!==null;)Yo(t,e,r),t=t.sibling}var Ce=null,Pt=!1;function ur(t,e,r){for(r=r.child;r!==null;)am(t,e,r),r=r.sibling}function am(t,e,r){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(qa,r)}catch{}switch(r.tag){case 5:Re||zn(r,e);case 6:var n=Ce,i=Pt;Ce=null,ur(t,e,r),Ce=n,Pt=i,Ce!==null&&(Pt?(t=Ce,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):Ce.removeChild(r.stateNode));break;case 18:Ce!==null&&(Pt?(t=Ce,r=r.stateNode,t.nodeType===8?Rl(t.parentNode,r):t.nodeType===1&&Rl(t,r),Yi(t)):Rl(Ce,r.stateNode));break;case 4:n=Ce,i=Pt,Ce=r.stateNode.containerInfo,Pt=!0,ur(t,e,r),Ce=n,Pt=i;break;case 0:case 11:case 14:case 15:if(!Re&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Vo(r,e,a),i=i.next}while(i!==n)}ur(t,e,r);break;case 1:if(!Re&&(zn(r,e),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){he(r,e,l)}ur(t,e,r);break;case 21:ur(t,e,r);break;case 22:r.mode&1?(Re=(n=Re)||r.memoizedState!==null,ur(t,e,r),Re=n):ur(t,e,r);break;default:ur(t,e,r)}}function Jd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new ov),e.forEach(function(n){var i=xv.bind(null,t,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Nt(t,e){var r=e.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var s=t,a=e,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ce=l.stateNode,Pt=!1;break e;case 3:Ce=l.stateNode.containerInfo,Pt=!0;break e;case 4:Ce=l.stateNode.containerInfo,Pt=!0;break e}l=l.return}if(Ce===null)throw Error(T(160));am(s,a,i),Ce=null,Pt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){he(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)lm(e,t),e=e.sibling}function lm(t,e){var r=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Nt(e,t),Ot(t),n&4){try{Ri(3,t,t.return),el(3,t)}catch(p){he(t,t.return,p)}try{Ri(5,t,t.return)}catch(p){he(t,t.return,p)}}break;case 1:Nt(e,t),Ot(t),n&512&&r!==null&&zn(r,r.return);break;case 5:if(Nt(e,t),Ot(t),n&512&&r!==null&&zn(r,r.return),t.flags&32){var i=t.stateNode;try{Wi(i,"")}catch(p){he(t,t.return,p)}}if(n&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,a=r!==null?r.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Ph(i,s),vo(l,a);var c=vo(l,s);for(a=0;a<u.length;a+=2){var d=u[a],f=u[a+1];d==="style"?Rh(i,f):d==="dangerouslySetInnerHTML"?Mh(i,f):d==="children"?Wi(i,f):Bu(i,d,f,c)}switch(l){case"input":fo(i,s);break;case"textarea":Th(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?On(i,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?On(i,!!s.multiple,s.defaultValue,!0):On(i,!!s.multiple,s.multiple?[]:"",!1))}i[Zi]=s}catch(p){he(t,t.return,p)}}break;case 6:if(Nt(e,t),Ot(t),n&4){if(t.stateNode===null)throw Error(T(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(p){he(t,t.return,p)}}break;case 3:if(Nt(e,t),Ot(t),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Yi(e.containerInfo)}catch(p){he(t,t.return,p)}break;case 4:Nt(e,t),Ot(t);break;case 13:Nt(e,t),Ot(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(yc=ye())),n&4&&Jd(t);break;case 22:if(d=r!==null&&r.memoizedState!==null,t.mode&1?(Re=(c=Re)||d,Nt(e,t),Re=c):Nt(e,t),Ot(t),n&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(A=t,d=t.child;d!==null;){for(f=A=d;A!==null;){switch(h=A,m=h.child,h.tag){case 0:case 11:case 14:case 15:Ri(4,h,h.return);break;case 1:zn(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){n=h,r=h.return;try{e=n,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(p){he(n,r,p)}}break;case 5:zn(h,h.return);break;case 22:if(h.memoizedState!==null){tf(f);continue}}m!==null?(m.return=h,A=m):tf(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,u=f.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Lh("display",a))}catch(p){he(t,t.return,p)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(p){he(t,t.return,p)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Nt(e,t),Ot(t),n&4&&Jd(t);break;case 21:break;default:Nt(e,t),Ot(t)}}function Ot(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(sm(r)){var n=r;break e}r=r.return}throw Error(T(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Wi(i,""),n.flags&=-33);var s=Zd(t);Yo(t,s,i);break;case 3:case 4:var a=n.stateNode.containerInfo,l=Zd(t);qo(t,l,a);break;default:throw Error(T(161))}}catch(u){he(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function cv(t,e,r){A=t,om(t)}function om(t,e,r){for(var n=(t.mode&1)!==0;A!==null;){var i=A,s=i.child;if(i.tag===22&&n){var a=i.memoizedState!==null||Bs;if(!a){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Re;l=Bs;var c=Re;if(Bs=a,(Re=u)&&!c)for(A=i;A!==null;)a=A,u=a.child,a.tag===22&&a.memoizedState!==null?rf(i):u!==null?(u.return=a,A=u):rf(i);for(;s!==null;)A=s,om(s),s=s.sibling;A=i,Bs=l,Re=c}ef(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,A=s):ef(t)}}function ef(t){for(;A!==null;){var e=A;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Re||el(5,e);break;case 1:var n=e.stateNode;if(e.flags&4&&!Re)if(r===null)n.componentDidMount();else{var i=e.elementType===e.type?r.memoizedProps:Et(e.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Id(e,s,n);break;case 3:var a=e.updateQueue;if(a!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}Id(e,a,r)}break;case 5:var l=e.stateNode;if(r===null&&e.flags&4){r=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Yi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Re||e.flags&512&&Ho(e)}catch(h){he(e,e.return,h)}}if(e===t){A=null;break}if(r=e.sibling,r!==null){r.return=e.return,A=r;break}A=e.return}}function tf(t){for(;A!==null;){var e=A;if(e===t){A=null;break}var r=e.sibling;if(r!==null){r.return=e.return,A=r;break}A=e.return}}function rf(t){for(;A!==null;){var e=A;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{el(4,e)}catch(u){he(e,r,u)}break;case 1:var n=e.stateNode;if(typeof n.componentDidMount=="function"){var i=e.return;try{n.componentDidMount()}catch(u){he(e,i,u)}}var s=e.return;try{Ho(e)}catch(u){he(e,s,u)}break;case 5:var a=e.return;try{Ho(e)}catch(u){he(e,a,u)}}}catch(u){he(e,e.return,u)}if(e===t){A=null;break}var l=e.sibling;if(l!==null){l.return=e.return,A=l;break}A=e.return}}var dv=Math.ceil,Na=sr.ReactCurrentDispatcher,vc=sr.ReactCurrentOwner,kt=sr.ReactCurrentBatchConfig,V=0,be=null,we=null,Ee=0,tt=0,Mn=Fr(0),Se=0,is=null,dn=0,tl=0,xc=0,Oi=null,$e=null,yc=0,Xn=1/0,Vt=null,Ca=!1,Qo=null,br=null,Us=!1,mr=null,Ea=0,Ai=0,Go=null,ta=-1,ra=0;function De(){return V&6?ye():ta!==-1?ta:ta=ye()}function Nr(t){return t.mode&1?V&2&&Ee!==0?Ee&-Ee:Q1.transition!==null?(ra===0&&(ra=qh()),ra):(t=Y,t!==0||(t=window.event,t=t===void 0?16:Jh(t.type)),t):1}function Lt(t,e,r,n){if(50<Ai)throw Ai=0,Go=null,Error(T(185));xs(t,r,n),(!(V&2)||t!==be)&&(t===be&&(!(V&2)&&(tl|=r),Se===4&&hr(t,Ee)),Ye(t,n),r===1&&V===0&&!(e.mode&1)&&(Xn=ye()+500,Ka&&Ir()))}function Ye(t,e){var r=t.callbackNode;Q0(t,e);var n=da(t,t===be?Ee:0);if(n===0)r!==null&&dd(r),t.callbackNode=null,t.callbackPriority=0;else if(e=n&-n,t.callbackPriority!==e){if(r!=null&&dd(r),e===1)t.tag===0?Y1(nf.bind(null,t)):xp(nf.bind(null,t)),W1(function(){!(V&6)&&Ir()}),r=null;else{switch(Yh(n)){case 1:r=Hu;break;case 4:r=Vh;break;case 16:r=ca;break;case 536870912:r=Hh;break;default:r=ca}r=gm(r,um.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function um(t,e){if(ta=-1,ra=0,V&6)throw Error(T(327));var r=t.callbackNode;if(Bn()&&t.callbackNode!==r)return null;var n=da(t,t===be?Ee:0);if(n===0)return null;if(n&30||n&t.expiredLanes||e)e=Pa(t,n);else{e=n;var i=V;V|=2;var s=dm();(be!==t||Ee!==e)&&(Vt=null,Xn=ye()+500,en(t,e));do try{pv();break}catch(l){cm(t,l)}while(!0);ic(),Na.current=s,V=i,we!==null?e=0:(be=null,Ee=0,e=Se)}if(e!==0){if(e===2&&(i=ko(t),i!==0&&(n=i,e=Xo(t,i))),e===1)throw r=is,en(t,0),hr(t,n),Ye(t,ye()),r;if(e===6)hr(t,n);else{if(i=t.current.alternate,!(n&30)&&!fv(i)&&(e=Pa(t,n),e===2&&(s=ko(t),s!==0&&(n=s,e=Xo(t,s))),e===1))throw r=is,en(t,0),hr(t,n),Ye(t,ye()),r;switch(t.finishedWork=i,t.finishedLanes=n,e){case 0:case 1:throw Error(T(345));case 2:qr(t,$e,Vt);break;case 3:if(hr(t,n),(n&130023424)===n&&(e=yc+500-ye(),10<e)){if(da(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){De(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=To(qr.bind(null,t,$e,Vt),e);break}qr(t,$e,Vt);break;case 4:if(hr(t,n),(n&4194240)===n)break;for(e=t.eventTimes,i=-1;0<n;){var a=31-Mt(n);s=1<<a,a=e[a],a>i&&(i=a),n&=~s}if(n=i,n=ye()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*dv(n/1960))-n,10<n){t.timeoutHandle=To(qr.bind(null,t,$e,Vt),n);break}qr(t,$e,Vt);break;case 5:qr(t,$e,Vt);break;default:throw Error(T(329))}}}return Ye(t,ye()),t.callbackNode===r?um.bind(null,t):null}function Xo(t,e){var r=Oi;return t.current.memoizedState.isDehydrated&&(en(t,e).flags|=256),t=Pa(t,e),t!==2&&(e=$e,$e=r,e!==null&&Ko(e)),t}function Ko(t){$e===null?$e=t:$e.push.apply($e,t)}function fv(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],s=i.getSnapshot;i=i.value;try{if(!Rt(s(),i))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hr(t,e){for(e&=~xc,e&=~tl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-Mt(e),n=1<<r;t[r]=-1,e&=~n}}function nf(t){if(V&6)throw Error(T(327));Bn();var e=da(t,0);if(!(e&1))return Ye(t,ye()),null;var r=Pa(t,e);if(t.tag!==0&&r===2){var n=ko(t);n!==0&&(e=n,r=Xo(t,n))}if(r===1)throw r=is,en(t,0),hr(t,e),Ye(t,ye()),r;if(r===6)throw Error(T(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,qr(t,$e,Vt),Ye(t,ye()),null}function _c(t,e){var r=V;V|=1;try{return t(e)}finally{V=r,V===0&&(Xn=ye()+500,Ka&&Ir())}}function fn(t){mr!==null&&mr.tag===0&&!(V&6)&&Bn();var e=V;V|=1;var r=kt.transition,n=Y;try{if(kt.transition=null,Y=1,t)return t()}finally{Y=n,kt.transition=r,V=e,!(V&6)&&Ir()}}function wc(){tt=Mn.current,te(Mn)}function en(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,$1(r)),we!==null)for(r=we.return;r!==null;){var n=r;switch(tc(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&ga();break;case 3:Qn(),te(He),te(Fe),cc();break;case 5:uc(n);break;case 4:Qn();break;case 13:te(ae);break;case 19:te(ae);break;case 10:sc(n.type._context);break;case 22:case 23:wc()}r=r.return}if(be=t,we=t=Cr(t.current,null),Ee=tt=e,Se=0,is=null,xc=tl=dn=0,$e=Oi=null,Gr!==null){for(e=0;e<Gr.length;e++)if(r=Gr[e],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,s=r.pending;if(s!==null){var a=s.next;s.next=i,n.next=a}r.pending=n}Gr=null}return t}function cm(t,e){do{var r=we;try{if(ic(),Zs.current=ba,ja){for(var n=ue.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}ja=!1}if(cn=0,je=ke=ue=null,Li=!1,ts=0,vc.current=null,r===null||r.return===null){Se=1,is=e,we=null;break}e:{var s=t,a=r.return,l=r,u=e;if(e=Ee,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Vd(a);if(m!==null){m.flags&=-257,Hd(m,a,l,s,e),m.mode&1&&Wd(s,c,e),e=m,u=c;var x=e.updateQueue;if(x===null){var p=new Set;p.add(u),e.updateQueue=p}else x.add(u);break e}else{if(!(e&1)){Wd(s,c,e),kc();break e}u=Error(T(426))}}else if(re&&l.mode&1){var _=Vd(a);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Hd(_,a,l,s,e),rc(Gn(u,l));break e}}s=u=Gn(u,l),Se!==4&&(Se=2),Oi===null?Oi=[s]:Oi.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=Yp(s,u,e);Fd(s,v);break e;case 1:l=u;var g=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(br===null||!br.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=Qp(s,l,e);Fd(s,w);break e}}s=s.return}while(s!==null)}hm(r)}catch(k){e=k,we===r&&r!==null&&(we=r=r.return);continue}break}while(!0)}function dm(){var t=Na.current;return Na.current=ba,t===null?ba:t}function kc(){(Se===0||Se===3||Se===2)&&(Se=4),be===null||!(dn&268435455)&&!(tl&268435455)||hr(be,Ee)}function Pa(t,e){var r=V;V|=2;var n=dm();(be!==t||Ee!==e)&&(Vt=null,en(t,e));do try{hv();break}catch(i){cm(t,i)}while(!0);if(ic(),V=r,Na.current=n,we!==null)throw Error(T(261));return be=null,Ee=0,Se}function hv(){for(;we!==null;)fm(we)}function pv(){for(;we!==null&&!D0();)fm(we)}function fm(t){var e=mm(t.alternate,t,tt);t.memoizedProps=t.pendingProps,e===null?hm(t):we=e,vc.current=null}function hm(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=lv(r,e),r!==null){r.flags&=32767,we=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Se=6,we=null;return}}else if(r=av(r,e,tt),r!==null){we=r;return}if(e=e.sibling,e!==null){we=e;return}we=e=t}while(e!==null);Se===0&&(Se=5)}function qr(t,e,r){var n=Y,i=kt.transition;try{kt.transition=null,Y=1,mv(t,e,r,n)}finally{kt.transition=i,Y=n}return null}function mv(t,e,r,n){do Bn();while(mr!==null);if(V&6)throw Error(T(327));r=t.finishedWork;var i=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(T(177));t.callbackNode=null,t.callbackPriority=0;var s=r.lanes|r.childLanes;if(G0(t,s),t===be&&(we=be=null,Ee=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Us||(Us=!0,gm(ca,function(){return Bn(),null})),s=(r.flags&15990)!==0,r.subtreeFlags&15990||s){s=kt.transition,kt.transition=null;var a=Y;Y=1;var l=V;V|=4,vc.current=null,uv(t,r),lm(r,t),O1(Eo),fa=!!Co,Eo=Co=null,t.current=r,cv(r),B0(),V=l,Y=a,kt.transition=s}else t.current=r;if(Us&&(Us=!1,mr=t,Ea=i),s=t.pendingLanes,s===0&&(br=null),W0(r.stateNode),Ye(t,ye()),e!==null)for(n=t.onRecoverableError,r=0;r<e.length;r++)i=e[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Ca)throw Ca=!1,t=Qo,Qo=null,t;return Ea&1&&t.tag!==0&&Bn(),s=t.pendingLanes,s&1?t===Go?Ai++:(Ai=0,Go=t):Ai=0,Ir(),null}function Bn(){if(mr!==null){var t=Yh(Ea),e=kt.transition,r=Y;try{if(kt.transition=null,Y=16>t?16:t,mr===null)var n=!1;else{if(t=mr,mr=null,Ea=0,V&6)throw Error(T(331));var i=V;for(V|=4,A=t.current;A!==null;){var s=A,a=s.child;if(A.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(A=c;A!==null;){var d=A;switch(d.tag){case 0:case 11:case 15:Ri(8,d,s)}var f=d.child;if(f!==null)f.return=d,A=f;else for(;A!==null;){d=A;var h=d.sibling,m=d.return;if(im(d),d===c){A=null;break}if(h!==null){h.return=m,A=h;break}A=m}}}var x=s.alternate;if(x!==null){var p=x.child;if(p!==null){x.child=null;do{var _=p.sibling;p.sibling=null,p=_}while(p!==null)}}A=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,A=a;else e:for(;A!==null;){if(s=A,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ri(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,A=v;break e}A=s.return}}var g=t.current;for(A=g;A!==null;){a=A;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,A=y;else e:for(a=g;A!==null;){if(l=A,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:el(9,l)}}catch(k){he(l,l.return,k)}if(l===a){A=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,A=w;break e}A=l.return}}if(V=i,Ir(),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(qa,t)}catch{}n=!0}return n}finally{Y=r,kt.transition=e}}return!1}function sf(t,e,r){e=Gn(r,e),e=Yp(t,e,1),t=jr(t,e,1),e=De(),t!==null&&(xs(t,1,e),Ye(t,e))}function he(t,e,r){if(t.tag===3)sf(t,t,r);else for(;e!==null;){if(e.tag===3){sf(e,t,r);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(br===null||!br.has(n))){t=Gn(r,t),t=Qp(e,t,1),e=jr(e,t,1),t=De(),e!==null&&(xs(e,1,t),Ye(e,t));break}}e=e.return}}function gv(t,e,r){var n=t.pingCache;n!==null&&n.delete(e),e=De(),t.pingedLanes|=t.suspendedLanes&r,be===t&&(Ee&r)===r&&(Se===4||Se===3&&(Ee&130023424)===Ee&&500>ye()-yc?en(t,0):xc|=r),Ye(t,e)}function pm(t,e){e===0&&(t.mode&1?(e=zs,zs<<=1,!(zs&130023424)&&(zs=4194304)):e=1);var r=De();t=tr(t,e),t!==null&&(xs(t,e,r),Ye(t,r))}function vv(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),pm(t,r)}function xv(t,e){var r=0;switch(t.tag){case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=t.stateNode;break;default:throw Error(T(314))}n!==null&&n.delete(e),pm(t,r)}var mm;mm=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||He.current)Ve=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return Ve=!1,sv(t,e,r);Ve=!!(t.flags&131072)}else Ve=!1,re&&e.flags&1048576&&yp(e,ya,e.index);switch(e.lanes=0,e.tag){case 2:var n=e.type;ea(t,e),t=e.pendingProps;var i=Hn(e,Fe.current);Dn(e,r),i=fc(null,e,n,t,i,r);var s=hc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,qe(n)?(s=!0,va(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,lc(e),i.updater=Ja,e.stateNode=i,i._reactInternals=e,Fo(e,n,t,r),e=Bo(null,e,n,!0,s,r)):(e.tag=0,re&&s&&ec(e),Ie(null,e,i,r),e=e.child),e;case 16:n=e.elementType;e:{switch(ea(t,e),t=e.pendingProps,i=n._init,n=i(n._payload),e.type=n,i=e.tag=_v(n),t=Et(n,t),i){case 0:e=Do(null,e,n,t,r);break e;case 1:e=Qd(null,e,n,t,r);break e;case 11:e=qd(null,e,n,t,r);break e;case 14:e=Yd(null,e,n,Et(n.type,t),r);break e}throw Error(T(306,n,""))}return e;case 0:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:Et(n,i),Do(t,e,n,i,r);case 1:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:Et(n,i),Qd(t,e,n,i,r);case 3:e:{if(Zp(e),t===null)throw Error(T(387));n=e.pendingProps,s=e.memoizedState,i=s.element,bp(t,e),ka(e,n,null,r);var a=e.memoizedState;if(n=a.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Gn(Error(T(423)),e),e=Gd(t,e,n,r,i);break e}else if(n!==i){i=Gn(Error(T(424)),e),e=Gd(t,e,n,r,i);break e}else for(it=Sr(e.stateNode.containerInfo.firstChild),lt=e,re=!0,Tt=null,r=Sp(e,null,n,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(qn(),n===i){e=rr(t,e,r);break e}Ie(t,e,n,r)}e=e.child}return e;case 5:return Np(e),t===null&&Ro(e),n=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,a=i.children,Po(n,i)?a=null:s!==null&&Po(n,s)&&(e.flags|=32),Kp(t,e),Ie(t,e,a,r),e.child;case 6:return t===null&&Ro(e),null;case 13:return Jp(t,e,r);case 4:return oc(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=Yn(e,null,n,r):Ie(t,e,n,r),e.child;case 11:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:Et(n,i),qd(t,e,n,i,r);case 7:return Ie(t,e,e.pendingProps,r),e.child;case 8:return Ie(t,e,e.pendingProps.children,r),e.child;case 12:return Ie(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(n=e.type._context,i=e.pendingProps,s=e.memoizedProps,a=i.value,J(_a,n._currentValue),n._currentValue=a,s!==null)if(Rt(s.value,a)){if(s.children===i.children&&!He.current){e=rr(t,e,r);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var u=l.firstContext;u!==null;){if(u.context===n){if(s.tag===1){u=Zt(-1,r&-r),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=r,u=s.alternate,u!==null&&(u.lanes|=r),Oo(s.return,r,e),l.lanes|=r;break}u=u.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(T(341));a.lanes|=r,l=a.alternate,l!==null&&(l.lanes|=r),Oo(a,r,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Ie(t,e,i.children,r),e=e.child}return e;case 9:return i=e.type,n=e.pendingProps.children,Dn(e,r),i=St(i),n=n(i),e.flags|=1,Ie(t,e,n,r),e.child;case 14:return n=e.type,i=Et(n,e.pendingProps),i=Et(n.type,i),Yd(t,e,n,i,r);case 15:return Gp(t,e,e.type,e.pendingProps,r);case 17:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:Et(n,i),ea(t,e),e.tag=1,qe(n)?(t=!0,va(e)):t=!1,Dn(e,r),qp(e,n,i),Fo(e,n,i,r),Bo(null,e,n,!0,t,r);case 19:return em(t,e,r);case 22:return Xp(t,e,r)}throw Error(T(156,e.tag))};function gm(t,e){return Wh(t,e)}function yv(t,e,r,n){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(t,e,r,n){return new yv(t,e,r,n)}function Sc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _v(t){if(typeof t=="function")return Sc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$u)return 11;if(t===Wu)return 14}return 2}function Cr(t,e){var r=t.alternate;return r===null?(r=yt(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function na(t,e,r,n,i,s){var a=2;if(n=t,typeof t=="function")Sc(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case kn:return tn(r.children,i,s,e);case Uu:a=8,i|=8;break;case ao:return t=yt(12,r,e,i|2),t.elementType=ao,t.lanes=s,t;case lo:return t=yt(13,r,e,i),t.elementType=lo,t.lanes=s,t;case oo:return t=yt(19,r,e,i),t.elementType=oo,t.lanes=s,t;case Nh:return rl(r,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case jh:a=10;break e;case bh:a=9;break e;case $u:a=11;break e;case Wu:a=14;break e;case cr:a=16,n=null;break e}throw Error(T(130,t==null?t:typeof t,""))}return e=yt(a,r,e,i),e.elementType=t,e.type=n,e.lanes=s,e}function tn(t,e,r,n){return t=yt(7,t,n,e),t.lanes=r,t}function rl(t,e,r,n){return t=yt(22,t,n,e),t.elementType=Nh,t.lanes=r,t.stateNode={isHidden:!1},t}function $l(t,e,r){return t=yt(6,t,null,e),t.lanes=r,t}function Wl(t,e,r){return e=yt(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function wv(t,e,r,n,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sl(0),this.expirationTimes=Sl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sl(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function jc(t,e,r,n,i,s,a,l,u){return t=new wv(t,e,r,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=yt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},lc(s),t}function kv(t,e,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wn,key:n==null?null:""+n,children:t,containerInfo:e,implementation:r}}function vm(t){if(!t)return Mr;t=t._reactInternals;e:{if(pn(t)!==t||t.tag!==1)throw Error(T(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(qe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(T(171))}if(t.tag===1){var r=t.type;if(qe(r))return vp(t,r,e)}return e}function xm(t,e,r,n,i,s,a,l,u){return t=jc(r,n,!0,t,i,s,a,l,u),t.context=vm(null),r=t.current,n=De(),i=Nr(r),s=Zt(n,i),s.callback=e??null,jr(r,s,i),t.current.lanes=i,xs(t,i,n),Ye(t,n),t}function nl(t,e,r,n){var i=e.current,s=De(),a=Nr(i);return r=vm(r),e.context===null?e.context=r:e.pendingContext=r,e=Zt(s,a),e.payload={element:t},n=n===void 0?null:n,n!==null&&(e.callback=n),t=jr(i,e,a),t!==null&&(Lt(t,i,a,s),Ks(t,i,a)),a}function Ta(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function af(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function bc(t,e){af(t,e),(t=t.alternate)&&af(t,e)}function Sv(){return null}var ym=typeof reportError=="function"?reportError:function(t){console.error(t)};function Nc(t){this._internalRoot=t}il.prototype.render=Nc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(T(409));nl(t,e,null,null)};il.prototype.unmount=Nc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;fn(function(){nl(null,t,null,null)}),e[er]=null}};function il(t){this._internalRoot=t}il.prototype.unstable_scheduleHydration=function(t){if(t){var e=Xh();t={blockedOn:null,target:t,priority:e};for(var r=0;r<fr.length&&e!==0&&e<fr[r].priority;r++);fr.splice(r,0,t),r===0&&Zh(t)}};function Cc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function sl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function lf(){}function jv(t,e,r,n,i){if(i){if(typeof n=="function"){var s=n;n=function(){var c=Ta(a);s.call(c)}}var a=xm(e,n,t,0,null,!1,!1,"",lf);return t._reactRootContainer=a,t[er]=a.current,Xi(t.nodeType===8?t.parentNode:t),fn(),a}for(;i=t.lastChild;)t.removeChild(i);if(typeof n=="function"){var l=n;n=function(){var c=Ta(u);l.call(c)}}var u=jc(t,0,!1,null,null,!1,!1,"",lf);return t._reactRootContainer=u,t[er]=u.current,Xi(t.nodeType===8?t.parentNode:t),fn(function(){nl(e,u,r,n)}),u}function al(t,e,r,n,i){var s=r._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var u=Ta(a);l.call(u)}}nl(e,a,t,i)}else a=jv(r,e,t,i,n);return Ta(a)}Qh=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=ji(e.pendingLanes);r!==0&&(qu(e,r|1),Ye(e,ye()),!(V&6)&&(Xn=ye()+500,Ir()))}break;case 13:fn(function(){var n=tr(t,1);if(n!==null){var i=De();Lt(n,t,1,i)}}),bc(t,1)}};Yu=function(t){if(t.tag===13){var e=tr(t,134217728);if(e!==null){var r=De();Lt(e,t,134217728,r)}bc(t,134217728)}};Gh=function(t){if(t.tag===13){var e=Nr(t),r=tr(t,e);if(r!==null){var n=De();Lt(r,t,e,n)}bc(t,e)}};Xh=function(){return Y};Kh=function(t,e){var r=Y;try{return Y=t,e()}finally{Y=r}};yo=function(t,e,r){switch(e){case"input":if(fo(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var n=r[e];if(n!==t&&n.form===t.form){var i=Xa(n);if(!i)throw Error(T(90));Eh(n),fo(n,i)}}}break;case"textarea":Th(t,r);break;case"select":e=r.value,e!=null&&On(t,!!r.multiple,e,!1)}};Fh=_c;Ih=fn;var bv={usingClientEntryPoint:!1,Events:[_s,Nn,Xa,Oh,Ah,_c]},_i={findFiberByHostInstance:Qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Nv={bundleType:_i.bundleType,version:_i.version,rendererPackageName:_i.rendererPackageName,rendererConfig:_i.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Uh(t),t===null?null:t.stateNode},findFiberByHostInstance:_i.findFiberByHostInstance||Sv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $s=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$s.isDisabled&&$s.supportsFiber)try{qa=$s.inject(Nv),Ut=$s}catch{}}ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bv;ft.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cc(e))throw Error(T(200));return kv(t,e,null,r)};ft.createRoot=function(t,e){if(!Cc(t))throw Error(T(299));var r=!1,n="",i=ym;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=jc(t,1,!1,null,null,r,!1,n,i),t[er]=e.current,Xi(t.nodeType===8?t.parentNode:t),new Nc(e)};ft.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(T(188)):(t=Object.keys(t).join(","),Error(T(268,t)));return t=Uh(e),t=t===null?null:t.stateNode,t};ft.flushSync=function(t){return fn(t)};ft.hydrate=function(t,e,r){if(!sl(e))throw Error(T(200));return al(null,t,e,!0,r)};ft.hydrateRoot=function(t,e,r){if(!Cc(t))throw Error(T(405));var n=r!=null&&r.hydratedSources||null,i=!1,s="",a=ym;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),e=xm(e,null,t,1,r??null,i,!1,s,a),t[er]=e.current,Xi(t),n)for(t=0;t<n.length;t++)r=n[t],i=r._getVersion,i=i(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,i]:e.mutableSourceEagerHydrationData.push(r,i);return new il(e)};ft.render=function(t,e,r){if(!sl(e))throw Error(T(200));return al(null,t,e,!1,r)};ft.unmountComponentAtNode=function(t){if(!sl(t))throw Error(T(40));return t._reactRootContainer?(fn(function(){al(null,null,t,!1,function(){t._reactRootContainer=null,t[er]=null})}),!0):!1};ft.unstable_batchedUpdates=_c;ft.unstable_renderSubtreeIntoContainer=function(t,e,r,n){if(!sl(r))throw Error(T(200));if(t==null||t._reactInternals===void 0)throw Error(T(38));return al(t,e,r,!1,n)};ft.version="18.3.1-next-f1338f8080-20240426";function _m(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_m)}catch(t){console.error(t)}}_m(),_h.exports=ft;var Cv=_h.exports,of=Cv;io.createRoot=of.createRoot,io.hydrateRoot=of.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ss(){return ss=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)({}).hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},ss.apply(null,arguments)}var gr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(gr||(gr={}));const uf="popstate";function Ev(t){t===void 0&&(t={});function e(n,i){let{pathname:s,search:a,hash:l}=n.location;return Zo("",{pathname:s,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(n,i){return typeof i=="string"?i:za(i)}return Tv(e,r,null,t)}function ce(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ec(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Pv(){return Math.random().toString(36).substr(2,8)}function cf(t,e){return{usr:t.state,key:t.key,idx:e}}function Zo(t,e,r,n){return r===void 0&&(r=null),ss({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?li(e):e,{state:r,key:e&&e.key||n||Pv()})}function za(t){let{pathname:e="/",search:r="",hash:n=""}=t;return r&&r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function li(t){let e={};if(t){let r=t.indexOf("#");r>=0&&(e.hash=t.substr(r),t=t.substr(0,r));let n=t.indexOf("?");n>=0&&(e.search=t.substr(n),t=t.substr(0,n)),t&&(e.pathname=t)}return e}function Tv(t,e,r,n){n===void 0&&(n={});let{window:i=document.defaultView,v5Compat:s=!1}=n,a=i.history,l=gr.Pop,u=null,c=d();c==null&&(c=0,a.replaceState(ss({},a.state,{idx:c}),""));function d(){return(a.state||{idx:null}).idx}function f(){l=gr.Pop;let _=d(),v=_==null?null:_-c;c=_,u&&u({action:l,location:p.location,delta:v})}function h(_,v){l=gr.Push;let g=Zo(p.location,_,v);c=d()+1;let y=cf(g,c),w=p.createHref(g);try{a.pushState(y,"",w)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(w)}s&&u&&u({action:l,location:p.location,delta:1})}function m(_,v){l=gr.Replace;let g=Zo(p.location,_,v);c=d();let y=cf(g,c),w=p.createHref(g);a.replaceState(y,"",w),s&&u&&u({action:l,location:p.location,delta:0})}function x(_){let v=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof _=="string"?_:za(_);return g=g.replace(/ $/,"%20"),ce(v,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,v)}let p={get action(){return l},get location(){return t(i,a)},listen(_){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(uf,f),u=_,()=>{i.removeEventListener(uf,f),u=null}},createHref(_){return e(i,_)},createURL:x,encodeLocation(_){let v=x(_);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:h,replace:m,go(_){return a.go(_)}};return p}var df;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(df||(df={}));function zv(t,e,r){return r===void 0&&(r="/"),Mv(t,e,r)}function Mv(t,e,r,n){let i=typeof e=="string"?li(e):e,s=Kn(i.pathname||"/",r);if(s==null)return null;let a=wm(t);Lv(a);let l=null,u=Vv(s);for(let c=0;l==null&&c<a.length;++c)l=$v(a[c],u);return l}function wm(t,e,r,n){e===void 0&&(e=[]),r===void 0&&(r=[]),n===void 0&&(n="");let i=(s,a,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};u.relativePath.startsWith("/")&&(ce(u.relativePath.startsWith(n),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(n.length));let c=Er([n,u.relativePath]),d=r.concat(u);s.children&&s.children.length>0&&(ce(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),wm(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:Bv(c,s.index),routesMeta:d})};return t.forEach((s,a)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,a);else for(let u of km(s.path))i(s,a,u)}),e}function km(t){let e=t.split("/");if(e.length===0)return[];let[r,...n]=e,i=r.endsWith("?"),s=r.replace(/\?$/,"");if(n.length===0)return i?[s,""]:[s];let a=km(n.join("/")),l=[];return l.push(...a.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...a),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function Lv(t){t.sort((e,r)=>e.score!==r.score?r.score-e.score:Uv(e.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const Rv=/^:[\w-]+$/,Ov=3,Av=2,Fv=1,Iv=10,Dv=-2,ff=t=>t==="*";function Bv(t,e){let r=t.split("/"),n=r.length;return r.some(ff)&&(n+=Dv),e&&(n+=Av),r.filter(i=>!ff(i)).reduce((i,s)=>i+(Rv.test(s)?Ov:s===""?Fv:Iv),n)}function Uv(t,e){return t.length===e.length&&t.slice(0,-1).every((n,i)=>n===e[i])?t[t.length-1]-e[e.length-1]:0}function $v(t,e,r){let{routesMeta:n}=t,i={},s="/",a=[];for(let l=0;l<n.length;++l){let u=n[l],c=l===n.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=Jo({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),h=u.route;if(!f)return null;Object.assign(i,f.params),a.push({params:i,pathname:Er([s,f.pathname]),pathnameBase:Gv(Er([s,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(s=Er([s,f.pathnameBase]))}return a}function Jo(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[r,n]=Wv(t.path,t.caseSensitive,t.end),i=e.match(r);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:n.reduce((c,d,f)=>{let{paramName:h,isOptional:m}=d;if(h==="*"){let p=l[f]||"";a=s.slice(0,s.length-p.length).replace(/(.)\/+$/,"$1")}const x=l[f];return m&&!x?c[h]=void 0:c[h]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:a,pattern:t}}function Wv(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!0),Ec(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let n=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,u)=>(n.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(n.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),n]}function Vv(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ec(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Kn(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?e.length-1:e.length,n=t.charAt(r);return n&&n!=="/"?null:t.slice(r)||"/"}const Hv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qv=t=>Hv.test(t);function Yv(t,e){e===void 0&&(e="/");let{pathname:r,search:n="",hash:i=""}=typeof t=="string"?li(t):t,s;if(r)if(qv(r))s=r;else{if(r.includes("//")){let a=r;r=Sm(r),Ec(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+r))}r.startsWith("/")?s=hf(r.substring(1),"/"):s=hf(r,e)}else s=e;return{pathname:s,search:Xv(n),hash:Kv(i)}}function hf(t,e){let r=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function Vl(t,e,r,n){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Qv(t){return t.filter((e,r)=>r===0||e.route.path&&e.route.path.length>0)}function Pc(t,e){let r=Qv(t);return e?r.map((n,i)=>i===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function Tc(t,e,r,n){n===void 0&&(n=!1);let i;typeof t=="string"?i=li(t):(i=ss({},t),ce(!i.pathname||!i.pathname.includes("?"),Vl("?","pathname","search",i)),ce(!i.pathname||!i.pathname.includes("#"),Vl("#","pathname","hash",i)),ce(!i.search||!i.search.includes("#"),Vl("#","search","hash",i)));let s=t===""||i.pathname==="",a=s?"/":i.pathname,l;if(a==null)l=r;else{let f=e.length-1;if(!n&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}l=f>=0?e[f]:"/"}let u=Yv(i,l),c=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&r.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Sm=t=>t.replace(/\/\/+/g,"/"),Er=t=>Sm(t.join("/")),Gv=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Xv=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Kv=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Zv(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const jm=["post","put","patch","delete"];new Set(jm);const Jv=["get",...jm];new Set(Jv);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function as(){return as=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)({}).hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},as.apply(null,arguments)}const ll=b.createContext(null),bm=b.createContext(null),ar=b.createContext(null),ol=b.createContext(null),Dr=b.createContext({outlet:null,matches:[],isDataRoute:!1}),Nm=b.createContext(null);function ex(t,e){let{relative:r}=e===void 0?{}:e;oi()||ce(!1);let{basename:n,navigator:i}=b.useContext(ar),{hash:s,pathname:a,search:l}=ul(t,{relative:r}),u=a;return n!=="/"&&(u=a==="/"?n:Er([n,a])),i.createHref({pathname:u,search:l,hash:s})}function oi(){return b.useContext(ol)!=null}function Br(){return oi()||ce(!1),b.useContext(ol).location}function Cm(t){b.useContext(ar).static||b.useLayoutEffect(t)}function lr(){let{isDataRoute:t}=b.useContext(Dr);return t?hx():tx()}function tx(){oi()||ce(!1);let t=b.useContext(ll),{basename:e,future:r,navigator:n}=b.useContext(ar),{matches:i}=b.useContext(Dr),{pathname:s}=Br(),a=JSON.stringify(Pc(i,r.v7_relativeSplatPath)),l=b.useRef(!1);return Cm(()=>{l.current=!0}),b.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){n.go(c);return}let f=Tc(c,JSON.parse(a),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Er([e,f.pathname])),(d.replace?n.replace:n.push)(f,d.state,d)},[e,n,a,s,t])}function ul(t,e){let{relative:r}=e===void 0?{}:e,{future:n}=b.useContext(ar),{matches:i}=b.useContext(Dr),{pathname:s}=Br(),a=JSON.stringify(Pc(i,n.v7_relativeSplatPath));return b.useMemo(()=>Tc(t,JSON.parse(a),s,r==="path"),[t,a,s,r])}function rx(t,e){return nx(t,e)}function nx(t,e,r,n){oi()||ce(!1);let{navigator:i}=b.useContext(ar),{matches:s}=b.useContext(Dr),a=s[s.length-1],l=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let c=Br(),d;if(e){var f;let _=typeof e=="string"?li(e):e;u==="/"||(f=_.pathname)!=null&&f.startsWith(u)||ce(!1),d=_}else d=c;let h=d.pathname||"/",m=h;if(u!=="/"){let _=u.replace(/^\//,"").split("/");m="/"+h.replace(/^\//,"").split("/").slice(_.length).join("/")}let x=zv(t,{pathname:m}),p=ox(x&&x.map(_=>Object.assign({},_,{params:Object.assign({},l,_.params),pathname:Er([u,i.encodeLocation?i.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?u:Er([u,i.encodeLocation?i.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),s,r,n);return e&&p?b.createElement(ol.Provider,{value:{location:as({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:gr.Pop}},p):p}function ix(){let t=fx(),e=Zv(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),r?b.createElement("pre",{style:i},r):null,null)}const sx=b.createElement(ix,null);class ax extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error!==void 0?b.createElement(Dr.Provider,{value:this.props.routeContext},b.createElement(Nm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function lx(t){let{routeContext:e,match:r,children:n}=t,i=b.useContext(ll);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),b.createElement(Dr.Provider,{value:e},n)}function ox(t,e,r,n){var i;if(e===void 0&&(e=[]),r===void 0&&(r=null),n===void 0&&(n=null),t==null){var s;if(!r)return null;if(r.errors)t=r.matches;else if((s=n)!=null&&s.v7_partialHydration&&e.length===0&&!r.initialized&&r.matches.length>0)t=r.matches;else return null}let a=t,l=(i=r)==null?void 0:i.errors;if(l!=null){let d=a.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||ce(!1),a=a.slice(0,Math.min(a.length,d+1))}let u=!1,c=-1;if(r&&n&&n.v7_partialHydration)for(let d=0;d<a.length;d++){let f=a[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:h,errors:m}=r,x=f.route.loader&&h[f.route.id]===void 0&&(!m||m[f.route.id]===void 0);if(f.route.lazy||x){u=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((d,f,h)=>{let m,x=!1,p=null,_=null;r&&(m=l&&f.route.id?l[f.route.id]:void 0,p=f.route.errorElement||sx,u&&(c<0&&h===0?(px("route-fallback"),x=!0,_=null):c===h&&(x=!0,_=f.route.hydrateFallbackElement||null)));let v=e.concat(a.slice(0,h+1)),g=()=>{let y;return m?y=p:x?y=_:f.route.Component?y=b.createElement(f.route.Component,null):f.route.element?y=f.route.element:y=d,b.createElement(lx,{match:f,routeContext:{outlet:d,matches:v,isDataRoute:r!=null},children:y})};return r&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?b.createElement(ax,{location:r.location,revalidation:r.revalidation,component:p,error:m,children:g(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):g()},null)}var Em=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Em||{}),Pm=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Pm||{});function ux(t){let e=b.useContext(ll);return e||ce(!1),e}function cx(t){let e=b.useContext(bm);return e||ce(!1),e}function dx(t){let e=b.useContext(Dr);return e||ce(!1),e}function Tm(t){let e=dx(),r=e.matches[e.matches.length-1];return r.route.id||ce(!1),r.route.id}function fx(){var t;let e=b.useContext(Nm),r=cx(),n=Tm();return e!==void 0?e:(t=r.errors)==null?void 0:t[n]}function hx(){let{router:t}=ux(Em.UseNavigateStable),e=Tm(Pm.UseNavigateStable),r=b.useRef(!1);return Cm(()=>{r.current=!0}),b.useCallback(function(i,s){s===void 0&&(s={}),r.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,as({fromRouteId:e},s)))},[t,e])}const pf={};function px(t,e,r){pf[t]||(pf[t]=!0)}function mx(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function zm(t){let{to:e,replace:r,state:n,relative:i}=t;oi()||ce(!1);let{future:s,static:a}=b.useContext(ar),{matches:l}=b.useContext(Dr),{pathname:u}=Br(),c=lr(),d=Tc(e,Pc(l,s.v7_relativeSplatPath),u,i==="path"),f=JSON.stringify(d);return b.useEffect(()=>c(JSON.parse(f),{replace:r,state:n,relative:i}),[c,f,i,r,n]),null}function Ct(t){ce(!1)}function gx(t){let{basename:e="/",children:r=null,location:n,navigationType:i=gr.Pop,navigator:s,static:a=!1,future:l}=t;oi()&&ce(!1);let u=e.replace(/^\/*/,"/"),c=b.useMemo(()=>({basename:u,navigator:s,static:a,future:as({v7_relativeSplatPath:!1},l)}),[u,l,s,a]);typeof n=="string"&&(n=li(n));let{pathname:d="/",search:f="",hash:h="",state:m=null,key:x="default"}=n,p=b.useMemo(()=>{let _=Kn(d,u);return _==null?null:{location:{pathname:_,search:f,hash:h,state:m,key:x},navigationType:i}},[u,d,f,h,m,x,i]);return p==null?null:b.createElement(ar.Provider,{value:c},b.createElement(ol.Provider,{children:r,value:p}))}function vx(t){let{children:e,location:r}=t;return rx(eu(e),r)}new Promise(()=>{});function eu(t,e){e===void 0&&(e=[]);let r=[];return b.Children.forEach(t,(n,i)=>{if(!b.isValidElement(n))return;let s=[...e,i];if(n.type===b.Fragment){r.push.apply(r,eu(n.props.children,s));return}n.type!==Ct&&ce(!1),!n.props.index||!n.props.children||ce(!1);let a={id:n.props.id||s.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(a.children=eu(n.props.children,s)),r.push(a)}),r}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ma(){return Ma=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)({}).hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},Ma.apply(null,arguments)}function Mm(t,e){if(t==null)return{};var r={};for(var n in t)if({}.hasOwnProperty.call(t,n)){if(e.indexOf(n)!==-1)continue;r[n]=t[n]}return r}function xx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function yx(t,e){return t.button===0&&(!e||e==="_self")&&!xx(t)}function tu(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,r)=>{let n=t[r];return e.concat(Array.isArray(n)?n.map(i=>[r,i]):[[r,n]])},[]))}function _x(t,e){let r=tu(t);return e&&e.forEach((n,i)=>{r.has(i)||e.getAll(i).forEach(s=>{r.append(i,s)})}),r}const wx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],kx=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Sx="6";try{window.__reactRouterVersion=Sx}catch{}const jx=b.createContext({isTransitioning:!1}),bx="startTransition",mf=g0[bx];function Nx(t){let{basename:e,children:r,future:n,window:i}=t,s=b.useRef();s.current==null&&(s.current=Ev({window:i,v5Compat:!0}));let a=s.current,[l,u]=b.useState({action:a.action,location:a.location}),{v7_startTransition:c}=n||{},d=b.useCallback(f=>{c&&mf?mf(()=>u(f)):u(f)},[u,c]);return b.useLayoutEffect(()=>a.listen(d),[a,d]),b.useEffect(()=>mx(n),[n]),b.createElement(gx,{basename:e,children:r,location:l.location,navigationType:l.action,navigator:a,future:n})}const Cx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ex=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ve=b.forwardRef(function(e,r){let{onClick:n,relative:i,reloadDocument:s,replace:a,state:l,target:u,to:c,preventScrollReset:d,viewTransition:f}=e,h=Mm(e,wx),{basename:m}=b.useContext(ar),x,p=!1;if(typeof c=="string"&&Ex.test(c)&&(x=c,Cx))try{let y=new URL(window.location.href),w=c.startsWith("//")?new URL(y.protocol+c):new URL(c),k=Kn(w.pathname,m);w.origin===y.origin&&k!=null?c=k+w.search+w.hash:p=!0}catch{}let _=ex(c,{relative:i}),v=Tx(c,{replace:a,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:f});function g(y){n&&n(y),y.defaultPrevented||v(y)}return b.createElement("a",Ma({},h,{href:x||_,onClick:p||s?n:g,ref:r,target:u}))}),Kr=b.forwardRef(function(e,r){let{"aria-current":n="page",caseSensitive:i=!1,className:s="",end:a=!1,style:l,to:u,viewTransition:c,children:d}=e,f=Mm(e,kx),h=ul(u,{relative:f.relative}),m=Br(),x=b.useContext(bm),{navigator:p,basename:_}=b.useContext(ar),v=x!=null&&zx(h)&&c===!0,g=p.encodeLocation?p.encodeLocation(h).pathname:h.pathname,y=m.pathname,w=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;i||(y=y.toLowerCase(),w=w?w.toLowerCase():null,g=g.toLowerCase()),w&&_&&(w=Kn(w,_)||w);const k=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let j=y===g||!a&&y.startsWith(g)&&y.charAt(k)==="/",S=w!=null&&(w===g||!a&&w.startsWith(g)&&w.charAt(g.length)==="/"),N={isActive:j,isPending:S,isTransitioning:v},C=j?n:void 0,E;typeof s=="function"?E=s(N):E=[s,j?"active":null,S?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let M=typeof l=="function"?l(N):l;return b.createElement(ve,Ma({},f,{"aria-current":C,className:E,ref:r,style:M,to:u,viewTransition:c}),typeof d=="function"?d(N):d)});var ru;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(ru||(ru={}));var gf;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(gf||(gf={}));function Px(t){let e=b.useContext(ll);return e||ce(!1),e}function Tx(t,e){let{target:r,replace:n,state:i,preventScrollReset:s,relative:a,viewTransition:l}=e===void 0?{}:e,u=lr(),c=Br(),d=ul(t,{relative:a});return b.useCallback(f=>{if(yx(f,r)){f.preventDefault();let h=n!==void 0?n:za(c)===za(d);u(t,{replace:h,state:i,preventScrollReset:s,relative:a,viewTransition:l})}},[c,u,d,n,i,r,t,s,a,l])}function Lm(t){let e=b.useRef(tu(t)),r=b.useRef(!1),n=Br(),i=b.useMemo(()=>_x(n.search,r.current?null:e.current),[n.search]),s=lr(),a=b.useCallback((l,u)=>{const c=tu(typeof l=="function"?l(i):l);r.current=!0,s("?"+c,u)},[s,i]);return[i,a]}function zx(t,e){e===void 0&&(e={});let r=b.useContext(jx);r==null&&ce(!1);let{basename:n}=Px(ru.useViewTransitionState),i=ul(t,{relative:e.relative});if(!r.isTransitioning)return!1;let s=Kn(r.currentLocation.pathname,n)||r.currentLocation.pathname,a=Kn(r.nextLocation.pathname,n)||r.nextLocation.pathname;return Jo(i.pathname,a)!=null||Jo(i.pathname,s)!=null}const nu=[{id:"u_alex",name:"Alex Vance",username:"alex_vance",email:"alex@socialla.com",password:"Password123!",avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",cover:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",bio:"Product Designer & Frontend Engineer 🚀 Crafting intuitive digital experiences with clean code.",followers:2450,following:480,verified:!0,joinedDate:"March 2026"},{id:"u_sarah",name:"Sarah Jenkins",username:"sarah_design",email:"sarah@socialla.com",password:"Password123!",avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",cover:"https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80",bio:"Lead UX Researcher & Visual Artist 🎨 Exploring generative AI & minimal aesthetics.",followers:5120,following:310,verified:!0,joinedDate:"January 2026"},{id:"u_marcus",name:"Marcus Chen",username:"marcus_tech",email:"marcus@socialla.com",password:"Password123!",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",cover:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",bio:"Building open source tools & scale systems ⚡ Coffee addict & tech podcast host.",followers:1890,following:620,verified:!1,joinedDate:"February 2026"},{id:"u_elena",name:"Elena Rodriguez",username:"elena_travels",email:"elena@socialla.com",password:"Password123!",avatar:"https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",cover:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",bio:"Travel Photographer 📷 Capturing hidden gems around Europe & Latin America.",followers:8430,following:215,verified:!0,joinedDate:"December 2025"},{id:"u_david",name:"David Kim",username:"david_ai",email:"david@socialla.com",password:"Password123!",avatar:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",cover:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",bio:"AI Engineer & Machine Learning Enthusiast. Exploring neural networks & web development.",followers:3200,following:410,verified:!1,joinedDate:"April 2026"}],iu=[{id:"post_1",authorId:"u_sarah",authorName:"Sarah Jenkins",authorUsername:"sarah_design",authorAvatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",authorVerified:!0,content:"Just finished redesigning the core design tokens for our new web application! 🎨 Combining vibrant neon gradients with glassmorphism overlays creates such a fresh vibe. What do you think of this visual hierarchy?",image:"https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1000&q=80",likes:["u_alex","u_marcus","u_elena"],likeCount:42,comments:[{id:"c_1",authorName:"Alex Vance",authorUsername:"alex_vance",authorAvatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",content:"The subtle glass blur backdrop is incredible! Great work Sarah.",timestamp:"2 hours ago"},{id:"c_2",authorName:"Marcus Chen",authorUsername:"marcus_tech",authorAvatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",content:"Looks super crisp on OLED displays. Loving the contrast!",timestamp:"1 hour ago"}],commentCount:2,shares:14,savedBy:["u_alex"],timestamp:"3 hours ago"},{id:"post_2",authorId:"u_elena",authorName:"Elena Rodriguez",authorUsername:"elena_travels",authorAvatar:"https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",authorVerified:!0,content:"Golden hour in the Swiss Alps 🏔️ Early morning hiking pays off when you catch sunrise above the clouds. Absolutely breathtaking scenery!",image:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",likes:["u_sarah","u_david"],likeCount:128,comments:[{id:"c_3",authorName:"David Kim",authorUsername:"david_ai",authorAvatar:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",content:"What camera lens did you use for this shot? Lighting is perfect!",timestamp:"4 hours ago"}],commentCount:1,shares:29,savedBy:[],timestamp:"5 hours ago"},{id:"post_3",authorId:"u_marcus",authorName:"Marcus Chen",authorUsername:"marcus_tech",authorAvatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",authorVerified:!1,content:"Excited to launch Socialla today! A frontend social experience built with pure React, modern CSS design tokens, zero external database dependencies, and complete client-side persistence.",image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80",likes:["u_alex","u_sarah","u_elena","u_david"],likeCount:89,comments:[],commentCount:0,shares:31,savedBy:["u_alex"],timestamp:"1 day ago"}],su=[{id:"story_1",userId:"u_sarah",userName:"Sarah Jenkins",userAvatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",image:"https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80",caption:"Morning desk setup ☕ Ready to code!",timestamp:"2h ago",seen:!1},{id:"story_2",userId:"u_elena",userName:"Elena Rodriguez",userAvatar:"https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",caption:"Exploring coastal waves 🌊",timestamp:"4h ago",seen:!1},{id:"story_3",userId:"u_marcus",userName:"Marcus Chen",userAvatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",image:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",caption:"Debugging till midnight 💻",timestamp:"6h ago",seen:!0},{id:"story_4",userId:"u_david",userName:"David Kim",userAvatar:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",image:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",caption:"AI Hackathon vibes 🤖",timestamp:"8h ago",seen:!0}],au=[{id:"notif_1",type:"like",user:{name:"Sarah Jenkins",username:"sarah_design",avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"},targetText:"liked your post 'Just finished redesigning the core design tokens...'",timestamp:"10m ago",read:!1},{id:"notif_2",type:"comment",user:{name:"Marcus Chen",username:"marcus_tech",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"},targetText:"commented: 'Looks super crisp on OLED displays...'",timestamp:"1h ago",read:!1},{id:"notif_3",type:"follow",user:{name:"Elena Rodriguez",username:"elena_travels",avatar:"https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"},targetText:"started following you on Socialla.",timestamp:"3h ago",read:!0},{id:"notif_4",type:"mention",user:{name:"David Kim",username:"david_ai",avatar:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"},targetText:"mentioned you in a comment.",timestamp:"1d ago",read:!0}],lu=[{id:"conv_sarah",participant:{id:"u_sarah",name:"Sarah Jenkins",username:"sarah_design",avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",online:!0},unread:2,messages:[{id:"m1",senderId:"u_sarah",text:"Hey! Did you check out the new design system components?",time:"10:30 AM"},{id:"m2",senderId:"u_sarah",text:"I uploaded the Figma tokens to the post feed!",time:"10:31 AM"},{id:"m3",senderId:"me",text:"Yes! The glassmorphism and gradient cards look super slick.",time:"10:45 AM"},{id:"m4",senderId:"u_sarah",text:"Awesome! Let me know if we need any extra icon sets.",time:"10:50 AM"}]},{id:"conv_marcus",participant:{id:"u_marcus",name:"Marcus Chen",username:"marcus_tech",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",online:!0},unread:0,messages:[{id:"m10",senderId:"u_marcus",text:"Deploying the Socialla frontend update now!",time:"Yesterday"},{id:"m11",senderId:"me",text:"Sweet! All localStorage sync utilities are running smooth.",time:"Yesterday"}]},{id:"conv_elena",participant:{id:"u_elena",name:"Elena Rodriguez",username:"elena_travels",avatar:"https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",online:!1},unread:0,messages:[{id:"m20",senderId:"u_elena",text:"Thanks for saving my mountain hiking story highlight!",time:"3 days ago"}]}],ou={theme:"dark",notifications:{likes:!0,comments:!0,follows:!0,messages:!0},privacy:{privateProfile:!1,showOnlineStatus:!0,allowTagging:!0}},Q={USERS:"socialla_users",CURRENT_USER:"socialla_current_user",POSTS:"socialla_posts",STORIES:"socialla_stories",NOTIFICATIONS:"socialla_notifications",MESSAGES:"socialla_messages",SETTINGS:"socialla_settings"},mn=(t,e)=>{try{const r=localStorage.getItem(t);return r?JSON.parse(r):e}catch(r){return console.error(`Error reading ${t} from localStorage:`,r),e}},pt=(t,e)=>{try{localStorage.setItem(t,JSON.stringify(e))}catch(r){console.error(`Error saving ${t} to localStorage:`,r)}},Zr=()=>{const t=mn(Q.USERS,null);return t||(pt(Q.USERS,nu),nu)},vf=t=>pt(Q.USERS,t),Mx=()=>mn(Q.CURRENT_USER,null),Hl=t=>pt(Q.CURRENT_USER,t),Lx=()=>localStorage.removeItem(Q.CURRENT_USER),zc=()=>{const t=mn(Q.POSTS,null);return t||(pt(Q.POSTS,iu),iu)},rn=t=>pt(Q.POSTS,t),Rx=()=>{const t=mn(Q.STORIES,null);return t||(pt(Q.STORIES,su),su)},xf=t=>pt(Q.STORIES,t),Ox=()=>{const t=mn(Q.NOTIFICATIONS,null);return t||(pt(Q.NOTIFICATIONS,au),au)},yf=t=>pt(Q.NOTIFICATIONS,t),Ax=()=>{const t=mn(Q.MESSAGES,null);return t||(pt(Q.MESSAGES,lu),lu)},Fx=t=>pt(Q.MESSAGES,t),uu=()=>{const t=mn(Q.SETTINGS,null);return t||(pt(Q.SETTINGS,ou),ou)},cu=t=>pt(Q.SETTINGS,t),Ix=()=>{localStorage.setItem(Q.USERS,JSON.stringify(nu)),localStorage.setItem(Q.POSTS,JSON.stringify(iu)),localStorage.setItem(Q.STORIES,JSON.stringify(su)),localStorage.setItem(Q.NOTIFICATIONS,JSON.stringify(au)),localStorage.setItem(Q.MESSAGES,JSON.stringify(lu)),localStorage.setItem(Q.SETTINGS,JSON.stringify(ou)),localStorage.removeItem(Q.CURRENT_USER)},Rm=b.createContext(),Dx=({children:t})=>{const[e,r]=b.useState(()=>Mx()),[n,i]=b.useState(!1);b.useEffect(()=>{Zr()},[]);const s=async({name:c,username:d,email:f,password:h,avatar:m})=>{i(!0);try{const x=Zr();if(x.some(y=>y.email.toLowerCase()===f.toLowerCase()))throw new Error("An account with this email address already exists.");if(x.some(y=>y.username.toLowerCase()===d.toLowerCase()))throw new Error("This username is already taken. Please pick another.");const v={id:`u_${Date.now()}`,name:c,username:d,email:f,password:h,avatar:m||"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80",cover:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",bio:"Welcome to my Socialla profile! Excited to connect and share.",followers:0,following:0,verified:!1,joinedDate:"Just now"},g=[...x,v];return vf(g),Hl(v),r(v),v}finally{i(!1)}},a=async(c,d)=>{i(!0);try{const f=Zr(),h=c.trim().toLowerCase(),m=f.find(x=>x.email.toLowerCase()===h||x.username.toLowerCase()===h);if(!m)throw new Error("No user account found with that email or username.");if(m.password!==d)throw new Error("Incorrect password. Please verify and try again.");return Hl(m),r(m),m}finally{i(!1)}},l=()=>{Lx(),r(null)},u=c=>{if(!e)return;const d={...e,...c};Hl(d),r(d);const h=Zr().map(m=>m.id===e.id?d:m);vf(h)};return o.jsx(Rm.Provider,{value:{currentUser:e,loading:n,register:s,login:a,logout:l,updateProfile:u,isAuthenticated:!!e},children:t})},Je=()=>b.useContext(Rm),Om=b.createContext(),Bx=({children:t})=>{const[e,r]=b.useState(()=>uu().theme||"dark");b.useEffect(()=>{const s=document.body;if(s.classList.remove("light-theme","dark-theme"),e==="system"){const l=window.matchMedia("(prefers-color-scheme: dark)").matches;s.classList.add(l?"dark-theme":"light-theme")}else s.classList.add(`${e}-theme`);const a=uu();cu({...a,theme:e})},[e]);const n=()=>{r(s=>s==="dark"?"light":"dark")},i=s=>{r(s)};return o.jsx(Om.Provider,{value:{theme:e,toggleTheme:n,setTheme:i},children:t})},Am=()=>b.useContext(Om);var Fm={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},_f=Kt.createContext&&Kt.createContext(Fm),Ux=["attr","size","title"];function $x(t,e){if(t==null)return{};var r,n,i=Wx(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)===-1&&{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function Wx(t,e){if(t==null)return{};var r={};for(var n in t)if({}.hasOwnProperty.call(t,n)){if(e.indexOf(n)!==-1)continue;r[n]=t[n]}return r}function La(){return La=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)({}).hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},La.apply(null,arguments)}function wf(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,n)}return r}function Ra(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?wf(Object(r),!0).forEach(function(n){Vx(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):wf(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function Vx(t,e,r){return(e=Hx(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Hx(t){var e=qx(t,"string");return typeof e=="symbol"?e:e+""}function qx(t,e){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Im(t){return t&&t.map((e,r)=>Kt.createElement(e.tag,Ra({key:r},e.attr),Im(e.child)))}function D(t){return e=>Kt.createElement(Yx,La({attr:Ra({},t.attr)},e),Im(t.child))}function Yx(t){var e=r=>{var n=t.attr,i=t.size,s=t.title,a=$x(t,Ux),l=i||r.size||"1em",u;return r.className&&(u=r.className),t.className&&(u=(u?u+" ":"")+t.className),Kt.createElement("svg",La({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,a,{className:u,style:Ra(Ra({color:t.color||r.color},r.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&Kt.createElement("title",null,s),t.children)};return _f!==void 0?Kt.createElement(_f.Consumer,null,r=>e(r)):e(Fm)}function kf(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(t)}function gn(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(t)}function du(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(t)}function cl(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(t)}function Dm(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"8.5",cy:"7",r:"4"},child:[]},{tag:"line",attr:{x1:"20",y1:"8",x2:"20",y2:"14"},child:[]},{tag:"line",attr:{x1:"23",y1:"11",x2:"17",y2:"11"},child:[]}]})(t)}function Bm(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"8.5",cy:"7",r:"4"},child:[]},{tag:"polyline",attr:{points:"17 11 19 13 23 9"},child:[]}]})(t)}function dl(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(t)}function fu(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"},child:[]},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"},child:[]}]})(t)}function hu(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(t)}function Qx(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(t)}function Gx(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"M8 14s1.5 2 4 2 4-2 4-2"},child:[]},{tag:"line",attr:{x1:"9",y1:"9",x2:"9.01",y2:"9"},child:[]},{tag:"line",attr:{x1:"15",y1:"9",x2:"15.01",y2:"9"},child:[]}]})(t)}function Um(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(t)}function $m(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"5",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"12",r:"3"},child:[]},{tag:"circle",attr:{cx:"18",cy:"19",r:"3"},child:[]},{tag:"line",attr:{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"},child:[]},{tag:"line",attr:{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"},child:[]}]})(t)}function Xx(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]},{tag:"path",attr:{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"},child:[]}]})(t)}function Mc(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(t)}function Lc(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(t)}function Wm(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"},child:[]},{tag:"polyline",attr:{points:"17 21 17 13 7 13 7 21"},child:[]},{tag:"polyline",attr:{points:"7 3 7 8 15 8"},child:[]}]})(t)}function Kx(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(t)}function Vm(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"16"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(t)}function Zx(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"19",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"5",cy:"12",r:"1"},child:[]}]})(t)}function Hm(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(t)}function Jx(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"8",y1:"21",x2:"16",y2:"21"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12",y2:"21"},child:[]}]})(t)}function ui(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"},child:[]}]})(t)}function ey(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"},child:[]}]})(t)}function pu(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(t)}function qm(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},child:[]},{tag:"polyline",attr:{points:"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"9",y2:"12"},child:[]}]})(t)}function Oa(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(t)}function ty(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(t)}function ry(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12.01",y2:"8"},child:[]}]})(t)}function Ym(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"circle",attr:{cx:"8.5",cy:"8.5",r:"1.5"},child:[]},{tag:"polyline",attr:{points:"21 15 16 10 5 21"},child:[]}]})(t)}function Qm(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},child:[]},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"},child:[]}]})(t)}function Zn(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(t)}function mu(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(t)}function gu(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(t)}function vu(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"},child:[]},{tag:"line",attr:{x1:"1",y1:"1",x2:"23",y2:"23"},child:[]}]})(t)}function ny(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h9"},child:[]},{tag:"path",attr:{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"},child:[]}]})(t)}function iy(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},child:[]}]})(t)}function Rc(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polygon",attr:{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"},child:[]}]})(t)}function Sf(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(t)}function sy(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"},child:[]}]})(t)}function ay(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 18 9 12 15 6"},child:[]}]})(t)}function ly(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"20 6 9 17 4 12"},child:[]}]})(t)}function Qt(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(t)}function Aa(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"13",r:"4"},child:[]}]})(t)}function oy(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"},child:[]}]})(t)}function ls(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"},child:[]}]})(t)}function fl(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"},child:[]},{tag:"path",attr:{d:"M13.73 21a2 2 0 0 1-3.46 0"},child:[]}]})(t)}function Gm(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"4"},child:[]},{tag:"path",attr:{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"},child:[]}]})(t)}function os(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 5 19 12 12 19"},child:[]}]})(t)}function uy(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"19",y1:"12",x2:"5",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 19 5 12 12 5"},child:[]}]})(t)}function cy(t){return D({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"},child:[]}]})(t)}const Xm=b.createContext(),dy=({children:t})=>{const[e,r]=b.useState([]),n=b.useCallback((s,a="info",l=3500)=>{const u=Date.now()+Math.random().toString(36).substr(2,5);r(c=>[...c,{id:u,message:s,type:a}]),setTimeout(()=>{i(u)},l)},[]),i=b.useCallback(s=>{r(a=>a.filter(l=>l.id!==s))},[]);return o.jsxs(Xm.Provider,{value:{addToast:n},children:[t,o.jsx("div",{className:"toast-container",children:e.map(s=>o.jsxs("div",{className:`toast-item toast-${s.type}`,children:[o.jsxs("div",{className:"toast-icon",children:[s.type==="success"&&o.jsx(Qt,{}),s.type==="error"&&o.jsx(cy,{}),s.type==="info"&&o.jsx(ry,{})]}),o.jsx("span",{className:"toast-message",children:s.message}),o.jsx("button",{className:"toast-close",onClick:()=>i(s.id),children:o.jsx(gn,{})})]},s.id))}),o.jsx("style",{children:`
        .toast-container {
          position: fixed;
          top: 1.5rem;
          right: 1.5rem;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          pointer-events: none;
        }

        .toast-item {
          pointer-events: auto;
          min-width: 280px;
          max-width: 400px;
          padding: 0.85rem 1.1rem;
          border-radius: var(--radius-md);
          background: var(--bg-card);
          color: var(--text-primary);
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-lg);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          animation: toastSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .toast-icon {
          font-size: 1.25rem;
          display: flex;
          align-items: center;
        }

        .toast-success .toast-icon { color: var(--success); }
        .toast-error .toast-icon { color: var(--danger); }
        .toast-info .toast-icon { color: var(--primary); }

        .toast-message {
          font-size: 0.9rem;
          font-weight: 500;
          flex: 1;
        }

        .toast-close {
          color: var(--text-muted);
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          padding: 2px;
          border-radius: 4px;
        }
        .toast-close:hover {
          color: var(--text-primary);
          background: var(--bg-secondary);
        }
      `})]})},bt=()=>b.useContext(Xm),yn=({children:t})=>{const{isAuthenticated:e}=Je();return e?t:o.jsx(zm,{to:"/login",replace:!0})};function Ht(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Km(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ot={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},us={duration:.5,overwrite:!1,delay:0},Oc,Pe,ne,_t=1e8,K=1/_t,xu=Math.PI*2,fy=xu/4,hy=0,Zm=Math.sqrt,py=Math.cos,my=Math.sin,Ne=function(e){return typeof e=="string"},pe=function(e){return typeof e=="function"},nr=function(e){return typeof e=="number"},Ac=function(e){return typeof e>"u"},Wt=function(e){return typeof e=="object"},Qe=function(e){return e!==!1},Fc=function(){return typeof window<"u"},Ws=function(e){return pe(e)||Ne(e)},Jm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ae=Array.isArray,gy=/random\([^)]+\)/g,vy=/,\s*/g,jf=/(?:-?\.?\d|\.)+/gi,eg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ln=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ql=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,tg=/[+-]=-?[.\d]+/,xy=/[^,'"\[\]\s]+/gi,yy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,le,Ft,yu,Ic,ct={},Fa={},rg,ng=function(e){return(Fa=Jn(e,ct))&&Ze},Dc=function(e,r){return console.warn("Invalid property",e,"set to",r,"Missing plugin? gsap.registerPlugin()")},cs=function(e,r){return!r&&console.warn(e)},ig=function(e,r){return e&&(ct[e]=r)&&Fa&&(Fa[e]=r)||ct},ds=function(){return 0},_y={suppressEvents:!0,isStart:!0,kill:!1},ia={suppressEvents:!0,kill:!1},wy={suppressEvents:!0},Bc={},Pr=[],_u={},sg,rt={},Yl={},bf=30,sa=[],Uc="",$c=function(e){var r=e[0],n,i;if(Wt(r)||pe(r)||(e=[e]),!(n=(r._gsap||{}).harness)){for(i=sa.length;i--&&!sa[i].targetTest(r););n=sa[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Cg(e[i],n)))||e.splice(i,1);return e},nn=function(e){return e._gsap||$c(wt(e))[0]._gsap},ag=function(e,r,n){return(n=e[r])&&pe(n)?e[r]():Ac(n)&&e.getAttribute&&e.getAttribute(r)||n},Ge=function(e,r){return(e=e.split(",")).forEach(r)||e},xe=function(e){return Math.round(e*1e5)/1e5||0},se=function(e){return Math.round(e*1e7)/1e7||0},Un=function(e,r){var n=r.charAt(0),i=parseFloat(r.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},ky=function(e,r){for(var n=r.length,i=0;e.indexOf(r[i])<0&&++i<n;);return i<n},Ia=function(){var e=Pr.length,r=Pr.slice(0),n,i;for(_u={},Pr.length=0,n=0;n<e;n++)i=r[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Wc=function(e){return!!(e._initted||e._startAt||e.add)},lg=function(e,r,n,i){Pr.length&&!Pe&&Ia(),e.render(r,n,!!(Pe&&r<0&&Wc(e))),Pr.length&&!Pe&&Ia()},og=function(e){var r=parseFloat(e);return(r||r===0)&&(e+"").match(xy).length<2?r:Ne(e)?e.trim():e},ug=function(e){return e},dt=function(e,r){for(var n in r)n in e||(e[n]=r[n]);return e},Sy=function(e){return function(r,n){for(var i in n)i in r||i==="duration"&&e||i==="ease"||(r[i]=n[i])}},Jn=function(e,r){for(var n in r)e[n]=r[n];return e},Nf=function t(e,r){for(var n in r)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Wt(r[n])?t(e[n]||(e[n]={}),r[n]):r[n]);return e},Da=function(e,r){var n={},i;for(i in e)i in r||(n[i]=e[i]);return n},Fi=function(e){var r=e.parent||le,n=e.keyframes?Sy(Ae(e.keyframes)):dt;if(Qe(e.inherit))for(;r;)n(e,r.vars.defaults),r=r.parent||r._dp;return e},jy=function(e,r){for(var n=e.length,i=n===r.length;i&&n--&&e[n]===r[n];);return n<0},cg=function(e,r,n,i,s){var a=e[i],l;if(s)for(l=r[s];a&&a[s]>l;)a=a._prev;return a?(r._next=a._next,a._next=r):(r._next=e[n],e[n]=r),r._next?r._next._prev=r:e[i]=r,r._prev=a,r.parent=r._dp=e,r},hl=function(e,r,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=r._prev,a=r._next;s?s._next=a:e[n]===r&&(e[n]=a),a?a._prev=s:e[i]===r&&(e[i]=s),r._next=r._prev=r.parent=null},Lr=function(e,r){e.parent&&(!r||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},sn=function(e,r){if(e&&(!r||r._end>e._dur||r._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},by=function(e){for(var r=e.parent;r&&r.parent;)r._dirty=1,r.totalDuration(),r=r.parent;return e},wu=function(e,r,n,i){return e._startAt&&(Pe?e._startAt.revert(ia):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(r,!0,i))},Ny=function t(e){return!e||e._ts&&t(e.parent)},Cf=function(e){return e._repeat?ei(e._tTime,e=e.duration()+e._rDelay)*e:0},ei=function(e,r){var n=Math.floor(e=se(e/r));return e&&n===e?n-1:n},Ba=function(e,r){return(e-r._start)*r._ts+(r._ts>=0?0:r._dirty?r.totalDuration():r._tDur)},pl=function(e){return e._end=se(e._start+(e._tDur/Math.abs(e._ts||e._rts||K)||0))},ml=function(e,r){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=se(n._time-(e._ts>0?r/e._ts:((e._dirty?e.totalDuration():e._tDur)-r)/-e._ts)),pl(e),n._dirty||sn(n,e)),e},dg=function(e,r){var n;if((r._time||!r._dur&&r._initted||r._start<e._time&&(r._dur||!r.add))&&(n=Ba(e.rawTime(),r),(!r._dur||ks(0,r.totalDuration(),n)-r._tTime>K)&&r.render(n,!0)),sn(e,r)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-K}},Dt=function(e,r,n,i){return r.parent&&Lr(r),r._start=se((nr(n)?n:n||e!==le?gt(e,n,r):e._time)+r._delay),r._end=se(r._start+(r.totalDuration()/Math.abs(r.timeScale())||0)),cg(e,r,"_first","_last",e._sort?"_start":0),ku(r)||(e._recent=r),i||dg(e,r),e._ts<0&&ml(e,e._tTime),e},fg=function(e,r){return(ct.ScrollTrigger||Dc("scrollTrigger",r))&&ct.ScrollTrigger.create(r,e)},hg=function(e,r,n,i,s){if(Hc(e,r,s),!e._initted)return 1;if(!n&&e._pt&&!Pe&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&sg!==nt.frame)return Pr.push(e),e._lazy=[s,i],1},Cy=function t(e){var r=e.parent;return r&&r._ts&&r._initted&&!r._lock&&(r.rawTime()<0||t(r))},ku=function(e){var r=e.data;return r==="isFromStart"||r==="isStart"},Ey=function(e,r,n,i){var s=e.ratio,a=r<0||!r&&(!e._start&&Cy(e)&&!(!e._initted&&ku(e))||(e._ts<0||e._dp._ts<0)&&!ku(e))?0:1,l=e._rDelay,u=0,c,d,f;if(l&&e._repeat&&(u=ks(0,e._tDur,r),d=ei(u,l),e._yoyo&&d&1&&(a=1-a),d!==ei(e._tTime,l)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Pe||i||e._zTime===K||!r&&e._zTime){if(!e._initted&&hg(e,r,i,n,u))return;for(f=e._zTime,e._zTime=r||(n?K:0),n||(n=r&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=u,c=e._pt;c;)c.r(a,c.d),c=c._next;r<0&&wu(e,r,n,!0),e._onUpdate&&!n&&st(e,"onUpdate"),u&&e._repeat&&!n&&e.parent&&st(e,"onRepeat"),(r>=e._tDur||r<0)&&e.ratio===a&&(a&&Lr(e,1),!n&&!Pe&&(st(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=r)},Py=function(e,r,n){var i;if(n>r)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>r)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<r)return i;i=i._prev}},ti=function(e,r,n,i){var s=e._repeat,a=se(r)||0,l=e._tTime/e._tDur;return l&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:se(a*(s+1)+e._rDelay*s):a,l>0&&!i&&ml(e,e._tTime=e._tDur*l),e.parent&&pl(e),n||sn(e.parent,e),e},Ef=function(e){return e instanceof We?sn(e):ti(e,e._dur)},Ty={_start:0,endTime:ds,totalDuration:ds},gt=function t(e,r,n){var i=e.labels,s=e._recent||Ty,a=e.duration()>=_t?s.endTime(!1):e._dur,l,u,c;return Ne(r)&&(isNaN(r)||r in i)?(u=r.charAt(0),c=r.substr(-1)==="%",l=r.indexOf("="),u==="<"||u===">"?(l>=0&&(r=r.replace(/=/,"")),(u==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(r.substr(1))||0)*(c?(l<0?s:n).totalDuration()/100:1)):l<0?(r in i||(i[r]=a),i[r]):(u=parseFloat(r.charAt(l-1)+r.substr(l+1)),c&&n&&(u=u/100*(Ae(n)?n[0]:n).totalDuration()),l>1?t(e,r.substr(0,l-1),n)+u:a+u)):r==null?a:+r},Ii=function(e,r,n){var i=nr(r[1]),s=(i?2:1)+(e<2?0:1),a=r[s],l,u;if(i&&(a.duration=r[1]),a.parent=n,e){for(l=a,u=n;u&&!("immediateRender"in l);)l=u.vars.defaults||{},u=Qe(u.vars.inherit)&&u.parent;a.immediateRender=Qe(l.immediateRender),e<2?a.runBackwards=1:a.startAt=r[s-1]}return new _e(r[0],a,r[s+1])},Ur=function(e,r){return e||e===0?r(e):r},ks=function(e,r,n){return n<e?e:n>r?r:n},Oe=function(e,r){return!Ne(e)||!(r=yy.exec(e))?"":r[1]},zy=function(e,r,n){return Ur(n,function(i){return ks(e,r,i)})},Su=[].slice,pg=function(e,r){return e&&Wt(e)&&"length"in e&&(!r&&!e.length||e.length-1 in e&&Wt(e[0]))&&!e.nodeType&&e!==Ft},My=function(e,r,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Ne(i)&&!r||pg(i,1)?(s=n).push.apply(s,wt(i)):n.push(i)})||n},wt=function(e,r,n){return ne&&!r&&ne.selector?ne.selector(e):Ne(e)&&!n&&(yu||!ri())?Su.call((r||Ic).querySelectorAll(e),0):Ae(e)?My(e,n):pg(e)?Su.call(e,0):e?[e]:[]},ju=function(e){return e=wt(e)[0]||cs("Invalid scope")||{},function(r){var n=e.current||e.nativeElement||e;return wt(r,n.querySelectorAll?n:n===e?cs("Invalid scope")||Ic.createElement("div"):e)}},mg=function(e){return e.sort(function(){return .5-Math.random()})},gg=function(e){if(pe(e))return e;var r=Wt(e)?e:{each:e},n=an(r.ease),i=r.from||0,s=parseFloat(r.base)||0,a={},l=i>0&&i<1,u=isNaN(i)||l,c=r.axis,d=i,f=i;return Ne(i)?d=f={center:.5,edges:.5,end:1}[i]||0:!l&&u&&(d=i[0],f=i[1]),function(h,m,x){var p=(x||r).length,_=a[p],v,g,y,w,k,j,S,N,C;if(!_){if(C=r.grid==="auto"?0:(r.grid||[1,_t])[1],!C){for(S=-_t;S<(S=x[C++].getBoundingClientRect().left)&&C<p;);C<p&&C--}for(_=a[p]=[],v=u?Math.min(C,p)*d-.5:i%C,g=C===_t?0:u?p*f/C-.5:i/C|0,S=0,N=_t,j=0;j<p;j++)y=j%C-v,w=g-(j/C|0),_[j]=k=c?Math.abs(c==="y"?w:y):Zm(y*y+w*w),k>S&&(S=k),k<N&&(N=k);i==="random"&&mg(_),_.max=S-N,_.min=N,_.v=p=(parseFloat(r.amount)||parseFloat(r.each)*(C>p?p-1:c?c==="y"?p/C:C:Math.max(C,p/C))||0)*(i==="edges"?-1:1),_.b=p<0?s-p:s,_.u=Oe(r.amount||r.each)||0,n=n&&p<0?Hy(n):n}return p=(_[h]-_.min)/_.max||0,se(_.b+(n?n(p):p)*_.v)+_.u}},bu=function(e){var r=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=se(Math.round(parseFloat(n)/e)*e*r);return(i-i%1)/r+(nr(n)?0:Oe(n))}},vg=function(e,r){var n=Ae(e),i,s;return!n&&Wt(e)&&(i=n=e.radius||_t,e.values?(e=wt(e.values),(s=!nr(e[0]))&&(i*=i)):e=bu(e.increment)),Ur(r,n?pe(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var l=parseFloat(s?a.x:a),u=parseFloat(s?a.y:0),c=_t,d=0,f=e.length,h,m;f--;)s?(h=e[f].x-l,m=e[f].y-u,h=h*h+m*m):h=Math.abs(e[f]-l),h<c&&(c=h,d=f);return d=!i||c<=i?e[d]:a,s||d===a||nr(a)?d:d+Oe(a)}:bu(e))},xg=function(e,r,n,i){return Ur(Ae(e)?!r:n===!0?!!(n=0):!i,function(){return Ae(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(r-e+n*.99))/n)*n*i)/i})},Ly=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return function(i){return r.reduce(function(s,a){return a(s)},i)}},Ry=function(e,r){return function(n){return e(parseFloat(n))+(r||Oe(n))}},Oy=function(e,r,n){return _g(e,r,0,1,n)},yg=function(e,r,n){return Ur(n,function(i){return e[~~r(i)]})},Ay=function t(e,r,n){var i=r-e;return Ae(e)?yg(e,t(0,e.length),r):Ur(n,function(s){return(i+(s-e)%i)%i+e})},Fy=function t(e,r,n){var i=r-e,s=i*2;return Ae(e)?yg(e,t(0,e.length-1),r):Ur(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},fs=function(e){return e.replace(gy,function(r){var n=r.indexOf("[")+1,i=r.substring(n||7,n?r.indexOf("]"):r.length-1).split(vy);return xg(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},_g=function(e,r,n,i,s){var a=r-e,l=i-n;return Ur(s,function(u){return n+((u-e)/a*l||0)})},Iy=function t(e,r,n,i){var s=isNaN(e+r)?0:function(m){return(1-m)*e+m*r};if(!s){var a=Ne(e),l={},u,c,d,f,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},r={p:r};else if(Ae(e)&&!Ae(r)){for(d=[],f=e.length,h=f-2,c=1;c<f;c++)d.push(t(e[c-1],e[c]));f--,s=function(x){x*=f;var p=Math.min(h,~~x);return d[p](x-p)},n=r}else i||(e=Jn(Ae(e)?[]:{},e));if(!d){for(u in r)Vc.call(l,e,u,"get",r[u]);s=function(x){return Qc(x,l)||(a?e.p:e)}}}return Ur(n,s)},Pf=function(e,r,n){var i=e.labels,s=_t,a,l,u;for(a in i)l=i[a]-r,l<0==!!n&&l&&s>(l=Math.abs(l))&&(u=a,s=l);return u},st=function(e,r,n){var i=e.vars,s=i[r],a=ne,l=e._ctx,u,c,d;if(s)return u=i[r+"Params"],c=i.callbackScope||e,n&&Pr.length&&Ia(),l&&(ne=l),d=u?s.apply(c,u):s.call(c),ne=a,d},Ni=function(e){return Lr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Pe),e.progress()<1&&st(e,"onInterrupt"),e},Rn,wg=[],kg=function(e){if(e)if(e=!e.name&&e.default||e,Fc()||e.headless){var r=e.name,n=pe(e),i=r&&!n&&e.init?function(){this._props=[]}:e,s={init:ds,render:Qc,add:Vc,kill:t2,modifier:e2,rawVars:0},a={targetTest:0,get:0,getSetter:Yc,aliases:{},register:0};if(ri(),e!==i){if(rt[r])return;dt(i,dt(Da(e,s),a)),Jn(i.prototype,Jn(s,Da(e,a))),rt[i.prop=r]=i,e.targetTest&&(sa.push(i),Bc[r]=1),r=(r==="css"?"CSS":r.charAt(0).toUpperCase()+r.substr(1))+"Plugin"}ig(r,i),e.register&&e.register(Ze,i,Xe)}else wg.push(e)},X=255,Ci={aqua:[0,X,X],lime:[0,X,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,X],navy:[0,0,128],white:[X,X,X],olive:[128,128,0],yellow:[X,X,0],orange:[X,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[X,0,0],pink:[X,192,203],cyan:[0,X,X],transparent:[X,X,X,0]},Ql=function(e,r,n){return e+=e<0?1:e>1?-1:0,(e*6<1?r+(n-r)*e*6:e<.5?n:e*3<2?r+(n-r)*(2/3-e)*6:r)*X+.5|0},Sg=function(e,r,n){var i=e?nr(e)?[e>>16,e>>8&X,e&X]:0:Ci.black,s,a,l,u,c,d,f,h,m,x;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ci[e])i=Ci[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),l=e.charAt(3),e="#"+s+s+a+a+l+l+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&X,i&X,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&X,e&X]}else if(e.substr(0,3)==="hsl"){if(i=x=e.match(jf),!r)u=+i[0]%360/360,c=+i[1]/100,d=+i[2]/100,a=d<=.5?d*(c+1):d+c-d*c,s=d*2-a,i.length>3&&(i[3]*=1),i[0]=Ql(u+1/3,s,a),i[1]=Ql(u,s,a),i[2]=Ql(u-1/3,s,a);else if(~e.indexOf("="))return i=e.match(eg),n&&i.length<4&&(i[3]=1),i}else i=e.match(jf)||Ci.transparent;i=i.map(Number)}return r&&!x&&(s=i[0]/X,a=i[1]/X,l=i[2]/X,f=Math.max(s,a,l),h=Math.min(s,a,l),d=(f+h)/2,f===h?u=c=0:(m=f-h,c=d>.5?m/(2-f-h):m/(f+h),u=f===s?(a-l)/m+(a<l?6:0):f===a?(l-s)/m+2:(s-a)/m+4,u*=60),i[0]=~~(u+.5),i[1]=~~(c*100+.5),i[2]=~~(d*100+.5)),n&&i.length<4&&(i[3]=1),i},jg=function(e){var r=[],n=[],i=-1;return e.split(Tr).forEach(function(s){var a=s.match(Ln)||[];r.push.apply(r,a),n.push(i+=a.length+1)}),r.c=n,r},Tf=function(e,r,n){var i="",s=(e+i).match(Tr),a=r?"hsla(":"rgba(",l=0,u,c,d,f;if(!s)return e;if(s=s.map(function(h){return(h=Sg(h,r,1))&&a+(r?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(d=jg(e),u=n.c,u.join(i)!==d.c.join(i)))for(c=e.replace(Tr,"1").split(Ln),f=c.length-1;l<f;l++)i+=c[l]+(~u.indexOf(l)?s.shift()||a+"0,0,0,0)":(d.length?d:s.length?s:n).shift());if(!c)for(c=e.split(Tr),f=c.length-1;l<f;l++)i+=c[l]+s[l];return i+c[f]},Tr=function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ci)t+="|"+e+"\\b";return new RegExp(t+")","gi")}(),Dy=/hsl[a]?\(/,bg=function(e){var r=e.join(" "),n;if(Tr.lastIndex=0,Tr.test(r))return n=Dy.test(r),e[1]=Tf(e[1],n),e[0]=Tf(e[0],n,jg(e[1])),!0},hs,nt=function(){var t=Date.now,e=500,r=33,n=t(),i=n,s=1e3/240,a=s,l=[],u,c,d,f,h,m,x=function p(_){var v=t()-i,g=_===!0,y,w,k,j;if((v>e||v<0)&&(n+=v-r),i+=v,k=i-n,y=k-a,(y>0||g)&&(j=++f.frame,h=k-f.time*1e3,f.time=k=k/1e3,a+=y+(y>=s?4:s-y),w=1),g||(u=c(p)),w)for(m=0;m<l.length;m++)l[m](k,h,j,_)};return f={time:0,frame:0,tick:function(){x(!0)},deltaRatio:function(_){return h/(1e3/(_||60))},wake:function(){rg&&(!yu&&Fc()&&(Ft=yu=window,Ic=Ft.document||{},ct.gsap=Ze,(Ft.gsapVersions||(Ft.gsapVersions=[])).push(Ze.version),ng(Fa||Ft.GreenSockGlobals||!Ft.gsap&&Ft||{}),wg.forEach(kg)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,u&&f.sleep(),c=d||function(_){return setTimeout(_,a-f.time*1e3+1|0)},hs=1,x(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(u),hs=0,c=ds},lagSmoothing:function(_,v){e=_||1/0,r=Math.min(v||33,e)},fps:function(_){s=1e3/(_||240),a=f.time*1e3+s},add:function(_,v,g){var y=v?function(w,k,j,S){_(w,k,j,S),f.remove(y)}:_;return f.remove(_),l[g?"unshift":"push"](y),ri(),y},remove:function(_,v){~(v=l.indexOf(_))&&l.splice(v,1)&&m>=v&&m--},_listeners:l},f}(),ri=function(){return!hs&&nt.wake()},W={},By=/^[\d.\-M][\d.\-,\s]/,Uy=/["']/g,$y=function(e){for(var r={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,l,u,c;s<a;s++)u=n[s],l=s!==a-1?u.lastIndexOf(","):u.length,c=u.substr(0,l),r[i]=isNaN(c)?c.replace(Uy,"").trim():+c,i=u.substr(l+1).trim();return r},Wy=function(e){var r=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",r);return e.substring(r,~i&&i<n?e.indexOf(")",n+1):n)},Vy=function(e){var r=(e+"").split("("),n=W[r[0]];return n&&r.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[$y(r[1])]:Wy(e).split(",").map(og)):W._CE&&By.test(e)?W._CE("",e):n},Hy=function(e){return function(r){return 1-e(1-r)}},an=function(e,r){return e&&(pe(e)?e:W[e]||Vy(e))||r},vn=function(e,r,n,i){n===void 0&&(n=function(u){return 1-r(1-u)}),i===void 0&&(i=function(u){return u<.5?r(u*2)/2:1-r((1-u)*2)/2});var s={easeIn:r,easeOut:n,easeInOut:i},a;return Ge(e,function(l){W[l]=ct[l]=s,W[a=l.toLowerCase()]=n;for(var u in s)W[a+(u==="easeIn"?".in":u==="easeOut"?".out":".inOut")]=W[l+"."+u]=s[u]}),s},Ng=function(e){return function(r){return r<.5?(1-e(1-r*2))/2:.5+e((r-.5)*2)/2}},Gl=function t(e,r,n){var i=r>=1?r:1,s=(n||(e?.3:.45))/(r<1?r:1),a=s/xu*(Math.asin(1/i)||0),l=function(d){return d===1?1:i*Math.pow(2,-10*d)*my((d-a)*s)+1},u=e==="out"?l:e==="in"?function(c){return 1-l(1-c)}:Ng(l);return s=xu/s,u.config=function(c,d){return t(e,c,d)},u},Xl=function t(e,r){r===void 0&&(r=1.70158);var n=function(a){return a?--a*a*((r+1)*a+r)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Ng(n);return i.config=function(s){return t(e,s)},i};Ge("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;vn(t+",Power"+(r-1),e?function(n){return Math.pow(n,r)}:function(n){return n},function(n){return 1-Math.pow(1-n,r)},function(n){return n<.5?Math.pow(n*2,r)/2:1-Math.pow((1-n)*2,r)/2})});W.Linear.easeNone=W.none=W.Linear.easeIn;vn("Elastic",Gl("in"),Gl("out"),Gl());(function(t,e){var r=1/e,n=2*r,i=2.5*r,s=function(l){return l<r?t*l*l:l<n?t*Math.pow(l-1.5/e,2)+.75:l<i?t*(l-=2.25/e)*l+.9375:t*Math.pow(l-2.625/e,2)+.984375};vn("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);vn("Expo",function(t){return Math.pow(2,10*(t-1))*t+t*t*t*t*t*t*(1-t)});vn("Circ",function(t){return-(Zm(1-t*t)-1)});vn("Sine",function(t){return t===1?1:-py(t*fy)+1});vn("Back",Xl("in"),Xl("out"),Xl());W.SteppedEase=W.steps=ct.SteppedEase={config:function(e,r){e===void 0&&(e=1);var n=1/e,i=e+(r?0:1),s=r?1:0,a=1-K;return function(l){return((i*ks(0,a,l)|0)+s)*n}}};us.ease=W["quad.out"];Ge("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return Uc+=t+","+t+"Params,"});var Cg=function(e,r){this.id=hy++,e._gsap=this,this.target=e,this.harness=r,this.get=r?r.get:ag,this.set=r?r.getSetter:Yc},ps=function(){function t(r){this.vars=r,this._delay=+r.delay||0,(this._repeat=r.repeat===1/0?-2:r.repeat||0)&&(this._rDelay=r.repeatDelay||0,this._yoyo=!!r.yoyo||!!r.yoyoEase),this._ts=1,ti(this,+r.duration,1,1),this.data=r.data,ne&&(this._ctx=ne,ne.data.push(this)),hs||nt.wake()}var e=t.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ti(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ri(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ml(this,n),!s._dp||s.parent||dg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Dt(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===K||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),lg(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Cf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Cf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ei(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-K?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ba(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-K?0:this._rts,this.totalTime(ks(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),pl(this),by(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ri(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==K&&(this._tTime-=K)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=se(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Dt(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Qe(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ba(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=wy);var i=Pe;return Pe=n,Wc(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Pe=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ef(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Ef(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(gt(this,n),Qe(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Qe(i)),this._dur||(this._zTime=-K),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-K:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-K,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-K)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var l=pe(n)?n:ug,u=function(){var d=i.then;i.then=null,s&&s(),pe(l)&&(l=l(i))&&(l.then||l===i)&&(i.then=d),a(l),i.then=d};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?u():i._prom=u})},e.kill=function(){Ni(this)},t}();dt(ps.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-K,_prom:0,_ps:!1,_rts:1});var We=function(t){Km(e,t);function e(n,i){var s;return n===void 0&&(n={}),s=t.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Qe(n.sortChildren),le&&Dt(n.parent||le,Ht(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&fg(Ht(s),n.scrollTrigger),s}var r=e.prototype;return r.to=function(i,s,a){return Ii(0,arguments,this),this},r.from=function(i,s,a){return Ii(1,arguments,this),this},r.fromTo=function(i,s,a,l){return Ii(2,arguments,this),this},r.set=function(i,s,a){return s.duration=0,s.parent=this,Fi(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new _e(i,s,gt(this,a),1),this},r.call=function(i,s,a){return Dt(this,_e.delayedCall(0,i,s),a)},r.staggerTo=function(i,s,a,l,u,c,d){return a.duration=s,a.stagger=a.stagger||l,a.onComplete=c,a.onCompleteParams=d,a.parent=this,new _e(i,a,gt(this,u)),this},r.staggerFrom=function(i,s,a,l,u,c,d){return a.runBackwards=1,Fi(a).immediateRender=Qe(a.immediateRender),this.staggerTo(i,s,a,l,u,c,d)},r.staggerFromTo=function(i,s,a,l,u,c,d,f){return l.startAt=a,Fi(l).immediateRender=Qe(l.immediateRender),this.staggerTo(i,s,l,u,c,d,f)},r.render=function(i,s,a){var l=this._time,u=this._dirty?this.totalDuration():this._tDur,c=this._dur,d=i<=0?0:se(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,m,x,p,_,v,g,y,w,k,j,S;if(this!==le&&d>u&&i>=0&&(d=u),d!==this._tTime||a||f){if(l!==this._time&&c&&(d+=this._time-l,i+=this._time-l),h=d,w=this._start,y=this._ts,v=!y,f&&(c||(l=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(j=this._yoyo,_=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(_*100+i,s,a);if(h=se(d%_),d===u?(p=this._repeat,h=c):(k=se(d/_),p=~~k,p&&p===k&&(h=c,p--),h>c&&(h=c)),k=ei(this._tTime,_),!l&&this._tTime&&k!==p&&this._tTime-k*_-this._dur<=0&&(k=p),j&&p&1&&(h=c-h,S=1),p!==k&&!this._lock){var N=j&&k&1,C=N===(j&&p&1);if(p<k&&(N=!N),l=N?0:d%c?c:d,this._lock=1,this.render(l||(S?0:se(p*_)),s,!c)._lock=0,this._tTime=d,!s&&this.parent&&st(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1,k=p),l&&l!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,u=this._tDur,C&&(this._lock=2,l=N?c:-1e-4,this.render(l,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!v)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(g=Py(this,se(l),se(h)),g&&(d-=h-(h=g._start))),this._tTime=d,this._time=h,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,l=0),!l&&d&&c&&!s&&!k&&(st(this,"onStart"),this._tTime!==d))return this;if(h>=l&&i>=0)for(m=this._first;m;){if(x=m._next,(m._act||h>=m._start)&&m._ts&&g!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(h-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(h-m._start)*m._ts,s,a),h!==this._time||!this._ts&&!v){g=0,x&&(d+=this._zTime=-K);break}}m=x}else{m=this._last;for(var E=i<0?i:h;m;){if(x=m._prev,(m._act||E<=m._end)&&m._ts&&g!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(E-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(E-m._start)*m._ts,s,a||Pe&&Wc(m)),h!==this._time||!this._ts&&!v){g=0,x&&(d+=this._zTime=E?-K:K);break}}m=x}}if(g&&!s&&(this.pause(),g.render(h>=l?0:-K)._zTime=h>=l?1:-1,this._ts))return this._start=w,pl(this),this.render(i,s,a);this._onUpdate&&!s&&st(this,"onUpdate",!0),(d===u&&this._tTime>=this.totalDuration()||!d&&l)&&(w===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(d===u&&this._ts>0||!d&&this._ts<0)&&Lr(this,1),!s&&!(i<0&&!l)&&(d||l||!u)&&(st(this,d===u&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<u&&this.timeScale()>0)&&this._prom())))}return this},r.add=function(i,s){var a=this;if(nr(s)||(s=gt(this,s,i)),!(i instanceof ps)){if(Ae(i))return i.forEach(function(l){return a.add(l,s)}),this;if(Ne(i))return this.addLabel(i,s);if(pe(i))i=_e.delayedCall(0,i);else return this}return this!==i?Dt(this,i,s):this},r.getChildren=function(i,s,a,l){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),l===void 0&&(l=-_t);for(var u=[],c=this._first;c;)c._start>=l&&(c instanceof _e?s&&u.push(c):(a&&u.push(c),i&&u.push.apply(u,c.getChildren(!0,s,a)))),c=c._next;return u},r.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},r.remove=function(i){return Ne(i)?this.removeLabel(i):pe(i)?this.killTweensOf(i):(i.parent===this&&hl(this,i),i===this._recent&&(this._recent=this._last),sn(this))},r.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=se(nt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),t.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},r.addLabel=function(i,s){return this.labels[i]=gt(this,s),this},r.removeLabel=function(i){return delete this.labels[i],this},r.addPause=function(i,s,a){var l=_e.delayedCall(0,s||ds,a);return l.data="isPause",this._hasPause=1,Dt(this,l,gt(this,i))},r.removePause=function(i){var s=this._first;for(i=gt(this,i);s;)s._start===i&&s.data==="isPause"&&Lr(s),s=s._next},r.killTweensOf=function(i,s,a){for(var l=this.getTweensOf(i,a),u=l.length;u--;)vr!==l[u]&&l[u].kill(i,s);return this},r.getTweensOf=function(i,s){for(var a=[],l=wt(i),u=this._first,c=nr(s),d;u;)u instanceof _e?ky(u._targets,l)&&(c?(!vr||u._initted&&u._ts)&&u.globalTime(0)<=s&&u.globalTime(u.totalDuration())>s:!s||u.isActive())&&a.push(u):(d=u.getTweensOf(l,s)).length&&a.push.apply(a,d),u=u._next;return a},r.tweenTo=function(i,s){s=s||{};var a=this,l=gt(a,i),u=s,c=u.startAt,d=u.onStart,f=u.onStartParams,h=u.immediateRender,m,x=_e.to(a,dt({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:l,overwrite:"auto",duration:s.duration||Math.abs((l-(c&&"time"in c?c.time:a._time))/a.timeScale())||K,onStart:function(){if(a.pause(),!m){var _=s.duration||Math.abs((l-(c&&"time"in c?c.time:a._time))/a.timeScale());x._dur!==_&&ti(x,_,0,1).render(x._time,!0,!0),m=1}d&&d.apply(x,f||[])}},s));return h?x.render(0):x},r.tweenFromTo=function(i,s,a){return this.tweenTo(s,dt({startAt:{time:gt(this,i)}},a))},r.recent=function(){return this._recent},r.nextLabel=function(i){return i===void 0&&(i=this._time),Pf(this,gt(this,i))},r.previousLabel=function(i){return i===void 0&&(i=this._time),Pf(this,gt(this,i),1)},r.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+K)},r.shiftChildren=function(i,s,a){a===void 0&&(a=0);var l=this._first,u=this.labels,c;for(i=se(i);l;)l._start>=a&&(l._start+=i,l._end+=i),l=l._next;if(s)for(c in u)u[c]>=a&&(u[c]+=i);return sn(this)},r.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return t.prototype.invalidate.call(this,i)},r.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),sn(this)},r.totalDuration=function(i){var s=0,a=this,l=a._last,u=_t,c,d,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;l;)c=l._prev,l._dirty&&l.totalDuration(),d=l._start,d>u&&a._sort&&l._ts&&!a._lock?(a._lock=1,Dt(a,l,d-l._delay,1)._lock=0):u=d,d<0&&l._ts&&(s-=d,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=se(d/a._ts),a._time-=d,a._tTime-=d),a.shiftChildren(-d,!1,-1/0),u=0),l._end>s&&l._ts&&(s=l._end),l=c;ti(a,a===le&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(le._ts&&(lg(le,Ba(i,le)),sg=nt.frame),nt.frame>=bf){bf+=ot.autoSleep||120;var s=le._first;if((!s||!s._ts)&&ot.autoSleep&&nt._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||nt.sleep()}}},e}(ps);dt(We.prototype,{_lock:0,_hasPause:0,_forcing:0});var qy=function(e,r,n,i,s,a,l){var u=new Xe(this._pt,e,r,0,1,Lg,null,s),c=0,d=0,f,h,m,x,p,_,v,g;for(u.b=n,u.e=i,n+="",i+="",(v=~i.indexOf("random("))&&(i=fs(i)),a&&(g=[n,i],a(g,e,r),n=g[0],i=g[1]),h=n.match(ql)||[];f=ql.exec(i);)x=f[0],p=i.substring(c,f.index),m?m=(m+1)%5:p.substr(-5)==="rgba("&&(m=1),x!==h[d++]&&(_=parseFloat(h[d-1])||0,u._pt={_next:u._pt,p:p||d===1?p:",",s:_,c:x.charAt(1)==="="?Un(_,x)-_:parseFloat(x)-_,m:m&&m<4?Math.round:0},c=ql.lastIndex);return u.c=c<i.length?i.substring(c,i.length):"",u.fp=l,(tg.test(i)||v)&&(u.e=0),this._pt=u,u},Vc=function(e,r,n,i,s,a,l,u,c,d){pe(i)&&(i=i(s||0,e,a));var f=e[r],h=n!=="get"?n:pe(f)?c?e[r.indexOf("set")||!pe(e["get"+r.substr(3)])?r:"get"+r.substr(3)](c):e[r]():f,m=pe(f)?c?Ky:zg:qc,x;if(Ne(i)&&(~i.indexOf("random(")&&(i=fs(i)),i.charAt(1)==="="&&(x=Un(h,i)+(Oe(h)||0),(x||x===0)&&(i=x))),!d||h!==i||Nu)return!isNaN(h*i)&&i!==""?(x=new Xe(this._pt,e,r,+h||0,i-(h||0),typeof f=="boolean"?Jy:Mg,0,m),c&&(x.fp=c),l&&x.modifier(l,this,e),this._pt=x):(!f&&!(r in e)&&Dc(r,i),qy.call(this,e,r,h,i,m,u||ot.stringFilter,c))},Yy=function(e,r,n,i,s){if(pe(e)&&(e=Di(e,s,r,n,i)),!Wt(e)||e.style&&e.nodeType||Ae(e)||Jm(e))return Ne(e)?Di(e,s,r,n,i):e;var a={},l;for(l in e)a[l]=Di(e[l],s,r,n,i);return a},Eg=function(e,r,n,i,s,a){var l,u,c,d;if(rt[e]&&(l=new rt[e]).init(s,l.rawVars?r[e]:Yy(r[e],i,s,a,n),n,i,a)!==!1&&(n._pt=u=new Xe(n._pt,s,e,0,1,l.render,l,0,l.priority),n!==Rn))for(c=n._ptLookup[n._targets.indexOf(s)],d=l._props.length;d--;)c[l._props[d]]=u;return l},vr,Nu,Hc=function t(e,r,n){var i=e.vars,s=i.ease,a=i.startAt,l=i.immediateRender,u=i.lazy,c=i.onUpdate,d=i.runBackwards,f=i.yoyoEase,h=i.keyframes,m=i.autoRevert,x=e._dur,p=e._startAt,_=e._targets,v=e.parent,g=v&&v.data==="nested"?v.vars.targets:_,y=e._overwrite==="auto"&&!Oc,w=e.timeline,k=i.easeReverse||f,j,S,N,C,E,M,L,F,R,H,q,z,P;if(w&&(!h||!s)&&(s="none"),e._ease=an(s,us.ease),e._rEase=k&&(an(k)||e._ease),e._from=!w&&!!i.runBackwards,e._from&&(e.ratio=1),!w||h&&!i.stagger){if(F=_[0]?nn(_[0]).harness:0,z=F&&i[F.prop],j=Da(i,Bc),p&&(p._zTime<0&&p.progress(1),r<0&&d&&l&&!m?p.render(-1,!0):p.revert(d&&x?ia:_y),p._lazy=0),a){if(Lr(e._startAt=_e.set(_,dt({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!p&&Qe(u),startAt:null,delay:0,onUpdate:c&&function(){return st(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,r<0&&(Pe||!l&&!m)&&e._startAt.revert(ia),l&&x&&r<=0&&n<=0){r&&(e._zTime=r);return}}else if(d&&x&&!p){if(r&&(l=!1),N=dt({overwrite:!1,data:"isFromStart",lazy:l&&!p&&Qe(u),immediateRender:l,stagger:0,parent:v},j),z&&(N[F.prop]=z),Lr(e._startAt=_e.set(_,N)),e._startAt._dp=0,e._startAt._sat=e,r<0&&(Pe?e._startAt.revert(ia):e._startAt.render(-1,!0)),e._zTime=r,!l)t(e._startAt,K,K);else if(!r)return}for(e._pt=e._ptCache=0,u=x&&Qe(u)||u&&!x,S=0;S<_.length;S++){if(E=_[S],L=E._gsap||$c(_)[S]._gsap,e._ptLookup[S]=H={},_u[L.id]&&Pr.length&&Ia(),q=g===_?S:g.indexOf(E),F&&(R=new F).init(E,z||j,e,q,g)!==!1&&(e._pt=C=new Xe(e._pt,E,R.name,0,1,R.render,R,0,R.priority),R._props.forEach(function(O){H[O]=C}),R.priority&&(M=1)),!F||z)for(N in j)rt[N]&&(R=Eg(N,j,e,q,E,g))?R.priority&&(M=1):H[N]=C=Vc.call(e,E,N,"get",j[N],q,g,0,i.stringFilter);e._op&&e._op[S]&&e.kill(E,e._op[S]),y&&e._pt&&(vr=e,le.killTweensOf(E,H,e.globalTime(r)),P=!e.parent,vr=0),e._pt&&u&&(_u[L.id]=1)}M&&Rg(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!P,h&&r<=0&&w.render(_t,!0,!0)},Qy=function(e,r,n,i,s,a,l,u){var c=(e._pt&&e._ptCache||(e._ptCache={}))[r],d,f,h,m;if(!c)for(c=e._ptCache[r]=[],h=e._ptLookup,m=e._targets.length;m--;){if(d=h[m][r],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==r&&d.fp!==r;)d=d._next;if(!d)return Nu=1,e.vars[r]="+=0",Hc(e,l),Nu=0,u?cs(r+" not eligible for reset. Try splitting into individual properties"):1;c.push(d)}for(m=c.length;m--;)f=c[m],d=f._pt||f,d.s=(i||i===0)&&!s?i:d.s+(i||0)+a*d.c,d.c=n-d.s,f.e&&(f.e=xe(n)+Oe(f.e)),f.b&&(f.b=d.s+Oe(f.b))},Gy=function(e,r){var n=e[0]?nn(e[0]).harness:0,i=n&&n.aliases,s,a,l,u;if(!i)return r;s=Jn({},r);for(a in i)if(a in s)for(u=i[a].split(","),l=u.length;l--;)s[u[l]]=s[a];return s},Xy=function(e,r,n,i){var s=r.ease||i||"power1.inOut",a,l;if(Ae(r))l=n[e]||(n[e]=[]),r.forEach(function(u,c){return l.push({t:c/(r.length-1)*100,v:u,e:s})});else for(a in r)l=n[a]||(n[a]=[]),a==="ease"||l.push({t:parseFloat(e),v:r[a],e:s})},Di=function(e,r,n,i,s){return pe(e)?e.call(r,n,i,s):Ne(e)&&~e.indexOf("random(")?fs(e):e},Pg=Uc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Tg={};Ge(Pg+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return Tg[t]=1});var _e=function(t){Km(e,t);function e(n,i,s,a){var l;typeof i=="number"&&(s.duration=i,i=s,s=null),l=t.call(this,a?i:Fi(i))||this;var u=l.vars,c=u.duration,d=u.delay,f=u.immediateRender,h=u.stagger,m=u.overwrite,x=u.keyframes,p=u.defaults,_=u.scrollTrigger,v=i.parent||le,g=(Ae(n)||Jm(n)?nr(n[0]):"length"in i)?[n]:wt(n),y,w,k,j,S,N,C,E;if(l._targets=g.length?$c(g):cs("GSAP target "+n+" not found. https://gsap.com",!ot.nullTargetWarn)||[],l._ptLookup=[],l._overwrite=m,x||h||Ws(c)||Ws(d)){i=l.vars;var M=i.easeReverse||i.yoyoEase;if(y=l.timeline=new We({data:"nested",defaults:p||{},targets:v&&v.data==="nested"?v.vars.targets:g}),y.kill(),y.parent=y._dp=Ht(l),y._start=0,h||Ws(c)||Ws(d)){if(j=g.length,C=h&&gg(h),Wt(h))for(S in h)~Pg.indexOf(S)&&(E||(E={}),E[S]=h[S]);for(w=0;w<j;w++)k=Da(i,Tg),k.stagger=0,M&&(k.easeReverse=M),E&&Jn(k,E),N=g[w],k.duration=+Di(c,Ht(l),w,N,g),k.delay=(+Di(d,Ht(l),w,N,g)||0)-l._delay,!h&&j===1&&k.delay&&(l._delay=d=k.delay,l._start+=d,k.delay=0),y.to(N,k,C?C(w,N,g):0),y._ease=W.none;y.duration()?c=d=0:l.timeline=0}else if(x){Fi(dt(y.vars.defaults,{ease:"none"})),y._ease=an(x.ease||i.ease||"none");var L=0,F,R,H;if(Ae(x))x.forEach(function(q){return y.to(g,q,">")}),y.duration();else{k={};for(S in x)S==="ease"||S==="easeEach"||Xy(S,x[S],k,x.easeEach);for(S in k)for(F=k[S].sort(function(q,z){return q.t-z.t}),L=0,w=0;w<F.length;w++)R=F[w],H={ease:R.e,duration:(R.t-(w?F[w-1].t:0))/100*c},H[S]=R.v,y.to(g,H,L),L+=H.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||l.duration(c=y.duration())}else l.timeline=0;return m===!0&&!Oc&&(vr=Ht(l),le.killTweensOf(g),vr=0),Dt(v,Ht(l),s),i.reversed&&l.reverse(),i.paused&&l.paused(!0),(f||!c&&!x&&l._start===se(v._time)&&Qe(f)&&Ny(Ht(l))&&v.data!=="nested")&&(l._tTime=-K,l.render(Math.max(0,-d)||0)),_&&fg(Ht(l),_),l}var r=e.prototype;return r.render=function(i,s,a){var l=this._time,u=this._tDur,c=this._dur,d=i<0,f=i>u-K&&!d?u:i<K?0:i,h,m,x,p,_,v,g,y;if(!c)Ey(this,i,s,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d||this._lazy){if(h=f,y=this.timeline,this._repeat){if(p=c+this._rDelay,this._repeat<-1&&d)return this.totalTime(p*100+i,s,a);if(h=se(f%p),f===u?(x=this._repeat,h=c):(_=se(f/p),x=~~_,x&&x===_?(h=c,x--):h>c&&(h=c)),v=this._yoyo&&x&1,v&&(h=c-h),_=ei(this._tTime,p),h===l&&!a&&this._initted&&x===_)return this._tTime=f,this;x!==_&&this.vars.repeatRefresh&&!v&&!this._lock&&h!==p&&this._initted&&(this._lock=a=1,this.render(se(p*x),!0).invalidate()._lock=0)}if(!this._initted){if(hg(this,d?i:h,a,s,f))return this._tTime=0,this;if(l!==this._time&&!(a&&this.vars.repeatRefresh&&x!==_))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var w=h<l;if(w!==this._inv){var k=w?l:c-l;this._inv=w,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=l,this._invRecip=k?(w?-1:1)/k:0,this._invScale=w?-this.ratio:1-this.ratio,this._invEase=w?this._rEase:this._ease}this.ratio=g=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=g=this._ease(h/c);if(this._from&&(this.ratio=g=1-g),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!l&&f&&!s&&!_&&(st(this,"onStart"),this._tTime!==f))return this;for(m=this._pt;m;)m.r(g,m.d),m=m._next;y&&y.render(i<0?i:y._dur*y._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(d&&wu(this,i,s,a),st(this,"onUpdate")),this._repeat&&x!==_&&this.vars.onRepeat&&!s&&this.parent&&st(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(d&&!this._onUpdate&&wu(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Lr(this,1),!s&&!(d&&!l)&&(f||l||v)&&(st(this,f===u?"onComplete":"onReverseComplete",!0),this._prom&&!(f<u&&this.timeScale()>0)&&this._prom()))}return this},r.targets=function(){return this._targets},r.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),t.prototype.invalidate.call(this,i)},r.resetTo=function(i,s,a,l,u){hs||nt.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||Hc(this,c),d=this._ease(c/this._dur),Qy(this,i,s,a,l,d,c,u)?this.resetTo(i,s,a,l,1):(ml(this,0),this.parent||cg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},r.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ni(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Pe),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,vr&&vr.vars.overwrite!==!0)._first||Ni(this),this.parent&&a!==this.timeline.totalDuration()&&ti(this,this._dur*this.timeline._tDur/a,0,1),this}var l=this._targets,u=i?wt(i):l,c=this._ptLookup,d=this._pt,f,h,m,x,p,_,v;if((!s||s==="all")&&jy(l,u))return s==="all"&&(this._pt=0),Ni(this);for(f=this._op=this._op||[],s!=="all"&&(Ne(s)&&(p={},Ge(s,function(g){return p[g]=1}),s=p),s=Gy(l,s)),v=l.length;v--;)if(~u.indexOf(l[v])){h=c[v],s==="all"?(f[v]=s,x=h,m={}):(m=f[v]=f[v]||{},x=s);for(p in x)_=h&&h[p],_&&((!("kill"in _.d)||_.d.kill(p)===!0)&&hl(this,_,"_pt"),delete h[p]),m!=="all"&&(m[p]=1)}return this._initted&&!this._pt&&d&&Ni(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Ii(1,arguments)},e.delayedCall=function(i,s,a,l){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:l})},e.fromTo=function(i,s,a){return Ii(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return le.killTweensOf(i,s,a)},e}(ps);dt(_e.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ge("staggerTo,staggerFrom,staggerFromTo",function(t){_e[t]=function(){var e=new We,r=Su.call(arguments,0);return r.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,r)}});var qc=function(e,r,n){return e[r]=n},zg=function(e,r,n){return e[r](n)},Ky=function(e,r,n,i){return e[r](i.fp,n)},Zy=function(e,r,n){return e.setAttribute(r,n)},Yc=function(e,r){return pe(e[r])?zg:Ac(e[r])&&e.setAttribute?Zy:qc},Mg=function(e,r){return r.set(r.t,r.p,Math.round((r.s+r.c*e)*1e6)/1e6,r)},Jy=function(e,r){return r.set(r.t,r.p,!!(r.s+r.c*e),r)},Lg=function(e,r){var n=r._pt,i="";if(!e&&r.b)i=r.b;else if(e===1&&r.e)i=r.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=r.c}r.set(r.t,r.p,i,r)},Qc=function(e,r){for(var n=r._pt;n;)n.r(e,n.d),n=n._next},e2=function(e,r,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,r,n),s=a},t2=function(e){for(var r=this._pt,n,i;r;)i=r._next,r.p===e&&!r.op||r.op===e?hl(this,r,"_pt"):r.dep||(n=1),r=i;return!n},r2=function(e,r,n,i){i.mSet(e,r,i.m.call(i.tween,n,i.mt),i)},Rg=function(e){for(var r=e._pt,n,i,s,a;r;){for(n=r._next,i=s;i&&i.pr>r.pr;)i=i._next;(r._prev=i?i._prev:a)?r._prev._next=r:s=r,(r._next=i)?i._prev=r:a=r,r=n}e._pt=s},Xe=function(){function t(r,n,i,s,a,l,u,c,d){this.t=n,this.s=s,this.c=a,this.p=i,this.r=l||Mg,this.d=u||this,this.set=c||qc,this.pr=d||0,this._next=r,r&&(r._prev=this)}var e=t.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=r2,this.m=n,this.mt=s,this.tween=i},t}();Ge(Uc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(t){return Bc[t]=1});ct.TweenMax=ct.TweenLite=_e;ct.TimelineLite=ct.TimelineMax=We;le=new We({sortChildren:!1,defaults:us,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ot.stringFilter=bg;var ln=[],aa={},n2=[],zf=0,i2=0,Kl=function(e){return(aa[e]||n2).map(function(r){return r()})},Cu=function(){var e=Date.now(),r=[];e-zf>2&&(Kl("matchMediaInit"),ln.forEach(function(n){var i=n.queries,s=n.conditions,a,l,u,c;for(l in i)a=Ft.matchMedia(i[l]).matches,a&&(u=1),a!==s[l]&&(s[l]=a,c=1);c&&(n.revert(),u&&r.push(n))}),Kl("matchMediaRevert"),r.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),zf=e,Kl("matchMedia"))},Og=function(){function t(r,n){this.selector=n&&ju(n),this.data=[],this._r=[],this.isReverted=!1,this.id=i2++,r&&this.add(r)}var e=t.prototype;return e.add=function(n,i,s){pe(n)&&(s=i,i=n,n=pe);var a=this,l=function(){var c=ne,d=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=ju(s)),ne=a,f=i.apply(a,arguments),pe(f)&&a._r.push(f),ne=c,a.selector=d,a.isReverted=!1,f};return a.last=l,n===pe?l(a,function(u){return a.add(null,u)}):n?a[n]=l:l},e.ignore=function(n){var i=ne;ne=null,n(this),ne=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof t?n.push.apply(n,i.getTweens()):i instanceof _e&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var l=s.getTweens(),u=s.data.length,c;u--;)c=s.data[u],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(d){return l.splice(l.indexOf(d),1)}));for(l.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,f){return f.g-d.g||-1/0}).forEach(function(d){return d.t.revert(n)}),u=s.data.length;u--;)c=s.data[u],c instanceof We?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof _e)&&c.revert&&c.revert(n);s._r.forEach(function(d){return d(n,s)}),s.isReverted=!0}():this.data.forEach(function(l){return l.kill&&l.kill()}),this.clear(),i)for(var a=ln.length;a--;)ln[a].id===this.id&&ln.splice(a,1)},e.revert=function(n){this.kill(n||{})},t}(),s2=function(){function t(r){this.contexts=[],this.scope=r,ne&&ne.data.push(this)}var e=t.prototype;return e.add=function(n,i,s){Wt(n)||(n={matches:n});var a=new Og(0,s||this.scope),l=a.conditions={},u,c,d;ne&&!a.selector&&(a.selector=ne.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?d=1:(u=Ft.matchMedia(n[c]),u&&(ln.indexOf(a)<0&&ln.push(a),(l[c]=u.matches)&&(d=1),u.addListener?u.addListener(Cu):u.addEventListener("change",Cu)));return d&&i(a,function(f){return a.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},t}(),Ua={registerPlugin:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];r.forEach(function(i){return kg(i)})},timeline:function(e){return new We(e)},getTweensOf:function(e,r){return le.getTweensOf(e,r)},getProperty:function(e,r,n,i){Ne(e)&&(e=wt(e)[0]);var s=nn(e||{}).get,a=n?ug:og;return n==="native"&&(n=""),e&&(r?a((rt[r]&&rt[r].get||s)(e,r,n,i)):function(l,u,c){return a((rt[l]&&rt[l].get||s)(e,l,u,c))})},quickSetter:function(e,r,n){if(e=wt(e),e.length>1){var i=e.map(function(d){return Ze.quickSetter(d,r,n)}),s=i.length;return function(d){for(var f=s;f--;)i[f](d)}}e=e[0]||{};var a=rt[r],l=nn(e),u=l.harness&&(l.harness.aliases||{})[r]||r,c=a?function(d){var f=new a;Rn._pt=0,f.init(e,n?d+n:d,Rn,0,[e]),f.render(1,f),Rn._pt&&Qc(1,Rn)}:l.set(e,u);return a?c:function(d){return c(e,u,n?d+n:d,l,1)}},quickTo:function(e,r,n){var i,s=Ze.to(e,dt((i={},i[r]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(u,c,d){return s.resetTo(r,u,c,d)};return a.tween=s,a},isTweening:function(e){return le.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=an(e.ease,us.ease)),Nf(us,e||{})},config:function(e){return Nf(ot,e||{})},registerEffect:function(e){var r=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(l){return l&&!rt[l]&&!ct[l]&&cs(r+" effect requires "+l+" plugin.")}),Yl[r]=function(l,u,c){return n(wt(l),dt(u||{},s),c)},a&&(We.prototype[r]=function(l,u,c){return this.add(Yl[r](l,Wt(u)?u:(c=u)&&{},this),c)})},registerEase:function(e,r){W[e]=an(r)},parseEase:function(e,r){return arguments.length?an(e,r):W},getById:function(e){return le.getById(e)},exportRoot:function(e,r){e===void 0&&(e={});var n=new We(e),i,s;for(n.smoothChildTiming=Qe(e.smoothChildTiming),le.remove(n),n._dp=0,n._time=n._tTime=le._time,i=le._first;i;)s=i._next,(r||!(!i._dur&&i instanceof _e&&i.vars.onComplete===i._targets[0]))&&Dt(n,i,i._start-i._delay),i=s;return Dt(le,n,0),n},context:function(e,r){return e?new Og(e,r):ne},matchMedia:function(e){return new s2(e)},matchMediaRefresh:function(){return ln.forEach(function(e){var r=e.conditions,n,i;for(i in r)r[i]&&(r[i]=!1,n=1);n&&e.revert()})||Cu()},addEventListener:function(e,r){var n=aa[e]||(aa[e]=[]);~n.indexOf(r)||n.push(r)},removeEventListener:function(e,r){var n=aa[e],i=n&&n.indexOf(r);i>=0&&n.splice(i,1)},utils:{wrap:Ay,wrapYoyo:Fy,distribute:gg,random:xg,snap:vg,normalize:Oy,getUnit:Oe,clamp:zy,splitColor:Sg,toArray:wt,selector:ju,mapRange:_g,pipe:Ly,unitize:Ry,interpolate:Iy,shuffle:mg},install:ng,effects:Yl,ticker:nt,updateRoot:We.updateRoot,plugins:rt,globalTimeline:le,core:{PropTween:Xe,globals:ig,Tween:_e,Timeline:We,Animation:ps,getCache:nn,_removeLinkedListItem:hl,reverting:function(){return Pe},context:function(e){return e&&ne&&(ne.data.push(e),e._ctx=ne),ne},suppressOverwrites:function(e){return Oc=e}}};Ge("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return Ua[t]=_e[t]});nt.add(We.updateRoot);Rn=Ua.to({},{duration:0});var a2=function(e,r){for(var n=e._pt;n&&n.p!==r&&n.op!==r&&n.fp!==r;)n=n._next;return n},l2=function(e,r){var n=e._targets,i,s,a;for(i in r)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=a2(a,i)),a&&a.modifier&&a.modifier(r[i],e,n[s],i))},Zl=function(e,r){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(l){var u,c;if(Ne(s)&&(u={},Ge(s,function(d){return u[d]=1}),s=u),r){u={};for(c in s)u[c]=r(s[c]);s=u}l2(l,s)}}}},Ze=Ua.registerPlugin({name:"attr",init:function(e,r,n,i,s){var a,l,u;this.tween=n;for(a in r)u=e.getAttribute(a)||"",l=this.add(e,"setAttribute",(u||0)+"",r[a],i,s,0,0,a),l.op=a,l.b=u,this._props.push(a)},render:function(e,r){for(var n=r._pt;n;)Pe?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,r){for(var n=r.length;n--;)this.add(e,n,e[n]||0,r[n],0,0,0,0,0,1)}},Zl("roundProps",bu),Zl("modifiers"),Zl("snap",vg))||Ua;_e.version=We.version=Ze.version="3.15.0";rg=1;Fc()&&ri();W.Power0;W.Power1;W.Power2;W.Power3;W.Power4;W.Linear;W.Quad;W.Cubic;W.Quart;W.Quint;W.Strong;W.Elastic;W.Back;W.SteppedEase;W.Bounce;W.Sine;W.Expo;W.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Mf,xr,$n,Gc,Jr,Lf,Xc,o2=function(){return typeof window<"u"},ir={},Yr=180/Math.PI,Wn=Math.PI/180,_n=Math.atan2,Rf=1e8,Kc=/([A-Z])/g,u2=/(left|right|width|margin|padding|x)/i,c2=/[\s,\(]\S/,Bt={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Eu=function(e,r){return r.set(r.t,r.p,Math.round((r.s+r.c*e)*1e4)/1e4+r.u,r)},d2=function(e,r){return r.set(r.t,r.p,e===1?r.e:Math.round((r.s+r.c*e)*1e4)/1e4+r.u,r)},f2=function(e,r){return r.set(r.t,r.p,e?Math.round((r.s+r.c*e)*1e4)/1e4+r.u:r.b,r)},h2=function(e,r){return r.set(r.t,r.p,e===1?r.e:e?Math.round((r.s+r.c*e)*1e4)/1e4+r.u:r.b,r)},p2=function(e,r){var n=r.s+r.c*e;r.set(r.t,r.p,~~(n+(n<0?-.5:.5))+r.u,r)},Ag=function(e,r){return r.set(r.t,r.p,e?r.e:r.b,r)},Fg=function(e,r){return r.set(r.t,r.p,e!==1?r.b:r.e,r)},m2=function(e,r,n){return e.style[r]=n},g2=function(e,r,n){return e.style.setProperty(r,n)},v2=function(e,r,n){return e._gsap[r]=n},x2=function(e,r,n){return e._gsap.scaleX=e._gsap.scaleY=n},y2=function(e,r,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},_2=function(e,r,n,i,s){var a=e._gsap;a[r]=n,a.renderTransform(s,a)},oe="transform",Ke=oe+"Origin",w2=function t(e,r){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in ir&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Bt[e]||e,~e.indexOf(",")?e.split(",").forEach(function(l){return n.tfm[l]=Yt(i,l)}):this.tfm[e]=a.x?a[e]:Yt(i,e),e===Ke&&(this.tfm.zOrigin=a.zOrigin);else return Bt.transform.split(",").forEach(function(l){return t.call(n,l,r)});if(this.props.indexOf(oe)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Ke,r,"")),e=oe}(s||r)&&this.props.push(e,r,s[e])},Ig=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},k2=function(){var e=this.props,r=this.target,n=r.style,i=r._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?r[e[s]](e[s+2]):r[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Kc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),r.setAttribute("data-svg-origin",this.svgo||"")),s=Xc(),(!s||!s.isStart)&&!n[oe]&&(Ig(n),i.zOrigin&&n[Ke]&&(n[Ke]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Dg=function(e,r){var n={target:e,props:[],revert:k2,save:w2};return e._gsap||Ze.core.getCache(e),r&&e.style&&e.nodeType&&r.split(",").forEach(function(i){return n.save(i)}),n},Bg,Pu=function(e,r){var n=xr.createElementNS?xr.createElementNS((r||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):xr.createElement(e);return n&&n.style?n:xr.createElement(e)},at=function t(e,r,n){var i=getComputedStyle(e);return i[r]||i.getPropertyValue(r.replace(Kc,"-$1").toLowerCase())||i.getPropertyValue(r)||!n&&t(e,ni(r)||r,1)||""},Of="O,Moz,ms,Ms,Webkit".split(","),ni=function(e,r,n){var i=r||Jr,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Of[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Of[a]:"")+e},Tu=function(){o2()&&window.document&&(Mf=window,xr=Mf.document,$n=xr.documentElement,Jr=Pu("div")||{style:{}},Pu("div"),oe=ni(oe),Ke=oe+"Origin",Jr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Bg=!!ni("perspective"),Xc=Ze.core.reverting,Gc=1)},Af=function(e){var r=e.ownerSVGElement,n=Pu("svg",r&&r.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),$n.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),$n.removeChild(n),s},Ff=function(e,r){for(var n=r.length;n--;)if(e.hasAttribute(r[n]))return e.getAttribute(r[n])},Ug=function(e){var r,n;try{r=e.getBBox()}catch{r=Af(e),n=1}return r&&(r.width||r.height)||n||(r=Af(e)),r&&!r.width&&!r.x&&!r.y?{x:+Ff(e,["x","cx","x1"])||0,y:+Ff(e,["y","cy","y1"])||0,width:0,height:0}:r},$g=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Ug(e))},Rr=function(e,r){if(r){var n=e.style,i;r in ir&&r!==Ke&&(r=oe),n.removeProperty?(i=r.substr(0,2),(i==="ms"||r.substr(0,6)==="webkit")&&(r="-"+r),n.removeProperty(i==="--"?r:r.replace(Kc,"-$1").toLowerCase())):n.removeAttribute(r)}},yr=function(e,r,n,i,s,a){var l=new Xe(e._pt,r,n,0,1,a?Fg:Ag);return e._pt=l,l.b=i,l.e=s,e._props.push(n),l},If={deg:1,rad:1,turn:1},S2={grid:1,flex:1},Or=function t(e,r,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",l=Jr.style,u=u2.test(r),c=e.tagName.toLowerCase()==="svg",d=(c?"client":"offset")+(u?"Width":"Height"),f=100,h=i==="px",m=i==="%",x,p,_,v;if(i===a||!s||If[i]||If[a])return s;if(a!=="px"&&!h&&(s=t(e,r,n,"px")),v=e.getCTM&&$g(e),(m||a==="%")&&(ir[r]||~r.indexOf("adius")))return x=v?e.getBBox()[u?"width":"height"]:e[d],xe(m?s/x*f:s/100*x);if(l[u?"width":"height"]=f+(h?a:i),p=i!=="rem"&&~r.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,v&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===xr||!p.appendChild)&&(p=xr.body),_=p._gsap,_&&m&&_.width&&u&&_.time===nt.time&&!_.uncache)return xe(s/_.width*f);if(m&&(r==="height"||r==="width")){var g=e.style[r];e.style[r]=f+i,x=e[d],g?e.style[r]=g:Rr(e,r)}else(m||a==="%")&&!S2[at(p,"display")]&&(l.position=at(e,"position")),p===e&&(l.position="static"),p.appendChild(Jr),x=Jr[d],p.removeChild(Jr),l.position="absolute";return u&&m&&(_=nn(p),_.time=nt.time,_.width=p[d]),xe(h?x*s/f:x&&s?f/x*s:0)},Yt=function(e,r,n,i){var s;return Gc||Tu(),r in Bt&&r!=="transform"&&(r=Bt[r],~r.indexOf(",")&&(r=r.split(",")[0])),ir[r]&&r!=="transform"?(s=gs(e,i),s=r!=="transformOrigin"?s[r]:s.svg?s.origin:Wa(at(e,Ke))+" "+s.zOrigin+"px"):(s=e.style[r],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=$a[r]&&$a[r](e,r,n)||at(e,r)||ag(e,r)||(r==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Or(e,r,s,n)+n:s},j2=function(e,r,n,i){if(!n||n==="none"){var s=ni(r,e,1),a=s&&at(e,s,1);a&&a!==n?(r=s,n=a):r==="borderColor"&&(n=at(e,"borderTopColor"))}var l=new Xe(this._pt,e.style,r,0,1,Lg),u=0,c=0,d,f,h,m,x,p,_,v,g,y,w,k;if(l.b=n,l.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=at(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(p=e.style[r],e.style[r]=i,i=at(e,r)||i,p?e.style[r]=p:Rr(e,r)),d=[n,i],bg(d),n=d[0],i=d[1],h=n.match(Ln)||[],k=i.match(Ln)||[],k.length){for(;f=Ln.exec(i);)_=f[0],g=i.substring(u,f.index),x?x=(x+1)%5:(g.substr(-5)==="rgba("||g.substr(-5)==="hsla(")&&(x=1),_!==(p=h[c++]||"")&&(m=parseFloat(p)||0,w=p.substr((m+"").length),_.charAt(1)==="="&&(_=Un(m,_)+w),v=parseFloat(_),y=_.substr((v+"").length),u=Ln.lastIndex-y.length,y||(y=y||ot.units[r]||w,u===i.length&&(i+=y,l.e+=y)),w!==y&&(m=Or(e,r,p,y)||0),l._pt={_next:l._pt,p:g||c===1?g:",",s:m,c:v-m,m:x&&x<4||r==="zIndex"?Math.round:0});l.c=u<i.length?i.substring(u,i.length):""}else l.r=r==="display"&&i==="none"?Fg:Ag;return tg.test(i)&&(l.e=0),this._pt=l,l},Df={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},b2=function(e){var r=e.split(" "),n=r[0],i=r[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),r[0]=Df[n]||n,r[1]=Df[i]||i,r.join(" ")},N2=function(e,r){if(r.tween&&r.tween._time===r.tween._dur){var n=r.t,i=n.style,s=r.u,a=n._gsap,l,u,c;if(s==="all"||s===!0)i.cssText="",u=1;else for(s=s.split(","),c=s.length;--c>-1;)l=s[c],ir[l]&&(u=1,l=l==="transformOrigin"?Ke:oe),Rr(n,l);u&&(Rr(n,oe),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",gs(n,1),a.uncache=1,Ig(i)))}},$a={clearProps:function(e,r,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Xe(e._pt,r,n,0,0,N2);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},ms=[1,0,0,1,0,0],Wg={},Vg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Bf=function(e){var r=at(e,oe);return Vg(r)?ms:r.substr(7).match(eg).map(xe)},Zc=function(e,r){var n=e._gsap||nn(e),i=e.style,s=Bf(e),a,l,u,c;return n.svg&&e.getAttribute("transform")?(u=e.transform.baseVal.consolidate().matrix,s=[u.a,u.b,u.c,u.d,u.e,u.f],s.join(",")==="1,0,0,1,0,0"?ms:s):(s===ms&&!e.offsetParent&&e!==$n&&!n.svg&&(u=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,l=e.nextElementSibling,$n.appendChild(e)),s=Bf(e),u?i.display=u:Rr(e,"display"),c&&(l?a.insertBefore(e,l):a?a.appendChild(e):$n.removeChild(e))),r&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},zu=function(e,r,n,i,s,a){var l=e._gsap,u=s||Zc(e,!0),c=l.xOrigin||0,d=l.yOrigin||0,f=l.xOffset||0,h=l.yOffset||0,m=u[0],x=u[1],p=u[2],_=u[3],v=u[4],g=u[5],y=r.split(" "),w=parseFloat(y[0])||0,k=parseFloat(y[1])||0,j,S,N,C;n?u!==ms&&(S=m*_-x*p)&&(N=w*(_/S)+k*(-p/S)+(p*g-_*v)/S,C=w*(-x/S)+k*(m/S)-(m*g-x*v)/S,w=N,k=C):(j=Ug(e),w=j.x+(~y[0].indexOf("%")?w/100*j.width:w),k=j.y+(~(y[1]||y[0]).indexOf("%")?k/100*j.height:k)),i||i!==!1&&l.smooth?(v=w-c,g=k-d,l.xOffset=f+(v*m+g*p)-v,l.yOffset=h+(v*x+g*_)-g):l.xOffset=l.yOffset=0,l.xOrigin=w,l.yOrigin=k,l.smooth=!!i,l.origin=r,l.originIsAbsolute=!!n,e.style[Ke]="0px 0px",a&&(yr(a,l,"xOrigin",c,w),yr(a,l,"yOrigin",d,k),yr(a,l,"xOffset",f,l.xOffset),yr(a,l,"yOffset",h,l.yOffset)),e.setAttribute("data-svg-origin",w+" "+k)},gs=function(e,r){var n=e._gsap||new Cg(e);if("x"in n&&!r&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",l="deg",u=getComputedStyle(e),c=at(e,Ke)||"0",d,f,h,m,x,p,_,v,g,y,w,k,j,S,N,C,E,M,L,F,R,H,q,z,P,O,I,B,U,mt,Z,me;return d=f=h=p=_=v=g=y=w=0,m=x=1,n.svg=!!(e.getCTM&&$g(e)),u.translate&&((u.translate!=="none"||u.scale!=="none"||u.rotate!=="none")&&(i[oe]=(u.translate!=="none"?"translate3d("+(u.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(u.rotate!=="none"?"rotate("+u.rotate+") ":"")+(u.scale!=="none"?"scale("+u.scale.split(" ").join(",")+") ":"")+(u[oe]!=="none"?u[oe]:"")),i.scale=i.rotate=i.translate="none"),S=Zc(e,n.svg),n.svg&&(n.uncache?(P=e.getBBox(),c=n.xOrigin-P.x+"px "+(n.yOrigin-P.y)+"px",z=""):z=!r&&e.getAttribute("data-svg-origin"),zu(e,z||c,!!z||n.originIsAbsolute,n.smooth!==!1,S)),k=n.xOrigin||0,j=n.yOrigin||0,S!==ms&&(M=S[0],L=S[1],F=S[2],R=S[3],d=H=S[4],f=q=S[5],S.length===6?(m=Math.sqrt(M*M+L*L),x=Math.sqrt(R*R+F*F),p=M||L?_n(L,M)*Yr:0,g=F||R?_n(F,R)*Yr+p:0,g&&(x*=Math.abs(Math.cos(g*Wn))),n.svg&&(d-=k-(k*M+j*F),f-=j-(k*L+j*R))):(me=S[6],mt=S[7],I=S[8],B=S[9],U=S[10],Z=S[11],d=S[12],f=S[13],h=S[14],N=_n(me,U),_=N*Yr,N&&(C=Math.cos(-N),E=Math.sin(-N),z=H*C+I*E,P=q*C+B*E,O=me*C+U*E,I=H*-E+I*C,B=q*-E+B*C,U=me*-E+U*C,Z=mt*-E+Z*C,H=z,q=P,me=O),N=_n(-F,U),v=N*Yr,N&&(C=Math.cos(-N),E=Math.sin(-N),z=M*C-I*E,P=L*C-B*E,O=F*C-U*E,Z=R*E+Z*C,M=z,L=P,F=O),N=_n(L,M),p=N*Yr,N&&(C=Math.cos(N),E=Math.sin(N),z=M*C+L*E,P=H*C+q*E,L=L*C-M*E,q=q*C-H*E,M=z,H=P),_&&Math.abs(_)+Math.abs(p)>359.9&&(_=p=0,v=180-v),m=xe(Math.sqrt(M*M+L*L+F*F)),x=xe(Math.sqrt(q*q+me*me)),N=_n(H,q),g=Math.abs(N)>2e-4?N*Yr:0,w=Z?1/(Z<0?-Z:Z):0),n.svg&&(z=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Vg(at(e,oe)),z&&e.setAttribute("transform",z))),Math.abs(g)>90&&Math.abs(g)<270&&(s?(m*=-1,g+=p<=0?180:-180,p+=p<=0?180:-180):(x*=-1,g+=g<=0?180:-180)),r=r||n.uncache,n.x=d-((n.xPercent=d&&(!r&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!r&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=xe(m),n.scaleY=xe(x),n.rotation=xe(p)+l,n.rotationX=xe(_)+l,n.rotationY=xe(v)+l,n.skewX=g+l,n.skewY=y+l,n.transformPerspective=w+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!r&&n.zOrigin||0)&&(i[Ke]=Wa(c)),n.xOffset=n.yOffset=0,n.force3D=ot.force3D,n.renderTransform=n.svg?E2:Bg?Hg:C2,n.uncache=0,n},Wa=function(e){return(e=e.split(" "))[0]+" "+e[1]},Jl=function(e,r,n){var i=Oe(r);return xe(parseFloat(r)+parseFloat(Or(e,"x",n+"px",i)))+i},C2=function(e,r){r.z="0px",r.rotationY=r.rotationX="0deg",r.force3D=0,Hg(e,r)},Wr="0deg",wi="0px",Vr=") ",Hg=function(e,r){var n=r||this,i=n.xPercent,s=n.yPercent,a=n.x,l=n.y,u=n.z,c=n.rotation,d=n.rotationY,f=n.rotationX,h=n.skewX,m=n.skewY,x=n.scaleX,p=n.scaleY,_=n.transformPerspective,v=n.force3D,g=n.target,y=n.zOrigin,w="",k=v==="auto"&&e&&e!==1||v===!0;if(y&&(f!==Wr||d!==Wr)){var j=parseFloat(d)*Wn,S=Math.sin(j),N=Math.cos(j),C;j=parseFloat(f)*Wn,C=Math.cos(j),a=Jl(g,a,S*C*-y),l=Jl(g,l,-Math.sin(j)*-y),u=Jl(g,u,N*C*-y+y)}_!==wi&&(w+="perspective("+_+Vr),(i||s)&&(w+="translate("+i+"%, "+s+"%) "),(k||a!==wi||l!==wi||u!==wi)&&(w+=u!==wi||k?"translate3d("+a+", "+l+", "+u+") ":"translate("+a+", "+l+Vr),c!==Wr&&(w+="rotate("+c+Vr),d!==Wr&&(w+="rotateY("+d+Vr),f!==Wr&&(w+="rotateX("+f+Vr),(h!==Wr||m!==Wr)&&(w+="skew("+h+", "+m+Vr),(x!==1||p!==1)&&(w+="scale("+x+", "+p+Vr),g.style[oe]=w||"translate(0, 0)"},E2=function(e,r){var n=r||this,i=n.xPercent,s=n.yPercent,a=n.x,l=n.y,u=n.rotation,c=n.skewX,d=n.skewY,f=n.scaleX,h=n.scaleY,m=n.target,x=n.xOrigin,p=n.yOrigin,_=n.xOffset,v=n.yOffset,g=n.forceCSS,y=parseFloat(a),w=parseFloat(l),k,j,S,N,C;u=parseFloat(u),c=parseFloat(c),d=parseFloat(d),d&&(d=parseFloat(d),c+=d,u+=d),u||c?(u*=Wn,c*=Wn,k=Math.cos(u)*f,j=Math.sin(u)*f,S=Math.sin(u-c)*-h,N=Math.cos(u-c)*h,c&&(d*=Wn,C=Math.tan(c-d),C=Math.sqrt(1+C*C),S*=C,N*=C,d&&(C=Math.tan(d),C=Math.sqrt(1+C*C),k*=C,j*=C)),k=xe(k),j=xe(j),S=xe(S),N=xe(N)):(k=f,N=h,j=S=0),(y&&!~(a+"").indexOf("px")||w&&!~(l+"").indexOf("px"))&&(y=Or(m,"x",a,"px"),w=Or(m,"y",l,"px")),(x||p||_||v)&&(y=xe(y+x-(x*k+p*S)+_),w=xe(w+p-(x*j+p*N)+v)),(i||s)&&(C=m.getBBox(),y=xe(y+i/100*C.width),w=xe(w+s/100*C.height)),C="matrix("+k+","+j+","+S+","+N+","+y+","+w+")",m.setAttribute("transform",C),g&&(m.style[oe]=C)},P2=function(e,r,n,i,s){var a=360,l=Ne(s),u=parseFloat(s)*(l&&~s.indexOf("rad")?Yr:1),c=u-i,d=i+c+"deg",f,h;return l&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*Rf)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*Rf)%a-~~(c/a)*a)),e._pt=h=new Xe(e._pt,r,n,i,c,d2),h.e=d,h.u="deg",e._props.push(n),h},Uf=function(e,r){for(var n in r)e[n]=r[n];return e},T2=function(e,r,n){var i=Uf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,l,u,c,d,f,h,m,x;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[oe]=r,l=gs(n,1),Rr(n,oe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[oe],a[oe]=r,l=gs(n,1),a[oe]=c);for(u in ir)c=i[u],d=l[u],c!==d&&s.indexOf(u)<0&&(m=Oe(c),x=Oe(d),f=m!==x?Or(n,u,c,x):parseFloat(c),h=parseFloat(d),e._pt=new Xe(e._pt,l,u,f,h-f,Eu),e._pt.u=x||0,e._props.push(u));Uf(l,i)};Ge("padding,margin,Width,Radius",function(t,e){var r="Top",n="Right",i="Bottom",s="Left",a=(e<3?[r,n,i,s]:[r+s,r+n,i+n,i+s]).map(function(l){return e<2?t+l:"border"+l+t});$a[e>1?"border"+t:t]=function(l,u,c,d,f){var h,m;if(arguments.length<4)return h=a.map(function(x){return Yt(l,x,c)}),m=h.join(" "),m.split(h[0]).length===5?h[0]:m;h=(d+"").split(" "),m={},a.forEach(function(x,p){return m[x]=h[p]=h[p]||h[(p-1)/2|0]}),l.init(u,m,f)}});var qg={name:"css",register:Tu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,r,n,i,s){var a=this._props,l=e.style,u=n.vars.startAt,c,d,f,h,m,x,p,_,v,g,y,w,k,j,S,N,C;Gc||Tu(),this.styles=this.styles||Dg(e),N=this.styles.props,this.tween=n;for(p in r)if(p!=="autoRound"&&(d=r[p],!(rt[p]&&Eg(p,r,n,i,e,s)))){if(m=typeof d,x=$a[p],m==="function"&&(d=d.call(n,i,e,s),m=typeof d),m==="string"&&~d.indexOf("random(")&&(d=fs(d)),x)x(this,e,p,d,n)&&(S=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(p)+"").trim(),d+="",Tr.lastIndex=0,Tr.test(c)||(_=Oe(c),v=Oe(d),v?_!==v&&(c=Or(e,p,c,v)+v):_&&(d+=_)),this.add(l,"setProperty",c,d,i,s,0,0,p),a.push(p),N.push(p,0,l[p]);else if(m!=="undefined"){if(u&&p in u?(c=typeof u[p]=="function"?u[p].call(n,i,e,s):u[p],Ne(c)&&~c.indexOf("random(")&&(c=fs(c)),Oe(c+"")||c==="auto"||(c+=ot.units[p]||Oe(Yt(e,p))||""),(c+"").charAt(1)==="="&&(c=Yt(e,p))):c=Yt(e,p),h=parseFloat(c),g=m==="string"&&d.charAt(1)==="="&&d.substr(0,2),g&&(d=d.substr(2)),f=parseFloat(d),p in Bt&&(p==="autoAlpha"&&(h===1&&Yt(e,"visibility")==="hidden"&&f&&(h=0),N.push("visibility",0,l.visibility),yr(this,l,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),p!=="scale"&&p!=="transform"&&(p=Bt[p],~p.indexOf(",")&&(p=p.split(",")[0]))),y=p in ir,y){if(this.styles.save(p),C=d,m==="string"&&d.substring(0,6)==="var(--"){if(d=at(e,d.substring(4,d.indexOf(")"))),d.substring(0,5)==="calc("){var E=e.style.perspective;e.style.perspective=d,d=at(e,"perspective"),E?e.style.perspective=E:Rr(e,"perspective")}f=parseFloat(d)}if(w||(k=e._gsap,k.renderTransform&&!r.parseTransform||gs(e,r.parseTransform),j=r.smoothOrigin!==!1&&k.smooth,w=this._pt=new Xe(this._pt,l,oe,0,1,k.renderTransform,k,0,-1),w.dep=1),p==="scale")this._pt=new Xe(this._pt,k,"scaleY",k.scaleY,(g?Un(k.scaleY,g+f):f)-k.scaleY||0,Eu),this._pt.u=0,a.push("scaleY",p),p+="X";else if(p==="transformOrigin"){N.push(Ke,0,l[Ke]),d=b2(d),k.svg?zu(e,d,0,j,0,this):(v=parseFloat(d.split(" ")[2])||0,v!==k.zOrigin&&yr(this,k,"zOrigin",k.zOrigin,v),yr(this,l,p,Wa(c),Wa(d)));continue}else if(p==="svgOrigin"){zu(e,d,1,j,0,this);continue}else if(p in Wg){P2(this,k,p,h,g?Un(h,g+d):d);continue}else if(p==="smoothOrigin"){yr(this,k,"smooth",k.smooth,d);continue}else if(p==="force3D"){k[p]=d;continue}else if(p==="transform"){T2(this,d,e);continue}}else p in l||(p=ni(p)||p);if(y||(f||f===0)&&(h||h===0)&&!c2.test(d)&&p in l)_=(c+"").substr((h+"").length),f||(f=0),v=Oe(d)||(p in ot.units?ot.units[p]:_),_!==v&&(h=Or(e,p,c,v)),this._pt=new Xe(this._pt,y?k:l,p,h,(g?Un(h,g+f):f)-h,!y&&(v==="px"||p==="zIndex")&&r.autoRound!==!1?p2:Eu),this._pt.u=v||0,y&&C!==d?(this._pt.b=c,this._pt.e=C,this._pt.r=h2):_!==v&&v!=="%"&&(this._pt.b=c,this._pt.r=f2);else if(p in l)j2.call(this,e,p,c,g?g+d:d);else if(p in e)this.add(e,p,c||e[p],g?g+d:d,i,s);else if(p!=="parseTransform"){Dc(p,d);continue}y||(p in l?N.push(p,0,l[p]):typeof e[p]=="function"?N.push(p,2,e[p]()):N.push(p,1,c||e[p])),a.push(p)}}S&&Rg(this)},render:function(e,r){if(r.tween._time||!Xc())for(var n=r._pt;n;)n.r(e,n.d),n=n._next;else r.styles.revert()},get:Yt,aliases:Bt,getSetter:function(e,r,n){var i=Bt[r];return i&&i.indexOf(",")<0&&(r=i),r in ir&&r!==Ke&&(e._gsap.x||Yt(e,"x"))?n&&Lf===n?r==="scale"?x2:v2:(Lf=n||{})&&(r==="scale"?y2:_2):e.style&&!Ac(e.style[r])?m2:~r.indexOf("-")?g2:Yc(e,r)},core:{_removeProperty:Rr,_getMatrix:Zc}};Ze.utils.checkPrefix=ni;Ze.core.getStyleSaver=Dg;(function(t,e,r,n){var i=Ge(t+","+e+","+r,function(s){ir[s]=1});Ge(e,function(s){ot.units[s]="deg",Wg[s]=1}),Bt[i[13]]=t+","+e,Ge(n,function(s){var a=s.split(":");Bt[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ge("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){ot.units[t]="px"});Ze.registerPlugin(qg);var ge=Ze.registerPlugin(qg)||Ze;ge.core.Tween;const z2=({logo:t,logoAlt:e="Logo",items:r,activeHref:n,className:i="",ease:s="power3.easeOut",baseColor:a="#fff",pillColor:l="#120F17",hoveredPillTextColor:u="#120F17",pillTextColor:c,onMobileMenuClick:d,initialLoadAnimation:f=!0})=>{var H,q;const h=c??a,[m,x]=b.useState(!1),p=b.useRef([]),_=b.useRef([]),v=b.useRef([]),g=b.useRef(null),y=b.useRef(null),w=b.useRef(null),k=b.useRef(null),j=b.useRef(null),S=b.useRef(null);b.useEffect(()=>{var I;const z=()=>{p.current.forEach(B=>{var fi;if(!(B!=null&&B.parentElement))return;const U=B.parentElement,mt=U.getBoundingClientRect(),{width:Z,height:me}=mt,ze=(Z*Z/4+me*me)/(2*me),et=Math.ceil(2*ze)+2,$r=Math.ceil(ze-Math.sqrt(Math.max(0,ze*ze-Z*Z/4)))+1,js=et-$r;B.style.width=`${et}px`,B.style.height=`${et}px`,B.style.bottom=`-${$r}px`,ge.set(B,{xPercent:-50,scale:0,transformOrigin:`50% ${js}px`});const fe=U.querySelector(".pill-label"),G=U.querySelector(".pill-label-hover");fe&&ge.set(fe,{y:0}),G&&ge.set(G,{y:me+12,opacity:0});const ie=p.current.indexOf(B);if(ie===-1)return;(fi=_.current[ie])==null||fi.kill();const or=ge.timeline({paused:!0});or.to(B,{scale:1.2,xPercent:-50,duration:2,ease:s,overwrite:"auto"},0),fe&&or.to(fe,{y:-(me+8),duration:2,ease:s,overwrite:"auto"},0),G&&(ge.set(G,{y:Math.ceil(me+100),opacity:0}),or.to(G,{y:0,opacity:1,duration:2,ease:s,overwrite:"auto"},0)),_.current[ie]=or})};z();const P=()=>z();window.addEventListener("resize",P),(I=document.fonts)!=null&&I.ready&&document.fonts.ready.then(z).catch(()=>{});const O=k.current;if(O&&ge.set(O,{visibility:"hidden",opacity:0,scaleY:1}),f){const B=S.current,U=j.current;B&&(ge.set(B,{scale:0}),ge.to(B,{scale:1,duration:.6,ease:s})),U&&(ge.set(U,{width:0,overflow:"hidden"}),ge.to(U,{width:"auto",duration:.6,ease:s}))}return()=>window.removeEventListener("resize",P)},[r,s,f]);const N=z=>{var O;const P=_.current[z];P&&((O=v.current[z])==null||O.kill(),v.current[z]=P.tweenTo(P.duration(),{duration:.3,ease:s,overwrite:"auto"}))},C=z=>{var O;const P=_.current[z];P&&((O=v.current[z])==null||O.kill(),v.current[z]=P.tweenTo(0,{duration:.2,ease:s,overwrite:"auto"}))},E=()=>{var P;const z=g.current;z&&((P=y.current)==null||P.kill(),ge.set(z,{rotate:0}),y.current=ge.to(z,{rotate:360,duration:.2,ease:s,overwrite:"auto"}))},M=()=>{const z=!m;x(z);const P=w.current,O=k.current;if(P){const I=P.querySelectorAll(".hamburger-line");z?(ge.to(I[0],{rotation:45,y:3,duration:.3,ease:s}),ge.to(I[1],{rotation:-45,y:-3,duration:.3,ease:s})):(ge.to(I[0],{rotation:0,y:0,duration:.3,ease:s}),ge.to(I[1],{rotation:0,y:0,duration:.3,ease:s}))}O&&(z?(ge.set(O,{visibility:"visible"}),ge.fromTo(O,{opacity:0,y:10,scaleY:1},{opacity:1,y:0,scaleY:1,duration:.3,ease:s,transformOrigin:"top center"})):ge.to(O,{opacity:0,y:10,scaleY:1,duration:.2,ease:s,transformOrigin:"top center",onComplete:()=>{ge.set(O,{visibility:"hidden"})}})),d==null||d()},L=z=>z&&(z.startsWith("http://")||z.startsWith("https://")||z.startsWith("//")||z.startsWith("mailto:")||z.startsWith("tel:")||z.startsWith("#")),F=z=>z&&!L(z),R={"--base":a,"--pill-bg":l,"--hover-text":u,"--pill-text":h};return o.jsxs("div",{className:"pill-nav-container",children:[o.jsxs("nav",{className:`pill-nav ${i}`,"aria-label":"Primary",style:R,children:[F((H=r==null?void 0:r[0])==null?void 0:H.href)?o.jsx(ve,{className:"pill-logo",to:r[0].href,"aria-label":"Home",onMouseEnter:E,role:"menuitem",ref:z=>{S.current=z},children:o.jsx("img",{src:t,alt:e,ref:g})}):o.jsx("a",{className:"pill-logo",href:((q=r==null?void 0:r[0])==null?void 0:q.href)||"#","aria-label":"Home",onMouseEnter:E,ref:z=>{S.current=z},children:o.jsx("img",{src:t,alt:e,ref:g})}),o.jsx("div",{className:"pill-nav-items desktop-only",ref:j,children:o.jsx("ul",{className:"pill-list",role:"menubar",children:r.map((z,P)=>o.jsx("li",{role:"none",children:F(z.href)?o.jsxs(ve,{role:"menuitem",to:z.href,className:`pill${n===z.href?" is-active":""}`,"aria-label":z.ariaLabel||z.label,onMouseEnter:()=>N(P),onMouseLeave:()=>C(P),children:[o.jsx("span",{className:"hover-circle","aria-hidden":"true",ref:O=>{p.current[P]=O}}),o.jsxs("span",{className:"label-stack",children:[o.jsx("span",{className:"pill-label",children:z.label}),o.jsx("span",{className:"pill-label-hover","aria-hidden":"true",children:z.label})]})]}):o.jsxs("a",{role:"menuitem",href:z.href,className:`pill${n===z.href?" is-active":""}`,"aria-label":z.ariaLabel||z.label,onMouseEnter:()=>N(P),onMouseLeave:()=>C(P),children:[o.jsx("span",{className:"hover-circle","aria-hidden":"true",ref:O=>{p.current[P]=O}}),o.jsxs("span",{className:"label-stack",children:[o.jsx("span",{className:"pill-label",children:z.label}),o.jsx("span",{className:"pill-label-hover","aria-hidden":"true",children:z.label})]})]})},z.href||`item-${P}`))})}),o.jsxs("button",{className:"mobile-menu-button mobile-only",onClick:M,"aria-label":"Toggle menu",ref:w,children:[o.jsx("span",{className:"hamburger-line"}),o.jsx("span",{className:"hamburger-line"})]})]}),o.jsx("div",{className:"mobile-menu-popover mobile-only",ref:k,style:R,children:o.jsx("ul",{className:"mobile-menu-list",children:r.map((z,P)=>o.jsx("li",{children:F(z.href)?o.jsx(ve,{to:z.href,className:`mobile-menu-link${n===z.href?" is-active":""}`,onClick:()=>x(!1),children:z.label}):o.jsx("a",{href:z.href,className:`mobile-menu-link${n===z.href?" is-active":""}`,onClick:()=>x(!1),children:z.label})},z.href||`mobile-item-${P}`))})})]})},M2=()=>{const{theme:t,toggleTheme:e}=Am(),{isAuthenticated:r}=Je(),n=Br(),i=[{label:"Home",href:"/"},{label:"Features",href:"#features"},{label:"Explore",href:"#preview"},{label:"Feed",href:"/home"}];return o.jsxs("header",{className:"landing-header",children:[o.jsxs("div",{className:"container landing-header-container",children:[o.jsx(z2,{logo:"/socialla-logo.svg",logoAlt:"Socialla",items:i,activeHref:n.pathname,baseColor:t==="dark"?"#1e293b":"#ffffff",pillColor:t==="dark"?"#0f172a":"#f1f5f9",pillTextColor:t==="dark"?"#f8fafc":"#0f172a",hoveredPillTextColor:"#ffffff",className:"socialla-pill-nav"}),o.jsxs("div",{className:"landing-header-actions",children:[o.jsx("button",{className:"btn-icon",onClick:e,title:`Switch to ${t==="dark"?"Light":"Dark"} mode`,children:t==="dark"?o.jsx(hu,{}):o.jsx(Hm,{})}),r?o.jsxs(ve,{to:"/home",className:"btn btn-primary",children:[o.jsx(Bm,{})," Dashboard ",o.jsx(os,{})]}):o.jsxs(o.Fragment,{children:[o.jsx(ve,{to:"/login",className:"btn btn-ghost",children:"Log In"}),o.jsx(ve,{to:"/register",className:"btn btn-primary",children:"Create Account"})]})]})]}),o.jsx("style",{children:`
        .landing-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: var(--bg-glass);
          backdrop-filter: var(--backdrop-blur);
          border-bottom: 1px solid var(--border-color);
          animation: headerSlideDown 0.4s ease-out;
        }

        .landing-header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 76px;
        }

        .socialla-pill-nav {
          margin: 0;
        }

        .landing-header-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
      `})]})},$f={blue:"linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%))",purple:"linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))",red:"linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))",indigo:"linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))",orange:"linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))",green:"linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))"},L2=({items:t=[],className:e=""})=>{const r=n=>$f[n]?{background:$f[n]}:{background:n};return o.jsx("div",{className:`icon-btns ${e}`,children:t.map((n,i)=>o.jsxs("button",{className:`icon-btn ${n.customClass||""}`,"aria-label":n.label,type:"button",children:[o.jsx("span",{className:"icon-btn__back",style:r(n.color)}),o.jsx("span",{className:"icon-btn__front",children:o.jsx("span",{className:"icon-btn__icon","aria-hidden":"true",children:n.icon})}),o.jsx("span",{className:"icon-btn__label",children:n.label})]},i))})};function Bi(t){let e=t[0],r=t[1],n=t[2];return Math.sqrt(e*e+r*r+n*n)}function Mu(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function R2(t,e,r,n){return t[0]=e,t[1]=r,t[2]=n,t}function Wf(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t}function Vf(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t}function O2(t,e,r){return t[0]=e[0]*r[0],t[1]=e[1]*r[1],t[2]=e[2]*r[2],t}function A2(t,e,r){return t[0]=e[0]/r[0],t[1]=e[1]/r[1],t[2]=e[2]/r[2],t}function eo(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t}function F2(t,e){let r=e[0]-t[0],n=e[1]-t[1],i=e[2]-t[2];return Math.sqrt(r*r+n*n+i*i)}function I2(t,e){let r=e[0]-t[0],n=e[1]-t[1],i=e[2]-t[2];return r*r+n*n+i*i}function Hf(t){let e=t[0],r=t[1],n=t[2];return e*e+r*r+n*n}function D2(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}function B2(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}function Lu(t,e){let r=e[0],n=e[1],i=e[2],s=r*r+n*n+i*i;return s>0&&(s=1/Math.sqrt(s)),t[0]=e[0]*s,t[1]=e[1]*s,t[2]=e[2]*s,t}function Yg(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function qf(t,e,r){let n=e[0],i=e[1],s=e[2],a=r[0],l=r[1],u=r[2];return t[0]=i*u-s*l,t[1]=s*a-n*u,t[2]=n*l-i*a,t}function U2(t,e,r,n){let i=e[0],s=e[1],a=e[2];return t[0]=i+n*(r[0]-i),t[1]=s+n*(r[1]-s),t[2]=a+n*(r[2]-a),t}function $2(t,e,r,n,i){const s=Math.exp(-n*i);let a=e[0],l=e[1],u=e[2];return t[0]=r[0]+(a-r[0])*s,t[1]=r[1]+(l-r[1])*s,t[2]=r[2]+(u-r[2])*s,t}function W2(t,e,r){let n=e[0],i=e[1],s=e[2],a=r[3]*n+r[7]*i+r[11]*s+r[15];return a=a||1,t[0]=(r[0]*n+r[4]*i+r[8]*s+r[12])/a,t[1]=(r[1]*n+r[5]*i+r[9]*s+r[13])/a,t[2]=(r[2]*n+r[6]*i+r[10]*s+r[14])/a,t}function V2(t,e,r){let n=e[0],i=e[1],s=e[2],a=r[3]*n+r[7]*i+r[11]*s+r[15];return a=a||1,t[0]=(r[0]*n+r[4]*i+r[8]*s)/a,t[1]=(r[1]*n+r[5]*i+r[9]*s)/a,t[2]=(r[2]*n+r[6]*i+r[10]*s)/a,t}function H2(t,e,r){let n=e[0],i=e[1],s=e[2];return t[0]=n*r[0]+i*r[3]+s*r[6],t[1]=n*r[1]+i*r[4]+s*r[7],t[2]=n*r[2]+i*r[5]+s*r[8],t}function q2(t,e,r){let n=e[0],i=e[1],s=e[2],a=r[0],l=r[1],u=r[2],c=r[3],d=l*s-u*i,f=u*n-a*s,h=a*i-l*n,m=l*h-u*f,x=u*d-a*h,p=a*f-l*d,_=c*2;return d*=_,f*=_,h*=_,m*=2,x*=2,p*=2,t[0]=n+d+m,t[1]=i+f+x,t[2]=s+h+p,t}const Y2=function(){const t=[0,0,0],e=[0,0,0];return function(r,n){Mu(t,r),Mu(e,n),Lu(t,t),Lu(e,e);let i=Yg(t,e);return i>1?0:i<-1?Math.PI:Math.acos(i)}}();function Q2(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}class zt extends Array{constructor(e=0,r=e,n=e){return super(e,r,n),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this[0]=e}set y(e){this[1]=e}set z(e){this[2]=e}set(e,r=e,n=e){return e.length?this.copy(e):(R2(this,e,r,n),this)}copy(e){return Mu(this,e),this}add(e,r){return r?Wf(this,e,r):Wf(this,this,e),this}sub(e,r){return r?Vf(this,e,r):Vf(this,this,e),this}multiply(e){return e.length?O2(this,this,e):eo(this,this,e),this}divide(e){return e.length?A2(this,this,e):eo(this,this,1/e),this}inverse(e=this){return B2(this,e),this}len(){return Bi(this)}distance(e){return e?F2(this,e):Bi(this)}squaredLen(){return Hf(this)}squaredDistance(e){return e?I2(this,e):Hf(this)}negate(e=this){return D2(this,e),this}cross(e,r){return r?qf(this,e,r):qf(this,this,e),this}scale(e){return eo(this,this,e),this}normalize(){return Lu(this,this),this}dot(e){return Yg(this,e)}equals(e){return Q2(this,e)}applyMatrix3(e){return H2(this,this,e),this}applyMatrix4(e){return W2(this,this,e),this}scaleRotateMatrix4(e){return V2(this,this,e),this}applyQuaternion(e){return q2(this,this,e),this}angle(e){return Y2(this,e)}lerp(e,r){return U2(this,this,e,r),this}smoothLerp(e,r,n){return $2(this,this,e,r,n),this}clone(){return new zt(this[0],this[1],this[2])}fromArray(e,r=0){return this[0]=e[r],this[1]=e[r+1],this[2]=e[r+2],this}toArray(e=[],r=0){return e[r]=this[0],e[r+1]=this[1],e[r+2]=this[2],e}transformDirection(e){const r=this[0],n=this[1],i=this[2];return this[0]=e[0]*r+e[4]*n+e[8]*i,this[1]=e[1]*r+e[5]*n+e[9]*i,this[2]=e[2]*r+e[6]*n+e[10]*i,this.normalize()}}const Yf=new zt;let G2=1,X2=1,Qf=!1;class K2{constructor(e,r={}){e.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=e,this.attributes=r,this.id=G2++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let n in r)this.addAttribute(n,r[n])}addAttribute(e,r){if(this.attributes[e]=r,r.id=X2++,r.size=r.size||1,r.type=r.type||(r.data.constructor===Float32Array?this.gl.FLOAT:r.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),r.target=e==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,r.normalized=r.normalized||!1,r.stride=r.stride||0,r.offset=r.offset||0,r.count=r.count||(r.stride?r.data.byteLength/r.stride:r.data.length/r.size),r.divisor=r.instanced||0,r.needsUpdate=!1,r.usage=r.usage||this.gl.STATIC_DRAW,r.buffer||this.updateAttribute(r),r.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==r.count*r.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,r.count*r.divisor);this.instancedCount=r.count*r.divisor}else e==="index"?this.drawRange.count=r.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,r.count))}updateAttribute(e){const r=!e.buffer;r&&(e.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==e.buffer&&(this.gl.bindBuffer(e.target,e.buffer),this.glState.boundBuffer=e.buffer),r?this.gl.bufferData(e.target,e.data,e.usage):this.gl.bufferSubData(e.target,0,e.data),e.needsUpdate=!1}setIndex(e){this.addAttribute("index",e)}setDrawRange(e,r){this.drawRange.start=e,this.drawRange.count=r}setInstancedCount(e){this.instancedCount=e}createVAO(e){this.VAOs[e.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.bindAttributes(e)}bindAttributes(e){e.attributeLocations.forEach((r,{name:n,type:i})=>{if(!this.attributes[n]){console.warn(`active attribute ${n} not being supplied`);return}const s=this.attributes[n];this.gl.bindBuffer(s.target,s.buffer),this.glState.boundBuffer=s.buffer;let a=1;i===35674&&(a=2),i===35675&&(a=3),i===35676&&(a=4);const l=s.size/a,u=a===1?0:a*a*4,c=a===1?0:a*4;for(let d=0;d<a;d++)this.gl.vertexAttribPointer(r+d,l,s.type,s.normalized,s.stride+u,s.offset+d*c),this.gl.enableVertexAttribArray(r+d),this.gl.renderer.vertexAttribDivisor(r+d,s.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:e,mode:r=this.gl.TRIANGLES}){var i;this.gl.renderer.currentGeometry!==`${this.id}_${e.attributeOrder}`&&(this.VAOs[e.attributeOrder]||this.createVAO(e),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${e.attributeOrder}`),e.attributeLocations.forEach((s,{name:a})=>{const l=this.attributes[a];l.needsUpdate&&this.updateAttribute(l)});let n=2;((i=this.attributes.index)==null?void 0:i.type)===this.gl.UNSIGNED_INT&&(n=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(r,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*n,this.instancedCount):this.gl.renderer.drawArraysInstanced(r,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(r,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*n):this.gl.drawArrays(r,this.drawRange.start,this.drawRange.count)}getPosition(){const e=this.attributes.position;if(e.data)return e;if(!Qf)return console.warn("No position buffer data found to compute bounds"),Qf=!0}computeBoundingBox(e){e||(e=this.getPosition());const r=e.data,n=e.size;this.bounds||(this.bounds={min:new zt,max:new zt,center:new zt,scale:new zt,radius:1/0});const i=this.bounds.min,s=this.bounds.max,a=this.bounds.center,l=this.bounds.scale;i.set(1/0),s.set(-1/0);for(let u=0,c=r.length;u<c;u+=n){const d=r[u],f=r[u+1],h=r[u+2];i.x=Math.min(d,i.x),i.y=Math.min(f,i.y),i.z=Math.min(h,i.z),s.x=Math.max(d,s.x),s.y=Math.max(f,s.y),s.z=Math.max(h,s.z)}l.sub(s,i),a.add(i,s).divide(2)}computeBoundingSphere(e){e||(e=this.getPosition());const r=e.data,n=e.size;this.bounds||this.computeBoundingBox(e);let i=0;for(let s=0,a=r.length;s<a;s+=n)Yf.fromArray(r,s),i=Math.max(i,this.bounds.center.squaredDistance(Yf));this.bounds.radius=Math.sqrt(i)}remove(){for(let e in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[e]),delete this.VAOs[e];for(let e in this.attributes)this.gl.deleteBuffer(this.attributes[e].buffer),delete this.attributes[e]}}let Z2=1;const Gf={};class J2{constructor(e,{vertex:r,fragment:n,uniforms:i={},transparent:s=!1,cullFace:a=e.BACK,frontFace:l=e.CCW,depthTest:u=!0,depthWrite:c=!0,depthFunc:d=e.LEQUAL}={}){e.canvas||console.error("gl not passed as first argument to Program"),this.gl=e,this.uniforms=i,this.id=Z2++,r||console.warn("vertex shader not supplied"),n||console.warn("fragment shader not supplied"),this.transparent=s,this.cullFace=a,this.frontFace=l,this.depthTest=u,this.depthWrite=c,this.depthFunc=d,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=e.createShader(e.VERTEX_SHADER),this.fragmentShader=e.createShader(e.FRAGMENT_SHADER),this.program=e.createProgram(),e.attachShader(this.program,this.vertexShader),e.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:r,fragment:n})}setShaders({vertex:e,fragment:r}){if(e&&(this.gl.shaderSource(this.vertexShader,e),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${Xf(e)}`)),r&&(this.gl.shaderSource(this.fragmentShader,r),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${Xf(r)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let n=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let a=0;a<n;a++){let l=this.gl.getActiveUniform(this.program,a);this.uniformLocations.set(l,this.gl.getUniformLocation(this.program,l.name));const u=l.name.match(/(\w+)/g);l.uniformName=u[0],l.nameComponents=u.slice(1)}this.attributeLocations=new Map;const i=[],s=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const l=this.gl.getActiveAttrib(this.program,a),u=this.gl.getAttribLocation(this.program,l.name);u!==-1&&(i[u]=l.name,this.attributeLocations.set(l,u))}this.attributeOrder=i.join("")}setBlendFunc(e,r,n,i){this.blendFunc.src=e,this.blendFunc.dst=r,this.blendFunc.srcAlpha=n,this.blendFunc.dstAlpha=i,e&&(this.transparent=!0)}setBlendEquation(e,r){this.blendEquation.modeRGB=e,this.blendEquation.modeAlpha=r}setStencilFunc(e,r,n){this.stencilRef=r,this.stencilFunc.func=e,this.stencilFunc.ref=r,this.stencilFunc.mask=n}setStencilOp(e,r,n){this.stencilOp.stencilFail=e,this.stencilOp.depthFail=r,this.stencilOp.depthPass=n}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:e=!1}={}){let r=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((i,s)=>{let a=this.uniforms[s.uniformName];for(const l of s.nameComponents){if(!a)break;if(l in a)a=a[l];else{if(Array.isArray(a.value))break;a=void 0;break}}if(!a)return Kf(`Active uniform ${s.name} has not been supplied`);if(a&&a.value===void 0)return Kf(`${s.name} uniform is missing a value parameter`);if(a.value.texture)return r=r+1,a.value.update(r),to(this.gl,s.type,i,r);if(a.value.length&&a.value[0].texture){const l=[];return a.value.forEach(u=>{r=r+1,u.update(r),l.push(r)}),to(this.gl,s.type,i,l)}to(this.gl,s.type,i,a.value)}),this.applyState(),e&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function to(t,e,r,n){n=n.length?e_(n):n;const i=t.renderer.state.uniformLocations.get(r);if(n.length)if(i===void 0||i.length!==n.length)t.renderer.state.uniformLocations.set(r,n.slice(0));else{if(t_(i,n))return;i.set?i.set(n):r_(i,n),t.renderer.state.uniformLocations.set(r,i)}else{if(i===n)return;t.renderer.state.uniformLocations.set(r,n)}switch(e){case 5126:return n.length?t.uniform1fv(r,n):t.uniform1f(r,n);case 35664:return t.uniform2fv(r,n);case 35665:return t.uniform3fv(r,n);case 35666:return t.uniform4fv(r,n);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return n.length?t.uniform1iv(r,n):t.uniform1i(r,n);case 35671:case 35667:return t.uniform2iv(r,n);case 35672:case 35668:return t.uniform3iv(r,n);case 35673:case 35669:return t.uniform4iv(r,n);case 35674:return t.uniformMatrix2fv(r,!1,n);case 35675:return t.uniformMatrix3fv(r,!1,n);case 35676:return t.uniformMatrix4fv(r,!1,n)}}function Xf(t){let e=t.split(`
`);for(let r=0;r<e.length;r++)e[r]=r+1+": "+e[r];return e.join(`
`)}function e_(t){const e=t.length,r=t[0].length;if(r===void 0)return t;const n=e*r;let i=Gf[n];i||(Gf[n]=i=new Float32Array(n));for(let s=0;s<e;s++)i.set(t[s],s*r);return i}function t_(t,e){if(t.length!==e.length)return!1;for(let r=0,n=t.length;r<n;r++)if(t[r]!==e[r])return!1;return!0}function r_(t,e){for(let r=0,n=t.length;r<n;r++)t[r]=e[r]}let ro=0;function Kf(t){ro>100||(console.warn(t),ro++,ro>100&&console.warn("More than 100 program warnings - stopping logs."))}const no=new zt;let n_=1;class i_{constructor({canvas:e=document.createElement("canvas"),width:r=300,height:n=150,dpr:i=1,alpha:s=!1,depth:a=!0,stencil:l=!1,antialias:u=!1,premultipliedAlpha:c=!1,preserveDrawingBuffer:d=!1,powerPreference:f="default",autoClear:h=!0,webgl:m=2}={}){const x={alpha:s,depth:a,stencil:l,antialias:u,premultipliedAlpha:c,preserveDrawingBuffer:d,powerPreference:f};this.dpr=i,this.alpha=s,this.color=!0,this.depth=a,this.stencil=l,this.premultipliedAlpha=c,this.autoClear=h,this.id=n_++,m===2&&(this.gl=e.getContext("webgl2",x)),this.isWebgl2=!!this.gl,this.gl||(this.gl=e.getContext("webgl",x)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(r,n),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(e,r){this.width=e,this.height=r,this.gl.canvas.width=e*this.dpr,this.gl.canvas.height=r*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:e+"px",height:r+"px"})}setViewport(e,r,n=0,i=0){this.state.viewport.width===e&&this.state.viewport.height===r||(this.state.viewport.width=e,this.state.viewport.height=r,this.state.viewport.x=n,this.state.viewport.y=i,this.gl.viewport(n,i,e,r))}setScissor(e,r,n=0,i=0){this.gl.scissor(n,i,e,r)}enable(e){this.state[e]!==!0&&(this.gl.enable(e),this.state[e]=!0)}disable(e){this.state[e]!==!1&&(this.gl.disable(e),this.state[e]=!1)}setBlendFunc(e,r,n,i){this.state.blendFunc.src===e&&this.state.blendFunc.dst===r&&this.state.blendFunc.srcAlpha===n&&this.state.blendFunc.dstAlpha===i||(this.state.blendFunc.src=e,this.state.blendFunc.dst=r,this.state.blendFunc.srcAlpha=n,this.state.blendFunc.dstAlpha=i,n!==void 0?this.gl.blendFuncSeparate(e,r,n,i):this.gl.blendFunc(e,r))}setBlendEquation(e,r){e=e||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===e&&this.state.blendEquation.modeAlpha===r)&&(this.state.blendEquation.modeRGB=e,this.state.blendEquation.modeAlpha=r,r!==void 0?this.gl.blendEquationSeparate(e,r):this.gl.blendEquation(e))}setCullFace(e){this.state.cullFace!==e&&(this.state.cullFace=e,this.gl.cullFace(e))}setFrontFace(e){this.state.frontFace!==e&&(this.state.frontFace=e,this.gl.frontFace(e))}setDepthMask(e){this.state.depthMask!==e&&(this.state.depthMask=e,this.gl.depthMask(e))}setDepthFunc(e){this.state.depthFunc!==e&&(this.state.depthFunc=e,this.gl.depthFunc(e))}setStencilMask(e){this.state.stencilMask!==e&&(this.state.stencilMask=e,this.gl.stencilMask(e))}setStencilFunc(e,r,n){this.state.stencilFunc===e&&this.state.stencilRef===r&&this.state.stencilFuncMask===n||(this.state.stencilFunc=e||this.gl.ALWAYS,this.state.stencilRef=r||0,this.state.stencilFuncMask=n||0,this.gl.stencilFunc(e||this.gl.ALWAYS,r||0,n||0))}setStencilOp(e,r,n){this.state.stencilFail===e&&this.state.stencilDepthFail===r&&this.state.stencilDepthPass===n||(this.state.stencilFail=e,this.state.stencilDepthFail=r,this.state.stencilDepthPass=n,this.gl.stencilOp(e,r,n))}activeTexture(e){this.state.activeTextureUnit!==e&&(this.state.activeTextureUnit=e,this.gl.activeTexture(this.gl.TEXTURE0+e))}bindFramebuffer({target:e=this.gl.FRAMEBUFFER,buffer:r=null}={}){this.state.framebuffer!==r&&(this.state.framebuffer=r,this.gl.bindFramebuffer(e,r))}getExtension(e,r,n){return r&&this.gl[r]?this.gl[r].bind(this.gl):(this.extensions[e]||(this.extensions[e]=this.gl.getExtension(e)),r?this.extensions[e]?this.extensions[e][n].bind(this.extensions[e]):null:this.extensions[e])}sortOpaque(e,r){return e.renderOrder!==r.renderOrder?e.renderOrder-r.renderOrder:e.program.id!==r.program.id?e.program.id-r.program.id:e.zDepth!==r.zDepth?e.zDepth-r.zDepth:r.id-e.id}sortTransparent(e,r){return e.renderOrder!==r.renderOrder?e.renderOrder-r.renderOrder:e.zDepth!==r.zDepth?r.zDepth-e.zDepth:r.id-e.id}sortUI(e,r){return e.renderOrder!==r.renderOrder?e.renderOrder-r.renderOrder:e.program.id!==r.program.id?e.program.id-r.program.id:r.id-e.id}getRenderList({scene:e,camera:r,frustumCull:n,sort:i}){let s=[];if(r&&n&&r.updateFrustum(),e.traverse(a=>{if(!a.visible)return!0;a.draw&&(n&&a.frustumCulled&&r&&!r.frustumIntersectsMesh(a)||s.push(a))}),i){const a=[],l=[],u=[];s.forEach(c=>{c.program.transparent?c.program.depthTest?l.push(c):u.push(c):a.push(c),c.zDepth=0,!(c.renderOrder!==0||!c.program.depthTest||!r)&&(c.worldMatrix.getTranslation(no),no.applyMatrix4(r.projectionViewMatrix),c.zDepth=no.z)}),a.sort(this.sortOpaque),l.sort(this.sortTransparent),u.sort(this.sortUI),s=a.concat(l,u)}return s}render({scene:e,camera:r,target:n=null,update:i=!0,sort:s=!0,frustumCull:a=!0,clear:l}){n===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(n),this.setViewport(n.width,n.height)),(l||this.autoClear&&l!==!1)&&(this.depth&&(!n||n.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!n||n.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),i&&e.updateMatrixWorld(),r&&r.updateMatrixWorld(),this.getRenderList({scene:e,camera:r,frustumCull:a,sort:s}).forEach(c=>{c.draw({camera:r})})}}function s_(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function a_(t,e,r,n,i){return t[0]=e,t[1]=r,t[2]=n,t[3]=i,t}function l_(t,e){let r=e[0],n=e[1],i=e[2],s=e[3],a=r*r+n*n+i*i+s*s;return a>0&&(a=1/Math.sqrt(a)),t[0]=r*a,t[1]=n*a,t[2]=i*a,t[3]=s*a,t}function o_(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]}function u_(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function c_(t,e,r){r=r*.5;let n=Math.sin(r);return t[0]=n*e[0],t[1]=n*e[1],t[2]=n*e[2],t[3]=Math.cos(r),t}function Zf(t,e,r){let n=e[0],i=e[1],s=e[2],a=e[3],l=r[0],u=r[1],c=r[2],d=r[3];return t[0]=n*d+a*l+i*c-s*u,t[1]=i*d+a*u+s*l-n*c,t[2]=s*d+a*c+n*u-i*l,t[3]=a*d-n*l-i*u-s*c,t}function d_(t,e,r){r*=.5;let n=e[0],i=e[1],s=e[2],a=e[3],l=Math.sin(r),u=Math.cos(r);return t[0]=n*u+a*l,t[1]=i*u+s*l,t[2]=s*u-i*l,t[3]=a*u-n*l,t}function f_(t,e,r){r*=.5;let n=e[0],i=e[1],s=e[2],a=e[3],l=Math.sin(r),u=Math.cos(r);return t[0]=n*u-s*l,t[1]=i*u+a*l,t[2]=s*u+n*l,t[3]=a*u-i*l,t}function h_(t,e,r){r*=.5;let n=e[0],i=e[1],s=e[2],a=e[3],l=Math.sin(r),u=Math.cos(r);return t[0]=n*u+i*l,t[1]=i*u-n*l,t[2]=s*u+a*l,t[3]=a*u-s*l,t}function p_(t,e,r,n){let i=e[0],s=e[1],a=e[2],l=e[3],u=r[0],c=r[1],d=r[2],f=r[3],h,m,x,p,_;return m=i*u+s*c+a*d+l*f,m<0&&(m=-m,u=-u,c=-c,d=-d,f=-f),1-m>1e-6?(h=Math.acos(m),x=Math.sin(h),p=Math.sin((1-n)*h)/x,_=Math.sin(n*h)/x):(p=1-n,_=n),t[0]=p*i+_*u,t[1]=p*s+_*c,t[2]=p*a+_*d,t[3]=p*l+_*f,t}function m_(t,e){let r=e[0],n=e[1],i=e[2],s=e[3],a=r*r+n*n+i*i+s*s,l=a?1/a:0;return t[0]=-r*l,t[1]=-n*l,t[2]=-i*l,t[3]=s*l,t}function g_(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function v_(t,e){let r=e[0]+e[4]+e[8],n;if(r>0)n=Math.sqrt(r+1),t[3]=.5*n,n=.5/n,t[0]=(e[5]-e[7])*n,t[1]=(e[6]-e[2])*n,t[2]=(e[1]-e[3])*n;else{let i=0;e[4]>e[0]&&(i=1),e[8]>e[i*3+i]&&(i=2);let s=(i+1)%3,a=(i+2)%3;n=Math.sqrt(e[i*3+i]-e[s*3+s]-e[a*3+a]+1),t[i]=.5*n,n=.5/n,t[3]=(e[s*3+a]-e[a*3+s])*n,t[s]=(e[s*3+i]+e[i*3+s])*n,t[a]=(e[a*3+i]+e[i*3+a])*n}return t}function x_(t,e,r="YXZ"){let n=Math.sin(e[0]*.5),i=Math.cos(e[0]*.5),s=Math.sin(e[1]*.5),a=Math.cos(e[1]*.5),l=Math.sin(e[2]*.5),u=Math.cos(e[2]*.5);return r==="XYZ"?(t[0]=n*a*u+i*s*l,t[1]=i*s*u-n*a*l,t[2]=i*a*l+n*s*u,t[3]=i*a*u-n*s*l):r==="YXZ"?(t[0]=n*a*u+i*s*l,t[1]=i*s*u-n*a*l,t[2]=i*a*l-n*s*u,t[3]=i*a*u+n*s*l):r==="ZXY"?(t[0]=n*a*u-i*s*l,t[1]=i*s*u+n*a*l,t[2]=i*a*l+n*s*u,t[3]=i*a*u-n*s*l):r==="ZYX"?(t[0]=n*a*u-i*s*l,t[1]=i*s*u+n*a*l,t[2]=i*a*l-n*s*u,t[3]=i*a*u+n*s*l):r==="YZX"?(t[0]=n*a*u+i*s*l,t[1]=i*s*u+n*a*l,t[2]=i*a*l-n*s*u,t[3]=i*a*u-n*s*l):r==="XZY"&&(t[0]=n*a*u-i*s*l,t[1]=i*s*u-n*a*l,t[2]=i*a*l+n*s*u,t[3]=i*a*u+n*s*l),t}const y_=s_,__=a_,w_=o_,k_=l_;class S_ extends Array{constructor(e=0,r=0,n=0,i=1){super(e,r,n,i),this.onChange=()=>{},this._target=this;const s=["0","1","2","3"];return new Proxy(this,{set(a,l){const u=Reflect.set(...arguments);return u&&s.includes(l)&&a.onChange(),u}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set w(e){this._target[3]=e,this.onChange()}identity(){return u_(this._target),this.onChange(),this}set(e,r,n,i){return e.length?this.copy(e):(__(this._target,e,r,n,i),this.onChange(),this)}rotateX(e){return d_(this._target,this._target,e),this.onChange(),this}rotateY(e){return f_(this._target,this._target,e),this.onChange(),this}rotateZ(e){return h_(this._target,this._target,e),this.onChange(),this}inverse(e=this._target){return m_(this._target,e),this.onChange(),this}conjugate(e=this._target){return g_(this._target,e),this.onChange(),this}copy(e){return y_(this._target,e),this.onChange(),this}normalize(e=this._target){return k_(this._target,e),this.onChange(),this}multiply(e,r){return r?Zf(this._target,e,r):Zf(this._target,this._target,e),this.onChange(),this}dot(e){return w_(this._target,e)}fromMatrix3(e){return v_(this._target,e),this.onChange(),this}fromEuler(e,r){return x_(this._target,e,e.order),r||this.onChange(),this}fromAxisAngle(e,r){return c_(this._target,e,r),this.onChange(),this}slerp(e,r){return p_(this._target,this._target,e,r),this.onChange(),this}fromArray(e,r=0){return this._target[0]=e[r],this._target[1]=e[r+1],this._target[2]=e[r+2],this._target[3]=e[r+3],this.onChange(),this}toArray(e=[],r=0){return e[r]=this[0],e[r+1]=this[1],e[r+2]=this[2],e[r+3]=this[3],e}}const j_=1e-6;function b_(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function N_(t,e,r,n,i,s,a,l,u,c,d,f,h,m,x,p,_){return t[0]=e,t[1]=r,t[2]=n,t[3]=i,t[4]=s,t[5]=a,t[6]=l,t[7]=u,t[8]=c,t[9]=d,t[10]=f,t[11]=h,t[12]=m,t[13]=x,t[14]=p,t[15]=_,t}function C_(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function E_(t,e){let r=e[0],n=e[1],i=e[2],s=e[3],a=e[4],l=e[5],u=e[6],c=e[7],d=e[8],f=e[9],h=e[10],m=e[11],x=e[12],p=e[13],_=e[14],v=e[15],g=r*l-n*a,y=r*u-i*a,w=r*c-s*a,k=n*u-i*l,j=n*c-s*l,S=i*c-s*u,N=d*p-f*x,C=d*_-h*x,E=d*v-m*x,M=f*_-h*p,L=f*v-m*p,F=h*v-m*_,R=g*F-y*L+w*M+k*E-j*C+S*N;return R?(R=1/R,t[0]=(l*F-u*L+c*M)*R,t[1]=(i*L-n*F-s*M)*R,t[2]=(p*S-_*j+v*k)*R,t[3]=(h*j-f*S-m*k)*R,t[4]=(u*E-a*F-c*C)*R,t[5]=(r*F-i*E+s*C)*R,t[6]=(_*w-x*S-v*y)*R,t[7]=(d*S-h*w+m*y)*R,t[8]=(a*L-l*E+c*N)*R,t[9]=(n*E-r*L-s*N)*R,t[10]=(x*j-p*w+v*g)*R,t[11]=(f*w-d*j-m*g)*R,t[12]=(l*C-a*M-u*N)*R,t[13]=(r*M-n*C+i*N)*R,t[14]=(p*y-x*k-_*g)*R,t[15]=(d*k-f*y+h*g)*R,t):null}function Qg(t){let e=t[0],r=t[1],n=t[2],i=t[3],s=t[4],a=t[5],l=t[6],u=t[7],c=t[8],d=t[9],f=t[10],h=t[11],m=t[12],x=t[13],p=t[14],_=t[15],v=e*a-r*s,g=e*l-n*s,y=e*u-i*s,w=r*l-n*a,k=r*u-i*a,j=n*u-i*l,S=c*x-d*m,N=c*p-f*m,C=c*_-h*m,E=d*p-f*x,M=d*_-h*x,L=f*_-h*p;return v*L-g*M+y*E+w*C-k*N+j*S}function Jf(t,e,r){let n=e[0],i=e[1],s=e[2],a=e[3],l=e[4],u=e[5],c=e[6],d=e[7],f=e[8],h=e[9],m=e[10],x=e[11],p=e[12],_=e[13],v=e[14],g=e[15],y=r[0],w=r[1],k=r[2],j=r[3];return t[0]=y*n+w*l+k*f+j*p,t[1]=y*i+w*u+k*h+j*_,t[2]=y*s+w*c+k*m+j*v,t[3]=y*a+w*d+k*x+j*g,y=r[4],w=r[5],k=r[6],j=r[7],t[4]=y*n+w*l+k*f+j*p,t[5]=y*i+w*u+k*h+j*_,t[6]=y*s+w*c+k*m+j*v,t[7]=y*a+w*d+k*x+j*g,y=r[8],w=r[9],k=r[10],j=r[11],t[8]=y*n+w*l+k*f+j*p,t[9]=y*i+w*u+k*h+j*_,t[10]=y*s+w*c+k*m+j*v,t[11]=y*a+w*d+k*x+j*g,y=r[12],w=r[13],k=r[14],j=r[15],t[12]=y*n+w*l+k*f+j*p,t[13]=y*i+w*u+k*h+j*_,t[14]=y*s+w*c+k*m+j*v,t[15]=y*a+w*d+k*x+j*g,t}function P_(t,e,r){let n=r[0],i=r[1],s=r[2],a,l,u,c,d,f,h,m,x,p,_,v;return e===t?(t[12]=e[0]*n+e[4]*i+e[8]*s+e[12],t[13]=e[1]*n+e[5]*i+e[9]*s+e[13],t[14]=e[2]*n+e[6]*i+e[10]*s+e[14],t[15]=e[3]*n+e[7]*i+e[11]*s+e[15]):(a=e[0],l=e[1],u=e[2],c=e[3],d=e[4],f=e[5],h=e[6],m=e[7],x=e[8],p=e[9],_=e[10],v=e[11],t[0]=a,t[1]=l,t[2]=u,t[3]=c,t[4]=d,t[5]=f,t[6]=h,t[7]=m,t[8]=x,t[9]=p,t[10]=_,t[11]=v,t[12]=a*n+d*i+x*s+e[12],t[13]=l*n+f*i+p*s+e[13],t[14]=u*n+h*i+_*s+e[14],t[15]=c*n+m*i+v*s+e[15]),t}function T_(t,e,r){let n=r[0],i=r[1],s=r[2];return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*i,t[5]=e[5]*i,t[6]=e[6]*i,t[7]=e[7]*i,t[8]=e[8]*s,t[9]=e[9]*s,t[10]=e[10]*s,t[11]=e[11]*s,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function z_(t,e,r,n){let i=n[0],s=n[1],a=n[2],l=Math.hypot(i,s,a),u,c,d,f,h,m,x,p,_,v,g,y,w,k,j,S,N,C,E,M,L,F,R,H;return Math.abs(l)<j_?null:(l=1/l,i*=l,s*=l,a*=l,u=Math.sin(r),c=Math.cos(r),d=1-c,f=e[0],h=e[1],m=e[2],x=e[3],p=e[4],_=e[5],v=e[6],g=e[7],y=e[8],w=e[9],k=e[10],j=e[11],S=i*i*d+c,N=s*i*d+a*u,C=a*i*d-s*u,E=i*s*d-a*u,M=s*s*d+c,L=a*s*d+i*u,F=i*a*d+s*u,R=s*a*d-i*u,H=a*a*d+c,t[0]=f*S+p*N+y*C,t[1]=h*S+_*N+w*C,t[2]=m*S+v*N+k*C,t[3]=x*S+g*N+j*C,t[4]=f*E+p*M+y*L,t[5]=h*E+_*M+w*L,t[6]=m*E+v*M+k*L,t[7]=x*E+g*M+j*L,t[8]=f*F+p*R+y*H,t[9]=h*F+_*R+w*H,t[10]=m*F+v*R+k*H,t[11]=x*F+g*R+j*H,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}function M_(t,e){return t[0]=e[12],t[1]=e[13],t[2]=e[14],t}function Gg(t,e){let r=e[0],n=e[1],i=e[2],s=e[4],a=e[5],l=e[6],u=e[8],c=e[9],d=e[10];return t[0]=Math.hypot(r,n,i),t[1]=Math.hypot(s,a,l),t[2]=Math.hypot(u,c,d),t}function L_(t){let e=t[0],r=t[1],n=t[2],i=t[4],s=t[5],a=t[6],l=t[8],u=t[9],c=t[10];const d=e*e+r*r+n*n,f=i*i+s*s+a*a,h=l*l+u*u+c*c;return Math.sqrt(Math.max(d,f,h))}const Xg=function(){const t=[1,1,1];return function(e,r){let n=t;Gg(n,r);let i=1/n[0],s=1/n[1],a=1/n[2],l=r[0]*i,u=r[1]*s,c=r[2]*a,d=r[4]*i,f=r[5]*s,h=r[6]*a,m=r[8]*i,x=r[9]*s,p=r[10]*a,_=l+f+p,v=0;return _>0?(v=Math.sqrt(_+1)*2,e[3]=.25*v,e[0]=(h-x)/v,e[1]=(m-c)/v,e[2]=(u-d)/v):l>f&&l>p?(v=Math.sqrt(1+l-f-p)*2,e[3]=(h-x)/v,e[0]=.25*v,e[1]=(u+d)/v,e[2]=(m+c)/v):f>p?(v=Math.sqrt(1+f-l-p)*2,e[3]=(m-c)/v,e[0]=(u+d)/v,e[1]=.25*v,e[2]=(h+x)/v):(v=Math.sqrt(1+p-l-f)*2,e[3]=(u-d)/v,e[0]=(m+c)/v,e[1]=(h+x)/v,e[2]=.25*v),e}}();function R_(t,e,r,n){let i=Bi([t[0],t[1],t[2]]);const s=Bi([t[4],t[5],t[6]]),a=Bi([t[8],t[9],t[10]]);Qg(t)<0&&(i=-i),r[0]=t[12],r[1]=t[13],r[2]=t[14];const u=t.slice(),c=1/i,d=1/s,f=1/a;u[0]*=c,u[1]*=c,u[2]*=c,u[4]*=d,u[5]*=d,u[6]*=d,u[8]*=f,u[9]*=f,u[10]*=f,Xg(e,u),n[0]=i,n[1]=s,n[2]=a}function O_(t,e,r,n){const i=t,s=e[0],a=e[1],l=e[2],u=e[3],c=s+s,d=a+a,f=l+l,h=s*c,m=s*d,x=s*f,p=a*d,_=a*f,v=l*f,g=u*c,y=u*d,w=u*f,k=n[0],j=n[1],S=n[2];return i[0]=(1-(p+v))*k,i[1]=(m+w)*k,i[2]=(x-y)*k,i[3]=0,i[4]=(m-w)*j,i[5]=(1-(h+v))*j,i[6]=(_+g)*j,i[7]=0,i[8]=(x+y)*S,i[9]=(_-g)*S,i[10]=(1-(h+p))*S,i[11]=0,i[12]=r[0],i[13]=r[1],i[14]=r[2],i[15]=1,i}function A_(t,e){let r=e[0],n=e[1],i=e[2],s=e[3],a=r+r,l=n+n,u=i+i,c=r*a,d=n*a,f=n*l,h=i*a,m=i*l,x=i*u,p=s*a,_=s*l,v=s*u;return t[0]=1-f-x,t[1]=d+v,t[2]=h-_,t[3]=0,t[4]=d-v,t[5]=1-c-x,t[6]=m+p,t[7]=0,t[8]=h+_,t[9]=m-p,t[10]=1-c-f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function F_(t,e,r,n,i){let s=1/Math.tan(e/2),a=1/(n-i);return t[0]=s/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=s,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(i+n)*a,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*i*n*a,t[15]=0,t}function I_(t,e,r,n,i,s,a){let l=1/(e-r),u=1/(n-i),c=1/(s-a);return t[0]=-2*l,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*u,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*c,t[11]=0,t[12]=(e+r)*l,t[13]=(i+n)*u,t[14]=(a+s)*c,t[15]=1,t}function D_(t,e,r,n){let i=e[0],s=e[1],a=e[2],l=n[0],u=n[1],c=n[2],d=i-r[0],f=s-r[1],h=a-r[2],m=d*d+f*f+h*h;m===0?h=1:(m=1/Math.sqrt(m),d*=m,f*=m,h*=m);let x=u*h-c*f,p=c*d-l*h,_=l*f-u*d;return m=x*x+p*p+_*_,m===0&&(c?l+=1e-6:u?c+=1e-6:u+=1e-6,x=u*h-c*f,p=c*d-l*h,_=l*f-u*d,m=x*x+p*p+_*_),m=1/Math.sqrt(m),x*=m,p*=m,_*=m,t[0]=x,t[1]=p,t[2]=_,t[3]=0,t[4]=f*_-h*p,t[5]=h*x-d*_,t[6]=d*p-f*x,t[7]=0,t[8]=d,t[9]=f,t[10]=h,t[11]=0,t[12]=i,t[13]=s,t[14]=a,t[15]=1,t}function eh(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t[4]=e[4]+r[4],t[5]=e[5]+r[5],t[6]=e[6]+r[6],t[7]=e[7]+r[7],t[8]=e[8]+r[8],t[9]=e[9]+r[9],t[10]=e[10]+r[10],t[11]=e[11]+r[11],t[12]=e[12]+r[12],t[13]=e[13]+r[13],t[14]=e[14]+r[14],t[15]=e[15]+r[15],t}function th(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t[3]=e[3]-r[3],t[4]=e[4]-r[4],t[5]=e[5]-r[5],t[6]=e[6]-r[6],t[7]=e[7]-r[7],t[8]=e[8]-r[8],t[9]=e[9]-r[9],t[10]=e[10]-r[10],t[11]=e[11]-r[11],t[12]=e[12]-r[12],t[13]=e[13]-r[13],t[14]=e[14]-r[14],t[15]=e[15]-r[15],t}function B_(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*r,t[9]=e[9]*r,t[10]=e[10]*r,t[11]=e[11]*r,t[12]=e[12]*r,t[13]=e[13]*r,t[14]=e[14]*r,t[15]=e[15]*r,t}class Va extends Array{constructor(e=1,r=0,n=0,i=0,s=0,a=1,l=0,u=0,c=0,d=0,f=1,h=0,m=0,x=0,p=0,_=1){return super(e,r,n,i,s,a,l,u,c,d,f,h,m,x,p,_),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(e){this[12]=e}set y(e){this[13]=e}set z(e){this[14]=e}set w(e){this[15]=e}set(e,r,n,i,s,a,l,u,c,d,f,h,m,x,p,_){return e.length?this.copy(e):(N_(this,e,r,n,i,s,a,l,u,c,d,f,h,m,x,p,_),this)}translate(e,r=this){return P_(this,r,e),this}rotate(e,r,n=this){return z_(this,n,e,r),this}scale(e,r=this){return T_(this,r,typeof e=="number"?[e,e,e]:e),this}add(e,r){return r?eh(this,e,r):eh(this,this,e),this}sub(e,r){return r?th(this,e,r):th(this,this,e),this}multiply(e,r){return e.length?r?Jf(this,e,r):Jf(this,this,e):B_(this,this,e),this}identity(){return C_(this),this}copy(e){return b_(this,e),this}fromPerspective({fov:e,aspect:r,near:n,far:i}={}){return F_(this,e,r,n,i),this}fromOrthogonal({left:e,right:r,bottom:n,top:i,near:s,far:a}){return I_(this,e,r,n,i,s,a),this}fromQuaternion(e){return A_(this,e),this}setPosition(e){return this.x=e[0],this.y=e[1],this.z=e[2],this}inverse(e=this){return E_(this,e),this}compose(e,r,n){return O_(this,e,r,n),this}decompose(e,r,n){return R_(this,e,r,n),this}getRotation(e){return Xg(e,this),this}getTranslation(e){return M_(e,this),this}getScaling(e){return Gg(e,this),this}getMaxScaleOnAxis(){return L_(this)}lookAt(e,r,n){return D_(this,e,r,n),this}determinant(){return Qg(this)}fromArray(e,r=0){return this[0]=e[r],this[1]=e[r+1],this[2]=e[r+2],this[3]=e[r+3],this[4]=e[r+4],this[5]=e[r+5],this[6]=e[r+6],this[7]=e[r+7],this[8]=e[r+8],this[9]=e[r+9],this[10]=e[r+10],this[11]=e[r+11],this[12]=e[r+12],this[13]=e[r+13],this[14]=e[r+14],this[15]=e[r+15],this}toArray(e=[],r=0){return e[r]=this[0],e[r+1]=this[1],e[r+2]=this[2],e[r+3]=this[3],e[r+4]=this[4],e[r+5]=this[5],e[r+6]=this[6],e[r+7]=this[7],e[r+8]=this[8],e[r+9]=this[9],e[r+10]=this[10],e[r+11]=this[11],e[r+12]=this[12],e[r+13]=this[13],e[r+14]=this[14],e[r+15]=this[15],e}}function U_(t,e,r="YXZ"){return r==="XYZ"?(t[1]=Math.asin(Math.min(Math.max(e[8],-1),1)),Math.abs(e[8])<.99999?(t[0]=Math.atan2(-e[9],e[10]),t[2]=Math.atan2(-e[4],e[0])):(t[0]=Math.atan2(e[6],e[5]),t[2]=0)):r==="YXZ"?(t[0]=Math.asin(-Math.min(Math.max(e[9],-1),1)),Math.abs(e[9])<.99999?(t[1]=Math.atan2(e[8],e[10]),t[2]=Math.atan2(e[1],e[5])):(t[1]=Math.atan2(-e[2],e[0]),t[2]=0)):r==="ZXY"?(t[0]=Math.asin(Math.min(Math.max(e[6],-1),1)),Math.abs(e[6])<.99999?(t[1]=Math.atan2(-e[2],e[10]),t[2]=Math.atan2(-e[4],e[5])):(t[1]=0,t[2]=Math.atan2(e[1],e[0]))):r==="ZYX"?(t[1]=Math.asin(-Math.min(Math.max(e[2],-1),1)),Math.abs(e[2])<.99999?(t[0]=Math.atan2(e[6],e[10]),t[2]=Math.atan2(e[1],e[0])):(t[0]=0,t[2]=Math.atan2(-e[4],e[5]))):r==="YZX"?(t[2]=Math.asin(Math.min(Math.max(e[1],-1),1)),Math.abs(e[1])<.99999?(t[0]=Math.atan2(-e[9],e[5]),t[1]=Math.atan2(-e[2],e[0])):(t[0]=0,t[1]=Math.atan2(e[8],e[10]))):r==="XZY"&&(t[2]=Math.asin(-Math.min(Math.max(e[4],-1),1)),Math.abs(e[4])<.99999?(t[0]=Math.atan2(e[6],e[5]),t[1]=Math.atan2(e[8],e[0])):(t[0]=Math.atan2(-e[9],e[10]),t[1]=0)),t}const rh=new Va;class $_ extends Array{constructor(e=0,r=e,n=e,i="YXZ"){super(e,r,n),this.order=i,this.onChange=()=>{},this._target=this;const s=["0","1","2"];return new Proxy(this,{set(a,l){const u=Reflect.set(...arguments);return u&&s.includes(l)&&a.onChange(),u}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set(e,r=e,n=e){return e.length?this.copy(e):(this._target[0]=e,this._target[1]=r,this._target[2]=n,this.onChange(),this)}copy(e){return this._target[0]=e[0],this._target[1]=e[1],this._target[2]=e[2],this.onChange(),this}reorder(e){return this._target.order=e,this.onChange(),this}fromRotationMatrix(e,r=this.order){return U_(this._target,e,r),this.onChange(),this}fromQuaternion(e,r=this.order,n){return rh.fromQuaternion(e),this._target.fromRotationMatrix(rh,r),n||this.onChange(),this}fromArray(e,r=0){return this._target[0]=e[r],this._target[1]=e[r+1],this._target[2]=e[r+2],this}toArray(e=[],r=0){return e[r]=this[0],e[r+1]=this[1],e[r+2]=this[2],e}}class W_{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new Va,this.worldMatrix=new Va,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new zt,this.quaternion=new S_,this.scale=new zt(1),this.rotation=new $_,this.up=new zt(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(e,r=!0){this.parent&&e!==this.parent&&this.parent.removeChild(this,!1),this.parent=e,r&&e&&e.addChild(this,!1)}addChild(e,r=!0){~this.children.indexOf(e)||this.children.push(e),r&&e.setParent(this,!1)}removeChild(e,r=!0){~this.children.indexOf(e)&&this.children.splice(this.children.indexOf(e),1),r&&e.setParent(null,!1)}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||e)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,e=!0);for(let r=0,n=this.children.length;r<n;r++)this.children[r].updateMatrixWorld(e)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(e){if(!e(this))for(let r=0,n=this.children.length;r<n;r++)this.children[r].traverse(e)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(e,r=!1){r?this.matrix.lookAt(this.position,e,this.up):this.matrix.lookAt(e,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}}function V_(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t}function H_(t,e){let r=e[0],n=e[1],i=e[2],s=e[3],a=r+r,l=n+n,u=i+i,c=r*a,d=n*a,f=n*l,h=i*a,m=i*l,x=i*u,p=s*a,_=s*l,v=s*u;return t[0]=1-f-x,t[3]=d-v,t[6]=h+_,t[1]=d+v,t[4]=1-c-x,t[7]=m-p,t[2]=h-_,t[5]=m+p,t[8]=1-c-f,t}function q_(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function Y_(t,e,r,n,i,s,a,l,u,c){return t[0]=e,t[1]=r,t[2]=n,t[3]=i,t[4]=s,t[5]=a,t[6]=l,t[7]=u,t[8]=c,t}function Q_(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function G_(t,e){let r=e[0],n=e[1],i=e[2],s=e[3],a=e[4],l=e[5],u=e[6],c=e[7],d=e[8],f=d*a-l*c,h=-d*s+l*u,m=c*s-a*u,x=r*f+n*h+i*m;return x?(x=1/x,t[0]=f*x,t[1]=(-d*n+i*c)*x,t[2]=(l*n-i*a)*x,t[3]=h*x,t[4]=(d*r-i*u)*x,t[5]=(-l*r+i*s)*x,t[6]=m*x,t[7]=(-c*r+n*u)*x,t[8]=(a*r-n*s)*x,t):null}function nh(t,e,r){let n=e[0],i=e[1],s=e[2],a=e[3],l=e[4],u=e[5],c=e[6],d=e[7],f=e[8],h=r[0],m=r[1],x=r[2],p=r[3],_=r[4],v=r[5],g=r[6],y=r[7],w=r[8];return t[0]=h*n+m*a+x*c,t[1]=h*i+m*l+x*d,t[2]=h*s+m*u+x*f,t[3]=p*n+_*a+v*c,t[4]=p*i+_*l+v*d,t[5]=p*s+_*u+v*f,t[6]=g*n+y*a+w*c,t[7]=g*i+y*l+w*d,t[8]=g*s+y*u+w*f,t}function X_(t,e,r){let n=e[0],i=e[1],s=e[2],a=e[3],l=e[4],u=e[5],c=e[6],d=e[7],f=e[8],h=r[0],m=r[1];return t[0]=n,t[1]=i,t[2]=s,t[3]=a,t[4]=l,t[5]=u,t[6]=h*n+m*a+c,t[7]=h*i+m*l+d,t[8]=h*s+m*u+f,t}function K_(t,e,r){let n=e[0],i=e[1],s=e[2],a=e[3],l=e[4],u=e[5],c=e[6],d=e[7],f=e[8],h=Math.sin(r),m=Math.cos(r);return t[0]=m*n+h*a,t[1]=m*i+h*l,t[2]=m*s+h*u,t[3]=m*a-h*n,t[4]=m*l-h*i,t[5]=m*u-h*s,t[6]=c,t[7]=d,t[8]=f,t}function Z_(t,e,r){let n=r[0],i=r[1];return t[0]=n*e[0],t[1]=n*e[1],t[2]=n*e[2],t[3]=i*e[3],t[4]=i*e[4],t[5]=i*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function J_(t,e){let r=e[0],n=e[1],i=e[2],s=e[3],a=e[4],l=e[5],u=e[6],c=e[7],d=e[8],f=e[9],h=e[10],m=e[11],x=e[12],p=e[13],_=e[14],v=e[15],g=r*l-n*a,y=r*u-i*a,w=r*c-s*a,k=n*u-i*l,j=n*c-s*l,S=i*c-s*u,N=d*p-f*x,C=d*_-h*x,E=d*v-m*x,M=f*_-h*p,L=f*v-m*p,F=h*v-m*_,R=g*F-y*L+w*M+k*E-j*C+S*N;return R?(R=1/R,t[0]=(l*F-u*L+c*M)*R,t[1]=(u*E-a*F-c*C)*R,t[2]=(a*L-l*E+c*N)*R,t[3]=(i*L-n*F-s*M)*R,t[4]=(r*F-i*E+s*C)*R,t[5]=(n*E-r*L-s*N)*R,t[6]=(p*S-_*j+v*k)*R,t[7]=(_*w-x*S-v*y)*R,t[8]=(x*j-p*w+v*g)*R,t):null}class ew extends Array{constructor(e=1,r=0,n=0,i=0,s=1,a=0,l=0,u=0,c=1){return super(e,r,n,i,s,a,l,u,c),this}set(e,r,n,i,s,a,l,u,c){return e.length?this.copy(e):(Y_(this,e,r,n,i,s,a,l,u,c),this)}translate(e,r=this){return X_(this,r,e),this}rotate(e,r=this){return K_(this,r,e),this}scale(e,r=this){return Z_(this,r,e),this}multiply(e,r){return r?nh(this,e,r):nh(this,this,e),this}identity(){return Q_(this),this}copy(e){return q_(this,e),this}fromMatrix4(e){return V_(this,e),this}fromQuaternion(e){return H_(this,e),this}fromBasis(e,r,n){return this.set(e[0],e[1],e[2],r[0],r[1],r[2],n[0],n[1],n[2]),this}inverse(e=this){return G_(this,e),this}getNormalMatrix(e){return J_(this,e),this}}let tw=0;class rw extends W_{constructor(e,{geometry:r,program:n,mode:i=e.TRIANGLES,frustumCulled:s=!0,renderOrder:a=0}={}){super(),e.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=e,this.id=tw++,this.geometry=r,this.program=n,this.mode=i,this.frustumCulled=s,this.renderOrder=a,this.modelViewMatrix=new Va,this.normalMatrix=new ew,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(e){return this.beforeRenderCallbacks.push(e),this}onAfterRender(e){return this.afterRenderCallbacks.push(e),this}draw({camera:e}={}){e&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=e.projectionMatrix,this.program.uniforms.cameraPosition.value=e.worldPosition,this.program.uniforms.viewMatrix.value=e.viewMatrix,this.modelViewMatrix.multiply(e.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(n=>n&&n({mesh:this,camera:e}));let r=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:r}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(n=>n&&n({mesh:this,camera:e}))}}const ih={black:"#000000",white:"#ffffff",red:"#ff0000",green:"#00ff00",blue:"#0000ff",fuchsia:"#ff00ff",cyan:"#00ffff",yellow:"#ffff00",orange:"#ff8000"};function sh(t){t.length===4&&(t=t[0]+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]);const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e||console.warn(`Unable to convert hex string ${t} to rgb values`),[parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255]}function nw(t){return t=parseInt(t),[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}function ah(t){return t===void 0?[0,0,0]:arguments.length===3?arguments:isNaN(t)?t[0]==="#"?sh(t):ih[t.toLowerCase()]?sh(ih[t.toLowerCase()]):(console.warn("Color format not recognised"),[0,0,0]):nw(t)}class lh extends Array{constructor(e){return Array.isArray(e)?super(...e):super(...ah(...arguments))}get r(){return this[0]}get g(){return this[1]}get b(){return this[2]}set r(e){this[0]=e}set g(e){this[1]=e}set b(e){this[2]=e}set(e){return Array.isArray(e)?this.copy(e):this.copy(ah(...arguments))}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this}}class iw extends K2{constructor(e,{attributes:r={}}={}){Object.assign(r,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(e,r)}}const Vs=20,sw=`#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,aw=`#version 300 es
precision highp float;

uniform vec2 uCenter;
uniform vec2 uHalfSize;
uniform float uRadius;
uniform float uAngle;
uniform float uPx;
uniform vec3 uLineColor;
uniform vec3 uBaseColor;
uniform float uIntensity;
uniform float uShineSize;
uniform float uShineFade;
uniform float uThickness;
uniform float uBaseWidth;

out vec4 fragColor;

float sdRoundedRect(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

float shapeSDF(vec2 p) { return sdRoundedRect(p, uHalfSize, uRadius); }

float gaussianLine(float d, float sigma) {
  float x = d / (sigma + 1e-6);
  float k = mix(1.0, 1.6, smoothstep(0.0, 1.5, x));
  return exp(-k * x * x);
}

void main() {
  vec2 p = gl_FragCoord.xy - uCenter;
  float d = shapeSDF(p);
  vec2 L = vec2(cos(uAngle), sin(uAngle));

  // Dark base stroke hugging the edge for a sense of thickness
  float base = (1.0 - smoothstep(0.0, uBaseWidth, abs(d))) * 0.45;

  // Symmetric specular: the edges facing toward/away from the light both
  // catch a streak. The angular window (size + fade) is measured with an
  // elliptical normal so it varies continuously along straight edges.
  vec2 nEll = normalize(p / (uHalfSize * uHalfSize) + 1e-6);
  float phi = acos(clamp(abs(dot(nEll, L)), 0.0, 1.0));
  float rim = 1.0 - smoothstep(uShineSize - uShineFade, uShineSize + uShineFade + 1e-4, phi);
  float line = gaussianLine(d, uThickness);
  float edgeClamp = 1.0 - smoothstep(0.5 * uPx, 3.0 * uPx, abs(d));
  float hi = line * rim * edgeClamp * uIntensity;

  vec3 col = uBaseColor * base + uLineColor * hi;
  float a = clamp(base + hi, 0.0, 1.0);
  fragColor = vec4(col, a);
}
`,Hs=({children:t="Get Started",size:e="lg",radius:r=18,tint:n="#ffffff",tintOpacity:i=0,blur:s=0,textColor:a="#f5f5f5",lineColor:l="#ffffff",baseColor:u="#525252",intensity:c=1,shineSize:d=10,shineFade:f=40,thickness:h=1,speed:m=.35,followMouse:x=!0,proximity:p=250,autoAnimate:_=!1,disabled:v=!1,onClick:g,className:y="",type:w="button"})=>{const k=b.useRef(null),j=b.useRef(null),S=b.useRef({});return S.current={radius:r,lineColor:l,baseColor:u,intensity:c,shineSize:d,shineFade:f,thickness:h,speed:m,followMouse:x,proximity:p,autoAnimate:_},b.useEffect(()=>{const N=k.current,C=j.current;if(!N||!C)return;const E=window.devicePixelRatio||1,M=new i_({alpha:!0,premultipliedAlpha:!0,antialias:!0,dpr:E}),L=M.gl;L.clearColor(0,0,0,0),L.enable(L.BLEND),L.blendFunc(L.ONE,L.ONE_MINUS_SRC_ALPHA);const F=new iw(L);F.attributes.uv&&delete F.attributes.uv;const R=new J2(L,{vertex:sw,fragment:aw,uniforms:{uCenter:{value:[0,0]},uHalfSize:{value:[1,1]},uRadius:{value:0},uAngle:{value:2.4},uPx:{value:E},uLineColor:{value:[1,1,1]},uBaseColor:{value:[.32,.32,.32]},uIntensity:{value:1},uShineSize:{value:.17},uShineFade:{value:.7},uThickness:{value:1},uBaseWidth:{value:E}}}),H=new rw(L,{geometry:F,program:R});C.appendChild(L.canvas);const q={w:1,h:1},z=()=>{const fe=N.getBoundingClientRect(),G=fe.width,ie=fe.height;q.w=G,q.h=ie,M.setSize(G+Vs*2,ie+Vs*2),R.uniforms.uCenter.value=[(Vs+G/2)*E,(Vs+ie/2)*E],R.uniforms.uHalfSize.value=[G/2*E,ie/2*E]},P=new ResizeObserver(z);P.observe(N),z();let O=null,I=0;const B=fe=>{const G=N.getBoundingClientRect(),ie=G.left+G.width/2,or=G.top+G.height/2,fi=Math.max(G.left-fe.clientX,0,fe.clientX-G.right),gl=Math.max(G.top-fe.clientY,0,fe.clientY-G.bottom),bs=Math.hypot(fi,gl);if(bs===0){const Kg=(fe.clientX-ie)/(G.width/2),Zg=(or-fe.clientY)/(G.height/2);O=Math.atan2(2/G.height,-2/G.width)+Kg*.3+Zg*.15}else O=Math.atan2(or-fe.clientY,fe.clientX-ie);const vl=Math.max(0,1-bs/Math.max(S.current.proximity,1));I=vl*vl*(3-2*vl)};window.addEventListener("pointermove",B);let U=2.4,mt=2.4,Z=0,me=performance.now(),ze=0;const et=new lh,$r=new lh,js=fe=>{ze=requestAnimationFrame(js);const G=Math.min((fe-me)/1e3,.05);me=fe;const ie=S.current;mt+=ie.speed*G;const gl=((ie.followMouse&&O!=null&&(!ie.autoAnimate||I>0)?O:mt)-U+Math.PI*3)%(Math.PI*2)-Math.PI;U+=gl*(1-Math.exp(-G*7));const bs=ie.autoAnimate?1:I;Z+=(bs-Z)*(1-Math.exp(-G*8)),et.set(ie.lineColor),$r.set(ie.baseColor),R.uniforms.uAngle.value=U,R.uniforms.uRadius.value=Math.min(ie.radius,Math.min(q.w,q.h)/2)*E,R.uniforms.uLineColor.value=[et.r,et.g,et.b],R.uniforms.uBaseColor.value=[$r.r,$r.g,$r.b],R.uniforms.uIntensity.value=ie.intensity*Z,R.uniforms.uShineSize.value=ie.shineSize*Math.PI/180,R.uniforms.uShineFade.value=ie.shineFade*Math.PI/180,R.uniforms.uThickness.value=ie.thickness*E,M.render({scene:H})};return ze=requestAnimationFrame(js),()=>{var fe;cancelAnimationFrame(ze),P.disconnect(),window.removeEventListener("pointermove",B),L.canvas.parentNode===C&&C.removeChild(L.canvas),(fe=L.getExtension("WEBGL_lose_context"))==null||fe.loseContext()}},[]),o.jsxs("button",{ref:k,type:w,disabled:v,onClick:g,className:`specular-button specular-button--${e}${y?` ${y}`:""}`,style:{"--sb-radius":`${r}px`,"--sb-tint":n,"--sb-tint-opacity":i,"--sb-blur":`${s}px`,"--sb-text-color":a},children:[o.jsx("span",{ref:j,className:"specular-button__fx","aria-hidden":"true"}),o.jsx("span",{className:"specular-button__label",children:t})]})},lw=()=>o.jsxs("div",{className:"landing-page",id:"home",children:[o.jsx(M2,{}),o.jsx("section",{className:"hero-section",children:o.jsxs("div",{className:"container hero-container",children:[o.jsxs("div",{className:"hero-badge",children:[o.jsx(Qx,{className:"hero-badge-icon"}),o.jsx("span",{children:"The Next Generation Social Experience"})]}),o.jsxs("h1",{className:"hero-title",children:["Connect, Share & Discover ",o.jsx("br",{}),o.jsx("span",{className:"hero-title-gradient",children:"Without Boundaries"})]}),o.jsx("p",{className:"hero-description",children:"Socialla empowers creators and communities to express themselves freely with stunning design, rich stories, dynamic post interactions, and total privacy control."}),o.jsxs("div",{className:"hero-ctas",children:[o.jsx(ve,{to:"/register",children:o.jsxs(Hs,{size:"lg",radius:24,tint:"#6366f1",tintOpacity:1,blur:0,textColor:"#ffffff",lineColor:"#a5b4fc",baseColor:"#4f46e5",intensity:1.5,shineSize:12,shineFade:45,followMouse:!0,autoAnimate:!1,proximity:200,children:["Create Free Account ",o.jsx(os,{})]})}),o.jsx(ve,{to:"/home",children:o.jsx(Hs,{size:"lg",radius:24,tint:"#334155",tintOpacity:.6,blur:8,textColor:"#e2e8f0",lineColor:"#94a3b8",baseColor:"#475569",intensity:.8,shineSize:14,shineFade:40,followMouse:!0,autoAnimate:!1,proximity:200,children:"Explore Socialla"})})]}),o.jsxs("div",{className:"hero-mockup-wrapper",children:[o.jsx("div",{className:"mockup-bg-glow"}),o.jsxs("div",{className:"glass-card mockup-main-card",children:[o.jsxs("div",{className:"mockup-header",children:[o.jsx("div",{className:"avatar avatar-md",children:o.jsx("img",{src:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",alt:"Sarah"})}),o.jsxs("div",{className:"mockup-user",children:[o.jsxs("span",{className:"mockup-name",children:["Sarah Jenkins ",o.jsx(Qt,{className:"verified-badge"})]}),o.jsx("span",{className:"mockup-handle",children:"@sarah_design • Just now"})]})]}),o.jsx("p",{className:"mockup-text",children:"Exploring glassmorphism overlays and vibrant HSL color spaces in Socialla 🚀 Modern UI design feels so smooth!"}),o.jsx("div",{className:"mockup-img-wrap",children:o.jsx("img",{src:"https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1000&q=80",alt:"Design preview"})}),o.jsxs("div",{className:"mockup-actions",children:[o.jsxs("div",{className:"mockup-action-item text-danger",children:[o.jsx(Zn,{})," 142"]}),o.jsxs("div",{className:"mockup-action-item text-primary",children:[o.jsx(ui,{})," 28"]}),o.jsxs("div",{className:"mockup-action-item text-success",children:[o.jsx(ls,{})," Saved"]})]})]}),o.jsxs("div",{className:"glass-card floating-card float-left",children:[o.jsx("div",{className:"float-icon-bg bg-primary",children:o.jsx(kf,{})}),o.jsxs("div",{className:"float-text",children:[o.jsx("strong",{children:"Instant Engagement"}),o.jsx("span",{children:"Real-time interactions"})]})]}),o.jsxs("div",{className:"glass-card floating-card float-right",children:[o.jsx("div",{className:"float-icon-bg bg-accent",children:o.jsx(du,{})}),o.jsxs("div",{className:"float-text",children:[o.jsx("strong",{children:"10,000+ Creators"}),o.jsx("span",{children:"Global network"})]})]})]})]})}),o.jsx("section",{className:"features-section",id:"features",children:o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"badge badge-primary",children:"Why Socialla"}),o.jsx("h2",{children:"Designed for Modern Connectivity"}),o.jsx("p",{children:"Everything you need in a modern social media platform, meticulously built for speed and aesthetics."})]}),o.jsxs("div",{className:"glass-icons-feature-section",children:[o.jsx(L2,{items:[{icon:o.jsx(Aa,{}),color:"purple",label:"Share"},{icon:o.jsx(du,{}),color:"blue",label:"Connect"},{icon:o.jsx(Rc,{}),color:"indigo",label:"Discover"},{icon:o.jsx(Zn,{}),color:"red",label:"Engage"},{icon:o.jsx(ls,{}),color:"orange",label:"Save"},{icon:o.jsx(Um,{}),color:"green",label:"Privacy"},{icon:o.jsx(kf,{}),color:"indigo",label:"Realtime"},{icon:o.jsx(dl,{}),color:"blue",label:"Trending"},{icon:o.jsx(Oa,{}),color:"purple",label:"Secure"}],className:"features-glass-icons"}),o.jsxs("div",{className:"features-text-grid",children:[o.jsxs("div",{className:"feature-text-item",children:[o.jsx("h3",{children:"Share Your Moments"}),o.jsx("p",{children:"Post photos, stories, and rich media with customizable tags and live feed updates."})]}),o.jsxs("div",{className:"feature-text-item",children:[o.jsx("h3",{children:"Connect With People"}),o.jsx("p",{children:"Follow creators, grow your community, and discover vibrant social circles."})]}),o.jsxs("div",{className:"feature-text-item",children:[o.jsx("h3",{children:"Engage & React"}),o.jsx("p",{children:"Like, comment, bookmark, and share content with animated, fluid interactions."})]})]})]})]})}),o.jsx("section",{className:"preview-section",id:"preview",children:o.jsxs("div",{className:"container preview-container",children:[o.jsxs("div",{className:"preview-content",children:[o.jsx("span",{className:"badge badge-success",children:"Interactive Showcase"}),o.jsx("h2",{children:"Experience the Future Social Feed Today"}),o.jsx("p",{children:"From immersive full-screen story viewers to dark/light theme switching, Socialla offers a flawless user interface tailored for desktop, tablet, and mobile devices."}),o.jsxs("ul",{className:"preview-checklist",children:[o.jsxs("li",{children:[o.jsx(Qt,{className:"check-icon"})," Fluid story highlights with auto-progress controls"]}),o.jsxs("li",{children:[o.jsx(Qt,{className:"check-icon"})," Heart-pop animated like interactions"]}),o.jsxs("li",{children:[o.jsx(Qt,{className:"check-icon"})," Full dark and light theme switching"]}),o.jsxs("li",{children:[o.jsx(Qt,{className:"check-icon"})," Mobile-first responsive layout design"]})]}),o.jsxs(ve,{to:"/register",className:"btn btn-primary",children:["Join Socialla Today ",o.jsx(os,{})]})]}),o.jsx("div",{className:"preview-mockup-wrapper",children:o.jsxs("div",{className:"glass-card preview-card",children:[o.jsxs("div",{className:"story-strip-demo",children:[o.jsxs("div",{className:"story-demo-item",children:[o.jsx("img",{src:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",alt:"Alex"}),o.jsx("span",{children:"Alex"})]}),o.jsxs("div",{className:"story-demo-item active",children:[o.jsx("img",{src:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",alt:"Sarah"}),o.jsx("span",{children:"Sarah"})]}),o.jsxs("div",{className:"story-demo-item",children:[o.jsx("img",{src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",alt:"Marcus"}),o.jsx("span",{children:"Marcus"})]})]}),o.jsxs("div",{className:"post-demo-box",children:[o.jsxs("div",{className:"post-demo-header",children:[o.jsx("div",{className:"avatar avatar-sm",children:o.jsx("img",{src:"https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",alt:"Elena"})}),o.jsxs("div",{children:[o.jsx("strong",{children:"Elena Rodriguez"}),o.jsx("div",{className:"text-muted text-xs",children:"@elena_travels"})]})]}),o.jsx("p",{className:"text-sm mt-2",children:"Catching morning clouds over the mountains! 🏔️✨"})]})]})})]})}),o.jsx("section",{className:"cta-section",children:o.jsx("div",{className:"container",children:o.jsxs("div",{className:"glass-card cta-card",children:[o.jsx("h2",{children:"Ready to Experience Socialla?"}),o.jsx("p",{children:"Join thousands of creators sharing their passions and connecting across the globe."}),o.jsxs("div",{className:"cta-buttons",children:[o.jsx(ve,{to:"/register",children:o.jsx(Hs,{size:"lg",radius:24,tint:"#ffffff",tintOpacity:.15,blur:4,textColor:"#ffffff",lineColor:"#e0e7ff",baseColor:"#a5b4fc",intensity:1.4,shineSize:10,shineFade:35,autoAnimate:!0,speed:.5,children:"Create Free Account"})}),o.jsx(ve,{to:"/login",children:o.jsx(Hs,{size:"lg",radius:24,tint:"#ffffff",tintOpacity:.1,blur:4,textColor:"#e2e8f0",lineColor:"#94a3b8",baseColor:"#334155",intensity:.7,shineSize:14,shineFade:40,followMouse:!0,children:"Sign In"})})]})]})})}),o.jsxs("footer",{className:"landing-footer",children:[o.jsxs("div",{className:"container footer-container",children:[o.jsxs("div",{className:"footer-col brand-col",children:[o.jsxs("div",{className:"landing-logo",children:[o.jsx("img",{src:"/socialla-logo.svg",alt:"Socialla",className:"landing-logo-img"}),o.jsx("span",{className:"landing-logo-text",children:"Socialla"})]}),o.jsx("p",{className:"footer-bio",children:"Socialla is a modern, high-performance social platform created for seamless sharing, vibrant design, and genuine social connection."})]}),o.jsxs("div",{className:"footer-col",children:[o.jsx("h4",{children:"Quick Links"}),o.jsx("a",{href:"#home",children:"Home"}),o.jsx("a",{href:"#features",children:"Features"}),o.jsx("a",{href:"#preview",children:"About"}),o.jsx(ve,{to:"/home",children:"Feed"})]}),o.jsxs("div",{className:"footer-col",children:[o.jsx("h4",{children:"Account"}),o.jsx(ve,{to:"/login",children:"Log In"}),o.jsx(ve,{to:"/register",children:"Create Account"}),o.jsx(ve,{to:"/settings",children:"Settings"})]}),o.jsxs("div",{className:"footer-col",children:[o.jsx("h4",{children:"Legal"}),o.jsx("a",{href:"#privacy",children:"Privacy Policy"}),o.jsx("a",{href:"#terms",children:"Terms of Service"}),o.jsx("a",{href:"#security",children:"Security"})]})]}),o.jsx("div",{className:"container footer-bottom",children:o.jsx("p",{children:"© 2026 Socialla Platform. All rights reserved. Crafted with React & Vite."})})]}),o.jsx("style",{children:`
        .landing-page {
          overflow-x: hidden;
        }

        .hero-section {
          padding: 5rem 0 4rem 0;
          text-align: center;
          position: relative;
        }

        .hero-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 1rem;
          background: var(--primary-light);
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: var(--radius-full);
          color: var(--primary);
          font-weight: 700;
          font-size: 0.85rem;
          margin-bottom: 1.5rem;
          animation: landingEntrance 0.6s ease-out;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          letter-spacing: -1px;
          line-height: 1.15;
          margin-bottom: 1.25rem;
          animation: heroReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-title-gradient {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-description {
          max-width: 680px;
          font-size: 1.15rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2.25rem;
        }

        .hero-ctas {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 3.5rem;
        }

        .hero-btn {
          padding: 0.85rem 1.85rem;
          font-size: 1.05rem;
        }

        .hero-mockup-wrapper {
          position: relative;
          width: 100%;
          max-width: 640px;
          margin: 0 auto;
        }

        .mockup-bg-glow {
          position: absolute;
          inset: -20px;
          background: var(--gradient-primary);
          filter: blur(50px);
          opacity: 0.25;
          border-radius: 40px;
          z-index: 1;
        }

        .mockup-main-card {
          position: relative;
          z-index: 2;
          padding: 1.5rem;
          text-align: left;
          animation: heroFloat 6s ease-in-out infinite;
        }

        .mockup-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.85rem;
        }

        .mockup-user {
          display: flex;
          flex-direction: column;
        }

        .mockup-name {
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .mockup-handle {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .mockup-text {
          font-size: 0.95rem;
          margin-bottom: 0.85rem;
        }

        .mockup-img-wrap {
          border-radius: var(--radius-md);
          overflow: hidden;
          max-height: 240px;
          margin-bottom: 0.85rem;
        }

        .mockup-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          font-size: 0.85rem;
          font-weight: 700;
        }

        .mockup-action-item {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .text-danger { color: var(--danger); }
        .text-primary { color: var(--primary); }
        .text-success { color: var(--success); }

        .floating-card {
          position: absolute;
          z-index: 3;
          padding: 0.75rem 1.1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          box-shadow: var(--shadow-xl);
        }

        .float-left {
          top: 15%;
          left: -80px;
          animation: heroFloatSecondary 5s ease-in-out infinite;
        }

        .float-right {
          bottom: 20%;
          right: -80px;
          animation: heroFloat 7s ease-in-out infinite;
        }

        .float-icon-bg {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size: 1.2rem;
        }

        .bg-primary { background: var(--gradient-primary); }
        .bg-accent { background: var(--gradient-accent); }

        .float-text {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .float-text strong {
          font-size: 0.88rem;
          color: var(--text-primary);
        }

        .float-text span {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        /* Features Section */
        .features-section {
          padding: 5rem 0;
          background: var(--bg-secondary);
        }

        .section-header {
          text-align: center;
          max-width: 640px;
          margin: 0 auto 3.5rem auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
        }

        .section-header h2 {
          font-size: 2.25rem;
        }

        .section-header p {
          color: var(--text-secondary);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 1.75rem;
        }

        .feature-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .feature-icon {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size: 1.4rem;
        }

        .bg-gradient-1 { background: linear-gradient(135deg, #6366f1, #8b5cf6); }
        .bg-gradient-2 { background: linear-gradient(135deg, #8b5cf6, #d946ef); }
        .bg-gradient-3 { background: linear-gradient(135deg, #3b82f6, #06b6d4); }

        .feature-card h3 {
          font-size: 1.2rem;
        }

        .feature-card p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.5;
        }

        /* Preview Showcase Section */
        .preview-section {
          padding: 5rem 0;
        }

        .preview-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .preview-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.25rem;
        }

        .preview-content h2 {
          font-size: 2.2rem;
        }

        .preview-checklist {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }

        .preview-checklist li {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .check-icon {
          color: var(--success);
          font-size: 1.1rem;
        }

        .preview-mockup-wrapper {
          position: relative;
        }

        .preview-card {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .story-strip-demo {
          display: flex;
          gap: 1rem;
        }

        .story-demo-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .story-demo-item img {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-full);
          border: 2px solid var(--border-color);
        }

        .story-demo-item.active img {
          border-color: var(--primary);
        }

        .post-demo-box {
          background: var(--bg-secondary);
          padding: 1rem;
          border-radius: var(--radius-md);
        }

        .post-demo-header {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        /* CTA Section */
        .cta-section {
          padding: 3rem 0 5rem 0;
        }

        .cta-card {
          padding: 4rem 2rem;
          text-align: center;
          background: var(--gradient-primary);
          color: #ffffff;
          border: none;
        }

        .cta-card h2 {
          color: #ffffff;
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .cta-card p {
          max-width: 540px;
          margin: 0 auto 2rem auto;
          font-size: 1.1rem;
          opacity: 0.9;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .btn-lg {
          padding: 0.9rem 2rem;
          font-size: 1.05rem;
        }

        /* Footer */
        .landing-footer {
          background: var(--bg-card);
          border-top: 1px solid var(--border-color);
          padding: 4rem 0 2rem 0;
        }

        .footer-container {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 2.5rem;
          margin-bottom: 3rem;
        }

        .brand-col {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-bio {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .footer-col h4 {
          font-size: 1rem;
          margin-bottom: 1rem;
        }

        .footer-col a {
          display: block;
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 0.6rem;
        }
        .footer-col a:hover { color: var(--primary); }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
          text-align: center;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        @media (max-width: 1024px) {
          .float-left, .float-right { display: none; }
          .preview-container { grid-template-columns: 1fr; }
          .footer-container { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 2.4rem; }
          .footer-container { grid-template-columns: 1fr; }
        }
      `})]}),ow=()=>{const{login:t,loading:e}=Je(),{addToast:r}=bt(),n=lr(),[i,s]=b.useState(""),[a,l]=b.useState(""),[u,c]=b.useState(!1),[d,f]=b.useState(!0),[h,m]=b.useState(""),[x,p]=b.useState(!1),[_,v]=b.useState(""),g=async w=>{if(w.preventDefault(),m(""),!i.trim()){m("Please enter your email address or username.");return}if(!a){m("Please enter your password.");return}try{await t(i,a),r("Welcome back to Socialla!","success"),n("/home")}catch(k){m(k.message)}},y=w=>{w.preventDefault(),_.trim()&&(r(`Password reset link sent to ${_}`,"info"),p(!1),v(""))};return o.jsxs("div",{className:"auth-page-wrapper",children:[o.jsxs("div",{className:"auth-card glass-card",children:[o.jsxs("div",{className:"auth-header",children:[o.jsxs(ve,{to:"/",className:"auth-logo",children:[o.jsx("img",{src:"/socialla-logo.svg",alt:"Socialla Logo"}),o.jsx("span",{children:"Socialla"})]}),o.jsx("h2",{children:"Welcome Back"}),o.jsx("p",{children:"Log in to access your feed, messages, and saved posts."})]}),h&&o.jsx("div",{className:"auth-error-banner",children:o.jsx("span",{children:h})}),o.jsxs("form",{onSubmit:g,className:"auth-form",children:[o.jsxs("div",{className:"input-group",children:[o.jsx("label",{className:"input-label",children:"Email or Username"}),o.jsxs("div",{className:"input-wrapper",children:[o.jsx(pu,{className:"input-icon-left"}),o.jsx("input",{type:"text",className:"input-field",placeholder:"alex@socialla.com or alex_vance",value:i,onChange:w=>s(w.target.value)})]})]}),o.jsxs("div",{className:"input-group",children:[o.jsxs("div",{className:"input-label-row",children:[o.jsx("label",{className:"input-label",children:"Password"}),o.jsx("button",{type:"button",className:"forgot-link",onClick:()=>p(!0),children:"Forgot password?"})]}),o.jsxs("div",{className:"input-wrapper has-right-icon",children:[o.jsx(Oa,{className:"input-icon-left"}),o.jsx("input",{type:u?"text":"password",className:"input-field",placeholder:"Enter your password",value:a,onChange:w=>l(w.target.value)}),o.jsx("span",{className:"input-icon-right",onClick:()=>c(!u),children:u?o.jsx(vu,{}):o.jsx(gu,{})})]})]}),o.jsx("div",{className:"remember-row",children:o.jsxs("label",{className:"checkbox-label",children:[o.jsx("input",{type:"checkbox",checked:d,onChange:w=>f(w.target.checked)}),o.jsx("span",{children:"Remember me on this browser"})]})}),o.jsxs("button",{type:"submit",className:"btn btn-primary auth-submit-btn",disabled:e,children:[e?"Authenticating...":"Sign In"," ",o.jsx(os,{})]})]}),o.jsxs("div",{className:"auth-footer",children:[o.jsx("span",{children:"Don't have an account?"}),o.jsx(ve,{to:"/register",className:"auth-switch-link",children:"Create Account"})]})]}),x&&o.jsx("div",{className:"modal-backdrop",onClick:()=>p(!1),children:o.jsxs("div",{className:"modal-content forgot-modal",onClick:w=>w.stopPropagation(),children:[o.jsxs("div",{className:"modal-header",children:[o.jsx("h3",{children:"Reset Password"}),o.jsx("button",{className:"btn-icon",onClick:()=>p(!1),children:o.jsx(gn,{})})]}),o.jsxs("form",{onSubmit:y,className:"modal-body",children:[o.jsx("p",{className:"forgot-desc",children:"Enter your account email address and we'll send you a password recovery link."}),o.jsxs("div",{className:"input-group",children:[o.jsx("label",{className:"input-label",children:"Email Address"}),o.jsxs("div",{className:"input-wrapper",children:[o.jsx(pu,{className:"input-icon-left"}),o.jsx("input",{type:"email",className:"input-field",placeholder:"name@socialla.com",value:_,onChange:w=>v(w.target.value),required:!0})]})]}),o.jsx("button",{type:"submit",className:"btn btn-primary w-full mt-2",children:"Send Reset Link"})]})]})}),o.jsx("style",{children:`
        .auth-page-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
          background: linear-gradient(135deg, var(--bg-main) 0%, var(--bg-secondary) 100%);
        }

        .auth-card {
          width: 100%;
          max-width: 440px;
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          animation: modalScaleIn 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .auth-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.5rem;
        }

        .auth-logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
        }

        .auth-logo img {
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .auth-logo span {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .auth-header h2 {
          font-size: 1.75rem;
        }

        .auth-header p {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .auth-error-banner {
          padding: 0.75rem 1rem;
          background: var(--danger-light);
          border: 1px solid var(--danger);
          border-radius: var(--radius-md);
          color: var(--danger);
          font-size: 0.88rem;
          font-weight: 600;
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .input-label-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .forgot-link {
          font-size: 0.8rem;
          color: var(--primary);
          font-weight: 600;
        }
        .forgot-link:hover { text-decoration: underline; }

        .remember-row {
          display: flex;
          align-items: center;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
          cursor: pointer;
        }

        .auth-submit-btn {
          width: 100%;
          padding: 0.8rem;
          font-size: 1rem;
          font-weight: 700;
          margin-top: 0.25rem;
        }

        .auth-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: var(--text-muted);
          padding-top: 1rem;
          border-top: 1px solid var(--border-color);
        }

        .auth-switch-link {
          font-weight: 700;
          color: var(--primary);
        }

        .forgot-modal {
          padding: 1.5rem;
        }
        .forgot-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 1rem;
        }
      `})]})},uw=()=>{const{register:t,loading:e}=Je(),{addToast:r}=bt(),n=lr(),[i,s]=b.useState(""),[a,l]=b.useState(""),[u,c]=b.useState(""),[d,f]=b.useState(""),[h,m]=b.useState(""),[x,p]=b.useState("https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80"),[_,v]=b.useState(!1),[g,y]=b.useState(!1),[w,k]=b.useState(""),S=(()=>{if(!d)return{label:"",score:0,color:""};let E=0;switch(d.length>=8&&(E+=1),/[A-Z]/.test(d)&&(E+=1),/[0-9]/.test(d)&&(E+=1),/[^A-Za-z0-9]/.test(d)&&(E+=1),E){case 1:return{label:"Weak",score:25,color:"var(--danger)"};case 2:return{label:"Fair",score:50,color:"var(--warning)"};case 3:return{label:"Strong",score:75,color:"var(--primary)"};case 4:return{label:"Excellent",score:100,color:"var(--success)"};default:return{label:"Weak",score:15,color:"var(--danger)"}}})(),N=E=>{const M=E.target.files[0];if(M){const L=new FileReader;L.onloadend=()=>p(L.result),L.readAsDataURL(M)}},C=async E=>{if(E.preventDefault(),k(""),!i.trim())return k("Please enter your full name.");if(!a.trim())return k("Please choose a unique username.");if(!u.trim())return k("Please enter your email address.");if(!d)return k("Please create a password.");if(d!==h)return k("Passwords do not match.");try{await t({name:i.trim(),username:a.trim().toLowerCase(),email:u.trim().toLowerCase(),password:d,avatar:x}),r("Account created! Welcome to Socialla.","success"),n("/home")}catch(M){k(M.message)}};return o.jsxs("div",{className:"auth-page-wrapper",children:[o.jsxs("div",{className:"auth-card glass-card register-card",children:[o.jsxs("div",{className:"auth-header",children:[o.jsxs(ve,{to:"/",className:"auth-logo",children:[o.jsx("img",{src:"/socialla-logo.svg",alt:"Socialla Logo"}),o.jsx("span",{children:"Socialla"})]}),o.jsx("h2",{children:"Create Your Account"}),o.jsx("p",{children:"Join the Socialla community and start sharing your moments."})]}),w&&o.jsx("div",{className:"auth-error-banner",children:o.jsx("span",{children:w})}),o.jsxs("form",{onSubmit:C,className:"auth-form",children:[o.jsxs("div",{className:"register-avatar-picker",children:[o.jsx("div",{className:"avatar avatar-lg",children:o.jsx("img",{src:x,alt:"Avatar Preview"})}),o.jsxs("label",{className:"btn btn-secondary btn-sm change-avatar-file",children:[o.jsx(Aa,{})," Choose Photo",o.jsx("input",{type:"file",accept:"image/*",onChange:N,hidden:!0})]})]}),o.jsxs("div",{className:"input-row",children:[o.jsxs("div",{className:"input-group",children:[o.jsx("label",{className:"input-label",children:"Full Name"}),o.jsxs("div",{className:"input-wrapper",children:[o.jsx(cl,{className:"input-icon-left"}),o.jsx("input",{type:"text",className:"input-field",placeholder:"Alex Vance",value:i,onChange:E=>s(E.target.value),required:!0})]})]}),o.jsxs("div",{className:"input-group",children:[o.jsx("label",{className:"input-label",children:"Username"}),o.jsxs("div",{className:"input-wrapper",children:[o.jsx(Gm,{className:"input-icon-left"}),o.jsx("input",{type:"text",className:"input-field",placeholder:"alex_vance",value:a,onChange:E=>l(E.target.value),required:!0})]})]})]}),o.jsxs("div",{className:"input-group",children:[o.jsx("label",{className:"input-label",children:"Email Address"}),o.jsxs("div",{className:"input-wrapper",children:[o.jsx(pu,{className:"input-icon-left"}),o.jsx("input",{type:"email",className:"input-field",placeholder:"alex@socialla.com",value:u,onChange:E=>c(E.target.value),required:!0})]})]}),o.jsxs("div",{className:"input-group",children:[o.jsx("label",{className:"input-label",children:"Password"}),o.jsxs("div",{className:"input-wrapper has-right-icon",children:[o.jsx(Oa,{className:"input-icon-left"}),o.jsx("input",{type:_?"text":"password",className:"input-field",placeholder:"Create password",value:d,onChange:E=>f(E.target.value),required:!0}),o.jsx("span",{className:"input-icon-right",onClick:()=>v(!_),children:_?o.jsx(vu,{}):o.jsx(gu,{})})]}),d&&o.jsxs("div",{className:"strength-meter-wrap",children:[o.jsx("div",{className:"strength-bar-bg",children:o.jsx("div",{className:"strength-bar-fill",style:{width:`${S.score}%`,backgroundColor:S.color}})}),o.jsxs("span",{className:"strength-label",style:{color:S.color},children:["Password Strength: ",S.label]})]})]}),o.jsxs("div",{className:"input-group",children:[o.jsx("label",{className:"input-label",children:"Confirm Password"}),o.jsxs("div",{className:"input-wrapper has-right-icon",children:[o.jsx(Oa,{className:"input-icon-left"}),o.jsx("input",{type:g?"text":"password",className:"input-field",placeholder:"Confirm password",value:h,onChange:E=>m(E.target.value),required:!0}),o.jsx("span",{className:"input-icon-right",onClick:()=>y(!g),children:g?o.jsx(vu,{}):o.jsx(gu,{})})]})]}),o.jsxs("button",{type:"submit",className:"btn btn-primary auth-submit-btn",disabled:e,children:[e?"Creating Account...":"Get Started"," ",o.jsx(os,{})]})]}),o.jsxs("div",{className:"auth-footer",children:[o.jsx("span",{children:"Already have an account?"}),o.jsx(ve,{to:"/login",className:"auth-switch-link",children:"Log In"})]})]}),o.jsx("style",{children:`
        .register-card {
          max-width: 520px;
        }

        .register-avatar-picker {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }

        .input-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .strength-meter-wrap {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-top: 4px;
        }

        .strength-bar-bg {
          height: 4px;
          background: var(--border-color);
          border-radius: 2px;
          overflow: hidden;
        }

        .strength-bar-fill {
          height: 100%;
          transition: width 0.3s ease, background-color 0.3s ease;
        }

        .strength-label {
          font-size: 0.75rem;
          font-weight: 700;
        }

        @media (max-width: 520px) {
          .input-row {
            grid-template-columns: 1fr;
          }
        }
      `})]})},ci=({onOpenCreatePost:t})=>{const{currentUser:e,logout:r}=Je(),{addToast:n}=bt(),i=lr(),s=()=>{r(),n("You have logged out successfully.","info"),i("/login")},a=[{label:"Home",path:"/home",icon:o.jsx(Qm,{})},{label:"Explore",path:"/explore",icon:o.jsx(Rc,{})},{label:"Notifications",path:"/notifications",icon:o.jsx(fl,{}),badge:2},{label:"Messages",path:"/messages",icon:o.jsx(ui,{}),badge:2},{label:"Bookmarks",path:"/profile?tab=saved",icon:o.jsx(ls,{})},{label:"Profile",path:"/profile",icon:o.jsx(cl,{})},{label:"Settings",path:"/settings",icon:o.jsx(Xx,{})}];return o.jsxs("aside",{className:"app-left-sidebar",children:[o.jsxs("div",{className:"sidebar-container glass-card",children:[o.jsxs(Kr,{to:"/home",className:"sidebar-logo",children:[o.jsx("img",{src:"/socialla-logo.svg",alt:"Socialla",className:"sidebar-logo-img"}),o.jsx("span",{className:"sidebar-logo-text",children:"Socialla"})]}),o.jsx("nav",{className:"sidebar-nav",children:a.map(l=>o.jsxs(Kr,{to:l.path,className:({isActive:u})=>`sidebar-nav-item ${u?"active":""}`,children:[o.jsx("span",{className:"sidebar-nav-icon",children:l.icon}),o.jsx("span",{className:"sidebar-text",children:l.label}),l.badge&&o.jsx("span",{className:"sidebar-badge",children:l.badge})]},l.label))}),t&&o.jsxs("button",{className:"btn btn-primary sidebar-post-btn",onClick:t,children:[o.jsx(Vm,{className:"sidebar-post-btn-icon"}),o.jsx("span",{className:"sidebar-post-btn-text",children:"Create Post"})]}),e&&o.jsxs("div",{className:"sidebar-user-footer",children:[o.jsxs(Kr,{to:"/profile",className:"sidebar-user-info",children:[o.jsx("div",{className:"avatar avatar-md",children:o.jsx("img",{src:e.avatar,alt:e.name})}),o.jsxs("div",{className:"sidebar-user-details sidebar-text",children:[o.jsx("span",{className:"sidebar-user-name",children:e.name}),o.jsxs("span",{className:"sidebar-user-handle",children:["@",e.username]})]})]}),o.jsx("button",{className:"btn-icon sidebar-logout-btn",onClick:s,title:"Logout",children:o.jsx(qm,{})})]})]}),o.jsx("style",{children:`
        .sidebar-container {
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 1.25rem;
          gap: 1.5rem;
        }

        .sidebar-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem;
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 800;
        }

        .sidebar-logo-img {
          width: 36px;
          height: 36px;
          border-radius: 10px;
        }

        .sidebar-logo-text {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          flex: 1;
        }

        .sidebar-nav-item {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          padding: 0.75rem 1rem;
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 0.95rem;
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
          position: relative;
        }

        .sidebar-nav-item:hover {
          background: var(--primary-light);
          color: var(--primary);
          transform: translateX(4px);
        }

        .sidebar-nav-item.active {
          background: var(--gradient-primary);
          color: #ffffff;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        }

        .sidebar-nav-icon {
          font-size: 1.25rem;
          display: flex;
          align-items: center;
        }

        .sidebar-badge {
          margin-left: auto;
          background: var(--accent);
          color: #ffffff;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: var(--radius-full);
        }

        .sidebar-post-btn {
          width: 100%;
          padding: 0.8rem;
          border-radius: var(--radius-md);
          font-weight: 700;
        }

        .sidebar-post-btn-icon {
          font-size: 1.2rem;
        }

        .sidebar-user-footer {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .sidebar-user-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          overflow: hidden;
        }

        .sidebar-user-details {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .sidebar-user-name {
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--text-primary);
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        .sidebar-user-handle {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .sidebar-logout-btn {
          color: var(--text-muted);
        }

        .sidebar-logout-btn:hover {
          color: var(--danger);
          background: var(--danger-light);
        }
      `})]})},Ss=()=>{const{currentUser:t}=Je(),{addToast:e}=bt(),r=lr(),[n,i]=b.useState(""),[s,a]=b.useState(()=>Zr().filter(h=>h.id!==(t==null?void 0:t.id))),[l,u]=b.useState({}),c=[{tag:"#SociallaLaunch",postsCount:"18.4K posts"},{tag:"#Tech2026",postsCount:"12.1K posts"},{tag:"#UIUXDesign",postsCount:"9.8K posts"},{tag:"#FrontendDev",postsCount:"7.2K posts"},{tag:"#ReactVite",postsCount:"5.5K posts"}],d=h=>{h.preventDefault(),n.trim()&&r(`/explore?q=${encodeURIComponent(n.trim())}`)},f=(h,m)=>{u(x=>{const p=!x[h];return p?e(`You are now following ${m}!`,"success"):e(`Unfollowed ${m}`,"info"),{...x,[h]:p}})};return o.jsxs("aside",{className:"app-right-sidebar",children:[o.jsx("form",{className:"glass-card search-form",onSubmit:d,children:o.jsxs("div",{className:"input-wrapper",children:[o.jsx(Lc,{className:"input-icon-left"}),o.jsx("input",{type:"text",className:"input-field",placeholder:"Search Socialla...",value:n,onChange:h=>i(h.target.value)})]})}),o.jsxs("div",{className:"glass-card right-card",children:[o.jsxs("div",{className:"card-header",children:[o.jsx(dl,{className:"card-header-icon"}),o.jsx("h3",{children:"Trending Topics"})]}),o.jsx("div",{className:"trending-list",children:c.map(h=>o.jsxs("div",{className:"trending-item",onClick:()=>r(`/explore?q=${encodeURIComponent(h.tag)}`),children:[o.jsx("span",{className:"trending-tag",children:h.tag}),o.jsx("span",{className:"trending-count",children:h.postsCount})]},h.tag))})]}),o.jsxs("div",{className:"glass-card right-card",children:[o.jsxs("div",{className:"card-header",children:[o.jsx(Dm,{className:"card-header-icon"}),o.jsx("h3",{children:"Suggested People"})]}),o.jsx("div",{className:"suggested-list",children:s.slice(0,3).map(h=>{const m=!!l[h.id];return o.jsxs("div",{className:"suggested-item",children:[o.jsxs("div",{className:"suggested-user-info",onClick:()=>r(`/profile?username=${h.username}`),children:[o.jsx("div",{className:"avatar avatar-md",children:o.jsx("img",{src:h.avatar,alt:h.name})}),o.jsxs("div",{className:"suggested-details",children:[o.jsx("span",{className:"suggested-name",children:h.name}),o.jsxs("span",{className:"suggested-handle",children:["@",h.username]})]})]}),o.jsx("button",{className:`btn btn-sm ${m?"btn-secondary":"btn-outline"}`,onClick:()=>f(h.id,h.name),children:m?o.jsxs(o.Fragment,{children:[o.jsx(Bm,{})," Following"]}):"Follow"})]},h.id)})})]}),o.jsxs("div",{className:"glass-card right-card",children:[o.jsxs("div",{className:"card-header",children:[o.jsx("div",{className:"online-indicator-dot"}),o.jsx("h3",{children:"Online Friends"})]}),o.jsx("div",{className:"online-list",children:s.slice(0,4).map(h=>o.jsxs("div",{className:"online-item",onClick:()=>r("/messages"),children:[o.jsxs("div",{className:"avatar avatar-sm",children:[o.jsx("img",{src:h.avatar,alt:h.name}),o.jsx("span",{className:"avatar-online-dot"})]}),o.jsx("span",{className:"online-name",children:h.name}),o.jsx(ui,{className:"online-msg-icon"})]},h.id))})]}),o.jsx("style",{children:`
        .search-form {
          padding: 0.5rem;
        }

        .right-card {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .card-header-icon {
          color: var(--primary);
          font-size: 1.2rem;
        }

        .online-indicator-dot {
          width: 9px;
          height: 9px;
          background: var(--success);
          border-radius: var(--radius-full);
          box-shadow: 0 0 8px var(--success);
        }

        .trending-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .trending-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding: 0.5rem 0.6rem;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: background var(--transition-fast);
        }

        .trending-item:hover {
          background: var(--primary-light);
        }

        .trending-tag {
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--text-primary);
        }

        .trending-count {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .suggested-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .suggested-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
        }

        .suggested-user-info {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          cursor: pointer;
          overflow: hidden;
        }

        .suggested-details {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .suggested-name {
          font-weight: 700;
          font-size: 0.88rem;
          color: var(--text-primary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .suggested-handle {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .btn-sm {
          padding: 0.35rem 0.85rem;
          font-size: 0.8rem;
        }

        .online-list {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .online-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.4rem 0.5rem;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: background var(--transition-fast);
        }

        .online-item:hover {
          background: var(--primary-light);
        }

        .online-name {
          font-weight: 600;
          font-size: 0.85rem;
          flex: 1;
        }

        .online-msg-icon {
          color: var(--text-muted);
          font-size: 1rem;
        }
      `})]})},di=({onOpenCreatePost:t})=>o.jsxs("nav",{className:"bottom-nav",children:[o.jsxs(Kr,{to:"/home",className:({isActive:e})=>`bottom-nav-item ${e?"active":""}`,children:[o.jsx(Qm,{}),o.jsx("span",{children:"Home"})]}),o.jsxs(Kr,{to:"/explore",className:({isActive:e})=>`bottom-nav-item ${e?"active":""}`,children:[o.jsx(Rc,{}),o.jsx("span",{children:"Explore"})]}),o.jsx("button",{className:"bottom-nav-create-btn",onClick:t,title:"Create Post",children:o.jsx(Vm,{})}),o.jsxs(Kr,{to:"/notifications",className:({isActive:e})=>`bottom-nav-item ${e?"active":""}`,children:[o.jsx(fl,{}),o.jsx("span",{children:"Alerts"})]}),o.jsxs(Kr,{to:"/profile",className:({isActive:e})=>`bottom-nav-item ${e?"active":""}`,children:[o.jsx(cl,{}),o.jsx("span",{children:"Profile"})]}),o.jsx("style",{children:`
        .bottom-nav {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          height: 64px;
          background: var(--bg-glass);
          backdrop-filter: var(--backdrop-blur);
          border-top: 1px solid var(--border-color);
          z-index: 900;
          align-items: center;
          justify-content: space-around;
          padding: 0 0.5rem;
        }

        .bottom-nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          color: var(--text-muted);
          font-size: 1.25rem;
          font-weight: 600;
          transition: all var(--transition-fast);
          padding: 0.25rem 0.5rem;
        }

        .bottom-nav-item span {
          font-size: 0.7rem;
        }

        .bottom-nav-item.active {
          color: var(--primary);
          transform: translateY(-2px);
        }

        .bottom-nav-create-btn {
          width: 46px;
          height: 46px;
          border-radius: var(--radius-full);
          background: var(--gradient-primary);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
          transform: translateY(-10px);
          transition: transform var(--transition-bounce);
        }

        .bottom-nav-create-btn:active {
          transform: translateY(-10px) scale(0.9);
        }

        @media (max-width: 767px) {
          .bottom-nav {
            display: flex;
          }
        }
      `})]}),cw=({stories:t,initialIndex:e,onClose:r})=>{const[n,i]=b.useState(e),s=t[n];b.useEffect(()=>{const u=setTimeout(()=>{n<t.length-1?i(c=>c+1):r()},5e3);return()=>clearTimeout(u)},[n,t.length,r]);const a=u=>{u.stopPropagation(),n>0&&i(c=>c-1)},l=u=>{u.stopPropagation(),n<t.length-1?i(c=>c+1):r()};return s?o.jsxs("div",{className:"story-viewer-modal",onClick:r,children:[o.jsxs("div",{className:"story-viewer-content",onClick:u=>u.stopPropagation(),children:[o.jsx("div",{className:"story-progress-bar-container",children:t.map((u,c)=>o.jsx("div",{className:"story-progress-track",children:o.jsx("div",{className:"story-progress-fill",style:{width:c<n||c===n?"100%":"0%",transition:c===n?"width 5s linear":"none"}})},u.id))}),o.jsxs("div",{className:"story-viewer-header",children:[o.jsxs("div",{className:"story-user-info",children:[o.jsx("div",{className:"avatar avatar-sm",children:o.jsx("img",{src:s.userAvatar,alt:s.userName})}),o.jsxs("div",{className:"story-header-text",children:[o.jsx("span",{className:"story-user-name",children:s.userName}),o.jsx("span",{className:"story-time",children:s.timestamp})]})]}),o.jsx("button",{className:"btn-icon story-close-btn",onClick:r,children:o.jsx(gn,{})})]}),o.jsxs("div",{className:"story-image-wrap",children:[o.jsx("img",{src:s.image,alt:s.caption||"Story"}),s.caption&&o.jsx("div",{className:"story-caption-overlay",children:o.jsx("p",{children:s.caption})})]}),n>0&&o.jsx("button",{className:"story-nav-btn story-prev-btn",onClick:a,children:o.jsx(ay,{})}),o.jsx("button",{className:"story-nav-btn story-next-btn",onClick:l,children:o.jsx(sy,{})})]}),o.jsx("style",{children:`
        .story-viewer-modal {
          position: fixed;
          inset: 0;
          z-index: 2000;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          animation: fadeIn 0.25s ease-out;
        }

        .story-viewer-content {
          position: relative;
          width: 100%;
          max-width: 420px;
          height: 90vh;
          max-height: 740px;
          background: #0f172a;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
          display: flex;
          flex-direction: column;
          animation: modalScaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .story-progress-bar-container {
          position: absolute;
          top: 12px;
          left: 12px;
          right: 12px;
          z-index: 10;
          display: flex;
          gap: 6px;
        }

        .story-progress-track {
          flex: 1;
          height: 3px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
          overflow: hidden;
        }

        .story-progress-fill {
          height: 100%;
          background: #ffffff;
        }

        .story-viewer-header {
          position: absolute;
          top: 24px;
          left: 12px;
          right: 12px;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .story-user-info {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .story-header-text {
          display: flex;
          flex-direction: column;
        }

        .story-user-name {
          color: #ffffff;
          font-weight: 700;
          font-size: 0.9rem;
          text-shadow: 0 1px 3px rgba(0,0,0,0.8);
        }

        .story-time {
          color: rgba(255, 255, 255, 0.75);
          font-size: 0.75rem;
        }

        .story-close-btn {
          color: #ffffff;
          background: rgba(0,0,0,0.4);
        }
        .story-close-btn:hover {
          background: rgba(0,0,0,0.7);
        }

        .story-image-wrap {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .story-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .story-caption-overlay {
          position: absolute;
          bottom: 24px;
          left: 16px;
          right: 16px;
          padding: 0.85rem 1.1rem;
          background: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(8px);
          border-radius: var(--radius-md);
          color: #ffffff;
          font-weight: 600;
          font-size: 0.9rem;
          text-align: center;
        }

        .story-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 15;
          width: 44px;
          height: 44px;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(4px);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          transition: background var(--transition-fast);
        }

        .story-nav-btn:hover {
          background: rgba(255, 255, 255, 0.4);
        }

        .story-prev-btn { left: 12px; }
        .story-next-btn { right: 12px; }
      `})]}):null},dw=()=>{const{currentUser:t}=Je(),{addToast:e}=bt(),[r,n]=b.useState(()=>Rx()),[i,s]=b.useState(null),a=u=>{const c=u.target.files[0];if(c&&t){const d=new FileReader;d.onloadend=()=>{const h=[{id:`story_${Date.now()}`,userId:t.id,userName:t.name,userAvatar:t.avatar,image:d.result,caption:"Just shared a new story moment!",timestamp:"Just now",seen:!1},...r];n(h),xf(h),e("Story published successfully!","success")},d.readAsDataURL(c)}},l=u=>{s(u);const c=[...r];c[u].seen=!0,n(c),xf(c)};return o.jsxs("div",{className:"stories-container glass-card",children:[o.jsxs("div",{className:"stories-track",children:[t&&o.jsxs("label",{className:"story-item story-add-item",children:[o.jsx("input",{type:"file",accept:"image/*",className:"story-file-input",onChange:a}),o.jsxs("div",{className:"story-avatar-wrap",children:[o.jsx("img",{src:t.avatar,alt:"Add Story"}),o.jsx("div",{className:"story-add-plus",children:o.jsx(Kx,{})})]}),o.jsx("span",{className:"story-username",children:"Your Story"})]}),r.map((u,c)=>o.jsxs("div",{className:`story-item story-card-anim ${u.seen?"seen":"unseen"}`,onClick:()=>l(c),children:[o.jsxs("div",{className:"story-avatar-wrap",children:[o.jsx("div",{className:"story-ring"}),o.jsx("img",{src:u.userAvatar,alt:u.userName})]}),o.jsx("span",{className:"story-username",children:u.userName})]},u.id))]}),i!==null&&o.jsx(cw,{stories:r,initialIndex:i,onClose:()=>s(null)}),o.jsx("style",{children:`
        .stories-container {
          padding: 1rem;
          overflow-hidden: true;
        }

        .stories-track {
          display: flex;
          align-items: center;
          gap: 1.1rem;
          overflow-x: auto;
          padding-bottom: 0.25rem;
        }

        .stories-track::-webkit-scrollbar {
          display: none;
        }

        .story-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          cursor: pointer;
          flex-shrink: 0;
          width: 76px;
        }

        .story-avatar-wrap {
          position: relative;
          width: 64px;
          height: 64px;
          border-radius: var(--radius-full);
          padding: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .story-avatar-wrap img {
          width: 100%;
          height: 100%;
          border-radius: var(--radius-full);
          object-fit: cover;
          z-index: 2;
          border: 2px solid var(--bg-card);
        }

        .story-item.unseen .story-ring {
          position: absolute;
          inset: 0;
          border-radius: var(--radius-full);
          background: var(--gradient-primary);
          animation: storyRingPulse 6s linear infinite;
        }

        .story-item.seen .story-ring {
          position: absolute;
          inset: 0;
          border-radius: var(--radius-full);
          border: 2px solid var(--border-color);
        }

        .story-username {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-primary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 72px;
          text-align: center;
        }

        .story-add-item {
          position: relative;
        }

        .story-file-input {
          display: none;
        }

        .story-add-plus {
          position: absolute;
          bottom: 2px;
          right: 2px;
          z-index: 3;
          width: 22px;
          height: 22px;
          border-radius: var(--radius-full);
          background: var(--primary);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          border: 2px solid var(--bg-card);
        }
      `})]})},oh=({onPostCreated:t})=>{const{currentUser:e}=Je(),{addToast:r}=bt(),[n,i]=b.useState(""),[s,a]=b.useState(null),[l,u]=b.useState(!1),c=f=>{const h=f.target.files[0];if(h){const m=new FileReader;m.onloadend=()=>{a(m.result)},m.readAsDataURL(h)}},d=f=>{if(f.preventDefault(),!n.trim()&&!s){r("Please enter text or attach an image to publish a post.","warning");return}u(!0);const h={id:`post_${Date.now()}`,authorId:(e==null?void 0:e.id)||"u_guest",authorName:(e==null?void 0:e.name)||"Guest User",authorUsername:(e==null?void 0:e.username)||"guest_user",authorAvatar:(e==null?void 0:e.avatar)||"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",authorVerified:(e==null?void 0:e.verified)||!1,content:n.trim(),image:s||null,likes:[],likeCount:0,comments:[],commentCount:0,shares:0,savedBy:[],timestamp:"Just now"};setTimeout(()=>{t(h),i(""),a(null),u(!1),r("Your post has been published to Socialla feed!","success")},300)};return e?o.jsxs("div",{className:"create-post-card glass-card",children:[o.jsxs("form",{onSubmit:d,children:[o.jsxs("div",{className:"create-post-header",children:[o.jsx("div",{className:"avatar avatar-md",children:o.jsx("img",{src:e.avatar,alt:e.name})}),o.jsx("textarea",{className:"create-post-textarea",placeholder:`What's on your mind, ${e.name.split(" ")[0]}?`,rows:"3",value:n,onChange:f=>i(f.target.value)})]}),s&&o.jsxs("div",{className:"create-post-image-preview",children:[o.jsx("img",{src:s,alt:"Post attachment preview"}),o.jsx("button",{type:"button",className:"btn-icon remove-image-btn",onClick:()=>a(null),title:"Remove attachment",children:o.jsx(gn,{})})]}),o.jsxs("div",{className:"create-post-actions",children:[o.jsxs("div",{className:"create-post-tools",children:[o.jsxs("label",{className:"btn-icon tool-btn",title:"Add Image",children:[o.jsx(Ym,{className:"tool-icon image-icon"}),o.jsx("input",{type:"file",accept:"image/*",className:"hidden-file-input",onChange:c})]}),o.jsx("button",{type:"button",className:"btn-icon tool-btn",title:"Add Tag",onClick:()=>r("Tag friends feature coming soon!","info"),children:o.jsx(Gx,{className:"tool-icon smile-icon"})}),o.jsx("button",{type:"button",className:"btn-icon tool-btn",title:"Add Location",onClick:()=>r("Location added to post!","info"),children:o.jsx(ey,{className:"tool-icon pin-icon"})})]}),o.jsxs("button",{type:"submit",className:"btn btn-primary create-post-submit-btn",disabled:l||!n.trim()&&!s,children:[o.jsx(Mc,{})," ",l?"Posting...":"Post"]})]})]}),o.jsx("style",{children:`
        .create-post-card {
          padding: 1.25rem;
          animation: createPostEntrance 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .create-post-header {
          display: flex;
          gap: 0.85rem;
        }

        .create-post-textarea {
          flex: 1;
          resize: none;
          background: transparent;
          color: var(--text-primary);
          font-size: 0.98rem;
          font-family: inherit;
          border: none;
          padding: 0.25rem 0;
        }

        .create-post-textarea::placeholder {
          color: var(--text-muted);
        }

        .create-post-image-preview {
          position: relative;
          margin-top: 0.75rem;
          border-radius: var(--radius-md);
          overflow: hidden;
          max-height: 280px;
        }

        .create-post-image-preview img {
          width: 100%;
          max-height: 280px;
          object-fit: cover;
        }

        .remove-image-btn {
          position: absolute;
          top: 8px;
          right: 8px;
          background: rgba(15, 23, 42, 0.7);
          color: #ffffff;
        }
        .remove-image-btn:hover {
          background: rgba(239, 68, 68, 0.9);
        }

        .create-post-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 1rem;
          padding-top: 0.75rem;
          border-top: 1px solid var(--border-color);
        }

        .create-post-tools {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .tool-btn {
          font-size: 1.25rem;
        }

        .image-icon { color: var(--primary); }
        .smile-icon { color: var(--warning); }
        .pin-icon { color: var(--accent); }

        .hidden-file-input {
          display: none;
        }

        .create-post-submit-btn {
          padding: 0.55rem 1.4rem;
          font-weight: 700;
        }
      `})]}):null};function fw(t){return D({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(t)}const hw=({comments:t,onAddComment:e})=>{const{currentUser:r}=Je(),{addToast:n}=bt(),[i,s]=b.useState(""),a=l=>{if(l.preventDefault(),!i.trim())return;if(!r){n("Please log in to leave a comment.","warning");return}const u={id:`c_${Date.now()}`,authorName:r.name,authorUsername:r.username,authorAvatar:r.avatar,content:i.trim(),timestamp:"Just now"};e(u),s(""),n("Comment added!","success")};return o.jsxs("div",{className:"comment-section",children:[o.jsxs("div",{className:"comments-list",children:[t.map(l=>o.jsxs("div",{className:"comment-item",children:[o.jsx("div",{className:"avatar avatar-sm",children:o.jsx("img",{src:l.authorAvatar,alt:l.authorName})}),o.jsxs("div",{className:"comment-bubble",children:[o.jsxs("div",{className:"comment-header",children:[o.jsx("span",{className:"comment-author-name",children:l.authorName}),o.jsx("span",{className:"comment-timestamp",children:l.timestamp})]}),o.jsx("p",{className:"comment-content",children:l.content})]})]},l.id)),t.length===0&&o.jsx("div",{className:"no-comments",children:"Be the first to comment on this post!"})]}),r&&o.jsxs("form",{onSubmit:a,className:"add-comment-form",children:[o.jsx("div",{className:"avatar avatar-sm",children:o.jsx("img",{src:r.avatar,alt:r.name})}),o.jsxs("div",{className:"input-wrapper has-right-icon",children:[o.jsx("input",{type:"text",className:"input-field comment-input",placeholder:"Write a comment...",value:i,onChange:l=>s(l.target.value)}),o.jsx("button",{type:"submit",className:"input-icon-right comment-submit-btn",disabled:!i.trim(),children:o.jsx(Mc,{})})]})]}),o.jsx("style",{children:`
        .comment-section {
          padding-top: 1rem;
          margin-top: 0.75rem;
          border-top: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          gap: 1rem;
          animation: commentSlideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .comments-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .comment-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
        }

        .comment-bubble {
          flex: 1;
          background: var(--bg-secondary);
          padding: 0.65rem 0.9rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
        }

        .comment-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.2rem;
        }

        .comment-author-name {
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--text-primary);
        }

        .comment-timestamp {
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        .comment-content {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .no-comments {
          font-size: 0.85rem;
          color: var(--text-muted);
          text-align: center;
          padding: 0.5rem 0;
        }

        .add-comment-form {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          margin-top: 0.25rem;
        }

        .comment-input {
          padding-top: 0.55rem;
          padding-bottom: 0.55rem;
          font-size: 0.88rem;
          border-radius: var(--radius-full);
        }

        .comment-submit-btn {
          color: var(--primary);
        }
      `})]})},pw=({post:t,onClose:e})=>{const{addToast:r}=bt(),n=()=>{const s=`${window.location.origin}/home#${t.id}`;navigator.clipboard.writeText(s),r("Post link copied to clipboard!","success"),e()},i=()=>{r("Post re-shared to your Socialla feed!","success"),e()};return o.jsxs("div",{className:"modal-backdrop",onClick:e,children:[o.jsxs("div",{className:"modal-content share-modal",onClick:s=>s.stopPropagation(),children:[o.jsxs("div",{className:"modal-header",children:[o.jsx("h3",{children:"Share Post"}),o.jsx("button",{className:"btn-icon",onClick:e,children:o.jsx(gn,{})})]}),o.jsxs("div",{className:"modal-body",children:[o.jsxs("div",{className:"share-post-preview",children:[o.jsx("div",{className:"avatar avatar-sm",children:o.jsx("img",{src:t.authorAvatar,alt:t.authorName})}),o.jsxs("div",{className:"share-preview-text",children:[o.jsx("span",{className:"share-preview-author",children:t.authorName}),o.jsx("p",{className:"share-preview-excerpt",children:t.content})]})]}),o.jsxs("div",{className:"share-options",children:[o.jsxs("button",{className:"btn btn-secondary share-opt-btn",onClick:n,children:[o.jsx(iy,{})," Copy Link"]}),o.jsxs("button",{className:"btn btn-primary share-opt-btn",onClick:i,children:[o.jsx($m,{})," Share to Socialla Feed"]})]})]})]}),o.jsx("style",{children:`
        .share-modal {
          padding: 1.5rem;
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .modal-body {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .share-post-preview {
          display: flex;
          gap: 0.75rem;
          padding: 0.85rem;
          background: var(--bg-secondary);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
        }

        .share-preview-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
          overflow: hidden;
        }

        .share-preview-author {
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--text-primary);
        }

        .share-preview-excerpt {
          font-size: 0.82rem;
          color: var(--text-muted);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .share-options {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .share-opt-btn {
          width: 100%;
          justify-content: center;
          padding: 0.75rem;
          font-weight: 600;
        }
      `})]})},Ui=({post:t,onUpdatePost:e,onDeletePost:r})=>{const{currentUser:n}=Je(),{addToast:i}=bt(),[s,a]=b.useState(()=>t.likes.includes(n==null?void 0:n.id)),[l,u]=b.useState(t.likeCount||t.likes.length),[c,d]=b.useState(()=>{var C;return(C=t.savedBy)==null?void 0:C.includes(n==null?void 0:n.id)}),[f,h]=b.useState(!1),[m,x]=b.useState(t.comments||[]),[p,_]=b.useState(!1),[v,g]=b.useState(!1),[y,w]=b.useState(!1),k=()=>{if(!n){i("Please log in to like posts.","warning");return}const C=!s;a(C),u(L=>C?L+1:L-1),C&&(w(!0),setTimeout(()=>w(!1),500));const E=C?[...t.likes,n.id]:t.likes.filter(L=>L!==n.id),M={...t,likes:E,likeCount:C?l+1:l-1};e(M)},j=()=>{if(!n){i("Please log in to save posts.","warning");return}const C=!c;d(C);const E=t.savedBy||[],M=C?[...E,n.id]:E.filter(F=>F!==n.id),L={...t,savedBy:M};e(L),i(C?"Post saved to your bookmarks!":"Removed from saved posts.","info")},S=C=>{const E=[...m,C];x(E);const M={...t,comments:E,commentCount:E.length};e(M)},N=(n==null?void 0:n.id)===t.authorId;return o.jsxs("article",{className:"post-card glass-card",children:[o.jsxs("div",{className:"post-header",children:[o.jsxs(ve,{to:`/profile?username=${t.authorUsername}`,className:"post-author-link",children:[o.jsx("div",{className:"avatar avatar-md",children:o.jsx("img",{src:t.authorAvatar,alt:t.authorName})}),o.jsxs("div",{className:"post-author-details",children:[o.jsxs("div",{className:"author-name-row",children:[o.jsx("span",{className:"author-name",children:t.authorName}),t.authorVerified&&o.jsx(Qt,{className:"verified-badge"})]}),o.jsxs("span",{className:"author-username",children:["@",t.authorUsername," • ",t.timestamp]})]})]}),o.jsxs("div",{className:"post-menu-wrapper",children:[o.jsx("button",{className:"btn-icon",onClick:()=>_(!p),children:o.jsx(Zx,{})}),p&&o.jsxs("div",{className:"post-dropdown-menu",children:[o.jsxs("button",{className:"dropdown-item",onClick:()=>{navigator.clipboard.writeText(window.location.href),i("Post link copied!","success"),_(!1)},children:[o.jsx(ty,{})," Copy Link"]}),N&&o.jsxs("button",{className:"dropdown-item danger-item",onClick:()=>{r(t.id),i("Post deleted.","info"),_(!1)},children:[o.jsx(fu,{})," Delete Post"]})]})]})]}),o.jsx("div",{className:"post-content",children:o.jsx("p",{children:t.content})}),t.image&&o.jsx("div",{className:"post-image-container img-zoom-container",children:o.jsx("img",{src:t.image,alt:"Post attachment"})}),o.jsxs("div",{className:"post-actions-bar",children:[o.jsxs("div",{className:"post-action-btns",children:[o.jsxs("button",{className:`post-action-btn like-btn ${s?"liked":""} ${y?"anim-heart-pop":""}`,onClick:k,children:[s?o.jsx(fw,{className:"heart-icon-filled"}):o.jsx(Zn,{}),o.jsx("span",{children:l})]}),o.jsxs("button",{className:"post-action-btn comment-btn",onClick:()=>h(!f),children:[o.jsx(ui,{}),o.jsx("span",{children:m.length})]}),o.jsxs("button",{className:"post-action-btn share-btn",onClick:()=>g(!0),children:[o.jsx($m,{}),o.jsx("span",{children:t.shares||0})]})]}),o.jsx("button",{className:`btn-icon save-btn ${c?"saved":""}`,onClick:j,title:c?"Unsave Post":"Save Post",children:o.jsx(ls,{})})]}),f&&o.jsx(hw,{comments:m,onAddComment:S}),v&&o.jsx(pw,{post:t,onClose:()=>g(!1)}),o.jsx("style",{children:`
        .post-card {
          padding: 1.25rem;
          animation: postReveal 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .post-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.85rem;
        }

        .post-author-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .post-author-details {
          display: flex;
          flex-direction: column;
        }

        .author-name-row {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .author-name {
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .verified-badge {
          color: var(--primary);
          font-size: 0.9rem;
        }

        .author-username {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .post-menu-wrapper {
          position: relative;
        }

        .post-dropdown-menu {
          position: absolute;
          right: 0;
          top: 100%;
          z-index: 50;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          padding: 0.4rem;
          min-width: 150px;
          display: flex;
          flex-direction: column;
          gap: 2px;
          animation: dropdownSlide 0.2s ease-out;
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.55rem 0.75rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
          border-radius: var(--radius-sm);
          transition: background var(--transition-fast);
        }

        .dropdown-item:hover {
          background: var(--primary-light);
          color: var(--primary);
        }

        .dropdown-item.danger-item:hover {
          background: var(--danger-light);
          color: var(--danger);
        }

        .post-content {
          font-size: 0.95rem;
          color: var(--text-primary);
          line-height: 1.55;
          margin-bottom: 0.85rem;
          white-space: pre-line;
        }

        .post-image-container {
          border-radius: var(--radius-md);
          max-height: 480px;
          overflow: hidden;
          margin-bottom: 0.85rem;
        }

        .post-image-container img {
          width: 100%;
          max-height: 480px;
          object-fit: cover;
        }

        .post-actions-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.5rem;
        }

        .post-action-btns {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .post-action-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-muted);
          transition: color var(--transition-fast), transform var(--transition-fast);
        }

        .post-action-btn span {
          font-size: 0.85rem;
        }

        .like-btn:hover { color: var(--danger); }
        .like-btn.liked { color: var(--danger); }
        .heart-icon-filled { color: var(--danger); }

        .comment-btn:hover { color: var(--primary); }
        .share-btn:hover { color: var(--success); }

        .save-btn.saved {
          color: var(--warning);
          fill: var(--warning);
        }
      `})]})},mw=()=>{const[t,e]=b.useState(()=>zc()),[r,n]=b.useState("all"),[i,s]=b.useState(!1),a=f=>{const h=[f,...t];e(h),rn(h),i&&s(!1)},l=f=>{const h=t.map(m=>m.id===f.id?f:m);e(h),rn(h)},u=f=>{const h=t.filter(m=>m.id!==f);e(h),rn(h)},d=r==="popular"?[...t].sort((f,h)=>(h.likeCount||0)-(f.likeCount||0)):t;return o.jsxs("div",{className:"app-layout",children:[o.jsx(ci,{onOpenCreatePost:()=>s(!0)}),o.jsxs("main",{className:"app-center-feed",children:[o.jsx(dw,{}),o.jsx(oh,{onPostCreated:a}),o.jsxs("div",{className:"feed-filter-bar glass-card",children:[o.jsxs("button",{className:`feed-tab ${r==="all"?"active":""}`,onClick:()=>n("all"),children:[o.jsx(Sf,{})," Recent"]}),o.jsxs("button",{className:`feed-tab ${r==="popular"?"active":""}`,onClick:()=>n("popular"),children:[o.jsx(dl,{})," Trending"]})]}),o.jsxs("div",{className:"posts-feed-list",children:[d.map(f=>o.jsx(Ui,{post:f,onUpdatePost:l,onDeletePost:u},f.id)),d.length===0&&o.jsxs("div",{className:"glass-card empty-state",children:[o.jsx("span",{className:"empty-state-icon",children:o.jsx(Sf,{})}),o.jsx("h3",{className:"empty-state-title",children:"No posts in feed"}),o.jsx("p",{children:"Be the first to share a post with the Socialla community!"})]})]})]}),o.jsx(Ss,{}),o.jsx(di,{onOpenCreatePost:()=>s(!0)}),i&&o.jsx("div",{className:"modal-backdrop",onClick:()=>s(!1),children:o.jsxs("div",{className:"modal-content",onClick:f=>f.stopPropagation(),children:[o.jsxs("div",{className:"modal-header p-4 flex justify-between items-center border-b",children:[o.jsx("h3",{children:"Create Post"}),o.jsx("button",{className:"btn-icon",onClick:()=>s(!1),children:o.jsx(gn,{})})]}),o.jsx(oh,{onPostCreated:a})]})}),o.jsx("style",{children:`
        .feed-filter-bar {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem;
        }

        .feed-tab {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.65rem 1rem;
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--text-muted);
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
        }

        .feed-tab:hover {
          color: var(--text-primary);
          background: var(--bg-secondary);
        }

        .feed-tab.active {
          background: var(--gradient-primary);
          color: #ffffff;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.25);
        }

        .posts-feed-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
      `})]})},gw=()=>{const[t,e]=Lm(),r=lr(),n=t.get("q")||"",[i,s]=b.useState(n),[a,l]=b.useState("trending"),[u,c]=b.useState(()=>zc()),[d,f]=b.useState(()=>Zr());b.useEffect(()=>{s(n)},[n]);const h=_=>{const v=u.map(g=>g.id===_.id?_:g);c(v),rn(v)},m=_=>{const v=u.filter(g=>g.id!==_);c(v),rn(v)},x=u.filter(_=>_.content.toLowerCase().includes(i.toLowerCase())||_.authorName.toLowerCase().includes(i.toLowerCase())||_.authorUsername.toLowerCase().includes(i.toLowerCase())),p=d.filter(_=>_.name.toLowerCase().includes(i.toLowerCase())||_.username.toLowerCase().includes(i.toLowerCase())||_.bio.toLowerCase().includes(i.toLowerCase()));return o.jsxs("div",{className:"app-layout",children:[o.jsx(ci,{}),o.jsxs("main",{className:"app-center-feed",children:[o.jsx("div",{className:"glass-card explore-search-card",children:o.jsxs("div",{className:"input-wrapper",children:[o.jsx(Lc,{className:"input-icon-left"}),o.jsx("input",{type:"text",className:"input-field search-input-large",placeholder:"Search posts, hashtags, or users...",value:i,onChange:_=>{s(_.target.value),e(_.target.value?{q:_.target.value}:{})}})]})}),o.jsxs("div",{className:"tab-group",children:[o.jsxs("button",{className:`tab-btn ${a==="trending"?"active":""}`,onClick:()=>l("trending"),children:[o.jsx(mu,{})," Media Grid"]}),o.jsxs("button",{className:`tab-btn ${a==="posts"?"active":""}`,onClick:()=>l("posts"),children:[o.jsx(dl,{})," Top Posts (",x.length,")"]}),o.jsxs("button",{className:`tab-btn ${a==="users"?"active":""}`,onClick:()=>l("users"),children:[o.jsx(du,{})," Accounts (",p.length,")"]})]}),a==="trending"&&o.jsx("div",{className:"explore-media-grid",children:u.filter(_=>_.image).map(_=>o.jsxs("div",{className:"explore-grid-item img-zoom-container",children:[o.jsx("img",{src:_.image,alt:_.content}),o.jsx("div",{className:"explore-grid-overlay",children:o.jsxs("div",{className:"overlay-stat",children:[o.jsx(Zn,{})," ",_.likeCount||_.likes.length]})})]},_.id))}),a==="posts"&&o.jsx("div",{className:"posts-feed-list",children:x.map(_=>o.jsx(Ui,{post:_,onUpdatePost:h,onDeletePost:m},_.id))}),a==="users"&&o.jsx("div",{className:"explore-users-grid",children:p.map(_=>o.jsxs("div",{className:"glass-card explore-user-card",children:[o.jsx("div",{className:"user-card-cover",style:{backgroundImage:`url(${_.cover})`}}),o.jsxs("div",{className:"user-card-body",children:[o.jsx("div",{className:"avatar avatar-lg user-card-avatar",children:o.jsx("img",{src:_.avatar,alt:_.name})}),o.jsx("strong",{className:"user-card-name",children:_.name}),o.jsxs("span",{className:"user-card-username",children:["@",_.username]}),o.jsx("p",{className:"user-card-bio",children:_.bio}),o.jsx("button",{className:"btn btn-outline btn-sm w-full mt-2",onClick:()=>r(`/profile?username=${_.username}`),children:"View Profile"})]})]},_.id))})]}),o.jsx(Ss,{}),o.jsx(di,{}),o.jsx("style",{children:`
        .explore-search-card {
          padding: 0.75rem;
        }

        .search-input-large {
          padding-top: 0.85rem;
          padding-bottom: 0.85rem;
          font-size: 1rem;
        }

        .explore-media-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 0.75rem;
        }

        .explore-grid-item {
          position: relative;
          aspect-ratio: 1;
          border-radius: var(--radius-md);
          overflow: hidden;
          cursor: pointer;
        }

        .explore-grid-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .explore-grid-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 23, 42, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity var(--transition-fast);
        }

        .explore-grid-item:hover .explore-grid-overlay {
          opacity: 1;
        }

        .overlay-stat {
          color: #ffffff;
          font-weight: 700;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .explore-users-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1.25rem;
        }

        .explore-user-card {
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .user-card-cover {
          height: 80px;
          background-size: cover;
          background-position: center;
        }

        .user-card-body {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-top: -35px;
        }

        .user-card-avatar {
          border: 3px solid var(--bg-card);
          margin-bottom: 0.5rem;
        }

        .user-card-name {
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .user-card-username {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }

        .user-card-bio {
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-clamp: 2;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `})]})},vw=({notif:t,onToggleRead:e})=>{const r=()=>{switch(t.type){case"like":return o.jsx(Zn,{className:"notif-icon notif-like"});case"comment":return o.jsx(ui,{className:"notif-icon notif-comment"});case"follow":return o.jsx(Dm,{className:"notif-icon notif-follow"});case"mention":return o.jsx(Gm,{className:"notif-icon notif-mention"});default:return o.jsx(Zn,{className:"notif-icon"})}};return o.jsxs("div",{className:`notification-item glass-card ${t.read?"":"unread"}`,children:[o.jsxs("div",{className:"notif-avatar-wrap",children:[o.jsx("div",{className:"avatar avatar-md",children:o.jsx("img",{src:t.user.avatar,alt:t.user.name})}),o.jsx("div",{className:"notif-badge-overlay",children:r()})]}),o.jsxs("div",{className:"notif-details",children:[o.jsxs("p",{className:"notif-text",children:[o.jsx("strong",{className:"notif-username",children:t.user.name})," ",t.targetText]}),o.jsx("span",{className:"notif-timestamp",children:t.timestamp})]}),o.jsx("button",{className:"btn-icon notif-read-btn",onClick:()=>e(t.id),title:t.read?"Mark as Unread":"Mark as Read",children:o.jsx(ly,{className:t.read?"read-check":""})}),o.jsx("style",{children:`
        .notification-item {
          padding: 1rem 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: background var(--transition-fast);
          position: relative;
        }

        .notification-item.unread {
          border-left: 4px solid var(--primary);
          background: var(--primary-light);
        }

        .notif-avatar-wrap {
          position: relative;
        }

        .notif-badge-overlay {
          position: absolute;
          bottom: -4px;
          right: -4px;
          width: 22px;
          height: 22px;
          border-radius: var(--radius-full);
          background: var(--bg-card);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
        }

        .notif-icon { font-size: 0.85rem; }
        .notif-like { color: var(--danger); }
        .notif-comment { color: var(--primary); }
        .notif-follow { color: var(--success); }
        .notif-mention { color: var(--warning); }

        .notif-details {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .notif-text {
          font-size: 0.92rem;
          color: var(--text-primary);
          line-height: 1.4;
        }

        .notif-username {
          font-weight: 700;
        }

        .notif-timestamp {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .notif-read-btn {
          color: var(--text-muted);
        }

        .read-check {
          color: var(--success);
        }
      `})]})},xw=()=>{const{addToast:t}=bt(),[e,r]=b.useState(()=>Ox()),[n,i]=b.useState("all"),s=c=>{const d=e.map(f=>f.id===c?{...f,read:!f.read}:f);r(d),yf(d)},a=()=>{const c=e.map(d=>({...d,read:!0}));r(c),yf(c),t("All notifications marked as read.","success")},l=n==="unread"?e.filter(c=>!c.read):e,u=e.filter(c=>!c.read).length;return o.jsxs("div",{className:"app-layout",children:[o.jsx(ci,{}),o.jsxs("main",{className:"app-center-feed",children:[o.jsxs("div",{className:"glass-card notif-header-card",children:[o.jsxs("div",{className:"notif-title-row",children:[o.jsxs("h2",{children:["Notifications ",u>0&&o.jsxs("span",{className:"badge badge-primary",children:[u," new"]})]}),u>0&&o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:a,children:[o.jsx(Qt,{})," Mark All Read"]})]}),o.jsxs("div",{className:"tab-group notif-tabs",children:[o.jsxs("button",{className:`tab-btn ${n==="all"?"active":""}`,onClick:()=>i("all"),children:["All Notifications (",e.length,")"]}),o.jsxs("button",{className:`tab-btn ${n==="unread"?"active":""}`,onClick:()=>i("unread"),children:["Unread (",u,")"]})]})]}),o.jsxs("div",{className:"notif-feed-list",children:[l.map(c=>o.jsx(vw,{notif:c,onToggleRead:s},c.id)),l.length===0&&o.jsxs("div",{className:"glass-card empty-state",children:[o.jsx("span",{className:"empty-state-icon",children:o.jsx(fl,{})}),o.jsx("h3",{className:"empty-state-title",children:"No notifications"}),o.jsx("p",{children:"You're all caught up! When people like, comment, or follow you, updates will appear here."})]})]})]}),o.jsx(Ss,{}),o.jsx(di,{}),o.jsx("style",{children:`
        .notif-header-card {
          padding: 1.25rem 1.25rem 0 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .notif-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .notif-title-row h2 {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 1.5rem;
        }

        .notif-tabs {
          margin-bottom: 0;
        }

        .notif-feed-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
      `})]})},yw=()=>{var h;const{currentUser:t}=Je(),[e,r]=b.useState(()=>Ax()),[n,i]=b.useState(((h=e[0])==null?void 0:h.id)||null),[s,a]=b.useState(""),[l,u]=b.useState(""),c=e.find(m=>m.id===n),d=m=>{if(m.preventDefault(),!s.trim()||!c)return;const x={id:`m_${Date.now()}`,senderId:"me",text:s.trim(),time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})},p=e.map(_=>_.id===n?{..._,messages:[..._.messages,x],unread:0}:_);r(p),Fx(p),a("")},f=e.filter(m=>m.participant.name.toLowerCase().includes(l.toLowerCase())||m.participant.username.toLowerCase().includes(l.toLowerCase()));return o.jsxs("div",{className:"app-layout messages-layout-wrapper",children:[o.jsx(ci,{}),o.jsx("main",{className:"messages-main-pane glass-card",children:o.jsxs("div",{className:"messages-layout",children:[o.jsxs("div",{className:`messages-convos-pane ${n?"mobile-hidden":""}`,children:[o.jsxs("div",{className:"convos-header",children:[o.jsx("h2",{children:"Direct Messages"}),o.jsxs("div",{className:"input-wrapper search-wrapper",children:[o.jsx(Lc,{className:"input-icon-left"}),o.jsx("input",{type:"text",className:"input-field",placeholder:"Search messages...",value:l,onChange:m=>u(m.target.value)})]})]}),o.jsx("div",{className:"convos-list",children:f.map(m=>{const x=m.messages[m.messages.length-1];return o.jsxs("div",{className:`convo-item ${m.id===n?"active":""}`,onClick:()=>i(m.id),children:[o.jsxs("div",{className:"avatar avatar-md",children:[o.jsx("img",{src:m.participant.avatar,alt:m.participant.name}),m.participant.online&&o.jsx("span",{className:"avatar-online-dot"})]}),o.jsxs("div",{className:"convo-details",children:[o.jsxs("div",{className:"convo-name-row",children:[o.jsx("span",{className:"convo-name",children:m.participant.name}),x&&o.jsx("span",{className:"convo-time",children:x.time})]}),o.jsx("p",{className:"convo-preview",children:(x==null?void 0:x.text)||"No messages yet"})]})]},m.id)})})]}),o.jsx("div",{className:`messages-chat-pane ${n?"":"mobile-hidden"}`,children:c?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"chat-header",children:[o.jsx("button",{className:"btn-icon mobile-back-btn",onClick:()=>i(null),children:o.jsx(uy,{})}),o.jsxs("div",{className:"avatar avatar-md",children:[o.jsx("img",{src:c.participant.avatar,alt:c.participant.name}),c.participant.online&&o.jsx("span",{className:"avatar-online-dot"})]}),o.jsxs("div",{className:"chat-header-text",children:[o.jsx("span",{className:"chat-user-name",children:c.participant.name}),o.jsx("span",{className:"chat-user-status",children:c.participant.online?"Online now":"Offline"})]})]}),o.jsx("div",{className:"chat-messages-area",children:c.messages.map(m=>{const x=m.senderId==="me"||m.senderId===(t==null?void 0:t.id);return o.jsxs("div",{className:`chat-bubble-row ${x?"me":"them"}`,children:[!x&&o.jsx("div",{className:"avatar avatar-sm",children:o.jsx("img",{src:c.participant.avatar,alt:c.participant.name})}),o.jsxs("div",{className:"chat-bubble",children:[o.jsx("p",{children:m.text}),o.jsx("span",{className:"chat-bubble-time",children:m.time})]})]},m.id)})}),o.jsx("form",{onSubmit:d,className:"chat-input-form",children:o.jsxs("div",{className:"input-wrapper has-right-icon",children:[o.jsx("input",{type:"text",className:"input-field chat-input",placeholder:"Type a message...",value:s,onChange:m=>a(m.target.value)}),o.jsx("button",{type:"submit",className:"input-icon-right chat-send-btn",disabled:!s.trim(),children:o.jsx(Mc,{})})]})})]}):o.jsxs("div",{className:"empty-state",children:[o.jsx(ui,{className:"empty-state-icon"}),o.jsx("h3",{className:"empty-state-title",children:"Select a conversation"}),o.jsx("p",{children:"Choose a friend from the left sidebar to start chatting!"})]})})]})}),o.jsx(di,{}),o.jsx("style",{children:`
        .messages-main-pane {
          padding: 0;
          height: calc(100vh - 3rem);
          overflow: hidden;
        }

        .messages-layout {
          display: grid;
          grid-template-columns: 320px 1fr;
          height: 100%;
        }

        .messages-convos-pane {
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .convos-header {
          padding: 1.25rem;
          border-bottom: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .convos-header h2 { font-size: 1.35rem; }

        .convos-list {
          flex: 1;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }

        .convo-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 1.25rem;
          cursor: pointer;
          border-bottom: 1px solid var(--border-color);
          transition: background var(--transition-fast);
        }

        .convo-item:hover {
          background: var(--primary-light);
        }

        .convo-item.active {
          background: var(--primary-light);
          border-left: 3px solid var(--primary);
        }

        .convo-details {
          flex: 1;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .convo-name-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .convo-name {
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--text-primary);
        }

        .convo-time {
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        .convo-preview {
          font-size: 0.82rem;
          color: var(--text-secondary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .messages-chat-pane {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: var(--bg-main);
        }

        .chat-header {
          padding: 0.85rem 1.25rem;
          background: var(--bg-card);
          border-bottom: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .chat-header-text {
          display: flex;
          flex-direction: column;
        }

        .chat-user-name {
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .chat-user-status {
          font-size: 0.75rem;
          color: var(--success);
        }

        .chat-messages-area {
          flex: 1;
          overflow-y: auto;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .chat-bubble-row {
          display: flex;
          align-items: flex-end;
          gap: 0.5rem;
          max-width: 75%;
        }

        .chat-bubble-row.me {
          align-self: flex-end;
          flex-direction: row-reverse;
        }

        .chat-bubble-row.them {
          align-self: flex-start;
        }

        .chat-bubble {
          padding: 0.7rem 1rem;
          border-radius: var(--radius-md);
          font-size: 0.92rem;
          line-height: 1.4;
          position: relative;
        }

        .chat-bubble-row.me .chat-bubble {
          background: var(--gradient-primary);
          color: #ffffff;
          border-bottom-right-radius: 2px;
        }

        .chat-bubble-row.them .chat-bubble {
          background: var(--bg-card);
          color: var(--text-primary);
          border: 1px solid var(--border-color);
          border-bottom-left-radius: 2px;
        }

        .chat-bubble-time {
          display: block;
          font-size: 0.68rem;
          opacity: 0.75;
          text-align: right;
          margin-top: 2px;
        }

        .chat-input-form {
          padding: 0.85rem 1.25rem;
          background: var(--bg-card);
          border-top: 1px solid var(--border-color);
        }

        .chat-input {
          border-radius: var(--radius-full);
        }

        .chat-send-btn {
          color: var(--primary);
        }

        .mobile-back-btn {
          display: none;
        }

        @media (max-width: 767px) {
          .messages-layout {
            grid-template-columns: 1fr;
          }
          .mobile-back-btn {
            display: inline-flex;
          }
        }
      `})]})},_w=({onClose:t})=>{const{currentUser:e,updateProfile:r}=Je(),{addToast:n}=bt(),[i,s]=b.useState((e==null?void 0:e.name)||""),[a,l]=b.useState((e==null?void 0:e.username)||""),[u,c]=b.useState((e==null?void 0:e.bio)||""),[d,f]=b.useState((e==null?void 0:e.avatar)||""),[h,m]=b.useState((e==null?void 0:e.cover)||""),x=v=>{const g=v.target.files[0];if(g){const y=new FileReader;y.onloadend=()=>f(y.result),y.readAsDataURL(g)}},p=v=>{const g=v.target.files[0];if(g){const y=new FileReader;y.onloadend=()=>m(y.result),y.readAsDataURL(g)}},_=v=>{if(v.preventDefault(),!i.trim()||!a.trim()){n("Name and username cannot be empty.","warning");return}r({name:i.trim(),username:a.trim(),bio:u.trim(),avatar:d,cover:h}),n("Profile updated successfully!","success"),t()};return o.jsxs("div",{className:"modal-backdrop",onClick:t,children:[o.jsxs("div",{className:"modal-content edit-profile-modal",onClick:v=>v.stopPropagation(),children:[o.jsxs("div",{className:"modal-header",children:[o.jsx("h3",{children:"Edit Profile"}),o.jsx("button",{className:"btn-icon",onClick:t,children:o.jsx(gn,{})})]}),o.jsxs("form",{onSubmit:_,className:"modal-form",children:[o.jsx("div",{className:"edit-cover-wrap",style:{backgroundImage:`url(${h})`},children:o.jsxs("label",{className:"btn btn-secondary change-cover-btn",children:[o.jsx(Aa,{})," Change Cover",o.jsx("input",{type:"file",accept:"image/*",onChange:p,hidden:!0})]})}),o.jsxs("div",{className:"edit-avatar-wrap",children:[o.jsx("div",{className:"avatar avatar-xl",children:o.jsx("img",{src:d,alt:"Avatar Preview"})}),o.jsxs("label",{className:"btn-icon change-avatar-btn",title:"Change Profile Picture",children:[o.jsx(Aa,{}),o.jsx("input",{type:"file",accept:"image/*",onChange:x,hidden:!0})]})]}),o.jsxs("div",{className:"input-group",children:[o.jsx("label",{className:"input-label",children:"Full Name"}),o.jsx("input",{type:"text",className:"input-field",value:i,onChange:v=>s(v.target.value),required:!0})]}),o.jsxs("div",{className:"input-group",children:[o.jsx("label",{className:"input-label",children:"Username"}),o.jsx("input",{type:"text",className:"input-field",value:a,onChange:v=>l(v.target.value),required:!0})]}),o.jsxs("div",{className:"input-group",children:[o.jsx("label",{className:"input-label",children:"Bio"}),o.jsx("textarea",{className:"input-field",rows:"3",value:u,onChange:v=>c(v.target.value)})]}),o.jsxs("div",{className:"modal-footer",children:[o.jsx("button",{type:"button",className:"btn btn-secondary",onClick:t,children:"Cancel"}),o.jsxs("button",{type:"submit",className:"btn btn-primary",children:[o.jsx(Wm,{})," Save Changes"]})]})]})]}),o.jsx("style",{children:`
        .edit-profile-modal {
          padding: 1.5rem;
          max-width: 580px;
        }

        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .edit-cover-wrap {
          height: 140px;
          border-radius: var(--radius-md);
          background-size: cover;
          background-position: center;
          position: relative;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          padding: 0.75rem;
        }

        .change-cover-btn {
          font-size: 0.8rem;
          padding: 0.4rem 0.8rem;
        }

        .edit-avatar-wrap {
          position: relative;
          width: 90px;
          margin-top: -50px;
          margin-left: 1rem;
        }

        .change-avatar-btn {
          position: absolute;
          bottom: 0;
          right: 0;
          background: var(--primary);
          color: #ffffff;
          box-shadow: var(--shadow-md);
        }

        .modal-footer {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.75rem;
          margin-top: 0.5rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-color);
        }
      `})]})},ww=()=>{const{currentUser:t}=Je(),[e]=Lm(),r=e.get("username"),n=e.get("tab")||"posts",[i,s]=b.useState(n),[a,l]=b.useState(!1),[u]=b.useState(()=>Zr()),[c,d]=b.useState(()=>zc()),f=r&&u.find(g=>g.username.toLowerCase()===r.toLowerCase())||t,h=(f==null?void 0:f.id)===(t==null?void 0:t.id),m=g=>{const y=c.map(w=>w.id===g.id?g:w);d(y),rn(y)},x=g=>{const y=c.filter(w=>w.id!==g);d(y),rn(y)},p=c.filter(g=>g.authorId===(f==null?void 0:f.id)||g.authorUsername===(f==null?void 0:f.username)),_=p.filter(g=>g.image),v=c.filter(g=>{var y;return(y=g.savedBy)==null?void 0:y.includes(f==null?void 0:f.id)});return f?o.jsxs("div",{className:"app-layout",children:[o.jsx(ci,{}),o.jsxs("main",{className:"app-center-feed",children:[o.jsxs("div",{className:"glass-card profile-card",children:[o.jsx("div",{className:"profile-banner",style:{backgroundImage:`url(${f.cover})`}}),o.jsxs("div",{className:"profile-info-area",children:[o.jsxs("div",{className:"profile-header-row",children:[o.jsx("div",{className:"profile-avatar-wrapper",children:o.jsx("div",{className:"avatar avatar-xl profile-avatar",children:o.jsx("img",{src:f.avatar,alt:f.name})})}),h?o.jsxs("button",{className:"btn btn-secondary edit-profile-btn",onClick:()=>l(!0),children:[o.jsx(ny,{})," Edit Profile"]}):o.jsx("button",{className:"btn btn-primary edit-profile-btn",children:"Follow"})]}),o.jsxs("div",{className:"profile-meta",children:[o.jsxs("h1",{className:"profile-name",children:[f.name,f.verified&&o.jsx(Qt,{className:"verified-badge"})]}),o.jsxs("span",{className:"profile-username",children:["@",f.username]}),f.bio&&o.jsx("p",{className:"profile-bio",children:f.bio}),o.jsxs("div",{className:"profile-stats-row",children:[o.jsxs("div",{className:"stat-item",children:[o.jsx("strong",{children:f.followers||0}),o.jsx("span",{children:"Followers"})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("strong",{children:f.following||0}),o.jsx("span",{children:"Following"})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("strong",{children:p.length}),o.jsx("span",{children:"Posts"})]})]}),f.joinedDate&&o.jsxs("div",{className:"joined-date",children:[o.jsx(oy,{})," Joined ",f.joinedDate]})]}),o.jsxs("div",{className:"tab-group profile-tabs",children:[o.jsxs("button",{className:`tab-btn ${i==="posts"?"active":""}`,onClick:()=>s("posts"),children:[o.jsx(mu,{})," Posts (",p.length,")"]}),o.jsxs("button",{className:`tab-btn ${i==="media"?"active":""}`,onClick:()=>s("media"),children:[o.jsx(Ym,{})," Media (",_.length,")"]}),o.jsxs("button",{className:`tab-btn ${i==="saved"?"active":""}`,onClick:()=>s("saved"),children:[o.jsx(ls,{})," Saved (",v.length,")"]})]})]})]}),o.jsxs("div",{className:"posts-feed-list",children:[i==="posts"&&p.map(g=>o.jsx(Ui,{post:g,onUpdatePost:m,onDeletePost:x},g.id)),i==="media"&&_.map(g=>o.jsx(Ui,{post:g,onUpdatePost:m,onDeletePost:x},g.id)),i==="saved"&&v.map(g=>o.jsx(Ui,{post:g,onUpdatePost:m,onDeletePost:x},g.id)),(i==="posts"&&p.length===0||i==="media"&&_.length===0||i==="saved"&&v.length===0)&&o.jsxs("div",{className:"glass-card empty-state",children:[o.jsx("span",{className:"empty-state-icon",children:o.jsx(mu,{})}),o.jsx("h3",{className:"empty-state-title",children:"No content here yet"}),o.jsx("p",{children:"Items will appear here once published or saved."})]})]})]}),o.jsx(Ss,{}),o.jsx(di,{}),a&&o.jsx(_w,{onClose:()=>l(!1)}),o.jsx("style",{children:`
        .profile-card {
          overflow: hidden;
          padding: 0;
        }

        .profile-banner {
          height: 180px;
          background-size: cover;
          background-position: center;
        }

        .profile-info-area {
          padding: 0 1.5rem 1rem 1.5rem;
        }

        .profile-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-top: -55px;
          margin-bottom: 1rem;
        }

        .profile-avatar-wrapper {
          position: relative;
        }

        .profile-avatar {
          border: 4px solid var(--bg-card);
          box-shadow: var(--shadow-lg);
        }

        .edit-profile-btn {
          font-weight: 700;
          padding: 0.6rem 1.25rem;
        }

        .profile-meta {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          margin-bottom: 1.5rem;
        }

        .profile-name {
          font-size: 1.75rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .profile-username {
          font-size: 0.95rem;
          color: var(--text-muted);
        }

        .profile-bio {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin: 0.4rem 0;
        }

        .profile-stats-row {
          display: flex;
          align-items: center;
          gap: 1.75rem;
          margin-top: 0.5rem;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.9rem;
        }

        .stat-item strong {
          color: var(--text-primary);
        }

        .stat-item span {
          color: var(--text-muted);
        }

        .joined-date {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-top: 0.25rem;
        }

        .profile-tabs {
          margin-bottom: 0;
        }
      `})]}):null},kw=()=>{var j,S,N,C,E;const{currentUser:t,updateProfile:e,logout:r}=Je(),{theme:n,setTheme:i}=Am(),{addToast:s}=bt(),a=lr(),[l,u]=b.useState("account"),[c,d]=b.useState((t==null?void 0:t.name)||""),[f,h]=b.useState((t==null?void 0:t.username)||""),[m,x]=b.useState((t==null?void 0:t.email)||""),[p,_]=b.useState(()=>uu()),v=M=>{M.preventDefault(),e({name:c,username:f,email:m}),s("Account details updated successfully!","success")},g=M=>{const L={...p,notifications:{...p.notifications,[M]:!p.notifications[M]}};_(L),cu(L),s("Notification preferences saved.","info")},y=M=>{const L={...p,privacy:{...p.privacy,[M]:!p.privacy[M]}};_(L),cu(L),s("Privacy preferences updated.","info")},w=()=>{window.confirm("Are you sure you want to reset all local storage data back to default?")&&(Ix(),s("All local data reset. Reloading app...","info"),setTimeout(()=>{window.location.href="/login"},1e3))},k=()=>{r(),s("Logged out successfully.","info"),a("/login")};return o.jsxs("div",{className:"app-layout",children:[o.jsx(ci,{}),o.jsx("main",{className:"app-center-feed",children:o.jsxs("div",{className:"glass-card settings-card",children:[o.jsxs("div",{className:"settings-header",children:[o.jsx("h2",{children:"Settings & Preferences"}),o.jsx("p",{children:"Manage your account settings, appearance, and privacy controls."})]}),o.jsxs("div",{className:"settings-container",children:[o.jsxs("div",{className:"settings-nav",children:[o.jsxs("button",{className:`settings-nav-btn ${l==="account"?"active":""}`,onClick:()=>u("account"),children:[o.jsx(cl,{})," Account"]}),o.jsxs("button",{className:`settings-nav-btn ${l==="appearance"?"active":""}`,onClick:()=>u("appearance"),children:[o.jsx(hu,{})," Appearance"]}),o.jsxs("button",{className:`settings-nav-btn ${l==="notifications"?"active":""}`,onClick:()=>u("notifications"),children:[o.jsx(fl,{})," Notifications"]}),o.jsxs("button",{className:`settings-nav-btn ${l==="privacy"?"active":""}`,onClick:()=>u("privacy"),children:[o.jsx(Um,{})," Privacy"]}),o.jsxs("button",{className:`settings-nav-btn danger-nav ${l==="danger"?"active":""}`,onClick:()=>u("danger"),children:[o.jsx(fu,{})," Account Actions"]})]}),o.jsxs("div",{className:"settings-content",children:[l==="account"&&o.jsxs("form",{onSubmit:v,className:"settings-section",children:[o.jsx("h3",{children:"Account Settings"}),o.jsxs("div",{className:"input-group",children:[o.jsx("label",{className:"input-label",children:"Display Name"}),o.jsx("input",{type:"text",className:"input-field",value:c,onChange:M=>d(M.target.value)})]}),o.jsxs("div",{className:"input-group",children:[o.jsx("label",{className:"input-label",children:"Username"}),o.jsx("input",{type:"text",className:"input-field",value:f,onChange:M=>h(M.target.value)})]}),o.jsxs("div",{className:"input-group",children:[o.jsx("label",{className:"input-label",children:"Email Address"}),o.jsx("input",{type:"email",className:"input-field",value:m,onChange:M=>x(M.target.value)})]}),o.jsxs("button",{type:"submit",className:"btn btn-primary mt-2",children:[o.jsx(Wm,{})," Save Changes"]})]}),l==="appearance"&&o.jsxs("div",{className:"settings-section",children:[o.jsx("h3",{children:"Theme & Appearance"}),o.jsx("p",{className:"section-desc",children:"Select how Socialla looks for you."}),o.jsxs("div",{className:"theme-options-grid",children:[o.jsxs("div",{className:`theme-option-card ${n==="dark"?"selected":""}`,onClick:()=>i("dark"),children:[o.jsx("div",{className:"theme-card-icon",children:o.jsx(Hm,{})}),o.jsx("strong",{children:"Dark Mode"}),o.jsx("span",{children:"Sleek dark aesthetics"})]}),o.jsxs("div",{className:`theme-option-card ${n==="light"?"selected":""}`,onClick:()=>i("light"),children:[o.jsx("div",{className:"theme-card-icon",children:o.jsx(hu,{})}),o.jsx("strong",{children:"Light Mode"}),o.jsx("span",{children:"Clean crisp white vibe"})]}),o.jsxs("div",{className:`theme-option-card ${n==="system"?"selected":""}`,onClick:()=>i("system"),children:[o.jsx("div",{className:"theme-card-icon",children:o.jsx(Jx,{})}),o.jsx("strong",{children:"System Preference"}),o.jsx("span",{children:"Matches OS settings"})]})]})]}),l==="notifications"&&o.jsxs("div",{className:"settings-section",children:[o.jsx("h3",{children:"Notification Preferences"}),o.jsx("p",{className:"section-desc",children:"Choose which activities trigger notifications."}),o.jsxs("div",{className:"toggle-list",children:[o.jsxs("div",{className:"toggle-item",children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Like Alerts"}),o.jsx("p",{children:"Notify when someone likes your posts"})]}),o.jsx("input",{type:"checkbox",className:"toggle-checkbox",checked:((j=p.notifications)==null?void 0:j.likes)??!0,onChange:()=>g("likes")})]}),o.jsxs("div",{className:"toggle-item",children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Comment Alerts"}),o.jsx("p",{children:"Notify when someone comments on your posts"})]}),o.jsx("input",{type:"checkbox",className:"toggle-checkbox",checked:((S=p.notifications)==null?void 0:S.comments)??!0,onChange:()=>g("comments")})]}),o.jsxs("div",{className:"toggle-item",children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Follower Alerts"}),o.jsx("p",{children:"Notify when someone starts following you"})]}),o.jsx("input",{type:"checkbox",className:"toggle-checkbox",checked:((N=p.notifications)==null?void 0:N.follows)??!0,onChange:()=>g("follows")})]})]})]}),l==="privacy"&&o.jsxs("div",{className:"settings-section",children:[o.jsx("h3",{children:"Privacy Controls"}),o.jsxs("div",{className:"toggle-list",children:[o.jsxs("div",{className:"toggle-item",children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Private Profile"}),o.jsx("p",{children:"Only followers can see your posts"})]}),o.jsx("input",{type:"checkbox",className:"toggle-checkbox",checked:((C=p.privacy)==null?void 0:C.privateProfile)??!1,onChange:()=>y("privateProfile")})]}),o.jsxs("div",{className:"toggle-item",children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Show Online Status"}),o.jsx("p",{children:"Allow friends to see when you are active"})]}),o.jsx("input",{type:"checkbox",className:"toggle-checkbox",checked:((E=p.privacy)==null?void 0:E.showOnlineStatus)??!0,onChange:()=>y("showOnlineStatus")})]})]})]}),l==="danger"&&o.jsxs("div",{className:"settings-section",children:[o.jsx("h3",{children:"Account Actions"}),o.jsxs("div",{className:"danger-actions-list",children:[o.jsxs("div",{className:"danger-action-card",children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Log Out"}),o.jsx("p",{children:"Sign out of your active Socialla session"})]}),o.jsxs("button",{className:"btn btn-secondary",onClick:k,children:[o.jsx(qm,{})," Logout"]})]}),o.jsxs("div",{className:"danger-action-card",children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Reset All Local Storage Data"}),o.jsx("p",{children:"Clear custom posts, comments, and revert seed state"})]}),o.jsxs("button",{className:"btn btn-primary bg-danger",onClick:w,children:[o.jsx(fu,{})," Reset Local Data"]})]})]})]})]})]})]})}),o.jsx(Ss,{}),o.jsx(di,{}),o.jsx("style",{children:`
        .settings-card {
          padding: 1.5rem;
        }

        .settings-header {
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-color);
        }

        .settings-header p {
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .settings-container {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 1.5rem;
        }

        .settings-nav {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .settings-nav-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--text-secondary);
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
          text-align: left;
        }

        .settings-nav-btn:hover {
          background: var(--primary-light);
          color: var(--primary);
        }

        .settings-nav-btn.active {
          background: var(--gradient-primary);
          color: #ffffff;
        }

        .settings-content {
          padding-left: 1rem;
          border-left: 1px solid var(--border-color);
        }

        .settings-section {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .section-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
        }

        .theme-options-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 1rem;
        }

        .theme-option-card {
          padding: 1.25rem;
          border-radius: var(--radius-md);
          border: 2px solid var(--border-color);
          background: var(--bg-card);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.5rem;
          transition: all var(--transition-fast);
        }

        .theme-option-card:hover {
          border-color: var(--primary);
        }

        .theme-option-card.selected {
          border-color: var(--primary);
          background: var(--primary-light);
        }

        .theme-card-icon {
          font-size: 1.75rem;
          color: var(--primary);
        }

        .toggle-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .toggle-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem;
          background: var(--bg-secondary);
          border-radius: var(--radius-md);
        }

        .toggle-item p {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .toggle-checkbox {
          width: 20px;
          height: 20px;
          accent-color: var(--primary);
          cursor: pointer;
        }

        .danger-actions-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .danger-action-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
        }

        .bg-danger {
          background: var(--danger) !important;
          box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);
        }

        @media (max-width: 768px) {
          .settings-container {
            grid-template-columns: 1fr;
          }
          .settings-content {
            border-left: none;
            padding-left: 0;
            border-top: 1px solid var(--border-color);
            padding-top: 1.25rem;
          }
        }
      `})]})};function Sw(){return o.jsx(Bx,{children:o.jsx(dy,{children:o.jsx(Dx,{children:o.jsxs(vx,{children:[o.jsx(Ct,{path:"/",element:o.jsx(lw,{})}),o.jsx(Ct,{path:"/login",element:o.jsx(ow,{})}),o.jsx(Ct,{path:"/register",element:o.jsx(uw,{})}),o.jsx(Ct,{path:"/home",element:o.jsx(yn,{children:o.jsx(mw,{})})}),o.jsx(Ct,{path:"/explore",element:o.jsx(yn,{children:o.jsx(gw,{})})}),o.jsx(Ct,{path:"/notifications",element:o.jsx(yn,{children:o.jsx(xw,{})})}),o.jsx(Ct,{path:"/messages",element:o.jsx(yn,{children:o.jsx(yw,{})})}),o.jsx(Ct,{path:"/profile",element:o.jsx(yn,{children:o.jsx(ww,{})})}),o.jsx(Ct,{path:"/settings",element:o.jsx(yn,{children:o.jsx(kw,{})})}),o.jsx(Ct,{path:"*",element:o.jsx(zm,{to:"/",replace:!0})})]})})})})}io.createRoot(document.getElementById("root")).render(o.jsx(Kt.StrictMode,{children:o.jsx(Nx,{children:o.jsx(Sw,{})})}));
