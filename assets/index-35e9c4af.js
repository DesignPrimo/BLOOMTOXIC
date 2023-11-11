(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function qr(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const ue={},gn=[],Je=()=>{},Fh=()=>!1,Bh=/^on[^a-z]/,pi=t=>Bh.test(t),Kr=t=>t.startsWith("onUpdate:"),Ce=Object.assign,Gr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Hh=Object.prototype.hasOwnProperty,G=(t,e)=>Hh.call(t,e),H=Array.isArray,mn=t=>_i(t)==="[object Map]",$a=t=>_i(t)==="[object Set]",U=t=>typeof t=="function",me=t=>typeof t=="string",Qr=t=>typeof t=="symbol",he=t=>t!==null&&typeof t=="object",ja=t=>he(t)&&U(t.then)&&U(t.catch),Va=Object.prototype.toString,_i=t=>Va.call(t),Wh=t=>_i(t).slice(8,-1),za=t=>_i(t)==="[object Object]",Yr=t=>me(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Us=qr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),gi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Uh=/-(\w)/g,at=gi(t=>t.replace(Uh,(e,n)=>n?n.toUpperCase():"")),$h=/\B([A-Z])/g,Mn=gi(t=>t.replace($h,"-$1").toLowerCase()),mi=gi(t=>t.charAt(0).toUpperCase()+t.slice(1)),Hi=gi(t=>t?`on${mi(t)}`:""),os=(t,e)=>!Object.is(t,e),Wi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},zs=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},jh=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Zo;const lr=()=>Zo||(Zo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xr(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=me(s)?Kh(s):Xr(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(me(t))return t;if(he(t))return t}}const Vh=/;(?![^(]*\))/g,zh=/:([^]+)/,qh=/\/\*[^]*?\*\//g;function Kh(t){const e={};return t.replace(qh,"").split(Vh).forEach(n=>{if(n){const s=n.split(zh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Jr(t){let e="";if(me(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=Jr(t[n]);s&&(e+=s+" ")}else if(he(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Gh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Qh=qr(Gh);function qa(t){return!!t||t===""}const VE=t=>me(t)?t:t==null?"":H(t)||he(t)&&(t.toString===Va||!U(t.toString))?JSON.stringify(t,Ka,2):String(t),Ka=(t,e)=>e&&e.__v_isRef?Ka(t,e.value):mn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:$a(e)?{[`Set(${e.size})`]:[...e.values()]}:he(e)&&!H(e)&&!za(e)?String(e):e;let Ue;class Ga{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ue,!e&&Ue&&(this.index=(Ue.scopes||(Ue.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ue;try{return Ue=this,e()}finally{Ue=n}}}on(){Ue=this}off(){Ue=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Qa(t){return new Ga(t)}function Yh(t,e=Ue){e&&e.active&&e.effects.push(t)}function Ya(){return Ue}function Xh(t){Ue&&Ue.cleanups.push(t)}const Zr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Xa=t=>(t.w&kt)>0,Ja=t=>(t.n&kt)>0,Jh=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=kt},Zh=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Xa(i)&&!Ja(i)?i.delete(t):e[n++]=i,i.w&=~kt,i.n&=~kt}e.length=n}},qs=new WeakMap;let Gn=0,kt=1;const ar=30;let Ke;const Gt=Symbol(""),cr=Symbol("");class eo{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Yh(this,s)}run(){if(!this.active)return this.fn();let e=Ke,n=At;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ke,Ke=this,At=!0,kt=1<<++Gn,Gn<=ar?Jh(this):el(this),this.fn()}finally{Gn<=ar&&Zh(this),kt=1<<--Gn,Ke=this.parent,At=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ke===this?this.deferStop=!0:this.active&&(el(this),this.onStop&&this.onStop(),this.active=!1)}}function el(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let At=!0;const Za=[];function Ln(){Za.push(At),At=!1}function Fn(){const t=Za.pop();At=t===void 0?!0:t}function Fe(t,e,n){if(At&&Ke){let s=qs.get(t);s||qs.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Zr()),ec(i)}}function ec(t,e){let n=!1;Gn<=ar?Ja(t)||(t.n|=kt,n=!Xa(t)):n=!t.has(Ke),n&&(t.add(Ke),Ke.deps.push(t))}function _t(t,e,n,s,i,r){const o=qs.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&H(t)){const a=Number(s);o.forEach((c,u)=>{(u==="length"||u>=a)&&l.push(c)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":H(t)?Yr(n)&&l.push(o.get("length")):(l.push(o.get(Gt)),mn(t)&&l.push(o.get(cr)));break;case"delete":H(t)||(l.push(o.get(Gt)),mn(t)&&l.push(o.get(cr)));break;case"set":mn(t)&&l.push(o.get(Gt));break}if(l.length===1)l[0]&&ur(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);ur(Zr(a))}}function ur(t,e){const n=H(t)?t:[...t];for(const s of n)s.computed&&tl(s);for(const s of n)s.computed||tl(s)}function tl(t,e){(t!==Ke||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function ef(t,e){var n;return(n=qs.get(t))==null?void 0:n.get(e)}const tf=qr("__proto__,__v_isRef,__isVue"),tc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Qr)),nf=to(),sf=to(!1,!0),rf=to(!0),nl=of();function of(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Q(this);for(let r=0,o=this.length;r<o;r++)Fe(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(Q)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ln();const s=Q(this)[e].apply(this,n);return Fn(),s}}),t}function lf(t){const e=Q(this);return Fe(e,"has",t),e.hasOwnProperty(t)}function to(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?wf:oc:e?rc:ic).get(s))return s;const o=H(s);if(!t){if(o&&G(nl,i))return Reflect.get(nl,i,r);if(i==="hasOwnProperty")return lf}const l=Reflect.get(s,i,r);return(Qr(i)?tc.has(i):tf(i))||(t||Fe(s,"get",i),e)?l:pe(l)?o&&Yr(i)?l:l.value:he(l)?t?ac(l):gt(l):l}}const af=nc(),cf=nc(!0);function nc(t=!1){return function(n,s,i,r){let o=n[s];if(Tn(o)&&pe(o)&&!pe(i))return!1;if(!t&&(!Ks(i)&&!Tn(i)&&(o=Q(o),i=Q(i)),!H(n)&&pe(o)&&!pe(i)))return o.value=i,!0;const l=H(n)&&Yr(s)?Number(s)<n.length:G(n,s),a=Reflect.set(n,s,i,r);return n===Q(r)&&(l?os(i,o)&&_t(n,"set",s,i):_t(n,"add",s,i)),a}}function uf(t,e){const n=G(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&_t(t,"delete",e,void 0),s}function hf(t,e){const n=Reflect.has(t,e);return(!Qr(e)||!tc.has(e))&&Fe(t,"has",e),n}function ff(t){return Fe(t,"iterate",H(t)?"length":Gt),Reflect.ownKeys(t)}const sc={get:nf,set:af,deleteProperty:uf,has:hf,ownKeys:ff},df={get:rf,set(t,e){return!0},deleteProperty(t,e){return!0}},pf=Ce({},sc,{get:sf,set:cf}),no=t=>t,yi=t=>Reflect.getPrototypeOf(t);function ks(t,e,n=!1,s=!1){t=t.__v_raw;const i=Q(t),r=Q(e);n||(e!==r&&Fe(i,"get",e),Fe(i,"get",r));const{has:o}=yi(i),l=s?no:n?ro:ls;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function Ds(t,e=!1){const n=this.__v_raw,s=Q(n),i=Q(t);return e||(t!==i&&Fe(s,"has",t),Fe(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Ms(t,e=!1){return t=t.__v_raw,!e&&Fe(Q(t),"iterate",Gt),Reflect.get(t,"size",t)}function sl(t){t=Q(t);const e=Q(this);return yi(e).has.call(e,t)||(e.add(t),_t(e,"add",t,t)),this}function il(t,e){e=Q(e);const n=Q(this),{has:s,get:i}=yi(n);let r=s.call(n,t);r||(t=Q(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?os(e,o)&&_t(n,"set",t,e):_t(n,"add",t,e),this}function rl(t){const e=Q(this),{has:n,get:s}=yi(e);let i=n.call(e,t);i||(t=Q(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&_t(e,"delete",t,void 0),r}function ol(){const t=Q(this),e=t.size!==0,n=t.clear();return e&&_t(t,"clear",void 0,void 0),n}function Ls(t,e){return function(s,i){const r=this,o=r.__v_raw,l=Q(o),a=e?no:t?ro:ls;return!t&&Fe(l,"iterate",Gt),o.forEach((c,u)=>s.call(i,a(c),a(u),r))}}function Fs(t,e,n){return function(...s){const i=this.__v_raw,r=Q(i),o=mn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?no:e?ro:ls;return!e&&Fe(r,"iterate",a?cr:Gt),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:l?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Ct(t){return function(...e){return t==="delete"?!1:this}}function _f(){const t={get(r){return ks(this,r)},get size(){return Ms(this)},has:Ds,add:sl,set:il,delete:rl,clear:ol,forEach:Ls(!1,!1)},e={get(r){return ks(this,r,!1,!0)},get size(){return Ms(this)},has:Ds,add:sl,set:il,delete:rl,clear:ol,forEach:Ls(!1,!0)},n={get(r){return ks(this,r,!0)},get size(){return Ms(this,!0)},has(r){return Ds.call(this,r,!0)},add:Ct("add"),set:Ct("set"),delete:Ct("delete"),clear:Ct("clear"),forEach:Ls(!0,!1)},s={get(r){return ks(this,r,!0,!0)},get size(){return Ms(this,!0)},has(r){return Ds.call(this,r,!0)},add:Ct("add"),set:Ct("set"),delete:Ct("delete"),clear:Ct("clear"),forEach:Ls(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Fs(r,!1,!1),n[r]=Fs(r,!0,!1),e[r]=Fs(r,!1,!0),s[r]=Fs(r,!0,!0)}),[t,n,e,s]}const[gf,mf,yf,vf]=_f();function so(t,e){const n=e?t?vf:yf:t?mf:gf;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(G(n,i)&&i in s?n:s,i,r)}const Ef={get:so(!1,!1)},bf={get:so(!1,!0)},Cf={get:so(!0,!1)},ic=new WeakMap,rc=new WeakMap,oc=new WeakMap,wf=new WeakMap;function If(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Sf(t){return t.__v_skip||!Object.isExtensible(t)?0:If(Wh(t))}function gt(t){return Tn(t)?t:io(t,!1,sc,Ef,ic)}function lc(t){return io(t,!1,pf,bf,rc)}function ac(t){return io(t,!0,df,Cf,oc)}function io(t,e,n,s,i){if(!he(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Sf(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Rt(t){return Tn(t)?Rt(t.__v_raw):!!(t&&t.__v_isReactive)}function Tn(t){return!!(t&&t.__v_isReadonly)}function Ks(t){return!!(t&&t.__v_isShallow)}function cc(t){return Rt(t)||Tn(t)}function Q(t){const e=t&&t.__v_raw;return e?Q(e):t}function vi(t){return zs(t,"__v_skip",!0),t}const ls=t=>he(t)?gt(t):t,ro=t=>he(t)?ac(t):t;function uc(t){At&&Ke&&(t=Q(t),ec(t.dep||(t.dep=Zr())))}function hc(t,e){t=Q(t);const n=t.dep;n&&ur(n)}function pe(t){return!!(t&&t.__v_isRef===!0)}function Xt(t){return fc(t,!1)}function Tf(t){return fc(t,!0)}function fc(t,e){return pe(t)?t:new Af(t,e)}class Af{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Q(e),this._value=n?e:ls(e)}get value(){return uc(this),this._value}set value(e){const n=this.__v_isShallow||Ks(e)||Tn(e);e=n?e:Q(e),os(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ls(e),hc(this))}}function yn(t){return pe(t)?t.value:t}const Rf={get:(t,e,n)=>yn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return pe(i)&&!pe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function dc(t){return Rt(t)?t:new Proxy(t,Rf)}function xf(t){const e=H(t)?new Array(t.length):{};for(const n in t)e[n]=Pf(t,n);return e}class Nf{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return ef(Q(this._object),this._key)}}function Pf(t,e,n){const s=t[e];return pe(s)?s:new Nf(t,e,n)}class Of{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new eo(e,()=>{this._dirty||(this._dirty=!0,hc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=Q(this);return uc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function kf(t,e,n=!1){let s,i;const r=U(t);return r?(s=t,i=Je):(s=t.get,i=t.set),new Of(s,i,r||!i,n)}function xt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Ei(r,e,n)}return i}function Ze(t,e,n,s){if(U(t)){const r=xt(t,e,n,s);return r&&ja(r)&&r.catch(o=>{Ei(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Ze(t[r],e,n,s));return i}function Ei(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){xt(a,null,10,[t,o,l]);return}}Df(t,n,i,s)}function Df(t,e,n,s=!0){console.error(t)}let as=!1,hr=!1;const xe=[];let ot=0;const vn=[];let ht=null,jt=0;const pc=Promise.resolve();let oo=null;function zt(t){const e=oo||pc;return t?e.then(this?t.bind(this):t):e}function Mf(t){let e=ot+1,n=xe.length;for(;e<n;){const s=e+n>>>1;cs(xe[s])<t?e=s+1:n=s}return e}function lo(t){(!xe.length||!xe.includes(t,as&&t.allowRecurse?ot+1:ot))&&(t.id==null?xe.push(t):xe.splice(Mf(t.id),0,t),_c())}function _c(){!as&&!hr&&(hr=!0,oo=pc.then(mc))}function Lf(t){const e=xe.indexOf(t);e>ot&&xe.splice(e,1)}function Ff(t){H(t)?vn.push(...t):(!ht||!ht.includes(t,t.allowRecurse?jt+1:jt))&&vn.push(t),_c()}function ll(t,e=as?ot+1:0){for(;e<xe.length;e++){const n=xe[e];n&&n.pre&&(xe.splice(e,1),e--,n())}}function gc(t){if(vn.length){const e=[...new Set(vn)];if(vn.length=0,ht){ht.push(...e);return}for(ht=e,ht.sort((n,s)=>cs(n)-cs(s)),jt=0;jt<ht.length;jt++)ht[jt]();ht=null,jt=0}}const cs=t=>t.id==null?1/0:t.id,Bf=(t,e)=>{const n=cs(t)-cs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function mc(t){hr=!1,as=!0,xe.sort(Bf);const e=Je;try{for(ot=0;ot<xe.length;ot++){const n=xe[ot];n&&n.active!==!1&&xt(n,null,14)}}finally{ot=0,xe.length=0,gc(),as=!1,oo=null,(xe.length||vn.length)&&mc()}}function Hf(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ue;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||ue;f&&(i=n.map(_=>me(_)?_.trim():_)),h&&(i=n.map(jh))}let l,a=s[l=Hi(e)]||s[l=Hi(at(e))];!a&&r&&(a=s[l=Hi(Mn(e))]),a&&Ze(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Ze(c,t,6,i)}}function yc(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!U(t)){const a=c=>{const u=yc(c,e,!0);u&&(l=!0,Ce(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(he(t)&&s.set(t,null),null):(H(r)?r.forEach(a=>o[a]=null):Ce(o,r),he(t)&&s.set(t,o),o)}function bi(t,e){return!t||!pi(e)?!1:(e=e.slice(2).replace(/Once$/,""),G(t,e[0].toLowerCase()+e.slice(1))||G(t,Mn(e))||G(t,e))}let $e=null,vc=null;function Gs(t){const e=$e;return $e=t,vc=t&&t.type.__scopeId||null,e}function Wf(t,e=$e,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&yl(-1);const r=Gs(e);let o;try{o=t(...i)}finally{Gs(r),s._d&&yl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ui(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:u,renderCache:h,data:f,setupState:_,ctx:y,inheritAttrs:S}=t;let N,P;const k=Gs(t);try{if(n.shapeFlag&4){const M=i||s;N=rt(u.call(M,M,h,r,_,f,y)),P=a}else{const M=e;N=rt(M.length>1?M(r,{attrs:a,slots:l,emit:c}):M(r,null)),P=e.props?a:Uf(a)}}catch(M){Jn.length=0,Ei(M,t,1),N=Ne(Jt)}let j=N;if(P&&S!==!1){const M=Object.keys(P),{shapeFlag:se}=j;M.length&&se&7&&(o&&M.some(Kr)&&(P=$f(P,o)),j=An(j,P))}return n.dirs&&(j=An(j),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),N=j,Gs(k),N}const Uf=t=>{let e;for(const n in t)(n==="class"||n==="style"||pi(n))&&((e||(e={}))[n]=t[n]);return e},$f=(t,e)=>{const n={};for(const s in t)(!Kr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function jf(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?al(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!bi(c,f))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?al(s,o,c):!0:!!o;return!1}function al(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!bi(n,r))return!0}return!1}function Vf({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const zf=t=>t.__isSuspense;function qf(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):Ff(t)}const Bs={};function En(t,e,n){return Ec(t,e,n)}function Ec(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ue){var l;const a=Ya()===((l=Ee)==null?void 0:l.scope)?Ee:null;let c,u=!1,h=!1;if(pe(t)?(c=()=>t.value,u=Ks(t)):Rt(t)?(c=()=>t,s=!0):H(t)?(h=!0,u=t.some(M=>Rt(M)||Ks(M)),c=()=>t.map(M=>{if(pe(M))return M.value;if(Rt(M))return qt(M);if(U(M))return xt(M,a,2)})):U(t)?e?c=()=>xt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),Ze(t,a,3,[_])}:c=Je,e&&s){const M=c;c=()=>qt(M())}let f,_=M=>{f=k.onStop=()=>{xt(M,a,4)}},y;if(fs)if(_=Je,e?n&&Ze(e,a,3,[c(),h?[]:void 0,_]):c(),i==="sync"){const M=jd();y=M.__watcherHandles||(M.__watcherHandles=[])}else return Je;let S=h?new Array(t.length).fill(Bs):Bs;const N=()=>{if(k.active)if(e){const M=k.run();(s||u||(h?M.some((se,we)=>os(se,S[we])):os(M,S)))&&(f&&f(),Ze(e,a,3,[M,S===Bs?void 0:h&&S[0]===Bs?[]:S,_]),S=M)}else k.run()};N.allowRecurse=!!e;let P;i==="sync"?P=N:i==="post"?P=()=>ke(N,a&&a.suspense):(N.pre=!0,a&&(N.id=a.uid),P=()=>lo(N));const k=new eo(c,P);e?n?N():S=k.run():i==="post"?ke(k.run.bind(k),a&&a.suspense):k.run();const j=()=>{k.stop(),a&&a.scope&&Gr(a.scope.effects,k)};return y&&y.push(j),j}function Kf(t,e,n){const s=this.proxy,i=me(t)?t.includes(".")?bc(s,t):()=>s[t]:t.bind(s,s);let r;U(e)?r=e:(r=e.handler,n=e);const o=Ee;Rn(this);const l=Ec(i,r.bind(s),n);return o?Rn(o):Qt(),l}function bc(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function qt(t,e){if(!he(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),pe(t))qt(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)qt(t[n],e);else if($a(t)||mn(t))t.forEach(n=>{qt(n,e)});else if(za(t))for(const n in t)qt(t[n],e);return t}function zE(t,e){const n=$e;if(n===null)return t;const s=Ai(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,l,a,c=ue]=e[r];o&&(U(o)&&(o={mounted:o,updated:o}),o.deep&&qt(l),i.push({dir:o,instance:s,value:l,oldValue:void 0,arg:a,modifiers:c}))}return t}function Bt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(Ln(),Ze(a,n,8,[t.el,l,t,e]),Fn())}}function Ci(t,e){return U(t)?(()=>Ce({name:t.name},e,{setup:t}))():t}const $s=t=>!!t.type.__asyncLoader,Cc=t=>t.type.__isKeepAlive;function Gf(t,e){wc(t,"a",e)}function Qf(t,e){wc(t,"da",e)}function wc(t,e,n=Ee){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(wi(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Cc(i.parent.vnode)&&Yf(s,e,n,i),i=i.parent}}function Yf(t,e,n,s){const i=wi(e,t,s,!0);Ii(()=>{Gr(s[e],i)},n)}function wi(t,e,n=Ee,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ln(),Rn(n);const l=Ze(e,n,t,o);return Qt(),Fn(),l});return s?i.unshift(r):i.push(r),r}}const yt=t=>(e,n=Ee)=>(!fs||t==="sp")&&wi(t,(...s)=>e(...s),n),Xf=yt("bm"),ao=yt("m"),Jf=yt("bu"),Zf=yt("u"),ed=yt("bum"),Ii=yt("um"),td=yt("sp"),nd=yt("rtg"),sd=yt("rtc");function id(t,e=Ee){wi("ec",t,e)}const Ic="components",rd="directives";function od(t,e){return Sc(Ic,t,!0,e)||t}const ld=Symbol.for("v-ndc");function qE(t){return Sc(rd,t)}function Sc(t,e,n=!0,s=!1){const i=$e||Ee;if(i){const r=i.type;if(t===Ic){const l=Wd(r,!1);if(l&&(l===e||l===at(e)||l===mi(at(e))))return r}const o=cl(i[t]||r[t],e)||cl(i.appContext[t],e);return!o&&s?r:o}}function cl(t,e){return t&&(t[e]||t[at(e)]||t[mi(at(e))])}function KE(t,e,n,s){let i;const r=n&&n[s];if(H(t)||me(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(he(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];i[l]=e(t[c],c,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}const fr=t=>t?Bc(t)?Ai(t)||t.proxy:fr(t.parent):null,Xn=Ce(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>fr(t.parent),$root:t=>fr(t.root),$emit:t=>t.emit,$options:t=>co(t),$forceUpdate:t=>t.f||(t.f=()=>lo(t.update)),$nextTick:t=>t.n||(t.n=zt.bind(t.proxy)),$watch:t=>Kf.bind(t)}),$i=(t,e)=>t!==ue&&!t.__isScriptSetup&&G(t,e),ad={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if($i(s,e))return o[e]=1,s[e];if(i!==ue&&G(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&G(c,e))return o[e]=3,r[e];if(n!==ue&&G(n,e))return o[e]=4,n[e];dr&&(o[e]=0)}}const u=Xn[e];let h,f;if(u)return e==="$attrs"&&Fe(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==ue&&G(n,e))return o[e]=4,n[e];if(f=a.config.globalProperties,G(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return $i(i,e)?(i[e]=n,!0):s!==ue&&G(s,e)?(s[e]=n,!0):G(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==ue&&G(t,o)||$i(e,o)||(l=r[0])&&G(l,o)||G(s,o)||G(Xn,o)||G(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:G(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ul(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let dr=!0;function cd(t){const e=co(t),n=t.proxy,s=t.ctx;dr=!1,e.beforeCreate&&hl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:_,updated:y,activated:S,deactivated:N,beforeDestroy:P,beforeUnmount:k,destroyed:j,unmounted:M,render:se,renderTracked:we,renderTriggered:Ie,errorCaptured:Y,serverPrefetch:K,expose:de,inheritAttrs:Se,components:He,directives:Ve,filters:Ft}=e;if(c&&ud(c,s,null),o)for(const ie in o){const Z=o[ie];U(Z)&&(s[ie]=Z.bind(n))}if(i){const ie=i.call(n,n);he(ie)&&(t.data=gt(ie))}if(dr=!0,r)for(const ie in r){const Z=r[ie],ct=U(Z)?Z.bind(n,n):U(Z.get)?Z.get.bind(n,n):Je,bt=!U(Z)&&U(Z.set)?Z.set.bind(n):Je,nt=De({get:ct,set:bt});Object.defineProperty(s,ie,{enumerable:!0,configurable:!0,get:()=>nt.value,set:Oe=>nt.value=Oe})}if(l)for(const ie in l)Tc(l[ie],s,n,ie);if(a){const ie=U(a)?a.call(n):a;Reflect.ownKeys(ie).forEach(Z=>{js(Z,ie[Z])})}u&&hl(u,t,"c");function X(ie,Z){H(Z)?Z.forEach(ct=>ie(ct.bind(n))):Z&&ie(Z.bind(n))}if(X(Xf,h),X(ao,f),X(Jf,_),X(Zf,y),X(Gf,S),X(Qf,N),X(id,Y),X(sd,we),X(nd,Ie),X(ed,k),X(Ii,M),X(td,K),H(de))if(de.length){const ie=t.exposed||(t.exposed={});de.forEach(Z=>{Object.defineProperty(ie,Z,{get:()=>n[Z],set:ct=>n[Z]=ct})})}else t.exposed||(t.exposed={});se&&t.render===Je&&(t.render=se),Se!=null&&(t.inheritAttrs=Se),He&&(t.components=He),Ve&&(t.directives=Ve)}function ud(t,e,n=Je){H(t)&&(t=pr(t));for(const s in t){const i=t[s];let r;he(i)?"default"in i?r=lt(i.from||s,i.default,!0):r=lt(i.from||s):r=lt(i),pe(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function hl(t,e,n){Ze(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Tc(t,e,n,s){const i=s.includes(".")?bc(n,s):()=>n[s];if(me(t)){const r=e[t];U(r)&&En(i,r)}else if(U(t))En(i,t.bind(n));else if(he(t))if(H(t))t.forEach(r=>Tc(r,e,n,s));else{const r=U(t.handler)?t.handler.bind(n):e[t.handler];U(r)&&En(i,r,t)}}function co(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>Qs(a,c,o,!0)),Qs(a,e,o)),he(e)&&r.set(e,a),a}function Qs(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Qs(t,r,n,!0),i&&i.forEach(o=>Qs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=hd[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const hd={data:fl,props:dl,emits:dl,methods:Qn,computed:Qn,beforeCreate:Pe,created:Pe,beforeMount:Pe,mounted:Pe,beforeUpdate:Pe,updated:Pe,beforeDestroy:Pe,beforeUnmount:Pe,destroyed:Pe,unmounted:Pe,activated:Pe,deactivated:Pe,errorCaptured:Pe,serverPrefetch:Pe,components:Qn,directives:Qn,watch:dd,provide:fl,inject:fd};function fl(t,e){return e?t?function(){return Ce(U(t)?t.call(this,this):t,U(e)?e.call(this,this):e)}:e:t}function fd(t,e){return Qn(pr(t),pr(e))}function pr(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Pe(t,e){return t?[...new Set([].concat(t,e))]:e}function Qn(t,e){return t?Ce(Object.create(null),t,e):e}function dl(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:Ce(Object.create(null),ul(t),ul(e??{})):e}function dd(t,e){if(!t)return e;if(!e)return t;const n=Ce(Object.create(null),t);for(const s in e)n[s]=Pe(t[s],e[s]);return n}function Ac(){return{app:null,config:{isNativeTag:Fh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pd=0;function _d(t,e){return function(s,i=null){U(s)||(s=Ce({},s)),i!=null&&!he(i)&&(i=null);const r=Ac(),o=new Set;let l=!1;const a=r.app={_uid:pd++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Vd,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&U(c.install)?(o.add(c),c.install(a,...u)):U(c)&&(o.add(c),c(a,...u))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,u){return u?(r.components[c]=u,a):r.components[c]},directive(c,u){return u?(r.directives[c]=u,a):r.directives[c]},mount(c,u,h){if(!l){const f=Ne(s,i);return f.appContext=r,u&&e?e(f,c):t(f,c,h),l=!0,a._container=c,c.__vue_app__=a,Ai(f.component)||f.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return r.provides[c]=u,a},runWithContext(c){us=a;try{return c()}finally{us=null}}};return a}}let us=null;function js(t,e){if(Ee){let n=Ee.provides;const s=Ee.parent&&Ee.parent.provides;s===n&&(n=Ee.provides=Object.create(s)),n[t]=e}}function lt(t,e,n=!1){const s=Ee||$e;if(s||us){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:us._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&U(e)?e.call(s&&s.proxy):e}}function gd(){return!!(Ee||$e||us)}function md(t,e,n,s=!1){const i={},r={};zs(r,Ti,1),t.propsDefaults=Object.create(null),Rc(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:lc(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function yd(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=Q(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(bi(t.emitsOptions,f))continue;const _=e[f];if(a)if(G(r,f))_!==r[f]&&(r[f]=_,c=!0);else{const y=at(f);i[y]=_r(a,l,y,_,t,!1)}else _!==r[f]&&(r[f]=_,c=!0)}}}else{Rc(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!G(e,h)&&((u=Mn(h))===h||!G(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=_r(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!G(e,h))&&(delete r[h],c=!0)}c&&_t(t,"set","$attrs")}function Rc(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(Us(a))continue;const c=e[a];let u;i&&G(i,u=at(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:bi(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=Q(n),c=l||ue;for(let u=0;u<r.length;u++){const h=r[u];n[h]=_r(i,a,h,c[h],t,!G(c,h))}}return o}function _r(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=G(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&U(a)){const{propsDefaults:c}=i;n in c?s=c[n]:(Rn(i),s=c[n]=a.call(null,e),Qt())}else s=a}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===Mn(n))&&(s=!0))}return s}function xc(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!U(t)){const u=h=>{a=!0;const[f,_]=xc(h,e,!0);Ce(o,f),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return he(t)&&s.set(t,gn),gn;if(H(r))for(let u=0;u<r.length;u++){const h=at(r[u]);pl(h)&&(o[h]=ue)}else if(r)for(const u in r){const h=at(u);if(pl(h)){const f=r[u],_=o[h]=H(f)||U(f)?{type:f}:Ce({},f);if(_){const y=ml(Boolean,_.type),S=ml(String,_.type);_[0]=y>-1,_[1]=S<0||y<S,(y>-1||G(_,"default"))&&l.push(h)}}}const c=[o,l];return he(t)&&s.set(t,c),c}function pl(t){return t[0]!=="$"}function _l(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function gl(t,e){return _l(t)===_l(e)}function ml(t,e){return H(e)?e.findIndex(n=>gl(n,t)):U(e)&&gl(e,t)?0:-1}const Nc=t=>t[0]==="_"||t==="$stable",uo=t=>H(t)?t.map(rt):[rt(t)],vd=(t,e,n)=>{if(e._n)return e;const s=Wf((...i)=>uo(e(...i)),n);return s._c=!1,s},Pc=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Nc(i))continue;const r=t[i];if(U(r))e[i]=vd(i,r,s);else if(r!=null){const o=uo(r);e[i]=()=>o}}},Oc=(t,e)=>{const n=uo(e);t.slots.default=()=>n},Ed=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Q(e),zs(e,"_",n)):Pc(e,t.slots={})}else t.slots={},e&&Oc(t,e);zs(t.slots,Ti,1)},bd=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ue;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(Ce(i,e),!n&&l===1&&delete i._):(r=!e.$stable,Pc(e,i)),o=e}else e&&(Oc(t,e),o={default:1});if(r)for(const l in i)!Nc(l)&&!(l in o)&&delete i[l]};function gr(t,e,n,s,i=!1){if(H(t)){t.forEach((f,_)=>gr(f,e&&(H(e)?e[_]:e),n,s,i));return}if($s(s)&&!i)return;const r=s.shapeFlag&4?Ai(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===ue?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(me(c)?(u[c]=null,G(h,c)&&(h[c]=null)):pe(c)&&(c.value=null)),U(a))xt(a,l,12,[o,u]);else{const f=me(a),_=pe(a);if(f||_){const y=()=>{if(t.f){const S=f?G(h,a)?h[a]:u[a]:a.value;i?H(S)&&Gr(S,r):H(S)?S.includes(r)||S.push(r):f?(u[a]=[r],G(h,a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else f?(u[a]=o,G(h,a)&&(h[a]=o)):_&&(a.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,ke(y,n)):y()}}}const ke=qf;function Cd(t){return wd(t)}function wd(t,e){const n=lr();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:_=Je,insertStaticContent:y}=t,S=(d,p,g,m=null,E=null,b=null,R=!1,I=null,T=!!p.dynamicChildren)=>{if(d===p)return;d&&!$n(d,p)&&(m=v(d),Oe(d,E,b,!0),d=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:C,ref:L,shapeFlag:O}=p;switch(C){case Si:N(d,p,g,m);break;case Jt:P(d,p,g,m);break;case ji:d==null&&k(p,g,m,R);break;case ft:He(d,p,g,m,E,b,R,I,T);break;default:O&1?se(d,p,g,m,E,b,R,I,T):O&6?Ve(d,p,g,m,E,b,R,I,T):(O&64||O&128)&&C.process(d,p,g,m,E,b,R,I,T,A)}L!=null&&E&&gr(L,d&&d.ref,b,p||d,!p)},N=(d,p,g,m)=>{if(d==null)s(p.el=l(p.children),g,m);else{const E=p.el=d.el;p.children!==d.children&&c(E,p.children)}},P=(d,p,g,m)=>{d==null?s(p.el=a(p.children||""),g,m):p.el=d.el},k=(d,p,g,m)=>{[d.el,d.anchor]=y(d.children,p,g,m,d.el,d.anchor)},j=({el:d,anchor:p},g,m)=>{let E;for(;d&&d!==p;)E=f(d),s(d,g,m),d=E;s(p,g,m)},M=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=f(d),i(d),d=g;i(p)},se=(d,p,g,m,E,b,R,I,T)=>{R=R||p.type==="svg",d==null?we(p,g,m,E,b,R,I,T):K(d,p,E,b,R,I,T)},we=(d,p,g,m,E,b,R,I)=>{let T,C;const{type:L,props:O,shapeFlag:F,transition:W,dirs:q}=d;if(T=d.el=o(d.type,b,O&&O.is,O),F&8?u(T,d.children):F&16&&Y(d.children,T,null,m,E,b&&L!=="foreignObject",R,I),q&&Bt(d,null,m,"created"),Ie(T,d,d.scopeId,R,m),O){for(const ne in O)ne!=="value"&&!Us(ne)&&r(T,ne,null,O[ne],b,d.children,m,E,Te);"value"in O&&r(T,"value",null,O.value),(C=O.onVnodeBeforeMount)&&it(C,m,d)}q&&Bt(d,null,m,"beforeMount");const oe=(!E||E&&!E.pendingBranch)&&W&&!W.persisted;oe&&W.beforeEnter(T),s(T,p,g),((C=O&&O.onVnodeMounted)||oe||q)&&ke(()=>{C&&it(C,m,d),oe&&W.enter(T),q&&Bt(d,null,m,"mounted")},E)},Ie=(d,p,g,m,E)=>{if(g&&_(d,g),m)for(let b=0;b<m.length;b++)_(d,m[b]);if(E){let b=E.subTree;if(p===b){const R=E.vnode;Ie(d,R,R.scopeId,R.slotScopeIds,E.parent)}}},Y=(d,p,g,m,E,b,R,I,T=0)=>{for(let C=T;C<d.length;C++){const L=d[C]=I?St(d[C]):rt(d[C]);S(null,L,p,g,m,E,b,R,I)}},K=(d,p,g,m,E,b,R)=>{const I=p.el=d.el;let{patchFlag:T,dynamicChildren:C,dirs:L}=p;T|=d.patchFlag&16;const O=d.props||ue,F=p.props||ue;let W;g&&Ht(g,!1),(W=F.onVnodeBeforeUpdate)&&it(W,g,p,d),L&&Bt(p,d,g,"beforeUpdate"),g&&Ht(g,!0);const q=E&&p.type!=="foreignObject";if(C?de(d.dynamicChildren,C,I,g,m,q,b):R||Z(d,p,I,null,g,m,q,b,!1),T>0){if(T&16)Se(I,p,O,F,g,m,E);else if(T&2&&O.class!==F.class&&r(I,"class",null,F.class,E),T&4&&r(I,"style",O.style,F.style,E),T&8){const oe=p.dynamicProps;for(let ne=0;ne<oe.length;ne++){const _e=oe[ne],qe=O[_e],cn=F[_e];(cn!==qe||_e==="value")&&r(I,_e,qe,cn,E,d.children,g,m,Te)}}T&1&&d.children!==p.children&&u(I,p.children)}else!R&&C==null&&Se(I,p,O,F,g,m,E);((W=F.onVnodeUpdated)||L)&&ke(()=>{W&&it(W,g,p,d),L&&Bt(p,d,g,"updated")},m)},de=(d,p,g,m,E,b,R)=>{for(let I=0;I<p.length;I++){const T=d[I],C=p[I],L=T.el&&(T.type===ft||!$n(T,C)||T.shapeFlag&70)?h(T.el):g;S(T,C,L,null,m,E,b,R,!0)}},Se=(d,p,g,m,E,b,R)=>{if(g!==m){if(g!==ue)for(const I in g)!Us(I)&&!(I in m)&&r(d,I,g[I],null,R,p.children,E,b,Te);for(const I in m){if(Us(I))continue;const T=m[I],C=g[I];T!==C&&I!=="value"&&r(d,I,C,T,R,p.children,E,b,Te)}"value"in m&&r(d,"value",g.value,m.value)}},He=(d,p,g,m,E,b,R,I,T)=>{const C=p.el=d?d.el:l(""),L=p.anchor=d?d.anchor:l("");let{patchFlag:O,dynamicChildren:F,slotScopeIds:W}=p;W&&(I=I?I.concat(W):W),d==null?(s(C,g,m),s(L,g,m),Y(p.children,g,L,E,b,R,I,T)):O>0&&O&64&&F&&d.dynamicChildren?(de(d.dynamicChildren,F,g,E,b,R,I),(p.key!=null||E&&p===E.subTree)&&kc(d,p,!0)):Z(d,p,g,L,E,b,R,I,T)},Ve=(d,p,g,m,E,b,R,I,T)=>{p.slotScopeIds=I,d==null?p.shapeFlag&512?E.ctx.activate(p,g,m,R,T):Ft(p,g,m,E,b,R,T):ze(d,p,T)},Ft=(d,p,g,m,E,b,R)=>{const I=d.component=Md(d,m,E);if(Cc(d)&&(I.ctx.renderer=A),Ld(I),I.asyncDep){if(E&&E.registerDep(I,X),!d.el){const T=I.subTree=Ne(Jt);P(null,T,p,g)}return}X(I,d,p,g,E,b,R)},ze=(d,p,g)=>{const m=p.component=d.component;if(jf(d,p,g))if(m.asyncDep&&!m.asyncResolved){ie(m,p,g);return}else m.next=p,Lf(m.update),m.update();else p.el=d.el,m.vnode=p},X=(d,p,g,m,E,b,R)=>{const I=()=>{if(d.isMounted){let{next:L,bu:O,u:F,parent:W,vnode:q}=d,oe=L,ne;Ht(d,!1),L?(L.el=q.el,ie(d,L,R)):L=q,O&&Wi(O),(ne=L.props&&L.props.onVnodeBeforeUpdate)&&it(ne,W,L,q),Ht(d,!0);const _e=Ui(d),qe=d.subTree;d.subTree=_e,S(qe,_e,h(qe.el),v(qe),d,E,b),L.el=_e.el,oe===null&&Vf(d,_e.el),F&&ke(F,E),(ne=L.props&&L.props.onVnodeUpdated)&&ke(()=>it(ne,W,L,q),E)}else{let L;const{el:O,props:F}=p,{bm:W,m:q,parent:oe}=d,ne=$s(p);if(Ht(d,!1),W&&Wi(W),!ne&&(L=F&&F.onVnodeBeforeMount)&&it(L,oe,p),Ht(d,!0),O&&ee){const _e=()=>{d.subTree=Ui(d),ee(O,d.subTree,d,E,null)};ne?p.type.__asyncLoader().then(()=>!d.isUnmounted&&_e()):_e()}else{const _e=d.subTree=Ui(d);S(null,_e,g,m,d,E,b),p.el=_e.el}if(q&&ke(q,E),!ne&&(L=F&&F.onVnodeMounted)){const _e=p;ke(()=>it(L,oe,_e),E)}(p.shapeFlag&256||oe&&$s(oe.vnode)&&oe.vnode.shapeFlag&256)&&d.a&&ke(d.a,E),d.isMounted=!0,p=g=m=null}},T=d.effect=new eo(I,()=>lo(C),d.scope),C=d.update=()=>T.run();C.id=d.uid,Ht(d,!0),C()},ie=(d,p,g)=>{p.component=d;const m=d.vnode.props;d.vnode=p,d.next=null,yd(d,p.props,m,g),bd(d,p.children,g),Ln(),ll(),Fn()},Z=(d,p,g,m,E,b,R,I,T=!1)=>{const C=d&&d.children,L=d?d.shapeFlag:0,O=p.children,{patchFlag:F,shapeFlag:W}=p;if(F>0){if(F&128){bt(C,O,g,m,E,b,R,I,T);return}else if(F&256){ct(C,O,g,m,E,b,R,I,T);return}}W&8?(L&16&&Te(C,E,b),O!==C&&u(g,O)):L&16?W&16?bt(C,O,g,m,E,b,R,I,T):Te(C,E,b,!0):(L&8&&u(g,""),W&16&&Y(O,g,m,E,b,R,I,T))},ct=(d,p,g,m,E,b,R,I,T)=>{d=d||gn,p=p||gn;const C=d.length,L=p.length,O=Math.min(C,L);let F;for(F=0;F<O;F++){const W=p[F]=T?St(p[F]):rt(p[F]);S(d[F],W,g,null,E,b,R,I,T)}C>L?Te(d,E,b,!0,!1,O):Y(p,g,m,E,b,R,I,T,O)},bt=(d,p,g,m,E,b,R,I,T)=>{let C=0;const L=p.length;let O=d.length-1,F=L-1;for(;C<=O&&C<=F;){const W=d[C],q=p[C]=T?St(p[C]):rt(p[C]);if($n(W,q))S(W,q,g,null,E,b,R,I,T);else break;C++}for(;C<=O&&C<=F;){const W=d[O],q=p[F]=T?St(p[F]):rt(p[F]);if($n(W,q))S(W,q,g,null,E,b,R,I,T);else break;O--,F--}if(C>O){if(C<=F){const W=F+1,q=W<L?p[W].el:m;for(;C<=F;)S(null,p[C]=T?St(p[C]):rt(p[C]),g,q,E,b,R,I,T),C++}}else if(C>F)for(;C<=O;)Oe(d[C],E,b,!0),C++;else{const W=C,q=C,oe=new Map;for(C=q;C<=F;C++){const We=p[C]=T?St(p[C]):rt(p[C]);We.key!=null&&oe.set(We.key,C)}let ne,_e=0;const qe=F-q+1;let cn=!1,Yo=0;const Un=new Array(qe);for(C=0;C<qe;C++)Un[C]=0;for(C=W;C<=O;C++){const We=d[C];if(_e>=qe){Oe(We,E,b,!0);continue}let st;if(We.key!=null)st=oe.get(We.key);else for(ne=q;ne<=F;ne++)if(Un[ne-q]===0&&$n(We,p[ne])){st=ne;break}st===void 0?Oe(We,E,b,!0):(Un[st-q]=C+1,st>=Yo?Yo=st:cn=!0,S(We,p[st],g,null,E,b,R,I,T),_e++)}const Xo=cn?Id(Un):gn;for(ne=Xo.length-1,C=qe-1;C>=0;C--){const We=q+C,st=p[We],Jo=We+1<L?p[We+1].el:m;Un[C]===0?S(null,st,g,Jo,E,b,R,I,T):cn&&(ne<0||C!==Xo[ne]?nt(st,g,Jo,2):ne--)}}},nt=(d,p,g,m,E=null)=>{const{el:b,type:R,transition:I,children:T,shapeFlag:C}=d;if(C&6){nt(d.component.subTree,p,g,m);return}if(C&128){d.suspense.move(p,g,m);return}if(C&64){R.move(d,p,g,A);return}if(R===ft){s(b,p,g);for(let O=0;O<T.length;O++)nt(T[O],p,g,m);s(d.anchor,p,g);return}if(R===ji){j(d,p,g);return}if(m!==2&&C&1&&I)if(m===0)I.beforeEnter(b),s(b,p,g),ke(()=>I.enter(b),E);else{const{leave:O,delayLeave:F,afterLeave:W}=I,q=()=>s(b,p,g),oe=()=>{O(b,()=>{q(),W&&W()})};F?F(b,q,oe):oe()}else s(b,p,g)},Oe=(d,p,g,m=!1,E=!1)=>{const{type:b,props:R,ref:I,children:T,dynamicChildren:C,shapeFlag:L,patchFlag:O,dirs:F}=d;if(I!=null&&gr(I,null,g,d,!0),L&256){p.ctx.deactivate(d);return}const W=L&1&&F,q=!$s(d);let oe;if(q&&(oe=R&&R.onVnodeBeforeUnmount)&&it(oe,p,d),L&6)Os(d.component,g,m);else{if(L&128){d.suspense.unmount(g,m);return}W&&Bt(d,null,p,"beforeUnmount"),L&64?d.type.remove(d,p,g,E,A,m):C&&(b!==ft||O>0&&O&64)?Te(C,p,g,!1,!0):(b===ft&&O&384||!E&&L&16)&&Te(T,p,g),m&&ln(d)}(q&&(oe=R&&R.onVnodeUnmounted)||W)&&ke(()=>{oe&&it(oe,p,d),W&&Bt(d,null,p,"unmounted")},g)},ln=d=>{const{type:p,el:g,anchor:m,transition:E}=d;if(p===ft){an(g,m);return}if(p===ji){M(d);return}const b=()=>{i(g),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(d.shapeFlag&1&&E&&!E.persisted){const{leave:R,delayLeave:I}=E,T=()=>R(g,b);I?I(d.el,b,T):T()}else b()},an=(d,p)=>{let g;for(;d!==p;)g=f(d),i(d),d=g;i(p)},Os=(d,p,g)=>{const{bum:m,scope:E,update:b,subTree:R,um:I}=d;m&&Wi(m),E.stop(),b&&(b.active=!1,Oe(R,d,p,g)),I&&ke(I,p),ke(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Te=(d,p,g,m=!1,E=!1,b=0)=>{for(let R=b;R<d.length;R++)Oe(d[R],p,g,m,E)},v=d=>d.shapeFlag&6?v(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),x=(d,p,g)=>{d==null?p._vnode&&Oe(p._vnode,null,null,!0):S(p._vnode||null,d,p,null,null,null,g),ll(),gc(),p._vnode=d},A={p:S,um:Oe,m:nt,r:ln,mt:Ft,mc:Y,pc:Z,pbc:de,n:v,o:t};let D,ee;return e&&([D,ee]=e(A)),{render:x,hydrate:D,createApp:_d(x,D)}}function Ht({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function kc(t,e,n=!1){const s=t.children,i=e.children;if(H(s)&&H(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=St(i[r]),l.el=o.el),n||kc(o,l)),l.type===Si&&(l.el=o.el)}}function Id(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Sd=t=>t.__isTeleport,ft=Symbol.for("v-fgt"),Si=Symbol.for("v-txt"),Jt=Symbol.for("v-cmt"),ji=Symbol.for("v-stc"),Jn=[];let Qe=null;function Dc(t=!1){Jn.push(Qe=t?null:[])}function Td(){Jn.pop(),Qe=Jn[Jn.length-1]||null}let hs=1;function yl(t){hs+=t}function Mc(t){return t.dynamicChildren=hs>0?Qe||gn:null,Td(),hs>0&&Qe&&Qe.push(t),t}function Ad(t,e,n,s,i,r){return Mc(Fc(t,e,n,s,i,r,!0))}function Rd(t,e,n,s,i){return Mc(Ne(t,e,n,s,i,!0))}function mr(t){return t?t.__v_isVNode===!0:!1}function $n(t,e){return t.type===e.type&&t.key===e.key}const Ti="__vInternal",Lc=({key:t})=>t??null,Vs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?me(t)||pe(t)||U(t)?{i:$e,r:t,k:e,f:!!n}:t:null);function Fc(t,e=null,n=null,s=0,i=null,r=t===ft?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Lc(e),ref:e&&Vs(e),scopeId:vc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:$e};return l?(ho(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=me(n)?8:16),hs>0&&!o&&Qe&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Qe.push(a),a}const Ne=xd;function xd(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===ld)&&(t=Jt),mr(t)){const l=An(t,e,!0);return n&&ho(l,n),hs>0&&!r&&Qe&&(l.shapeFlag&6?Qe[Qe.indexOf(t)]=l:Qe.push(l)),l.patchFlag|=-2,l}if(Ud(t)&&(t=t.__vccOpts),e){e=Nd(e);let{class:l,style:a}=e;l&&!me(l)&&(e.class=Jr(l)),he(a)&&(cc(a)&&!H(a)&&(a=Ce({},a)),e.style=Xr(a))}const o=me(t)?1:zf(t)?128:Sd(t)?64:he(t)?4:U(t)?2:0;return Fc(t,e,n,s,i,o,r,!0)}function Nd(t){return t?cc(t)||Ti in t?Ce({},t):t:null}function An(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?Od(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Lc(l),ref:e&&e.ref?n&&i?H(i)?i.concat(Vs(e)):[i,Vs(e)]:Vs(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ft?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&An(t.ssContent),ssFallback:t.ssFallback&&An(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Pd(t=" ",e=0){return Ne(Si,null,t,e)}function GE(t="",e=!1){return e?(Dc(),Rd(Jt,null,t)):Ne(Jt,null,t)}function rt(t){return t==null||typeof t=="boolean"?Ne(Jt):H(t)?Ne(ft,null,t.slice()):typeof t=="object"?St(t):Ne(Si,null,String(t))}function St(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:An(t)}function ho(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),ho(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Ti in e)?e._ctx=$e:i===3&&$e&&($e.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else U(e)?(e={default:e,_ctx:$e},n=32):(e=String(e),s&64?(n=16,e=[Pd(e)]):n=8);t.children=e,t.shapeFlag|=n}function Od(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Jr([e.class,s.class]));else if(i==="style")e.style=Xr([e.style,s.style]);else if(pi(i)){const r=e[i],o=s[i];o&&r!==o&&!(H(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function it(t,e,n,s=null){Ze(t,e,7,[n,s])}const kd=Ac();let Dd=0;function Md(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||kd,r={uid:Dd++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ga(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xc(s,i),emitsOptions:yc(s,i),emit:null,emitted:null,propsDefaults:ue,inheritAttrs:s.inheritAttrs,ctx:ue,data:ue,props:ue,attrs:ue,slots:ue,refs:ue,setupState:ue,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Hf.bind(null,r),t.ce&&t.ce(r),r}let Ee=null,fo,un,vl="__VUE_INSTANCE_SETTERS__";(un=lr()[vl])||(un=lr()[vl]=[]),un.push(t=>Ee=t),fo=t=>{un.length>1?un.forEach(e=>e(t)):un[0](t)};const Rn=t=>{fo(t),t.scope.on()},Qt=()=>{Ee&&Ee.scope.off(),fo(null)};function Bc(t){return t.vnode.shapeFlag&4}let fs=!1;function Ld(t,e=!1){fs=e;const{props:n,children:s}=t.vnode,i=Bc(t);md(t,n,i,e),Ed(t,s);const r=i?Fd(t,e):void 0;return fs=!1,r}function Fd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=vi(new Proxy(t.ctx,ad));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Hd(t):null;Rn(t),Ln();const r=xt(s,t,0,[t.props,i]);if(Fn(),Qt(),ja(r)){if(r.then(Qt,Qt),e)return r.then(o=>{El(t,o,e)}).catch(o=>{Ei(o,t,0)});t.asyncDep=r}else El(t,r,e)}else Hc(t,e)}function El(t,e,n){U(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:he(e)&&(t.setupState=dc(e)),Hc(t,n)}let bl;function Hc(t,e,n){const s=t.type;if(!t.render){if(!e&&bl&&!s.render){const i=s.template||co(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=Ce(Ce({isCustomElement:r,delimiters:l},o),a);s.render=bl(i,c)}}t.render=s.render||Je}Rn(t),Ln(),cd(t),Fn(),Qt()}function Bd(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Fe(t,"get","$attrs"),e[n]}}))}function Hd(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Bd(t)},slots:t.slots,emit:t.emit,expose:e}}function Ai(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(dc(vi(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Xn)return Xn[n](t)},has(e,n){return n in e||n in Xn}}))}function Wd(t,e=!0){return U(t)?t.displayName||t.name:t.name||e&&t.__name}function Ud(t){return U(t)&&"__vccOpts"in t}const De=(t,e)=>kf(t,e,fs);function Wc(t,e,n){const s=arguments.length;return s===2?he(e)&&!H(e)?mr(e)?Ne(t,null,[e]):Ne(t,e):Ne(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&mr(n)&&(n=[n]),Ne(t,e,n))}const $d=Symbol.for("v-scx"),jd=()=>lt($d),Vd="3.3.4",zd="http://www.w3.org/2000/svg",Vt=typeof document<"u"?document:null,Cl=Vt&&Vt.createElement("template"),qd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Vt.createElementNS(zd,t):Vt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Vt.createTextNode(t),createComment:t=>Vt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Vt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Cl.innerHTML=s?`<svg>${t}</svg>`:t;const l=Cl.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Kd(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Gd(t,e,n){const s=t.style,i=me(n);if(n&&!i){if(e&&!me(e))for(const r in e)n[r]==null&&yr(s,r,"");for(const r in n)yr(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const wl=/\s*!important$/;function yr(t,e,n){if(H(n))n.forEach(s=>yr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Qd(t,e);wl.test(n)?t.setProperty(Mn(s),n.replace(wl,""),"important"):t[s]=n}}const Il=["Webkit","Moz","ms"],Vi={};function Qd(t,e){const n=Vi[e];if(n)return n;let s=at(e);if(s!=="filter"&&s in t)return Vi[e]=s;s=mi(s);for(let i=0;i<Il.length;i++){const r=Il[i]+s;if(r in t)return Vi[e]=r}return e}const Sl="http://www.w3.org/1999/xlink";function Yd(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Sl,e.slice(6,e.length)):t.setAttributeNS(Sl,e,n);else{const r=Qh(e);n==null||r&&!qa(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Xd(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const l=t.tagName;if(e==="value"&&l!=="PROGRESS"&&!l.includes("-")){t._value=n;const c=l==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=qa(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Jd(t,e,n,s){t.addEventListener(e,n,s)}function Zd(t,e,n,s){t.removeEventListener(e,n,s)}function ep(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=tp(e);if(s){const c=r[e]=ip(s,i);Jd(t,l,c,a)}else o&&(Zd(t,l,o,a),r[e]=void 0)}}const Tl=/(?:Once|Passive|Capture)$/;function tp(t){let e;if(Tl.test(t)){e={};let s;for(;s=t.match(Tl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Mn(t.slice(2)),e]}let zi=0;const np=Promise.resolve(),sp=()=>zi||(np.then(()=>zi=0),zi=Date.now());function ip(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ze(rp(s,n.value),e,5,[s])};return n.value=t,n.attached=sp(),n}function rp(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Al=/^on[a-z]/,op=(t,e,n,s,i=!1,r,o,l,a)=>{e==="class"?Kd(t,s,i):e==="style"?Gd(t,n,s):pi(e)?Kr(e)||ep(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):lp(t,e,s,i))?Xd(t,e,s,r,o,l,a):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Yd(t,e,s,i))};function lp(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Al.test(e)&&U(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Al.test(e)&&me(n)?!1:e in t}const ap=Ce({patchProp:op},qd);let Rl;function cp(){return Rl||(Rl=Cd(ap))}const up=(...t)=>{const e=cp().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=hp(s);if(!i)return;const r=e._component;!U(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function hp(t){return me(t)?document.querySelector(t):t}const fp=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},dp={},pp={id:"app"};function _p(t,e){const n=od("router-view");return Dc(),Ad("div",pp,[Ne(n)])}const gp=fp(dp,[["render",_p]]);/*!
 * Vue-Lazyload.js v3.0.0
 * (c) 2023 Awe <hilongjw@gmail.com>
 * Released under the MIT License.
 */function Uc(t,e){return e={exports:{}},t(e,e.exports),e.exports}var vr=Uc(function(t){const e=Object.prototype.toString,n=Object.prototype.propertyIsEnumerable,s=Object.getOwnPropertySymbols;t.exports=(r,...o)=>{if(!i(r))throw new TypeError("expected the first argument to be an object");if(o.length===0||typeof Symbol!="function"||typeof s!="function")return r;for(let l of o){let a=s(l);for(let c of a)n.call(l,c)&&(r[c]=l[c])}return r};function i(r){return typeof r=="function"||e.call(r)==="[object Object]"||Array.isArray(r)}}),xl=Object.freeze({__proto__:null,default:vr,__moduleExports:vr}),mp=xl&&vr||xl,Nl=Uc(function(t){const e=Object.prototype.toString,n=o=>o!=="__proto__"&&o!=="constructor"&&o!=="prototype",s=t.exports=(o,...l)=>{let a=0;for(r(o)&&(o=l[a++]),o||(o={});a<l.length;a++)if(i(l[a])){for(const c of Object.keys(l[a]))n(c)&&(i(o[c])&&i(l[a][c])?s(o[c],l[a][c]):o[c]=l[a][c]);mp(o,l[a])}return o};function i(o){return typeof o=="function"||e.call(o)==="[object Object]"}function r(o){return typeof o=="object"?o===null:typeof o!="function"}});const Dt=typeof window<"u"&&window!==null,Pl=yp();function yp(){return Dt&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype?("isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}}),!0):!1}const Wt={event:"event",observer:"observer"};function Yn(t,e){if(!t.length)return;const n=t.indexOf(e);if(n>-1)return t.splice(n,1)}function Ol(t,e){if(t.tagName!=="IMG"||!t.getAttribute("data-srcset"))return"";let n=t.getAttribute("data-srcset").trim().split(",");const s=[],r=t.parentNode.offsetWidth*e;let o,l,a;n.forEach(h=>{h=h.trim(),o=h.lastIndexOf(" "),o===-1?(l=h,a=99999):(l=h.substr(0,o),a=parseInt(h.substr(o+1,h.length-o-2),10)),s.push([a,l])}),s.sort((h,f)=>{if(h[0]<f[0])return 1;if(h[0]>f[0])return-1;if(h[0]===f[0]){if(f[1].indexOf(".webp",f[1].length-5)!==-1)return 1;if(h[1].indexOf(".webp",h[1].length-5)!==-1)return-1}return 0});let c="",u;for(let h=0;h<s.length;h++){u=s[h],c=u[1];const f=s[h+1];if(f&&f[0]<r){c=u[1];break}else if(!f){c=u[1];break}}return c}const vp=(t=1)=>Dt&&window.devicePixelRatio||t;function Ep(){if(!Dt)return!1;let t=!0;function e(n,s){const i={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"},r=new Image;r.onload=function(){const o=r.width>0&&r.height>0;s(o)},r.onerror=function(){s(!1)},r.src="data:image/webp;base64,"+i[n]}return e("lossy",n=>{t=n}),e("lossless",n=>{t=n}),e("alpha",n=>{t=n}),e("animation",n=>{t=n}),t}function bp(t,e){let n=null,s=0;return function(){if(n)return;const i=Date.now()-s,r=this,o=arguments,l=function(){s=Date.now(),n=!1,t.apply(r,o)};i>=e?l():n=setTimeout(l,e)}}function Cp(){if(!Dt)return!1;let t=!1;try{const e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",po,e)}catch{}return t}const wp=Cp(),Ip={on(t,e,n,s=!1){wp?t.addEventListener(e,n,{capture:s,passive:!0}):t.addEventListener(e,n,s)},off(t,e,n,s=!1){t.removeEventListener(e,n,s)}},Er=(t,e,n)=>{let s=new Image;if(!t||!t.src){const i=new Error("image src is required");return n(i)}t.cors&&(s.crossOrigin=t.cors),s.src=t.src,s.onload=function(){e({naturalHeight:s.naturalHeight,naturalWidth:s.naturalWidth,src:s.src}),s=null},s.onerror=function(i){n(i)}},qi=(t,e)=>typeof getComputedStyle<"u"?getComputedStyle(t,null).getPropertyValue(e):t.style[e],Sp=t=>qi(t,"overflow")+qi(t,"overflowY")+qi(t,"overflowX"),Tp=t=>{if(!Dt)return;if(!(t instanceof Element))return window;let e=t;for(;e&&!(e===document.body||e===document.documentElement||!e.parentNode);){if(/(scroll|auto)/.test(Sp(e)))return e;e=e.parentNode}return window};function Ap(t){return t!==null&&typeof t=="object"}function po(){}class Rp{constructor(e){this.max=e||100,this._caches=[]}has(e){return this._caches.indexOf(e)>-1}add(e){this.has(e)||(this._caches.push(e),this._caches.length>this.max&&this.free())}free(){this._caches.shift()}}class xp{constructor(e,n,s,i,r,o,l,a,c,u){this.el=e,this.src=n,this.error=s,this.loading=i,this.bindType=r,this.attempt=0,this.cors=a,this.naturalHeight=0,this.naturalWidth=0,this.options=l,this.rect={},this.$parent=o,this.elRenderer=c,this._imageCache=u,this.performanceData={init:Date.now(),loadStart:0,loadEnd:0},this.filter(),this.initState(),this.render("loading",!1)}initState(){"dataset"in this.el?this.el.dataset.src=this.src:this.el.setAttribute("data-src",this.src),this.state={loading:!1,error:!1,loaded:!1,rendered:!1}}record(e){this.performanceData[e]=Date.now()}update(e){const n=this.src;this.src=e.src,this.loading=e.loading,this.error=e.error,this.filter(),n!==this.src&&(this.attempt=0,this.initState())}getRect(){this.rect=this.el.getBoundingClientRect()}checkInView(){return this.getRect(),this.rect.top<window.innerHeight*this.options.preLoad&&this.rect.bottom>this.options.preLoadTop&&this.rect.left<window.innerWidth*this.options.preLoad&&this.rect.right>0}filter(){for(const e in this.options.filter)this.options.filter[e](this,this.options)}renderLoading(e){this.state.loading=!0,Er({src:this.loading,cors:this.cors},()=>{this.render("loading",!1),this.state.loading=!1,e()},()=>{e(),this.state.loading=!1,this.options.silent||console.warn(`VueLazyload log: load failed with loading image(${this.loading})`)})}load(e=po){if(this.attempt>this.options.attempt-1&&this.state.error){this.options.silent||console.log(`VueLazyload log: ${this.src} tried too more than ${this.options.attempt} times`),e();return}if(!(this.state.rendered&&this.state.loaded)){if(this._imageCache.has(this.src))return this.state.loaded=!0,this.render("loaded",!0),this.state.rendered=!0,e();this.renderLoading(()=>{this.attempt++,this.options.adapter.beforeLoad&&this.options.adapter.beforeLoad(this,this.options),this.record("loadStart"),Er({src:this.src,cors:this.cors},n=>{this.naturalHeight=n.naturalHeight,this.naturalWidth=n.naturalWidth,this.state.loaded=!0,this.state.error=!1,this.record("loadEnd"),this.render("loaded",!1),this.state.rendered=!0,this._imageCache.add(this.src),e()},n=>{!this.options.silent&&console.error(n),this.state.error=!0,this.state.loaded=!1,this.render("error",!1)})})}}render(e,n){this.elRenderer(this,e,n)}performance(){let e="loading",n=0;return this.state.loaded&&(e="loaded",n=(this.performanceData.loadEnd-this.performanceData.loadStart)/1e3),this.state.error&&(e="error"),{src:this.src,state:e,time:n}}$destroy(){this.el=null,this.src="",this.error=null,this.loading="",this.bindType=null,this.attempt=0}}const kl="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",Np=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],Pp={rootMargin:"0px",threshold:0};class Op{constructor({preLoad:e,error:n,throttleWait:s,preLoadTop:i,dispatchEvent:r,loading:o,attempt:l,silent:a=!0,scale:c,listenEvents:u,filter:h,adapter:f,observer:_,observerOptions:y}){this.version='"3.0.0"',this.lazyContainerMananger=null,this.mode=Wt.event,this.ListenerQueue=[],this.TargetIndex=0,this.TargetQueue=[],this.options={silent:a,dispatchEvent:!!r,throttleWait:s||200,preLoad:e||1.3,preLoadTop:i||0,error:n||kl,loading:o||kl,attempt:l||3,scale:c||vp(c),listenEvents:u||Np,supportWebp:Ep(),filter:h||{},adapter:f||{},observer:!!_,observerOptions:y||Pp},this._initEvent(),this._imageCache=new Rp(200),this.lazyLoadHandler=bp(this._lazyLoadHandler.bind(this),this.options.throttleWait),this.setMode(this.options.observer?Wt.observer:Wt.event)}performance(){const e=[];return this.ListenerQueue.map(n=>e.push(n.performance())),e}addLazyBox(e){this.ListenerQueue.push(e),Dt&&(this._addListenerTarget(window),this._observer&&this._observer.observe(e.el),e.$el&&e.$el.parentNode&&this._addListenerTarget(e.$el.parentNode))}add(e,n,s){if(this.ListenerQueue.some(a=>a.el===e))return this.update(e,n),zt(this.lazyLoadHandler);let{src:i,loading:r,error:o,cors:l}=this._valueFormatter(n.value);zt(()=>{i=Ol(e,this.options.scale)||i,this._observer&&this._observer.observe(e);const a=Object.keys(n.modifiers)[0];let c;a&&(c=n.instance.$refs[a],c=c?c.el||c:document.getElementById(a)),c||(c=Tp(e));const u=new xp(e,i,o,r,n.arg,c,this.options,l,this._elRenderer.bind(this),this._imageCache);this.ListenerQueue.push(u),Dt&&(this._addListenerTarget(window),this._addListenerTarget(c)),zt(this.lazyLoadHandler)})}update(e,n,s){let{src:i,loading:r,error:o}=this._valueFormatter(n.value);i=Ol(e,this.options.scale)||i;const l=this.ListenerQueue.find(a=>a.el===e);l?l.update({src:i,loading:r,error:o}):(e.getAttribute("lazy")!=="loaded"||e.dataset.src!==i)&&this.add(e,n,s),this._observer&&(this._observer.unobserve(e),this._observer.observe(e)),zt(this.lazyLoadHandler)}remove(e){if(!e)return;this._observer&&this._observer.unobserve(e);const n=this.ListenerQueue.find(s=>s.el===e);n&&(this._removeListenerTarget(n.$parent),this._removeListenerTarget(window),Yn(this.ListenerQueue,n),n.$destroy&&n.$destroy())}removeComponent(e){e&&(Yn(this.ListenerQueue,e),this._observer&&this._observer.unobserve(e.el),e.$parent&&e.$el.parentNode&&this._removeListenerTarget(e.$el.parentNode),this._removeListenerTarget(window))}setMode(e){!Pl&&e===Wt.observer&&(e=Wt.event),this.mode=e,e===Wt.event?(this._observer&&(this.ListenerQueue.forEach(n=>{this._observer.unobserve(n.el)}),this._observer=null),this.TargetQueue.forEach(n=>{this._initListen(n.el,!0)})):(this.TargetQueue.forEach(n=>{this._initListen(n.el,!1)}),this._initIntersectionObserver())}_addListenerTarget(e){if(!e)return;let n=this.TargetQueue.find(s=>s.el===e);return n?n.childrenCount++:(n={el:e,id:++this.TargetIndex,childrenCount:1,listened:!0},this.mode===Wt.event&&this._initListen(n.el,!0),this.TargetQueue.push(n)),this.TargetIndex}_removeListenerTarget(e){this.TargetQueue.forEach((n,s)=>{n.el===e&&(n.childrenCount--,n.childrenCount||(this._initListen(n.el,!1),this.TargetQueue.splice(s,1),n=null))})}_initListen(e,n){this.options.listenEvents.forEach(s=>Ip[n?"on":"off"](e,s,this.lazyLoadHandler))}_initEvent(){this.Event={listeners:{loading:[],loaded:[],error:[]}},this.$on=(e,n)=>{this.Event.listeners[e]||(this.Event.listeners[e]=[]),this.Event.listeners[e].push(n)},this.$once=(e,n)=>{const s=this;function i(){s.$off(e,i),n.apply(s,arguments)}this.$on(e,i)},this.$off=(e,n)=>{if(!n){if(!this.Event.listeners[e])return;this.Event.listeners[e].length=0;return}Yn(this.Event.listeners[e],n)},this.$emit=(e,n,s)=>{this.Event.listeners[e]&&this.Event.listeners[e].forEach(i=>i(n,s))}}_lazyLoadHandler(){const e=[];this.ListenerQueue.forEach((n,s)=>{(!n.el||!n.el.parentNode||n.state.loaded)&&e.push(n),n.checkInView()&&(n.state.loaded||n.load())}),e.forEach(n=>{Yn(this.ListenerQueue,n),n.$destroy&&n.$destroy()})}_initIntersectionObserver(){Pl&&(this._observer=new IntersectionObserver(this._observerHandler.bind(this),this.options.observerOptions),this.ListenerQueue.length&&this.ListenerQueue.forEach(e=>{this._observer.observe(e.el)}))}_observerHandler(e){e.forEach(n=>{n.isIntersecting&&this.ListenerQueue.forEach(s=>{if(s.el===n.target){if(s.state.loaded)return this._observer.unobserve(s.el);s.load()}})})}_elRenderer(e,n,s){if(!e.el)return;const{el:i,bindType:r}=e;let o;switch(n){case"loading":o=e.loading;break;case"error":o=e.error;break;default:o=e.src;break}if(r?i.style[r]='url("'+o+'")':i.getAttribute("src")!==o&&i.setAttribute("src",o),i.setAttribute("lazy",n),this.$emit(n,e,s),this.options.adapter[n]&&this.options.adapter[n](e,this.options),this.options.dispatchEvent){const l=new CustomEvent(n,{detail:e});i.dispatchEvent(l)}}_valueFormatter(e){return Ap(e)?(!e.src&&!this.options.silent&&console.error("Vue Lazyload warning: miss src with "+e),{src:e.src,loading:e.loading||this.options.loading,error:e.error||this.options.error,cors:this.options.cors}):{src:e,loading:this.options.loading,error:this.options.error,cors:this.options.cors}}}const $c=(t,e)=>{let n=gt({});const s=()=>{n=t.value.getBoundingClientRect()};return{rect:n,checkInView:()=>(s(),Dt&&n.top<window.innerHeight*e&&n.bottom>0&&n.left<window.innerWidth*e&&n.right>0)}};var kp=t=>Ci({props:{tag:{type:String,default:"div"}},emits:["show"],setup(e,{emit:n,slots:s}){const i=Xt(),r=gt({loaded:!1,error:!1,attempt:0}),o=Xt(!1),{rect:l,checkInView:a}=$c(i,t.options.preLoad),c=()=>{o.value=!0,r.loaded=!0,n("show",o.value)},u=De(()=>({el:i.value,rect:l,checkInView:a,load:c,state:r}));return ao(()=>{t.addLazyBox(u.value),t.lazyLoadHandler()}),Ii(()=>{t.removeComponent(u.value)}),()=>{var h;return Ne(e.tag,{ref:i},[o.value&&((h=s.default)===null||h===void 0?void 0:h.call(s))])}}});class Dp{constructor(e){this.lazy=e,e.lazyContainerMananger=this,this._queue=[]}bind(e,n,s){const i=new Lp(e,n,s,this.lazy);this._queue.push(i)}update(e,n,s){const i=this._queue.find(r=>r.el===e);i&&i.update(e,n)}unbind(e,n,s){const i=this._queue.find(r=>r.el===e);i&&(i.clear(),Yn(this._queue,i))}}const Mp={selector:"img",error:"",loading:""};class Lp{constructor(e,n,s,i){this.el=e,this.vnode=s,this.binding=n,this.options={},this.lazy=i,this._queue=[],this.update(e,n)}update(e,n){this.el=e,this.options=Nl({},Mp,n.value),this.getImgs().forEach(i=>{this.lazy.add(i,Nl({},this.binding,{value:{src:i.getAttribute("data-src")||i.dataset.src,error:i.getAttribute("data-error")||i.dataset.error||this.options.error,loading:i.getAttribute("data-loading")||i.dataset.loading||this.options.loading}}),this.vnode)})}getImgs(){return Array.from(this.el.querySelectorAll(this.options.selector))}clear(){this.getImgs().forEach(n=>this.lazy.remove(n)),this.vnode=null,this.binding=null,this.lazy=null}}var Fp=t=>Ci({setup(e,{slots:n}){const s=Xt(),i=gt({src:"",error:"",loading:"",attempt:t.options.attempt}),r=gt({loaded:!1,error:!1,attempt:0}),{rect:o,checkInView:l}=$c(s,t.options.preLoad),a=Xt(""),c=(f=po)=>{if(r.attempt>i.attempt-1&&r.error)return t.options.silent||console.log(`VueLazyload log: ${i.src} tried too more than ${i.attempt} times`),f();const _=i.src;Er({src:_},({src:y})=>{a.value=y,r.loaded=!0},()=>{r.attempt++,a.value=i.error,r.error=!0})},u=De(()=>({el:s.value,rect:o,checkInView:l,load:c,state:r}));ao(()=>{t.addLazyBox(u.value),t.lazyLoadHandler()}),Ii(()=>{t.removeComponent(u.value)});const h=()=>{const{src:f,loading:_,error:y}=t._valueFormatter(e.src);r.loaded=!1,i.src=f,i.error=y,i.loading=_,a.value=i.loading};return En(()=>e.src,()=>{h(),t.addLazyBox(u.value),t.lazyLoadHandler()},{immediate:!0}),()=>{var f;return Ne(e.tag||"img",{src:a.value,ref:s},[(f=n.default)===null||f===void 0?void 0:f.call(n)])}}}),Bp={install(t,e={}){const n=new Op(e),s=new Dp(n);if(Number(t.version.split(".")[0])<3)return new Error("Vue version at least 3.0");t.config.globalProperties.$Lazyload=n,t.provide("Lazyload",n),e.lazyComponent&&t.component("lazy-component",kp(n)),e.lazyImage&&t.component("lazy-image",Fp(n)),t.directive("lazy",{beforeMount:n.add.bind(n),beforeUpdate:n.update.bind(n),updated:n.lazyLoadHandler.bind(n),unmounted:n.remove.bind(n)}),t.directive("lazy-container",{beforeMount:s.bind.bind(s),updated:s.update.bind(s),unmounted:s.unbind.bind(s)})}},Hp=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let jc;const Ri=t=>jc=t,Vc=Symbol();function br(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Zn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Zn||(Zn={}));function Wp(){const t=Qa(!0),e=t.run(()=>Xt({}));let n=[],s=[];const i=vi({install(r){Ri(i),i._a=r,r.provide(Vc,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!Hp?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const zc=()=>{};function Dl(t,e,n,s=zc){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Ya()&&Xh(i),i}function hn(t,...e){t.slice().forEach(n=>{n(...e)})}const Up=t=>t();function Cr(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];br(i)&&br(s)&&t.hasOwnProperty(n)&&!pe(s)&&!Rt(s)?t[n]=Cr(i,s):t[n]=s}return t}const $p=Symbol();function jp(t){return!br(t)||!t.hasOwnProperty($p)}const{assign:It}=Object;function Vp(t){return!!(pe(t)&&t.effect)}function zp(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let a;function c(){l||(n.state.value[t]=i?i():{});const u=xf(n.state.value[t]);return It(u,r,Object.keys(o||{}).reduce((h,f)=>(h[f]=vi(De(()=>{Ri(n);const _=n._s.get(t);return o[f].call(_,_)})),h),{}))}return a=qc(t,c,e,n,s,!0),a}function qc(t,e,n={},s,i,r){let o;const l=It({actions:{}},n),a={deep:!0};let c,u,h=[],f=[],_;const y=s.state.value[t];!r&&!y&&(s.state.value[t]={}),Xt({});let S;function N(Y){let K;c=u=!1,typeof Y=="function"?(Y(s.state.value[t]),K={type:Zn.patchFunction,storeId:t,events:_}):(Cr(s.state.value[t],Y),K={type:Zn.patchObject,payload:Y,storeId:t,events:_});const de=S=Symbol();zt().then(()=>{S===de&&(c=!0)}),u=!0,hn(h,K,s.state.value[t])}const P=r?function(){const{state:K}=n,de=K?K():{};this.$patch(Se=>{It(Se,de)})}:zc;function k(){o.stop(),h=[],f=[],s._s.delete(t)}function j(Y,K){return function(){Ri(s);const de=Array.from(arguments),Se=[],He=[];function Ve(X){Se.push(X)}function Ft(X){He.push(X)}hn(f,{args:de,name:Y,store:se,after:Ve,onError:Ft});let ze;try{ze=K.apply(this&&this.$id===t?this:se,de)}catch(X){throw hn(He,X),X}return ze instanceof Promise?ze.then(X=>(hn(Se,X),X)).catch(X=>(hn(He,X),Promise.reject(X))):(hn(Se,ze),ze)}}const M={_p:s,$id:t,$onAction:Dl.bind(null,f),$patch:N,$reset:P,$subscribe(Y,K={}){const de=Dl(h,Y,K.detached,()=>Se()),Se=o.run(()=>En(()=>s.state.value[t],He=>{(K.flush==="sync"?u:c)&&Y({storeId:t,type:Zn.direct,events:_},He)},It({},a,K)));return de},$dispose:k},se=gt(M);s._s.set(t,se);const we=s._a&&s._a.runWithContext||Up,Ie=s._e.run(()=>(o=Qa(),we(()=>o.run(e))));for(const Y in Ie){const K=Ie[Y];if(pe(K)&&!Vp(K)||Rt(K))r||(y&&jp(K)&&(pe(K)?K.value=y[Y]:Cr(K,y[Y])),s.state.value[t][Y]=K);else if(typeof K=="function"){const de=j(Y,K);Ie[Y]=de,l.actions[Y]=K}}return It(se,Ie),It(Q(se),Ie),Object.defineProperty(se,"$state",{get:()=>s.state.value[t],set:Y=>{N(K=>{It(K,Y)})}}),s._p.forEach(Y=>{It(se,o.run(()=>Y({store:se,app:s._a,pinia:s,options:l})))}),y&&r&&n.hydrate&&n.hydrate(se.$state,y),c=!0,u=!0,se}function QE(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(l,a){const c=gd();return l=l||(c?lt(Vc,null):null),l&&Ri(l),l=jc,l._s.has(s)||(r?qc(s,e,i,l):zp(s,i,l)),l._s.get(s)}return o.$id=s,o}const qp="modulepreload",Kp=function(t){return"/BLOOMTOXIC/"+t},Ml={},Gp=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=Kp(r),r in Ml)return;Ml[r]=!0;const o=r.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${l}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":qp,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const dn=typeof window<"u";function Qp(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const te=Object.assign;function Ki(t,e){const n={};for(const s in e){const i=e[s];n[s]=tt(i)?i.map(t):t(i)}return n}const es=()=>{},tt=Array.isArray,Yp=/\/$/,Xp=t=>t.replace(Yp,"");function Gi(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("#");let a=e.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(s=e.slice(0,a),r=e.slice(a+1,l>-1?l:e.length),i=t(r)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=t_(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function Jp(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ll(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Zp(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&xn(e.matched[s],n.matched[i])&&Kc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function xn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Kc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!e_(t[n],e[n]))return!1;return!0}function e_(t,e){return tt(t)?Fl(t,e):tt(e)?Fl(e,t):t===e}function Fl(t,e){return tt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function t_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var ds;(function(t){t.pop="pop",t.push="push"})(ds||(ds={}));var ts;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ts||(ts={}));function n_(t){if(!t)if(dn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Xp(t)}const s_=/^[^#]+#/;function i_(t,e){return t.replace(s_,"#")+e}function r_(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const xi=()=>({left:window.pageXOffset,top:window.pageYOffset});function o_(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=r_(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Bl(t,e){return(history.state?history.state.position-e:-1)+t}const wr=new Map;function l_(t,e){wr.set(t,e)}function a_(t){const e=wr.get(t);return wr.delete(t),e}let c_=()=>location.protocol+"//"+location.host;function Gc(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let l=i.includes(t.slice(r))?t.slice(r).length:1,a=i.slice(l);return a[0]!=="/"&&(a="/"+a),Ll(a,"")}return Ll(n,t)+s+i}function u_(t,e,n,s){let i=[],r=[],o=null;const l=({state:f})=>{const _=Gc(t,location),y=n.value,S=e.value;let N=0;if(f){if(n.value=_,e.value=f,o&&o===y){o=null;return}N=S?f.position-S.position:0}else s(_);i.forEach(P=>{P(n.value,y,{delta:N,type:ds.pop,direction:N?N>0?ts.forward:ts.back:ts.unknown})})};function a(){o=n.value}function c(f){i.push(f);const _=()=>{const y=i.indexOf(f);y>-1&&i.splice(y,1)};return r.push(_),_}function u(){const{history:f}=window;f.state&&f.replaceState(te({},f.state,{scroll:xi()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:c,destroy:h}}function Hl(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?xi():null}}function h_(t){const{history:e,location:n}=window,s={value:Gc(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(a,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:c_()+t+a;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(_){console.error(_),n[u?"replace":"assign"](f)}}function o(a,c){const u=te({},e.state,Hl(i.value.back,a,i.value.forward,!0),c,{position:i.value.position});r(a,u,!0),s.value=a}function l(a,c){const u=te({},i.value,e.state,{forward:a,scroll:xi()});r(u.current,u,!0);const h=te({},Hl(s.value,a,null),{position:u.position+1},c);r(a,h,!1),s.value=a}return{location:s,state:i,push:l,replace:o}}function f_(t){t=n_(t);const e=h_(t),n=u_(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=te({location:"",base:t,go:s,createHref:i_.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function d_(t){return typeof t=="string"||t&&typeof t=="object"}function Qc(t){return typeof t=="string"||typeof t=="symbol"}const wt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Yc=Symbol("");var Wl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Wl||(Wl={}));function Nn(t,e){return te(new Error,{type:t,[Yc]:!0},e)}function ut(t,e){return t instanceof Error&&Yc in t&&(e==null||!!(t.type&e))}const Ul="[^/]+?",p_={sensitive:!1,strict:!1,start:!0,end:!0},__=/[.+*?^${}()[\]/\\]/g;function g_(t,e){const n=te({},p_,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const f=c[h];let _=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(__,"\\$&"),_+=40;else if(f.type===1){const{value:y,repeatable:S,optional:N,regexp:P}=f;r.push({name:y,repeatable:S,optional:N});const k=P||Ul;if(k!==Ul){_+=10;try{new RegExp(`(${k})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${y}" (${k}): `+M.message)}}let j=S?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(j=N&&c.length<2?`(?:/${j})`:"/"+j),N&&(j+="?"),i+=j,_+=20,N&&(_+=-8),S&&(_+=-20),k===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const _=u[f]||"",y=r[f-1];h[y.name]=_&&y.repeatable?_.split("/"):_}return h}function a(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of f)if(_.type===0)u+=_.value;else if(_.type===1){const{value:y,repeatable:S,optional:N}=_,P=y in c?c[y]:"";if(tt(P)&&!S)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const k=tt(P)?P.join("/"):P;if(!k)if(N)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=k}}return u||"/"}return{re:o,score:s,keys:r,parse:l,stringify:a}}function m_(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function y_(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=m_(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if($l(s))return 1;if($l(i))return-1}return i.length-s.length}function $l(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const v_={type:0,value:""},E_=/[a-zA-Z0-9_]/;function b_(t){if(!t)return[[]];if(t==="/")return[[v_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,a,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=a}for(;l<t.length;){if(a=t[l++],a==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:a==="/"?(c&&h(),o()):a===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:a==="("?n=2:E_.test(a)?f():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function C_(t,e,n){const s=g_(b_(t.path),n),i=te(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function w_(t,e){const n=[],s=new Map;e=zl({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,f){const _=!f,y=I_(u);y.aliasOf=f&&f.record;const S=zl(e,u),N=[y];if("alias"in u){const j=typeof u.alias=="string"?[u.alias]:u.alias;for(const M of j)N.push(te({},y,{components:f?f.record.components:y.components,path:M,aliasOf:f?f.record:y}))}let P,k;for(const j of N){const{path:M}=j;if(h&&M[0]!=="/"){const se=h.record.path,we=se[se.length-1]==="/"?"":"/";j.path=h.record.path+(M&&we+M)}if(P=C_(j,h,S),f?f.alias.push(P):(k=k||P,k!==P&&k.alias.push(P),_&&u.name&&!Vl(P)&&o(u.name)),y.children){const se=y.children;for(let we=0;we<se.length;we++)r(se[we],P,f&&f.children[we])}f=f||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&a(P)}return k?()=>{o(k)}:es}function o(u){if(Qc(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function l(){return n}function a(u){let h=0;for(;h<n.length&&y_(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Xc(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Vl(u)&&s.set(u.record.name,u)}function c(u,h){let f,_={},y,S;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Nn(1,{location:u});S=f.record.name,_=te(jl(h.params,f.keys.filter(k=>!k.optional).map(k=>k.name)),u.params&&jl(u.params,f.keys.map(k=>k.name))),y=f.stringify(_)}else if("path"in u)y=u.path,f=n.find(k=>k.re.test(y)),f&&(_=f.parse(y),S=f.record.name);else{if(f=h.name?s.get(h.name):n.find(k=>k.re.test(h.path)),!f)throw Nn(1,{location:u,currentLocation:h});S=f.record.name,_=te({},h.params,u.params),y=f.stringify(_)}const N=[];let P=f;for(;P;)N.unshift(P.record),P=P.parent;return{name:S,path:y,params:_,matched:N,meta:T_(N)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:l,getRecordMatcher:i}}function jl(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function I_(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:S_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function S_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Vl(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function T_(t){return t.reduce((e,n)=>te(e,n.meta),{})}function zl(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Xc(t,e){return e.children.some(n=>n===t||Xc(t,n))}const Jc=/#/g,A_=/&/g,R_=/\//g,x_=/=/g,N_=/\?/g,Zc=/\+/g,P_=/%5B/g,O_=/%5D/g,eu=/%5E/g,k_=/%60/g,tu=/%7B/g,D_=/%7C/g,nu=/%7D/g,M_=/%20/g;function _o(t){return encodeURI(""+t).replace(D_,"|").replace(P_,"[").replace(O_,"]")}function L_(t){return _o(t).replace(tu,"{").replace(nu,"}").replace(eu,"^")}function Ir(t){return _o(t).replace(Zc,"%2B").replace(M_,"+").replace(Jc,"%23").replace(A_,"%26").replace(k_,"`").replace(tu,"{").replace(nu,"}").replace(eu,"^")}function F_(t){return Ir(t).replace(x_,"%3D")}function B_(t){return _o(t).replace(Jc,"%23").replace(N_,"%3F")}function H_(t){return t==null?"":B_(t).replace(R_,"%2F")}function Ys(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function W_(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Zc," "),o=r.indexOf("="),l=Ys(o<0?r:r.slice(0,o)),a=o<0?null:Ys(r.slice(o+1));if(l in e){let c=e[l];tt(c)||(c=e[l]=[c]),c.push(a)}else e[l]=a}return e}function ql(t){let e="";for(let n in t){const s=t[n];if(n=F_(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(tt(s)?s.map(r=>r&&Ir(r)):[s&&Ir(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function U_(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=tt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const $_=Symbol(""),Kl=Symbol(""),go=Symbol(""),su=Symbol(""),Sr=Symbol("");function jn(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Tt(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,l)=>{const a=h=>{h===!1?l(Nn(4,{from:n,to:e})):h instanceof Error?l(h):d_(h)?l(Nn(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,a);let u=Promise.resolve(c);t.length<3&&(u=u.then(a)),u.catch(h=>l(h))})}function Qi(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let l=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(j_(l)){const c=(l.__vccOpts||l)[e];c&&i.push(Tt(c,n,s,r,o))}else{let a=l();i.push(()=>a.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=Qp(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Tt(f,n,s,r,o)()}))}}return i}function j_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Gl(t){const e=lt(go),n=lt(su),s=De(()=>e.resolve(yn(t.to))),i=De(()=>{const{matched:a}=s.value,{length:c}=a,u=a[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(xn.bind(null,u));if(f>-1)return f;const _=Ql(a[c-2]);return c>1&&Ql(u)===_&&h[h.length-1].path!==_?h.findIndex(xn.bind(null,a[c-2])):f}),r=De(()=>i.value>-1&&K_(n.params,s.value.params)),o=De(()=>i.value>-1&&i.value===n.matched.length-1&&Kc(n.params,s.value.params));function l(a={}){return q_(a)?e[yn(t.replace)?"replace":"push"](yn(t.to)).catch(es):Promise.resolve()}return{route:s,href:De(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}const V_=Ci({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Gl,setup(t,{slots:e}){const n=gt(Gl(t)),{options:s}=lt(go),i=De(()=>({[Yl(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Yl(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Wc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),z_=V_;function q_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function K_(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!tt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Ql(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Yl=(t,e,n)=>t??e??n,G_=Ci({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=lt(Sr),i=De(()=>t.route||s.value),r=lt(Kl,0),o=De(()=>{let c=yn(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),l=De(()=>i.value.matched[o.value]);js(Kl,De(()=>o.value+1)),js($_,l),js(Sr,i);const a=Xt();return En(()=>[a.value,l.value,t.name],([c,u,h],[f,_,y])=>{u&&(u.instances[h]=c,_&&_!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),c&&u&&(!_||!xn(u,_)||!f)&&(u.enterCallbacks[h]||[]).forEach(S=>S(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=l.value,f=h&&h.components[u];if(!f)return Xl(n.default,{Component:f,route:c});const _=h.props[u],y=_?_===!0?c.params:typeof _=="function"?_(c):_:null,N=Wc(f,te({},y,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(h.instances[u]=null)},ref:a}));return Xl(n.default,{Component:N,route:c})||N}}});function Xl(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Q_=G_;function Y_(t){const e=w_(t.routes,t),n=t.parseQuery||W_,s=t.stringifyQuery||ql,i=t.history,r=jn(),o=jn(),l=jn(),a=Tf(wt);let c=wt;dn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ki.bind(null,v=>""+v),h=Ki.bind(null,H_),f=Ki.bind(null,Ys);function _(v,x){let A,D;return Qc(v)?(A=e.getRecordMatcher(v),D=x):D=v,e.addRoute(D,A)}function y(v){const x=e.getRecordMatcher(v);x&&e.removeRoute(x)}function S(){return e.getRoutes().map(v=>v.record)}function N(v){return!!e.getRecordMatcher(v)}function P(v,x){if(x=te({},x||a.value),typeof v=="string"){const g=Gi(n,v,x.path),m=e.resolve({path:g.path},x),E=i.createHref(g.fullPath);return te(g,m,{params:f(m.params),hash:Ys(g.hash),redirectedFrom:void 0,href:E})}let A;if("path"in v)A=te({},v,{path:Gi(n,v.path,x.path).path});else{const g=te({},v.params);for(const m in g)g[m]==null&&delete g[m];A=te({},v,{params:h(g)}),x.params=h(x.params)}const D=e.resolve(A,x),ee=v.hash||"";D.params=u(f(D.params));const d=Jp(s,te({},v,{hash:L_(ee),path:D.path})),p=i.createHref(d);return te({fullPath:d,hash:ee,query:s===ql?U_(v.query):v.query||{}},D,{redirectedFrom:void 0,href:p})}function k(v){return typeof v=="string"?Gi(n,v,a.value.path):te({},v)}function j(v,x){if(c!==v)return Nn(8,{from:x,to:v})}function M(v){return Ie(v)}function se(v){return M(te(k(v),{replace:!0}))}function we(v){const x=v.matched[v.matched.length-1];if(x&&x.redirect){const{redirect:A}=x;let D=typeof A=="function"?A(v):A;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=k(D):{path:D},D.params={}),te({query:v.query,hash:v.hash,params:"path"in D?{}:v.params},D)}}function Ie(v,x){const A=c=P(v),D=a.value,ee=v.state,d=v.force,p=v.replace===!0,g=we(A);if(g)return Ie(te(k(g),{state:typeof g=="object"?te({},ee,g.state):ee,force:d,replace:p}),x||A);const m=A;m.redirectedFrom=x;let E;return!d&&Zp(s,D,A)&&(E=Nn(16,{to:m,from:D}),nt(D,D,!0,!1)),(E?Promise.resolve(E):de(m,D)).catch(b=>ut(b)?ut(b,2)?b:bt(b):Z(b,m,D)).then(b=>{if(b){if(ut(b,2))return Ie(te({replace:p},k(b.to),{state:typeof b.to=="object"?te({},ee,b.to.state):ee,force:d}),x||m)}else b=He(m,D,!0,p,ee);return Se(m,D,b),b})}function Y(v,x){const A=j(v,x);return A?Promise.reject(A):Promise.resolve()}function K(v){const x=an.values().next().value;return x&&typeof x.runWithContext=="function"?x.runWithContext(v):v()}function de(v,x){let A;const[D,ee,d]=X_(v,x);A=Qi(D.reverse(),"beforeRouteLeave",v,x);for(const g of D)g.leaveGuards.forEach(m=>{A.push(Tt(m,v,x))});const p=Y.bind(null,v,x);return A.push(p),Te(A).then(()=>{A=[];for(const g of r.list())A.push(Tt(g,v,x));return A.push(p),Te(A)}).then(()=>{A=Qi(ee,"beforeRouteUpdate",v,x);for(const g of ee)g.updateGuards.forEach(m=>{A.push(Tt(m,v,x))});return A.push(p),Te(A)}).then(()=>{A=[];for(const g of d)if(g.beforeEnter)if(tt(g.beforeEnter))for(const m of g.beforeEnter)A.push(Tt(m,v,x));else A.push(Tt(g.beforeEnter,v,x));return A.push(p),Te(A)}).then(()=>(v.matched.forEach(g=>g.enterCallbacks={}),A=Qi(d,"beforeRouteEnter",v,x),A.push(p),Te(A))).then(()=>{A=[];for(const g of o.list())A.push(Tt(g,v,x));return A.push(p),Te(A)}).catch(g=>ut(g,8)?g:Promise.reject(g))}function Se(v,x,A){l.list().forEach(D=>K(()=>D(v,x,A)))}function He(v,x,A,D,ee){const d=j(v,x);if(d)return d;const p=x===wt,g=dn?history.state:{};A&&(D||p?i.replace(v.fullPath,te({scroll:p&&g&&g.scroll},ee)):i.push(v.fullPath,ee)),a.value=v,nt(v,x,A,p),bt()}let Ve;function Ft(){Ve||(Ve=i.listen((v,x,A)=>{if(!Os.listening)return;const D=P(v),ee=we(D);if(ee){Ie(te(ee,{replace:!0}),D).catch(es);return}c=D;const d=a.value;dn&&l_(Bl(d.fullPath,A.delta),xi()),de(D,d).catch(p=>ut(p,12)?p:ut(p,2)?(Ie(p.to,D).then(g=>{ut(g,20)&&!A.delta&&A.type===ds.pop&&i.go(-1,!1)}).catch(es),Promise.reject()):(A.delta&&i.go(-A.delta,!1),Z(p,D,d))).then(p=>{p=p||He(D,d,!1),p&&(A.delta&&!ut(p,8)?i.go(-A.delta,!1):A.type===ds.pop&&ut(p,20)&&i.go(-1,!1)),Se(D,d,p)}).catch(es)}))}let ze=jn(),X=jn(),ie;function Z(v,x,A){bt(v);const D=X.list();return D.length?D.forEach(ee=>ee(v,x,A)):console.error(v),Promise.reject(v)}function ct(){return ie&&a.value!==wt?Promise.resolve():new Promise((v,x)=>{ze.add([v,x])})}function bt(v){return ie||(ie=!v,Ft(),ze.list().forEach(([x,A])=>v?A(v):x()),ze.reset()),v}function nt(v,x,A,D){const{scrollBehavior:ee}=t;if(!dn||!ee)return Promise.resolve();const d=!A&&a_(Bl(v.fullPath,0))||(D||!A)&&history.state&&history.state.scroll||null;return zt().then(()=>ee(v,x,d)).then(p=>p&&o_(p)).catch(p=>Z(p,v,x))}const Oe=v=>i.go(v);let ln;const an=new Set,Os={currentRoute:a,listening:!0,addRoute:_,removeRoute:y,hasRoute:N,getRoutes:S,resolve:P,options:t,push:M,replace:se,go:Oe,back:()=>Oe(-1),forward:()=>Oe(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:X.add,isReady:ct,install(v){const x=this;v.component("RouterLink",z_),v.component("RouterView",Q_),v.config.globalProperties.$router=x,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>yn(a)}),dn&&!ln&&a.value===wt&&(ln=!0,M(i.location).catch(ee=>{}));const A={};for(const ee in wt)Object.defineProperty(A,ee,{get:()=>a.value[ee],enumerable:!0});v.provide(go,x),v.provide(su,lc(A)),v.provide(Sr,a);const D=v.unmount;an.add(v),v.unmount=function(){an.delete(v),an.size<1&&(c=wt,Ve&&Ve(),Ve=null,a.value=wt,ln=!1,ie=!1),D()}}};function Te(v){return v.reduce((x,A)=>x.then(()=>K(A)),Promise.resolve())}return Os}function X_(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(c=>xn(c,l))?s.push(l):n.push(l));const a=t.matched[o];a&&(e.matched.find(c=>xn(c,a))||i.push(a))}return[n,s,i]}const J_="/BLOOMTOXIC/",Z_=[{path:J_+":pathMatch(.*)",name:"error",component:()=>Gp(()=>import("./index-82b827f9.js"),["assets/index-82b827f9.js","assets/index-70faa981.css"])}],eg=Y_({history:f_(),routes:Z_});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w=function(t,e){if(!t)throw Bn(e)},Bn=function(t){return new Error("Firebase Database ("+iu.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},tg=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},mo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let f=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(f=64)),s.push(n[u],n[h],n[f],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ru(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw new ng;const f=r<<2|l>>4;if(s.push(f),c!==64){const _=l<<4&240|c>>2;if(s.push(_),h!==64){const y=c<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ng extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ou=function(t){const e=ru(t);return mo.encodeByteArray(e,!0)},Xs=function(t){return ou(t).replace(/\./g,"")},Tr=function(t){try{return mo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(t){return lu(void 0,t)}function lu(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ig(n)||(t[n]=lu(t[n],e[n]));return t}function ig(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=()=>rg().__FIREBASE_DEFAULTS__,lg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ag=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Tr(t[1]);return e&&JSON.parse(e)},au=()=>{try{return og()||lg()||ag()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cg=t=>{var e,n;return(n=(e=au())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ug=t=>{const e=cg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},cu=()=>{var t;return(t=au())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Xs(JSON.stringify(n)),Xs(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fg())}function dg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hu(){return iu.NODE_ADMIN===!0}function pg(){try{return typeof indexedDB=="object"}catch{return!1}}function _g(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg="FirebaseError";class Is extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=gg,Object.setPrototypeOf(this,Is.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fu.prototype.create)}}class fu{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?mg(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Is(i,l,s)}}function mg(t,e){return t.replace(yg,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const yg=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(t){return JSON.parse(t)}function be(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ps(Tr(r[0])||""),n=ps(Tr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},vg=function(t){const e=du(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Eg=function(t){const e=du(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Pn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Jl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Js(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Ar(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Zl(r)&&Zl(o)){if(!Ar(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Zl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const f=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function pu(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,w(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ni=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(t){return t&&t._delegate?t._delegate:t}class _s{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new yo;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Tg(e))try{this.getOrInitializeService({instanceIdentifier:Ut})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ut){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ut){return this.instances.has(e)}getOptions(e=Ut){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Sg(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ut){return this.component?this.component.multipleInstances?e:Ut:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sg(t){return t===Ut?void 0:t}function Tg(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ig(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const Rg={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},xg=le.INFO,Ng={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},Pg=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Ng[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _u{constructor(e){this.name=e,this._logLevel=xg,this._logHandler=Pg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const Og=(t,e)=>e.some(n=>t instanceof n);let ea,ta;function kg(){return ea||(ea=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dg(){return ta||(ta=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gu=new WeakMap,Rr=new WeakMap,mu=new WeakMap,Yi=new WeakMap,vo=new WeakMap;function Mg(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Nt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&gu.set(n,t)}).catch(()=>{}),vo.set(e,t),e}function Lg(t){if(Rr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Rr.set(t,e)}let xr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Rr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||mu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Fg(t){xr=t(xr)}function Bg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Xi(this),e,...n);return mu.set(s,e.sort?e.sort():[e]),Nt(s)}:Dg().includes(t)?function(...e){return t.apply(Xi(this),e),Nt(gu.get(this))}:function(...e){return Nt(t.apply(Xi(this),e))}}function Hg(t){return typeof t=="function"?Bg(t):(t instanceof IDBTransaction&&Lg(t),Og(t,kg())?new Proxy(t,xr):t)}function Nt(t){if(t instanceof IDBRequest)return Mg(t);if(Yi.has(t))return Yi.get(t);const e=Hg(t);return e!==t&&(Yi.set(t,e),vo.set(e,t)),e}const Xi=t=>vo.get(t);function Wg(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Nt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(Nt(o.result),a.oldVersion,a.newVersion,Nt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Ug=["get","getKey","getAll","getAllKeys","count"],$g=["put","add","delete","clear"],Ji=new Map;function na(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ji.get(e))return Ji.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=$g.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Ug.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return Ji.set(e,r),r}Fg(t=>({...t,get:(e,n,s)=>na(e,n)||t.get(e,n,s),has:(e,n)=>!!na(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Vg(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Vg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nr="@firebase/app",sa="0.9.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new _u("@firebase/app"),zg="@firebase/app-compat",qg="@firebase/analytics-compat",Kg="@firebase/analytics",Gg="@firebase/app-check-compat",Qg="@firebase/app-check",Yg="@firebase/auth",Xg="@firebase/auth-compat",Jg="@firebase/database",Zg="@firebase/database-compat",em="@firebase/functions",tm="@firebase/functions-compat",nm="@firebase/installations",sm="@firebase/installations-compat",im="@firebase/messaging",rm="@firebase/messaging-compat",om="@firebase/performance",lm="@firebase/performance-compat",am="@firebase/remote-config",cm="@firebase/remote-config-compat",um="@firebase/storage",hm="@firebase/storage-compat",fm="@firebase/firestore",dm="@firebase/firestore-compat",pm="firebase",_m="10.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr="[DEFAULT]",gm={[Nr]:"fire-core",[zg]:"fire-core-compat",[Kg]:"fire-analytics",[qg]:"fire-analytics-compat",[Qg]:"fire-app-check",[Gg]:"fire-app-check-compat",[Yg]:"fire-auth",[Xg]:"fire-auth-compat",[Jg]:"fire-rtdb",[Zg]:"fire-rtdb-compat",[em]:"fire-fn",[tm]:"fire-fn-compat",[nm]:"fire-iid",[sm]:"fire-iid-compat",[im]:"fire-fcm",[rm]:"fire-fcm-compat",[om]:"fire-perf",[lm]:"fire-perf-compat",[am]:"fire-rc",[cm]:"fire-rc-compat",[um]:"fire-gcs",[hm]:"fire-gcs-compat",[fm]:"fire-fst",[dm]:"fire-fst-compat","fire-js":"fire-js",[pm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=new Map,Or=new Map;function mm(t,e){try{t.container.addComponent(e)}catch(n){Zt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ei(t){const e=t.name;if(Or.has(e))return Zt.debug(`There were multiple attempts to register component ${e}.`),!1;Or.set(e,t);for(const n of Zs.values())mm(n,t);return!0}function ym(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Pt=new fu("app","Firebase",vm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new _s("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm=_m;function yu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Pr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Pt.create("bad-app-name",{appName:String(i)});if(n||(n=cu()),!n)throw Pt.create("no-options");const r=Zs.get(i);if(r){if(Ar(n,r.options)&&Ar(s,r.config))return r;throw Pt.create("duplicate-app",{appName:i})}const o=new Ag(i);for(const a of Or.values())o.addComponent(a);const l=new Em(n,s,o);return Zs.set(i,l),l}function Cm(t=Pr){const e=Zs.get(t);if(!e&&t===Pr&&cu())return yu();if(!e)throw Pt.create("no-app",{appName:t});return e}function bn(t,e,n){var s;let i=(s=gm[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zt.warn(l.join(" "));return}ei(new _s(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm="firebase-heartbeat-database",Im=1,gs="firebase-heartbeat-store";let Zi=null;function vu(){return Zi||(Zi=Wg(wm,Im,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(gs)}}}).catch(t=>{throw Pt.create("idb-open",{originalErrorMessage:t.message})})),Zi}async function Sm(t){try{return await(await vu()).transaction(gs).objectStore(gs).get(Eu(t))}catch(e){if(e instanceof Is)Zt.warn(e.message);else{const n=Pt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zt.warn(n.message)}}}async function ia(t,e){try{const s=(await vu()).transaction(gs,"readwrite");await s.objectStore(gs).put(e,Eu(t)),await s.done}catch(n){if(n instanceof Is)Zt.warn(n.message);else{const s=Pt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zt.warn(s.message)}}}function Eu(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm=1024,Am=30*24*60*60*1e3;class Rm{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Nm(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ra();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Am}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ra(),{heartbeatsToSend:n,unsentEntries:s}=xm(this._heartbeatsCache.heartbeats),i=Xs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ra(){return new Date().toISOString().substring(0,10)}function xm(t,e=Tm){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),oa(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),oa(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Nm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pg()?_g().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Sm(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ia(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ia(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function oa(t){return Xs(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(t){ei(new _s("platform-logger",e=>new jg(e),"PRIVATE")),ei(new _s("heartbeat",e=>new Rm(e),"PRIVATE")),bn(Nr,sa,t),bn(Nr,sa,"esm2017"),bn("fire-js","")}Pm("");var Om="firebase",km="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bn(Om,km,"app");const la="@firebase/database",aa="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bu="";function Dm(t){bu=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),be(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ps(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return vt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Mm(e)}}catch{}return new Lm},Kt=Cu("localStorage"),kr=Cu("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new _u("@firebase/database"),Fm=function(){let t=1;return function(){return t++}}(),wu=function(t){const e=wg(t),n=new Cg;n.update(e);const s=n.digest();return mo.encodeByteArray(s)},Ss=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ss.apply(null,s):typeof s=="object"?e+=be(s):e+=s,e+=" "}return e};let Yt=null,ca=!0;const Bm=function(t,e){w(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Cn.logLevel=le.VERBOSE,Yt=Cn.log.bind(Cn),e&&kr.set("logging_enabled",!0)):typeof t=="function"?Yt=t:(Yt=null,kr.remove("logging_enabled"))},Ae=function(...t){if(ca===!0&&(ca=!1,Yt===null&&kr.get("logging_enabled")===!0&&Bm(!0)),Yt){const e=Ss.apply(null,t);Yt(e)}},Ts=function(t){return function(...e){Ae(t,...e)}},Dr=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ss(...t);Cn.error(e)},mt=function(...t){const e=`FIREBASE FATAL ERROR: ${Ss(...t)}`;throw Cn.error(e),new Error(e)},je=function(...t){const e="FIREBASE WARNING: "+Ss(...t);Cn.warn(e)},Hm=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&je("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Iu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Wm=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},On="[MIN_NAME]",en="[MAX_NAME]",Hn=function(t,e){if(t===e)return 0;if(t===On||e===en)return-1;if(e===On||t===en)return 1;{const n=ua(t),s=ua(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Um=function(t,e){return t===e?0:t<e?-1:1},Vn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+be(e))},Eo=function(t){if(typeof t!="object"||t===null)return be(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=be(e[s]),n+=":",n+=Eo(t[e[s]]);return n+="}",n},Su=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Be(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Tu=function(t){w(!Iu(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let f=parseInt(u.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},$m=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},jm=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Vm(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const zm=new RegExp("^-?(0*)\\d{1,10}$"),qm=-2147483648,Km=2147483647,ua=function(t){if(zm.test(t)){const e=Number(t);if(e>=qm&&e<=Km)return e}return null},As=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw je("Exception was thrown by user callback.",n),e},Math.floor(0))}},Gm=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ns=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){je(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ae("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',je(e)}}class wn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}wn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo="5",Au="v",Ru="s",xu="r",Nu="f",Pu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ou="ls",ku="p",Mr="ac",Du="websocket",Mu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Kt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Kt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Xm(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Fu(t,e,n){w(typeof e=="string","typeof type must == string"),w(typeof n=="object","typeof params must == object");let s;if(e===Du)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Mu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Xm(t)&&(n.ns=t.namespace);const i=[];return Be(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(){this.counters_={}}incrementCounter(e,n=1){vt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return sg(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er={},tr={};function Co(t){const e=t.toString();return er[e]||(er[e]=new Jm),er[e]}function Zm(t,e){const n=t.toString();return tr[n]||(tr[n]=e()),tr[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&As(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha="start",ty="close",ny="pLPCommand",sy="pRTLPCB",Bu="id",Hu="pw",Wu="ser",iy="cb",ry="seg",oy="ts",ly="d",ay="dframe",Uu=1870,$u=30,cy=Uu-$u,uy=25e3,hy=3e4;class pn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ts(e),this.stats_=Co(n),this.urlFn=a=>(this.appCheckToken&&(a[Mr]=this.appCheckToken),Fu(n,Mu,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new ey(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(hy)),Wm(()=>{if(this.isClosed_)return;this.scriptTagHolder=new wo((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ha)this.id=l,this.password=a;else if(o===ty)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[ha]="t",s[Wu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[iy]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Au]=bo,this.transportSessionId&&(s[Ru]=this.transportSessionId),this.lastSessionId&&(s[Ou]=this.lastSessionId),this.applicationId&&(s[ku]=this.applicationId),this.appCheckToken&&(s[Mr]=this.appCheckToken),typeof location<"u"&&location.hostname&&Pu.test(location.hostname)&&(s[xu]=Nu);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){pn.forceAllow_=!0}static forceDisallow(){pn.forceDisallow_=!0}static isAvailable(){return pn.forceAllow_?!0:!pn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!$m()&&!jm()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=ou(n),i=Su(s,cy);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[ay]="t",s[Bu]=e,s[Hu]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=be(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class wo{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Fm(),window[ny+this.uniqueCallbackIdentifier]=e,window[sy+this.uniqueCallbackIdentifier]=n,this.myIFrame=wo.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ae("frame writing exception"),l.stack&&Ae(l.stack),Ae(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ae("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Bu]=this.myID,e[Hu]=this.myPW,e[Wu]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+$u+s.length<=Uu;){const o=this.pendingSegs.shift();s=s+"&"+ry+i+"="+o.seg+"&"+oy+i+"="+o.ts+"&"+ly+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(uy)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ae("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy=16384,dy=45e3;let ti=null;typeof MozWebSocket<"u"?ti=MozWebSocket:typeof WebSocket<"u"&&(ti=WebSocket);class Ge{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ts(this.connId),this.stats_=Co(n),this.connURL=Ge.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Au]=bo,typeof location<"u"&&location.hostname&&Pu.test(location.hostname)&&(o[xu]=Nu),n&&(o[Ru]=n),s&&(o[Ou]=s),i&&(o[Mr]=i),r&&(o[ku]=r),Fu(e,Du,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Kt.set("previous_websocket_failure",!0);try{let s;hu(),this.mySock=new ti(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ge.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ti!==null&&!Ge.forceDisallow_}static previouslyFailed(){return Kt.isInMemoryStorage||Kt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Kt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ps(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(w(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Su(n,fy);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(dy))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ge.responsesRequiredToBeHealthy=2;Ge.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[pn,Ge]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ge&&Ge.isAvailable();let s=n&&!Ge.previouslyFailed();if(e.webSocketOnly&&(n||je("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ge];else{const i=this.transports_=[];for(const r of ms.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ms.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ms.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py=6e4,_y=5e3,gy=10*1024,my=100*1024,nr="t",fa="d",yy="s",da="r",vy="e",pa="o",_a="a",ga="n",ma="p",Ey="h";class by{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ts("c:"+this.id+":"),this.transportManager_=new ms(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ns(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>my?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>gy?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(nr in e){const n=e[nr];n===_a?this.upgradeIfSecondaryHealthy_():n===da?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===pa&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Vn("t",e),s=Vn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ma,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:_a,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ga,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Vn("t",e),s=Vn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Vn(nr,e);if(fa in e){const s=e[fa];if(n===Ey){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===ga){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===yy?this.onConnectionShutdown_(s):n===da?this.onReset_(s):n===vy?Dr("Server Error: "+s):n===pa?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Dr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),bo!==s&&je("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ns(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(py))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ns(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(_y))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ma,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Kt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e){this.allowedEvents_=e,this.listeners_={},w(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){w(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends Vu{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!uu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ni}getInitialEvent(e){return w(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya=32,va=768;class re{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function J(){return new re("")}function V(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Mt(t){return t.pieces_.length-t.pieceNum_}function ae(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new re(t.pieces_,e)}function zu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Cy(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function qu(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Ku(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new re(e,0)}function ge(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof re)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new re(n,0)}function z(t){return t.pieceNum_>=t.pieces_.length}function Me(t,e){const n=V(t),s=V(e);if(n===null)return e;if(n===s)return Me(ae(t),ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Io(t,e){if(Mt(t)!==Mt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ye(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Mt(t)>Mt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class wy{constructor(e,n){this.errorPrefix_=n,this.parts_=qu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ni(this.parts_[s]);Gu(this)}}function Iy(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ni(e),Gu(t)}function Sy(t){const e=t.parts_.pop();t.byteLength_-=Ni(e),t.parts_.length>0&&(t.byteLength_-=1)}function Gu(t){if(t.byteLength_>va)throw new Error(t.errorPrefix_+"has a key path longer than "+va+" bytes ("+t.byteLength_+").");if(t.parts_.length>ya)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ya+") or object contains a cycle "+$t(t))}function $t(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So extends Vu{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new So}getInitialEvent(e){return w(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=1e3,Ty=60*5*1e3,Ea=30*1e3,Ay=1.3,Ry=3e4,xy="server_kill",ba=3;class pt extends ju{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=pt.nextPersistentConnectionId_++,this.log_=Ts("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=zn,this.maxReconnectDelay_=Ty,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!hu())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");So.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ni.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(be(r)),w(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new yo,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),w(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;pt.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&vt(e,"w")){const s=Pn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();je(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Eg(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ea)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=vg(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+be(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Dr("Unrecognized action received from server: "+be(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){w(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=zn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=zn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Ry&&(this.reconnectDelay_=zn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Ay)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+pt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){w(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ae("getToken() completed but was canceled"):(Ae("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new by(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{je(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(xy)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&je(h),a())}}}interrupt(e){Ae("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ae("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Jl(this.interruptReasons_)&&(this.reconnectDelay_=zn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Eo(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new re(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ae("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ba&&(this.reconnectDelay_=Ea,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ae("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ba&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+bu.replace(/\./g,"-")]=1,uu()?e["framework.cordova"]=1:dg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ni.getInstance().currentlyOnline();return Jl(this.interruptReasons_)&&e}}pt.nextPersistentConnectionId_=0;pt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new $(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new $(On,e),i=new $(On,n);return this.compare(s,i)!==0}minPost(){return $.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hs;class Qu extends Oi{static get __EMPTY_NODE(){return Hs}static set __EMPTY_NODE(e){Hs=e}compare(e,n){return Hn(e.name,n.name)}isDefinedOn(e){throw Bn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return $.MIN}maxPost(){return new $(en,Hs)}makePost(e,n){return w(typeof e=="string","KeyIndex indexValue must always be a string."),new $(e,Hs)}toString(){return".key"}}const In=new Qu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ve{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ve.RED,this.left=i??Le.EMPTY_NODE,this.right=r??Le.EMPTY_NODE}copy(e,n,s,i,r){return new ve(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Le.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Le.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ve.RED=!0;ve.BLACK=!1;class Ny{copy(e,n,s,i,r){return this}insert(e,n,s){return new ve(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Le{constructor(e,n=Le.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Le(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ve.BLACK,null,null))}remove(e){return new Le(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ve.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ws(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ws(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ws(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ws(this.root_,null,this.comparator_,!0,e)}}Le.EMPTY_NODE=new Ny;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(t,e){return Hn(t.name,e.name)}function To(t,e){return Hn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lr;function Oy(t){Lr=t}const Yu=function(t){return typeof t=="number"?"number:"+Tu(t):"string:"+t},Xu=function(t){if(t.isLeafNode()){const e=t.val();w(typeof e=="string"||typeof e=="number"||typeof e=="object"&&vt(e,".sv"),"Priority must be a string or number.")}else w(t===Lr||t.isEmpty(),"priority of unexpected type.");w(t===Lr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ca;class ye{constructor(e,n=ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,w(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Xu(this.priorityNode_)}static set __childrenNodeConstructor(e){Ca=e}static get __childrenNodeConstructor(){return Ca}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ye(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return z(e)?this:V(e)===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=V(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(w(s!==".priority"||Mt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(ae(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Yu(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Tu(this.value_):e+=this.value_,this.lazyHash_=wu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ye.__childrenNodeConstructor?-1:(w(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ye.VALUE_TYPE_ORDER.indexOf(n),r=ye.VALUE_TYPE_ORDER.indexOf(s);return w(i>=0,"Unknown leaf type: "+n),w(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ju,Zu;function ky(t){Ju=t}function Dy(t){Zu=t}class My extends Oi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Hn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return $.MIN}maxPost(){return new $(en,new ye("[PRIORITY-POST]",Zu))}makePost(e,n){const s=Ju(e);return new $(n,new ye("[PRIORITY-POST]",s))}toString(){return".priority"}}const fe=new My;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly=Math.log(2);class Fy{constructor(e){const n=r=>parseInt(Math.log(r)/Ly,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const si=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,f;if(u===0)return null;if(u===1)return h=t[a],f=n?n(h):h,new ve(f,h.node,ve.BLACK,null,null);{const _=parseInt(u/2,10)+a,y=i(a,_),S=i(_+1,c);return h=t[_],f=n?n(h):h,new ve(f,h.node,ve.BLACK,y,S)}},r=function(a){let c=null,u=null,h=t.length;const f=function(y,S){const N=h-y,P=h;h-=y;const k=i(N+1,P),j=t[N],M=n?n(j):j;_(new ve(M,j.node,S,null,k))},_=function(y){c?(c.left=y,c=y):(u=y,c=y)};for(let y=0;y<a.count;++y){const S=a.nextBitIsOne(),N=Math.pow(2,a.count-(y+1));S?f(N,ve.BLACK):(f(N,ve.BLACK),f(N,ve.RED))}return u},o=new Fy(t.length),l=r(o);return new Le(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sr;const fn={};class dt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return w(fn&&fe,"ChildrenNode.ts has not been loaded"),sr=sr||new dt({".priority":fn},{".priority":fe}),sr}get(e){const n=Pn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Le?n:null}hasIndex(e){return vt(this.indexSet_,e.toString())}addIndex(e,n){w(e!==In,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator($.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=si(s,e.getCompare()):l=fn;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new dt(u,c)}addToIndexes(e,n){const s=Js(this.indexes_,(i,r)=>{const o=Pn(this.indexSet_,r);if(w(o,"Missing index implementation for "+r),i===fn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator($.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),si(l,o.getCompare())}else return fn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new $(e.name,l))),a.insert(e,e.node)}});return new dt(s,this.indexSet_)}removeFromIndexes(e,n){const s=Js(this.indexes_,i=>{if(i===fn)return i;{const r=n.get(e.name);return r?i.remove(new $(e.name,r)):i}});return new dt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qn;class B{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Xu(this.priorityNode_),this.children_.isEmpty()&&w(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return qn||(qn=new B(new Le(To),null,dt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||qn}updatePriority(e){return this.children_.isEmpty()?this:new B(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?qn:n}}getChild(e){const n=V(e);return n===null?this:this.getImmediateChild(n).getChild(ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(w(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new $(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?qn:this.priorityNode_;return new B(i,o,r)}}updateChild(e,n){const s=V(e);if(s===null)return n;{w(V(e)!==".priority"||Mt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ae(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(fe,(o,l)=>{n[o]=l.val(e),s++,r&&B.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Yu(this.getPriority().val())+":"),this.forEachChild(fe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":wu(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new $(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new $(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new $(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,$.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,$.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Rs?-1:0}withIndex(e){if(e===In||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new B(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===In||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(fe),i=n.getIterator(fe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===In?null:this.indexMap_.get(e.toString())}}B.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class By extends B{constructor(){super(new Le(To),B.EMPTY_NODE,dt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return B.EMPTY_NODE}isEmpty(){return!1}}const Rs=new By;Object.defineProperties($,{MIN:{value:new $(On,B.EMPTY_NODE)},MAX:{value:new $(en,Rs)}});Qu.__EMPTY_NODE=B.EMPTY_NODE;ye.__childrenNodeConstructor=B;Oy(Rs);Dy(Rs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy=!0;function Re(t,e=null){if(t===null)return B.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),w(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ye(n,Re(e))}if(!(t instanceof Array)&&Hy){const n=[];let s=!1;if(Be(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Re(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new $(o,a)))}}),n.length===0)return B.EMPTY_NODE;const r=si(n,Py,o=>o.name,To);if(s){const o=si(n,fe.getCompare());return new B(r,Re(e),new dt({".priority":o},{".priority":fe}))}else return new B(r,Re(e),dt.Default)}else{let n=B.EMPTY_NODE;return Be(t,(s,i)=>{if(vt(t,s)&&s.substring(0,1)!=="."){const r=Re(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Re(e))}}ky(Re);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy extends Oi{constructor(e){super(),this.indexPath_=e,w(!z(e)&&V(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Hn(e.name,n.name):r}makePost(e,n){const s=Re(e),i=B.EMPTY_NODE.updateChild(this.indexPath_,s);return new $(n,i)}maxPost(){const e=B.EMPTY_NODE.updateChild(this.indexPath_,Rs);return new $(en,e)}toString(){return qu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy extends Oi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Hn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return $.MIN}maxPost(){return $.MAX}makePost(e,n){const s=Re(e);return new $(n,s)}toString(){return".value"}}const $y=new Uy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(t){return{type:"value",snapshotNode:t}}function kn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ys(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function vs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function jy(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){w(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(ys(n,l)):w(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(kn(n,s)):o.trackChildChange(vs(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(fe,(i,r)=>{n.hasChild(i)||s.trackChildChange(ys(i,r))}),n.isLeafNode()||n.forEachChild(fe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(vs(i,r,o))}else s.trackChildChange(kn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?B.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e){this.indexedFilter_=new Ao(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Es.getStartPost_(e),this.endPost_=Es.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new $(n,s))||(s=B.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=B.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(B.EMPTY_NODE);const r=this;return n.forEachChild(fe,(o,l)=>{r.matches(new $(o,l))||(i=i.updateImmediateChild(o,B.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Es(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new $(n,s))||(s=B.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=B.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=B.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(B.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,B.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,_)=>h(_,f)}else o=this.index_.getCompare();const l=e;w(l.numChildren()===this.limit_,"");const a=new $(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,a);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(vs(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(ys(n,h));const S=l.updateImmediateChild(n,B.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(kn(f.name,f.node)),S.updateImmediateChild(f.name,f.node)):S}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(ys(c.name,c.node)),r.trackChildChange(kn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,B.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=fe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return w(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return w(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:On}hasEnd(){return this.endSet_}getIndexEndValue(){return w(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return w(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:en}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return w(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===fe}copy(){const e=new Ro;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function zy(t){return t.loadsAllData()?new Ao(t.getIndex()):t.hasLimit()?new Vy(t):new Es(t)}function wa(t){const e={};if(t.isDefault())return e;let n;if(t.index_===fe?n="$priority":t.index_===$y?n="$value":t.index_===In?n="$key":(w(t.index_ instanceof Wy,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=be(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=be(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+be(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=be(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+be(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ia(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==fe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends ju{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ts("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(w(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ii.getListenId_(e,s),l={};this.listens_[o]=l;const a=wa(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Pn(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=ii.getListenId_(e,n);delete this.listens_[s]}get(e){const n=wa(e._queryParams),s=e._path.toString(),i=new yo;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+bg(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=ps(l.responseText)}catch{je("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&je("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(){this.rootNode_=B.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(){return{value:null,children:new Map}}function th(t,e,n){if(z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=V(e);t.children.has(s)||t.children.set(s,ri());const i=t.children.get(s);e=ae(e),th(i,e,n)}}function Fr(t,e,n){t.value!==null?n(e,t.value):Ky(t,(s,i)=>{const r=new re(e.toString()+"/"+s);Fr(i,r,n)})}function Ky(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Be(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=10*1e3,Qy=30*1e3,Yy=5*60*1e3;class Xy{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Gy(e);const s=Sa+(Qy-Sa)*Math.random();ns(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Be(e,(i,r)=>{r>0&&vt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),ns(this.reportStats_.bind(this),Math.floor(Math.random()*2*Yy))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xe;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Xe||(Xe={}));function nh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function xo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function No(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Xe.ACK_USER_WRITE,this.source=nh()}operationForChild(e){if(z(this.path)){if(this.affectedTree.value!=null)return w(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new re(e));return new oi(J(),n,this.revert)}}else return w(V(this.path)===e,"operationForChild called for unrelated child."),new oi(ae(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,n){this.source=e,this.path=n,this.type=Xe.LISTEN_COMPLETE}operationForChild(e){return z(this.path)?new bs(this.source,J()):new bs(this.source,ae(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Xe.OVERWRITE}operationForChild(e){return z(this.path)?new tn(this.source,J(),this.snap.getImmediateChild(e)):new tn(this.source,ae(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Xe.MERGE}operationForChild(e){if(z(this.path)){const n=this.children.subtree(new re(e));return n.isEmpty()?null:n.value?new tn(this.source,J(),n.value):new Cs(this.source,J(),n)}else return w(V(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Cs(this.source,ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(z(e))return this.isFullyInitialized()&&!this.filtered_;const n=V(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Zy(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(jy(o.childName,o.snapshotNode))}),Kn(t,i,"child_removed",e,s,n),Kn(t,i,"child_added",e,s,n),Kn(t,i,"child_moved",r,s,n),Kn(t,i,"child_changed",e,s,n),Kn(t,i,"value",e,s,n),i}function Kn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>tv(t,l,a)),o.forEach(l=>{const a=ev(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function ev(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function tv(t,e,n){if(e.childName==null||n.childName==null)throw Bn("Should only compare child_ events.");const s=new $(e.childName,e.snapshotNode),i=new $(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(t,e){return{eventCache:t,serverCache:e}}function ss(t,e,n,s){return ki(new nn(e,n,s),t.serverCache)}function sh(t,e,n,s){return ki(t.eventCache,new nn(e,n,s))}function Br(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function sn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ir;const nv=()=>(ir||(ir=new Le(Um)),ir);class ce{constructor(e,n=nv()){this.value=e,this.children=n}static fromObject(e){let n=new ce(null);return Be(e,(s,i)=>{n=n.set(new re(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:J(),value:this.value};if(z(e))return null;{const s=V(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ae(e),n);return r!=null?{path:ge(new re(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(z(e))return this;{const n=V(e),s=this.children.get(n);return s!==null?s.subtree(ae(e)):new ce(null)}}set(e,n){if(z(e))return new ce(n,this.children);{const s=V(e),r=(this.children.get(s)||new ce(null)).set(ae(e),n),o=this.children.insert(s,r);return new ce(this.value,o)}}remove(e){if(z(e))return this.children.isEmpty()?new ce(null):new ce(null,this.children);{const n=V(e),s=this.children.get(n);if(s){const i=s.remove(ae(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ce(null):new ce(this.value,r)}else return this}}get(e){if(z(e))return this.value;{const n=V(e),s=this.children.get(n);return s?s.get(ae(e)):null}}setTree(e,n){if(z(e))return n;{const s=V(e),r=(this.children.get(s)||new ce(null)).setTree(ae(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ce(this.value,o)}}fold(e){return this.fold_(J(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ge(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,J(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(z(e))return null;{const r=V(e),o=this.children.get(r);return o?o.findOnPath_(ae(e),ge(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,J(),n)}foreachOnPath_(e,n,s){if(z(e))return this;{this.value&&s(n,this.value);const i=V(e),r=this.children.get(i);return r?r.foreachOnPath_(ae(e),ge(n,i),s):new ce(null)}}foreach(e){this.foreach_(J(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ge(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.writeTree_=e}static empty(){return new et(new ce(null))}}function is(t,e,n){if(z(e))return new et(new ce(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Me(i,e);return r=r.updateChild(o,n),new et(t.writeTree_.set(i,r))}else{const i=new ce(n),r=t.writeTree_.setTree(e,i);return new et(r)}}}function Ta(t,e,n){let s=t;return Be(n,(i,r)=>{s=is(s,ge(e,i),r)}),s}function Aa(t,e){if(z(e))return et.empty();{const n=t.writeTree_.setTree(e,new ce(null));return new et(n)}}function Hr(t,e){return rn(t,e)!=null}function rn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Me(n.path,e)):null}function Ra(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(fe,(s,i)=>{e.push(new $(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new $(s,i.value))}),e}function Ot(t,e){if(z(e))return t;{const n=rn(t,e);return n!=null?new et(new ce(n)):new et(t.writeTree_.subtree(e))}}function Wr(t){return t.writeTree_.isEmpty()}function Dn(t,e){return ih(J(),t.writeTree_,e)}function ih(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(w(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=ih(ge(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ge(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(t,e){return ah(e,t)}function sv(t,e,n,s,i){w(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=is(t.visibleWrites,e,n)),t.lastWriteId=s}function iv(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function rv(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);w(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&ov(l,s.path)?i=!1:Ye(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return lv(t),!0;if(s.snap)t.visibleWrites=Aa(t.visibleWrites,s.path);else{const l=s.children;Be(l,a=>{t.visibleWrites=Aa(t.visibleWrites,ge(s.path,a))})}return!0}else return!1}function ov(t,e){if(t.snap)return Ye(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ye(ge(t.path,n),e))return!0;return!1}function lv(t){t.visibleWrites=rh(t.allWrites,av,J()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function av(t){return t.visible}function rh(t,e,n){let s=et.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Ye(n,o)?(l=Me(n,o),s=is(s,l,r.snap)):Ye(o,n)&&(l=Me(o,n),s=is(s,J(),r.snap.getChild(l)));else if(r.children){if(Ye(n,o))l=Me(n,o),s=Ta(s,l,r.children);else if(Ye(o,n))if(l=Me(o,n),z(l))s=Ta(s,J(),r.children);else{const a=Pn(r.children,V(l));if(a){const c=a.getChild(ae(l));s=is(s,J(),c)}}}else throw Bn("WriteRecord should have .snap or .children")}}return s}function oh(t,e,n,s,i){if(!s&&!i){const r=rn(t.visibleWrites,e);if(r!=null)return r;{const o=Ot(t.visibleWrites,e);if(Wr(o))return n;if(n==null&&!Hr(o,J()))return null;{const l=n||B.EMPTY_NODE;return Dn(o,l)}}}else{const r=Ot(t.visibleWrites,e);if(!i&&Wr(r))return n;if(!i&&n==null&&!Hr(r,J()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Ye(c.path,e)||Ye(e,c.path))},l=rh(t.allWrites,o,e),a=n||B.EMPTY_NODE;return Dn(l,a)}}}function cv(t,e,n){let s=B.EMPTY_NODE;const i=rn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(fe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Ot(t.visibleWrites,e);return n.forEachChild(fe,(o,l)=>{const a=Dn(Ot(r,new re(o)),l);s=s.updateImmediateChild(o,a)}),Ra(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ot(t.visibleWrites,e);return Ra(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function uv(t,e,n,s,i){w(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ge(e,n);if(Hr(t.visibleWrites,r))return null;{const o=Ot(t.visibleWrites,r);return Wr(o)?i.getChild(n):Dn(o,i.getChild(n))}}function hv(t,e,n,s){const i=ge(e,n),r=rn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Ot(t.visibleWrites,i);return Dn(o,s.getNode().getImmediateChild(n))}else return null}function fv(t,e){return rn(t.visibleWrites,e)}function dv(t,e,n,s,i,r,o){let l;const a=Ot(t.visibleWrites,e),c=rn(a,J());if(c!=null)l=c;else if(n!=null)l=Dn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=f.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=f.getNext();return u}else return[]}function pv(){return{visibleWrites:et.empty(),allWrites:[],lastWriteId:-1}}function li(t,e,n,s){return oh(t.writeTree,t.treePath,e,n,s)}function Oo(t,e){return cv(t.writeTree,t.treePath,e)}function xa(t,e,n,s){return uv(t.writeTree,t.treePath,e,n,s)}function ai(t,e){return fv(t.writeTree,ge(t.treePath,e))}function _v(t,e,n,s,i,r){return dv(t.writeTree,t.treePath,e,n,s,i,r)}function ko(t,e,n){return hv(t.writeTree,t.treePath,e,n)}function lh(t,e){return ah(ge(t.treePath,e),t.writeTree)}function ah(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;w(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),w(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,vs(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,ys(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,kn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,vs(s,e.snapshotNode,i.oldSnap));else throw Bn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const ch=new mv;class Do{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new nn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ko(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:sn(this.viewCache_),r=_v(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(t){return{filter:t}}function vv(t,e){w(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),w(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Ev(t,e,n,s,i){const r=new gv;let o,l;if(n.type===Xe.OVERWRITE){const c=n;c.source.fromUser?o=Ur(t,e,c.path,c.snap,s,i,r):(w(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!z(c.path),o=ci(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===Xe.MERGE){const c=n;c.source.fromUser?o=Cv(t,e,c.path,c.children,s,i,r):(w(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=$r(t,e,c.path,c.children,s,i,l,r))}else if(n.type===Xe.ACK_USER_WRITE){const c=n;c.revert?o=Sv(t,e,c.path,s,i,r):o=wv(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Xe.LISTEN_COMPLETE)o=Iv(t,e,n.path,s,r);else throw Bn("Unknown operation type: "+n.type);const a=r.getChanges();return bv(e,o,a),{viewCache:o,changes:a}}function bv(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Br(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(eh(Br(e)))}}function uh(t,e,n,s,i,r){const o=e.eventCache;if(ai(s,n)!=null)return e;{let l,a;if(z(n))if(w(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=sn(e),u=c instanceof B?c:B.EMPTY_NODE,h=Oo(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=li(s,sn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=V(n);if(c===".priority"){w(Mt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=xa(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=ae(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=xa(s,n,o.getNode(),a);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=ko(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return ss(e,l,o.isFullyInitialized()||z(n),t.filter.filtersNodes())}}function ci(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(z(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),_,null)}else{const _=V(n);if(!a.isCompleteForPath(n)&&Mt(n)>1)return e;const y=ae(n),N=a.getNode().getImmediateChild(_).updateChild(y,s);_===".priority"?c=u.updatePriority(a.getNode(),N):c=u.updateChild(a.getNode(),_,N,y,ch,null)}const h=sh(e,c,a.isFullyInitialized()||z(n),u.filtersNodes()),f=new Do(i,h,r);return uh(t,h,n,i,f,l)}function Ur(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new Do(i,e,r);if(z(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=ss(e,c,!0,t.filter.filtersNodes());else{const h=V(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=ss(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=ae(n),_=l.getNode().getImmediateChild(h);let y;if(z(f))y=s;else{const S=u.getCompleteChild(h);S!=null?zu(f)===".priority"&&S.getChild(Ku(f)).isEmpty()?y=S:y=S.updateChild(f,s):y=B.EMPTY_NODE}if(_.equals(y))a=e;else{const S=t.filter.updateChild(l.getNode(),h,y,f,u,o);a=ss(e,S,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Na(t,e){return t.eventCache.isCompleteForChild(e)}function Cv(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=ge(n,a);Na(e,V(u))&&(l=Ur(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=ge(n,a);Na(e,V(u))||(l=Ur(t,l,u,c,i,r,o))}),l}function Pa(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function $r(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;z(n)?c=s:c=new ce(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),y=Pa(t,_,f);a=ci(t,a,new re(h),y,i,r,o,l)}}),c.children.inorderTraversal((h,f)=>{const _=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!_){const y=e.serverCache.getNode().getImmediateChild(h),S=Pa(t,y,f);a=ci(t,a,new re(h),S,i,r,o,l)}}),a}function wv(t,e,n,s,i,r,o){if(ai(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(z(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return ci(t,e,n,a.getNode().getChild(n),i,r,l,o);if(z(n)){let c=new ce(null);return a.getNode().forEachChild(In,(u,h)=>{c=c.set(new re(u),h)}),$r(t,e,n,c,i,r,l,o)}else return e}else{let c=new ce(null);return s.foreach((u,h)=>{const f=ge(n,u);a.isCompleteForPath(f)&&(c=c.set(u,a.getNode().getChild(f)))}),$r(t,e,n,c,i,r,l,o)}}function Iv(t,e,n,s,i){const r=e.serverCache,o=sh(e,r.getNode(),r.isFullyInitialized()||z(n),r.isFiltered());return uh(t,o,n,s,ch,i)}function Sv(t,e,n,s,i,r){let o;if(ai(s,n)!=null)return e;{const l=new Do(s,e,i),a=e.eventCache.getNode();let c;if(z(n)||V(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=li(s,sn(e));else{const h=e.serverCache.getNode();w(h instanceof B,"serverChildren would be complete if leaf node"),u=Oo(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=V(n);let h=ko(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,ae(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,B.EMPTY_NODE,ae(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=li(s,sn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||ai(s,J())!=null,ss(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Ao(s.getIndex()),r=zy(s);this.processor_=yv(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(B.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(B.EMPTY_NODE,l.getNode(),null),u=new nn(a,o.isFullyInitialized(),i.filtersNodes()),h=new nn(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=ki(h,u),this.eventGenerator_=new Jy(this.query_)}get query(){return this.query_}}function Av(t){return t.viewCache_.serverCache.getNode()}function Rv(t,e){const n=sn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!z(e)&&!n.getImmediateChild(V(e)).isEmpty())?n.getChild(e):null}function Oa(t){return t.eventRegistrations_.length===0}function xv(t,e){t.eventRegistrations_.push(e)}function ka(t,e,n){const s=[];if(n){w(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Da(t,e,n,s){e.type===Xe.MERGE&&e.source.queryId!==null&&(w(sn(t.viewCache_),"We should always have a full cache before handling merges"),w(Br(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Ev(t.processor_,i,e,n,s);return vv(t.processor_,r.viewCache),w(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,hh(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Nv(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(fe,(r,o)=>{s.push(kn(r,o))}),n.isFullyInitialized()&&s.push(eh(n.getNode())),hh(t,s,n.getNode(),e)}function hh(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Zy(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ui;class Pv{constructor(){this.views=new Map}}function Ov(t){w(!ui,"__referenceConstructor has already been defined"),ui=t}function kv(){return w(ui,"Reference.ts has not been loaded"),ui}function Dv(t){return t.views.size===0}function Mo(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return w(r!=null,"SyncTree gave us an op for an invalid query."),Da(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Da(o,e,n,s));return r}}function Mv(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=li(n,i?s:null),a=!1;l?a=!0:s instanceof B?(l=Oo(n,s),a=!1):(l=B.EMPTY_NODE,a=!1);const c=ki(new nn(l,a,!1),new nn(s,i,!1));return new Tv(e,c)}return o}function Lv(t,e,n,s,i,r){const o=Mv(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),xv(o,n),Nv(o,n)}function Fv(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Lt(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(ka(c,n,s)),Oa(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(ka(a,n,s)),Oa(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Lt(t)&&r.push(new(kv())(e._repo,e._path)),{removed:r,events:o}}function fh(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Sn(t,e){let n=null;for(const s of t.views.values())n=n||Rv(s,e);return n}function dh(t,e){if(e._queryParams.loadsAllData())return Di(t);{const s=e._queryIdentifier;return t.views.get(s)}}function ph(t,e){return dh(t,e)!=null}function Lt(t){return Di(t)!=null}function Di(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hi;function Bv(t){w(!hi,"__referenceConstructor has already been defined"),hi=t}function Hv(){return w(hi,"Reference.ts has not been loaded"),hi}let Wv=1;class Ma{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ce(null),this.pendingWriteTree_=pv(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Uv(t,e,n,s,i){return sv(t.pendingWriteTree_,e,n,s,i),i?xs(t,new tn(nh(),e,n)):[]}function _n(t,e,n=!1){const s=iv(t.pendingWriteTree_,e);if(rv(t.pendingWriteTree_,e)){let r=new ce(null);return s.snap!=null?r=r.set(J(),!0):Be(s.children,o=>{r=r.set(new re(o),!0)}),xs(t,new oi(s.path,r,n))}else return[]}function Mi(t,e,n){return xs(t,new tn(xo(),e,n))}function $v(t,e,n){const s=ce.fromObject(n);return xs(t,new Cs(xo(),e,s))}function jv(t,e){return xs(t,new bs(xo(),e))}function Vv(t,e,n){const s=Lo(t,n);if(s){const i=Fo(s),r=i.path,o=i.queryId,l=Me(r,e),a=new bs(No(o),l);return Bo(t,r,a)}else return[]}function jr(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||ph(o,e))){const a=Fv(o,e,n,s);Dv(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(f,_)=>Lt(_));if(u&&!h){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const _=Kv(f);for(let y=0;y<_.length;++y){const S=_[y],N=S.query,P=yh(t,S);t.listenProvider_.startListening(rs(N),fi(t,N),P.hashFn,P.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(rs(e),null):c.forEach(f=>{const _=t.queryToTagMap.get(Li(f));t.listenProvider_.stopListening(rs(f),_)}))}Gv(t,c)}return l}function zv(t,e,n,s){const i=Lo(t,s);if(i!=null){const r=Fo(i),o=r.path,l=r.queryId,a=Me(o,e),c=new tn(No(l),a,n);return Bo(t,o,c)}else return[]}function qv(t,e,n,s){const i=Lo(t,s);if(i){const r=Fo(i),o=r.path,l=r.queryId,a=Me(o,e),c=ce.fromObject(n),u=new Cs(No(l),a,c);return Bo(t,o,u)}else return[]}function La(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,_)=>{const y=Me(f,i);r=r||Sn(_,y),o=o||Lt(_)});let l=t.syncPointTree_.get(i);l?(o=o||Lt(l),r=r||Sn(l,J())):(l=new Pv,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=B.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,y)=>{const S=Sn(y,J());S&&(r=r.updateImmediateChild(_,S))}));const c=ph(l,e);if(!c&&!e._queryParams.loadsAllData()){const f=Li(e);w(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=Qv();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const u=Po(t.pendingWriteTree_,i);let h=Lv(l,e,n,u,r,a);if(!c&&!o&&!s){const f=dh(l,e);h=h.concat(Yv(t,e,f))}return h}function _h(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Me(o,e),c=Sn(l,a);if(c)return c});return oh(i,e,r,n,!0)}function xs(t,e){return gh(e,t.syncPointTree_,null,Po(t.pendingWriteTree_,J()))}function gh(t,e,n,s){if(z(t.path))return mh(t,e,n,s);{const i=e.get(J());n==null&&i!=null&&(n=Sn(i,J()));let r=[];const o=V(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=lh(s,o);r=r.concat(gh(l,a,c,u))}return i&&(r=r.concat(Mo(i,t,s,n))),r}}function mh(t,e,n,s){const i=e.get(J());n==null&&i!=null&&(n=Sn(i,J()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=lh(s,o),u=t.operationForChild(o);u&&(r=r.concat(mh(u,l,a,c)))}),i&&(r=r.concat(Mo(i,t,s,n))),r}function yh(t,e){const n=e.query,s=fi(t,n);return{hashFn:()=>(Av(e)||B.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Vv(t,n._path,s):jv(t,n._path);{const r=Vm(i,n);return jr(t,n,null,r)}}}}function fi(t,e){const n=Li(e);return t.queryToTagMap.get(n)}function Li(t){return t._path.toString()+"$"+t._queryIdentifier}function Lo(t,e){return t.tagToQueryMap.get(e)}function Fo(t){const e=t.indexOf("$");return w(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new re(t.substr(0,e))}}function Bo(t,e,n){const s=t.syncPointTree_.get(e);w(s,"Missing sync point for query tag that we're tracking");const i=Po(t.pendingWriteTree_,e);return Mo(s,n,i,null)}function Kv(t){return t.fold((e,n,s)=>{if(n&&Lt(n))return[Di(n)];{let i=[];return n&&(i=fh(n)),Be(s,(r,o)=>{i=i.concat(o)}),i}})}function rs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Hv())(t._repo,t._path):t}function Gv(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Li(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Qv(){return Wv++}function Yv(t,e,n){const s=e._path,i=fi(t,e),r=yh(t,n),o=t.listenProvider_.startListening(rs(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)w(!Lt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!z(c)&&u&&Lt(u))return[Di(u).query];{let f=[];return u&&(f=f.concat(fh(u).map(_=>_.query))),Be(h,(_,y)=>{f=f.concat(y)}),f}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(rs(u),fi(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ho(n)}node(){return this.node_}}class Wo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ge(this.path_,e);return new Wo(this.syncTree_,n)}node(){return _h(this.syncTree_,this.path_)}}const Xv=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Fa=function(t,e,n){if(!t||typeof t!="object")return t;if(w(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Jv(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Zv(t[".sv"],e);w(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Jv=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:w(!1,"Unexpected server value: "+t)}},Zv=function(t,e,n){t.hasOwnProperty("increment")||w(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&w(!1,"Unexpected increment value: "+s);const i=e.node();if(w(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},eE=function(t,e,n,s){return Uo(e,new Wo(n,t),s)},tE=function(t,e,n){return Uo(t,new Ho(e),n)};function Uo(t,e,n){const s=t.getPriority().val(),i=Fa(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Fa(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ye(l,Re(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ye(i))),o.forEachChild(fe,(l,a)=>{const c=Uo(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function jo(t,e){let n=e instanceof re?e:new re(e),s=t,i=V(n);for(;i!==null;){const r=Pn(s.node.children,i)||{children:{},childCount:0};s=new $o(i,s,r),n=ae(n),i=V(n)}return s}function Wn(t){return t.node.value}function vh(t,e){t.node.value=e,Vr(t)}function Eh(t){return t.node.childCount>0}function nE(t){return Wn(t)===void 0&&!Eh(t)}function Fi(t,e){Be(t.node.children,(n,s)=>{e(new $o(n,t,s))})}function bh(t,e,n,s){n&&!s&&e(t),Fi(t,i=>{bh(i,e,!0,s)}),n&&s&&e(t)}function sE(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ns(t){return new re(t.parent===null?t.name:Ns(t.parent)+"/"+t.name)}function Vr(t){t.parent!==null&&iE(t.parent,t.name,t)}function iE(t,e,n){const s=nE(n),i=vt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Vr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Vr(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE=/[\[\].#$\/\u0000-\u001F\u007F]/,oE=/[\[\].#$\u0000-\u001F\u007F]/,rr=10*1024*1024,Ch=function(t){return typeof t=="string"&&t.length!==0&&!rE.test(t)},wh=function(t){return typeof t=="string"&&t.length!==0&&!oE.test(t)},lE=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),wh(t)},Ih=function(t,e,n){const s=n instanceof re?new wy(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+$t(s));if(typeof e=="function")throw new Error(t+"contains a function "+$t(s)+" with contents = "+e.toString());if(Iu(e))throw new Error(t+"contains "+e.toString()+" "+$t(s));if(typeof e=="string"&&e.length>rr/3&&Ni(e)>rr)throw new Error(t+"contains a string greater than "+rr+" utf8 bytes "+$t(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Be(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ch(o)))throw new Error(t+" contains an invalid key ("+o+") "+$t(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Iy(s,o),Ih(t,l,s),Sy(s)}),i&&r)throw new Error(t+' contains ".value" child '+$t(s)+" in addition to actual children.")}},Sh=function(t,e,n,s){if(!(s&&n===void 0)&&!wh(n))throw new Error(pu(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},aE=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Sh(t,e,n,s)},cE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ch(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!lE(n))throw new Error(pu(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Th(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Io(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ah(t,e,n){Th(t,n),Rh(t,s=>Io(s,e))}function on(t,e,n){Th(t,n),Rh(t,s=>Ye(s,e)||Ye(e,s))}function Rh(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(hE(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function hE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Yt&&Ae("event: "+n.toString()),As(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE="repo_interrupt",dE=25;class pE{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new uE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ri(),this.transactionQueueTree_=new $o,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function _E(t,e,n){if(t.stats_=Co(t.repoInfo_),t.forceRestClient_||Gm())t.server_=new ii(t.repoInfo_,(s,i,r,o)=>{Ba(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ha(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{be(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new pt(t.repoInfo_,e,(s,i,r,o)=>{Ba(t,s,i,r,o)},s=>{Ha(t,s)},s=>{mE(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Zm(t.repoInfo_,()=>new Xy(t.stats_,t.server_)),t.infoData_=new qy,t.infoSyncTree_=new Ma({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=Mi(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Vo(t,"connected",!1),t.serverSyncTree_=new Ma({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);on(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function gE(t){const n=t.infoData_.getNode(new re(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function xh(t){return Xv({timestamp:gE(t)})}function Ba(t,e,n,s,i){t.dataUpdateCount++;const r=new re(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=Js(n,c=>Re(c));o=qv(t.serverSyncTree_,r,a,i)}else{const a=Re(n);o=zv(t.serverSyncTree_,r,a,i)}else if(s){const a=Js(n,c=>Re(c));o=$v(t.serverSyncTree_,r,a)}else{const a=Re(n);o=Mi(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=qo(t,r)),on(t.eventQueue_,l,o)}function Ha(t,e){Vo(t,"connected",e),e===!1&&vE(t)}function mE(t,e){Be(e,(n,s)=>{Vo(t,n,s)})}function Vo(t,e,n){const s=new re("/.info/"+e),i=Re(n);t.infoData_.updateSnapshot(s,i);const r=Mi(t.infoSyncTree_,s,i);on(t.eventQueue_,s,r)}function yE(t){return t.nextWriteId_++}function vE(t){Nh(t,"onDisconnectEvents");const e=xh(t),n=ri();Fr(t.onDisconnect_,J(),(i,r)=>{const o=eE(i,r,t.serverSyncTree_,e);th(n,i,o)});let s=[];Fr(n,J(),(i,r)=>{s=s.concat(Mi(t.serverSyncTree_,i,r));const o=IE(t,i);qo(t,o)}),t.onDisconnect_=ri(),on(t.eventQueue_,J(),s)}function EE(t,e,n){let s;V(e._path)===".info"?s=La(t.infoSyncTree_,e,n):s=La(t.serverSyncTree_,e,n),Ah(t.eventQueue_,e._path,s)}function Wa(t,e,n){let s;V(e._path)===".info"?s=jr(t.infoSyncTree_,e,n):s=jr(t.serverSyncTree_,e,n),Ah(t.eventQueue_,e._path,s)}function bE(t){t.persistentConnection_&&t.persistentConnection_.interrupt(fE)}function Nh(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ae(n,...e)}function Ph(t,e,n){return _h(t.serverSyncTree_,e,n)||B.EMPTY_NODE}function zo(t,e=t.transactionQueueTree_){if(e||Bi(t,e),Wn(e)){const n=kh(t,e);w(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&CE(t,Ns(e),n)}else Eh(e)&&Fi(e,n=>{zo(t,n)})}function CE(t,e,n){const s=n.map(c=>c.currentWriteId),i=Ph(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];w(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Me(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Nh(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(_n(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Bi(t,jo(t.transactionQueueTree_,e)),zo(t,t.transactionQueueTree_),on(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)As(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{je("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}qo(t,e)}},o)}function qo(t,e){const n=Oh(t,e),s=Ns(n),i=kh(t,n);return wE(t,i,s),s}function wE(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Me(n,a.path);let u=!1,h;if(w(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(_n(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=dE)u=!0,h="maxretry",i=i.concat(_n(t.serverSyncTree_,a.currentWriteId,!0));else{const f=Ph(t,a.path,o);a.currentInputSnapshot=f;const _=e[l].update(f.val());if(_!==void 0){Ih("transaction failed: Data returned ",_,a.path);let y=Re(_);typeof _=="object"&&_!=null&&vt(_,".priority")||(y=y.updatePriority(f.getPriority()));const N=a.currentWriteId,P=xh(t),k=tE(y,f,P);a.currentOutputSnapshotRaw=y,a.currentOutputSnapshotResolved=k,a.currentWriteId=yE(t),o.splice(o.indexOf(N),1),i=i.concat(Uv(t.serverSyncTree_,a.path,k,a.currentWriteId,a.applyLocally)),i=i.concat(_n(t.serverSyncTree_,N,!0))}else u=!0,h="nodata",i=i.concat(_n(t.serverSyncTree_,a.currentWriteId,!0))}on(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}Bi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)As(s[l]);zo(t,t.transactionQueueTree_)}function Oh(t,e){let n,s=t.transactionQueueTree_;for(n=V(e);n!==null&&Wn(s)===void 0;)s=jo(s,n),e=ae(e),n=V(e);return s}function kh(t,e){const n=[];return Dh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Dh(t,e,n){const s=Wn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Fi(e,i=>{Dh(t,i,n)})}function Bi(t,e){const n=Wn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,vh(e,n.length>0?n:void 0)}Fi(e,s=>{Bi(t,s)})}function IE(t,e){const n=Ns(Oh(t,e)),s=jo(t.transactionQueueTree_,e);return sE(s,i=>{or(t,i)}),or(t,s),bh(s,i=>{or(t,i)}),n}function or(t,e){const n=Wn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(w(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(w(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(_n(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?vh(e,void 0):n.length=r+1,on(t.eventQueue_,Ns(e),i);for(let o=0;o<s.length;o++)As(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SE(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function TE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):je(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ua=function(t,e){const n=AE(t),s=n.namespace;n.domain==="firebase.com"&&mt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&mt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Hm();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Lu(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new re(n.pathString)}},AE=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=SE(t.substring(u,h)));const f=TE(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const y=e.indexOf(".");s=e.substring(0,y).toLowerCase(),n=e.substring(y+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+be(this.snapshot.exportVal())}}class Lh{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return w(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return z(this._path)?null:zu(this._path)}get ref(){return new Et(this._repo,this._path)}get _queryIdentifier(){const e=Ia(this._queryParams),n=Eo(e);return n==="{}"?"default":n}get _queryObject(){return Ia(this._queryParams)}isEqual(e){if(e=Pi(e),!(e instanceof Ko))return!1;const n=this._repo===e._repo,s=Io(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Cy(this._path)}}class Et extends Ko{constructor(e,n){super(e,n,new Ro,!1)}get parent(){const e=Ku(this._path);return e===null?null:new Et(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ws{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new re(e),s=di(this.ref,e);return new ws(this._node.getChild(n),s,fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ws(i,di(this.ref,s),fe)))}hasChild(e){const n=new re(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function YE(t,e){return t=Pi(t),t._checkNotDeleted("ref"),e!==void 0?di(t._root,e):t._root}function di(t,e){return t=Pi(t),V(t._path)===null?aE("child","path",e,!1):Sh("child","path",e,!1),new Et(t._repo,ge(t._path,e))}class Go{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Mh("value",this,new ws(e.snapshotNode,new Et(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Lh(this,e,n):null}matches(e){return e instanceof Go?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Qo{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Lh(this,e,n):null}createEvent(e,n){w(e.childName!=null,"Child events should have a childName.");const s=di(new Et(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Mh(e.type,this,new ws(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Qo?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function xE(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const a=n,c=(u,h)=>{Wa(t._repo,t,l),a(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new RE(n,r||void 0),l=e==="value"?new Go(o):new Qo(e,o);return EE(t._repo,t,l),()=>Wa(t._repo,t,l)}function XE(t,e,n,s){return xE(t,"value",e,n,s)}Ov(Et);Bv(Et);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE="FIREBASE_DATABASE_EMULATOR_HOST",zr={};let PE=!1;function OE(t,e,n,s){t.repoInfo_=new Lu(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function kE(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||mt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ae("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ua(r,i),l=o.repoInfo,a,c;typeof process<"u"&&process.env&&(c=process.env[NE]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=Ua(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new wn(wn.OWNER):new Ym(t.name,t.options,e);cE("Invalid Firebase Database URL",o),z(o.path)||mt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=ME(l,t,u,new Qm(t.name,n));return new LE(h,t)}function DE(t,e){const n=zr[e];(!n||n[t.key]!==t)&&mt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),bE(t),delete n[t.key]}function ME(t,e,n,s){let i=zr[e.name];i||(i={},zr[e.name]=i);let r=i[t.toURLString()];return r&&mt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new pE(t,PE,n,s),i[t.toURLString()]=r,r}class LE{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(_E(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Et(this._repo,J())),this._rootInternal}_delete(){return this._rootInternal!==null&&(DE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&mt("Cannot call "+e+" on a deleted database.")}}function FE(t=Cm(),e){const n=ym(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=ug("database");s&&BE(n,...s)}return n}function BE(t,e,n,s={}){t=Pi(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&mt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&mt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new wn(wn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:hg(s.mockUserToken,t.app.options.projectId);r=new wn(o)}OE(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(t){Dm(bm),ei(new _s("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return kE(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),bn(la,aa,t),bn(la,aa,"esm2017")}pt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};pt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};HE();const WE={apiKey:"AIzaSyChlDtKx-SfIE42CoKHtOG9Dt9QNSzvNSU",authDomain:"design-primo.firebaseapp.com",databaseURL:"https://design-primo-default-rtdb.firebaseio.com",projectId:"design-primo",storageBucket:"design-primo.appspot.com",messagingSenderId:"554464328513",appId:"1:554464328513:web:9a184cbe0ad8ee05aeffc0"},UE=yu(WE),$E=FE(UE),jE=Wp(),Ps=up(gp);Ps.use(Bp);Ps.use($E);Ps.use(jE);Ps.use(eg);Ps.mount("#app");export{ft as F,Xt as a,De as b,di as c,QE as d,Dc as e,Ad as f,FE as g,Fc as h,Xr as i,qE as j,GE as k,KE as l,Ne as m,Jr as n,XE as o,Rd as p,YE as r,VE as t,yn as u,zE as w};
