const Wo=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};Wo();function Er(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Uo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bo=Er(Uo);function ui(e){return!!e||e===""}function kn(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=te(r)?qo(r):kn(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(te(e))return e;if(Q(e))return e}}const Yo=/;(?![^(]*\))/g,Ko=/:(.+)/;function qo(e){const t={};return e.split(Yo).forEach(n=>{if(n){const r=n.split(Ko);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Or(e){let t="";if(te(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=Or(e[n]);r&&(t+=r+" ")}else if(Q(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Vo=e=>te(e)?e:e==null?"":R(e)||Q(e)&&(e.toString===pi||!j(e.toString))?JSON.stringify(e,di,2):String(e),di=(e,t)=>t&&t.__v_isRef?di(e,t.value):bt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:mi(t)?{[`Set(${t.size})`]:[...t.values()]}:Q(t)&&!R(t)&&!gi(t)?String(t):t,q={},vt=[],be=()=>{},Xo=()=>!1,Zo=/^on[^a-z]/,An=e=>Zo.test(e),Mr=e=>e.startsWith("onUpdate:"),ie=Object.assign,Pr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Jo=Object.prototype.hasOwnProperty,U=(e,t)=>Jo.call(e,t),R=Array.isArray,bt=e=>En(e)==="[object Map]",mi=e=>En(e)==="[object Set]",j=e=>typeof e=="function",te=e=>typeof e=="string",Tr=e=>typeof e=="symbol",Q=e=>e!==null&&typeof e=="object",hi=e=>Q(e)&&j(e.then)&&j(e.catch),pi=Object.prototype.toString,En=e=>pi.call(e),Go=e=>En(e).slice(8,-1),gi=e=>En(e)==="[object Object]",Ir=e=>te(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,nn=Er(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),On=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Qo=/-(\w)/g,Me=On(e=>e.replace(Qo,(t,n)=>n?n.toUpperCase():"")),es=/\B([A-Z])/g,_t=On(e=>e.replace(es,"-$1").toLowerCase()),Mn=On(e=>e.charAt(0).toUpperCase()+e.slice(1)),Un=On(e=>e?`on${Mn(e)}`:""),un=(e,t)=>!Object.is(e,t),Bn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},dn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ts=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ha;const ns=()=>ha||(ha=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Ie;class rs{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Ie&&(this.parent=Ie,this.index=(Ie.scopes||(Ie.scopes=[])).push(this)-1)}run(t){if(this.active)try{return Ie=this,t()}finally{Ie=this.parent}}on(){Ie=this}off(){Ie=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function as(e,t=Ie){t&&t.active&&t.effects.push(e)}const Sr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},vi=e=>(e.w&Ke)>0,bi=e=>(e.n&Ke)>0,is=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ke},os=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];vi(a)&&!bi(a)?a.delete(e):t[n++]=a,a.w&=~Ke,a.n&=~Ke}t.length=n}},Gn=new WeakMap;let St=0,Ke=1;const Qn=30;let Ae;const tt=Symbol(""),er=Symbol("");class Lr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,as(this,r)}run(){if(!this.active)return this.fn();let t=Ae,n=Be;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ae,Ae=this,Be=!0,Ke=1<<++St,St<=Qn?is(this):pa(this),this.fn()}finally{St<=Qn&&os(this),Ke=1<<--St,Ae=this.parent,Be=n,this.parent=void 0}}stop(){this.active&&(pa(this),this.onStop&&this.onStop(),this.active=!1)}}function pa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Be=!0;const yi=[];function Ct(){yi.push(Be),Be=!1}function kt(){const e=yi.pop();Be=e===void 0?!0:e}function de(e,t,n){if(Be&&Ae){let r=Gn.get(e);r||Gn.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Sr()),wi(a)}}function wi(e,t){let n=!1;St<=Qn?bi(e)||(e.n|=Ke,n=!vi(e)):n=!e.has(Ae),n&&(e.add(Ae),Ae.deps.push(e))}function Le(e,t,n,r,a,i){const o=Gn.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&R(e))o.forEach((l,u)=>{(u==="length"||u>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":R(e)?Ir(n)&&s.push(o.get("length")):(s.push(o.get(tt)),bt(e)&&s.push(o.get(er)));break;case"delete":R(e)||(s.push(o.get(tt)),bt(e)&&s.push(o.get(er)));break;case"set":bt(e)&&s.push(o.get(tt));break}if(s.length===1)s[0]&&tr(s[0]);else{const l=[];for(const u of s)u&&l.push(...u);tr(Sr(l))}}function tr(e,t){for(const n of R(e)?e:[...e])(n!==Ae||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const ss=Er("__proto__,__v_isRef,__isVue"),xi=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(Tr)),ls=Nr(),fs=Nr(!1,!0),cs=Nr(!0),ga=us();function us(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=B(this);for(let i=0,o=this.length;i<o;i++)de(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(B)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ct();const r=B(this)[t].apply(this,n);return kt(),r}}),e}function Nr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Os:Ei:t?Ai:ki).get(r))return r;const o=R(r);if(!e&&o&&U(ga,a))return Reflect.get(ga,a,i);const s=Reflect.get(r,a,i);return(Tr(a)?xi.has(a):ss(a))||(e||de(r,"get",a),t)?s:ne(s)?!o||!Ir(a)?s.value:s:Q(s)?e?Oi(s):zr(s):s}}const ds=_i(),ms=_i(!0);function _i(e=!1){return function(n,r,a,i){let o=n[r];if(Wt(o)&&ne(o)&&!ne(a))return!1;if(!e&&!Wt(a)&&(Mi(a)||(a=B(a),o=B(o)),!R(n)&&ne(o)&&!ne(a)))return o.value=a,!0;const s=R(n)&&Ir(r)?Number(r)<n.length:U(n,r),l=Reflect.set(n,r,a,i);return n===B(i)&&(s?un(a,o)&&Le(n,"set",r,a):Le(n,"add",r,a)),l}}function hs(e,t){const n=U(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Le(e,"delete",t,void 0),r}function ps(e,t){const n=Reflect.has(e,t);return(!Tr(t)||!xi.has(t))&&de(e,"has",t),n}function gs(e){return de(e,"iterate",R(e)?"length":tt),Reflect.ownKeys(e)}const Ci={get:ls,set:ds,deleteProperty:hs,has:ps,ownKeys:gs},vs={get:cs,set(e,t){return!0},deleteProperty(e,t){return!0}},bs=ie({},Ci,{get:fs,set:ms}),Fr=e=>e,Pn=e=>Reflect.getPrototypeOf(e);function Zt(e,t,n=!1,r=!1){e=e.__v_raw;const a=B(e),i=B(t);t!==i&&!n&&de(a,"get",t),!n&&de(a,"get",i);const{has:o}=Pn(a),s=r?Fr:n?Hr:Dr;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Jt(e,t=!1){const n=this.__v_raw,r=B(n),a=B(e);return e!==a&&!t&&de(r,"has",e),!t&&de(r,"has",a),e===a?n.has(e):n.has(e)||n.has(a)}function Gt(e,t=!1){return e=e.__v_raw,!t&&de(B(e),"iterate",tt),Reflect.get(e,"size",e)}function va(e){e=B(e);const t=B(this);return Pn(t).has.call(t,e)||(t.add(e),Le(t,"add",e,e)),this}function ba(e,t){t=B(t);const n=B(this),{has:r,get:a}=Pn(n);let i=r.call(n,e);i||(e=B(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?un(t,o)&&Le(n,"set",e,t):Le(n,"add",e,t),this}function ya(e){const t=B(this),{has:n,get:r}=Pn(t);let a=n.call(t,e);a||(e=B(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Le(t,"delete",e,void 0),i}function wa(){const e=B(this),t=e.size!==0,n=e.clear();return t&&Le(e,"clear",void 0,void 0),n}function Qt(e,t){return function(r,a){const i=this,o=i.__v_raw,s=B(o),l=t?Fr:e?Hr:Dr;return!e&&de(s,"iterate",tt),o.forEach((u,d)=>r.call(a,l(u),l(d),i))}}function en(e,t,n){return function(...r){const a=this.__v_raw,i=B(a),o=bt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=a[e](...r),d=n?Fr:t?Hr:Dr;return!t&&de(i,"iterate",l?er:tt),{next(){const{value:h,done:b}=u.next();return b?{value:h,done:b}:{value:s?[d(h[0]),d(h[1])]:d(h),done:b}},[Symbol.iterator](){return this}}}}function He(e){return function(...t){return e==="delete"?!1:this}}function ys(){const e={get(i){return Zt(this,i)},get size(){return Gt(this)},has:Jt,add:va,set:ba,delete:ya,clear:wa,forEach:Qt(!1,!1)},t={get(i){return Zt(this,i,!1,!0)},get size(){return Gt(this)},has:Jt,add:va,set:ba,delete:ya,clear:wa,forEach:Qt(!1,!0)},n={get(i){return Zt(this,i,!0)},get size(){return Gt(this,!0)},has(i){return Jt.call(this,i,!0)},add:He("add"),set:He("set"),delete:He("delete"),clear:He("clear"),forEach:Qt(!0,!1)},r={get(i){return Zt(this,i,!0,!0)},get size(){return Gt(this,!0)},has(i){return Jt.call(this,i,!0)},add:He("add"),set:He("set"),delete:He("delete"),clear:He("clear"),forEach:Qt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=en(i,!1,!1),n[i]=en(i,!0,!1),t[i]=en(i,!1,!0),r[i]=en(i,!0,!0)}),[e,n,t,r]}const[ws,xs,_s,Cs]=ys();function Rr(e,t){const n=t?e?Cs:_s:e?xs:ws;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(U(n,a)&&a in r?n:r,a,i)}const ks={get:Rr(!1,!1)},As={get:Rr(!1,!0)},Es={get:Rr(!0,!1)},ki=new WeakMap,Ai=new WeakMap,Ei=new WeakMap,Os=new WeakMap;function Ms(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ps(e){return e.__v_skip||!Object.isExtensible(e)?0:Ms(Go(e))}function zr(e){return Wt(e)?e:jr(e,!1,Ci,ks,ki)}function Ts(e){return jr(e,!1,bs,As,Ai)}function Oi(e){return jr(e,!0,vs,Es,Ei)}function jr(e,t,n,r,a){if(!Q(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Ps(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function yt(e){return Wt(e)?yt(e.__v_raw):!!(e&&e.__v_isReactive)}function Wt(e){return!!(e&&e.__v_isReadonly)}function Mi(e){return!!(e&&e.__v_isShallow)}function Pi(e){return yt(e)||Wt(e)}function B(e){const t=e&&e.__v_raw;return t?B(t):e}function Ti(e){return dn(e,"__v_skip",!0),e}const Dr=e=>Q(e)?zr(e):e,Hr=e=>Q(e)?Oi(e):e;function Is(e){Be&&Ae&&(e=B(e),wi(e.dep||(e.dep=Sr())))}function Ss(e,t){e=B(e),e.dep&&tr(e.dep)}function ne(e){return!!(e&&e.__v_isRef===!0)}function Ls(e){return ne(e)?e.value:e}const Ns={get:(e,t,n)=>Ls(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ne(a)&&!ne(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Ii(e){return yt(e)?e:new Proxy(e,Ns)}class Fs{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Lr(t,()=>{this._dirty||(this._dirty=!0,Ss(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=B(this);return Is(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Rs(e,t,n=!1){let r,a;const i=j(e);return i?(r=e,a=be):(r=e.get,a=e.set),new Fs(r,a,i||!a,n)}Promise.resolve();function Ye(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Tn(i,t,n)}return a}function ye(e,t,n,r){if(j(e)){const i=Ye(e,t,n,r);return i&&hi(i)&&i.catch(o=>{Tn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(ye(e[i],t,n,r));return a}function Tn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Ye(l,null,10,[e,o,s]);return}}zs(e,n,a,r)}function zs(e,t,n,r=!0){console.error(e)}let mn=!1,nr=!1;const ue=[];let Se=0;const Rt=[];let Lt=null,dt=0;const zt=[];let We=null,mt=0;const Si=Promise.resolve();let $r=null,rr=null;function js(e){const t=$r||Si;return e?t.then(this?e.bind(this):e):t}function Ds(e){let t=Se+1,n=ue.length;for(;t<n;){const r=t+n>>>1;Ut(ue[r])<e?t=r+1:n=r}return t}function Li(e){(!ue.length||!ue.includes(e,mn&&e.allowRecurse?Se+1:Se))&&e!==rr&&(e.id==null?ue.push(e):ue.splice(Ds(e.id),0,e),Ni())}function Ni(){!mn&&!nr&&(nr=!0,$r=Si.then(zi))}function Hs(e){const t=ue.indexOf(e);t>Se&&ue.splice(t,1)}function Fi(e,t,n,r){R(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),Ni()}function $s(e){Fi(e,Lt,Rt,dt)}function Ws(e){Fi(e,We,zt,mt)}function Wr(e,t=null){if(Rt.length){for(rr=t,Lt=[...new Set(Rt)],Rt.length=0,dt=0;dt<Lt.length;dt++)Lt[dt]();Lt=null,dt=0,rr=null,Wr(e,t)}}function Ri(e){if(zt.length){const t=[...new Set(zt)];if(zt.length=0,We){We.push(...t);return}for(We=t,We.sort((n,r)=>Ut(n)-Ut(r)),mt=0;mt<We.length;mt++)We[mt]();We=null,mt=0}}const Ut=e=>e.id==null?1/0:e.id;function zi(e){nr=!1,mn=!0,Wr(e),ue.sort((n,r)=>Ut(n)-Ut(r));const t=be;try{for(Se=0;Se<ue.length;Se++){const n=ue[Se];n&&n.active!==!1&&Ye(n,null,14)}}finally{Se=0,ue.length=0,Ri(),mn=!1,$r=null,(ue.length||Rt.length||zt.length)&&zi(e)}}function Us(e,t,...n){const r=e.vnode.props||q;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:b}=r[d]||q;b?a=n.map(A=>A.trim()):h&&(a=n.map(ts))}let s,l=r[s=Un(t)]||r[s=Un(Me(t))];!l&&i&&(l=r[s=Un(_t(t))]),l&&ye(l,e,6,a);const u=r[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,ye(u,e,6,a)}}function ji(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!j(e)){const l=u=>{const d=ji(u,t,!0);d&&(s=!0,ie(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(R(i)?i.forEach(l=>o[l]=null):ie(o,i),r.set(e,o),o)}function Ur(e,t){return!e||!An(t)?!1:(t=t.slice(2).replace(/Once$/,""),U(e,t[0].toLowerCase()+t.slice(1))||U(e,_t(t))||U(e,t))}let Ee=null,Di=null;function hn(e){const t=Ee;return Ee=e,Di=e&&e.type.__scopeId||null,t}function Bs(e,t=Ee,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ta(-1);const i=hn(t),o=e(...a);return hn(i),r._d&&Ta(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Yn(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:u,render:d,renderCache:h,data:b,setupState:A,ctx:N,inheritAttrs:H}=e;let S,y;const O=hn(e);try{if(n.shapeFlag&4){const $=a||r;S=ke(d.call($,$,h,i,A,b,N)),y=l}else{const $=t;S=ke($.length>1?$(i,{attrs:l,slots:s,emit:u}):$(i,null)),y=t.props?l:Ys(l)}}catch($){jt.length=0,Tn($,e,1),S=z(at)}let F=S;if(y&&H!==!1){const $=Object.keys(y),{shapeFlag:K}=F;$.length&&K&7&&(o&&$.some(Mr)&&(y=Ks(y,o)),F=Bt(F,y))}return n.dirs&&(F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),S=F,hn(O),S}const Ys=e=>{let t;for(const n in e)(n==="class"||n==="style"||An(n))&&((t||(t={}))[n]=e[n]);return t},Ks=(e,t)=>{const n={};for(const r in e)(!Mr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function qs(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?xa(r,o,u):!!o;if(l&8){const d=t.dynamicProps;for(let h=0;h<d.length;h++){const b=d[h];if(o[b]!==r[b]&&!Ur(u,b))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?xa(r,o,u):!0:!!o;return!1}function xa(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Ur(n,i))return!0}return!1}function Vs({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Xs=e=>e.__isSuspense;function Zs(e,t){t&&t.pendingBranch?R(e)?t.effects.push(...e):t.effects.push(e):Ws(e)}function Js(e,t){if(ee){let n=ee.provides;const r=ee.parent&&ee.parent.provides;r===n&&(n=ee.provides=Object.create(r)),n[e]=t}}function Kn(e,t,n=!1){const r=ee||Ee;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&j(t)?t.call(r.proxy):t}}const _a={};function rn(e,t,n){return Hi(e,t,n)}function Hi(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=q){const s=ee;let l,u=!1,d=!1;if(ne(e)?(l=()=>e.value,u=Mi(e)):yt(e)?(l=()=>e,r=!0):R(e)?(d=!0,u=e.some(yt),l=()=>e.map(y=>{if(ne(y))return y.value;if(yt(y))return ht(y);if(j(y))return Ye(y,s,2)})):j(e)?t?l=()=>Ye(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return h&&h(),ye(e,s,3,[b])}:l=be,t&&r){const y=l;l=()=>ht(y())}let h,b=y=>{h=S.onStop=()=>{Ye(y,s,4)}};if(Yt)return b=be,t?n&&ye(t,s,3,[l(),d?[]:void 0,b]):l(),be;let A=d?[]:_a;const N=()=>{if(!!S.active)if(t){const y=S.run();(r||u||(d?y.some((O,F)=>un(O,A[F])):un(y,A)))&&(h&&h(),ye(t,s,3,[y,A===_a?void 0:A,b]),A=y)}else S.run()};N.allowRecurse=!!t;let H;a==="sync"?H=N:a==="post"?H=()=>le(N,s&&s.suspense):H=()=>{!s||s.isMounted?$s(N):N()};const S=new Lr(l,H);return t?n?N():A=S.run():a==="post"?le(S.run.bind(S),s&&s.suspense):S.run(),()=>{S.stop(),s&&s.scope&&Pr(s.scope.effects,S)}}function Gs(e,t,n){const r=this.proxy,a=te(e)?e.includes(".")?$i(r,e):()=>r[e]:e.bind(r,r);let i;j(t)?i=t:(i=t.handler,n=t);const o=ee;xt(this);const s=Hi(a,i.bind(r),n);return o?xt(o):rt(),s}function $i(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function ht(e,t){if(!Q(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ne(e))ht(e.value,t);else if(R(e))for(let n=0;n<e.length;n++)ht(e[n],t);else if(mi(e)||bt(e))e.forEach(n=>{ht(n,t)});else if(gi(e))for(const n in e)ht(e[n],t);return e}function st(e){return j(e)?{setup:e,name:e.name}:e}const ar=e=>!!e.type.__asyncLoader,Wi=e=>e.type.__isKeepAlive;function Qs(e,t){Ui(e,"a",t)}function el(e,t){Ui(e,"da",t)}function Ui(e,t,n=ee){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(In(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Wi(a.parent.vnode)&&tl(r,t,n,a),a=a.parent}}function tl(e,t,n,r){const a=In(t,e,r,!0);Bi(()=>{Pr(r[t],a)},n)}function In(e,t,n=ee,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Ct(),xt(n);const s=ye(t,n,e,o);return rt(),kt(),s});return r?a.unshift(i):a.push(i),i}}const ze=e=>(t,n=ee)=>(!Yt||e==="sp")&&In(e,t,n),nl=ze("bm"),rl=ze("m"),al=ze("bu"),il=ze("u"),ol=ze("bum"),Bi=ze("um"),sl=ze("sp"),ll=ze("rtg"),fl=ze("rtc");function cl(e,t=ee){In("ec",e,t)}let ir=!0;function ul(e){const t=Ki(e),n=e.proxy,r=e.ctx;ir=!1,t.beforeCreate&&Ca(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:u,created:d,beforeMount:h,mounted:b,beforeUpdate:A,updated:N,activated:H,deactivated:S,beforeDestroy:y,beforeUnmount:O,destroyed:F,unmounted:$,render:K,renderTracked:re,renderTriggered:fe,errorCaptured:we,serverPrefetch:oe,expose:Et,inheritAttrs:lt,components:Ot,directives:Vt,filters:la}=t;if(u&&dl(u,r,null,e.appContext.config.unwrapInjectedRef),o)for(const G in o){const V=o[G];j(V)&&(r[G]=V.bind(n))}if(a){const G=a.call(n,n);Q(G)&&(e.data=zr(G))}if(ir=!0,i)for(const G in i){const V=i[G],Pe=j(V)?V.bind(n,n):j(V.get)?V.get.bind(n,n):be,Hn=!j(V)&&j(V.set)?V.set.bind(n):be,Mt=he({get:Pe,set:Hn});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>Mt.value,set:ft=>Mt.value=ft})}if(s)for(const G in s)Yi(s[G],r,n,G);if(l){const G=j(l)?l.call(n):l;Reflect.ownKeys(G).forEach(V=>{Js(V,G[V])})}d&&Ca(d,e,"c");function se(G,V){R(V)?V.forEach(Pe=>G(Pe.bind(n))):V&&G(V.bind(n))}if(se(nl,h),se(rl,b),se(al,A),se(il,N),se(Qs,H),se(el,S),se(cl,we),se(fl,re),se(ll,fe),se(ol,O),se(Bi,$),se(sl,oe),R(Et))if(Et.length){const G=e.exposed||(e.exposed={});Et.forEach(V=>{Object.defineProperty(G,V,{get:()=>n[V],set:Pe=>n[V]=Pe})})}else e.exposed||(e.exposed={});K&&e.render===be&&(e.render=K),lt!=null&&(e.inheritAttrs=lt),Ot&&(e.components=Ot),Vt&&(e.directives=Vt)}function dl(e,t,n=be,r=!1){R(e)&&(e=or(e));for(const a in e){const i=e[a];let o;Q(i)?"default"in i?o=Kn(i.from||a,i.default,!0):o=Kn(i.from||a):o=Kn(i),ne(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Ca(e,t,n){ye(R(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Yi(e,t,n,r){const a=r.includes(".")?$i(n,r):()=>n[r];if(te(e)){const i=t[e];j(i)&&rn(a,i)}else if(j(e))rn(a,e.bind(n));else if(Q(e))if(R(e))e.forEach(i=>Yi(i,t,n,r));else{const i=j(e.handler)?e.handler.bind(n):t[e.handler];j(i)&&rn(a,i,e)}}function Ki(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(u=>pn(l,u,o,!0)),pn(l,t,o)),i.set(t,l),l}function pn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&pn(e,i,n,!0),a&&a.forEach(o=>pn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=ml[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const ml={data:ka,props:Je,emits:Je,methods:Je,computed:Je,beforeCreate:ae,created:ae,beforeMount:ae,mounted:ae,beforeUpdate:ae,updated:ae,beforeDestroy:ae,beforeUnmount:ae,destroyed:ae,unmounted:ae,activated:ae,deactivated:ae,errorCaptured:ae,serverPrefetch:ae,components:Je,directives:Je,watch:pl,provide:ka,inject:hl};function ka(e,t){return t?e?function(){return ie(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function hl(e,t){return Je(or(e),or(t))}function or(e){if(R(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ae(e,t){return e?[...new Set([].concat(e,t))]:t}function Je(e,t){return e?ie(ie(Object.create(null),e),t):t}function pl(e,t){if(!e)return t;if(!t)return e;const n=ie(Object.create(null),e);for(const r in t)n[r]=ae(e[r],t[r]);return n}function gl(e,t,n,r=!1){const a={},i={};dn(i,Sn,1),e.propsDefaults=Object.create(null),qi(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Ts(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function vl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=B(a),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let h=0;h<d.length;h++){let b=d[h];const A=t[b];if(l)if(U(i,b))A!==i[b]&&(i[b]=A,u=!0);else{const N=Me(b);a[N]=sr(l,s,N,A,e,!1)}else A!==i[b]&&(i[b]=A,u=!0)}}}else{qi(e,t,a,i)&&(u=!0);let d;for(const h in s)(!t||!U(t,h)&&((d=_t(h))===h||!U(t,d)))&&(l?n&&(n[h]!==void 0||n[d]!==void 0)&&(a[h]=sr(l,s,h,void 0,e,!0)):delete a[h]);if(i!==s)for(const h in i)(!t||!U(t,h)&&!0)&&(delete i[h],u=!0)}u&&Le(e,"set","$attrs")}function qi(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(nn(l))continue;const u=t[l];let d;a&&U(a,d=Me(l))?!i||!i.includes(d)?n[d]=u:(s||(s={}))[d]=u:Ur(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=B(n),u=s||q;for(let d=0;d<i.length;d++){const h=i[d];n[h]=sr(a,l,h,u[h],e,!U(u,h))}}return o}function sr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=U(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&j(l)){const{propsDefaults:u}=a;n in u?r=u[n]:(xt(a),r=u[n]=l.call(null,t),rt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===_t(n))&&(r=!0))}return r}function Vi(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!j(e)){const d=h=>{l=!0;const[b,A]=Vi(h,t,!0);ie(o,b),A&&s.push(...A)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return r.set(e,vt),vt;if(R(i))for(let d=0;d<i.length;d++){const h=Me(i[d]);Aa(h)&&(o[h]=q)}else if(i)for(const d in i){const h=Me(d);if(Aa(h)){const b=i[d],A=o[h]=R(b)||j(b)?{type:b}:b;if(A){const N=Ma(Boolean,A.type),H=Ma(String,A.type);A[0]=N>-1,A[1]=H<0||N<H,(N>-1||U(A,"default"))&&s.push(h)}}}const u=[o,s];return r.set(e,u),u}function Aa(e){return e[0]!=="$"}function Ea(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Oa(e,t){return Ea(e)===Ea(t)}function Ma(e,t){return R(t)?t.findIndex(n=>Oa(n,e)):j(t)&&Oa(t,e)?0:-1}const Xi=e=>e[0]==="_"||e==="$stable",Br=e=>R(e)?e.map(ke):[ke(e)],bl=(e,t,n)=>{const r=Bs((...a)=>Br(t(...a)),n);return r._c=!1,r},Zi=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Xi(a))continue;const i=e[a];if(j(i))t[a]=bl(a,i,r);else if(i!=null){const o=Br(i);t[a]=()=>o}}},Ji=(e,t)=>{const n=Br(t);e.slots.default=()=>n},yl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=B(t),dn(t,"_",n)):Zi(t,e.slots={})}else e.slots={},t&&Ji(e,t);dn(e.slots,Sn,1)},wl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=q;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ie(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Zi(t,a)),o=t}else t&&(Ji(e,t),o={default:1});if(i)for(const s in a)!Xi(s)&&!(s in o)&&delete a[s]};function Xe(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Ct(),ye(l,n,8,[e.el,s,e,t]),kt())}}function Gi(){return{app:null,config:{isNativeTag:Xo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xl=0;function _l(e,t){return function(r,a=null){a!=null&&!Q(a)&&(a=null);const i=Gi(),o=new Set;let s=!1;const l=i.app={_uid:xl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Ul,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&j(u.install)?(o.add(u),u.install(l,...d)):j(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,h){if(!s){const b=z(r,a);return b.appContext=i,d&&t?t(b,u):e(b,u,h),s=!0,l._container=u,u.__vue_app__=l,qr(b.component)||b.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l}};return l}}function lr(e,t,n,r,a=!1){if(R(e)){e.forEach((b,A)=>lr(b,t&&(R(t)?t[A]:t),n,r,a));return}if(ar(r)&&!a)return;const i=r.shapeFlag&4?qr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,u=t&&t.r,d=s.refs===q?s.refs={}:s.refs,h=s.setupState;if(u!=null&&u!==l&&(te(u)?(d[u]=null,U(h,u)&&(h[u]=null)):ne(u)&&(u.value=null)),j(l))Ye(l,s,12,[o,d]);else{const b=te(l),A=ne(l);if(b||A){const N=()=>{if(e.f){const H=b?d[l]:l.value;a?R(H)&&Pr(H,i):R(H)?H.includes(i)||H.push(i):b?d[l]=[i]:(l.value=[i],e.k&&(d[e.k]=l.value))}else b?(d[l]=o,U(h,l)&&(h[l]=o)):ne(l)&&(l.value=o,e.k&&(d[e.k]=o))};o?(N.id=-1,le(N,n)):N()}}}const le=Zs;function Cl(e){return kl(e)}function kl(e,t){const n=ns();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:u,setElementText:d,parentNode:h,nextSibling:b,setScopeId:A=be,cloneNode:N,insertStaticContent:H}=e,S=(f,c,m,g=null,p=null,x=null,C=!1,w=null,_=!!c.dynamicChildren)=>{if(f===c)return;f&&!Tt(f,c)&&(g=Xt(f),De(f,p,x,!0),f=null),c.patchFlag===-2&&(_=!1,c.dynamicChildren=null);const{type:v,ref:P,shapeFlag:M}=c;switch(v){case Yr:y(f,c,m,g);break;case at:O(f,c,m,g);break;case on:f==null&&F(c,m,g,C);break;case ge:Vt(f,c,m,g,p,x,C,w,_);break;default:M&1?re(f,c,m,g,p,x,C,w,_):M&6?la(f,c,m,g,p,x,C,w,_):(M&64||M&128)&&v.process(f,c,m,g,p,x,C,w,_,ct)}P!=null&&p&&lr(P,f&&f.ref,x,c||f,!c)},y=(f,c,m,g)=>{if(f==null)r(c.el=s(c.children),m,g);else{const p=c.el=f.el;c.children!==f.children&&u(p,c.children)}},O=(f,c,m,g)=>{f==null?r(c.el=l(c.children||""),m,g):c.el=f.el},F=(f,c,m,g)=>{[f.el,f.anchor]=H(f.children,c,m,g,f.el,f.anchor)},$=({el:f,anchor:c},m,g)=>{let p;for(;f&&f!==c;)p=b(f),r(f,m,g),f=p;r(c,m,g)},K=({el:f,anchor:c})=>{let m;for(;f&&f!==c;)m=b(f),a(f),f=m;a(c)},re=(f,c,m,g,p,x,C,w,_)=>{C=C||c.type==="svg",f==null?fe(c,m,g,p,x,C,w,_):Et(f,c,p,x,C,w,_)},fe=(f,c,m,g,p,x,C,w)=>{let _,v;const{type:P,props:M,shapeFlag:T,transition:L,patchFlag:W,dirs:J}=f;if(f.el&&N!==void 0&&W===-1)_=f.el=N(f.el);else{if(_=f.el=o(f.type,x,M&&M.is,M),T&8?d(_,f.children):T&16&&oe(f.children,_,null,g,p,x&&P!=="foreignObject",C,w),J&&Xe(f,null,g,"created"),M){for(const X in M)X!=="value"&&!nn(X)&&i(_,X,null,M[X],x,f.children,g,p,Te);"value"in M&&i(_,"value",null,M.value),(v=M.onVnodeBeforeMount)&&_e(v,g,f)}we(_,f,f.scopeId,C,g)}J&&Xe(f,null,g,"beforeMount");const Y=(!p||p&&!p.pendingBranch)&&L&&!L.persisted;Y&&L.beforeEnter(_),r(_,c,m),((v=M&&M.onVnodeMounted)||Y||J)&&le(()=>{v&&_e(v,g,f),Y&&L.enter(_),J&&Xe(f,null,g,"mounted")},p)},we=(f,c,m,g,p)=>{if(m&&A(f,m),g)for(let x=0;x<g.length;x++)A(f,g[x]);if(p){let x=p.subTree;if(c===x){const C=p.vnode;we(f,C,C.scopeId,C.slotScopeIds,p.parent)}}},oe=(f,c,m,g,p,x,C,w,_=0)=>{for(let v=_;v<f.length;v++){const P=f[v]=w?Ue(f[v]):ke(f[v]);S(null,P,c,m,g,p,x,C,w)}},Et=(f,c,m,g,p,x,C)=>{const w=c.el=f.el;let{patchFlag:_,dynamicChildren:v,dirs:P}=c;_|=f.patchFlag&16;const M=f.props||q,T=c.props||q;let L;m&&Ze(m,!1),(L=T.onVnodeBeforeUpdate)&&_e(L,m,c,f),P&&Xe(c,f,m,"beforeUpdate"),m&&Ze(m,!0);const W=p&&c.type!=="foreignObject";if(v?lt(f.dynamicChildren,v,w,m,g,W,x):C||Pe(f,c,w,null,m,g,W,x,!1),_>0){if(_&16)Ot(w,c,M,T,m,g,p);else if(_&2&&M.class!==T.class&&i(w,"class",null,T.class,p),_&4&&i(w,"style",M.style,T.style,p),_&8){const J=c.dynamicProps;for(let Y=0;Y<J.length;Y++){const X=J[Y],pe=M[X],ut=T[X];(ut!==pe||X==="value")&&i(w,X,pe,ut,p,f.children,m,g,Te)}}_&1&&f.children!==c.children&&d(w,c.children)}else!C&&v==null&&Ot(w,c,M,T,m,g,p);((L=T.onVnodeUpdated)||P)&&le(()=>{L&&_e(L,m,c,f),P&&Xe(c,f,m,"updated")},g)},lt=(f,c,m,g,p,x,C)=>{for(let w=0;w<c.length;w++){const _=f[w],v=c[w],P=_.el&&(_.type===ge||!Tt(_,v)||_.shapeFlag&70)?h(_.el):m;S(_,v,P,null,g,p,x,C,!0)}},Ot=(f,c,m,g,p,x,C)=>{if(m!==g){for(const w in g){if(nn(w))continue;const _=g[w],v=m[w];_!==v&&w!=="value"&&i(f,w,v,_,C,c.children,p,x,Te)}if(m!==q)for(const w in m)!nn(w)&&!(w in g)&&i(f,w,m[w],null,C,c.children,p,x,Te);"value"in g&&i(f,"value",m.value,g.value)}},Vt=(f,c,m,g,p,x,C,w,_)=>{const v=c.el=f?f.el:s(""),P=c.anchor=f?f.anchor:s("");let{patchFlag:M,dynamicChildren:T,slotScopeIds:L}=c;L&&(w=w?w.concat(L):L),f==null?(r(v,m,g),r(P,m,g),oe(c.children,m,P,p,x,C,w,_)):M>0&&M&64&&T&&f.dynamicChildren?(lt(f.dynamicChildren,T,m,p,x,C,w),(c.key!=null||p&&c===p.subTree)&&Qi(f,c,!0)):Pe(f,c,m,P,p,x,C,w,_)},la=(f,c,m,g,p,x,C,w,_)=>{c.slotScopeIds=w,f==null?c.shapeFlag&512?p.ctx.activate(c,m,g,C,_):Dn(c,m,g,p,x,C,_):se(f,c,_)},Dn=(f,c,m,g,p,x,C)=>{const w=f.component=Rl(f,g,p);if(Wi(f)&&(w.ctx.renderer=ct),zl(w),w.asyncDep){if(p&&p.registerDep(w,G),!f.el){const _=w.subTree=z(at);O(null,_,c,m)}return}G(w,f,c,m,p,x,C)},se=(f,c,m)=>{const g=c.component=f.component;if(qs(f,c,m))if(g.asyncDep&&!g.asyncResolved){V(g,c,m);return}else g.next=c,Hs(g.update),g.update();else c.component=f.component,c.el=f.el,g.vnode=c},G=(f,c,m,g,p,x,C)=>{const w=()=>{if(f.isMounted){let{next:P,bu:M,u:T,parent:L,vnode:W}=f,J=P,Y;Ze(f,!1),P?(P.el=W.el,V(f,P,C)):P=W,M&&Bn(M),(Y=P.props&&P.props.onVnodeBeforeUpdate)&&_e(Y,L,P,W),Ze(f,!0);const X=Yn(f),pe=f.subTree;f.subTree=X,S(pe,X,h(pe.el),Xt(pe),f,p,x),P.el=X.el,J===null&&Vs(f,X.el),T&&le(T,p),(Y=P.props&&P.props.onVnodeUpdated)&&le(()=>_e(Y,L,P,W),p)}else{let P;const{el:M,props:T}=c,{bm:L,m:W,parent:J}=f,Y=ar(c);if(Ze(f,!1),L&&Bn(L),!Y&&(P=T&&T.onVnodeBeforeMount)&&_e(P,J,c),Ze(f,!0),M&&Wn){const X=()=>{f.subTree=Yn(f),Wn(M,f.subTree,f,p,null)};Y?c.type.__asyncLoader().then(()=>!f.isUnmounted&&X()):X()}else{const X=f.subTree=Yn(f);S(null,X,m,g,f,p,x),c.el=X.el}if(W&&le(W,p),!Y&&(P=T&&T.onVnodeMounted)){const X=c;le(()=>_e(P,J,X),p)}c.shapeFlag&256&&f.a&&le(f.a,p),f.isMounted=!0,c=m=g=null}},_=f.effect=new Lr(w,()=>Li(f.update),f.scope),v=f.update=_.run.bind(_);v.id=f.uid,Ze(f,!0),v()},V=(f,c,m)=>{c.component=f;const g=f.vnode.props;f.vnode=c,f.next=null,vl(f,c.props,g,m),wl(f,c.children,m),Ct(),Wr(void 0,f.update),kt()},Pe=(f,c,m,g,p,x,C,w,_=!1)=>{const v=f&&f.children,P=f?f.shapeFlag:0,M=c.children,{patchFlag:T,shapeFlag:L}=c;if(T>0){if(T&128){Mt(v,M,m,g,p,x,C,w,_);return}else if(T&256){Hn(v,M,m,g,p,x,C,w,_);return}}L&8?(P&16&&Te(v,p,x),M!==v&&d(m,M)):P&16?L&16?Mt(v,M,m,g,p,x,C,w,_):Te(v,p,x,!0):(P&8&&d(m,""),L&16&&oe(M,m,g,p,x,C,w,_))},Hn=(f,c,m,g,p,x,C,w,_)=>{f=f||vt,c=c||vt;const v=f.length,P=c.length,M=Math.min(v,P);let T;for(T=0;T<M;T++){const L=c[T]=_?Ue(c[T]):ke(c[T]);S(f[T],L,m,null,p,x,C,w,_)}v>P?Te(f,p,x,!0,!1,M):oe(c,m,g,p,x,C,w,_,M)},Mt=(f,c,m,g,p,x,C,w,_)=>{let v=0;const P=c.length;let M=f.length-1,T=P-1;for(;v<=M&&v<=T;){const L=f[v],W=c[v]=_?Ue(c[v]):ke(c[v]);if(Tt(L,W))S(L,W,m,null,p,x,C,w,_);else break;v++}for(;v<=M&&v<=T;){const L=f[M],W=c[T]=_?Ue(c[T]):ke(c[T]);if(Tt(L,W))S(L,W,m,null,p,x,C,w,_);else break;M--,T--}if(v>M){if(v<=T){const L=T+1,W=L<P?c[L].el:g;for(;v<=T;)S(null,c[v]=_?Ue(c[v]):ke(c[v]),m,W,p,x,C,w,_),v++}}else if(v>T)for(;v<=M;)De(f[v],p,x,!0),v++;else{const L=v,W=v,J=new Map;for(v=W;v<=T;v++){const ce=c[v]=_?Ue(c[v]):ke(c[v]);ce.key!=null&&J.set(ce.key,v)}let Y,X=0;const pe=T-W+1;let ut=!1,ua=0;const Pt=new Array(pe);for(v=0;v<pe;v++)Pt[v]=0;for(v=L;v<=M;v++){const ce=f[v];if(X>=pe){De(ce,p,x,!0);continue}let xe;if(ce.key!=null)xe=J.get(ce.key);else for(Y=W;Y<=T;Y++)if(Pt[Y-W]===0&&Tt(ce,c[Y])){xe=Y;break}xe===void 0?De(ce,p,x,!0):(Pt[xe-W]=v+1,xe>=ua?ua=xe:ut=!0,S(ce,c[xe],m,null,p,x,C,w,_),X++)}const da=ut?Al(Pt):vt;for(Y=da.length-1,v=pe-1;v>=0;v--){const ce=W+v,xe=c[ce],ma=ce+1<P?c[ce+1].el:g;Pt[v]===0?S(null,xe,m,ma,p,x,C,w,_):ut&&(Y<0||v!==da[Y]?ft(xe,m,ma,2):Y--)}}},ft=(f,c,m,g,p=null)=>{const{el:x,type:C,transition:w,children:_,shapeFlag:v}=f;if(v&6){ft(f.component.subTree,c,m,g);return}if(v&128){f.suspense.move(c,m,g);return}if(v&64){C.move(f,c,m,ct);return}if(C===ge){r(x,c,m);for(let M=0;M<_.length;M++)ft(_[M],c,m,g);r(f.anchor,c,m);return}if(C===on){$(f,c,m);return}if(g!==2&&v&1&&w)if(g===0)w.beforeEnter(x),r(x,c,m),le(()=>w.enter(x),p);else{const{leave:M,delayLeave:T,afterLeave:L}=w,W=()=>r(x,c,m),J=()=>{M(x,()=>{W(),L&&L()})};T?T(x,W,J):J()}else r(x,c,m)},De=(f,c,m,g=!1,p=!1)=>{const{type:x,props:C,ref:w,children:_,dynamicChildren:v,shapeFlag:P,patchFlag:M,dirs:T}=f;if(w!=null&&lr(w,null,m,f,!0),P&256){c.ctx.deactivate(f);return}const L=P&1&&T,W=!ar(f);let J;if(W&&(J=C&&C.onVnodeBeforeUnmount)&&_e(J,c,f),P&6)$o(f.component,m,g);else{if(P&128){f.suspense.unmount(m,g);return}L&&Xe(f,null,c,"beforeUnmount"),P&64?f.type.remove(f,c,m,p,ct,g):v&&(x!==ge||M>0&&M&64)?Te(v,c,m,!1,!0):(x===ge&&M&384||!p&&P&16)&&Te(_,c,m),g&&fa(f)}(W&&(J=C&&C.onVnodeUnmounted)||L)&&le(()=>{J&&_e(J,c,f),L&&Xe(f,null,c,"unmounted")},m)},fa=f=>{const{type:c,el:m,anchor:g,transition:p}=f;if(c===ge){Ho(m,g);return}if(c===on){K(f);return}const x=()=>{a(m),p&&!p.persisted&&p.afterLeave&&p.afterLeave()};if(f.shapeFlag&1&&p&&!p.persisted){const{leave:C,delayLeave:w}=p,_=()=>C(m,x);w?w(f.el,x,_):_()}else x()},Ho=(f,c)=>{let m;for(;f!==c;)m=b(f),a(f),f=m;a(c)},$o=(f,c,m)=>{const{bum:g,scope:p,update:x,subTree:C,um:w}=f;g&&Bn(g),p.stop(),x&&(x.active=!1,De(C,f,c,m)),w&&le(w,c),le(()=>{f.isUnmounted=!0},c),c&&c.pendingBranch&&!c.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===c.pendingId&&(c.deps--,c.deps===0&&c.resolve())},Te=(f,c,m,g=!1,p=!1,x=0)=>{for(let C=x;C<f.length;C++)De(f[C],c,m,g,p)},Xt=f=>f.shapeFlag&6?Xt(f.component.subTree):f.shapeFlag&128?f.suspense.next():b(f.anchor||f.el),ca=(f,c,m)=>{f==null?c._vnode&&De(c._vnode,null,null,!0):S(c._vnode||null,f,c,null,null,null,m),Ri(),c._vnode=f},ct={p:S,um:De,m:ft,r:fa,mt:Dn,mc:oe,pc:Pe,pbc:lt,n:Xt,o:e};let $n,Wn;return t&&([$n,Wn]=t(ct)),{render:ca,hydrate:$n,createApp:_l(ca,$n)}}function Ze({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Qi(e,t,n=!1){const r=e.children,a=t.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ue(a[i]),s.el=o.el),n||Qi(o,s))}}function Al(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(a=n[n.length-1],e[a]<u){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<u?i=s+1:o=s;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const El=e=>e.__isTeleport,eo="components";function an(e,t){return Ml(eo,e,!0,t)||e}const Ol=Symbol();function Ml(e,t,n=!0,r=!1){const a=Ee||ee;if(a){const i=a.type;if(e===eo){const s=$l(i);if(s&&(s===t||s===Me(t)||s===Mn(Me(t))))return i}const o=Pa(a[e]||i[e],t)||Pa(a.appContext[e],t);return!o&&r?i:o}}function Pa(e,t){return e&&(e[t]||e[Me(t)]||e[Mn(Me(t))])}const ge=Symbol(void 0),Yr=Symbol(void 0),at=Symbol(void 0),on=Symbol(void 0),jt=[];let nt=null;function Ce(e=!1){jt.push(nt=e?null:[])}function Pl(){jt.pop(),nt=jt[jt.length-1]||null}let gn=1;function Ta(e){gn+=e}function to(e){return e.dynamicChildren=gn>0?nt||vt:null,Pl(),gn>0&&nt&&nt.push(e),e}function Qe(e,t,n,r,a,i){return to(E(e,t,n,r,a,i,!0))}function fr(e,t,n,r,a){return to(z(e,t,n,r,a,!0))}function cr(e){return e?e.__v_isVNode===!0:!1}function Tt(e,t){return e.type===t.type&&e.key===t.key}const Sn="__vInternal",no=({key:e})=>e!=null?e:null,sn=({ref:e,ref_key:t,ref_for:n})=>e!=null?te(e)||ne(e)||j(e)?{i:Ee,r:e,k:t,f:!!n}:e:null;function E(e,t=null,n=null,r=0,a=null,i=e===ge?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&no(t),ref:t&&sn(t),scopeId:Di,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(Kr(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=te(n)?8:16),gn>0&&!o&&nt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&nt.push(l),l}const z=Tl;function Tl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Ol)&&(e=at),cr(e)){const s=Bt(e,t,!0);return n&&Kr(s,n),s}if(Wl(e)&&(e=e.__vccOpts),t){t=Il(t);let{class:s,style:l}=t;s&&!te(s)&&(t.class=Or(s)),Q(l)&&(Pi(l)&&!R(l)&&(l=ie({},l)),t.style=kn(l))}const o=te(e)?1:Xs(e)?128:El(e)?64:Q(e)?4:j(e)?2:0;return E(e,t,n,r,a,o,i,!0)}function Il(e){return e?Pi(e)||Sn in e?ie({},e):e:null}function Bt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Sl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&no(s),ref:t&&t.ref?n&&a?R(a)?a.concat(sn(t)):[a,sn(t)]:sn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ge?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Bt(e.ssContent),ssFallback:e.ssFallback&&Bt(e.ssFallback),el:e.el,anchor:e.anchor}}function D(e=" ",t=0){return z(Yr,null,e,t)}function ro(e,t){const n=z(on,null,e);return n.staticCount=t,n}function It(e="",t=!1){return t?(Ce(),fr(at,null,e)):z(at,null,e)}function ke(e){return e==null||typeof e=="boolean"?z(at):R(e)?z(ge,null,e.slice()):typeof e=="object"?Ue(e):z(Yr,null,String(e))}function Ue(e){return e.el===null||e.memo?e:Bt(e)}function Kr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(R(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Kr(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Sn in t)?t._ctx=Ee:a===3&&Ee&&(Ee.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else j(t)?(t={default:t,_ctx:Ee},n=32):(t=String(t),r&64?(n=16,t=[D(t)]):n=8);e.children=t,e.shapeFlag|=n}function Sl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Or([t.class,r.class]));else if(a==="style")t.style=kn([t.style,r.style]);else if(An(a)){const i=t[a],o=r[a];o&&i!==o&&!(R(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function _e(e,t,n,r=null){ye(e,t,7,[n,r])}const ur=e=>e?ao(e)?qr(e)||e.proxy:ur(e.parent):null,vn=ie(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ur(e.parent),$root:e=>ur(e.root),$emit:e=>e.emit,$options:e=>Ki(e),$forceUpdate:e=>()=>Li(e.update),$nextTick:e=>js.bind(e.proxy),$watch:e=>Gs.bind(e)}),Ll={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let u;if(t[0]!=="$"){const A=o[t];if(A!==void 0)switch(A){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==q&&U(r,t))return o[t]=1,r[t];if(a!==q&&U(a,t))return o[t]=2,a[t];if((u=e.propsOptions[0])&&U(u,t))return o[t]=3,i[t];if(n!==q&&U(n,t))return o[t]=4,n[t];ir&&(o[t]=0)}}const d=vn[t];let h,b;if(d)return t==="$attrs"&&de(e,"get",t),d(e);if((h=s.__cssModules)&&(h=h[t]))return h;if(n!==q&&U(n,t))return o[t]=4,n[t];if(b=l.config.globalProperties,U(b,t))return b[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==q&&U(a,t)?(a[t]=n,!0):r!==q&&U(r,t)?(r[t]=n,!0):U(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==q&&U(e,o)||t!==q&&U(t,o)||(s=i[0])&&U(s,o)||U(r,o)||U(vn,o)||U(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?this.set(e,t,n.get(),null):n.value!=null&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}},Nl=Gi();let Fl=0;function Rl(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Nl,i={uid:Fl++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new rs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vi(r,a),emitsOptions:ji(r,a),emit:null,emitted:null,propsDefaults:q,inheritAttrs:r.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Us.bind(null,i),e.ce&&e.ce(i),i}let ee=null;const xt=e=>{ee=e,e.scope.on()},rt=()=>{ee&&ee.scope.off(),ee=null};function ao(e){return e.vnode.shapeFlag&4}let Yt=!1;function zl(e,t=!1){Yt=t;const{props:n,children:r}=e.vnode,a=ao(e);gl(e,n,a,t),yl(e,r);const i=a?jl(e,t):void 0;return Yt=!1,i}function jl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ti(new Proxy(e.ctx,Ll));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Hl(e):null;xt(e),Ct();const i=Ye(r,e,0,[e.props,a]);if(kt(),rt(),hi(i)){if(i.then(rt,rt),t)return i.then(o=>{Ia(e,o,t)}).catch(o=>{Tn(o,e,0)});e.asyncDep=i}else Ia(e,i,t)}else io(e,t)}function Ia(e,t,n){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Q(t)&&(e.setupState=Ii(t)),io(e,n)}let Sa;function io(e,t,n){const r=e.type;if(!e.render){if(!t&&Sa&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,u=ie(ie({isCustomElement:i,delimiters:s},o),l);r.render=Sa(a,u)}}e.render=r.render||be}xt(e),Ct(),ul(e),kt(),rt()}function Dl(e){return new Proxy(e.attrs,{get(t,n){return de(e,"get","$attrs"),t[n]}})}function Hl(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Dl(e))},slots:e.slots,emit:e.emit,expose:t}}function qr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ii(Ti(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in vn)return vn[n](e)}}))}function $l(e){return j(e)&&e.displayName||e.name}function Wl(e){return j(e)&&"__vccOpts"in e}const he=(e,t)=>Rs(e,t,Yt);function oo(e,t,n){const r=arguments.length;return r===2?Q(t)&&!R(t)?cr(t)?z(e,null,[t]):z(e,t):z(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&cr(n)&&(n=[n]),z(e,t,n))}const Ul="3.2.31",Bl="http://www.w3.org/2000/svg",Ge=typeof document!="undefined"?document:null,La=Ge&&Ge.createElement("template"),Yl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?Ge.createElementNS(Bl,e):Ge.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>Ge.createTextNode(e),createComment:e=>Ge.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ge.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{La.innerHTML=r?`<svg>${e}</svg>`:e;const s=La.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Kl(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function ql(e,t,n){const r=e.style,a=te(n);if(n&&!a){for(const i in n)dr(r,i,n[i]);if(t&&!te(t))for(const i in t)n[i]==null&&dr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Na=/\s*!important$/;function dr(e,t,n){if(R(n))n.forEach(r=>dr(e,t,r));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=Vl(e,t);Na.test(n)?e.setProperty(_t(r),n.replace(Na,""),"important"):e[r]=n}}const Fa=["Webkit","Moz","ms"],qn={};function Vl(e,t){const n=qn[t];if(n)return n;let r=Me(t);if(r!=="filter"&&r in e)return qn[t]=r;r=Mn(r);for(let a=0;a<Fa.length;a++){const i=Fa[a]+r;if(i in e)return qn[t]=i}return t}const Ra="http://www.w3.org/1999/xlink";function Xl(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ra,t.slice(6,t.length)):e.setAttributeNS(Ra,t,n);else{const i=Bo(t);n==null||i&&!ui(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Zl(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const s=n==null?"":n;(e.value!==s||e.tagName==="OPTION")&&(e.value=s),n==null&&e.removeAttribute(t);return}if(n===""||n==null){const s=typeof e[t];if(s==="boolean"){e[t]=ui(n);return}else if(n==null&&s==="string"){e[t]="",e.removeAttribute(t);return}else if(s==="number"){try{e[t]=0}catch{}e.removeAttribute(t);return}}try{e[t]=n}catch{}}let bn=Date.now,so=!1;if(typeof window!="undefined"){bn()>document.createEvent("Event").timeStamp&&(bn=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);so=!!(e&&Number(e[1])<=53)}let mr=0;const Jl=Promise.resolve(),Gl=()=>{mr=0},Ql=()=>mr||(Jl.then(Gl),mr=bn());function ef(e,t,n,r){e.addEventListener(t,n,r)}function tf(e,t,n,r){e.removeEventListener(t,n,r)}function nf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=rf(t);if(r){const u=i[t]=af(r,a);ef(e,s,u,l)}else o&&(tf(e,s,o,l),i[t]=void 0)}}const za=/(?:Once|Passive|Capture)$/;function rf(e){let t;if(za.test(e)){t={};let n;for(;n=e.match(za);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[_t(e.slice(2)),t]}function af(e,t){const n=r=>{const a=r.timeStamp||bn();(so||a>=n.attached-1)&&ye(of(r,n.value),t,5,[r])};return n.value=e,n.attached=Ql(),n}function of(e,t){if(R(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const ja=/^on[a-z]/,sf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Kl(e,r,a):t==="style"?ql(e,n,r):An(t)?Mr(t)||nf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):lf(e,t,r,a))?Zl(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Xl(e,t,r,a))};function lf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ja.test(t)&&j(n)):t==="spellcheck"||t==="draggable"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ja.test(t)&&te(n)?!1:t in e}const ff=ie({patchProp:sf},Yl);let Da;function cf(){return Da||(Da=Cl(ff))}const uf=(...e)=>{const t=cf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=df(r);if(!a)return;const i=t._component;!j(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function df(e){return te(e)?document.querySelector(e):e}var Ln=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n};const mf=st({}),hf={class:"bg-gray-900 text-white"},pf=E("section",{class:"bg-[#44C577] bg-gradient-to-t from-[#44C577] to-cyan-600"},[E("h1",null,"JavaScript, but desktop"),E("p",null,"MintScript is a JavaScript inspired language, optimized for running on your machine instead of the browser. This defeats the need for something like node.js and leads to better performance")],-1),gf=E("svg",{id:"visual",class:"spacer",preserveAspectRatio:"none",viewBox:"0 0 900 200",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1"},[E("path",{d:"M0 112L16.7 118C33.3 124 66.7 136 100 140.8C133.3 145.7 166.7 143.3 200 142.2C233.3 141 266.7 141 300 141C333.3 141 366.7 141 400 143.2C433.3 145.3 466.7 149.7 500 150.5C533.3 151.3 566.7 148.7 600 143.7C633.3 138.7 666.7 131.3 700 130.8C733.3 130.3 766.7 136.7 800 138.7C833.3 140.7 866.7 138.3 883.3 137.2L900 136L900 0L883.3 0C866.7 0 833.3 0 800 0C766.7 0 733.3 0 700 0C666.7 0 633.3 0 600 0C566.7 0 533.3 0 500 0C466.7 0 433.3 0 400 0C366.7 0 333.3 0 300 0C266.7 0 233.3 0 200 0C166.7 0 133.3 0 100 0C66.7 0 33.3 0 16.7 0L0 0Z",fill:"#006f57"}),E("path",{d:"M0 79L16.7 81.8C33.3 84.7 66.7 90.3 100 96.7C133.3 103 166.7 110 200 111C233.3 112 266.7 107 300 102.7C333.3 98.3 366.7 94.7 400 92.5C433.3 90.3 466.7 89.7 500 91.5C533.3 93.3 566.7 97.7 600 98.3C633.3 99 666.7 96 700 92.8C733.3 89.7 766.7 86.3 800 88C833.3 89.7 866.7 96.3 883.3 99.7L900 103L900 0L883.3 0C866.7 0 833.3 0 800 0C766.7 0 733.3 0 700 0C666.7 0 633.3 0 600 0C566.7 0 533.3 0 500 0C466.7 0 433.3 0 400 0C366.7 0 333.3 0 300 0C266.7 0 233.3 0 200 0C166.7 0 133.3 0 100 0C66.7 0 33.3 0 16.7 0L0 0Z",fill:"#0c8b64"}),E("path",{d:"M0 70L16.7 72.7C33.3 75.3 66.7 80.7 100 82.7C133.3 84.7 166.7 83.3 200 81.3C233.3 79.3 266.7 76.7 300 76.3C333.3 76 366.7 78 400 74.5C433.3 71 466.7 62 500 63.2C533.3 64.3 566.7 75.7 600 79.2C633.3 82.7 666.7 78.3 700 76.3C733.3 74.3 766.7 74.7 800 70.5C833.3 66.3 866.7 57.7 883.3 53.3L900 49L900 0L883.3 0C866.7 0 833.3 0 800 0C766.7 0 733.3 0 700 0C666.7 0 633.3 0 600 0C566.7 0 533.3 0 500 0C466.7 0 433.3 0 400 0C366.7 0 333.3 0 300 0C266.7 0 233.3 0 200 0C166.7 0 133.3 0 100 0C66.7 0 33.3 0 16.7 0L0 0Z",fill:"#27a86f"}),E("path",{d:"M0 39L16.7 41.2C33.3 43.3 66.7 47.7 100 44.7C133.3 41.7 166.7 31.3 200 28.7C233.3 26 266.7 31 300 33C333.3 35 366.7 34 400 36.5C433.3 39 466.7 45 500 45.7C533.3 46.3 566.7 41.7 600 37.7C633.3 33.7 666.7 30.3 700 28.7C733.3 27 766.7 27 800 30.5C833.3 34 866.7 41 883.3 44.5L900 48L900 0L883.3 0C866.7 0 833.3 0 800 0C766.7 0 733.3 0 700 0C666.7 0 633.3 0 600 0C566.7 0 533.3 0 500 0C466.7 0 433.3 0 400 0C366.7 0 333.3 0 300 0C266.7 0 233.3 0 200 0C166.7 0 133.3 0 100 0C66.7 0 33.3 0 16.7 0L0 0Z",fill:"#44c577"})],-1),vf=E("section",null,[E("h1",null,"Missing something? No problem."),E("p",null,"MintScript has an import statement, allowing to import both C# DLLs and MintScript files.")],-1),bf=E("svg",{id:"visual",class:"spacer",preserveAspectRatio:"none",viewBox:"0 0 900 200",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1"},[E("path",{d:"M0 60L21.5 62.3C43 64.7 86 69.3 128.8 71.3C171.7 73.3 214.3 72.7 257.2 75.7C300 78.7 343 85.3 385.8 82.7C428.7 80 471.3 68 514.2 69.7C557 71.3 600 86.7 642.8 88.3C685.7 90 728.3 78 771.2 75.2C814 72.3 857 78.7 878.5 81.8L900 85L900 201L878.5 201C857 201 814 201 771.2 201C728.3 201 685.7 201 642.8 201C600 201 557 201 514.2 201C471.3 201 428.7 201 385.8 201C343 201 300 201 257.2 201C214.3 201 171.7 201 128.8 201C86 201 43 201 21.5 201L0 201Z",fill:"#fa7268"}),E("path",{d:"M0 77L21.5 80.5C43 84 86 91 128.8 98.2C171.7 105.3 214.3 112.7 257.2 111.2C300 109.7 343 99.3 385.8 91.7C428.7 84 471.3 79 514.2 82.3C557 85.7 600 97.3 642.8 98.3C685.7 99.3 728.3 89.7 771.2 88.8C814 88 857 96 878.5 100L900 104L900 201L878.5 201C857 201 814 201 771.2 201C728.3 201 685.7 201 642.8 201C600 201 557 201 514.2 201C471.3 201 428.7 201 385.8 201C343 201 300 201 257.2 201C214.3 201 171.7 201 128.8 201C86 201 43 201 21.5 201L0 201Z",fill:"#ef5f67"}),E("path",{d:"M0 114L21.5 116.7C43 119.3 86 124.7 128.8 122.2C171.7 119.7 214.3 109.3 257.2 109.8C300 110.3 343 121.7 385.8 129.2C428.7 136.7 471.3 140.3 514.2 136.8C557 133.3 600 122.7 642.8 116.2C685.7 109.7 728.3 107.3 771.2 105C814 102.7 857 100.3 878.5 99.2L900 98L900 201L878.5 201C857 201 814 201 771.2 201C728.3 201 685.7 201 642.8 201C600 201 557 201 514.2 201C471.3 201 428.7 201 385.8 201C343 201 300 201 257.2 201C214.3 201 171.7 201 128.8 201C86 201 43 201 21.5 201L0 201Z",fill:"#e34c67"}),E("path",{d:"M0 133L21.5 136.3C43 139.7 86 146.3 128.8 150.5C171.7 154.7 214.3 156.3 257.2 156.2C300 156 343 154 385.8 151C428.7 148 471.3 144 514.2 145.5C557 147 600 154 642.8 151.7C685.7 149.3 728.3 137.7 771.2 134.3C814 131 857 136 878.5 138.5L900 141L900 201L878.5 201C857 201 814 201 771.2 201C728.3 201 685.7 201 642.8 201C600 201 557 201 514.2 201C471.3 201 428.7 201 385.8 201C343 201 300 201 257.2 201C214.3 201 171.7 201 128.8 201C86 201 43 201 21.5 201L0 201Z",fill:"#d53867"}),E("path",{d:"M0 173L21.5 172.8C43 172.7 86 172.3 128.8 171.8C171.7 171.3 214.3 170.7 257.2 171.8C300 173 343 176 385.8 178.5C428.7 181 471.3 183 514.2 181.2C557 179.3 600 173.7 642.8 170C685.7 166.3 728.3 164.7 771.2 165.2C814 165.7 857 168.3 878.5 169.7L900 171L900 201L878.5 201C857 201 814 201 771.2 201C728.3 201 685.7 201 642.8 201C600 201 557 201 514.2 201C471.3 201 428.7 201 385.8 201C343 201 300 201 257.2 201C214.3 201 171.7 201 128.8 201C86 201 43 201 21.5 201L0 201Z",fill:"#c62368"})],-1),yf=E("section",{class:"bg-[#C62368] bg-gradient-to-b from-[#C62368] to-[#FA7268]"},[E("h1",null,"Minimal, yet structured syntax"),E("p",null,"MintScript is a bracket language, making it easy to write good looking code, while also having self-explainatory syntax like println() to make understanding the code as easy as possible.")],-1),wf=E("svg",{id:"visual",class:"spacer",preserveAspectRatio:"none",viewBox:"0 0 900 200",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1"},[E("path",{d:"M0 170L18.8 170.2C37.7 170.3 75.3 170.7 112.8 171.5C150.3 172.3 187.7 173.7 225.2 175.2C262.7 176.7 300.3 178.3 337.8 173C375.3 167.7 412.7 155.3 450.2 155.5C487.7 155.7 525.3 168.3 562.8 166.7C600.3 165 637.7 149 675.2 145.3C712.7 141.7 750.3 150.3 787.8 158.2C825.3 166 862.7 173 881.3 176.5L900 180L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z",fill:"#c62368"}),E("path",{d:"M0 132L18.8 134.7C37.7 137.3 75.3 142.7 112.8 143.7C150.3 144.7 187.7 141.3 225.2 135.5C262.7 129.7 300.3 121.3 337.8 116.2C375.3 111 412.7 109 450.2 113.3C487.7 117.7 525.3 128.3 562.8 132.3C600.3 136.3 637.7 133.7 675.2 135C712.7 136.3 750.3 141.7 787.8 134.2C825.3 126.7 862.7 106.3 881.3 96.2L900 86L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z",fill:"#da3f67"}),E("path",{d:"M0 84L18.8 87.3C37.7 90.7 75.3 97.3 112.8 94.8C150.3 92.3 187.7 80.7 225.2 75C262.7 69.3 300.3 69.7 337.8 75.3C375.3 81 412.7 92 450.2 87.7C487.7 83.3 525.3 63.7 562.8 63.5C600.3 63.3 637.7 82.7 675.2 90.8C712.7 99 750.3 96 787.8 92.3C825.3 88.7 862.7 84.3 881.3 82.2L900 80L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z",fill:"#eb5967"}),E("path",{d:"M0 23L18.8 26.3C37.7 29.7 75.3 36.3 112.8 36.7C150.3 37 187.7 31 225.2 34.5C262.7 38 300.3 51 337.8 53.3C375.3 55.7 412.7 47.3 450.2 45.7C487.7 44 525.3 49 562.8 44C600.3 39 637.7 24 675.2 20.8C712.7 17.7 750.3 26.3 787.8 35.5C825.3 44.7 862.7 54.3 881.3 59.2L900 64L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z",fill:"#fa7268"})],-1),xf=E("section",null,[E("h1",null,"Wanna deploy to the web? We've got you covered."),E("p",null,"(WIP) ViceVersa is the MintScript transpiler for JavaScript, meaning: build once, run everywhere.")],-1),_f=[pf,gf,vf,bf,yf,wf,xf];function Cf(e,t,n,r,a,i){return Ce(),Qe("div",hf,_f)}var kf=Ln(mf,[["render",Cf]]);const Af=st({props:{code:{type:String,default:""}}}),Ef={class:"overflow-hidden text-left w-[calc(100% - 3rem)] m-6 p-6 rounded-lg bg-gray-500"};function Of(e,t,n,r,a,i){return Ce(),Qe("div",Ef,[E("pre",null,Vo(e.code),1)])}var Mf=Ln(Af,[["render",Of]]);const Pf=st({components:{CodeBlock:Mf}}),Tf=ro('<div class="sidebar flex flex-col items-center bg-blue-600 text-white fixed left-0 top-0 bottom-0 z-0 overflow-y-scroll pt-20"><a href="#basics" class="transition-all duration-500 hover:text-red-600">Basics</a><a href="#functions" class="transition-all duration-500 hover:text-red-600">Functions</a><a href="#classes" class="transition-all duration-500 hover:text-red-600">Classes</a><a href="#modules" class="transition-all duration-500 hover:text-red-600">Modules</a></div>',1),If={class:"documentation p-12 pt-0 text-justify h-auto bg-gray-900 text-white"},Sf=E("h1",{id:"basics",class:"text-center"},[E("br"),D("Basics")],-1),Lf=ro(" MintScript is a statically typed curly-bracked language with JavaScript inspired syntax. It is written in C#, using the ANTLR language toolkit.<br><br> Now let&#39;s start with the basics of MS.<br> MintScript executes functions in a global scope, meaning that you can just write into the script and it will be executed, no need for an entry point.<br><br> Statements <b>can</b> be followed by either a semicolon or a newline to signalise the end of the current statement.<br><br> But let&#39;s finally code something.<br><br> To start, run <i>MintScript init</i> (Windows only)<br> To run your script, type <i>MintScript C:/full/path/to/your/main.mis</i><br> First of all, lets create a variable called HelloWorld.<br>",25),Nf=D(" Variables can have 5 types: string, number, float, bool and tuple."),Ff=E("br",null,null,-1),Rf=D(" Now, lets print our variable to the console by writing: "),zf=D(" Notice, that the function is called "),jf=E("i",null,"println",-1),Df=D('. This ends the line after printing "Hello, world!". To continue the line, just write: '),Hf=D(` If you were to start the script now, you would see the window popping up and directly closing. Don't worry, everything's ok. The window is actually showing "Hello, world!", but closing, because we are not waiting for any user input. To prevent this, add this to the end of your script: `),$f=D(" Now, whenever you press enter, the script ends. "),Wf=E("br",null,null,-1),Uf=D(" If you want to read inout from the user, just use "),Bf=E("br",null,null,-1),Yf=D(" We now have created a variable, printed it and received input from the user. However, we haven't done anything special with our data. Let's add something to our string at first: "),Kf=D(' Now, our string will be "Hello, world! How are you?". We can also compare our string with others by using the if statement '),qf=D(' This checks, if HelloWorld is equal to (==) our second argument, in this case: "Hello, world! How are you?" Other comparison operators are not equal (!=), greater (>), less (<), greater or equal (>=) and less or equal (<=) '),Vf=E("br",null,null,-1),Xf=D("If statements can be followed by a self-explainatory else or else if statement. "),Zf=D(" Another important statement is the while statement. It executes code until the given condition returns false. Here's an example: "),Jf=D(" (Tip: Use while(true) to repeat the code forever) "),Gf=E("br",null,null,-1),Qf=E("br",null,null,-1),ec=E("h1",{id:"functions",class:"text-center"},[E("br"),D("Functions")],-1),tc=D(" MintScript of course has functions. You can declare functions with: "),nc=D(" You can now call it by simply typing "),rc=D(" Functions will always return a value. The return value for functions without a return statement will be the exit status of the last statement in the function, meaning: "),ac=D(" will return 0, because print exited sucessfully. However, this function: "),ic=D(` will return "System.object". Why? Well, because "123" isn't a statement but an expression. This means, that it can't return 0 or sucessful, because it's not doing any actions. It's just a number. Also, "System.object" is the C# type MintScript uses to store values. To willingly return a value, use `),oc=D(" This will indeed return 123. "),sc=E("h1",{id:"classes",class:"text-center"},[E("br"),D("Classes")],-1),lc=D(" Classes are a way to collect variables and functions and create inheritance systems."),fc=E("br",null,null,-1),cc=D(" Declare classes with "),uc=D(" Classes can also inherit functions from others."),dc=E("br",null,null,-1),mc=D(" Create a inherative class by typing "),hc=D(` Note that we don't need a keyword like "override" in MintScript to override functions. Also, classes can also inherit from any other function, no need for abstract classes. You can also add properties to classes thad didn't exist in the parent class: `),pc=E("h1",{id:"modules",class:"text-center"},[E("br"),D("Modules")],-1),gc=D(" Modules are a way to share code between projects or developers. You can Import a module by using the import statement: "),vc=D(" This will search for a file in the modules/module_name/ folder. Modules can also be imported from a specific path: "),bc=D(" Modules can be in 2 formats; MintScript or DLL. A DLL Tutorial can be found on the Youtube channel of MintScript soon. But for now, here is a boilerplate for writin C# class libraries to extend MintScript: "),yc=D(" Also, dll modules require a "),wc=E("i",null,"module.json",-1),xc=D(" file to be in the same directory, which contains the export functions: "),_c=D(" Modules written in MintScript do not require this modules.json file. Said modules will simply export every export class: "),Cc=D(" When using import statements, the exports will be loaded into the Variable Space in a pseudo-class with the same name as given. Meaning: "),kc=D(" will be loading in its imaginary function "),Ac=E("i",null,"MyFunc()",-1),Ec=D(" as "),Oc=D(" However, because MintScript is still in Beta, we recomment using DLL modules. ");function Mc(e,t,n,r,a,i){const o=an("CodeBlock");return Ce(),Qe(ge,null,[Tf,E("div",If,[Sf,E("p",null,[Lf,z(o,{code:'HelloWorld = "Hello, world!"'}),Nf,Ff,Rf,z(o,{code:"println(HelloWorld)"}),zf,jf,Df,z(o,{code:"print(HelloWorld)"}),Hf,z(o,{code:"read()"}),$f,Wf,Uf,z(o,{code:"input = readln()"}),Bf,Yf,z(o,{code:'HelloWorld = HelloWorld + " How are you?"'}),Kf,z(o,{code:`if(HelloWorld == "Hello, world! how are you?") {\r
    println(HelloWorld)\r
}`}),qf,Vf,Xf,z(o,{code:`if(HelloWorld == "Hello, world! how are you?") {\r
    println(HelloWorld)\r
}\r
else if(HelloWorld == "Hello, world!"){\r
    println("Our variable was 'Hello, world!'")\r
}\r
else {\r
    println("Our variable was neither of those")\r
}`}),Zf,z(o,{code:`i = 0\r
while(i < 10) {\r
    print(i)\r
    i = i + 1\r
}`}),Jf]),Gf,Qf,ec,E("p",null,[tc,z(o,{code:`func MyFunc(string myArgument) {\r
    println("MyFunc was called with argument " + myArgument)\r
}`}),nc,z(o,{code:'MyFunc("Hello world")'}),rc,z(o,{code:`func MyFunc() {\r
    print("Hello, world!")\r
}`}),ac,z(o,{code:`func MyFunc() {\r
    123\r
}`}),ic,z(o,{code:`func MyFunc() {\r
    return 123\r
}`}),oc]),sc,E("p",null,[lc,fc,cc,z(o,{code:`class Animal {\r
    func makeSound() {\r
        println("Hello world!")\r
    }\r
\r
    legs = 4\r
}`}),uc,dc,mc,z(o,{code:`class Pig : Animal {\r
    func makeSound() {\r
        println("Squeeeek! Says the pig with " + this.legs + " legs")\r
    }\r
}`}),hc,z(o,{code:`class Cow : Animal {\r
    func makeSound() {\r
        println("Moooo!")\r
    }\r
\r
    products = { "Milk", "Meat" }\r
}`})]),pc,E("p",null,[gc,z(o,{code:"import module"}),vc,z(o,{code:"import module from './mymodule.mis'"}),bc,z(o,{code:`public class Exports {\r
    // Write your functions here. \r
    // Every function should return an object and take in an object[].\r
    public object example(object[] args){\r
        return args[0];\r
    }\r
}`}),yc,wc,xc,z(o,{code:`{\r
    "export_functions": [\r
        {\r
            "method": "test",\r
            "args": [ "string" ]\r
        }\r
    ]\r
}`}),_c,z(o,{code:`export class Foo {\r
    bar = "Hello world!"\r
    func Greet() {\r
        // Greetings to Fireship\r
        println('hi mom')\r
    }\r
}`}),Cc,z(o,{code:"import myModule"}),kc,Ac,Ec,z(o,{code:"myModule.MyFunc()"}),Oc])])],64)}var Pc=Ln(Pf,[["render",Mc]]),Tc="/mintscript/mintscript/assets/MintScript.42929d43.png";const Ic=st({data(){return{page_index:0,shownavdropdown:!1,screenwidth:window.innerWidth}},methods:{setPageIndex(e){this.page_index=e},onResize(){this.screenwidth=window.innerWidth}},mounted(){this.setPageIndex(0),this.$nextTick(()=>{window.addEventListener("resize",this.onResize)})},components:{HomePage:kf,Documentation:Pc}}),Sc={class:"top-bar fixed top-0 left-0 right-0 bg-[rgba(41,41,41,0.8)] z-10 p-1 text-white overflow-hidden"},Lc=E("img",{src:Tc,class:"logo aspect-square float-left mr-2"},null,-1),Nc=E("h1",{class:"font-['Neutraface'] float-left text-white"},"MintScript",-1),Fc={class:"float-right mr-5 text-lg decoration-0"},Rc=E("br",null,null,-1),zc=E("div",{class:"w-[100%] relative h-36 bg-blue-600 flex justify-center items-center text-white z-50"}," 2022 Chronical Technologies ",-1);function jc(e,t,n,r,a,i){const o=an("icon"),s=an("HomePage"),l=an("Documentation");return Ce(),Qe(ge,null,[E("div",Sc,[Lc,Nc,E("div",Fc,[e.screenwidth<=500?(Ce(),Qe("button",{key:0,onClick:t[0]||(t[0]=u=>e.shownavdropdown=!e.shownavdropdown)},[z(o,{icon:"bars"})])):It("",!0),e.screenwidth>500?(Ce(),Qe("a",{key:1,onClick:t[1]||(t[1]=u=>e.setPageIndex(0)),class:"cursor-pointer hover:text-blue-400 transition-all duration-500 ml-3"},"Home")):It("",!0),e.screenwidth>500?(Ce(),Qe("a",{key:2,onClick:t[2]||(t[2]=u=>e.setPageIndex(1)),class:"cursor-pointer hover:text-blue-400 transition-all duration-500 ml-3"},"Documentation")):It("",!0)])]),E("div",{style:kn({height:e.shownavdropdown?"128px":"0px"}),class:"overflow-hidden text-white text-lg nav-dropdown transition-all duration-500 z-50 h-32 bg-gray-700 fixed left-0 right-0"},[E("a",{onClick:t[3]||(t[3]=u=>e.setPageIndex(0)),class:"cursor-pointer hover:text-blue-400 transition-all duration-500 ml-3"},"Home"),Rc,E("a",{onClick:t[4]||(t[4]=u=>e.setPageIndex(1)),class:"cursor-pointer hover:text-blue-400 transition-all duration-500 ml-3"},"Documentation")],4),e.page_index==0?(Ce(),fr(s,{key:0,class:"transition-all z-10"})):It("",!0),e.page_index==1?(Ce(),fr(l,{key:1,class:"transition-all z-10"})):It("",!0),zc],64)}var Dc=Ln(Ic,[["render",jc]]);/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Ha(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ha(Object(n),!0).forEach(function(r){Wc(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ha(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function yn(e){return yn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yn(e)}function Hc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function $a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $c(e,t,n){return t&&$a(e.prototype,t),n&&$a(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Wc(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Vr(e,t){return Bc(e)||Kc(e,t)||lo(e,t)||Vc()}function Nn(e){return Uc(e)||Yc(e)||lo(e)||qc()}function Uc(e){if(Array.isArray(e))return hr(e)}function Bc(e){if(Array.isArray(e))return e}function Yc(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Kc(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function lo(e,t){if(!!e){if(typeof e=="string")return hr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return hr(e,t)}}function hr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function qc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Vc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Wa=function(){},Xr={},fo={},co=null,uo={mark:Wa,measure:Wa};try{typeof window!="undefined"&&(Xr=window),typeof document!="undefined"&&(fo=document),typeof MutationObserver!="undefined"&&(co=MutationObserver),typeof performance!="undefined"&&(uo=performance)}catch{}var Xc=Xr.navigator||{},Ua=Xc.userAgent,Ba=Ua===void 0?"":Ua,qe=Xr,Z=fo,Ya=co,tn=uo;qe.document;var je=!!Z.documentElement&&!!Z.head&&typeof Z.addEventListener=="function"&&typeof Z.createElement=="function",mo=~Ba.indexOf("MSIE")||~Ba.indexOf("Trident/"),Ne="___FONT_AWESOME___",pr=16,ho="fa",po="svg-inline--fa",it="data-fa-i2svg",gr="data-fa-pseudo-element",Zc="data-fa-pseudo-element-pending",Zr="data-prefix",Jr="data-icon",Ka="fontawesome-i2svg",Jc="async",Gc=["HTML","HEAD","STYLE","SCRIPT"],go=function(){try{return!0}catch{return!1}}(),Gr={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},wn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},vo={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Qc={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},eu=/fa[srltdbk\-\ ]/,bo="fa-layers-text",tu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,nu={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},yo=[1,2,3,4,5,6,7,8,9,10],ru=yo.concat([11,12,13,14,15,16,17,18,19,20]),au=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],et={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},iu=[].concat(Nn(Object.keys(wn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",et.GROUP,et.SWAP_OPACITY,et.PRIMARY,et.SECONDARY]).concat(yo.map(function(e){return"".concat(e,"x")})).concat(ru.map(function(e){return"w-".concat(e)})),wo=qe.FontAwesomeConfig||{};function ou(e){var t=Z.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function su(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Z&&typeof Z.querySelector=="function"){var lu=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];lu.forEach(function(e){var t=Vr(e,2),n=t[0],r=t[1],a=su(ou(n));a!=null&&(wo[r]=a)})}var fu={familyPrefix:ho,styleDefault:"solid",replacementClass:po,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Dt=k(k({},fu),wo);Dt.autoReplaceSvg||(Dt.observeMutations=!1);var I={};Object.keys(Dt).forEach(function(e){Object.defineProperty(I,e,{enumerable:!0,set:function(n){Dt[e]=n,ln.forEach(function(r){return r(I)})},get:function(){return Dt[e]}})});qe.FontAwesomeConfig=I;var ln=[];function cu(e){return ln.push(e),function(){ln.splice(ln.indexOf(e),1)}}var $e=pr,Oe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function uu(e){if(!(!e||!je)){var t=Z.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Z.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return Z.head.insertBefore(t,r),e}}var du="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Kt(){for(var e=12,t="";e-- >0;)t+=du[Math.random()*62|0];return t}function At(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Qr(e){return e.classList?At(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function xo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function mu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(xo(e[n]),'" ')},"").trim()}function Fn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ea(e){return e.size!==Oe.size||e.x!==Oe.x||e.y!==Oe.y||e.rotate!==Oe.rotate||e.flipX||e.flipY}function hu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function pu(e){var t=e.transform,n=e.width,r=n===void 0?pr:n,a=e.height,i=a===void 0?pr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&mo?l+="translate(".concat(t.x/$e-r/2,"em, ").concat(t.y/$e-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/$e,"em), calc(-50% + ").concat(t.y/$e,"em)) "):l+="translate(".concat(t.x/$e,"em, ").concat(t.y/$e,"em) "),l+="scale(".concat(t.size/$e*(t.flipX?-1:1),", ").concat(t.size/$e*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var gu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function _o(){var e=ho,t=po,n=I.familyPrefix,r=I.replacementClass,a=gu;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var qa=!1;function Vn(){I.autoAddCss&&!qa&&(uu(_o()),qa=!0)}var vu={mixout:function(){return{dom:{css:_o,insertCss:Vn}}},hooks:function(){return{beforeDOMElementCreation:function(){Vn()},beforeI2svg:function(){Vn()}}}},Fe=qe||{};Fe[Ne]||(Fe[Ne]={});Fe[Ne].styles||(Fe[Ne].styles={});Fe[Ne].hooks||(Fe[Ne].hooks={});Fe[Ne].shims||(Fe[Ne].shims=[]);var ve=Fe[Ne],Co=[],bu=function e(){Z.removeEventListener("DOMContentLoaded",e),xn=1,Co.map(function(t){return t()})},xn=!1;je&&(xn=(Z.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Z.readyState),xn||Z.addEventListener("DOMContentLoaded",bu));function yu(e){!je||(xn?setTimeout(e,0):Co.push(e))}function qt(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?xo(e):"<".concat(t," ").concat(mu(r),">").concat(i.map(qt).join(""),"</").concat(t,">")}function Va(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var wu=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Xn=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?wu(n,a):n,l,u,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)u=i[l],d=s(d,t[u],u,t);return d};function xu(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function vr(e){var t=xu(e);return t.length===1?t[0].toString(16):null}function _u(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Xa(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function br(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Xa(t);typeof ve.hooks.addPack=="function"&&!a?ve.hooks.addPack(e,Xa(t)):ve.styles[e]=k(k({},ve.styles[e]||{}),i),e==="fas"&&br("fa",t)}var Ht=ve.styles,Cu=ve.shims,ku=Object.values(vo),ta=null,ko={},Ao={},Eo={},Oo={},Mo={},Au=Object.keys(Gr);function Eu(e){return~iu.indexOf(e)}function Ou(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Eu(a)?a:null}var Po=function(){var t=function(i){return Xn(Ht,function(o,s,l){return o[l]=Xn(s,i,{}),o},{})};ko=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Ao=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Mo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Ht||I.autoFetchSvg,r=Xn(Cu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Eo=r.names,Oo=r.unicodes,ta=Rn(I.styleDefault)};cu(function(e){ta=Rn(e.styleDefault)});Po();function na(e,t){return(ko[e]||{})[t]}function Mu(e,t){return(Ao[e]||{})[t]}function pt(e,t){return(Mo[e]||{})[t]}function To(e){return Eo[e]||{prefix:null,iconName:null}}function Pu(e){var t=Oo[e],n=na("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ve(){return ta}var ra=function(){return{prefix:null,iconName:null,rest:[]}};function Rn(e){var t=Gr[e],n=wn[e]||wn[t],r=e in ve.styles?e:null;return n||r||null}function zn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=Ou(I.familyPrefix,s);if(Ht[s]?(s=ku.includes(s)?Qc[s]:s,a=s,o.prefix=s):Au.indexOf(s)>-1?(a=s,o.prefix=Rn(s)):l?o.iconName=l:s!==I.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var u=a==="fa"?To(o.iconName):{},d=pt(o.prefix,o.iconName);u.prefix&&(a=null),o.iconName=u.iconName||d||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!Ht.far&&Ht.fas&&!I.autoFetchSvg&&(o.prefix="fas")}return o},ra());return(i.prefix==="fa"||a==="fa")&&(i.prefix=Ve()||"fas"),i}var Tu=function(){function e(){Hc(this,e),this.definitions={}}return $c(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=k(k({},n.definitions[s]||{}),o[s]),br(s,o[s]);var l=vo[s];l&&br(l,o[s]),Po()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(h){typeof h=="string"&&(n[s][h]=u)}),n[s][l]=u}),n}}]),e}(),Za=[],gt={},wt={},Iu=Object.keys(wt);function Su(e,t){var n=t.mixoutsTo;return Za=e,gt={},Object.keys(wt).forEach(function(r){Iu.indexOf(r)===-1&&delete wt[r]}),Za.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),yn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){gt[o]||(gt[o]=[]),gt[o].push(i[o])})}r.provides&&r.provides(wt)}),n}function yr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=gt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ot(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=gt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Re(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return wt[e]?wt[e].apply(null,t):void 0}function wr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ve();if(!!t)return t=pt(n,t)||t,Va(Io.definitions,n,t)||Va(ve.styles,n,t)}var Io=new Tu,Lu=function(){I.autoReplaceSvg=!1,I.observeMutations=!1,ot("noAuto")},Nu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return je?(ot("beforeI2svg",t),Re("pseudoElements2svg",t),Re("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,yu(function(){Ru({autoReplaceSvgRoot:n}),ot("watch",t)})}},Fu={icon:function(t){if(t===null)return null;if(yn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:pt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Rn(t[0]);return{prefix:r,iconName:pt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(I.familyPrefix,"-"))>-1||t.match(eu))){var a=zn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Ve(),iconName:pt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Ve();return{prefix:i,iconName:pt(i,t)||t}}}},me={noAuto:Lu,config:I,dom:Nu,parse:Fu,library:Io,findIconDefinition:wr,toHtml:qt},Ru=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Z:n;(Object.keys(ve.styles).length>0||I.autoFetchSvg)&&je&&I.autoReplaceSvg&&me.dom.i2svg({node:r})};function jn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return qt(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!je){var r=Z.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function zu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(ea(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=Fn(k(k({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function ju(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(I.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:k(k({},a),{},{id:o}),children:r}]}]}function aa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,d=e.titleId,h=e.extra,b=e.watchable,A=b===void 0?!1:b,N=r.found?r:n,H=N.width,S=N.height,y=a==="fak",O=[I.replacementClass,i?"".concat(I.familyPrefix,"-").concat(i):""].filter(function(oe){return h.classes.indexOf(oe)===-1}).filter(function(oe){return oe!==""||!!oe}).concat(h.classes).join(" "),F={children:[],attributes:k(k({},h.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(H," ").concat(S)})},$=y&&!~h.classes.indexOf("fa-fw")?{width:"".concat(H/S*16*.0625,"em")}:{};A&&(F.attributes[it]=""),l&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(d||Kt())},children:[l]}),delete F.attributes.title);var K=k(k({},F),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:k(k({},$),h.styles)}),re=r.found&&n.found?Re("generateAbstractMask",K)||{children:[],attributes:{}}:Re("generateAbstractIcon",K)||{children:[],attributes:{}},fe=re.children,we=re.attributes;return K.children=fe,K.attributes=we,s?ju(K):zu(K)}function Ja(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=k(k(k({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[it]="");var d=k({},o.styles);ea(a)&&(d.transform=pu({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var h=Fn(d);h.length>0&&(u.style=h);var b=[];return b.push({tag:"span",attributes:u,children:[t]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function Du(e){var t=e.content,n=e.title,r=e.extra,a=k(k(k({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Fn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Zn=ve.styles;function xr(e){var t=e[0],n=e[1],r=e.slice(4),a=Vr(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(I.familyPrefix,"-").concat(et.GROUP)},children:[{tag:"path",attributes:{class:"".concat(I.familyPrefix,"-").concat(et.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(I.familyPrefix,"-").concat(et.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Hu={found:!1,width:512,height:512};function $u(e,t){!go&&!I.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function _r(e,t){var n=t;return t==="fa"&&I.styleDefault!==null&&(t=Ve()),new Promise(function(r,a){if(Re("missingIconAbstract"),n==="fa"){var i=To(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Zn[t]&&Zn[t][e]){var o=Zn[t][e];return r(xr(o))}$u(e,t),r(k(k({},Hu),{},{icon:I.showMissingIcons&&e?Re("missingIconAbstract")||{}:{}}))})}var Ga=function(){},Cr=I.measurePerformance&&tn&&tn.mark&&tn.measure?tn:{mark:Ga,measure:Ga},Nt='FA "6.1.1"',Wu=function(t){return Cr.mark("".concat(Nt," ").concat(t," begins")),function(){return So(t)}},So=function(t){Cr.mark("".concat(Nt," ").concat(t," ends")),Cr.measure("".concat(Nt," ").concat(t),"".concat(Nt," ").concat(t," begins"),"".concat(Nt," ").concat(t," ends"))},ia={begin:Wu,end:So},fn=function(){};function Qa(e){var t=e.getAttribute?e.getAttribute(it):null;return typeof t=="string"}function Uu(e){var t=e.getAttribute?e.getAttribute(Zr):null,n=e.getAttribute?e.getAttribute(Jr):null;return t&&n}function Bu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(I.replacementClass)}function Yu(){if(I.autoReplaceSvg===!0)return cn.replace;var e=cn[I.autoReplaceSvg];return e||cn.replace}function Ku(e){return Z.createElementNS("http://www.w3.org/2000/svg",e)}function qu(e){return Z.createElement(e)}function Lo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Ku:qu:n;if(typeof e=="string")return Z.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Lo(o,{ceFn:r}))}),a}function Vu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var cn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Lo(a),n)}),n.getAttribute(it)===null&&I.keepOriginalSource){var r=Z.createComment(Vu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Qr(n).indexOf(I.replacementClass))return cn.replace(t);var a=new RegExp("".concat(I.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===I.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return qt(s)}).join(`
`);n.setAttribute(it,""),n.innerHTML=o}};function ei(e){e()}function No(e,t){var n=typeof t=="function"?t:fn;if(e.length===0)n();else{var r=ei;I.mutateApproach===Jc&&(r=qe.requestAnimationFrame||ei),r(function(){var a=Yu(),i=ia.begin("mutate");e.map(a),i(),n()})}}var oa=!1;function Fo(){oa=!0}function kr(){oa=!1}var _n=null;function ti(e){if(!!Ya&&!!I.observeMutations){var t=e.treeCallback,n=t===void 0?fn:t,r=e.nodeCallback,a=r===void 0?fn:r,i=e.pseudoElementsCallback,o=i===void 0?fn:i,s=e.observeMutationsRoot,l=s===void 0?Z:s;_n=new Ya(function(u){if(!oa){var d=Ve();At(u).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!Qa(h.addedNodes[0])&&(I.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&I.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&Qa(h.target)&&~au.indexOf(h.attributeName))if(h.attributeName==="class"&&Uu(h.target)){var b=zn(Qr(h.target)),A=b.prefix,N=b.iconName;h.target.setAttribute(Zr,A||d),N&&h.target.setAttribute(Jr,N)}else Bu(h.target)&&a(h.target)})}}),je&&_n.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Xu(){!_n||_n.disconnect()}function Zu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Ju(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=zn(Qr(e));return a.prefix||(a.prefix=Ve()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||a.prefix&&r.length>0&&(a.iconName=Mu(a.prefix,e.innerText)||na(a.prefix,vr(e.innerText))),a}function Gu(e){var t=At(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return I.autoA11y&&(n?t["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(r||Kt()):(t["aria-hidden"]="true",t.focusable="false")),t}function Qu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Oe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ni(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ju(e),r=n.iconName,a=n.prefix,i=n.rest,o=Gu(e),s=yr("parseNodeAttributes",{},e),l=t.styleParser?Zu(e):[];return k({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Oe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var ed=ve.styles;function Ro(e){var t=I.autoReplaceSvg==="nest"?ni(e,{styleParser:!1}):ni(e);return~t.extra.classes.indexOf(bo)?Re("generateLayersText",e,t):Re("generateSvgReplacementMutation",e,t)}function ri(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!je)return Promise.resolve();var n=Z.documentElement.classList,r=function(h){return n.add("".concat(Ka,"-").concat(h))},a=function(h){return n.remove("".concat(Ka,"-").concat(h))},i=I.autoFetchSvg?Object.keys(Gr):Object.keys(ed),o=[".".concat(bo,":not([").concat(it,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(it,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=At(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ia.begin("onTree"),u=s.reduce(function(d,h){try{var b=Ro(h);b&&d.push(b)}catch(A){go||A.name==="MissingIcon"&&console.error(A)}return d},[]);return new Promise(function(d,h){Promise.all(u).then(function(b){No(b,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(b){l(),h(b)})})}function td(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ro(e).then(function(n){n&&No([n],t)})}function nd(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:wr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:wr(a||{})),e(r,k(k({},n),{},{mask:a}))}}var rd=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Oe:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,d=u===void 0?null:u,h=n.title,b=h===void 0?null:h,A=n.titleId,N=A===void 0?null:A,H=n.classes,S=H===void 0?[]:H,y=n.attributes,O=y===void 0?{}:y,F=n.styles,$=F===void 0?{}:F;if(!!t){var K=t.prefix,re=t.iconName,fe=t.icon;return jn(k({type:"icon"},t),function(){return ot("beforeDOMElementCreation",{iconDefinition:t,params:n}),I.autoA11y&&(b?O["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(N||Kt()):(O["aria-hidden"]="true",O.focusable="false")),aa({icons:{main:xr(fe),mask:l?xr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:K,iconName:re,transform:k(k({},Oe),a),symbol:o,title:b,maskId:d,titleId:N,extra:{attributes:O,styles:$,classes:S}})})}},ad={mixout:function(){return{icon:nd(rd)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ri,n.nodeCallback=td,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?Z:r,i=n.callback,o=i===void 0?function(){}:i;return ri(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,d=r.mask,h=r.maskId,b=r.extra;return new Promise(function(A,N){Promise.all([_r(a,s),d.iconName?_r(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(H){var S=Vr(H,2),y=S[0],O=S[1];A([n,aa({icons:{main:y,mask:O},prefix:s,iconName:a,transform:l,symbol:u,maskId:h,title:i,titleId:o,extra:b,watchable:!0})])}).catch(N)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Fn(s);l.length>0&&(a.style=l);var u;return ea(o)&&(u=Re("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},id={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return jn({type:"layer"},function(){ot("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(I.familyPrefix,"-layers")].concat(Nn(i)).join(" ")},children:o}]})}}}},od={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,d=r.styles,h=d===void 0?{}:d;return jn({type:"counter",content:n},function(){return ot("beforeDOMElementCreation",{content:n,params:r}),Du({content:n.toString(),title:i,extra:{attributes:u,styles:h,classes:["".concat(I.familyPrefix,"-layers-counter")].concat(Nn(s))}})})}}}},sd={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Oe:a,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,d=r.attributes,h=d===void 0?{}:d,b=r.styles,A=b===void 0?{}:b;return jn({type:"text",content:n},function(){return ot("beforeDOMElementCreation",{content:n,params:r}),Ja({content:n,transform:k(k({},Oe),i),title:s,extra:{attributes:h,styles:A,classes:["".concat(I.familyPrefix,"-layers-text")].concat(Nn(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(mo){var u=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/u,l=d.height/u}return I.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ja({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},ld=new RegExp('"',"ug"),ai=[1105920,1112319];function fd(e){var t=e.replace(ld,""),n=_u(t,0),r=n>=ai[0]&&n<=ai[1],a=t.length===2?t[0]===t[1]:!1;return{value:vr(a?t[0]:t),isSecondary:r||a}}function ii(e,t){var n="".concat(Zc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=At(e.children),o=i.filter(function(re){return re.getAttribute(gr)===t})[0],s=qe.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(tu),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var h=s.getPropertyValue("content"),b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?wn[l[2].toLowerCase()]:nu[u],A=fd(h),N=A.value,H=A.isSecondary,S=l[0].startsWith("FontAwesome"),y=na(b,N),O=y;if(S){var F=Pu(N);F.iconName&&F.prefix&&(y=F.iconName,b=F.prefix)}if(y&&!H&&(!o||o.getAttribute(Zr)!==b||o.getAttribute(Jr)!==O)){e.setAttribute(n,O),o&&e.removeChild(o);var $=Qu(),K=$.extra;K.attributes[gr]=t,_r(y,b).then(function(re){var fe=aa(k(k({},$),{},{icons:{main:re,mask:ra()},prefix:b,iconName:O,extra:K,watchable:!0})),we=Z.createElement("svg");t==="::before"?e.insertBefore(we,e.firstChild):e.appendChild(we),we.outerHTML=fe.map(function(oe){return qt(oe)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function cd(e){return Promise.all([ii(e,"::before"),ii(e,"::after")])}function ud(e){return e.parentNode!==document.head&&!~Gc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(gr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function oi(e){if(!!je)return new Promise(function(t,n){var r=At(e.querySelectorAll("*")).filter(ud).map(cd),a=ia.begin("searchPseudoElements");Fo(),Promise.all(r).then(function(){a(),kr(),t()}).catch(function(){a(),kr(),n()})})}var dd={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=oi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?Z:r;I.searchPseudoElements&&oi(a)}}},si=!1,md={mixout:function(){return{dom:{unwatch:function(){Fo(),si=!0}}}},hooks:function(){return{bootstrap:function(){ti(yr("mutationObserverCallbacks",{}))},noAuto:function(){Xu()},watch:function(n){var r=n.observeMutationsRoot;si?kr():ti(yr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},li=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},hd={mixout:function(){return{parse:{transform:function(n){return li(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=li(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),h={transform:"".concat(l," ").concat(u," ").concat(d)},b={transform:"translate(".concat(o/2*-1," -256)")},A={outer:s,inner:h,path:b};return{tag:"g",attributes:k({},A.outer),children:[{tag:"g",attributes:k({},A.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:k(k({},r.icon.attributes),A.path)}]}]}}}},Jn={x:0,y:0,width:"100%",height:"100%"};function fi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function pd(e){return e.tag==="g"?e.children:[e]}var gd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?zn(a.split(" ").map(function(o){return o.trim()})):ra();return i.prefix||(i.prefix=Ve()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,d=i.icon,h=o.width,b=o.icon,A=hu({transform:l,containerWidth:h,iconWidth:u}),N={tag:"rect",attributes:k(k({},Jn),{},{fill:"white"})},H=d.children?{children:d.children.map(fi)}:{},S={tag:"g",attributes:k({},A.inner),children:[fi(k({tag:d.tag,attributes:k(k({},d.attributes),A.path)},H))]},y={tag:"g",attributes:k({},A.outer),children:[S]},O="mask-".concat(s||Kt()),F="clip-".concat(s||Kt()),$={tag:"mask",attributes:k(k({},Jn),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[N,y]},K={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:pd(b)},$]};return r.push(K,{tag:"rect",attributes:k({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(O,")")},Jn)}),{children:r,attributes:a}}}},vd={provides:function(t){var n=!1;qe.matchMedia&&(n=qe.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:k(k({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=k(k({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:k(k({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:k(k({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:k(k({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:k(k({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:k(k({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:k(k({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:k(k({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},bd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},yd=[vu,ad,id,od,sd,dd,md,hd,gd,vd,bd];Su(yd,{mixoutsTo:me});me.noAuto;var zo=me.config,wd=me.library;me.dom;var jo=me.parse;me.findIconDefinition;me.toHtml;var xd=me.icon;me.layer;var _d=me.text;me.counter;/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Cd={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"]},kd=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Ad(e,t){return t={exports:{}},e(t,t.exports),t.exports}var Ed=Ad(function(e){(function(t){var n=function(y,O,F){if(!u(O)||h(O)||b(O)||A(O)||l(O))return O;var $,K=0,re=0;if(d(O))for($=[],re=O.length;K<re;K++)$.push(n(y,O[K],F));else{$={};for(var fe in O)Object.prototype.hasOwnProperty.call(O,fe)&&($[y(fe,F)]=n(y,O[fe],F))}return $},r=function(y,O){O=O||{};var F=O.separator||"_",$=O.split||/(?=[A-Z])/;return y.split($).join(F)},a=function(y){return N(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(O,F){return F?F.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var O=a(y);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(y,O){return r(y,O).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},u=function(y){return y===Object(y)},d=function(y){return s.call(y)=="[object Array]"},h=function(y){return s.call(y)=="[object Date]"},b=function(y){return s.call(y)=="[object RegExp]"},A=function(y){return s.call(y)=="[object Boolean]"},N=function(y){return y=y-0,y===y},H=function(y,O){var F=O&&"process"in O?O.process:O;return typeof F!="function"?y:function($,K){return F($,y,K)}},S={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,O){return n(H(a,O),y)},decamelizeKeys:function(y,O){return n(H(o,O),y,O)},pascalizeKeys:function(y,O){return n(H(i,O),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=S:t.humps=S})(kd)}),Od=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ft=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},Cn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Md=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(e,r)||(n[r]=e[r]);return n},Ar=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}else return Array.from(e)};function Pd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Ed.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Td(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function sa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return sa(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var d=e.attributes[u];switch(u){case"class":l.class=Td(d);break;case"style":l.style=Pd(d);break;default:l.attrs[u]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Md(n,["class","style"]);return oo(e.tag,Cn({},t,{class:a.class,style:Cn({},a.style,o)},a.attrs,s),r)}var Do=!1;try{Do=!0}catch{}function Id(){if(!Do&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function $t(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Ft({},e,t):{}}function Sd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Ft(t,"fa-"+e.size,e.size!==null),Ft(t,"fa-rotate-"+e.rotation,e.rotation!==null),Ft(t,"fa-pull-"+e.pull,e.pull!==null),Ft(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function ci(e){if(e===null)return null;if((typeof e=="undefined"?"undefined":Od(e))==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Ld=st({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(t){return["horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=he(function(){return ci(t.icon)}),i=he(function(){return $t("classes",Sd(t))}),o=he(function(){return $t("transform",typeof t.transform=="string"?jo.transform(t.transform):t.transform)}),s=he(function(){return $t("mask",ci(t.mask))}),l=he(function(){return xd(a.value,Cn({},i.value,o.value,s.value,{symbol:t.symbol,title:t.title}))});rn(l,function(d){if(!d)return Id("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var u=he(function(){return l.value?sa(l.value.abstract[0],{},r):null});return function(){return u.value}}});st({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=zo.familyPrefix,i=he(function(){return[a+"-layers"].concat(Ar(t.fixedWidth?[a+"-fw"]:[]))});return function(){return oo("div",{class:i.value},r.default?r.default():[])}}});st({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=zo.familyPrefix,i=he(function(){return $t("classes",[].concat(Ar(t.counter?[a+"-layers-counter"]:[]),Ar(t.position?[a+"-layers-"+t.position]:[])))}),o=he(function(){return $t("transform",typeof t.transform=="string"?jo.transform(t.transform):t.transform)}),s=he(function(){var u=_d(t.value.toString(),Cn({},o.value,i.value)),d=u.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=he(function(){return sa(s.value,{},r)});return function(){return l.value}}});wd.add(Cd);uf(Dc).component("icon",Ld).mount("#app");
