const ms=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}};ms();function jr(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const hs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ps=jr(hs);function Ia(e){return!!e||e===""}function Nn(e){if($(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=ce(r)?bs(r):Nn(r);if(i)for(const a in i)t[a]=i[a]}return t}else{if(ce(e))return e;if(ae(e))return e}}const gs=/;(?![^(]*\))/g,vs=/:(.+)/;function bs(e){const t={};return e.split(gs).forEach(n=>{if(n){const r=n.split(vs);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function $r(e){let t="";if(ce(e))t=e;else if($(e))for(let n=0;n<e.length;n++){const r=$r(e[n]);r&&(t+=r+" ")}else if(ae(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ys=e=>ce(e)?e:e==null?"":$(e)||ae(e)&&(e.toString===Fa||!W(e.toString))?JSON.stringify(e,Pa,2):String(e),Pa=(e,t)=>t&&t.__v_isRef?Pa(e,t.value):Mt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:La(t)?{[`Set(${t.size})`]:[...t.values()]}:ae(t)&&!$(t)&&!Ra(t)?String(t):t,X={},Ot=[],Te=()=>{},_s=()=>!1,ws=/^on[^a-z]/,Fn=e=>ws.test(e),zr=e=>e.startsWith("onUpdate:"),le=Object.assign,Br=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Cs=Object.prototype.hasOwnProperty,K=(e,t)=>Cs.call(e,t),$=Array.isArray,Mt=e=>Rn(e)==="[object Map]",La=e=>Rn(e)==="[object Set]",W=e=>typeof e=="function",ce=e=>typeof e=="string",Wr=e=>typeof e=="symbol",ae=e=>e!==null&&typeof e=="object",Na=e=>ae(e)&&W(e.then)&&W(e.catch),Fa=Object.prototype.toString,Rn=e=>Fa.call(e),xs=e=>Rn(e).slice(8,-1),Ra=e=>Rn(e)==="[object Object]",Ur=e=>ce(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,mn=jr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Hn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ks=/-(\w)/g,Ne=Hn(e=>e.replace(ks,(t,n)=>n?n.toUpperCase():"")),As=/\B([A-Z])/g,Nt=Hn(e=>e.replace(As,"-$1").toLowerCase()),Dn=Hn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Qn=Hn(e=>e?`on${Dn(e)}`:""),wn=(e,t)=>!Object.is(e,t),er=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Cn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ha=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Oi;const Es=()=>Oi||(Oi=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let De;class Ts{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&De&&(this.parent=De,this.index=(De.scopes||(De.scopes=[])).push(this)-1)}run(t){if(this.active)try{return De=this,t()}finally{De=this.parent}}on(){De=this}off(){De=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function Os(e,t=De){t&&t.active&&t.effects.push(e)}const Yr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Da=e=>(e.w&nt)>0,ja=e=>(e.n&nt)>0,Ms=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=nt},Ss=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];Da(i)&&!ja(i)?i.delete(e):t[n++]=i,i.w&=~nt,i.n&=~nt}t.length=n}},fr=new WeakMap;let Bt=0,nt=1;const ur=30;let Pe;const mt=Symbol(""),dr=Symbol("");class Kr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Os(this,r)}run(){if(!this.active)return this.fn();let t=Pe,n=et;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Pe,Pe=this,et=!0,nt=1<<++Bt,Bt<=ur?Ms(this):Mi(this),this.fn()}finally{Bt<=ur&&Ss(this),nt=1<<--Bt,Pe=this.parent,et=n,this.parent=void 0}}stop(){this.active&&(Mi(this),this.onStop&&this.onStop(),this.active=!1)}}function Mi(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let et=!0;const $a=[];function Ft(){$a.push(et),et=!1}function Rt(){const e=$a.pop();et=e===void 0?!0:e}function be(e,t,n){if(et&&Pe){let r=fr.get(e);r||fr.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=Yr()),za(i)}}function za(e,t){let n=!1;Bt<=ur?ja(e)||(e.n|=nt,n=!Da(e)):n=!e.has(Pe),n&&(e.add(Pe),Pe.deps.push(e))}function ze(e,t,n,r,i,a){const o=fr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&$(e))o.forEach((l,f)=>{(f==="length"||f>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":$(e)?Ur(n)&&s.push(o.get("length")):(s.push(o.get(mt)),Mt(e)&&s.push(o.get(dr)));break;case"delete":$(e)||(s.push(o.get(mt)),Mt(e)&&s.push(o.get(dr)));break;case"set":Mt(e)&&s.push(o.get(mt));break}if(s.length===1)s[0]&&mr(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);mr(Yr(l))}}function mr(e,t){for(const n of $(e)?e:[...e])(n!==Pe||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Is=jr("__proto__,__v_isRef,__isVue"),Ba=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(Wr)),Ps=Vr(),Ls=Vr(!1,!0),Ns=Vr(!0),Si=Fs();function Fs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=q(this);for(let a=0,o=this.length;a<o;a++)be(r,"get",a+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(q)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ft();const r=q(this)[t].apply(this,n);return Rt(),r}}),e}function Vr(e=!1,t=!1){return function(r,i,a){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&a===(e?t?Js:Va:t?Ka:Ya).get(r))return r;const o=$(r);if(!e&&o&&K(Si,i))return Reflect.get(Si,i,a);const s=Reflect.get(r,i,a);return(Wr(i)?Ba.has(i):Is(i))||(e||be(r,"get",i),t)?s:ue(s)?!o||!Ur(i)?s.value:s:ae(s)?e?qa(s):Xr(s):s}}const Rs=Wa(),Hs=Wa(!0);function Wa(e=!1){return function(n,r,i,a){let o=n[r];if(Qt(o)&&ue(o)&&!ue(i))return!1;if(!e&&!Qt(i)&&(Za(i)||(i=q(i),o=q(o)),!$(n)&&ue(o)&&!ue(i)))return o.value=i,!0;const s=$(n)&&Ur(r)?Number(r)<n.length:K(n,r),l=Reflect.set(n,r,i,a);return n===q(a)&&(s?wn(i,o)&&ze(n,"set",r,i):ze(n,"add",r,i)),l}}function Ds(e,t){const n=K(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&ze(e,"delete",t,void 0),r}function js(e,t){const n=Reflect.has(e,t);return(!Wr(t)||!Ba.has(t))&&be(e,"has",t),n}function $s(e){return be(e,"iterate",$(e)?"length":mt),Reflect.ownKeys(e)}const Ua={get:Ps,set:Rs,deleteProperty:Ds,has:js,ownKeys:$s},zs={get:Ns,set(e,t){return!0},deleteProperty(e,t){return!0}},Bs=le({},Ua,{get:Ls,set:Hs}),qr=e=>e,jn=e=>Reflect.getPrototypeOf(e);function sn(e,t,n=!1,r=!1){e=e.__v_raw;const i=q(e),a=q(t);t!==a&&!n&&be(i,"get",t),!n&&be(i,"get",a);const{has:o}=jn(i),s=r?qr:n?Qr:Gr;if(o.call(i,t))return s(e.get(t));if(o.call(i,a))return s(e.get(a));e!==i&&e.get(t)}function ln(e,t=!1){const n=this.__v_raw,r=q(n),i=q(e);return e!==i&&!t&&be(r,"has",e),!t&&be(r,"has",i),e===i?n.has(e):n.has(e)||n.has(i)}function cn(e,t=!1){return e=e.__v_raw,!t&&be(q(e),"iterate",mt),Reflect.get(e,"size",e)}function Ii(e){e=q(e);const t=q(this);return jn(t).has.call(t,e)||(t.add(e),ze(t,"add",e,e)),this}function Pi(e,t){t=q(t);const n=q(this),{has:r,get:i}=jn(n);let a=r.call(n,e);a||(e=q(e),a=r.call(n,e));const o=i.call(n,e);return n.set(e,t),a?wn(t,o)&&ze(n,"set",e,t):ze(n,"add",e,t),this}function Li(e){const t=q(this),{has:n,get:r}=jn(t);let i=n.call(t,e);i||(e=q(e),i=n.call(t,e)),r&&r.call(t,e);const a=t.delete(e);return i&&ze(t,"delete",e,void 0),a}function Ni(){const e=q(this),t=e.size!==0,n=e.clear();return t&&ze(e,"clear",void 0,void 0),n}function fn(e,t){return function(r,i){const a=this,o=a.__v_raw,s=q(o),l=t?qr:e?Qr:Gr;return!e&&be(s,"iterate",mt),o.forEach((f,d)=>r.call(i,l(f),l(d),a))}}function un(e,t,n){return function(...r){const i=this.__v_raw,a=q(i),o=Mt(a),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=i[e](...r),d=n?qr:t?Qr:Gr;return!t&&be(a,"iterate",l?dr:mt),{next(){const{value:m,done:g}=f.next();return g?{value:m,done:g}:{value:s?[d(m[0]),d(m[1])]:d(m),done:g}},[Symbol.iterator](){return this}}}}function qe(e){return function(...t){return e==="delete"?!1:this}}function Ws(){const e={get(a){return sn(this,a)},get size(){return cn(this)},has:ln,add:Ii,set:Pi,delete:Li,clear:Ni,forEach:fn(!1,!1)},t={get(a){return sn(this,a,!1,!0)},get size(){return cn(this)},has:ln,add:Ii,set:Pi,delete:Li,clear:Ni,forEach:fn(!1,!0)},n={get(a){return sn(this,a,!0)},get size(){return cn(this,!0)},has(a){return ln.call(this,a,!0)},add:qe("add"),set:qe("set"),delete:qe("delete"),clear:qe("clear"),forEach:fn(!0,!1)},r={get(a){return sn(this,a,!0,!0)},get size(){return cn(this,!0)},has(a){return ln.call(this,a,!0)},add:qe("add"),set:qe("set"),delete:qe("delete"),clear:qe("clear"),forEach:fn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=un(a,!1,!1),n[a]=un(a,!0,!1),t[a]=un(a,!1,!0),r[a]=un(a,!0,!0)}),[e,n,t,r]}const[Us,Ys,Ks,Vs]=Ws();function Zr(e,t){const n=t?e?Vs:Ks:e?Ys:Us;return(r,i,a)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(K(n,i)&&i in r?n:r,i,a)}const qs={get:Zr(!1,!1)},Zs={get:Zr(!1,!0)},Xs={get:Zr(!0,!1)},Ya=new WeakMap,Ka=new WeakMap,Va=new WeakMap,Js=new WeakMap;function Gs(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qs(e){return e.__v_skip||!Object.isExtensible(e)?0:Gs(xs(e))}function Xr(e){return Qt(e)?e:Jr(e,!1,Ua,qs,Ya)}function el(e){return Jr(e,!1,Bs,Zs,Ka)}function qa(e){return Jr(e,!0,zs,Xs,Va)}function Jr(e,t,n,r,i){if(!ae(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=i.get(e);if(a)return a;const o=Qs(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function St(e){return Qt(e)?St(e.__v_raw):!!(e&&e.__v_isReactive)}function Qt(e){return!!(e&&e.__v_isReadonly)}function Za(e){return!!(e&&e.__v_isShallow)}function Xa(e){return St(e)||Qt(e)}function q(e){const t=e&&e.__v_raw;return t?q(t):e}function Ja(e){return Cn(e,"__v_skip",!0),e}const Gr=e=>ae(e)?Xr(e):e,Qr=e=>ae(e)?qa(e):e;function tl(e){et&&Pe&&(e=q(e),za(e.dep||(e.dep=Yr())))}function nl(e,t){e=q(e),e.dep&&mr(e.dep)}function ue(e){return!!(e&&e.__v_isRef===!0)}function rl(e){return ue(e)?e.value:e}const il={get:(e,t,n)=>rl(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return ue(i)&&!ue(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Ga(e){return St(e)?e:new Proxy(e,il)}class al{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Kr(t,()=>{this._dirty||(this._dirty=!0,nl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=q(this);return tl(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function ol(e,t,n=!1){let r,i;const a=W(e);return a?(r=e,i=Te):(r=e.get,i=e.set),new al(r,i,a||!i,n)}Promise.resolve();function tt(e,t,n,r){let i;try{i=r?e(...r):e()}catch(a){$n(a,t,n)}return i}function Ce(e,t,n,r){if(W(e)){const a=tt(e,t,n,r);return a&&Na(a)&&a.catch(o=>{$n(o,t,n)}),a}const i=[];for(let a=0;a<e.length;a++)i.push(Ce(e[a],t,n,r));return i}function $n(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let a=t.parent;const o=t.proxy,s=n;for(;a;){const f=a.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](e,o,s)===!1)return}a=a.parent}const l=t.appContext.config.errorHandler;if(l){tt(l,null,10,[e,o,s]);return}}sl(e,n,i,r)}function sl(e,t,n,r=!0){console.error(e)}let xn=!1,hr=!1;const ve=[];let je=0;const Vt=[];let Wt=null,xt=0;const qt=[];let Ge=null,kt=0;const Qa=Promise.resolve();let ei=null,pr=null;function ll(e){const t=ei||Qa;return e?t.then(this?e.bind(this):e):t}function cl(e){let t=je+1,n=ve.length;for(;t<n;){const r=t+n>>>1;en(ve[r])<e?t=r+1:n=r}return t}function eo(e){(!ve.length||!ve.includes(e,xn&&e.allowRecurse?je+1:je))&&e!==pr&&(e.id==null?ve.push(e):ve.splice(cl(e.id),0,e),to())}function to(){!xn&&!hr&&(hr=!0,ei=Qa.then(io))}function fl(e){const t=ve.indexOf(e);t>je&&ve.splice(t,1)}function no(e,t,n,r){$(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),to()}function ul(e){no(e,Wt,Vt,xt)}function dl(e){no(e,Ge,qt,kt)}function ti(e,t=null){if(Vt.length){for(pr=t,Wt=[...new Set(Vt)],Vt.length=0,xt=0;xt<Wt.length;xt++)Wt[xt]();Wt=null,xt=0,pr=null,ti(e,t)}}function ro(e){if(qt.length){const t=[...new Set(qt)];if(qt.length=0,Ge){Ge.push(...t);return}for(Ge=t,Ge.sort((n,r)=>en(n)-en(r)),kt=0;kt<Ge.length;kt++)Ge[kt]();Ge=null,kt=0}}const en=e=>e.id==null?1/0:e.id;function io(e){hr=!1,xn=!0,ti(e),ve.sort((n,r)=>en(n)-en(r));const t=Te;try{for(je=0;je<ve.length;je++){const n=ve[je];n&&n.active!==!1&&tt(n,null,14)}}finally{je=0,ve.length=0,ro(),xn=!1,ei=null,(ve.length||Vt.length||qt.length)&&io(e)}}function ml(e,t,...n){const r=e.vnode.props||X;let i=n;const a=t.startsWith("update:"),o=a&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:g}=r[d]||X;g?i=n.map(k=>k.trim()):m&&(i=n.map(Ha))}let s,l=r[s=Qn(t)]||r[s=Qn(Ne(t))];!l&&a&&(l=r[s=Qn(Nt(t))]),l&&Ce(l,e,6,i);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ce(f,e,6,i)}}function ao(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const a=e.emits;let o={},s=!1;if(!W(e)){const l=f=>{const d=ao(f,t,!0);d&&(s=!0,le(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!a&&!s?(r.set(e,null),null):($(a)?a.forEach(l=>o[l]=null):le(o,a),r.set(e,o),o)}function ni(e,t){return!e||!Fn(t)?!1:(t=t.slice(2).replace(/Once$/,""),K(e,t[0].toLowerCase()+t.slice(1))||K(e,Nt(t))||K(e,t))}let Ae=null,oo=null;function kn(e){const t=Ae;return Ae=e,oo=e&&e.type.__scopeId||null,t}function so(e,t=Ae,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&Yi(-1);const a=kn(t),o=e(...i);return kn(a),r._d&&Yi(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function tr(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:a,propsOptions:[o],slots:s,attrs:l,emit:f,render:d,renderCache:m,data:g,setupState:k,ctx:I,inheritAttrs:D}=e;let P,_;const O=kn(e);try{if(n.shapeFlag&4){const z=i||r;P=Ie(d.call(z,z,m,a,k,g,I)),_=l}else{const z=t;P=Ie(z.length>1?z(a,{attrs:l,slots:s,emit:f}):z(a,null)),_=t.props?l:hl(l)}}catch(z){Zt.length=0,$n(z,e,1),P=E(Fe)}let H=P;if(_&&D!==!1){const z=Object.keys(_),{shapeFlag:U}=H;z.length&&U&7&&(o&&z.some(zr)&&(_=pl(_,o)),H=Pt(H,_))}return n.dirs&&(H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&(H.transition=n.transition),P=H,kn(O),P}const hl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Fn(n))&&((t||(t={}))[n]=e[n]);return t},pl=(e,t)=>{const n={};for(const r in e)(!zr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function gl(e,t,n){const{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:l}=t,f=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Fi(r,o,f):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const g=d[m];if(o[g]!==r[g]&&!ni(f,g))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Fi(r,o,f):!0:!!o;return!1}function Fi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const a=r[i];if(t[a]!==e[a]&&!ni(n,a))return!0}return!1}function vl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const bl=e=>e.__isSuspense;function yl(e,t){t&&t.pendingBranch?$(e)?t.effects.push(...e):t.effects.push(e):dl(e)}function _l(e,t){if(oe){let n=oe.provides;const r=oe.parent&&oe.parent.provides;r===n&&(n=oe.provides=Object.create(r)),n[e]=t}}function nr(e,t,n=!1){const r=oe||Ae;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&W(t)?t.call(r.proxy):t}}const Ri={};function hn(e,t,n){return lo(e,t,n)}function lo(e,t,{immediate:n,deep:r,flush:i,onTrack:a,onTrigger:o}=X){const s=oe;let l,f=!1,d=!1;if(ue(e)?(l=()=>e.value,f=Za(e)):St(e)?(l=()=>e,r=!0):$(e)?(d=!0,f=e.some(St),l=()=>e.map(_=>{if(ue(_))return _.value;if(St(_))return At(_);if(W(_))return tt(_,s,2)})):W(e)?t?l=()=>tt(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Ce(e,s,3,[g])}:l=Te,t&&r){const _=l;l=()=>At(_())}let m,g=_=>{m=P.onStop=()=>{tt(_,s,4)}};if(tn)return g=Te,t?n&&Ce(t,s,3,[l(),d?[]:void 0,g]):l(),Te;let k=d?[]:Ri;const I=()=>{if(!!P.active)if(t){const _=P.run();(r||f||(d?_.some((O,H)=>wn(O,k[H])):wn(_,k)))&&(m&&m(),Ce(t,s,3,[_,k===Ri?void 0:k,g]),k=_)}else P.run()};I.allowRecurse=!!t;let D;i==="sync"?D=I:i==="post"?D=()=>he(I,s&&s.suspense):D=()=>{!s||s.isMounted?ul(I):I()};const P=new Kr(l,D);return t?n?I():k=P.run():i==="post"?he(P.run.bind(P),s&&s.suspense):P.run(),()=>{P.stop(),s&&s.scope&&Br(s.scope.effects,P)}}function wl(e,t,n){const r=this.proxy,i=ce(e)?e.includes(".")?co(r,e):()=>r[e]:e.bind(r,r);let a;W(t)?a=t:(a=t.handler,n=t);const o=oe;Lt(this);const s=lo(i,a.bind(r),n);return o?Lt(o):pt(),s}function co(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function At(e,t){if(!ae(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ue(e))At(e.value,t);else if($(e))for(let n=0;n<e.length;n++)At(e[n],t);else if(La(e)||Mt(e))e.forEach(n=>{At(n,t)});else if(Ra(e))for(const n in e)At(e[n],t);return e}function Cl(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return po(()=>{e.isMounted=!0}),go(()=>{e.isUnmounting=!0}),e}const _e=[Function,Array],xl={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:_e,onEnter:_e,onAfterEnter:_e,onEnterCancelled:_e,onBeforeLeave:_e,onLeave:_e,onAfterLeave:_e,onLeaveCancelled:_e,onBeforeAppear:_e,onAppear:_e,onAfterAppear:_e,onAppearCancelled:_e},setup(e,{slots:t}){const n=oc(),r=Cl();let i;return()=>{const a=t.default&&mo(t.default(),!0);if(!a||!a.length)return;const o=q(e),{mode:s}=o,l=a[0];if(r.isLeaving)return rr(l);const f=Hi(l);if(!f)return rr(l);const d=gr(f,o,r,n);vr(f,d);const m=n.subTree,g=m&&Hi(m);let k=!1;const{getTransitionKey:I}=f.type;if(I){const D=I();i===void 0?i=D:D!==i&&(i=D,k=!0)}if(g&&g.type!==Fe&&(!ft(f,g)||k)){const D=gr(g,o,r,n);if(vr(g,D),s==="out-in")return r.isLeaving=!0,D.afterLeave=()=>{r.isLeaving=!1,n.update()},rr(l);s==="in-out"&&f.type!==Fe&&(D.delayLeave=(P,_,O)=>{const H=uo(r,g);H[String(g.key)]=g,P._leaveCb=()=>{_(),P._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=O})}return l}}},fo=xl;function uo(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function gr(e,t,n,r){const{appear:i,mode:a,persisted:o=!1,onBeforeEnter:s,onEnter:l,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:m,onLeave:g,onAfterLeave:k,onLeaveCancelled:I,onBeforeAppear:D,onAppear:P,onAfterAppear:_,onAppearCancelled:O}=t,H=String(e.key),z=uo(n,e),U=(B,J)=>{B&&Ce(B,r,9,J)},re={mode:a,persisted:o,beforeEnter(B){let J=s;if(!n.isMounted)if(i)J=D||s;else return;B._leaveCb&&B._leaveCb(!0);const V=z[H];V&&ft(e,V)&&V.el._leaveCb&&V.el._leaveCb(),U(J,[B])},enter(B){let J=l,V=f,me=d;if(!n.isMounted)if(i)J=P||l,V=_||f,me=O||d;else return;let fe=!1;const R=B._enterCb=ie=>{fe||(fe=!0,ie?U(me,[B]):U(V,[B]),re.delayedLeave&&re.delayedLeave(),B._enterCb=void 0)};J?(J(B,R),J.length<=1&&R()):R()},leave(B,J){const V=String(e.key);if(B._enterCb&&B._enterCb(!0),n.isUnmounting)return J();U(m,[B]);let me=!1;const fe=B._leaveCb=R=>{me||(me=!0,J(),R?U(I,[B]):U(k,[B]),B._leaveCb=void 0,z[V]===e&&delete z[V])};z[V]=e,g?(g(B,fe),g.length<=1&&fe()):fe()},clone(B){return gr(B,t,n,r)}};return re}function rr(e){if(zn(e))return e=Pt(e),e.children=null,e}function Hi(e){return zn(e)?e.children?e.children[0]:void 0:e}function vr(e,t){e.shapeFlag&6&&e.component?vr(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function mo(e,t=!1){let n=[],r=0;for(let i=0;i<e.length;i++){const a=e[i];a.type===ke?(a.patchFlag&128&&r++,n=n.concat(mo(a.children,t))):(t||a.type!==Fe)&&n.push(a)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function at(e){return W(e)?{setup:e,name:e.name}:e}const br=e=>!!e.type.__asyncLoader,zn=e=>e.type.__isKeepAlive;function kl(e,t){ho(e,"a",t)}function Al(e,t){ho(e,"da",t)}function ho(e,t,n=oe){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Bn(t,r,n),n){let i=n.parent;for(;i&&i.parent;)zn(i.parent.vnode)&&El(r,t,n,i),i=i.parent}}function El(e,t,n,r){const i=Bn(t,e,r,!0);vo(()=>{Br(r[t],i)},n)}function Bn(e,t,n=oe,r=!1){if(n){const i=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Ft(),Lt(n);const s=Ce(t,n,e,o);return pt(),Rt(),s});return r?i.unshift(a):i.push(a),a}}const Ye=e=>(t,n=oe)=>(!tn||e==="sp")&&Bn(e,t,n),Tl=Ye("bm"),po=Ye("m"),Ol=Ye("bu"),Ml=Ye("u"),go=Ye("bum"),vo=Ye("um"),Sl=Ye("sp"),Il=Ye("rtg"),Pl=Ye("rtc");function Ll(e,t=oe){Bn("ec",e,t)}let yr=!0;function Nl(e){const t=yo(e),n=e.proxy,r=e.ctx;yr=!1,t.beforeCreate&&Di(t.beforeCreate,e,"bc");const{data:i,computed:a,methods:o,watch:s,provide:l,inject:f,created:d,beforeMount:m,mounted:g,beforeUpdate:k,updated:I,activated:D,deactivated:P,beforeDestroy:_,beforeUnmount:O,destroyed:H,unmounted:z,render:U,renderTracked:re,renderTriggered:B,errorCaptured:J,serverPrefetch:V,expose:me,inheritAttrs:fe,components:R,directives:ie,filters:Oe}=t;if(f&&Fl(f,r,null,e.appContext.config.unwrapInjectedRef),o)for(const ne in o){const G=o[ne];W(G)&&(r[ne]=G.bind(n))}if(i){const ne=i.call(n,n);ae(ne)&&(e.data=Xr(ne))}if(yr=!0,a)for(const ne in a){const G=a[ne],Re=W(G)?G.bind(n,n):W(G.get)?G.get.bind(n,n):Te,Xn=!W(G)&&W(G.set)?G.set.bind(n):Te,Dt=we({get:Re,set:Xn});Object.defineProperty(r,ne,{enumerable:!0,configurable:!0,get:()=>Dt.value,set:yt=>Dt.value=yt})}if(s)for(const ne in s)bo(s[ne],r,n,ne);if(l){const ne=W(l)?l.call(n):l;Reflect.ownKeys(ne).forEach(G=>{_l(G,ne[G])})}d&&Di(d,e,"c");function se(ne,G){$(G)?G.forEach(Re=>ne(Re.bind(n))):G&&ne(G.bind(n))}if(se(Tl,m),se(po,g),se(Ol,k),se(Ml,I),se(kl,D),se(Al,P),se(Ll,J),se(Pl,re),se(Il,B),se(go,O),se(vo,z),se(Sl,V),$(me))if(me.length){const ne=e.exposed||(e.exposed={});me.forEach(G=>{Object.defineProperty(ne,G,{get:()=>n[G],set:Re=>n[G]=Re})})}else e.exposed||(e.exposed={});U&&e.render===Te&&(e.render=U),fe!=null&&(e.inheritAttrs=fe),R&&(e.components=R),ie&&(e.directives=ie)}function Fl(e,t,n=Te,r=!1){$(e)&&(e=_r(e));for(const i in e){const a=e[i];let o;ae(a)?"default"in a?o=nr(a.from||i,a.default,!0):o=nr(a.from||i):o=nr(a),ue(o)&&r?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[i]=o}}function Di(e,t,n){Ce($(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function bo(e,t,n,r){const i=r.includes(".")?co(n,r):()=>n[r];if(ce(e)){const a=t[e];W(a)&&hn(i,a)}else if(W(e))hn(i,e.bind(n));else if(ae(e))if($(e))e.forEach(a=>bo(a,t,n,r));else{const a=W(e.handler)?e.handler.bind(n):t[e.handler];W(a)&&hn(i,a,e)}}function yo(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t);let l;return s?l=s:!i.length&&!n&&!r?l=t:(l={},i.length&&i.forEach(f=>An(l,f,o,!0)),An(l,t,o)),a.set(t,l),l}function An(e,t,n,r=!1){const{mixins:i,extends:a}=t;a&&An(e,a,n,!0),i&&i.forEach(o=>An(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Rl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Rl={data:ji,props:ct,emits:ct,methods:ct,computed:ct,beforeCreate:de,created:de,beforeMount:de,mounted:de,beforeUpdate:de,updated:de,beforeDestroy:de,beforeUnmount:de,destroyed:de,unmounted:de,activated:de,deactivated:de,errorCaptured:de,serverPrefetch:de,components:ct,directives:ct,watch:Dl,provide:ji,inject:Hl};function ji(e,t){return t?e?function(){return le(W(e)?e.call(this,this):e,W(t)?t.call(this,this):t)}:t:e}function Hl(e,t){return ct(_r(e),_r(t))}function _r(e){if($(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function de(e,t){return e?[...new Set([].concat(e,t))]:t}function ct(e,t){return e?le(le(Object.create(null),e),t):t}function Dl(e,t){if(!e)return t;if(!t)return e;const n=le(Object.create(null),e);for(const r in t)n[r]=de(e[r],t[r]);return n}function jl(e,t,n,r=!1){const i={},a={};Cn(a,Wn,1),e.propsDefaults=Object.create(null),_o(e,t,i,a);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:el(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function $l(e,t,n,r){const{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=q(i),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let g=d[m];const k=t[g];if(l)if(K(a,g))k!==a[g]&&(a[g]=k,f=!0);else{const I=Ne(g);i[I]=wr(l,s,I,k,e,!1)}else k!==a[g]&&(a[g]=k,f=!0)}}}else{_o(e,t,i,a)&&(f=!0);let d;for(const m in s)(!t||!K(t,m)&&((d=Nt(m))===m||!K(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(i[m]=wr(l,s,m,void 0,e,!0)):delete i[m]);if(a!==s)for(const m in a)(!t||!K(t,m)&&!0)&&(delete a[m],f=!0)}f&&ze(e,"set","$attrs")}function _o(e,t,n,r){const[i,a]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(mn(l))continue;const f=t[l];let d;i&&K(i,d=Ne(l))?!a||!a.includes(d)?n[d]=f:(s||(s={}))[d]=f:ni(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(a){const l=q(n),f=s||X;for(let d=0;d<a.length;d++){const m=a[d];n[m]=wr(i,l,m,f[m],e,!K(f,m))}}return o}function wr(e,t,n,r,i,a){const o=e[n];if(o!=null){const s=K(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&W(l)){const{propsDefaults:f}=i;n in f?r=f[n]:(Lt(i),r=f[n]=l.call(null,t),pt())}else r=l}o[0]&&(a&&!s?r=!1:o[1]&&(r===""||r===Nt(n))&&(r=!0))}return r}function wo(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const a=e.props,o={},s=[];let l=!1;if(!W(e)){const d=m=>{l=!0;const[g,k]=wo(m,t,!0);le(o,g),k&&s.push(...k)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!a&&!l)return r.set(e,Ot),Ot;if($(a))for(let d=0;d<a.length;d++){const m=Ne(a[d]);$i(m)&&(o[m]=X)}else if(a)for(const d in a){const m=Ne(d);if($i(m)){const g=a[d],k=o[m]=$(g)||W(g)?{type:g}:g;if(k){const I=Wi(Boolean,k.type),D=Wi(String,k.type);k[0]=I>-1,k[1]=D<0||I<D,(I>-1||K(k,"default"))&&s.push(m)}}}const f=[o,s];return r.set(e,f),f}function $i(e){return e[0]!=="$"}function zi(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Bi(e,t){return zi(e)===zi(t)}function Wi(e,t){return $(t)?t.findIndex(n=>Bi(n,e)):W(t)&&Bi(t,e)?0:-1}const Co=e=>e[0]==="_"||e==="$stable",ri=e=>$(e)?e.map(Ie):[Ie(e)],zl=(e,t,n)=>{const r=so((...i)=>ri(t(...i)),n);return r._c=!1,r},xo=(e,t,n)=>{const r=e._ctx;for(const i in e){if(Co(i))continue;const a=e[i];if(W(a))t[i]=zl(i,a,r);else if(a!=null){const o=ri(a);t[i]=()=>o}}},ko=(e,t)=>{const n=ri(t);e.slots.default=()=>n},Bl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=q(t),Cn(t,"_",n)):xo(t,e.slots={})}else e.slots={},t&&ko(e,t);Cn(e.slots,Wn,1)},Wl=(e,t,n)=>{const{vnode:r,slots:i}=e;let a=!0,o=X;if(r.shapeFlag&32){const s=t._;s?n&&s===1?a=!1:(le(i,t),!n&&s===1&&delete i._):(a=!t.$stable,xo(t,i)),o=t}else t&&(ko(e,t),o={default:1});if(a)for(const s in i)!Co(s)&&!(s in o)&&delete i[s]};function ot(e,t,n,r){const i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){const s=i[o];a&&(s.oldValue=a[o].value);let l=s.dir[r];l&&(Ft(),Ce(l,n,8,[e.el,s,e,t]),Rt())}}function Ao(){return{app:null,config:{isNativeTag:_s,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ul=0;function Yl(e,t){return function(r,i=null){i!=null&&!ae(i)&&(i=null);const a=Ao(),o=new Set;let s=!1;const l=a.app={_uid:Ul++,_component:r,_props:i,_container:null,_context:a,_instance:null,version:mc,get config(){return a.config},set config(f){},use(f,...d){return o.has(f)||(f&&W(f.install)?(o.add(f),f.install(l,...d)):W(f)&&(o.add(f),f(l,...d))),l},mixin(f){return a.mixins.includes(f)||a.mixins.push(f),l},component(f,d){return d?(a.components[f]=d,l):a.components[f]},directive(f,d){return d?(a.directives[f]=d,l):a.directives[f]},mount(f,d,m){if(!s){const g=E(r,i);return g.appContext=a,d&&t?t(g,f):e(g,f,m),s=!0,l._container=f,f.__vue_app__=l,oi(g.component)||g.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,d){return a.provides[f]=d,l}};return l}}function Cr(e,t,n,r,i=!1){if($(e)){e.forEach((g,k)=>Cr(g,t&&($(t)?t[k]:t),n,r,i));return}if(br(r)&&!i)return;const a=r.shapeFlag&4?oi(r.component)||r.component.proxy:r.el,o=i?null:a,{i:s,r:l}=e,f=t&&t.r,d=s.refs===X?s.refs={}:s.refs,m=s.setupState;if(f!=null&&f!==l&&(ce(f)?(d[f]=null,K(m,f)&&(m[f]=null)):ue(f)&&(f.value=null)),W(l))tt(l,s,12,[o,d]);else{const g=ce(l),k=ue(l);if(g||k){const I=()=>{if(e.f){const D=g?d[l]:l.value;i?$(D)&&Br(D,a):$(D)?D.includes(a)||D.push(a):g?d[l]=[a]:(l.value=[a],e.k&&(d[e.k]=l.value))}else g?(d[l]=o,K(m,l)&&(m[l]=o)):ue(l)&&(l.value=o,e.k&&(d[e.k]=o))};o?(I.id=-1,he(I,n)):I()}}}const he=yl;function Kl(e){return Vl(e)}function Vl(e,t){const n=Es();n.__VUE__=!0;const{insert:r,remove:i,patchProp:a,createElement:o,createText:s,createComment:l,setText:f,setElementText:d,parentNode:m,nextSibling:g,setScopeId:k=Te,cloneNode:I,insertStaticContent:D}=e,P=(c,u,p,b=null,v=null,C=null,T=!1,w=null,x=!!u.dynamicChildren)=>{if(c===u)return;c&&!ft(c,u)&&(b=on(c),Ve(c,v,C,!0),c=null),u.patchFlag===-2&&(x=!1,u.dynamicChildren=null);const{type:y,ref:L,shapeFlag:S}=u;switch(y){case ii:_(c,u,p,b);break;case Fe:O(c,u,p,b);break;case pn:c==null&&H(u,p,b,T);break;case ke:ie(c,u,p,b,v,C,T,w,x);break;default:S&1?re(c,u,p,b,v,C,T,w,x):S&6?Oe(c,u,p,b,v,C,T,w,x):(S&64||S&128)&&y.process(c,u,p,b,v,C,T,w,x,_t)}L!=null&&v&&Cr(L,c&&c.ref,C,u||c,!u)},_=(c,u,p,b)=>{if(c==null)r(u.el=s(u.children),p,b);else{const v=u.el=c.el;u.children!==c.children&&f(v,u.children)}},O=(c,u,p,b)=>{c==null?r(u.el=l(u.children||""),p,b):u.el=c.el},H=(c,u,p,b)=>{[c.el,c.anchor]=D(c.children,u,p,b,c.el,c.anchor)},z=({el:c,anchor:u},p,b)=>{let v;for(;c&&c!==u;)v=g(c),r(c,p,b),c=v;r(u,p,b)},U=({el:c,anchor:u})=>{let p;for(;c&&c!==u;)p=g(c),i(c),c=p;i(u)},re=(c,u,p,b,v,C,T,w,x)=>{T=T||u.type==="svg",c==null?B(u,p,b,v,C,T,w,x):me(c,u,v,C,T,w,x)},B=(c,u,p,b,v,C,T,w)=>{let x,y;const{type:L,props:S,shapeFlag:N,transition:j,patchFlag:Y,dirs:te}=c;if(c.el&&I!==void 0&&Y===-1)x=c.el=I(c.el);else{if(x=c.el=o(c.type,C,S&&S.is,S),N&8?d(x,c.children):N&16&&V(c.children,x,null,b,v,C&&L!=="foreignObject",T,w),te&&ot(c,null,b,"created"),S){for(const Q in S)Q!=="value"&&!mn(Q)&&a(x,Q,null,S[Q],C,c.children,b,v,He);"value"in S&&a(x,"value",null,S.value),(y=S.onVnodeBeforeMount)&&Se(y,b,c)}J(x,c,c.scopeId,T,b)}te&&ot(c,null,b,"beforeMount");const Z=(!v||v&&!v.pendingBranch)&&j&&!j.persisted;Z&&j.beforeEnter(x),r(x,u,p),((y=S&&S.onVnodeMounted)||Z||te)&&he(()=>{y&&Se(y,b,c),Z&&j.enter(x),te&&ot(c,null,b,"mounted")},v)},J=(c,u,p,b,v)=>{if(p&&k(c,p),b)for(let C=0;C<b.length;C++)k(c,b[C]);if(v){let C=v.subTree;if(u===C){const T=v.vnode;J(c,T,T.scopeId,T.slotScopeIds,v.parent)}}},V=(c,u,p,b,v,C,T,w,x=0)=>{for(let y=x;y<c.length;y++){const L=c[y]=w?Qe(c[y]):Ie(c[y]);P(null,L,u,p,b,v,C,T,w)}},me=(c,u,p,b,v,C,T)=>{const w=u.el=c.el;let{patchFlag:x,dynamicChildren:y,dirs:L}=u;x|=c.patchFlag&16;const S=c.props||X,N=u.props||X;let j;p&&st(p,!1),(j=N.onVnodeBeforeUpdate)&&Se(j,p,u,c),L&&ot(u,c,p,"beforeUpdate"),p&&st(p,!0);const Y=v&&u.type!=="foreignObject";if(y?fe(c.dynamicChildren,y,w,p,b,Y,C):T||Re(c,u,w,null,p,b,Y,C,!1),x>0){if(x&16)R(w,u,S,N,p,b,v);else if(x&2&&S.class!==N.class&&a(w,"class",null,N.class,v),x&4&&a(w,"style",S.style,N.style,v),x&8){const te=u.dynamicProps;for(let Z=0;Z<te.length;Z++){const Q=te[Z],xe=S[Q],wt=N[Q];(wt!==xe||Q==="value")&&a(w,Q,xe,wt,v,c.children,p,b,He)}}x&1&&c.children!==u.children&&d(w,u.children)}else!T&&y==null&&R(w,u,S,N,p,b,v);((j=N.onVnodeUpdated)||L)&&he(()=>{j&&Se(j,p,u,c),L&&ot(u,c,p,"updated")},b)},fe=(c,u,p,b,v,C,T)=>{for(let w=0;w<u.length;w++){const x=c[w],y=u[w],L=x.el&&(x.type===ke||!ft(x,y)||x.shapeFlag&70)?m(x.el):p;P(x,y,L,null,b,v,C,T,!0)}},R=(c,u,p,b,v,C,T)=>{if(p!==b){for(const w in b){if(mn(w))continue;const x=b[w],y=p[w];x!==y&&w!=="value"&&a(c,w,y,x,T,u.children,v,C,He)}if(p!==X)for(const w in p)!mn(w)&&!(w in b)&&a(c,w,p[w],null,T,u.children,v,C,He);"value"in b&&a(c,"value",p.value,b.value)}},ie=(c,u,p,b,v,C,T,w,x)=>{const y=u.el=c?c.el:s(""),L=u.anchor=c?c.anchor:s("");let{patchFlag:S,dynamicChildren:N,slotScopeIds:j}=u;j&&(w=w?w.concat(j):j),c==null?(r(y,p,b),r(L,p,b),V(u.children,p,L,v,C,T,w,x)):S>0&&S&64&&N&&c.dynamicChildren?(fe(c.dynamicChildren,N,p,v,C,T,w),(u.key!=null||v&&u===v.subTree)&&Eo(c,u,!0)):Re(c,u,p,L,v,C,T,w,x)},Oe=(c,u,p,b,v,C,T,w,x)=>{u.slotScopeIds=w,c==null?u.shapeFlag&512?v.ctx.activate(u,p,b,T,x):bt(u,p,b,v,C,T,x):se(c,u,x)},bt=(c,u,p,b,v,C,T)=>{const w=c.component=ac(c,b,v);if(zn(c)&&(w.ctx.renderer=_t),sc(w),w.asyncDep){if(v&&v.registerDep(w,ne),!c.el){const x=w.subTree=E(Fe);O(null,x,u,p)}return}ne(w,c,u,p,v,C,T)},se=(c,u,p)=>{const b=u.component=c.component;if(gl(c,u,p))if(b.asyncDep&&!b.asyncResolved){G(b,u,p);return}else b.next=u,fl(b.update),b.update();else u.component=c.component,u.el=c.el,b.vnode=u},ne=(c,u,p,b,v,C,T)=>{const w=()=>{if(c.isMounted){let{next:L,bu:S,u:N,parent:j,vnode:Y}=c,te=L,Z;st(c,!1),L?(L.el=Y.el,G(c,L,T)):L=Y,S&&er(S),(Z=L.props&&L.props.onVnodeBeforeUpdate)&&Se(Z,j,L,Y),st(c,!0);const Q=tr(c),xe=c.subTree;c.subTree=Q,P(xe,Q,m(xe.el),on(xe),c,v,C),L.el=Q.el,te===null&&vl(c,Q.el),N&&he(N,v),(Z=L.props&&L.props.onVnodeUpdated)&&he(()=>Se(Z,j,L,Y),v)}else{let L;const{el:S,props:N}=u,{bm:j,m:Y,parent:te}=c,Z=br(u);if(st(c,!1),j&&er(j),!Z&&(L=N&&N.onVnodeBeforeMount)&&Se(L,te,u),st(c,!0),S&&Gn){const Q=()=>{c.subTree=tr(c),Gn(S,c.subTree,c,v,null)};Z?u.type.__asyncLoader().then(()=>!c.isUnmounted&&Q()):Q()}else{const Q=c.subTree=tr(c);P(null,Q,p,b,c,v,C),u.el=Q.el}if(Y&&he(Y,v),!Z&&(L=N&&N.onVnodeMounted)){const Q=u;he(()=>Se(L,te,Q),v)}u.shapeFlag&256&&c.a&&he(c.a,v),c.isMounted=!0,u=p=b=null}},x=c.effect=new Kr(w,()=>eo(c.update),c.scope),y=c.update=x.run.bind(x);y.id=c.uid,st(c,!0),y()},G=(c,u,p)=>{u.component=c;const b=c.vnode.props;c.vnode=u,c.next=null,$l(c,u.props,b,p),Wl(c,u.children,p),Ft(),ti(void 0,c.update),Rt()},Re=(c,u,p,b,v,C,T,w,x=!1)=>{const y=c&&c.children,L=c?c.shapeFlag:0,S=u.children,{patchFlag:N,shapeFlag:j}=u;if(N>0){if(N&128){Dt(y,S,p,b,v,C,T,w,x);return}else if(N&256){Xn(y,S,p,b,v,C,T,w,x);return}}j&8?(L&16&&He(y,v,C),S!==y&&d(p,S)):L&16?j&16?Dt(y,S,p,b,v,C,T,w,x):He(y,v,C,!0):(L&8&&d(p,""),j&16&&V(S,p,b,v,C,T,w,x))},Xn=(c,u,p,b,v,C,T,w,x)=>{c=c||Ot,u=u||Ot;const y=c.length,L=u.length,S=Math.min(y,L);let N;for(N=0;N<S;N++){const j=u[N]=x?Qe(u[N]):Ie(u[N]);P(c[N],j,p,null,v,C,T,w,x)}y>L?He(c,v,C,!0,!1,S):V(u,p,b,v,C,T,w,x,S)},Dt=(c,u,p,b,v,C,T,w,x)=>{let y=0;const L=u.length;let S=c.length-1,N=L-1;for(;y<=S&&y<=N;){const j=c[y],Y=u[y]=x?Qe(u[y]):Ie(u[y]);if(ft(j,Y))P(j,Y,p,null,v,C,T,w,x);else break;y++}for(;y<=S&&y<=N;){const j=c[S],Y=u[N]=x?Qe(u[N]):Ie(u[N]);if(ft(j,Y))P(j,Y,p,null,v,C,T,w,x);else break;S--,N--}if(y>S){if(y<=N){const j=N+1,Y=j<L?u[j].el:b;for(;y<=N;)P(null,u[y]=x?Qe(u[y]):Ie(u[y]),p,Y,v,C,T,w,x),y++}}else if(y>N)for(;y<=S;)Ve(c[y],v,C,!0),y++;else{const j=y,Y=y,te=new Map;for(y=Y;y<=N;y++){const pe=u[y]=x?Qe(u[y]):Ie(u[y]);pe.key!=null&&te.set(pe.key,y)}let Z,Q=0;const xe=N-Y+1;let wt=!1,Ai=0;const jt=new Array(xe);for(y=0;y<xe;y++)jt[y]=0;for(y=j;y<=S;y++){const pe=c[y];if(Q>=xe){Ve(pe,v,C,!0);continue}let Me;if(pe.key!=null)Me=te.get(pe.key);else for(Z=Y;Z<=N;Z++)if(jt[Z-Y]===0&&ft(pe,u[Z])){Me=Z;break}Me===void 0?Ve(pe,v,C,!0):(jt[Me-Y]=y+1,Me>=Ai?Ai=Me:wt=!0,P(pe,u[Me],p,null,v,C,T,w,x),Q++)}const Ei=wt?ql(jt):Ot;for(Z=Ei.length-1,y=xe-1;y>=0;y--){const pe=Y+y,Me=u[pe],Ti=pe+1<L?u[pe+1].el:b;jt[y]===0?P(null,Me,p,Ti,v,C,T,w,x):wt&&(Z<0||y!==Ei[Z]?yt(Me,p,Ti,2):Z--)}}},yt=(c,u,p,b,v=null)=>{const{el:C,type:T,transition:w,children:x,shapeFlag:y}=c;if(y&6){yt(c.component.subTree,u,p,b);return}if(y&128){c.suspense.move(u,p,b);return}if(y&64){T.move(c,u,p,_t);return}if(T===ke){r(C,u,p);for(let S=0;S<x.length;S++)yt(x[S],u,p,b);r(c.anchor,u,p);return}if(T===pn){z(c,u,p);return}if(b!==2&&y&1&&w)if(b===0)w.beforeEnter(C),r(C,u,p),he(()=>w.enter(C),v);else{const{leave:S,delayLeave:N,afterLeave:j}=w,Y=()=>r(C,u,p),te=()=>{S(C,()=>{Y(),j&&j()})};N?N(C,Y,te):te()}else r(C,u,p)},Ve=(c,u,p,b=!1,v=!1)=>{const{type:C,props:T,ref:w,children:x,dynamicChildren:y,shapeFlag:L,patchFlag:S,dirs:N}=c;if(w!=null&&Cr(w,null,p,c,!0),L&256){u.ctx.deactivate(c);return}const j=L&1&&N,Y=!br(c);let te;if(Y&&(te=T&&T.onVnodeBeforeUnmount)&&Se(te,u,c),L&6)ds(c.component,p,b);else{if(L&128){c.suspense.unmount(p,b);return}j&&ot(c,null,u,"beforeUnmount"),L&64?c.type.remove(c,u,p,v,_t,b):y&&(C!==ke||S>0&&S&64)?He(y,u,p,!1,!0):(C===ke&&S&384||!v&&L&16)&&He(x,u,p),b&&xi(c)}(Y&&(te=T&&T.onVnodeUnmounted)||j)&&he(()=>{te&&Se(te,u,c),j&&ot(c,null,u,"unmounted")},p)},xi=c=>{const{type:u,el:p,anchor:b,transition:v}=c;if(u===ke){us(p,b);return}if(u===pn){U(c);return}const C=()=>{i(p),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(c.shapeFlag&1&&v&&!v.persisted){const{leave:T,delayLeave:w}=v,x=()=>T(p,C);w?w(c.el,C,x):x()}else C()},us=(c,u)=>{let p;for(;c!==u;)p=g(c),i(c),c=p;i(u)},ds=(c,u,p)=>{const{bum:b,scope:v,update:C,subTree:T,um:w}=c;b&&er(b),v.stop(),C&&(C.active=!1,Ve(T,c,u,p)),w&&he(w,u),he(()=>{c.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},He=(c,u,p,b=!1,v=!1,C=0)=>{for(let T=C;T<c.length;T++)Ve(c[T],u,p,b,v)},on=c=>c.shapeFlag&6?on(c.component.subTree):c.shapeFlag&128?c.suspense.next():g(c.anchor||c.el),ki=(c,u,p)=>{c==null?u._vnode&&Ve(u._vnode,null,null,!0):P(u._vnode||null,c,u,null,null,null,p),ro(),u._vnode=c},_t={p:P,um:Ve,m:yt,r:xi,mt:bt,mc:V,pc:Re,pbc:fe,n:on,o:e};let Jn,Gn;return t&&([Jn,Gn]=t(_t)),{render:ki,hydrate:Jn,createApp:Yl(ki,Jn)}}function st({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Eo(e,t,n=!1){const r=e.children,i=t.children;if($(r)&&$(i))for(let a=0;a<r.length;a++){const o=r[a];let s=i[a];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=i[a]=Qe(i[a]),s.el=o.el),n||Eo(o,s))}}function ql(e){const t=e.slice(),n=[0];let r,i,a,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(i=n[n.length-1],e[i]<f){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<f?a=s+1:o=s;f<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}const Zl=e=>e.__isTeleport,To="components";function Ut(e,t){return Jl(To,e,!0,t)||e}const Xl=Symbol();function Jl(e,t,n=!0,r=!1){const i=Ae||oe;if(i){const a=i.type;if(e===To){const s=uc(a);if(s&&(s===t||s===Ne(t)||s===Dn(Ne(t))))return a}const o=Ui(i[e]||a[e],t)||Ui(i.appContext[e],t);return!o&&r?a:o}}function Ui(e,t){return e&&(e[t]||e[Ne(t)]||e[Dn(Ne(t))])}const ke=Symbol(void 0),ii=Symbol(void 0),Fe=Symbol(void 0),pn=Symbol(void 0),Zt=[];let ht=null;function ge(e=!1){Zt.push(ht=e?null:[])}function Gl(){Zt.pop(),ht=Zt[Zt.length-1]||null}let En=1;function Yi(e){En+=e}function Oo(e){return e.dynamicChildren=En>0?ht||Ot:null,Gl(),En>0&&ht&&ht.push(e),e}function $e(e,t,n,r,i,a){return Oo(h(e,t,n,r,i,a,!0))}function gn(e,t,n,r,i){return Oo(E(e,t,n,r,i,!0))}function xr(e){return e?e.__v_isVNode===!0:!1}function ft(e,t){return e.type===t.type&&e.key===t.key}const Wn="__vInternal",Mo=({key:e})=>e!=null?e:null,vn=({ref:e,ref_key:t,ref_for:n})=>e!=null?ce(e)||ue(e)||W(e)?{i:Ae,r:e,k:t,f:!!n}:e:null;function h(e,t=null,n=null,r=0,i=null,a=e===ke?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Mo(t),ref:t&&vn(t),scopeId:oo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return s?(ai(l,n),a&128&&e.normalize(l)):n&&(l.shapeFlag|=ce(n)?8:16),En>0&&!o&&ht&&(l.patchFlag>0||a&6)&&l.patchFlag!==32&&ht.push(l),l}const E=Ql;function Ql(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===Xl)&&(e=Fe),xr(e)){const s=Pt(e,t,!0);return n&&ai(s,n),s}if(dc(e)&&(e=e.__vccOpts),t){t=ec(t);let{class:s,style:l}=t;s&&!ce(s)&&(t.class=$r(s)),ae(l)&&(Xa(l)&&!$(l)&&(l=le({},l)),t.style=Nn(l))}const o=ce(e)?1:bl(e)?128:Zl(e)?64:ae(e)?4:W(e)?2:0;return h(e,t,n,r,i,o,a,!0)}function ec(e){return e?Xa(e)||Wn in e?le({},e):e:null}function Pt(e,t,n=!1){const{props:r,ref:i,patchFlag:a,children:o}=e,s=t?tc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Mo(s),ref:t&&t.ref?n&&i?$(i)?i.concat(vn(t)):[i,vn(t)]:vn(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ke?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Pt(e.ssContent),ssFallback:e.ssFallback&&Pt(e.ssFallback),el:e.el,anchor:e.anchor}}function A(e=" ",t=0){return E(ii,null,e,t)}function Un(e,t){const n=E(pn,null,e);return n.staticCount=t,n}function $t(e="",t=!1){return t?(ge(),gn(Fe,null,e)):E(Fe,null,e)}function Ie(e){return e==null||typeof e=="boolean"?E(Fe):$(e)?E(ke,null,e.slice()):typeof e=="object"?Qe(e):E(ii,null,String(e))}function Qe(e){return e.el===null||e.memo?e:Pt(e)}function ai(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if($(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),ai(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(Wn in t)?t._ctx=Ae:i===3&&Ae&&(Ae.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else W(t)?(t={default:t,_ctx:Ae},n=32):(t=String(t),r&64?(n=16,t=[A(t)]):n=8);e.children=t,e.shapeFlag|=n}function tc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=$r([t.class,r.class]));else if(i==="style")t.style=Nn([t.style,r.style]);else if(Fn(i)){const a=t[i],o=r[i];o&&a!==o&&!($(a)&&a.includes(o))&&(t[i]=a?[].concat(a,o):o)}else i!==""&&(t[i]=r[i])}return t}function Se(e,t,n,r=null){Ce(e,t,7,[n,r])}const kr=e=>e?So(e)?oi(e)||e.proxy:kr(e.parent):null,Tn=le(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>kr(e.parent),$root:e=>kr(e.root),$emit:e=>e.emit,$options:e=>yo(e),$forceUpdate:e=>()=>eo(e.update),$nextTick:e=>ll.bind(e.proxy),$watch:e=>wl.bind(e)}),nc={get({_:e},t){const{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const k=o[t];if(k!==void 0)switch(k){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else{if(r!==X&&K(r,t))return o[t]=1,r[t];if(i!==X&&K(i,t))return o[t]=2,i[t];if((f=e.propsOptions[0])&&K(f,t))return o[t]=3,a[t];if(n!==X&&K(n,t))return o[t]=4,n[t];yr&&(o[t]=0)}}const d=Tn[t];let m,g;if(d)return t==="$attrs"&&be(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==X&&K(n,t))return o[t]=4,n[t];if(g=l.config.globalProperties,K(g,t))return g[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:a}=e;return i!==X&&K(i,t)?(i[t]=n,!0):r!==X&&K(r,t)?(r[t]=n,!0):K(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:a}},o){let s;return!!n[o]||e!==X&&K(e,o)||t!==X&&K(t,o)||(s=a[0])&&K(s,o)||K(r,o)||K(Tn,o)||K(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?this.set(e,t,n.get(),null):n.value!=null&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}},rc=Ao();let ic=0;function ac(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||rc,a={uid:ic++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ts(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wo(r,i),emitsOptions:ao(r,i),emit:null,emitted:null,propsDefaults:X,inheritAttrs:r.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=ml.bind(null,a),e.ce&&e.ce(a),a}let oe=null;const oc=()=>oe||Ae,Lt=e=>{oe=e,e.scope.on()},pt=()=>{oe&&oe.scope.off(),oe=null};function So(e){return e.vnode.shapeFlag&4}let tn=!1;function sc(e,t=!1){tn=t;const{props:n,children:r}=e.vnode,i=So(e);jl(e,n,i,t),Bl(e,r);const a=i?lc(e,t):void 0;return tn=!1,a}function lc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ja(new Proxy(e.ctx,nc));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?fc(e):null;Lt(e),Ft();const a=tt(r,e,0,[e.props,i]);if(Rt(),pt(),Na(a)){if(a.then(pt,pt),t)return a.then(o=>{Ki(e,o,t)}).catch(o=>{$n(o,e,0)});e.asyncDep=a}else Ki(e,a,t)}else Io(e,t)}function Ki(e,t,n){W(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ae(t)&&(e.setupState=Ga(t)),Io(e,n)}let Vi;function Io(e,t,n){const r=e.type;if(!e.render){if(!t&&Vi&&!r.render){const i=r.template;if(i){const{isCustomElement:a,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=le(le({isCustomElement:a,delimiters:s},o),l);r.render=Vi(i,f)}}e.render=r.render||Te}Lt(e),Ft(),Nl(e),Rt(),pt()}function cc(e){return new Proxy(e.attrs,{get(t,n){return be(e,"get","$attrs"),t[n]}})}function fc(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=cc(e))},slots:e.slots,emit:e.emit,expose:t}}function oi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ga(Ja(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Tn)return Tn[n](e)}}))}function uc(e){return W(e)&&e.displayName||e.name}function dc(e){return W(e)&&"__vccOpts"in e}const we=(e,t)=>ol(e,t,tn);function si(e,t,n){const r=arguments.length;return r===2?ae(t)&&!$(t)?xr(t)?E(e,null,[t]):E(e,t):E(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&xr(n)&&(n=[n]),E(e,t,n))}const mc="3.2.31",hc="http://www.w3.org/2000/svg",ut=typeof document!="undefined"?document:null,qi=ut&&ut.createElement("template"),pc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?ut.createElementNS(hc,e):ut.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>ut.createTextNode(e),createComment:e=>ut.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ut.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,i,a){const o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{qi.innerHTML=r?`<svg>${e}</svg>`:e;const s=qi.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function gc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function vc(e,t,n){const r=e.style,i=ce(n);if(n&&!i){for(const a in n)Ar(r,a,n[a]);if(t&&!ce(t))for(const a in t)n[a]==null&&Ar(r,a,"")}else{const a=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=a)}}const Zi=/\s*!important$/;function Ar(e,t,n){if($(n))n.forEach(r=>Ar(e,t,r));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=bc(e,t);Zi.test(n)?e.setProperty(Nt(r),n.replace(Zi,""),"important"):e[r]=n}}const Xi=["Webkit","Moz","ms"],ir={};function bc(e,t){const n=ir[t];if(n)return n;let r=Ne(t);if(r!=="filter"&&r in e)return ir[t]=r;r=Dn(r);for(let i=0;i<Xi.length;i++){const a=Xi[i]+r;if(a in e)return ir[t]=a}return t}const Ji="http://www.w3.org/1999/xlink";function yc(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ji,t.slice(6,t.length)):e.setAttributeNS(Ji,t,n);else{const a=ps(t);n==null||a&&!Ia(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function _c(e,t,n,r,i,a,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,i,a),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const s=n==null?"":n;(e.value!==s||e.tagName==="OPTION")&&(e.value=s),n==null&&e.removeAttribute(t);return}if(n===""||n==null){const s=typeof e[t];if(s==="boolean"){e[t]=Ia(n);return}else if(n==null&&s==="string"){e[t]="",e.removeAttribute(t);return}else if(s==="number"){try{e[t]=0}catch{}e.removeAttribute(t);return}}try{e[t]=n}catch{}}let On=Date.now,Po=!1;if(typeof window!="undefined"){On()>document.createEvent("Event").timeStamp&&(On=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);Po=!!(e&&Number(e[1])<=53)}let Er=0;const wc=Promise.resolve(),Cc=()=>{Er=0},xc=()=>Er||(wc.then(Cc),Er=On());function kc(e,t,n,r){e.addEventListener(t,n,r)}function Ac(e,t,n,r){e.removeEventListener(t,n,r)}function Ec(e,t,n,r,i=null){const a=e._vei||(e._vei={}),o=a[t];if(r&&o)o.value=r;else{const[s,l]=Tc(t);if(r){const f=a[t]=Oc(r,i);kc(e,s,f,l)}else o&&(Ac(e,s,o,l),a[t]=void 0)}}const Gi=/(?:Once|Passive|Capture)$/;function Tc(e){let t;if(Gi.test(e)){t={};let n;for(;n=e.match(Gi);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Nt(e.slice(2)),t]}function Oc(e,t){const n=r=>{const i=r.timeStamp||On();(Po||i>=n.attached-1)&&Ce(Mc(r,n.value),t,5,[r])};return n.value=e,n.attached=xc(),n}function Mc(e,t){if($(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const Qi=/^on[a-z]/,Sc=(e,t,n,r,i=!1,a,o,s,l)=>{t==="class"?gc(e,r,i):t==="style"?vc(e,n,r):Fn(t)?zr(t)||Ec(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ic(e,t,r,i))?_c(e,t,r,a,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),yc(e,t,r,i))};function Ic(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Qi.test(t)&&W(n)):t==="spellcheck"||t==="draggable"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Qi.test(t)&&ce(n)?!1:t in e}const Ze="transition",zt="animation",li=(e,{slots:t})=>si(fo,Pc(e),t);li.displayName="Transition";const Lo={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};li.props=le({},fo.props,Lo);const lt=(e,t=[])=>{$(e)?e.forEach(n=>n(...t)):e&&e(...t)},ea=e=>e?$(e)?e.some(t=>t.length>1):e.length>1:!1;function Pc(e){const t={};for(const R in e)R in Lo||(t[R]=e[R]);if(e.css===!1)return t;const{name:n="v",type:r,duration:i,enterFromClass:a=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:l=a,appearActiveClass:f=o,appearToClass:d=s,leaveFromClass:m=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:k=`${n}-leave-to`}=e,I=Lc(i),D=I&&I[0],P=I&&I[1],{onBeforeEnter:_,onEnter:O,onEnterCancelled:H,onLeave:z,onLeaveCancelled:U,onBeforeAppear:re=_,onAppear:B=O,onAppearCancelled:J=H}=t,V=(R,ie,Oe)=>{Ct(R,ie?d:s),Ct(R,ie?f:o),Oe&&Oe()},me=(R,ie)=>{Ct(R,k),Ct(R,g),ie&&ie()},fe=R=>(ie,Oe)=>{const bt=R?B:O,se=()=>V(ie,R,Oe);lt(bt,[ie,se]),ta(()=>{Ct(ie,R?l:a),Xe(ie,R?d:s),ea(bt)||na(ie,r,D,se)})};return le(t,{onBeforeEnter(R){lt(_,[R]),Xe(R,a),Xe(R,o)},onBeforeAppear(R){lt(re,[R]),Xe(R,l),Xe(R,f)},onEnter:fe(!1),onAppear:fe(!0),onLeave(R,ie){const Oe=()=>me(R,ie);Xe(R,m),Rc(),Xe(R,g),ta(()=>{Ct(R,m),Xe(R,k),ea(z)||na(R,r,P,Oe)}),lt(z,[R,Oe])},onEnterCancelled(R){V(R,!1),lt(H,[R])},onAppearCancelled(R){V(R,!0),lt(J,[R])},onLeaveCancelled(R){me(R),lt(U,[R])}})}function Lc(e){if(e==null)return null;if(ae(e))return[ar(e.enter),ar(e.leave)];{const t=ar(e);return[t,t]}}function ar(e){return Ha(e)}function Xe(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function Ct(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function ta(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Nc=0;function na(e,t,n,r){const i=e._endId=++Nc,a=()=>{i===e._endId&&r()};if(n)return setTimeout(a,n);const{type:o,timeout:s,propCount:l}=Fc(e,t);if(!o)return r();const f=o+"end";let d=0;const m=()=>{e.removeEventListener(f,g),a()},g=k=>{k.target===e&&++d>=l&&m()};setTimeout(()=>{d<l&&m()},s+1),e.addEventListener(f,g)}function Fc(e,t){const n=window.getComputedStyle(e),r=I=>(n[I]||"").split(", "),i=r(Ze+"Delay"),a=r(Ze+"Duration"),o=ra(i,a),s=r(zt+"Delay"),l=r(zt+"Duration"),f=ra(s,l);let d=null,m=0,g=0;t===Ze?o>0&&(d=Ze,m=o,g=a.length):t===zt?f>0&&(d=zt,m=f,g=l.length):(m=Math.max(o,f),d=m>0?o>f?Ze:zt:null,g=d?d===Ze?a.length:l.length:0);const k=d===Ze&&/\b(transform|all)(,|$)/.test(n[Ze+"Property"]);return{type:d,timeout:m,propCount:g,hasTransform:k}}function ra(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>ia(n)+ia(e[r])))}function ia(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Rc(){return document.body.offsetHeight}const Hc=le({patchProp:Sc},pc);let aa;function Dc(){return aa||(aa=Kl(Hc))}const jc=(...e)=>{const t=Dc().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=$c(r);if(!i)return;const a=t._component;!W(a)&&!a.render&&!a.template&&(a.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function $c(e){return ce(e)?document.querySelector(e):e}var rn=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n};const zc=at({}),Bc=h("div",{class:"bg-gray-900 text-white"},[h("section",{class:"bg-[#44C577] bg-gradient-to-t from-[#44C577] to-cyan-600"},[h("h1",null,"JavaScript, but desktop"),h("p",null,"MintScript is a JavaScript inspired language, optimized for running on your machine instead of the browser. This defeats the need for something like node.js and leads to better performance")]),h("svg",{id:"visual",class:"spacer",preserveAspectRatio:"none",viewBox:"0 0 900 200",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1"},[h("path",{d:"M0 112L16.7 118C33.3 124 66.7 136 100 140.8C133.3 145.7 166.7 143.3 200 142.2C233.3 141 266.7 141 300 141C333.3 141 366.7 141 400 143.2C433.3 145.3 466.7 149.7 500 150.5C533.3 151.3 566.7 148.7 600 143.7C633.3 138.7 666.7 131.3 700 130.8C733.3 130.3 766.7 136.7 800 138.7C833.3 140.7 866.7 138.3 883.3 137.2L900 136L900 0L883.3 0C866.7 0 833.3 0 800 0C766.7 0 733.3 0 700 0C666.7 0 633.3 0 600 0C566.7 0 533.3 0 500 0C466.7 0 433.3 0 400 0C366.7 0 333.3 0 300 0C266.7 0 233.3 0 200 0C166.7 0 133.3 0 100 0C66.7 0 33.3 0 16.7 0L0 0Z",fill:"#006f57"}),h("path",{d:"M0 79L16.7 81.8C33.3 84.7 66.7 90.3 100 96.7C133.3 103 166.7 110 200 111C233.3 112 266.7 107 300 102.7C333.3 98.3 366.7 94.7 400 92.5C433.3 90.3 466.7 89.7 500 91.5C533.3 93.3 566.7 97.7 600 98.3C633.3 99 666.7 96 700 92.8C733.3 89.7 766.7 86.3 800 88C833.3 89.7 866.7 96.3 883.3 99.7L900 103L900 0L883.3 0C866.7 0 833.3 0 800 0C766.7 0 733.3 0 700 0C666.7 0 633.3 0 600 0C566.7 0 533.3 0 500 0C466.7 0 433.3 0 400 0C366.7 0 333.3 0 300 0C266.7 0 233.3 0 200 0C166.7 0 133.3 0 100 0C66.7 0 33.3 0 16.7 0L0 0Z",fill:"#0c8b64"}),h("path",{d:"M0 70L16.7 72.7C33.3 75.3 66.7 80.7 100 82.7C133.3 84.7 166.7 83.3 200 81.3C233.3 79.3 266.7 76.7 300 76.3C333.3 76 366.7 78 400 74.5C433.3 71 466.7 62 500 63.2C533.3 64.3 566.7 75.7 600 79.2C633.3 82.7 666.7 78.3 700 76.3C733.3 74.3 766.7 74.7 800 70.5C833.3 66.3 866.7 57.7 883.3 53.3L900 49L900 0L883.3 0C866.7 0 833.3 0 800 0C766.7 0 733.3 0 700 0C666.7 0 633.3 0 600 0C566.7 0 533.3 0 500 0C466.7 0 433.3 0 400 0C366.7 0 333.3 0 300 0C266.7 0 233.3 0 200 0C166.7 0 133.3 0 100 0C66.7 0 33.3 0 16.7 0L0 0Z",fill:"#27a86f"}),h("path",{d:"M0 39L16.7 41.2C33.3 43.3 66.7 47.7 100 44.7C133.3 41.7 166.7 31.3 200 28.7C233.3 26 266.7 31 300 33C333.3 35 366.7 34 400 36.5C433.3 39 466.7 45 500 45.7C533.3 46.3 566.7 41.7 600 37.7C633.3 33.7 666.7 30.3 700 28.7C733.3 27 766.7 27 800 30.5C833.3 34 866.7 41 883.3 44.5L900 48L900 0L883.3 0C866.7 0 833.3 0 800 0C766.7 0 733.3 0 700 0C666.7 0 633.3 0 600 0C566.7 0 533.3 0 500 0C466.7 0 433.3 0 400 0C366.7 0 333.3 0 300 0C266.7 0 233.3 0 200 0C166.7 0 133.3 0 100 0C66.7 0 33.3 0 16.7 0L0 0Z",fill:"#44c577"})]),h("section",null,[h("h1",null,"Missing something? No problem."),h("p",null,"MintScript has an import statement, allowing to import both C# DLLs and MintScript files.")]),h("svg",{id:"visual",class:"spacer",preserveAspectRatio:"none",viewBox:"0 0 900 200",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1"},[h("path",{d:"M0 60L21.5 62.3C43 64.7 86 69.3 128.8 71.3C171.7 73.3 214.3 72.7 257.2 75.7C300 78.7 343 85.3 385.8 82.7C428.7 80 471.3 68 514.2 69.7C557 71.3 600 86.7 642.8 88.3C685.7 90 728.3 78 771.2 75.2C814 72.3 857 78.7 878.5 81.8L900 85L900 201L878.5 201C857 201 814 201 771.2 201C728.3 201 685.7 201 642.8 201C600 201 557 201 514.2 201C471.3 201 428.7 201 385.8 201C343 201 300 201 257.2 201C214.3 201 171.7 201 128.8 201C86 201 43 201 21.5 201L0 201Z",fill:"#fa7268"}),h("path",{d:"M0 77L21.5 80.5C43 84 86 91 128.8 98.2C171.7 105.3 214.3 112.7 257.2 111.2C300 109.7 343 99.3 385.8 91.7C428.7 84 471.3 79 514.2 82.3C557 85.7 600 97.3 642.8 98.3C685.7 99.3 728.3 89.7 771.2 88.8C814 88 857 96 878.5 100L900 104L900 201L878.5 201C857 201 814 201 771.2 201C728.3 201 685.7 201 642.8 201C600 201 557 201 514.2 201C471.3 201 428.7 201 385.8 201C343 201 300 201 257.2 201C214.3 201 171.7 201 128.8 201C86 201 43 201 21.5 201L0 201Z",fill:"#ef5f67"}),h("path",{d:"M0 114L21.5 116.7C43 119.3 86 124.7 128.8 122.2C171.7 119.7 214.3 109.3 257.2 109.8C300 110.3 343 121.7 385.8 129.2C428.7 136.7 471.3 140.3 514.2 136.8C557 133.3 600 122.7 642.8 116.2C685.7 109.7 728.3 107.3 771.2 105C814 102.7 857 100.3 878.5 99.2L900 98L900 201L878.5 201C857 201 814 201 771.2 201C728.3 201 685.7 201 642.8 201C600 201 557 201 514.2 201C471.3 201 428.7 201 385.8 201C343 201 300 201 257.2 201C214.3 201 171.7 201 128.8 201C86 201 43 201 21.5 201L0 201Z",fill:"#e34c67"}),h("path",{d:"M0 133L21.5 136.3C43 139.7 86 146.3 128.8 150.5C171.7 154.7 214.3 156.3 257.2 156.2C300 156 343 154 385.8 151C428.7 148 471.3 144 514.2 145.5C557 147 600 154 642.8 151.7C685.7 149.3 728.3 137.7 771.2 134.3C814 131 857 136 878.5 138.5L900 141L900 201L878.5 201C857 201 814 201 771.2 201C728.3 201 685.7 201 642.8 201C600 201 557 201 514.2 201C471.3 201 428.7 201 385.8 201C343 201 300 201 257.2 201C214.3 201 171.7 201 128.8 201C86 201 43 201 21.5 201L0 201Z",fill:"#d53867"}),h("path",{d:"M0 173L21.5 172.8C43 172.7 86 172.3 128.8 171.8C171.7 171.3 214.3 170.7 257.2 171.8C300 173 343 176 385.8 178.5C428.7 181 471.3 183 514.2 181.2C557 179.3 600 173.7 642.8 170C685.7 166.3 728.3 164.7 771.2 165.2C814 165.7 857 168.3 878.5 169.7L900 171L900 201L878.5 201C857 201 814 201 771.2 201C728.3 201 685.7 201 642.8 201C600 201 557 201 514.2 201C471.3 201 428.7 201 385.8 201C343 201 300 201 257.2 201C214.3 201 171.7 201 128.8 201C86 201 43 201 21.5 201L0 201Z",fill:"#c62368"})]),h("section",{class:"bg-[#C62368] bg-gradient-to-b from-[#C62368] to-[#FA7268]"},[h("h1",null,"Minimal, yet structured syntax"),h("p",null,"MintScript is a bracket language, making it easy to write good looking code, while also having self-explainatory syntax like println() to make understanding the code as easy as possible.")]),h("svg",{id:"visual",class:"spacer",preserveAspectRatio:"none",viewBox:"0 0 900 200",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1"},[h("path",{d:"M0 170L18.8 170.2C37.7 170.3 75.3 170.7 112.8 171.5C150.3 172.3 187.7 173.7 225.2 175.2C262.7 176.7 300.3 178.3 337.8 173C375.3 167.7 412.7 155.3 450.2 155.5C487.7 155.7 525.3 168.3 562.8 166.7C600.3 165 637.7 149 675.2 145.3C712.7 141.7 750.3 150.3 787.8 158.2C825.3 166 862.7 173 881.3 176.5L900 180L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z",fill:"#c62368"}),h("path",{d:"M0 132L18.8 134.7C37.7 137.3 75.3 142.7 112.8 143.7C150.3 144.7 187.7 141.3 225.2 135.5C262.7 129.7 300.3 121.3 337.8 116.2C375.3 111 412.7 109 450.2 113.3C487.7 117.7 525.3 128.3 562.8 132.3C600.3 136.3 637.7 133.7 675.2 135C712.7 136.3 750.3 141.7 787.8 134.2C825.3 126.7 862.7 106.3 881.3 96.2L900 86L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z",fill:"#da3f67"}),h("path",{d:"M0 84L18.8 87.3C37.7 90.7 75.3 97.3 112.8 94.8C150.3 92.3 187.7 80.7 225.2 75C262.7 69.3 300.3 69.7 337.8 75.3C375.3 81 412.7 92 450.2 87.7C487.7 83.3 525.3 63.7 562.8 63.5C600.3 63.3 637.7 82.7 675.2 90.8C712.7 99 750.3 96 787.8 92.3C825.3 88.7 862.7 84.3 881.3 82.2L900 80L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z",fill:"#eb5967"}),h("path",{d:"M0 23L18.8 26.3C37.7 29.7 75.3 36.3 112.8 36.7C150.3 37 187.7 31 225.2 34.5C262.7 38 300.3 51 337.8 53.3C375.3 55.7 412.7 47.3 450.2 45.7C487.7 44 525.3 49 562.8 44C600.3 39 637.7 24 675.2 20.8C712.7 17.7 750.3 26.3 787.8 35.5C825.3 44.7 862.7 54.3 881.3 59.2L900 64L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z",fill:"#fa7268"})]),h("section",null,[h("h1",null,"Wanna deploy to the web? We've got you covered."),h("p",null,"(WIP) ViceVersa is the MintScript transpiler for JavaScript, meaning: build once, run everywhere.")])],-1),Wc=[Bc];function Uc(e,t,n,r,i,a){return ge(),$e("div",null,Wc)}var Yc=rn(zc,[["render",Uc]]);const Kc=at({props:{code:{type:String,default:""}}}),Vc={class:"overflow-hidden text-left w-[calc(100% - 3rem)] m-6 p-6 rounded-lg bg-gray-500"};function qc(e,t,n,r,i,a){return ge(),$e("div",Vc,[h("pre",null,ys(e.code),1)])}var Zc=rn(Kc,[["render",qc]]);const Xc=at({components:{CodeBlock:Zc}}),Jc={class:"relative"},Gc=Un('<div class="sidebar flex flex-col items-center bg-blue-600 text-white fixed left-0 top-0 bottom-0 z-0 overflow-y-scroll pt-20"><a href="#basics" class="transition-all duration-500 hover:text-red-500">Basics</a><a href="#functions" class="transition-all duration-500 hover:text-red-500">Functions</a><a href="#classes" class="transition-all duration-500 hover:text-red-500">Classes</a><a href="#modules" class="transition-all duration-500 hover:text-red-500">Modules</a><a href="#refs" class="transition-all duration-500 hover:text-red-500 text-center">Explanations for advanced developers</a></div>',1),Qc={class:"documentation p-12 pt-0 text-justify h-auto bg-gray-900 text-white"},ef=h("h1",{id:"basics",class:"text-center"},[h("br"),A("Basics")],-1),tf=Un(" MintScript is a statically typed curly-bracked language with JavaScript inspired syntax. It is written in C#, using the ANTLR language toolkit.<br><br> Now let&#39;s start with the basics of MS.<br> MintScript executes functions in a global scope, meaning that you can just write into the script and it will be executed, no need for an entry point.<br><br> Statements <b>can</b> be followed by either a semicolon or a newline to signalise the end of the current statement.<br><br> But let&#39;s finally code something.<br><br> To start, run <i>MintScript init</i> (Windows only)<br> To run your script, type <i>MintScript C:/full/path/to/your/main.mis</i><br> First of all, lets create a variable called HelloWorld.<br>",25),nf=A(" Variables can have 5 types: string, number, float, bool and tuple."),rf=h("br",null,null,-1),af=A(" Now, lets print our variable to the console by writing: "),of=A(" Notice, that the function is called "),sf=h("i",null,"println",-1),lf=A('. This ends the line after printing "Hello, world!". To continue the line, just write: '),cf=A(` If you were to start the script now, you would see the window popping up and directly closing. Don't worry, everything's ok. The window is actually showing "Hello, world!", but closing, because we are not waiting for any user input. To prevent this, add this to the end of your script: `),ff=A(" Now, whenever you press enter, the script ends. "),uf=h("br",null,null,-1),df=A(" If you want to read inout from the user, just use "),mf=h("br",null,null,-1),hf=A(" We now have created a variable, printed it and received input from the user. However, we haven't done anything special with our data. Let's add something to our string at first: "),pf=A(' Now, our string will be "Hello, world! How are you?". We can also compare our string with others by using the if statement '),gf=A(' This checks, if HelloWorld is equal to (==) our second argument, in this case: "Hello, world! How are you?" Other comparison operators are not equal (!=), greater (>), less (<), greater or equal (>=) and less or equal (<=) '),vf=h("br",null,null,-1),bf=A("If statements can be followed by a self-explainatory else or else if statement. "),yf=A(" Another important statement is the while statement. It executes code until the given condition returns false. Here's an example: "),_f=A(" (Tip: Use while(true) to repeat the code forever) "),wf=h("br",null,null,-1),Cf=h("br",null,null,-1),xf=h("h1",{id:"functions",class:"text-center"},[h("br"),A("Functions")],-1),kf=A(" MintScript of course has functions. You can declare functions with: "),Af=A(" You can now call it by simply typing "),Ef=A(" Functions will always return a value. The return value for functions without a return statement will be the exit status of the last statement in the function, meaning: "),Tf=A(" will return 0, because print exited sucessfully. However, this function: "),Of=A(` will return "System.object". Why? Well, because "123" isn't a statement but an expression. This means, that it can't return 0 or sucessful, because it's not doing any actions. It's just a number. Also, "System.object" is the C# type MintScript uses to store values. To willingly return a value, use `),Mf=A(" This will indeed return 123. "),Sf=h("h1",{id:"classes",class:"text-center"},[h("br"),A("Classes")],-1),If=A(" Classes are a way to collect variables and functions and create inheritance systems."),Pf=h("br",null,null,-1),Lf=A(" Declare classes with "),Nf=A(" Classes can also inherit functions from others."),Ff=h("br",null,null,-1),Rf=A(" Create a inherative class by typing "),Hf=A(` Note that we don't need a keyword like "override" in MintScript to override functions. Also, classes can also inherit from any other function, no need for abstract classes. You can also add properties to classes thad didn't exist in the parent class: `),Df=A(" You can now create a new Instance of your class by using the new statement "),jf=A(" When a new instance of your class is created, the constructor function will be called. Define it with "),$f=A(" Now, you can pass in arguments using "),zf=h("h1",{id:"modules",class:"text-center"},[h("br"),A("Modules")],-1),Bf=A(" Modules are a way to share code between projects or developers. You can Import a module by using the import statement: "),Wf=A(" This will search for a file in the modules/module_name/ folder. Modules can also be imported from a specific path: "),Uf=A(" Modules can be in 2 formats; MintScript or DLL. A DLL Tutorial can be found on the Youtube channel of MintScript soon. But for now, here is a boilerplate for writin C# class libraries to extend MintScript: "),Yf=A(" Also, dll modules require a "),Kf=h("i",null,"module.json",-1),Vf=A(" file to be in the same directory, which contains the export functions: "),qf=A(" Modules written in MintScript do not require this modules.json file. Said modules will simply export every export class: "),Zf=A(" When using import statements, the exports will be loaded into the Variable Space in a pseudo-class with the same name as given. Meaning: "),Xf=A(" will be loading in its imaginary function "),Jf=h("i",null,"MyFunc()",-1),Gf=A(" as "),Qf=A(" However, because MintScript is still in Beta, we recomment using DLL modules. "),eu=h("h1",{id:"refs",class:"text-center"},[h("br"),A("Explanations for advanced developers")],-1),tu=Un('<ul><h2>Types</h2><li class="decoration-indigo-600 underline text-indigo-600"><a href="#string">String</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#number">Number</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#float">Float</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#bool">Bool</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#tuple">Tuple</a></li><h2>Operators</h2><li class="decoration-indigo-600 underline text-indigo-600"><a href="#+">+</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#-">-</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#*">*</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#/">/</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#**">**</a></li><h2>Loops and statements</h2><li class="decoration-indigo-600 underline text-indigo-600"><a href="#func">Func</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#if">If</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#while">While</a></li><h2>Built-in functions</h2><li class="decoration-indigo-600 underline text-indigo-600"><a href="#print">print</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#println">println</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#read">read</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#readln">readln</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#str">str</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#pos">pos</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#len">len</a></li><li class="decoration-indigo-600 underline text-indigo-600"><a href="#contains">contains</a></li></ul>',1),nu=h("h3",{id:"string"},"String",-1),ru=A(" Strings are objects that define text "),iu={id:"number"},au=h("h3",null,"Number",-1),ou=A(" Numbers are objects that define natural numbers "),su={id:"float"},lu=h("h3",null,"Float",-1),cu=A(" Floats are objects that define decimal numbers "),fu={id:"bool"},uu=h("h3",null,"Bool",-1),du=A(" Booleans are objects that define either true or false values "),mu={id:"tuple"},hu=h("h3",null,"Tuple",-1),pu=A(" Tuples are objects that define a list of items "),gu=A(" You can get elements by their index "),vu={id:"+"},bu=h("h3",null,"+",-1),yu=A(" Adds the two values together (string, number, float, tuple) "),_u=A(" Can be used as a assignment operator: "),wu=A(" Allows quick assignments (increase by 1) "),Cu={id:"-"},xu=h("h3",null,"+",-1),ku=A(" removes he second value from the first (number, float) "),Au=A(" Can be used as a assignment operator: "),Eu=A(" Allows quick assignments (decrease by 1) "),Tu={id:"*"},Ou=h("h3",null,"*",-1),Mu=A(" Multiplies the two values (number, float) "),Su=A(" Can be used as a assignment operator: "),Iu={id:"/"},Pu=h("h3",null,"/",-1),Lu=A(" Divides value 1 by value 2 (number, float) "),Nu=A(" Can be used as a assignment operator: "),Fu={id:"**"},Ru=h("h3",null,"**",-1),Hu=A(" Calculates value 1 to the power of value 2 (number, float) "),Du=A(" Can be used as a assignment operator: "),ju={id:"func"},$u=h("h3",null,"Func",-1),zu=A(" Declares a function that can return a value and take in arguments "),Bu={id:"class"},Wu=h("h3",null,"Class",-1),Uu=A(" Declares a class that can inherit from another class and have a constructor "),Yu=A(" the new Keyword instanciates it. "),Ku={id:"if"},Vu=h("h3",null,"If",-1),qu=A(" Runs if the given statement returns true. Can be followed by a else if or else statement. "),Zu={id:"while"},Xu=h("h3",null,"While",-1),Ju=A(" Runs while the given statement returns true "),Gu=h("h3",null,"Print",-1),Qu=A(" Prints out the given object "),ed={id:"println"},td=h("h3",null,"Println",-1),nd=A(" Prints out the given object and ends the line "),rd={id:"read"},id=h("h3",null,"Read",-1),ad=A(" reads input from the user and returns it as a string "),od={id:"readln"},sd=h("h3",null,"Readln",-1),ld=A(" reads a line from the user and returns it as a string "),cd={id:"str"},fd=h("h3",null,"Str",-1),ud=A(" converts the given object to a string "),dd={id:"pos"},md=h("h3",null,"Pos",-1),hd=A(" Returns the position of the given object at position 2 in the string or tuple at position 1 or -1 if the object wasn't present "),pd={id:"len"},gd=h("h3",null,"Len",-1),vd=A(" Returns the length of the given string or tuple "),bd={id:"contains"},yd=h("h3",null,"Contains",-1),_d=A(" Returns wether the object at position 2 is present in the string or tuple at poosition 1 ");function wd(e,t,n,r,i,a){const o=Ut("CodeBlock");return ge(),$e("div",Jc,[Gc,h("div",Qc,[ef,h("p",null,[tf,E(o,{code:'HelloWorld = "Hello, world!"'}),nf,rf,af,E(o,{code:"println(HelloWorld)"}),of,sf,lf,E(o,{code:"print(HelloWorld)"}),cf,E(o,{code:"read()"}),ff,uf,df,E(o,{code:"input = readln()"}),mf,hf,E(o,{code:'HelloWorld = HelloWorld + " How are you?"'}),pf,E(o,{code:`if(HelloWorld == "Hello, world! how are you?") {\r
    println(HelloWorld)\r
}`}),gf,vf,bf,E(o,{code:`if(HelloWorld == "Hello, world! how are you?") {\r
    println(HelloWorld)\r
}\r
else if(HelloWorld == "Hello, world!"){\r
    println("Our variable was 'Hello, world!'")\r
}\r
else {\r
    println("Our variable was neither of those")\r
}`}),yf,E(o,{code:`i = 0\r
while(i < 10) {\r
    print(i)\r
    i = i + 1\r
}`}),_f]),wf,Cf,xf,h("p",null,[kf,E(o,{code:`func MyFunc(string myArgument) {\r
    println("MyFunc was called with argument " + myArgument)\r
}`}),Af,E(o,{code:'MyFunc("Hello world")'}),Ef,E(o,{code:`func MyFunc() {\r
    print("Hello, world!")\r
}`}),Tf,E(o,{code:`func MyFunc() {\r
    123\r
}`}),Of,E(o,{code:`func MyFunc() {\r
    return 123\r
}`}),Mf]),Sf,h("p",null,[If,Pf,Lf,E(o,{code:`class Animal {\r
    func makeSound() {\r
        println("Hello world!")\r
    }\r
\r
    legs = 4\r
}`}),Nf,Ff,Rf,E(o,{code:`class Pig : Animal {\r
    func makeSound() {\r
        println("Squeeeek! Says the pig with " + this.legs + " legs")\r
    }\r
}`}),Hf,E(o,{code:`class Cow : Animal {\r
    func makeSound() {\r
        println("Moooo!")\r
    }\r
\r
    products = { "Milk", "Meat" }\r
}`}),Df,E(o,{code:"pig = new Pig()"}),jf,E(o,{code:`class InstanceTest {\r
    constructor (string s) {\r
        println(s)\r
    }\r
}`}),$f,E(o,{code:'instance = new InstanceTest("Hello world!")'})]),zf,h("p",null,[Bf,E(o,{code:"import module"}),Wf,E(o,{code:"import module from './mymodule.mis'"}),Uf,E(o,{code:`public class Exports {\r
    // Write your functions here. \r
    // Every function should return an object and take in an object[].\r
    public object example(object[] args){\r
        return args[0];\r
    }\r
}`}),Yf,Kf,Vf,E(o,{code:`{\r
    "export_functions": [\r
        {\r
            "method": "test",\r
            "args": [ "string" ]\r
        }\r
    ]\r
}`}),qf,E(o,{code:`export class Foo {\r
    bar = "Hello world!"\r
    func Greet() {\r
        // Greetings to Fireship\r
        println('hi mom')\r
    }\r
}`}),Zf,E(o,{code:"import myModule"}),Xf,Jf,Gf,E(o,{code:"myModule.MyFunc()"}),Qf]),eu,h("p",null,[tu,h("p",null,[nu,ru,E(o,{code:'"Text"'})]),h("p",iu,[au,ou,E(o,{code:"13"})]),h("p",su,[lu,cu,E(o,{code:"2.56"})]),h("p",fu,[uu,du,E(o,{code:"true"})]),h("p",mu,[hu,pu,E(o,{code:'{ "value 1", 2, {3, 4, 5} }'}),gu,E(o,{code:"nameOfArray[0]"})]),h("p",vu,[bu,yu,E(o,{code:"1 + 1"}),_u,E(o,{code:"foo += 1"}),wu,E(o,{code:"foo++"})]),h("p",Cu,[xu,ku,E(o,{code:"2 - 1"}),Au,E(o,{code:"foo -= 1"}),Eu,E(o,{code:"foo--"})]),h("p",Tu,[Ou,Mu,E(o,{code:"1 * 2"}),Su,E(o,{code:"foo *= 2.5"})]),h("p",Iu,[Pu,Lu,E(o,{code:"1 / 2"}),Nu,E(o,{code:"foo /= 2"})]),h("p",Fu,[Ru,Hu,E(o,{code:"2 ** 2"}),Du,E(o,{code:"foo **= 2"})]),h("p",ju,[$u,zu,E(o,{code:`func Double(number n) {\r
    return n * 2\r
}`})]),h("p",Bu,[Wu,Uu,E(o,{code:`class Pig : Animal {\r
    constructor (number legs) {\r
        this.legs = legs\r
    }\r
\r
    func makeSound() {\r
        println("Squeeek! Makes the pig with " + this.legs + " legs.")\r
    }\r
}`}),Yu,E(o,{code:`pig = new Pig(4)\r
pig.makeSound()`})]),h("p",Ku,[Vu,qu,E(o,{code:`if (myBoolean) {\r
    doSomething()                   \r
} else if (myOtherBoolean) {\r
    doSomethingDifferent()    \r
} else {\r
    doSomethingThird()  \r
}`})]),h("p",Zu,[Xu,Ju,E(o,{code:`if (myBoolean) {\r
    doSomething()                   \r
}`})]),h("p",null,[Gu,Qu,E(o,{code:'print("Hello world")'})]),h("p",ed,[td,nd,E(o,{code:'println("Hello world")'})]),h("p",rd,[id,ad,E(o,{code:"read()"})]),h("p",od,[sd,ld,E(o,{code:"readln()"})]),h("p",cd,[fd,ud,E(o,{code:"str(12)"})]),h("p",dd,[md,hd,E(o,{code:'pos("Hello world", "H")'})]),h("p",pd,[gd,vd,E(o,{code:'len("Hello world")'})]),h("p",bd,[yd,_d,E(o,{code:'contains("Hello world", "Hello")'})])])])])}var Cd=rn(Xc,[["render",wd]]);const xd=at({methods:{downloadURI(e){window.location.href=e}}}),kd={class:"relative"},Ad=Un('<svg class="corner absolute bottom-0 left-0" viewBox="0 0 297 297" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0C30.9 2.4 61.8 4.7 91.8 14.5C121.8 24.4 150.9 41.6 167.5 66.4C184.1 91.2 188.1 123.5 207.1 146.5C226.1 169.5 260.2 183.2 277.7 206.8C295.2 230.3 296.1 263.6 297 297H0V0Z" fill="#1C2134"></path><path d="M0 37.1C27 39.2 54 41.3 80.3 49.8C106.6 58.4 132.1 73.6 146.6 95.3C161.1 116.9 164.6 145.2 181.2 165.3C197.9 185.5 227.7 197.5 243 218C258.3 238.6 259.1 267.8 259.9 297H0V37.1Z" fill="#3F3050"></path><path d="M0 74.3C23.2 76 46.3 77.8 68.8 85.2C91.3 92.5 113.2 105.5 125.6 124.1C138.1 142.7 141.1 166.9 155.3 184.1C169.6 201.4 195.2 211.7 208.3 229.3C221.4 247 222.1 272 222.8 297H0V74.3Z" fill="#6C3D64"></path><path d="M0 111.4C19.3 112.8 38.6 114.3 57.4 120.5C76.1 126.6 94.3 137.4 104.7 152.9C115.1 168.4 117.5 188.6 129.4 203C141.3 217.3 162.6 225.9 173.6 240.6C184.5 255.3 185.1 276.2 185.6 297H0V111.4Z" fill="#9C486B"></path><path d="M0 148.5C15.4 149.7 30.9 150.9 45.9 155.8C60.9 160.7 75.5 169.3 83.8 181.7C92 194.1 94 210.3 103.6 221.8C113.1 233.3 130.1 240.1 138.9 251.9C147.6 263.6 148 280.3 148.5 297H0V148.5Z" fill="#C85967"></path><path d="M0 185.6C11.6 186.5 23.2 187.4 34.4 191.1C45.7 194.8 56.6 201.2 62.8 210.5C69 219.8 70.5 231.9 77.7 240.6C84.8 249.2 97.6 254.3 104.1 263.2C110.7 272 111 284.5 111.4 297H0V185.6Z" fill="#E97458"></path><path d="M0 222.8C7.7 223.3 15.4 223.9 22.9 226.4C30.4 228.8 37.7 233.2 41.9 239.4C46 245.6 47 253.6 51.8 259.4C56.5 265.1 65.1 268.6 69.4 274.4C73.8 280.3 74 288.7 74.3 297H0V222.8Z" fill="#F99945"></path><path d="M0 259.9C3.9 260.2 7.7 260.5 11.5 261.7C15.2 262.9 18.9 265.1 20.9 268.2C23 271.3 23.5 275.3 25.9 278.2C28.3 281.1 32.5 282.8 34.7 285.7C36.9 288.7 37 292.8 37.1 297H0V259.9Z" fill="#FBAE3C"></path></svg><svg class="corner absolute top-0 right-0" viewBox="0 0 297 298" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M297 297C263.5 298.2 229.9 299.4 205.2 282.5C180.5 265.6 164.6 230.5 147.1 206.3C129.6 182.1 110.6 168.6 88.3 151.6C65.9 134.7 40.3 114.2 25 88.4C9.7 62.5 4.9 31.3 0 0H297V297Z" fill="#1C2134"></path><path d="M297 259.9C267.7 260.9 238.3 262 216.7 247.2C195.1 232.4 181.1 201.7 165.9 180.5C150.6 159.3 133.9 147.5 114.4 132.7C94.8 117.9 72.4 100 59 77.3C45.6 54.7 41.4 27.4 37.1 0H297V259.9Z" fill="#3F3050"></path><path d="M297 222.8C271.9 223.6 246.7 224.5 228.2 211.8C209.6 199.2 197.7 172.9 184.6 154.7C171.5 136.5 157.2 126.5 140.5 113.7C123.7 101 104.4 85.7 93 66.3C81.5 46.9 77.9 23.4 74.3 0H297V222.8Z" fill="#6C3D64"></path><path d="M297 185.6C276 186.4 255.1 187.1 239.6 176.5C224.2 166 214.2 144.1 203.3 128.9C192.4 113.8 180.5 105.4 166.5 94.8C152.6 84.2 136.5 71.4 127 55.2C117.5 39.1 114.4 19.5 111.4 0H297V185.6Z" fill="#9C486B"></path><path d="M297 148.5C280.2 149.1 263.5 149.7 251.1 141.2C238.8 132.8 230.8 115.3 222.1 103.1C213.3 91 203.8 84.3 192.6 75.8C181.5 67.3 168.6 57.1 161 44.2C153.4 31.3 150.9 15.6 148.5 0H297V148.5Z" fill="#C85967"></path><path d="M297 111.4C284.4 111.8 271.9 112.3 262.6 105.9C253.3 99.6 247.3 86.5 240.8 77.4C234.2 68.3 227.1 63.2 218.7 56.9C210.3 50.5 200.7 42.8 195 33.1C189.3 23.4 187.4 11.7 185.6 0H297V111.4Z" fill="#E97458"></path><path d="M297 74.3C288.6 74.5 280.2 74.8 274.1 70.6C267.9 66.4 263.9 57.6 259.5 51.6C255.2 45.5 250.4 42.2 244.8 37.9C239.2 33.7 232.8 28.6 229 22.1C225.2 15.6 224 7.8 222.8 0H297V74.3Z" fill="#F99945"></path><path d="M297 37.1C292.8 37.3 288.6 37.4 285.5 35.3C282.4 33.2 280.4 28.8 278.3 25.8C276.1 22.8 273.7 21.1 270.9 19C268.1 16.8 264.9 14.3 263 11C261.1 7.8 260.5 3.9 259.9 0H297V37.1Z" fill="#FBAE3C"></path></svg>',2),Ed={class:"h-screen bg-gray-900 bg-no-repeat bg-cover bg-center grid place-items-center"},Td={class:"grid z-10 justify-center"},Od=h("h2",{class:"text-white text-center"},"Wanna try it?",-1),Md=h("br",null,null,-1),Sd=h("p",{class:"text-white text-center"},[A("Do you want to get into MintScript?"),h("br"),A("(Older releases and pre-releases available on GitHub)")],-1),Id=h("br",null,null,-1),Pd=h("span",{class:"beautiful-underline transition-all duration-500"},"Get MintScript",-1),Ld=[Pd];function Nd(e,t,n,r,i,a){return ge(),$e("div",kd,[Ad,h("div",Ed,[h("div",Td,[Od,Md,Sd,Id,h("button",{onClick:t[0]||(t[0]=o=>e.downloadURI("https://github.com/BlackBirdTV/mintscript/releases/latest/download/MintScript_win_x86.exe")),class:"text-white group m-auto bg-blue-700 text-3xl p-4 rounded-3xl"},Ld)])])])}var Fd=rn(xd,[["render",Nd]]);const Rd=at({data(){return{page_index:0,shownavdropdown:!1,screenwidth:window.innerWidth}},methods:{setPageIndex(e){window.scrollTo(0,0),this.page_index=e},onResize(){this.screenwidth=window.innerWidth,this.shownavdropdown=this.shownavdropdown&&this.screenwidth<=500}},mounted(){this.setPageIndex(0),this.$nextTick(()=>{window.addEventListener("resize",this.onResize)})},components:{HomePage:Yc,Documentation:Cd,Download:Fd}}),Hd={class:"bg-gray-900"},Dd={class:"top-bar fixed top-0 left-0 right-0 bg-[rgba(41,41,41,0.8)] z-20 p-1 text-white overflow-hidden"},jd=h("h1",{class:"font-['Nunito'] float-left text-white"},"MintScript",-1),$d={class:"float-right mr-5 text-lg decoration-0"},zd=h("br",null,null,-1),Bd=h("br",null,null,-1),Wd=h("div",{class:"w-[100%] relative h-36 bg-blue-600 flex justify-center items-center text-white z-50"}," 2022 Chronical Technologies ",-1);function Ud(e,t,n,r,i,a){const o=Ut("icon"),s=Ut("HomePage"),l=Ut("Documentation"),f=Ut("Download");return ge(),$e(ke,null,[h("div",Hd,[h("div",Dd,[jd,h("div",$d,[e.screenwidth<=500?(ge(),$e("button",{key:0,onClick:t[0]||(t[0]=d=>e.shownavdropdown=!e.shownavdropdown)},[E(o,{icon:"bars"})])):$t("",!0),e.screenwidth>500?(ge(),$e("a",{key:1,onClick:t[1]||(t[1]=d=>e.setPageIndex(0)),class:"after:translate-y-[-20px] ml-3 float-left"},"Home")):$t("",!0),e.screenwidth>500?(ge(),$e("a",{key:2,onClick:t[2]||(t[2]=d=>e.setPageIndex(1)),class:"after:translate-y-[-20px] ml-3 float-left"},"Documentation")):$t("",!0),e.screenwidth>500?(ge(),$e("a",{key:3,onClick:t[3]||(t[3]=d=>e.setPageIndex(2)),class:"after:translate-y-[-20px] ml-3 float-left"},"Download")):$t("",!0)])]),h("div",{style:Nn({height:e.shownavdropdown?"max-content":"0px"}),class:"overflow-hidden text-white text-lg nav-dropdown transition-all duration-500 z-50 h-32 bg-gray-700 fixed left-0 right-0"},[h("a",{onClick:t[4]||(t[4]=d=>{e.setPageIndex(0),e.shownavdropdown=!1}),class:"hover:text-blue-400 transition-all duration-500 ml-3"},"Home"),zd,h("a",{onClick:t[5]||(t[5]=d=>{e.setPageIndex(1),e.shownavdropdown=!1}),class:"hover:text-blue-400 transition-all duration-500 ml-3"},"Documentation"),Bd,h("a",{onClick:t[6]||(t[6]=d=>{e.setPageIndex(2),e.shownavdropdown=!1}),class:"hover:text-blue-400 transition-all duration-500 ml-3"},"Download")],4),E(li,{duration:300,mode:"out-in",name:"slide-fade"},{default:so(()=>[e.page_index==0?(ge(),gn(s,{key:0,class:"transition-all z-10 w-screen"})):e.page_index==1?(ge(),gn(l,{key:1,class:"transition-all z-10 w-screen"})):e.page_index==2?(ge(),gn(f,{key:2,class:"transition-all z-10 w-screen"})):$t("",!0)]),_:1})]),Wd],64)}var Yd=rn(Rd,[["render",Ud]]);/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function oa(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?oa(Object(n),!0).forEach(function(r){qd(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oa(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Mn(e){return Mn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Mn(e)}function Kd(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function sa(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Vd(e,t,n){return t&&sa(e.prototype,t),n&&sa(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function qd(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ci(e,t){return Xd(e)||Gd(e,t)||No(e,t)||e0()}function Yn(e){return Zd(e)||Jd(e)||No(e)||Qd()}function Zd(e){if(Array.isArray(e))return Tr(e)}function Xd(e){if(Array.isArray(e))return e}function Jd(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Gd(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function No(e,t){if(!!e){if(typeof e=="string")return Tr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Tr(e,t)}}function Tr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Qd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var la=function(){},fi={},Fo={},Ro=null,Ho={mark:la,measure:la};try{typeof window!="undefined"&&(fi=window),typeof document!="undefined"&&(Fo=document),typeof MutationObserver!="undefined"&&(Ro=MutationObserver),typeof performance!="undefined"&&(Ho=performance)}catch{}var t0=fi.navigator||{},ca=t0.userAgent,fa=ca===void 0?"":ca,rt=fi,ee=Fo,ua=Ro,dn=Ho;rt.document;var Ke=!!ee.documentElement&&!!ee.head&&typeof ee.addEventListener=="function"&&typeof ee.createElement=="function",Do=~fa.indexOf("MSIE")||~fa.indexOf("Trident/"),Be="___FONT_AWESOME___",Or=16,jo="fa",$o="svg-inline--fa",gt="data-fa-i2svg",Mr="data-fa-pseudo-element",n0="data-fa-pseudo-element-pending",ui="data-prefix",di="data-icon",da="fontawesome-i2svg",r0="async",i0=["HTML","HEAD","STYLE","SCRIPT"],zo=function(){try{return!0}catch{return!1}}(),mi={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},Sn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Bo={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},a0={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},o0=/fa[srltdbk\-\ ]/,Wo="fa-layers-text",s0=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,l0={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},Uo=[1,2,3,4,5,6,7,8,9,10],c0=Uo.concat([11,12,13,14,15,16,17,18,19,20]),f0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],dt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},u0=[].concat(Yn(Object.keys(Sn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",dt.GROUP,dt.SWAP_OPACITY,dt.PRIMARY,dt.SECONDARY]).concat(Uo.map(function(e){return"".concat(e,"x")})).concat(c0.map(function(e){return"w-".concat(e)})),Yo=rt.FontAwesomeConfig||{};function d0(e){var t=ee.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function m0(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ee&&typeof ee.querySelector=="function"){var h0=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];h0.forEach(function(e){var t=ci(e,2),n=t[0],r=t[1],i=m0(d0(n));i!=null&&(Yo[r]=i)})}var p0={familyPrefix:jo,styleDefault:"solid",replacementClass:$o,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Xt=M(M({},p0),Yo);Xt.autoReplaceSvg||(Xt.observeMutations=!1);var F={};Object.keys(Xt).forEach(function(e){Object.defineProperty(F,e,{enumerable:!0,set:function(n){Xt[e]=n,bn.forEach(function(r){return r(F)})},get:function(){return Xt[e]}})});rt.FontAwesomeConfig=F;var bn=[];function g0(e){return bn.push(e),function(){bn.splice(bn.indexOf(e),1)}}var Je=Or,Le={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function v0(e){if(!(!e||!Ke)){var t=ee.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ee.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return ee.head.insertBefore(t,r),e}}var b0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function nn(){for(var e=12,t="";e-- >0;)t+=b0[Math.random()*62|0];return t}function Ht(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function hi(e){return e.classList?Ht(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ko(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function y0(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ko(e[n]),'" ')},"").trim()}function Kn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function pi(e){return e.size!==Le.size||e.x!==Le.x||e.y!==Le.y||e.rotate!==Le.rotate||e.flipX||e.flipY}function _0(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:f}}function w0(e){var t=e.transform,n=e.width,r=n===void 0?Or:n,i=e.height,a=i===void 0?Or:i,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Do?l+="translate(".concat(t.x/Je-r/2,"em, ").concat(t.y/Je-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Je,"em), calc(-50% + ").concat(t.y/Je,"em)) "):l+="translate(".concat(t.x/Je,"em, ").concat(t.y/Je,"em) "),l+="scale(".concat(t.size/Je*(t.flipX?-1:1),", ").concat(t.size/Je*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var C0=`:root, :host {
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
}`;function Vo(){var e=jo,t=$o,n=F.familyPrefix,r=F.replacementClass,i=C0;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var ma=!1;function or(){F.autoAddCss&&!ma&&(v0(Vo()),ma=!0)}var x0={mixout:function(){return{dom:{css:Vo,insertCss:or}}},hooks:function(){return{beforeDOMElementCreation:function(){or()},beforeI2svg:function(){or()}}}},We=rt||{};We[Be]||(We[Be]={});We[Be].styles||(We[Be].styles={});We[Be].hooks||(We[Be].hooks={});We[Be].shims||(We[Be].shims=[]);var Ee=We[Be],qo=[],k0=function e(){ee.removeEventListener("DOMContentLoaded",e),In=1,qo.map(function(t){return t()})},In=!1;Ke&&(In=(ee.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ee.readyState),In||ee.addEventListener("DOMContentLoaded",k0));function A0(e){!Ke||(In?setTimeout(e,0):qo.push(e))}function an(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?Ko(e):"<".concat(t," ").concat(y0(r),">").concat(a.map(an).join(""),"</").concat(t,">")}function ha(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var E0=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},sr=function(t,n,r,i){var a=Object.keys(t),o=a.length,s=i!==void 0?E0(n,i):n,l,f,d;for(r===void 0?(l=1,d=t[a[0]]):(l=0,d=r);l<o;l++)f=a[l],d=s(d,t[f],f,t);return d};function T0(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Sr(e){var t=T0(e);return t.length===1?t[0].toString(16):null}function O0(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function pa(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ir(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=pa(t);typeof Ee.hooks.addPack=="function"&&!i?Ee.hooks.addPack(e,pa(t)):Ee.styles[e]=M(M({},Ee.styles[e]||{}),a),e==="fas"&&Ir("fa",t)}var Jt=Ee.styles,M0=Ee.shims,S0=Object.values(Bo),gi=null,Zo={},Xo={},Jo={},Go={},Qo={},I0=Object.keys(mi);function P0(e){return~u0.indexOf(e)}function L0(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!P0(i)?i:null}var es=function(){var t=function(a){return sr(Jt,function(o,s,l){return o[l]=sr(s,a,{}),o},{})};Zo=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),Xo=t(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),Qo=t(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in Jt||F.autoFetchSvg,r=sr(M0,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});Jo=r.names,Go=r.unicodes,gi=Vn(F.styleDefault)};g0(function(e){gi=Vn(e.styleDefault)});es();function vi(e,t){return(Zo[e]||{})[t]}function N0(e,t){return(Xo[e]||{})[t]}function Et(e,t){return(Qo[e]||{})[t]}function ts(e){return Jo[e]||{prefix:null,iconName:null}}function F0(e){var t=Go[e],n=vi("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function it(){return gi}var bi=function(){return{prefix:null,iconName:null,rest:[]}};function Vn(e){var t=mi[e],n=Sn[e]||Sn[t],r=e in Ee.styles?e:null;return n||r||null}function qn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,i=null,a=e.reduce(function(o,s){var l=L0(F.familyPrefix,s);if(Jt[s]?(s=S0.includes(s)?a0[s]:s,i=s,o.prefix=s):I0.indexOf(s)>-1?(i=s,o.prefix=Vn(s)):l?o.iconName=l:s!==F.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var f=i==="fa"?ts(o.iconName):{},d=Et(o.prefix,o.iconName);f.prefix&&(i=null),o.iconName=f.iconName||d||o.iconName,o.prefix=f.prefix||o.prefix,o.prefix==="far"&&!Jt.far&&Jt.fas&&!F.autoFetchSvg&&(o.prefix="fas")}return o},bi());return(a.prefix==="fa"||i==="fa")&&(a.prefix=it()||"fas"),a}var R0=function(){function e(){Kd(this,e),this.definitions={}}return Vd(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=M(M({},n.definitions[s]||{}),o[s]),Ir(s,o[s]);var l=Bo[s];l&&Ir(l,o[s]),es()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,f=o.icon,d=f[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=f)}),n[s][l]=f}),n}}]),e}(),ga=[],Tt={},It={},H0=Object.keys(It);function D0(e,t){var n=t.mixoutsTo;return ga=e,Tt={},Object.keys(It).forEach(function(r){H0.indexOf(r)===-1&&delete It[r]}),ga.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Mn(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){Tt[o]||(Tt[o]=[]),Tt[o].push(a[o])})}r.provides&&r.provides(It)}),n}function Pr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=Tt[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function vt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Tt[e]||[];i.forEach(function(a){a.apply(null,n)})}function Ue(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return It[e]?It[e].apply(null,t):void 0}function Lr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||it();if(!!t)return t=Et(n,t)||t,ha(ns.definitions,n,t)||ha(Ee.styles,n,t)}var ns=new R0,j0=function(){F.autoReplaceSvg=!1,F.observeMutations=!1,vt("noAuto")},$0={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ke?(vt("beforeI2svg",t),Ue("pseudoElements2svg",t),Ue("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;F.autoReplaceSvg===!1&&(F.autoReplaceSvg=!0),F.observeMutations=!0,A0(function(){B0({autoReplaceSvgRoot:n}),vt("watch",t)})}},z0={icon:function(t){if(t===null)return null;if(Mn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Et(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Vn(t[0]);return{prefix:r,iconName:Et(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(F.familyPrefix,"-"))>-1||t.match(o0))){var i=qn(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||it(),iconName:Et(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=it();return{prefix:a,iconName:Et(a,t)||t}}}},ye={noAuto:j0,config:F,dom:$0,parse:z0,library:ns,findIconDefinition:Lr,toHtml:an},B0=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ee:n;(Object.keys(Ee.styles).length>0||F.autoFetchSvg)&&Ke&&F.autoReplaceSvg&&ye.dom.i2svg({node:r})};function Zn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return an(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Ke){var r=ee.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function W0(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(pi(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};i.style=Kn(M(M({},a),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function U0(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(F.familyPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:M(M({},i),{},{id:o}),children:r}]}]}function yi(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,d=e.titleId,m=e.extra,g=e.watchable,k=g===void 0?!1:g,I=r.found?r:n,D=I.width,P=I.height,_=i==="fak",O=[F.replacementClass,a?"".concat(F.familyPrefix,"-").concat(a):""].filter(function(V){return m.classes.indexOf(V)===-1}).filter(function(V){return V!==""||!!V}).concat(m.classes).join(" "),H={children:[],attributes:M(M({},m.attributes),{},{"data-prefix":i,"data-icon":a,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(D," ").concat(P)})},z=_&&!~m.classes.indexOf("fa-fw")?{width:"".concat(D/P*16*.0625,"em")}:{};k&&(H.attributes[gt]=""),l&&(H.children.push({tag:"title",attributes:{id:H.attributes["aria-labelledby"]||"title-".concat(d||nn())},children:[l]}),delete H.attributes.title);var U=M(M({},H),{},{prefix:i,iconName:a,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:M(M({},z),m.styles)}),re=r.found&&n.found?Ue("generateAbstractMask",U)||{children:[],attributes:{}}:Ue("generateAbstractIcon",U)||{children:[],attributes:{}},B=re.children,J=re.attributes;return U.children=B,U.attributes=J,s?U0(U):W0(U)}function va(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=M(M(M({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(f[gt]="");var d=M({},o.styles);pi(i)&&(d.transform=w0({transform:i,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Kn(d);m.length>0&&(f.style=m);var g=[];return g.push({tag:"span",attributes:f,children:[t]}),a&&g.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),g}function Y0(e){var t=e.content,n=e.title,r=e.extra,i=M(M(M({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=Kn(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var lr=Ee.styles;function Nr(e){var t=e[0],n=e[1],r=e.slice(4),i=ci(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(F.familyPrefix,"-").concat(dt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(F.familyPrefix,"-").concat(dt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(F.familyPrefix,"-").concat(dt.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var K0={found:!1,width:512,height:512};function V0(e,t){!zo&&!F.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Fr(e,t){var n=t;return t==="fa"&&F.styleDefault!==null&&(t=it()),new Promise(function(r,i){if(Ue("missingIconAbstract"),n==="fa"){var a=ts(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&lr[t]&&lr[t][e]){var o=lr[t][e];return r(Nr(o))}V0(e,t),r(M(M({},K0),{},{icon:F.showMissingIcons&&e?Ue("missingIconAbstract")||{}:{}}))})}var ba=function(){},Rr=F.measurePerformance&&dn&&dn.mark&&dn.measure?dn:{mark:ba,measure:ba},Yt='FA "6.1.1"',q0=function(t){return Rr.mark("".concat(Yt," ").concat(t," begins")),function(){return rs(t)}},rs=function(t){Rr.mark("".concat(Yt," ").concat(t," ends")),Rr.measure("".concat(Yt," ").concat(t),"".concat(Yt," ").concat(t," begins"),"".concat(Yt," ").concat(t," ends"))},_i={begin:q0,end:rs},yn=function(){};function ya(e){var t=e.getAttribute?e.getAttribute(gt):null;return typeof t=="string"}function Z0(e){var t=e.getAttribute?e.getAttribute(ui):null,n=e.getAttribute?e.getAttribute(di):null;return t&&n}function X0(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(F.replacementClass)}function J0(){if(F.autoReplaceSvg===!0)return _n.replace;var e=_n[F.autoReplaceSvg];return e||_n.replace}function G0(e){return ee.createElementNS("http://www.w3.org/2000/svg",e)}function Q0(e){return ee.createElement(e)}function is(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?G0:Q0:n;if(typeof e=="string")return ee.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(is(o,{ceFn:r}))}),i}function e1(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var _n={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(is(i),n)}),n.getAttribute(gt)===null&&F.keepOriginalSource){var r=ee.createComment(e1(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~hi(n).indexOf(F.replacementClass))return _n.replace(t);var i=new RegExp("".concat(F.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===F.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return an(s)}).join(`
`);n.setAttribute(gt,""),n.innerHTML=o}};function _a(e){e()}function as(e,t){var n=typeof t=="function"?t:yn;if(e.length===0)n();else{var r=_a;F.mutateApproach===r0&&(r=rt.requestAnimationFrame||_a),r(function(){var i=J0(),a=_i.begin("mutate");e.map(i),a(),n()})}}var wi=!1;function os(){wi=!0}function Hr(){wi=!1}var Pn=null;function wa(e){if(!!ua&&!!F.observeMutations){var t=e.treeCallback,n=t===void 0?yn:t,r=e.nodeCallback,i=r===void 0?yn:r,a=e.pseudoElementsCallback,o=a===void 0?yn:a,s=e.observeMutationsRoot,l=s===void 0?ee:s;Pn=new ua(function(f){if(!wi){var d=it();Ht(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!ya(m.addedNodes[0])&&(F.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&F.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&ya(m.target)&&~f0.indexOf(m.attributeName))if(m.attributeName==="class"&&Z0(m.target)){var g=qn(hi(m.target)),k=g.prefix,I=g.iconName;m.target.setAttribute(ui,k||d),I&&m.target.setAttribute(di,I)}else X0(m.target)&&i(m.target)})}}),Ke&&Pn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function t1(){!Pn||Pn.disconnect()}function n1(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function r1(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=qn(hi(e));return i.prefix||(i.prefix=it()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||i.prefix&&r.length>0&&(i.iconName=N0(i.prefix,e.innerText)||vi(i.prefix,Sr(e.innerText))),i}function i1(e){var t=Ht(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return F.autoA11y&&(n?t["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(r||nn()):(t["aria-hidden"]="true",t.focusable="false")),t}function a1(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Le,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ca(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=r1(e),r=n.iconName,i=n.prefix,a=n.rest,o=i1(e),s=Pr("parseNodeAttributes",{},e),l=t.styleParser?n1(e):[];return M({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Le,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var o1=Ee.styles;function ss(e){var t=F.autoReplaceSvg==="nest"?Ca(e,{styleParser:!1}):Ca(e);return~t.extra.classes.indexOf(Wo)?Ue("generateLayersText",e,t):Ue("generateSvgReplacementMutation",e,t)}function xa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ke)return Promise.resolve();var n=ee.documentElement.classList,r=function(m){return n.add("".concat(da,"-").concat(m))},i=function(m){return n.remove("".concat(da,"-").concat(m))},a=F.autoFetchSvg?Object.keys(mi):Object.keys(o1),o=[".".concat(Wo,":not([").concat(gt,"])")].concat(a.map(function(d){return".".concat(d,":not([").concat(gt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ht(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=_i.begin("onTree"),f=s.reduce(function(d,m){try{var g=ss(m);g&&d.push(g)}catch(k){zo||k.name==="MissingIcon"&&console.error(k)}return d},[]);return new Promise(function(d,m){Promise.all(f).then(function(g){as(g,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(g){l(),m(g)})})}function s1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ss(e).then(function(n){n&&as([n],t)})}function l1(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Lr(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Lr(i||{})),e(r,M(M({},n),{},{mask:i}))}}var c1=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Le:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,f=n.maskId,d=f===void 0?null:f,m=n.title,g=m===void 0?null:m,k=n.titleId,I=k===void 0?null:k,D=n.classes,P=D===void 0?[]:D,_=n.attributes,O=_===void 0?{}:_,H=n.styles,z=H===void 0?{}:H;if(!!t){var U=t.prefix,re=t.iconName,B=t.icon;return Zn(M({type:"icon"},t),function(){return vt("beforeDOMElementCreation",{iconDefinition:t,params:n}),F.autoA11y&&(g?O["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(I||nn()):(O["aria-hidden"]="true",O.focusable="false")),yi({icons:{main:Nr(B),mask:l?Nr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:U,iconName:re,transform:M(M({},Le),i),symbol:o,title:g,maskId:d,titleId:I,extra:{attributes:O,styles:z,classes:P}})})}},f1={mixout:function(){return{icon:l1(c1)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=xa,n.nodeCallback=s1,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?ee:r,a=n.callback,o=a===void 0?function(){}:a;return xa(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,d=r.mask,m=r.maskId,g=r.extra;return new Promise(function(k,I){Promise.all([Fr(i,s),d.iconName?Fr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(D){var P=ci(D,2),_=P[0],O=P[1];k([n,yi({icons:{main:_,mask:O},prefix:s,iconName:i,transform:l,symbol:f,maskId:m,title:a,titleId:o,extra:g,watchable:!0})])}).catch(I)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=Kn(s);l.length>0&&(i.style=l);var f;return pi(o)&&(f=Ue("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(f||a.icon),{children:r,attributes:i}}}},u1={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return Zn({type:"layer"},function(){vt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(F.familyPrefix,"-layers")].concat(Yn(a)).join(" ")},children:o}]})}}}},d1={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return Zn({type:"counter",content:n},function(){return vt("beforeDOMElementCreation",{content:n,params:r}),Y0({content:n.toString(),title:a,extra:{attributes:f,styles:m,classes:["".concat(F.familyPrefix,"-layers-counter")].concat(Yn(s))}})})}}}},m1={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Le:i,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,g=r.styles,k=g===void 0?{}:g;return Zn({type:"text",content:n},function(){return vt("beforeDOMElementCreation",{content:n,params:r}),va({content:n,transform:M(M({},Le),a),title:s,extra:{attributes:m,styles:k,classes:["".concat(F.familyPrefix,"-layers-text")].concat(Yn(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(Do){var f=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/f,l=d.height/f}return F.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,va({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},h1=new RegExp('"',"ug"),ka=[1105920,1112319];function p1(e){var t=e.replace(h1,""),n=O0(t,0),r=n>=ka[0]&&n<=ka[1],i=t.length===2?t[0]===t[1]:!1;return{value:Sr(i?t[0]:t),isSecondary:r||i}}function Aa(e,t){var n="".concat(n0).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Ht(e.children),o=a.filter(function(re){return re.getAttribute(Mr)===t})[0],s=rt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(s0),f=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Sn[l[2].toLowerCase()]:l0[f],k=p1(m),I=k.value,D=k.isSecondary,P=l[0].startsWith("FontAwesome"),_=vi(g,I),O=_;if(P){var H=F0(I);H.iconName&&H.prefix&&(_=H.iconName,g=H.prefix)}if(_&&!D&&(!o||o.getAttribute(ui)!==g||o.getAttribute(di)!==O)){e.setAttribute(n,O),o&&e.removeChild(o);var z=a1(),U=z.extra;U.attributes[Mr]=t,Fr(_,g).then(function(re){var B=yi(M(M({},z),{},{icons:{main:re,mask:bi()},prefix:g,iconName:O,extra:U,watchable:!0})),J=ee.createElement("svg");t==="::before"?e.insertBefore(J,e.firstChild):e.appendChild(J),J.outerHTML=B.map(function(V){return an(V)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function g1(e){return Promise.all([Aa(e,"::before"),Aa(e,"::after")])}function v1(e){return e.parentNode!==document.head&&!~i0.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Mr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ea(e){if(!!Ke)return new Promise(function(t,n){var r=Ht(e.querySelectorAll("*")).filter(v1).map(g1),i=_i.begin("searchPseudoElements");os(),Promise.all(r).then(function(){i(),Hr(),t()}).catch(function(){i(),Hr(),n()})})}var b1={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ea,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ee:r;F.searchPseudoElements&&Ea(i)}}},Ta=!1,y1={mixout:function(){return{dom:{unwatch:function(){os(),Ta=!0}}}},hooks:function(){return{bootstrap:function(){wa(Pr("mutationObserverCallbacks",{}))},noAuto:function(){t1()},watch:function(n){var r=n.observeMutationsRoot;Ta?Hr():wa(Pr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Oa=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},_1={mixout:function(){return{parse:{transform:function(n){return Oa(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Oa(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),f="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),d="rotate(".concat(i.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(d)},g={transform:"translate(".concat(o/2*-1," -256)")},k={outer:s,inner:m,path:g};return{tag:"g",attributes:M({},k.outer),children:[{tag:"g",attributes:M({},k.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:M(M({},r.icon.attributes),k.path)}]}]}}}},cr={x:0,y:0,width:"100%",height:"100%"};function Ma(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function w1(e){return e.tag==="g"?e.children:[e]}var C1={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?qn(i.split(" ").map(function(o){return o.trim()})):bi();return a.prefix||(a.prefix=it()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,f=a.width,d=a.icon,m=o.width,g=o.icon,k=_0({transform:l,containerWidth:m,iconWidth:f}),I={tag:"rect",attributes:M(M({},cr),{},{fill:"white"})},D=d.children?{children:d.children.map(Ma)}:{},P={tag:"g",attributes:M({},k.inner),children:[Ma(M({tag:d.tag,attributes:M(M({},d.attributes),k.path)},D))]},_={tag:"g",attributes:M({},k.outer),children:[P]},O="mask-".concat(s||nn()),H="clip-".concat(s||nn()),z={tag:"mask",attributes:M(M({},cr),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[I,_]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:H},children:w1(g)},z]};return r.push(U,{tag:"rect",attributes:M({fill:"currentColor","clip-path":"url(#".concat(H,")"),mask:"url(#".concat(O,")")},cr)}),{children:r,attributes:i}}}},x1={provides:function(t){var n=!1;rt.matchMedia&&(n=rt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:M(M({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=M(M({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:M(M({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:M(M({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:M(M({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:M(M({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:M(M({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:M(M({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:M(M({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},k1={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},A1=[x0,f1,u1,d1,m1,b1,y1,_1,C1,x1,k1];D0(A1,{mixoutsTo:ye});ye.noAuto;var ls=ye.config,E1=ye.library;ye.dom;var cs=ye.parse;ye.findIconDefinition;ye.toHtml;var T1=ye.icon;ye.layer;var O1=ye.text;ye.counter;/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var M1={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"]},S1=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function I1(e,t){return t={exports:{}},e(t,t.exports),t.exports}var P1=I1(function(e){(function(t){var n=function(_,O,H){if(!f(O)||m(O)||g(O)||k(O)||l(O))return O;var z,U=0,re=0;if(d(O))for(z=[],re=O.length;U<re;U++)z.push(n(_,O[U],H));else{z={};for(var B in O)Object.prototype.hasOwnProperty.call(O,B)&&(z[_(B,H)]=n(_,O[B],H))}return z},r=function(_,O){O=O||{};var H=O.separator||"_",z=O.split||/(?=[A-Z])/;return _.split(z).join(H)},i=function(_){return I(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(O,H){return H?H.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},a=function(_){var O=i(_);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(_,O){return r(_,O).toLowerCase()},s=Object.prototype.toString,l=function(_){return typeof _=="function"},f=function(_){return _===Object(_)},d=function(_){return s.call(_)=="[object Array]"},m=function(_){return s.call(_)=="[object Date]"},g=function(_){return s.call(_)=="[object RegExp]"},k=function(_){return s.call(_)=="[object Boolean]"},I=function(_){return _=_-0,_===_},D=function(_,O){var H=O&&"process"in O?O.process:O;return typeof H!="function"?_:function(z,U){return H(z,_,U)}},P={camelize:i,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(_,O){return n(D(i,O),_)},decamelizeKeys:function(_,O){return n(D(o,O),_,O)},pascalizeKeys:function(_,O){return n(D(a,O),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=P:t.humps=P})(S1)}),L1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Kt=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},Ln=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},N1=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(e,r)||(n[r]=e[r]);return n},Dr=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}else return Array.from(e)};function F1(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=P1.camelize(n.slice(0,r)),a=n.slice(r+1).trim();return t[i]=a,t},{})}function R1(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Ci(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Ci(l)}),i=Object.keys(e.attributes||{}).reduce(function(l,f){var d=e.attributes[f];switch(f){case"class":l.class=R1(d);break;case"style":l.style=F1(d);break;default:l.attrs[f]=d}return l},{attrs:{},class:{},style:{}});n.class;var a=n.style,o=a===void 0?{}:a,s=N1(n,["class","style"]);return si(e.tag,Ln({},t,{class:i.class,style:Ln({},i.style,o)},i.attrs,s),r)}var fs=!1;try{fs=!0}catch{}function H1(){if(!fs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Gt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Kt({},e,t):{}}function D1(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Kt(t,"fa-"+e.size,e.size!==null),Kt(t,"fa-rotate-"+e.rotation,e.rotation!==null),Kt(t,"fa-pull-"+e.pull,e.pull!==null),Kt(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Sa(e){if(e===null)return null;if((typeof e=="undefined"?"undefined":L1(e))==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var j1=at({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(t){return["horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=we(function(){return Sa(t.icon)}),a=we(function(){return Gt("classes",D1(t))}),o=we(function(){return Gt("transform",typeof t.transform=="string"?cs.transform(t.transform):t.transform)}),s=we(function(){return Gt("mask",Sa(t.mask))}),l=we(function(){return T1(i.value,Ln({},a.value,o.value,s.value,{symbol:t.symbol,title:t.title}))});hn(l,function(d){if(!d)return H1("Could not find one or more icon(s)",i.value,s.value)},{immediate:!0});var f=we(function(){return l.value?Ci(l.value.abstract[0],{},r):null});return function(){return f.value}}});at({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,i=ls.familyPrefix,a=we(function(){return[i+"-layers"].concat(Dr(t.fixedWidth?[i+"-fw"]:[]))});return function(){return si("div",{class:a.value},r.default?r.default():[])}}});at({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,i=ls.familyPrefix,a=we(function(){return Gt("classes",[].concat(Dr(t.counter?[i+"-layers-counter"]:[]),Dr(t.position?[i+"-layers-"+t.position]:[])))}),o=we(function(){return Gt("transform",typeof t.transform=="string"?cs.transform(t.transform):t.transform)}),s=we(function(){var f=O1(t.value.toString(),Ln({},o.value,a.value)),d=f.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=we(function(){return Ci(s.value,{},r)});return function(){return l.value}}});E1.add(M1);jc(Yd).component("icon",j1).mount("#app");
