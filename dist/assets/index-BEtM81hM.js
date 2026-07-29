function vf(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const l=Object.getOwnPropertyDescriptor(r,a);l&&Object.defineProperty(e,a,l.get?l:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function xf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ec={exports:{}},Da={},Pc={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pr=Symbol.for("react.element"),yf=Symbol.for("react.portal"),wf=Symbol.for("react.fragment"),jf=Symbol.for("react.strict_mode"),kf=Symbol.for("react.profiler"),Nf=Symbol.for("react.provider"),Sf=Symbol.for("react.context"),Cf=Symbol.for("react.forward_ref"),bf=Symbol.for("react.suspense"),Ef=Symbol.for("react.memo"),Pf=Symbol.for("react.lazy"),ns=Symbol.iterator;function Lf(e){return e===null||typeof e!="object"?null:(e=ns&&e[ns]||e["@@iterator"],typeof e=="function"?e:null)}var Lc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_c=Object.assign,zc={};function zn(e,t,n){this.props=e,this.context=t,this.refs=zc,this.updater=n||Lc}zn.prototype.isReactComponent={};zn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};zn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Tc(){}Tc.prototype=zn.prototype;function Xl(e,t,n){this.props=e,this.context=t,this.refs=zc,this.updater=n||Lc}var Zl=Xl.prototype=new Tc;Zl.constructor=Xl;_c(Zl,zn.prototype);Zl.isPureReactComponent=!0;var rs=Array.isArray,Rc=Object.prototype.hasOwnProperty,eo={current:null},Ic={key:!0,ref:!0,__self:!0,__source:!0};function Oc(e,t,n){var r,a={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)Rc.call(t,r)&&!Ic.hasOwnProperty(r)&&(a[r]=t[r]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)a[r]===void 0&&(a[r]=s[r]);return{$$typeof:Pr,type:e,key:l,ref:o,props:a,_owner:eo.current}}function _f(e,t){return{$$typeof:Pr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function to(e){return typeof e=="object"&&e!==null&&e.$$typeof===Pr}function zf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var as=/\/+/g;function ci(e,t){return typeof e=="object"&&e!==null&&e.key!=null?zf(""+e.key):t.toString(36)}function Zr(e,t,n,r,a){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Pr:case yf:o=!0}}if(o)return o=e,a=a(o),e=r===""?"."+ci(o,0):r,rs(a)?(n="",e!=null&&(n=e.replace(as,"$&/")+"/"),Zr(a,t,n,"",function(u){return u})):a!=null&&(to(a)&&(a=_f(a,n+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(as,"$&/")+"/")+e)),t.push(a)),1;if(o=0,r=r===""?".":r+":",rs(e))for(var s=0;s<e.length;s++){l=e[s];var c=r+ci(l,s);o+=Zr(l,t,n,c,a)}else if(c=Lf(e),typeof c=="function")for(e=c.call(e),s=0;!(l=e.next()).done;)l=l.value,c=r+ci(l,s++),o+=Zr(l,t,n,c,a);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Mr(e,t,n){if(e==null)return e;var r=[],a=0;return Zr(e,r,"","",function(l){return t.call(n,l,a++)}),r}function Tf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var me={current:null},ea={transition:null},Rf={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:ea,ReactCurrentOwner:eo};function Mc(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:Mr,forEach:function(e,t,n){Mr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Mr(e,function(){t++}),t},toArray:function(e){return Mr(e,function(t){return t})||[]},only:function(e){if(!to(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=zn;M.Fragment=wf;M.Profiler=kf;M.PureComponent=Xl;M.StrictMode=jf;M.Suspense=bf;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rf;M.act=Mc;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=_c({},e.props),a=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=eo.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)Rc.call(t,c)&&!Ic.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Pr,type:e.type,key:a,ref:l,props:r,_owner:o}};M.createContext=function(e){return e={$$typeof:Sf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Nf,_context:e},e.Consumer=e};M.createElement=Oc;M.createFactory=function(e){var t=Oc.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:Cf,render:e}};M.isValidElement=to;M.lazy=function(e){return{$$typeof:Pf,_payload:{_status:-1,_result:e},_init:Tf}};M.memo=function(e,t){return{$$typeof:Ef,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=ea.transition;ea.transition={};try{e()}finally{ea.transition=t}};M.unstable_act=Mc;M.useCallback=function(e,t){return me.current.useCallback(e,t)};M.useContext=function(e){return me.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return me.current.useDeferredValue(e)};M.useEffect=function(e,t){return me.current.useEffect(e,t)};M.useId=function(){return me.current.useId()};M.useImperativeHandle=function(e,t,n){return me.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return me.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return me.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return me.current.useMemo(e,t)};M.useReducer=function(e,t,n){return me.current.useReducer(e,t,n)};M.useRef=function(e){return me.current.useRef(e)};M.useState=function(e){return me.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return me.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return me.current.useTransition()};M.version="18.3.1";Pc.exports=M;var x=Pc.exports;const tt=xf(x),If=vf({__proto__:null,default:tt},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Of=x,Mf=Symbol.for("react.element"),Ff=Symbol.for("react.fragment"),Af=Object.prototype.hasOwnProperty,Df=Of.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Uf={key:!0,ref:!0,__self:!0,__source:!0};function Fc(e,t,n){var r,a={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Af.call(t,r)&&!Uf.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:Mf,type:e,key:l,ref:o,props:a,_owner:Df.current}}Da.Fragment=Ff;Da.jsx=Fc;Da.jsxs=Fc;Ec.exports=Da;var i=Ec.exports,Fi={},Ac={exports:{}},be={},Dc={exports:{}},Uc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,R){var O=_.length;_.push(R);e:for(;0<O;){var q=O-1>>>1,ne=_[q];if(0<a(ne,R))_[q]=R,_[O]=ne,O=q;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var R=_[0],O=_.pop();if(O!==R){_[0]=O;e:for(var q=0,ne=_.length,Ir=ne>>>1;q<Ir;){var It=2*(q+1)-1,si=_[It],Ot=It+1,Or=_[Ot];if(0>a(si,O))Ot<ne&&0>a(Or,si)?(_[q]=Or,_[Ot]=O,q=Ot):(_[q]=si,_[It]=O,q=It);else if(Ot<ne&&0>a(Or,O))_[q]=Or,_[Ot]=O,q=Ot;else break e}}return R}function a(_,R){var O=_.sortIndex-R.sortIndex;return O!==0?O:_.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],u=[],g=1,f=null,p=3,v=!1,w=!1,j=!1,k=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(_){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=_)r(u),R.sortIndex=R.expirationTime,t(c,R);else break;R=n(u)}}function y(_){if(j=!1,h(_),!w)if(n(c)!==null)w=!0,li(S);else{var R=n(u);R!==null&&oi(y,R.startTime-_)}}function S(_,R){w=!1,j&&(j=!1,m(L),L=-1),v=!0;var O=p;try{for(h(R),f=n(c);f!==null&&(!(f.expirationTime>R)||_&&!I());){var q=f.callback;if(typeof q=="function"){f.callback=null,p=f.priorityLevel;var ne=q(f.expirationTime<=R);R=e.unstable_now(),typeof ne=="function"?f.callback=ne:f===n(c)&&r(c),h(R)}else r(c);f=n(c)}if(f!==null)var Ir=!0;else{var It=n(u);It!==null&&oi(y,It.startTime-R),Ir=!1}return Ir}finally{f=null,p=O,v=!1}}var E=!1,b=null,L=-1,T=5,C=-1;function I(){return!(e.unstable_now()-C<T)}function Y(){if(b!==null){var _=e.unstable_now();C=_;var R=!0;try{R=b(!0,_)}finally{R?Rt():(E=!1,b=null)}}else E=!1}var Rt;if(typeof d=="function")Rt=function(){d(Y)};else if(typeof MessageChannel<"u"){var ts=new MessageChannel,gf=ts.port2;ts.port1.onmessage=Y,Rt=function(){gf.postMessage(null)}}else Rt=function(){k(Y,0)};function li(_){b=_,E||(E=!0,Rt())}function oi(_,R){L=k(function(){_(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,li(S))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(_){switch(p){case 1:case 2:case 3:var R=3;break;default:R=p}var O=p;p=R;try{return _()}finally{p=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,R){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var O=p;p=_;try{return R()}finally{p=O}},e.unstable_scheduleCallback=function(_,R,O){var q=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?q+O:q):O=q,_){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=O+ne,_={id:g++,callback:R,priorityLevel:_,startTime:O,expirationTime:ne,sortIndex:-1},O>q?(_.sortIndex=O,t(u,_),n(c)===null&&_===n(u)&&(j?(m(L),L=-1):j=!0,oi(y,O-q))):(_.sortIndex=ne,t(c,_),w||v||(w=!0,li(S))),_},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(_){var R=p;return function(){var O=p;p=R;try{return _.apply(this,arguments)}finally{p=O}}}})(Uc);Dc.exports=Uc;var $f=Dc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bf=x,Ce=$f;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $c=new Set,or={};function qt(e,t){kn(e,t),kn(e+"Capture",t)}function kn(e,t){for(or[e]=t,e=0;e<t.length;e++)$c.add(t[e])}var rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ai=Object.prototype.hasOwnProperty,Wf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,is={},ls={};function Vf(e){return Ai.call(ls,e)?!0:Ai.call(is,e)?!1:Wf.test(e)?ls[e]=!0:(is[e]=!0,!1)}function Hf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qf(e,t,n,r){if(t===null||typeof t>"u"||Hf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,n,r,a,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){oe[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];oe[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){oe[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){oe[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){oe[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){oe[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){oe[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){oe[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){oe[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var no=/[\-:]([a-z])/g;function ro(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(no,ro);oe[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(no,ro);oe[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(no,ro);oe[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){oe[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});oe.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){oe[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function ao(e,t,n,r){var a=oe.hasOwnProperty(t)?oe[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Qf(t,n,a,r)&&(n=null),r||a===null?Vf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ot=Bf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fr=Symbol.for("react.element"),rn=Symbol.for("react.portal"),an=Symbol.for("react.fragment"),io=Symbol.for("react.strict_mode"),Di=Symbol.for("react.profiler"),Bc=Symbol.for("react.provider"),Wc=Symbol.for("react.context"),lo=Symbol.for("react.forward_ref"),Ui=Symbol.for("react.suspense"),$i=Symbol.for("react.suspense_list"),oo=Symbol.for("react.memo"),ut=Symbol.for("react.lazy"),Vc=Symbol.for("react.offscreen"),os=Symbol.iterator;function Dn(e){return e===null||typeof e!="object"?null:(e=os&&e[os]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,ui;function Kn(e){if(ui===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ui=t&&t[1]||""}return`
`+ui+e}var di=!1;function fi(e,t){if(!e||di)return"";di=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),l=r.stack.split(`
`),o=a.length-1,s=l.length-1;1<=o&&0<=s&&a[o]!==l[s];)s--;for(;1<=o&&0<=s;o--,s--)if(a[o]!==l[s]){if(o!==1||s!==1)do if(o--,s--,0>s||a[o]!==l[s]){var c=`
`+a[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=s);break}}}finally{di=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Kn(e):""}function Kf(e){switch(e.tag){case 5:return Kn(e.type);case 16:return Kn("Lazy");case 13:return Kn("Suspense");case 19:return Kn("SuspenseList");case 0:case 2:case 15:return e=fi(e.type,!1),e;case 11:return e=fi(e.type.render,!1),e;case 1:return e=fi(e.type,!0),e;default:return""}}function Bi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case an:return"Fragment";case rn:return"Portal";case Di:return"Profiler";case io:return"StrictMode";case Ui:return"Suspense";case $i:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Wc:return(e.displayName||"Context")+".Consumer";case Bc:return(e._context.displayName||"Context")+".Provider";case lo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case oo:return t=e.displayName||null,t!==null?t:Bi(e.type)||"Memo";case ut:t=e._payload,e=e._init;try{return Bi(e(t))}catch{}}return null}function Yf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bi(t);case 8:return t===io?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gf(e){var t=Hc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ar(e){e._valueTracker||(e._valueTracker=Gf(e))}function Qc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Hc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function da(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wi(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ss(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Kc(e,t){t=t.checked,t!=null&&ao(e,"checked",t,!1)}function Vi(e,t){Kc(e,t);var n=bt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Hi(e,t.type,n):t.hasOwnProperty("defaultValue")&&Hi(e,t.type,bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function cs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Hi(e,t,n){(t!=="number"||da(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Yn=Array.isArray;function gn(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+bt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Qi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function us(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(Yn(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:bt(n)}}function Yc(e,t){var n=bt(t.value),r=bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ds(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ki(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Dr,Jc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Dr=Dr||document.createElement("div"),Dr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Dr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function sr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var qn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jf=["Webkit","ms","Moz","O"];Object.keys(qn).forEach(function(e){Jf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),qn[t]=qn[e]})});function qc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||qn.hasOwnProperty(e)&&qn[e]?(""+t).trim():t+"px"}function Xc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=qc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var qf=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yi(e,t){if(t){if(qf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function Gi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ji=null;function so(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qi=null,vn=null,xn=null;function fs(e){if(e=zr(e)){if(typeof qi!="function")throw Error(N(280));var t=e.stateNode;t&&(t=Va(t),qi(e.stateNode,e.type,t))}}function Zc(e){vn?xn?xn.push(e):xn=[e]:vn=e}function eu(){if(vn){var e=vn,t=xn;if(xn=vn=null,fs(e),t)for(e=0;e<t.length;e++)fs(t[e])}}function tu(e,t){return e(t)}function nu(){}var pi=!1;function ru(e,t,n){if(pi)return e(t,n);pi=!0;try{return tu(e,t,n)}finally{pi=!1,(vn!==null||xn!==null)&&(nu(),eu())}}function cr(e,t){var n=e.stateNode;if(n===null)return null;var r=Va(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var Xi=!1;if(rt)try{var Un={};Object.defineProperty(Un,"passive",{get:function(){Xi=!0}}),window.addEventListener("test",Un,Un),window.removeEventListener("test",Un,Un)}catch{Xi=!1}function Xf(e,t,n,r,a,l,o,s,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(g){this.onError(g)}}var Xn=!1,fa=null,pa=!1,Zi=null,Zf={onError:function(e){Xn=!0,fa=e}};function ep(e,t,n,r,a,l,o,s,c){Xn=!1,fa=null,Xf.apply(Zf,arguments)}function tp(e,t,n,r,a,l,o,s,c){if(ep.apply(this,arguments),Xn){if(Xn){var u=fa;Xn=!1,fa=null}else throw Error(N(198));pa||(pa=!0,Zi=u)}}function Xt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function au(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ps(e){if(Xt(e)!==e)throw Error(N(188))}function np(e){var t=e.alternate;if(!t){if(t=Xt(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var l=a.alternate;if(l===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===n)return ps(a),e;if(l===r)return ps(a),t;l=l.sibling}throw Error(N(188))}if(n.return!==r.return)n=a,r=l;else{for(var o=!1,s=a.child;s;){if(s===n){o=!0,n=a,r=l;break}if(s===r){o=!0,r=a,n=l;break}s=s.sibling}if(!o){for(s=l.child;s;){if(s===n){o=!0,n=l,r=a;break}if(s===r){o=!0,r=l,n=a;break}s=s.sibling}if(!o)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function iu(e){return e=np(e),e!==null?lu(e):null}function lu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=lu(e);if(t!==null)return t;e=e.sibling}return null}var ou=Ce.unstable_scheduleCallback,ms=Ce.unstable_cancelCallback,rp=Ce.unstable_shouldYield,ap=Ce.unstable_requestPaint,X=Ce.unstable_now,ip=Ce.unstable_getCurrentPriorityLevel,co=Ce.unstable_ImmediatePriority,su=Ce.unstable_UserBlockingPriority,ma=Ce.unstable_NormalPriority,lp=Ce.unstable_LowPriority,cu=Ce.unstable_IdlePriority,Ua=null,Ke=null;function op(e){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(Ua,e,void 0,(e.current.flags&128)===128)}catch{}}var $e=Math.clz32?Math.clz32:up,sp=Math.log,cp=Math.LN2;function up(e){return e>>>=0,e===0?32:31-(sp(e)/cp|0)|0}var Ur=64,$r=4194304;function Gn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ha(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~a;s!==0?r=Gn(s):(l&=o,l!==0&&(r=Gn(l)))}else o=n&~a,o!==0?r=Gn(o):l!==0&&(r=Gn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,l=t&-t,a>=l||a===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-$e(t),a=1<<n,r|=e[n],t&=~a;return r}function dp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-$e(l),s=1<<o,c=a[o];c===-1?(!(s&n)||s&r)&&(a[o]=dp(s,t)):c<=t&&(e.expiredLanes|=s),l&=~s}}function el(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function uu(){var e=Ur;return Ur<<=1,!(Ur&4194240)&&(Ur=64),e}function mi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Lr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-$e(t),e[t]=n}function pp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-$e(n),l=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~l}}function uo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-$e(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var A=0;function du(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var fu,fo,pu,mu,hu,tl=!1,Br=[],vt=null,xt=null,yt=null,ur=new Map,dr=new Map,ft=[],mp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hs(e,t){switch(e){case"focusin":case"focusout":vt=null;break;case"dragenter":case"dragleave":xt=null;break;case"mouseover":case"mouseout":yt=null;break;case"pointerover":case"pointerout":ur.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":dr.delete(t.pointerId)}}function $n(e,t,n,r,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[a]},t!==null&&(t=zr(t),t!==null&&fo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function hp(e,t,n,r,a){switch(t){case"focusin":return vt=$n(vt,e,t,n,r,a),!0;case"dragenter":return xt=$n(xt,e,t,n,r,a),!0;case"mouseover":return yt=$n(yt,e,t,n,r,a),!0;case"pointerover":var l=a.pointerId;return ur.set(l,$n(ur.get(l)||null,e,t,n,r,a)),!0;case"gotpointercapture":return l=a.pointerId,dr.set(l,$n(dr.get(l)||null,e,t,n,r,a)),!0}return!1}function gu(e){var t=At(e.target);if(t!==null){var n=Xt(t);if(n!==null){if(t=n.tag,t===13){if(t=au(n),t!==null){e.blockedOn=t,hu(e.priority,function(){pu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ta(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=nl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ji=r,n.target.dispatchEvent(r),Ji=null}else return t=zr(n),t!==null&&fo(t),e.blockedOn=n,!1;t.shift()}return!0}function gs(e,t,n){ta(e)&&n.delete(t)}function gp(){tl=!1,vt!==null&&ta(vt)&&(vt=null),xt!==null&&ta(xt)&&(xt=null),yt!==null&&ta(yt)&&(yt=null),ur.forEach(gs),dr.forEach(gs)}function Bn(e,t){e.blockedOn===t&&(e.blockedOn=null,tl||(tl=!0,Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority,gp)))}function fr(e){function t(a){return Bn(a,e)}if(0<Br.length){Bn(Br[0],e);for(var n=1;n<Br.length;n++){var r=Br[n];r.blockedOn===e&&(r.blockedOn=null)}}for(vt!==null&&Bn(vt,e),xt!==null&&Bn(xt,e),yt!==null&&Bn(yt,e),ur.forEach(t),dr.forEach(t),n=0;n<ft.length;n++)r=ft[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ft.length&&(n=ft[0],n.blockedOn===null);)gu(n),n.blockedOn===null&&ft.shift()}var yn=ot.ReactCurrentBatchConfig,ga=!0;function vp(e,t,n,r){var a=A,l=yn.transition;yn.transition=null;try{A=1,po(e,t,n,r)}finally{A=a,yn.transition=l}}function xp(e,t,n,r){var a=A,l=yn.transition;yn.transition=null;try{A=4,po(e,t,n,r)}finally{A=a,yn.transition=l}}function po(e,t,n,r){if(ga){var a=nl(e,t,n,r);if(a===null)Si(e,t,r,va,n),hs(e,r);else if(hp(a,e,t,n,r))r.stopPropagation();else if(hs(e,r),t&4&&-1<mp.indexOf(e)){for(;a!==null;){var l=zr(a);if(l!==null&&fu(l),l=nl(e,t,n,r),l===null&&Si(e,t,r,va,n),l===a)break;a=l}a!==null&&r.stopPropagation()}else Si(e,t,r,null,n)}}var va=null;function nl(e,t,n,r){if(va=null,e=so(r),e=At(e),e!==null)if(t=Xt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=au(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return va=e,null}function vu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ip()){case co:return 1;case su:return 4;case ma:case lp:return 16;case cu:return 536870912;default:return 16}default:return 16}}var mt=null,mo=null,na=null;function xu(){if(na)return na;var e,t=mo,n=t.length,r,a="value"in mt?mt.value:mt.textContent,l=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===a[l-r];r++);return na=a.slice(e,1<r?1-r:void 0)}function ra(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wr(){return!0}function vs(){return!1}function Ee(e){function t(n,r,a,l,o){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Wr:vs,this.isPropagationStopped=vs,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wr)},persist:function(){},isPersistent:Wr}),t}var Tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ho=Ee(Tn),_r=K({},Tn,{view:0,detail:0}),yp=Ee(_r),hi,gi,Wn,$a=K({},_r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:go,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wn&&(Wn&&e.type==="mousemove"?(hi=e.screenX-Wn.screenX,gi=e.screenY-Wn.screenY):gi=hi=0,Wn=e),hi)},movementY:function(e){return"movementY"in e?e.movementY:gi}}),xs=Ee($a),wp=K({},$a,{dataTransfer:0}),jp=Ee(wp),kp=K({},_r,{relatedTarget:0}),vi=Ee(kp),Np=K({},Tn,{animationName:0,elapsedTime:0,pseudoElement:0}),Sp=Ee(Np),Cp=K({},Tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bp=Ee(Cp),Ep=K({},Tn,{data:0}),ys=Ee(Ep),Pp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_p={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_p[e])?!!t[e]:!1}function go(){return zp}var Tp=K({},_r,{key:function(e){if(e.key){var t=Pp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ra(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:go,charCode:function(e){return e.type==="keypress"?ra(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ra(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rp=Ee(Tp),Ip=K({},$a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ws=Ee(Ip),Op=K({},_r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:go}),Mp=Ee(Op),Fp=K({},Tn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ap=Ee(Fp),Dp=K({},$a,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Up=Ee(Dp),$p=[9,13,27,32],vo=rt&&"CompositionEvent"in window,Zn=null;rt&&"documentMode"in document&&(Zn=document.documentMode);var Bp=rt&&"TextEvent"in window&&!Zn,yu=rt&&(!vo||Zn&&8<Zn&&11>=Zn),js=" ",ks=!1;function wu(e,t){switch(e){case"keyup":return $p.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ju(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ln=!1;function Wp(e,t){switch(e){case"compositionend":return ju(t);case"keypress":return t.which!==32?null:(ks=!0,js);case"textInput":return e=t.data,e===js&&ks?null:e;default:return null}}function Vp(e,t){if(ln)return e==="compositionend"||!vo&&wu(e,t)?(e=xu(),na=mo=mt=null,ln=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return yu&&t.locale!=="ko"?null:t.data;default:return null}}var Hp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ns(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Hp[e.type]:t==="textarea"}function ku(e,t,n,r){Zc(r),t=xa(t,"onChange"),0<t.length&&(n=new ho("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var er=null,pr=null;function Qp(e){Ru(e,0)}function Ba(e){var t=cn(e);if(Qc(t))return e}function Kp(e,t){if(e==="change")return t}var Nu=!1;if(rt){var xi;if(rt){var yi="oninput"in document;if(!yi){var Ss=document.createElement("div");Ss.setAttribute("oninput","return;"),yi=typeof Ss.oninput=="function"}xi=yi}else xi=!1;Nu=xi&&(!document.documentMode||9<document.documentMode)}function Cs(){er&&(er.detachEvent("onpropertychange",Su),pr=er=null)}function Su(e){if(e.propertyName==="value"&&Ba(pr)){var t=[];ku(t,pr,e,so(e)),ru(Qp,t)}}function Yp(e,t,n){e==="focusin"?(Cs(),er=t,pr=n,er.attachEvent("onpropertychange",Su)):e==="focusout"&&Cs()}function Gp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ba(pr)}function Jp(e,t){if(e==="click")return Ba(t)}function qp(e,t){if(e==="input"||e==="change")return Ba(t)}function Xp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var We=typeof Object.is=="function"?Object.is:Xp;function mr(e,t){if(We(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!Ai.call(t,a)||!We(e[a],t[a]))return!1}return!0}function bs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Es(e,t){var n=bs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bs(n)}}function Cu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Cu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function bu(){for(var e=window,t=da();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=da(e.document)}return t}function xo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Zp(e){var t=bu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Cu(n.ownerDocument.documentElement,n)){if(r!==null&&xo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,l=Math.min(r.start,a);r=r.end===void 0?l:Math.min(r.end,a),!e.extend&&l>r&&(a=r,r=l,l=a),a=Es(n,l);var o=Es(n,r);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var em=rt&&"documentMode"in document&&11>=document.documentMode,on=null,rl=null,tr=null,al=!1;function Ps(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;al||on==null||on!==da(r)||(r=on,"selectionStart"in r&&xo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),tr&&mr(tr,r)||(tr=r,r=xa(rl,"onSelect"),0<r.length&&(t=new ho("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=on)))}function Vr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var sn={animationend:Vr("Animation","AnimationEnd"),animationiteration:Vr("Animation","AnimationIteration"),animationstart:Vr("Animation","AnimationStart"),transitionend:Vr("Transition","TransitionEnd")},wi={},Eu={};rt&&(Eu=document.createElement("div").style,"AnimationEvent"in window||(delete sn.animationend.animation,delete sn.animationiteration.animation,delete sn.animationstart.animation),"TransitionEvent"in window||delete sn.transitionend.transition);function Wa(e){if(wi[e])return wi[e];if(!sn[e])return e;var t=sn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Eu)return wi[e]=t[n];return e}var Pu=Wa("animationend"),Lu=Wa("animationiteration"),_u=Wa("animationstart"),zu=Wa("transitionend"),Tu=new Map,Ls="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pt(e,t){Tu.set(e,t),qt(t,[e])}for(var ji=0;ji<Ls.length;ji++){var ki=Ls[ji],tm=ki.toLowerCase(),nm=ki[0].toUpperCase()+ki.slice(1);Pt(tm,"on"+nm)}Pt(Pu,"onAnimationEnd");Pt(Lu,"onAnimationIteration");Pt(_u,"onAnimationStart");Pt("dblclick","onDoubleClick");Pt("focusin","onFocus");Pt("focusout","onBlur");Pt(zu,"onTransitionEnd");kn("onMouseEnter",["mouseout","mouseover"]);kn("onMouseLeave",["mouseout","mouseover"]);kn("onPointerEnter",["pointerout","pointerover"]);kn("onPointerLeave",["pointerout","pointerover"]);qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qt("onBeforeInput",["compositionend","keypress","textInput","paste"]);qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jn));function _s(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,tp(r,t,void 0,e),e.currentTarget=null}function Ru(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,u=s.currentTarget;if(s=s.listener,c!==l&&a.isPropagationStopped())break e;_s(a,s,u),l=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,u=s.currentTarget,s=s.listener,c!==l&&a.isPropagationStopped())break e;_s(a,s,u),l=c}}}if(pa)throw e=Zi,pa=!1,Zi=null,e}function $(e,t){var n=t[cl];n===void 0&&(n=t[cl]=new Set);var r=e+"__bubble";n.has(r)||(Iu(t,e,2,!1),n.add(r))}function Ni(e,t,n){var r=0;t&&(r|=4),Iu(n,e,r,t)}var Hr="_reactListening"+Math.random().toString(36).slice(2);function hr(e){if(!e[Hr]){e[Hr]=!0,$c.forEach(function(n){n!=="selectionchange"&&(rm.has(n)||Ni(n,!1,e),Ni(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hr]||(t[Hr]=!0,Ni("selectionchange",!1,t))}}function Iu(e,t,n,r){switch(vu(t)){case 1:var a=vp;break;case 4:a=xp;break;default:a=po}n=a.bind(null,t,n,e),a=void 0,!Xi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Si(e,t,n,r,a){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;o=o.return}for(;s!==null;){if(o=At(s),o===null)return;if(c=o.tag,c===5||c===6){r=l=o;continue e}s=s.parentNode}}r=r.return}ru(function(){var u=l,g=so(n),f=[];e:{var p=Tu.get(e);if(p!==void 0){var v=ho,w=e;switch(e){case"keypress":if(ra(n)===0)break e;case"keydown":case"keyup":v=Rp;break;case"focusin":w="focus",v=vi;break;case"focusout":w="blur",v=vi;break;case"beforeblur":case"afterblur":v=vi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=xs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=jp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Mp;break;case Pu:case Lu:case _u:v=Sp;break;case zu:v=Ap;break;case"scroll":v=yp;break;case"wheel":v=Up;break;case"copy":case"cut":case"paste":v=bp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ws}var j=(t&4)!==0,k=!j&&e==="scroll",m=j?p!==null?p+"Capture":null:p;j=[];for(var d=u,h;d!==null;){h=d;var y=h.stateNode;if(h.tag===5&&y!==null&&(h=y,m!==null&&(y=cr(d,m),y!=null&&j.push(gr(d,y,h)))),k)break;d=d.return}0<j.length&&(p=new v(p,w,null,n,g),f.push({event:p,listeners:j}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&n!==Ji&&(w=n.relatedTarget||n.fromElement)&&(At(w)||w[at]))break e;if((v||p)&&(p=g.window===g?g:(p=g.ownerDocument)?p.defaultView||p.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=u,w=w?At(w):null,w!==null&&(k=Xt(w),w!==k||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=u),v!==w)){if(j=xs,y="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(j=ws,y="onPointerLeave",m="onPointerEnter",d="pointer"),k=v==null?p:cn(v),h=w==null?p:cn(w),p=new j(y,d+"leave",v,n,g),p.target=k,p.relatedTarget=h,y=null,At(g)===u&&(j=new j(m,d+"enter",w,n,g),j.target=h,j.relatedTarget=k,y=j),k=y,v&&w)t:{for(j=v,m=w,d=0,h=j;h;h=tn(h))d++;for(h=0,y=m;y;y=tn(y))h++;for(;0<d-h;)j=tn(j),d--;for(;0<h-d;)m=tn(m),h--;for(;d--;){if(j===m||m!==null&&j===m.alternate)break t;j=tn(j),m=tn(m)}j=null}else j=null;v!==null&&zs(f,p,v,j,!1),w!==null&&k!==null&&zs(f,k,w,j,!0)}}e:{if(p=u?cn(u):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var S=Kp;else if(Ns(p))if(Nu)S=qp;else{S=Gp;var E=Yp}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=Jp);if(S&&(S=S(e,u))){ku(f,S,n,g);break e}E&&E(e,p,u),e==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&Hi(p,"number",p.value)}switch(E=u?cn(u):window,e){case"focusin":(Ns(E)||E.contentEditable==="true")&&(on=E,rl=u,tr=null);break;case"focusout":tr=rl=on=null;break;case"mousedown":al=!0;break;case"contextmenu":case"mouseup":case"dragend":al=!1,Ps(f,n,g);break;case"selectionchange":if(em)break;case"keydown":case"keyup":Ps(f,n,g)}var b;if(vo)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else ln?wu(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(yu&&n.locale!=="ko"&&(ln||L!=="onCompositionStart"?L==="onCompositionEnd"&&ln&&(b=xu()):(mt=g,mo="value"in mt?mt.value:mt.textContent,ln=!0)),E=xa(u,L),0<E.length&&(L=new ys(L,e,null,n,g),f.push({event:L,listeners:E}),b?L.data=b:(b=ju(n),b!==null&&(L.data=b)))),(b=Bp?Wp(e,n):Vp(e,n))&&(u=xa(u,"onBeforeInput"),0<u.length&&(g=new ys("onBeforeInput","beforeinput",null,n,g),f.push({event:g,listeners:u}),g.data=b))}Ru(f,t)})}function gr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xa(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=cr(e,n),l!=null&&r.unshift(gr(e,l,a)),l=cr(e,t),l!=null&&r.push(gr(e,l,a))),e=e.return}return r}function tn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zs(e,t,n,r,a){for(var l=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,u=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&u!==null&&(s=u,a?(c=cr(n,l),c!=null&&o.unshift(gr(n,c,s))):a||(c=cr(n,l),c!=null&&o.push(gr(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var am=/\r\n?/g,im=/\u0000|\uFFFD/g;function Ts(e){return(typeof e=="string"?e:""+e).replace(am,`
`).replace(im,"")}function Qr(e,t,n){if(t=Ts(t),Ts(e)!==t&&n)throw Error(N(425))}function ya(){}var il=null,ll=null;function ol(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var sl=typeof setTimeout=="function"?setTimeout:void 0,lm=typeof clearTimeout=="function"?clearTimeout:void 0,Rs=typeof Promise=="function"?Promise:void 0,om=typeof queueMicrotask=="function"?queueMicrotask:typeof Rs<"u"?function(e){return Rs.resolve(null).then(e).catch(sm)}:sl;function sm(e){setTimeout(function(){throw e})}function Ci(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),fr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);fr(t)}function wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Is(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Rn=Math.random().toString(36).slice(2),Qe="__reactFiber$"+Rn,vr="__reactProps$"+Rn,at="__reactContainer$"+Rn,cl="__reactEvents$"+Rn,cm="__reactListeners$"+Rn,um="__reactHandles$"+Rn;function At(e){var t=e[Qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[at]||n[Qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Is(e);e!==null;){if(n=e[Qe])return n;e=Is(e)}return t}e=n,n=e.parentNode}return null}function zr(e){return e=e[Qe]||e[at],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function cn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function Va(e){return e[vr]||null}var ul=[],un=-1;function Lt(e){return{current:e}}function B(e){0>un||(e.current=ul[un],ul[un]=null,un--)}function U(e,t){un++,ul[un]=e.current,e.current=t}var Et={},de=Lt(Et),xe=Lt(!1),Qt=Et;function Nn(e,t){var n=e.type.contextTypes;if(!n)return Et;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in n)a[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function ye(e){return e=e.childContextTypes,e!=null}function wa(){B(xe),B(de)}function Os(e,t,n){if(de.current!==Et)throw Error(N(168));U(de,t),U(xe,n)}function Ou(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(N(108,Yf(e)||"Unknown",a));return K({},n,r)}function ja(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Et,Qt=de.current,U(de,e),U(xe,xe.current),!0}function Ms(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=Ou(e,t,Qt),r.__reactInternalMemoizedMergedChildContext=e,B(xe),B(de),U(de,e)):B(xe),U(xe,n)}var qe=null,Ha=!1,bi=!1;function Mu(e){qe===null?qe=[e]:qe.push(e)}function dm(e){Ha=!0,Mu(e)}function _t(){if(!bi&&qe!==null){bi=!0;var e=0,t=A;try{var n=qe;for(A=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}qe=null,Ha=!1}catch(a){throw qe!==null&&(qe=qe.slice(e+1)),ou(co,_t),a}finally{A=t,bi=!1}}return null}var dn=[],fn=0,ka=null,Na=0,Le=[],_e=0,Kt=null,Ze=1,et="";function Mt(e,t){dn[fn++]=Na,dn[fn++]=ka,ka=e,Na=t}function Fu(e,t,n){Le[_e++]=Ze,Le[_e++]=et,Le[_e++]=Kt,Kt=e;var r=Ze;e=et;var a=32-$e(r)-1;r&=~(1<<a),n+=1;var l=32-$e(t)+a;if(30<l){var o=a-a%5;l=(r&(1<<o)-1).toString(32),r>>=o,a-=o,Ze=1<<32-$e(t)+a|n<<a|r,et=l+e}else Ze=1<<l|n<<a|r,et=e}function yo(e){e.return!==null&&(Mt(e,1),Fu(e,1,0))}function wo(e){for(;e===ka;)ka=dn[--fn],dn[fn]=null,Na=dn[--fn],dn[fn]=null;for(;e===Kt;)Kt=Le[--_e],Le[_e]=null,et=Le[--_e],Le[_e]=null,Ze=Le[--_e],Le[_e]=null}var Se=null,Ne=null,W=!1,Ue=null;function Au(e,t){var n=ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Fs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Se=e,Ne=wt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Se=e,Ne=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Kt!==null?{id:Ze,overflow:et}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Se=e,Ne=null,!0):!1;default:return!1}}function dl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function fl(e){if(W){var t=Ne;if(t){var n=t;if(!Fs(e,t)){if(dl(e))throw Error(N(418));t=wt(n.nextSibling);var r=Se;t&&Fs(e,t)?Au(r,n):(e.flags=e.flags&-4097|2,W=!1,Se=e)}}else{if(dl(e))throw Error(N(418));e.flags=e.flags&-4097|2,W=!1,Se=e}}}function As(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function Kr(e){if(e!==Se)return!1;if(!W)return As(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ol(e.type,e.memoizedProps)),t&&(t=Ne)){if(dl(e))throw Du(),Error(N(418));for(;t;)Au(e,t),t=wt(t.nextSibling)}if(As(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ne=wt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ne=null}}else Ne=Se?wt(e.stateNode.nextSibling):null;return!0}function Du(){for(var e=Ne;e;)e=wt(e.nextSibling)}function Sn(){Ne=Se=null,W=!1}function jo(e){Ue===null?Ue=[e]:Ue.push(e)}var fm=ot.ReactCurrentBatchConfig;function Vn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var a=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var s=a.refs;o===null?delete s[l]:s[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function Yr(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ds(e){var t=e._init;return t(e._payload)}function Uu(e){function t(m,d){if(e){var h=m.deletions;h===null?(m.deletions=[d],m.flags|=16):h.push(d)}}function n(m,d){if(!e)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function a(m,d){return m=St(m,d),m.index=0,m.sibling=null,m}function l(m,d,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<d?(m.flags|=2,d):h):(m.flags|=2,d)):(m.flags|=1048576,d)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,d,h,y){return d===null||d.tag!==6?(d=Ri(h,m.mode,y),d.return=m,d):(d=a(d,h),d.return=m,d)}function c(m,d,h,y){var S=h.type;return S===an?g(m,d,h.props.children,y,h.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ut&&Ds(S)===d.type)?(y=a(d,h.props),y.ref=Vn(m,d,h),y.return=m,y):(y=ua(h.type,h.key,h.props,null,m.mode,y),y.ref=Vn(m,d,h),y.return=m,y)}function u(m,d,h,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=Ii(h,m.mode,y),d.return=m,d):(d=a(d,h.children||[]),d.return=m,d)}function g(m,d,h,y,S){return d===null||d.tag!==7?(d=Vt(h,m.mode,y,S),d.return=m,d):(d=a(d,h),d.return=m,d)}function f(m,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Ri(""+d,m.mode,h),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Fr:return h=ua(d.type,d.key,d.props,null,m.mode,h),h.ref=Vn(m,null,d),h.return=m,h;case rn:return d=Ii(d,m.mode,h),d.return=m,d;case ut:var y=d._init;return f(m,y(d._payload),h)}if(Yn(d)||Dn(d))return d=Vt(d,m.mode,h,null),d.return=m,d;Yr(m,d)}return null}function p(m,d,h,y){var S=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:s(m,d,""+h,y);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Fr:return h.key===S?c(m,d,h,y):null;case rn:return h.key===S?u(m,d,h,y):null;case ut:return S=h._init,p(m,d,S(h._payload),y)}if(Yn(h)||Dn(h))return S!==null?null:g(m,d,h,y,null);Yr(m,h)}return null}function v(m,d,h,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return m=m.get(h)||null,s(d,m,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Fr:return m=m.get(y.key===null?h:y.key)||null,c(d,m,y,S);case rn:return m=m.get(y.key===null?h:y.key)||null,u(d,m,y,S);case ut:var E=y._init;return v(m,d,h,E(y._payload),S)}if(Yn(y)||Dn(y))return m=m.get(h)||null,g(d,m,y,S,null);Yr(d,y)}return null}function w(m,d,h,y){for(var S=null,E=null,b=d,L=d=0,T=null;b!==null&&L<h.length;L++){b.index>L?(T=b,b=null):T=b.sibling;var C=p(m,b,h[L],y);if(C===null){b===null&&(b=T);break}e&&b&&C.alternate===null&&t(m,b),d=l(C,d,L),E===null?S=C:E.sibling=C,E=C,b=T}if(L===h.length)return n(m,b),W&&Mt(m,L),S;if(b===null){for(;L<h.length;L++)b=f(m,h[L],y),b!==null&&(d=l(b,d,L),E===null?S=b:E.sibling=b,E=b);return W&&Mt(m,L),S}for(b=r(m,b);L<h.length;L++)T=v(b,m,L,h[L],y),T!==null&&(e&&T.alternate!==null&&b.delete(T.key===null?L:T.key),d=l(T,d,L),E===null?S=T:E.sibling=T,E=T);return e&&b.forEach(function(I){return t(m,I)}),W&&Mt(m,L),S}function j(m,d,h,y){var S=Dn(h);if(typeof S!="function")throw Error(N(150));if(h=S.call(h),h==null)throw Error(N(151));for(var E=S=null,b=d,L=d=0,T=null,C=h.next();b!==null&&!C.done;L++,C=h.next()){b.index>L?(T=b,b=null):T=b.sibling;var I=p(m,b,C.value,y);if(I===null){b===null&&(b=T);break}e&&b&&I.alternate===null&&t(m,b),d=l(I,d,L),E===null?S=I:E.sibling=I,E=I,b=T}if(C.done)return n(m,b),W&&Mt(m,L),S;if(b===null){for(;!C.done;L++,C=h.next())C=f(m,C.value,y),C!==null&&(d=l(C,d,L),E===null?S=C:E.sibling=C,E=C);return W&&Mt(m,L),S}for(b=r(m,b);!C.done;L++,C=h.next())C=v(b,m,L,C.value,y),C!==null&&(e&&C.alternate!==null&&b.delete(C.key===null?L:C.key),d=l(C,d,L),E===null?S=C:E.sibling=C,E=C);return e&&b.forEach(function(Y){return t(m,Y)}),W&&Mt(m,L),S}function k(m,d,h,y){if(typeof h=="object"&&h!==null&&h.type===an&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Fr:e:{for(var S=h.key,E=d;E!==null;){if(E.key===S){if(S=h.type,S===an){if(E.tag===7){n(m,E.sibling),d=a(E,h.props.children),d.return=m,m=d;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ut&&Ds(S)===E.type){n(m,E.sibling),d=a(E,h.props),d.ref=Vn(m,E,h),d.return=m,m=d;break e}n(m,E);break}else t(m,E);E=E.sibling}h.type===an?(d=Vt(h.props.children,m.mode,y,h.key),d.return=m,m=d):(y=ua(h.type,h.key,h.props,null,m.mode,y),y.ref=Vn(m,d,h),y.return=m,m=y)}return o(m);case rn:e:{for(E=h.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(m,d.sibling),d=a(d,h.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else t(m,d);d=d.sibling}d=Ii(h,m.mode,y),d.return=m,m=d}return o(m);case ut:return E=h._init,k(m,d,E(h._payload),y)}if(Yn(h))return w(m,d,h,y);if(Dn(h))return j(m,d,h,y);Yr(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(m,d.sibling),d=a(d,h),d.return=m,m=d):(n(m,d),d=Ri(h,m.mode,y),d.return=m,m=d),o(m)):n(m,d)}return k}var Cn=Uu(!0),$u=Uu(!1),Sa=Lt(null),Ca=null,pn=null,ko=null;function No(){ko=pn=Ca=null}function So(e){var t=Sa.current;B(Sa),e._currentValue=t}function pl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function wn(e,t){Ca=e,ko=pn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ve=!0),e.firstContext=null)}function Re(e){var t=e._currentValue;if(ko!==e)if(e={context:e,memoizedValue:t,next:null},pn===null){if(Ca===null)throw Error(N(308));pn=e,Ca.dependencies={lanes:0,firstContext:e}}else pn=pn.next=e;return t}var Dt=null;function Co(e){Dt===null?Dt=[e]:Dt.push(e)}function Bu(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,Co(t)):(n.next=a.next,a.next=n),t.interleaved=n,it(e,r)}function it(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var dt=!1;function bo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function jt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,it(e,n)}return a=r.interleaved,a===null?(t.next=t,Co(r)):(t.next=a.next,a.next=t),r.interleaved=t,it(e,n)}function aa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,uo(e,n)}}function Us(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?a=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?a=l=t:l=l.next=t}else a=l=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ba(e,t,n,r){var a=e.updateQueue;dt=!1;var l=a.firstBaseUpdate,o=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var c=s,u=c.next;c.next=null,o===null?l=u:o.next=u,o=c;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==o&&(s===null?g.firstBaseUpdate=u:s.next=u,g.lastBaseUpdate=c))}if(l!==null){var f=a.baseState;o=0,g=u=c=null,s=l;do{var p=s.lane,v=s.eventTime;if((r&p)===p){g!==null&&(g=g.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,j=s;switch(p=t,v=n,j.tag){case 1:if(w=j.payload,typeof w=="function"){f=w.call(v,f,p);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=j.payload,p=typeof w=="function"?w.call(v,f,p):w,p==null)break e;f=K({},f,p);break e;case 2:dt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=a.effects,p===null?a.effects=[s]:p.push(s))}else v={eventTime:v,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(u=g=v,c=f):g=g.next=v,o|=p;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;p=s,s=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);if(g===null&&(c=f),a.baseState=c,a.firstBaseUpdate=u,a.lastBaseUpdate=g,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else l===null&&(a.shared.lanes=0);Gt|=o,e.lanes=o,e.memoizedState=f}}function $s(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(N(191,a));a.call(r)}}}var Tr={},Ye=Lt(Tr),xr=Lt(Tr),yr=Lt(Tr);function Ut(e){if(e===Tr)throw Error(N(174));return e}function Eo(e,t){switch(U(yr,t),U(xr,e),U(Ye,Tr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ki(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ki(t,e)}B(Ye),U(Ye,t)}function bn(){B(Ye),B(xr),B(yr)}function Vu(e){Ut(yr.current);var t=Ut(Ye.current),n=Ki(t,e.type);t!==n&&(U(xr,e),U(Ye,n))}function Po(e){xr.current===e&&(B(Ye),B(xr))}var V=Lt(0);function Ea(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ei=[];function Lo(){for(var e=0;e<Ei.length;e++)Ei[e]._workInProgressVersionPrimary=null;Ei.length=0}var ia=ot.ReactCurrentDispatcher,Pi=ot.ReactCurrentBatchConfig,Yt=0,H=null,ee=null,re=null,Pa=!1,nr=!1,wr=0,pm=0;function se(){throw Error(N(321))}function _o(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!We(e[n],t[n]))return!1;return!0}function zo(e,t,n,r,a,l){if(Yt=l,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ia.current=e===null||e.memoizedState===null?vm:xm,e=n(r,a),nr){l=0;do{if(nr=!1,wr=0,25<=l)throw Error(N(301));l+=1,re=ee=null,t.updateQueue=null,ia.current=ym,e=n(r,a)}while(nr)}if(ia.current=La,t=ee!==null&&ee.next!==null,Yt=0,re=ee=H=null,Pa=!1,t)throw Error(N(300));return e}function To(){var e=wr!==0;return wr=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?H.memoizedState=re=e:re=re.next=e,re}function Ie(){if(ee===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=re===null?H.memoizedState:re.next;if(t!==null)re=t,ee=e;else{if(e===null)throw Error(N(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},re===null?H.memoizedState=re=e:re=re.next=e}return re}function jr(e,t){return typeof t=="function"?t(e):t}function Li(e){var t=Ie(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=ee,a=r.baseQueue,l=n.pending;if(l!==null){if(a!==null){var o=a.next;a.next=l.next,l.next=o}r.baseQueue=a=l,n.pending=null}if(a!==null){l=a.next,r=r.baseState;var s=o=null,c=null,u=l;do{var g=u.lane;if((Yt&g)===g)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:g,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(s=c=f,o=r):c=c.next=f,H.lanes|=g,Gt|=g}u=u.next}while(u!==null&&u!==l);c===null?o=r:c.next=s,We(r,t.memoizedState)||(ve=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do l=a.lane,H.lanes|=l,Gt|=l,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function _i(e){var t=Ie(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,l=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do l=e(l,o.action),o=o.next;while(o!==a);We(l,t.memoizedState)||(ve=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Hu(){}function Qu(e,t){var n=H,r=Ie(),a=t(),l=!We(r.memoizedState,a);if(l&&(r.memoizedState=a,ve=!0),r=r.queue,Ro(Gu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||re!==null&&re.memoizedState.tag&1){if(n.flags|=2048,kr(9,Yu.bind(null,n,r,a,t),void 0,null),ae===null)throw Error(N(349));Yt&30||Ku(n,t,a)}return a}function Ku(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yu(e,t,n,r){t.value=n,t.getSnapshot=r,Ju(t)&&qu(e)}function Gu(e,t,n){return n(function(){Ju(t)&&qu(e)})}function Ju(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!We(e,n)}catch{return!0}}function qu(e){var t=it(e,1);t!==null&&Be(t,e,1,-1)}function Bs(e){var t=He();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jr,lastRenderedState:e},t.queue=e,e=e.dispatch=gm.bind(null,H,e),[t.memoizedState,e]}function kr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Xu(){return Ie().memoizedState}function la(e,t,n,r){var a=He();H.flags|=e,a.memoizedState=kr(1|t,n,void 0,r===void 0?null:r)}function Qa(e,t,n,r){var a=Ie();r=r===void 0?null:r;var l=void 0;if(ee!==null){var o=ee.memoizedState;if(l=o.destroy,r!==null&&_o(r,o.deps)){a.memoizedState=kr(t,n,l,r);return}}H.flags|=e,a.memoizedState=kr(1|t,n,l,r)}function Ws(e,t){return la(8390656,8,e,t)}function Ro(e,t){return Qa(2048,8,e,t)}function Zu(e,t){return Qa(4,2,e,t)}function ed(e,t){return Qa(4,4,e,t)}function td(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function nd(e,t,n){return n=n!=null?n.concat([e]):null,Qa(4,4,td.bind(null,t,e),n)}function Io(){}function rd(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_o(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ad(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_o(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function id(e,t,n){return Yt&21?(We(n,t)||(n=uu(),H.lanes|=n,Gt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ve=!0),e.memoizedState=n)}function mm(e,t){var n=A;A=n!==0&&4>n?n:4,e(!0);var r=Pi.transition;Pi.transition={};try{e(!1),t()}finally{A=n,Pi.transition=r}}function ld(){return Ie().memoizedState}function hm(e,t,n){var r=Nt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},od(e))sd(t,n);else if(n=Bu(e,t,n,r),n!==null){var a=pe();Be(n,e,r,a),cd(n,t,r)}}function gm(e,t,n){var r=Nt(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(od(e))sd(t,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,s=l(o,n);if(a.hasEagerState=!0,a.eagerState=s,We(s,o)){var c=t.interleaved;c===null?(a.next=a,Co(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}n=Bu(e,t,a,r),n!==null&&(a=pe(),Be(n,e,r,a),cd(n,t,r))}}function od(e){var t=e.alternate;return e===H||t!==null&&t===H}function sd(e,t){nr=Pa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function cd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,uo(e,n)}}var La={readContext:Re,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},vm={readContext:Re,useCallback:function(e,t){return He().memoizedState=[e,t===void 0?null:t],e},useContext:Re,useEffect:Ws,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,la(4194308,4,td.bind(null,t,e),n)},useLayoutEffect:function(e,t){return la(4194308,4,e,t)},useInsertionEffect:function(e,t){return la(4,2,e,t)},useMemo:function(e,t){var n=He();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=He();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=hm.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=He();return e={current:e},t.memoizedState=e},useState:Bs,useDebugValue:Io,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=Bs(!1),t=e[0];return e=mm.bind(null,e[1]),He().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,a=He();if(W){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),ae===null)throw Error(N(349));Yt&30||Ku(r,t,n)}a.memoizedState=n;var l={value:n,getSnapshot:t};return a.queue=l,Ws(Gu.bind(null,r,l,e),[e]),r.flags|=2048,kr(9,Yu.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=He(),t=ae.identifierPrefix;if(W){var n=et,r=Ze;n=(r&~(1<<32-$e(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=wr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=pm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},xm={readContext:Re,useCallback:rd,useContext:Re,useEffect:Ro,useImperativeHandle:nd,useInsertionEffect:Zu,useLayoutEffect:ed,useMemo:ad,useReducer:Li,useRef:Xu,useState:function(){return Li(jr)},useDebugValue:Io,useDeferredValue:function(e){var t=Ie();return id(t,ee.memoizedState,e)},useTransition:function(){var e=Li(jr)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:Hu,useSyncExternalStore:Qu,useId:ld,unstable_isNewReconciler:!1},ym={readContext:Re,useCallback:rd,useContext:Re,useEffect:Ro,useImperativeHandle:nd,useInsertionEffect:Zu,useLayoutEffect:ed,useMemo:ad,useReducer:_i,useRef:Xu,useState:function(){return _i(jr)},useDebugValue:Io,useDeferredValue:function(e){var t=Ie();return ee===null?t.memoizedState=e:id(t,ee.memoizedState,e)},useTransition:function(){var e=_i(jr)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:Hu,useSyncExternalStore:Qu,useId:ld,unstable_isNewReconciler:!1};function Ae(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ml(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ka={isMounted:function(e){return(e=e._reactInternals)?Xt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pe(),a=Nt(e),l=nt(r,a);l.payload=t,n!=null&&(l.callback=n),t=jt(e,l,a),t!==null&&(Be(t,e,a,r),aa(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pe(),a=Nt(e),l=nt(r,a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=jt(e,l,a),t!==null&&(Be(t,e,a,r),aa(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pe(),r=Nt(e),a=nt(n,r);a.tag=2,t!=null&&(a.callback=t),t=jt(e,a,r),t!==null&&(Be(t,e,r,n),aa(t,e,r))}};function Vs(e,t,n,r,a,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!mr(n,r)||!mr(a,l):!0}function ud(e,t,n){var r=!1,a=Et,l=t.contextType;return typeof l=="object"&&l!==null?l=Re(l):(a=ye(t)?Qt:de.current,r=t.contextTypes,l=(r=r!=null)?Nn(e,a):Et),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ka,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),t}function Hs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ka.enqueueReplaceState(t,t.state,null)}function hl(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},bo(e);var l=t.contextType;typeof l=="object"&&l!==null?a.context=Re(l):(l=ye(t)?Qt:de.current,a.context=Nn(e,l)),a.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(ml(e,t,l,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Ka.enqueueReplaceState(a,a.state,null),ba(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function En(e,t){try{var n="",r=t;do n+=Kf(r),r=r.return;while(r);var a=n}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:a,digest:null}}function zi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function gl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var wm=typeof WeakMap=="function"?WeakMap:Map;function dd(e,t,n){n=nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){za||(za=!0,bl=r),gl(e,t)},n}function fd(e,t,n){n=nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){gl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){gl(e,t),typeof r!="function"&&(kt===null?kt=new Set([this]):kt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Qs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new wm;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Im.bind(null,e,t,n),t.then(e,e))}function Ks(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ys(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=nt(-1,1),t.tag=2,jt(n,t,1))),n.lanes|=1),e)}var jm=ot.ReactCurrentOwner,ve=!1;function fe(e,t,n,r){t.child=e===null?$u(t,null,n,r):Cn(t,e.child,n,r)}function Gs(e,t,n,r,a){n=n.render;var l=t.ref;return wn(t,a),r=zo(e,t,n,r,l,a),n=To(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,lt(e,t,a)):(W&&n&&yo(t),t.flags|=1,fe(e,t,r,a),t.child)}function Js(e,t,n,r,a){if(e===null){var l=n.type;return typeof l=="function"&&!Bo(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,pd(e,t,l,r,a)):(e=ua(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&a)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:mr,n(o,r)&&e.ref===t.ref)return lt(e,t,a)}return t.flags|=1,e=St(l,r),e.ref=t.ref,e.return=t,t.child=e}function pd(e,t,n,r,a){if(e!==null){var l=e.memoizedProps;if(mr(l,r)&&e.ref===t.ref)if(ve=!1,t.pendingProps=r=l,(e.lanes&a)!==0)e.flags&131072&&(ve=!0);else return t.lanes=e.lanes,lt(e,t,a)}return vl(e,t,n,r,a)}function md(e,t,n){var r=t.pendingProps,a=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(hn,ke),ke|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(hn,ke),ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,U(hn,ke),ke|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,U(hn,ke),ke|=r;return fe(e,t,a,n),t.child}function hd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function vl(e,t,n,r,a){var l=ye(n)?Qt:de.current;return l=Nn(t,l),wn(t,a),n=zo(e,t,n,r,l,a),r=To(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,lt(e,t,a)):(W&&r&&yo(t),t.flags|=1,fe(e,t,n,a),t.child)}function qs(e,t,n,r,a){if(ye(n)){var l=!0;ja(t)}else l=!1;if(wn(t,a),t.stateNode===null)oa(e,t),ud(t,n,r),hl(t,n,r,a),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Re(u):(u=ye(n)?Qt:de.current,u=Nn(t,u));var g=n.getDerivedStateFromProps,f=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||c!==u)&&Hs(t,o,r,u),dt=!1;var p=t.memoizedState;o.state=p,ba(t,r,o,a),c=t.memoizedState,s!==r||p!==c||xe.current||dt?(typeof g=="function"&&(ml(t,n,g,r),c=t.memoizedState),(s=dt||Vs(t,n,s,r,p,c,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Wu(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Ae(t.type,s),o.props=u,f=t.pendingProps,p=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Re(c):(c=ye(n)?Qt:de.current,c=Nn(t,c));var v=n.getDerivedStateFromProps;(g=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==f||p!==c)&&Hs(t,o,r,c),dt=!1,p=t.memoizedState,o.state=p,ba(t,r,o,a);var w=t.memoizedState;s!==f||p!==w||xe.current||dt?(typeof v=="function"&&(ml(t,n,v,r),w=t.memoizedState),(u=dt||Vs(t,n,u,r,p,w,c)||!1)?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return xl(e,t,n,r,l,a)}function xl(e,t,n,r,a,l){hd(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return a&&Ms(t,n,!1),lt(e,t,l);r=t.stateNode,jm.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Cn(t,e.child,null,l),t.child=Cn(t,null,s,l)):fe(e,t,s,l),t.memoizedState=r.state,a&&Ms(t,n,!0),t.child}function gd(e){var t=e.stateNode;t.pendingContext?Os(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Os(e,t.context,!1),Eo(e,t.containerInfo)}function Xs(e,t,n,r,a){return Sn(),jo(a),t.flags|=256,fe(e,t,n,r),t.child}var yl={dehydrated:null,treeContext:null,retryLane:0};function wl(e){return{baseLanes:e,cachePool:null,transitions:null}}function vd(e,t,n){var r=t.pendingProps,a=V.current,l=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(a&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),U(V,a&1),e===null)return fl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Ja(o,r,0,null),e=Vt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=wl(n),t.memoizedState=yl,e):Oo(t,o));if(a=e.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return km(e,t,o,r,s,a,n);if(l){l=r.fallback,o=t.mode,a=e.child,s=a.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=St(a,c),r.subtreeFlags=a.subtreeFlags&14680064),s!==null?l=St(s,l):(l=Vt(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?wl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=yl,r}return l=e.child,e=l.sibling,r=St(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Oo(e,t){return t=Ja({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Gr(e,t,n,r){return r!==null&&jo(r),Cn(t,e.child,null,n),e=Oo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function km(e,t,n,r,a,l,o){if(n)return t.flags&256?(t.flags&=-257,r=zi(Error(N(422))),Gr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,a=t.mode,r=Ja({mode:"visible",children:r.children},a,0,null),l=Vt(l,a,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&Cn(t,e.child,null,o),t.child.memoizedState=wl(o),t.memoizedState=yl,l);if(!(t.mode&1))return Gr(e,t,o,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(N(419)),r=zi(l,r,void 0),Gr(e,t,o,r)}if(s=(o&e.childLanes)!==0,ve||s){if(r=ae,r!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|o)?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,it(e,a),Be(r,e,a,-1))}return $o(),r=zi(Error(N(421))),Gr(e,t,o,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Om.bind(null,e),a._reactRetry=t,null):(e=l.treeContext,Ne=wt(a.nextSibling),Se=t,W=!0,Ue=null,e!==null&&(Le[_e++]=Ze,Le[_e++]=et,Le[_e++]=Kt,Ze=e.id,et=e.overflow,Kt=t),t=Oo(t,r.children),t.flags|=4096,t)}function Zs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),pl(e.return,t,n)}function Ti(e,t,n,r,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=a)}function xd(e,t,n){var r=t.pendingProps,a=r.revealOrder,l=r.tail;if(fe(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zs(e,n,t);else if(e.tag===19)Zs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(V,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Ea(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ti(t,!1,a,n,l);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Ea(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Ti(t,!0,n,null,l);break;case"together":Ti(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function oa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function lt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=St(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=St(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nm(e,t,n){switch(t.tag){case 3:gd(t),Sn();break;case 5:Vu(t);break;case 1:ye(t.type)&&ja(t);break;case 4:Eo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;U(Sa,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?vd(e,t,n):(U(V,V.current&1),e=lt(e,t,n),e!==null?e.sibling:null);U(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return xd(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),U(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,md(e,t,n)}return lt(e,t,n)}var yd,jl,wd,jd;yd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jl=function(){};wd=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Ut(Ye.current);var l=null;switch(n){case"input":a=Wi(e,a),r=Wi(e,r),l=[];break;case"select":a=K({},a,{value:void 0}),r=K({},r,{value:void 0}),l=[];break;case"textarea":a=Qi(e,a),r=Qi(e,r),l=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ya)}Yi(n,r);var o;n=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var s=a[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(or.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var c=r[u];if(s=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&c!==s&&(c!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&s[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(l||(l=[]),l.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(l=l||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(l=l||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(or.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&$("scroll",e),l||s===c||(l=[])):(l=l||[]).push(u,c))}n&&(l=l||[]).push("style",n);var u=l;(t.updateQueue=u)&&(t.flags|=4)}};jd=function(e,t,n,r){n!==r&&(t.flags|=4)};function Hn(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Sm(e,t,n){var r=t.pendingProps;switch(wo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return ye(t.type)&&wa(),ce(t),null;case 3:return r=t.stateNode,bn(),B(xe),B(de),Lo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Kr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ue!==null&&(Ll(Ue),Ue=null))),jl(e,t),ce(t),null;case 5:Po(t);var a=Ut(yr.current);if(n=t.type,e!==null&&t.stateNode!=null)wd(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return ce(t),null}if(e=Ut(Ye.current),Kr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Qe]=t,r[vr]=l,e=(t.mode&1)!==0,n){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(a=0;a<Jn.length;a++)$(Jn[a],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":ss(r,l),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},$("invalid",r);break;case"textarea":us(r,l),$("invalid",r)}Yi(n,l),a=null;for(var o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&Qr(r.textContent,s,e),a=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&Qr(r.textContent,s,e),a=["children",""+s]):or.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&$("scroll",r)}switch(n){case"input":Ar(r),cs(r,l,!0);break;case"textarea":Ar(r),ds(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=ya)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Qe]=t,e[vr]=r,yd(e,t,!1,!1),t.stateNode=e;e:{switch(o=Gi(n,r),n){case"dialog":$("cancel",e),$("close",e),a=r;break;case"iframe":case"object":case"embed":$("load",e),a=r;break;case"video":case"audio":for(a=0;a<Jn.length;a++)$(Jn[a],e);a=r;break;case"source":$("error",e),a=r;break;case"img":case"image":case"link":$("error",e),$("load",e),a=r;break;case"details":$("toggle",e),a=r;break;case"input":ss(e,r),a=Wi(e,r),$("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=K({},r,{value:void 0}),$("invalid",e);break;case"textarea":us(e,r),a=Qi(e,r),$("invalid",e);break;default:a=r}Yi(n,a),s=a;for(l in s)if(s.hasOwnProperty(l)){var c=s[l];l==="style"?Xc(e,c):l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Jc(e,c)):l==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&sr(e,c):typeof c=="number"&&sr(e,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(or.hasOwnProperty(l)?c!=null&&l==="onScroll"&&$("scroll",e):c!=null&&ao(e,l,c,o))}switch(n){case"input":Ar(e),cs(e,r,!1);break;case"textarea":Ar(e),ds(e);break;case"option":r.value!=null&&e.setAttribute("value",""+bt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?gn(e,!!r.multiple,l,!1):r.defaultValue!=null&&gn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=ya)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)jd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=Ut(yr.current),Ut(Ye.current),Kr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Qe]=t,(l=r.nodeValue!==n)&&(e=Se,e!==null))switch(e.tag){case 3:Qr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qe]=t,t.stateNode=r}return ce(t),null;case 13:if(B(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Ne!==null&&t.mode&1&&!(t.flags&128))Du(),Sn(),t.flags|=98560,l=!1;else if(l=Kr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(N(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(N(317));l[Qe]=t}else Sn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),l=!1}else Ue!==null&&(Ll(Ue),Ue=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?te===0&&(te=3):$o())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return bn(),jl(e,t),e===null&&hr(t.stateNode.containerInfo),ce(t),null;case 10:return So(t.type._context),ce(t),null;case 17:return ye(t.type)&&wa(),ce(t),null;case 19:if(B(V),l=t.memoizedState,l===null)return ce(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)Hn(l,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ea(e),o!==null){for(t.flags|=128,Hn(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(V,V.current&1|2),t.child}e=e.sibling}l.tail!==null&&X()>Pn&&(t.flags|=128,r=!0,Hn(l,!1),t.lanes=4194304)}else{if(!r)if(e=Ea(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Hn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!W)return ce(t),null}else 2*X()-l.renderingStartTime>Pn&&n!==1073741824&&(t.flags|=128,r=!0,Hn(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=X(),t.sibling=null,n=V.current,U(V,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return Uo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ke&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function Cm(e,t){switch(wo(t),t.tag){case 1:return ye(t.type)&&wa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return bn(),B(xe),B(de),Lo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Po(t),null;case 13:if(B(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));Sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(V),null;case 4:return bn(),null;case 10:return So(t.type._context),null;case 22:case 23:return Uo(),null;case 24:return null;default:return null}}var Jr=!1,ue=!1,bm=typeof WeakSet=="function"?WeakSet:Set,P=null;function mn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function kl(e,t,n){try{n()}catch(r){G(e,t,r)}}var ec=!1;function Em(e,t){if(il=ga,e=bu(),xo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,s=-1,c=-1,u=0,g=0,f=e,p=null;t:for(;;){for(var v;f!==n||a!==0&&f.nodeType!==3||(s=o+a),f!==l||r!==0&&f.nodeType!==3||(c=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)p=f,f=v;for(;;){if(f===e)break t;if(p===n&&++u===a&&(s=o),p===l&&++g===r&&(c=o),(v=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=v}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ll={focusedElem:e,selectionRange:n},ga=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var j=w.memoizedProps,k=w.memoizedState,m=t.stateNode,d=m.getSnapshotBeforeUpdate(t.elementType===t.type?j:Ae(t.type,j),k);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(y){G(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return w=ec,ec=!1,w}function rr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,l!==void 0&&kl(t,n,l)}a=a.next}while(a!==r)}}function Ya(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Nl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function kd(e){var t=e.alternate;t!==null&&(e.alternate=null,kd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Qe],delete t[vr],delete t[cl],delete t[cm],delete t[um])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Nd(e){return e.tag===5||e.tag===3||e.tag===4}function tc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ya));else if(r!==4&&(e=e.child,e!==null))for(Sl(e,t,n),e=e.sibling;e!==null;)Sl(e,t,n),e=e.sibling}function Cl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Cl(e,t,n),e=e.sibling;e!==null;)Cl(e,t,n),e=e.sibling}var ie=null,De=!1;function ct(e,t,n){for(n=n.child;n!==null;)Sd(e,t,n),n=n.sibling}function Sd(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(Ua,n)}catch{}switch(n.tag){case 5:ue||mn(n,t);case 6:var r=ie,a=De;ie=null,ct(e,t,n),ie=r,De=a,ie!==null&&(De?(e=ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ie.removeChild(n.stateNode));break;case 18:ie!==null&&(De?(e=ie,n=n.stateNode,e.nodeType===8?Ci(e.parentNode,n):e.nodeType===1&&Ci(e,n),fr(e)):Ci(ie,n.stateNode));break;case 4:r=ie,a=De,ie=n.stateNode.containerInfo,De=!0,ct(e,t,n),ie=r,De=a;break;case 0:case 11:case 14:case 15:if(!ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var l=a,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&kl(n,t,o),a=a.next}while(a!==r)}ct(e,t,n);break;case 1:if(!ue&&(mn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){G(n,t,s)}ct(e,t,n);break;case 21:ct(e,t,n);break;case 22:n.mode&1?(ue=(r=ue)||n.memoizedState!==null,ct(e,t,n),ue=r):ct(e,t,n);break;default:ct(e,t,n)}}function nc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new bm),t.forEach(function(r){var a=Mm.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function Me(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var l=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:ie=s.stateNode,De=!1;break e;case 3:ie=s.stateNode.containerInfo,De=!0;break e;case 4:ie=s.stateNode.containerInfo,De=!0;break e}s=s.return}if(ie===null)throw Error(N(160));Sd(l,o,a),ie=null,De=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(u){G(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Cd(t,e),t=t.sibling}function Cd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),Ve(e),r&4){try{rr(3,e,e.return),Ya(3,e)}catch(j){G(e,e.return,j)}try{rr(5,e,e.return)}catch(j){G(e,e.return,j)}}break;case 1:Me(t,e),Ve(e),r&512&&n!==null&&mn(n,n.return);break;case 5:if(Me(t,e),Ve(e),r&512&&n!==null&&mn(n,n.return),e.flags&32){var a=e.stateNode;try{sr(a,"")}catch(j){G(e,e.return,j)}}if(r&4&&(a=e.stateNode,a!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&Kc(a,l),Gi(s,o);var u=Gi(s,l);for(o=0;o<c.length;o+=2){var g=c[o],f=c[o+1];g==="style"?Xc(a,f):g==="dangerouslySetInnerHTML"?Jc(a,f):g==="children"?sr(a,f):ao(a,g,f,u)}switch(s){case"input":Vi(a,l);break;case"textarea":Yc(a,l);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var v=l.value;v!=null?gn(a,!!l.multiple,v,!1):p!==!!l.multiple&&(l.defaultValue!=null?gn(a,!!l.multiple,l.defaultValue,!0):gn(a,!!l.multiple,l.multiple?[]:"",!1))}a[vr]=l}catch(j){G(e,e.return,j)}}break;case 6:if(Me(t,e),Ve(e),r&4){if(e.stateNode===null)throw Error(N(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(j){G(e,e.return,j)}}break;case 3:if(Me(t,e),Ve(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fr(t.containerInfo)}catch(j){G(e,e.return,j)}break;case 4:Me(t,e),Ve(e);break;case 13:Me(t,e),Ve(e),a=e.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(Ao=X())),r&4&&nc(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(ue=(u=ue)||g,Me(t,e),ue=u):Me(t,e),Ve(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!g&&e.mode&1)for(P=e,g=e.child;g!==null;){for(f=P=g;P!==null;){switch(p=P,v=p.child,p.tag){case 0:case 11:case 14:case 15:rr(4,p,p.return);break;case 1:mn(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(j){G(r,n,j)}}break;case 5:mn(p,p.return);break;case 22:if(p.memoizedState!==null){ac(f);continue}}v!==null?(v.return=p,P=v):ac(f)}g=g.sibling}e:for(g=null,f=e;;){if(f.tag===5){if(g===null){g=f;try{a=f.stateNode,u?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=f.stateNode,c=f.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=qc("display",o))}catch(j){G(e,e.return,j)}}}else if(f.tag===6){if(g===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(j){G(e,e.return,j)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;g===f&&(g=null),f=f.return}g===f&&(g=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Me(t,e),Ve(e),r&4&&nc(e);break;case 21:break;default:Me(t,e),Ve(e)}}function Ve(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Nd(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(sr(a,""),r.flags&=-33);var l=tc(e);Cl(e,l,a);break;case 3:case 4:var o=r.stateNode.containerInfo,s=tc(e);Sl(e,s,o);break;default:throw Error(N(161))}}catch(c){G(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Pm(e,t,n){P=e,bd(e)}function bd(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var a=P,l=a.child;if(a.tag===22&&r){var o=a.memoizedState!==null||Jr;if(!o){var s=a.alternate,c=s!==null&&s.memoizedState!==null||ue;s=Jr;var u=ue;if(Jr=o,(ue=c)&&!u)for(P=a;P!==null;)o=P,c=o.child,o.tag===22&&o.memoizedState!==null?ic(a):c!==null?(c.return=o,P=c):ic(a);for(;l!==null;)P=l,bd(l),l=l.sibling;P=a,Jr=s,ue=u}rc(e)}else a.subtreeFlags&8772&&l!==null?(l.return=a,P=l):rc(e)}}function rc(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ue||Ya(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ue)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Ae(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&$s(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}$s(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var g=u.memoizedState;if(g!==null){var f=g.dehydrated;f!==null&&fr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}ue||t.flags&512&&Nl(t)}catch(p){G(t,t.return,p)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function ac(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function ic(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ya(4,t)}catch(c){G(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(c){G(t,a,c)}}var l=t.return;try{Nl(t)}catch(c){G(t,l,c)}break;case 5:var o=t.return;try{Nl(t)}catch(c){G(t,o,c)}}}catch(c){G(t,t.return,c)}if(t===e){P=null;break}var s=t.sibling;if(s!==null){s.return=t.return,P=s;break}P=t.return}}var Lm=Math.ceil,_a=ot.ReactCurrentDispatcher,Mo=ot.ReactCurrentOwner,Te=ot.ReactCurrentBatchConfig,F=0,ae=null,Z=null,le=0,ke=0,hn=Lt(0),te=0,Nr=null,Gt=0,Ga=0,Fo=0,ar=null,ge=null,Ao=0,Pn=1/0,Je=null,za=!1,bl=null,kt=null,qr=!1,ht=null,Ta=0,ir=0,El=null,sa=-1,ca=0;function pe(){return F&6?X():sa!==-1?sa:sa=X()}function Nt(e){return e.mode&1?F&2&&le!==0?le&-le:fm.transition!==null?(ca===0&&(ca=uu()),ca):(e=A,e!==0||(e=window.event,e=e===void 0?16:vu(e.type)),e):1}function Be(e,t,n,r){if(50<ir)throw ir=0,El=null,Error(N(185));Lr(e,n,r),(!(F&2)||e!==ae)&&(e===ae&&(!(F&2)&&(Ga|=n),te===4&&pt(e,le)),we(e,r),n===1&&F===0&&!(t.mode&1)&&(Pn=X()+500,Ha&&_t()))}function we(e,t){var n=e.callbackNode;fp(e,t);var r=ha(e,e===ae?le:0);if(r===0)n!==null&&ms(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ms(n),t===1)e.tag===0?dm(lc.bind(null,e)):Mu(lc.bind(null,e)),om(function(){!(F&6)&&_t()}),n=null;else{switch(du(r)){case 1:n=co;break;case 4:n=su;break;case 16:n=ma;break;case 536870912:n=cu;break;default:n=ma}n=Id(n,Ed.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ed(e,t){if(sa=-1,ca=0,F&6)throw Error(N(327));var n=e.callbackNode;if(jn()&&e.callbackNode!==n)return null;var r=ha(e,e===ae?le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ra(e,r);else{t=r;var a=F;F|=2;var l=Ld();(ae!==e||le!==t)&&(Je=null,Pn=X()+500,Wt(e,t));do try{Tm();break}catch(s){Pd(e,s)}while(!0);No(),_a.current=l,F=a,Z!==null?t=0:(ae=null,le=0,t=te)}if(t!==0){if(t===2&&(a=el(e),a!==0&&(r=a,t=Pl(e,a))),t===1)throw n=Nr,Wt(e,0),pt(e,r),we(e,X()),n;if(t===6)pt(e,r);else{if(a=e.current.alternate,!(r&30)&&!_m(a)&&(t=Ra(e,r),t===2&&(l=el(e),l!==0&&(r=l,t=Pl(e,l))),t===1))throw n=Nr,Wt(e,0),pt(e,r),we(e,X()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:Ft(e,ge,Je);break;case 3:if(pt(e,r),(r&130023424)===r&&(t=Ao+500-X(),10<t)){if(ha(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){pe(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=sl(Ft.bind(null,e,ge,Je),t);break}Ft(e,ge,Je);break;case 4:if(pt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var o=31-$e(r);l=1<<o,o=t[o],o>a&&(a=o),r&=~l}if(r=a,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Lm(r/1960))-r,10<r){e.timeoutHandle=sl(Ft.bind(null,e,ge,Je),r);break}Ft(e,ge,Je);break;case 5:Ft(e,ge,Je);break;default:throw Error(N(329))}}}return we(e,X()),e.callbackNode===n?Ed.bind(null,e):null}function Pl(e,t){var n=ar;return e.current.memoizedState.isDehydrated&&(Wt(e,t).flags|=256),e=Ra(e,t),e!==2&&(t=ge,ge=n,t!==null&&Ll(t)),e}function Ll(e){ge===null?ge=e:ge.push.apply(ge,e)}function _m(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],l=a.getSnapshot;a=a.value;try{if(!We(l(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pt(e,t){for(t&=~Fo,t&=~Ga,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-$e(t),r=1<<n;e[n]=-1,t&=~r}}function lc(e){if(F&6)throw Error(N(327));jn();var t=ha(e,0);if(!(t&1))return we(e,X()),null;var n=Ra(e,t);if(e.tag!==0&&n===2){var r=el(e);r!==0&&(t=r,n=Pl(e,r))}if(n===1)throw n=Nr,Wt(e,0),pt(e,t),we(e,X()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ft(e,ge,Je),we(e,X()),null}function Do(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(Pn=X()+500,Ha&&_t())}}function Jt(e){ht!==null&&ht.tag===0&&!(F&6)&&jn();var t=F;F|=1;var n=Te.transition,r=A;try{if(Te.transition=null,A=1,e)return e()}finally{A=r,Te.transition=n,F=t,!(F&6)&&_t()}}function Uo(){ke=hn.current,B(hn)}function Wt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,lm(n)),Z!==null)for(n=Z.return;n!==null;){var r=n;switch(wo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wa();break;case 3:bn(),B(xe),B(de),Lo();break;case 5:Po(r);break;case 4:bn();break;case 13:B(V);break;case 19:B(V);break;case 10:So(r.type._context);break;case 22:case 23:Uo()}n=n.return}if(ae=e,Z=e=St(e.current,null),le=ke=t,te=0,Nr=null,Fo=Ga=Gt=0,ge=ar=null,Dt!==null){for(t=0;t<Dt.length;t++)if(n=Dt[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=a,r.next=o}n.pending=r}Dt=null}return e}function Pd(e,t){do{var n=Z;try{if(No(),ia.current=La,Pa){for(var r=H.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Pa=!1}if(Yt=0,re=ee=H=null,nr=!1,wr=0,Mo.current=null,n===null||n.return===null){te=1,Nr=t,Z=null;break}e:{var l=e,o=n.return,s=n,c=t;if(t=le,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,g=s,f=g.tag;if(!(g.mode&1)&&(f===0||f===11||f===15)){var p=g.alternate;p?(g.updateQueue=p.updateQueue,g.memoizedState=p.memoizedState,g.lanes=p.lanes):(g.updateQueue=null,g.memoizedState=null)}var v=Ks(o);if(v!==null){v.flags&=-257,Ys(v,o,s,l,t),v.mode&1&&Qs(l,u,t),t=v,c=u;var w=t.updateQueue;if(w===null){var j=new Set;j.add(c),t.updateQueue=j}else w.add(c);break e}else{if(!(t&1)){Qs(l,u,t),$o();break e}c=Error(N(426))}}else if(W&&s.mode&1){var k=Ks(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Ys(k,o,s,l,t),jo(En(c,s));break e}}l=c=En(c,s),te!==4&&(te=2),ar===null?ar=[l]:ar.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var m=dd(l,c,t);Us(l,m);break e;case 1:s=c;var d=l.type,h=l.stateNode;if(!(l.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(kt===null||!kt.has(h)))){l.flags|=65536,t&=-t,l.lanes|=t;var y=fd(l,s,t);Us(l,y);break e}}l=l.return}while(l!==null)}zd(n)}catch(S){t=S,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(!0)}function Ld(){var e=_a.current;return _a.current=La,e===null?La:e}function $o(){(te===0||te===3||te===2)&&(te=4),ae===null||!(Gt&268435455)&&!(Ga&268435455)||pt(ae,le)}function Ra(e,t){var n=F;F|=2;var r=Ld();(ae!==e||le!==t)&&(Je=null,Wt(e,t));do try{zm();break}catch(a){Pd(e,a)}while(!0);if(No(),F=n,_a.current=r,Z!==null)throw Error(N(261));return ae=null,le=0,te}function zm(){for(;Z!==null;)_d(Z)}function Tm(){for(;Z!==null&&!rp();)_d(Z)}function _d(e){var t=Rd(e.alternate,e,ke);e.memoizedProps=e.pendingProps,t===null?zd(e):Z=t,Mo.current=null}function zd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Cm(n,t),n!==null){n.flags&=32767,Z=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,Z=null;return}}else if(n=Sm(n,t,ke),n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);te===0&&(te=5)}function Ft(e,t,n){var r=A,a=Te.transition;try{Te.transition=null,A=1,Rm(e,t,n,r)}finally{Te.transition=a,A=r}return null}function Rm(e,t,n,r){do jn();while(ht!==null);if(F&6)throw Error(N(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(pp(e,l),e===ae&&(Z=ae=null,le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qr||(qr=!0,Id(ma,function(){return jn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Te.transition,Te.transition=null;var o=A;A=1;var s=F;F|=4,Mo.current=null,Em(e,n),Cd(n,e),Zp(ll),ga=!!il,ll=il=null,e.current=n,Pm(n),ap(),F=s,A=o,Te.transition=l}else e.current=n;if(qr&&(qr=!1,ht=e,Ta=a),l=e.pendingLanes,l===0&&(kt=null),op(n.stateNode),we(e,X()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(za)throw za=!1,e=bl,bl=null,e;return Ta&1&&e.tag!==0&&jn(),l=e.pendingLanes,l&1?e===El?ir++:(ir=0,El=e):ir=0,_t(),null}function jn(){if(ht!==null){var e=du(Ta),t=Te.transition,n=A;try{if(Te.transition=null,A=16>e?16:e,ht===null)var r=!1;else{if(e=ht,ht=null,Ta=0,F&6)throw Error(N(331));var a=F;for(F|=4,P=e.current;P!==null;){var l=P,o=l.child;if(P.flags&16){var s=l.deletions;if(s!==null){for(var c=0;c<s.length;c++){var u=s[c];for(P=u;P!==null;){var g=P;switch(g.tag){case 0:case 11:case 15:rr(8,g,l)}var f=g.child;if(f!==null)f.return=g,P=f;else for(;P!==null;){g=P;var p=g.sibling,v=g.return;if(kd(g),g===u){P=null;break}if(p!==null){p.return=v,P=p;break}P=v}}}var w=l.alternate;if(w!==null){var j=w.child;if(j!==null){w.child=null;do{var k=j.sibling;j.sibling=null,j=k}while(j!==null)}}P=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,P=o;else e:for(;P!==null;){if(l=P,l.flags&2048)switch(l.tag){case 0:case 11:case 15:rr(9,l,l.return)}var m=l.sibling;if(m!==null){m.return=l.return,P=m;break e}P=l.return}}var d=e.current;for(P=d;P!==null;){o=P;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,P=h;else e:for(o=d;P!==null;){if(s=P,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ya(9,s)}}catch(S){G(s,s.return,S)}if(s===o){P=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,P=y;break e}P=s.return}}if(F=a,_t(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(Ua,e)}catch{}r=!0}return r}finally{A=n,Te.transition=t}}return!1}function oc(e,t,n){t=En(n,t),t=dd(e,t,1),e=jt(e,t,1),t=pe(),e!==null&&(Lr(e,1,t),we(e,t))}function G(e,t,n){if(e.tag===3)oc(e,e,n);else for(;t!==null;){if(t.tag===3){oc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kt===null||!kt.has(r))){e=En(n,e),e=fd(t,e,1),t=jt(t,e,1),e=pe(),t!==null&&(Lr(t,1,e),we(t,e));break}}t=t.return}}function Im(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pe(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(le&n)===n&&(te===4||te===3&&(le&130023424)===le&&500>X()-Ao?Wt(e,0):Fo|=n),we(e,t)}function Td(e,t){t===0&&(e.mode&1?(t=$r,$r<<=1,!($r&130023424)&&($r=4194304)):t=1);var n=pe();e=it(e,t),e!==null&&(Lr(e,t,n),we(e,n))}function Om(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Td(e,n)}function Mm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),Td(e,n)}var Rd;Rd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xe.current)ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ve=!1,Nm(e,t,n);ve=!!(e.flags&131072)}else ve=!1,W&&t.flags&1048576&&Fu(t,Na,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;oa(e,t),e=t.pendingProps;var a=Nn(t,de.current);wn(t,n),a=zo(null,t,r,e,a,n);var l=To();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ye(r)?(l=!0,ja(t)):l=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,bo(t),a.updater=Ka,t.stateNode=a,a._reactInternals=t,hl(t,r,e,n),t=xl(null,t,r,!0,l,n)):(t.tag=0,W&&l&&yo(t),fe(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(oa(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=Am(r),e=Ae(r,e),a){case 0:t=vl(null,t,r,e,n);break e;case 1:t=qs(null,t,r,e,n);break e;case 11:t=Gs(null,t,r,e,n);break e;case 14:t=Js(null,t,r,Ae(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Ae(r,a),vl(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Ae(r,a),qs(e,t,r,a,n);case 3:e:{if(gd(t),e===null)throw Error(N(387));r=t.pendingProps,l=t.memoizedState,a=l.element,Wu(e,t),ba(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){a=En(Error(N(423)),t),t=Xs(e,t,r,n,a);break e}else if(r!==a){a=En(Error(N(424)),t),t=Xs(e,t,r,n,a);break e}else for(Ne=wt(t.stateNode.containerInfo.firstChild),Se=t,W=!0,Ue=null,n=$u(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sn(),r===a){t=lt(e,t,n);break e}fe(e,t,r,n)}t=t.child}return t;case 5:return Vu(t),e===null&&fl(t),r=t.type,a=t.pendingProps,l=e!==null?e.memoizedProps:null,o=a.children,ol(r,a)?o=null:l!==null&&ol(r,l)&&(t.flags|=32),hd(e,t),fe(e,t,o,n),t.child;case 6:return e===null&&fl(t),null;case 13:return vd(e,t,n);case 4:return Eo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Cn(t,null,r,n):fe(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Ae(r,a),Gs(e,t,r,a,n);case 7:return fe(e,t,t.pendingProps,n),t.child;case 8:return fe(e,t,t.pendingProps.children,n),t.child;case 12:return fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,l=t.memoizedProps,o=a.value,U(Sa,r._currentValue),r._currentValue=o,l!==null)if(We(l.value,o)){if(l.children===a.children&&!xe.current){t=lt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){o=l.child;for(var c=s.firstContext;c!==null;){if(c.context===r){if(l.tag===1){c=nt(-1,n&-n),c.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var g=u.pending;g===null?c.next=c:(c.next=g.next,g.next=c),u.pending=c}}l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),pl(l.return,n,t),s.lanes|=n;break}c=c.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(N(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),pl(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}fe(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,wn(t,n),a=Re(a),r=r(a),t.flags|=1,fe(e,t,r,n),t.child;case 14:return r=t.type,a=Ae(r,t.pendingProps),a=Ae(r.type,a),Js(e,t,r,a,n);case 15:return pd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Ae(r,a),oa(e,t),t.tag=1,ye(r)?(e=!0,ja(t)):e=!1,wn(t,n),ud(t,r,a),hl(t,r,a,n),xl(null,t,r,!0,e,n);case 19:return xd(e,t,n);case 22:return md(e,t,n)}throw Error(N(156,t.tag))};function Id(e,t){return ou(e,t)}function Fm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ze(e,t,n,r){return new Fm(e,t,n,r)}function Bo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Am(e){if(typeof e=="function")return Bo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===lo)return 11;if(e===oo)return 14}return 2}function St(e,t){var n=e.alternate;return n===null?(n=ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ua(e,t,n,r,a,l){var o=2;if(r=e,typeof e=="function")Bo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case an:return Vt(n.children,a,l,t);case io:o=8,a|=8;break;case Di:return e=ze(12,n,t,a|2),e.elementType=Di,e.lanes=l,e;case Ui:return e=ze(13,n,t,a),e.elementType=Ui,e.lanes=l,e;case $i:return e=ze(19,n,t,a),e.elementType=$i,e.lanes=l,e;case Vc:return Ja(n,a,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Bc:o=10;break e;case Wc:o=9;break e;case lo:o=11;break e;case oo:o=14;break e;case ut:o=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=ze(o,n,t,a),t.elementType=e,t.type=r,t.lanes=l,t}function Vt(e,t,n,r){return e=ze(7,e,r,t),e.lanes=n,e}function Ja(e,t,n,r){return e=ze(22,e,r,t),e.elementType=Vc,e.lanes=n,e.stateNode={isHidden:!1},e}function Ri(e,t,n){return e=ze(6,e,null,t),e.lanes=n,e}function Ii(e,t,n){return t=ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Dm(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mi(0),this.expirationTimes=mi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mi(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Wo(e,t,n,r,a,l,o,s,c){return e=new Dm(e,t,n,s,c),t===1?(t=1,l===!0&&(t|=8)):t=0,l=ze(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bo(l),e}function Um(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Od(e){if(!e)return Et;e=e._reactInternals;e:{if(Xt(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(ye(n))return Ou(e,n,t)}return t}function Md(e,t,n,r,a,l,o,s,c){return e=Wo(n,r,!0,e,a,l,o,s,c),e.context=Od(null),n=e.current,r=pe(),a=Nt(n),l=nt(r,a),l.callback=t??null,jt(n,l,a),e.current.lanes=a,Lr(e,a,r),we(e,r),e}function qa(e,t,n,r){var a=t.current,l=pe(),o=Nt(a);return n=Od(n),t.context===null?t.context=n:t.pendingContext=n,t=nt(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=jt(a,t,o),e!==null&&(Be(e,a,o,l),aa(e,a,o)),o}function Ia(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Vo(e,t){sc(e,t),(e=e.alternate)&&sc(e,t)}function $m(){return null}var Fd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ho(e){this._internalRoot=e}Xa.prototype.render=Ho.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));qa(e,t,null,null)};Xa.prototype.unmount=Ho.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Jt(function(){qa(null,e,null,null)}),t[at]=null}};function Xa(e){this._internalRoot=e}Xa.prototype.unstable_scheduleHydration=function(e){if(e){var t=mu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ft.length&&t!==0&&t<ft[n].priority;n++);ft.splice(n,0,e),n===0&&gu(e)}};function Qo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Za(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cc(){}function Bm(e,t,n,r,a){if(a){if(typeof r=="function"){var l=r;r=function(){var u=Ia(o);l.call(u)}}var o=Md(t,r,e,0,null,!1,!1,"",cc);return e._reactRootContainer=o,e[at]=o.current,hr(e.nodeType===8?e.parentNode:e),Jt(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var s=r;r=function(){var u=Ia(c);s.call(u)}}var c=Wo(e,0,!1,null,null,!1,!1,"",cc);return e._reactRootContainer=c,e[at]=c.current,hr(e.nodeType===8?e.parentNode:e),Jt(function(){qa(t,c,n,r)}),c}function ei(e,t,n,r,a){var l=n._reactRootContainer;if(l){var o=l;if(typeof a=="function"){var s=a;a=function(){var c=Ia(o);s.call(c)}}qa(t,o,e,a)}else o=Bm(n,t,e,a,r);return Ia(o)}fu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Gn(t.pendingLanes);n!==0&&(uo(t,n|1),we(t,X()),!(F&6)&&(Pn=X()+500,_t()))}break;case 13:Jt(function(){var r=it(e,1);if(r!==null){var a=pe();Be(r,e,1,a)}}),Vo(e,1)}};fo=function(e){if(e.tag===13){var t=it(e,134217728);if(t!==null){var n=pe();Be(t,e,134217728,n)}Vo(e,134217728)}};pu=function(e){if(e.tag===13){var t=Nt(e),n=it(e,t);if(n!==null){var r=pe();Be(n,e,t,r)}Vo(e,t)}};mu=function(){return A};hu=function(e,t){var n=A;try{return A=e,t()}finally{A=n}};qi=function(e,t,n){switch(t){case"input":if(Vi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=Va(r);if(!a)throw Error(N(90));Qc(r),Vi(r,a)}}}break;case"textarea":Yc(e,n);break;case"select":t=n.value,t!=null&&gn(e,!!n.multiple,t,!1)}};tu=Do;nu=Jt;var Wm={usingClientEntryPoint:!1,Events:[zr,cn,Va,Zc,eu,Do]},Qn={findFiberByHostInstance:At,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vm={bundleType:Qn.bundleType,version:Qn.version,rendererPackageName:Qn.rendererPackageName,rendererConfig:Qn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ot.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=iu(e),e===null?null:e.stateNode},findFiberByHostInstance:Qn.findFiberByHostInstance||$m,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xr.isDisabled&&Xr.supportsFiber)try{Ua=Xr.inject(Vm),Ke=Xr}catch{}}be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wm;be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qo(t))throw Error(N(200));return Um(e,t,null,n)};be.createRoot=function(e,t){if(!Qo(e))throw Error(N(299));var n=!1,r="",a=Fd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Wo(e,1,!1,null,null,n,!1,r,a),e[at]=t.current,hr(e.nodeType===8?e.parentNode:e),new Ho(t)};be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=iu(t),e=e===null?null:e.stateNode,e};be.flushSync=function(e){return Jt(e)};be.hydrate=function(e,t,n){if(!Za(t))throw Error(N(200));return ei(null,e,t,!0,n)};be.hydrateRoot=function(e,t,n){if(!Qo(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,a=!1,l="",o=Fd;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Md(t,null,e,1,n??null,a,!1,l,o),e[at]=t.current,hr(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Xa(t)};be.render=function(e,t,n){if(!Za(t))throw Error(N(200));return ei(null,e,t,!1,n)};be.unmountComponentAtNode=function(e){if(!Za(e))throw Error(N(40));return e._reactRootContainer?(Jt(function(){ei(null,null,e,!1,function(){e._reactRootContainer=null,e[at]=null})}),!0):!1};be.unstable_batchedUpdates=Do;be.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Za(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return ei(e,t,n,!1,r)};be.version="18.3.1-next-f1338f8080-20240426";function Ad(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ad)}catch(e){console.error(e)}}Ad(),Ac.exports=be;var Hm=Ac.exports,uc=Hm;Fi.createRoot=uc.createRoot,Fi.hydrateRoot=uc.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sr(){return Sr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Sr.apply(null,arguments)}var gt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(gt||(gt={}));const dc="popstate";function Qm(e){e===void 0&&(e={});function t(r,a){let{pathname:l,search:o,hash:s}=r.location;return _l("",{pathname:l,search:o,hash:s},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:Oa(a)}return Ym(t,n,null,e)}function Q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ko(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Km(){return Math.random().toString(36).substr(2,8)}function fc(e,t){return{usr:e.state,key:e.key,idx:t}}function _l(e,t,n,r){return n===void 0&&(n=null),Sr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?In(t):t,{state:n,key:t&&t.key||r||Km()})}function Oa(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function In(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ym(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:l=!1}=r,o=a.history,s=gt.Pop,c=null,u=g();u==null&&(u=0,o.replaceState(Sr({},o.state,{idx:u}),""));function g(){return(o.state||{idx:null}).idx}function f(){s=gt.Pop;let k=g(),m=k==null?null:k-u;u=k,c&&c({action:s,location:j.location,delta:m})}function p(k,m){s=gt.Push;let d=_l(j.location,k,m);u=g()+1;let h=fc(d,u),y=j.createHref(d);try{o.pushState(h,"",y)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;a.location.assign(y)}l&&c&&c({action:s,location:j.location,delta:1})}function v(k,m){s=gt.Replace;let d=_l(j.location,k,m);u=g();let h=fc(d,u),y=j.createHref(d);o.replaceState(h,"",y),l&&c&&c({action:s,location:j.location,delta:0})}function w(k){let m=a.location.origin!=="null"?a.location.origin:a.location.href,d=typeof k=="string"?k:Oa(k);return d=d.replace(/ $/,"%20"),Q(m,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,m)}let j={get action(){return s},get location(){return e(a,o)},listen(k){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(dc,f),c=k,()=>{a.removeEventListener(dc,f),c=null}},createHref(k){return t(a,k)},createURL:w,encodeLocation(k){let m=w(k);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:p,replace:v,go(k){return o.go(k)}};return j}var pc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(pc||(pc={}));function Gm(e,t,n){return n===void 0&&(n="/"),Jm(e,t,n)}function Jm(e,t,n,r){let a=typeof t=="string"?In(t):t,l=Ln(a.pathname||"/",n);if(l==null)return null;let o=Dd(e);qm(o);let s=null,c=sh(l);for(let u=0;s==null&&u<o.length;++u)s=lh(o[u],c);return s}function Dd(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(l,o,s)=>{let c={relativePath:s===void 0?l.path||"":s,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};c.relativePath.startsWith("/")&&(Q(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Ct([r,c.relativePath]),g=n.concat(c);l.children&&l.children.length>0&&(Q(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Dd(l.children,t,g,u)),!(l.path==null&&!l.index)&&t.push({path:u,score:ah(u,l.index),routesMeta:g})};return e.forEach((l,o)=>{var s;if(l.path===""||!((s=l.path)!=null&&s.includes("?")))a(l,o);else for(let c of Ud(l.path))a(l,o,c)}),t}function Ud(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return a?[l,""]:[l];let o=Ud(r.join("/")),s=[];return s.push(...o.map(c=>c===""?l:[l,c].join("/"))),a&&s.push(...o),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function qm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ih(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Xm=/^:[\w-]+$/,Zm=3,eh=2,th=1,nh=10,rh=-2,mc=e=>e==="*";function ah(e,t){let n=e.split("/"),r=n.length;return n.some(mc)&&(r+=rh),t&&(r+=eh),n.filter(a=>!mc(a)).reduce((a,l)=>a+(Xm.test(l)?Zm:l===""?th:nh),r)}function ih(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function lh(e,t,n){let{routesMeta:r}=e,a={},l="/",o=[];for(let s=0;s<r.length;++s){let c=r[s],u=s===r.length-1,g=l==="/"?t:t.slice(l.length)||"/",f=zl({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},g),p=c.route;if(!f)return null;Object.assign(a,f.params),o.push({params:a,pathname:Ct([l,f.pathname]),pathnameBase:ph(Ct([l,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(l=Ct([l,f.pathnameBase]))}return o}function zl(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=oh(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let l=a[0],o=l.replace(/(.)\/+$/,"$1"),s=a.slice(1);return{params:r.reduce((u,g,f)=>{let{paramName:p,isOptional:v}=g;if(p==="*"){let j=s[f]||"";o=l.slice(0,l.length-j.length).replace(/(.)\/+$/,"$1")}const w=s[f];return v&&!w?u[p]=void 0:u[p]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:l,pathnameBase:o,pattern:e}}function oh(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ko(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,c)=>(r.push({paramName:s,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function sh(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ko(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ln(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const ch=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,uh=e=>ch.test(e);function dh(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?In(e):e,l;if(n)if(uh(n))l=n;else{if(n.includes("//")){let o=n;n=$d(n),Ko(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?l=hc(n.substring(1),"/"):l=hc(n,t)}else l=t;return{pathname:l,search:mh(r),hash:hh(a)}}function hc(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function Oi(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function fh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Yo(e,t){let n=fh(e);return t?n.map((r,a)=>a===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Go(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=In(e):(a=Sr({},e),Q(!a.pathname||!a.pathname.includes("?"),Oi("?","pathname","search",a)),Q(!a.pathname||!a.pathname.includes("#"),Oi("#","pathname","hash",a)),Q(!a.search||!a.search.includes("#"),Oi("#","search","hash",a)));let l=e===""||a.pathname==="",o=l?"/":a.pathname,s;if(o==null)s=n;else{let f=t.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;a.pathname=p.join("/")}s=f>=0?t[f]:"/"}let c=dh(a,s),u=o&&o!=="/"&&o.endsWith("/"),g=(l||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||g)&&(c.pathname+="/"),c}const $d=e=>e.replace(/\/\/+/g,"/"),Ct=e=>$d(e.join("/")),ph=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),mh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,hh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function gh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Bd=["post","put","patch","delete"];new Set(Bd);const vh=["get",...Bd];new Set(vh);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cr(){return Cr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Cr.apply(null,arguments)}const ti=x.createContext(null),Wd=x.createContext(null),st=x.createContext(null),ni=x.createContext(null),zt=x.createContext({outlet:null,matches:[],isDataRoute:!1}),Vd=x.createContext(null);function xh(e,t){let{relative:n}=t===void 0?{}:t;On()||Q(!1);let{basename:r,navigator:a}=x.useContext(st),{hash:l,pathname:o,search:s}=ri(e,{relative:n}),c=o;return r!=="/"&&(c=o==="/"?r:Ct([r,o])),a.createHref({pathname:c,search:s,hash:l})}function On(){return x.useContext(ni)!=null}function Zt(){return On()||Q(!1),x.useContext(ni).location}function Hd(e){x.useContext(st).static||x.useLayoutEffect(e)}function Ge(){let{isDataRoute:e}=x.useContext(zt);return e?zh():yh()}function yh(){On()||Q(!1);let e=x.useContext(ti),{basename:t,future:n,navigator:r}=x.useContext(st),{matches:a}=x.useContext(zt),{pathname:l}=Zt(),o=JSON.stringify(Yo(a,n.v7_relativeSplatPath)),s=x.useRef(!1);return Hd(()=>{s.current=!0}),x.useCallback(function(u,g){if(g===void 0&&(g={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let f=Go(u,JSON.parse(o),l,g.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Ct([t,f.pathname])),(g.replace?r.replace:r.push)(f,g.state,g)},[t,r,o,l,e])}function ri(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=x.useContext(st),{matches:a}=x.useContext(zt),{pathname:l}=Zt(),o=JSON.stringify(Yo(a,r.v7_relativeSplatPath));return x.useMemo(()=>Go(e,JSON.parse(o),l,n==="path"),[e,o,l,n])}function wh(e,t){return jh(e,t)}function jh(e,t,n,r){On()||Q(!1);let{navigator:a}=x.useContext(st),{matches:l}=x.useContext(zt),o=l[l.length-1],s=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let u=Zt(),g;if(t){var f;let k=typeof t=="string"?In(t):t;c==="/"||(f=k.pathname)!=null&&f.startsWith(c)||Q(!1),g=k}else g=u;let p=g.pathname||"/",v=p;if(c!=="/"){let k=c.replace(/^\//,"").split("/");v="/"+p.replace(/^\//,"").split("/").slice(k.length).join("/")}let w=Gm(e,{pathname:v}),j=bh(w&&w.map(k=>Object.assign({},k,{params:Object.assign({},s,k.params),pathname:Ct([c,a.encodeLocation?a.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?c:Ct([c,a.encodeLocation?a.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),l,n,r);return t&&j?x.createElement(ni.Provider,{value:{location:Cr({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:gt.Pop}},j):j}function kh(){let e=_h(),t=gh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:a},n):null,null)}const Nh=x.createElement(kh,null);class Sh extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?x.createElement(zt.Provider,{value:this.props.routeContext},x.createElement(Vd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ch(e){let{routeContext:t,match:n,children:r}=e,a=x.useContext(ti);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(zt.Provider,{value:t},r)}function bh(e,t,n,r){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,s=(a=n)==null?void 0:a.errors;if(s!=null){let g=o.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);g>=0||Q(!1),o=o.slice(0,Math.min(o.length,g+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let g=0;g<o.length;g++){let f=o[g];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=g),f.route.id){let{loaderData:p,errors:v}=n,w=f.route.loader&&p[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||w){c=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((g,f,p)=>{let v,w=!1,j=null,k=null;n&&(v=s&&f.route.id?s[f.route.id]:void 0,j=f.route.errorElement||Nh,c&&(u<0&&p===0?(Th("route-fallback"),w=!0,k=null):u===p&&(w=!0,k=f.route.hydrateFallbackElement||null)));let m=t.concat(o.slice(0,p+1)),d=()=>{let h;return v?h=j:w?h=k:f.route.Component?h=x.createElement(f.route.Component,null):f.route.element?h=f.route.element:h=g,x.createElement(Ch,{match:f,routeContext:{outlet:g,matches:m,isDataRoute:n!=null},children:h})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?x.createElement(Sh,{location:n.location,revalidation:n.revalidation,component:j,error:v,children:d(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):d()},null)}var Qd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Qd||{}),Kd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Kd||{});function Eh(e){let t=x.useContext(ti);return t||Q(!1),t}function Ph(e){let t=x.useContext(Wd);return t||Q(!1),t}function Lh(e){let t=x.useContext(zt);return t||Q(!1),t}function Yd(e){let t=Lh(),n=t.matches[t.matches.length-1];return n.route.id||Q(!1),n.route.id}function _h(){var e;let t=x.useContext(Vd),n=Ph(),r=Yd();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function zh(){let{router:e}=Eh(Qd.UseNavigateStable),t=Yd(Kd.UseNavigateStable),n=x.useRef(!1);return Hd(()=>{n.current=!0}),x.useCallback(function(a,l){l===void 0&&(l={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,Cr({fromRouteId:t},l)))},[e,t])}const gc={};function Th(e,t,n){gc[e]||(gc[e]=!0)}function Rh(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Gd(e){let{to:t,replace:n,state:r,relative:a}=e;On()||Q(!1);let{future:l,static:o}=x.useContext(st),{matches:s}=x.useContext(zt),{pathname:c}=Zt(),u=Ge(),g=Go(t,Yo(s,l.v7_relativeSplatPath),c,a==="path"),f=JSON.stringify(g);return x.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:a}),[u,f,a,n,r]),null}function Fe(e){Q(!1)}function Ih(e){let{basename:t="/",children:n=null,location:r,navigationType:a=gt.Pop,navigator:l,static:o=!1,future:s}=e;On()&&Q(!1);let c=t.replace(/^\/*/,"/"),u=x.useMemo(()=>({basename:c,navigator:l,static:o,future:Cr({v7_relativeSplatPath:!1},s)}),[c,s,l,o]);typeof r=="string"&&(r=In(r));let{pathname:g="/",search:f="",hash:p="",state:v=null,key:w="default"}=r,j=x.useMemo(()=>{let k=Ln(g,c);return k==null?null:{location:{pathname:k,search:f,hash:p,state:v,key:w},navigationType:a}},[c,g,f,p,v,w,a]);return j==null?null:x.createElement(st.Provider,{value:u},x.createElement(ni.Provider,{children:n,value:j}))}function Oh(e){let{children:t,location:n}=e;return wh(Tl(t),n)}new Promise(()=>{});function Tl(e,t){t===void 0&&(t=[]);let n=[];return x.Children.forEach(e,(r,a)=>{if(!x.isValidElement(r))return;let l=[...t,a];if(r.type===x.Fragment){n.push.apply(n,Tl(r.props.children,l));return}r.type!==Fe&&Q(!1),!r.props.index||!r.props.children||Q(!1);let o={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Tl(r.props.children,l)),n.push(o)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ma(){return Ma=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ma.apply(null,arguments)}function Jd(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Mh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Fh(e,t){return e.button===0&&(!t||t==="_self")&&!Mh(e)}function Rl(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(a=>[n,a]):[[n,r]])},[]))}function Ah(e,t){let n=Rl(e);return t&&t.forEach((r,a)=>{n.has(a)||t.getAll(a).forEach(l=>{n.append(a,l)})}),n}const Dh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Uh=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],$h="6";try{window.__reactRouterVersion=$h}catch{}const Bh=x.createContext({isTransitioning:!1}),Wh="startTransition",vc=If[Wh];function Vh(e){let{basename:t,children:n,future:r,window:a}=e,l=x.useRef();l.current==null&&(l.current=Qm({window:a,v5Compat:!0}));let o=l.current,[s,c]=x.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},g=x.useCallback(f=>{u&&vc?vc(()=>c(f)):c(f)},[c,u]);return x.useLayoutEffect(()=>o.listen(g),[o,g]),x.useEffect(()=>Rh(r),[r]),x.createElement(Ih,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}const Hh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Qh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,J=x.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:l,replace:o,state:s,target:c,to:u,preventScrollReset:g,viewTransition:f}=t,p=Jd(t,Dh),{basename:v}=x.useContext(st),w,j=!1;if(typeof u=="string"&&Qh.test(u)&&(w=u,Hh))try{let h=new URL(window.location.href),y=u.startsWith("//")?new URL(h.protocol+u):new URL(u),S=Ln(y.pathname,v);y.origin===h.origin&&S!=null?u=S+y.search+y.hash:j=!0}catch{}let k=xh(u,{relative:a}),m=Yh(u,{replace:o,state:s,target:c,preventScrollReset:g,relative:a,viewTransition:f});function d(h){r&&r(h),h.defaultPrevented||m(h)}return x.createElement("a",Ma({},p,{href:w||k,onClick:j||l?r:d,ref:n,target:c}))}),$t=x.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:a=!1,className:l="",end:o=!1,style:s,to:c,viewTransition:u,children:g}=t,f=Jd(t,Uh),p=ri(c,{relative:f.relative}),v=Zt(),w=x.useContext(Wd),{navigator:j,basename:k}=x.useContext(st),m=w!=null&&Gh(p)&&u===!0,d=j.encodeLocation?j.encodeLocation(p).pathname:p.pathname,h=v.pathname,y=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;a||(h=h.toLowerCase(),y=y?y.toLowerCase():null,d=d.toLowerCase()),y&&k&&(y=Ln(y,k)||y);const S=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let E=h===d||!o&&h.startsWith(d)&&h.charAt(S)==="/",b=y!=null&&(y===d||!o&&y.startsWith(d)&&y.charAt(d.length)==="/"),L={isActive:E,isPending:b,isTransitioning:m},T=E?r:void 0,C;typeof l=="function"?C=l(L):C=[l,E?"active":null,b?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let I=typeof s=="function"?s(L):s;return x.createElement(J,Ma({},f,{"aria-current":T,className:C,ref:n,style:I,to:c,viewTransition:u}),typeof g=="function"?g(L):g)});var Il;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Il||(Il={}));var xc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(xc||(xc={}));function Kh(e){let t=x.useContext(ti);return t||Q(!1),t}function Yh(e,t){let{target:n,replace:r,state:a,preventScrollReset:l,relative:o,viewTransition:s}=t===void 0?{}:t,c=Ge(),u=Zt(),g=ri(e,{relative:o});return x.useCallback(f=>{if(Fh(f,n)){f.preventDefault();let p=r!==void 0?r:Oa(u)===Oa(g);c(e,{replace:p,state:a,preventScrollReset:l,relative:o,viewTransition:s})}},[u,c,g,r,a,n,e,l,o,s])}function qd(e){let t=x.useRef(Rl(e)),n=x.useRef(!1),r=Zt(),a=x.useMemo(()=>Ah(r.search,n.current?null:t.current),[r.search]),l=Ge(),o=x.useCallback((s,c)=>{const u=Rl(typeof s=="function"?s(a):s);n.current=!0,l("?"+u,c)},[l,a]);return[a,o]}function Gh(e,t){t===void 0&&(t={});let n=x.useContext(Bh);n==null&&Q(!1);let{basename:r}=Kh(Il.useViewTransitionState),a=ri(e,{relative:t.relative});if(!n.isTransitioning)return!1;let l=Ln(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Ln(n.nextLocation.pathname,r)||n.nextLocation.pathname;return zl(a.pathname,o)!=null||zl(a.pathname,l)!=null}const Ol=[{id:"u_alex",name:"Alex Vance",username:"alex_vance",email:"alex@socialla.com",password:"Password123!",avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",cover:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",bio:"Product Designer & Frontend Engineer 🚀 Crafting intuitive digital experiences with clean code.",followers:2450,following:480,verified:!0,joinedDate:"March 2026"},{id:"u_sarah",name:"Sarah Jenkins",username:"sarah_design",email:"sarah@socialla.com",password:"Password123!",avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",cover:"https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80",bio:"Lead UX Researcher & Visual Artist 🎨 Exploring generative AI & minimal aesthetics.",followers:5120,following:310,verified:!0,joinedDate:"January 2026"},{id:"u_marcus",name:"Marcus Chen",username:"marcus_tech",email:"marcus@socialla.com",password:"Password123!",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",cover:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",bio:"Building open source tools & scale systems ⚡ Coffee addict & tech podcast host.",followers:1890,following:620,verified:!1,joinedDate:"February 2026"},{id:"u_elena",name:"Elena Rodriguez",username:"elena_travels",email:"elena@socialla.com",password:"Password123!",avatar:"https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",cover:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",bio:"Travel Photographer 📷 Capturing hidden gems around Europe & Latin America.",followers:8430,following:215,verified:!0,joinedDate:"December 2025"},{id:"u_david",name:"David Kim",username:"david_ai",email:"david@socialla.com",password:"Password123!",avatar:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",cover:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",bio:"AI Engineer & Machine Learning Enthusiast. Exploring neural networks & web development.",followers:3200,following:410,verified:!1,joinedDate:"April 2026"}],Ml=[{id:"post_1",authorId:"u_sarah",authorName:"Sarah Jenkins",authorUsername:"sarah_design",authorAvatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",authorVerified:!0,content:"Just finished redesigning the core design tokens for our new web application! 🎨 Combining vibrant neon gradients with glassmorphism overlays creates such a fresh vibe. What do you think of this visual hierarchy?",image:"https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1000&q=80",likes:["u_alex","u_marcus","u_elena"],likeCount:42,comments:[{id:"c_1",authorName:"Alex Vance",authorUsername:"alex_vance",authorAvatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",content:"The subtle glass blur backdrop is incredible! Great work Sarah.",timestamp:"2 hours ago"},{id:"c_2",authorName:"Marcus Chen",authorUsername:"marcus_tech",authorAvatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",content:"Looks super crisp on OLED displays. Loving the contrast!",timestamp:"1 hour ago"}],commentCount:2,shares:14,savedBy:["u_alex"],timestamp:"3 hours ago"},{id:"post_2",authorId:"u_elena",authorName:"Elena Rodriguez",authorUsername:"elena_travels",authorAvatar:"https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",authorVerified:!0,content:"Golden hour in the Swiss Alps 🏔️ Early morning hiking pays off when you catch sunrise above the clouds. Absolutely breathtaking scenery!",image:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",likes:["u_sarah","u_david"],likeCount:128,comments:[{id:"c_3",authorName:"David Kim",authorUsername:"david_ai",authorAvatar:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",content:"What camera lens did you use for this shot? Lighting is perfect!",timestamp:"4 hours ago"}],commentCount:1,shares:29,savedBy:[],timestamp:"5 hours ago"},{id:"post_3",authorId:"u_marcus",authorName:"Marcus Chen",authorUsername:"marcus_tech",authorAvatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",authorVerified:!1,content:"Excited to launch Socialla today! A frontend social experience built with pure React, modern CSS design tokens, zero external database dependencies, and complete client-side persistence.",image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80",likes:["u_alex","u_sarah","u_elena","u_david"],likeCount:89,comments:[],commentCount:0,shares:31,savedBy:["u_alex"],timestamp:"1 day ago"}],Fl=[{id:"story_1",userId:"u_sarah",userName:"Sarah Jenkins",userAvatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",image:"https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80",caption:"Morning desk setup ☕ Ready to code!",timestamp:"2h ago",seen:!1},{id:"story_2",userId:"u_elena",userName:"Elena Rodriguez",userAvatar:"https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",caption:"Exploring coastal waves 🌊",timestamp:"4h ago",seen:!1},{id:"story_3",userId:"u_marcus",userName:"Marcus Chen",userAvatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",image:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",caption:"Debugging till midnight 💻",timestamp:"6h ago",seen:!0},{id:"story_4",userId:"u_david",userName:"David Kim",userAvatar:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",image:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",caption:"AI Hackathon vibes 🤖",timestamp:"8h ago",seen:!0}],Al=[{id:"notif_1",type:"like",user:{name:"Sarah Jenkins",username:"sarah_design",avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"},targetText:"liked your post 'Just finished redesigning the core design tokens...'",timestamp:"10m ago",read:!1},{id:"notif_2",type:"comment",user:{name:"Marcus Chen",username:"marcus_tech",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"},targetText:"commented: 'Looks super crisp on OLED displays...'",timestamp:"1h ago",read:!1},{id:"notif_3",type:"follow",user:{name:"Elena Rodriguez",username:"elena_travels",avatar:"https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"},targetText:"started following you on Socialla.",timestamp:"3h ago",read:!0},{id:"notif_4",type:"mention",user:{name:"David Kim",username:"david_ai",avatar:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"},targetText:"mentioned you in a comment.",timestamp:"1d ago",read:!0}],Dl=[{id:"conv_sarah",participant:{id:"u_sarah",name:"Sarah Jenkins",username:"sarah_design",avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",online:!0},unread:2,messages:[{id:"m1",senderId:"u_sarah",text:"Hey! Did you check out the new design system components?",time:"10:30 AM"},{id:"m2",senderId:"u_sarah",text:"I uploaded the Figma tokens to the post feed!",time:"10:31 AM"},{id:"m3",senderId:"me",text:"Yes! The glassmorphism and gradient cards look super slick.",time:"10:45 AM"},{id:"m4",senderId:"u_sarah",text:"Awesome! Let me know if we need any extra icon sets.",time:"10:50 AM"}]},{id:"conv_marcus",participant:{id:"u_marcus",name:"Marcus Chen",username:"marcus_tech",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",online:!0},unread:0,messages:[{id:"m10",senderId:"u_marcus",text:"Deploying the Socialla frontend update now!",time:"Yesterday"},{id:"m11",senderId:"me",text:"Sweet! All localStorage sync utilities are running smooth.",time:"Yesterday"}]},{id:"conv_elena",participant:{id:"u_elena",name:"Elena Rodriguez",username:"elena_travels",avatar:"https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",online:!1},unread:0,messages:[{id:"m20",senderId:"u_elena",text:"Thanks for saving my mountain hiking story highlight!",time:"3 days ago"}]}],Ul={theme:"dark",notifications:{likes:!0,comments:!0,follows:!0,messages:!0},privacy:{privateProfile:!1,showOnlineStatus:!0,allowTagging:!0}},D={USERS:"socialla_users",CURRENT_USER:"socialla_current_user",POSTS:"socialla_posts",STORIES:"socialla_stories",NOTIFICATIONS:"socialla_notifications",MESSAGES:"socialla_messages",SETTINGS:"socialla_settings"},en=(e,t)=>{try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch(n){return console.error(`Error reading ${e} from localStorage:`,n),t}},Pe=(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch(n){console.error(`Error saving ${e} to localStorage:`,n)}},Bt=()=>{const e=en(D.USERS,null);return e||(Pe(D.USERS,Ol),Ol)},yc=e=>Pe(D.USERS,e),Jh=()=>en(D.CURRENT_USER,null),Mi=e=>Pe(D.CURRENT_USER,e),qh=()=>localStorage.removeItem(D.CURRENT_USER),Jo=()=>{const e=en(D.POSTS,null);return e||(Pe(D.POSTS,Ml),Ml)},Ht=e=>Pe(D.POSTS,e),Xh=()=>{const e=en(D.STORIES,null);return e||(Pe(D.STORIES,Fl),Fl)},wc=e=>Pe(D.STORIES,e),Zh=()=>{const e=en(D.NOTIFICATIONS,null);return e||(Pe(D.NOTIFICATIONS,Al),Al)},jc=e=>Pe(D.NOTIFICATIONS,e),eg=()=>{const e=en(D.MESSAGES,null);return e||(Pe(D.MESSAGES,Dl),Dl)},tg=e=>Pe(D.MESSAGES,e),$l=()=>{const e=en(D.SETTINGS,null);return e||(Pe(D.SETTINGS,Ul),Ul)},Bl=e=>Pe(D.SETTINGS,e),ng=()=>{localStorage.setItem(D.USERS,JSON.stringify(Ol)),localStorage.setItem(D.POSTS,JSON.stringify(Ml)),localStorage.setItem(D.STORIES,JSON.stringify(Fl)),localStorage.setItem(D.NOTIFICATIONS,JSON.stringify(Al)),localStorage.setItem(D.MESSAGES,JSON.stringify(Dl)),localStorage.setItem(D.SETTINGS,JSON.stringify(Ul)),localStorage.removeItem(D.CURRENT_USER)},Xd=x.createContext(),rg=({children:e})=>{const[t,n]=x.useState(()=>Jh()),[r,a]=x.useState(!1);x.useEffect(()=>{Bt()},[]);const l=async({name:u,username:g,email:f,password:p,avatar:v})=>{a(!0);try{const w=Bt();if(w.some(h=>h.email.toLowerCase()===f.toLowerCase()))throw new Error("An account with this email address already exists.");if(w.some(h=>h.username.toLowerCase()===g.toLowerCase()))throw new Error("This username is already taken. Please pick another.");const m={id:`u_${Date.now()}`,name:u,username:g,email:f,password:p,avatar:v||"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80",cover:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",bio:"Welcome to my Socialla profile! Excited to connect and share.",followers:0,following:0,verified:!1,joinedDate:"Just now"},d=[...w,m];return yc(d),Mi(m),n(m),m}finally{a(!1)}},o=async(u,g)=>{a(!0);try{const f=Bt(),p=u.trim().toLowerCase(),v=f.find(w=>w.email.toLowerCase()===p||w.username.toLowerCase()===p);if(!v)throw new Error("No user account found with that email or username.");if(v.password!==g)throw new Error("Incorrect password. Please verify and try again.");return Mi(v),n(v),v}finally{a(!1)}},s=()=>{qh(),n(null)},c=u=>{if(!t)return;const g={...t,...u};Mi(g),n(g);const p=Bt().map(v=>v.id===t.id?g:v);yc(p)};return i.jsx(Xd.Provider,{value:{currentUser:t,loading:r,register:l,login:o,logout:s,updateProfile:c,isAuthenticated:!!t},children:e})},je=()=>x.useContext(Xd),Zd=x.createContext(),ag=({children:e})=>{const[t,n]=x.useState(()=>$l().theme||"dark");x.useEffect(()=>{const l=document.body;if(l.classList.remove("light-theme","dark-theme"),t==="system"){const s=window.matchMedia("(prefers-color-scheme: dark)").matches;l.classList.add(s?"dark-theme":"light-theme")}else l.classList.add(`${t}-theme`);const o=$l();Bl({...o,theme:t})},[t]);const r=()=>{n(l=>l==="dark"?"light":"dark")},a=l=>{n(l)};return i.jsx(Zd.Provider,{value:{theme:t,toggleTheme:r,setTheme:a},children:e})},ef=()=>x.useContext(Zd);var tf={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},kc=tt.createContext&&tt.createContext(tf),ig=["attr","size","title"];function lg(e,t){if(e==null)return{};var n,r,a=og(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function og(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Fa(){return Fa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fa.apply(null,arguments)}function Nc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Aa(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Nc(Object(n),!0).forEach(function(r){sg(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Nc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function sg(e,t,n){return(t=cg(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function cg(e){var t=ug(e,"string");return typeof t=="symbol"?t:t+""}function ug(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function nf(e){return e&&e.map((t,n)=>tt.createElement(t.tag,Aa({key:n},t.attr),nf(t.child)))}function z(e){return t=>tt.createElement(dg,Fa({attr:Aa({},e.attr)},t),nf(e.child))}function dg(e){var t=n=>{var r=e.attr,a=e.size,l=e.title,o=lg(e,ig),s=a||n.size||"1em",c;return n.className&&(c=n.className),e.className&&(c=(c?c+" ":"")+e.className),tt.createElement("svg",Fa({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:c,style:Aa(Aa({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),l&&tt.createElement("title",null,l),e.children)};return kc!==void 0?tt.createElement(kc.Consumer,null,n=>t(n)):t(tf)}function Sc(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(e)}function Tt(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(e)}function Wl(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(e)}function ai(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(e)}function rf(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"8.5",cy:"7",r:"4"},child:[]},{tag:"line",attr:{x1:"20",y1:"8",x2:"20",y2:"14"},child:[]},{tag:"line",attr:{x1:"23",y1:"11",x2:"17",y2:"11"},child:[]}]})(e)}function af(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"8.5",cy:"7",r:"4"},child:[]},{tag:"polyline",attr:{points:"17 11 19 13 23 9"},child:[]}]})(e)}function qo(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(e)}function Vl(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"},child:[]},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"},child:[]}]})(e)}function Hl(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(e)}function fg(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(e)}function pg(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"M8 14s1.5 2 4 2 4-2 4-2"},child:[]},{tag:"line",attr:{x1:"9",y1:"9",x2:"9.01",y2:"9"},child:[]},{tag:"line",attr:{x1:"15",y1:"9",x2:"15.01",y2:"9"},child:[]}]})(e)}function lf(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(e)}function of(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"5",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"12",r:"3"},child:[]},{tag:"circle",attr:{cx:"18",cy:"19",r:"3"},child:[]},{tag:"line",attr:{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"},child:[]},{tag:"line",attr:{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"},child:[]}]})(e)}function mg(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]},{tag:"path",attr:{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"},child:[]}]})(e)}function Xo(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(e)}function Zo(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(e)}function sf(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"},child:[]},{tag:"polyline",attr:{points:"17 21 17 13 7 13 7 21"},child:[]},{tag:"polyline",attr:{points:"7 3 7 8 15 8"},child:[]}]})(e)}function hg(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(e)}function cf(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"16"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(e)}function gg(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"19",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"5",cy:"12",r:"1"},child:[]}]})(e)}function uf(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(e)}function vg(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"8",y1:"21",x2:"16",y2:"21"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12",y2:"21"},child:[]}]})(e)}function Mn(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"},child:[]}]})(e)}function xg(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(e)}function yg(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"},child:[]}]})(e)}function Ql(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(e)}function df(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},child:[]},{tag:"polyline",attr:{points:"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"9",y2:"12"},child:[]}]})(e)}function Kl(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(e)}function wg(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(e)}function jg(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12.01",y2:"8"},child:[]}]})(e)}function ff(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"circle",attr:{cx:"8.5",cy:"8.5",r:"1.5"},child:[]},{tag:"polyline",attr:{points:"21 15 16 10 5 21"},child:[]}]})(e)}function pf(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},child:[]},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"},child:[]}]})(e)}function _n(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(e)}function Yl(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(e)}function Gl(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(e)}function Jl(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"},child:[]},{tag:"line",attr:{x1:"1",y1:"1",x2:"23",y2:"23"},child:[]}]})(e)}function kg(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h9"},child:[]},{tag:"path",attr:{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"},child:[]}]})(e)}function Ng(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},child:[]}]})(e)}function es(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polygon",attr:{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"},child:[]}]})(e)}function Cc(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(e)}function Sg(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"},child:[]}]})(e)}function Cg(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 18 9 12 15 6"},child:[]}]})(e)}function bg(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"20 6 9 17 4 12"},child:[]}]})(e)}function Xe(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(e)}function ql(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"13",r:"4"},child:[]}]})(e)}function Eg(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"},child:[]}]})(e)}function br(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"},child:[]}]})(e)}function ii(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"},child:[]},{tag:"path",attr:{d:"M13.73 21a2 2 0 0 1-3.46 0"},child:[]}]})(e)}function mf(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"4"},child:[]},{tag:"path",attr:{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"},child:[]}]})(e)}function Er(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 5 19 12 12 19"},child:[]}]})(e)}function Pg(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"19",y1:"12",x2:"5",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 19 5 12 12 5"},child:[]}]})(e)}function Lg(e){return z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"},child:[]}]})(e)}const hf=x.createContext(),_g=({children:e})=>{const[t,n]=x.useState([]),r=x.useCallback((l,o="info",s=3500)=>{const c=Date.now()+Math.random().toString(36).substr(2,5);n(u=>[...u,{id:c,message:l,type:o}]),setTimeout(()=>{a(c)},s)},[]),a=x.useCallback(l=>{n(o=>o.filter(s=>s.id!==l))},[]);return i.jsxs(hf.Provider,{value:{addToast:r},children:[e,i.jsx("div",{className:"toast-container",children:t.map(l=>i.jsxs("div",{className:`toast-item toast-${l.type}`,children:[i.jsxs("div",{className:"toast-icon",children:[l.type==="success"&&i.jsx(Xe,{}),l.type==="error"&&i.jsx(Lg,{}),l.type==="info"&&i.jsx(jg,{})]}),i.jsx("span",{className:"toast-message",children:l.message}),i.jsx("button",{className:"toast-close",onClick:()=>a(l.id),children:i.jsx(Tt,{})})]},l.id))}),i.jsx("style",{children:`
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
      `})]})},Oe=()=>x.useContext(hf),nn=({children:e})=>{const{isAuthenticated:t}=je();return t?e:i.jsx(Gd,{to:"/login",replace:!0})},zg=()=>{const{theme:e,toggleTheme:t}=ef(),{isAuthenticated:n,currentUser:r}=je(),[a,l]=x.useState(!1);return Ge(),i.jsxs("header",{className:"landing-header",children:[i.jsxs("div",{className:"container landing-header-container",children:[i.jsxs(J,{to:"/",className:"landing-logo",children:[i.jsx("img",{src:"/socialla-logo.svg",alt:"Socialla",className:"landing-logo-img"}),i.jsx("span",{className:"landing-logo-text",children:"Socialla"})]}),i.jsxs("nav",{className:"landing-nav-links",children:[i.jsx("a",{href:"#home",className:"landing-nav-link",children:"Home"}),i.jsx("a",{href:"#features",className:"landing-nav-link",children:"Features"}),i.jsx("a",{href:"#preview",className:"landing-nav-link",children:"About"})]}),i.jsxs("div",{className:"landing-header-actions",children:[i.jsx("button",{className:"btn-icon",onClick:t,title:`Switch to ${e==="dark"?"Light":"Dark"} mode`,children:e==="dark"?i.jsx(Hl,{}):i.jsx(uf,{})}),n?i.jsxs(J,{to:"/home",className:"btn btn-primary",children:[i.jsx(af,{})," Dashboard ",i.jsx(Er,{})]}):i.jsxs(i.Fragment,{children:[i.jsx(J,{to:"/login",className:"btn btn-ghost",children:"Log In"}),i.jsx(J,{to:"/register",className:"btn btn-primary",children:"Create Account"})]}),i.jsx("button",{className:"btn-icon landing-mobile-toggle",onClick:()=>l(!a),children:a?i.jsx(Tt,{}):i.jsx(xg,{})})]})]}),a&&i.jsxs("div",{className:"landing-mobile-drawer",children:[i.jsx("a",{href:"#home",onClick:()=>l(!1),children:"Home"}),i.jsx("a",{href:"#features",onClick:()=>l(!1),children:"Features"}),i.jsx("a",{href:"#preview",onClick:()=>l(!1),children:"About"}),i.jsx("div",{className:"mobile-drawer-btns",children:n?i.jsx(J,{to:"/home",className:"btn btn-primary w-full",children:"Dashboard"}):i.jsxs(i.Fragment,{children:[i.jsx(J,{to:"/login",className:"btn btn-secondary w-full",children:"Log In"}),i.jsx(J,{to:"/register",className:"btn btn-primary w-full",children:"Create Account"})]})})]}),i.jsx("style",{children:`
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
          height: 72px;
        }

        .landing-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .landing-logo-img {
          width: 38px;
          height: 38px;
          border-radius: 10px;
        }

        .landing-logo-text {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .landing-nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .landing-nav-link {
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 0.95rem;
          transition: color var(--transition-fast);
        }

        .landing-nav-link:hover {
          color: var(--primary);
        }

        .landing-header-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .landing-mobile-toggle {
          display: none;
        }

        .landing-mobile-drawer {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1.5rem;
          background: var(--bg-card);
          border-bottom: 1px solid var(--border-color);
          animation: drawerSlideIn 0.3s ease-out;
        }

        .mobile-drawer-btns {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }

        .w-full {
          width: 100%;
        }

        @media (max-width: 768px) {
          .landing-nav-links { display: none; }
          .landing-mobile-toggle { display: inline-flex; }
        }
      `})]})},Tg=()=>i.jsxs("div",{className:"landing-page",id:"home",children:[i.jsx(zg,{}),i.jsx("section",{className:"hero-section",children:i.jsxs("div",{className:"container hero-container",children:[i.jsxs("div",{className:"hero-badge",children:[i.jsx(fg,{className:"hero-badge-icon"}),i.jsx("span",{children:"The Next Generation Social Experience"})]}),i.jsxs("h1",{className:"hero-title",children:["Connect, Share & Discover ",i.jsx("br",{}),i.jsx("span",{className:"hero-title-gradient",children:"Without Boundaries"})]}),i.jsx("p",{className:"hero-description",children:"Socialla empowers creators and communities to express themselves freely with stunning design, rich stories, dynamic post interactions, and total privacy control."}),i.jsxs("div",{className:"hero-ctas",children:[i.jsxs(J,{to:"/register",className:"btn btn-primary hero-btn",children:["Create Free Account ",i.jsx(Er,{})]}),i.jsx(J,{to:"/home",className:"btn btn-secondary hero-btn",children:"Explore Socialla"})]}),i.jsxs("div",{className:"hero-mockup-wrapper",children:[i.jsx("div",{className:"mockup-bg-glow"}),i.jsxs("div",{className:"glass-card mockup-main-card",children:[i.jsxs("div",{className:"mockup-header",children:[i.jsx("div",{className:"avatar avatar-md",children:i.jsx("img",{src:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",alt:"Sarah"})}),i.jsxs("div",{className:"mockup-user",children:[i.jsxs("span",{className:"mockup-name",children:["Sarah Jenkins ",i.jsx(Xe,{className:"verified-badge"})]}),i.jsx("span",{className:"mockup-handle",children:"@sarah_design • Just now"})]})]}),i.jsx("p",{className:"mockup-text",children:"Exploring glassmorphism overlays and vibrant HSL color spaces in Socialla 🚀 Modern UI design feels so smooth!"}),i.jsx("div",{className:"mockup-img-wrap",children:i.jsx("img",{src:"https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1000&q=80",alt:"Design preview"})}),i.jsxs("div",{className:"mockup-actions",children:[i.jsxs("div",{className:"mockup-action-item text-danger",children:[i.jsx(_n,{})," 142"]}),i.jsxs("div",{className:"mockup-action-item text-primary",children:[i.jsx(Mn,{})," 28"]}),i.jsxs("div",{className:"mockup-action-item text-success",children:[i.jsx(br,{})," Saved"]})]})]}),i.jsxs("div",{className:"glass-card floating-card float-left",children:[i.jsx("div",{className:"float-icon-bg bg-primary",children:i.jsx(Sc,{})}),i.jsxs("div",{className:"float-text",children:[i.jsx("strong",{children:"Instant Engagement"}),i.jsx("span",{children:"Real-time interactions"})]})]}),i.jsxs("div",{className:"glass-card floating-card float-right",children:[i.jsx("div",{className:"float-icon-bg bg-accent",children:i.jsx(Wl,{})}),i.jsxs("div",{className:"float-text",children:[i.jsx("strong",{children:"10,000+ Creators"}),i.jsx("span",{children:"Global network"})]})]})]})]})}),i.jsx("section",{className:"features-section",id:"features",children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"section-header",children:[i.jsx("span",{className:"badge badge-primary",children:"Why Socialla"}),i.jsx("h2",{children:"Designed for Modern Connectivity"}),i.jsx("p",{children:"Everything you need in a modern social media platform, meticulously built for speed and aesthetics."})]}),i.jsxs("div",{className:"features-grid",children:[i.jsxs("div",{className:"glass-card feature-card",children:[i.jsx("div",{className:"feature-icon bg-gradient-1",children:i.jsx(Sc,{})}),i.jsx("h3",{children:"Share Your Moments"}),i.jsx("p",{children:"Post high-resolution photos, stories, and thoughts with customizable tags and rich media previews."})]}),i.jsxs("div",{className:"glass-card feature-card",children:[i.jsx("div",{className:"feature-icon bg-gradient-2",children:i.jsx(Wl,{})}),i.jsx("h3",{children:"Connect With People"}),i.jsx("p",{children:"Discover vibrant creators, follow friends, and build your own dedicated community effortlessly."})]}),i.jsxs("div",{className:"glass-card feature-card",children:[i.jsx("div",{className:"feature-icon bg-gradient-3",children:i.jsx(es,{})}),i.jsx("h3",{children:"Discover Trending"}),i.jsx("p",{children:"Explore hot topics, viral discussions, and trending multimedia curated in your personalized feed."})]}),i.jsxs("div",{className:"glass-card feature-card",children:[i.jsx("div",{className:"feature-icon bg-gradient-1",children:i.jsx(_n,{})}),i.jsx("h3",{children:"Engage & React"}),i.jsx("p",{children:"Express yourself through animated likes, threaded comments, bookmarking, and instant sharing."})]}),i.jsxs("div",{className:"glass-card feature-card",children:[i.jsx("div",{className:"feature-icon bg-gradient-2",children:i.jsx(br,{})}),i.jsx("h3",{children:"Personalized Profiles"}),i.jsx("p",{children:"Customize your personal avatar, banner cover, bio description, and showcase saved highlights."})]}),i.jsxs("div",{className:"glass-card feature-card",children:[i.jsx("div",{className:"feature-icon bg-gradient-3",children:i.jsx(lf,{})}),i.jsx("h3",{children:"Complete Privacy Control"}),i.jsx("p",{children:"Client-first architecture ensuring your preferences, theme mode, and personal data stay under your control."})]})]})]})}),i.jsx("section",{className:"preview-section",id:"preview",children:i.jsxs("div",{className:"container preview-container",children:[i.jsxs("div",{className:"preview-content",children:[i.jsx("span",{className:"badge badge-success",children:"Interactive Showcase"}),i.jsx("h2",{children:"Experience the Future Social Feed Today"}),i.jsx("p",{children:"From immersive full-screen story viewers to dark/light theme switching, Socialla offers a flawless user interface tailored for desktop, tablet, and mobile devices."}),i.jsxs("ul",{className:"preview-checklist",children:[i.jsxs("li",{children:[i.jsx(Xe,{className:"check-icon"})," Fluid story highlights with auto-progress controls"]}),i.jsxs("li",{children:[i.jsx(Xe,{className:"check-icon"})," Heart-pop animated like interactions"]}),i.jsxs("li",{children:[i.jsx(Xe,{className:"check-icon"})," Full dark and light theme switching"]}),i.jsxs("li",{children:[i.jsx(Xe,{className:"check-icon"})," Mobile-first responsive layout design"]})]}),i.jsxs(J,{to:"/register",className:"btn btn-primary",children:["Join Socialla Today ",i.jsx(Er,{})]})]}),i.jsx("div",{className:"preview-mockup-wrapper",children:i.jsxs("div",{className:"glass-card preview-card",children:[i.jsxs("div",{className:"story-strip-demo",children:[i.jsxs("div",{className:"story-demo-item",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",alt:"Alex"}),i.jsx("span",{children:"Alex"})]}),i.jsxs("div",{className:"story-demo-item active",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",alt:"Sarah"}),i.jsx("span",{children:"Sarah"})]}),i.jsxs("div",{className:"story-demo-item",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",alt:"Marcus"}),i.jsx("span",{children:"Marcus"})]})]}),i.jsxs("div",{className:"post-demo-box",children:[i.jsxs("div",{className:"post-demo-header",children:[i.jsx("div",{className:"avatar avatar-sm",children:i.jsx("img",{src:"https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",alt:"Elena"})}),i.jsxs("div",{children:[i.jsx("strong",{children:"Elena Rodriguez"}),i.jsx("div",{className:"text-muted text-xs",children:"@elena_travels"})]})]}),i.jsx("p",{className:"text-sm mt-2",children:"Catching morning clouds over the mountains! 🏔️✨"})]})]})})]})}),i.jsx("section",{className:"cta-section",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"glass-card cta-card",children:[i.jsx("h2",{children:"Ready to Experience Socialla?"}),i.jsx("p",{children:"Join thousands of creators sharing their passions and connecting across the globe."}),i.jsxs("div",{className:"cta-buttons",children:[i.jsx(J,{to:"/register",className:"btn btn-primary btn-lg",children:"Create Free Account"}),i.jsx(J,{to:"/login",className:"btn btn-secondary btn-lg",children:"Sign In"})]})]})})}),i.jsxs("footer",{className:"landing-footer",children:[i.jsxs("div",{className:"container footer-container",children:[i.jsxs("div",{className:"footer-col brand-col",children:[i.jsxs("div",{className:"landing-logo",children:[i.jsx("img",{src:"/socialla-logo.svg",alt:"Socialla",className:"landing-logo-img"}),i.jsx("span",{className:"landing-logo-text",children:"Socialla"})]}),i.jsx("p",{className:"footer-bio",children:"Socialla is a modern, high-performance social platform created for seamless sharing, vibrant design, and genuine social connection."})]}),i.jsxs("div",{className:"footer-col",children:[i.jsx("h4",{children:"Quick Links"}),i.jsx("a",{href:"#home",children:"Home"}),i.jsx("a",{href:"#features",children:"Features"}),i.jsx("a",{href:"#preview",children:"About"}),i.jsx(J,{to:"/home",children:"Feed"})]}),i.jsxs("div",{className:"footer-col",children:[i.jsx("h4",{children:"Account"}),i.jsx(J,{to:"/login",children:"Log In"}),i.jsx(J,{to:"/register",children:"Create Account"}),i.jsx(J,{to:"/settings",children:"Settings"})]}),i.jsxs("div",{className:"footer-col",children:[i.jsx("h4",{children:"Legal"}),i.jsx("a",{href:"#privacy",children:"Privacy Policy"}),i.jsx("a",{href:"#terms",children:"Terms of Service"}),i.jsx("a",{href:"#security",children:"Security"})]})]}),i.jsx("div",{className:"container footer-bottom",children:i.jsx("p",{children:"© 2026 Socialla Platform. All rights reserved. Crafted with React & Vite."})})]}),i.jsx("style",{children:`
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
      `})]}),Rg=()=>{const{login:e,loading:t}=je(),{addToast:n}=Oe(),r=Ge(),[a,l]=x.useState(""),[o,s]=x.useState(""),[c,u]=x.useState(!1),[g,f]=x.useState(!0),[p,v]=x.useState(""),[w,j]=x.useState(!1),[k,m]=x.useState(""),d=async y=>{if(y.preventDefault(),v(""),!a.trim()){v("Please enter your email address or username.");return}if(!o){v("Please enter your password.");return}try{await e(a,o),n("Welcome back to Socialla!","success"),r("/home")}catch(S){v(S.message)}},h=y=>{y.preventDefault(),k.trim()&&(n(`Password reset link sent to ${k}`,"info"),j(!1),m(""))};return i.jsxs("div",{className:"auth-page-wrapper",children:[i.jsxs("div",{className:"auth-card glass-card",children:[i.jsxs("div",{className:"auth-header",children:[i.jsxs(J,{to:"/",className:"auth-logo",children:[i.jsx("img",{src:"/socialla-logo.svg",alt:"Socialla Logo"}),i.jsx("span",{children:"Socialla"})]}),i.jsx("h2",{children:"Welcome Back"}),i.jsx("p",{children:"Log in to access your feed, messages, and saved posts."})]}),p&&i.jsx("div",{className:"auth-error-banner",children:i.jsx("span",{children:p})}),i.jsxs("form",{onSubmit:d,className:"auth-form",children:[i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Email or Username"}),i.jsxs("div",{className:"input-wrapper",children:[i.jsx(Ql,{className:"input-icon-left"}),i.jsx("input",{type:"text",className:"input-field",placeholder:"alex@socialla.com or alex_vance",value:a,onChange:y=>l(y.target.value)})]})]}),i.jsxs("div",{className:"input-group",children:[i.jsxs("div",{className:"input-label-row",children:[i.jsx("label",{className:"input-label",children:"Password"}),i.jsx("button",{type:"button",className:"forgot-link",onClick:()=>j(!0),children:"Forgot password?"})]}),i.jsxs("div",{className:"input-wrapper has-right-icon",children:[i.jsx(Kl,{className:"input-icon-left"}),i.jsx("input",{type:c?"text":"password",className:"input-field",placeholder:"Enter your password",value:o,onChange:y=>s(y.target.value)}),i.jsx("span",{className:"input-icon-right",onClick:()=>u(!c),children:c?i.jsx(Jl,{}):i.jsx(Gl,{})})]})]}),i.jsx("div",{className:"remember-row",children:i.jsxs("label",{className:"checkbox-label",children:[i.jsx("input",{type:"checkbox",checked:g,onChange:y=>f(y.target.checked)}),i.jsx("span",{children:"Remember me on this browser"})]})}),i.jsxs("button",{type:"submit",className:"btn btn-primary auth-submit-btn",disabled:t,children:[t?"Authenticating...":"Sign In"," ",i.jsx(Er,{})]})]}),i.jsxs("div",{className:"auth-footer",children:[i.jsx("span",{children:"Don't have an account?"}),i.jsx(J,{to:"/register",className:"auth-switch-link",children:"Create Account"})]})]}),w&&i.jsx("div",{className:"modal-backdrop",onClick:()=>j(!1),children:i.jsxs("div",{className:"modal-content forgot-modal",onClick:y=>y.stopPropagation(),children:[i.jsxs("div",{className:"modal-header",children:[i.jsx("h3",{children:"Reset Password"}),i.jsx("button",{className:"btn-icon",onClick:()=>j(!1),children:i.jsx(Tt,{})})]}),i.jsxs("form",{onSubmit:h,className:"modal-body",children:[i.jsx("p",{className:"forgot-desc",children:"Enter your account email address and we'll send you a password recovery link."}),i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Email Address"}),i.jsxs("div",{className:"input-wrapper",children:[i.jsx(Ql,{className:"input-icon-left"}),i.jsx("input",{type:"email",className:"input-field",placeholder:"name@socialla.com",value:k,onChange:y=>m(y.target.value),required:!0})]})]}),i.jsx("button",{type:"submit",className:"btn btn-primary w-full mt-2",children:"Send Reset Link"})]})]})}),i.jsx("style",{children:`
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
      `})]})},Ig=()=>{const{register:e,loading:t}=je(),{addToast:n}=Oe(),r=Ge(),[a,l]=x.useState(""),[o,s]=x.useState(""),[c,u]=x.useState(""),[g,f]=x.useState(""),[p,v]=x.useState(""),[w,j]=x.useState("https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80"),[k,m]=x.useState(!1),[d,h]=x.useState(!1),[y,S]=x.useState(""),b=(()=>{if(!g)return{label:"",score:0,color:""};let C=0;switch(g.length>=8&&(C+=1),/[A-Z]/.test(g)&&(C+=1),/[0-9]/.test(g)&&(C+=1),/[^A-Za-z0-9]/.test(g)&&(C+=1),C){case 1:return{label:"Weak",score:25,color:"var(--danger)"};case 2:return{label:"Fair",score:50,color:"var(--warning)"};case 3:return{label:"Strong",score:75,color:"var(--primary)"};case 4:return{label:"Excellent",score:100,color:"var(--success)"};default:return{label:"Weak",score:15,color:"var(--danger)"}}})(),L=C=>{const I=C.target.files[0];if(I){const Y=new FileReader;Y.onloadend=()=>j(Y.result),Y.readAsDataURL(I)}},T=async C=>{if(C.preventDefault(),S(""),!a.trim())return S("Please enter your full name.");if(!o.trim())return S("Please choose a unique username.");if(!c.trim())return S("Please enter your email address.");if(!g)return S("Please create a password.");if(g!==p)return S("Passwords do not match.");try{await e({name:a.trim(),username:o.trim().toLowerCase(),email:c.trim().toLowerCase(),password:g,avatar:w}),n("Account created! Welcome to Socialla.","success"),r("/home")}catch(I){S(I.message)}};return i.jsxs("div",{className:"auth-page-wrapper",children:[i.jsxs("div",{className:"auth-card glass-card register-card",children:[i.jsxs("div",{className:"auth-header",children:[i.jsxs(J,{to:"/",className:"auth-logo",children:[i.jsx("img",{src:"/socialla-logo.svg",alt:"Socialla Logo"}),i.jsx("span",{children:"Socialla"})]}),i.jsx("h2",{children:"Create Your Account"}),i.jsx("p",{children:"Join the Socialla community and start sharing your moments."})]}),y&&i.jsx("div",{className:"auth-error-banner",children:i.jsx("span",{children:y})}),i.jsxs("form",{onSubmit:T,className:"auth-form",children:[i.jsxs("div",{className:"register-avatar-picker",children:[i.jsx("div",{className:"avatar avatar-lg",children:i.jsx("img",{src:w,alt:"Avatar Preview"})}),i.jsxs("label",{className:"btn btn-secondary btn-sm change-avatar-file",children:[i.jsx(ql,{})," Choose Photo",i.jsx("input",{type:"file",accept:"image/*",onChange:L,hidden:!0})]})]}),i.jsxs("div",{className:"input-row",children:[i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Full Name"}),i.jsxs("div",{className:"input-wrapper",children:[i.jsx(ai,{className:"input-icon-left"}),i.jsx("input",{type:"text",className:"input-field",placeholder:"Alex Vance",value:a,onChange:C=>l(C.target.value),required:!0})]})]}),i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Username"}),i.jsxs("div",{className:"input-wrapper",children:[i.jsx(mf,{className:"input-icon-left"}),i.jsx("input",{type:"text",className:"input-field",placeholder:"alex_vance",value:o,onChange:C=>s(C.target.value),required:!0})]})]})]}),i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Email Address"}),i.jsxs("div",{className:"input-wrapper",children:[i.jsx(Ql,{className:"input-icon-left"}),i.jsx("input",{type:"email",className:"input-field",placeholder:"alex@socialla.com",value:c,onChange:C=>u(C.target.value),required:!0})]})]}),i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Password"}),i.jsxs("div",{className:"input-wrapper has-right-icon",children:[i.jsx(Kl,{className:"input-icon-left"}),i.jsx("input",{type:k?"text":"password",className:"input-field",placeholder:"Create password",value:g,onChange:C=>f(C.target.value),required:!0}),i.jsx("span",{className:"input-icon-right",onClick:()=>m(!k),children:k?i.jsx(Jl,{}):i.jsx(Gl,{})})]}),g&&i.jsxs("div",{className:"strength-meter-wrap",children:[i.jsx("div",{className:"strength-bar-bg",children:i.jsx("div",{className:"strength-bar-fill",style:{width:`${b.score}%`,backgroundColor:b.color}})}),i.jsxs("span",{className:"strength-label",style:{color:b.color},children:["Password Strength: ",b.label]})]})]}),i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Confirm Password"}),i.jsxs("div",{className:"input-wrapper has-right-icon",children:[i.jsx(Kl,{className:"input-icon-left"}),i.jsx("input",{type:d?"text":"password",className:"input-field",placeholder:"Confirm password",value:p,onChange:C=>v(C.target.value),required:!0}),i.jsx("span",{className:"input-icon-right",onClick:()=>h(!d),children:d?i.jsx(Jl,{}):i.jsx(Gl,{})})]})]}),i.jsxs("button",{type:"submit",className:"btn btn-primary auth-submit-btn",disabled:t,children:[t?"Creating Account...":"Get Started"," ",i.jsx(Er,{})]})]}),i.jsxs("div",{className:"auth-footer",children:[i.jsx("span",{children:"Already have an account?"}),i.jsx(J,{to:"/login",className:"auth-switch-link",children:"Log In"})]})]}),i.jsx("style",{children:`
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
      `})]})},Fn=({onOpenCreatePost:e})=>{const{currentUser:t,logout:n}=je(),{addToast:r}=Oe(),a=Ge(),l=()=>{n(),r("You have logged out successfully.","info"),a("/login")},o=[{label:"Home",path:"/home",icon:i.jsx(pf,{})},{label:"Explore",path:"/explore",icon:i.jsx(es,{})},{label:"Notifications",path:"/notifications",icon:i.jsx(ii,{}),badge:2},{label:"Messages",path:"/messages",icon:i.jsx(Mn,{}),badge:2},{label:"Bookmarks",path:"/profile?tab=saved",icon:i.jsx(br,{})},{label:"Profile",path:"/profile",icon:i.jsx(ai,{})},{label:"Settings",path:"/settings",icon:i.jsx(mg,{})}];return i.jsxs("aside",{className:"app-left-sidebar",children:[i.jsxs("div",{className:"sidebar-container glass-card",children:[i.jsxs($t,{to:"/home",className:"sidebar-logo",children:[i.jsx("img",{src:"/socialla-logo.svg",alt:"Socialla",className:"sidebar-logo-img"}),i.jsx("span",{className:"sidebar-logo-text",children:"Socialla"})]}),i.jsx("nav",{className:"sidebar-nav",children:o.map(s=>i.jsxs($t,{to:s.path,className:({isActive:c})=>`sidebar-nav-item ${c?"active":""}`,children:[i.jsx("span",{className:"sidebar-nav-icon",children:s.icon}),i.jsx("span",{className:"sidebar-text",children:s.label}),s.badge&&i.jsx("span",{className:"sidebar-badge",children:s.badge})]},s.label))}),e&&i.jsxs("button",{className:"btn btn-primary sidebar-post-btn",onClick:e,children:[i.jsx(cf,{className:"sidebar-post-btn-icon"}),i.jsx("span",{className:"sidebar-post-btn-text",children:"Create Post"})]}),t&&i.jsxs("div",{className:"sidebar-user-footer",children:[i.jsxs($t,{to:"/profile",className:"sidebar-user-info",children:[i.jsx("div",{className:"avatar avatar-md",children:i.jsx("img",{src:t.avatar,alt:t.name})}),i.jsxs("div",{className:"sidebar-user-details sidebar-text",children:[i.jsx("span",{className:"sidebar-user-name",children:t.name}),i.jsxs("span",{className:"sidebar-user-handle",children:["@",t.username]})]})]}),i.jsx("button",{className:"btn-icon sidebar-logout-btn",onClick:l,title:"Logout",children:i.jsx(df,{})})]})]}),i.jsx("style",{children:`
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
      `})]})},Rr=()=>{const{currentUser:e}=je(),{addToast:t}=Oe(),n=Ge(),[r,a]=x.useState(""),[l,o]=x.useState(()=>Bt().filter(p=>p.id!==(e==null?void 0:e.id))),[s,c]=x.useState({}),u=[{tag:"#SociallaLaunch",postsCount:"18.4K posts"},{tag:"#Tech2026",postsCount:"12.1K posts"},{tag:"#UIUXDesign",postsCount:"9.8K posts"},{tag:"#FrontendDev",postsCount:"7.2K posts"},{tag:"#ReactVite",postsCount:"5.5K posts"}],g=p=>{p.preventDefault(),r.trim()&&n(`/explore?q=${encodeURIComponent(r.trim())}`)},f=(p,v)=>{c(w=>{const j=!w[p];return j?t(`You are now following ${v}!`,"success"):t(`Unfollowed ${v}`,"info"),{...w,[p]:j}})};return i.jsxs("aside",{className:"app-right-sidebar",children:[i.jsx("form",{className:"glass-card search-form",onSubmit:g,children:i.jsxs("div",{className:"input-wrapper",children:[i.jsx(Zo,{className:"input-icon-left"}),i.jsx("input",{type:"text",className:"input-field",placeholder:"Search Socialla...",value:r,onChange:p=>a(p.target.value)})]})}),i.jsxs("div",{className:"glass-card right-card",children:[i.jsxs("div",{className:"card-header",children:[i.jsx(qo,{className:"card-header-icon"}),i.jsx("h3",{children:"Trending Topics"})]}),i.jsx("div",{className:"trending-list",children:u.map(p=>i.jsxs("div",{className:"trending-item",onClick:()=>n(`/explore?q=${encodeURIComponent(p.tag)}`),children:[i.jsx("span",{className:"trending-tag",children:p.tag}),i.jsx("span",{className:"trending-count",children:p.postsCount})]},p.tag))})]}),i.jsxs("div",{className:"glass-card right-card",children:[i.jsxs("div",{className:"card-header",children:[i.jsx(rf,{className:"card-header-icon"}),i.jsx("h3",{children:"Suggested People"})]}),i.jsx("div",{className:"suggested-list",children:l.slice(0,3).map(p=>{const v=!!s[p.id];return i.jsxs("div",{className:"suggested-item",children:[i.jsxs("div",{className:"suggested-user-info",onClick:()=>n(`/profile?username=${p.username}`),children:[i.jsx("div",{className:"avatar avatar-md",children:i.jsx("img",{src:p.avatar,alt:p.name})}),i.jsxs("div",{className:"suggested-details",children:[i.jsx("span",{className:"suggested-name",children:p.name}),i.jsxs("span",{className:"suggested-handle",children:["@",p.username]})]})]}),i.jsx("button",{className:`btn btn-sm ${v?"btn-secondary":"btn-outline"}`,onClick:()=>f(p.id,p.name),children:v?i.jsxs(i.Fragment,{children:[i.jsx(af,{})," Following"]}):"Follow"})]},p.id)})})]}),i.jsxs("div",{className:"glass-card right-card",children:[i.jsxs("div",{className:"card-header",children:[i.jsx("div",{className:"online-indicator-dot"}),i.jsx("h3",{children:"Online Friends"})]}),i.jsx("div",{className:"online-list",children:l.slice(0,4).map(p=>i.jsxs("div",{className:"online-item",onClick:()=>n("/messages"),children:[i.jsxs("div",{className:"avatar avatar-sm",children:[i.jsx("img",{src:p.avatar,alt:p.name}),i.jsx("span",{className:"avatar-online-dot"})]}),i.jsx("span",{className:"online-name",children:p.name}),i.jsx(Mn,{className:"online-msg-icon"})]},p.id))})]}),i.jsx("style",{children:`
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
      `})]})},An=({onOpenCreatePost:e})=>i.jsxs("nav",{className:"bottom-nav",children:[i.jsxs($t,{to:"/home",className:({isActive:t})=>`bottom-nav-item ${t?"active":""}`,children:[i.jsx(pf,{}),i.jsx("span",{children:"Home"})]}),i.jsxs($t,{to:"/explore",className:({isActive:t})=>`bottom-nav-item ${t?"active":""}`,children:[i.jsx(es,{}),i.jsx("span",{children:"Explore"})]}),i.jsx("button",{className:"bottom-nav-create-btn",onClick:e,title:"Create Post",children:i.jsx(cf,{})}),i.jsxs($t,{to:"/notifications",className:({isActive:t})=>`bottom-nav-item ${t?"active":""}`,children:[i.jsx(ii,{}),i.jsx("span",{children:"Alerts"})]}),i.jsxs($t,{to:"/profile",className:({isActive:t})=>`bottom-nav-item ${t?"active":""}`,children:[i.jsx(ai,{}),i.jsx("span",{children:"Profile"})]}),i.jsx("style",{children:`
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
      `})]}),Og=({stories:e,initialIndex:t,onClose:n})=>{const[r,a]=x.useState(t),l=e[r];x.useEffect(()=>{const c=setTimeout(()=>{r<e.length-1?a(u=>u+1):n()},5e3);return()=>clearTimeout(c)},[r,e.length,n]);const o=c=>{c.stopPropagation(),r>0&&a(u=>u-1)},s=c=>{c.stopPropagation(),r<e.length-1?a(u=>u+1):n()};return l?i.jsxs("div",{className:"story-viewer-modal",onClick:n,children:[i.jsxs("div",{className:"story-viewer-content",onClick:c=>c.stopPropagation(),children:[i.jsx("div",{className:"story-progress-bar-container",children:e.map((c,u)=>i.jsx("div",{className:"story-progress-track",children:i.jsx("div",{className:"story-progress-fill",style:{width:u<r||u===r?"100%":"0%",transition:u===r?"width 5s linear":"none"}})},c.id))}),i.jsxs("div",{className:"story-viewer-header",children:[i.jsxs("div",{className:"story-user-info",children:[i.jsx("div",{className:"avatar avatar-sm",children:i.jsx("img",{src:l.userAvatar,alt:l.userName})}),i.jsxs("div",{className:"story-header-text",children:[i.jsx("span",{className:"story-user-name",children:l.userName}),i.jsx("span",{className:"story-time",children:l.timestamp})]})]}),i.jsx("button",{className:"btn-icon story-close-btn",onClick:n,children:i.jsx(Tt,{})})]}),i.jsxs("div",{className:"story-image-wrap",children:[i.jsx("img",{src:l.image,alt:l.caption||"Story"}),l.caption&&i.jsx("div",{className:"story-caption-overlay",children:i.jsx("p",{children:l.caption})})]}),r>0&&i.jsx("button",{className:"story-nav-btn story-prev-btn",onClick:o,children:i.jsx(Cg,{})}),i.jsx("button",{className:"story-nav-btn story-next-btn",onClick:s,children:i.jsx(Sg,{})})]}),i.jsx("style",{children:`
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
      `})]}):null},Mg=()=>{const{currentUser:e}=je(),{addToast:t}=Oe(),[n,r]=x.useState(()=>Xh()),[a,l]=x.useState(null),o=c=>{const u=c.target.files[0];if(u&&e){const g=new FileReader;g.onloadend=()=>{const p=[{id:`story_${Date.now()}`,userId:e.id,userName:e.name,userAvatar:e.avatar,image:g.result,caption:"Just shared a new story moment!",timestamp:"Just now",seen:!1},...n];r(p),wc(p),t("Story published successfully!","success")},g.readAsDataURL(u)}},s=c=>{l(c);const u=[...n];u[c].seen=!0,r(u),wc(u)};return i.jsxs("div",{className:"stories-container glass-card",children:[i.jsxs("div",{className:"stories-track",children:[e&&i.jsxs("label",{className:"story-item story-add-item",children:[i.jsx("input",{type:"file",accept:"image/*",className:"story-file-input",onChange:o}),i.jsxs("div",{className:"story-avatar-wrap",children:[i.jsx("img",{src:e.avatar,alt:"Add Story"}),i.jsx("div",{className:"story-add-plus",children:i.jsx(hg,{})})]}),i.jsx("span",{className:"story-username",children:"Your Story"})]}),n.map((c,u)=>i.jsxs("div",{className:`story-item story-card-anim ${c.seen?"seen":"unseen"}`,onClick:()=>s(u),children:[i.jsxs("div",{className:"story-avatar-wrap",children:[i.jsx("div",{className:"story-ring"}),i.jsx("img",{src:c.userAvatar,alt:c.userName})]}),i.jsx("span",{className:"story-username",children:c.userName})]},c.id))]}),a!==null&&i.jsx(Og,{stories:n,initialIndex:a,onClose:()=>l(null)}),i.jsx("style",{children:`
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
      `})]})},bc=({onPostCreated:e})=>{const{currentUser:t}=je(),{addToast:n}=Oe(),[r,a]=x.useState(""),[l,o]=x.useState(null),[s,c]=x.useState(!1),u=f=>{const p=f.target.files[0];if(p){const v=new FileReader;v.onloadend=()=>{o(v.result)},v.readAsDataURL(p)}},g=f=>{if(f.preventDefault(),!r.trim()&&!l){n("Please enter text or attach an image to publish a post.","warning");return}c(!0);const p={id:`post_${Date.now()}`,authorId:(t==null?void 0:t.id)||"u_guest",authorName:(t==null?void 0:t.name)||"Guest User",authorUsername:(t==null?void 0:t.username)||"guest_user",authorAvatar:(t==null?void 0:t.avatar)||"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",authorVerified:(t==null?void 0:t.verified)||!1,content:r.trim(),image:l||null,likes:[],likeCount:0,comments:[],commentCount:0,shares:0,savedBy:[],timestamp:"Just now"};setTimeout(()=>{e(p),a(""),o(null),c(!1),n("Your post has been published to Socialla feed!","success")},300)};return t?i.jsxs("div",{className:"create-post-card glass-card",children:[i.jsxs("form",{onSubmit:g,children:[i.jsxs("div",{className:"create-post-header",children:[i.jsx("div",{className:"avatar avatar-md",children:i.jsx("img",{src:t.avatar,alt:t.name})}),i.jsx("textarea",{className:"create-post-textarea",placeholder:`What's on your mind, ${t.name.split(" ")[0]}?`,rows:"3",value:r,onChange:f=>a(f.target.value)})]}),l&&i.jsxs("div",{className:"create-post-image-preview",children:[i.jsx("img",{src:l,alt:"Post attachment preview"}),i.jsx("button",{type:"button",className:"btn-icon remove-image-btn",onClick:()=>o(null),title:"Remove attachment",children:i.jsx(Tt,{})})]}),i.jsxs("div",{className:"create-post-actions",children:[i.jsxs("div",{className:"create-post-tools",children:[i.jsxs("label",{className:"btn-icon tool-btn",title:"Add Image",children:[i.jsx(ff,{className:"tool-icon image-icon"}),i.jsx("input",{type:"file",accept:"image/*",className:"hidden-file-input",onChange:u})]}),i.jsx("button",{type:"button",className:"btn-icon tool-btn",title:"Add Tag",onClick:()=>n("Tag friends feature coming soon!","info"),children:i.jsx(pg,{className:"tool-icon smile-icon"})}),i.jsx("button",{type:"button",className:"btn-icon tool-btn",title:"Add Location",onClick:()=>n("Location added to post!","info"),children:i.jsx(yg,{className:"tool-icon pin-icon"})})]}),i.jsxs("button",{type:"submit",className:"btn btn-primary create-post-submit-btn",disabled:s||!r.trim()&&!l,children:[i.jsx(Xo,{})," ",s?"Posting...":"Post"]})]})]}),i.jsx("style",{children:`
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
      `})]}):null};function Fg(e){return z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(e)}const Ag=({comments:e,onAddComment:t})=>{const{currentUser:n}=je(),{addToast:r}=Oe(),[a,l]=x.useState(""),o=s=>{if(s.preventDefault(),!a.trim())return;if(!n){r("Please log in to leave a comment.","warning");return}const c={id:`c_${Date.now()}`,authorName:n.name,authorUsername:n.username,authorAvatar:n.avatar,content:a.trim(),timestamp:"Just now"};t(c),l(""),r("Comment added!","success")};return i.jsxs("div",{className:"comment-section",children:[i.jsxs("div",{className:"comments-list",children:[e.map(s=>i.jsxs("div",{className:"comment-item",children:[i.jsx("div",{className:"avatar avatar-sm",children:i.jsx("img",{src:s.authorAvatar,alt:s.authorName})}),i.jsxs("div",{className:"comment-bubble",children:[i.jsxs("div",{className:"comment-header",children:[i.jsx("span",{className:"comment-author-name",children:s.authorName}),i.jsx("span",{className:"comment-timestamp",children:s.timestamp})]}),i.jsx("p",{className:"comment-content",children:s.content})]})]},s.id)),e.length===0&&i.jsx("div",{className:"no-comments",children:"Be the first to comment on this post!"})]}),n&&i.jsxs("form",{onSubmit:o,className:"add-comment-form",children:[i.jsx("div",{className:"avatar avatar-sm",children:i.jsx("img",{src:n.avatar,alt:n.name})}),i.jsxs("div",{className:"input-wrapper has-right-icon",children:[i.jsx("input",{type:"text",className:"input-field comment-input",placeholder:"Write a comment...",value:a,onChange:s=>l(s.target.value)}),i.jsx("button",{type:"submit",className:"input-icon-right comment-submit-btn",disabled:!a.trim(),children:i.jsx(Xo,{})})]})]}),i.jsx("style",{children:`
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
      `})]})},Dg=({post:e,onClose:t})=>{const{addToast:n}=Oe(),r=()=>{const l=`${window.location.origin}/home#${e.id}`;navigator.clipboard.writeText(l),n("Post link copied to clipboard!","success"),t()},a=()=>{n("Post re-shared to your Socialla feed!","success"),t()};return i.jsxs("div",{className:"modal-backdrop",onClick:t,children:[i.jsxs("div",{className:"modal-content share-modal",onClick:l=>l.stopPropagation(),children:[i.jsxs("div",{className:"modal-header",children:[i.jsx("h3",{children:"Share Post"}),i.jsx("button",{className:"btn-icon",onClick:t,children:i.jsx(Tt,{})})]}),i.jsxs("div",{className:"modal-body",children:[i.jsxs("div",{className:"share-post-preview",children:[i.jsx("div",{className:"avatar avatar-sm",children:i.jsx("img",{src:e.authorAvatar,alt:e.authorName})}),i.jsxs("div",{className:"share-preview-text",children:[i.jsx("span",{className:"share-preview-author",children:e.authorName}),i.jsx("p",{className:"share-preview-excerpt",children:e.content})]})]}),i.jsxs("div",{className:"share-options",children:[i.jsxs("button",{className:"btn btn-secondary share-opt-btn",onClick:r,children:[i.jsx(Ng,{})," Copy Link"]}),i.jsxs("button",{className:"btn btn-primary share-opt-btn",onClick:a,children:[i.jsx(of,{})," Share to Socialla Feed"]})]})]})]}),i.jsx("style",{children:`
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
      `})]})},lr=({post:e,onUpdatePost:t,onDeletePost:n})=>{const{currentUser:r}=je(),{addToast:a}=Oe(),[l,o]=x.useState(()=>e.likes.includes(r==null?void 0:r.id)),[s,c]=x.useState(e.likeCount||e.likes.length),[u,g]=x.useState(()=>{var T;return(T=e.savedBy)==null?void 0:T.includes(r==null?void 0:r.id)}),[f,p]=x.useState(!1),[v,w]=x.useState(e.comments||[]),[j,k]=x.useState(!1),[m,d]=x.useState(!1),[h,y]=x.useState(!1),S=()=>{if(!r){a("Please log in to like posts.","warning");return}const T=!l;o(T),c(Y=>T?Y+1:Y-1),T&&(y(!0),setTimeout(()=>y(!1),500));const C=T?[...e.likes,r.id]:e.likes.filter(Y=>Y!==r.id),I={...e,likes:C,likeCount:T?s+1:s-1};t(I)},E=()=>{if(!r){a("Please log in to save posts.","warning");return}const T=!u;g(T);const C=e.savedBy||[],I=T?[...C,r.id]:C.filter(Rt=>Rt!==r.id),Y={...e,savedBy:I};t(Y),a(T?"Post saved to your bookmarks!":"Removed from saved posts.","info")},b=T=>{const C=[...v,T];w(C);const I={...e,comments:C,commentCount:C.length};t(I)},L=(r==null?void 0:r.id)===e.authorId;return i.jsxs("article",{className:"post-card glass-card",children:[i.jsxs("div",{className:"post-header",children:[i.jsxs(J,{to:`/profile?username=${e.authorUsername}`,className:"post-author-link",children:[i.jsx("div",{className:"avatar avatar-md",children:i.jsx("img",{src:e.authorAvatar,alt:e.authorName})}),i.jsxs("div",{className:"post-author-details",children:[i.jsxs("div",{className:"author-name-row",children:[i.jsx("span",{className:"author-name",children:e.authorName}),e.authorVerified&&i.jsx(Xe,{className:"verified-badge"})]}),i.jsxs("span",{className:"author-username",children:["@",e.authorUsername," • ",e.timestamp]})]})]}),i.jsxs("div",{className:"post-menu-wrapper",children:[i.jsx("button",{className:"btn-icon",onClick:()=>k(!j),children:i.jsx(gg,{})}),j&&i.jsxs("div",{className:"post-dropdown-menu",children:[i.jsxs("button",{className:"dropdown-item",onClick:()=>{navigator.clipboard.writeText(window.location.href),a("Post link copied!","success"),k(!1)},children:[i.jsx(wg,{})," Copy Link"]}),L&&i.jsxs("button",{className:"dropdown-item danger-item",onClick:()=>{n(e.id),a("Post deleted.","info"),k(!1)},children:[i.jsx(Vl,{})," Delete Post"]})]})]})]}),i.jsx("div",{className:"post-content",children:i.jsx("p",{children:e.content})}),e.image&&i.jsx("div",{className:"post-image-container img-zoom-container",children:i.jsx("img",{src:e.image,alt:"Post attachment"})}),i.jsxs("div",{className:"post-actions-bar",children:[i.jsxs("div",{className:"post-action-btns",children:[i.jsxs("button",{className:`post-action-btn like-btn ${l?"liked":""} ${h?"anim-heart-pop":""}`,onClick:S,children:[l?i.jsx(Fg,{className:"heart-icon-filled"}):i.jsx(_n,{}),i.jsx("span",{children:s})]}),i.jsxs("button",{className:"post-action-btn comment-btn",onClick:()=>p(!f),children:[i.jsx(Mn,{}),i.jsx("span",{children:v.length})]}),i.jsxs("button",{className:"post-action-btn share-btn",onClick:()=>d(!0),children:[i.jsx(of,{}),i.jsx("span",{children:e.shares||0})]})]}),i.jsx("button",{className:`btn-icon save-btn ${u?"saved":""}`,onClick:E,title:u?"Unsave Post":"Save Post",children:i.jsx(br,{})})]}),f&&i.jsx(Ag,{comments:v,onAddComment:b}),m&&i.jsx(Dg,{post:e,onClose:()=>d(!1)}),i.jsx("style",{children:`
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
      `})]})},Ug=()=>{const[e,t]=x.useState(()=>Jo()),[n,r]=x.useState("all"),[a,l]=x.useState(!1),o=f=>{const p=[f,...e];t(p),Ht(p),a&&l(!1)},s=f=>{const p=e.map(v=>v.id===f.id?f:v);t(p),Ht(p)},c=f=>{const p=e.filter(v=>v.id!==f);t(p),Ht(p)},g=n==="popular"?[...e].sort((f,p)=>(p.likeCount||0)-(f.likeCount||0)):e;return i.jsxs("div",{className:"app-layout",children:[i.jsx(Fn,{onOpenCreatePost:()=>l(!0)}),i.jsxs("main",{className:"app-center-feed",children:[i.jsx(Mg,{}),i.jsx(bc,{onPostCreated:o}),i.jsxs("div",{className:"feed-filter-bar glass-card",children:[i.jsxs("button",{className:`feed-tab ${n==="all"?"active":""}`,onClick:()=>r("all"),children:[i.jsx(Cc,{})," Recent"]}),i.jsxs("button",{className:`feed-tab ${n==="popular"?"active":""}`,onClick:()=>r("popular"),children:[i.jsx(qo,{})," Trending"]})]}),i.jsxs("div",{className:"posts-feed-list",children:[g.map(f=>i.jsx(lr,{post:f,onUpdatePost:s,onDeletePost:c},f.id)),g.length===0&&i.jsxs("div",{className:"glass-card empty-state",children:[i.jsx("span",{className:"empty-state-icon",children:i.jsx(Cc,{})}),i.jsx("h3",{className:"empty-state-title",children:"No posts in feed"}),i.jsx("p",{children:"Be the first to share a post with the Socialla community!"})]})]})]}),i.jsx(Rr,{}),i.jsx(An,{onOpenCreatePost:()=>l(!0)}),a&&i.jsx("div",{className:"modal-backdrop",onClick:()=>l(!1),children:i.jsxs("div",{className:"modal-content",onClick:f=>f.stopPropagation(),children:[i.jsxs("div",{className:"modal-header p-4 flex justify-between items-center border-b",children:[i.jsx("h3",{children:"Create Post"}),i.jsx("button",{className:"btn-icon",onClick:()=>l(!1),children:i.jsx(Tt,{})})]}),i.jsx(bc,{onPostCreated:o})]})}),i.jsx("style",{children:`
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
      `})]})},$g=()=>{const[e,t]=qd(),n=Ge(),r=e.get("q")||"",[a,l]=x.useState(r),[o,s]=x.useState("trending"),[c,u]=x.useState(()=>Jo()),[g,f]=x.useState(()=>Bt());x.useEffect(()=>{l(r)},[r]);const p=k=>{const m=c.map(d=>d.id===k.id?k:d);u(m),Ht(m)},v=k=>{const m=c.filter(d=>d.id!==k);u(m),Ht(m)},w=c.filter(k=>k.content.toLowerCase().includes(a.toLowerCase())||k.authorName.toLowerCase().includes(a.toLowerCase())||k.authorUsername.toLowerCase().includes(a.toLowerCase())),j=g.filter(k=>k.name.toLowerCase().includes(a.toLowerCase())||k.username.toLowerCase().includes(a.toLowerCase())||k.bio.toLowerCase().includes(a.toLowerCase()));return i.jsxs("div",{className:"app-layout",children:[i.jsx(Fn,{}),i.jsxs("main",{className:"app-center-feed",children:[i.jsx("div",{className:"glass-card explore-search-card",children:i.jsxs("div",{className:"input-wrapper",children:[i.jsx(Zo,{className:"input-icon-left"}),i.jsx("input",{type:"text",className:"input-field search-input-large",placeholder:"Search posts, hashtags, or users...",value:a,onChange:k=>{l(k.target.value),t(k.target.value?{q:k.target.value}:{})}})]})}),i.jsxs("div",{className:"tab-group",children:[i.jsxs("button",{className:`tab-btn ${o==="trending"?"active":""}`,onClick:()=>s("trending"),children:[i.jsx(Yl,{})," Media Grid"]}),i.jsxs("button",{className:`tab-btn ${o==="posts"?"active":""}`,onClick:()=>s("posts"),children:[i.jsx(qo,{})," Top Posts (",w.length,")"]}),i.jsxs("button",{className:`tab-btn ${o==="users"?"active":""}`,onClick:()=>s("users"),children:[i.jsx(Wl,{})," Accounts (",j.length,")"]})]}),o==="trending"&&i.jsx("div",{className:"explore-media-grid",children:c.filter(k=>k.image).map(k=>i.jsxs("div",{className:"explore-grid-item img-zoom-container",children:[i.jsx("img",{src:k.image,alt:k.content}),i.jsx("div",{className:"explore-grid-overlay",children:i.jsxs("div",{className:"overlay-stat",children:[i.jsx(_n,{})," ",k.likeCount||k.likes.length]})})]},k.id))}),o==="posts"&&i.jsx("div",{className:"posts-feed-list",children:w.map(k=>i.jsx(lr,{post:k,onUpdatePost:p,onDeletePost:v},k.id))}),o==="users"&&i.jsx("div",{className:"explore-users-grid",children:j.map(k=>i.jsxs("div",{className:"glass-card explore-user-card",children:[i.jsx("div",{className:"user-card-cover",style:{backgroundImage:`url(${k.cover})`}}),i.jsxs("div",{className:"user-card-body",children:[i.jsx("div",{className:"avatar avatar-lg user-card-avatar",children:i.jsx("img",{src:k.avatar,alt:k.name})}),i.jsx("strong",{className:"user-card-name",children:k.name}),i.jsxs("span",{className:"user-card-username",children:["@",k.username]}),i.jsx("p",{className:"user-card-bio",children:k.bio}),i.jsx("button",{className:"btn btn-outline btn-sm w-full mt-2",onClick:()=>n(`/profile?username=${k.username}`),children:"View Profile"})]})]},k.id))})]}),i.jsx(Rr,{}),i.jsx(An,{}),i.jsx("style",{children:`
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
      `})]})},Bg=({notif:e,onToggleRead:t})=>{const n=()=>{switch(e.type){case"like":return i.jsx(_n,{className:"notif-icon notif-like"});case"comment":return i.jsx(Mn,{className:"notif-icon notif-comment"});case"follow":return i.jsx(rf,{className:"notif-icon notif-follow"});case"mention":return i.jsx(mf,{className:"notif-icon notif-mention"});default:return i.jsx(_n,{className:"notif-icon"})}};return i.jsxs("div",{className:`notification-item glass-card ${e.read?"":"unread"}`,children:[i.jsxs("div",{className:"notif-avatar-wrap",children:[i.jsx("div",{className:"avatar avatar-md",children:i.jsx("img",{src:e.user.avatar,alt:e.user.name})}),i.jsx("div",{className:"notif-badge-overlay",children:n()})]}),i.jsxs("div",{className:"notif-details",children:[i.jsxs("p",{className:"notif-text",children:[i.jsx("strong",{className:"notif-username",children:e.user.name})," ",e.targetText]}),i.jsx("span",{className:"notif-timestamp",children:e.timestamp})]}),i.jsx("button",{className:"btn-icon notif-read-btn",onClick:()=>t(e.id),title:e.read?"Mark as Unread":"Mark as Read",children:i.jsx(bg,{className:e.read?"read-check":""})}),i.jsx("style",{children:`
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
      `})]})},Wg=()=>{const{addToast:e}=Oe(),[t,n]=x.useState(()=>Zh()),[r,a]=x.useState("all"),l=u=>{const g=t.map(f=>f.id===u?{...f,read:!f.read}:f);n(g),jc(g)},o=()=>{const u=t.map(g=>({...g,read:!0}));n(u),jc(u),e("All notifications marked as read.","success")},s=r==="unread"?t.filter(u=>!u.read):t,c=t.filter(u=>!u.read).length;return i.jsxs("div",{className:"app-layout",children:[i.jsx(Fn,{}),i.jsxs("main",{className:"app-center-feed",children:[i.jsxs("div",{className:"glass-card notif-header-card",children:[i.jsxs("div",{className:"notif-title-row",children:[i.jsxs("h2",{children:["Notifications ",c>0&&i.jsxs("span",{className:"badge badge-primary",children:[c," new"]})]}),c>0&&i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:o,children:[i.jsx(Xe,{})," Mark All Read"]})]}),i.jsxs("div",{className:"tab-group notif-tabs",children:[i.jsxs("button",{className:`tab-btn ${r==="all"?"active":""}`,onClick:()=>a("all"),children:["All Notifications (",t.length,")"]}),i.jsxs("button",{className:`tab-btn ${r==="unread"?"active":""}`,onClick:()=>a("unread"),children:["Unread (",c,")"]})]})]}),i.jsxs("div",{className:"notif-feed-list",children:[s.map(u=>i.jsx(Bg,{notif:u,onToggleRead:l},u.id)),s.length===0&&i.jsxs("div",{className:"glass-card empty-state",children:[i.jsx("span",{className:"empty-state-icon",children:i.jsx(ii,{})}),i.jsx("h3",{className:"empty-state-title",children:"No notifications"}),i.jsx("p",{children:"You're all caught up! When people like, comment, or follow you, updates will appear here."})]})]})]}),i.jsx(Rr,{}),i.jsx(An,{}),i.jsx("style",{children:`
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
      `})]})},Vg=()=>{var p;const{currentUser:e}=je(),[t,n]=x.useState(()=>eg()),[r,a]=x.useState(((p=t[0])==null?void 0:p.id)||null),[l,o]=x.useState(""),[s,c]=x.useState(""),u=t.find(v=>v.id===r),g=v=>{if(v.preventDefault(),!l.trim()||!u)return;const w={id:`m_${Date.now()}`,senderId:"me",text:l.trim(),time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})},j=t.map(k=>k.id===r?{...k,messages:[...k.messages,w],unread:0}:k);n(j),tg(j),o("")},f=t.filter(v=>v.participant.name.toLowerCase().includes(s.toLowerCase())||v.participant.username.toLowerCase().includes(s.toLowerCase()));return i.jsxs("div",{className:"app-layout messages-layout-wrapper",children:[i.jsx(Fn,{}),i.jsx("main",{className:"messages-main-pane glass-card",children:i.jsxs("div",{className:"messages-layout",children:[i.jsxs("div",{className:`messages-convos-pane ${r?"mobile-hidden":""}`,children:[i.jsxs("div",{className:"convos-header",children:[i.jsx("h2",{children:"Direct Messages"}),i.jsxs("div",{className:"input-wrapper search-wrapper",children:[i.jsx(Zo,{className:"input-icon-left"}),i.jsx("input",{type:"text",className:"input-field",placeholder:"Search messages...",value:s,onChange:v=>c(v.target.value)})]})]}),i.jsx("div",{className:"convos-list",children:f.map(v=>{const w=v.messages[v.messages.length-1];return i.jsxs("div",{className:`convo-item ${v.id===r?"active":""}`,onClick:()=>a(v.id),children:[i.jsxs("div",{className:"avatar avatar-md",children:[i.jsx("img",{src:v.participant.avatar,alt:v.participant.name}),v.participant.online&&i.jsx("span",{className:"avatar-online-dot"})]}),i.jsxs("div",{className:"convo-details",children:[i.jsxs("div",{className:"convo-name-row",children:[i.jsx("span",{className:"convo-name",children:v.participant.name}),w&&i.jsx("span",{className:"convo-time",children:w.time})]}),i.jsx("p",{className:"convo-preview",children:(w==null?void 0:w.text)||"No messages yet"})]})]},v.id)})})]}),i.jsx("div",{className:`messages-chat-pane ${r?"":"mobile-hidden"}`,children:u?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"chat-header",children:[i.jsx("button",{className:"btn-icon mobile-back-btn",onClick:()=>a(null),children:i.jsx(Pg,{})}),i.jsxs("div",{className:"avatar avatar-md",children:[i.jsx("img",{src:u.participant.avatar,alt:u.participant.name}),u.participant.online&&i.jsx("span",{className:"avatar-online-dot"})]}),i.jsxs("div",{className:"chat-header-text",children:[i.jsx("span",{className:"chat-user-name",children:u.participant.name}),i.jsx("span",{className:"chat-user-status",children:u.participant.online?"Online now":"Offline"})]})]}),i.jsx("div",{className:"chat-messages-area",children:u.messages.map(v=>{const w=v.senderId==="me"||v.senderId===(e==null?void 0:e.id);return i.jsxs("div",{className:`chat-bubble-row ${w?"me":"them"}`,children:[!w&&i.jsx("div",{className:"avatar avatar-sm",children:i.jsx("img",{src:u.participant.avatar,alt:u.participant.name})}),i.jsxs("div",{className:"chat-bubble",children:[i.jsx("p",{children:v.text}),i.jsx("span",{className:"chat-bubble-time",children:v.time})]})]},v.id)})}),i.jsx("form",{onSubmit:g,className:"chat-input-form",children:i.jsxs("div",{className:"input-wrapper has-right-icon",children:[i.jsx("input",{type:"text",className:"input-field chat-input",placeholder:"Type a message...",value:l,onChange:v=>o(v.target.value)}),i.jsx("button",{type:"submit",className:"input-icon-right chat-send-btn",disabled:!l.trim(),children:i.jsx(Xo,{})})]})})]}):i.jsxs("div",{className:"empty-state",children:[i.jsx(Mn,{className:"empty-state-icon"}),i.jsx("h3",{className:"empty-state-title",children:"Select a conversation"}),i.jsx("p",{children:"Choose a friend from the left sidebar to start chatting!"})]})})]})}),i.jsx(An,{}),i.jsx("style",{children:`
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
      `})]})},Hg=({onClose:e})=>{const{currentUser:t,updateProfile:n}=je(),{addToast:r}=Oe(),[a,l]=x.useState((t==null?void 0:t.name)||""),[o,s]=x.useState((t==null?void 0:t.username)||""),[c,u]=x.useState((t==null?void 0:t.bio)||""),[g,f]=x.useState((t==null?void 0:t.avatar)||""),[p,v]=x.useState((t==null?void 0:t.cover)||""),w=m=>{const d=m.target.files[0];if(d){const h=new FileReader;h.onloadend=()=>f(h.result),h.readAsDataURL(d)}},j=m=>{const d=m.target.files[0];if(d){const h=new FileReader;h.onloadend=()=>v(h.result),h.readAsDataURL(d)}},k=m=>{if(m.preventDefault(),!a.trim()||!o.trim()){r("Name and username cannot be empty.","warning");return}n({name:a.trim(),username:o.trim(),bio:c.trim(),avatar:g,cover:p}),r("Profile updated successfully!","success"),e()};return i.jsxs("div",{className:"modal-backdrop",onClick:e,children:[i.jsxs("div",{className:"modal-content edit-profile-modal",onClick:m=>m.stopPropagation(),children:[i.jsxs("div",{className:"modal-header",children:[i.jsx("h3",{children:"Edit Profile"}),i.jsx("button",{className:"btn-icon",onClick:e,children:i.jsx(Tt,{})})]}),i.jsxs("form",{onSubmit:k,className:"modal-form",children:[i.jsx("div",{className:"edit-cover-wrap",style:{backgroundImage:`url(${p})`},children:i.jsxs("label",{className:"btn btn-secondary change-cover-btn",children:[i.jsx(ql,{})," Change Cover",i.jsx("input",{type:"file",accept:"image/*",onChange:j,hidden:!0})]})}),i.jsxs("div",{className:"edit-avatar-wrap",children:[i.jsx("div",{className:"avatar avatar-xl",children:i.jsx("img",{src:g,alt:"Avatar Preview"})}),i.jsxs("label",{className:"btn-icon change-avatar-btn",title:"Change Profile Picture",children:[i.jsx(ql,{}),i.jsx("input",{type:"file",accept:"image/*",onChange:w,hidden:!0})]})]}),i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Full Name"}),i.jsx("input",{type:"text",className:"input-field",value:a,onChange:m=>l(m.target.value),required:!0})]}),i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Username"}),i.jsx("input",{type:"text",className:"input-field",value:o,onChange:m=>s(m.target.value),required:!0})]}),i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Bio"}),i.jsx("textarea",{className:"input-field",rows:"3",value:c,onChange:m=>u(m.target.value)})]}),i.jsxs("div",{className:"modal-footer",children:[i.jsx("button",{type:"button",className:"btn btn-secondary",onClick:e,children:"Cancel"}),i.jsxs("button",{type:"submit",className:"btn btn-primary",children:[i.jsx(sf,{})," Save Changes"]})]})]})]}),i.jsx("style",{children:`
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
      `})]})},Qg=()=>{const{currentUser:e}=je(),[t]=qd(),n=t.get("username"),r=t.get("tab")||"posts",[a,l]=x.useState(r),[o,s]=x.useState(!1),[c]=x.useState(()=>Bt()),[u,g]=x.useState(()=>Jo()),f=n&&c.find(d=>d.username.toLowerCase()===n.toLowerCase())||e,p=(f==null?void 0:f.id)===(e==null?void 0:e.id),v=d=>{const h=u.map(y=>y.id===d.id?d:y);g(h),Ht(h)},w=d=>{const h=u.filter(y=>y.id!==d);g(h),Ht(h)},j=u.filter(d=>d.authorId===(f==null?void 0:f.id)||d.authorUsername===(f==null?void 0:f.username)),k=j.filter(d=>d.image),m=u.filter(d=>{var h;return(h=d.savedBy)==null?void 0:h.includes(f==null?void 0:f.id)});return f?i.jsxs("div",{className:"app-layout",children:[i.jsx(Fn,{}),i.jsxs("main",{className:"app-center-feed",children:[i.jsxs("div",{className:"glass-card profile-card",children:[i.jsx("div",{className:"profile-banner",style:{backgroundImage:`url(${f.cover})`}}),i.jsxs("div",{className:"profile-info-area",children:[i.jsxs("div",{className:"profile-header-row",children:[i.jsx("div",{className:"profile-avatar-wrapper",children:i.jsx("div",{className:"avatar avatar-xl profile-avatar",children:i.jsx("img",{src:f.avatar,alt:f.name})})}),p?i.jsxs("button",{className:"btn btn-secondary edit-profile-btn",onClick:()=>s(!0),children:[i.jsx(kg,{})," Edit Profile"]}):i.jsx("button",{className:"btn btn-primary edit-profile-btn",children:"Follow"})]}),i.jsxs("div",{className:"profile-meta",children:[i.jsxs("h1",{className:"profile-name",children:[f.name,f.verified&&i.jsx(Xe,{className:"verified-badge"})]}),i.jsxs("span",{className:"profile-username",children:["@",f.username]}),f.bio&&i.jsx("p",{className:"profile-bio",children:f.bio}),i.jsxs("div",{className:"profile-stats-row",children:[i.jsxs("div",{className:"stat-item",children:[i.jsx("strong",{children:f.followers||0}),i.jsx("span",{children:"Followers"})]}),i.jsxs("div",{className:"stat-item",children:[i.jsx("strong",{children:f.following||0}),i.jsx("span",{children:"Following"})]}),i.jsxs("div",{className:"stat-item",children:[i.jsx("strong",{children:j.length}),i.jsx("span",{children:"Posts"})]})]}),f.joinedDate&&i.jsxs("div",{className:"joined-date",children:[i.jsx(Eg,{})," Joined ",f.joinedDate]})]}),i.jsxs("div",{className:"tab-group profile-tabs",children:[i.jsxs("button",{className:`tab-btn ${a==="posts"?"active":""}`,onClick:()=>l("posts"),children:[i.jsx(Yl,{})," Posts (",j.length,")"]}),i.jsxs("button",{className:`tab-btn ${a==="media"?"active":""}`,onClick:()=>l("media"),children:[i.jsx(ff,{})," Media (",k.length,")"]}),i.jsxs("button",{className:`tab-btn ${a==="saved"?"active":""}`,onClick:()=>l("saved"),children:[i.jsx(br,{})," Saved (",m.length,")"]})]})]})]}),i.jsxs("div",{className:"posts-feed-list",children:[a==="posts"&&j.map(d=>i.jsx(lr,{post:d,onUpdatePost:v,onDeletePost:w},d.id)),a==="media"&&k.map(d=>i.jsx(lr,{post:d,onUpdatePost:v,onDeletePost:w},d.id)),a==="saved"&&m.map(d=>i.jsx(lr,{post:d,onUpdatePost:v,onDeletePost:w},d.id)),(a==="posts"&&j.length===0||a==="media"&&k.length===0||a==="saved"&&m.length===0)&&i.jsxs("div",{className:"glass-card empty-state",children:[i.jsx("span",{className:"empty-state-icon",children:i.jsx(Yl,{})}),i.jsx("h3",{className:"empty-state-title",children:"No content here yet"}),i.jsx("p",{children:"Items will appear here once published or saved."})]})]})]}),i.jsx(Rr,{}),i.jsx(An,{}),o&&i.jsx(Hg,{onClose:()=>s(!1)}),i.jsx("style",{children:`
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
      `})]}):null},Kg=()=>{var E,b,L,T,C;const{currentUser:e,updateProfile:t,logout:n}=je(),{theme:r,setTheme:a}=ef(),{addToast:l}=Oe(),o=Ge(),[s,c]=x.useState("account"),[u,g]=x.useState((e==null?void 0:e.name)||""),[f,p]=x.useState((e==null?void 0:e.username)||""),[v,w]=x.useState((e==null?void 0:e.email)||""),[j,k]=x.useState(()=>$l()),m=I=>{I.preventDefault(),t({name:u,username:f,email:v}),l("Account details updated successfully!","success")},d=I=>{const Y={...j,notifications:{...j.notifications,[I]:!j.notifications[I]}};k(Y),Bl(Y),l("Notification preferences saved.","info")},h=I=>{const Y={...j,privacy:{...j.privacy,[I]:!j.privacy[I]}};k(Y),Bl(Y),l("Privacy preferences updated.","info")},y=()=>{window.confirm("Are you sure you want to reset all local storage data back to default?")&&(ng(),l("All local data reset. Reloading app...","info"),setTimeout(()=>{window.location.href="/login"},1e3))},S=()=>{n(),l("Logged out successfully.","info"),o("/login")};return i.jsxs("div",{className:"app-layout",children:[i.jsx(Fn,{}),i.jsx("main",{className:"app-center-feed",children:i.jsxs("div",{className:"glass-card settings-card",children:[i.jsxs("div",{className:"settings-header",children:[i.jsx("h2",{children:"Settings & Preferences"}),i.jsx("p",{children:"Manage your account settings, appearance, and privacy controls."})]}),i.jsxs("div",{className:"settings-container",children:[i.jsxs("div",{className:"settings-nav",children:[i.jsxs("button",{className:`settings-nav-btn ${s==="account"?"active":""}`,onClick:()=>c("account"),children:[i.jsx(ai,{})," Account"]}),i.jsxs("button",{className:`settings-nav-btn ${s==="appearance"?"active":""}`,onClick:()=>c("appearance"),children:[i.jsx(Hl,{})," Appearance"]}),i.jsxs("button",{className:`settings-nav-btn ${s==="notifications"?"active":""}`,onClick:()=>c("notifications"),children:[i.jsx(ii,{})," Notifications"]}),i.jsxs("button",{className:`settings-nav-btn ${s==="privacy"?"active":""}`,onClick:()=>c("privacy"),children:[i.jsx(lf,{})," Privacy"]}),i.jsxs("button",{className:`settings-nav-btn danger-nav ${s==="danger"?"active":""}`,onClick:()=>c("danger"),children:[i.jsx(Vl,{})," Account Actions"]})]}),i.jsxs("div",{className:"settings-content",children:[s==="account"&&i.jsxs("form",{onSubmit:m,className:"settings-section",children:[i.jsx("h3",{children:"Account Settings"}),i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Display Name"}),i.jsx("input",{type:"text",className:"input-field",value:u,onChange:I=>g(I.target.value)})]}),i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Username"}),i.jsx("input",{type:"text",className:"input-field",value:f,onChange:I=>p(I.target.value)})]}),i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Email Address"}),i.jsx("input",{type:"email",className:"input-field",value:v,onChange:I=>w(I.target.value)})]}),i.jsxs("button",{type:"submit",className:"btn btn-primary mt-2",children:[i.jsx(sf,{})," Save Changes"]})]}),s==="appearance"&&i.jsxs("div",{className:"settings-section",children:[i.jsx("h3",{children:"Theme & Appearance"}),i.jsx("p",{className:"section-desc",children:"Select how Socialla looks for you."}),i.jsxs("div",{className:"theme-options-grid",children:[i.jsxs("div",{className:`theme-option-card ${r==="dark"?"selected":""}`,onClick:()=>a("dark"),children:[i.jsx("div",{className:"theme-card-icon",children:i.jsx(uf,{})}),i.jsx("strong",{children:"Dark Mode"}),i.jsx("span",{children:"Sleek dark aesthetics"})]}),i.jsxs("div",{className:`theme-option-card ${r==="light"?"selected":""}`,onClick:()=>a("light"),children:[i.jsx("div",{className:"theme-card-icon",children:i.jsx(Hl,{})}),i.jsx("strong",{children:"Light Mode"}),i.jsx("span",{children:"Clean crisp white vibe"})]}),i.jsxs("div",{className:`theme-option-card ${r==="system"?"selected":""}`,onClick:()=>a("system"),children:[i.jsx("div",{className:"theme-card-icon",children:i.jsx(vg,{})}),i.jsx("strong",{children:"System Preference"}),i.jsx("span",{children:"Matches OS settings"})]})]})]}),s==="notifications"&&i.jsxs("div",{className:"settings-section",children:[i.jsx("h3",{children:"Notification Preferences"}),i.jsx("p",{className:"section-desc",children:"Choose which activities trigger notifications."}),i.jsxs("div",{className:"toggle-list",children:[i.jsxs("div",{className:"toggle-item",children:[i.jsxs("div",{children:[i.jsx("strong",{children:"Like Alerts"}),i.jsx("p",{children:"Notify when someone likes your posts"})]}),i.jsx("input",{type:"checkbox",className:"toggle-checkbox",checked:((E=j.notifications)==null?void 0:E.likes)??!0,onChange:()=>d("likes")})]}),i.jsxs("div",{className:"toggle-item",children:[i.jsxs("div",{children:[i.jsx("strong",{children:"Comment Alerts"}),i.jsx("p",{children:"Notify when someone comments on your posts"})]}),i.jsx("input",{type:"checkbox",className:"toggle-checkbox",checked:((b=j.notifications)==null?void 0:b.comments)??!0,onChange:()=>d("comments")})]}),i.jsxs("div",{className:"toggle-item",children:[i.jsxs("div",{children:[i.jsx("strong",{children:"Follower Alerts"}),i.jsx("p",{children:"Notify when someone starts following you"})]}),i.jsx("input",{type:"checkbox",className:"toggle-checkbox",checked:((L=j.notifications)==null?void 0:L.follows)??!0,onChange:()=>d("follows")})]})]})]}),s==="privacy"&&i.jsxs("div",{className:"settings-section",children:[i.jsx("h3",{children:"Privacy Controls"}),i.jsxs("div",{className:"toggle-list",children:[i.jsxs("div",{className:"toggle-item",children:[i.jsxs("div",{children:[i.jsx("strong",{children:"Private Profile"}),i.jsx("p",{children:"Only followers can see your posts"})]}),i.jsx("input",{type:"checkbox",className:"toggle-checkbox",checked:((T=j.privacy)==null?void 0:T.privateProfile)??!1,onChange:()=>h("privateProfile")})]}),i.jsxs("div",{className:"toggle-item",children:[i.jsxs("div",{children:[i.jsx("strong",{children:"Show Online Status"}),i.jsx("p",{children:"Allow friends to see when you are active"})]}),i.jsx("input",{type:"checkbox",className:"toggle-checkbox",checked:((C=j.privacy)==null?void 0:C.showOnlineStatus)??!0,onChange:()=>h("showOnlineStatus")})]})]})]}),s==="danger"&&i.jsxs("div",{className:"settings-section",children:[i.jsx("h3",{children:"Account Actions"}),i.jsxs("div",{className:"danger-actions-list",children:[i.jsxs("div",{className:"danger-action-card",children:[i.jsxs("div",{children:[i.jsx("strong",{children:"Log Out"}),i.jsx("p",{children:"Sign out of your active Socialla session"})]}),i.jsxs("button",{className:"btn btn-secondary",onClick:S,children:[i.jsx(df,{})," Logout"]})]}),i.jsxs("div",{className:"danger-action-card",children:[i.jsxs("div",{children:[i.jsx("strong",{children:"Reset All Local Storage Data"}),i.jsx("p",{children:"Clear custom posts, comments, and revert seed state"})]}),i.jsxs("button",{className:"btn btn-primary bg-danger",onClick:y,children:[i.jsx(Vl,{})," Reset Local Data"]})]})]})]})]})]})]})}),i.jsx(Rr,{}),i.jsx(An,{}),i.jsx("style",{children:`
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
      `})]})};function Yg(){return i.jsx(ag,{children:i.jsx(_g,{children:i.jsx(rg,{children:i.jsxs(Oh,{children:[i.jsx(Fe,{path:"/",element:i.jsx(Tg,{})}),i.jsx(Fe,{path:"/login",element:i.jsx(Rg,{})}),i.jsx(Fe,{path:"/register",element:i.jsx(Ig,{})}),i.jsx(Fe,{path:"/home",element:i.jsx(nn,{children:i.jsx(Ug,{})})}),i.jsx(Fe,{path:"/explore",element:i.jsx(nn,{children:i.jsx($g,{})})}),i.jsx(Fe,{path:"/notifications",element:i.jsx(nn,{children:i.jsx(Wg,{})})}),i.jsx(Fe,{path:"/messages",element:i.jsx(nn,{children:i.jsx(Vg,{})})}),i.jsx(Fe,{path:"/profile",element:i.jsx(nn,{children:i.jsx(Qg,{})})}),i.jsx(Fe,{path:"/settings",element:i.jsx(nn,{children:i.jsx(Kg,{})})}),i.jsx(Fe,{path:"*",element:i.jsx(Gd,{to:"/",replace:!0})})]})})})})}Fi.createRoot(document.getElementById("root")).render(i.jsx(tt.StrictMode,{children:i.jsx(Vh,{children:i.jsx(Yg,{})})}));
