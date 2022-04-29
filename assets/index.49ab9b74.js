const hs=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}};hs();function Br(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const ps="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gs=Br(ps);function Na(e){return!!e||e===""}function Qt(e){if(j(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=ce(r)?ys(r):Qt(r);if(i)for(const a in i)t[a]=i[a]}return t}else{if(ce(e))return e;if(ae(e))return e}}const vs=/;(?![^(]*\))/g,bs=/:(.+)/;function ys(e){const t={};return e.split(vs).forEach(n=>{if(n){const r=n.split(bs);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Wr(e){let t="";if(ce(e))t=e;else if(j(e))for(let n=0;n<e.length;n++){const r=Wr(e[n]);r&&(t+=r+" ")}else if(ae(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ur=e=>ce(e)?e:e==null?"":j(e)||ae(e)&&(e.toString===Ha||!W(e.toString))?JSON.stringify(e,La,2):String(e),La=(e,t)=>t&&t.__v_isRef?La(e,t.value):It(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Fa(t)?{[`Set(${t.size})`]:[...t.values()]}:ae(t)&&!j(t)&&!Da(t)?String(t):t,X={},St=[],Te=()=>{},ws=()=>!1,_s=/^on[^a-z]/,Rn=e=>_s.test(e),Ur=e=>e.startsWith("onUpdate:"),le=Object.assign,Yr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Cs=Object.prototype.hasOwnProperty,K=(e,t)=>Cs.call(e,t),j=Array.isArray,It=e=>Hn(e)==="[object Map]",Fa=e=>Hn(e)==="[object Set]",W=e=>typeof e=="function",ce=e=>typeof e=="string",Kr=e=>typeof e=="symbol",ae=e=>e!==null&&typeof e=="object",Ra=e=>ae(e)&&W(e.then)&&W(e.catch),Ha=Object.prototype.toString,Hn=e=>Ha.call(e),xs=e=>Hn(e).slice(8,-1),Da=e=>Hn(e)==="[object Object]",Vr=e=>ce(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,hn=Br(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Dn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ks=/-(\w)/g,Fe=Dn(e=>e.replace(ks,(t,n)=>n?n.toUpperCase():"")),As=/\B([A-Z])/g,bt=Dn(e=>e.replace(As,"-$1").toLowerCase()),$n=Dn(e=>e.charAt(0).toUpperCase()+e.slice(1)),er=Dn(e=>e?`on${$n(e)}`:""),Cn=(e,t)=>!Object.is(e,t),tr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},xn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},$a=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Si;const Es=()=>Si||(Si=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let $e;class Ts{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&$e&&(this.parent=$e,this.index=($e.scopes||($e.scopes=[])).push(this)-1)}run(t){if(this.active)try{return $e=this,t()}finally{$e=this.parent}}on(){$e=this}off(){$e=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function Os(e,t=$e){t&&t.active&&t.effects.push(e)}const qr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},ja=e=>(e.w&nt)>0,za=e=>(e.n&nt)>0,Ms=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=nt},Ss=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];ja(i)&&!za(i)?i.delete(e):t[n++]=i,i.w&=~nt,i.n&=~nt}t.length=n}},dr=new WeakMap;let Bt=0,nt=1;const mr=30;let Ne;const mt=Symbol(""),hr=Symbol("");class Zr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Os(this,r)}run(){if(!this.active)return this.fn();let t=Ne,n=et;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ne,Ne=this,et=!0,nt=1<<++Bt,Bt<=mr?Ms(this):Ii(this),this.fn()}finally{Bt<=mr&&Ss(this),nt=1<<--Bt,Ne=this.parent,et=n,this.parent=void 0}}stop(){this.active&&(Ii(this),this.onStop&&this.onStop(),this.active=!1)}}function Ii(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let et=!0;const Ba=[];function Rt(){Ba.push(et),et=!1}function Ht(){const e=Ba.pop();et=e===void 0?!0:e}function be(e,t,n){if(et&&Ne){let r=dr.get(e);r||dr.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=qr()),Wa(i)}}function Wa(e,t){let n=!1;Bt<=mr?za(e)||(e.n|=nt,n=!ja(e)):n=!e.has(Ne),n&&(e.add(Ne),Ne.deps.push(e))}function ze(e,t,n,r,i,a){const o=dr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&j(e))o.forEach((l,f)=>{(f==="length"||f>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":j(e)?Vr(n)&&s.push(o.get("length")):(s.push(o.get(mt)),It(e)&&s.push(o.get(hr)));break;case"delete":j(e)||(s.push(o.get(mt)),It(e)&&s.push(o.get(hr)));break;case"set":It(e)&&s.push(o.get(mt));break}if(s.length===1)s[0]&&pr(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);pr(qr(l))}}function pr(e,t){for(const n of j(e)?e:[...e])(n!==Ne||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Is=Br("__proto__,__v_isRef,__isVue"),Ua=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(Kr)),Ps=Xr(),Ns=Xr(!1,!0),Ls=Xr(!0),Pi=Fs();function Fs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=q(this);for(let a=0,o=this.length;a<o;a++)be(r,"get",a+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(q)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Rt();const r=q(this)[t].apply(this,n);return Ht(),r}}),e}function Xr(e=!1,t=!1){return function(r,i,a){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&a===(e?t?Js:Za:t?qa:Va).get(r))return r;const o=j(r);if(!e&&o&&K(Pi,i))return Reflect.get(Pi,i,a);const s=Reflect.get(r,i,a);return(Kr(i)?Ua.has(i):Is(i))||(e||be(r,"get",i),t)?s:ue(s)?!o||!Vr(i)?s.value:s:ae(s)?e?Xa(s):Qr(s):s}}const Rs=Ya(),Hs=Ya(!0);function Ya(e=!1){return function(n,r,i,a){let o=n[r];if(en(o)&&ue(o)&&!ue(i))return!1;if(!e&&!en(i)&&(Ja(i)||(i=q(i),o=q(o)),!j(n)&&ue(o)&&!ue(i)))return o.value=i,!0;const s=j(n)&&Vr(r)?Number(r)<n.length:K(n,r),l=Reflect.set(n,r,i,a);return n===q(a)&&(s?Cn(i,o)&&ze(n,"set",r,i):ze(n,"add",r,i)),l}}function Ds(e,t){const n=K(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&ze(e,"delete",t,void 0),r}function $s(e,t){const n=Reflect.has(e,t);return(!Kr(t)||!Ua.has(t))&&be(e,"has",t),n}function js(e){return be(e,"iterate",j(e)?"length":mt),Reflect.ownKeys(e)}const Ka={get:Ps,set:Rs,deleteProperty:Ds,has:$s,ownKeys:js},zs={get:Ls,set(e,t){return!0},deleteProperty(e,t){return!0}},Bs=le({},Ka,{get:Ns,set:Hs}),Jr=e=>e,jn=e=>Reflect.getPrototypeOf(e);function ln(e,t,n=!1,r=!1){e=e.__v_raw;const i=q(e),a=q(t);t!==a&&!n&&be(i,"get",t),!n&&be(i,"get",a);const{has:o}=jn(i),s=r?Jr:n?ni:ti;if(o.call(i,t))return s(e.get(t));if(o.call(i,a))return s(e.get(a));e!==i&&e.get(t)}function cn(e,t=!1){const n=this.__v_raw,r=q(n),i=q(e);return e!==i&&!t&&be(r,"has",e),!t&&be(r,"has",i),e===i?n.has(e):n.has(e)||n.has(i)}function fn(e,t=!1){return e=e.__v_raw,!t&&be(q(e),"iterate",mt),Reflect.get(e,"size",e)}function Ni(e){e=q(e);const t=q(this);return jn(t).has.call(t,e)||(t.add(e),ze(t,"add",e,e)),this}function Li(e,t){t=q(t);const n=q(this),{has:r,get:i}=jn(n);let a=r.call(n,e);a||(e=q(e),a=r.call(n,e));const o=i.call(n,e);return n.set(e,t),a?Cn(t,o)&&ze(n,"set",e,t):ze(n,"add",e,t),this}function Fi(e){const t=q(this),{has:n,get:r}=jn(t);let i=n.call(t,e);i||(e=q(e),i=n.call(t,e)),r&&r.call(t,e);const a=t.delete(e);return i&&ze(t,"delete",e,void 0),a}function Ri(){const e=q(this),t=e.size!==0,n=e.clear();return t&&ze(e,"clear",void 0,void 0),n}function un(e,t){return function(r,i){const a=this,o=a.__v_raw,s=q(o),l=t?Jr:e?ni:ti;return!e&&be(s,"iterate",mt),o.forEach((f,u)=>r.call(i,l(f),l(u),a))}}function dn(e,t,n){return function(...r){const i=this.__v_raw,a=q(i),o=It(a),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=i[e](...r),u=n?Jr:t?ni:ti;return!t&&be(a,"iterate",l?hr:mt),{next(){const{value:h,done:g}=f.next();return g?{value:h,done:g}:{value:s?[u(h[0]),u(h[1])]:u(h),done:g}},[Symbol.iterator](){return this}}}}function qe(e){return function(...t){return e==="delete"?!1:this}}function Ws(){const e={get(a){return ln(this,a)},get size(){return fn(this)},has:cn,add:Ni,set:Li,delete:Fi,clear:Ri,forEach:un(!1,!1)},t={get(a){return ln(this,a,!1,!0)},get size(){return fn(this)},has:cn,add:Ni,set:Li,delete:Fi,clear:Ri,forEach:un(!1,!0)},n={get(a){return ln(this,a,!0)},get size(){return fn(this,!0)},has(a){return cn.call(this,a,!0)},add:qe("add"),set:qe("set"),delete:qe("delete"),clear:qe("clear"),forEach:un(!0,!1)},r={get(a){return ln(this,a,!0,!0)},get size(){return fn(this,!0)},has(a){return cn.call(this,a,!0)},add:qe("add"),set:qe("set"),delete:qe("delete"),clear:qe("clear"),forEach:un(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=dn(a,!1,!1),n[a]=dn(a,!0,!1),t[a]=dn(a,!1,!0),r[a]=dn(a,!0,!0)}),[e,n,t,r]}const[Us,Ys,Ks,Vs]=Ws();function Gr(e,t){const n=t?e?Vs:Ks:e?Ys:Us;return(r,i,a)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(K(n,i)&&i in r?n:r,i,a)}const qs={get:Gr(!1,!1)},Zs={get:Gr(!1,!0)},Xs={get:Gr(!0,!1)},Va=new WeakMap,qa=new WeakMap,Za=new WeakMap,Js=new WeakMap;function Gs(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qs(e){return e.__v_skip||!Object.isExtensible(e)?0:Gs(xs(e))}function Qr(e){return en(e)?e:ei(e,!1,Ka,qs,Va)}function el(e){return ei(e,!1,Bs,Zs,qa)}function Xa(e){return ei(e,!0,zs,Xs,Za)}function ei(e,t,n,r,i){if(!ae(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=i.get(e);if(a)return a;const o=Qs(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function Pt(e){return en(e)?Pt(e.__v_raw):!!(e&&e.__v_isReactive)}function en(e){return!!(e&&e.__v_isReadonly)}function Ja(e){return!!(e&&e.__v_isShallow)}function Ga(e){return Pt(e)||en(e)}function q(e){const t=e&&e.__v_raw;return t?q(t):e}function Qa(e){return xn(e,"__v_skip",!0),e}const ti=e=>ae(e)?Qr(e):e,ni=e=>ae(e)?Xa(e):e;function tl(e){et&&Ne&&(e=q(e),Wa(e.dep||(e.dep=qr())))}function nl(e,t){e=q(e),e.dep&&pr(e.dep)}function ue(e){return!!(e&&e.__v_isRef===!0)}function rl(e){return ue(e)?e.value:e}const il={get:(e,t,n)=>rl(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return ue(i)&&!ue(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function eo(e){return Pt(e)?e:new Proxy(e,il)}class al{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Zr(t,()=>{this._dirty||(this._dirty=!0,nl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=q(this);return tl(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function ol(e,t,n=!1){let r,i;const a=W(e);return a?(r=e,i=Te):(r=e.get,i=e.set),new al(r,i,a||!i,n)}Promise.resolve();function tt(e,t,n,r){let i;try{i=r?e(...r):e()}catch(a){zn(a,t,n)}return i}function Ce(e,t,n,r){if(W(e)){const a=tt(e,t,n,r);return a&&Ra(a)&&a.catch(o=>{zn(o,t,n)}),a}const i=[];for(let a=0;a<e.length;a++)i.push(Ce(e[a],t,n,r));return i}function zn(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let a=t.parent;const o=t.proxy,s=n;for(;a;){const f=a.ec;if(f){for(let u=0;u<f.length;u++)if(f[u](e,o,s)===!1)return}a=a.parent}const l=t.appContext.config.errorHandler;if(l){tt(l,null,10,[e,o,s]);return}}sl(e,n,i,r)}function sl(e,t,n,r=!0){console.error(e)}let kn=!1,gr=!1;const ve=[];let je=0;const Vt=[];let Wt=null,At=0;const qt=[];let Ge=null,Et=0;const to=Promise.resolve();let ri=null,vr=null;function ll(e){const t=ri||to;return e?t.then(this?e.bind(this):e):t}function cl(e){let t=je+1,n=ve.length;for(;t<n;){const r=t+n>>>1;tn(ve[r])<e?t=r+1:n=r}return t}function no(e){(!ve.length||!ve.includes(e,kn&&e.allowRecurse?je+1:je))&&e!==vr&&(e.id==null?ve.push(e):ve.splice(cl(e.id),0,e),ro())}function ro(){!kn&&!gr&&(gr=!0,ri=to.then(oo))}function fl(e){const t=ve.indexOf(e);t>je&&ve.splice(t,1)}function io(e,t,n,r){j(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),ro()}function ul(e){io(e,Wt,Vt,At)}function dl(e){io(e,Ge,qt,Et)}function ii(e,t=null){if(Vt.length){for(vr=t,Wt=[...new Set(Vt)],Vt.length=0,At=0;At<Wt.length;At++)Wt[At]();Wt=null,At=0,vr=null,ii(e,t)}}function ao(e){if(qt.length){const t=[...new Set(qt)];if(qt.length=0,Ge){Ge.push(...t);return}for(Ge=t,Ge.sort((n,r)=>tn(n)-tn(r)),Et=0;Et<Ge.length;Et++)Ge[Et]();Ge=null,Et=0}}const tn=e=>e.id==null?1/0:e.id;function oo(e){gr=!1,kn=!0,ii(e),ve.sort((n,r)=>tn(n)-tn(r));const t=Te;try{for(je=0;je<ve.length;je++){const n=ve[je];n&&n.active!==!1&&tt(n,null,14)}}finally{je=0,ve.length=0,ao(),kn=!1,ri=null,(ve.length||Vt.length||qt.length)&&oo(e)}}function ml(e,t,...n){const r=e.vnode.props||X;let i=n;const a=t.startsWith("update:"),o=a&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:g}=r[u]||X;g?i=n.map(k=>k.trim()):h&&(i=n.map($a))}let s,l=r[s=er(t)]||r[s=er(Fe(t))];!l&&a&&(l=r[s=er(bt(t))]),l&&Ce(l,e,6,i);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ce(f,e,6,i)}}function so(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const a=e.emits;let o={},s=!1;if(!W(e)){const l=f=>{const u=so(f,t,!0);u&&(s=!0,le(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!a&&!s?(r.set(e,null),null):(j(a)?a.forEach(l=>o[l]=null):le(o,a),r.set(e,o),o)}function ai(e,t){return!e||!Rn(t)?!1:(t=t.slice(2).replace(/Once$/,""),K(e,t[0].toLowerCase()+t.slice(1))||K(e,bt(t))||K(e,t))}let Ae=null,lo=null;function An(e){const t=Ae;return Ae=e,lo=e&&e.type.__scopeId||null,t}function br(e,t=Ae,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&Vi(-1);const a=An(t),o=e(...i);return An(a),r._d&&Vi(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function nr(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:a,propsOptions:[o],slots:s,attrs:l,emit:f,render:u,renderCache:h,data:g,setupState:k,ctx:I,inheritAttrs:D}=e;let P,w;const T=An(e);try{if(n.shapeFlag&4){const z=i||r;P=Pe(u.call(z,z,h,a,k,g,I)),w=l}else{const z=t;P=Pe(z.length>1?z(a,{attrs:l,slots:s,emit:f}):z(a,null)),w=t.props?l:hl(l)}}catch(z){Zt.length=0,zn(z,e,1),P=A(Re)}let H=P;if(w&&D!==!1){const z=Object.keys(w),{shapeFlag:U}=H;z.length&&U&7&&(o&&z.some(Ur)&&(w=pl(w,o)),H=Lt(H,w))}return n.dirs&&(H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&(H.transition=n.transition),P=H,An(T),P}const hl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Rn(n))&&((t||(t={}))[n]=e[n]);return t},pl=(e,t)=>{const n={};for(const r in e)(!Ur(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function gl(e,t,n){const{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:l}=t,f=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Hi(r,o,f):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const g=u[h];if(o[g]!==r[g]&&!ai(f,g))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Hi(r,o,f):!0:!!o;return!1}function Hi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const a=r[i];if(t[a]!==e[a]&&!ai(n,a))return!0}return!1}function vl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const bl=e=>e.__isSuspense;function yl(e,t){t&&t.pendingBranch?j(e)?t.effects.push(...e):t.effects.push(e):dl(e)}function wl(e,t){if(oe){let n=oe.provides;const r=oe.parent&&oe.parent.provides;r===n&&(n=oe.provides=Object.create(r)),n[e]=t}}function rr(e,t,n=!1){const r=oe||Ae;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&W(t)?t.call(r.proxy):t}}const Di={};function pn(e,t,n){return co(e,t,n)}function co(e,t,{immediate:n,deep:r,flush:i,onTrack:a,onTrigger:o}=X){const s=oe;let l,f=!1,u=!1;if(ue(e)?(l=()=>e.value,f=Ja(e)):Pt(e)?(l=()=>e,r=!0):j(e)?(u=!0,f=e.some(Pt),l=()=>e.map(w=>{if(ue(w))return w.value;if(Pt(w))return Tt(w);if(W(w))return tt(w,s,2)})):W(e)?t?l=()=>tt(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return h&&h(),Ce(e,s,3,[g])}:l=Te,t&&r){const w=l;l=()=>Tt(w())}let h,g=w=>{h=P.onStop=()=>{tt(w,s,4)}};if(nn)return g=Te,t?n&&Ce(t,s,3,[l(),u?[]:void 0,g]):l(),Te;let k=u?[]:Di;const I=()=>{if(!!P.active)if(t){const w=P.run();(r||f||(u?w.some((T,H)=>Cn(T,k[H])):Cn(w,k)))&&(h&&h(),Ce(t,s,3,[w,k===Di?void 0:k,g]),k=w)}else P.run()};I.allowRecurse=!!t;let D;i==="sync"?D=I:i==="post"?D=()=>he(I,s&&s.suspense):D=()=>{!s||s.isMounted?ul(I):I()};const P=new Zr(l,D);return t?n?I():k=P.run():i==="post"?he(P.run.bind(P),s&&s.suspense):P.run(),()=>{P.stop(),s&&s.scope&&Yr(s.scope.effects,P)}}function _l(e,t,n){const r=this.proxy,i=ce(e)?e.includes(".")?fo(r,e):()=>r[e]:e.bind(r,r);let a;W(t)?a=t:(a=t.handler,n=t);const o=oe;Ft(this);const s=co(i,a.bind(r),n);return o?Ft(o):pt(),s}function fo(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Tt(e,t){if(!ae(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ue(e))Tt(e.value,t);else if(j(e))for(let n=0;n<e.length;n++)Tt(e[n],t);else if(Fa(e)||It(e))e.forEach(n=>{Tt(n,t)});else if(Da(e))for(const n in e)Tt(e[n],t);return e}function Cl(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return go(()=>{e.isMounted=!0}),vo(()=>{e.isUnmounting=!0}),e}const we=[Function,Array],xl={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:we,onEnter:we,onAfterEnter:we,onEnterCancelled:we,onBeforeLeave:we,onLeave:we,onAfterLeave:we,onLeaveCancelled:we,onBeforeAppear:we,onAppear:we,onAfterAppear:we,onAppearCancelled:we},setup(e,{slots:t}){const n=oc(),r=Cl();let i;return()=>{const a=t.default&&ho(t.default(),!0);if(!a||!a.length)return;const o=q(e),{mode:s}=o,l=a[0];if(r.isLeaving)return ir(l);const f=$i(l);if(!f)return ir(l);const u=yr(f,o,r,n);wr(f,u);const h=n.subTree,g=h&&$i(h);let k=!1;const{getTransitionKey:I}=f.type;if(I){const D=I();i===void 0?i=D:D!==i&&(i=D,k=!0)}if(g&&g.type!==Re&&(!ft(f,g)||k)){const D=yr(g,o,r,n);if(wr(g,D),s==="out-in")return r.isLeaving=!0,D.afterLeave=()=>{r.isLeaving=!1,n.update()},ir(l);s==="in-out"&&f.type!==Re&&(D.delayLeave=(P,w,T)=>{const H=mo(r,g);H[String(g.key)]=g,P._leaveCb=()=>{w(),P._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=T})}return l}}},uo=xl;function mo(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function yr(e,t,n,r){const{appear:i,mode:a,persisted:o=!1,onBeforeEnter:s,onEnter:l,onAfterEnter:f,onEnterCancelled:u,onBeforeLeave:h,onLeave:g,onAfterLeave:k,onLeaveCancelled:I,onBeforeAppear:D,onAppear:P,onAfterAppear:w,onAppearCancelled:T}=t,H=String(e.key),z=mo(n,e),U=(B,J)=>{B&&Ce(B,r,9,J)},re={mode:a,persisted:o,beforeEnter(B){let J=s;if(!n.isMounted)if(i)J=D||s;else return;B._leaveCb&&B._leaveCb(!0);const V=z[H];V&&ft(e,V)&&V.el._leaveCb&&V.el._leaveCb(),U(J,[B])},enter(B){let J=l,V=f,me=u;if(!n.isMounted)if(i)J=P||l,V=w||f,me=T||u;else return;let fe=!1;const R=B._enterCb=ie=>{fe||(fe=!0,ie?U(me,[B]):U(V,[B]),re.delayedLeave&&re.delayedLeave(),B._enterCb=void 0)};J?(J(B,R),J.length<=1&&R()):R()},leave(B,J){const V=String(e.key);if(B._enterCb&&B._enterCb(!0),n.isUnmounting)return J();U(h,[B]);let me=!1;const fe=B._leaveCb=R=>{me||(me=!0,J(),R?U(I,[B]):U(k,[B]),B._leaveCb=void 0,z[V]===e&&delete z[V])};z[V]=e,g?(g(B,fe),g.length<=1&&fe()):fe()},clone(B){return yr(B,t,n,r)}};return re}function ir(e){if(Bn(e))return e=Lt(e),e.children=null,e}function $i(e){return Bn(e)?e.children?e.children[0]:void 0:e}function wr(e,t){e.shapeFlag&6&&e.component?wr(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ho(e,t=!1){let n=[],r=0;for(let i=0;i<e.length;i++){const a=e[i];a.type===ke?(a.patchFlag&128&&r++,n=n.concat(ho(a.children,t))):(t||a.type!==Re)&&n.push(a)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function at(e){return W(e)?{setup:e,name:e.name}:e}const _r=e=>!!e.type.__asyncLoader,Bn=e=>e.type.__isKeepAlive;function kl(e,t){po(e,"a",t)}function Al(e,t){po(e,"da",t)}function po(e,t,n=oe){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Wn(t,r,n),n){let i=n.parent;for(;i&&i.parent;)Bn(i.parent.vnode)&&El(r,t,n,i),i=i.parent}}function El(e,t,n,r){const i=Wn(t,e,r,!0);bo(()=>{Yr(r[t],i)},n)}function Wn(e,t,n=oe,r=!1){if(n){const i=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Rt(),Ft(n);const s=Ce(t,n,e,o);return pt(),Ht(),s});return r?i.unshift(a):i.push(a),a}}const Ye=e=>(t,n=oe)=>(!nn||e==="sp")&&Wn(e,t,n),Tl=Ye("bm"),go=Ye("m"),Ol=Ye("bu"),Ml=Ye("u"),vo=Ye("bum"),bo=Ye("um"),Sl=Ye("sp"),Il=Ye("rtg"),Pl=Ye("rtc");function Nl(e,t=oe){Wn("ec",e,t)}let Cr=!0;function Ll(e){const t=wo(e),n=e.proxy,r=e.ctx;Cr=!1,t.beforeCreate&&ji(t.beforeCreate,e,"bc");const{data:i,computed:a,methods:o,watch:s,provide:l,inject:f,created:u,beforeMount:h,mounted:g,beforeUpdate:k,updated:I,activated:D,deactivated:P,beforeDestroy:w,beforeUnmount:T,destroyed:H,unmounted:z,render:U,renderTracked:re,renderTriggered:B,errorCaptured:J,serverPrefetch:V,expose:me,inheritAttrs:fe,components:R,directives:ie,filters:Oe}=t;if(f&&Fl(f,r,null,e.appContext.config.unwrapInjectedRef),o)for(const ne in o){const G=o[ne];W(G)&&(r[ne]=G.bind(n))}if(i){const ne=i.call(n,n);ae(ne)&&(e.data=Qr(ne))}if(Cr=!0,a)for(const ne in a){const G=a[ne],He=W(G)?G.bind(n,n):W(G.get)?G.get.bind(n,n):Te,Jn=!W(G)&&W(G.set)?G.set.bind(n):Te,$t=_e({get:He,set:Jn});Object.defineProperty(r,ne,{enumerable:!0,configurable:!0,get:()=>$t.value,set:wt=>$t.value=wt})}if(s)for(const ne in s)yo(s[ne],r,n,ne);if(l){const ne=W(l)?l.call(n):l;Reflect.ownKeys(ne).forEach(G=>{wl(G,ne[G])})}u&&ji(u,e,"c");function se(ne,G){j(G)?G.forEach(He=>ne(He.bind(n))):G&&ne(G.bind(n))}if(se(Tl,h),se(go,g),se(Ol,k),se(Ml,I),se(kl,D),se(Al,P),se(Nl,J),se(Pl,re),se(Il,B),se(vo,T),se(bo,z),se(Sl,V),j(me))if(me.length){const ne=e.exposed||(e.exposed={});me.forEach(G=>{Object.defineProperty(ne,G,{get:()=>n[G],set:He=>n[G]=He})})}else e.exposed||(e.exposed={});U&&e.render===Te&&(e.render=U),fe!=null&&(e.inheritAttrs=fe),R&&(e.components=R),ie&&(e.directives=ie)}function Fl(e,t,n=Te,r=!1){j(e)&&(e=xr(e));for(const i in e){const a=e[i];let o;ae(a)?"default"in a?o=rr(a.from||i,a.default,!0):o=rr(a.from||i):o=rr(a),ue(o)&&r?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[i]=o}}function ji(e,t,n){Ce(j(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function yo(e,t,n,r){const i=r.includes(".")?fo(n,r):()=>n[r];if(ce(e)){const a=t[e];W(a)&&pn(i,a)}else if(W(e))pn(i,e.bind(n));else if(ae(e))if(j(e))e.forEach(a=>yo(a,t,n,r));else{const a=W(e.handler)?e.handler.bind(n):t[e.handler];W(a)&&pn(i,a,e)}}function wo(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t);let l;return s?l=s:!i.length&&!n&&!r?l=t:(l={},i.length&&i.forEach(f=>En(l,f,o,!0)),En(l,t,o)),a.set(t,l),l}function En(e,t,n,r=!1){const{mixins:i,extends:a}=t;a&&En(e,a,n,!0),i&&i.forEach(o=>En(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Rl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Rl={data:zi,props:ct,emits:ct,methods:ct,computed:ct,beforeCreate:de,created:de,beforeMount:de,mounted:de,beforeUpdate:de,updated:de,beforeDestroy:de,beforeUnmount:de,destroyed:de,unmounted:de,activated:de,deactivated:de,errorCaptured:de,serverPrefetch:de,components:ct,directives:ct,watch:Dl,provide:zi,inject:Hl};function zi(e,t){return t?e?function(){return le(W(e)?e.call(this,this):e,W(t)?t.call(this,this):t)}:t:e}function Hl(e,t){return ct(xr(e),xr(t))}function xr(e){if(j(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function de(e,t){return e?[...new Set([].concat(e,t))]:t}function ct(e,t){return e?le(le(Object.create(null),e),t):t}function Dl(e,t){if(!e)return t;if(!t)return e;const n=le(Object.create(null),e);for(const r in t)n[r]=de(e[r],t[r]);return n}function $l(e,t,n,r=!1){const i={},a={};xn(a,Un,1),e.propsDefaults=Object.create(null),_o(e,t,i,a);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:el(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function jl(e,t,n,r){const{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=q(i),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let h=0;h<u.length;h++){let g=u[h];const k=t[g];if(l)if(K(a,g))k!==a[g]&&(a[g]=k,f=!0);else{const I=Fe(g);i[I]=kr(l,s,I,k,e,!1)}else k!==a[g]&&(a[g]=k,f=!0)}}}else{_o(e,t,i,a)&&(f=!0);let u;for(const h in s)(!t||!K(t,h)&&((u=bt(h))===h||!K(t,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=kr(l,s,h,void 0,e,!0)):delete i[h]);if(a!==s)for(const h in a)(!t||!K(t,h)&&!0)&&(delete a[h],f=!0)}f&&ze(e,"set","$attrs")}function _o(e,t,n,r){const[i,a]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(hn(l))continue;const f=t[l];let u;i&&K(i,u=Fe(l))?!a||!a.includes(u)?n[u]=f:(s||(s={}))[u]=f:ai(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(a){const l=q(n),f=s||X;for(let u=0;u<a.length;u++){const h=a[u];n[h]=kr(i,l,h,f[h],e,!K(f,h))}}return o}function kr(e,t,n,r,i,a){const o=e[n];if(o!=null){const s=K(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&W(l)){const{propsDefaults:f}=i;n in f?r=f[n]:(Ft(i),r=f[n]=l.call(null,t),pt())}else r=l}o[0]&&(a&&!s?r=!1:o[1]&&(r===""||r===bt(n))&&(r=!0))}return r}function Co(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const a=e.props,o={},s=[];let l=!1;if(!W(e)){const u=h=>{l=!0;const[g,k]=Co(h,t,!0);le(o,g),k&&s.push(...k)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!a&&!l)return r.set(e,St),St;if(j(a))for(let u=0;u<a.length;u++){const h=Fe(a[u]);Bi(h)&&(o[h]=X)}else if(a)for(const u in a){const h=Fe(u);if(Bi(h)){const g=a[u],k=o[h]=j(g)||W(g)?{type:g}:g;if(k){const I=Yi(Boolean,k.type),D=Yi(String,k.type);k[0]=I>-1,k[1]=D<0||I<D,(I>-1||K(k,"default"))&&s.push(h)}}}const f=[o,s];return r.set(e,f),f}function Bi(e){return e[0]!=="$"}function Wi(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ui(e,t){return Wi(e)===Wi(t)}function Yi(e,t){return j(t)?t.findIndex(n=>Ui(n,e)):W(t)&&Ui(t,e)?0:-1}const xo=e=>e[0]==="_"||e==="$stable",oi=e=>j(e)?e.map(Pe):[Pe(e)],zl=(e,t,n)=>{const r=br((...i)=>oi(t(...i)),n);return r._c=!1,r},ko=(e,t,n)=>{const r=e._ctx;for(const i in e){if(xo(i))continue;const a=e[i];if(W(a))t[i]=zl(i,a,r);else if(a!=null){const o=oi(a);t[i]=()=>o}}},Ao=(e,t)=>{const n=oi(t);e.slots.default=()=>n},Bl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=q(t),xn(t,"_",n)):ko(t,e.slots={})}else e.slots={},t&&Ao(e,t);xn(e.slots,Un,1)},Wl=(e,t,n)=>{const{vnode:r,slots:i}=e;let a=!0,o=X;if(r.shapeFlag&32){const s=t._;s?n&&s===1?a=!1:(le(i,t),!n&&s===1&&delete i._):(a=!t.$stable,ko(t,i)),o=t}else t&&(Ao(e,t),o={default:1});if(a)for(const s in i)!xo(s)&&!(s in o)&&delete i[s]};function ot(e,t,n,r){const i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){const s=i[o];a&&(s.oldValue=a[o].value);let l=s.dir[r];l&&(Rt(),Ce(l,n,8,[e.el,s,e,t]),Ht())}}function Eo(){return{app:null,config:{isNativeTag:ws,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ul=0;function Yl(e,t){return function(r,i=null){i!=null&&!ae(i)&&(i=null);const a=Eo(),o=new Set;let s=!1;const l=a.app={_uid:Ul++,_component:r,_props:i,_container:null,_context:a,_instance:null,version:mc,get config(){return a.config},set config(f){},use(f,...u){return o.has(f)||(f&&W(f.install)?(o.add(f),f.install(l,...u)):W(f)&&(o.add(f),f(l,...u))),l},mixin(f){return a.mixins.includes(f)||a.mixins.push(f),l},component(f,u){return u?(a.components[f]=u,l):a.components[f]},directive(f,u){return u?(a.directives[f]=u,l):a.directives[f]},mount(f,u,h){if(!s){const g=A(r,i);return g.appContext=a,u&&t?t(g,f):e(g,f,h),s=!0,l._container=f,f.__vue_app__=l,ci(g.component)||g.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,u){return a.provides[f]=u,l}};return l}}function Ar(e,t,n,r,i=!1){if(j(e)){e.forEach((g,k)=>Ar(g,t&&(j(t)?t[k]:t),n,r,i));return}if(_r(r)&&!i)return;const a=r.shapeFlag&4?ci(r.component)||r.component.proxy:r.el,o=i?null:a,{i:s,r:l}=e,f=t&&t.r,u=s.refs===X?s.refs={}:s.refs,h=s.setupState;if(f!=null&&f!==l&&(ce(f)?(u[f]=null,K(h,f)&&(h[f]=null)):ue(f)&&(f.value=null)),W(l))tt(l,s,12,[o,u]);else{const g=ce(l),k=ue(l);if(g||k){const I=()=>{if(e.f){const D=g?u[l]:l.value;i?j(D)&&Yr(D,a):j(D)?D.includes(a)||D.push(a):g?u[l]=[a]:(l.value=[a],e.k&&(u[e.k]=l.value))}else g?(u[l]=o,K(h,l)&&(h[l]=o)):ue(l)&&(l.value=o,e.k&&(u[e.k]=o))};o?(I.id=-1,he(I,n)):I()}}}const he=yl;function Kl(e){return Vl(e)}function Vl(e,t){const n=Es();n.__VUE__=!0;const{insert:r,remove:i,patchProp:a,createElement:o,createText:s,createComment:l,setText:f,setElementText:u,parentNode:h,nextSibling:g,setScopeId:k=Te,cloneNode:I,insertStaticContent:D}=e,P=(c,d,p,b=null,v=null,C=null,E=!1,_=null,x=!!d.dynamicChildren)=>{if(c===d)return;c&&!ft(c,d)&&(b=sn(c),Ve(c,v,C,!0),c=null),d.patchFlag===-2&&(x=!1,d.dynamicChildren=null);const{type:y,ref:N,shapeFlag:S}=d;switch(y){case si:w(c,d,p,b);break;case Re:T(c,d,p,b);break;case gn:c==null&&H(d,p,b,E);break;case ke:ie(c,d,p,b,v,C,E,_,x);break;default:S&1?re(c,d,p,b,v,C,E,_,x):S&6?Oe(c,d,p,b,v,C,E,_,x):(S&64||S&128)&&y.process(c,d,p,b,v,C,E,_,x,_t)}N!=null&&v&&Ar(N,c&&c.ref,C,d||c,!d)},w=(c,d,p,b)=>{if(c==null)r(d.el=s(d.children),p,b);else{const v=d.el=c.el;d.children!==c.children&&f(v,d.children)}},T=(c,d,p,b)=>{c==null?r(d.el=l(d.children||""),p,b):d.el=c.el},H=(c,d,p,b)=>{[c.el,c.anchor]=D(c.children,d,p,b,c.el,c.anchor)},z=({el:c,anchor:d},p,b)=>{let v;for(;c&&c!==d;)v=g(c),r(c,p,b),c=v;r(d,p,b)},U=({el:c,anchor:d})=>{let p;for(;c&&c!==d;)p=g(c),i(c),c=p;i(d)},re=(c,d,p,b,v,C,E,_,x)=>{E=E||d.type==="svg",c==null?B(d,p,b,v,C,E,_,x):me(c,d,v,C,E,_,x)},B=(c,d,p,b,v,C,E,_)=>{let x,y;const{type:N,props:S,shapeFlag:L,transition:$,patchFlag:Y,dirs:te}=c;if(c.el&&I!==void 0&&Y===-1)x=c.el=I(c.el);else{if(x=c.el=o(c.type,C,S&&S.is,S),L&8?u(x,c.children):L&16&&V(c.children,x,null,b,v,C&&N!=="foreignObject",E,_),te&&ot(c,null,b,"created"),S){for(const Q in S)Q!=="value"&&!hn(Q)&&a(x,Q,null,S[Q],C,c.children,b,v,De);"value"in S&&a(x,"value",null,S.value),(y=S.onVnodeBeforeMount)&&Se(y,b,c)}J(x,c,c.scopeId,E,b)}te&&ot(c,null,b,"beforeMount");const Z=(!v||v&&!v.pendingBranch)&&$&&!$.persisted;Z&&$.beforeEnter(x),r(x,d,p),((y=S&&S.onVnodeMounted)||Z||te)&&he(()=>{y&&Se(y,b,c),Z&&$.enter(x),te&&ot(c,null,b,"mounted")},v)},J=(c,d,p,b,v)=>{if(p&&k(c,p),b)for(let C=0;C<b.length;C++)k(c,b[C]);if(v){let C=v.subTree;if(d===C){const E=v.vnode;J(c,E,E.scopeId,E.slotScopeIds,v.parent)}}},V=(c,d,p,b,v,C,E,_,x=0)=>{for(let y=x;y<c.length;y++){const N=c[y]=_?Qe(c[y]):Pe(c[y]);P(null,N,d,p,b,v,C,E,_)}},me=(c,d,p,b,v,C,E)=>{const _=d.el=c.el;let{patchFlag:x,dynamicChildren:y,dirs:N}=d;x|=c.patchFlag&16;const S=c.props||X,L=d.props||X;let $;p&&st(p,!1),($=L.onVnodeBeforeUpdate)&&Se($,p,d,c),N&&ot(d,c,p,"beforeUpdate"),p&&st(p,!0);const Y=v&&d.type!=="foreignObject";if(y?fe(c.dynamicChildren,y,_,p,b,Y,C):E||He(c,d,_,null,p,b,Y,C,!1),x>0){if(x&16)R(_,d,S,L,p,b,v);else if(x&2&&S.class!==L.class&&a(_,"class",null,L.class,v),x&4&&a(_,"style",S.style,L.style,v),x&8){const te=d.dynamicProps;for(let Z=0;Z<te.length;Z++){const Q=te[Z],xe=S[Q],Ct=L[Q];(Ct!==xe||Q==="value")&&a(_,Q,xe,Ct,v,c.children,p,b,De)}}x&1&&c.children!==d.children&&u(_,d.children)}else!E&&y==null&&R(_,d,S,L,p,b,v);(($=L.onVnodeUpdated)||N)&&he(()=>{$&&Se($,p,d,c),N&&ot(d,c,p,"updated")},b)},fe=(c,d,p,b,v,C,E)=>{for(let _=0;_<d.length;_++){const x=c[_],y=d[_],N=x.el&&(x.type===ke||!ft(x,y)||x.shapeFlag&70)?h(x.el):p;P(x,y,N,null,b,v,C,E,!0)}},R=(c,d,p,b,v,C,E)=>{if(p!==b){for(const _ in b){if(hn(_))continue;const x=b[_],y=p[_];x!==y&&_!=="value"&&a(c,_,y,x,E,d.children,v,C,De)}if(p!==X)for(const _ in p)!hn(_)&&!(_ in b)&&a(c,_,p[_],null,E,d.children,v,C,De);"value"in b&&a(c,"value",p.value,b.value)}},ie=(c,d,p,b,v,C,E,_,x)=>{const y=d.el=c?c.el:s(""),N=d.anchor=c?c.anchor:s("");let{patchFlag:S,dynamicChildren:L,slotScopeIds:$}=d;$&&(_=_?_.concat($):$),c==null?(r(y,p,b),r(N,p,b),V(d.children,p,N,v,C,E,_,x)):S>0&&S&64&&L&&c.dynamicChildren?(fe(c.dynamicChildren,L,p,v,C,E,_),(d.key!=null||v&&d===v.subTree)&&To(c,d,!0)):He(c,d,p,N,v,C,E,_,x)},Oe=(c,d,p,b,v,C,E,_,x)=>{d.slotScopeIds=_,c==null?d.shapeFlag&512?v.ctx.activate(d,p,b,E,x):yt(d,p,b,v,C,E,x):se(c,d,x)},yt=(c,d,p,b,v,C,E)=>{const _=c.component=ac(c,b,v);if(Bn(c)&&(_.ctx.renderer=_t),sc(_),_.asyncDep){if(v&&v.registerDep(_,ne),!c.el){const x=_.subTree=A(Re);T(null,x,d,p)}return}ne(_,c,d,p,v,C,E)},se=(c,d,p)=>{const b=d.component=c.component;if(gl(c,d,p))if(b.asyncDep&&!b.asyncResolved){G(b,d,p);return}else b.next=d,fl(b.update),b.update();else d.component=c.component,d.el=c.el,b.vnode=d},ne=(c,d,p,b,v,C,E)=>{const _=()=>{if(c.isMounted){let{next:N,bu:S,u:L,parent:$,vnode:Y}=c,te=N,Z;st(c,!1),N?(N.el=Y.el,G(c,N,E)):N=Y,S&&tr(S),(Z=N.props&&N.props.onVnodeBeforeUpdate)&&Se(Z,$,N,Y),st(c,!0);const Q=nr(c),xe=c.subTree;c.subTree=Q,P(xe,Q,h(xe.el),sn(xe),c,v,C),N.el=Q.el,te===null&&vl(c,Q.el),L&&he(L,v),(Z=N.props&&N.props.onVnodeUpdated)&&he(()=>Se(Z,$,N,Y),v)}else{let N;const{el:S,props:L}=d,{bm:$,m:Y,parent:te}=c,Z=_r(d);if(st(c,!1),$&&tr($),!Z&&(N=L&&L.onVnodeBeforeMount)&&Se(N,te,d),st(c,!0),S&&Qn){const Q=()=>{c.subTree=nr(c),Qn(S,c.subTree,c,v,null)};Z?d.type.__asyncLoader().then(()=>!c.isUnmounted&&Q()):Q()}else{const Q=c.subTree=nr(c);P(null,Q,p,b,c,v,C),d.el=Q.el}if(Y&&he(Y,v),!Z&&(N=L&&L.onVnodeMounted)){const Q=d;he(()=>Se(N,te,Q),v)}d.shapeFlag&256&&c.a&&he(c.a,v),c.isMounted=!0,d=p=b=null}},x=c.effect=new Zr(_,()=>no(c.update),c.scope),y=c.update=x.run.bind(x);y.id=c.uid,st(c,!0),y()},G=(c,d,p)=>{d.component=c;const b=c.vnode.props;c.vnode=d,c.next=null,jl(c,d.props,b,p),Wl(c,d.children,p),Rt(),ii(void 0,c.update),Ht()},He=(c,d,p,b,v,C,E,_,x=!1)=>{const y=c&&c.children,N=c?c.shapeFlag:0,S=d.children,{patchFlag:L,shapeFlag:$}=d;if(L>0){if(L&128){$t(y,S,p,b,v,C,E,_,x);return}else if(L&256){Jn(y,S,p,b,v,C,E,_,x);return}}$&8?(N&16&&De(y,v,C),S!==y&&u(p,S)):N&16?$&16?$t(y,S,p,b,v,C,E,_,x):De(y,v,C,!0):(N&8&&u(p,""),$&16&&V(S,p,b,v,C,E,_,x))},Jn=(c,d,p,b,v,C,E,_,x)=>{c=c||St,d=d||St;const y=c.length,N=d.length,S=Math.min(y,N);let L;for(L=0;L<S;L++){const $=d[L]=x?Qe(d[L]):Pe(d[L]);P(c[L],$,p,null,v,C,E,_,x)}y>N?De(c,v,C,!0,!1,S):V(d,p,b,v,C,E,_,x,S)},$t=(c,d,p,b,v,C,E,_,x)=>{let y=0;const N=d.length;let S=c.length-1,L=N-1;for(;y<=S&&y<=L;){const $=c[y],Y=d[y]=x?Qe(d[y]):Pe(d[y]);if(ft($,Y))P($,Y,p,null,v,C,E,_,x);else break;y++}for(;y<=S&&y<=L;){const $=c[S],Y=d[L]=x?Qe(d[L]):Pe(d[L]);if(ft($,Y))P($,Y,p,null,v,C,E,_,x);else break;S--,L--}if(y>S){if(y<=L){const $=L+1,Y=$<N?d[$].el:b;for(;y<=L;)P(null,d[y]=x?Qe(d[y]):Pe(d[y]),p,Y,v,C,E,_,x),y++}}else if(y>L)for(;y<=S;)Ve(c[y],v,C,!0),y++;else{const $=y,Y=y,te=new Map;for(y=Y;y<=L;y++){const ge=d[y]=x?Qe(d[y]):Pe(d[y]);ge.key!=null&&te.set(ge.key,y)}let Z,Q=0;const xe=L-Y+1;let Ct=!1,Ti=0;const jt=new Array(xe);for(y=0;y<xe;y++)jt[y]=0;for(y=$;y<=S;y++){const ge=c[y];if(Q>=xe){Ve(ge,v,C,!0);continue}let Me;if(ge.key!=null)Me=te.get(ge.key);else for(Z=Y;Z<=L;Z++)if(jt[Z-Y]===0&&ft(ge,d[Z])){Me=Z;break}Me===void 0?Ve(ge,v,C,!0):(jt[Me-Y]=y+1,Me>=Ti?Ti=Me:Ct=!0,P(ge,d[Me],p,null,v,C,E,_,x),Q++)}const Oi=Ct?ql(jt):St;for(Z=Oi.length-1,y=xe-1;y>=0;y--){const ge=Y+y,Me=d[ge],Mi=ge+1<N?d[ge+1].el:b;jt[y]===0?P(null,Me,p,Mi,v,C,E,_,x):Ct&&(Z<0||y!==Oi[Z]?wt(Me,p,Mi,2):Z--)}}},wt=(c,d,p,b,v=null)=>{const{el:C,type:E,transition:_,children:x,shapeFlag:y}=c;if(y&6){wt(c.component.subTree,d,p,b);return}if(y&128){c.suspense.move(d,p,b);return}if(y&64){E.move(c,d,p,_t);return}if(E===ke){r(C,d,p);for(let S=0;S<x.length;S++)wt(x[S],d,p,b);r(c.anchor,d,p);return}if(E===gn){z(c,d,p);return}if(b!==2&&y&1&&_)if(b===0)_.beforeEnter(C),r(C,d,p),he(()=>_.enter(C),v);else{const{leave:S,delayLeave:L,afterLeave:$}=_,Y=()=>r(C,d,p),te=()=>{S(C,()=>{Y(),$&&$()})};L?L(C,Y,te):te()}else r(C,d,p)},Ve=(c,d,p,b=!1,v=!1)=>{const{type:C,props:E,ref:_,children:x,dynamicChildren:y,shapeFlag:N,patchFlag:S,dirs:L}=c;if(_!=null&&Ar(_,null,p,c,!0),N&256){d.ctx.deactivate(c);return}const $=N&1&&L,Y=!_r(c);let te;if(Y&&(te=E&&E.onVnodeBeforeUnmount)&&Se(te,d,c),N&6)ms(c.component,p,b);else{if(N&128){c.suspense.unmount(p,b);return}$&&ot(c,null,d,"beforeUnmount"),N&64?c.type.remove(c,d,p,v,_t,b):y&&(C!==ke||S>0&&S&64)?De(y,d,p,!1,!0):(C===ke&&S&384||!v&&N&16)&&De(x,d,p),b&&Ai(c)}(Y&&(te=E&&E.onVnodeUnmounted)||$)&&he(()=>{te&&Se(te,d,c),$&&ot(c,null,d,"unmounted")},p)},Ai=c=>{const{type:d,el:p,anchor:b,transition:v}=c;if(d===ke){ds(p,b);return}if(d===gn){U(c);return}const C=()=>{i(p),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(c.shapeFlag&1&&v&&!v.persisted){const{leave:E,delayLeave:_}=v,x=()=>E(p,C);_?_(c.el,C,x):x()}else C()},ds=(c,d)=>{let p;for(;c!==d;)p=g(c),i(c),c=p;i(d)},ms=(c,d,p)=>{const{bum:b,scope:v,update:C,subTree:E,um:_}=c;b&&tr(b),v.stop(),C&&(C.active=!1,Ve(E,c,d,p)),_&&he(_,d),he(()=>{c.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},De=(c,d,p,b=!1,v=!1,C=0)=>{for(let E=C;E<c.length;E++)Ve(c[E],d,p,b,v)},sn=c=>c.shapeFlag&6?sn(c.component.subTree):c.shapeFlag&128?c.suspense.next():g(c.anchor||c.el),Ei=(c,d,p)=>{c==null?d._vnode&&Ve(d._vnode,null,null,!0):P(d._vnode||null,c,d,null,null,null,p),ao(),d._vnode=c},_t={p:P,um:Ve,m:wt,r:Ai,mt:yt,mc:V,pc:He,pbc:fe,n:sn,o:e};let Gn,Qn;return t&&([Gn,Qn]=t(_t)),{render:Ei,hydrate:Gn,createApp:Yl(Ei,Gn)}}function st({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function To(e,t,n=!1){const r=e.children,i=t.children;if(j(r)&&j(i))for(let a=0;a<r.length;a++){const o=r[a];let s=i[a];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=i[a]=Qe(i[a]),s.el=o.el),n||To(o,s))}}function ql(e){const t=e.slice(),n=[0];let r,i,a,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(i=n[n.length-1],e[i]<f){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<f?a=s+1:o=s;f<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}const Zl=e=>e.__isTeleport,Oo="components";function Ut(e,t){return Jl(Oo,e,!0,t)||e}const Xl=Symbol();function Jl(e,t,n=!0,r=!1){const i=Ae||oe;if(i){const a=i.type;if(e===Oo){const s=uc(a);if(s&&(s===t||s===Fe(t)||s===$n(Fe(t))))return a}const o=Ki(i[e]||a[e],t)||Ki(i.appContext[e],t);return!o&&r?a:o}}function Ki(e,t){return e&&(e[t]||e[Fe(t)]||e[$n(Fe(t))])}const ke=Symbol(void 0),si=Symbol(void 0),Re=Symbol(void 0),gn=Symbol(void 0),Zt=[];let ht=null;function pe(e=!1){Zt.push(ht=e?null:[])}function Gl(){Zt.pop(),ht=Zt[Zt.length-1]||null}let Tn=1;function Vi(e){Tn+=e}function Mo(e){return e.dynamicChildren=Tn>0?ht||St:null,Gl(),Tn>0&&ht&&ht.push(e),e}function Ie(e,t,n,r,i,a){return Mo(m(e,t,n,r,i,a,!0))}function vn(e,t,n,r,i){return Mo(A(e,t,n,r,i,!0))}function Er(e){return e?e.__v_isVNode===!0:!1}function ft(e,t){return e.type===t.type&&e.key===t.key}const Un="__vInternal",So=({key:e})=>e!=null?e:null,bn=({ref:e,ref_key:t,ref_for:n})=>e!=null?ce(e)||ue(e)||W(e)?{i:Ae,r:e,k:t,f:!!n}:e:null;function m(e,t=null,n=null,r=0,i=null,a=e===ke?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&So(t),ref:t&&bn(t),scopeId:lo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return s?(li(l,n),a&128&&e.normalize(l)):n&&(l.shapeFlag|=ce(n)?8:16),Tn>0&&!o&&ht&&(l.patchFlag>0||a&6)&&l.patchFlag!==32&&ht.push(l),l}const A=Ql;function Ql(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===Xl)&&(e=Re),Er(e)){const s=Lt(e,t,!0);return n&&li(s,n),s}if(dc(e)&&(e=e.__vccOpts),t){t=ec(t);let{class:s,style:l}=t;s&&!ce(s)&&(t.class=Wr(s)),ae(l)&&(Ga(l)&&!j(l)&&(l=le({},l)),t.style=Qt(l))}const o=ce(e)?1:bl(e)?128:Zl(e)?64:ae(e)?4:W(e)?2:0;return m(e,t,n,r,i,o,a,!0)}function ec(e){return e?Ga(e)||Un in e?le({},e):e:null}function Lt(e,t,n=!1){const{props:r,ref:i,patchFlag:a,children:o}=e,s=t?tc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&So(s),ref:t&&t.ref?n&&i?j(i)?i.concat(bn(t)):[i,bn(t)]:bn(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ke?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Lt(e.ssContent),ssFallback:e.ssFallback&&Lt(e.ssFallback),el:e.el,anchor:e.anchor}}function M(e=" ",t=0){return A(si,null,e,t)}function Yn(e,t){const n=A(gn,null,e);return n.staticCount=t,n}function xt(e="",t=!1){return t?(pe(),vn(Re,null,e)):A(Re,null,e)}function Pe(e){return e==null||typeof e=="boolean"?A(Re):j(e)?A(ke,null,e.slice()):typeof e=="object"?Qe(e):A(si,null,String(e))}function Qe(e){return e.el===null||e.memo?e:Lt(e)}function li(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(j(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),li(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(Un in t)?t._ctx=Ae:i===3&&Ae&&(Ae.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else W(t)?(t={default:t,_ctx:Ae},n=32):(t=String(t),r&64?(n=16,t=[M(t)]):n=8);e.children=t,e.shapeFlag|=n}function tc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Wr([t.class,r.class]));else if(i==="style")t.style=Qt([t.style,r.style]);else if(Rn(i)){const a=t[i],o=r[i];o&&a!==o&&!(j(a)&&a.includes(o))&&(t[i]=a?[].concat(a,o):o)}else i!==""&&(t[i]=r[i])}return t}function Se(e,t,n,r=null){Ce(e,t,7,[n,r])}const Tr=e=>e?Io(e)?ci(e)||e.proxy:Tr(e.parent):null,On=le(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Tr(e.parent),$root:e=>Tr(e.root),$emit:e=>e.emit,$options:e=>wo(e),$forceUpdate:e=>()=>no(e.update),$nextTick:e=>ll.bind(e.proxy),$watch:e=>_l.bind(e)}),nc={get({_:e},t){const{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const k=o[t];if(k!==void 0)switch(k){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else{if(r!==X&&K(r,t))return o[t]=1,r[t];if(i!==X&&K(i,t))return o[t]=2,i[t];if((f=e.propsOptions[0])&&K(f,t))return o[t]=3,a[t];if(n!==X&&K(n,t))return o[t]=4,n[t];Cr&&(o[t]=0)}}const u=On[t];let h,g;if(u)return t==="$attrs"&&be(e,"get",t),u(e);if((h=s.__cssModules)&&(h=h[t]))return h;if(n!==X&&K(n,t))return o[t]=4,n[t];if(g=l.config.globalProperties,K(g,t))return g[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:a}=e;return i!==X&&K(i,t)?(i[t]=n,!0):r!==X&&K(r,t)?(r[t]=n,!0):K(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:a}},o){let s;return!!n[o]||e!==X&&K(e,o)||t!==X&&K(t,o)||(s=a[0])&&K(s,o)||K(r,o)||K(On,o)||K(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?this.set(e,t,n.get(),null):n.value!=null&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}},rc=Eo();let ic=0;function ac(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||rc,a={uid:ic++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ts(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Co(r,i),emitsOptions:so(r,i),emit:null,emitted:null,propsDefaults:X,inheritAttrs:r.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=ml.bind(null,a),e.ce&&e.ce(a),a}let oe=null;const oc=()=>oe||Ae,Ft=e=>{oe=e,e.scope.on()},pt=()=>{oe&&oe.scope.off(),oe=null};function Io(e){return e.vnode.shapeFlag&4}let nn=!1;function sc(e,t=!1){nn=t;const{props:n,children:r}=e.vnode,i=Io(e);$l(e,n,i,t),Bl(e,r);const a=i?lc(e,t):void 0;return nn=!1,a}function lc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Qa(new Proxy(e.ctx,nc));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?fc(e):null;Ft(e),Rt();const a=tt(r,e,0,[e.props,i]);if(Ht(),pt(),Ra(a)){if(a.then(pt,pt),t)return a.then(o=>{qi(e,o,t)}).catch(o=>{zn(o,e,0)});e.asyncDep=a}else qi(e,a,t)}else Po(e,t)}function qi(e,t,n){W(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ae(t)&&(e.setupState=eo(t)),Po(e,n)}let Zi;function Po(e,t,n){const r=e.type;if(!e.render){if(!t&&Zi&&!r.render){const i=r.template;if(i){const{isCustomElement:a,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=le(le({isCustomElement:a,delimiters:s},o),l);r.render=Zi(i,f)}}e.render=r.render||Te}Ft(e),Rt(),Ll(e),Ht(),pt()}function cc(e){return new Proxy(e.attrs,{get(t,n){return be(e,"get","$attrs"),t[n]}})}function fc(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=cc(e))},slots:e.slots,emit:e.emit,expose:t}}function ci(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(eo(Qa(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in On)return On[n](e)}}))}function uc(e){return W(e)&&e.displayName||e.name}function dc(e){return W(e)&&"__vccOpts"in e}const _e=(e,t)=>ol(e,t,nn);function fi(e,t,n){const r=arguments.length;return r===2?ae(t)&&!j(t)?Er(t)?A(e,null,[t]):A(e,t):A(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Er(n)&&(n=[n]),A(e,t,n))}const mc="3.2.31",hc="http://www.w3.org/2000/svg",ut=typeof document!="undefined"?document:null,Xi=ut&&ut.createElement("template"),pc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?ut.createElementNS(hc,e):ut.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>ut.createTextNode(e),createComment:e=>ut.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ut.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,i,a){const o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Xi.innerHTML=r?`<svg>${e}</svg>`:e;const s=Xi.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function gc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function vc(e,t,n){const r=e.style,i=ce(n);if(n&&!i){for(const a in n)Or(r,a,n[a]);if(t&&!ce(t))for(const a in t)n[a]==null&&Or(r,a,"")}else{const a=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=a)}}const Ji=/\s*!important$/;function Or(e,t,n){if(j(n))n.forEach(r=>Or(e,t,r));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=bc(e,t);Ji.test(n)?e.setProperty(bt(r),n.replace(Ji,""),"important"):e[r]=n}}const Gi=["Webkit","Moz","ms"],ar={};function bc(e,t){const n=ar[t];if(n)return n;let r=Fe(t);if(r!=="filter"&&r in e)return ar[t]=r;r=$n(r);for(let i=0;i<Gi.length;i++){const a=Gi[i]+r;if(a in e)return ar[t]=a}return t}const Qi="http://www.w3.org/1999/xlink";function yc(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Qi,t.slice(6,t.length)):e.setAttributeNS(Qi,t,n);else{const a=gs(t);n==null||a&&!Na(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function wc(e,t,n,r,i,a,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,i,a),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const s=n==null?"":n;(e.value!==s||e.tagName==="OPTION")&&(e.value=s),n==null&&e.removeAttribute(t);return}if(n===""||n==null){const s=typeof e[t];if(s==="boolean"){e[t]=Na(n);return}else if(n==null&&s==="string"){e[t]="",e.removeAttribute(t);return}else if(s==="number"){try{e[t]=0}catch{}e.removeAttribute(t);return}}try{e[t]=n}catch{}}let Mn=Date.now,No=!1;if(typeof window!="undefined"){Mn()>document.createEvent("Event").timeStamp&&(Mn=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);No=!!(e&&Number(e[1])<=53)}let Mr=0;const _c=Promise.resolve(),Cc=()=>{Mr=0},xc=()=>Mr||(_c.then(Cc),Mr=Mn());function kc(e,t,n,r){e.addEventListener(t,n,r)}function Ac(e,t,n,r){e.removeEventListener(t,n,r)}function Ec(e,t,n,r,i=null){const a=e._vei||(e._vei={}),o=a[t];if(r&&o)o.value=r;else{const[s,l]=Tc(t);if(r){const f=a[t]=Oc(r,i);kc(e,s,f,l)}else o&&(Ac(e,s,o,l),a[t]=void 0)}}const ea=/(?:Once|Passive|Capture)$/;function Tc(e){let t;if(ea.test(e)){t={};let n;for(;n=e.match(ea);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[bt(e.slice(2)),t]}function Oc(e,t){const n=r=>{const i=r.timeStamp||Mn();(No||i>=n.attached-1)&&Ce(Mc(r,n.value),t,5,[r])};return n.value=e,n.attached=xc(),n}function Mc(e,t){if(j(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const ta=/^on[a-z]/,Sc=(e,t,n,r,i=!1,a,o,s,l)=>{t==="class"?gc(e,r,i):t==="style"?vc(e,n,r):Rn(t)?Ur(t)||Ec(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ic(e,t,r,i))?wc(e,t,r,a,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),yc(e,t,r,i))};function Ic(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ta.test(t)&&W(n)):t==="spellcheck"||t==="draggable"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ta.test(t)&&ce(n)?!1:t in e}const Ze="transition",zt="animation",Sn=(e,{slots:t})=>fi(uo,Pc(e),t);Sn.displayName="Transition";const Lo={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Sn.props=le({},uo.props,Lo);const lt=(e,t=[])=>{j(e)?e.forEach(n=>n(...t)):e&&e(...t)},na=e=>e?j(e)?e.some(t=>t.length>1):e.length>1:!1;function Pc(e){const t={};for(const R in e)R in Lo||(t[R]=e[R]);if(e.css===!1)return t;const{name:n="v",type:r,duration:i,enterFromClass:a=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:l=a,appearActiveClass:f=o,appearToClass:u=s,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:k=`${n}-leave-to`}=e,I=Nc(i),D=I&&I[0],P=I&&I[1],{onBeforeEnter:w,onEnter:T,onEnterCancelled:H,onLeave:z,onLeaveCancelled:U,onBeforeAppear:re=w,onAppear:B=T,onAppearCancelled:J=H}=t,V=(R,ie,Oe)=>{kt(R,ie?u:s),kt(R,ie?f:o),Oe&&Oe()},me=(R,ie)=>{kt(R,k),kt(R,g),ie&&ie()},fe=R=>(ie,Oe)=>{const yt=R?B:T,se=()=>V(ie,R,Oe);lt(yt,[ie,se]),ra(()=>{kt(ie,R?l:a),Xe(ie,R?u:s),na(yt)||ia(ie,r,D,se)})};return le(t,{onBeforeEnter(R){lt(w,[R]),Xe(R,a),Xe(R,o)},onBeforeAppear(R){lt(re,[R]),Xe(R,l),Xe(R,f)},onEnter:fe(!1),onAppear:fe(!0),onLeave(R,ie){const Oe=()=>me(R,ie);Xe(R,h),Rc(),Xe(R,g),ra(()=>{kt(R,h),Xe(R,k),na(z)||ia(R,r,P,Oe)}),lt(z,[R,Oe])},onEnterCancelled(R){V(R,!1),lt(H,[R])},onAppearCancelled(R){V(R,!0),lt(J,[R])},onLeaveCancelled(R){me(R),lt(U,[R])}})}function Nc(e){if(e==null)return null;if(ae(e))return[or(e.enter),or(e.leave)];{const t=or(e);return[t,t]}}function or(e){return $a(e)}function Xe(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function kt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function ra(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Lc=0;function ia(e,t,n,r){const i=e._endId=++Lc,a=()=>{i===e._endId&&r()};if(n)return setTimeout(a,n);const{type:o,timeout:s,propCount:l}=Fc(e,t);if(!o)return r();const f=o+"end";let u=0;const h=()=>{e.removeEventListener(f,g),a()},g=k=>{k.target===e&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},s+1),e.addEventListener(f,g)}function Fc(e,t){const n=window.getComputedStyle(e),r=I=>(n[I]||"").split(", "),i=r(Ze+"Delay"),a=r(Ze+"Duration"),o=aa(i,a),s=r(zt+"Delay"),l=r(zt+"Duration"),f=aa(s,l);let u=null,h=0,g=0;t===Ze?o>0&&(u=Ze,h=o,g=a.length):t===zt?f>0&&(u=zt,h=f,g=l.length):(h=Math.max(o,f),u=h>0?o>f?Ze:zt:null,g=u?u===Ze?a.length:l.length:0);const k=u===Ze&&/\b(transform|all)(,|$)/.test(n[Ze+"Property"]);return{type:u,timeout:h,propCount:g,hasTransform:k}}function aa(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>oa(n)+oa(e[r])))}function oa(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Rc(){return document.body.offsetHeight}const Hc={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Dc=(e,t)=>n=>{if(!("key"in n))return;const r=bt(n.key);if(t.some(i=>i===r||Hc[i]===r))return e(n)},$c=le({patchProp:Sc},pc);let sa;function jc(){return sa||(sa=Kl($c))}const zc=(...e)=>{const t=jc().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=Bc(r);if(!i)return;const a=t._component;!W(a)&&!a.render&&!a.template&&(a.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function Bc(e){return ce(e)?document.querySelector(e):e}var an=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n};const Wc=at({}),Uc=m("div",{class:"bg-gray-900 text-white"},[m("section",{class:"bg-[#44C577] bg-gradient-to-t from-[#44C577] to-cyan-600"},[m("h1",null,"JavaScript, but desktop"),m("p",null,"MintScript is a JavaScript inspired language, optimized for running on your machine instead of the browser. This defeats the need for something like node.js and leads to better performance")]),m("svg",{id:"visual",class:"spacer",preserveAspectRatio:"none",viewBox:"0 0 900 200",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1"},[m("path",{d:"M0 112L16.7 118C33.3 124 66.7 136 100 140.8C133.3 145.7 166.7 143.3 200 142.2C233.3 141 266.7 141 300 141C333.3 141 366.7 141 400 143.2C433.3 145.3 466.7 149.7 500 150.5C533.3 151.3 566.7 148.7 600 143.7C633.3 138.7 666.7 131.3 700 130.8C733.3 130.3 766.7 136.7 800 138.7C833.3 140.7 866.7 138.3 883.3 137.2L900 136L900 0L883.3 0C866.7 0 833.3 0 800 0C766.7 0 733.3 0 700 0C666.7 0 633.3 0 600 0C566.7 0 533.3 0 500 0C466.7 0 433.3 0 400 0C366.7 0 333.3 0 300 0C266.7 0 233.3 0 200 0C166.7 0 133.3 0 100 0C66.7 0 33.3 0 16.7 0L0 0Z",fill:"#006f57"}),m("path",{d:"M0 79L16.7 81.8C33.3 84.7 66.7 90.3 100 96.7C133.3 103 166.7 110 200 111C233.3 112 266.7 107 300 102.7C333.3 98.3 366.7 94.7 400 92.5C433.3 90.3 466.7 89.7 500 91.5C533.3 93.3 566.7 97.7 600 98.3C633.3 99 666.7 96 700 92.8C733.3 89.7 766.7 86.3 800 88C833.3 89.7 866.7 96.3 883.3 99.7L900 103L900 0L883.3 0C866.7 0 833.3 0 800 0C766.7 0 733.3 0 700 0C666.7 0 633.3 0 600 0C566.7 0 533.3 0 500 0C466.7 0 433.3 0 400 0C366.7 0 333.3 0 300 0C266.7 0 233.3 0 200 0C166.7 0 133.3 0 100 0C66.7 0 33.3 0 16.7 0L0 0Z",fill:"#0c8b64"}),m("path",{d:"M0 70L16.7 72.7C33.3 75.3 66.7 80.7 100 82.7C133.3 84.7 166.7 83.3 200 81.3C233.3 79.3 266.7 76.7 300 76.3C333.3 76 366.7 78 400 74.5C433.3 71 466.7 62 500 63.2C533.3 64.3 566.7 75.7 600 79.2C633.3 82.7 666.7 78.3 700 76.3C733.3 74.3 766.7 74.7 800 70.5C833.3 66.3 866.7 57.7 883.3 53.3L900 49L900 0L883.3 0C866.7 0 833.3 0 800 0C766.7 0 733.3 0 700 0C666.7 0 633.3 0 600 0C566.7 0 533.3 0 500 0C466.7 0 433.3 0 400 0C366.7 0 333.3 0 300 0C266.7 0 233.3 0 200 0C166.7 0 133.3 0 100 0C66.7 0 33.3 0 16.7 0L0 0Z",fill:"#27a86f"}),m("path",{d:"M0 39L16.7 41.2C33.3 43.3 66.7 47.7 100 44.7C133.3 41.7 166.7 31.3 200 28.7C233.3 26 266.7 31 300 33C333.3 35 366.7 34 400 36.5C433.3 39 466.7 45 500 45.7C533.3 46.3 566.7 41.7 600 37.7C633.3 33.7 666.7 30.3 700 28.7C733.3 27 766.7 27 800 30.5C833.3 34 866.7 41 883.3 44.5L900 48L900 0L883.3 0C866.7 0 833.3 0 800 0C766.7 0 733.3 0 700 0C666.7 0 633.3 0 600 0C566.7 0 533.3 0 500 0C466.7 0 433.3 0 400 0C366.7 0 333.3 0 300 0C266.7 0 233.3 0 200 0C166.7 0 133.3 0 100 0C66.7 0 33.3 0 16.7 0L0 0Z",fill:"#44c577"})]),m("section",null,[m("h1",null,"Missing something? No problem."),m("p",null,"MintScript has an import statement, allowing to import both C# DLLs and MintScript files.")]),m("svg",{id:"visual",class:"spacer",preserveAspectRatio:"none",viewBox:"0 0 900 200",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1"},[m("path",{d:"M0 60L21.5 62.3C43 64.7 86 69.3 128.8 71.3C171.7 73.3 214.3 72.7 257.2 75.7C300 78.7 343 85.3 385.8 82.7C428.7 80 471.3 68 514.2 69.7C557 71.3 600 86.7 642.8 88.3C685.7 90 728.3 78 771.2 75.2C814 72.3 857 78.7 878.5 81.8L900 85L900 201L878.5 201C857 201 814 201 771.2 201C728.3 201 685.7 201 642.8 201C600 201 557 201 514.2 201C471.3 201 428.7 201 385.8 201C343 201 300 201 257.2 201C214.3 201 171.7 201 128.8 201C86 201 43 201 21.5 201L0 201Z",fill:"#fa7268"}),m("path",{d:"M0 77L21.5 80.5C43 84 86 91 128.8 98.2C171.7 105.3 214.3 112.7 257.2 111.2C300 109.7 343 99.3 385.8 91.7C428.7 84 471.3 79 514.2 82.3C557 85.7 600 97.3 642.8 98.3C685.7 99.3 728.3 89.7 771.2 88.8C814 88 857 96 878.5 100L900 104L900 201L878.5 201C857 201 814 201 771.2 201C728.3 201 685.7 201 642.8 201C600 201 557 201 514.2 201C471.3 201 428.7 201 385.8 201C343 201 300 201 257.2 201C214.3 201 171.7 201 128.8 201C86 201 43 201 21.5 201L0 201Z",fill:"#ef5f67"}),m("path",{d:"M0 114L21.5 116.7C43 119.3 86 124.7 128.8 122.2C171.7 119.7 214.3 109.3 257.2 109.8C300 110.3 343 121.7 385.8 129.2C428.7 136.7 471.3 140.3 514.2 136.8C557 133.3 600 122.7 642.8 116.2C685.7 109.7 728.3 107.3 771.2 105C814 102.7 857 100.3 878.5 99.2L900 98L900 201L878.5 201C857 201 814 201 771.2 201C728.3 201 685.7 201 642.8 201C600 201 557 201 514.2 201C471.3 201 428.7 201 385.8 201C343 201 300 201 257.2 201C214.3 201 171.7 201 128.8 201C86 201 43 201 21.5 201L0 201Z",fill:"#e34c67"}),m("path",{d:"M0 133L21.5 136.3C43 139.7 86 146.3 128.8 150.5C171.7 154.7 214.3 156.3 257.2 156.2C300 156 343 154 385.8 151C428.7 148 471.3 144 514.2 145.5C557 147 600 154 642.8 151.7C685.7 149.3 728.3 137.7 771.2 134.3C814 131 857 136 878.5 138.5L900 141L900 201L878.5 201C857 201 814 201 771.2 201C728.3 201 685.7 201 642.8 201C600 201 557 201 514.2 201C471.3 201 428.7 201 385.8 201C343 201 300 201 257.2 201C214.3 201 171.7 201 128.8 201C86 201 43 201 21.5 201L0 201Z",fill:"#d53867"}),m("path",{d:"M0 173L21.5 172.8C43 172.7 86 172.3 128.8 171.8C171.7 171.3 214.3 170.7 257.2 171.8C300 173 343 176 385.8 178.5C428.7 181 471.3 183 514.2 181.2C557 179.3 600 173.7 642.8 170C685.7 166.3 728.3 164.7 771.2 165.2C814 165.7 857 168.3 878.5 169.7L900 171L900 201L878.5 201C857 201 814 201 771.2 201C728.3 201 685.7 201 642.8 201C600 201 557 201 514.2 201C471.3 201 428.7 201 385.8 201C343 201 300 201 257.2 201C214.3 201 171.7 201 128.8 201C86 201 43 201 21.5 201L0 201Z",fill:"#c62368"})]),m("section",{class:"bg-[#C62368] bg-gradient-to-b from-[#C62368] to-[#FA7268]"},[m("h1",null,"Minimal, yet structured syntax"),m("p",null,"MintScript is a bracket language, making it easy to write good looking code, while also having self-explainatory syntax like println() to make understanding the code as easy as possible.")]),m("svg",{id:"visual",class:"spacer",preserveAspectRatio:"none",viewBox:"0 0 900 200",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1"},[m("path",{d:"M0 170L18.8 170.2C37.7 170.3 75.3 170.7 112.8 171.5C150.3 172.3 187.7 173.7 225.2 175.2C262.7 176.7 300.3 178.3 337.8 173C375.3 167.7 412.7 155.3 450.2 155.5C487.7 155.7 525.3 168.3 562.8 166.7C600.3 165 637.7 149 675.2 145.3C712.7 141.7 750.3 150.3 787.8 158.2C825.3 166 862.7 173 881.3 176.5L900 180L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z",fill:"#c62368"}),m("path",{d:"M0 132L18.8 134.7C37.7 137.3 75.3 142.7 112.8 143.7C150.3 144.7 187.7 141.3 225.2 135.5C262.7 129.7 300.3 121.3 337.8 116.2C375.3 111 412.7 109 450.2 113.3C487.7 117.7 525.3 128.3 562.8 132.3C600.3 136.3 637.7 133.7 675.2 135C712.7 136.3 750.3 141.7 787.8 134.2C825.3 126.7 862.7 106.3 881.3 96.2L900 86L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z",fill:"#da3f67"}),m("path",{d:"M0 84L18.8 87.3C37.7 90.7 75.3 97.3 112.8 94.8C150.3 92.3 187.7 80.7 225.2 75C262.7 69.3 300.3 69.7 337.8 75.3C375.3 81 412.7 92 450.2 87.7C487.7 83.3 525.3 63.7 562.8 63.5C600.3 63.3 637.7 82.7 675.2 90.8C712.7 99 750.3 96 787.8 92.3C825.3 88.7 862.7 84.3 881.3 82.2L900 80L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z",fill:"#eb5967"}),m("path",{d:"M0 23L18.8 26.3C37.7 29.7 75.3 36.3 112.8 36.7C150.3 37 187.7 31 225.2 34.5C262.7 38 300.3 51 337.8 53.3C375.3 55.7 412.7 47.3 450.2 45.7C487.7 44 525.3 49 562.8 44C600.3 39 637.7 24 675.2 20.8C712.7 17.7 750.3 26.3 787.8 35.5C825.3 44.7 862.7 54.3 881.3 59.2L900 64L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z",fill:"#fa7268"})]),m("section",null,[m("h1",null,"Wanna deploy to the web? We've got you covered."),m("p",null,"(WIP) ViceVersa is the MintScript transpiler for JavaScript, meaning: build once, run everywhere.")])],-1),Yc=[Uc];function Kc(e,t,n,r,i,a){return pe(),Ie("div",null,Yc)}var Vc=an(Wc,[["render",Kc]]);const qc=at({props:{code:{type:String,default:""}}}),Zc={class:"overflow-hidden text-left w-[calc(100% - 3rem)] m-6 p-6 rounded-lg bg-gray-500"};function Xc(e,t,n,r,i,a){return pe(),Ie("div",Zc,[m("pre",null,ur(e.code),1)])}var Jc=an(qc,[["render",Xc]]);const Gc=at({components:{CodeBlock:Jc}}),Qc={class:"relative"},ef=Yn('<div class="sidebar flex flex-col items-center bg-blue-600 text-white fixed left-0 top-0 bottom-0 z-0 overflow-y-scroll pt-20"><a href="#basics" class="transition-all duration-500">Basics</a><a href="#functions" class="transition-all duration-500">Functions</a><a href="#classes" class="transition-all duration-500">Classes</a><a href="#modules" class="transition-all duration-500">Modules</a><a href="#refs" class="transition-all duration-500 text-center">Explanations for advanced developers</a></div>',1),tf={class:"documentation p-12 pt-0 text-justify h-auto bg-gray-900 text-white"},nf=Yn('<h1 id="basics" class="text-center"><br>Basics</h1><p>MintScript is a statically typed curly-bracked language with JavaScript inspired syntax. It is written in C#, using the ANTLR language toolkit.</p><br><br><p>Now let&#39;s start with the basics of MS.<br> MintScript executes functions in a global scope, meaning that you can just write into the script and it will be executed, no need for an entry point.</p><br><br><p>Statements <b>can</b> be followed by either a semicolon or a newline to signalise the end of the current statement.<br><br></p><p>But let&#39;s finally code something.<br><br> To start, run <i>MintScript init</i> (Windows only)<br> To run your script, type <i>MintScript C:/full/path/to/your/main.mis</i><br> First of all, lets create a variable called HelloWorld.</p><br>',10),rf=m("p",null,[M("Variables can have 5 types: string, number, float, bool and tuple."),m("br"),M(" Now, lets print our variable to the console by writing:")],-1),af=m("p",null,[M("Notice, that the function is called "),m("i",null,"println"),M('. This ends the line after printing "Hello, world!". To continue the line, just write:')],-1),of=m("p",null,`If you were to start the script now, you would see the window popping up and directly closing. Don't worry, everything's ok. The window is actually showing "Hello, world!", but closing, because we are not waiting for any user input. To prevent this, add this to the end of your script:`,-1),sf=m("p",null,[M("Now, whenever you press enter, the script ends. "),m("br"),M(" If you want to read inout from the user, just use")],-1),lf=m("br",null,null,-1),cf=m("p",null,"We now have created a variable, printed it and received input from the user. However, we haven't done anything special with our data. Let's add something to our string at first:",-1),ff=m("p",null,'Now, our string will be "Hello, world! How are you?". We can also compare our string with others by using the if statement',-1),uf=m("p",null,[M('This checks, if HelloWorld is equal to (==) our second argument, in this case: "Hello, world! How are you?" Other comparison operators are not equal (!=), greater (>), less (<), greater or equal (>=) and less or equal (<=) '),m("br"),M("If statements can be followed by a self-explainatory else or else if statement.")],-1),df=m("p",null,"Another important statement is the while statement. It executes code until the given condition returns false. Here's an example:",-1),mf=m("p",null,"(Tip: Use while(true) to repeat the code forever)",-1),hf=m("br",null,null,-1),pf=m("br",null,null,-1),gf=m("h1",{id:"functions",class:"text-center"},[m("br"),M("Functions")],-1),vf=M(" MintScript of course has functions. You can declare functions with: "),bf=M(" You can now call it by simply typing "),yf=M(" Functions will always return a value. The return value for functions without a return statement will be the exit status of the last statement in the function, meaning: "),wf=M(" will return 0, because print exited sucessfully. However, this function: "),_f=M(` will return "System.object". Why? Well, because "123" isn't a statement but an expression. This means, that it can't return 0 or sucessful, because it's not doing any actions. It's just a number. Also, "System.object" is the C# type MintScript uses to store values. To willingly return a value, use `),Cf=M(" This will indeed return 123. "),xf=m("h1",{id:"classes",class:"text-center"},[m("br"),M("Classes")],-1),kf=M(" Classes are a way to collect variables and functions and create inheritance systems."),Af=m("br",null,null,-1),Ef=M(" Declare classes with "),Tf=M(" Classes can also inherit functions from others."),Of=m("br",null,null,-1),Mf=M(" Create a inherative class by typing "),Sf=M(` Note that we don't need a keyword like "override" in MintScript to override functions. Also, classes can also inherit from any other function, no need for abstract classes. You can also add properties to classes thad didn't exist in the parent class: `),If=M(" You can now create a new Instance of your class by using the new statement "),Pf=M(" When a new instance of your class is created, the constructor function will be called. Define it with "),Nf=M(" Now, you can pass in arguments using "),Lf=m("h1",{id:"modules",class:"text-center"},[m("br"),M("Modules")],-1),Ff=m("p",null,"Modules are a way to share code between projects or developers. You can Import a module by using the import statement:",-1),Rf=m("p",null,"This will search for a file in the modules/module_name/ folder. Modules can also be imported from a specific path:",-1),Hf=m("p",null,"Modules can be in 2 formats; MintScript or DLL. A DLL Tutorial can be found on the Youtube channel of MintScript soon. But for now, here is a boilerplate for writin C# class libraries to extend MintScript:",-1),Df=m("p",null,[M("Also, dll modules require a "),m("i",null,"module.json"),M(" file to be in the same directory, which contains the export functions:")],-1),$f=m("p",null,"Modules written in MintScript do not require this modules.json file. Said modules will simply export every export class:",-1),jf=m("p",null,"When using import statements, the exports will be loaded into the Variable Space in a class with the same name as given. Meaning: ",-1),zf=m("p",null,[M("will be loading in its imaginary function "),m("i",null,"MyFunc()"),M(" as")],-1),Bf=Yn('<p>However, because MintScript is still in Beta, we recomment using DLL modules.</p><h1 id="refs" class="text-center"><br>Explanations for advanced developers</h1><ul><h2>Types</h2><li class="decoration-indigo-600 underline text-indigo-600"><a href="#string">String</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#number">Number</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#float">Float</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#bool">Bool</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#tuple">Tuple</a></li><h2>Operators</h2><li class="decoration-indigo-600 underline text-indigo-600"><a href="#+">+</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#-">-</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#*">*</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#/">/</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#**">**</a></li><h2>Loops and statements</h2><li class="decoration-indigo-600 underline text-indigo-600"><a href="#func">Func</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#if">If</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#while">While</a></li><h2>Built-in functions</h2><li class="decoration-indigo-600 underline text-indigo-600"><a href="#print">print</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#println">println</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#read">read</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#readln">readln</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#str">str</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#pos">pos</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#len">len</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#contains">contains</a></li></ul>',3),Wf=m("h3",{id:"string"},"String",-1),Uf=M(" Strings are objects that define text "),Yf={id:"number"},Kf=m("h3",null,"Number",-1),Vf=M(" Numbers are objects that define natural numbers "),qf={id:"float"},Zf=m("h3",null,"Float",-1),Xf=M(" Floats are objects that define decimal numbers "),Jf={id:"bool"},Gf=m("h3",null,"Bool",-1),Qf=M(" Booleans are objects that define either true or false values "),eu={id:"tuple"},tu=m("h3",null,"Tuple",-1),nu=M(" Tuples are objects that define a list of items "),ru=M(" You can get elements by their index "),iu={id:"+"},au=m("h3",null,"+",-1),ou=M(" Adds the two values together (string, number, float, tuple) "),su=M(" Can be used as a assignment operator: "),lu=M(" Allows quick assignments (increase by 1) "),cu={id:"-"},fu=m("h3",null,"+",-1),uu=M(" removes he second value from the first (number, float) "),du=M(" Can be used as a assignment operator: "),mu=M(" Allows quick assignments (decrease by 1) "),hu={id:"*"},pu=m("h3",null,"*",-1),gu=M(" Multiplies the two values (number, float) "),vu=M(" Can be used as a assignment operator: "),bu={id:"/"},yu=m("h3",null,"/",-1),wu=M(" Divides value 1 by value 2 (number, float) "),_u=M(" Can be used as a assignment operator: "),Cu={id:"**"},xu=m("h3",null,"**",-1),ku=M(" Calculates value 1 to the power of value 2 (number, float) "),Au=M(" Can be used as a assignment operator: "),Eu={id:"func"},Tu=m("h3",null,"Func",-1),Ou=M(" Declares a function that can return a value and take in arguments "),Mu={id:"class"},Su=m("h3",null,"Class",-1),Iu=M(" Declares a class that can inherit from another class and have a constructor "),Pu=M(" the new Keyword instanciates it. "),Nu={id:"if"},Lu=m("h3",null,"If",-1),Fu=M(" Runs if the given statement returns true. Can be followed by a else if or else statement. "),Ru={id:"while"},Hu=m("h3",null,"While",-1),Du=M(" Runs while the given statement returns true "),$u=m("h3",null,"Print",-1),ju=M(" Prints out the given object "),zu={id:"println"},Bu=m("h3",null,"Println",-1),Wu=M(" Prints out the given object and ends the line "),Uu={id:"read"},Yu=m("h3",null,"Read",-1),Ku=M(" reads input from the user and returns it as a string "),Vu={id:"readln"},qu=m("h3",null,"Readln",-1),Zu=M(" reads a line from the user and returns it as a string "),Xu={id:"str"},Ju=m("h3",null,"Str",-1),Gu=M(" converts the given object to a string "),Qu={id:"pos"},ed=m("h3",null,"Pos",-1),td=M(" Returns the position of the given object at position 2 in the string or tuple at position 1 or -1 if the object wasn't present "),nd={id:"len"},rd=m("h3",null,"Len",-1),id=M(" Returns the length of the given string or tuple "),ad={id:"contains"},od=m("h3",null,"Contains",-1),sd=M(" Returns wether the object at position 2 is present in the string or tuple at poosition 1 ");function ld(e,t,n,r,i,a){const o=Ut("CodeBlock");return pe(),Ie("div",Qc,[ef,m("div",tf,[nf,A(o,{code:'HelloWorld = "Hello, world!"'}),rf,A(o,{code:"println(HelloWorld)"}),af,A(o,{code:"print(HelloWorld)"}),of,A(o,{code:"read()"}),sf,A(o,{code:"input = readln()"}),lf,cf,A(o,{code:'HelloWorld = HelloWorld + " How are you?"'}),ff,A(o,{code:`if(HelloWorld == "Hello, world! how are you?") {\r
    println(HelloWorld)\r
}`}),uf,A(o,{code:`if(HelloWorld == "Hello, world! how are you?") {\r
    println(HelloWorld)\r
}\r
else if(HelloWorld == "Hello, world!"){\r
    println("Our variable was 'Hello, world!'")\r
}\r
else {\r
    println("Our variable was neither of those")\r
}`}),df,A(o,{code:`i = 0\r
while(i < 10) {\r
    print(i)\r
    i = i + 1\r
}`}),mf,hf,pf,gf,m("p",null,[vf,A(o,{code:`func MyFunc(string myArgument) {\r
    println("MyFunc was called with argument " + myArgument)\r
}`}),bf,A(o,{code:'MyFunc("Hello world")'}),yf,A(o,{code:`func MyFunc() {\r
    print("Hello, world!")\r
}`}),wf,A(o,{code:`func MyFunc() {\r
    123\r
}`}),_f,A(o,{code:`func MyFunc() {\r
    return 123\r
}`}),Cf]),xf,m("p",null,[kf,Af,Ef,A(o,{code:`class Animal {\r
    func makeSound() {\r
        println("Hello world!")\r
    }\r
\r
    legs = 4\r
}`}),Tf,Of,Mf,A(o,{code:`class Pig : Animal {\r
    func makeSound() {\r
        println("Squeeeek! Says the pig with " + this.legs + " legs")\r
    }\r
}`}),Sf,A(o,{code:`class Cow : Animal {\r
    func makeSound() {\r
        println("Moooo!")\r
    }\r
\r
    products = { "Milk", "Meat" }\r
}`}),If,A(o,{code:"pig = new Pig()"}),Pf,A(o,{code:`class InstanceTest {\r
    constructor (string s) {\r
        println(s)\r
    }\r
}`}),Nf,A(o,{code:'instance = new InstanceTest("Hello world!")'})]),Lf,Ff,A(o,{code:"import module"}),Rf,A(o,{code:"import module from './mymodule.mis'"}),Hf,A(o,{code:`public class Exports {\r
    // Write your functions here. \r
    // Every function should return an object and take in an object[].\r
    public object example(object[] args){\r
        return args[0];\r
    }\r
}`}),Df,A(o,{code:`{\r
    "export_functions": [\r
        {\r
            "method": "test",\r
            "args": [ "string" ]\r
        }\r
    ]\r
}`}),$f,A(o,{code:`export class Foo {\r
    bar = "Hello world!"\r
    func Greet() {\r
        // Greetings to Fireship\r
        println('hi mom')\r
    }\r
}`}),jf,A(o,{code:"import myModule"}),zf,A(o,{code:"myModule.MyFunc()"}),Bf,m("p",null,[Wf,Uf,A(o,{code:'"Text"'})]),m("p",Yf,[Kf,Vf,A(o,{code:"13"})]),m("p",qf,[Zf,Xf,A(o,{code:"2.56"})]),m("p",Jf,[Gf,Qf,A(o,{code:"true"})]),m("p",eu,[tu,nu,A(o,{code:'{ "value 1", 2, {3, 4, 5} }'}),ru,A(o,{code:"nameOfArray[0]"})]),m("p",iu,[au,ou,A(o,{code:"1 + 1"}),su,A(o,{code:"foo += 1"}),lu,A(o,{code:"foo++"})]),m("p",cu,[fu,uu,A(o,{code:"2 - 1"}),du,A(o,{code:"foo -= 1"}),mu,A(o,{code:"foo--"})]),m("p",hu,[pu,gu,A(o,{code:"1 * 2"}),vu,A(o,{code:"foo *= 2.5"})]),m("p",bu,[yu,wu,A(o,{code:"1 / 2"}),_u,A(o,{code:"foo /= 2"})]),m("p",Cu,[xu,ku,A(o,{code:"2 ** 2"}),Au,A(o,{code:"foo **= 2"})]),m("p",Eu,[Tu,Ou,A(o,{code:`func Double(number n) {\r
    return n * 2\r
}`})]),m("p",Mu,[Su,Iu,A(o,{code:`class Pig : Animal {\r
    constructor (number legs) {\r
        this.legs = legs\r
    }\r
\r
    func makeSound() {\r
        println("Squeeek! Makes the pig with " + this.legs + " legs.")\r
    }\r
}`}),Pu,A(o,{code:`pig = new Pig(4)\r
pig.makeSound()`})]),m("p",Nu,[Lu,Fu,A(o,{code:`if (myBoolean) {\r
    doSomething()                   \r
} else if (myOtherBoolean) {\r
    doSomethingDifferent()    \r
} else {\r
    doSomethingThird()  \r
}`})]),m("p",Ru,[Hu,Du,A(o,{code:`if (myBoolean) {\r
    doSomething()                   \r
}`})]),m("p",null,[$u,ju,A(o,{code:'print("Hello world")'})]),m("p",zu,[Bu,Wu,A(o,{code:'println("Hello world")'})]),m("p",Uu,[Yu,Ku,A(o,{code:"read()"})]),m("p",Vu,[qu,Zu,A(o,{code:"readln()"})]),m("p",Xu,[Ju,Gu,A(o,{code:"str(12)"})]),m("p",Qu,[ed,td,A(o,{code:'pos("Hello world", "H")'})]),m("p",nd,[rd,id,A(o,{code:'len("Hello world")'})]),m("p",ad,[od,sd,A(o,{code:'contains("Hello world", "Hello")'})])])])}var cd=an(Gc,[["render",ld]]);const fd=at({methods:{downloadURI(e){window.location.href=e}}}),ud={class:"relative"},dd=Yn('<svg class="corner absolute bottom-0 left-0" viewBox="0 0 297 297" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0C30.9 2.4 61.8 4.7 91.8 14.5C121.8 24.4 150.9 41.6 167.5 66.4C184.1 91.2 188.1 123.5 207.1 146.5C226.1 169.5 260.2 183.2 277.7 206.8C295.2 230.3 296.1 263.6 297 297H0V0Z" fill="#1C2134"></path><path d="M0 37.1C27 39.2 54 41.3 80.3 49.8C106.6 58.4 132.1 73.6 146.6 95.3C161.1 116.9 164.6 145.2 181.2 165.3C197.9 185.5 227.7 197.5 243 218C258.3 238.6 259.1 267.8 259.9 297H0V37.1Z" fill="#3F3050"></path><path d="M0 74.3C23.2 76 46.3 77.8 68.8 85.2C91.3 92.5 113.2 105.5 125.6 124.1C138.1 142.7 141.1 166.9 155.3 184.1C169.6 201.4 195.2 211.7 208.3 229.3C221.4 247 222.1 272 222.8 297H0V74.3Z" fill="#6C3D64"></path><path d="M0 111.4C19.3 112.8 38.6 114.3 57.4 120.5C76.1 126.6 94.3 137.4 104.7 152.9C115.1 168.4 117.5 188.6 129.4 203C141.3 217.3 162.6 225.9 173.6 240.6C184.5 255.3 185.1 276.2 185.6 297H0V111.4Z" fill="#9C486B"></path><path d="M0 148.5C15.4 149.7 30.9 150.9 45.9 155.8C60.9 160.7 75.5 169.3 83.8 181.7C92 194.1 94 210.3 103.6 221.8C113.1 233.3 130.1 240.1 138.9 251.9C147.6 263.6 148 280.3 148.5 297H0V148.5Z" fill="#C85967"></path><path d="M0 185.6C11.6 186.5 23.2 187.4 34.4 191.1C45.7 194.8 56.6 201.2 62.8 210.5C69 219.8 70.5 231.9 77.7 240.6C84.8 249.2 97.6 254.3 104.1 263.2C110.7 272 111 284.5 111.4 297H0V185.6Z" fill="#E97458"></path><path d="M0 222.8C7.7 223.3 15.4 223.9 22.9 226.4C30.4 228.8 37.7 233.2 41.9 239.4C46 245.6 47 253.6 51.8 259.4C56.5 265.1 65.1 268.6 69.4 274.4C73.8 280.3 74 288.7 74.3 297H0V222.8Z" fill="#F99945"></path><path d="M0 259.9C3.9 260.2 7.7 260.5 11.5 261.7C15.2 262.9 18.9 265.1 20.9 268.2C23 271.3 23.5 275.3 25.9 278.2C28.3 281.1 32.5 282.8 34.7 285.7C36.9 288.7 37 292.8 37.1 297H0V259.9Z" fill="#FBAE3C"></path></svg><svg class="corner absolute top-0 right-0" viewBox="0 0 297 298" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M297 297C263.5 298.2 229.9 299.4 205.2 282.5C180.5 265.6 164.6 230.5 147.1 206.3C129.6 182.1 110.6 168.6 88.3 151.6C65.9 134.7 40.3 114.2 25 88.4C9.7 62.5 4.9 31.3 0 0H297V297Z" fill="#1C2134"></path><path d="M297 259.9C267.7 260.9 238.3 262 216.7 247.2C195.1 232.4 181.1 201.7 165.9 180.5C150.6 159.3 133.9 147.5 114.4 132.7C94.8 117.9 72.4 100 59 77.3C45.6 54.7 41.4 27.4 37.1 0H297V259.9Z" fill="#3F3050"></path><path d="M297 222.8C271.9 223.6 246.7 224.5 228.2 211.8C209.6 199.2 197.7 172.9 184.6 154.7C171.5 136.5 157.2 126.5 140.5 113.7C123.7 101 104.4 85.7 93 66.3C81.5 46.9 77.9 23.4 74.3 0H297V222.8Z" fill="#6C3D64"></path><path d="M297 185.6C276 186.4 255.1 187.1 239.6 176.5C224.2 166 214.2 144.1 203.3 128.9C192.4 113.8 180.5 105.4 166.5 94.8C152.6 84.2 136.5 71.4 127 55.2C117.5 39.1 114.4 19.5 111.4 0H297V185.6Z" fill="#9C486B"></path><path d="M297 148.5C280.2 149.1 263.5 149.7 251.1 141.2C238.8 132.8 230.8 115.3 222.1 103.1C213.3 91 203.8 84.3 192.6 75.8C181.5 67.3 168.6 57.1 161 44.2C153.4 31.3 150.9 15.6 148.5 0H297V148.5Z" fill="#C85967"></path><path d="M297 111.4C284.4 111.8 271.9 112.3 262.6 105.9C253.3 99.6 247.3 86.5 240.8 77.4C234.2 68.3 227.1 63.2 218.7 56.9C210.3 50.5 200.7 42.8 195 33.1C189.3 23.4 187.4 11.7 185.6 0H297V111.4Z" fill="#E97458"></path><path d="M297 74.3C288.6 74.5 280.2 74.8 274.1 70.6C267.9 66.4 263.9 57.6 259.5 51.6C255.2 45.5 250.4 42.2 244.8 37.9C239.2 33.7 232.8 28.6 229 22.1C225.2 15.6 224 7.8 222.8 0H297V74.3Z" fill="#F99945"></path><path d="M297 37.1C292.8 37.3 288.6 37.4 285.5 35.3C282.4 33.2 280.4 28.8 278.3 25.8C276.1 22.8 273.7 21.1 270.9 19C268.1 16.8 264.9 14.3 263 11C261.1 7.8 260.5 3.9 259.9 0H297V37.1Z" fill="#FBAE3C"></path></svg>',2),md={class:"h-screen bg-gray-900 bg-no-repeat bg-cover bg-center grid place-items-center"},hd={class:"grid z-10 justify-center"},pd=m("h2",{class:"text-white text-center"},"Wanna try it?",-1),gd=m("br",null,null,-1),vd=m("p",{class:"text-white text-center"},[M("Do you want to get into MintScript?"),m("br"),M("(Older releases and pre-releases available on GitHub)")],-1),bd=m("br",null,null,-1),yd=m("span",{class:"beautiful-underline transition-all duration-500"},"Get MintScript",-1),wd=[yd];function _d(e,t,n,r,i,a){return pe(),Ie("div",ud,[dd,m("div",md,[m("div",hd,[pd,gd,vd,bd,m("button",{onClick:t[0]||(t[0]=o=>e.downloadURI("https://github.com/BlackBirdTV/mintscript/releases/latest/download/MintScript_win_x86.exe")),class:"text-white group m-auto bg-blue-700 text-3xl p-4 rounded-3xl"},wd)])])])}var Cd=an(fd,[["render",_d]]);const xd=e=>document.querySelector(e),kd=at({data(){return{page_index:0,isPortrait:window.innerHeight>window.innerWidth,shownavdropdown:!1,screenwidth:window.innerWidth,messageTitle:"",messageContent:"",messageTopOffset:"-100vh"}},methods:{setPageIndex(e){this.page_index!=e&&(window.scrollTo(0,0),this.page_index=e)},onResize(){this.screenwidth=window.innerWidth,this.shownavdropdown=this.shownavdropdown&&this.screenwidth<=500,this.isPortrait=window.innerHeight>window.innerWidth},scrollToWord(e){e.startsWith("#")&&xd(e).scrollIntoView({behavior:"smooth"});for(var t=e,n=[document.body],r;r=n.shift();)if(!!r.textContent.match(t))for(var i=0;i<r.childNodes.length;++i)switch(r.childNodes[i].nodeType){case Node.TEXT_NODE:if(r.childNodes[i].textContent.match(t)){window.scrollTo({left:0,top:r.offsetTop-80,behavior:"smooth"});return}n.push(r.childNodes[i]);break;case Node.ELEMENT_NODE:n.push(r.childNodes[i]);break}this.message("Nothing found...",`No words on the page matched
your search.
(Tip: use # before your search to look
for any headings))`,6e3)},submit(){let e=this.$refs.searchText.value;this.scrollToWord(e)},message(e,t,n){this.messageTitle=e,this.messageContent=t,this.messageTopOffset="5rem",setTimeout(()=>{this.messageTopOffset="-100vh"},n)}},mounted(){this.setPageIndex(0),this.$nextTick(()=>{window.addEventListener("resize",this.onResize)})},components:{HomePage:Vc,Documentation:cd,Download:Cd}}),Ad={class:"bg-gray-900"},Ed={class:"top-bar flex items-stretch fixed top-0 left-0 right-0 bg-[rgba(41,41,41,0.8)] z-30 p-1 text-white overflow-hidden"},Td=m("div",{class:"font-['Nunito'] overflow-hidden w-[100%] float-left text-white"},[m("h1",{class:"font-light"},"MintScript")],-1),Od={class:"w-[100%] grid place-items-center"},Md={key:0,class:"transition-all"},Sd={class:"float-right overflow-hidden w-[100%] mr-5 text-lg decoration-0"},Id=m("br",null,null,-1),Pd=m("br",null,null,-1),Nd={style:{"white-space":"pre"}},Ld=m("div",{class:"w-[100%] relative h-36 bg-blue-600 flex justify-center items-center text-white z-50"}," 2022 Chronical Technologies ",-1);function Fd(e,t,n,r,i,a){const o=Ut("icon"),s=Ut("HomePage"),l=Ut("Documentation"),f=Ut("Download");return pe(),Ie(ke,null,[m("div",Ad,[m("div",Ed,[Td,m("div",Od,[A(Sn,{duration:300,mode:"out-in",name:"slide-fade"},{default:br(()=>[e.page_index==1&&!e.isPortrait?(pe(),Ie("div",Md,[m("input",{ref:"searchText",onKeyup:t[0]||(t[0]=Dc(u=>e.submit(),["enter"])),type:"text",class:"text-black h-8 rounded-l-full focus:outline-none p-1 float-left"},null,544),m("button",{onClick:t[1]||(t[1]=u=>e.submit()),class:"rounded-r-full h-8 float-left bg-white text-black px-2 transition-all duration-500"},[A(o,{icon:"search"})])])):xt("",!0)]),_:1})]),m("div",Sd,[e.screenwidth<=905?(pe(),Ie("button",{key:0,class:"float-right",onClick:t[2]||(t[2]=u=>e.shownavdropdown=!e.shownavdropdown)},[A(o,{icon:"bars"})])):xt("",!0),e.screenwidth>905?(pe(),Ie("a",{key:1,onClick:t[3]||(t[3]=u=>e.setPageIndex(2)),class:"after:translate-y-[-20px] ml-3 float-right"},"Download")):xt("",!0),e.screenwidth>905?(pe(),Ie("a",{key:2,onClick:t[4]||(t[4]=u=>e.setPageIndex(1)),class:"after:translate-y-[-20px] ml-3 float-right"},"Documentation")):xt("",!0),e.screenwidth>905?(pe(),Ie("a",{key:3,onClick:t[5]||(t[5]=u=>e.setPageIndex(0)),class:"after:translate-y-[-20px] ml-3 float-right"},"Home")):xt("",!0)])]),m("div",{style:Qt({height:e.shownavdropdown?"max-content":"0px"}),class:"overflow-hidden text-white text-lg nav-dropdown transition-all duration-500 z-50 h-32 bg-gray-700 fixed left-0 right-0"},[m("a",{onClick:t[6]||(t[6]=u=>{e.setPageIndex(0),e.shownavdropdown=!1}),class:"hover:text-blue-400 transition-all duration-500 ml-3"},"Home"),Id,m("a",{onClick:t[7]||(t[7]=u=>{e.setPageIndex(1),e.shownavdropdown=!1}),class:"hover:text-blue-400 transition-all duration-500 ml-3"},"Documentation"),Pd,m("a",{onClick:t[8]||(t[8]=u=>{e.setPageIndex(2),e.shownavdropdown=!1}),class:"hover:text-blue-400 transition-all duration-500 ml-3"},"Download")],4),A(Sn,{duration:300,mode:"out-in",name:"slide-fade"},{default:br(()=>[e.page_index==0?(pe(),vn(s,{key:0,class:"transition-all z-10 w-screen"})):e.page_index==1?(pe(),vn(l,{key:1,class:"transition-all z-10 w-screen"})):e.page_index==2?(pe(),vn(f,{key:2,class:"transition-all z-10 w-screen"})):xt("",!0)]),_:1})]),m("div",{style:Qt({top:e.messageTopOffset}),class:"fixed transition-all duration-[1700ms] ease-in-out bg-blue-600 text-white rounded-3xl top-20 z-20 p-2 w-96 left-[calc(50%-8rem)]"},[m("h2",null,ur(e.messageTitle),1),m("p",Nd,ur(e.messageContent),1)],4),Ld],64)}var Rd=an(kd,[["render",Fd]]);/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function la(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?la(Object(n),!0).forEach(function(r){$d(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):la(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function In(e){return In=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},In(e)}function Hd(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ca(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Dd(e,t,n){return t&&ca(e.prototype,t),n&&ca(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function $d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ui(e,t){return zd(e)||Wd(e,t)||Fo(e,t)||Yd()}function Kn(e){return jd(e)||Bd(e)||Fo(e)||Ud()}function jd(e){if(Array.isArray(e))return Sr(e)}function zd(e){if(Array.isArray(e))return e}function Bd(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Wd(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function Fo(e,t){if(!!e){if(typeof e=="string")return Sr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Sr(e,t)}}function Sr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ud(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var fa=function(){},di={},Ro={},Ho=null,Do={mark:fa,measure:fa};try{typeof window!="undefined"&&(di=window),typeof document!="undefined"&&(Ro=document),typeof MutationObserver!="undefined"&&(Ho=MutationObserver),typeof performance!="undefined"&&(Do=performance)}catch{}var Kd=di.navigator||{},ua=Kd.userAgent,da=ua===void 0?"":ua,rt=di,ee=Ro,ma=Ho,mn=Do;rt.document;var Ke=!!ee.documentElement&&!!ee.head&&typeof ee.addEventListener=="function"&&typeof ee.createElement=="function",$o=~da.indexOf("MSIE")||~da.indexOf("Trident/"),Be="___FONT_AWESOME___",Ir=16,jo="fa",zo="svg-inline--fa",gt="data-fa-i2svg",Pr="data-fa-pseudo-element",Vd="data-fa-pseudo-element-pending",mi="data-prefix",hi="data-icon",ha="fontawesome-i2svg",qd="async",Zd=["HTML","HEAD","STYLE","SCRIPT"],Bo=function(){try{return!0}catch{return!1}}(),pi={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},Pn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Wo={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Xd={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Jd=/fa[srltdbk\-\ ]/,Uo="fa-layers-text",Gd=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Qd={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},Yo=[1,2,3,4,5,6,7,8,9,10],e1=Yo.concat([11,12,13,14,15,16,17,18,19,20]),t1=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],dt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},n1=[].concat(Kn(Object.keys(Pn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",dt.GROUP,dt.SWAP_OPACITY,dt.PRIMARY,dt.SECONDARY]).concat(Yo.map(function(e){return"".concat(e,"x")})).concat(e1.map(function(e){return"w-".concat(e)})),Ko=rt.FontAwesomeConfig||{};function r1(e){var t=ee.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function i1(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ee&&typeof ee.querySelector=="function"){var a1=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];a1.forEach(function(e){var t=ui(e,2),n=t[0],r=t[1],i=i1(r1(n));i!=null&&(Ko[r]=i)})}var o1={familyPrefix:jo,styleDefault:"solid",replacementClass:zo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Xt=O(O({},o1),Ko);Xt.autoReplaceSvg||(Xt.observeMutations=!1);var F={};Object.keys(Xt).forEach(function(e){Object.defineProperty(F,e,{enumerable:!0,set:function(n){Xt[e]=n,yn.forEach(function(r){return r(F)})},get:function(){return Xt[e]}})});rt.FontAwesomeConfig=F;var yn=[];function s1(e){return yn.push(e),function(){yn.splice(yn.indexOf(e),1)}}var Je=Ir,Le={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function l1(e){if(!(!e||!Ke)){var t=ee.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ee.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return ee.head.insertBefore(t,r),e}}var c1="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function rn(){for(var e=12,t="";e-- >0;)t+=c1[Math.random()*62|0];return t}function Dt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function gi(e){return e.classList?Dt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Vo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function f1(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Vo(e[n]),'" ')},"").trim()}function Vn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function vi(e){return e.size!==Le.size||e.x!==Le.x||e.y!==Le.y||e.rotate!==Le.rotate||e.flipX||e.flipY}function u1(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:f}}function d1(e){var t=e.transform,n=e.width,r=n===void 0?Ir:n,i=e.height,a=i===void 0?Ir:i,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&$o?l+="translate(".concat(t.x/Je-r/2,"em, ").concat(t.y/Je-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Je,"em), calc(-50% + ").concat(t.y/Je,"em)) "):l+="translate(".concat(t.x/Je,"em, ").concat(t.y/Je,"em) "),l+="scale(".concat(t.size/Je*(t.flipX?-1:1),", ").concat(t.size/Je*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var m1=`:root, :host {
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
}`;function qo(){var e=jo,t=zo,n=F.familyPrefix,r=F.replacementClass,i=m1;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var pa=!1;function sr(){F.autoAddCss&&!pa&&(l1(qo()),pa=!0)}var h1={mixout:function(){return{dom:{css:qo,insertCss:sr}}},hooks:function(){return{beforeDOMElementCreation:function(){sr()},beforeI2svg:function(){sr()}}}},We=rt||{};We[Be]||(We[Be]={});We[Be].styles||(We[Be].styles={});We[Be].hooks||(We[Be].hooks={});We[Be].shims||(We[Be].shims=[]);var Ee=We[Be],Zo=[],p1=function e(){ee.removeEventListener("DOMContentLoaded",e),Nn=1,Zo.map(function(t){return t()})},Nn=!1;Ke&&(Nn=(ee.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ee.readyState),Nn||ee.addEventListener("DOMContentLoaded",p1));function g1(e){!Ke||(Nn?setTimeout(e,0):Zo.push(e))}function on(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?Vo(e):"<".concat(t," ").concat(f1(r),">").concat(a.map(on).join(""),"</").concat(t,">")}function ga(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var v1=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},lr=function(t,n,r,i){var a=Object.keys(t),o=a.length,s=i!==void 0?v1(n,i):n,l,f,u;for(r===void 0?(l=1,u=t[a[0]]):(l=0,u=r);l<o;l++)f=a[l],u=s(u,t[f],f,t);return u};function b1(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Nr(e){var t=b1(e);return t.length===1?t[0].toString(16):null}function y1(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function va(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Lr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=va(t);typeof Ee.hooks.addPack=="function"&&!i?Ee.hooks.addPack(e,va(t)):Ee.styles[e]=O(O({},Ee.styles[e]||{}),a),e==="fas"&&Lr("fa",t)}var Jt=Ee.styles,w1=Ee.shims,_1=Object.values(Wo),bi=null,Xo={},Jo={},Go={},Qo={},es={},C1=Object.keys(pi);function x1(e){return~n1.indexOf(e)}function k1(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!x1(i)?i:null}var ts=function(){var t=function(a){return lr(Jt,function(o,s,l){return o[l]=lr(s,a,{}),o},{})};Xo=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),Jo=t(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),es=t(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in Jt||F.autoFetchSvg,r=lr(w1,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});Go=r.names,Qo=r.unicodes,bi=qn(F.styleDefault)};s1(function(e){bi=qn(e.styleDefault)});ts();function yi(e,t){return(Xo[e]||{})[t]}function A1(e,t){return(Jo[e]||{})[t]}function Ot(e,t){return(es[e]||{})[t]}function ns(e){return Go[e]||{prefix:null,iconName:null}}function E1(e){var t=Qo[e],n=yi("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function it(){return bi}var wi=function(){return{prefix:null,iconName:null,rest:[]}};function qn(e){var t=pi[e],n=Pn[e]||Pn[t],r=e in Ee.styles?e:null;return n||r||null}function Zn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,i=null,a=e.reduce(function(o,s){var l=k1(F.familyPrefix,s);if(Jt[s]?(s=_1.includes(s)?Xd[s]:s,i=s,o.prefix=s):C1.indexOf(s)>-1?(i=s,o.prefix=qn(s)):l?o.iconName=l:s!==F.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var f=i==="fa"?ns(o.iconName):{},u=Ot(o.prefix,o.iconName);f.prefix&&(i=null),o.iconName=f.iconName||u||o.iconName,o.prefix=f.prefix||o.prefix,o.prefix==="far"&&!Jt.far&&Jt.fas&&!F.autoFetchSvg&&(o.prefix="fas")}return o},wi());return(a.prefix==="fa"||i==="fa")&&(a.prefix=it()||"fas"),a}var T1=function(){function e(){Hd(this,e),this.definitions={}}return Dd(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),Lr(s,o[s]);var l=Wo[s];l&&Lr(l,o[s]),ts()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,f=o.icon,u=f[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(h){typeof h=="string"&&(n[s][h]=f)}),n[s][l]=f}),n}}]),e}(),ba=[],Mt={},Nt={},O1=Object.keys(Nt);function M1(e,t){var n=t.mixoutsTo;return ba=e,Mt={},Object.keys(Nt).forEach(function(r){O1.indexOf(r)===-1&&delete Nt[r]}),ba.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),In(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){Mt[o]||(Mt[o]=[]),Mt[o].push(a[o])})}r.provides&&r.provides(Nt)}),n}function Fr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=Mt[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function vt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Mt[e]||[];i.forEach(function(a){a.apply(null,n)})}function Ue(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Nt[e]?Nt[e].apply(null,t):void 0}function Rr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||it();if(!!t)return t=Ot(n,t)||t,ga(rs.definitions,n,t)||ga(Ee.styles,n,t)}var rs=new T1,S1=function(){F.autoReplaceSvg=!1,F.observeMutations=!1,vt("noAuto")},I1={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ke?(vt("beforeI2svg",t),Ue("pseudoElements2svg",t),Ue("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;F.autoReplaceSvg===!1&&(F.autoReplaceSvg=!0),F.observeMutations=!0,g1(function(){N1({autoReplaceSvgRoot:n}),vt("watch",t)})}},P1={icon:function(t){if(t===null)return null;if(In(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ot(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=qn(t[0]);return{prefix:r,iconName:Ot(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(F.familyPrefix,"-"))>-1||t.match(Jd))){var i=Zn(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||it(),iconName:Ot(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=it();return{prefix:a,iconName:Ot(a,t)||t}}}},ye={noAuto:S1,config:F,dom:I1,parse:P1,library:rs,findIconDefinition:Rr,toHtml:on},N1=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ee:n;(Object.keys(Ee.styles).length>0||F.autoFetchSvg)&&Ke&&F.autoReplaceSvg&&ye.dom.i2svg({node:r})};function Xn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return on(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Ke){var r=ee.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function L1(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(vi(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};i.style=Vn(O(O({},a),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function F1(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(F.familyPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},i),{},{id:o}),children:r}]}]}function _i(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,u=e.titleId,h=e.extra,g=e.watchable,k=g===void 0?!1:g,I=r.found?r:n,D=I.width,P=I.height,w=i==="fak",T=[F.replacementClass,a?"".concat(F.familyPrefix,"-").concat(a):""].filter(function(V){return h.classes.indexOf(V)===-1}).filter(function(V){return V!==""||!!V}).concat(h.classes).join(" "),H={children:[],attributes:O(O({},h.attributes),{},{"data-prefix":i,"data-icon":a,class:T,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(D," ").concat(P)})},z=w&&!~h.classes.indexOf("fa-fw")?{width:"".concat(D/P*16*.0625,"em")}:{};k&&(H.attributes[gt]=""),l&&(H.children.push({tag:"title",attributes:{id:H.attributes["aria-labelledby"]||"title-".concat(u||rn())},children:[l]}),delete H.attributes.title);var U=O(O({},H),{},{prefix:i,iconName:a,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:O(O({},z),h.styles)}),re=r.found&&n.found?Ue("generateAbstractMask",U)||{children:[],attributes:{}}:Ue("generateAbstractIcon",U)||{children:[],attributes:{}},B=re.children,J=re.attributes;return U.children=B,U.attributes=J,s?F1(U):L1(U)}function ya(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=O(O(O({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(f[gt]="");var u=O({},o.styles);vi(i)&&(u.transform=d1({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var h=Vn(u);h.length>0&&(f.style=h);var g=[];return g.push({tag:"span",attributes:f,children:[t]}),a&&g.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),g}function R1(e){var t=e.content,n=e.title,r=e.extra,i=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=Vn(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var cr=Ee.styles;function Hr(e){var t=e[0],n=e[1],r=e.slice(4),i=ui(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(F.familyPrefix,"-").concat(dt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(F.familyPrefix,"-").concat(dt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(F.familyPrefix,"-").concat(dt.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var H1={found:!1,width:512,height:512};function D1(e,t){!Bo&&!F.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Dr(e,t){var n=t;return t==="fa"&&F.styleDefault!==null&&(t=it()),new Promise(function(r,i){if(Ue("missingIconAbstract"),n==="fa"){var a=ns(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&cr[t]&&cr[t][e]){var o=cr[t][e];return r(Hr(o))}D1(e,t),r(O(O({},H1),{},{icon:F.showMissingIcons&&e?Ue("missingIconAbstract")||{}:{}}))})}var wa=function(){},$r=F.measurePerformance&&mn&&mn.mark&&mn.measure?mn:{mark:wa,measure:wa},Yt='FA "6.1.1"',$1=function(t){return $r.mark("".concat(Yt," ").concat(t," begins")),function(){return is(t)}},is=function(t){$r.mark("".concat(Yt," ").concat(t," ends")),$r.measure("".concat(Yt," ").concat(t),"".concat(Yt," ").concat(t," begins"),"".concat(Yt," ").concat(t," ends"))},Ci={begin:$1,end:is},wn=function(){};function _a(e){var t=e.getAttribute?e.getAttribute(gt):null;return typeof t=="string"}function j1(e){var t=e.getAttribute?e.getAttribute(mi):null,n=e.getAttribute?e.getAttribute(hi):null;return t&&n}function z1(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(F.replacementClass)}function B1(){if(F.autoReplaceSvg===!0)return _n.replace;var e=_n[F.autoReplaceSvg];return e||_n.replace}function W1(e){return ee.createElementNS("http://www.w3.org/2000/svg",e)}function U1(e){return ee.createElement(e)}function as(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?W1:U1:n;if(typeof e=="string")return ee.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(as(o,{ceFn:r}))}),i}function Y1(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var _n={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(as(i),n)}),n.getAttribute(gt)===null&&F.keepOriginalSource){var r=ee.createComment(Y1(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~gi(n).indexOf(F.replacementClass))return _n.replace(t);var i=new RegExp("".concat(F.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===F.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return on(s)}).join(`
`);n.setAttribute(gt,""),n.innerHTML=o}};function Ca(e){e()}function os(e,t){var n=typeof t=="function"?t:wn;if(e.length===0)n();else{var r=Ca;F.mutateApproach===qd&&(r=rt.requestAnimationFrame||Ca),r(function(){var i=B1(),a=Ci.begin("mutate");e.map(i),a(),n()})}}var xi=!1;function ss(){xi=!0}function jr(){xi=!1}var Ln=null;function xa(e){if(!!ma&&!!F.observeMutations){var t=e.treeCallback,n=t===void 0?wn:t,r=e.nodeCallback,i=r===void 0?wn:r,a=e.pseudoElementsCallback,o=a===void 0?wn:a,s=e.observeMutationsRoot,l=s===void 0?ee:s;Ln=new ma(function(f){if(!xi){var u=it();Dt(f).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!_a(h.addedNodes[0])&&(F.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&F.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&_a(h.target)&&~t1.indexOf(h.attributeName))if(h.attributeName==="class"&&j1(h.target)){var g=Zn(gi(h.target)),k=g.prefix,I=g.iconName;h.target.setAttribute(mi,k||u),I&&h.target.setAttribute(hi,I)}else z1(h.target)&&i(h.target)})}}),Ke&&Ln.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function K1(){!Ln||Ln.disconnect()}function V1(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function q1(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Zn(gi(e));return i.prefix||(i.prefix=it()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||i.prefix&&r.length>0&&(i.iconName=A1(i.prefix,e.innerText)||yi(i.prefix,Nr(e.innerText))),i}function Z1(e){var t=Dt(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return F.autoA11y&&(n?t["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(r||rn()):(t["aria-hidden"]="true",t.focusable="false")),t}function X1(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Le,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ka(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=q1(e),r=n.iconName,i=n.prefix,a=n.rest,o=Z1(e),s=Fr("parseNodeAttributes",{},e),l=t.styleParser?V1(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Le,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var J1=Ee.styles;function ls(e){var t=F.autoReplaceSvg==="nest"?ka(e,{styleParser:!1}):ka(e);return~t.extra.classes.indexOf(Uo)?Ue("generateLayersText",e,t):Ue("generateSvgReplacementMutation",e,t)}function Aa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ke)return Promise.resolve();var n=ee.documentElement.classList,r=function(h){return n.add("".concat(ha,"-").concat(h))},i=function(h){return n.remove("".concat(ha,"-").concat(h))},a=F.autoFetchSvg?Object.keys(pi):Object.keys(J1),o=[".".concat(Uo,":not([").concat(gt,"])")].concat(a.map(function(u){return".".concat(u,":not([").concat(gt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Dt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Ci.begin("onTree"),f=s.reduce(function(u,h){try{var g=ls(h);g&&u.push(g)}catch(k){Bo||k.name==="MissingIcon"&&console.error(k)}return u},[]);return new Promise(function(u,h){Promise.all(f).then(function(g){os(g,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(g){l(),h(g)})})}function G1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ls(e).then(function(n){n&&os([n],t)})}function Q1(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Rr(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Rr(i||{})),e(r,O(O({},n),{},{mask:i}))}}var e0=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Le:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,f=n.maskId,u=f===void 0?null:f,h=n.title,g=h===void 0?null:h,k=n.titleId,I=k===void 0?null:k,D=n.classes,P=D===void 0?[]:D,w=n.attributes,T=w===void 0?{}:w,H=n.styles,z=H===void 0?{}:H;if(!!t){var U=t.prefix,re=t.iconName,B=t.icon;return Xn(O({type:"icon"},t),function(){return vt("beforeDOMElementCreation",{iconDefinition:t,params:n}),F.autoA11y&&(g?T["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(I||rn()):(T["aria-hidden"]="true",T.focusable="false")),_i({icons:{main:Hr(B),mask:l?Hr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:U,iconName:re,transform:O(O({},Le),i),symbol:o,title:g,maskId:u,titleId:I,extra:{attributes:T,styles:z,classes:P}})})}},t0={mixout:function(){return{icon:Q1(e0)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Aa,n.nodeCallback=G1,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?ee:r,a=n.callback,o=a===void 0?function(){}:a;return Aa(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,u=r.mask,h=r.maskId,g=r.extra;return new Promise(function(k,I){Promise.all([Dr(i,s),u.iconName?Dr(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(D){var P=ui(D,2),w=P[0],T=P[1];k([n,_i({icons:{main:w,mask:T},prefix:s,iconName:i,transform:l,symbol:f,maskId:h,title:a,titleId:o,extra:g,watchable:!0})])}).catch(I)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=Vn(s);l.length>0&&(i.style=l);var f;return vi(o)&&(f=Ue("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(f||a.icon),{children:r,attributes:i}}}},n0={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return Xn({type:"layer"},function(){vt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(F.familyPrefix,"-layers")].concat(Kn(a)).join(" ")},children:o}]})}}}},r0={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,u=r.styles,h=u===void 0?{}:u;return Xn({type:"counter",content:n},function(){return vt("beforeDOMElementCreation",{content:n,params:r}),R1({content:n.toString(),title:a,extra:{attributes:f,styles:h,classes:["".concat(F.familyPrefix,"-layers-counter")].concat(Kn(s))}})})}}}},i0={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Le:i,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,u=r.attributes,h=u===void 0?{}:u,g=r.styles,k=g===void 0?{}:g;return Xn({type:"text",content:n},function(){return vt("beforeDOMElementCreation",{content:n,params:r}),ya({content:n,transform:O(O({},Le),a),title:s,extra:{attributes:h,styles:k,classes:["".concat(F.familyPrefix,"-layers-text")].concat(Kn(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if($o){var f=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/f,l=u.height/f}return F.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,ya({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},a0=new RegExp('"',"ug"),Ea=[1105920,1112319];function o0(e){var t=e.replace(a0,""),n=y1(t,0),r=n>=Ea[0]&&n<=Ea[1],i=t.length===2?t[0]===t[1]:!1;return{value:Nr(i?t[0]:t),isSecondary:r||i}}function Ta(e,t){var n="".concat(Vd).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Dt(e.children),o=a.filter(function(re){return re.getAttribute(Pr)===t})[0],s=rt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Gd),f=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var h=s.getPropertyValue("content"),g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Pn[l[2].toLowerCase()]:Qd[f],k=o0(h),I=k.value,D=k.isSecondary,P=l[0].startsWith("FontAwesome"),w=yi(g,I),T=w;if(P){var H=E1(I);H.iconName&&H.prefix&&(w=H.iconName,g=H.prefix)}if(w&&!D&&(!o||o.getAttribute(mi)!==g||o.getAttribute(hi)!==T)){e.setAttribute(n,T),o&&e.removeChild(o);var z=X1(),U=z.extra;U.attributes[Pr]=t,Dr(w,g).then(function(re){var B=_i(O(O({},z),{},{icons:{main:re,mask:wi()},prefix:g,iconName:T,extra:U,watchable:!0})),J=ee.createElement("svg");t==="::before"?e.insertBefore(J,e.firstChild):e.appendChild(J),J.outerHTML=B.map(function(V){return on(V)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function s0(e){return Promise.all([Ta(e,"::before"),Ta(e,"::after")])}function l0(e){return e.parentNode!==document.head&&!~Zd.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Pr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Oa(e){if(!!Ke)return new Promise(function(t,n){var r=Dt(e.querySelectorAll("*")).filter(l0).map(s0),i=Ci.begin("searchPseudoElements");ss(),Promise.all(r).then(function(){i(),jr(),t()}).catch(function(){i(),jr(),n()})})}var c0={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Oa,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ee:r;F.searchPseudoElements&&Oa(i)}}},Ma=!1,f0={mixout:function(){return{dom:{unwatch:function(){ss(),Ma=!0}}}},hooks:function(){return{bootstrap:function(){xa(Fr("mutationObserverCallbacks",{}))},noAuto:function(){K1()},watch:function(n){var r=n.observeMutationsRoot;Ma?jr():xa(Fr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Sa=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},u0={mixout:function(){return{parse:{transform:function(n){return Sa(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Sa(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),f="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),h={transform:"".concat(l," ").concat(f," ").concat(u)},g={transform:"translate(".concat(o/2*-1," -256)")},k={outer:s,inner:h,path:g};return{tag:"g",attributes:O({},k.outer),children:[{tag:"g",attributes:O({},k.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),k.path)}]}]}}}},fr={x:0,y:0,width:"100%",height:"100%"};function Ia(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function d0(e){return e.tag==="g"?e.children:[e]}var m0={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?Zn(i.split(" ").map(function(o){return o.trim()})):wi();return a.prefix||(a.prefix=it()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,f=a.width,u=a.icon,h=o.width,g=o.icon,k=u1({transform:l,containerWidth:h,iconWidth:f}),I={tag:"rect",attributes:O(O({},fr),{},{fill:"white"})},D=u.children?{children:u.children.map(Ia)}:{},P={tag:"g",attributes:O({},k.inner),children:[Ia(O({tag:u.tag,attributes:O(O({},u.attributes),k.path)},D))]},w={tag:"g",attributes:O({},k.outer),children:[P]},T="mask-".concat(s||rn()),H="clip-".concat(s||rn()),z={tag:"mask",attributes:O(O({},fr),{},{id:T,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[I,w]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:H},children:d0(g)},z]};return r.push(U,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(H,")"),mask:"url(#".concat(T,")")},fr)}),{children:r,attributes:i}}}},h0={provides:function(t){var n=!1;rt.matchMedia&&(n=rt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},p0={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},g0=[h1,t0,n0,r0,i0,c0,f0,u0,m0,h0,p0];M1(g0,{mixoutsTo:ye});ye.noAuto;var cs=ye.config,v0=ye.library;ye.dom;var fs=ye.parse;ye.findIconDefinition;ye.toHtml;var b0=ye.icon;ye.layer;var y0=ye.text;ye.counter;/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var w0={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"]},_0={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"]},C0=_0,x0=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function k0(e,t){return t={exports:{}},e(t,t.exports),t.exports}var A0=k0(function(e){(function(t){var n=function(w,T,H){if(!f(T)||h(T)||g(T)||k(T)||l(T))return T;var z,U=0,re=0;if(u(T))for(z=[],re=T.length;U<re;U++)z.push(n(w,T[U],H));else{z={};for(var B in T)Object.prototype.hasOwnProperty.call(T,B)&&(z[w(B,H)]=n(w,T[B],H))}return z},r=function(w,T){T=T||{};var H=T.separator||"_",z=T.split||/(?=[A-Z])/;return w.split(z).join(H)},i=function(w){return I(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(T,H){return H?H.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},a=function(w){var T=i(w);return T.substr(0,1).toUpperCase()+T.substr(1)},o=function(w,T){return r(w,T).toLowerCase()},s=Object.prototype.toString,l=function(w){return typeof w=="function"},f=function(w){return w===Object(w)},u=function(w){return s.call(w)=="[object Array]"},h=function(w){return s.call(w)=="[object Date]"},g=function(w){return s.call(w)=="[object RegExp]"},k=function(w){return s.call(w)=="[object Boolean]"},I=function(w){return w=w-0,w===w},D=function(w,T){var H=T&&"process"in T?T.process:T;return typeof H!="function"?w:function(z,U){return H(z,w,U)}},P={camelize:i,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(w,T){return n(D(i,T),w)},decamelizeKeys:function(w,T){return n(D(o,T),w,T)},pascalizeKeys:function(w,T){return n(D(a,T),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=P:t.humps=P})(x0)}),E0=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Kt=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},Fn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},T0=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(e,r)||(n[r]=e[r]);return n},zr=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}else return Array.from(e)};function O0(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=A0.camelize(n.slice(0,r)),a=n.slice(r+1).trim();return t[i]=a,t},{})}function M0(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ki(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ki(l)}),i=Object.keys(e.attributes||{}).reduce(function(l,f){var u=e.attributes[f];switch(f){case"class":l.class=M0(u);break;case"style":l.style=O0(u);break;default:l.attrs[f]=u}return l},{attrs:{},class:{},style:{}});n.class;var a=n.style,o=a===void 0?{}:a,s=T0(n,["class","style"]);return fi(e.tag,Fn({},t,{class:i.class,style:Fn({},i.style,o)},i.attrs,s),r)}var us=!1;try{us=!0}catch{}function S0(){if(!us&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Gt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Kt({},e,t):{}}function I0(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Kt(t,"fa-"+e.size,e.size!==null),Kt(t,"fa-rotate-"+e.rotation,e.rotation!==null),Kt(t,"fa-pull-"+e.pull,e.pull!==null),Kt(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Pa(e){if(e===null)return null;if((typeof e=="undefined"?"undefined":E0(e))==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var P0=at({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(t){return["horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=_e(function(){return Pa(t.icon)}),a=_e(function(){return Gt("classes",I0(t))}),o=_e(function(){return Gt("transform",typeof t.transform=="string"?fs.transform(t.transform):t.transform)}),s=_e(function(){return Gt("mask",Pa(t.mask))}),l=_e(function(){return b0(i.value,Fn({},a.value,o.value,s.value,{symbol:t.symbol,title:t.title}))});pn(l,function(u){if(!u)return S0("Could not find one or more icon(s)",i.value,s.value)},{immediate:!0});var f=_e(function(){return l.value?ki(l.value.abstract[0],{},r):null});return function(){return f.value}}});at({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,i=cs.familyPrefix,a=_e(function(){return[i+"-layers"].concat(zr(t.fixedWidth?[i+"-fw"]:[]))});return function(){return fi("div",{class:a.value},r.default?r.default():[])}}});at({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,i=cs.familyPrefix,a=_e(function(){return Gt("classes",[].concat(zr(t.counter?[i+"-layers-counter"]:[]),zr(t.position?[i+"-layers-"+t.position]:[])))}),o=_e(function(){return Gt("transform",typeof t.transform=="string"?fs.transform(t.transform):t.transform)}),s=_e(function(){var f=y0(t.value.toString(),Fn({},o.value,a.value)),u=f.abstract;return t.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=_e(function(){return ki(s.value,{},r)});return function(){return l.value}}});v0.add(w0,C0);zc(Rd).component("icon",P0).mount("#app");
