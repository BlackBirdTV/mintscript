const Bo=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}};Bo();function Er(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Wo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Uo=Er(Wo);function da(e){return!!e||e===""}function kn(e){if(z(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=te(r)?qo(r):kn(r);if(i)for(const a in i)t[a]=i[a]}return t}else{if(te(e))return e;if(Q(e))return e}}const Yo=/;(?![^(]*\))/g,Ko=/:(.+)/;function qo(e){const t={};return e.split(Yo).forEach(n=>{if(n){const r=n.split(Ko);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Or(e){let t="";if(te(e))t=e;else if(z(e))for(let n=0;n<e.length;n++){const r=Or(e[n]);r&&(t+=r+" ")}else if(Q(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Vo=e=>te(e)?e:e==null?"":z(e)||Q(e)&&(e.toString===ga||!D(e.toString))?JSON.stringify(e,ma,2):String(e),ma=(e,t)=>t&&t.__v_isRef?ma(e,t.value):bt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:ha(t)?{[`Set(${t.size})`]:[...t.values()]}:Q(t)&&!z(t)&&!va(t)?String(t):t,q={},vt=[],be=()=>{},Xo=()=>!1,Zo=/^on[^a-z]/,An=e=>Zo.test(e),Pr=e=>e.startsWith("onUpdate:"),ae=Object.assign,Sr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Jo=Object.prototype.hasOwnProperty,W=(e,t)=>Jo.call(e,t),z=Array.isArray,bt=e=>En(e)==="[object Map]",ha=e=>En(e)==="[object Set]",D=e=>typeof e=="function",te=e=>typeof e=="string",Tr=e=>typeof e=="symbol",Q=e=>e!==null&&typeof e=="object",pa=e=>Q(e)&&D(e.then)&&D(e.catch),ga=Object.prototype.toString,En=e=>ga.call(e),Go=e=>En(e).slice(8,-1),va=e=>En(e)==="[object Object]",Mr=e=>te(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,nn=Er(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),On=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Qo=/-(\w)/g,Pe=On(e=>e.replace(Qo,(t,n)=>n?n.toUpperCase():"")),es=/\B([A-Z])/g,xt=On(e=>e.replace(es,"-$1").toLowerCase()),Pn=On(e=>e.charAt(0).toUpperCase()+e.slice(1)),Wn=On(e=>e?`on${Pn(e)}`:""),un=(e,t)=>!Object.is(e,t),Un=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},dn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ts=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let pi;const ns=()=>pi||(pi=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Me;class rs{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Me&&(this.parent=Me,this.index=(Me.scopes||(Me.scopes=[])).push(this)-1)}run(t){if(this.active)try{return Me=this,t()}finally{Me=this.parent}}on(){Me=this}off(){Me=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function is(e,t=Me){t&&t.active&&t.effects.push(e)}const Ir=e=>{const t=new Set(e);return t.w=0,t.n=0,t},ba=e=>(e.w&Ke)>0,ya=e=>(e.n&Ke)>0,as=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ke},os=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];ba(i)&&!ya(i)?i.delete(e):t[n++]=i,i.w&=~Ke,i.n&=~Ke}t.length=n}},Gn=new WeakMap;let It=0,Ke=1;const Qn=30;let Ae;const tt=Symbol(""),er=Symbol("");class Nr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,is(this,r)}run(){if(!this.active)return this.fn();let t=Ae,n=Ue;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ae,Ae=this,Ue=!0,Ke=1<<++It,It<=Qn?as(this):gi(this),this.fn()}finally{It<=Qn&&os(this),Ke=1<<--It,Ae=this.parent,Ue=n,this.parent=void 0}}stop(){this.active&&(gi(this),this.onStop&&this.onStop(),this.active=!1)}}function gi(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ue=!0;const _a=[];function Ct(){_a.push(Ue),Ue=!1}function kt(){const e=_a.pop();Ue=e===void 0?!0:e}function de(e,t,n){if(Ue&&Ae){let r=Gn.get(e);r||Gn.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=Ir()),wa(i)}}function wa(e,t){let n=!1;It<=Qn?ya(e)||(e.n|=Ke,n=!ba(e)):n=!e.has(Ae),n&&(e.add(Ae),Ae.deps.push(e))}function Ne(e,t,n,r,i,a){const o=Gn.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&z(e))o.forEach((l,u)=>{(u==="length"||u>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":z(e)?Mr(n)&&s.push(o.get("length")):(s.push(o.get(tt)),bt(e)&&s.push(o.get(er)));break;case"delete":z(e)||(s.push(o.get(tt)),bt(e)&&s.push(o.get(er)));break;case"set":bt(e)&&s.push(o.get(tt));break}if(s.length===1)s[0]&&tr(s[0]);else{const l=[];for(const u of s)u&&l.push(...u);tr(Ir(l))}}function tr(e,t){for(const n of z(e)?e:[...e])(n!==Ae||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const ss=Er("__proto__,__v_isRef,__isVue"),xa=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(Tr)),ls=Lr(),cs=Lr(!1,!0),fs=Lr(!0),vi=us();function us(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let a=0,o=this.length;a<o;a++)de(r,"get",a+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(U)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ct();const r=U(this)[t].apply(this,n);return kt(),r}}),e}function Lr(e=!1,t=!1){return function(r,i,a){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&a===(e?t?Os:Oa:t?Ea:Aa).get(r))return r;const o=z(r);if(!e&&o&&W(vi,i))return Reflect.get(vi,i,a);const s=Reflect.get(r,i,a);return(Tr(i)?xa.has(i):ss(i))||(e||de(r,"get",i),t)?s:ne(s)?!o||!Mr(i)?s.value:s:Q(s)?e?Pa(s):jr(s):s}}const ds=Ca(),ms=Ca(!0);function Ca(e=!1){return function(n,r,i,a){let o=n[r];if(Bt(o)&&ne(o)&&!ne(i))return!1;if(!e&&!Bt(i)&&(Sa(i)||(i=U(i),o=U(o)),!z(n)&&ne(o)&&!ne(i)))return o.value=i,!0;const s=z(n)&&Mr(r)?Number(r)<n.length:W(n,r),l=Reflect.set(n,r,i,a);return n===U(a)&&(s?un(i,o)&&Ne(n,"set",r,i):Ne(n,"add",r,i)),l}}function hs(e,t){const n=W(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ne(e,"delete",t,void 0),r}function ps(e,t){const n=Reflect.has(e,t);return(!Tr(t)||!xa.has(t))&&de(e,"has",t),n}function gs(e){return de(e,"iterate",z(e)?"length":tt),Reflect.ownKeys(e)}const ka={get:ls,set:ds,deleteProperty:hs,has:ps,ownKeys:gs},vs={get:fs,set(e,t){return!0},deleteProperty(e,t){return!0}},bs=ae({},ka,{get:cs,set:ms}),Fr=e=>e,Sn=e=>Reflect.getPrototypeOf(e);function Zt(e,t,n=!1,r=!1){e=e.__v_raw;const i=U(e),a=U(t);t!==a&&!n&&de(i,"get",t),!n&&de(i,"get",a);const{has:o}=Sn(i),s=r?Fr:n?Hr:Dr;if(o.call(i,t))return s(e.get(t));if(o.call(i,a))return s(e.get(a));e!==i&&e.get(t)}function Jt(e,t=!1){const n=this.__v_raw,r=U(n),i=U(e);return e!==i&&!t&&de(r,"has",e),!t&&de(r,"has",i),e===i?n.has(e):n.has(e)||n.has(i)}function Gt(e,t=!1){return e=e.__v_raw,!t&&de(U(e),"iterate",tt),Reflect.get(e,"size",e)}function bi(e){e=U(e);const t=U(this);return Sn(t).has.call(t,e)||(t.add(e),Ne(t,"add",e,e)),this}function yi(e,t){t=U(t);const n=U(this),{has:r,get:i}=Sn(n);let a=r.call(n,e);a||(e=U(e),a=r.call(n,e));const o=i.call(n,e);return n.set(e,t),a?un(t,o)&&Ne(n,"set",e,t):Ne(n,"add",e,t),this}function _i(e){const t=U(this),{has:n,get:r}=Sn(t);let i=n.call(t,e);i||(e=U(e),i=n.call(t,e)),r&&r.call(t,e);const a=t.delete(e);return i&&Ne(t,"delete",e,void 0),a}function wi(){const e=U(this),t=e.size!==0,n=e.clear();return t&&Ne(e,"clear",void 0,void 0),n}function Qt(e,t){return function(r,i){const a=this,o=a.__v_raw,s=U(o),l=t?Fr:e?Hr:Dr;return!e&&de(s,"iterate",tt),o.forEach((u,d)=>r.call(i,l(u),l(d),a))}}function en(e,t,n){return function(...r){const i=this.__v_raw,a=U(i),o=bt(a),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=i[e](...r),d=n?Fr:t?Hr:Dr;return!t&&de(a,"iterate",l?er:tt),{next(){const{value:h,done:y}=u.next();return y?{value:h,done:y}:{value:s?[d(h[0]),d(h[1])]:d(h),done:y}},[Symbol.iterator](){return this}}}}function He(e){return function(...t){return e==="delete"?!1:this}}function ys(){const e={get(a){return Zt(this,a)},get size(){return Gt(this)},has:Jt,add:bi,set:yi,delete:_i,clear:wi,forEach:Qt(!1,!1)},t={get(a){return Zt(this,a,!1,!0)},get size(){return Gt(this)},has:Jt,add:bi,set:yi,delete:_i,clear:wi,forEach:Qt(!1,!0)},n={get(a){return Zt(this,a,!0)},get size(){return Gt(this,!0)},has(a){return Jt.call(this,a,!0)},add:He("add"),set:He("set"),delete:He("delete"),clear:He("clear"),forEach:Qt(!0,!1)},r={get(a){return Zt(this,a,!0,!0)},get size(){return Gt(this,!0)},has(a){return Jt.call(this,a,!0)},add:He("add"),set:He("set"),delete:He("delete"),clear:He("clear"),forEach:Qt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=en(a,!1,!1),n[a]=en(a,!0,!1),t[a]=en(a,!1,!0),r[a]=en(a,!0,!0)}),[e,n,t,r]}const[_s,ws,xs,Cs]=ys();function Rr(e,t){const n=t?e?Cs:xs:e?ws:_s;return(r,i,a)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(W(n,i)&&i in r?n:r,i,a)}const ks={get:Rr(!1,!1)},As={get:Rr(!1,!0)},Es={get:Rr(!0,!1)},Aa=new WeakMap,Ea=new WeakMap,Oa=new WeakMap,Os=new WeakMap;function Ps(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ss(e){return e.__v_skip||!Object.isExtensible(e)?0:Ps(Go(e))}function jr(e){return Bt(e)?e:zr(e,!1,ka,ks,Aa)}function Ts(e){return zr(e,!1,bs,As,Ea)}function Pa(e){return zr(e,!0,vs,Es,Oa)}function zr(e,t,n,r,i){if(!Q(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=i.get(e);if(a)return a;const o=Ss(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function yt(e){return Bt(e)?yt(e.__v_raw):!!(e&&e.__v_isReactive)}function Bt(e){return!!(e&&e.__v_isReadonly)}function Sa(e){return!!(e&&e.__v_isShallow)}function Ta(e){return yt(e)||Bt(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function Ma(e){return dn(e,"__v_skip",!0),e}const Dr=e=>Q(e)?jr(e):e,Hr=e=>Q(e)?Pa(e):e;function Ms(e){Ue&&Ae&&(e=U(e),wa(e.dep||(e.dep=Ir())))}function Is(e,t){e=U(e),e.dep&&tr(e.dep)}function ne(e){return!!(e&&e.__v_isRef===!0)}function Ns(e){return ne(e)?e.value:e}const Ls={get:(e,t,n)=>Ns(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return ne(i)&&!ne(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Ia(e){return yt(e)?e:new Proxy(e,Ls)}class Fs{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Nr(t,()=>{this._dirty||(this._dirty=!0,Is(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=U(this);return Ms(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Rs(e,t,n=!1){let r,i;const a=D(e);return a?(r=e,i=be):(r=e.get,i=e.set),new Fs(r,i,a||!i,n)}Promise.resolve();function Ye(e,t,n,r){let i;try{i=r?e(...r):e()}catch(a){Tn(a,t,n)}return i}function ye(e,t,n,r){if(D(e)){const a=Ye(e,t,n,r);return a&&pa(a)&&a.catch(o=>{Tn(o,t,n)}),a}const i=[];for(let a=0;a<e.length;a++)i.push(ye(e[a],t,n,r));return i}function Tn(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let a=t.parent;const o=t.proxy,s=n;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,o,s)===!1)return}a=a.parent}const l=t.appContext.config.errorHandler;if(l){Ye(l,null,10,[e,o,s]);return}}js(e,n,i,r)}function js(e,t,n,r=!0){console.error(e)}let mn=!1,nr=!1;const ue=[];let Ie=0;const Rt=[];let Nt=null,dt=0;const jt=[];let Be=null,mt=0;const Na=Promise.resolve();let $r=null,rr=null;function zs(e){const t=$r||Na;return e?t.then(this?e.bind(this):e):t}function Ds(e){let t=Ie+1,n=ue.length;for(;t<n;){const r=t+n>>>1;Wt(ue[r])<e?t=r+1:n=r}return t}function La(e){(!ue.length||!ue.includes(e,mn&&e.allowRecurse?Ie+1:Ie))&&e!==rr&&(e.id==null?ue.push(e):ue.splice(Ds(e.id),0,e),Fa())}function Fa(){!mn&&!nr&&(nr=!0,$r=Na.then(za))}function Hs(e){const t=ue.indexOf(e);t>Ie&&ue.splice(t,1)}function Ra(e,t,n,r){z(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),Fa()}function $s(e){Ra(e,Nt,Rt,dt)}function Bs(e){Ra(e,Be,jt,mt)}function Br(e,t=null){if(Rt.length){for(rr=t,Nt=[...new Set(Rt)],Rt.length=0,dt=0;dt<Nt.length;dt++)Nt[dt]();Nt=null,dt=0,rr=null,Br(e,t)}}function ja(e){if(jt.length){const t=[...new Set(jt)];if(jt.length=0,Be){Be.push(...t);return}for(Be=t,Be.sort((n,r)=>Wt(n)-Wt(r)),mt=0;mt<Be.length;mt++)Be[mt]();Be=null,mt=0}}const Wt=e=>e.id==null?1/0:e.id;function za(e){nr=!1,mn=!0,Br(e),ue.sort((n,r)=>Wt(n)-Wt(r));const t=be;try{for(Ie=0;Ie<ue.length;Ie++){const n=ue[Ie];n&&n.active!==!1&&Ye(n,null,14)}}finally{Ie=0,ue.length=0,ja(),mn=!1,$r=null,(ue.length||Rt.length||jt.length)&&za(e)}}function Ws(e,t,...n){const r=e.vnode.props||q;let i=n;const a=t.startsWith("update:"),o=a&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:y}=r[d]||q;y?i=n.map(E=>E.trim()):h&&(i=n.map(ts))}let s,l=r[s=Wn(t)]||r[s=Wn(Pe(t))];!l&&a&&(l=r[s=Wn(xt(t))]),l&&ye(l,e,6,i);const u=r[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,ye(u,e,6,i)}}function Da(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const a=e.emits;let o={},s=!1;if(!D(e)){const l=u=>{const d=Da(u,t,!0);d&&(s=!0,ae(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!a&&!s?(r.set(e,null),null):(z(a)?a.forEach(l=>o[l]=null):ae(o,a),r.set(e,o),o)}function Wr(e,t){return!e||!An(t)?!1:(t=t.slice(2).replace(/Once$/,""),W(e,t[0].toLowerCase()+t.slice(1))||W(e,xt(t))||W(e,t))}let Ee=null,Ha=null;function hn(e){const t=Ee;return Ee=e,Ha=e&&e.type.__scopeId||null,t}function Us(e,t=Ee,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&Mi(-1);const a=hn(t),o=e(...i);return hn(a),r._d&&Mi(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Yn(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:a,propsOptions:[o],slots:s,attrs:l,emit:u,render:d,renderCache:h,data:y,setupState:E,ctx:R,inheritAttrs:H}=e;let L,_;const S=hn(e);try{if(n.shapeFlag&4){const $=i||r;L=ke(d.call($,$,h,a,E,y,R)),_=l}else{const $=t;L=ke($.length>1?$(a,{attrs:l,slots:s,emit:u}):$(a,null)),_=t.props?l:Ys(l)}}catch($){zt.length=0,Tn($,e,1),L=P(it)}let j=L;if(_&&H!==!1){const $=Object.keys(_),{shapeFlag:K}=j;$.length&&K&7&&(o&&$.some(Pr)&&(_=Ks(_,o)),j=Ut(j,_))}return n.dirs&&(j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),L=j,hn(S),L}const Ys=e=>{let t;for(const n in e)(n==="class"||n==="style"||An(n))&&((t||(t={}))[n]=e[n]);return t},Ks=(e,t)=>{const n={};for(const r in e)(!Pr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function qs(e,t,n){const{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:l}=t,u=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?xi(r,o,u):!!o;if(l&8){const d=t.dynamicProps;for(let h=0;h<d.length;h++){const y=d[h];if(o[y]!==r[y]&&!Wr(u,y))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?xi(r,o,u):!0:!!o;return!1}function xi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const a=r[i];if(t[a]!==e[a]&&!Wr(n,a))return!0}return!1}function Vs({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Xs=e=>e.__isSuspense;function Zs(e,t){t&&t.pendingBranch?z(e)?t.effects.push(...e):t.effects.push(e):Bs(e)}function Js(e,t){if(ee){let n=ee.provides;const r=ee.parent&&ee.parent.provides;r===n&&(n=ee.provides=Object.create(r)),n[e]=t}}function Kn(e,t,n=!1){const r=ee||Ee;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&D(t)?t.call(r.proxy):t}}const Ci={};function rn(e,t,n){return $a(e,t,n)}function $a(e,t,{immediate:n,deep:r,flush:i,onTrack:a,onTrigger:o}=q){const s=ee;let l,u=!1,d=!1;if(ne(e)?(l=()=>e.value,u=Sa(e)):yt(e)?(l=()=>e,r=!0):z(e)?(d=!0,u=e.some(yt),l=()=>e.map(_=>{if(ne(_))return _.value;if(yt(_))return ht(_);if(D(_))return Ye(_,s,2)})):D(e)?t?l=()=>Ye(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return h&&h(),ye(e,s,3,[y])}:l=be,t&&r){const _=l;l=()=>ht(_())}let h,y=_=>{h=L.onStop=()=>{Ye(_,s,4)}};if(Yt)return y=be,t?n&&ye(t,s,3,[l(),d?[]:void 0,y]):l(),be;let E=d?[]:Ci;const R=()=>{if(!!L.active)if(t){const _=L.run();(r||u||(d?_.some((S,j)=>un(S,E[j])):un(_,E)))&&(h&&h(),ye(t,s,3,[_,E===Ci?void 0:E,y]),E=_)}else L.run()};R.allowRecurse=!!t;let H;i==="sync"?H=R:i==="post"?H=()=>le(R,s&&s.suspense):H=()=>{!s||s.isMounted?$s(R):R()};const L=new Nr(l,H);return t?n?R():E=L.run():i==="post"?le(L.run.bind(L),s&&s.suspense):L.run(),()=>{L.stop(),s&&s.scope&&Sr(s.scope.effects,L)}}function Gs(e,t,n){const r=this.proxy,i=te(e)?e.includes(".")?Ba(r,e):()=>r[e]:e.bind(r,r);let a;D(t)?a=t:(a=t.handler,n=t);const o=ee;wt(this);const s=$a(i,a.bind(r),n);return o?wt(o):rt(),s}function Ba(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function ht(e,t){if(!Q(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ne(e))ht(e.value,t);else if(z(e))for(let n=0;n<e.length;n++)ht(e[n],t);else if(ha(e)||bt(e))e.forEach(n=>{ht(n,t)});else if(va(e))for(const n in e)ht(e[n],t);return e}function st(e){return D(e)?{setup:e,name:e.name}:e}const ir=e=>!!e.type.__asyncLoader,Wa=e=>e.type.__isKeepAlive;function Qs(e,t){Ua(e,"a",t)}function el(e,t){Ua(e,"da",t)}function Ua(e,t,n=ee){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Mn(t,r,n),n){let i=n.parent;for(;i&&i.parent;)Wa(i.parent.vnode)&&tl(r,t,n,i),i=i.parent}}function tl(e,t,n,r){const i=Mn(t,e,r,!0);Ya(()=>{Sr(r[t],i)},n)}function Mn(e,t,n=ee,r=!1){if(n){const i=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Ct(),wt(n);const s=ye(t,n,e,o);return rt(),kt(),s});return r?i.unshift(a):i.push(a),a}}const je=e=>(t,n=ee)=>(!Yt||e==="sp")&&Mn(e,t,n),nl=je("bm"),rl=je("m"),il=je("bu"),al=je("u"),ol=je("bum"),Ya=je("um"),sl=je("sp"),ll=je("rtg"),cl=je("rtc");function fl(e,t=ee){Mn("ec",e,t)}let ar=!0;function ul(e){const t=qa(e),n=e.proxy,r=e.ctx;ar=!1,t.beforeCreate&&ki(t.beforeCreate,e,"bc");const{data:i,computed:a,methods:o,watch:s,provide:l,inject:u,created:d,beforeMount:h,mounted:y,beforeUpdate:E,updated:R,activated:H,deactivated:L,beforeDestroy:_,beforeUnmount:S,destroyed:j,unmounted:$,render:K,renderTracked:re,renderTriggered:ce,errorCaptured:_e,serverPrefetch:oe,expose:Et,inheritAttrs:lt,components:Ot,directives:Vt,filters:ci}=t;if(u&&dl(u,r,null,e.appContext.config.unwrapInjectedRef),o)for(const G in o){const V=o[G];D(V)&&(r[G]=V.bind(n))}if(i){const G=i.call(n,n);Q(G)&&(e.data=jr(G))}if(ar=!0,a)for(const G in a){const V=a[G],Se=D(V)?V.bind(n,n):D(V.get)?V.get.bind(n,n):be,Hn=!D(V)&&D(V.set)?V.set.bind(n):be,Pt=he({get:Se,set:Hn});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>Pt.value,set:ct=>Pt.value=ct})}if(s)for(const G in s)Ka(s[G],r,n,G);if(l){const G=D(l)?l.call(n):l;Reflect.ownKeys(G).forEach(V=>{Js(V,G[V])})}d&&ki(d,e,"c");function se(G,V){z(V)?V.forEach(Se=>G(Se.bind(n))):V&&G(V.bind(n))}if(se(nl,h),se(rl,y),se(il,E),se(al,R),se(Qs,H),se(el,L),se(fl,_e),se(cl,re),se(ll,ce),se(ol,S),se(Ya,$),se(sl,oe),z(Et))if(Et.length){const G=e.exposed||(e.exposed={});Et.forEach(V=>{Object.defineProperty(G,V,{get:()=>n[V],set:Se=>n[V]=Se})})}else e.exposed||(e.exposed={});K&&e.render===be&&(e.render=K),lt!=null&&(e.inheritAttrs=lt),Ot&&(e.components=Ot),Vt&&(e.directives=Vt)}function dl(e,t,n=be,r=!1){z(e)&&(e=or(e));for(const i in e){const a=e[i];let o;Q(a)?"default"in a?o=Kn(a.from||i,a.default,!0):o=Kn(a.from||i):o=Kn(a),ne(o)&&r?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[i]=o}}function ki(e,t,n){ye(z(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ka(e,t,n,r){const i=r.includes(".")?Ba(n,r):()=>n[r];if(te(e)){const a=t[e];D(a)&&rn(i,a)}else if(D(e))rn(i,e.bind(n));else if(Q(e))if(z(e))e.forEach(a=>Ka(a,t,n,r));else{const a=D(e.handler)?e.handler.bind(n):t[e.handler];D(a)&&rn(i,a,e)}}function qa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t);let l;return s?l=s:!i.length&&!n&&!r?l=t:(l={},i.length&&i.forEach(u=>pn(l,u,o,!0)),pn(l,t,o)),a.set(t,l),l}function pn(e,t,n,r=!1){const{mixins:i,extends:a}=t;a&&pn(e,a,n,!0),i&&i.forEach(o=>pn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=ml[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const ml={data:Ai,props:Je,emits:Je,methods:Je,computed:Je,beforeCreate:ie,created:ie,beforeMount:ie,mounted:ie,beforeUpdate:ie,updated:ie,beforeDestroy:ie,beforeUnmount:ie,destroyed:ie,unmounted:ie,activated:ie,deactivated:ie,errorCaptured:ie,serverPrefetch:ie,components:Je,directives:Je,watch:pl,provide:Ai,inject:hl};function Ai(e,t){return t?e?function(){return ae(D(e)?e.call(this,this):e,D(t)?t.call(this,this):t)}:t:e}function hl(e,t){return Je(or(e),or(t))}function or(e){if(z(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ie(e,t){return e?[...new Set([].concat(e,t))]:t}function Je(e,t){return e?ae(ae(Object.create(null),e),t):t}function pl(e,t){if(!e)return t;if(!t)return e;const n=ae(Object.create(null),e);for(const r in t)n[r]=ie(e[r],t[r]);return n}function gl(e,t,n,r=!1){const i={},a={};dn(a,In,1),e.propsDefaults=Object.create(null),Va(e,t,i,a);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:Ts(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function vl(e,t,n,r){const{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=U(i),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let h=0;h<d.length;h++){let y=d[h];const E=t[y];if(l)if(W(a,y))E!==a[y]&&(a[y]=E,u=!0);else{const R=Pe(y);i[R]=sr(l,s,R,E,e,!1)}else E!==a[y]&&(a[y]=E,u=!0)}}}else{Va(e,t,i,a)&&(u=!0);let d;for(const h in s)(!t||!W(t,h)&&((d=xt(h))===h||!W(t,d)))&&(l?n&&(n[h]!==void 0||n[d]!==void 0)&&(i[h]=sr(l,s,h,void 0,e,!0)):delete i[h]);if(a!==s)for(const h in a)(!t||!W(t,h)&&!0)&&(delete a[h],u=!0)}u&&Ne(e,"set","$attrs")}function Va(e,t,n,r){const[i,a]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(nn(l))continue;const u=t[l];let d;i&&W(i,d=Pe(l))?!a||!a.includes(d)?n[d]=u:(s||(s={}))[d]=u:Wr(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(a){const l=U(n),u=s||q;for(let d=0;d<a.length;d++){const h=a[d];n[h]=sr(i,l,h,u[h],e,!W(u,h))}}return o}function sr(e,t,n,r,i,a){const o=e[n];if(o!=null){const s=W(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&D(l)){const{propsDefaults:u}=i;n in u?r=u[n]:(wt(i),r=u[n]=l.call(null,t),rt())}else r=l}o[0]&&(a&&!s?r=!1:o[1]&&(r===""||r===xt(n))&&(r=!0))}return r}function Xa(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const a=e.props,o={},s=[];let l=!1;if(!D(e)){const d=h=>{l=!0;const[y,E]=Xa(h,t,!0);ae(o,y),E&&s.push(...E)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!a&&!l)return r.set(e,vt),vt;if(z(a))for(let d=0;d<a.length;d++){const h=Pe(a[d]);Ei(h)&&(o[h]=q)}else if(a)for(const d in a){const h=Pe(d);if(Ei(h)){const y=a[d],E=o[h]=z(y)||D(y)?{type:y}:y;if(E){const R=Si(Boolean,E.type),H=Si(String,E.type);E[0]=R>-1,E[1]=H<0||R<H,(R>-1||W(E,"default"))&&s.push(h)}}}const u=[o,s];return r.set(e,u),u}function Ei(e){return e[0]!=="$"}function Oi(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Pi(e,t){return Oi(e)===Oi(t)}function Si(e,t){return z(t)?t.findIndex(n=>Pi(n,e)):D(t)&&Pi(t,e)?0:-1}const Za=e=>e[0]==="_"||e==="$stable",Ur=e=>z(e)?e.map(ke):[ke(e)],bl=(e,t,n)=>{const r=Us((...i)=>Ur(t(...i)),n);return r._c=!1,r},Ja=(e,t,n)=>{const r=e._ctx;for(const i in e){if(Za(i))continue;const a=e[i];if(D(a))t[i]=bl(i,a,r);else if(a!=null){const o=Ur(a);t[i]=()=>o}}},Ga=(e,t)=>{const n=Ur(t);e.slots.default=()=>n},yl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),dn(t,"_",n)):Ja(t,e.slots={})}else e.slots={},t&&Ga(e,t);dn(e.slots,In,1)},_l=(e,t,n)=>{const{vnode:r,slots:i}=e;let a=!0,o=q;if(r.shapeFlag&32){const s=t._;s?n&&s===1?a=!1:(ae(i,t),!n&&s===1&&delete i._):(a=!t.$stable,Ja(t,i)),o=t}else t&&(Ga(e,t),o={default:1});if(a)for(const s in i)!Za(s)&&!(s in o)&&delete i[s]};function Xe(e,t,n,r){const i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){const s=i[o];a&&(s.oldValue=a[o].value);let l=s.dir[r];l&&(Ct(),ye(l,n,8,[e.el,s,e,t]),kt())}}function Qa(){return{app:null,config:{isNativeTag:Xo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wl=0;function xl(e,t){return function(r,i=null){i!=null&&!Q(i)&&(i=null);const a=Qa(),o=new Set;let s=!1;const l=a.app={_uid:wl++,_component:r,_props:i,_container:null,_context:a,_instance:null,version:Wl,get config(){return a.config},set config(u){},use(u,...d){return o.has(u)||(u&&D(u.install)?(o.add(u),u.install(l,...d)):D(u)&&(o.add(u),u(l,...d))),l},mixin(u){return a.mixins.includes(u)||a.mixins.push(u),l},component(u,d){return d?(a.components[u]=d,l):a.components[u]},directive(u,d){return d?(a.directives[u]=d,l):a.directives[u]},mount(u,d,h){if(!s){const y=P(r,i);return y.appContext=a,d&&t?t(y,u):e(y,u,h),s=!0,l._container=u,u.__vue_app__=l,Vr(y.component)||y.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,d){return a.provides[u]=d,l}};return l}}function lr(e,t,n,r,i=!1){if(z(e)){e.forEach((y,E)=>lr(y,t&&(z(t)?t[E]:t),n,r,i));return}if(ir(r)&&!i)return;const a=r.shapeFlag&4?Vr(r.component)||r.component.proxy:r.el,o=i?null:a,{i:s,r:l}=e,u=t&&t.r,d=s.refs===q?s.refs={}:s.refs,h=s.setupState;if(u!=null&&u!==l&&(te(u)?(d[u]=null,W(h,u)&&(h[u]=null)):ne(u)&&(u.value=null)),D(l))Ye(l,s,12,[o,d]);else{const y=te(l),E=ne(l);if(y||E){const R=()=>{if(e.f){const H=y?d[l]:l.value;i?z(H)&&Sr(H,a):z(H)?H.includes(a)||H.push(a):y?d[l]=[a]:(l.value=[a],e.k&&(d[e.k]=l.value))}else y?(d[l]=o,W(h,l)&&(h[l]=o)):ne(l)&&(l.value=o,e.k&&(d[e.k]=o))};o?(R.id=-1,le(R,n)):R()}}}const le=Zs;function Cl(e){return kl(e)}function kl(e,t){const n=ns();n.__VUE__=!0;const{insert:r,remove:i,patchProp:a,createElement:o,createText:s,createComment:l,setText:u,setElementText:d,parentNode:h,nextSibling:y,setScopeId:E=be,cloneNode:R,insertStaticContent:H}=e,L=(c,f,m,v=null,g=null,x=null,k=!1,w=null,C=!!f.dynamicChildren)=>{if(c===f)return;c&&!Tt(c,f)&&(v=Xt(c),De(c,g,x,!0),c=null),f.patchFlag===-2&&(C=!1,f.dynamicChildren=null);const{type:b,ref:M,shapeFlag:T}=f;switch(b){case Yr:_(c,f,m,v);break;case it:S(c,f,m,v);break;case on:c==null&&j(f,m,v,k);break;case ge:Vt(c,f,m,v,g,x,k,w,C);break;default:T&1?re(c,f,m,v,g,x,k,w,C):T&6?ci(c,f,m,v,g,x,k,w,C):(T&64||T&128)&&b.process(c,f,m,v,g,x,k,w,C,ft)}M!=null&&g&&lr(M,c&&c.ref,x,f||c,!f)},_=(c,f,m,v)=>{if(c==null)r(f.el=s(f.children),m,v);else{const g=f.el=c.el;f.children!==c.children&&u(g,f.children)}},S=(c,f,m,v)=>{c==null?r(f.el=l(f.children||""),m,v):f.el=c.el},j=(c,f,m,v)=>{[c.el,c.anchor]=H(c.children,f,m,v,c.el,c.anchor)},$=({el:c,anchor:f},m,v)=>{let g;for(;c&&c!==f;)g=y(c),r(c,m,v),c=g;r(f,m,v)},K=({el:c,anchor:f})=>{let m;for(;c&&c!==f;)m=y(c),i(c),c=m;i(f)},re=(c,f,m,v,g,x,k,w,C)=>{k=k||f.type==="svg",c==null?ce(f,m,v,g,x,k,w,C):Et(c,f,g,x,k,w,C)},ce=(c,f,m,v,g,x,k,w)=>{let C,b;const{type:M,props:T,shapeFlag:I,transition:F,patchFlag:B,dirs:J}=c;if(c.el&&R!==void 0&&B===-1)C=c.el=R(c.el);else{if(C=c.el=o(c.type,x,T&&T.is,T),I&8?d(C,c.children):I&16&&oe(c.children,C,null,v,g,x&&M!=="foreignObject",k,w),J&&Xe(c,null,v,"created"),T){for(const X in T)X!=="value"&&!nn(X)&&a(C,X,null,T[X],x,c.children,v,g,Te);"value"in T&&a(C,"value",null,T.value),(b=T.onVnodeBeforeMount)&&xe(b,v,c)}_e(C,c,c.scopeId,k,v)}J&&Xe(c,null,v,"beforeMount");const Y=(!g||g&&!g.pendingBranch)&&F&&!F.persisted;Y&&F.beforeEnter(C),r(C,f,m),((b=T&&T.onVnodeMounted)||Y||J)&&le(()=>{b&&xe(b,v,c),Y&&F.enter(C),J&&Xe(c,null,v,"mounted")},g)},_e=(c,f,m,v,g)=>{if(m&&E(c,m),v)for(let x=0;x<v.length;x++)E(c,v[x]);if(g){let x=g.subTree;if(f===x){const k=g.vnode;_e(c,k,k.scopeId,k.slotScopeIds,g.parent)}}},oe=(c,f,m,v,g,x,k,w,C=0)=>{for(let b=C;b<c.length;b++){const M=c[b]=w?We(c[b]):ke(c[b]);L(null,M,f,m,v,g,x,k,w)}},Et=(c,f,m,v,g,x,k)=>{const w=f.el=c.el;let{patchFlag:C,dynamicChildren:b,dirs:M}=f;C|=c.patchFlag&16;const T=c.props||q,I=f.props||q;let F;m&&Ze(m,!1),(F=I.onVnodeBeforeUpdate)&&xe(F,m,f,c),M&&Xe(f,c,m,"beforeUpdate"),m&&Ze(m,!0);const B=g&&f.type!=="foreignObject";if(b?lt(c.dynamicChildren,b,w,m,v,B,x):k||Se(c,f,w,null,m,v,B,x,!1),C>0){if(C&16)Ot(w,f,T,I,m,v,g);else if(C&2&&T.class!==I.class&&a(w,"class",null,I.class,g),C&4&&a(w,"style",T.style,I.style,g),C&8){const J=f.dynamicProps;for(let Y=0;Y<J.length;Y++){const X=J[Y],pe=T[X],ut=I[X];(ut!==pe||X==="value")&&a(w,X,pe,ut,g,c.children,m,v,Te)}}C&1&&c.children!==f.children&&d(w,f.children)}else!k&&b==null&&Ot(w,f,T,I,m,v,g);((F=I.onVnodeUpdated)||M)&&le(()=>{F&&xe(F,m,f,c),M&&Xe(f,c,m,"updated")},v)},lt=(c,f,m,v,g,x,k)=>{for(let w=0;w<f.length;w++){const C=c[w],b=f[w],M=C.el&&(C.type===ge||!Tt(C,b)||C.shapeFlag&70)?h(C.el):m;L(C,b,M,null,v,g,x,k,!0)}},Ot=(c,f,m,v,g,x,k)=>{if(m!==v){for(const w in v){if(nn(w))continue;const C=v[w],b=m[w];C!==b&&w!=="value"&&a(c,w,b,C,k,f.children,g,x,Te)}if(m!==q)for(const w in m)!nn(w)&&!(w in v)&&a(c,w,m[w],null,k,f.children,g,x,Te);"value"in v&&a(c,"value",m.value,v.value)}},Vt=(c,f,m,v,g,x,k,w,C)=>{const b=f.el=c?c.el:s(""),M=f.anchor=c?c.anchor:s("");let{patchFlag:T,dynamicChildren:I,slotScopeIds:F}=f;F&&(w=w?w.concat(F):F),c==null?(r(b,m,v),r(M,m,v),oe(f.children,m,M,g,x,k,w,C)):T>0&&T&64&&I&&c.dynamicChildren?(lt(c.dynamicChildren,I,m,g,x,k,w),(f.key!=null||g&&f===g.subTree)&&eo(c,f,!0)):Se(c,f,m,M,g,x,k,w,C)},ci=(c,f,m,v,g,x,k,w,C)=>{f.slotScopeIds=w,c==null?f.shapeFlag&512?g.ctx.activate(f,m,v,k,C):Dn(f,m,v,g,x,k,C):se(c,f,C)},Dn=(c,f,m,v,g,x,k)=>{const w=c.component=Rl(c,v,g);if(Wa(c)&&(w.ctx.renderer=ft),jl(w),w.asyncDep){if(g&&g.registerDep(w,G),!c.el){const C=w.subTree=P(it);S(null,C,f,m)}return}G(w,c,f,m,g,x,k)},se=(c,f,m)=>{const v=f.component=c.component;if(qs(c,f,m))if(v.asyncDep&&!v.asyncResolved){V(v,f,m);return}else v.next=f,Hs(v.update),v.update();else f.component=c.component,f.el=c.el,v.vnode=f},G=(c,f,m,v,g,x,k)=>{const w=()=>{if(c.isMounted){let{next:M,bu:T,u:I,parent:F,vnode:B}=c,J=M,Y;Ze(c,!1),M?(M.el=B.el,V(c,M,k)):M=B,T&&Un(T),(Y=M.props&&M.props.onVnodeBeforeUpdate)&&xe(Y,F,M,B),Ze(c,!0);const X=Yn(c),pe=c.subTree;c.subTree=X,L(pe,X,h(pe.el),Xt(pe),c,g,x),M.el=X.el,J===null&&Vs(c,X.el),I&&le(I,g),(Y=M.props&&M.props.onVnodeUpdated)&&le(()=>xe(Y,F,M,B),g)}else{let M;const{el:T,props:I}=f,{bm:F,m:B,parent:J}=c,Y=ir(f);if(Ze(c,!1),F&&Un(F),!Y&&(M=I&&I.onVnodeBeforeMount)&&xe(M,J,f),Ze(c,!0),T&&Bn){const X=()=>{c.subTree=Yn(c),Bn(T,c.subTree,c,g,null)};Y?f.type.__asyncLoader().then(()=>!c.isUnmounted&&X()):X()}else{const X=c.subTree=Yn(c);L(null,X,m,v,c,g,x),f.el=X.el}if(B&&le(B,g),!Y&&(M=I&&I.onVnodeMounted)){const X=f;le(()=>xe(M,J,X),g)}f.shapeFlag&256&&c.a&&le(c.a,g),c.isMounted=!0,f=m=v=null}},C=c.effect=new Nr(w,()=>La(c.update),c.scope),b=c.update=C.run.bind(C);b.id=c.uid,Ze(c,!0),b()},V=(c,f,m)=>{f.component=c;const v=c.vnode.props;c.vnode=f,c.next=null,vl(c,f.props,v,m),_l(c,f.children,m),Ct(),Br(void 0,c.update),kt()},Se=(c,f,m,v,g,x,k,w,C=!1)=>{const b=c&&c.children,M=c?c.shapeFlag:0,T=f.children,{patchFlag:I,shapeFlag:F}=f;if(I>0){if(I&128){Pt(b,T,m,v,g,x,k,w,C);return}else if(I&256){Hn(b,T,m,v,g,x,k,w,C);return}}F&8?(M&16&&Te(b,g,x),T!==b&&d(m,T)):M&16?F&16?Pt(b,T,m,v,g,x,k,w,C):Te(b,g,x,!0):(M&8&&d(m,""),F&16&&oe(T,m,v,g,x,k,w,C))},Hn=(c,f,m,v,g,x,k,w,C)=>{c=c||vt,f=f||vt;const b=c.length,M=f.length,T=Math.min(b,M);let I;for(I=0;I<T;I++){const F=f[I]=C?We(f[I]):ke(f[I]);L(c[I],F,m,null,g,x,k,w,C)}b>M?Te(c,g,x,!0,!1,T):oe(f,m,v,g,x,k,w,C,T)},Pt=(c,f,m,v,g,x,k,w,C)=>{let b=0;const M=f.length;let T=c.length-1,I=M-1;for(;b<=T&&b<=I;){const F=c[b],B=f[b]=C?We(f[b]):ke(f[b]);if(Tt(F,B))L(F,B,m,null,g,x,k,w,C);else break;b++}for(;b<=T&&b<=I;){const F=c[T],B=f[I]=C?We(f[I]):ke(f[I]);if(Tt(F,B))L(F,B,m,null,g,x,k,w,C);else break;T--,I--}if(b>T){if(b<=I){const F=I+1,B=F<M?f[F].el:v;for(;b<=I;)L(null,f[b]=C?We(f[b]):ke(f[b]),m,B,g,x,k,w,C),b++}}else if(b>I)for(;b<=T;)De(c[b],g,x,!0),b++;else{const F=b,B=b,J=new Map;for(b=B;b<=I;b++){const fe=f[b]=C?We(f[b]):ke(f[b]);fe.key!=null&&J.set(fe.key,b)}let Y,X=0;const pe=I-B+1;let ut=!1,di=0;const St=new Array(pe);for(b=0;b<pe;b++)St[b]=0;for(b=F;b<=T;b++){const fe=c[b];if(X>=pe){De(fe,g,x,!0);continue}let we;if(fe.key!=null)we=J.get(fe.key);else for(Y=B;Y<=I;Y++)if(St[Y-B]===0&&Tt(fe,f[Y])){we=Y;break}we===void 0?De(fe,g,x,!0):(St[we-B]=b+1,we>=di?di=we:ut=!0,L(fe,f[we],m,null,g,x,k,w,C),X++)}const mi=ut?Al(St):vt;for(Y=mi.length-1,b=pe-1;b>=0;b--){const fe=B+b,we=f[fe],hi=fe+1<M?f[fe+1].el:v;St[b]===0?L(null,we,m,hi,g,x,k,w,C):ut&&(Y<0||b!==mi[Y]?ct(we,m,hi,2):Y--)}}},ct=(c,f,m,v,g=null)=>{const{el:x,type:k,transition:w,children:C,shapeFlag:b}=c;if(b&6){ct(c.component.subTree,f,m,v);return}if(b&128){c.suspense.move(f,m,v);return}if(b&64){k.move(c,f,m,ft);return}if(k===ge){r(x,f,m);for(let T=0;T<C.length;T++)ct(C[T],f,m,v);r(c.anchor,f,m);return}if(k===on){$(c,f,m);return}if(v!==2&&b&1&&w)if(v===0)w.beforeEnter(x),r(x,f,m),le(()=>w.enter(x),g);else{const{leave:T,delayLeave:I,afterLeave:F}=w,B=()=>r(x,f,m),J=()=>{T(x,()=>{B(),F&&F()})};I?I(x,B,J):J()}else r(x,f,m)},De=(c,f,m,v=!1,g=!1)=>{const{type:x,props:k,ref:w,children:C,dynamicChildren:b,shapeFlag:M,patchFlag:T,dirs:I}=c;if(w!=null&&lr(w,null,m,c,!0),M&256){f.ctx.deactivate(c);return}const F=M&1&&I,B=!ir(c);let J;if(B&&(J=k&&k.onVnodeBeforeUnmount)&&xe(J,f,c),M&6)$o(c.component,m,v);else{if(M&128){c.suspense.unmount(m,v);return}F&&Xe(c,null,f,"beforeUnmount"),M&64?c.type.remove(c,f,m,g,ft,v):b&&(x!==ge||T>0&&T&64)?Te(b,f,m,!1,!0):(x===ge&&T&384||!g&&M&16)&&Te(C,f,m),v&&fi(c)}(B&&(J=k&&k.onVnodeUnmounted)||F)&&le(()=>{J&&xe(J,f,c),F&&Xe(c,null,f,"unmounted")},m)},fi=c=>{const{type:f,el:m,anchor:v,transition:g}=c;if(f===ge){Ho(m,v);return}if(f===on){K(c);return}const x=()=>{i(m),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(c.shapeFlag&1&&g&&!g.persisted){const{leave:k,delayLeave:w}=g,C=()=>k(m,x);w?w(c.el,x,C):C()}else x()},Ho=(c,f)=>{let m;for(;c!==f;)m=y(c),i(c),c=m;i(f)},$o=(c,f,m)=>{const{bum:v,scope:g,update:x,subTree:k,um:w}=c;v&&Un(v),g.stop(),x&&(x.active=!1,De(k,c,f,m)),w&&le(w,f),le(()=>{c.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},Te=(c,f,m,v=!1,g=!1,x=0)=>{for(let k=x;k<c.length;k++)De(c[k],f,m,v,g)},Xt=c=>c.shapeFlag&6?Xt(c.component.subTree):c.shapeFlag&128?c.suspense.next():y(c.anchor||c.el),ui=(c,f,m)=>{c==null?f._vnode&&De(f._vnode,null,null,!0):L(f._vnode||null,c,f,null,null,null,m),ja(),f._vnode=c},ft={p:L,um:De,m:ct,r:fi,mt:Dn,mc:oe,pc:Se,pbc:lt,n:Xt,o:e};let $n,Bn;return t&&([$n,Bn]=t(ft)),{render:ui,hydrate:$n,createApp:xl(ui,$n)}}function Ze({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function eo(e,t,n=!1){const r=e.children,i=t.children;if(z(r)&&z(i))for(let a=0;a<r.length;a++){const o=r[a];let s=i[a];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=i[a]=We(i[a]),s.el=o.el),n||eo(o,s))}}function Al(e){const t=e.slice(),n=[0];let r,i,a,o,s;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(i=n[n.length-1],e[i]<u){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<u?a=s+1:o=s;u<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}const El=e=>e.__isTeleport,to="components";function an(e,t){return Pl(to,e,!0,t)||e}const Ol=Symbol();function Pl(e,t,n=!0,r=!1){const i=Ee||ee;if(i){const a=i.type;if(e===to){const s=$l(a);if(s&&(s===t||s===Pe(t)||s===Pn(Pe(t))))return a}const o=Ti(i[e]||a[e],t)||Ti(i.appContext[e],t);return!o&&r?a:o}}function Ti(e,t){return e&&(e[t]||e[Pe(t)]||e[Pn(Pe(t))])}const ge=Symbol(void 0),Yr=Symbol(void 0),it=Symbol(void 0),on=Symbol(void 0),zt=[];let nt=null;function Ce(e=!1){zt.push(nt=e?null:[])}function Sl(){zt.pop(),nt=zt[zt.length-1]||null}let gn=1;function Mi(e){gn+=e}function no(e){return e.dynamicChildren=gn>0?nt||vt:null,Sl(),gn>0&&nt&&nt.push(e),e}function Qe(e,t,n,r,i,a){return no(p(e,t,n,r,i,a,!0))}function cr(e,t,n,r,i){return no(P(e,t,n,r,i,!0))}function fr(e){return e?e.__v_isVNode===!0:!1}function Tt(e,t){return e.type===t.type&&e.key===t.key}const In="__vInternal",ro=({key:e})=>e!=null?e:null,sn=({ref:e,ref_key:t,ref_for:n})=>e!=null?te(e)||ne(e)||D(e)?{i:Ee,r:e,k:t,f:!!n}:e:null;function p(e,t=null,n=null,r=0,i=null,a=e===ge?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ro(t),ref:t&&sn(t),scopeId:Ha,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return s?(qr(l,n),a&128&&e.normalize(l)):n&&(l.shapeFlag|=te(n)?8:16),gn>0&&!o&&nt&&(l.patchFlag>0||a&6)&&l.patchFlag!==32&&nt.push(l),l}const P=Tl;function Tl(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===Ol)&&(e=it),fr(e)){const s=Ut(e,t,!0);return n&&qr(s,n),s}if(Bl(e)&&(e=e.__vccOpts),t){t=Ml(t);let{class:s,style:l}=t;s&&!te(s)&&(t.class=Or(s)),Q(l)&&(Ta(l)&&!z(l)&&(l=ae({},l)),t.style=kn(l))}const o=te(e)?1:Xs(e)?128:El(e)?64:Q(e)?4:D(e)?2:0;return p(e,t,n,r,i,o,a,!0)}function Ml(e){return e?Ta(e)||In in e?ae({},e):e:null}function Ut(e,t,n=!1){const{props:r,ref:i,patchFlag:a,children:o}=e,s=t?Il(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&ro(s),ref:t&&t.ref?n&&i?z(i)?i.concat(sn(t)):[i,sn(t)]:sn(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ge?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ut(e.ssContent),ssFallback:e.ssFallback&&Ut(e.ssFallback),el:e.el,anchor:e.anchor}}function O(e=" ",t=0){return P(Yr,null,e,t)}function Kr(e,t){const n=P(on,null,e);return n.staticCount=t,n}function Mt(e="",t=!1){return t?(Ce(),cr(it,null,e)):P(it,null,e)}function ke(e){return e==null||typeof e=="boolean"?P(it):z(e)?P(ge,null,e.slice()):typeof e=="object"?We(e):P(Yr,null,String(e))}function We(e){return e.el===null||e.memo?e:Ut(e)}function qr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(z(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),qr(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(In in t)?t._ctx=Ee:i===3&&Ee&&(Ee.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else D(t)?(t={default:t,_ctx:Ee},n=32):(t=String(t),r&64?(n=16,t=[O(t)]):n=8);e.children=t,e.shapeFlag|=n}function Il(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Or([t.class,r.class]));else if(i==="style")t.style=kn([t.style,r.style]);else if(An(i)){const a=t[i],o=r[i];o&&a!==o&&!(z(a)&&a.includes(o))&&(t[i]=a?[].concat(a,o):o)}else i!==""&&(t[i]=r[i])}return t}function xe(e,t,n,r=null){ye(e,t,7,[n,r])}const ur=e=>e?io(e)?Vr(e)||e.proxy:ur(e.parent):null,vn=ae(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ur(e.parent),$root:e=>ur(e.root),$emit:e=>e.emit,$options:e=>qa(e),$forceUpdate:e=>()=>La(e.update),$nextTick:e=>zs.bind(e.proxy),$watch:e=>Gs.bind(e)}),Nl={get({_:e},t){const{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:s,appContext:l}=e;let u;if(t[0]!=="$"){const E=o[t];if(E!==void 0)switch(E){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else{if(r!==q&&W(r,t))return o[t]=1,r[t];if(i!==q&&W(i,t))return o[t]=2,i[t];if((u=e.propsOptions[0])&&W(u,t))return o[t]=3,a[t];if(n!==q&&W(n,t))return o[t]=4,n[t];ar&&(o[t]=0)}}const d=vn[t];let h,y;if(d)return t==="$attrs"&&de(e,"get",t),d(e);if((h=s.__cssModules)&&(h=h[t]))return h;if(n!==q&&W(n,t))return o[t]=4,n[t];if(y=l.config.globalProperties,W(y,t))return y[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:a}=e;return i!==q&&W(i,t)?(i[t]=n,!0):r!==q&&W(r,t)?(r[t]=n,!0):W(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:a}},o){let s;return!!n[o]||e!==q&&W(e,o)||t!==q&&W(t,o)||(s=a[0])&&W(s,o)||W(r,o)||W(vn,o)||W(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?this.set(e,t,n.get(),null):n.value!=null&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}},Ll=Qa();let Fl=0;function Rl(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||Ll,a={uid:Fl++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new rs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xa(r,i),emitsOptions:Da(r,i),emit:null,emitted:null,propsDefaults:q,inheritAttrs:r.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Ws.bind(null,a),e.ce&&e.ce(a),a}let ee=null;const wt=e=>{ee=e,e.scope.on()},rt=()=>{ee&&ee.scope.off(),ee=null};function io(e){return e.vnode.shapeFlag&4}let Yt=!1;function jl(e,t=!1){Yt=t;const{props:n,children:r}=e.vnode,i=io(e);gl(e,n,i,t),yl(e,r);const a=i?zl(e,t):void 0;return Yt=!1,a}function zl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ma(new Proxy(e.ctx,Nl));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?Hl(e):null;wt(e),Ct();const a=Ye(r,e,0,[e.props,i]);if(kt(),rt(),pa(a)){if(a.then(rt,rt),t)return a.then(o=>{Ii(e,o,t)}).catch(o=>{Tn(o,e,0)});e.asyncDep=a}else Ii(e,a,t)}else ao(e,t)}function Ii(e,t,n){D(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Q(t)&&(e.setupState=Ia(t)),ao(e,n)}let Ni;function ao(e,t,n){const r=e.type;if(!e.render){if(!t&&Ni&&!r.render){const i=r.template;if(i){const{isCustomElement:a,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,u=ae(ae({isCustomElement:a,delimiters:s},o),l);r.render=Ni(i,u)}}e.render=r.render||be}wt(e),Ct(),ul(e),kt(),rt()}function Dl(e){return new Proxy(e.attrs,{get(t,n){return de(e,"get","$attrs"),t[n]}})}function Hl(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Dl(e))},slots:e.slots,emit:e.emit,expose:t}}function Vr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ia(Ma(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in vn)return vn[n](e)}}))}function $l(e){return D(e)&&e.displayName||e.name}function Bl(e){return D(e)&&"__vccOpts"in e}const he=(e,t)=>Rs(e,t,Yt);function oo(e,t,n){const r=arguments.length;return r===2?Q(t)&&!z(t)?fr(t)?P(e,null,[t]):P(e,t):P(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&fr(n)&&(n=[n]),P(e,t,n))}const Wl="3.2.31",Ul="http://www.w3.org/2000/svg",Ge=typeof document!="undefined"?document:null,Li=Ge&&Ge.createElement("template"),Yl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?Ge.createElementNS(Ul,e):Ge.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>Ge.createTextNode(e),createComment:e=>Ge.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ge.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,i,a){const o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Li.innerHTML=r?`<svg>${e}</svg>`:e;const s=Li.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Kl(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function ql(e,t,n){const r=e.style,i=te(n);if(n&&!i){for(const a in n)dr(r,a,n[a]);if(t&&!te(t))for(const a in t)n[a]==null&&dr(r,a,"")}else{const a=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=a)}}const Fi=/\s*!important$/;function dr(e,t,n){if(z(n))n.forEach(r=>dr(e,t,r));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=Vl(e,t);Fi.test(n)?e.setProperty(xt(r),n.replace(Fi,""),"important"):e[r]=n}}const Ri=["Webkit","Moz","ms"],qn={};function Vl(e,t){const n=qn[t];if(n)return n;let r=Pe(t);if(r!=="filter"&&r in e)return qn[t]=r;r=Pn(r);for(let i=0;i<Ri.length;i++){const a=Ri[i]+r;if(a in e)return qn[t]=a}return t}const ji="http://www.w3.org/1999/xlink";function Xl(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ji,t.slice(6,t.length)):e.setAttributeNS(ji,t,n);else{const a=Uo(t);n==null||a&&!da(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function Zl(e,t,n,r,i,a,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,i,a),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const s=n==null?"":n;(e.value!==s||e.tagName==="OPTION")&&(e.value=s),n==null&&e.removeAttribute(t);return}if(n===""||n==null){const s=typeof e[t];if(s==="boolean"){e[t]=da(n);return}else if(n==null&&s==="string"){e[t]="",e.removeAttribute(t);return}else if(s==="number"){try{e[t]=0}catch{}e.removeAttribute(t);return}}try{e[t]=n}catch{}}let bn=Date.now,so=!1;if(typeof window!="undefined"){bn()>document.createEvent("Event").timeStamp&&(bn=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);so=!!(e&&Number(e[1])<=53)}let mr=0;const Jl=Promise.resolve(),Gl=()=>{mr=0},Ql=()=>mr||(Jl.then(Gl),mr=bn());function ec(e,t,n,r){e.addEventListener(t,n,r)}function tc(e,t,n,r){e.removeEventListener(t,n,r)}function nc(e,t,n,r,i=null){const a=e._vei||(e._vei={}),o=a[t];if(r&&o)o.value=r;else{const[s,l]=rc(t);if(r){const u=a[t]=ic(r,i);ec(e,s,u,l)}else o&&(tc(e,s,o,l),a[t]=void 0)}}const zi=/(?:Once|Passive|Capture)$/;function rc(e){let t;if(zi.test(e)){t={};let n;for(;n=e.match(zi);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[xt(e.slice(2)),t]}function ic(e,t){const n=r=>{const i=r.timeStamp||bn();(so||i>=n.attached-1)&&ye(ac(r,n.value),t,5,[r])};return n.value=e,n.attached=Ql(),n}function ac(e,t){if(z(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const Di=/^on[a-z]/,oc=(e,t,n,r,i=!1,a,o,s,l)=>{t==="class"?Kl(e,r,i):t==="style"?ql(e,n,r):An(t)?Pr(t)||nc(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):sc(e,t,r,i))?Zl(e,t,r,a,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Xl(e,t,r,i))};function sc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Di.test(t)&&D(n)):t==="spellcheck"||t==="draggable"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Di.test(t)&&te(n)?!1:t in e}const lc=ae({patchProp:oc},Yl);let Hi;function cc(){return Hi||(Hi=Cl(lc))}const fc=(...e)=>{const t=cc().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=uc(r);if(!i)return;const a=t._component;!D(a)&&!a.render&&!a.template&&(a.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function uc(e){return te(e)?document.querySelector(e):e}var Nn=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n};const dc=st({}),mc={class:"bg-gray-900 text-white"},hc=p("section",{class:"bg-[#44C577] bg-gradient-to-t from-[#44C577] to-cyan-600"},[p("h1",null,"JavaScript, but desktop"),p("p",null,"MintScript is a JavaScript inspired language, optimized for running on your machine instead of the browser. This defeats the need for something like node.js and leads to better performance")],-1),pc=p("svg",{id:"visual",class:"spacer",preserveAspectRatio:"none",viewBox:"0 0 900 200",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1"},[p("path",{d:"M0 112L16.7 118C33.3 124 66.7 136 100 140.8C133.3 145.7 166.7 143.3 200 142.2C233.3 141 266.7 141 300 141C333.3 141 366.7 141 400 143.2C433.3 145.3 466.7 149.7 500 150.5C533.3 151.3 566.7 148.7 600 143.7C633.3 138.7 666.7 131.3 700 130.8C733.3 130.3 766.7 136.7 800 138.7C833.3 140.7 866.7 138.3 883.3 137.2L900 136L900 0L883.3 0C866.7 0 833.3 0 800 0C766.7 0 733.3 0 700 0C666.7 0 633.3 0 600 0C566.7 0 533.3 0 500 0C466.7 0 433.3 0 400 0C366.7 0 333.3 0 300 0C266.7 0 233.3 0 200 0C166.7 0 133.3 0 100 0C66.7 0 33.3 0 16.7 0L0 0Z",fill:"#006f57"}),p("path",{d:"M0 79L16.7 81.8C33.3 84.7 66.7 90.3 100 96.7C133.3 103 166.7 110 200 111C233.3 112 266.7 107 300 102.7C333.3 98.3 366.7 94.7 400 92.5C433.3 90.3 466.7 89.7 500 91.5C533.3 93.3 566.7 97.7 600 98.3C633.3 99 666.7 96 700 92.8C733.3 89.7 766.7 86.3 800 88C833.3 89.7 866.7 96.3 883.3 99.7L900 103L900 0L883.3 0C866.7 0 833.3 0 800 0C766.7 0 733.3 0 700 0C666.7 0 633.3 0 600 0C566.7 0 533.3 0 500 0C466.7 0 433.3 0 400 0C366.7 0 333.3 0 300 0C266.7 0 233.3 0 200 0C166.7 0 133.3 0 100 0C66.7 0 33.3 0 16.7 0L0 0Z",fill:"#0c8b64"}),p("path",{d:"M0 70L16.7 72.7C33.3 75.3 66.7 80.7 100 82.7C133.3 84.7 166.7 83.3 200 81.3C233.3 79.3 266.7 76.7 300 76.3C333.3 76 366.7 78 400 74.5C433.3 71 466.7 62 500 63.2C533.3 64.3 566.7 75.7 600 79.2C633.3 82.7 666.7 78.3 700 76.3C733.3 74.3 766.7 74.7 800 70.5C833.3 66.3 866.7 57.7 883.3 53.3L900 49L900 0L883.3 0C866.7 0 833.3 0 800 0C766.7 0 733.3 0 700 0C666.7 0 633.3 0 600 0C566.7 0 533.3 0 500 0C466.7 0 433.3 0 400 0C366.7 0 333.3 0 300 0C266.7 0 233.3 0 200 0C166.7 0 133.3 0 100 0C66.7 0 33.3 0 16.7 0L0 0Z",fill:"#27a86f"}),p("path",{d:"M0 39L16.7 41.2C33.3 43.3 66.7 47.7 100 44.7C133.3 41.7 166.7 31.3 200 28.7C233.3 26 266.7 31 300 33C333.3 35 366.7 34 400 36.5C433.3 39 466.7 45 500 45.7C533.3 46.3 566.7 41.7 600 37.7C633.3 33.7 666.7 30.3 700 28.7C733.3 27 766.7 27 800 30.5C833.3 34 866.7 41 883.3 44.5L900 48L900 0L883.3 0C866.7 0 833.3 0 800 0C766.7 0 733.3 0 700 0C666.7 0 633.3 0 600 0C566.7 0 533.3 0 500 0C466.7 0 433.3 0 400 0C366.7 0 333.3 0 300 0C266.7 0 233.3 0 200 0C166.7 0 133.3 0 100 0C66.7 0 33.3 0 16.7 0L0 0Z",fill:"#44c577"})],-1),gc=p("section",null,[p("h1",null,"Missing something? No problem."),p("p",null,"MintScript has an import statement, allowing to import both C# DLLs and MintScript files.")],-1),vc=p("svg",{id:"visual",class:"spacer",preserveAspectRatio:"none",viewBox:"0 0 900 200",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1"},[p("path",{d:"M0 60L21.5 62.3C43 64.7 86 69.3 128.8 71.3C171.7 73.3 214.3 72.7 257.2 75.7C300 78.7 343 85.3 385.8 82.7C428.7 80 471.3 68 514.2 69.7C557 71.3 600 86.7 642.8 88.3C685.7 90 728.3 78 771.2 75.2C814 72.3 857 78.7 878.5 81.8L900 85L900 201L878.5 201C857 201 814 201 771.2 201C728.3 201 685.7 201 642.8 201C600 201 557 201 514.2 201C471.3 201 428.7 201 385.8 201C343 201 300 201 257.2 201C214.3 201 171.7 201 128.8 201C86 201 43 201 21.5 201L0 201Z",fill:"#fa7268"}),p("path",{d:"M0 77L21.5 80.5C43 84 86 91 128.8 98.2C171.7 105.3 214.3 112.7 257.2 111.2C300 109.7 343 99.3 385.8 91.7C428.7 84 471.3 79 514.2 82.3C557 85.7 600 97.3 642.8 98.3C685.7 99.3 728.3 89.7 771.2 88.8C814 88 857 96 878.5 100L900 104L900 201L878.5 201C857 201 814 201 771.2 201C728.3 201 685.7 201 642.8 201C600 201 557 201 514.2 201C471.3 201 428.7 201 385.8 201C343 201 300 201 257.2 201C214.3 201 171.7 201 128.8 201C86 201 43 201 21.5 201L0 201Z",fill:"#ef5f67"}),p("path",{d:"M0 114L21.5 116.7C43 119.3 86 124.7 128.8 122.2C171.7 119.7 214.3 109.3 257.2 109.8C300 110.3 343 121.7 385.8 129.2C428.7 136.7 471.3 140.3 514.2 136.8C557 133.3 600 122.7 642.8 116.2C685.7 109.7 728.3 107.3 771.2 105C814 102.7 857 100.3 878.5 99.2L900 98L900 201L878.5 201C857 201 814 201 771.2 201C728.3 201 685.7 201 642.8 201C600 201 557 201 514.2 201C471.3 201 428.7 201 385.8 201C343 201 300 201 257.2 201C214.3 201 171.7 201 128.8 201C86 201 43 201 21.5 201L0 201Z",fill:"#e34c67"}),p("path",{d:"M0 133L21.5 136.3C43 139.7 86 146.3 128.8 150.5C171.7 154.7 214.3 156.3 257.2 156.2C300 156 343 154 385.8 151C428.7 148 471.3 144 514.2 145.5C557 147 600 154 642.8 151.7C685.7 149.3 728.3 137.7 771.2 134.3C814 131 857 136 878.5 138.5L900 141L900 201L878.5 201C857 201 814 201 771.2 201C728.3 201 685.7 201 642.8 201C600 201 557 201 514.2 201C471.3 201 428.7 201 385.8 201C343 201 300 201 257.2 201C214.3 201 171.7 201 128.8 201C86 201 43 201 21.5 201L0 201Z",fill:"#d53867"}),p("path",{d:"M0 173L21.5 172.8C43 172.7 86 172.3 128.8 171.8C171.7 171.3 214.3 170.7 257.2 171.8C300 173 343 176 385.8 178.5C428.7 181 471.3 183 514.2 181.2C557 179.3 600 173.7 642.8 170C685.7 166.3 728.3 164.7 771.2 165.2C814 165.7 857 168.3 878.5 169.7L900 171L900 201L878.5 201C857 201 814 201 771.2 201C728.3 201 685.7 201 642.8 201C600 201 557 201 514.2 201C471.3 201 428.7 201 385.8 201C343 201 300 201 257.2 201C214.3 201 171.7 201 128.8 201C86 201 43 201 21.5 201L0 201Z",fill:"#c62368"})],-1),bc=p("section",{class:"bg-[#C62368] bg-gradient-to-b from-[#C62368] to-[#FA7268]"},[p("h1",null,"Minimal, yet structured syntax"),p("p",null,"MintScript is a bracket language, making it easy to write good looking code, while also having self-explainatory syntax like println() to make understanding the code as easy as possible.")],-1),yc=p("svg",{id:"visual",class:"spacer",preserveAspectRatio:"none",viewBox:"0 0 900 200",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1"},[p("path",{d:"M0 170L18.8 170.2C37.7 170.3 75.3 170.7 112.8 171.5C150.3 172.3 187.7 173.7 225.2 175.2C262.7 176.7 300.3 178.3 337.8 173C375.3 167.7 412.7 155.3 450.2 155.5C487.7 155.7 525.3 168.3 562.8 166.7C600.3 165 637.7 149 675.2 145.3C712.7 141.7 750.3 150.3 787.8 158.2C825.3 166 862.7 173 881.3 176.5L900 180L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z",fill:"#c62368"}),p("path",{d:"M0 132L18.8 134.7C37.7 137.3 75.3 142.7 112.8 143.7C150.3 144.7 187.7 141.3 225.2 135.5C262.7 129.7 300.3 121.3 337.8 116.2C375.3 111 412.7 109 450.2 113.3C487.7 117.7 525.3 128.3 562.8 132.3C600.3 136.3 637.7 133.7 675.2 135C712.7 136.3 750.3 141.7 787.8 134.2C825.3 126.7 862.7 106.3 881.3 96.2L900 86L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z",fill:"#da3f67"}),p("path",{d:"M0 84L18.8 87.3C37.7 90.7 75.3 97.3 112.8 94.8C150.3 92.3 187.7 80.7 225.2 75C262.7 69.3 300.3 69.7 337.8 75.3C375.3 81 412.7 92 450.2 87.7C487.7 83.3 525.3 63.7 562.8 63.5C600.3 63.3 637.7 82.7 675.2 90.8C712.7 99 750.3 96 787.8 92.3C825.3 88.7 862.7 84.3 881.3 82.2L900 80L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z",fill:"#eb5967"}),p("path",{d:"M0 23L18.8 26.3C37.7 29.7 75.3 36.3 112.8 36.7C150.3 37 187.7 31 225.2 34.5C262.7 38 300.3 51 337.8 53.3C375.3 55.7 412.7 47.3 450.2 45.7C487.7 44 525.3 49 562.8 44C600.3 39 637.7 24 675.2 20.8C712.7 17.7 750.3 26.3 787.8 35.5C825.3 44.7 862.7 54.3 881.3 59.2L900 64L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z",fill:"#fa7268"})],-1),_c=p("section",null,[p("h1",null,"Wanna deploy to the web? We've got you covered."),p("p",null,"(WIP) ViceVersa is the MintScript transpiler for JavaScript, meaning: build once, run everywhere.")],-1),wc=[hc,pc,gc,vc,bc,yc,_c];function xc(e,t,n,r,i,a){return Ce(),Qe("div",mc,wc)}var Cc=Nn(dc,[["render",xc]]);const kc=st({props:{code:{type:String,default:""}}}),Ac={class:"overflow-hidden text-left w-[calc(100% - 3rem)] m-6 p-6 rounded-lg bg-gray-500"};function Ec(e,t,n,r,i,a){return Ce(),Qe("div",Ac,[p("pre",null,Vo(e.code),1)])}var Oc=Nn(kc,[["render",Ec]]);const Pc=st({components:{CodeBlock:Oc}}),Sc=Kr('<div class="sidebar flex flex-col items-center bg-blue-600 text-white fixed left-0 top-0 bottom-0 z-0 overflow-y-scroll pt-20"><a href="#basics" class="transition-all duration-500 hover:text-red-500">Basics</a><a href="#functions" class="transition-all duration-500 hover:text-red-500">Functions</a><a href="#classes" class="transition-all duration-500 hover:text-red-500">Classes</a><a href="#modules" class="transition-all duration-500 hover:text-red-500">Modules</a><a href="#refs" class="transition-all duration-500 hover:text-red-500 text-center">Explanations for advanced developers</a></div>',1),Tc={class:"documentation p-12 pt-0 text-justify h-auto bg-gray-900 text-white"},Mc=p("h1",{id:"basics",class:"text-center"},[p("br"),O("Basics")],-1),Ic=Kr(" MintScript is a statically typed curly-bracked language with JavaScript inspired syntax. It is written in C#, using the ANTLR language toolkit.<br><br> Now let&#39;s start with the basics of MS.<br> MintScript executes functions in a global scope, meaning that you can just write into the script and it will be executed, no need for an entry point.<br><br> Statements <b>can</b> be followed by either a semicolon or a newline to signalise the end of the current statement.<br><br> But let&#39;s finally code something.<br><br> To start, run <i>MintScript init</i> (Windows only)<br> To run your script, type <i>MintScript C:/full/path/to/your/main.mis</i><br> First of all, lets create a variable called HelloWorld.<br>",25),Nc=O(" Variables can have 5 types: string, number, float, bool and tuple."),Lc=p("br",null,null,-1),Fc=O(" Now, lets print our variable to the console by writing: "),Rc=O(" Notice, that the function is called "),jc=p("i",null,"println",-1),zc=O('. This ends the line after printing "Hello, world!". To continue the line, just write: '),Dc=O(` If you were to start the script now, you would see the window popping up and directly closing. Don't worry, everything's ok. The window is actually showing "Hello, world!", but closing, because we are not waiting for any user input. To prevent this, add this to the end of your script: `),Hc=O(" Now, whenever you press enter, the script ends. "),$c=p("br",null,null,-1),Bc=O(" If you want to read inout from the user, just use "),Wc=p("br",null,null,-1),Uc=O(" We now have created a variable, printed it and received input from the user. However, we haven't done anything special with our data. Let's add something to our string at first: "),Yc=O(' Now, our string will be "Hello, world! How are you?". We can also compare our string with others by using the if statement '),Kc=O(' This checks, if HelloWorld is equal to (==) our second argument, in this case: "Hello, world! How are you?" Other comparison operators are not equal (!=), greater (>), less (<), greater or equal (>=) and less or equal (<=) '),qc=p("br",null,null,-1),Vc=O("If statements can be followed by a self-explainatory else or else if statement. "),Xc=O(" Another important statement is the while statement. It executes code until the given condition returns false. Here's an example: "),Zc=O(" (Tip: Use while(true) to repeat the code forever) "),Jc=p("br",null,null,-1),Gc=p("br",null,null,-1),Qc=p("h1",{id:"functions",class:"text-center"},[p("br"),O("Functions")],-1),ef=O(" MintScript of course has functions. You can declare functions with: "),tf=O(" You can now call it by simply typing "),nf=O(" Functions will always return a value. The return value for functions without a return statement will be the exit status of the last statement in the function, meaning: "),rf=O(" will return 0, because print exited sucessfully. However, this function: "),af=O(` will return "System.object". Why? Well, because "123" isn't a statement but an expression. This means, that it can't return 0 or sucessful, because it's not doing any actions. It's just a number. Also, "System.object" is the C# type MintScript uses to store values. To willingly return a value, use `),of=O(" This will indeed return 123. "),sf=p("h1",{id:"classes",class:"text-center"},[p("br"),O("Classes")],-1),lf=O(" Classes are a way to collect variables and functions and create inheritance systems."),cf=p("br",null,null,-1),ff=O(" Declare classes with "),uf=O(" Classes can also inherit functions from others."),df=p("br",null,null,-1),mf=O(" Create a inherative class by typing "),hf=O(` Note that we don't need a keyword like "override" in MintScript to override functions. Also, classes can also inherit from any other function, no need for abstract classes. You can also add properties to classes thad didn't exist in the parent class: `),pf=O(" You can now create a new Instance of your class by using the new statement "),gf=O(" When a new instance of your class is created, the constructor function will be called. Define it with "),vf=O(" Now, you can pass in arguments using "),bf=p("h1",{id:"modules",class:"text-center"},[p("br"),O("Modules")],-1),yf=O(" Modules are a way to share code between projects or developers. You can Import a module by using the import statement: "),_f=O(" This will search for a file in the modules/module_name/ folder. Modules can also be imported from a specific path: "),wf=O(" Modules can be in 2 formats; MintScript or DLL. A DLL Tutorial can be found on the Youtube channel of MintScript soon. But for now, here is a boilerplate for writin C# class libraries to extend MintScript: "),xf=O(" Also, dll modules require a "),Cf=p("i",null,"module.json",-1),kf=O(" file to be in the same directory, which contains the export functions: "),Af=O(" Modules written in MintScript do not require this modules.json file. Said modules will simply export every export class: "),Ef=O(" When using import statements, the exports will be loaded into the Variable Space in a pseudo-class with the same name as given. Meaning: "),Of=O(" will be loading in its imaginary function "),Pf=p("i",null,"MyFunc()",-1),Sf=O(" as "),Tf=O(" However, because MintScript is still in Beta, we recomment using DLL modules. "),Mf=p("h1",{id:"refs",class:"text-center"},[p("br"),O("Explanations for advanced developers")],-1),If=Kr('<ul><h2>Types</h2><li class="decoration-indigo-600 underline text-indigo-600"><a href="#string">String</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#number">Number</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#float">Float</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#bool">Bool</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#tuple">Tuple</a></li><h2>Loops and statements</h2><li class="decoration-indigo-600 underline text-indigo-600"><a href="#func">Func</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#if">If</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#while">While</a></li><h2>Built-in functions</h2><li class="decoration-indigo-600 underline text-indigo-600"><a href="#print">print</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#println">println</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#read">read</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#readln">readln</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#str">str</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#pos">pos</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#len">len</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#contains">contains</a></li></ul>',1),Nf={id:"string"},Lf=p("h3",null,"String",-1),Ff=O(" Strings are objects that define text "),Rf={id:"number"},jf=p("h3",null,"Number",-1),zf=O(" Numbers are objects that define natural numbers "),Df={id:"float"},Hf=p("h3",null,"Float",-1),$f=O(" Floats are objects that define decimal numbers "),Bf={id:"bool"},Wf=p("h3",null,"Bool",-1),Uf=O(" Booleans are objects that define either true or false values "),Yf={id:"tuple"},Kf=p("h3",null,"Tuple",-1),qf=O(" Tuples are objects that define a list of items "),Vf=O(" You can get elements by their index "),Xf={id:"func"},Zf=p("h3",null,"Func",-1),Jf=O(" Declares a function that can return a value and take in arguments "),Gf={id:"class"},Qf=p("h3",null,"Class",-1),eu=O(" Declares a class that can inherit from another class and have a constructor "),tu=O(" the new Keyword instanciates it. "),nu={id:"if"},ru=p("h3",null,"If",-1),iu=O(" Runs if the given statement returns true "),au={id:"if"},ou=p("h3",null,"If",-1),su=O(" Runs if the given statement returns true. Can be followed by a else if or else statement. "),lu={id:"while"},cu=p("h3",null,"While",-1),fu=O(" Runs while the given statement returns true "),uu={id:"print"},du=p("h3",null,"Print",-1),mu=O(" Prints out the given object "),hu={id:"println"},pu=p("h3",null,"Println",-1),gu=O(" Prints out the given object and ends the line "),vu={id:"read"},bu=p("h3",null,"Read",-1),yu=O(" reads input from the user and returns it as a string "),_u={id:"readln"},wu=p("h3",null,"Readln",-1),xu=O(" reads a line from the user and returns it as a string "),Cu={id:"str"},ku=p("h3",null,"Str",-1),Au=O(" converts the given object to a string "),Eu={id:"pos"},Ou=p("h3",null,"Pos",-1),Pu=O(" Returns the position of the given object at position 2 in the string or tuple at position 1 or -1 if the object wasn't present "),Su={id:"len"},Tu=p("h3",null,"Len",-1),Mu=O(" Returns the length of the given string or tuple "),Iu={id:"contains"},Nu=p("h3",null,"Contains",-1),Lu=O(" Returns wether the object at position 2 is present in the string or tuple at poosition 1 ");function Fu(e,t,n,r,i,a){const o=an("CodeBlock");return Ce(),Qe(ge,null,[Sc,p("div",Tc,[Mc,p("p",null,[Ic,P(o,{code:'HelloWorld = "Hello, world!"'}),Nc,Lc,Fc,P(o,{code:"println(HelloWorld)"}),Rc,jc,zc,P(o,{code:"print(HelloWorld)"}),Dc,P(o,{code:"read()"}),Hc,$c,Bc,P(o,{code:"input = readln()"}),Wc,Uc,P(o,{code:'HelloWorld = HelloWorld + " How are you?"'}),Yc,P(o,{code:`if(HelloWorld == "Hello, world! how are you?") {\r
    println(HelloWorld)\r
}`}),Kc,qc,Vc,P(o,{code:`if(HelloWorld == "Hello, world! how are you?") {\r
    println(HelloWorld)\r
}\r
else if(HelloWorld == "Hello, world!"){\r
    println("Our variable was 'Hello, world!'")\r
}\r
else {\r
    println("Our variable was neither of those")\r
}`}),Xc,P(o,{code:`i = 0\r
while(i < 10) {\r
    print(i)\r
    i = i + 1\r
}`}),Zc]),Jc,Gc,Qc,p("p",null,[ef,P(o,{code:`func MyFunc(string myArgument) {\r
    println("MyFunc was called with argument " + myArgument)\r
}`}),tf,P(o,{code:'MyFunc("Hello world")'}),nf,P(o,{code:`func MyFunc() {\r
    print("Hello, world!")\r
}`}),rf,P(o,{code:`func MyFunc() {\r
    123\r
}`}),af,P(o,{code:`func MyFunc() {\r
    return 123\r
}`}),of]),sf,p("p",null,[lf,cf,ff,P(o,{code:`class Animal {\r
    func makeSound() {\r
        println("Hello world!")\r
    }\r
\r
    legs = 4\r
}`}),uf,df,mf,P(o,{code:`class Pig : Animal {\r
    func makeSound() {\r
        println("Squeeeek! Says the pig with " + this.legs + " legs")\r
    }\r
}`}),hf,P(o,{code:`class Cow : Animal {\r
    func makeSound() {\r
        println("Moooo!")\r
    }\r
\r
    products = { "Milk", "Meat" }\r
}`}),pf,P(o,{code:"pig = new Pig()"}),gf,P(o,{code:`class InstanceTest {\r
    constructor (string s) {\r
        println(s)\r
    }\r
}`}),vf,P(o,{code:'instance = new InstanceTest("Hello world!")'})]),bf,p("p",null,[yf,P(o,{code:"import module"}),_f,P(o,{code:"import module from './mymodule.mis'"}),wf,P(o,{code:`public class Exports {\r
    // Write your functions here. \r
    // Every function should return an object and take in an object[].\r
    public object example(object[] args){\r
        return args[0];\r
    }\r
}`}),xf,Cf,kf,P(o,{code:`{\r
    "export_functions": [\r
        {\r
            "method": "test",\r
            "args": [ "string" ]\r
        }\r
    ]\r
}`}),Af,P(o,{code:`export class Foo {\r
    bar = "Hello world!"\r
    func Greet() {\r
        // Greetings to Fireship\r
        println('hi mom')\r
    }\r
}`}),Ef,P(o,{code:"import myModule"}),Of,Pf,Sf,P(o,{code:"myModule.MyFunc()"}),Tf]),Mf,p("p",null,[If,p("p",Nf,[Lf,Ff,P(o,{code:'"Text"'})]),p("p",Rf,[jf,zf,P(o,{code:"13"})]),p("p",Df,[Hf,$f,P(o,{code:"2.56"})]),p("p",Bf,[Wf,Uf,P(o,{code:"true"})]),p("p",Yf,[Kf,qf,P(o,{code:'{ "value 1", 2, {3, 4, 5} }'}),Vf,P(o,{code:"nameOfArray[0]"})]),p("p",Xf,[Zf,Jf,P(o,{code:`func Double(number n) {\r
    return n * 2\r
}`})]),p("p",Gf,[Qf,eu,P(o,{code:`class Pig : Animal {\r
    constructor (number legs) {\r
        this.legs = legs\r
    }\r
\r
    func makeSound() {\r
        println("Squeeek! Makes the pig with " + this.legs + " legs.")\r
    }\r
}`}),tu,P(o,{code:`pig = new Pig(4)\r
pig.makeSound()`})]),p("p",nu,[ru,iu,P(o,{code:`if (myBoolean) {\r
    doSomething()                   \r
}`})]),p("p",au,[ou,su,P(o,{code:`if (myBoolean) {\r
    doSomething()                   \r
} else if (myOtherBoolean) {\r
    doSomethingDifferent()    \r
} else {\r
    doSomethingThird()  \r
}`})]),p("p",lu,[cu,fu,P(o,{code:`if (myBoolean) {\r
    doSomething()                   \r
}`})]),p("p",uu,[du,mu,P(o,{code:'print("Hello world")'})]),p("p",hu,[pu,gu,P(o,{code:'println("Hello world")'})]),p("p",vu,[bu,yu,P(o,{code:"read()"})]),p("p",_u,[wu,xu,P(o,{code:"readln()"})]),p("p",Cu,[ku,Au,P(o,{code:"str(12)"})]),p("p",Eu,[Ou,Pu,P(o,{code:'pos("Hello world", "H")'})]),p("p",Su,[Tu,Mu,P(o,{code:'len("Hello world")'})]),p("p",Iu,[Nu,Lu,P(o,{code:'contains("Hello world", "Hello")'})])])])],64)}var Ru=Nn(Pc,[["render",Fu]]),ju="/message/assets/MintScript.42929d43.png";const zu=st({data(){return{page_index:0,shownavdropdown:!1,screenwidth:window.innerWidth}},methods:{setPageIndex(e){this.page_index=e},onResize(){this.screenwidth=window.innerWidth}},mounted(){this.setPageIndex(0),this.$nextTick(()=>{window.addEventListener("resize",this.onResize)})},components:{HomePage:Cc,Documentation:Ru}}),Du={class:"top-bar fixed top-0 left-0 right-0 bg-[rgba(41,41,41,0.8)] z-10 p-1 text-white overflow-hidden"},Hu=p("img",{src:ju,class:"logo aspect-square float-left mr-2"},null,-1),$u=p("h1",{class:"font-['Neutraface'] float-left text-white"},"MintScript",-1),Bu={class:"float-right mr-5 text-lg decoration-0"},Wu=p("br",null,null,-1),Uu=p("div",{class:"w-[100%] relative h-36 bg-blue-600 flex justify-center items-center text-white z-50"}," 2022 Chronical Technologies ",-1);function Yu(e,t,n,r,i,a){const o=an("icon"),s=an("HomePage"),l=an("Documentation");return Ce(),Qe(ge,null,[p("div",Du,[Hu,$u,p("div",Bu,[e.screenwidth<=500?(Ce(),Qe("button",{key:0,onClick:t[0]||(t[0]=u=>e.shownavdropdown=!e.shownavdropdown)},[P(o,{icon:"bars"})])):Mt("",!0),e.screenwidth>500?(Ce(),Qe("a",{key:1,onClick:t[1]||(t[1]=u=>e.setPageIndex(0)),class:"cursor-pointer hover:text-blue-400 transition-all duration-500 ml-3"},"Home")):Mt("",!0),e.screenwidth>500?(Ce(),Qe("a",{key:2,onClick:t[2]||(t[2]=u=>e.setPageIndex(1)),class:"cursor-pointer hover:text-blue-400 transition-all duration-500 ml-3"},"Documentation")):Mt("",!0)])]),p("div",{style:kn({height:e.shownavdropdown?"128px":"0px"}),class:"overflow-hidden text-white text-lg nav-dropdown transition-all duration-500 z-50 h-32 bg-gray-700 fixed left-0 right-0"},[p("a",{onClick:t[3]||(t[3]=u=>e.setPageIndex(0)),class:"cursor-pointer hover:text-blue-400 transition-all duration-500 ml-3"},"Home"),Wu,p("a",{onClick:t[4]||(t[4]=u=>e.setPageIndex(1)),class:"cursor-pointer hover:text-blue-400 transition-all duration-500 ml-3"},"Documentation")],4),e.page_index==0?(Ce(),cr(s,{key:0,class:"transition-all z-10"})):Mt("",!0),e.page_index==1?(Ce(),cr(l,{key:1,class:"transition-all z-10"})):Mt("",!0),Uu],64)}var Ku=Nn(zu,[["render",Yu]]);/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function $i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$i(Object(n),!0).forEach(function(r){Xu(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$i(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function yn(e){return yn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yn(e)}function qu(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Bi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Vu(e,t,n){return t&&Bi(e.prototype,t),n&&Bi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Xu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Xr(e,t){return Ju(e)||Qu(e,t)||lo(e,t)||td()}function Ln(e){return Zu(e)||Gu(e)||lo(e)||ed()}function Zu(e){if(Array.isArray(e))return hr(e)}function Ju(e){if(Array.isArray(e))return e}function Gu(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Qu(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function lo(e,t){if(!!e){if(typeof e=="string")return hr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return hr(e,t)}}function hr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ed(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function td(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Wi=function(){},Zr={},co={},fo=null,uo={mark:Wi,measure:Wi};try{typeof window!="undefined"&&(Zr=window),typeof document!="undefined"&&(co=document),typeof MutationObserver!="undefined"&&(fo=MutationObserver),typeof performance!="undefined"&&(uo=performance)}catch{}var nd=Zr.navigator||{},Ui=nd.userAgent,Yi=Ui===void 0?"":Ui,qe=Zr,Z=co,Ki=fo,tn=uo;qe.document;var ze=!!Z.documentElement&&!!Z.head&&typeof Z.addEventListener=="function"&&typeof Z.createElement=="function",mo=~Yi.indexOf("MSIE")||~Yi.indexOf("Trident/"),Le="___FONT_AWESOME___",pr=16,ho="fa",po="svg-inline--fa",at="data-fa-i2svg",gr="data-fa-pseudo-element",rd="data-fa-pseudo-element-pending",Jr="data-prefix",Gr="data-icon",qi="fontawesome-i2svg",id="async",ad=["HTML","HEAD","STYLE","SCRIPT"],go=function(){try{return!0}catch{return!1}}(),Qr={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},_n={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},vo={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},od={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sd=/fa[srltdbk\-\ ]/,bo="fa-layers-text",ld=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,cd={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},yo=[1,2,3,4,5,6,7,8,9,10],fd=yo.concat([11,12,13,14,15,16,17,18,19,20]),ud=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],et={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},dd=[].concat(Ln(Object.keys(_n)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",et.GROUP,et.SWAP_OPACITY,et.PRIMARY,et.SECONDARY]).concat(yo.map(function(e){return"".concat(e,"x")})).concat(fd.map(function(e){return"w-".concat(e)})),_o=qe.FontAwesomeConfig||{};function md(e){var t=Z.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function hd(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Z&&typeof Z.querySelector=="function"){var pd=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];pd.forEach(function(e){var t=Xr(e,2),n=t[0],r=t[1],i=hd(md(n));i!=null&&(_o[r]=i)})}var gd={familyPrefix:ho,styleDefault:"solid",replacementClass:po,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Dt=A(A({},gd),_o);Dt.autoReplaceSvg||(Dt.observeMutations=!1);var N={};Object.keys(Dt).forEach(function(e){Object.defineProperty(N,e,{enumerable:!0,set:function(n){Dt[e]=n,ln.forEach(function(r){return r(N)})},get:function(){return Dt[e]}})});qe.FontAwesomeConfig=N;var ln=[];function vd(e){return ln.push(e),function(){ln.splice(ln.indexOf(e),1)}}var $e=pr,Oe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function bd(e){if(!(!e||!ze)){var t=Z.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Z.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return Z.head.insertBefore(t,r),e}}var yd="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Kt(){for(var e=12,t="";e-- >0;)t+=yd[Math.random()*62|0];return t}function At(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ei(e){return e.classList?At(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function wo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function _d(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(wo(e[n]),'" ')},"").trim()}function Fn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ti(e){return e.size!==Oe.size||e.x!==Oe.x||e.y!==Oe.y||e.rotate!==Oe.rotate||e.flipX||e.flipY}function wd(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function xd(e){var t=e.transform,n=e.width,r=n===void 0?pr:n,i=e.height,a=i===void 0?pr:i,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&mo?l+="translate(".concat(t.x/$e-r/2,"em, ").concat(t.y/$e-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/$e,"em), calc(-50% + ").concat(t.y/$e,"em)) "):l+="translate(".concat(t.x/$e,"em, ").concat(t.y/$e,"em) "),l+="scale(".concat(t.size/$e*(t.flipX?-1:1),", ").concat(t.size/$e*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Cd=`:root, :host {
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
}`;function xo(){var e=ho,t=po,n=N.familyPrefix,r=N.replacementClass,i=Cd;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var Vi=!1;function Vn(){N.autoAddCss&&!Vi&&(bd(xo()),Vi=!0)}var kd={mixout:function(){return{dom:{css:xo,insertCss:Vn}}},hooks:function(){return{beforeDOMElementCreation:function(){Vn()},beforeI2svg:function(){Vn()}}}},Fe=qe||{};Fe[Le]||(Fe[Le]={});Fe[Le].styles||(Fe[Le].styles={});Fe[Le].hooks||(Fe[Le].hooks={});Fe[Le].shims||(Fe[Le].shims=[]);var ve=Fe[Le],Co=[],Ad=function e(){Z.removeEventListener("DOMContentLoaded",e),wn=1,Co.map(function(t){return t()})},wn=!1;ze&&(wn=(Z.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Z.readyState),wn||Z.addEventListener("DOMContentLoaded",Ad));function Ed(e){!ze||(wn?setTimeout(e,0):Co.push(e))}function qt(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?wo(e):"<".concat(t," ").concat(_d(r),">").concat(a.map(qt).join(""),"</").concat(t,">")}function Xi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Od=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},Xn=function(t,n,r,i){var a=Object.keys(t),o=a.length,s=i!==void 0?Od(n,i):n,l,u,d;for(r===void 0?(l=1,d=t[a[0]]):(l=0,d=r);l<o;l++)u=a[l],d=s(d,t[u],u,t);return d};function Pd(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function vr(e){var t=Pd(e);return t.length===1?t[0].toString(16):null}function Sd(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Zi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function br(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=Zi(t);typeof ve.hooks.addPack=="function"&&!i?ve.hooks.addPack(e,Zi(t)):ve.styles[e]=A(A({},ve.styles[e]||{}),a),e==="fas"&&br("fa",t)}var Ht=ve.styles,Td=ve.shims,Md=Object.values(vo),ni=null,ko={},Ao={},Eo={},Oo={},Po={},Id=Object.keys(Qr);function Nd(e){return~dd.indexOf(e)}function Ld(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!Nd(i)?i:null}var So=function(){var t=function(a){return Xn(Ht,function(o,s,l){return o[l]=Xn(s,a,{}),o},{})};ko=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),Ao=t(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),Po=t(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in Ht||N.autoFetchSvg,r=Xn(Td,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});Eo=r.names,Oo=r.unicodes,ni=Rn(N.styleDefault)};vd(function(e){ni=Rn(e.styleDefault)});So();function ri(e,t){return(ko[e]||{})[t]}function Fd(e,t){return(Ao[e]||{})[t]}function pt(e,t){return(Po[e]||{})[t]}function To(e){return Eo[e]||{prefix:null,iconName:null}}function Rd(e){var t=Oo[e],n=ri("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ve(){return ni}var ii=function(){return{prefix:null,iconName:null,rest:[]}};function Rn(e){var t=Qr[e],n=_n[e]||_n[t],r=e in ve.styles?e:null;return n||r||null}function jn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,i=null,a=e.reduce(function(o,s){var l=Ld(N.familyPrefix,s);if(Ht[s]?(s=Md.includes(s)?od[s]:s,i=s,o.prefix=s):Id.indexOf(s)>-1?(i=s,o.prefix=Rn(s)):l?o.iconName=l:s!==N.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var u=i==="fa"?To(o.iconName):{},d=pt(o.prefix,o.iconName);u.prefix&&(i=null),o.iconName=u.iconName||d||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!Ht.far&&Ht.fas&&!N.autoFetchSvg&&(o.prefix="fas")}return o},ii());return(a.prefix==="fa"||i==="fa")&&(a.prefix=Ve()||"fas"),a}var jd=function(){function e(){qu(this,e),this.definitions={}}return Vu(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=A(A({},n.definitions[s]||{}),o[s]),br(s,o[s]);var l=vo[s];l&&br(l,o[s]),So()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(h){typeof h=="string"&&(n[s][h]=u)}),n[s][l]=u}),n}}]),e}(),Ji=[],gt={},_t={},zd=Object.keys(_t);function Dd(e,t){var n=t.mixoutsTo;return Ji=e,gt={},Object.keys(_t).forEach(function(r){zd.indexOf(r)===-1&&delete _t[r]}),Ji.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),yn(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){gt[o]||(gt[o]=[]),gt[o].push(a[o])})}r.provides&&r.provides(_t)}),n}function yr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=gt[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ot(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=gt[e]||[];i.forEach(function(a){a.apply(null,n)})}function Re(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return _t[e]?_t[e].apply(null,t):void 0}function _r(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ve();if(!!t)return t=pt(n,t)||t,Xi(Mo.definitions,n,t)||Xi(ve.styles,n,t)}var Mo=new jd,Hd=function(){N.autoReplaceSvg=!1,N.observeMutations=!1,ot("noAuto")},$d={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ze?(ot("beforeI2svg",t),Re("pseudoElements2svg",t),Re("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,Ed(function(){Wd({autoReplaceSvgRoot:n}),ot("watch",t)})}},Bd={icon:function(t){if(t===null)return null;if(yn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:pt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Rn(t[0]);return{prefix:r,iconName:pt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(N.familyPrefix,"-"))>-1||t.match(sd))){var i=jn(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Ve(),iconName:pt(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=Ve();return{prefix:a,iconName:pt(a,t)||t}}}},me={noAuto:Hd,config:N,dom:$d,parse:Bd,library:Mo,findIconDefinition:_r,toHtml:qt},Wd=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Z:n;(Object.keys(ve.styles).length>0||N.autoFetchSvg)&&ze&&N.autoReplaceSvg&&me.dom.i2svg({node:r})};function zn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return qt(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!ze){var r=Z.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Ud(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(ti(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};i.style=Fn(A(A({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function Yd(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(N.familyPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},i),{},{id:o}),children:r}]}]}function ai(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,d=e.titleId,h=e.extra,y=e.watchable,E=y===void 0?!1:y,R=r.found?r:n,H=R.width,L=R.height,_=i==="fak",S=[N.replacementClass,a?"".concat(N.familyPrefix,"-").concat(a):""].filter(function(oe){return h.classes.indexOf(oe)===-1}).filter(function(oe){return oe!==""||!!oe}).concat(h.classes).join(" "),j={children:[],attributes:A(A({},h.attributes),{},{"data-prefix":i,"data-icon":a,class:S,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(H," ").concat(L)})},$=_&&!~h.classes.indexOf("fa-fw")?{width:"".concat(H/L*16*.0625,"em")}:{};E&&(j.attributes[at]=""),l&&(j.children.push({tag:"title",attributes:{id:j.attributes["aria-labelledby"]||"title-".concat(d||Kt())},children:[l]}),delete j.attributes.title);var K=A(A({},j),{},{prefix:i,iconName:a,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:A(A({},$),h.styles)}),re=r.found&&n.found?Re("generateAbstractMask",K)||{children:[],attributes:{}}:Re("generateAbstractIcon",K)||{children:[],attributes:{}},ce=re.children,_e=re.attributes;return K.children=ce,K.attributes=_e,s?Yd(K):Ud(K)}function Gi(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=A(A(A({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(u[at]="");var d=A({},o.styles);ti(i)&&(d.transform=xd({transform:i,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var h=Fn(d);h.length>0&&(u.style=h);var y=[];return y.push({tag:"span",attributes:u,children:[t]}),a&&y.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),y}function Kd(e){var t=e.content,n=e.title,r=e.extra,i=A(A(A({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=Fn(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Zn=ve.styles;function wr(e){var t=e[0],n=e[1],r=e.slice(4),i=Xr(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(N.familyPrefix,"-").concat(et.GROUP)},children:[{tag:"path",attributes:{class:"".concat(N.familyPrefix,"-").concat(et.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(N.familyPrefix,"-").concat(et.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var qd={found:!1,width:512,height:512};function Vd(e,t){!go&&!N.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function xr(e,t){var n=t;return t==="fa"&&N.styleDefault!==null&&(t=Ve()),new Promise(function(r,i){if(Re("missingIconAbstract"),n==="fa"){var a=To(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Zn[t]&&Zn[t][e]){var o=Zn[t][e];return r(wr(o))}Vd(e,t),r(A(A({},qd),{},{icon:N.showMissingIcons&&e?Re("missingIconAbstract")||{}:{}}))})}var Qi=function(){},Cr=N.measurePerformance&&tn&&tn.mark&&tn.measure?tn:{mark:Qi,measure:Qi},Lt='FA "6.1.1"',Xd=function(t){return Cr.mark("".concat(Lt," ").concat(t," begins")),function(){return Io(t)}},Io=function(t){Cr.mark("".concat(Lt," ").concat(t," ends")),Cr.measure("".concat(Lt," ").concat(t),"".concat(Lt," ").concat(t," begins"),"".concat(Lt," ").concat(t," ends"))},oi={begin:Xd,end:Io},cn=function(){};function ea(e){var t=e.getAttribute?e.getAttribute(at):null;return typeof t=="string"}function Zd(e){var t=e.getAttribute?e.getAttribute(Jr):null,n=e.getAttribute?e.getAttribute(Gr):null;return t&&n}function Jd(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(N.replacementClass)}function Gd(){if(N.autoReplaceSvg===!0)return fn.replace;var e=fn[N.autoReplaceSvg];return e||fn.replace}function Qd(e){return Z.createElementNS("http://www.w3.org/2000/svg",e)}function em(e){return Z.createElement(e)}function No(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Qd:em:n;if(typeof e=="string")return Z.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(No(o,{ceFn:r}))}),i}function tm(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var fn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(No(i),n)}),n.getAttribute(at)===null&&N.keepOriginalSource){var r=Z.createComment(tm(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ei(n).indexOf(N.replacementClass))return fn.replace(t);var i=new RegExp("".concat(N.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===N.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return qt(s)}).join(`
`);n.setAttribute(at,""),n.innerHTML=o}};function ta(e){e()}function Lo(e,t){var n=typeof t=="function"?t:cn;if(e.length===0)n();else{var r=ta;N.mutateApproach===id&&(r=qe.requestAnimationFrame||ta),r(function(){var i=Gd(),a=oi.begin("mutate");e.map(i),a(),n()})}}var si=!1;function Fo(){si=!0}function kr(){si=!1}var xn=null;function na(e){if(!!Ki&&!!N.observeMutations){var t=e.treeCallback,n=t===void 0?cn:t,r=e.nodeCallback,i=r===void 0?cn:r,a=e.pseudoElementsCallback,o=a===void 0?cn:a,s=e.observeMutationsRoot,l=s===void 0?Z:s;xn=new Ki(function(u){if(!si){var d=Ve();At(u).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!ea(h.addedNodes[0])&&(N.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&N.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&ea(h.target)&&~ud.indexOf(h.attributeName))if(h.attributeName==="class"&&Zd(h.target)){var y=jn(ei(h.target)),E=y.prefix,R=y.iconName;h.target.setAttribute(Jr,E||d),R&&h.target.setAttribute(Gr,R)}else Jd(h.target)&&i(h.target)})}}),ze&&xn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function nm(){!xn||xn.disconnect()}function rm(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function im(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=jn(ei(e));return i.prefix||(i.prefix=Ve()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||i.prefix&&r.length>0&&(i.iconName=Fd(i.prefix,e.innerText)||ri(i.prefix,vr(e.innerText))),i}function am(e){var t=At(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return N.autoA11y&&(n?t["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(r||Kt()):(t["aria-hidden"]="true",t.focusable="false")),t}function om(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Oe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ra(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=im(e),r=n.iconName,i=n.prefix,a=n.rest,o=am(e),s=yr("parseNodeAttributes",{},e),l=t.styleParser?rm(e):[];return A({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Oe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var sm=ve.styles;function Ro(e){var t=N.autoReplaceSvg==="nest"?ra(e,{styleParser:!1}):ra(e);return~t.extra.classes.indexOf(bo)?Re("generateLayersText",e,t):Re("generateSvgReplacementMutation",e,t)}function ia(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ze)return Promise.resolve();var n=Z.documentElement.classList,r=function(h){return n.add("".concat(qi,"-").concat(h))},i=function(h){return n.remove("".concat(qi,"-").concat(h))},a=N.autoFetchSvg?Object.keys(Qr):Object.keys(sm),o=[".".concat(bo,":not([").concat(at,"])")].concat(a.map(function(d){return".".concat(d,":not([").concat(at,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=At(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=oi.begin("onTree"),u=s.reduce(function(d,h){try{var y=Ro(h);y&&d.push(y)}catch(E){go||E.name==="MissingIcon"&&console.error(E)}return d},[]);return new Promise(function(d,h){Promise.all(u).then(function(y){Lo(y,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(y){l(),h(y)})})}function lm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ro(e).then(function(n){n&&Lo([n],t)})}function cm(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:_r(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:_r(i||{})),e(r,A(A({},n),{},{mask:i}))}}var fm=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Oe:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,u=n.maskId,d=u===void 0?null:u,h=n.title,y=h===void 0?null:h,E=n.titleId,R=E===void 0?null:E,H=n.classes,L=H===void 0?[]:H,_=n.attributes,S=_===void 0?{}:_,j=n.styles,$=j===void 0?{}:j;if(!!t){var K=t.prefix,re=t.iconName,ce=t.icon;return zn(A({type:"icon"},t),function(){return ot("beforeDOMElementCreation",{iconDefinition:t,params:n}),N.autoA11y&&(y?S["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(R||Kt()):(S["aria-hidden"]="true",S.focusable="false")),ai({icons:{main:wr(ce),mask:l?wr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:K,iconName:re,transform:A(A({},Oe),i),symbol:o,title:y,maskId:d,titleId:R,extra:{attributes:S,styles:$,classes:L}})})}},um={mixout:function(){return{icon:cm(fm)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ia,n.nodeCallback=lm,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?Z:r,a=n.callback,o=a===void 0?function(){}:a;return ia(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,d=r.mask,h=r.maskId,y=r.extra;return new Promise(function(E,R){Promise.all([xr(i,s),d.iconName?xr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(H){var L=Xr(H,2),_=L[0],S=L[1];E([n,ai({icons:{main:_,mask:S},prefix:s,iconName:i,transform:l,symbol:u,maskId:h,title:a,titleId:o,extra:y,watchable:!0})])}).catch(R)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=Fn(s);l.length>0&&(i.style=l);var u;return ti(o)&&(u=Re("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(u||a.icon),{children:r,attributes:i}}}},dm={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return zn({type:"layer"},function(){ot("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(N.familyPrefix,"-layers")].concat(Ln(a)).join(" ")},children:o}]})}}}},mm={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,d=r.styles,h=d===void 0?{}:d;return zn({type:"counter",content:n},function(){return ot("beforeDOMElementCreation",{content:n,params:r}),Kd({content:n.toString(),title:a,extra:{attributes:u,styles:h,classes:["".concat(N.familyPrefix,"-layers-counter")].concat(Ln(s))}})})}}}},hm={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Oe:i,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,d=r.attributes,h=d===void 0?{}:d,y=r.styles,E=y===void 0?{}:y;return zn({type:"text",content:n},function(){return ot("beforeDOMElementCreation",{content:n,params:r}),Gi({content:n,transform:A(A({},Oe),a),title:s,extra:{attributes:h,styles:E,classes:["".concat(N.familyPrefix,"-layers-text")].concat(Ln(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(mo){var u=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/u,l=d.height/u}return N.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Gi({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},pm=new RegExp('"',"ug"),aa=[1105920,1112319];function gm(e){var t=e.replace(pm,""),n=Sd(t,0),r=n>=aa[0]&&n<=aa[1],i=t.length===2?t[0]===t[1]:!1;return{value:vr(i?t[0]:t),isSecondary:r||i}}function oa(e,t){var n="".concat(rd).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=At(e.children),o=a.filter(function(re){return re.getAttribute(gr)===t})[0],s=qe.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(ld),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var h=s.getPropertyValue("content"),y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?_n[l[2].toLowerCase()]:cd[u],E=gm(h),R=E.value,H=E.isSecondary,L=l[0].startsWith("FontAwesome"),_=ri(y,R),S=_;if(L){var j=Rd(R);j.iconName&&j.prefix&&(_=j.iconName,y=j.prefix)}if(_&&!H&&(!o||o.getAttribute(Jr)!==y||o.getAttribute(Gr)!==S)){e.setAttribute(n,S),o&&e.removeChild(o);var $=om(),K=$.extra;K.attributes[gr]=t,xr(_,y).then(function(re){var ce=ai(A(A({},$),{},{icons:{main:re,mask:ii()},prefix:y,iconName:S,extra:K,watchable:!0})),_e=Z.createElement("svg");t==="::before"?e.insertBefore(_e,e.firstChild):e.appendChild(_e),_e.outerHTML=ce.map(function(oe){return qt(oe)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function vm(e){return Promise.all([oa(e,"::before"),oa(e,"::after")])}function bm(e){return e.parentNode!==document.head&&!~ad.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(gr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function sa(e){if(!!ze)return new Promise(function(t,n){var r=At(e.querySelectorAll("*")).filter(bm).map(vm),i=oi.begin("searchPseudoElements");Fo(),Promise.all(r).then(function(){i(),kr(),t()}).catch(function(){i(),kr(),n()})})}var ym={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=sa,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Z:r;N.searchPseudoElements&&sa(i)}}},la=!1,_m={mixout:function(){return{dom:{unwatch:function(){Fo(),la=!0}}}},hooks:function(){return{bootstrap:function(){na(yr("mutationObserverCallbacks",{}))},noAuto:function(){nm()},watch:function(n){var r=n.observeMutationsRoot;la?kr():na(yr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},ca=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},wm={mixout:function(){return{parse:{transform:function(n){return ca(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=ca(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),d="rotate(".concat(i.rotate," 0 0)"),h={transform:"".concat(l," ").concat(u," ").concat(d)},y={transform:"translate(".concat(o/2*-1," -256)")},E={outer:s,inner:h,path:y};return{tag:"g",attributes:A({},E.outer),children:[{tag:"g",attributes:A({},E.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:A(A({},r.icon.attributes),E.path)}]}]}}}},Jn={x:0,y:0,width:"100%",height:"100%"};function fa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function xm(e){return e.tag==="g"?e.children:[e]}var Cm={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?jn(i.split(" ").map(function(o){return o.trim()})):ii();return a.prefix||(a.prefix=Ve()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,u=a.width,d=a.icon,h=o.width,y=o.icon,E=wd({transform:l,containerWidth:h,iconWidth:u}),R={tag:"rect",attributes:A(A({},Jn),{},{fill:"white"})},H=d.children?{children:d.children.map(fa)}:{},L={tag:"g",attributes:A({},E.inner),children:[fa(A({tag:d.tag,attributes:A(A({},d.attributes),E.path)},H))]},_={tag:"g",attributes:A({},E.outer),children:[L]},S="mask-".concat(s||Kt()),j="clip-".concat(s||Kt()),$={tag:"mask",attributes:A(A({},Jn),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[R,_]},K={tag:"defs",children:[{tag:"clipPath",attributes:{id:j},children:xm(y)},$]};return r.push(K,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(j,")"),mask:"url(#".concat(S,")")},Jn)}),{children:r,attributes:i}}}},km={provides:function(t){var n=!1;qe.matchMedia&&(n=qe.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:A(A({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=A(A({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:A(A({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:A(A({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:A(A({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:A(A({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:A(A({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Am={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},Em=[kd,um,dm,mm,hm,ym,_m,wm,Cm,km,Am];Dd(Em,{mixoutsTo:me});me.noAuto;var jo=me.config,Om=me.library;me.dom;var zo=me.parse;me.findIconDefinition;me.toHtml;var Pm=me.icon;me.layer;var Sm=me.text;me.counter;/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Tm={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"]},Mm=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Im(e,t){return t={exports:{}},e(t,t.exports),t.exports}var Nm=Im(function(e){(function(t){var n=function(_,S,j){if(!u(S)||h(S)||y(S)||E(S)||l(S))return S;var $,K=0,re=0;if(d(S))for($=[],re=S.length;K<re;K++)$.push(n(_,S[K],j));else{$={};for(var ce in S)Object.prototype.hasOwnProperty.call(S,ce)&&($[_(ce,j)]=n(_,S[ce],j))}return $},r=function(_,S){S=S||{};var j=S.separator||"_",$=S.split||/(?=[A-Z])/;return _.split($).join(j)},i=function(_){return R(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(S,j){return j?j.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},a=function(_){var S=i(_);return S.substr(0,1).toUpperCase()+S.substr(1)},o=function(_,S){return r(_,S).toLowerCase()},s=Object.prototype.toString,l=function(_){return typeof _=="function"},u=function(_){return _===Object(_)},d=function(_){return s.call(_)=="[object Array]"},h=function(_){return s.call(_)=="[object Date]"},y=function(_){return s.call(_)=="[object RegExp]"},E=function(_){return s.call(_)=="[object Boolean]"},R=function(_){return _=_-0,_===_},H=function(_,S){var j=S&&"process"in S?S.process:S;return typeof j!="function"?_:function($,K){return j($,_,K)}},L={camelize:i,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(_,S){return n(H(i,S),_)},decamelizeKeys:function(_,S){return n(H(o,S),_,S)},pascalizeKeys:function(_,S){return n(H(a,S),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=L:t.humps=L})(Mm)}),Lm=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ft=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},Cn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fm=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(e,r)||(n[r]=e[r]);return n},Ar=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}else return Array.from(e)};function Rm(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Nm.camelize(n.slice(0,r)),a=n.slice(r+1).trim();return t[i]=a,t},{})}function jm(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function li(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return li(l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var d=e.attributes[u];switch(u){case"class":l.class=jm(d);break;case"style":l.style=Rm(d);break;default:l.attrs[u]=d}return l},{attrs:{},class:{},style:{}});n.class;var a=n.style,o=a===void 0?{}:a,s=Fm(n,["class","style"]);return oo(e.tag,Cn({},t,{class:i.class,style:Cn({},i.style,o)},i.attrs,s),r)}var Do=!1;try{Do=!0}catch{}function zm(){if(!Do&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function $t(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Ft({},e,t):{}}function Dm(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Ft(t,"fa-"+e.size,e.size!==null),Ft(t,"fa-rotate-"+e.rotation,e.rotation!==null),Ft(t,"fa-pull-"+e.pull,e.pull!==null),Ft(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function ua(e){if(e===null)return null;if((typeof e=="undefined"?"undefined":Lm(e))==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Hm=st({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(t){return["horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=he(function(){return ua(t.icon)}),a=he(function(){return $t("classes",Dm(t))}),o=he(function(){return $t("transform",typeof t.transform=="string"?zo.transform(t.transform):t.transform)}),s=he(function(){return $t("mask",ua(t.mask))}),l=he(function(){return Pm(i.value,Cn({},a.value,o.value,s.value,{symbol:t.symbol,title:t.title}))});rn(l,function(d){if(!d)return zm("Could not find one or more icon(s)",i.value,s.value)},{immediate:!0});var u=he(function(){return l.value?li(l.value.abstract[0],{},r):null});return function(){return u.value}}});st({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,i=jo.familyPrefix,a=he(function(){return[i+"-layers"].concat(Ar(t.fixedWidth?[i+"-fw"]:[]))});return function(){return oo("div",{class:a.value},r.default?r.default():[])}}});st({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,i=jo.familyPrefix,a=he(function(){return $t("classes",[].concat(Ar(t.counter?[i+"-layers-counter"]:[]),Ar(t.position?[i+"-layers-"+t.position]:[])))}),o=he(function(){return $t("transform",typeof t.transform=="string"?zo.transform(t.transform):t.transform)}),s=he(function(){var u=Sm(t.value.toString(),Cn({},o.value,a.value)),d=u.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=he(function(){return li(s.value,{},r)});return function(){return l.value}}});Om.add(Tm);fc(Ku).component("icon",Hm).mount("#app");
