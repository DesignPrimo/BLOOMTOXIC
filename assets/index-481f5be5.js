(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Mr(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const ue={},hn=[],Je=()=>{},Ch=()=>!1,bh=/^on[^a-z]/,ci=t=>bh.test(t),Lr=t=>t.startsWith("onUpdate:"),be=Object.assign,Fr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},wh=Object.prototype.hasOwnProperty,G=(t,e)=>wh.call(t,e),U=Array.isArray,fn=t=>ai(t)==="[object Map]",Rc=t=>ai(t)==="[object Set]",H=t=>typeof t=="function",me=t=>typeof t=="string",Br=t=>typeof t=="symbol",he=t=>t!==null&&typeof t=="object",xc=t=>he(t)&&H(t.then)&&H(t.catch),Nc=Object.prototype.toString,ai=t=>Nc.call(t),Ih=t=>ai(t).slice(8,-1),Ac=t=>ai(t)==="[object Object]",Ur=t=>me(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ms=Mr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ui=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Sh=/-(\w)/g,ct=ui(t=>t.replace(Sh,(e,n)=>n?n.toUpperCase():"")),Th=/\B([A-Z])/g,Nn=ui(t=>t.replace(Th,"-$1").toLowerCase()),hi=ui(t=>t.charAt(0).toUpperCase()+t.slice(1)),Pi=ui(t=>t?`on${hi(t)}`:""),es=(t,e)=>!Object.is(t,e),Oi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Us=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Rh=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let jo;const Ji=()=>jo||(jo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Wr(t){if(U(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=me(s)?Ph(s):Wr(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(me(t))return t;if(he(t))return t}}const xh=/;(?![^(]*\))/g,Nh=/:([^]+)/,Ah=/\/\*[^]*?\*\//g;function Ph(t){const e={};return t.replace(Ah,"").split(xh).forEach(n=>{if(n){const s=n.split(Nh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Hr(t){let e="";if(me(t))e=t;else if(U(t))for(let n=0;n<t.length;n++){const s=Hr(t[n]);s&&(e+=s+" ")}else if(he(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Oh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",kh=Mr(Oh);function Pc(t){return!!t||t===""}const lE=t=>me(t)?t:t==null?"":U(t)||he(t)&&(t.toString===Nc||!H(t.toString))?JSON.stringify(t,Oc,2):String(t),Oc=(t,e)=>e&&e.__v_isRef?Oc(t,e.value):fn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Rc(e)?{[`Set(${e.size})`]:[...e.values()]}:he(e)&&!U(e)&&!Ac(e)?String(e):e;let We;class kc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=We,!e&&We&&(this.index=(We.scopes||(We.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=We;try{return We=this,e()}finally{We=n}}}on(){We=this}off(){We=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Dc(t){return new kc(t)}function Dh(t,e=We){e&&e.active&&e.effects.push(t)}function Mc(){return We}function Mh(t){We&&We.cleanups.push(t)}const $r=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Lc=t=>(t.w&Ot)>0,Fc=t=>(t.n&Ot)>0,Lh=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ot},Fh=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Lc(i)&&!Fc(i)?i.delete(t):e[n++]=i,i.w&=~Ot,i.n&=~Ot}e.length=n}},Ws=new WeakMap;let $n=0,Ot=1;const Zi=30;let Ke;const jt=Symbol(""),er=Symbol("");class jr{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Dh(this,s)}run(){if(!this.active)return this.fn();let e=Ke,n=Tt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ke,Ke=this,Tt=!0,Ot=1<<++$n,$n<=Zi?Lh(this):Vo(this),this.fn()}finally{$n<=Zi&&Fh(this),Ot=1<<--$n,Ke=this.parent,Tt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ke===this?this.deferStop=!0:this.active&&(Vo(this),this.onStop&&this.onStop(),this.active=!1)}}function Vo(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Tt=!0;const Bc=[];function An(){Bc.push(Tt),Tt=!1}function Pn(){const t=Bc.pop();Tt=t===void 0?!0:t}function Le(t,e,n){if(Tt&&Ke){let s=Ws.get(t);s||Ws.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=$r()),Uc(i)}}function Uc(t,e){let n=!1;$n<=Zi?Fc(t)||(t.n|=Ot,n=!Lc(t)):n=!t.has(Ke),n&&(t.add(Ke),Ke.deps.push(t))}function _t(t,e,n,s,i,r){const o=Ws.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&U(t)){const c=Number(s);o.forEach((a,u)=>{(u==="length"||u>=c)&&l.push(a)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":U(t)?Ur(n)&&l.push(o.get("length")):(l.push(o.get(jt)),fn(t)&&l.push(o.get(er)));break;case"delete":U(t)||(l.push(o.get(jt)),fn(t)&&l.push(o.get(er)));break;case"set":fn(t)&&l.push(o.get(jt));break}if(l.length===1)l[0]&&tr(l[0]);else{const c=[];for(const a of l)a&&c.push(...a);tr($r(c))}}function tr(t,e){const n=U(t)?t:[...t];for(const s of n)s.computed&&zo(s);for(const s of n)s.computed||zo(s)}function zo(t,e){(t!==Ke||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function Bh(t,e){var n;return(n=Ws.get(t))==null?void 0:n.get(e)}const Uh=Mr("__proto__,__v_isRef,__isVue"),Wc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Br)),Wh=Vr(),Hh=Vr(!1,!0),$h=Vr(!0),qo=jh();function jh(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Y(this);for(let r=0,o=this.length;r<o;r++)Le(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(Y)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){An();const s=Y(this)[e].apply(this,n);return Pn(),s}}),t}function Vh(t){const e=Y(this);return Le(e,"has",t),e.hasOwnProperty(t)}function Vr(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?lf:zc:e?Vc:jc).get(s))return s;const o=U(s);if(!t){if(o&&G(qo,i))return Reflect.get(qo,i,r);if(i==="hasOwnProperty")return Vh}const l=Reflect.get(s,i,r);return(Br(i)?Wc.has(i):Uh(i))||(t||Le(s,"get",i),e)?l:pe(l)?o&&Ur(i)?l:l.value:he(l)?t?Kc(l):ys(l):l}}const zh=Hc(),qh=Hc(!0);function Hc(t=!1){return function(n,s,i,r){let o=n[s];if(En(o)&&pe(o)&&!pe(i))return!1;if(!t&&(!Hs(i)&&!En(i)&&(o=Y(o),i=Y(i)),!U(n)&&pe(o)&&!pe(i)))return o.value=i,!0;const l=U(n)&&Ur(s)?Number(s)<n.length:G(n,s),c=Reflect.set(n,s,i,r);return n===Y(r)&&(l?es(i,o)&&_t(n,"set",s,i):_t(n,"add",s,i)),c}}function Kh(t,e){const n=G(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&_t(t,"delete",e,void 0),s}function Gh(t,e){const n=Reflect.has(t,e);return(!Br(e)||!Wc.has(e))&&Le(t,"has",e),n}function Yh(t){return Le(t,"iterate",U(t)?"length":jt),Reflect.ownKeys(t)}const $c={get:Wh,set:zh,deleteProperty:Kh,has:Gh,ownKeys:Yh},Qh={get:$h,set(t,e){return!0},deleteProperty(t,e){return!0}},Xh=be({},$c,{get:Hh,set:qh}),zr=t=>t,fi=t=>Reflect.getPrototypeOf(t);function Rs(t,e,n=!1,s=!1){t=t.__v_raw;const i=Y(t),r=Y(e);n||(e!==r&&Le(i,"get",e),Le(i,"get",r));const{has:o}=fi(i),l=s?zr:n?Gr:ts;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function xs(t,e=!1){const n=this.__v_raw,s=Y(n),i=Y(t);return e||(t!==i&&Le(s,"has",t),Le(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Ns(t,e=!1){return t=t.__v_raw,!e&&Le(Y(t),"iterate",jt),Reflect.get(t,"size",t)}function Ko(t){t=Y(t);const e=Y(this);return fi(e).has.call(e,t)||(e.add(t),_t(e,"add",t,t)),this}function Go(t,e){e=Y(e);const n=Y(this),{has:s,get:i}=fi(n);let r=s.call(n,t);r||(t=Y(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?es(e,o)&&_t(n,"set",t,e):_t(n,"add",t,e),this}function Yo(t){const e=Y(this),{has:n,get:s}=fi(e);let i=n.call(e,t);i||(t=Y(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&_t(e,"delete",t,void 0),r}function Qo(){const t=Y(this),e=t.size!==0,n=t.clear();return e&&_t(t,"clear",void 0,void 0),n}function As(t,e){return function(s,i){const r=this,o=r.__v_raw,l=Y(o),c=e?zr:t?Gr:ts;return!t&&Le(l,"iterate",jt),o.forEach((a,u)=>s.call(i,c(a),c(u),r))}}function Ps(t,e,n){return function(...s){const i=this.__v_raw,r=Y(i),o=fn(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,a=i[t](...s),u=n?zr:e?Gr:ts;return!e&&Le(r,"iterate",c?er:jt),{next(){const{value:h,done:f}=a.next();return f?{value:h,done:f}:{value:l?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Ct(t){return function(...e){return t==="delete"?!1:this}}function Jh(){const t={get(r){return Rs(this,r)},get size(){return Ns(this)},has:xs,add:Ko,set:Go,delete:Yo,clear:Qo,forEach:As(!1,!1)},e={get(r){return Rs(this,r,!1,!0)},get size(){return Ns(this)},has:xs,add:Ko,set:Go,delete:Yo,clear:Qo,forEach:As(!1,!0)},n={get(r){return Rs(this,r,!0)},get size(){return Ns(this,!0)},has(r){return xs.call(this,r,!0)},add:Ct("add"),set:Ct("set"),delete:Ct("delete"),clear:Ct("clear"),forEach:As(!0,!1)},s={get(r){return Rs(this,r,!0,!0)},get size(){return Ns(this,!0)},has(r){return xs.call(this,r,!0)},add:Ct("add"),set:Ct("set"),delete:Ct("delete"),clear:Ct("clear"),forEach:As(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Ps(r,!1,!1),n[r]=Ps(r,!0,!1),e[r]=Ps(r,!1,!0),s[r]=Ps(r,!0,!0)}),[t,n,e,s]}const[Zh,ef,tf,nf]=Jh();function qr(t,e){const n=e?t?nf:tf:t?ef:Zh;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(G(n,i)&&i in s?n:s,i,r)}const sf={get:qr(!1,!1)},rf={get:qr(!1,!0)},of={get:qr(!0,!1)},jc=new WeakMap,Vc=new WeakMap,zc=new WeakMap,lf=new WeakMap;function cf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function af(t){return t.__v_skip||!Object.isExtensible(t)?0:cf(Ih(t))}function ys(t){return En(t)?t:Kr(t,!1,$c,sf,jc)}function qc(t){return Kr(t,!1,Xh,rf,Vc)}function Kc(t){return Kr(t,!0,Qh,of,zc)}function Kr(t,e,n,s,i){if(!he(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=af(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Rt(t){return En(t)?Rt(t.__v_raw):!!(t&&t.__v_isReactive)}function En(t){return!!(t&&t.__v_isReadonly)}function Hs(t){return!!(t&&t.__v_isShallow)}function Gc(t){return Rt(t)||En(t)}function Y(t){const e=t&&t.__v_raw;return e?Y(e):t}function di(t){return Us(t,"__v_skip",!0),t}const ts=t=>he(t)?ys(t):t,Gr=t=>he(t)?Kc(t):t;function Yc(t){Tt&&Ke&&(t=Y(t),Uc(t.dep||(t.dep=$r())))}function Qc(t,e){t=Y(t);const n=t.dep;n&&tr(n)}function pe(t){return!!(t&&t.__v_isRef===!0)}function Yr(t){return Xc(t,!1)}function uf(t){return Xc(t,!0)}function Xc(t,e){return pe(t)?t:new hf(t,e)}class hf{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Y(e),this._value=n?e:ts(e)}get value(){return Yc(this),this._value}set value(e){const n=this.__v_isShallow||Hs(e)||En(e);e=n?e:Y(e),es(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ts(e),Qc(this))}}function dn(t){return pe(t)?t.value:t}const ff={get:(t,e,n)=>dn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return pe(i)&&!pe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Jc(t){return Rt(t)?t:new Proxy(t,ff)}function df(t){const e=U(t)?new Array(t.length):{};for(const n in t)e[n]=_f(t,n);return e}class pf{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Bh(Y(this._object),this._key)}}function _f(t,e,n){const s=t[e];return pe(s)?s:new pf(t,e,n)}class gf{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new jr(e,()=>{this._dirty||(this._dirty=!0,Qc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=Y(this);return Yc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function mf(t,e,n=!1){let s,i;const r=H(t);return r?(s=t,i=Je):(s=t.get,i=t.set),new gf(s,i,r||!i,n)}function xt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){pi(r,e,n)}return i}function Ze(t,e,n,s){if(H(t)){const r=xt(t,e,n,s);return r&&xc(r)&&r.catch(o=>{pi(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Ze(t[r],e,n,s));return i}function pi(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const a=r.ec;if(a){for(let u=0;u<a.length;u++)if(a[u](t,o,l)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){xt(c,null,10,[t,o,l]);return}}yf(t,n,i,s)}function yf(t,e,n,s=!0){console.error(t)}let ns=!1,nr=!1;const Ne=[];let ot=0;const pn=[];let ht=null,Wt=0;const Zc=Promise.resolve();let Qr=null;function Xr(t){const e=Qr||Zc;return t?e.then(this?t.bind(this):t):e}function vf(t){let e=ot+1,n=Ne.length;for(;e<n;){const s=e+n>>>1;ss(Ne[s])<t?e=s+1:n=s}return e}function Jr(t){(!Ne.length||!Ne.includes(t,ns&&t.allowRecurse?ot+1:ot))&&(t.id==null?Ne.push(t):Ne.splice(vf(t.id),0,t),ea())}function ea(){!ns&&!nr&&(nr=!0,Qr=Zc.then(na))}function Ef(t){const e=Ne.indexOf(t);e>ot&&Ne.splice(e,1)}function Cf(t){U(t)?pn.push(...t):(!ht||!ht.includes(t,t.allowRecurse?Wt+1:Wt))&&pn.push(t),ea()}function Xo(t,e=ns?ot+1:0){for(;e<Ne.length;e++){const n=Ne[e];n&&n.pre&&(Ne.splice(e,1),e--,n())}}function ta(t){if(pn.length){const e=[...new Set(pn)];if(pn.length=0,ht){ht.push(...e);return}for(ht=e,ht.sort((n,s)=>ss(n)-ss(s)),Wt=0;Wt<ht.length;Wt++)ht[Wt]();ht=null,Wt=0}}const ss=t=>t.id==null?1/0:t.id,bf=(t,e)=>{const n=ss(t)-ss(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function na(t){nr=!1,ns=!0,Ne.sort(bf);const e=Je;try{for(ot=0;ot<Ne.length;ot++){const n=Ne[ot];n&&n.active!==!1&&xt(n,null,14)}}finally{ot=0,Ne.length=0,ta(),ns=!1,Qr=null,(Ne.length||pn.length)&&na()}}function wf(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ue;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||ue;f&&(i=n.map(_=>me(_)?_.trim():_)),h&&(i=n.map(Rh))}let l,c=s[l=Pi(e)]||s[l=Pi(ct(e))];!c&&r&&(c=s[l=Pi(Nn(e))]),c&&Ze(c,t,6,i);const a=s[l+"Once"];if(a){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Ze(a,t,6,i)}}function sa(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!H(t)){const c=a=>{const u=sa(a,e,!0);u&&(l=!0,be(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(he(t)&&s.set(t,null),null):(U(r)?r.forEach(c=>o[c]=null):be(o,r),he(t)&&s.set(t,o),o)}function _i(t,e){return!t||!ci(e)?!1:(e=e.slice(2).replace(/Once$/,""),G(t,e[0].toLowerCase()+e.slice(1))||G(t,Nn(e))||G(t,e))}let ze=null,ia=null;function $s(t){const e=ze;return ze=t,ia=t&&t.type.__scopeId||null,e}function If(t,e=ze,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&cl(-1);const r=$s(e);let o;try{o=t(...i)}finally{$s(r),s._d&&cl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ki(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:c,emit:a,render:u,renderCache:h,data:f,setupState:_,ctx:y,inheritAttrs:S}=t;let A,P;const k=$s(t);try{if(n.shapeFlag&4){const M=i||s;A=rt(u.call(M,M,h,r,_,f,y)),P=c}else{const M=e;A=rt(M.length>1?M(r,{attrs:c,slots:l,emit:a}):M(r,null)),P=e.props?c:Sf(c)}}catch(M){qn.length=0,pi(M,t,1),A=ke(qt)}let j=A;if(P&&S!==!1){const M=Object.keys(P),{shapeFlag:se}=j;M.length&&se&7&&(o&&M.some(Lr)&&(P=Tf(P,o)),j=Cn(j,P))}return n.dirs&&(j=Cn(j),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),A=j,$s(k),A}const Sf=t=>{let e;for(const n in t)(n==="class"||n==="style"||ci(n))&&((e||(e={}))[n]=t[n]);return e},Tf=(t,e)=>{const n={};for(const s in t)(!Lr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Rf(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,a=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Jo(s,o,a):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!_i(a,f))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Jo(s,o,a):!0:!!o;return!1}function Jo(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!_i(n,r))return!0}return!1}function xf({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Nf=t=>t.__isSuspense;function Af(t,e){e&&e.pendingBranch?U(t)?e.effects.push(...t):e.effects.push(t):Cf(t)}const Os={};function Vn(t,e,n){return ra(t,e,n)}function ra(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ue){var l;const c=Mc()===((l=Ee)==null?void 0:l.scope)?Ee:null;let a,u=!1,h=!1;if(pe(t)?(a=()=>t.value,u=Hs(t)):Rt(t)?(a=()=>t,s=!0):U(t)?(h=!0,u=t.some(M=>Rt(M)||Hs(M)),a=()=>t.map(M=>{if(pe(M))return M.value;if(Rt(M))return cn(M);if(H(M))return xt(M,c,2)})):H(t)?e?a=()=>xt(t,c,2):a=()=>{if(!(c&&c.isUnmounted))return f&&f(),Ze(t,c,3,[_])}:a=Je,e&&s){const M=a;a=()=>cn(M())}let f,_=M=>{f=k.onStop=()=>{xt(M,c,4)}},y;if(os)if(_=Je,e?n&&Ze(e,c,3,[a(),h?[]:void 0,_]):a(),i==="sync"){const M=xd();y=M.__watcherHandles||(M.__watcherHandles=[])}else return Je;let S=h?new Array(t.length).fill(Os):Os;const A=()=>{if(k.active)if(e){const M=k.run();(s||u||(h?M.some((se,we)=>es(se,S[we])):es(M,S)))&&(f&&f(),Ze(e,c,3,[M,S===Os?void 0:h&&S[0]===Os?[]:S,_]),S=M)}else k.run()};A.allowRecurse=!!e;let P;i==="sync"?P=A:i==="post"?P=()=>Oe(A,c&&c.suspense):(A.pre=!0,c&&(A.id=c.uid),P=()=>Jr(A));const k=new jr(a,P);e?n?A():S=k.run():i==="post"?Oe(k.run.bind(k),c&&c.suspense):k.run();const j=()=>{k.stop(),c&&c.scope&&Fr(c.scope.effects,k)};return y&&y.push(j),j}function Pf(t,e,n){const s=this.proxy,i=me(t)?t.includes(".")?oa(s,t):()=>s[t]:t.bind(s,s);let r;H(e)?r=e:(r=e.handler,n=e);const o=Ee;bn(this);const l=ra(i,r.bind(s),n);return o?bn(o):Vt(),l}function oa(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function cn(t,e){if(!he(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),pe(t))cn(t.value,e);else if(U(t))for(let n=0;n<t.length;n++)cn(t[n],e);else if(Rc(t)||fn(t))t.forEach(n=>{cn(n,e)});else if(Ac(t))for(const n in t)cn(t[n],e);return t}function Lt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(An(),Ze(c,n,8,[t.el,l,t,e]),Pn())}}function la(t,e){return H(t)?(()=>be({name:t.name},e,{setup:t}))():t}const Ls=t=>!!t.type.__asyncLoader,ca=t=>t.type.__isKeepAlive;function Of(t,e){aa(t,"a",e)}function kf(t,e){aa(t,"da",e)}function aa(t,e,n=Ee){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(gi(e,s,n),n){let i=n.parent;for(;i&&i.parent;)ca(i.parent.vnode)&&Df(s,e,n,i),i=i.parent}}function Df(t,e,n,s){const i=gi(e,t,s,!0);ua(()=>{Fr(s[e],i)},n)}function gi(t,e,n=Ee,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;An(),bn(n);const l=Ze(e,n,t,o);return Vt(),Pn(),l});return s?i.unshift(r):i.push(r),r}}const mt=t=>(e,n=Ee)=>(!os||t==="sp")&&gi(t,(...s)=>e(...s),n),Mf=mt("bm"),Lf=mt("m"),Ff=mt("bu"),Bf=mt("u"),Uf=mt("bum"),ua=mt("um"),Wf=mt("sp"),Hf=mt("rtg"),$f=mt("rtc");function jf(t,e=Ee){gi("ec",t,e)}const ha="components";function Vf(t,e){return qf(ha,t,!0,e)||t}const zf=Symbol.for("v-ndc");function qf(t,e,n=!0,s=!1){const i=ze||Ee;if(i){const r=i.type;if(t===ha){const l=Sd(r,!1);if(l&&(l===e||l===ct(e)||l===hi(ct(e))))return r}const o=Zo(i[t]||r[t],e)||Zo(i.appContext[t],e);return!o&&s?r:o}}function Zo(t,e){return t&&(t[e]||t[ct(e)]||t[hi(ct(e))])}function cE(t,e,n,s){let i;const r=n&&n[s];if(U(t)||me(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(he(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const a=o[l];i[l]=e(t[a],a,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}const sr=t=>t?Ia(t)?so(t)||t.proxy:sr(t.parent):null,zn=be(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>sr(t.parent),$root:t=>sr(t.root),$emit:t=>t.emit,$options:t=>Zr(t),$forceUpdate:t=>t.f||(t.f=()=>Jr(t.update)),$nextTick:t=>t.n||(t.n=Xr.bind(t.proxy)),$watch:t=>Pf.bind(t)}),Di=(t,e)=>t!==ue&&!t.__isScriptSetup&&G(t,e),Kf={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let a;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Di(s,e))return o[e]=1,s[e];if(i!==ue&&G(i,e))return o[e]=2,i[e];if((a=t.propsOptions[0])&&G(a,e))return o[e]=3,r[e];if(n!==ue&&G(n,e))return o[e]=4,n[e];ir&&(o[e]=0)}}const u=zn[e];let h,f;if(u)return e==="$attrs"&&Le(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==ue&&G(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,G(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Di(i,e)?(i[e]=n,!0):s!==ue&&G(s,e)?(s[e]=n,!0):G(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==ue&&G(t,o)||Di(e,o)||(l=r[0])&&G(l,o)||G(s,o)||G(zn,o)||G(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:G(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function el(t){return U(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ir=!0;function Gf(t){const e=Zr(t),n=t.proxy,s=t.ctx;ir=!1,e.beforeCreate&&tl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:a,created:u,beforeMount:h,mounted:f,beforeUpdate:_,updated:y,activated:S,deactivated:A,beforeDestroy:P,beforeUnmount:k,destroyed:j,unmounted:M,render:se,renderTracked:we,renderTriggered:Ie,errorCaptured:Q,serverPrefetch:K,expose:de,inheritAttrs:Se,components:Be,directives:$e,filters:Mt}=e;if(a&&Yf(a,s,null),o)for(const ie in o){const Z=o[ie];H(Z)&&(s[ie]=Z.bind(n))}if(i){const ie=i.call(n,n);he(ie)&&(t.data=ys(ie))}if(ir=!0,r)for(const ie in r){const Z=r[ie],at=H(Z)?Z.bind(n,n):H(Z.get)?Z.get.bind(n,n):Je,Et=!H(Z)&&H(Z.set)?Z.set.bind(n):Je,nt=Ve({get:at,set:Et});Object.defineProperty(s,ie,{enumerable:!0,configurable:!0,get:()=>nt.value,set:Pe=>nt.value=Pe})}if(l)for(const ie in l)fa(l[ie],s,n,ie);if(c){const ie=H(c)?c.call(n):c;Reflect.ownKeys(ie).forEach(Z=>{Fs(Z,ie[Z])})}u&&tl(u,t,"c");function X(ie,Z){U(Z)?Z.forEach(at=>ie(at.bind(n))):Z&&ie(Z.bind(n))}if(X(Mf,h),X(Lf,f),X(Ff,_),X(Bf,y),X(Of,S),X(kf,A),X(jf,Q),X($f,we),X(Hf,Ie),X(Uf,k),X(ua,M),X(Wf,K),U(de))if(de.length){const ie=t.exposed||(t.exposed={});de.forEach(Z=>{Object.defineProperty(ie,Z,{get:()=>n[Z],set:at=>n[Z]=at})})}else t.exposed||(t.exposed={});se&&t.render===Je&&(t.render=se),Se!=null&&(t.inheritAttrs=Se),Be&&(t.components=Be),$e&&(t.directives=$e)}function Yf(t,e,n=Je){U(t)&&(t=rr(t));for(const s in t){const i=t[s];let r;he(i)?"default"in i?r=lt(i.from||s,i.default,!0):r=lt(i.from||s):r=lt(i),pe(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function tl(t,e,n){Ze(U(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function fa(t,e,n,s){const i=s.includes(".")?oa(n,s):()=>n[s];if(me(t)){const r=e[t];H(r)&&Vn(i,r)}else if(H(t))Vn(i,t.bind(n));else if(he(t))if(U(t))t.forEach(r=>fa(r,e,n,s));else{const r=H(t.handler)?t.handler.bind(n):e[t.handler];H(r)&&Vn(i,r,t)}}function Zr(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(a=>js(c,a,o,!0)),js(c,e,o)),he(e)&&r.set(e,c),c}function js(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&js(t,r,n,!0),i&&i.forEach(o=>js(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Qf[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Qf={data:nl,props:sl,emits:sl,methods:jn,computed:jn,beforeCreate:Ae,created:Ae,beforeMount:Ae,mounted:Ae,beforeUpdate:Ae,updated:Ae,beforeDestroy:Ae,beforeUnmount:Ae,destroyed:Ae,unmounted:Ae,activated:Ae,deactivated:Ae,errorCaptured:Ae,serverPrefetch:Ae,components:jn,directives:jn,watch:Jf,provide:nl,inject:Xf};function nl(t,e){return e?t?function(){return be(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function Xf(t,e){return jn(rr(t),rr(e))}function rr(t){if(U(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ae(t,e){return t?[...new Set([].concat(t,e))]:e}function jn(t,e){return t?be(Object.create(null),t,e):e}function sl(t,e){return t?U(t)&&U(e)?[...new Set([...t,...e])]:be(Object.create(null),el(t),el(e??{})):e}function Jf(t,e){if(!t)return e;if(!e)return t;const n=be(Object.create(null),t);for(const s in e)n[s]=Ae(t[s],e[s]);return n}function da(){return{app:null,config:{isNativeTag:Ch,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zf=0;function ed(t,e){return function(s,i=null){H(s)||(s=be({},s)),i!=null&&!he(i)&&(i=null);const r=da(),o=new Set;let l=!1;const c=r.app={_uid:Zf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Nd,get config(){return r.config},set config(a){},use(a,...u){return o.has(a)||(a&&H(a.install)?(o.add(a),a.install(c,...u)):H(a)&&(o.add(a),a(c,...u))),c},mixin(a){return r.mixins.includes(a)||r.mixins.push(a),c},component(a,u){return u?(r.components[a]=u,c):r.components[a]},directive(a,u){return u?(r.directives[a]=u,c):r.directives[a]},mount(a,u,h){if(!l){const f=ke(s,i);return f.appContext=r,u&&e?e(f,a):t(f,a,h),l=!0,c._container=a,a.__vue_app__=c,so(f.component)||f.component.proxy}},unmount(){l&&(t(null,c._container),delete c._container.__vue_app__)},provide(a,u){return r.provides[a]=u,c},runWithContext(a){is=c;try{return a()}finally{is=null}}};return c}}let is=null;function Fs(t,e){if(Ee){let n=Ee.provides;const s=Ee.parent&&Ee.parent.provides;s===n&&(n=Ee.provides=Object.create(s)),n[t]=e}}function lt(t,e,n=!1){const s=Ee||ze;if(s||is){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:is._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&H(e)?e.call(s&&s.proxy):e}}function td(){return!!(Ee||ze||is)}function nd(t,e,n,s=!1){const i={},r={};Us(r,yi,1),t.propsDefaults=Object.create(null),pa(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:qc(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function sd(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=Y(i),[c]=t.propsOptions;let a=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(_i(t.emitsOptions,f))continue;const _=e[f];if(c)if(G(r,f))_!==r[f]&&(r[f]=_,a=!0);else{const y=ct(f);i[y]=or(c,l,y,_,t,!1)}else _!==r[f]&&(r[f]=_,a=!0)}}}else{pa(t,e,i,r)&&(a=!0);let u;for(const h in l)(!e||!G(e,h)&&((u=Nn(h))===h||!G(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=or(c,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!G(e,h))&&(delete r[h],a=!0)}a&&_t(t,"set","$attrs")}function pa(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Ms(c))continue;const a=e[c];let u;i&&G(i,u=ct(c))?!r||!r.includes(u)?n[u]=a:(l||(l={}))[u]=a:_i(t.emitsOptions,c)||(!(c in s)||a!==s[c])&&(s[c]=a,o=!0)}if(r){const c=Y(n),a=l||ue;for(let u=0;u<r.length;u++){const h=r[u];n[h]=or(i,c,h,a[h],t,!G(a,h))}}return o}function or(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=G(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&H(c)){const{propsDefaults:a}=i;n in a?s=a[n]:(bn(i),s=a[n]=c.call(null,e),Vt())}else s=c}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===Nn(n))&&(s=!0))}return s}function _a(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!H(t)){const u=h=>{c=!0;const[f,_]=_a(h,e,!0);be(o,f),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return he(t)&&s.set(t,hn),hn;if(U(r))for(let u=0;u<r.length;u++){const h=ct(r[u]);il(h)&&(o[h]=ue)}else if(r)for(const u in r){const h=ct(u);if(il(h)){const f=r[u],_=o[h]=U(f)||H(f)?{type:f}:be({},f);if(_){const y=ll(Boolean,_.type),S=ll(String,_.type);_[0]=y>-1,_[1]=S<0||y<S,(y>-1||G(_,"default"))&&l.push(h)}}}const a=[o,l];return he(t)&&s.set(t,a),a}function il(t){return t[0]!=="$"}function rl(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function ol(t,e){return rl(t)===rl(e)}function ll(t,e){return U(e)?e.findIndex(n=>ol(n,t)):H(e)&&ol(e,t)?0:-1}const ga=t=>t[0]==="_"||t==="$stable",eo=t=>U(t)?t.map(rt):[rt(t)],id=(t,e,n)=>{if(e._n)return e;const s=If((...i)=>eo(e(...i)),n);return s._c=!1,s},ma=(t,e,n)=>{const s=t._ctx;for(const i in t){if(ga(i))continue;const r=t[i];if(H(r))e[i]=id(i,r,s);else if(r!=null){const o=eo(r);e[i]=()=>o}}},ya=(t,e)=>{const n=eo(e);t.slots.default=()=>n},rd=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Y(e),Us(e,"_",n)):ma(e,t.slots={})}else t.slots={},e&&ya(t,e);Us(t.slots,yi,1)},od=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ue;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(be(i,e),!n&&l===1&&delete i._):(r=!e.$stable,ma(e,i)),o=e}else e&&(ya(t,e),o={default:1});if(r)for(const l in i)!ga(l)&&!(l in o)&&delete i[l]};function lr(t,e,n,s,i=!1){if(U(t)){t.forEach((f,_)=>lr(f,e&&(U(e)?e[_]:e),n,s,i));return}if(Ls(s)&&!i)return;const r=s.shapeFlag&4?so(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:c}=t,a=e&&e.r,u=l.refs===ue?l.refs={}:l.refs,h=l.setupState;if(a!=null&&a!==c&&(me(a)?(u[a]=null,G(h,a)&&(h[a]=null)):pe(a)&&(a.value=null)),H(c))xt(c,l,12,[o,u]);else{const f=me(c),_=pe(c);if(f||_){const y=()=>{if(t.f){const S=f?G(h,c)?h[c]:u[c]:c.value;i?U(S)&&Fr(S,r):U(S)?S.includes(r)||S.push(r):f?(u[c]=[r],G(h,c)&&(h[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,G(h,c)&&(h[c]=o)):_&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,Oe(y,n)):y()}}}const Oe=Af;function ld(t){return cd(t)}function cd(t,e){const n=Ji();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:a,setElementText:u,parentNode:h,nextSibling:f,setScopeId:_=Je,insertStaticContent:y}=t,S=(d,p,g,m=null,E=null,C=null,x=!1,I=null,T=!!p.dynamicChildren)=>{if(d===p)return;d&&!Ln(d,p)&&(m=v(d),Pe(d,E,C,!0),d=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:b,ref:L,shapeFlag:O}=p;switch(b){case mi:A(d,p,g,m);break;case qt:P(d,p,g,m);break;case Mi:d==null&&k(p,g,m,x);break;case ft:Be(d,p,g,m,E,C,x,I,T);break;default:O&1?se(d,p,g,m,E,C,x,I,T):O&6?$e(d,p,g,m,E,C,x,I,T):(O&64||O&128)&&b.process(d,p,g,m,E,C,x,I,T,R)}L!=null&&E&&lr(L,d&&d.ref,C,p||d,!p)},A=(d,p,g,m)=>{if(d==null)s(p.el=l(p.children),g,m);else{const E=p.el=d.el;p.children!==d.children&&a(E,p.children)}},P=(d,p,g,m)=>{d==null?s(p.el=c(p.children||""),g,m):p.el=d.el},k=(d,p,g,m)=>{[d.el,d.anchor]=y(d.children,p,g,m,d.el,d.anchor)},j=({el:d,anchor:p},g,m)=>{let E;for(;d&&d!==p;)E=f(d),s(d,g,m),d=E;s(p,g,m)},M=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=f(d),i(d),d=g;i(p)},se=(d,p,g,m,E,C,x,I,T)=>{x=x||p.type==="svg",d==null?we(p,g,m,E,C,x,I,T):K(d,p,E,C,x,I,T)},we=(d,p,g,m,E,C,x,I)=>{let T,b;const{type:L,props:O,shapeFlag:F,transition:W,dirs:q}=d;if(T=d.el=o(d.type,C,O&&O.is,O),F&8?u(T,d.children):F&16&&Q(d.children,T,null,m,E,C&&L!=="foreignObject",x,I),q&&Lt(d,null,m,"created"),Ie(T,d,d.scopeId,x,m),O){for(const ne in O)ne!=="value"&&!Ms(ne)&&r(T,ne,null,O[ne],C,d.children,m,E,Te);"value"in O&&r(T,"value",null,O.value),(b=O.onVnodeBeforeMount)&&it(b,m,d)}q&&Lt(d,null,m,"beforeMount");const oe=(!E||E&&!E.pendingBranch)&&W&&!W.persisted;oe&&W.beforeEnter(T),s(T,p,g),((b=O&&O.onVnodeMounted)||oe||q)&&Oe(()=>{b&&it(b,m,d),oe&&W.enter(T),q&&Lt(d,null,m,"mounted")},E)},Ie=(d,p,g,m,E)=>{if(g&&_(d,g),m)for(let C=0;C<m.length;C++)_(d,m[C]);if(E){let C=E.subTree;if(p===C){const x=E.vnode;Ie(d,x,x.scopeId,x.slotScopeIds,E.parent)}}},Q=(d,p,g,m,E,C,x,I,T=0)=>{for(let b=T;b<d.length;b++){const L=d[b]=I?It(d[b]):rt(d[b]);S(null,L,p,g,m,E,C,x,I)}},K=(d,p,g,m,E,C,x)=>{const I=p.el=d.el;let{patchFlag:T,dynamicChildren:b,dirs:L}=p;T|=d.patchFlag&16;const O=d.props||ue,F=p.props||ue;let W;g&&Ft(g,!1),(W=F.onVnodeBeforeUpdate)&&it(W,g,p,d),L&&Lt(p,d,g,"beforeUpdate"),g&&Ft(g,!0);const q=E&&p.type!=="foreignObject";if(b?de(d.dynamicChildren,b,I,g,m,q,C):x||Z(d,p,I,null,g,m,q,C,!1),T>0){if(T&16)Se(I,p,O,F,g,m,E);else if(T&2&&O.class!==F.class&&r(I,"class",null,F.class,E),T&4&&r(I,"style",O.style,F.style,E),T&8){const oe=p.dynamicProps;for(let ne=0;ne<oe.length;ne++){const _e=oe[ne],qe=O[_e],nn=F[_e];(nn!==qe||_e==="value")&&r(I,_e,qe,nn,E,d.children,g,m,Te)}}T&1&&d.children!==p.children&&u(I,p.children)}else!x&&b==null&&Se(I,p,O,F,g,m,E);((W=F.onVnodeUpdated)||L)&&Oe(()=>{W&&it(W,g,p,d),L&&Lt(p,d,g,"updated")},m)},de=(d,p,g,m,E,C,x)=>{for(let I=0;I<p.length;I++){const T=d[I],b=p[I],L=T.el&&(T.type===ft||!Ln(T,b)||T.shapeFlag&70)?h(T.el):g;S(T,b,L,null,m,E,C,x,!0)}},Se=(d,p,g,m,E,C,x)=>{if(g!==m){if(g!==ue)for(const I in g)!Ms(I)&&!(I in m)&&r(d,I,g[I],null,x,p.children,E,C,Te);for(const I in m){if(Ms(I))continue;const T=m[I],b=g[I];T!==b&&I!=="value"&&r(d,I,b,T,x,p.children,E,C,Te)}"value"in m&&r(d,"value",g.value,m.value)}},Be=(d,p,g,m,E,C,x,I,T)=>{const b=p.el=d?d.el:l(""),L=p.anchor=d?d.anchor:l("");let{patchFlag:O,dynamicChildren:F,slotScopeIds:W}=p;W&&(I=I?I.concat(W):W),d==null?(s(b,g,m),s(L,g,m),Q(p.children,g,L,E,C,x,I,T)):O>0&&O&64&&F&&d.dynamicChildren?(de(d.dynamicChildren,F,g,E,C,x,I),(p.key!=null||E&&p===E.subTree)&&va(d,p,!0)):Z(d,p,g,L,E,C,x,I,T)},$e=(d,p,g,m,E,C,x,I,T)=>{p.slotScopeIds=I,d==null?p.shapeFlag&512?E.ctx.activate(p,g,m,x,T):Mt(p,g,m,E,C,x,T):je(d,p,T)},Mt=(d,p,g,m,E,C,x)=>{const I=d.component=Ed(d,m,E);if(ca(d)&&(I.ctx.renderer=R),Cd(I),I.asyncDep){if(E&&E.registerDep(I,X),!d.el){const T=I.subTree=ke(qt);P(null,T,p,g)}return}X(I,d,p,g,E,C,x)},je=(d,p,g)=>{const m=p.component=d.component;if(Rf(d,p,g))if(m.asyncDep&&!m.asyncResolved){ie(m,p,g);return}else m.next=p,Ef(m.update),m.update();else p.el=d.el,m.vnode=p},X=(d,p,g,m,E,C,x)=>{const I=()=>{if(d.isMounted){let{next:L,bu:O,u:F,parent:W,vnode:q}=d,oe=L,ne;Ft(d,!1),L?(L.el=q.el,ie(d,L,x)):L=q,O&&Oi(O),(ne=L.props&&L.props.onVnodeBeforeUpdate)&&it(ne,W,L,q),Ft(d,!0);const _e=ki(d),qe=d.subTree;d.subTree=_e,S(qe,_e,h(qe.el),v(qe),d,E,C),L.el=_e.el,oe===null&&xf(d,_e.el),F&&Oe(F,E),(ne=L.props&&L.props.onVnodeUpdated)&&Oe(()=>it(ne,W,L,q),E)}else{let L;const{el:O,props:F}=p,{bm:W,m:q,parent:oe}=d,ne=Ls(p);if(Ft(d,!1),W&&Oi(W),!ne&&(L=F&&F.onVnodeBeforeMount)&&it(L,oe,p),Ft(d,!0),O&&ee){const _e=()=>{d.subTree=ki(d),ee(O,d.subTree,d,E,null)};ne?p.type.__asyncLoader().then(()=>!d.isUnmounted&&_e()):_e()}else{const _e=d.subTree=ki(d);S(null,_e,g,m,d,E,C),p.el=_e.el}if(q&&Oe(q,E),!ne&&(L=F&&F.onVnodeMounted)){const _e=p;Oe(()=>it(L,oe,_e),E)}(p.shapeFlag&256||oe&&Ls(oe.vnode)&&oe.vnode.shapeFlag&256)&&d.a&&Oe(d.a,E),d.isMounted=!0,p=g=m=null}},T=d.effect=new jr(I,()=>Jr(b),d.scope),b=d.update=()=>T.run();b.id=d.uid,Ft(d,!0),b()},ie=(d,p,g)=>{p.component=d;const m=d.vnode.props;d.vnode=p,d.next=null,sd(d,p.props,m,g),od(d,p.children,g),An(),Xo(),Pn()},Z=(d,p,g,m,E,C,x,I,T=!1)=>{const b=d&&d.children,L=d?d.shapeFlag:0,O=p.children,{patchFlag:F,shapeFlag:W}=p;if(F>0){if(F&128){Et(b,O,g,m,E,C,x,I,T);return}else if(F&256){at(b,O,g,m,E,C,x,I,T);return}}W&8?(L&16&&Te(b,E,C),O!==b&&u(g,O)):L&16?W&16?Et(b,O,g,m,E,C,x,I,T):Te(b,E,C,!0):(L&8&&u(g,""),W&16&&Q(O,g,m,E,C,x,I,T))},at=(d,p,g,m,E,C,x,I,T)=>{d=d||hn,p=p||hn;const b=d.length,L=p.length,O=Math.min(b,L);let F;for(F=0;F<O;F++){const W=p[F]=T?It(p[F]):rt(p[F]);S(d[F],W,g,null,E,C,x,I,T)}b>L?Te(d,E,C,!0,!1,O):Q(p,g,m,E,C,x,I,T,O)},Et=(d,p,g,m,E,C,x,I,T)=>{let b=0;const L=p.length;let O=d.length-1,F=L-1;for(;b<=O&&b<=F;){const W=d[b],q=p[b]=T?It(p[b]):rt(p[b]);if(Ln(W,q))S(W,q,g,null,E,C,x,I,T);else break;b++}for(;b<=O&&b<=F;){const W=d[O],q=p[F]=T?It(p[F]):rt(p[F]);if(Ln(W,q))S(W,q,g,null,E,C,x,I,T);else break;O--,F--}if(b>O){if(b<=F){const W=F+1,q=W<L?p[W].el:m;for(;b<=F;)S(null,p[b]=T?It(p[b]):rt(p[b]),g,q,E,C,x,I,T),b++}}else if(b>F)for(;b<=O;)Pe(d[b],E,C,!0),b++;else{const W=b,q=b,oe=new Map;for(b=q;b<=F;b++){const Ue=p[b]=T?It(p[b]):rt(p[b]);Ue.key!=null&&oe.set(Ue.key,b)}let ne,_e=0;const qe=F-q+1;let nn=!1,Wo=0;const Mn=new Array(qe);for(b=0;b<qe;b++)Mn[b]=0;for(b=W;b<=O;b++){const Ue=d[b];if(_e>=qe){Pe(Ue,E,C,!0);continue}let st;if(Ue.key!=null)st=oe.get(Ue.key);else for(ne=q;ne<=F;ne++)if(Mn[ne-q]===0&&Ln(Ue,p[ne])){st=ne;break}st===void 0?Pe(Ue,E,C,!0):(Mn[st-q]=b+1,st>=Wo?Wo=st:nn=!0,S(Ue,p[st],g,null,E,C,x,I,T),_e++)}const Ho=nn?ad(Mn):hn;for(ne=Ho.length-1,b=qe-1;b>=0;b--){const Ue=q+b,st=p[Ue],$o=Ue+1<L?p[Ue+1].el:m;Mn[b]===0?S(null,st,g,$o,E,C,x,I,T):nn&&(ne<0||b!==Ho[ne]?nt(st,g,$o,2):ne--)}}},nt=(d,p,g,m,E=null)=>{const{el:C,type:x,transition:I,children:T,shapeFlag:b}=d;if(b&6){nt(d.component.subTree,p,g,m);return}if(b&128){d.suspense.move(p,g,m);return}if(b&64){x.move(d,p,g,R);return}if(x===ft){s(C,p,g);for(let O=0;O<T.length;O++)nt(T[O],p,g,m);s(d.anchor,p,g);return}if(x===Mi){j(d,p,g);return}if(m!==2&&b&1&&I)if(m===0)I.beforeEnter(C),s(C,p,g),Oe(()=>I.enter(C),E);else{const{leave:O,delayLeave:F,afterLeave:W}=I,q=()=>s(C,p,g),oe=()=>{O(C,()=>{q(),W&&W()})};F?F(C,q,oe):oe()}else s(C,p,g)},Pe=(d,p,g,m=!1,E=!1)=>{const{type:C,props:x,ref:I,children:T,dynamicChildren:b,shapeFlag:L,patchFlag:O,dirs:F}=d;if(I!=null&&lr(I,null,g,d,!0),L&256){p.ctx.deactivate(d);return}const W=L&1&&F,q=!Ls(d);let oe;if(q&&(oe=x&&x.onVnodeBeforeUnmount)&&it(oe,p,d),L&6)Ts(d.component,g,m);else{if(L&128){d.suspense.unmount(g,m);return}W&&Lt(d,null,p,"beforeUnmount"),L&64?d.type.remove(d,p,g,E,R,m):b&&(C!==ft||O>0&&O&64)?Te(b,p,g,!1,!0):(C===ft&&O&384||!E&&L&16)&&Te(T,p,g),m&&en(d)}(q&&(oe=x&&x.onVnodeUnmounted)||W)&&Oe(()=>{oe&&it(oe,p,d),W&&Lt(d,null,p,"unmounted")},g)},en=d=>{const{type:p,el:g,anchor:m,transition:E}=d;if(p===ft){tn(g,m);return}if(p===Mi){M(d);return}const C=()=>{i(g),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(d.shapeFlag&1&&E&&!E.persisted){const{leave:x,delayLeave:I}=E,T=()=>x(g,C);I?I(d.el,C,T):T()}else C()},tn=(d,p)=>{let g;for(;d!==p;)g=f(d),i(d),d=g;i(p)},Ts=(d,p,g)=>{const{bum:m,scope:E,update:C,subTree:x,um:I}=d;m&&Oi(m),E.stop(),C&&(C.active=!1,Pe(x,d,p,g)),I&&Oe(I,p),Oe(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Te=(d,p,g,m=!1,E=!1,C=0)=>{for(let x=C;x<d.length;x++)Pe(d[x],p,g,m,E)},v=d=>d.shapeFlag&6?v(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),N=(d,p,g)=>{d==null?p._vnode&&Pe(p._vnode,null,null,!0):S(p._vnode||null,d,p,null,null,null,g),Xo(),ta(),p._vnode=d},R={p:S,um:Pe,m:nt,r:en,mt:Mt,mc:Q,pc:Z,pbc:de,n:v,o:t};let D,ee;return e&&([D,ee]=e(R)),{render:N,hydrate:D,createApp:ed(N,D)}}function Ft({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function va(t,e,n=!1){const s=t.children,i=e.children;if(U(s)&&U(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=It(i[r]),l.el=o.el),n||va(o,l)),l.type===mi&&(l.el=o.el)}}function ad(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const a=t[s];if(a!==0){if(i=n[n.length-1],t[i]<a){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<a?r=l+1:o=l;a<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const ud=t=>t.__isTeleport,ft=Symbol.for("v-fgt"),mi=Symbol.for("v-txt"),qt=Symbol.for("v-cmt"),Mi=Symbol.for("v-stc"),qn=[];let Ye=null;function Ea(t=!1){qn.push(Ye=t?null:[])}function hd(){qn.pop(),Ye=qn[qn.length-1]||null}let rs=1;function cl(t){rs+=t}function Ca(t){return t.dynamicChildren=rs>0?Ye||hn:null,hd(),rs>0&&Ye&&Ye.push(t),t}function fd(t,e,n,s,i,r){return Ca(wa(t,e,n,s,i,r,!0))}function dd(t,e,n,s,i){return Ca(ke(t,e,n,s,i,!0))}function cr(t){return t?t.__v_isVNode===!0:!1}function Ln(t,e){return t.type===e.type&&t.key===e.key}const yi="__vInternal",ba=({key:t})=>t??null,Bs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?me(t)||pe(t)||H(t)?{i:ze,r:t,k:e,f:!!n}:t:null);function wa(t,e=null,n=null,s=0,i=null,r=t===ft?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ba(e),ref:e&&Bs(e),scopeId:ia,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:ze};return l?(to(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=me(n)?8:16),rs>0&&!o&&Ye&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Ye.push(c),c}const ke=pd;function pd(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===zf)&&(t=qt),cr(t)){const l=Cn(t,e,!0);return n&&to(l,n),rs>0&&!r&&Ye&&(l.shapeFlag&6?Ye[Ye.indexOf(t)]=l:Ye.push(l)),l.patchFlag|=-2,l}if(Td(t)&&(t=t.__vccOpts),e){e=_d(e);let{class:l,style:c}=e;l&&!me(l)&&(e.class=Hr(l)),he(c)&&(Gc(c)&&!U(c)&&(c=be({},c)),e.style=Wr(c))}const o=me(t)?1:Nf(t)?128:ud(t)?64:he(t)?4:H(t)?2:0;return wa(t,e,n,s,i,o,r,!0)}function _d(t){return t?Gc(t)||yi in t?be({},t):t:null}function Cn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?md(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&ba(l),ref:e&&e.ref?n&&i?U(i)?i.concat(Bs(e)):[i,Bs(e)]:Bs(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ft?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Cn(t.ssContent),ssFallback:t.ssFallback&&Cn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function gd(t=" ",e=0){return ke(mi,null,t,e)}function aE(t="",e=!1){return e?(Ea(),dd(qt,null,t)):ke(qt,null,t)}function rt(t){return t==null||typeof t=="boolean"?ke(qt):U(t)?ke(ft,null,t.slice()):typeof t=="object"?It(t):ke(mi,null,String(t))}function It(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Cn(t)}function to(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(U(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),to(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(yi in e)?e._ctx=ze:i===3&&ze&&(ze.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:ze},n=32):(e=String(e),s&64?(n=16,e=[gd(e)]):n=8);t.children=e,t.shapeFlag|=n}function md(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Hr([e.class,s.class]));else if(i==="style")e.style=Wr([e.style,s.style]);else if(ci(i)){const r=e[i],o=s[i];o&&r!==o&&!(U(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function it(t,e,n,s=null){Ze(t,e,7,[n,s])}const yd=da();let vd=0;function Ed(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||yd,r={uid:vd++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new kc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_a(s,i),emitsOptions:sa(s,i),emit:null,emitted:null,propsDefaults:ue,inheritAttrs:s.inheritAttrs,ctx:ue,data:ue,props:ue,attrs:ue,slots:ue,refs:ue,setupState:ue,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=wf.bind(null,r),t.ce&&t.ce(r),r}let Ee=null,no,sn,al="__VUE_INSTANCE_SETTERS__";(sn=Ji()[al])||(sn=Ji()[al]=[]),sn.push(t=>Ee=t),no=t=>{sn.length>1?sn.forEach(e=>e(t)):sn[0](t)};const bn=t=>{no(t),t.scope.on()},Vt=()=>{Ee&&Ee.scope.off(),no(null)};function Ia(t){return t.vnode.shapeFlag&4}let os=!1;function Cd(t,e=!1){os=e;const{props:n,children:s}=t.vnode,i=Ia(t);nd(t,n,i,e),rd(t,s);const r=i?bd(t,e):void 0;return os=!1,r}function bd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=di(new Proxy(t.ctx,Kf));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Id(t):null;bn(t),An();const r=xt(s,t,0,[t.props,i]);if(Pn(),Vt(),xc(r)){if(r.then(Vt,Vt),e)return r.then(o=>{ul(t,o,e)}).catch(o=>{pi(o,t,0)});t.asyncDep=r}else ul(t,r,e)}else Sa(t,e)}function ul(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:he(e)&&(t.setupState=Jc(e)),Sa(t,n)}let hl;function Sa(t,e,n){const s=t.type;if(!t.render){if(!e&&hl&&!s.render){const i=s.template||Zr(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=s,a=be(be({isCustomElement:r,delimiters:l},o),c);s.render=hl(i,a)}}t.render=s.render||Je}bn(t),An(),Gf(t),Pn(),Vt()}function wd(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Le(t,"get","$attrs"),e[n]}}))}function Id(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return wd(t)},slots:t.slots,emit:t.emit,expose:e}}function so(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Jc(di(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in zn)return zn[n](t)},has(e,n){return n in e||n in zn}}))}function Sd(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function Td(t){return H(t)&&"__vccOpts"in t}const Ve=(t,e)=>mf(t,e,os);function Ta(t,e,n){const s=arguments.length;return s===2?he(e)&&!U(e)?cr(e)?ke(t,null,[e]):ke(t,e):ke(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&cr(n)&&(n=[n]),ke(t,e,n))}const Rd=Symbol.for("v-scx"),xd=()=>lt(Rd),Nd="3.3.4",Ad="http://www.w3.org/2000/svg",Ht=typeof document<"u"?document:null,fl=Ht&&Ht.createElement("template"),Pd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Ht.createElementNS(Ad,t):Ht.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Ht.createTextNode(t),createComment:t=>Ht.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ht.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{fl.innerHTML=s?`<svg>${t}</svg>`:t;const l=fl.content;if(s){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Od(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function kd(t,e,n){const s=t.style,i=me(n);if(n&&!i){if(e&&!me(e))for(const r in e)n[r]==null&&ar(s,r,"");for(const r in n)ar(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const dl=/\s*!important$/;function ar(t,e,n){if(U(n))n.forEach(s=>ar(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Dd(t,e);dl.test(n)?t.setProperty(Nn(s),n.replace(dl,""),"important"):t[s]=n}}const pl=["Webkit","Moz","ms"],Li={};function Dd(t,e){const n=Li[e];if(n)return n;let s=ct(e);if(s!=="filter"&&s in t)return Li[e]=s;s=hi(s);for(let i=0;i<pl.length;i++){const r=pl[i]+s;if(r in t)return Li[e]=r}return e}const _l="http://www.w3.org/1999/xlink";function Md(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(_l,e.slice(6,e.length)):t.setAttributeNS(_l,e,n);else{const r=kh(e);n==null||r&&!Pc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Ld(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const l=t.tagName;if(e==="value"&&l!=="PROGRESS"&&!l.includes("-")){t._value=n;const a=l==="OPTION"?t.getAttribute("value"):t.value,u=n??"";a!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Pc(n):n==null&&a==="string"?(n="",c=!0):a==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Fd(t,e,n,s){t.addEventListener(e,n,s)}function Bd(t,e,n,s){t.removeEventListener(e,n,s)}function Ud(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=Wd(e);if(s){const a=r[e]=jd(s,i);Fd(t,l,a,c)}else o&&(Bd(t,l,o,c),r[e]=void 0)}}const gl=/(?:Once|Passive|Capture)$/;function Wd(t){let e;if(gl.test(t)){e={};let s;for(;s=t.match(gl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Nn(t.slice(2)),e]}let Fi=0;const Hd=Promise.resolve(),$d=()=>Fi||(Hd.then(()=>Fi=0),Fi=Date.now());function jd(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ze(Vd(s,n.value),e,5,[s])};return n.value=t,n.attached=$d(),n}function Vd(t,e){if(U(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const ml=/^on[a-z]/,zd=(t,e,n,s,i=!1,r,o,l,c)=>{e==="class"?Od(t,s,i):e==="style"?kd(t,n,s):ci(e)?Lr(e)||Ud(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):qd(t,e,s,i))?Ld(t,e,s,r,o,l,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Md(t,e,s,i))};function qd(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&ml.test(e)&&H(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ml.test(e)&&me(n)?!1:e in t}const Kd=be({patchProp:zd},Pd);let yl;function Gd(){return yl||(yl=ld(Kd))}const Yd=(...t)=>{const e=Gd().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Qd(s);if(!i)return;const r=e._component;!H(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Qd(t){return me(t)?document.querySelector(t):t}const Xd=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Jd={},Zd={id:"app"};function ep(t,e){const n=Vf("router-view");return Ea(),fd("div",Zd,[ke(n)])}const tp=Xd(Jd,[["render",ep]]);var np=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Ra;const vi=t=>Ra=t,xa=Symbol();function ur(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Kn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Kn||(Kn={}));function sp(){const t=Dc(!0),e=t.run(()=>Yr({}));let n=[],s=[];const i=di({install(r){vi(i),i._a=r,r.provide(xa,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!np?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Na=()=>{};function vl(t,e,n,s=Na){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Mc()&&Mh(i),i}function rn(t,...e){t.slice().forEach(n=>{n(...e)})}const ip=t=>t();function hr(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];ur(i)&&ur(s)&&t.hasOwnProperty(n)&&!pe(s)&&!Rt(s)?t[n]=hr(i,s):t[n]=s}return t}const rp=Symbol();function op(t){return!ur(t)||!t.hasOwnProperty(rp)}const{assign:wt}=Object;function lp(t){return!!(pe(t)&&t.effect)}function cp(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let c;function a(){l||(n.state.value[t]=i?i():{});const u=df(n.state.value[t]);return wt(u,r,Object.keys(o||{}).reduce((h,f)=>(h[f]=di(Ve(()=>{vi(n);const _=n._s.get(t);return o[f].call(_,_)})),h),{}))}return c=Aa(t,a,e,n,s,!0),c}function Aa(t,e,n={},s,i,r){let o;const l=wt({actions:{}},n),c={deep:!0};let a,u,h=[],f=[],_;const y=s.state.value[t];!r&&!y&&(s.state.value[t]={}),Yr({});let S;function A(Q){let K;a=u=!1,typeof Q=="function"?(Q(s.state.value[t]),K={type:Kn.patchFunction,storeId:t,events:_}):(hr(s.state.value[t],Q),K={type:Kn.patchObject,payload:Q,storeId:t,events:_});const de=S=Symbol();Xr().then(()=>{S===de&&(a=!0)}),u=!0,rn(h,K,s.state.value[t])}const P=r?function(){const{state:K}=n,de=K?K():{};this.$patch(Se=>{wt(Se,de)})}:Na;function k(){o.stop(),h=[],f=[],s._s.delete(t)}function j(Q,K){return function(){vi(s);const de=Array.from(arguments),Se=[],Be=[];function $e(X){Se.push(X)}function Mt(X){Be.push(X)}rn(f,{args:de,name:Q,store:se,after:$e,onError:Mt});let je;try{je=K.apply(this&&this.$id===t?this:se,de)}catch(X){throw rn(Be,X),X}return je instanceof Promise?je.then(X=>(rn(Se,X),X)).catch(X=>(rn(Be,X),Promise.reject(X))):(rn(Se,je),je)}}const M={_p:s,$id:t,$onAction:vl.bind(null,f),$patch:A,$reset:P,$subscribe(Q,K={}){const de=vl(h,Q,K.detached,()=>Se()),Se=o.run(()=>Vn(()=>s.state.value[t],Be=>{(K.flush==="sync"?u:a)&&Q({storeId:t,type:Kn.direct,events:_},Be)},wt({},c,K)));return de},$dispose:k},se=ys(M);s._s.set(t,se);const we=s._a&&s._a.runWithContext||ip,Ie=s._e.run(()=>(o=Dc(),we(()=>o.run(e))));for(const Q in Ie){const K=Ie[Q];if(pe(K)&&!lp(K)||Rt(K))r||(y&&op(K)&&(pe(K)?K.value=y[Q]:hr(K,y[Q])),s.state.value[t][Q]=K);else if(typeof K=="function"){const de=j(Q,K);Ie[Q]=de,l.actions[Q]=K}}return wt(se,Ie),wt(Y(se),Ie),Object.defineProperty(se,"$state",{get:()=>s.state.value[t],set:Q=>{A(K=>{wt(K,Q)})}}),s._p.forEach(Q=>{wt(se,o.run(()=>Q({store:se,app:s._a,pinia:s,options:l})))}),y&&r&&n.hydrate&&n.hydrate(se.$state,y),a=!0,u=!0,se}function uE(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(l,c){const a=td();return l=l||(a?lt(xa,null):null),l&&vi(l),l=Ra,l._s.has(s)||(r?Aa(s,e,i,l):cp(s,i,l)),l._s.get(s)}return o.$id=s,o}const ap="modulepreload",up=function(t){return"/BLOOMTOXIC/"+t},El={},hp=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=up(r),r in El)return;El[r]=!0;const o=r.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${l}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":ap,o||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),o)return new Promise((u,h)=>{a.addEventListener("load",u),a.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ln=typeof window<"u";function fp(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const te=Object.assign;function Bi(t,e){const n={};for(const s in e){const i=e[s];n[s]=tt(i)?i.map(t):t(i)}return n}const Gn=()=>{},tt=Array.isArray,dp=/\/$/,pp=t=>t.replace(dp,"");function Ui(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(s=e.slice(0,c),r=e.slice(c+1,l>-1?l:e.length),i=t(r)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=yp(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function _p(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Cl(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function gp(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&wn(e.matched[s],n.matched[i])&&Pa(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function wn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Pa(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!mp(t[n],e[n]))return!1;return!0}function mp(t,e){return tt(t)?bl(t,e):tt(e)?bl(e,t):t===e}function bl(t,e){return tt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function yp(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var ls;(function(t){t.pop="pop",t.push="push"})(ls||(ls={}));var Yn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Yn||(Yn={}));function vp(t){if(!t)if(ln){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),pp(t)}const Ep=/^[^#]+#/;function Cp(t,e){return t.replace(Ep,"#")+e}function bp(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Ei=()=>({left:window.pageXOffset,top:window.pageYOffset});function wp(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=bp(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function wl(t,e){return(history.state?history.state.position-e:-1)+t}const fr=new Map;function Ip(t,e){fr.set(t,e)}function Sp(t){const e=fr.get(t);return fr.delete(t),e}let Tp=()=>location.protocol+"//"+location.host;function Oa(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let l=i.includes(t.slice(r))?t.slice(r).length:1,c=i.slice(l);return c[0]!=="/"&&(c="/"+c),Cl(c,"")}return Cl(n,t)+s+i}function Rp(t,e,n,s){let i=[],r=[],o=null;const l=({state:f})=>{const _=Oa(t,location),y=n.value,S=e.value;let A=0;if(f){if(n.value=_,e.value=f,o&&o===y){o=null;return}A=S?f.position-S.position:0}else s(_);i.forEach(P=>{P(n.value,y,{delta:A,type:ls.pop,direction:A?A>0?Yn.forward:Yn.back:Yn.unknown})})};function c(){o=n.value}function a(f){i.push(f);const _=()=>{const y=i.indexOf(f);y>-1&&i.splice(y,1)};return r.push(_),_}function u(){const{history:f}=window;f.state&&f.replaceState(te({},f.state,{scroll:Ei()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:a,destroy:h}}function Il(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Ei():null}}function xp(t){const{history:e,location:n}=window,s={value:Oa(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,a,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Tp()+t+c;try{e[u?"replaceState":"pushState"](a,"",f),i.value=a}catch(_){console.error(_),n[u?"replace":"assign"](f)}}function o(c,a){const u=te({},e.state,Il(i.value.back,c,i.value.forward,!0),a,{position:i.value.position});r(c,u,!0),s.value=c}function l(c,a){const u=te({},i.value,e.state,{forward:c,scroll:Ei()});r(u.current,u,!0);const h=te({},Il(s.value,c,null),{position:u.position+1},a);r(c,h,!1),s.value=c}return{location:s,state:i,push:l,replace:o}}function Np(t){t=vp(t);const e=xp(t),n=Rp(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=te({location:"",base:t,go:s,createHref:Cp.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function Ap(t){return typeof t=="string"||t&&typeof t=="object"}function ka(t){return typeof t=="string"||typeof t=="symbol"}const bt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Da=Symbol("");var Sl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Sl||(Sl={}));function In(t,e){return te(new Error,{type:t,[Da]:!0},e)}function ut(t,e){return t instanceof Error&&Da in t&&(e==null||!!(t.type&e))}const Tl="[^/]+?",Pp={sensitive:!1,strict:!1,start:!0,end:!0},Op=/[.+*?^${}()[\]/\\]/g;function kp(t,e){const n=te({},Pp,e),s=[];let i=n.start?"^":"";const r=[];for(const a of t){const u=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let h=0;h<a.length;h++){const f=a[h];let _=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(Op,"\\$&"),_+=40;else if(f.type===1){const{value:y,repeatable:S,optional:A,regexp:P}=f;r.push({name:y,repeatable:S,optional:A});const k=P||Tl;if(k!==Tl){_+=10;try{new RegExp(`(${k})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${y}" (${k}): `+M.message)}}let j=S?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(j=A&&a.length<2?`(?:/${j})`:"/"+j),A&&(j+="?"),i+=j,_+=20,A&&(_+=-8),S&&(_+=-20),k===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const a=s.length-1;s[a][s[a].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(a){const u=a.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const _=u[f]||"",y=r[f-1];h[y.name]=_&&y.repeatable?_.split("/"):_}return h}function c(a){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of f)if(_.type===0)u+=_.value;else if(_.type===1){const{value:y,repeatable:S,optional:A}=_,P=y in a?a[y]:"";if(tt(P)&&!S)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const k=tt(P)?P.join("/"):P;if(!k)if(A)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=k}}return u||"/"}return{re:o,score:s,keys:r,parse:l,stringify:c}}function Dp(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Mp(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=Dp(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Rl(s))return 1;if(Rl(i))return-1}return i.length-s.length}function Rl(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Lp={type:0,value:""},Fp=/[a-zA-Z0-9_]/;function Bp(t){if(!t)return[[]];if(t==="/")return[[Lp]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${a}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,c,a="",u="";function h(){a&&(n===0?r.push({type:0,value:a}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${a}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:a,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),a="")}function f(){a+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(a&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:Fp.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${a}"`),h(),o(),i}function Up(t,e,n){const s=kp(Bp(t.path),n),i=te(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Wp(t,e){const n=[],s=new Map;e=Al({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,f){const _=!f,y=Hp(u);y.aliasOf=f&&f.record;const S=Al(e,u),A=[y];if("alias"in u){const j=typeof u.alias=="string"?[u.alias]:u.alias;for(const M of j)A.push(te({},y,{components:f?f.record.components:y.components,path:M,aliasOf:f?f.record:y}))}let P,k;for(const j of A){const{path:M}=j;if(h&&M[0]!=="/"){const se=h.record.path,we=se[se.length-1]==="/"?"":"/";j.path=h.record.path+(M&&we+M)}if(P=Up(j,h,S),f?f.alias.push(P):(k=k||P,k!==P&&k.alias.push(P),_&&u.name&&!Nl(P)&&o(u.name)),y.children){const se=y.children;for(let we=0;we<se.length;we++)r(se[we],P,f&&f.children[we])}f=f||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&c(P)}return k?()=>{o(k)}:Gn}function o(u){if(ka(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function l(){return n}function c(u){let h=0;for(;h<n.length&&Mp(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Ma(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Nl(u)&&s.set(u.record.name,u)}function a(u,h){let f,_={},y,S;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw In(1,{location:u});S=f.record.name,_=te(xl(h.params,f.keys.filter(k=>!k.optional).map(k=>k.name)),u.params&&xl(u.params,f.keys.map(k=>k.name))),y=f.stringify(_)}else if("path"in u)y=u.path,f=n.find(k=>k.re.test(y)),f&&(_=f.parse(y),S=f.record.name);else{if(f=h.name?s.get(h.name):n.find(k=>k.re.test(h.path)),!f)throw In(1,{location:u,currentLocation:h});S=f.record.name,_=te({},h.params,u.params),y=f.stringify(_)}const A=[];let P=f;for(;P;)A.unshift(P.record),P=P.parent;return{name:S,path:y,params:_,matched:A,meta:jp(A)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:a,removeRoute:o,getRoutes:l,getRecordMatcher:i}}function xl(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Hp(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:$p(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function $p(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Nl(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function jp(t){return t.reduce((e,n)=>te(e,n.meta),{})}function Al(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Ma(t,e){return e.children.some(n=>n===t||Ma(t,n))}const La=/#/g,Vp=/&/g,zp=/\//g,qp=/=/g,Kp=/\?/g,Fa=/\+/g,Gp=/%5B/g,Yp=/%5D/g,Ba=/%5E/g,Qp=/%60/g,Ua=/%7B/g,Xp=/%7C/g,Wa=/%7D/g,Jp=/%20/g;function io(t){return encodeURI(""+t).replace(Xp,"|").replace(Gp,"[").replace(Yp,"]")}function Zp(t){return io(t).replace(Ua,"{").replace(Wa,"}").replace(Ba,"^")}function dr(t){return io(t).replace(Fa,"%2B").replace(Jp,"+").replace(La,"%23").replace(Vp,"%26").replace(Qp,"`").replace(Ua,"{").replace(Wa,"}").replace(Ba,"^")}function e_(t){return dr(t).replace(qp,"%3D")}function t_(t){return io(t).replace(La,"%23").replace(Kp,"%3F")}function n_(t){return t==null?"":t_(t).replace(zp,"%2F")}function Vs(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function s_(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Fa," "),o=r.indexOf("="),l=Vs(o<0?r:r.slice(0,o)),c=o<0?null:Vs(r.slice(o+1));if(l in e){let a=e[l];tt(a)||(a=e[l]=[a]),a.push(c)}else e[l]=c}return e}function Pl(t){let e="";for(let n in t){const s=t[n];if(n=e_(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(tt(s)?s.map(r=>r&&dr(r)):[s&&dr(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function i_(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=tt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const r_=Symbol(""),Ol=Symbol(""),ro=Symbol(""),Ha=Symbol(""),pr=Symbol("");function Fn(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function St(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,l)=>{const c=h=>{h===!1?l(In(4,{from:n,to:e})):h instanceof Error?l(h):Ap(h)?l(In(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},a=t.call(s&&s.instances[i],e,n,c);let u=Promise.resolve(a);t.length<3&&(u=u.then(c)),u.catch(h=>l(h))})}function Wi(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let l=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(o_(l)){const a=(l.__vccOpts||l)[e];a&&i.push(St(a,n,s,r,o))}else{let c=l();i.push(()=>c.then(a=>{if(!a)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=fp(a)?a.default:a;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&St(f,n,s,r,o)()}))}}return i}function o_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function kl(t){const e=lt(ro),n=lt(Ha),s=Ve(()=>e.resolve(dn(t.to))),i=Ve(()=>{const{matched:c}=s.value,{length:a}=c,u=c[a-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(wn.bind(null,u));if(f>-1)return f;const _=Dl(c[a-2]);return a>1&&Dl(u)===_&&h[h.length-1].path!==_?h.findIndex(wn.bind(null,c[a-2])):f}),r=Ve(()=>i.value>-1&&u_(n.params,s.value.params)),o=Ve(()=>i.value>-1&&i.value===n.matched.length-1&&Pa(n.params,s.value.params));function l(c={}){return a_(c)?e[dn(t.replace)?"replace":"push"](dn(t.to)).catch(Gn):Promise.resolve()}return{route:s,href:Ve(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}const l_=la({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:kl,setup(t,{slots:e}){const n=ys(kl(t)),{options:s}=lt(ro),i=Ve(()=>({[Ml(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ml(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Ta("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),c_=l_;function a_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function u_(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!tt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Dl(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ml=(t,e,n)=>t??e??n,h_=la({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=lt(pr),i=Ve(()=>t.route||s.value),r=lt(Ol,0),o=Ve(()=>{let a=dn(r);const{matched:u}=i.value;let h;for(;(h=u[a])&&!h.components;)a++;return a}),l=Ve(()=>i.value.matched[o.value]);Fs(Ol,Ve(()=>o.value+1)),Fs(r_,l),Fs(pr,i);const c=Yr();return Vn(()=>[c.value,l.value,t.name],([a,u,h],[f,_,y])=>{u&&(u.instances[h]=a,_&&_!==u&&a&&a===f&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),a&&u&&(!_||!wn(u,_)||!f)&&(u.enterCallbacks[h]||[]).forEach(S=>S(a))},{flush:"post"}),()=>{const a=i.value,u=t.name,h=l.value,f=h&&h.components[u];if(!f)return Ll(n.default,{Component:f,route:a});const _=h.props[u],y=_?_===!0?a.params:typeof _=="function"?_(a):_:null,A=Ta(f,te({},y,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Ll(n.default,{Component:A,route:a})||A}}});function Ll(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const f_=h_;function d_(t){const e=Wp(t.routes,t),n=t.parseQuery||s_,s=t.stringifyQuery||Pl,i=t.history,r=Fn(),o=Fn(),l=Fn(),c=uf(bt);let a=bt;ln&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Bi.bind(null,v=>""+v),h=Bi.bind(null,n_),f=Bi.bind(null,Vs);function _(v,N){let R,D;return ka(v)?(R=e.getRecordMatcher(v),D=N):D=v,e.addRoute(D,R)}function y(v){const N=e.getRecordMatcher(v);N&&e.removeRoute(N)}function S(){return e.getRoutes().map(v=>v.record)}function A(v){return!!e.getRecordMatcher(v)}function P(v,N){if(N=te({},N||c.value),typeof v=="string"){const g=Ui(n,v,N.path),m=e.resolve({path:g.path},N),E=i.createHref(g.fullPath);return te(g,m,{params:f(m.params),hash:Vs(g.hash),redirectedFrom:void 0,href:E})}let R;if("path"in v)R=te({},v,{path:Ui(n,v.path,N.path).path});else{const g=te({},v.params);for(const m in g)g[m]==null&&delete g[m];R=te({},v,{params:h(g)}),N.params=h(N.params)}const D=e.resolve(R,N),ee=v.hash||"";D.params=u(f(D.params));const d=_p(s,te({},v,{hash:Zp(ee),path:D.path})),p=i.createHref(d);return te({fullPath:d,hash:ee,query:s===Pl?i_(v.query):v.query||{}},D,{redirectedFrom:void 0,href:p})}function k(v){return typeof v=="string"?Ui(n,v,c.value.path):te({},v)}function j(v,N){if(a!==v)return In(8,{from:N,to:v})}function M(v){return Ie(v)}function se(v){return M(te(k(v),{replace:!0}))}function we(v){const N=v.matched[v.matched.length-1];if(N&&N.redirect){const{redirect:R}=N;let D=typeof R=="function"?R(v):R;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=k(D):{path:D},D.params={}),te({query:v.query,hash:v.hash,params:"path"in D?{}:v.params},D)}}function Ie(v,N){const R=a=P(v),D=c.value,ee=v.state,d=v.force,p=v.replace===!0,g=we(R);if(g)return Ie(te(k(g),{state:typeof g=="object"?te({},ee,g.state):ee,force:d,replace:p}),N||R);const m=R;m.redirectedFrom=N;let E;return!d&&gp(s,D,R)&&(E=In(16,{to:m,from:D}),nt(D,D,!0,!1)),(E?Promise.resolve(E):de(m,D)).catch(C=>ut(C)?ut(C,2)?C:Et(C):Z(C,m,D)).then(C=>{if(C){if(ut(C,2))return Ie(te({replace:p},k(C.to),{state:typeof C.to=="object"?te({},ee,C.to.state):ee,force:d}),N||m)}else C=Be(m,D,!0,p,ee);return Se(m,D,C),C})}function Q(v,N){const R=j(v,N);return R?Promise.reject(R):Promise.resolve()}function K(v){const N=tn.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(v):v()}function de(v,N){let R;const[D,ee,d]=p_(v,N);R=Wi(D.reverse(),"beforeRouteLeave",v,N);for(const g of D)g.leaveGuards.forEach(m=>{R.push(St(m,v,N))});const p=Q.bind(null,v,N);return R.push(p),Te(R).then(()=>{R=[];for(const g of r.list())R.push(St(g,v,N));return R.push(p),Te(R)}).then(()=>{R=Wi(ee,"beforeRouteUpdate",v,N);for(const g of ee)g.updateGuards.forEach(m=>{R.push(St(m,v,N))});return R.push(p),Te(R)}).then(()=>{R=[];for(const g of d)if(g.beforeEnter)if(tt(g.beforeEnter))for(const m of g.beforeEnter)R.push(St(m,v,N));else R.push(St(g.beforeEnter,v,N));return R.push(p),Te(R)}).then(()=>(v.matched.forEach(g=>g.enterCallbacks={}),R=Wi(d,"beforeRouteEnter",v,N),R.push(p),Te(R))).then(()=>{R=[];for(const g of o.list())R.push(St(g,v,N));return R.push(p),Te(R)}).catch(g=>ut(g,8)?g:Promise.reject(g))}function Se(v,N,R){l.list().forEach(D=>K(()=>D(v,N,R)))}function Be(v,N,R,D,ee){const d=j(v,N);if(d)return d;const p=N===bt,g=ln?history.state:{};R&&(D||p?i.replace(v.fullPath,te({scroll:p&&g&&g.scroll},ee)):i.push(v.fullPath,ee)),c.value=v,nt(v,N,R,p),Et()}let $e;function Mt(){$e||($e=i.listen((v,N,R)=>{if(!Ts.listening)return;const D=P(v),ee=we(D);if(ee){Ie(te(ee,{replace:!0}),D).catch(Gn);return}a=D;const d=c.value;ln&&Ip(wl(d.fullPath,R.delta),Ei()),de(D,d).catch(p=>ut(p,12)?p:ut(p,2)?(Ie(p.to,D).then(g=>{ut(g,20)&&!R.delta&&R.type===ls.pop&&i.go(-1,!1)}).catch(Gn),Promise.reject()):(R.delta&&i.go(-R.delta,!1),Z(p,D,d))).then(p=>{p=p||Be(D,d,!1),p&&(R.delta&&!ut(p,8)?i.go(-R.delta,!1):R.type===ls.pop&&ut(p,20)&&i.go(-1,!1)),Se(D,d,p)}).catch(Gn)}))}let je=Fn(),X=Fn(),ie;function Z(v,N,R){Et(v);const D=X.list();return D.length?D.forEach(ee=>ee(v,N,R)):console.error(v),Promise.reject(v)}function at(){return ie&&c.value!==bt?Promise.resolve():new Promise((v,N)=>{je.add([v,N])})}function Et(v){return ie||(ie=!v,Mt(),je.list().forEach(([N,R])=>v?R(v):N()),je.reset()),v}function nt(v,N,R,D){const{scrollBehavior:ee}=t;if(!ln||!ee)return Promise.resolve();const d=!R&&Sp(wl(v.fullPath,0))||(D||!R)&&history.state&&history.state.scroll||null;return Xr().then(()=>ee(v,N,d)).then(p=>p&&wp(p)).catch(p=>Z(p,v,N))}const Pe=v=>i.go(v);let en;const tn=new Set,Ts={currentRoute:c,listening:!0,addRoute:_,removeRoute:y,hasRoute:A,getRoutes:S,resolve:P,options:t,push:M,replace:se,go:Pe,back:()=>Pe(-1),forward:()=>Pe(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:X.add,isReady:at,install(v){const N=this;v.component("RouterLink",c_),v.component("RouterView",f_),v.config.globalProperties.$router=N,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>dn(c)}),ln&&!en&&c.value===bt&&(en=!0,M(i.location).catch(ee=>{}));const R={};for(const ee in bt)Object.defineProperty(R,ee,{get:()=>c.value[ee],enumerable:!0});v.provide(ro,N),v.provide(Ha,qc(R)),v.provide(pr,c);const D=v.unmount;tn.add(v),v.unmount=function(){tn.delete(v),tn.size<1&&(a=bt,$e&&$e(),$e=null,c.value=bt,en=!1,ie=!1),D()}}};function Te(v){return v.reduce((N,R)=>N.then(()=>K(R)),Promise.resolve())}return Ts}function p_(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(a=>wn(a,l))?s.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(a=>wn(a,c))||i.push(c))}return[n,s,i]}const __="/BLOOMTOXIC/",g_=[{path:__+":pathMatch(.*)",name:"error",component:()=>hp(()=>import("./index-8cac1c1d.js"),[])}],m_=d_({history:Np(),routes:g_});/**
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
 */const $a={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const w=function(t,e){if(!t)throw On(e)},On=function(t){return new Error("Firebase Database ("+$a.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const ja=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},y_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},oo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,a=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let f=(l&15)<<2|a>>6,_=a&63;c||(_=64,o||(f=64)),s.push(n[u],n[h],n[f],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ja(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):y_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const a=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||a==null||h==null)throw new v_;const f=r<<2|l>>4;if(s.push(f),a!==64){const _=l<<4&240|a>>2;if(s.push(_),h!==64){const y=a<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class v_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Va=function(t){const e=ja(t);return oo.encodeByteArray(e,!0)},zs=function(t){return Va(t).replace(/\./g,"")},_r=function(t){try{return oo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function E_(t){return za(void 0,t)}function za(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!C_(n)||(t[n]=za(t[n],e[n]));return t}function C_(t){return t!=="__proto__"}/**
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
 */function b_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const w_=()=>b_().__FIREBASE_DEFAULTS__,I_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},S_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_r(t[1]);return e&&JSON.parse(e)},qa=()=>{try{return w_()||I_()||S_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},T_=t=>{var e,n;return(n=(e=qa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},R_=t=>{const e=T_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Ka=()=>{var t;return(t=qa())===null||t===void 0?void 0:t.config};/**
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
 */class lo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function x_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[zs(JSON.stringify(n)),zs(JSON.stringify(o)),l].join(".")}/**
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
 */function N_(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ga(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(N_())}function A_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ya(){return $a.NODE_ADMIN===!0}function P_(){try{return typeof indexedDB=="object"}catch{return!1}}function O_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const k_="FirebaseError";class vs extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=k_,Object.setPrototypeOf(this,vs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qa.prototype.create)}}class Qa{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?D_(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new vs(i,l,s)}}function D_(t,e){return t.replace(M_,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const M_=/\{\$([^}]+)}/g;/**
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
 */function cs(t){return JSON.parse(t)}function Ce(t){return JSON.stringify(t)}/**
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
 */const Xa=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=cs(_r(r[0])||""),n=cs(_r(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},L_=function(t){const e=Xa(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},F_=function(t){const e=Xa(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function yt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Sn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Fl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qs(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function gr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Bl(r)&&Bl(o)){if(!gr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Bl(t){return t!==null&&typeof t=="object"}/**
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
 */function B_(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class U_{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],a,u;for(let h=0;h<80;h++){h<40?h<20?(a=l^r&(o^l),u=1518500249):(a=r^o^l,u=1859775393):h<60?(a=r&o|l&(r|o),u=2400959708):(a=r^o^l,u=3395469782);const f=(i<<5|i>>>27)+a+c+u+s[h]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Ja(t,e){return`${t} failed: ${e} argument `}/**
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
 */const W_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,w(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ci=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function bi(t){return t&&t._delegate?t._delegate:t}class as{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Bt="[DEFAULT]";/**
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
 */class H_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new lo;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(j_(e))try{this.getOrInitializeService({instanceIdentifier:Bt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Bt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bt){return this.instances.has(e)}getOptions(e=Bt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:$_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Bt){return this.component?this.component.multipleInstances?e:Bt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $_(t){return t===Bt?void 0:t}function j_(t){return t.instantiationMode==="EAGER"}/**
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
 */class V_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new H_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const z_={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},q_=le.INFO,K_={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},G_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=K_[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Za{constructor(e){this.name=e,this._logLevel=q_,this._logHandler=G_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?z_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const Y_=(t,e)=>e.some(n=>t instanceof n);let Ul,Wl;function Q_(){return Ul||(Ul=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function X_(){return Wl||(Wl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const eu=new WeakMap,mr=new WeakMap,tu=new WeakMap,Hi=new WeakMap,co=new WeakMap;function J_(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Nt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&eu.set(n,t)}).catch(()=>{}),co.set(e,t),e}function Z_(t){if(mr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});mr.set(t,e)}let yr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return mr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||tu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function eg(t){yr=t(yr)}function tg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call($i(this),e,...n);return tu.set(s,e.sort?e.sort():[e]),Nt(s)}:X_().includes(t)?function(...e){return t.apply($i(this),e),Nt(eu.get(this))}:function(...e){return Nt(t.apply($i(this),e))}}function ng(t){return typeof t=="function"?tg(t):(t instanceof IDBTransaction&&Z_(t),Y_(t,Q_())?new Proxy(t,yr):t)}function Nt(t){if(t instanceof IDBRequest)return J_(t);if(Hi.has(t))return Hi.get(t);const e=ng(t);return e!==t&&(Hi.set(t,e),co.set(e,t)),e}const $i=t=>co.get(t);function sg(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Nt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Nt(o.result),c.oldVersion,c.newVersion,Nt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",a=>i(a.oldVersion,a.newVersion,a))}).catch(()=>{}),l}const ig=["get","getKey","getAll","getAllKeys","count"],rg=["put","add","delete","clear"],ji=new Map;function Hl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ji.get(e))return ji.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=rg.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||ig.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let a=c.store;return s&&(a=a.index(l.shift())),(await Promise.all([a[n](...l),i&&c.done]))[0]};return ji.set(e,r),r}eg(t=>({...t,get:(e,n,s)=>Hl(e,n)||t.get(e,n,s),has:(e,n)=>!!Hl(e,n)||t.has(e,n)}));/**
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
 */class og{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lg(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function lg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vr="@firebase/app",$l="0.9.19";/**
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
 */const Kt=new Za("@firebase/app"),cg="@firebase/app-compat",ag="@firebase/analytics-compat",ug="@firebase/analytics",hg="@firebase/app-check-compat",fg="@firebase/app-check",dg="@firebase/auth",pg="@firebase/auth-compat",_g="@firebase/database",gg="@firebase/database-compat",mg="@firebase/functions",yg="@firebase/functions-compat",vg="@firebase/installations",Eg="@firebase/installations-compat",Cg="@firebase/messaging",bg="@firebase/messaging-compat",wg="@firebase/performance",Ig="@firebase/performance-compat",Sg="@firebase/remote-config",Tg="@firebase/remote-config-compat",Rg="@firebase/storage",xg="@firebase/storage-compat",Ng="@firebase/firestore",Ag="@firebase/firestore-compat",Pg="firebase",Og="10.4.0";/**
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
 */const Er="[DEFAULT]",kg={[vr]:"fire-core",[cg]:"fire-core-compat",[ug]:"fire-analytics",[ag]:"fire-analytics-compat",[fg]:"fire-app-check",[hg]:"fire-app-check-compat",[dg]:"fire-auth",[pg]:"fire-auth-compat",[_g]:"fire-rtdb",[gg]:"fire-rtdb-compat",[mg]:"fire-fn",[yg]:"fire-fn-compat",[vg]:"fire-iid",[Eg]:"fire-iid-compat",[Cg]:"fire-fcm",[bg]:"fire-fcm-compat",[wg]:"fire-perf",[Ig]:"fire-perf-compat",[Sg]:"fire-rc",[Tg]:"fire-rc-compat",[Rg]:"fire-gcs",[xg]:"fire-gcs-compat",[Ng]:"fire-fst",[Ag]:"fire-fst-compat","fire-js":"fire-js",[Pg]:"fire-js-all"};/**
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
 */const Ks=new Map,Cr=new Map;function Dg(t,e){try{t.container.addComponent(e)}catch(n){Kt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gs(t){const e=t.name;if(Cr.has(e))return Kt.debug(`There were multiple attempts to register component ${e}.`),!1;Cr.set(e,t);for(const n of Ks.values())Dg(n,t);return!0}function Mg(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Lg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},At=new Qa("app","Firebase",Lg);/**
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
 */class Fg{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new as("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw At.create("app-deleted",{appName:this._name})}}/**
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
 */const Bg=Og;function nu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Er,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw At.create("bad-app-name",{appName:String(i)});if(n||(n=Ka()),!n)throw At.create("no-options");const r=Ks.get(i);if(r){if(gr(n,r.options)&&gr(s,r.config))return r;throw At.create("duplicate-app",{appName:i})}const o=new V_(i);for(const c of Cr.values())o.addComponent(c);const l=new Fg(n,s,o);return Ks.set(i,l),l}function Ug(t=Er){const e=Ks.get(t);if(!e&&t===Er&&Ka())return nu();if(!e)throw At.create("no-app",{appName:t});return e}function _n(t,e,n){var s;let i=(s=kg[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kt.warn(l.join(" "));return}Gs(new as(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Wg="firebase-heartbeat-database",Hg=1,us="firebase-heartbeat-store";let Vi=null;function su(){return Vi||(Vi=sg(Wg,Hg,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(us)}}}).catch(t=>{throw At.create("idb-open",{originalErrorMessage:t.message})})),Vi}async function $g(t){try{return await(await su()).transaction(us).objectStore(us).get(iu(t))}catch(e){if(e instanceof vs)Kt.warn(e.message);else{const n=At.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kt.warn(n.message)}}}async function jl(t,e){try{const s=(await su()).transaction(us,"readwrite");await s.objectStore(us).put(e,iu(t)),await s.done}catch(n){if(n instanceof vs)Kt.warn(n.message);else{const s=At.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Kt.warn(s.message)}}}function iu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const jg=1024,Vg=30*24*60*60*1e3;class zg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Kg(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Vl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Vg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Vl(),{heartbeatsToSend:n,unsentEntries:s}=qg(this._heartbeatsCache.heartbeats),i=zs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Vl(){return new Date().toISOString().substring(0,10)}function qg(t,e=jg){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),zl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),zl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Kg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return P_()?O_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await $g(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function zl(t){return zs(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Gg(t){Gs(new as("platform-logger",e=>new og(e),"PRIVATE")),Gs(new as("heartbeat",e=>new zg(e),"PRIVATE")),_n(vr,$l,t),_n(vr,$l,"esm2017"),_n("fire-js","")}Gg("");var Yg="firebase",Qg="10.4.0";/**
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
 */_n(Yg,Qg,"app");const ql="@firebase/database",Kl="1.0.1";/**
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
 */let ru="";function Xg(t){ru=t}/**
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
 */class Jg{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ce(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:cs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Zg{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return yt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const ou=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Jg(e)}}catch{}return new Zg},$t=ou("localStorage"),br=ou("sessionStorage");/**
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
 */const gn=new Za("@firebase/database"),em=function(){let t=1;return function(){return t++}}(),lu=function(t){const e=W_(t),n=new U_;n.update(e);const s=n.digest();return oo.encodeByteArray(s)},Es=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Es.apply(null,s):typeof s=="object"?e+=Ce(s):e+=s,e+=" "}return e};let zt=null,Gl=!0;const tm=function(t,e){w(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(gn.logLevel=le.VERBOSE,zt=gn.log.bind(gn),e&&br.set("logging_enabled",!0)):typeof t=="function"?zt=t:(zt=null,br.remove("logging_enabled"))},Re=function(...t){if(Gl===!0&&(Gl=!1,zt===null&&br.get("logging_enabled")===!0&&tm(!0)),zt){const e=Es.apply(null,t);zt(e)}},Cs=function(t){return function(...e){Re(t,...e)}},wr=function(...t){const e="FIREBASE INTERNAL ERROR: "+Es(...t);gn.error(e)},gt=function(...t){const e=`FIREBASE FATAL ERROR: ${Es(...t)}`;throw gn.error(e),new Error(e)},He=function(...t){const e="FIREBASE WARNING: "+Es(...t);gn.warn(e)},nm=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&He("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},cu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},sm=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Tn="[MIN_NAME]",Gt="[MAX_NAME]",kn=function(t,e){if(t===e)return 0;if(t===Tn||e===Gt)return-1;if(e===Tn||t===Gt)return 1;{const n=Yl(t),s=Yl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},im=function(t,e){return t===e?0:t<e?-1:1},Bn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ce(e))},ao=function(t){if(typeof t!="object"||t===null)return Ce(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ce(e[s]),n+=":",n+=ao(t[e[s]]);return n+="}",n},au=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Fe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const uu=function(t){w(!cu(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const a=[];for(c=n;c;c-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(i?1:0),a.reverse();const u=a.join("");let h="";for(c=0;c<64;c+=8){let f=parseInt(u.substr(c,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},rm=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},om=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function lm(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const cm=new RegExp("^-?(0*)\\d{1,10}$"),am=-2147483648,um=2147483647,Yl=function(t){if(cm.test(t)){const e=Number(t);if(e>=am&&e<=um)return e}return null},bs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw He("Exception was thrown by user callback.",n),e},Math.floor(0))}},hm=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Qn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class fm{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){He(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class dm{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Re("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',He(e)}}class mn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}mn.OWNER="owner";/**
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
 */const uo="5",hu="v",fu="s",du="r",pu="f",_u=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,gu="ls",mu="p",Ir="ac",yu="websocket",vu="long_polling";/**
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
 */class Eu{constructor(e,n,s,i,r=!1,o="",l=!1,c=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=$t.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&$t.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function pm(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Cu(t,e,n){w(typeof e=="string","typeof type must == string"),w(typeof n=="object","typeof params must == object");let s;if(e===yu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===vu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);pm(t)&&(n.ns=t.namespace);const i=[];return Fe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class _m{constructor(){this.counters_={}}incrementCounter(e,n=1){yt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return E_(this.counters_)}}/**
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
 */const zi={},qi={};function ho(t){const e=t.toString();return zi[e]||(zi[e]=new _m),zi[e]}function gm(t,e){const n=t.toString();return qi[n]||(qi[n]=e()),qi[n]}/**
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
 */class mm{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&bs(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Ql="start",ym="close",vm="pLPCommand",Em="pRTLPCB",bu="id",wu="pw",Iu="ser",Cm="cb",bm="seg",wm="ts",Im="d",Sm="dframe",Su=1870,Tu=30,Tm=Su-Tu,Rm=25e3,xm=3e4;class an{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Cs(e),this.stats_=ho(n),this.urlFn=c=>(this.appCheckToken&&(c[Ir]=this.appCheckToken),Cu(n,vu,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new mm(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(xm)),sm(()=>{if(this.isClosed_)return;this.scriptTagHolder=new fo((...r)=>{const[o,l,c,a,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ql)this.id=l,this.password=c;else if(o===ym)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Ql]="t",s[Iu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Cm]=this.scriptTagHolder.uniqueCallbackIdentifier),s[hu]=uo,this.transportSessionId&&(s[fu]=this.transportSessionId),this.lastSessionId&&(s[gu]=this.lastSessionId),this.applicationId&&(s[mu]=this.applicationId),this.appCheckToken&&(s[Ir]=this.appCheckToken),typeof location<"u"&&location.hostname&&_u.test(location.hostname)&&(s[du]=pu);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){an.forceAllow_=!0}static forceDisallow(){an.forceDisallow_=!0}static isAvailable(){return an.forceAllow_?!0:!an.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!rm()&&!om()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Va(n),i=au(s,Tm);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Sm]="t",s[bu]=e,s[wu]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ce(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class fo{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=em(),window[vm+this.uniqueCallbackIdentifier]=e,window[Em+this.uniqueCallbackIdentifier]=n,this.myIFrame=fo.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Re("frame writing exception"),l.stack&&Re(l.stack),Re(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Re("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[bu]=this.myID,e[wu]=this.myPW,e[Iu]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Tu+s.length<=Su;){const o=this.pendingSegs.shift();s=s+"&"+bm+i+"="+o.seg+"&"+wm+i+"="+o.ts+"&"+Im+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Rm)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Re("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Nm=16384,Am=45e3;let Ys=null;typeof MozWebSocket<"u"?Ys=MozWebSocket:typeof WebSocket<"u"&&(Ys=WebSocket);class Ge{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Cs(this.connId),this.stats_=ho(n),this.connURL=Ge.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[hu]=uo,typeof location<"u"&&location.hostname&&_u.test(location.hostname)&&(o[du]=pu),n&&(o[fu]=n),s&&(o[gu]=s),i&&(o[Ir]=i),r&&(o[mu]=r),Cu(e,yu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,$t.set("previous_websocket_failure",!0);try{let s;Ya(),this.mySock=new Ys(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ge.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ys!==null&&!Ge.forceDisallow_}static previouslyFailed(){return $t.isInMemoryStorage||$t.get("previous_websocket_failure")===!0}markConnectionHealthy(){$t.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=cs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(w(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=au(n,Nm);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Am))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ge.responsesRequiredToBeHealthy=2;Ge.healthyTimeout=3e4;/**
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
 */class hs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[an,Ge]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ge&&Ge.isAvailable();let s=n&&!Ge.previouslyFailed();if(e.webSocketOnly&&(n||He("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ge];else{const i=this.transports_=[];for(const r of hs.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);hs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}hs.globalTransportInitialized_=!1;/**
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
 */const Pm=6e4,Om=5e3,km=10*1024,Dm=100*1024,Ki="t",Xl="d",Mm="s",Jl="r",Lm="e",Zl="o",ec="a",tc="n",nc="p",Fm="h";class Bm{constructor(e,n,s,i,r,o,l,c,a,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=a,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Cs("c:"+this.id+":"),this.transportManager_=new hs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Qn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Dm?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>km?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ki in e){const n=e[Ki];n===ec?this.upgradeIfSecondaryHealthy_():n===Jl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Zl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Bn("t",e),s=Bn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:nc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ec,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:tc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Bn("t",e),s=Bn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Bn(Ki,e);if(Xl in e){const s=e[Xl];if(n===Fm){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===tc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Mm?this.onConnectionShutdown_(s):n===Jl?this.onReset_(s):n===Lm?wr("Server Error: "+s):n===Zl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):wr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),uo!==s&&He("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Qn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Pm))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Qn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Om))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:nc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&($t.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Ru{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class xu{constructor(e){this.allowedEvents_=e,this.listeners_={},w(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){w(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Qs extends xu{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ga()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Qs}getInitialEvent(e){return w(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const sc=32,ic=768;class re{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function J(){return new re("")}function V(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function kt(t){return t.pieces_.length-t.pieceNum_}function ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new re(t.pieces_,e)}function Nu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Um(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Au(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Pu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new re(e,0)}function ge(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof re)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new re(n,0)}function z(t){return t.pieceNum_>=t.pieces_.length}function De(t,e){const n=V(t),s=V(e);if(n===null)return e;if(n===s)return De(ce(t),ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function po(t,e){if(kt(t)!==kt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Qe(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(kt(t)>kt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Wm{constructor(e,n){this.errorPrefix_=n,this.parts_=Au(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ci(this.parts_[s]);Ou(this)}}function Hm(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ci(e),Ou(t)}function $m(t){const e=t.parts_.pop();t.byteLength_-=Ci(e),t.parts_.length>0&&(t.byteLength_-=1)}function Ou(t){if(t.byteLength_>ic)throw new Error(t.errorPrefix_+"has a key path longer than "+ic+" bytes ("+t.byteLength_+").");if(t.parts_.length>sc)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+sc+") or object contains a cycle "+Ut(t))}function Ut(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class _o extends xu{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new _o}getInitialEvent(e){return w(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Un=1e3,jm=60*5*1e3,rc=30*1e3,Vm=1.3,zm=3e4,qm="server_kill",oc=3;class pt extends Ru{constructor(e,n,s,i,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=pt.nextPersistentConnectionId_++,this.log_=Cs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Un,this.maxReconnectDelay_=jm,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Ya())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");_o.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Qs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ce(r)),w(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new lo,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),w(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,a=l.s;pt.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),a!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(a,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&yt(e,"w")){const s=Sn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();He(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||F_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=rc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=L_(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ce(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):wr("Unrecognized action received from server: "+Ce(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){w(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Un,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Un,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>zm&&(this.reconnectDelay_=Un),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Vm)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+pt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},a=function(h){w(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:c,sendRequest:a};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Re("getToken() completed but was canceled"):(Re("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new Bm(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{He(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(qm)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&He(h),c())}}}interrupt(e){Re("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Re("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Fl(this.interruptReasons_)&&(this.reconnectDelay_=Un,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>ao(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new re(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Re("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=oc&&(this.reconnectDelay_=rc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Re("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=oc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ru.replace(/\./g,"-")]=1,Ga()?e["framework.cordova"]=1:A_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Qs.getInstance().currentlyOnline();return Fl(this.interruptReasons_)&&e}}pt.nextPersistentConnectionId_=0;pt.nextConnectionId_=0;/**
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
 */class wi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new $(Tn,e),i=new $(Tn,n);return this.compare(s,i)!==0}minPost(){return $.MIN}}/**
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
 */let ks;class ku extends wi{static get __EMPTY_NODE(){return ks}static set __EMPTY_NODE(e){ks=e}compare(e,n){return kn(e.name,n.name)}isDefinedOn(e){throw On("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return $.MIN}maxPost(){return new $(Gt,ks)}makePost(e,n){return w(typeof e=="string","KeyIndex indexValue must always be a string."),new $(e,ks)}toString(){return".key"}}const yn=new ku;/**
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
 */class Ds{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ve{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ve.RED,this.left=i??Me.EMPTY_NODE,this.right=r??Me.EMPTY_NODE}copy(e,n,s,i,r){return new ve(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Me.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Me.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ve.RED=!0;ve.BLACK=!1;class Km{copy(e,n,s,i,r){return this}insert(e,n,s){return new ve(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Me{constructor(e,n=Me.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Me(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ve.BLACK,null,null))}remove(e){return new Me(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ve.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ds(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ds(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ds(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ds(this.root_,null,this.comparator_,!0,e)}}Me.EMPTY_NODE=new Km;/**
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
 */function Gm(t,e){return kn(t.name,e.name)}function go(t,e){return kn(t,e)}/**
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
 */let Sr;function Ym(t){Sr=t}const Du=function(t){return typeof t=="number"?"number:"+uu(t):"string:"+t},Mu=function(t){if(t.isLeafNode()){const e=t.val();w(typeof e=="string"||typeof e=="number"||typeof e=="object"&&yt(e,".sv"),"Priority must be a string or number.")}else w(t===Sr||t.isEmpty(),"priority of unexpected type.");w(t===Sr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let lc;class ye{constructor(e,n=ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,w(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Mu(this.priorityNode_)}static set __childrenNodeConstructor(e){lc=e}static get __childrenNodeConstructor(){return lc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ye(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return z(e)?this:V(e)===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=V(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(w(s!==".priority"||kt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Du(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=uu(this.value_):e+=this.value_,this.lazyHash_=lu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ye.__childrenNodeConstructor?-1:(w(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ye.VALUE_TYPE_ORDER.indexOf(n),r=ye.VALUE_TYPE_ORDER.indexOf(s);return w(i>=0,"Unknown leaf type: "+n),w(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Lu,Fu;function Qm(t){Lu=t}function Xm(t){Fu=t}class Jm extends wi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?kn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return $.MIN}maxPost(){return new $(Gt,new ye("[PRIORITY-POST]",Fu))}makePost(e,n){const s=Lu(e);return new $(n,new ye("[PRIORITY-POST]",s))}toString(){return".priority"}}const fe=new Jm;/**
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
 */const Zm=Math.log(2);class ey{constructor(e){const n=r=>parseInt(Math.log(r)/Zm,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Xs=function(t,e,n,s){t.sort(e);const i=function(c,a){const u=a-c;let h,f;if(u===0)return null;if(u===1)return h=t[c],f=n?n(h):h,new ve(f,h.node,ve.BLACK,null,null);{const _=parseInt(u/2,10)+c,y=i(c,_),S=i(_+1,a);return h=t[_],f=n?n(h):h,new ve(f,h.node,ve.BLACK,y,S)}},r=function(c){let a=null,u=null,h=t.length;const f=function(y,S){const A=h-y,P=h;h-=y;const k=i(A+1,P),j=t[A],M=n?n(j):j;_(new ve(M,j.node,S,null,k))},_=function(y){a?(a.left=y,a=y):(u=y,a=y)};for(let y=0;y<c.count;++y){const S=c.nextBitIsOne(),A=Math.pow(2,c.count-(y+1));S?f(A,ve.BLACK):(f(A,ve.BLACK),f(A,ve.RED))}return u},o=new ey(t.length),l=r(o);return new Me(s||e,l)};/**
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
 */let Gi;const on={};class dt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return w(on&&fe,"ChildrenNode.ts has not been loaded"),Gi=Gi||new dt({".priority":on},{".priority":fe}),Gi}get(e){const n=Sn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Me?n:null}hasIndex(e){return yt(this.indexSet_,e.toString())}addIndex(e,n){w(e!==yn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator($.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Xs(s,e.getCompare()):l=on;const c=e.toString(),a=Object.assign({},this.indexSet_);a[c]=e;const u=Object.assign({},this.indexes_);return u[c]=l,new dt(u,a)}addToIndexes(e,n){const s=qs(this.indexes_,(i,r)=>{const o=Sn(this.indexSet_,r);if(w(o,"Missing index implementation for "+r),i===on)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator($.Wrap);let a=c.getNext();for(;a;)a.name!==e.name&&l.push(a),a=c.getNext();return l.push(e),Xs(l,o.getCompare())}else return on;else{const l=n.get(e.name);let c=i;return l&&(c=c.remove(new $(e.name,l))),c.insert(e,e.node)}});return new dt(s,this.indexSet_)}removeFromIndexes(e,n){const s=qs(this.indexes_,i=>{if(i===on)return i;{const r=n.get(e.name);return r?i.remove(new $(e.name,r)):i}});return new dt(s,this.indexSet_)}}/**
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
 */let Wn;class B{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Mu(this.priorityNode_),this.children_.isEmpty()&&w(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Wn||(Wn=new B(new Me(go),null,dt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Wn}updatePriority(e){return this.children_.isEmpty()?this:new B(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Wn:n}}getChild(e){const n=V(e);return n===null?this:this.getImmediateChild(n).getChild(ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(w(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new $(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Wn:this.priorityNode_;return new B(i,o,r)}}updateChild(e,n){const s=V(e);if(s===null)return n;{w(V(e)!==".priority"||kt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ce(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(fe,(o,l)=>{n[o]=l.val(e),s++,r&&B.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Du(this.getPriority().val())+":"),this.forEachChild(fe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":lu(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new $(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new $(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new $(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,$.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,$.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ws?-1:0}withIndex(e){if(e===yn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new B(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===yn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(fe),i=n.getIterator(fe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===yn?null:this.indexMap_.get(e.toString())}}B.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ty extends B{constructor(){super(new Me(go),B.EMPTY_NODE,dt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return B.EMPTY_NODE}isEmpty(){return!1}}const ws=new ty;Object.defineProperties($,{MIN:{value:new $(Tn,B.EMPTY_NODE)},MAX:{value:new $(Gt,ws)}});ku.__EMPTY_NODE=B.EMPTY_NODE;ye.__childrenNodeConstructor=B;Ym(ws);Xm(ws);/**
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
 */const ny=!0;function xe(t,e=null){if(t===null)return B.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),w(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ye(n,xe(e))}if(!(t instanceof Array)&&ny){const n=[];let s=!1;if(Fe(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=xe(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new $(o,c)))}}),n.length===0)return B.EMPTY_NODE;const r=Xs(n,Gm,o=>o.name,go);if(s){const o=Xs(n,fe.getCompare());return new B(r,xe(e),new dt({".priority":o},{".priority":fe}))}else return new B(r,xe(e),dt.Default)}else{let n=B.EMPTY_NODE;return Fe(t,(s,i)=>{if(yt(t,s)&&s.substring(0,1)!=="."){const r=xe(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(xe(e))}}Qm(xe);/**
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
 */class sy extends wi{constructor(e){super(),this.indexPath_=e,w(!z(e)&&V(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?kn(e.name,n.name):r}makePost(e,n){const s=xe(e),i=B.EMPTY_NODE.updateChild(this.indexPath_,s);return new $(n,i)}maxPost(){const e=B.EMPTY_NODE.updateChild(this.indexPath_,ws);return new $(Gt,e)}toString(){return Au(this.indexPath_,0).join("/")}}/**
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
 */class iy extends wi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?kn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return $.MIN}maxPost(){return $.MAX}makePost(e,n){const s=xe(e);return new $(n,s)}toString(){return".value"}}const ry=new iy;/**
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
 */function Bu(t){return{type:"value",snapshotNode:t}}function Rn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function fs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ds(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function oy(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class mo{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){w(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(fs(n,l)):w(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Rn(n,s)):o.trackChildChange(ds(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(fe,(i,r)=>{n.hasChild(i)||s.trackChildChange(fs(i,r))}),n.isLeafNode()||n.forEachChild(fe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ds(i,r,o))}else s.trackChildChange(Rn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?B.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ps{constructor(e){this.indexedFilter_=new mo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ps.getStartPost_(e),this.endPost_=ps.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new $(n,s))||(s=B.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=B.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(B.EMPTY_NODE);const r=this;return n.forEachChild(fe,(o,l)=>{r.matches(new $(o,l))||(i=i.updateImmediateChild(o,B.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class ly{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new ps(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new $(n,s))||(s=B.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=B.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=B.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(B.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,B.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,_)=>h(_,f)}else o=this.index_.getCompare();const l=e;w(l.numChildren()===this.limit_,"");const c=new $(n,s),a=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(l.hasChild(n)){const h=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,a,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,c);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(ds(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(fs(n,h));const S=l.updateImmediateChild(n,B.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Rn(f.name,f.node)),S.updateImmediateChild(f.name,f.node)):S}}else return s.isEmpty()?e:u&&o(a,c)>=0?(r!=null&&(r.trackChildChange(fs(a.name,a.node)),r.trackChildChange(Rn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(a.name,B.EMPTY_NODE)):e}}/**
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
 */class yo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=fe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return w(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return w(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Tn}hasEnd(){return this.endSet_}getIndexEndValue(){return w(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return w(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Gt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return w(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===fe}copy(){const e=new yo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function cy(t){return t.loadsAllData()?new mo(t.getIndex()):t.hasLimit()?new ly(t):new ps(t)}function cc(t){const e={};if(t.isDefault())return e;let n;if(t.index_===fe?n="$priority":t.index_===ry?n="$value":t.index_===yn?n="$key":(w(t.index_ instanceof sy,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ce(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ce(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ce(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ce(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ce(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ac(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==fe&&(e.i=t.index_.toString()),e}/**
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
 */class Js extends Ru{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Cs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(w(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Js.getListenId_(e,s),l={};this.listens_[o]=l;const c=cc(e._queryParams);this.restRequest_(r+".json",c,(a,u)=>{let h=u;if(a===404&&(h=null,a=null),a===null&&this.onDataUpdate_(r,h,!1,s),Sn(this.listens_,o)===l){let f;a?a===401?f="permission_denied":f="rest_error:"+a:f="ok",i(f,null)}})}unlisten(e,n){const s=Js.getListenId_(e,n);delete this.listens_[s]}get(e){const n=cc(e._queryParams),s=e._path.toString(),i=new lo;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+B_(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=cs(l.responseText)}catch{He("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&He("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class ay{constructor(){this.rootNode_=B.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Zs(){return{value:null,children:new Map}}function Uu(t,e,n){if(z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=V(e);t.children.has(s)||t.children.set(s,Zs());const i=t.children.get(s);e=ce(e),Uu(i,e,n)}}function Tr(t,e,n){t.value!==null?n(e,t.value):uy(t,(s,i)=>{const r=new re(e.toString()+"/"+s);Tr(i,r,n)})}function uy(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class hy{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Fe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const uc=10*1e3,fy=30*1e3,dy=5*60*1e3;class py{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new hy(e);const s=uc+(fy-uc)*Math.random();Qn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Fe(e,(i,r)=>{r>0&&yt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Qn(this.reportStats_.bind(this),Math.floor(Math.random()*2*dy))}}/**
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
 */var Xe;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Xe||(Xe={}));function Wu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function vo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Eo(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class ei{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Xe.ACK_USER_WRITE,this.source=Wu()}operationForChild(e){if(z(this.path)){if(this.affectedTree.value!=null)return w(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new re(e));return new ei(J(),n,this.revert)}}else return w(V(this.path)===e,"operationForChild called for unrelated child."),new ei(ce(this.path),this.affectedTree,this.revert)}}/**
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
 */class _s{constructor(e,n){this.source=e,this.path=n,this.type=Xe.LISTEN_COMPLETE}operationForChild(e){return z(this.path)?new _s(this.source,J()):new _s(this.source,ce(this.path))}}/**
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
 */class Yt{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Xe.OVERWRITE}operationForChild(e){return z(this.path)?new Yt(this.source,J(),this.snap.getImmediateChild(e)):new Yt(this.source,ce(this.path),this.snap)}}/**
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
 */class gs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Xe.MERGE}operationForChild(e){if(z(this.path)){const n=this.children.subtree(new re(e));return n.isEmpty()?null:n.value?new Yt(this.source,J(),n.value):new gs(this.source,J(),n)}else return w(V(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new gs(this.source,ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Qt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(z(e))return this.isFullyInitialized()&&!this.filtered_;const n=V(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class _y{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function gy(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(oy(o.childName,o.snapshotNode))}),Hn(t,i,"child_removed",e,s,n),Hn(t,i,"child_added",e,s,n),Hn(t,i,"child_moved",r,s,n),Hn(t,i,"child_changed",e,s,n),Hn(t,i,"value",e,s,n),i}function Hn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,c)=>yy(t,l,c)),o.forEach(l=>{const c=my(t,l,r);i.forEach(a=>{a.respondsTo(l.type)&&e.push(a.createEvent(c,t.query_))})})}function my(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function yy(t,e,n){if(e.childName==null||n.childName==null)throw On("Should only compare child_ events.");const s=new $(e.childName,e.snapshotNode),i=new $(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Ii(t,e){return{eventCache:t,serverCache:e}}function Xn(t,e,n,s){return Ii(new Qt(e,n,s),t.serverCache)}function Hu(t,e,n,s){return Ii(t.eventCache,new Qt(e,n,s))}function Rr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Xt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Yi;const vy=()=>(Yi||(Yi=new Me(im)),Yi);class ae{constructor(e,n=vy()){this.value=e,this.children=n}static fromObject(e){let n=new ae(null);return Fe(e,(s,i)=>{n=n.set(new re(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:J(),value:this.value};if(z(e))return null;{const s=V(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ce(e),n);return r!=null?{path:ge(new re(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(z(e))return this;{const n=V(e),s=this.children.get(n);return s!==null?s.subtree(ce(e)):new ae(null)}}set(e,n){if(z(e))return new ae(n,this.children);{const s=V(e),r=(this.children.get(s)||new ae(null)).set(ce(e),n),o=this.children.insert(s,r);return new ae(this.value,o)}}remove(e){if(z(e))return this.children.isEmpty()?new ae(null):new ae(null,this.children);{const n=V(e),s=this.children.get(n);if(s){const i=s.remove(ce(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ae(null):new ae(this.value,r)}else return this}}get(e){if(z(e))return this.value;{const n=V(e),s=this.children.get(n);return s?s.get(ce(e)):null}}setTree(e,n){if(z(e))return n;{const s=V(e),r=(this.children.get(s)||new ae(null)).setTree(ce(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ae(this.value,o)}}fold(e){return this.fold_(J(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ge(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,J(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(z(e))return null;{const r=V(e),o=this.children.get(r);return o?o.findOnPath_(ce(e),ge(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,J(),n)}foreachOnPath_(e,n,s){if(z(e))return this;{this.value&&s(n,this.value);const i=V(e),r=this.children.get(i);return r?r.foreachOnPath_(ce(e),ge(n,i),s):new ae(null)}}foreach(e){this.foreach_(J(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ge(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class et{constructor(e){this.writeTree_=e}static empty(){return new et(new ae(null))}}function Jn(t,e,n){if(z(e))return new et(new ae(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=De(i,e);return r=r.updateChild(o,n),new et(t.writeTree_.set(i,r))}else{const i=new ae(n),r=t.writeTree_.setTree(e,i);return new et(r)}}}function hc(t,e,n){let s=t;return Fe(n,(i,r)=>{s=Jn(s,ge(e,i),r)}),s}function fc(t,e){if(z(e))return et.empty();{const n=t.writeTree_.setTree(e,new ae(null));return new et(n)}}function xr(t,e){return Jt(t,e)!=null}function Jt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(De(n.path,e)):null}function dc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(fe,(s,i)=>{e.push(new $(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new $(s,i.value))}),e}function Pt(t,e){if(z(e))return t;{const n=Jt(t,e);return n!=null?new et(new ae(n)):new et(t.writeTree_.subtree(e))}}function Nr(t){return t.writeTree_.isEmpty()}function xn(t,e){return $u(J(),t.writeTree_,e)}function $u(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(w(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=$u(ge(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ge(t,".priority"),s)),n}}/**
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
 */function Co(t,e){return qu(e,t)}function Ey(t,e,n,s,i){w(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Jn(t.visibleWrites,e,n)),t.lastWriteId=s}function Cy(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function by(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);w(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&wy(l,s.path)?i=!1:Qe(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Iy(t),!0;if(s.snap)t.visibleWrites=fc(t.visibleWrites,s.path);else{const l=s.children;Fe(l,c=>{t.visibleWrites=fc(t.visibleWrites,ge(s.path,c))})}return!0}else return!1}function wy(t,e){if(t.snap)return Qe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Qe(ge(t.path,n),e))return!0;return!1}function Iy(t){t.visibleWrites=ju(t.allWrites,Sy,J()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Sy(t){return t.visible}function ju(t,e,n){let s=et.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Qe(n,o)?(l=De(n,o),s=Jn(s,l,r.snap)):Qe(o,n)&&(l=De(o,n),s=Jn(s,J(),r.snap.getChild(l)));else if(r.children){if(Qe(n,o))l=De(n,o),s=hc(s,l,r.children);else if(Qe(o,n))if(l=De(o,n),z(l))s=hc(s,J(),r.children);else{const c=Sn(r.children,V(l));if(c){const a=c.getChild(ce(l));s=Jn(s,J(),a)}}}else throw On("WriteRecord should have .snap or .children")}}return s}function Vu(t,e,n,s,i){if(!s&&!i){const r=Jt(t.visibleWrites,e);if(r!=null)return r;{const o=Pt(t.visibleWrites,e);if(Nr(o))return n;if(n==null&&!xr(o,J()))return null;{const l=n||B.EMPTY_NODE;return xn(o,l)}}}else{const r=Pt(t.visibleWrites,e);if(!i&&Nr(r))return n;if(!i&&n==null&&!xr(r,J()))return null;{const o=function(a){return(a.visible||i)&&(!s||!~s.indexOf(a.writeId))&&(Qe(a.path,e)||Qe(e,a.path))},l=ju(t.allWrites,o,e),c=n||B.EMPTY_NODE;return xn(l,c)}}}function Ty(t,e,n){let s=B.EMPTY_NODE;const i=Jt(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(fe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Pt(t.visibleWrites,e);return n.forEachChild(fe,(o,l)=>{const c=xn(Pt(r,new re(o)),l);s=s.updateImmediateChild(o,c)}),dc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Pt(t.visibleWrites,e);return dc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Ry(t,e,n,s,i){w(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ge(e,n);if(xr(t.visibleWrites,r))return null;{const o=Pt(t.visibleWrites,r);return Nr(o)?i.getChild(n):xn(o,i.getChild(n))}}function xy(t,e,n,s){const i=ge(e,n),r=Jt(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Pt(t.visibleWrites,i);return xn(o,s.getNode().getImmediateChild(n))}else return null}function Ny(t,e){return Jt(t.visibleWrites,e)}function Ay(t,e,n,s,i,r,o){let l;const c=Pt(t.visibleWrites,e),a=Jt(c,J());if(a!=null)l=a;else if(n!=null)l=xn(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=f.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=f.getNext();return u}else return[]}function Py(){return{visibleWrites:et.empty(),allWrites:[],lastWriteId:-1}}function ti(t,e,n,s){return Vu(t.writeTree,t.treePath,e,n,s)}function bo(t,e){return Ty(t.writeTree,t.treePath,e)}function pc(t,e,n,s){return Ry(t.writeTree,t.treePath,e,n,s)}function ni(t,e){return Ny(t.writeTree,ge(t.treePath,e))}function Oy(t,e,n,s,i,r){return Ay(t.writeTree,t.treePath,e,n,s,i,r)}function wo(t,e,n){return xy(t.writeTree,t.treePath,e,n)}function zu(t,e){return qu(ge(t.treePath,e),t.writeTree)}function qu(t,e){return{treePath:t,writeTree:e}}/**
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
 */class ky{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;w(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),w(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,ds(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,fs(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Rn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,ds(s,e.snapshotNode,i.oldSnap));else throw On("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Dy{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Ku=new Dy;class Io{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Qt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return wo(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Xt(this.viewCache_),r=Oy(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function My(t){return{filter:t}}function Ly(t,e){w(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),w(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Fy(t,e,n,s,i){const r=new ky;let o,l;if(n.type===Xe.OVERWRITE){const a=n;a.source.fromUser?o=Ar(t,e,a.path,a.snap,s,i,r):(w(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered()&&!z(a.path),o=si(t,e,a.path,a.snap,s,i,l,r))}else if(n.type===Xe.MERGE){const a=n;a.source.fromUser?o=Uy(t,e,a.path,a.children,s,i,r):(w(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered(),o=Pr(t,e,a.path,a.children,s,i,l,r))}else if(n.type===Xe.ACK_USER_WRITE){const a=n;a.revert?o=$y(t,e,a.path,s,i,r):o=Wy(t,e,a.path,a.affectedTree,s,i,r)}else if(n.type===Xe.LISTEN_COMPLETE)o=Hy(t,e,n.path,s,r);else throw On("Unknown operation type: "+n.type);const c=r.getChanges();return By(e,o,c),{viewCache:o,changes:c}}function By(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Rr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Bu(Rr(e)))}}function Gu(t,e,n,s,i,r){const o=e.eventCache;if(ni(s,n)!=null)return e;{let l,c;if(z(n))if(w(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const a=Xt(e),u=a instanceof B?a:B.EMPTY_NODE,h=bo(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const a=ti(s,Xt(e));l=t.filter.updateFullNode(e.eventCache.getNode(),a,r)}else{const a=V(n);if(a===".priority"){w(kt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=pc(s,n,u,c);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=ce(n);let h;if(o.isCompleteForChild(a)){c=e.serverCache.getNode();const f=pc(s,n,o.getNode(),c);f!=null?h=o.getNode().getImmediateChild(a).updateChild(u,f):h=o.getNode().getImmediateChild(a)}else h=wo(s,a,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),a,h,u,i,r):l=o.getNode()}}return Xn(e,l,o.isFullyInitialized()||z(n),t.filter.filtersNodes())}}function si(t,e,n,s,i,r,o,l){const c=e.serverCache;let a;const u=o?t.filter:t.filter.getIndexedFilter();if(z(n))a=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const _=c.getNode().updateChild(n,s);a=u.updateFullNode(c.getNode(),_,null)}else{const _=V(n);if(!c.isCompleteForPath(n)&&kt(n)>1)return e;const y=ce(n),A=c.getNode().getImmediateChild(_).updateChild(y,s);_===".priority"?a=u.updatePriority(c.getNode(),A):a=u.updateChild(c.getNode(),_,A,y,Ku,null)}const h=Hu(e,a,c.isFullyInitialized()||z(n),u.filtersNodes()),f=new Io(i,h,r);return Gu(t,h,n,i,f,l)}function Ar(t,e,n,s,i,r,o){const l=e.eventCache;let c,a;const u=new Io(i,e,r);if(z(n))a=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Xn(e,a,!0,t.filter.filtersNodes());else{const h=V(n);if(h===".priority")a=t.filter.updatePriority(e.eventCache.getNode(),s),c=Xn(e,a,l.isFullyInitialized(),l.isFiltered());else{const f=ce(n),_=l.getNode().getImmediateChild(h);let y;if(z(f))y=s;else{const S=u.getCompleteChild(h);S!=null?Nu(f)===".priority"&&S.getChild(Pu(f)).isEmpty()?y=S:y=S.updateChild(f,s):y=B.EMPTY_NODE}if(_.equals(y))c=e;else{const S=t.filter.updateChild(l.getNode(),h,y,f,u,o);c=Xn(e,S,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function _c(t,e){return t.eventCache.isCompleteForChild(e)}function Uy(t,e,n,s,i,r,o){let l=e;return s.foreach((c,a)=>{const u=ge(n,c);_c(e,V(u))&&(l=Ar(t,l,u,a,i,r,o))}),s.foreach((c,a)=>{const u=ge(n,c);_c(e,V(u))||(l=Ar(t,l,u,a,i,r,o))}),l}function gc(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Pr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,a;z(n)?a=s:a=new ae(null).setTree(n,s);const u=e.serverCache.getNode();return a.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),y=gc(t,_,f);c=si(t,c,new re(h),y,i,r,o,l)}}),a.children.inorderTraversal((h,f)=>{const _=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!_){const y=e.serverCache.getNode().getImmediateChild(h),S=gc(t,y,f);c=si(t,c,new re(h),S,i,r,o,l)}}),c}function Wy(t,e,n,s,i,r,o){if(ni(i,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(z(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return si(t,e,n,c.getNode().getChild(n),i,r,l,o);if(z(n)){let a=new ae(null);return c.getNode().forEachChild(yn,(u,h)=>{a=a.set(new re(u),h)}),Pr(t,e,n,a,i,r,l,o)}else return e}else{let a=new ae(null);return s.foreach((u,h)=>{const f=ge(n,u);c.isCompleteForPath(f)&&(a=a.set(u,c.getNode().getChild(f)))}),Pr(t,e,n,a,i,r,l,o)}}function Hy(t,e,n,s,i){const r=e.serverCache,o=Hu(e,r.getNode(),r.isFullyInitialized()||z(n),r.isFiltered());return Gu(t,o,n,s,Ku,i)}function $y(t,e,n,s,i,r){let o;if(ni(s,n)!=null)return e;{const l=new Io(s,e,i),c=e.eventCache.getNode();let a;if(z(n)||V(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ti(s,Xt(e));else{const h=e.serverCache.getNode();w(h instanceof B,"serverChildren would be complete if leaf node"),u=bo(s,h)}u=u,a=t.filter.updateFullNode(c,u,r)}else{const u=V(n);let h=wo(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?a=t.filter.updateChild(c,u,h,ce(n),l,r):e.eventCache.getNode().hasChild(u)?a=t.filter.updateChild(c,u,B.EMPTY_NODE,ce(n),l,r):a=c,a.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ti(s,Xt(e)),o.isLeafNode()&&(a=t.filter.updateFullNode(a,o,r)))}return o=e.serverCache.isFullyInitialized()||ni(s,J())!=null,Xn(e,a,o,t.filter.filtersNodes())}}/**
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
 */class jy{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new mo(s.getIndex()),r=cy(s);this.processor_=My(r);const o=n.serverCache,l=n.eventCache,c=i.updateFullNode(B.EMPTY_NODE,o.getNode(),null),a=r.updateFullNode(B.EMPTY_NODE,l.getNode(),null),u=new Qt(c,o.isFullyInitialized(),i.filtersNodes()),h=new Qt(a,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ii(h,u),this.eventGenerator_=new _y(this.query_)}get query(){return this.query_}}function Vy(t){return t.viewCache_.serverCache.getNode()}function zy(t,e){const n=Xt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!z(e)&&!n.getImmediateChild(V(e)).isEmpty())?n.getChild(e):null}function mc(t){return t.eventRegistrations_.length===0}function qy(t,e){t.eventRegistrations_.push(e)}function yc(t,e,n){const s=[];if(n){w(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function vc(t,e,n,s){e.type===Xe.MERGE&&e.source.queryId!==null&&(w(Xt(t.viewCache_),"We should always have a full cache before handling merges"),w(Rr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Fy(t.processor_,i,e,n,s);return Ly(t.processor_,r.viewCache),w(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Yu(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Ky(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(fe,(r,o)=>{s.push(Rn(r,o))}),n.isFullyInitialized()&&s.push(Bu(n.getNode())),Yu(t,s,n.getNode(),e)}function Yu(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return gy(t.eventGenerator_,e,n,i)}/**
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
 */let ii;class Gy{constructor(){this.views=new Map}}function Yy(t){w(!ii,"__referenceConstructor has already been defined"),ii=t}function Qy(){return w(ii,"Reference.ts has not been loaded"),ii}function Xy(t){return t.views.size===0}function So(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return w(r!=null,"SyncTree gave us an op for an invalid query."),vc(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(vc(o,e,n,s));return r}}function Jy(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=ti(n,i?s:null),c=!1;l?c=!0:s instanceof B?(l=bo(n,s),c=!1):(l=B.EMPTY_NODE,c=!1);const a=Ii(new Qt(l,c,!1),new Qt(s,i,!1));return new jy(e,a)}return o}function Zy(t,e,n,s,i,r){const o=Jy(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),qy(o,n),Ky(o,n)}function ev(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Dt(t);if(i==="default")for(const[c,a]of t.views.entries())o=o.concat(yc(a,n,s)),mc(a)&&(t.views.delete(c),a.query._queryParams.loadsAllData()||r.push(a.query));else{const c=t.views.get(i);c&&(o=o.concat(yc(c,n,s)),mc(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return l&&!Dt(t)&&r.push(new(Qy())(e._repo,e._path)),{removed:r,events:o}}function Qu(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function vn(t,e){let n=null;for(const s of t.views.values())n=n||zy(s,e);return n}function Xu(t,e){if(e._queryParams.loadsAllData())return Si(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Ju(t,e){return Xu(t,e)!=null}function Dt(t){return Si(t)!=null}function Si(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ri;function tv(t){w(!ri,"__referenceConstructor has already been defined"),ri=t}function nv(){return w(ri,"Reference.ts has not been loaded"),ri}let sv=1;class Ec{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ae(null),this.pendingWriteTree_=Py(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function iv(t,e,n,s,i){return Ey(t.pendingWriteTree_,e,n,s,i),i?Is(t,new Yt(Wu(),e,n)):[]}function un(t,e,n=!1){const s=Cy(t.pendingWriteTree_,e);if(by(t.pendingWriteTree_,e)){let r=new ae(null);return s.snap!=null?r=r.set(J(),!0):Fe(s.children,o=>{r=r.set(new re(o),!0)}),Is(t,new ei(s.path,r,n))}else return[]}function Ti(t,e,n){return Is(t,new Yt(vo(),e,n))}function rv(t,e,n){const s=ae.fromObject(n);return Is(t,new gs(vo(),e,s))}function ov(t,e){return Is(t,new _s(vo(),e))}function lv(t,e,n){const s=To(t,n);if(s){const i=Ro(s),r=i.path,o=i.queryId,l=De(r,e),c=new _s(Eo(o),l);return xo(t,r,c)}else return[]}function Or(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Ju(o,e))){const c=ev(o,e,n,s);Xy(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const a=c.removed;if(l=c.events,!i){const u=a.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(f,_)=>Dt(_));if(u&&!h){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const _=uv(f);for(let y=0;y<_.length;++y){const S=_[y],A=S.query,P=nh(t,S);t.listenProvider_.startListening(Zn(A),oi(t,A),P.hashFn,P.onComplete)}}}!h&&a.length>0&&!s&&(u?t.listenProvider_.stopListening(Zn(e),null):a.forEach(f=>{const _=t.queryToTagMap.get(Ri(f));t.listenProvider_.stopListening(Zn(f),_)}))}hv(t,a)}return l}function cv(t,e,n,s){const i=To(t,s);if(i!=null){const r=Ro(i),o=r.path,l=r.queryId,c=De(o,e),a=new Yt(Eo(l),c,n);return xo(t,o,a)}else return[]}function av(t,e,n,s){const i=To(t,s);if(i){const r=Ro(i),o=r.path,l=r.queryId,c=De(o,e),a=ae.fromObject(n),u=new gs(Eo(l),c,a);return xo(t,o,u)}else return[]}function Cc(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,_)=>{const y=De(f,i);r=r||vn(_,y),o=o||Dt(_)});let l=t.syncPointTree_.get(i);l?(o=o||Dt(l),r=r||vn(l,J())):(l=new Gy,t.syncPointTree_=t.syncPointTree_.set(i,l));let c;r!=null?c=!0:(c=!1,r=B.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,y)=>{const S=vn(y,J());S&&(r=r.updateImmediateChild(_,S))}));const a=Ju(l,e);if(!a&&!e._queryParams.loadsAllData()){const f=Ri(e);w(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=fv();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const u=Co(t.pendingWriteTree_,i);let h=Zy(l,e,n,u,r,c);if(!a&&!o&&!s){const f=Xu(l,e);h=h.concat(dv(t,e,f))}return h}function Zu(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=De(o,e),a=vn(l,c);if(a)return a});return Vu(i,e,r,n,!0)}function Is(t,e){return eh(e,t.syncPointTree_,null,Co(t.pendingWriteTree_,J()))}function eh(t,e,n,s){if(z(t.path))return th(t,e,n,s);{const i=e.get(J());n==null&&i!=null&&(n=vn(i,J()));let r=[];const o=V(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const a=n?n.getImmediateChild(o):null,u=zu(s,o);r=r.concat(eh(l,c,a,u))}return i&&(r=r.concat(So(i,t,s,n))),r}}function th(t,e,n,s){const i=e.get(J());n==null&&i!=null&&(n=vn(i,J()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,a=zu(s,o),u=t.operationForChild(o);u&&(r=r.concat(th(u,l,c,a)))}),i&&(r=r.concat(So(i,t,s,n))),r}function nh(t,e){const n=e.query,s=oi(t,n);return{hashFn:()=>(Vy(e)||B.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?lv(t,n._path,s):ov(t,n._path);{const r=lm(i,n);return Or(t,n,null,r)}}}}function oi(t,e){const n=Ri(e);return t.queryToTagMap.get(n)}function Ri(t){return t._path.toString()+"$"+t._queryIdentifier}function To(t,e){return t.tagToQueryMap.get(e)}function Ro(t){const e=t.indexOf("$");return w(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new re(t.substr(0,e))}}function xo(t,e,n){const s=t.syncPointTree_.get(e);w(s,"Missing sync point for query tag that we're tracking");const i=Co(t.pendingWriteTree_,e);return So(s,n,i,null)}function uv(t){return t.fold((e,n,s)=>{if(n&&Dt(n))return[Si(n)];{let i=[];return n&&(i=Qu(n)),Fe(s,(r,o)=>{i=i.concat(o)}),i}})}function Zn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(nv())(t._repo,t._path):t}function hv(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Ri(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function fv(){return sv++}function dv(t,e,n){const s=e._path,i=oi(t,e),r=nh(t,n),o=t.listenProvider_.startListening(Zn(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)w(!Dt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((a,u,h)=>{if(!z(a)&&u&&Dt(u))return[Si(u).query];{let f=[];return u&&(f=f.concat(Qu(u).map(_=>_.query))),Fe(h,(_,y)=>{f=f.concat(y)}),f}});for(let a=0;a<c.length;++a){const u=c[a];t.listenProvider_.stopListening(Zn(u),oi(t,u))}}return o}/**
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
 */class No{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new No(n)}node(){return this.node_}}class Ao{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ge(this.path_,e);return new Ao(this.syncTree_,n)}node(){return Zu(this.syncTree_,this.path_)}}const pv=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},bc=function(t,e,n){if(!t||typeof t!="object")return t;if(w(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return _v(t[".sv"],e,n);if(typeof t[".sv"]=="object")return gv(t[".sv"],e);w(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},_v=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:w(!1,"Unexpected server value: "+t)}},gv=function(t,e,n){t.hasOwnProperty("increment")||w(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&w(!1,"Unexpected increment value: "+s);const i=e.node();if(w(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},mv=function(t,e,n,s){return Po(e,new Ao(n,t),s)},yv=function(t,e,n){return Po(t,new No(e),n)};function Po(t,e,n){const s=t.getPriority().val(),i=bc(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=bc(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ye(l,xe(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ye(i))),o.forEachChild(fe,(l,c)=>{const a=Po(c,e.getImmediateChild(l),n);a!==c&&(r=r.updateImmediateChild(l,a))}),r}}/**
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
 */class Oo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function ko(t,e){let n=e instanceof re?e:new re(e),s=t,i=V(n);for(;i!==null;){const r=Sn(s.node.children,i)||{children:{},childCount:0};s=new Oo(i,s,r),n=ce(n),i=V(n)}return s}function Dn(t){return t.node.value}function sh(t,e){t.node.value=e,kr(t)}function ih(t){return t.node.childCount>0}function vv(t){return Dn(t)===void 0&&!ih(t)}function xi(t,e){Fe(t.node.children,(n,s)=>{e(new Oo(n,t,s))})}function rh(t,e,n,s){n&&!s&&e(t),xi(t,i=>{rh(i,e,!0,s)}),n&&s&&e(t)}function Ev(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ss(t){return new re(t.parent===null?t.name:Ss(t.parent)+"/"+t.name)}function kr(t){t.parent!==null&&Cv(t.parent,t.name,t)}function Cv(t,e,n){const s=vv(n),i=yt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,kr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,kr(t))}/**
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
 */const bv=/[\[\].#$\/\u0000-\u001F\u007F]/,wv=/[\[\].#$\u0000-\u001F\u007F]/,Qi=10*1024*1024,oh=function(t){return typeof t=="string"&&t.length!==0&&!bv.test(t)},lh=function(t){return typeof t=="string"&&t.length!==0&&!wv.test(t)},Iv=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),lh(t)},ch=function(t,e,n){const s=n instanceof re?new Wm(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ut(s));if(typeof e=="function")throw new Error(t+"contains a function "+Ut(s)+" with contents = "+e.toString());if(cu(e))throw new Error(t+"contains "+e.toString()+" "+Ut(s));if(typeof e=="string"&&e.length>Qi/3&&Ci(e)>Qi)throw new Error(t+"contains a string greater than "+Qi+" utf8 bytes "+Ut(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Fe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!oh(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ut(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Hm(s,o),ch(t,l,s),$m(s)}),i&&r)throw new Error(t+' contains ".value" child '+Ut(s)+" in addition to actual children.")}},ah=function(t,e,n,s){if(!(s&&n===void 0)&&!lh(n))throw new Error(Ja(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Sv=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ah(t,e,n,s)},Tv=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!oh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Iv(n))throw new Error(Ja(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Rv{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function uh(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!po(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function hh(t,e,n){uh(t,n),fh(t,s=>po(s,e))}function Zt(t,e,n){uh(t,n),fh(t,s=>Qe(s,e)||Qe(e,s))}function fh(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(xv(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function xv(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();zt&&Re("event: "+n.toString()),bs(s)}}}/**
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
 */const Nv="repo_interrupt",Av=25;class Pv{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Rv,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Zs(),this.transactionQueueTree_=new Oo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Ov(t,e,n){if(t.stats_=ho(t.repoInfo_),t.forceRestClient_||hm())t.server_=new Js(t.repoInfo_,(s,i,r,o)=>{wc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ic(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ce(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new pt(t.repoInfo_,e,(s,i,r,o)=>{wc(t,s,i,r,o)},s=>{Ic(t,s)},s=>{Dv(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=gm(t.repoInfo_,()=>new py(t.stats_,t.server_)),t.infoData_=new ay,t.infoSyncTree_=new Ec({startListening:(s,i,r,o)=>{let l=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(l=Ti(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Do(t,"connected",!1),t.serverSyncTree_=new Ec({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,c)=>{const a=o(l,c);Zt(t.eventQueue_,s._path,a)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function kv(t){const n=t.infoData_.getNode(new re(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function dh(t){return pv({timestamp:kv(t)})}function wc(t,e,n,s,i){t.dataUpdateCount++;const r=new re(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=qs(n,a=>xe(a));o=av(t.serverSyncTree_,r,c,i)}else{const c=xe(n);o=cv(t.serverSyncTree_,r,c,i)}else if(s){const c=qs(n,a=>xe(a));o=rv(t.serverSyncTree_,r,c)}else{const c=xe(n);o=Ti(t.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=Lo(t,r)),Zt(t.eventQueue_,l,o)}function Ic(t,e){Do(t,"connected",e),e===!1&&Lv(t)}function Dv(t,e){Fe(e,(n,s)=>{Do(t,n,s)})}function Do(t,e,n){const s=new re("/.info/"+e),i=xe(n);t.infoData_.updateSnapshot(s,i);const r=Ti(t.infoSyncTree_,s,i);Zt(t.eventQueue_,s,r)}function Mv(t){return t.nextWriteId_++}function Lv(t){ph(t,"onDisconnectEvents");const e=dh(t),n=Zs();Tr(t.onDisconnect_,J(),(i,r)=>{const o=mv(i,r,t.serverSyncTree_,e);Uu(n,i,o)});let s=[];Tr(n,J(),(i,r)=>{s=s.concat(Ti(t.serverSyncTree_,i,r));const o=Hv(t,i);Lo(t,o)}),t.onDisconnect_=Zs(),Zt(t.eventQueue_,J(),s)}function Fv(t,e,n){let s;V(e._path)===".info"?s=Cc(t.infoSyncTree_,e,n):s=Cc(t.serverSyncTree_,e,n),hh(t.eventQueue_,e._path,s)}function Sc(t,e,n){let s;V(e._path)===".info"?s=Or(t.infoSyncTree_,e,n):s=Or(t.serverSyncTree_,e,n),hh(t.eventQueue_,e._path,s)}function Bv(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Nv)}function ph(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Re(n,...e)}function _h(t,e,n){return Zu(t.serverSyncTree_,e,n)||B.EMPTY_NODE}function Mo(t,e=t.transactionQueueTree_){if(e||Ni(t,e),Dn(e)){const n=mh(t,e);w(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Uv(t,Ss(e),n)}else ih(e)&&xi(e,n=>{Mo(t,n)})}function Uv(t,e,n){const s=n.map(a=>a.currentWriteId),i=_h(t,e,s);let r=i;const o=i.hash();for(let a=0;a<n.length;a++){const u=n[a];w(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=De(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;t.server_.put(c.toString(),l,a=>{ph(t,"transaction put response",{path:c.toString(),status:a});let u=[];if(a==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(un(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Ni(t,ko(t.transactionQueueTree_,e)),Mo(t,t.transactionQueueTree_),Zt(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)bs(h[f])}else{if(a==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{He("transaction at "+c.toString()+" failed: "+a);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=a}Lo(t,e)}},o)}function Lo(t,e){const n=gh(t,e),s=Ss(n),i=mh(t,n);return Wv(t,i,s),s}function Wv(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],a=De(n,c.path);let u=!1,h;if(w(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(un(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Av)u=!0,h="maxretry",i=i.concat(un(t.serverSyncTree_,c.currentWriteId,!0));else{const f=_h(t,c.path,o);c.currentInputSnapshot=f;const _=e[l].update(f.val());if(_!==void 0){ch("transaction failed: Data returned ",_,c.path);let y=xe(_);typeof _=="object"&&_!=null&&yt(_,".priority")||(y=y.updatePriority(f.getPriority()));const A=c.currentWriteId,P=dh(t),k=yv(y,f,P);c.currentOutputSnapshotRaw=y,c.currentOutputSnapshotResolved=k,c.currentWriteId=Mv(t),o.splice(o.indexOf(A),1),i=i.concat(iv(t.serverSyncTree_,c.path,k,c.currentWriteId,c.applyLocally)),i=i.concat(un(t.serverSyncTree_,A,!0))}else u=!0,h="nodata",i=i.concat(un(t.serverSyncTree_,c.currentWriteId,!0))}Zt(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}Ni(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)bs(s[l]);Mo(t,t.transactionQueueTree_)}function gh(t,e){let n,s=t.transactionQueueTree_;for(n=V(e);n!==null&&Dn(s)===void 0;)s=ko(s,n),e=ce(e),n=V(e);return s}function mh(t,e){const n=[];return yh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function yh(t,e,n){const s=Dn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);xi(e,i=>{yh(t,i,n)})}function Ni(t,e){const n=Dn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,sh(e,n.length>0?n:void 0)}xi(e,s=>{Ni(t,s)})}function Hv(t,e){const n=Ss(gh(t,e)),s=ko(t.transactionQueueTree_,e);return Ev(s,i=>{Xi(t,i)}),Xi(t,s),rh(s,i=>{Xi(t,i)}),n}function Xi(t,e){const n=Dn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(w(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(w(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(un(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?sh(e,void 0):n.length=r+1,Zt(t.eventQueue_,Ss(e),i);for(let o=0;o<s.length;o++)bs(s[o])}}/**
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
 */function $v(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function jv(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):He(`Invalid query segment '${n}' in query '${t}'`)}return e}const Tc=function(t,e){const n=Vv(t),s=n.namespace;n.domain==="firebase.com"&&gt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&gt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||nm();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Eu(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new re(n.pathString)}},Vv=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",c=443;if(typeof t=="string"){let a=t.indexOf("//");a>=0&&(l=t.substring(0,a-1),t=t.substring(a+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=$v(t.substring(u,h)));const f=jv(t.substring(Math.min(t.length,h)));a=e.indexOf(":"),a>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(a+1),10)):a=e.length;const _=e.slice(0,a);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const y=e.indexOf(".");s=e.substring(0,y).toLowerCase(),n=e.substring(y+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */class vh{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ce(this.snapshot.exportVal())}}class Eh{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class zv{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return w(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Fo{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return z(this._path)?null:Nu(this._path)}get ref(){return new vt(this._repo,this._path)}get _queryIdentifier(){const e=ac(this._queryParams),n=ao(e);return n==="{}"?"default":n}get _queryObject(){return ac(this._queryParams)}isEqual(e){if(e=bi(e),!(e instanceof Fo))return!1;const n=this._repo===e._repo,s=po(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Um(this._path)}}class vt extends Fo{constructor(e,n){super(e,n,new yo,!1)}get parent(){const e=Pu(this._path);return e===null?null:new vt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ms{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new re(e),s=li(this.ref,e);return new ms(this._node.getChild(n),s,fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ms(i,li(this.ref,s),fe)))}hasChild(e){const n=new re(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function hE(t,e){return t=bi(t),t._checkNotDeleted("ref"),e!==void 0?li(t._root,e):t._root}function li(t,e){return t=bi(t),V(t._path)===null?Sv("child","path",e,!1):ah("child","path",e,!1),new vt(t._repo,ge(t._path,e))}class Bo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new vh("value",this,new ms(e.snapshotNode,new vt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Eh(this,e,n):null}matches(e){return e instanceof Bo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Uo{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Eh(this,e,n):null}createEvent(e,n){w(e.childName!=null,"Child events should have a childName.");const s=li(new vt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new vh(e.type,this,new ms(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Uo?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function qv(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=n,a=(u,h)=>{Sc(t._repo,t,l),c(u,h)};a.userCallback=n.userCallback,a.context=n.context,n=a}const o=new zv(n,r||void 0),l=e==="value"?new Bo(o):new Uo(e,o);return Fv(t._repo,t,l),()=>Sc(t._repo,t,l)}function fE(t,e,n,s){return qv(t,"value",e,n,s)}Yy(vt);tv(vt);/**
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
 */const Kv="FIREBASE_DATABASE_EMULATOR_HOST",Dr={};let Gv=!1;function Yv(t,e,n,s){t.repoInfo_=new Eu(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function Qv(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||gt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Re("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Tc(r,i),l=o.repoInfo,c,a;typeof process<"u"&&process.env&&(a=process.env[Kv]),a?(c=!0,r=`http://${a}?ns=${l.namespace}`,o=Tc(r,i),l=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new mn(mn.OWNER):new dm(t.name,t.options,e);Tv("Invalid Firebase Database URL",o),z(o.path)||gt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Jv(l,t,u,new fm(t.name,n));return new Zv(h,t)}function Xv(t,e){const n=Dr[e];(!n||n[t.key]!==t)&&gt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Bv(t),delete n[t.key]}function Jv(t,e,n,s){let i=Dr[e.name];i||(i={},Dr[e.name]=i);let r=i[t.toURLString()];return r&&gt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Pv(t,Gv,n,s),i[t.toURLString()]=r,r}class Zv{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Ov(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new vt(this._repo,J())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Xv(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&gt("Cannot call "+e+" on a deleted database.")}}function eE(t=Ug(),e){const n=Mg(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=R_("database");s&&tE(n,...s)}return n}function tE(t,e,n,s={}){t=bi(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&gt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&gt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new mn(mn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:x_(s.mockUserToken,t.app.options.projectId);r=new mn(o)}Yv(i,e,n,r)}/**
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
 */function nE(t){Xg(Bg),Gs(new as("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Qv(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),_n(ql,Kl,t),_n(ql,Kl,"esm2017")}pt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};pt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};nE();const sE={apiKey:"AIzaSyChlDtKx-SfIE42CoKHtOG9Dt9QNSzvNSU",authDomain:"design-primo.firebaseapp.com",databaseURL:"https://design-primo-default-rtdb.firebaseio.com",projectId:"design-primo",storageBucket:"design-primo.appspot.com",messagingSenderId:"554464328513",appId:"1:554464328513:web:9a184cbe0ad8ee05aeffc0"},iE=nu(sE),rE=eE(iE),oE=sp(),Ai=Yd(tp);Ai.use(rE);Ai.use(oE);Ai.use(m_);Ai.mount("#app");export{ft as F,Yr as a,Ea as b,li as c,uE as d,fd as e,wa as f,eE as g,aE as h,cE as i,Wr as j,ke as k,Hr as n,fE as o,hE as r,lE as t,dn as u};
