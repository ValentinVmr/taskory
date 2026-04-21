import{$ as Yt,$a as ao,$b as Oe,A as ha,Aa as qn,Ab as Qt,B as Vi,Ba as Yn,Bb as _t,C as Bi,Ca as Kn,Cb as nt,D as to,Da as oo,Db as M,E as ae,Ea as Zn,Eb as ld,F as ma,Fa as Xn,Fb as z,G as Gn,Ga as Kc,Gb as Ee,H as Wt,Ha as Zc,Hb as Q,I as fa,Ia as Xc,Ib as lo,J as pa,Ja as Qc,Jb as Ze,K as Bc,Ka as Jc,Kb as ee,L as ga,La as ed,Lb as te,M as no,Ma as td,Mb as cd,N as Le,Na as $e,Nb as dd,O as he,Oa as nd,Ob as Ca,P as X,Pa as p,Pb as bn,Q as jc,Qa as Qn,Qb as L,R as Re,Ra as id,Rb as xt,S as F,Sa as so,Sb as v,T as pn,Ta as va,Tb as xe,U as qt,Ua as je,Ub as le,V as _,Va as gt,Vb as ud,W as k,Wa as Ce,Wb as pe,X as zc,Xa as ce,Xb as Ea,Y as b,Ya as H,Yb as xa,Z as O,Za as rd,Zb as hd,_ as c,_a as ze,_b as md,a as f,aa as Uc,ab as od,ac as Xe,b as $,ba as Be,bb as ba,bc as yn,ca as Ye,cb as S,cc as fd,d as ge,da as ke,db as A,dc as zi,e as Nc,ea as Ae,eb as E,ec as pd,f as Ne,fa as io,fb as ya,fc as gd,g as y,ga as B,gb as sd,gc as Se,h as Ve,ha as I,hb as _e,hc as Sa,i as da,ia as Wn,ib as re,ic as _d,j as ua,ja as Hc,jb as wa,jc as j,k as We,ka as x,kb as Kt,kc as Tt,l as qe,la as R,lb as ji,lc as vd,m as N,ma as gn,mb as Da,mc as co,n as Zr,na as ro,nb as ad,o as Xr,oa as $c,ob as tt,p as Lc,pa as Z,pb as oe,q as V,qa as Gc,qb as me,r as Qr,ra as Wc,rb as fe,s as $t,sa as _n,sb as w,t as Jr,ta as De,tb as h,u as Ct,ua as Ke,ub as m,v as eo,va as P,vb as G,w as Vc,wa as _a,wb as Rt,x as et,xa as qc,xb as Zt,y as Gt,ya as vn,yb as Et,z as ie,za as Yc,zb as Xt}from"./chunk-2XFAKNNS.js";var bd=null;function it(){return bd}function Ma(i){bd??=i}var Ui=class{},uo=(()=>{class i{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:()=>c(yd),providedIn:"platform"})}return i})();var yd=(()=>{class i extends uo{_location;_history;_doc=c(I);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return it().getBaseHref(this._doc)}onPopState(e){let t=it().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=it().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,r){this._history.pushState(e,t,r)}replaceState(e,t,r){this._history.replaceState(e,t,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:()=>new i,providedIn:"platform"})}return i})();function Cd(i,n){return i?n?i.endsWith("/")?n.startsWith("/")?i+n.slice(1):i+n:n.startsWith("/")?i+n:`${i}/${n}`:i:n}function wd(i){let n=i.search(/#|\?|$/);return i[n-1]==="/"?i.slice(0,n-1)+i.slice(n):i}function Jt(i){return i&&i[0]!=="?"?`?${i}`:i}var ho=(()=>{class i{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:()=>c(Hf),providedIn:"root"})}return i})(),Uf=new b(""),Hf=(()=>{class i extends ho{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??c(I).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Cd(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+Jt(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${t}${r}`:t}pushState(e,t,r,o){let s=this.prepareExternalUrl(r+Jt(o));this._platformLocation.pushState(e,t,s)}replaceState(e,t,r,o){let s=this.prepareExternalUrl(r+Jt(o));this._platformLocation.replaceState(e,t,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||i)(O(uo),O(Uf,8))};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var en=(()=>{class i{_subject=new y;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=Wf(wd(Dd(t))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+Jt(t))}normalize(e){return i.stripTrailingSlash(Gf(this._basePath,Dd(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",r=null){this._locationStrategy.pushState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Jt(t)),r)}replaceState(e,t="",r=null){this._locationStrategy.replaceState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Jt(t)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(r=>r(e,t))}subscribe(e,t,r){return this._subject.subscribe({next:e,error:t??void 0,complete:r??void 0})}static normalizeQueryParams=Jt;static joinWithSlash=Cd;static stripTrailingSlash=wd;static \u0275fac=function(t){return new(t||i)(O(ho))};static \u0275prov=_({token:i,factory:()=>$f(),providedIn:"root"})}return i})();function $f(){return new en(O(ho))}function Gf(i,n){if(!i||!n.startsWith(i))return n;let e=n.substring(i.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function Dd(i){return i.replace(/\/index.html$/,"")}function Wf(i){if(new RegExp("^(https?:)?//").test(i)){let[,e]=i.split(/\/\/[^\/]+/);return e}return i}var Ia=/\s+/,Ed=[],Ta=(()=>{class i{_ngEl;_renderer;initialClasses=Ed;rawClass;stateMap=new Map;constructor(e,t){this._ngEl=e,this._renderer=t}set klass(e){this.initialClasses=e!=null?e.trim().split(Ia):Ed}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(Ia):e}ngDoCheck(){for(let t of this.initialClasses)this._updateState(t,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let t of e)this._updateState(t,!0);else if(e!=null)for(let t of Object.keys(e))this._updateState(t,!!e[t]);this._applyStateDiff()}_updateState(e,t){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==t&&(r.changed=!0,r.enabled=t),r.touched=!0):this.stateMap.set(e,{enabled:t,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let t=e[0],r=e[1];r.changed?(this._toggleClass(t,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(t,!1),this.stateMap.delete(t)),r.touched=!1}}_toggleClass(e,t){e=e.trim(),e.length>0&&e.split(Ia).forEach(r=>{t?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static \u0275fac=function(t){return new(t||i)(H(P),H(ce))};static \u0275dir=E({type:i,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return i})();var mo=class{$implicit;ngForOf;index;count;constructor(n,e,t,r){this.$implicit=n,this.ngForOf=e,this.index=t,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Jn=(()=>{class i{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,t,r){this._viewContainer=e,this._template=t,this._differs=r}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let t=this._viewContainer;e.forEachOperation((r,o,s)=>{if(r.previousIndex==null)t.createEmbeddedView(this._template,new mo(r.item,this._ngForOf,-1,-1),s===null?void 0:s);else if(s==null)t.remove(o===null?void 0:o);else if(o!==null){let a=t.get(o);t.move(a,s),xd(a,r)}});for(let r=0,o=t.length;r<o;r++){let a=t.get(r).context;a.index=r,a.count=o,a.ngForOf=this._ngForOf}e.forEachIdentityChange(r=>{let o=t.get(r.currentIndex);xd(o,r)})}static ngTemplateContextGuard(e,t){return!0}static \u0275fac=function(t){return new(t||i)(H(ze),H(gt),H(Sa))};static \u0275dir=E({type:i,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return i})();function xd(i,n){i.context.$implicit=n.item}var vt=(()=>{class i{_viewContainer;_context=new fo;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,t){this._viewContainer=e,this._thenTemplateRef=t}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){Sd(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){Sd(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,t){return!0}static \u0275fac=function(t){return new(t||i)(H(ze),H(gt))};static \u0275dir=E({type:i,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return i})(),fo=class{$implicit=null;ngIf=null};function Sd(i,n){if(i&&!i.createEmbeddedView)throw new F(2020,!1)}var Ra=class{_viewContainerRef;_templateRef;_created=!1;constructor(n,e){this._viewContainerRef=n,this._templateRef=e}create(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)}destroy(){this._created=!1,this._viewContainerRef.clear()}enforceState(n){n&&!this._created?this.create():!n&&this._created&&this.destroy()}},po=(()=>{class i{_defaultViews=[];_defaultUsed=!1;_caseCount=0;_lastCaseCheckIndex=0;_lastCasesMatched=!1;_ngSwitch;set ngSwitch(e){this._ngSwitch=e,this._caseCount===0&&this._updateDefaultCases(!0)}_addCase(){return this._caseCount++}_addDefault(e){this._defaultViews.push(e)}_matchCase(e){let t=e===this._ngSwitch;return this._lastCasesMatched||=t,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),t}_updateDefaultCases(e){if(this._defaultViews.length>0&&e!==this._defaultUsed){this._defaultUsed=e;for(let t of this._defaultViews)t.enforceState(e)}}static \u0275fac=function(t){return new(t||i)};static \u0275dir=E({type:i,selectors:[["","ngSwitch",""]],inputs:{ngSwitch:"ngSwitch"}})}return i})(),ka=(()=>{class i{ngSwitch;_view;ngSwitchCase;constructor(e,t,r){this.ngSwitch=r,r._addCase(),this._view=new Ra(e,t)}ngDoCheck(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))}static \u0275fac=function(t){return new(t||i)(H(ze),H(gt),H(po,9))};static \u0275dir=E({type:i,selectors:[["","ngSwitchCase",""]],inputs:{ngSwitchCase:"ngSwitchCase"}})}return i})();var Aa=(()=>{class i{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=c(B);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let t=this._viewContainerRef;if(this._viewRef&&t.remove(t.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=t.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,t,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,t,r):!1,get:(e,t,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,t,r)}})}static \u0275fac=function(t){return new(t||i)(H(ze))};static \u0275dir=E({type:i,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[De]})}return i})();var rt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=A({type:i});static \u0275inj=k({})}return i})();function go(i,n){n=encodeURIComponent(n);for(let e of i.split(";")){let t=e.indexOf("="),[r,o]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}var wn=class{};var Oa="browser";function Md(i){return i===Oa}var $i=class{_doc;constructor(n){this._doc=n}manager},_o=(()=>{class i extends $i{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,r,o){return e.addEventListener(t,r,o),()=>this.removeEventListener(e,t,r,o)}removeEventListener(e,t,r,o){return e.removeEventListener(t,r,o)}static \u0275fac=function(t){return new(t||i)(O(I))};static \u0275prov=_({token:i,factory:i.\u0275fac})}return i})(),yo=new b(""),La=(()=>{class i{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(s=>{s.manager=this});let r=e.filter(s=>!(s instanceof _o));this._plugins=r.slice().reverse();let o=e.find(s=>s instanceof _o);o&&this._plugins.push(o)}addEventListener(e,t,r,o){return this._findPluginFor(t).addEventListener(e,t,r,o)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(o=>o.supports(e)),!t)throw new F(5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||i)(O(yo),O(R))};static \u0275prov=_({token:i,factory:i.\u0275fac})}return i})(),Pa="ng-app-id";function Id(i){for(let n of i)n.remove()}function Rd(i,n){let e=n.createElement("style");return e.textContent=i,e}function qf(i,n,e,t){let r=i.head?.querySelectorAll(`style[${Pa}="${n}"],link[${Pa}="${n}"]`);if(r)for(let o of r)o.removeAttribute(Pa),o instanceof HTMLLinkElement?t.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Na(i,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",i),e}var Va=(()=>{class i{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,t,r,o={}){this.doc=e,this.appId=t,this.nonce=r,qf(e,t,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,t){for(let r of e)this.addUsage(r,this.inline,Rd);t?.forEach(r=>this.addUsage(r,this.external,Na))}removeStyles(e,t){for(let r of e)this.removeUsage(r,this.inline);t?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,t,r){let o=t.get(e);o?o.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(e,this.doc)))})}removeUsage(e,t){let r=t.get(e);r&&(r.usage--,r.usage<=0&&(Id(r.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Id(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[t,{elements:r}]of this.inline)r.push(this.addElement(e,Rd(t,this.doc)));for(let[t,{elements:r}]of this.external)r.push(this.addElement(e,Na(t,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),e.appendChild(t)}static \u0275fac=function(t){return new(t||i)(O(I),O(vn),O(Kn,8),O(qn))};static \u0275prov=_({token:i,factory:i.\u0275fac})}return i})(),Fa={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Ba=/%COMP%/g;var kd="%COMP%",Yf=`_nghost-${kd}`,Kf=`_ngcontent-${kd}`,Zf=!0,Xf=new b("",{factory:()=>Zf});function Qf(i){return Kf.replace(Ba,i)}function Jf(i){return Yf.replace(Ba,i)}function Ad(i,n){return n.map(e=>e.replace(Ba,i))}var qi=(()=>{class i{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,t,r,o,s,a,l=null,d=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=s,this.ngZone=a,this.nonce=l,this.tracingService=d,this.defaultRenderer=new Gi(e,s,a,this.tracingService)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,t);return r instanceof bo?r.applyToHost(e):r instanceof Wi&&r.applyStyles(),r}getOrCreateRenderer(e,t){let r=this.rendererByCompId,o=r.get(t.id);if(!o){let s=this.doc,a=this.ngZone,l=this.eventManager,d=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,g=this.tracingService;switch(t.encapsulation){case oo.Emulated:o=new bo(l,d,t,this.appId,u,s,a,g);break;case oo.ShadowDom:return new vo(l,e,t,s,a,this.nonce,g,d);case oo.ExperimentalIsolatedShadowDom:return new vo(l,e,t,s,a,this.nonce,g);default:o=new Wi(l,d,t,u,s,a,g);break}r.set(t.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||i)(O(La),O(Va),O(vn),O(Xf),O(I),O(R),O(Kn),O(so,8))};static \u0275prov=_({token:i,factory:i.\u0275fac})}return i})(),Gi=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,t,r){this.eventManager=n,this.doc=e,this.ngZone=t,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(Fa[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(Td(n)?n.content:n).appendChild(e)}insertBefore(n,e,t){n&&(Td(n)?n.content:n).insertBefore(e,t)}removeChild(n,e){e.remove()}selectRootElement(n,e){let t=typeof n=="string"?this.doc.querySelector(n):n;if(!t)throw new F(-5104,!1);return e||(t.textContent=""),t}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,t,r){if(r){e=r+":"+e;let o=Fa[r];o?n.setAttributeNS(o,e,t):n.setAttribute(e,t)}else n.setAttribute(e,t)}removeAttribute(n,e,t){if(t){let r=Fa[t];r?n.removeAttributeNS(r,e):n.removeAttribute(`${t}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,t,r){r&(Qn.DashCase|Qn.Important)?n.style.setProperty(e,t,r&Qn.Important?"important":""):n.style[e]=t}removeStyle(n,e,t){t&Qn.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,t){n!=null&&(n[e]=t)}setValue(n,e){n.nodeValue=e}listen(n,e,t,r){if(typeof n=="string"&&(n=it().getGlobalEventTarget(this.doc,n),!n))throw new F(5102,!1);let o=this.decoratePreventDefault(t);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function Td(i){return i.tagName==="TEMPLATE"&&i.content!==void 0}var vo=class extends Gi{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,t,r,o,s,a,l){super(n,r,o,a),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=t.styles;d=Ad(t.id,d);for(let g of d){let C=document.createElement("style");s&&C.setAttribute("nonce",s),C.textContent=g,this.shadowRoot.appendChild(C)}let u=t.getExternalStyles?.();if(u)for(let g of u){let C=Na(g,r);s&&C.setAttribute("nonce",s),this.shadowRoot.appendChild(C)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,t){return super.insertBefore(this.nodeOrShadowRoot(n),e,t)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Wi=class extends Gi{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,t,r,o,s,a,l){super(n,o,s,a),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let d=t.styles;this.styles=l?Ad(l,d):d,this.styleUrls=t.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&id.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},bo=class extends Wi{contentAttr;hostAttr;constructor(n,e,t,r,o,s,a,l){let d=r+"-"+t.id;super(n,e,t,o,s,a,l,d),this.contentAttr=Qf(d),this.hostAttr=Jf(d)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let t=super.createElement(n,e);return super.setAttribute(t,this.contentAttr,""),t}};var wo=class i extends Ui{supportsDOMEvents=!0;static makeCurrent(){Ma(new i)}onAndCancel(n,e,t,r){return n.addEventListener(e,t,r),()=>{n.removeEventListener(e,t,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=tp();return e==null?null:np(e)}resetBaseElement(){Yi=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return go(document.cookie,n)}},Yi=null;function tp(){return Yi=Yi||document.head.querySelector("base"),Yi?Yi.getAttribute("href"):null}function np(i){return new URL(i,document.baseURI).pathname}var ip=(()=>{class i{build(){return new XMLHttpRequest}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:i.\u0275fac})}return i})(),Od=["alt","control","meta","shift"],rp={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},op={alt:i=>i.altKey,control:i=>i.ctrlKey,meta:i=>i.metaKey,shift:i=>i.shiftKey},Pd=(()=>{class i extends $i{constructor(e){super(e)}supports(e){return i.parseEventName(e)!=null}addEventListener(e,t,r,o){let s=i.parseEventName(t),a=i.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>it().onAndCancel(e,s.domEventName,a,o))}static parseEventName(e){let t=e.toLowerCase().split("."),r=t.shift();if(t.length===0||!(r==="keydown"||r==="keyup"))return null;let o=i._normalizeKey(t.pop()),s="",a=t.indexOf("code");if(a>-1&&(t.splice(a,1),s="code."),Od.forEach(d=>{let u=t.indexOf(d);u>-1&&(t.splice(u,1),s+=d+".")}),s+=o,t.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=s,l}static matchEventFullKeyCode(e,t){let r=rp[e.key]||e.key,o="";return t.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Od.forEach(s=>{if(s!==r){let a=op[s];a(e)&&(o+=s+".")}}),o+=r,o===t)}static eventCallback(e,t,r){return o=>{i.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>t(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||i)(O(I))};static \u0275prov=_({token:i,factory:i.\u0275fac})}return i})();async function ja(i,n,e){let t=f({rootComponent:i},sp(n,e));return _d(t)}function sp(i,n){return{platformRef:n?.platformRef,appProviders:[...up,...i?.providers??[]],platformProviders:dp}}function ap(){wo.makeCurrent()}function lp(){return new gn}function cp(){return qc(document),document}var dp=[{provide:qn,useValue:Oa},{provide:Yc,useValue:ap,multi:!0},{provide:I,useFactory:cp}];var up=[{provide:Uc,useValue:"root"},{provide:gn,useFactory:lp},{provide:yo,useClass:_o,multi:!0},{provide:yo,useClass:Pd,multi:!0},qi,Va,La,{provide:Ce,useExisting:qi},{provide:wn,useClass:ip},[]];var tn=class i{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let t=e.indexOf(":");if(t>0){let r=e.slice(0,t),o=e.slice(t+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,t)=>{this.addHeaderEntry(t,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,t])=>{this.setHeaderEntries(e,t)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof i?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new i;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof i?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let t=n.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...t),this.headers.set(e,r);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=this.headers.get(e);if(!s)return;s=s.filter(a=>o.indexOf(a)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(n,e){let t=n.toLowerCase();this.maybeSetNormalizedName(n,t),this.headers.has(t)?this.headers.get(t).push(e):this.headers.set(t,[e])}setHeaderEntries(n,e){let t=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,t),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var Ua=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},Ha=class{encodeKey(n){return Fd(n)}encodeValue(n){return Fd(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function hp(i,n){let e=new Map;return i.length>0&&i.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[s,a]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],l=e.get(s)||[];l.push(a),e.set(s,l)}),e}var mp=/%(\d[a-f0-9])/gi,fp={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Fd(i){return encodeURIComponent(i).replace(mp,(n,e)=>fp[e]??n)}function Do(i){return`${i}`}var kt=class i{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new Ha,n.fromString){if(n.fromObject)throw new F(2805,!1);this.map=hp(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let t=n.fromObject[e],r=Array.isArray(t)?t.map(Do):[Do(t)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(t=>{let r=n[t];Array.isArray(r)?r.forEach(o=>{e.push({param:t,value:o,op:"a"})}):e.push({param:t,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(t=>e+"="+this.encoder.encodeValue(t)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new i({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(Do(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let t=this.map.get(n.param)||[],r=t.indexOf(Do(n.value));r!==-1&&t.splice(r,1),t.length>0?this.map.set(n.param,t):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function pp(i){switch(i){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Nd(i){return typeof ArrayBuffer<"u"&&i instanceof ArrayBuffer}function Ld(i){return typeof Blob<"u"&&i instanceof Blob}function Vd(i){return typeof FormData<"u"&&i instanceof FormData}function gp(i){return typeof URLSearchParams<"u"&&i instanceof URLSearchParams}var Bd="Content-Type",jd="Accept",zd="text/plain",Ud="application/json",_p=`${Ud}, ${zd}, */*`,ei=class i{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,t,r){this.url=e,this.method=n.toUpperCase();let o;if(pp(this.method)||r?(this.body=t!==void 0?t:null,o=r):o=t,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new F(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new tn,this.context??=new Ua,!this.params)this.params=new kt,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let a=e.indexOf("?"),l=a===-1?"?":a<e.length-1?"&":"";this.urlWithParams=e+l+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Nd(this.body)||Ld(this.body)||Vd(this.body)||gp(this.body)?this.body:this.body instanceof kt?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Vd(this.body)?null:Ld(this.body)?this.body.type||null:Nd(this.body)?null:typeof this.body=="string"?zd:this.body instanceof kt?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Ud:null}clone(n={}){let e=n.method||this.method,t=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,s=n.priority||this.priority,a=n.cache||this.cache,l=n.mode||this.mode,d=n.redirect||this.redirect,u=n.credentials||this.credentials,g=n.referrer||this.referrer,C=n.integrity||this.integrity,Y=n.referrerPolicy||this.referrerPolicy,W=n.transferCache??this.transferCache,q=n.timeout??this.timeout,T=n.body!==void 0?n.body:this.body,K=n.withCredentials??this.withCredentials,ue=n.reportProgress??this.reportProgress,Te=n.headers||this.headers,ye=n.params||this.params,Ht=n.context??this.context;return n.setHeaders!==void 0&&(Te=Object.keys(n.setHeaders).reduce((Li,fn)=>Li.set(fn,n.setHeaders[fn]),Te)),n.setParams&&(ye=Object.keys(n.setParams).reduce((Li,fn)=>Li.set(fn,n.setParams[fn]),ye)),new i(e,t,T,{params:ye,headers:Te,context:Ht,reportProgress:ue,responseType:r,withCredentials:K,transferCache:W,keepalive:o,cache:a,priority:s,timeout:q,mode:l,redirect:d,credentials:u,referrer:g,integrity:C,referrerPolicy:Y})}},Dn=(function(i){return i[i.Sent=0]="Sent",i[i.UploadProgress=1]="UploadProgress",i[i.ResponseHeader=2]="ResponseHeader",i[i.DownloadProgress=3]="DownloadProgress",i[i.Response=4]="Response",i[i.User=5]="User",i})(Dn||{}),Ki=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,t="OK"){this.headers=n.headers||new tn,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||t,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},$a=class i extends Ki{constructor(n={}){super(n)}type=Dn.ResponseHeader;clone(n={}){return new i({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},Zi=class i extends Ki{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=Dn.Response;clone(n={}){return new i({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},ti=class extends Ki{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},vp=200,bp=204;var yp=/^\)\]\}',?\n/;var wp=(()=>{class i{xhrFactory;tracingService=c(so,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new F(-2800,!1);let t=this.xhrFactory;return N(null).pipe(he(()=>new Ne(o=>{let s=t.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((T,K)=>s.setRequestHeader(T,K.join(","))),e.headers.has(jd)||s.setRequestHeader(jd,_p),!e.headers.has(Bd)){let T=e.detectContentTypeHeader();T!==null&&s.setRequestHeader(Bd,T)}if(e.timeout&&(s.timeout=e.timeout),e.responseType){let T=e.responseType.toLowerCase();s.responseType=T!=="json"?T:"text"}let a=e.serializeBody(),l=null,d=()=>{if(l!==null)return l;let T=s.statusText||"OK",K=new tn(s.getAllResponseHeaders()),ue=s.responseURL||e.url;return l=new $a({headers:K,status:s.status,statusText:T,url:ue}),l},u=this.maybePropagateTrace(()=>{let{headers:T,status:K,statusText:ue,url:Te}=d(),ye=null;K!==bp&&(ye=typeof s.response>"u"?s.responseText:s.response),K===0&&(K=ye?vp:0);let Ht=K>=200&&K<300;if(e.responseType==="json"&&typeof ye=="string"){let Li=ye;ye=ye.replace(yp,"");try{ye=ye!==""?JSON.parse(ye):null}catch(fn){ye=Li,Ht&&(Ht=!1,ye={error:fn,text:ye})}}Ht?(o.next(new Zi({body:ye,headers:T,status:K,statusText:ue,url:Te||void 0})),o.complete()):o.error(new ti({error:ye,headers:T,status:K,statusText:ue,url:Te||void 0}))}),g=this.maybePropagateTrace(T=>{let{url:K}=d(),ue=new ti({error:T,status:s.status||0,statusText:s.statusText||"Unknown Error",url:K||void 0});o.error(ue)}),C=g;e.timeout&&(C=this.maybePropagateTrace(T=>{let{url:K}=d(),ue=new ti({error:new DOMException("Request timed out","TimeoutError"),status:s.status||0,statusText:s.statusText||"Request timeout",url:K||void 0});o.error(ue)}));let Y=!1,W=this.maybePropagateTrace(T=>{Y||(o.next(d()),Y=!0);let K={type:Dn.DownloadProgress,loaded:T.loaded};T.lengthComputable&&(K.total=T.total),e.responseType==="text"&&s.responseText&&(K.partialText=s.responseText),o.next(K)}),q=this.maybePropagateTrace(T=>{let K={type:Dn.UploadProgress,loaded:T.loaded};T.lengthComputable&&(K.total=T.total),o.next(K)});return s.addEventListener("load",u),s.addEventListener("error",g),s.addEventListener("timeout",C),s.addEventListener("abort",g),e.reportProgress&&(s.addEventListener("progress",W),a!==null&&s.upload&&s.upload.addEventListener("progress",q)),s.send(a),o.next({type:Dn.Sent}),()=>{s.removeEventListener("error",g),s.removeEventListener("abort",g),s.removeEventListener("load",u),s.removeEventListener("timeout",C),e.reportProgress&&(s.removeEventListener("progress",W),a!==null&&s.upload&&s.upload.removeEventListener("progress",q)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(t){return new(t||i)(O(wn))};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Dp(i,n){return n(i)}function Cp(i,n,e){return(t,r)=>Ye(e,()=>n(t,o=>i(o,r)))}var Ep=new b("",{factory:()=>[]}),Hd=new b(""),xp=new b("",{factory:()=>!0});var Sp=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:function(t){let r=null;return t?r=new(t||i):r=O(wp),r},providedIn:"root"})}return i})();var Mp=(()=>{class i{backend;injector;chain=null;pendingTasks=c(Wc);contributeToStability=c(xp);constructor(e,t){this.backend=e,this.injector=t}handle(e){if(this.chain===null){let t=Array.from(new Set([...this.injector.get(Ep),...this.injector.get(Hd,[])]));this.chain=t.reduceRight((r,o)=>Cp(r,o,this.injector),Dp)}if(this.contributeToStability){let t=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(Gn(t))}else return this.chain(e,t=>this.backend.handle(t))}static \u0275fac=function(t){return new(t||i)(O(Sp),O(Be))};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Ip=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:function(t){let r=null;return t?r=new(t||i):r=O(Mp),r},providedIn:"root"})}return i})();function za(i,n){return{body:n,headers:i.headers,context:i.context,observe:i.observe,params:i.params,reportProgress:i.reportProgress,responseType:i.responseType,withCredentials:i.withCredentials,credentials:i.credentials,transferCache:i.transferCache,timeout:i.timeout,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,integrity:i.integrity,referrer:i.referrer,referrerPolicy:i.referrerPolicy}}var Ga=(()=>{class i{handler;constructor(e){this.handler=e}request(e,t,r={}){let o;if(e instanceof ei)o=e;else{let l;r.headers instanceof tn?l=r.headers:l=new tn(r.headers);let d;r.params&&(r.params instanceof kt?d=r.params:d=new kt({fromObject:r.params})),o=new ei(e,t,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:d,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let s=N(o).pipe(Bi(l=>this.handler.handle(l)));if(e instanceof ei||r.observe==="events")return s;let a=s.pipe(ie(l=>l instanceof Zi));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return a.pipe(V(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new F(2806,!1);return l.body}));case"blob":return a.pipe(V(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new F(2807,!1);return l.body}));case"text":return a.pipe(V(l=>{if(l.body!==null&&typeof l.body!="string")throw new F(2808,!1);return l.body}));default:return a.pipe(V(l=>l.body))}case"response":return a;default:throw new F(2809,!1)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:new kt().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,r={}){return this.request("PATCH",e,za(r,t))}post(e,t,r={}){return this.request("POST",e,za(r,t))}put(e,t,r={}){return this.request("PUT",e,za(r,t))}static \u0275fac=function(t){return new(t||i)(O(Ip))};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var $d=(()=>{class i{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(t){return new(t||i)(O(I))};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Xi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:function(t){let r=null;return t?r=new(t||i):r=O(Op),r},providedIn:"root"})}return i})(),Op=(()=>{class i extends Xi{_doc;constructor(e){super(),this._doc=e}sanitize(e,t){if(t==null)return null;switch(e){case $e.NONE:return t;case $e.HTML:return Xn(t,"HTML")?Zn(t):td(this._doc,String(t)).toString();case $e.STYLE:return Xn(t,"Style")?Zn(t):t;case $e.SCRIPT:if(Xn(t,"Script"))return Zn(t);throw new F(5200,!1);case $e.URL:return Xn(t,"URL")?Zn(t):ed(String(t));case $e.RESOURCE_URL:if(Xn(t,"ResourceURL"))return Zn(t);throw new F(5201,!1);default:throw new F(5202,!1)}}bypassSecurityTrustHtml(e){return Kc(e)}bypassSecurityTrustStyle(e){return Zc(e)}bypassSecurityTrustScript(e){return Xc(e)}bypassSecurityTrustUrl(e){return Qc(e)}bypassSecurityTrustResourceUrl(e){return Jc(e)}static \u0275fac=function(t){return new(t||i)(O(I))};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var U="primary",ur=Symbol("RouteTitle"),Za=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function En(i){return new Za(i)}function Wa(i,n,e){for(let t=0;t<i.length;t++){let r=i[t],o=n[t];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function Jd(i,n,e){let t=e.path.split("/"),r=t.indexOf("**");if(r===-1){if(t.length>i.length||e.pathMatch==="full"&&(n.hasChildren()||t.length<i.length))return null;let l={},d=i.slice(0,t.length);return Wa(t,d,l)?{consumed:d,posParams:l}:null}if(r!==t.lastIndexOf("**"))return null;let o=t.slice(0,r),s=t.slice(r+1);if(o.length+s.length>i.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let a={};return!Wa(o,i.slice(0,o.length),a)||!Wa(s,i.slice(i.length-s.length),a)?null:{consumed:i,posParams:a}}function Io(i){return new Promise((n,e)=>{i.pipe(Wt()).subscribe({next:t=>n(t),error:t=>e(t)})})}function Pp(i,n){if(i.length!==n.length)return!1;for(let e=0;e<i.length;++e)if(!St(i[e],n[e]))return!1;return!0}function St(i,n){let e=i?Xa(i):void 0,t=n?Xa(n):void 0;if(!e||!t||e.length!=t.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!eu(i[r],n[r]))return!1;return!0}function Xa(i){return[...Object.keys(i),...Object.getOwnPropertySymbols(i)]}function eu(i,n){if(Array.isArray(i)&&Array.isArray(n)){if(i.length!==n.length)return!1;let e=[...i].sort(),t=[...n].sort();return e.every((r,o)=>t[o]===r)}else return i===n}function Fp(i){return i.length>0?i[i.length-1]:null}function Mn(i){return Xr(i)?i:ji(i)?qe(Promise.resolve(i)):N(i)}function tu(i){return Xr(i)?Io(i):Promise.resolve(i)}var Np={exact:ru,subset:ou},nu={exact:Lp,subset:Vp,ignored:()=>!0},iu={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Qa={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function Wd(i,n,e){return Np[e.paths](i.root,n.root,e.matrixParams)&&nu[e.queryParams](i.queryParams,n.queryParams)&&!(e.fragment==="exact"&&i.fragment!==n.fragment)}function Lp(i,n){return St(i,n)}function ru(i,n,e){if(!Cn(i.segments,n.segments)||!xo(i.segments,n.segments,e)||i.numberOfChildren!==n.numberOfChildren)return!1;for(let t in n.children)if(!i.children[t]||!ru(i.children[t],n.children[t],e))return!1;return!0}function Vp(i,n){return Object.keys(n).length<=Object.keys(i).length&&Object.keys(n).every(e=>eu(i[e],n[e]))}function ou(i,n,e){return su(i,n,n.segments,e)}function su(i,n,e,t){if(i.segments.length>e.length){let r=i.segments.slice(0,e.length);return!(!Cn(r,e)||n.hasChildren()||!xo(r,e,t))}else if(i.segments.length===e.length){if(!Cn(i.segments,e)||!xo(i.segments,e,t))return!1;for(let r in n.children)if(!i.children[r]||!ou(i.children[r],n.children[r],t))return!1;return!0}else{let r=e.slice(0,i.segments.length),o=e.slice(i.segments.length);return!Cn(i.segments,r)||!xo(i.segments,r,t)||!i.children[U]?!1:su(i.children[U],n,o,t)}}function xo(i,n,e){return n.every((t,r)=>nu[e](i[r].parameters,t.parameters))}var st=class{root;queryParams;fragment;_queryParamMap;constructor(n=new ne([],{}),e={},t=null){this.root=n,this.queryParams=e,this.fragment=t}get queryParamMap(){return this._queryParamMap??=En(this.queryParams),this._queryParamMap}toString(){return zp.serialize(this)}},ne=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(t=>t.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return So(this)}},nn=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=En(this.parameters),this._parameterMap}toString(){return lu(this)}};function Bp(i,n){return Cn(i,n)&&i.every((e,t)=>St(e.parameters,n[t].parameters))}function Cn(i,n){return i.length!==n.length?!1:i.every((e,t)=>e.path===n[t].path)}function jp(i,n){let e=[];return Object.entries(i.children).forEach(([t,r])=>{t===U&&(e=e.concat(n(r,t)))}),Object.entries(i.children).forEach(([t,r])=>{t!==U&&(e=e.concat(n(r,t)))}),e}var hr=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:()=>new rn,providedIn:"root"})}return i})(),rn=class{parse(n){let e=new el(n);return new st(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${Qi(n.root,!0)}`,t=$p(n.queryParams),r=typeof n.fragment=="string"?`#${Up(n.fragment)}`:"";return`${e}${t}${r}`}},zp=new rn;function So(i){return i.segments.map(n=>lu(n)).join("/")}function Qi(i,n){if(!i.hasChildren())return So(i);if(n){let e=i.children[U]?Qi(i.children[U],!1):"",t=[];return Object.entries(i.children).forEach(([r,o])=>{r!==U&&t.push(`${r}:${Qi(o,!1)}`)}),t.length>0?`${e}(${t.join("//")})`:e}else{let e=jp(i,(t,r)=>r===U?[Qi(i.children[U],!1)]:[`${r}:${Qi(t,!1)}`]);return Object.keys(i.children).length===1&&i.children[U]!=null?`${So(i)}/${e[0]}`:`${So(i)}/(${e.join("//")})`}}function au(i){return encodeURIComponent(i).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Co(i){return au(i).replace(/%3B/gi,";")}function Up(i){return encodeURI(i)}function Ja(i){return au(i).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Mo(i){return decodeURIComponent(i)}function qd(i){return Mo(i.replace(/\+/g,"%20"))}function lu(i){return`${Ja(i.path)}${Hp(i.parameters)}`}function Hp(i){return Object.entries(i).map(([n,e])=>`;${Ja(n)}=${Ja(e)}`).join("")}function $p(i){let n=Object.entries(i).map(([e,t])=>Array.isArray(t)?t.map(r=>`${Co(e)}=${Co(r)}`).join("&"):`${Co(e)}=${Co(t)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var Gp=/^[^\/()?;#]+/;function qa(i){let n=i.match(Gp);return n?n[0]:""}var Wp=/^[^\/()?;=#]+/;function qp(i){let n=i.match(Wp);return n?n[0]:""}var Yp=/^[^=?&#]+/;function Kp(i){let n=i.match(Yp);return n?n[0]:""}var Zp=/^[^&#]+/;function Xp(i){let n=i.match(Zp);return n?n[0]:""}var el=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new ne([],{}):new ne([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new F(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(t).length>0)&&(r[U]=new ne(e,t)),r}parseSegment(){let n=qa(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new F(4009,!1);return this.capture(n),new nn(Mo(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=qp(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let r=qa(this.remaining);r&&(t=r,this.capture(t))}n[Mo(e)]=Mo(t)}parseQueryParam(n){let e=Kp(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let s=Xp(this.remaining);s&&(t=s,this.capture(t))}let r=qd(e),o=qd(t);if(n.hasOwnProperty(r)){let s=n[r];Array.isArray(s)||(s=[s],n[r]=s),s.push(o)}else n[r]=o}parseParens(n,e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=qa(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new F(4010,!1);let s;r.indexOf(":")>-1?(s=r.slice(0,r.indexOf(":")),this.capture(s),this.capture(":")):n&&(s=U);let a=this.parseChildren(e+1);t[s??U]=Object.keys(a).length===1&&a[U]?a[U]:new ne([],a),this.consumeOptional("//")}return t}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new F(4011,!1)}};function cu(i){return i.segments.length>0?new ne([],{[U]:i}):i}function du(i){let n={};for(let[t,r]of Object.entries(i.children)){let o=du(r);if(t===U&&o.segments.length===0&&o.hasChildren())for(let[s,a]of Object.entries(o.children))n[s]=a;else(o.segments.length>0||o.hasChildren())&&(n[t]=o)}let e=new ne(i.segments,n);return Qp(e)}function Qp(i){if(i.numberOfChildren===1&&i.children[U]){let n=i.children[U];return new ne(i.segments.concat(n.segments),n.children)}return i}function oi(i){return i instanceof st}function uu(i,n,e=null,t=null,r=new rn){let o=hu(i);return mu(o,n,e,t,r)}function hu(i){let n;function e(o){let s={};for(let l of o.children){let d=e(l);s[l.outlet]=d}let a=new ne(o.url,s);return o===i&&(n=a),a}let t=e(i.root),r=cu(t);return n??r}function mu(i,n,e,t,r){let o=i;for(;o.parent;)o=o.parent;if(n.length===0)return Ya(o,o,o,e,t,r);let s=Jp(n);if(s.toRoot())return Ya(o,o,new ne([],{}),e,t,r);let a=eg(s,o,i),l=a.processChildren?er(a.segmentGroup,a.index,s.commands):pu(a.segmentGroup,a.index,s.commands);return Ya(o,a.segmentGroup,l,e,t,r)}function Ro(i){return typeof i=="object"&&i!=null&&!i.outlets&&!i.segmentPath}function ir(i){return typeof i=="object"&&i!=null&&i.outlets}function Yd(i,n,e){i||="\u0275";let t=new st;return t.queryParams={[i]:n},e.parse(e.serialize(t)).queryParams[i]}function Ya(i,n,e,t,r,o){let s={};for(let[d,u]of Object.entries(t??{}))s[d]=Array.isArray(u)?u.map(g=>Yd(d,g,o)):Yd(d,u,o);let a;i===n?a=e:a=fu(i,n,e);let l=cu(du(a));return new st(l,s,r)}function fu(i,n,e){let t={};return Object.entries(i.children).forEach(([r,o])=>{o===n?t[r]=e:t[r]=fu(o,n,e)}),new ne(i.segments,t)}var To=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,t){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=t,n&&t.length>0&&Ro(t[0]))throw new F(4003,!1);let r=t.find(ir);if(r&&r!==Fp(t))throw new F(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Jp(i){if(typeof i[0]=="string"&&i.length===1&&i[0]==="/")return new To(!0,0,i);let n=0,e=!1,t=i.reduce((r,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let a={};return Object.entries(o.outlets).forEach(([l,d])=>{a[l]=typeof d=="string"?d.split("/"):d}),[...r,{outlets:a}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:s===0?(o.split("/").forEach((a,l)=>{l==0&&a==="."||(l==0&&a===""?e=!0:a===".."?n++:a!=""&&r.push(a))}),r):[...r,o]},[]);return new To(e,n,t)}var ii=class{segmentGroup;processChildren;index;constructor(n,e,t){this.segmentGroup=n,this.processChildren=e,this.index=t}};function eg(i,n,e){if(i.isAbsolute)return new ii(n,!0,0);if(!e)return new ii(n,!1,NaN);if(e.parent===null)return new ii(e,!0,0);let t=Ro(i.commands[0])?0:1,r=e.segments.length-1+t;return tg(e,r,i.numberOfDoubleDots)}function tg(i,n,e){let t=i,r=n,o=e;for(;o>r;){if(o-=r,t=t.parent,!t)throw new F(4005,!1);r=t.segments.length}return new ii(t,!1,r-o)}function ng(i){return ir(i[0])?i[0].outlets:{[U]:i}}function pu(i,n,e){if(i??=new ne([],{}),i.segments.length===0&&i.hasChildren())return er(i,n,e);let t=ig(i,n,e),r=e.slice(t.commandIndex);if(t.match&&t.pathIndex<i.segments.length){let o=new ne(i.segments.slice(0,t.pathIndex),{});return o.children[U]=new ne(i.segments.slice(t.pathIndex),i.children),er(o,0,r)}else return t.match&&r.length===0?new ne(i.segments,{}):t.match&&!i.hasChildren()?tl(i,n,e):t.match?er(i,0,r):tl(i,n,e)}function er(i,n,e){if(e.length===0)return new ne(i.segments,{});{let t=ng(e),r={};if(Object.keys(t).some(o=>o!==U)&&i.children[U]&&i.numberOfChildren===1&&i.children[U].segments.length===0){let o=er(i.children[U],n,e);return new ne(i.segments,o.children)}return Object.entries(t).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(r[o]=pu(i.children[o],n,s))}),Object.entries(i.children).forEach(([o,s])=>{t[o]===void 0&&(r[o]=s)}),new ne(i.segments,r)}}function ig(i,n,e){let t=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<i.segments.length;){if(t>=e.length)return o;let s=i.segments[r],a=e[t];if(ir(a))break;let l=`${a}`,d=t<e.length-1?e[t+1]:null;if(r>0&&l===void 0)break;if(l&&d&&typeof d=="object"&&d.outlets===void 0){if(!Zd(l,d,s))return o;t+=2}else{if(!Zd(l,{},s))return o;t++}r++}return{match:!0,pathIndex:r,commandIndex:t}}function tl(i,n,e){let t=i.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(ir(o)){let l=rg(o.outlets);return new ne(t,l)}if(r===0&&Ro(e[0])){let l=i.segments[n];t.push(new nn(l.path,Kd(e[0]))),r++;continue}let s=ir(o)?o.outlets[U]:`${o}`,a=r<e.length-1?e[r+1]:null;s&&a&&Ro(a)?(t.push(new nn(s,Kd(a))),r+=2):(t.push(new nn(s,{})),r++)}return new ne(t,{})}function rg(i){let n={};return Object.entries(i).forEach(([e,t])=>{typeof t=="string"&&(t=[t]),t!==null&&(n[e]=tl(new ne([],{}),0,t))}),n}function Kd(i){let n={};return Object.entries(i).forEach(([e,t])=>n[e]=`${t}`),n}function Zd(i,n,e){return i==e.path&&St(n,e.parameters)}var tr="imperative",Pe=(function(i){return i[i.NavigationStart=0]="NavigationStart",i[i.NavigationEnd=1]="NavigationEnd",i[i.NavigationCancel=2]="NavigationCancel",i[i.NavigationError=3]="NavigationError",i[i.RoutesRecognized=4]="RoutesRecognized",i[i.ResolveStart=5]="ResolveStart",i[i.ResolveEnd=6]="ResolveEnd",i[i.GuardsCheckStart=7]="GuardsCheckStart",i[i.GuardsCheckEnd=8]="GuardsCheckEnd",i[i.RouteConfigLoadStart=9]="RouteConfigLoadStart",i[i.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",i[i.ChildActivationStart=11]="ChildActivationStart",i[i.ChildActivationEnd=12]="ChildActivationEnd",i[i.ActivationStart=13]="ActivationStart",i[i.ActivationEnd=14]="ActivationEnd",i[i.Scroll=15]="Scroll",i[i.NavigationSkipped=16]="NavigationSkipped",i})(Pe||{}),Je=class{id;url;constructor(n,e){this.id=n,this.url=e}},xn=class extends Je{type=Pe.NavigationStart;navigationTrigger;restoredState;constructor(n,e,t="imperative",r=null){super(n,e),this.navigationTrigger=t,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Ot=class extends Je{urlAfterRedirects;type=Pe.NavigationEnd;constructor(n,e,t){super(n,e),this.urlAfterRedirects=t}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Ue=(function(i){return i[i.Redirect=0]="Redirect",i[i.SupersededByNewNavigation=1]="SupersededByNewNavigation",i[i.NoDataFromResolver=2]="NoDataFromResolver",i[i.GuardRejected=3]="GuardRejected",i[i.Aborted=4]="Aborted",i})(Ue||{}),rr=(function(i){return i[i.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",i[i.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",i})(rr||{}),ot=class extends Je{reason;code;type=Pe.NavigationCancel;constructor(n,e,t,r){super(n,e),this.reason=t,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function gu(i){return i instanceof ot&&(i.code===Ue.Redirect||i.code===Ue.SupersededByNewNavigation)}var Pt=class extends Je{reason;code;type=Pe.NavigationSkipped;constructor(n,e,t,r){super(n,e),this.reason=t,this.code=r}},Sn=class extends Je{error;target;type=Pe.NavigationError;constructor(n,e,t,r){super(n,e),this.error=t,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},or=class extends Je{urlAfterRedirects;state;type=Pe.RoutesRecognized;constructor(n,e,t,r){super(n,e),this.urlAfterRedirects=t,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ko=class extends Je{urlAfterRedirects;state;type=Pe.GuardsCheckStart;constructor(n,e,t,r){super(n,e),this.urlAfterRedirects=t,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ao=class extends Je{urlAfterRedirects;state;shouldActivate;type=Pe.GuardsCheckEnd;constructor(n,e,t,r,o){super(n,e),this.urlAfterRedirects=t,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Oo=class extends Je{urlAfterRedirects;state;type=Pe.ResolveStart;constructor(n,e,t,r){super(n,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Po=class extends Je{urlAfterRedirects;state;type=Pe.ResolveEnd;constructor(n,e,t,r){super(n,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Fo=class{route;type=Pe.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},No=class{route;type=Pe.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Lo=class{snapshot;type=Pe.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Vo=class{snapshot;type=Pe.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Bo=class{snapshot;type=Pe.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},jo=class{snapshot;type=Pe.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var si=class{},sr=class{},ai=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function og(i){return!(i instanceof si)&&!(i instanceof ai)&&!(i instanceof sr)}var zo=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new ui(this.rootInjector)}},ui=(()=>{class i{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,t){let r=this.getOrCreateContext(e);r.outlet=t,this.contexts.set(e,r)}onChildOutletDestroyed(e){let t=this.getContext(e);t&&(t.outlet=null,t.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new zo(this.rootInjector),this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(t){return new(t||i)(O(Be))};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Uo=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=nl(n,this._root);return e?e.children.map(t=>t.value):[]}firstChild(n){let e=nl(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=il(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return il(n,this._root).map(e=>e.value)}};function nl(i,n){if(i===n.value)return n;for(let e of n.children){let t=nl(i,e);if(t)return t}return null}function il(i,n){if(i===n.value)return[n];for(let e of n.children){let t=il(i,e);if(t.length)return t.unshift(n),t}return[]}var Qe=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function ni(i){let n={};return i&&i.children.forEach(e=>n[e.value.outlet]=e),n}var ar=class extends Uo{snapshot;constructor(n,e){super(n),this.snapshot=e,hl(this,n)}toString(){return this.snapshot.toString()}};function _u(i,n){let e=sg(i,n),t=new Ve([new nn("",{})]),r=new Ve({}),o=new Ve({}),s=new Ve({}),a=new Ve(""),l=new on(t,r,s,a,o,U,i,e.root);return l.snapshot=e.root,new ar(new Qe(l,[]),e)}function sg(i,n){let e={},t={},r={},s=new li([],e,r,"",t,U,i,null,{},n);return new lr("",new Qe(s,[]))}var on=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,t,r,o,s,a,l){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=t,this.fragmentSubject=r,this.dataSubject=o,this.outlet=s,this.component=a,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(V(d=>d[ur]))??N(void 0),this.url=n,this.params=e,this.queryParams=t,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(V(n=>En(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(V(n=>En(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function ul(i,n,e="emptyOnly"){let t,{routeConfig:r}=i;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?t={params:f(f({},n.params),i.params),data:f(f({},n.data),i.data),resolve:f(f(f(f({},i.data),n.data),r?.data),i._resolvedData)}:t={params:f({},i.params),data:f({},i.data),resolve:f(f({},i.data),i._resolvedData??{})},r&&bu(r)&&(t.resolve[ur]=r.title),t}var li=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[ur]}constructor(n,e,t,r,o,s,a,l,d,u){this.url=n,this.params=e,this.queryParams=t,this.fragment=r,this.data=o,this.outlet=s,this.component=a,this.routeConfig=l,this._resolve=d,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=En(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=En(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(t=>t.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},lr=class extends Uo{url;constructor(n,e){super(e),this.url=n,hl(this,e)}toString(){return vu(this._root)}};function hl(i,n){n.value._routerState=i,n.children.forEach(e=>hl(i,e))}function vu(i){let n=i.children.length>0?` { ${i.children.map(vu).join(", ")} } `:"";return`${i.value}${n}`}function Ka(i){if(i.snapshot){let n=i.snapshot,e=i._futureSnapshot;i.snapshot=e,St(n.queryParams,e.queryParams)||i.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&i.fragmentSubject.next(e.fragment),St(n.params,e.params)||i.paramsSubject.next(e.params),Pp(n.url,e.url)||i.urlSubject.next(e.url),St(n.data,e.data)||i.dataSubject.next(e.data)}else i.snapshot=i._futureSnapshot,i.dataSubject.next(i._futureSnapshot.data)}function rl(i,n){let e=St(i.params,n.params)&&Bp(i.url,n.url),t=!i.parent!=!n.parent;return e&&!t&&(!i.parent||rl(i.parent,n.parent))}function bu(i){return typeof i.title=="string"||i.title===null}var yu=new b(""),mr=(()=>{class i{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=U;activateEvents=new x;deactivateEvents=new x;attachEvents=new x;detachEvents=new x;routerOutletData=fd();parentContexts=c(ui);location=c(ze);changeDetector=c(Se);inputBinder=c(Wo,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:t,previousValue:r}=e.name;if(t)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new F(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new F(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new F(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new F(4013,!1);this._activatedRoute=e;let r=this.location,s=e.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new ol(e,a,r.injector,this.routerOutletData);this.activated=r.createComponent(s,{index:r.length,injector:l,environmentInjector:t}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=E({type:i,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[De]})}return i})(),ol=class{route;childContexts;parent;outletData;constructor(n,e,t,r){this.route=n,this.childContexts=e,this.parent=t,this.outletData=r}get(n,e){return n===on?this.route:n===ui?this.childContexts:n===yu?this.outletData:this.parent.get(n,e)}},Wo=new b("");var ml=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(t,r){t&1&&G(0,"router-outlet")},dependencies:[mr],encapsulation:2})}return i})();function fl(i){let n=i.children&&i.children.map(fl),e=n?$(f({},i),{children:n}):f({},i);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==U&&(e.component=ml),e}function ag(i,n,e){let t=cr(i,n._root,e?e._root:void 0);return new ar(t,n)}function cr(i,n,e){if(e&&i.shouldReuseRoute(n.value,e.value.snapshot)){let t=e.value;t._futureSnapshot=n.value;let r=lg(i,n,e);return new Qe(t,r)}else{if(i.shouldAttach(n.value)){let o=i.retrieve(n.value);if(o!==null){let s=o.route;return s.value._futureSnapshot=n.value,s.children=n.children.map(a=>cr(i,a)),s}}let t=cg(n.value),r=n.children.map(o=>cr(i,o));return new Qe(t,r)}}function lg(i,n,e){return n.children.map(t=>{for(let r of e.children)if(i.shouldReuseRoute(t.value,r.value.snapshot))return cr(i,t,r);return cr(i,t)})}function cg(i){return new on(new Ve(i.url),new Ve(i.params),new Ve(i.queryParams),new Ve(i.fragment),new Ve(i.data),i.outlet,i.component,i)}var ci=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},wu="ngNavigationCancelingError";function Ho(i,n){let{redirectTo:e,navigationBehaviorOptions:t}=oi(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=Du(!1,Ue.Redirect);return r.url=e,r.navigationBehaviorOptions=t,r}function Du(i,n){let e=new Error(`NavigationCancelingError: ${i||""}`);return e[wu]=!0,e.cancellationCode=n,e}function dg(i){return Cu(i)&&oi(i.url)}function Cu(i){return!!i&&i[wu]}var sl=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,t,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=t,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,t=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,t,n),Ka(this.futureState.root),this.activateChildRoutes(e,t,n)}deactivateChildRoutes(n,e,t){let r=ni(e);n.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,r[s],t),delete r[s]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,t)})}deactivateRoutes(n,e,t){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let s=t.getContext(r.outlet);s&&this.deactivateChildRoutes(n,e,s.children)}else this.deactivateChildRoutes(n,e,t);else o&&this.deactivateRouteAndItsChildren(e,t)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let t=e.getContext(n.value.outlet),r=t&&n.value.component?t.children:e,o=ni(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);if(t&&t.outlet){let s=t.outlet.detach(),a=t.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:s,route:n,contexts:a})}}deactivateRouteAndOutlet(n,e){let t=e.getContext(n.value.outlet),r=t&&n.value.component?t.children:e,o=ni(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);t&&(t.outlet&&(t.outlet.deactivate(),t.children.onOutletDeactivated()),t.attachRef=null,t.route=null)}activateChildRoutes(n,e,t){let r=ni(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],t),this.forwardEvent(new jo(o.value.snapshot))}),n.children.length&&this.forwardEvent(new Vo(n.value.snapshot))}activateRoutes(n,e,t){let r=n.value,o=e?e.value:null;if(Ka(r),r===o)if(r.component){let s=t.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,s.children)}else this.activateChildRoutes(n,e,t);else if(r.component){let s=t.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),Ka(a.route.value),this.activateChildRoutes(n,null,s.children)}else s.attachRef=null,s.route=r,s.outlet&&s.outlet.activateWith(r,s.injector),this.activateChildRoutes(n,null,s.children)}else this.activateChildRoutes(n,null,t)}},$o=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},ri=class{component;route;constructor(n,e){this.component=n,this.route=e}};function ug(i,n,e){let t=i._root,r=n?n._root:null;return Ji(t,r,e,[t.value])}function hg(i){let n=i.routeConfig?i.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:i,guards:n}}function hi(i,n){let e=Symbol(),t=n.get(i,e);return t===e?typeof i=="function"&&!zc(i)?i:n.get(i):t}function Ji(i,n,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=ni(n);return i.children.forEach(s=>{mg(s,o[s.value.outlet],e,t.concat([s.value]),r),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,a])=>nr(a,e.getContext(s),r)),r}function mg(i,n,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=i.value,s=n?n.value:null,a=e?e.getContext(i.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let l=fg(s,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new $o(t)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?Ji(i,n,a?a.children:null,t,r):Ji(i,n,e,t,r),l&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new ri(a.outlet.component,s))}else s&&nr(n,a,r),r.canActivateChecks.push(new $o(t)),o.component?Ji(i,null,a?a.children:null,t,r):Ji(i,null,e,t,r);return r}function fg(i,n,e){if(typeof e=="function")return Ye(n._environmentInjector,()=>e(i,n));switch(e){case"pathParamsChange":return!Cn(i.url,n.url);case"pathParamsOrQueryParamsChange":return!Cn(i.url,n.url)||!St(i.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!rl(i,n)||!St(i.queryParams,n.queryParams);default:return!rl(i,n)}}function nr(i,n,e){let t=ni(i),r=i.value;Object.entries(t).forEach(([o,s])=>{r.component?n?nr(s,n.children.getContext(o),e):nr(s,null,e):nr(s,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new ri(n.outlet.component,r)):e.canDeactivateChecks.push(new ri(null,r)):e.canDeactivateChecks.push(new ri(null,r))}function fr(i){return typeof i=="function"}function pg(i){return typeof i=="boolean"}function gg(i){return i&&fr(i.canLoad)}function _g(i){return i&&fr(i.canActivate)}function vg(i){return i&&fr(i.canActivateChild)}function bg(i){return i&&fr(i.canDeactivate)}function yg(i){return i&&fr(i.canMatch)}function Eu(i){return i instanceof Lc||i?.name==="EmptyError"}var Eo=Symbol("INITIAL_VALUE");function di(){return he(i=>Qr(i.map(n=>n.pipe(ae(1),Le(Eo)))).pipe(V(n=>{for(let e of n)if(e!==!0){if(e===Eo)return Eo;if(e===!1||wg(e))return e}return!0}),ie(n=>n!==Eo),ae(1)))}function wg(i){return oi(i)||i instanceof ci}function xu(i){return i.aborted?N(void 0).pipe(ae(1)):new Ne(n=>{let e=()=>{n.next(),n.complete()};return i.addEventListener("abort",e),()=>i.removeEventListener("abort",e)})}function Su(i){return X(xu(i))}function Dg(i){return $t(n=>{let{targetSnapshot:e,currentSnapshot:t,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?N($(f({},n),{guardsResult:!0})):Cg(o,e,t).pipe($t(s=>s&&pg(s)?Eg(e,r,i):N(s)),V(s=>$(f({},n),{guardsResult:s})))})}function Cg(i,n,e){return qe(i).pipe($t(t=>Rg(t.component,t.route,e,n)),Wt(t=>t!==!0,!0))}function Eg(i,n,e){return qe(n).pipe(Bi(t=>Jr(Sg(t.route.parent,e),xg(t.route,e),Ig(i,t.path),Mg(i,t.route))),Wt(t=>t!==!0,!0))}function xg(i,n){return i!==null&&n&&n(new Bo(i)),N(!0)}function Sg(i,n){return i!==null&&n&&n(new Lo(i)),N(!0)}function Mg(i,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return N(!0);let t=e.map(r=>Ct(()=>{let o=n._environmentInjector,s=hi(r,o),a=_g(s)?s.canActivate(n,i):Ye(o,()=>s(n,i));return Mn(a).pipe(Wt())}));return N(t).pipe(di())}function Ig(i,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>hg(o)).filter(o=>o!==null).map(o=>Ct(()=>{let s=o.guards.map(a=>{let l=o.node._environmentInjector,d=hi(a,l),u=vg(d)?d.canActivateChild(e,i):Ye(l,()=>d(e,i));return Mn(u).pipe(Wt())});return N(s).pipe(di())}));return N(r).pipe(di())}function Rg(i,n,e,t){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return N(!0);let o=r.map(s=>{let a=n._environmentInjector,l=hi(s,a),d=bg(l)?l.canDeactivate(i,n,e,t):Ye(a,()=>l(i,n,e,t));return Mn(d).pipe(Wt())});return N(o).pipe(di())}function Tg(i,n,e,t,r){let o=n.canLoad;if(o===void 0||o.length===0)return N(!0);let s=o.map(a=>{let l=hi(a,i),d=gg(l)?l.canLoad(n,e):Ye(i,()=>l(n,e)),u=Mn(d);return r?u.pipe(Su(r)):u});return N(s).pipe(di(),Mu(t))}function Mu(i){return Nc(Re(n=>{if(typeof n!="boolean")throw Ho(i,n)}),V(n=>n===!0))}function kg(i,n,e,t,r,o){let s=n.canMatch;if(!s||s.length===0)return N(!0);let a=s.map(l=>{let d=hi(l,i),u=yg(d)?d.canMatch(n,e,r):Ye(i,()=>d(n,e,r));return Mn(u).pipe(Su(o))});return N(a).pipe(di(),Mu(t))}var At=class i extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,i.prototype)}},dr=class i extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,i.prototype)}};function Ag(i){throw new F(4e3,!1)}function Og(i){throw Du(!1,Ue.GuardRejected)}var al=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let t=[],r=e.root;for(;;){if(t=t.concat(r.segments),r.numberOfChildren===0)return t;if(r.numberOfChildren>1||!r.children[U])throw Ag(`${n.redirectTo}`);r=r.children[U]}}async applyRedirectCommands(n,e,t,r,o){let s=await Pg(e,r,o);if(s instanceof st)throw new dr(s);let a=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),n,t);if(s[0]==="/")throw new dr(a);return a}applyRedirectCreateUrlTree(n,e,t,r){let o=this.createSegmentGroup(n,e.root,t,r);return new st(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let t={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let a=o.substring(1);t[r]=e[a]}else t[r]=o}),t}createSegmentGroup(n,e,t,r){let o=this.createSegments(n,e.segments,t,r),s={};return Object.entries(e.children).forEach(([a,l])=>{s[a]=this.createSegmentGroup(n,l,t,r)}),new ne(o,s)}createSegments(n,e,t,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,t))}findPosParam(n,e,t){let r=t[e.path.substring(1)];if(!r)throw new F(4001,!1);return r}findOrReturn(n,e){let t=0;for(let r of e){if(r.path===n.path)return e.splice(t),r;t++}return n}};function Pg(i,n,e){if(typeof i=="string")return Promise.resolve(i);let t=i;return Io(Mn(Ye(e,()=>t(n))))}function Fg(i,n){return i.providers&&!i._injector&&(i._injector=ba(i.providers,n,`Route: ${i.path}`)),i._injector??n}function bt(i){return i.outlet||U}function Ng(i,n){let e=i.filter(t=>bt(t)===n);return e.push(...i.filter(t=>bt(t)!==n)),e}var ll={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Iu(i){return{routeConfig:i.routeConfig,url:i.url,params:i.params,queryParams:i.queryParams,fragment:i.fragment,data:i.data,outlet:i.outlet,title:i.title,paramMap:i.paramMap,queryParamMap:i.queryParamMap}}function Lg(i,n,e,t,r,o,s){let a=Ru(i,n,e);if(!a.matched)return N(a);let l=Iu(o(a));return t=Fg(n,t),kg(t,n,e,r,l,s).pipe(V(d=>d===!0?a:f({},ll)))}function Ru(i,n,e){if(n.path==="")return n.pathMatch==="full"&&(i.hasChildren()||e.length>0)?f({},ll):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||Jd)(e,i,n);if(!r)return f({},ll);let o={};Object.entries(r.posParams??{}).forEach(([a,l])=>{o[a]=l.path});let s=r.consumed.length>0?f(f({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:s,positionalParamSegments:r.posParams??{}}}function Xd(i,n,e,t,r){return e.length>0&&jg(i,e,t,r)?{segmentGroup:new ne(n,Bg(t,new ne(e,i.children))),slicedSegments:[]}:e.length===0&&zg(i,e,t)?{segmentGroup:new ne(i.segments,Vg(i,e,t,i.children)),slicedSegments:e}:{segmentGroup:new ne(i.segments,i.children),slicedSegments:e}}function Vg(i,n,e,t){let r={};for(let o of e)if(qo(i,n,o)&&!t[bt(o)]){let s=new ne([],{});r[bt(o)]=s}return f(f({},t),r)}function Bg(i,n){let e={};e[U]=n;for(let t of i)if(t.path===""&&bt(t)!==U){let r=new ne([],{});e[bt(t)]=r}return e}function jg(i,n,e,t){return e.some(r=>!qo(i,n,r)||!(bt(r)!==U)?!1:!(t!==void 0&&bt(r)===t))}function zg(i,n,e){return e.some(t=>qo(i,n,t))}function qo(i,n,e){return(i.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function Ug(i,n,e){return n.length===0&&!i.children[e]}var cl=class{};async function Hg(i,n,e,t,r,o,s="emptyOnly",a){return new dl(i,n,e,t,r,s,o,a).recognize()}var $g=31,dl=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,t,r,o,s,a,l){this.injector=n,this.configLoader=e,this.rootComponentType=t,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.abortSignal=l,this.applyRedirects=new al(this.urlSerializer,this.urlTree)}noMatchError(n){return new F(4002,`'${n.segmentGroup}'`)}async recognize(){let n=Xd(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:t}=await this.match(n),r=new Qe(t,e),o=new lr("",r),s=uu(t,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}}async match(n){let e=new li([],Object.freeze({}),Object.freeze(f({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),U,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,U,e),rootSnapshot:e}}catch(t){if(t instanceof dr)return this.urlTree=t.urlTree,this.match(t.urlTree.root);throw t instanceof At?this.noMatchError(t):t}}async processSegmentGroup(n,e,t,r,o){if(t.segments.length===0&&t.hasChildren())return this.processChildren(n,e,t,o);let s=await this.processSegment(n,e,t,t.segments,r,!0,o);return s instanceof Qe?[s]:[]}async processChildren(n,e,t,r){let o=[];for(let l of Object.keys(t.children))l==="primary"?o.unshift(l):o.push(l);let s=[];for(let l of o){let d=t.children[l],u=Ng(e,l),g=await this.processSegmentGroup(n,u,d,l,r);s.push(...g)}let a=Tu(s);return Gg(a),a}async processSegment(n,e,t,r,o,s,a){for(let l of e)try{return await this.processSegmentAgainstRoute(l._injector??n,e,l,t,r,o,s,a)}catch(d){if(d instanceof At||Eu(d))continue;throw d}if(Ug(t,r,o))return new cl;throw new At(t)}async processSegmentAgainstRoute(n,e,t,r,o,s,a,l){if(bt(t)!==s&&(s===U||!qo(r,o,t)))throw new At(r);if(t.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,t,o,s,l);if(this.allowRedirects&&a)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,t,o,s,l);throw new At(r)}async expandSegmentAgainstRouteUsingRedirect(n,e,t,r,o,s,a){let{matched:l,parameters:d,consumedSegments:u,positionalParamSegments:g,remainingSegments:C}=Ru(e,r,o);if(!l)throw new At(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>$g&&(this.allowRedirects=!1));let Y=this.createSnapshot(n,r,o,d,a);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let W=await this.applyRedirects.applyRedirectCommands(u,r.redirectTo,g,Iu(Y),n),q=await this.applyRedirects.lineralizeSegments(r,W);return this.processSegment(n,t,e,q.concat(C),s,!1,a)}createSnapshot(n,e,t,r,o){let s=new li(t,r,Object.freeze(f({},this.urlTree.queryParams)),this.urlTree.fragment,qg(e),bt(e),e.component??e._loadedComponent??null,e,Yg(e),n),a=ul(s,o,this.paramsInheritanceStrategy);return s.params=Object.freeze(a.params),s.data=Object.freeze(a.data),s}async matchSegmentAgainstRoute(n,e,t,r,o,s){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let a=Te=>this.createSnapshot(n,t,Te.consumedSegments,Te.parameters,s),l=await Io(Lg(e,t,r,n,this.urlSerializer,a,this.abortSignal));if(t.path==="**"&&(e.children={}),!l?.matched)throw new At(e);n=t._injector??n;let{routes:d}=await this.getChildConfig(n,t,r),u=t._loadedInjector??n,{parameters:g,consumedSegments:C,remainingSegments:Y}=l,W=this.createSnapshot(n,t,C,g,s),{segmentGroup:q,slicedSegments:T}=Xd(e,C,Y,d,o);if(T.length===0&&q.hasChildren()){let Te=await this.processChildren(u,d,q,W);return new Qe(W,Te)}if(d.length===0&&T.length===0)return new Qe(W,[]);let K=bt(t)===o,ue=await this.processSegment(u,d,q,T,K?U:o,!0,W);return new Qe(W,ue instanceof Qe?[ue]:[])}async getChildConfig(n,e,t){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Io(Tg(n,e,t,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw Og(e)}return{routes:[],injector:n}}};function Gg(i){i.sort((n,e)=>n.value.outlet===U?-1:e.value.outlet===U?1:n.value.outlet.localeCompare(e.value.outlet))}function Wg(i){let n=i.value.routeConfig;return n&&n.path===""}function Tu(i){let n=[],e=new Set;for(let t of i){if(!Wg(t)){n.push(t);continue}let r=n.find(o=>t.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...t.children),e.add(r)):n.push(t)}for(let t of e){let r=Tu(t.children);n.push(new Qe(t.value,r))}return n.filter(t=>!e.has(t))}function qg(i){return i.data||{}}function Yg(i){return i.resolve||{}}function Kg(i,n,e,t,r,o,s){return $t(async a=>{let{state:l,tree:d}=await Hg(i,n,e,t,a.extractedUrl,r,o,s);return $(f({},a),{targetSnapshot:l,urlAfterRedirects:d})})}function Zg(i){return $t(n=>{let{targetSnapshot:e,guards:{canActivateChecks:t}}=n;if(!t.length)return N(n);let r=new Set(t.map(a=>a.route)),o=new Set;for(let a of r)if(!o.has(a))for(let l of ku(a))o.add(l);let s=0;return qe(o).pipe(Bi(a=>r.has(a)?Xg(a,e,i):(a.data=ul(a,a.parent,i).resolve,N(void 0))),Re(()=>s++),fa(1),$t(a=>s===o.size?N(n):We))})}function ku(i){let n=i.children.map(e=>ku(e)).flat();return[i,...n]}function Xg(i,n,e){let t=i.routeConfig,r=i._resolve;return t?.title!==void 0&&!bu(t)&&(r[ur]=t.title),Ct(()=>(i.data=ul(i,i.parent,e).resolve,Qg(r,i,n).pipe(V(o=>(i._resolvedData=o,i.data=f(f({},i.data),o),null)))))}function Qg(i,n,e){let t=Xa(i);if(t.length===0)return N({});let r={};return qe(t).pipe($t(o=>Jg(i[o],n,e).pipe(Wt(),Re(s=>{if(s instanceof ci)throw Ho(new rn,s);r[o]=s}))),fa(1),V(()=>r),Vi(o=>Eu(o)?We:Zr(o)))}function Jg(i,n,e){let t=n._environmentInjector,r=hi(i,t),o=r.resolve?r.resolve(n,e):Ye(t,()=>r(n,e));return Mn(o)}function Qd(i){return he(n=>{let e=i(n);return e?qe(e).pipe(V(()=>n)):N(n)})}var pl=(()=>{class i{buildTitle(e){let t,r=e.root;for(;r!==void 0;)t=this.getResolvedTitleForRoute(r)??t,r=r.children.find(o=>o.outlet===U);return t}getResolvedTitleForRoute(e){return e.data[ur]}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:()=>c(Au),providedIn:"root"})}return i})(),Au=(()=>{class i extends pl{title;constructor(e){super(),this.title=e}updateTitle(e){let t=this.buildTitle(e);t!==void 0&&this.title.setTitle(t)}static \u0275fac=function(t){return new(t||i)(O($d))};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),pr=new b("",{factory:()=>({})}),gr=new b(""),Ou=(()=>{class i{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=c(md);async loadComponent(e,t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Promise.resolve(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let r=(async()=>{try{let o=await tu(Ye(e,()=>t.loadComponent())),s=await Nu(Fu(o));return this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=s,s}finally{this.componentLoaders.delete(t)}})();return this.componentLoaders.set(t,r),r}loadChildren(e,t){if(this.childrenLoaders.get(t))return this.childrenLoaders.get(t);if(t._loadedRoutes)return Promise.resolve({routes:t._loadedRoutes,injector:t._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(t);let r=(async()=>{try{let o=await Pu(t,this.compiler,e,this.onLoadEndListener);return t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(t)}})();return this.childrenLoaders.set(t,r),r}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();async function Pu(i,n,e,t){let r=await tu(Ye(e,()=>i.loadChildren())),o=await Nu(Fu(r)),s;o instanceof od||Array.isArray(o)?s=o:s=await n.compileModuleAsync(o),t&&t(i);let a,l,d=!1,u;return Array.isArray(s)?(l=s,d=!0):(a=s.create(e).injector,u=s,l=a.get(gr,[],{optional:!0,self:!0}).flat()),{routes:l.map(fl),injector:a,factory:u}}function e_(i){return i&&typeof i=="object"&&"default"in i}function Fu(i){return e_(i)?i.default:i}async function Nu(i){return i}var Yo=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:()=>c(t_),providedIn:"root"})}return i})(),t_=(()=>{class i{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Lu=new b("");var n_=()=>{},Vu=new b(""),Bu=(()=>{class i{currentNavigation=Z(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=Z(null);events=new y;transitionAbortWithErrorSubject=new y;configLoader=c(Ou);environmentInjector=c(Be);destroyRef=c(Wn);urlSerializer=c(hr);rootContexts=c(ui);location=c(en);inputBindingEnabled=c(Wo,{optional:!0})!==null;titleStrategy=c(pl);options=c(pr,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=c(Yo);createViewTransition=c(Lu,{optional:!0});navigationErrorHandler=c(Vu,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>N(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new Fo(r)),t=r=>this.events.next(new No(r));this.configLoader.onLoadEndListener=t,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let t=++this.navigationId;Oe(()=>{this.transitions?.next($(f({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:t,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new Ve(null),this.transitions.pipe(ie(t=>t!==null),he(t=>{let r=!1,o=new AbortController,s=()=>!r&&this.currentTransition?.id===t.id;return N(t).pipe(he(a=>{if(this.navigationId>t.id)return this.cancelNavigationTransition(t,"",Ue.SupersededByNewNavigation),We;this.currentTransition=t;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl=="string"?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:l?$(f({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:a.routesRecognizeHandler,beforeActivateHandler:a.beforeActivateHandler});let d=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=a.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!d&&u!=="reload")return this.events.next(new Pt(a.id,this.urlSerializer.serialize(a.rawUrl),"",rr.IgnoredSameUrlNavigation)),a.resolve(!1),We;if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return N(a).pipe(he(g=>(this.events.next(new xn(g.id,this.urlSerializer.serialize(g.extractedUrl),g.source,g.restoredState)),g.id!==this.navigationId?We:Promise.resolve(g))),Kg(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),Re(g=>{t.targetSnapshot=g.targetSnapshot,t.urlAfterRedirects=g.urlAfterRedirects,this.currentNavigation.update(C=>(C.finalUrl=g.urlAfterRedirects,C)),this.events.next(new sr)}),he(g=>qe(t.routesRecognizeHandler.deferredHandle??N(void 0)).pipe(V(()=>g))),Re(()=>{let g=new or(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(g)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:g,extractedUrl:C,source:Y,restoredState:W,extras:q}=a,T=new xn(g,this.urlSerializer.serialize(C),Y,W);this.events.next(T);let K=_u(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=t=$(f({},a),{targetSnapshot:K,urlAfterRedirects:C,extras:$(f({},q),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(ue=>(ue.finalUrl=C,ue)),N(t)}else return this.events.next(new Pt(a.id,this.urlSerializer.serialize(a.extractedUrl),"",rr.IgnoredByUrlHandlingStrategy)),a.resolve(!1),We}),V(a=>{let l=new ko(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);return this.events.next(l),this.currentTransition=t=$(f({},a),{guards:ug(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),t}),Dg(a=>this.events.next(a)),he(a=>{if(t.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!="boolean")throw Ho(this.urlSerializer,a.guardsResult);let l=new Ao(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);if(this.events.next(l),!s())return We;if(!a.guardsResult)return this.cancelNavigationTransition(a,"",Ue.GuardRejected),We;if(a.guards.canActivateChecks.length===0)return N(a);let d=new Oo(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);if(this.events.next(d),!s())return We;let u=!1;return N(a).pipe(Zg(this.paramsInheritanceStrategy),Re({next:()=>{u=!0;let g=new Po(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(g)},complete:()=>{u||this.cancelNavigationTransition(a,"",Ue.NoDataFromResolver)}}))}),Qd(a=>{let l=u=>{let g=[];if(u.routeConfig?._loadedComponent)u.component=u.routeConfig?._loadedComponent;else if(u.routeConfig?.loadComponent){let C=u._environmentInjector;g.push(this.configLoader.loadComponent(C,u.routeConfig).then(Y=>{u.component=Y}))}for(let C of u.children)g.push(...l(C));return g},d=l(a.targetSnapshot.root);return d.length===0?N(a):qe(Promise.all(d).then(()=>a))}),Qd(()=>this.afterPreactivation()),he(()=>{let{currentSnapshot:a,targetSnapshot:l}=t,d=this.createViewTransition?.(this.environmentInjector,a.root,l.root);return d?qe(d).pipe(V(()=>t)):N(t)}),ae(1),he(a=>{let l=ag(e.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);this.currentTransition=t=a=$(f({},a),{targetRouterState:l}),this.currentNavigation.update(u=>(u.targetRouterState=l,u)),this.events.next(new si);let d=t.beforeActivateHandler.deferredHandle;return d?qe(d.then(()=>a)):N(a)}),Re(a=>{new sl(e.routeReuseStrategy,t.targetRouterState,t.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),s()&&(r=!0,this.currentNavigation.update(l=>(l.abort=n_,l)),this.lastSuccessfulNavigation.set(Oe(this.currentNavigation)),this.events.next(new Ot(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0))}),X(xu(o.signal).pipe(ie(()=>!r&&!t.targetRouterState),Re(()=>{this.cancelNavigationTransition(t,o.signal.reason+"",Ue.Aborted)}))),Re({complete:()=>{r=!0}}),X(this.transitionAbortWithErrorSubject.pipe(Re(a=>{throw a}))),Gn(()=>{o.abort(),r||this.cancelNavigationTransition(t,"",Ue.SupersededByNewNavigation),this.currentTransition?.id===t.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Vi(a=>{if(r=!0,this.destroyed)return t.resolve(!1),We;if(Cu(a))this.events.next(new ot(t.id,this.urlSerializer.serialize(t.extractedUrl),a.message,a.cancellationCode)),dg(a)?this.events.next(new ai(a.url,a.navigationBehaviorOptions)):t.resolve(!1);else{let l=new Sn(t.id,this.urlSerializer.serialize(t.extractedUrl),a,t.targetSnapshot??void 0);try{let d=Ye(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(d instanceof ci){let{message:u,cancellationCode:g}=Ho(this.urlSerializer,d);this.events.next(new ot(t.id,this.urlSerializer.serialize(t.extractedUrl),u,g)),this.events.next(new ai(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(l),a}catch(d){this.options.resolveNavigationPromiseOnError?t.resolve(!1):t.reject(d)}}return We}))}))}cancelNavigationTransition(e,t,r){let o=new ot(e.id,this.urlSerializer.serialize(e.extractedUrl),t,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),t=Oe(this.currentNavigation),r=t?.targetBrowserUrl??t?.extractedUrl;return e.toString()!==r?.toString()&&!t?.extras.skipLocationChange}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function i_(i){return i!==tr}var ju=new b("");var zu=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:()=>c(r_),providedIn:"root"})}return i})(),Go=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},r_=(()=>{class i extends Go{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ke(i)))(r||i)}})();static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),gl=(()=>{class i{urlSerializer=c(hr);options=c(pr,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=c(en);urlHandlingStrategy=c(Yo);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new st;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:t,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,t):t,s=r??o;return s instanceof st?this.urlSerializer.serialize(s):s}commitTransition({targetRouterState:e,finalUrl:t,initialUrl:r}){t&&e?(this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(t,r),this.routerState=e):this.rawUrlTree=r}routerState=_u(null,c(Be));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:()=>c(o_),providedIn:"root"})}return i})(),o_=(()=>{class i extends gl{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(t=>{t.type==="popstate"&&setTimeout(()=>{e(t.url,t.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,t){e instanceof xn?this.updateStateMemento():e instanceof Pt?this.commitTransition(t):e instanceof or?this.urlUpdateStrategy==="eager"&&(t.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof si?(this.commitTransition(t),this.urlUpdateStrategy==="deferred"&&!t.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof ot&&!gu(e)?this.restoreHistory(t):e instanceof Sn?this.restoreHistory(t,!0):e instanceof Ot&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,{extras:t,id:r}){let{replaceUrl:o,state:s}=t;if(this.location.isCurrentPathEqualTo(e)||o){let a=this.browserPageId,l=f(f({},s),this.generateNgRouterState(r,a));this.location.replaceState(e,"",l)}else{let a=f(f({},s),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(e,"",a)}}restoreHistory(e,t=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(t&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,t){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:t}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ke(i)))(r||i)}})();static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function _l(i,n){i.events.pipe(ie(e=>e instanceof Ot||e instanceof ot||e instanceof Sn||e instanceof Pt),V(e=>e instanceof Ot||e instanceof Pt?0:(e instanceof ot?e.code===Ue.Redirect||e.code===Ue.SupersededByNewNavigation:!1)?2:1),ie(e=>e!==2),ae(1)).subscribe(()=>{n()})}var Ko=(()=>{class i{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=c(wa);stateManager=c(gl);options=c(pr,{optional:!0})||{};pendingTasks=c(Hc);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=c(Bu);urlSerializer=c(hr);location=c(en);urlHandlingStrategy=c(Yo);injector=c(Be);_events=new y;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=c(zu);injectorCleanup=c(ju,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=c(gr,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!c(Wo,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new ge;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(t=>{try{let r=this.navigationTransitions.currentTransition,o=Oe(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(t,o),t instanceof ot&&t.code!==Ue.Redirect&&t.code!==Ue.SupersededByNewNavigation)this.navigated=!0;else if(t instanceof Ot)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(t instanceof ai){let s=t.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(t.url,r.currentRawUrl),l=f({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||i_(r.source)},s);this.scheduleNavigation(a,tr,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}og(t)&&this._events.next(t)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),tr,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,t,r,o)=>{this.navigateToSyncWithBrowser(e,r,t,o)})}navigateToSyncWithBrowser(e,t,r,o){let s=r?.navigationId?r:null;if(r){let l=f({},r);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(o.state=l)}let a=this.parseUrl(e);this.scheduleNavigation(a,t,s,o).catch(l=>{this.disposed||this.injector.get(ro)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Oe(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(fl),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,t={}){let{relativeTo:r,queryParams:o,fragment:s,queryParamsHandling:a,preserveFragment:l}=t,d=l?this.currentUrlTree.fragment:s,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=f(f({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let g;try{let C=r?r.snapshot:this.routerState.snapshot.root;g=hu(C)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),g=this.currentUrlTree.root}return mu(g,e,u,d??null,this.urlSerializer)}navigateByUrl(e,t={skipLocationChange:!1}){let r=oi(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,tr,null,t)}navigate(e,t={skipLocationChange:!1}){return s_(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(pn(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,t){let r;if(t===!0?r=f({},iu):t===!1?r=f({},Qa):r=f(f({},Qa),t),oi(e))return Wd(this.currentUrlTree,e,r);let o=this.parseUrl(e);return Wd(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((t,[r,o])=>(o!=null&&(t[r]=o),t),{})}scheduleNavigation(e,t,r,o,s){if(this.disposed)return Promise.resolve(!1);let a,l,d;s?(a=s.resolve,l=s.reject,d=s.promise):d=new Promise((g,C)=>{a=g,l=C});let u=this.pendingTasks.add();return _l(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:t,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:a,reject:l,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function s_(i){for(let n=0;n<i.length;n++)if(i[n]==null)throw new F(4008,!1)}var c_=new b("");function vl(i,...n){return Yt([{provide:gr,multi:!0,useValue:i},[],{provide:on,useFactory:d_},{provide:ad,multi:!0,useFactory:u_},n.map(e=>e.\u0275providers)])}function d_(){return c(Ko).routerState.root}function u_(){let i=c(B);return n=>{let e=i.get(tt);if(n!==e.components[0])return;let t=i.get(Ko),r=i.get(h_);i.get(m_)===1&&t.initialNavigation(),i.get(f_,null,{optional:!0})?.setUpPreloading(),i.get(c_,null,{optional:!0})?.init(),t.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var h_=new b("",{factory:()=>new y}),m_=new b("",{factory:()=>1});var f_=new b("");var g_="@",__=(()=>{class i{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=c(B);loadingSchedulerFn=c(v_,{optional:!0});_engine;constructor(e,t,r,o,s){this.doc=e,this.delegate=t,this.zone=r,this.animationType=o,this.moduleImpl=s}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-OTXSTSCU.js").then(r=>r),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(r=>{throw new F(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:o})=>{this._engine=r(this.animationType,this.doc);let s=new o(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(e,t){let r=this.delegate.createRenderer(e,t);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let o=new bl(r);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(s=>{let a=s.createRenderer(e,t);o.use(a),this.scheduler??=this.injector.get(Gc,null,{optional:!0}),this.scheduler?.notify(10)}).catch(s=>{o.use(r)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(t){rd()};static \u0275prov=_({token:i,factory:i.\u0275fac})}return i})(),bl=class{delegate;replay=[];\u0275type=1;constructor(n){this.delegate=n}use(n){if(this.delegate=n,this.replay!==null){for(let e of this.replay)e(n);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(n,e){return this.delegate.createElement(n,e)}createComment(n){return this.delegate.createComment(n)}createText(n){return this.delegate.createText(n)}get destroyNode(){return this.delegate.destroyNode}appendChild(n,e){this.delegate.appendChild(n,e)}insertBefore(n,e,t,r){this.delegate.insertBefore(n,e,t,r)}removeChild(n,e,t,r){this.delegate.removeChild(n,e,t,r)}selectRootElement(n,e){return this.delegate.selectRootElement(n,e)}parentNode(n){return this.delegate.parentNode(n)}nextSibling(n){return this.delegate.nextSibling(n)}setAttribute(n,e,t,r){this.delegate.setAttribute(n,e,t,r)}removeAttribute(n,e,t){this.delegate.removeAttribute(n,e,t)}addClass(n,e){this.delegate.addClass(n,e)}removeClass(n,e){this.delegate.removeClass(n,e)}setStyle(n,e,t,r){this.delegate.setStyle(n,e,t,r)}removeStyle(n,e,t){this.delegate.removeStyle(n,e,t)}setProperty(n,e,t){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(n,e,t)),this.delegate.setProperty(n,e,t)}setValue(n,e){this.delegate.setValue(n,e)}listen(n,e,t,r){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(n,e,t,r)),this.delegate.listen(n,e,t,r)}shouldReplay(n){return this.replay!==null&&n.startsWith(g_)}},v_=new b("");function Uu(i="animations"){return va("NgAsyncAnimations"),Yt([{provide:Ce,useFactory:()=>new __(c(I),c(qi),c(R),i)},{provide:Yn,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}function In(i){return i.buttons===0||i.detail===0}function Rn(i){let n=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var yl;function Hu(){if(yl==null){let i=typeof document<"u"?document.head:null;yl=!!(i&&(i.createShadowRoot||i.attachShadow))}return yl}function Tn(i){if(Hu()){let n=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function _r(){let i=typeof document<"u"&&document?document.activeElement:null;for(;i&&i.shadowRoot;){let n=i.shadowRoot.activeElement;if(n===i)break;i=n}return i}function ve(i){return i.composedPath?i.composedPath()[0]:i.target}var wl;try{wl=typeof Intl<"u"&&Intl.v8BreakIterator}catch{wl=!1}var J=(()=>{class i{_platformId=c(qn);isBrowser=this._platformId?Md(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||wl)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var vr;function $u(){if(vr==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>vr=!0}))}finally{vr=vr||!1}return vr}function mi(i){return $u()?i:!!i.capture}function at(i,n=0){return Gu(i)?Number(i):arguments.length===2?n:0}function Gu(i){return!isNaN(parseFloat(i))&&!isNaN(Number(i))}function be(i){return i instanceof P?i.nativeElement:i}var Wu=new b("cdk-input-modality-detector-options"),qu={ignoreKeys:[18,17,224,91,16]},Yu=650,Dl={passive:!0,capture:!0},Ku=(()=>{class i{_platform=c(J);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Ve(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=ve(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Yu||(this._modality.next(In(e)?"keyboard":"mouse"),this._mostRecentTarget=ve(e))};_onTouchstart=e=>{if(Rn(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=ve(e)};constructor(){let e=c(R),t=c(I),r=c(Wu,{optional:!0});if(this._options=f(f({},qu),r),this.modalityDetected=this._modality.pipe(no(1)),this.modalityChanged=this.modalityDetected.pipe(ma()),this._platform.isBrowser){let o=c(Ce).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(t,"keydown",this._onKeydown,Dl),o.listen(t,"mousedown",this._onMousedown,Dl),o.listen(t,"touchstart",this._onTouchstart,Dl)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),br=(function(i){return i[i.IMMEDIATE=0]="IMMEDIATE",i[i.EVENTUAL=1]="EVENTUAL",i})(br||{}),Zu=new b("cdk-focus-monitor-default-options"),Zo=mi({passive:!0,capture:!0}),Ft=(()=>{class i{_ngZone=c(R);_platform=c(J);_inputModalityDetector=c(Ku);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=c(I);_stopInputModalityDetector=new y;constructor(){let e=c(Zu,{optional:!0});this._detectionMode=e?.detectionMode||br.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=ve(e);for(let r=t;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,t=!1){let r=be(e);if(!this._platform.isBrowser||r.nodeType!==1)return N();let o=Tn(r)||this._document,s=this._elementInfo.get(r);if(s)return t&&(s.checkChildren=!0),s.subject;let a={checkChildren:t,subject:new y,rootNode:o};return this._elementInfo.set(r,a),this._registerGlobalListeners(a),a.subject}stopMonitoring(e){let t=be(e),r=this._elementInfo.get(t);r&&(r.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(r))}focusVia(e,t,r){let o=be(e),s=this._document.activeElement;o===s?this._getClosestElementsInfo(o).forEach(([a,l])=>this._originChanged(a,t,l)):(this._setOrigin(t),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===br.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===br.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?Yu:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,t){let r=this._elementInfo.get(t),o=ve(e);!r||!r.checkChildren&&t!==o||this._originChanged(t,this._getFocusOrigin(o),r)}_onBlur(e,t){let r=this._elementInfo.get(t);!r||r.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(r,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,r=this._rootNodeFocusListenerCount.get(t)||0;r||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,Zo),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,Zo)}),this._rootNodeFocusListenerCount.set(t,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(X(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let r=this._rootNodeFocusListenerCount.get(t);r>1?this._rootNodeFocusListenerCount.set(t,r-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Zo),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Zo),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,r){this._setClasses(e,t),this._emitOrigin(r,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&t.push([o,r])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let s=0;s<o.length;s++)if(o[s].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Xo=new WeakMap,Me=(()=>{class i{_appRef;_injector=c(B);_environmentInjector=c(Be);load(e){let t=this._appRef=this._appRef||this._injector.get(tt),r=Xo.get(t);r||(r={loaders:new Set,refs:[]},Xo.set(t,r),t.onDestroy(()=>{Xo.get(t)?.refs.forEach(o=>o.destroy()),Xo.delete(t)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(co(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var fi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return i})(),Qo;function b_(){if(Qo===void 0&&(Qo=null,typeof window<"u")){let i=window;i.trustedTypes!==void 0&&(Qo=i.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return Qo}function kn(i){return b_()?.createHTML(i)||i}function Xu(i,n,e){let t=e.sanitize($e.HTML,n);i.innerHTML=kn(t||"")}function sn(i){return Array.isArray(i)?i:[i]}var Qu=new Set,An,pi=(()=>{class i{_platform=c(J);_nonce=c(Kn,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):w_}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&y_(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function y_(i,n){if(!Qu.has(i))try{An||(An=document.createElement("style"),n&&An.setAttribute("nonce",n),An.setAttribute("type","text/css"),document.head.appendChild(An)),An.sheet&&(An.sheet.insertRule(`@media ${i} {body{ }}`,0),Qu.add(i))}catch(e){console.error(e)}}function w_(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}var Cl=(()=>{class i{_mediaMatcher=c(pi);_zone=c(R);_queries=new Map;_destroySubject=new y;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Ju(sn(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=Ju(sn(e)).map(s=>this._registerQuery(s).observable),o=Qr(r);return o=Jr(o.pipe(ae(1)),o.pipe(no(1),to(0))),o.pipe(V(s=>{let a={matches:!1,breakpoints:{}};return s.forEach(({matches:l,query:d})=>{a.matches=a.matches||l,a.breakpoints[d]=l}),a}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),o={observable:new Ne(s=>{let a=l=>this._zone.run(()=>s.next(l));return t.addListener(a),()=>{t.removeListener(a)}}).pipe(Le(t),V(({matches:s})=>({query:e,matches:s})),X(this._destroySubject)),mql:t};return this._queries.set(e,o),o}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Ju(i){return i.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}var D_=(()=>{class i{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Jo=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=A({type:i});static \u0275inj=k({providers:[D_]})}return i})();var Sl=(()=>{class i{_platform=c(J);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return E_(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=C_(A_(e));if(t&&(eh(t)===-1||!this.isVisible(t)))return!1;let r=e.nodeName.toLowerCase(),o=eh(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!T_(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,t){return k_(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function C_(i){try{return i.frameElement}catch{return null}}function E_(i){return!!(i.offsetWidth||i.offsetHeight||typeof i.getClientRects=="function"&&i.getClientRects().length)}function x_(i){let n=i.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function S_(i){return I_(i)&&i.type=="hidden"}function M_(i){return R_(i)&&i.hasAttribute("href")}function I_(i){return i.nodeName.toLowerCase()=="input"}function R_(i){return i.nodeName.toLowerCase()=="a"}function ih(i){if(!i.hasAttribute("tabindex")||i.tabIndex===void 0)return!1;let n=i.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function eh(i){if(!ih(i))return null;let n=parseInt(i.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function T_(i){let n=i.nodeName.toLowerCase(),e=n==="input"&&i.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function k_(i){return S_(i)?!1:x_(i)||M_(i)||i.hasAttribute("contenteditable")||ih(i)}function A_(i){return i.ownerDocument&&i.ownerDocument.defaultView||window}var xl=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,t,r,o=!1,s){this._element=n,this._checker=e,this._ngZone=t,this._document=r,this._injector=s,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let t=this._getFirstTabbableElement(e);return t?.focus(n),!!t}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let t=0;t<e.length;t++){let r=e[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[t]):null;if(r)return r}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let t=e.length-1;t>=0;t--){let r=e[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[t]):null;if(r)return r}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?je(n,{injector:this._injector}):setTimeout(n)}},Ml=(()=>{class i{_checker=c(Sl);_ngZone=c(R);_document=c(I);_injector=c(B);constructor(){c(Me).load(fi)}create(e,t=!1){return new xl(e,this._checker,this._ngZone,this._document,t,this._injector)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var rh=new b("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),oh=new b("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),O_=0,Il=(()=>{class i{_ngZone=c(R);_defaultOptions=c(oh,{optional:!0});_liveElement;_document=c(I);_sanitizer=c(Xi);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=c(rh,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let r=this._defaultOptions,o,s;return t.length===1&&typeof t[0]=="number"?s=t[0]:[o,s]=t,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),s==null&&r&&(s=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(a=>this._currentResolve=a)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:Xu(this._liveElement,e,this._sanitizer),typeof s=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),s)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<t.length;o++)t[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${O_++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<t.length;r++){let o=t[r],s=o.getAttribute("aria-owns");s?s.indexOf(e)===-1&&o.setAttribute("aria-owns",s+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var an=(function(i){return i[i.NONE=0]="NONE",i[i.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",i[i.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",i})(an||{}),th="cdk-high-contrast-black-on-white",nh="cdk-high-contrast-white-on-black",El="cdk-high-contrast-active",sh=(()=>{class i{_platform=c(J);_hasCheckedHighContrastMode=!1;_document=c(I);_breakpointSubscription;constructor(){this._breakpointSubscription=c(Cl).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return an.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let t=this._document.defaultView||window,r=t&&t.getComputedStyle?t.getComputedStyle(e):null,o=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return an.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return an.BLACK_ON_WHITE}return an.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(El,th,nh),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===an.BLACK_ON_WHITE?e.add(El,th):t===an.WHITE_ON_BLACK&&e.add(El,nh)}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),yr=(()=>{class i{constructor(){c(sh)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(t){return new(t||i)};static \u0275mod=A({type:i});static \u0275inj=k({imports:[Jo]})}return i})();var P_=200,es=class{_letterKeyStream=new y;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new y;selectedItem=this._selectedItem;constructor(n,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:P_;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(Re(e=>this._pressedLetters.push(e)),to(n),ie(()=>this._pressedLetters.length>0),V(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let r=(this._selectedItemIndex+t)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function He(i,...n){return n.length?n.some(e=>i[e]):i.altKey||i.shiftKey||i.ctrlKey||i.metaKey}var ts=class{_items;_activeItemIndex=Z(-1);_activeItem=Z(null);_wrap=!1;_typeaheadSubscription=ge.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof _a?this._itemChangesSubscription=n.changes.subscribe(t=>this._itemsChanged(t.toArray())):Kt(n)&&(this._effectRef=_n(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new y;change=new y;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new es(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(o<s?o:s-1,-1);break}else return;default:(r||He(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),t=typeof n=="number"?n:e.indexOf(n),r=e[t];this._activeItem.set(r??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let r=(this._activeItemIndex()+n*t+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let t=this._getItemsArray();if(t[n]){for(;this._skipPredicateFn(t[n]);)if(n+=e,!t[n])return;this.setActiveItem(n)}}_getItemsArray(){return Kt(this._items)?this._items():this._items instanceof _a?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let t=n.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var wr=class extends ts{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var kl={},de=class i{_appId=c(vn);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),kl.hasOwnProperty(n)||(kl[n]=0),`${n}${e?i._infix+"-":""}${kl[n]++}`}static \u0275fac=function(e){return new(e||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})};var uh=" ";function Pl(i,n,e){let t=is(i,n);e=e.trim(),!t.some(r=>r.trim()===e)&&(t.push(e),i.setAttribute(n,t.join(uh)))}function rs(i,n,e){let t=is(i,n);e=e.trim();let r=t.filter(o=>o!==e);r.length?i.setAttribute(n,r.join(uh)):i.removeAttribute(n)}function is(i,n){return i.getAttribute(n)?.match(/\S+/g)??[]}var hh="cdk-describedby-message",ns="cdk-describedby-host",Ol=0,mh=(()=>{class i{_platform=c(J);_document=c(I);_messageRegistry=new Map;_messagesContainer=null;_id=`${Ol++}`;constructor(){c(Me).load(fi),this._id=c(vn)+"-"+Ol++}describe(e,t,r){if(!this._canBeDescribed(e,t))return;let o=Al(t,r);typeof t!="string"?(dh(t,this._id),this._messageRegistry.set(o,{messageElement:t,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(t,r),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,t,r){if(!t||!this._isElementNode(e))return;let o=Al(t,r);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof t=="string"){let s=this._messageRegistry.get(o);s&&s.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${ns}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(ns);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){let r=this._document.createElement("div");dh(r,this._id),r.textContent=e,t&&r.setAttribute("role",t),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(Al(e,t),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<t.length;o++)t[o].remove();let r=this._document.createElement("div");r.style.visibility="hidden",r.classList.add(e),r.classList.add("cdk-visually-hidden"),this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(e){let t=is(e,"aria-describedby").filter(r=>r.indexOf(hh)!=0);e.setAttribute("aria-describedby",t.join(" "))}_addMessageReference(e,t){let r=this._messageRegistry.get(t);Pl(e,"aria-describedby",r.messageElement.id),e.setAttribute(ns,this._id),r.referenceCount++}_removeMessageReference(e,t){let r=this._messageRegistry.get(t);r.referenceCount--,rs(e,"aria-describedby",r.messageElement.id),e.removeAttribute(ns)}_isElementDescribedByMessage(e,t){let r=is(e,"aria-describedby"),o=this._messageRegistry.get(t),s=o&&o.messageElement.id;return!!s&&r.indexOf(s)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&typeof t=="object")return!0;let r=t==null?"":`${t}`.trim(),o=e.getAttribute("aria-label");return r?!o||o.trim()!==r:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Al(i,n){return typeof i=="string"?`${n||""}/${i}`:i}function dh(i,n){i.id||(i.id=`${hh}-${n}-${Ol++}`)}var yt=(function(i){return i[i.NORMAL=0]="NORMAL",i[i.NEGATED=1]="NEGATED",i[i.INVERTED=2]="INVERTED",i})(yt||{}),os,On;function ss(){if(On==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return On=!1,On;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)On=!0;else{let i=Element.prototype.scrollTo;i?On=!/\{\s*\[native code\]\s*\}/.test(i.toString()):On=!1}}return On}function gi(){if(typeof document!="object"||!document)return yt.NORMAL;if(os==null){let i=document.createElement("div"),n=i.style;i.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),t=e.style;t.width="2px",t.height="1px",i.appendChild(e),document.body.appendChild(i),os=yt.NORMAL,i.scrollLeft===0&&(i.scrollLeft=1,os=i.scrollLeft===0?yt.NEGATED:yt.INVERTED),i.remove()}return os}function Fl(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var _i,fh=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Nl(){if(_i)return _i;if(typeof document!="object"||!document)return _i=new Set(fh),_i;let i=document.createElement("input");return _i=new Set(fh.filter(n=>(i.setAttribute("type",n),i.type===n))),_i}var F_=new b("MATERIAL_ANIMATIONS"),ph=null;function N_(){return c(F_,{optional:!0})?.animationsDisabled||c(Yn,{optional:!0})==="NoopAnimations"?"di-disabled":(ph??=c(pi).matchMedia("(prefers-reduced-motion)").matches,ph?"reduced-motion":"enabled")}function Ie(){return N_()!=="enabled"}function we(i){return i==null?"":typeof i=="string"?i:`${i}px`}function lt(i){return i!=null&&`${i}`!="false"}var ct=(function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i})(ct||{}),Ll=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=ct.HIDDEN;constructor(n,e,t,r=!1){this._renderer=n,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},gh=mi({passive:!0,capture:!0}),Vl=class{_events=new Map;addHandler(n,e,t,r){let o=this._events.get(e);if(o){let s=o.get(t);s?s.add(r):o.set(t,new Set([r]))}else this._events.set(e,new Map([[t,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,gh)})}removeHandler(n,e,t){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(t),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,gh)))}_delegateEventHandler=n=>{let e=ve(n);e&&this._events.get(n.type)?.forEach((t,r)=>{(r===e||r.contains(e))&&t.forEach(o=>o.handleEvent(n))})}},Dr={enterDuration:225,exitDuration:150},L_=800,_h=mi({passive:!0,capture:!0}),vh=["mousedown","touchstart"],bh=["mouseup","mouseleave","touchend","touchcancel"],V_=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return i})(),Cr=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Vl;constructor(n,e,t,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=be(t)),o&&o.get(Me).load(V_)}fadeInRipple(n,e,t={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=f(f({},Dr),t.animation);t.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let s=t.radius||B_(n,e,r),a=n-r.left,l=e-r.top,d=o.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${a-s}px`,u.style.top=`${l-s}px`,u.style.height=`${s*2}px`,u.style.width=`${s*2}px`,t.color!=null&&(u.style.backgroundColor=t.color),u.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(u);let g=window.getComputedStyle(u),C=g.transitionProperty,Y=g.transitionDuration,W=C==="none"||Y==="0s"||Y==="0s, 0s"||r.width===0&&r.height===0,q=new Ll(this,u,t,W);u.style.transform="scale3d(1, 1, 1)",q.state=ct.FADING_IN,t.persistent||(this._mostRecentTransientRipple=q);let T=null;return!W&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let K=()=>{T&&(T.fallbackTimer=null),clearTimeout(Te),this._finishRippleTransition(q)},ue=()=>this._destroyRipple(q),Te=setTimeout(ue,d+100);u.addEventListener("transitionend",K),u.addEventListener("transitioncancel",ue),T={onTransitionEnd:K,onTransitionCancel:ue,fallbackTimer:Te}}),this._activeRipples.set(q,T),(W||!d)&&this._finishRippleTransition(q),q}fadeOutRipple(n){if(n.state===ct.FADING_OUT||n.state===ct.HIDDEN)return;let e=n.element,t=f(f({},Dr),n.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",n.state=ct.FADING_OUT,(n._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=be(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,vh.forEach(t=>{i._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{bh.forEach(e=>{this._triggerElement.addEventListener(e,this,_h)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===ct.FADING_IN?this._startFadeOutTransition(n):n.state===ct.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:t}=n.config;n.state=ct.VISIBLE,!t&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=ct.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=In(n),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+L_;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!Rn(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===ct.VISIBLE||n.config.terminateOnPointerUp&&n.state===ct.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(vh.forEach(e=>i._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(bh.forEach(e=>n.removeEventListener(e,this,_h)),this._pointerUpEventsRegistered=!1))}};function B_(i,n,e){let t=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(t*t+r*r)}var Bl=new b("mat-ripple-global-options"),as=(()=>{class i{_elementRef=c(P);_animationsDisabled=Ie();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=c(R),t=c(J),r=c(Bl,{optional:!0}),o=c(B);this._globalOptions=r||{},this._rippleRenderer=new Cr(this,e,this._elementRef,t,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:f(f(f({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,f(f({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,f(f({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=E({type:i,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,r){t&2&&L("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return i})();var j_={capture:!0},z_=["focus","mousedown","mouseenter","touchstart"],jl="mat-ripple-loader-uninitialized",zl="mat-ripple-loader-class-name",yh="mat-ripple-loader-centered",ls="mat-ripple-loader-disabled",wh=(()=>{class i{_document=c(I);_animationsDisabled=Ie();_globalRippleOptions=c(Bl,{optional:!0});_platform=c(J);_ngZone=c(R);_injector=c(B);_eventCleanups;_hosts=new Map;constructor(){let e=c(Ce).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>z_.map(t=>e.listen(this._document,t,this._onInteraction,j_)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(jl,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(zl))&&e.setAttribute(zl,t.className||""),t.centered&&e.setAttribute(yh,""),t.disabled&&e.setAttribute(ls,"")}setDisabled(e,t){let r=this._hosts.get(e);r?(r.target.rippleDisabled=t,!t&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):t?e.setAttribute(ls,""):e.removeAttribute(ls)}_onInteraction=e=>{let t=ve(e);if(t instanceof HTMLElement){let r=t.closest(`[${jl}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(zl)),e.append(t);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Dr.enterDuration,s=this._animationsDisabled?0:r?.animation?.exitDuration??Dr.exitDuration,a={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(ls),rippleConfig:{centered:e.hasAttribute(yh),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:s}}},l=new Cr(a,this._ngZone,t,this._platform,this._injector),d=!a.rippleDisabled;d&&l.setupTriggerEvents(e),this._hosts.set(e,{target:a,renderer:l,hasSetUpEvents:d}),e.removeAttribute(jl)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var vi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var U_=["mat-icon-button",""],H_=["*"],$_=new b("MAT_BUTTON_CONFIG");function Dh(i){return i==null?void 0:Tt(i)}var Ul=(()=>{class i{_elementRef=c(P);_ngZone=c(R);_animationsDisabled=Ie();_config=c($_,{optional:!0});_focusMonitor=c(Ft);_cleanupClick;_renderer=c(ce);_rippleLoader=c(wh);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){c(Me).load(vi);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=E({type:i,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(t,r){t&2&&(oe("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),xt(r.color?"mat-"+r.color:""),L("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",j],disabled:[2,"disabled","disabled",j],ariaDisabled:[2,"aria-disabled","ariaDisabled",j],disabledInteractive:[2,"disabledInteractive","disabledInteractive",j],tabIndex:[2,"tabIndex","tabIndex",Dh],_tabindex:[2,"tabindex","_tabindex",Dh]}})}return i})(),Pn=(()=>{class i extends Ul{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[_e],attrs:U_,ngContentSelectors:H_,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(Ee(),Et(0,"span",0),Q(1),Et(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var G_=new b("cdk-dir-doc",{providedIn:"root",factory:()=>c(I)}),W_=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Ch(i){let n=i?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?W_.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var Fe=(()=>{class i{get value(){return this.valueSignal()}valueSignal=Z("ltr");change=new x;constructor(){let e=c(G_,{optional:!0});if(e){let t=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Ch(t||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var se=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=A({type:i});static \u0275inj=k({})}return i})();var cs=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=A({type:i});static \u0275inj=k({imports:[se]})}return i})();var q_=["matButton",""],Y_=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],K_=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var Eh=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Mt=(()=>{class i extends Ul{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=Z_(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,r=this._appearance?Eh.get(this._appearance):null,o=Eh.get(e);r&&t.remove(...r),t.add(...o),this._appearance=e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[_e],attrs:q_,ngContentSelectors:K_,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(Ee(Y_),Et(0,"span",0),Q(1),Rt(2,"span",1),Q(3,1),Zt(),Q(4,2),Et(5,"span",2)(6,"span",3)),t&2&&L("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();function Z_(i){return i.hasAttribute("mat-raised-button")?"elevated":i.hasAttribute("mat-stroked-button")?"outlined":i.hasAttribute("mat-flat-button")?"filled":i.hasAttribute("mat-button")?"text":null}var dt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=A({type:i});static \u0275inj=k({imports:[cs,se]})}return i})();function xh(i){return Error(`Unable to find icon with the name "${i}"`)}function X_(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Sh(i){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${i}".`)}function Mh(i){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${i}".`)}var Nt=class{url;svgText;options;svgElement=null;constructor(n,e,t){this.url=n,this.svgText=e,this.options=t}},Rh=(()=>{class i{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,r,o){this._httpClient=e,this._sanitizer=t,this._errorHandler=o,this._document=r}addSvgIcon(e,t,r){return this.addSvgIconInNamespace("",e,t,r)}addSvgIconLiteral(e,t,r){return this.addSvgIconLiteralInNamespace("",e,t,r)}addSvgIconInNamespace(e,t,r,o){return this._addSvgIconConfig(e,t,new Nt(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,r,o){let s=this._sanitizer.sanitize($e.HTML,r);if(!s)throw Mh(r);let a=kn(s);return this._addSvgIconConfig(e,t,new Nt("",a,o))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,r){return this._addSvgIconSetConfig(e,new Nt(t,null,r))}addSvgIconSetLiteralInNamespace(e,t,r){let o=this._sanitizer.sanitize($e.HTML,t);if(!o)throw Mh(t);let s=kn(o);return this._addSvgIconSetConfig(e,new Nt("",s,r))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize($e.RESOURCE_URL,e);if(!t)throw Sh(e);let r=this._cachedIconsByUrl.get(t);return r?N(ds(r)):this._loadSvgIconFromConfig(new Nt(e,null)).pipe(Re(o=>this._cachedIconsByUrl.set(t,o)),V(o=>ds(o)))}getNamedSvgIcon(e,t=""){let r=Ih(t,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(t,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let s=this._iconSetConfigs.get(t);return s?this._getSvgFromIconSetConfigs(e,s):Zr(xh(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?N(ds(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(V(t=>ds(t)))}_getSvgFromIconSetConfigs(e,t){let r=this._extractIconWithNameFromAnySet(e,t);if(r)return N(r);let o=t.filter(s=>!s.svgText).map(s=>this._loadSvgIconSetFromConfig(s).pipe(Vi(a=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize($e.RESOURCE_URL,s.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(d)),N(null)})));return eo(o).pipe(V(()=>{let s=this._extractIconWithNameFromAnySet(e,t);if(!s)throw xh(e);return s}))}_extractIconWithNameFromAnySet(e,t){for(let r=t.length-1;r>=0;r--){let o=t[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let s=this._svgElementFromConfig(o),a=this._extractSvgIconFromSet(s,e,o.options);if(a)return a}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(Re(t=>e.svgText=t),V(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?N(null):this._fetchIcon(e).pipe(Re(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,r){let o=e.querySelector(`[id="${t}"]`);if(!o)return null;let s=o.cloneNode(!0);if(s.removeAttribute("id"),s.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(s,r);if(s.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(s),r);let a=this._svgElementFromString(kn("<svg></svg>"));return a.appendChild(s),this._setSvgAttributes(a,r)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let r=t.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let t=this._svgElementFromString(kn("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:s,value:a}=r[o];s!=="id"&&t.setAttribute(s,a)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[o].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw X_();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let s=this._sanitizer.sanitize($e.RESOURCE_URL,t);if(!s)throw Sh(t);let a=this._inProgressUrlFetches.get(s);if(a)return a;let l=this._httpClient.get(s,{responseType:"text",withCredentials:o}).pipe(V(d=>kn(d)),Gn(()=>this._inProgressUrlFetches.delete(s)),Bc());return this._inProgressUrlFetches.set(s,l),l}_addSvgIconConfig(e,t,r){return this._svgIconConfigs.set(Ih(e,t),r),this}_addSvgIconSetConfig(e,t){let r=this._iconSetConfigs.get(e);return r?r.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](t,e);if(o)return Q_(o)?new Nt(o.url,null,o.options):new Nt(o,null)}}static \u0275fac=function(t){return new(t||i)(O(Ga,8),O(Xi),O(I,8),O(gn))};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function ds(i){return i.cloneNode(!0)}function Ih(i,n){return i+":"+n}function Q_(i){return!!(i.url&&i.options)}var J_=["*"],ev=new b("MAT_ICON_DEFAULT_OPTIONS"),tv=new b("mat-icon-location",{providedIn:"root",factory:()=>{let i=c(I),n=i?i.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),Th=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],nv=Th.map(i=>`[${i}]`).join(", "),iv=/^url\(['"]?#(.*?)['"]?\)$/,ut=(()=>{class i{_elementRef=c(P);_iconRegistry=c(Rh);_location=c(tv);_errorHandler=c(gn);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=ge.EMPTY;constructor(){let e=c(new yn("aria-hidden"),{optional:!0}),t=c(ev,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let r=e.childNodes[t];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),t.forEach(r=>e.classList.add(r)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((r,o)=>{r.forEach(s=>{o.setAttribute(s.name,`url('${e}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(nv),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<t.length;o++)Th.forEach(s=>{let a=t[o],l=a.getAttribute(s),d=l?l.match(iv):null;if(d){let u=r.get(a);u||(u=[],r.set(a,u)),u.push({name:s,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,r]=this._splitIconName(e);t&&(this._svgNamespace=t),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,t).pipe(ae(1)).subscribe(o=>this._setSvgElement(o),o=>{let s=`Error retrieving icon ${t}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(s))})}}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,r){t&2&&(oe("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),xt(r.color?"mat-"+r.color:""),L("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",j],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:J_,decls:1,vars:0,template:function(t,r){t&1&&(Ee(),Q(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return i})(),ht=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=A({type:i});static \u0275inj=k({imports:[se]})}return i})();var rv=20,Vt=(()=>{class i{_ngZone=c(R);_platform=c(J);_renderer=c(Ce).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new y;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=rv){return this._platform.isBrowser?new Ne(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(ha(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):N()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let r=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(ie(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&t.push(o)}),t}_scrollableContainsElement(e,t){let r=be(t),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Hl=(()=>{class i{elementRef=c(P);scrollDispatcher=c(Vt);ngZone=c(R);dir=c(Fe,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new y;_renderer=c(ce);_cleanupScroll;_elementScrolled=new y;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),r&&gi()!=yt.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),gi()==yt.INVERTED?e.left=e.right:gi()==yt.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;ss()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let s=this.dir&&this.dir.value=="rtl";return e=="start"?e=s?r:t:e=="end"&&(e=s?t:r),s&&gi()==yt.INVERTED?e==t?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:s&&gi()==yt.NEGATED?e==t?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==t?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(t){return new(t||i)};static \u0275dir=E({type:i,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return i})(),ov=20,wt=(()=>{class i{_platform=c(J);_listeners;_viewportSize=null;_change=new y;_document=c(I);constructor(){let e=c(R),t=c(Ce).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[t.listen("window","resize",r),t.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+t,height:r,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),s=-o.top||e.body?.scrollTop||t.scrollY||r.scrollTop||0,a=-o.left||e.body?.scrollLeft||t.scrollX||r.scrollLeft||0;return{top:s,left:a}}change(e=ov){return e>0?this._change.pipe(ha(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Lt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=A({type:i});static \u0275inj=k({})}return i})(),$l=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=A({type:i});static \u0275inj=k({imports:[se,Lt,se,Lt]})}return i})();var Er=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},ln=class extends Er{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,t,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=t,this.projectableNodes=r,this.bindings=o||null}},Fn=class extends Er{templateRef;viewContainerRef;context;injector;constructor(n,e,t,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=t,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},Gl=class extends Er{element;constructor(n){super(),this.element=n instanceof P?n.nativeElement:n}},wi=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof ln)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof Fn)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof Gl)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},us=class extends wi{outletElement;_appRef;_defaultInjector;constructor(n,e,t){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=t}attachComponentPortal(n){let e;if(n.viewContainerRef){let t=n.injector||n.viewContainerRef.injector,r=t.get(ao,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:t,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,r=n.injector||this._defaultInjector||B.NULL,o=r.get(Be,t.injector);e=co(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,t=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return t.rootNodes.forEach(r=>this.outletElement.appendChild(r)),t.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(t);r!==-1&&e.remove(r)}),this._attachedPortal=n,t}attachDomPortal=n=>{let e=n.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var xr=(()=>{class i extends wi{_moduleRef=c(ao,{optional:!0});_document=c(I);_viewContainerRef=c(ze);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new x;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(r,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(t,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(t){return new(t||i)};static \u0275dir=E({type:i,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[_e]})}return i})(),Nn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=A({type:i});static \u0275inj=k({})}return i})();var kh=ss();function Ei(i){return new hs(i.get(wt),i.get(I))}var hs=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=we(-this._previousScrollPosition.left),n.style.top=we(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,t=n.style,r=e.style,o=t.scrollBehavior||"",s=r.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),kh&&(t.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),kh&&(t.scrollBehavior=o,r.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function Vh(i,n){return new ms(i.get(Vt),i.get(R),i.get(wt),n)}var ms=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,t,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=t,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(ie(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Sr=class{enable(){}disable(){}attach(){}};function Wl(i,n){return n.some(e=>{let t=i.bottom<e.top,r=i.top>e.bottom,o=i.right<e.left,s=i.left>e.right;return t||r||o||s})}function Ah(i,n){return n.some(e=>{let t=i.top<e.top,r=i.bottom>e.bottom,o=i.left<e.left,s=i.right>e.right;return t||r||o||s})}function jn(i,n){return new fs(i.get(Vt),i.get(wt),i.get(R),n)}var fs=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,t,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=t,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:r}=this._viewportRuler.getViewportSize();Wl(e,[{width:t,height:r,bottom:r,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},Bh=(()=>{class i{_injector=c(B);constructor(){}noop=()=>new Sr;close=e=>Vh(this._injector,e);block=()=>Ei(this._injector);reposition=e=>jn(this._injector,e);static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Vn=class{positionStrategy;scrollStrategy=new Sr;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let t of e)n[t]!==void 0&&(this[t]=n[t])}}};var ps=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var jh=(()=>{class i{_attachedOverlays=[];_document=c(I);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),zh=(()=>{class i extends jh{_ngZone=c(R);_renderer=c(Ce).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let r=t.length-1;r>-1;r--){let o=t[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ke(i)))(r||i)}})();static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Uh=(()=>{class i extends jh{_platform=c(J);_ngZone=c(R);_renderer=c(Ce).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(t,"pointerdown",this._pointerDownListener,r),o.listen(t,"click",this._clickListener,r),o.listen(t,"auxclick",this._clickListener,r),o.listen(t,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=ve(e)};_clickListener=e=>{let t=ve(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let s=o.length-1;s>-1;s--){let a=o[s],l=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,e,l))){if(Oh(a.overlayElement,t)||Oh(a.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ke(i)))(r||i)}})();static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Oh(i,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=n;for(;t;){if(t===i)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var Hh=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return i})(),vs=(()=>{class i{_platform=c(J);_containerElement;_document=c(I);_styleLoader=c(Me);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Fl()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let t=this._document.createElement("div");t.classList.add(e),Fl()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(Hh)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ql=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,t,r){this._renderer=e,this._ngZone=t,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Yl(i){return i&&i.nodeType===1}var Di=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new y;_attachments=new y;_detachments=new y;_positionStrategy;_scrollStrategy;_locationChanges=ge.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new y;_outsidePointerEvents=new y;_afterNextRenderRef;constructor(n,e,t,r,o,s,a,l,d,u=!1,g,C){this._portalOutlet=n,this._host=e,this._pane=t,this._config=r,this._ngZone=o,this._keyboardDispatcher=s,this._document=a,this._location=l,this._outsideClickDispatcher=d,this._animationsDisabled=u,this._injector=g,this._renderer=C,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=je(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=f(f({},this._config),n),this._updateElementSize()}setDirection(n){this._config=$(f({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=we(this._config.width),n.height=we(this._config.height),n.minWidth=we(this._config.minWidth),n.minHeight=we(this._config.minHeight),n.maxWidth=we(this._config.maxWidth),n.maxHeight=we(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Yl(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new ql(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,t){let r=sn(e||[]).filter(o=>!!o);r.length&&(t?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=je(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},Ph="cdk-overlay-connected-position-bounding-box",av=/([A-Za-z%]+)$/;function Mr(i,n){return new gs(n,i.get(wt),i.get(I),i.get(J),i.get(vs))}var gs=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new y;_resizeSubscription=ge.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,t,r,o){this._viewportRuler=e,this._document=t,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(Ph),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,t=this._viewportRect,r=this._containerRect,o=[],s;for(let a of this._preferredPositions){let l=this._getOriginPoint(n,r,a),d=this._getOverlayPoint(l,e,a),u=this._getOverlayFit(d,e,t,a);if(u.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,l);return}if(this._canFitWithFlexibleDimensions(u,d,t)){o.push({position:a,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,a)});continue}(!s||s.overlayFit.visibleArea<u.visibleArea)&&(s={overlayFit:u,overlayPoint:d,originPoint:l,position:a,overlayRect:e})}if(o.length){let a=null,l=-1;for(let d of o){let u=d.boundingBoxRect.width*d.boundingBoxRect.height*(d.position.weight||1);u>l&&(l=u,a=d)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Ln(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Ph),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof P?this._origin.nativeElement:Yl(this._origin)?this._origin:null}_getOriginPoint(n,e,t){let r;if(t.originX=="center")r=n.left+n.width/2;else{let s=this._isRtl()?n.right:n.left,a=this._isRtl()?n.left:n.right;r=t.originX=="start"?s:a}e.left<0&&(r-=e.left);let o;return t.originY=="center"?o=n.top+n.height/2:o=t.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,t){let r;t.overlayX=="center"?r=-e.width/2:t.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return t.overlayY=="center"?o=-e.height/2:o=t.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,t,r){let o=Nh(e),{x:s,y:a}=n,l=this._getOffset(r,"x"),d=this._getOffset(r,"y");l&&(s+=l),d&&(a+=d);let u=0-s,g=s+o.width-t.width,C=0-a,Y=a+o.height-t.height,W=this._subtractOverflows(o.width,u,g),q=this._subtractOverflows(o.height,C,Y),T=W*q;return{visibleArea:T,isCompletelyWithinViewport:o.width*o.height===T,fitsInViewportVertically:q===o.height,fitsInViewportHorizontally:W==o.width}}_canFitWithFlexibleDimensions(n,e,t){if(this._hasFlexibleDimensions){let r=t.bottom-e.y,o=t.right-e.x,s=Fh(this._overlayRef.getConfig().minHeight),a=Fh(this._overlayRef.getConfig().minWidth),l=n.fitsInViewportVertically||s!=null&&s<=r,d=n.fitsInViewportHorizontally||a!=null&&a<=o;return l&&d}return!1}_pushOverlayOnScreen(n,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=Nh(e),o=this._viewportRect,s=Math.max(n.x+r.width-o.width,0),a=Math.max(n.y+r.height-o.height,0),l=Math.max(o.top-t.top-n.y,0),d=Math.max(o.left-t.left-n.x,0),u=0,g=0;return r.width<=o.width?u=d||-s:u=n.x<this._getViewportMarginStart()?o.left-t.left-n.x:0,r.height<=o.height?g=l||-a:g=n.y<this._getViewportMarginTop()?o.top-t.top-n.y:0,this._previousPushAmount={x:u,y:g},{x:n.x+u,y:n.y+g}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!lv(this._lastScrollVisibility,t)){let r=new ps(n,t);this._positionChanges.next(r)}this._lastScrollVisibility=t}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,r=n.overlayY;n.overlayX==="center"?t="center":this._isRtl()?t=n.overlayX==="start"?"right":"left":t=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${t} ${r}`}_calculateBoundingBoxRect(n,e){let t=this._viewportRect,r=this._isRtl(),o,s,a;if(e.overlayY==="top")s=n.y,o=t.height-s+this._getViewportMarginBottom();else if(e.overlayY==="bottom")a=t.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=t.height-a+this._getViewportMarginTop();else{let Y=Math.min(t.bottom-n.y+t.top,n.y),W=this._lastBoundingBoxSize.height;o=Y*2,s=n.y-Y,o>W&&!this._isInitialRender&&!this._growAfterOpen&&(s=n.y-W/2)}let l=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,d=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,u,g,C;if(d)C=t.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),u=n.x-this._getViewportMarginStart();else if(l)g=n.x,u=t.right-n.x-this._getViewportMarginEnd();else{let Y=Math.min(t.right-n.x+t.left,n.x),W=this._lastBoundingBoxSize.width;u=Y*2,g=n.x-Y,u>W&&!this._isInitialRender&&!this._growAfterOpen&&(g=n.x-W/2)}return{top:s,left:g,bottom:a,right:C,width:u,height:o}}_setBoundingBoxStyles(n,e){let t=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;r.width=we(t.width),r.height=we(t.height),r.top=we(t.top)||"auto",r.bottom=we(t.bottom)||"auto",r.left=we(t.left)||"auto",r.right=we(t.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=we(o)),s&&(r.maxWidth=we(s))}this._lastBoundingBoxSize=t,Ln(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Ln(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Ln(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let t={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(r){let u=this._viewportRuler.getViewportScrollPosition();Ln(t,this._getExactOverlayY(e,n,u)),Ln(t,this._getExactOverlayX(e,n,u))}else t.position="static";let a="",l=this._getOffset(e,"x"),d=this._getOffset(e,"y");l&&(a+=`translateX(${l}px) `),d&&(a+=`translateY(${d}px)`),t.transform=a.trim(),s.maxHeight&&(r?t.maxHeight=we(s.maxHeight):o&&(t.maxHeight="")),s.maxWidth&&(r?t.maxWidth=we(s.maxWidth):o&&(t.maxWidth="")),Ln(this._pane.style,t)}_getExactOverlayY(n,e,t){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t)),n.overlayY==="bottom"){let s=this._document.documentElement.clientHeight;r.bottom=`${s-(o.y+this._overlayRect.height)}px`}else r.top=we(o.y);return r}_getExactOverlayX(n,e,t){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t));let s;if(this._isRtl()?s=n.overlayX==="end"?"left":"right":s=n.overlayX==="end"?"right":"left",s==="right"){let a=this._document.documentElement.clientWidth;r.right=`${a-(o.x+this._overlayRect.width)}px`}else r.left=we(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Ah(n,t),isOriginOutsideView:Wl(n,t),isOverlayClipped:Ah(e,t),isOverlayOutsideView:Wl(e,t)}}_subtractOverflows(n,...e){return e.reduce((t,r)=>t-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+n-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&sn(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof P)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,t=n.height||0;return{top:n.y,bottom:n.y+t,left:n.x,right:n.x+e,height:t,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let t=e.getBoundingClientRect();return n&&(e.style.display=""),t}};function Ln(i,n){for(let e in n)n.hasOwnProperty(e)&&(i[e]=n[e]);return i}function Fh(i){if(typeof i!="number"&&i!=null){let[n,e]=i.split(av);return!e||e==="px"?parseFloat(n):null}return i||null}function Nh(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function lv(i,n){return i===n?!0:i.isOriginClipped===n.isOriginClipped&&i.isOriginOutsideView===n.isOriginOutsideView&&i.isOverlayClipped===n.isOverlayClipped&&i.isOverlayOutsideView===n.isOverlayOutsideView}var Lh="cdk-global-overlay-wrapper";function xi(i){return new _s}var _s=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(Lh),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:s,maxHeight:a}=t,l=(r==="100%"||r==="100vw")&&(!s||s==="100%"||s==="100vw"),d=(o==="100%"||o==="100vh")&&(!a||a==="100%"||a==="100vh"),u=this._xPosition,g=this._xOffset,C=this._overlayRef.getConfig().direction==="rtl",Y="",W="",q="";l?q="flex-start":u==="center"?(q="center",C?W=g:Y=g):C?u==="left"||u==="end"?(q="flex-end",Y=g):(u==="right"||u==="start")&&(q="flex-start",W=g):u==="left"||u==="start"?(q="flex-start",Y=g):(u==="right"||u==="end")&&(q="flex-end",W=g),n.position=this._cssPosition,n.marginLeft=l?"0":Y,n.marginTop=d?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=l?"0":W,e.justifyContent=q,e.alignItems=d?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(Lh),t.justifyContent=t.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},$h=(()=>{class i{_injector=c(B);constructor(){}global(){return xi()}flexibleConnectedTo(e){return Mr(this._injector,e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Ir=new b("OVERLAY_DEFAULT_CONFIG");function zn(i,n){i.get(Me).load(Hh);let e=i.get(vs),t=i.get(I),r=i.get(de),o=i.get(tt),s=i.get(Fe),a=i.get(ce,null,{optional:!0})||i.get(Ce).createRenderer(null,null),l=new Vn(n),d=i.get(Ir,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||s.value,"showPopover"in t.body?l.usePopover=n?.usePopover??d:l.usePopover=!1;let u=t.createElement("div"),g=t.createElement("div");u.id=r.getId("cdk-overlay-"),u.classList.add("cdk-overlay-pane"),g.appendChild(u),l.usePopover&&(g.setAttribute("popover","manual"),g.classList.add("cdk-overlay-popover"));let C=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return Yl(C)?C.after(g):C?.type==="parent"?C.element.appendChild(g):e.getContainerElement().appendChild(g),new Di(new us(u,o,i),g,u,l,i.get(R),i.get(zh),t,i.get(en),i.get(Uh),n?.disableAnimations??i.get(Yn,null,{optional:!0})==="NoopAnimations",i.get(Be),a)}var Gh=(()=>{class i{scrollStrategies=c(Bh);_positionBuilder=c($h);_injector=c(B);constructor(){}create(e){return zn(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),cv=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],dv=new b("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let i=c(B);return()=>jn(i)}}),Ci=(()=>{class i{elementRef=c(P);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=E({type:i,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return i})(),Wh=new b("cdk-connected-overlay-default-config"),bs=(()=>{class i{_dir=c(Fe,{optional:!0});_injector=c(B);_overlayRef;_templatePortal;_backdropSubscription=ge.EMPTY;_attachSubscription=ge.EMPTY;_detachSubscription=ge.EMPTY;_positionSubscription=ge.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=c(dv);_ngZone=c(R);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new x;positionChange=new x;attach=new x;detach=new x;overlayKeydown=new x;overlayOutsideClick=new x;constructor(){let e=c(gt),t=c(ze),r=c(Wh,{optional:!0}),o=c(Ir,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new Fn(e,t),this.scrollStrategy=this._scrollStrategyFactory(),r&&this._assignConfig(r)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=cv);let e=this._overlayRef=zn(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!He(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let r=this._getOriginElement(),o=ve(t);(!r||r!==o&&!r.contains(o))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new Vn({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(r=>({originX:r.originX,originY:r.originY,overlayX:r.overlayX,overlayY:r.overlayY,offsetX:r.offsetX||this.offsetX,offsetY:r.offsetY||this.offsetY,panelClass:r.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=Mr(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof Ci?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Ci?this.origin.elementRef.nativeElement:this.origin instanceof P?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(jc(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(t){return new(t||i)};static \u0275dir=E({type:i,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",j],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",j],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",j],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",j],push:[2,"cdkConnectedOverlayPush","push",j],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",j],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",j],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[De]})}return i})(),Bt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=A({type:i});static \u0275inj=k({providers:[Gh],imports:[se,Nn,$l,$l]})}return i})();function uv(i,n){}var cn=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var Zl=(()=>{class i extends wi{_elementRef=c(P);_focusTrapFactory=c(Ml);_config;_interactivityChecker=c(Sl);_ngZone=c(R);_focusMonitor=c(Ft);_renderer=c(ce);_changeDetectorRef=c(Se);_injector=c(B);_platform=c(J);_document=c(I);_portalOutlet;_focusTrapped=new y;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=c(cn,{optional:!0})||new cn,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),s(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),s=this._renderer.listen(e,"mousedown",r)})),e.focus(t)}_focusByCssSelector(e,t){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,t)}_trapFocus(e){this._isDestroyed||je(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let r=_r(),o=this._elementRef.nativeElement;(!r||r===this._document.body||r===o||o.contains(r))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=_r();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=_r()))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["cdk-dialog-container"]],viewQuery:function(t,r){if(t&1&&Ze(xr,7),t&2){let o;ee(o=te())&&(r._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,r){t&2&&oe("id",r._config.id||null)("role",r._config.role)("aria-modal",r._config.ariaModal)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null)},features:[_e],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,r){t&1&&re(0,uv,0,0,"ng-template",0)},dependencies:[xr],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return i})(),Rr=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new y;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(n,e){this.overlayRef=n,this.config=e,this.disableClose=e.disableClose,this.backdropClick=n.backdropClick(),this.keydownEvents=n.keydownEvents(),this.outsidePointerEvents=n.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!He(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=n.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(n,e){if(this._canClose(n)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(n),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(n="",e=""){return this.overlayRef.updateSize({width:n,height:e}),this}addPanelClass(n){return this.overlayRef.addPanelClass(n),this}removePanelClass(n){return this.overlayRef.removePanelClass(n),this}_canClose(n){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(n,e,this.componentInstance))}},hv=new b("DialogScrollStrategy",{providedIn:"root",factory:()=>{let i=c(B);return()=>Ei(i)}}),mv=new b("DialogData"),fv=new b("DefaultDialogConfig");function pv(i){let n=Z(i),e=new x;return{valueSignal:n,get value(){return n()},change:e,ngOnDestroy(){e.complete()}}}var Xl=(()=>{class i{_injector=c(B);_defaultOptions=c(fv,{optional:!0});_parentDialog=c(i,{optional:!0,skipSelf:!0});_overlayContainer=c(vs);_idGenerator=c(de);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new y;_afterOpenedAtThisLevel=new y;_ariaHiddenElements=new Map;_scrollStrategy=c(hv);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Ct(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Le(void 0)));constructor(){}open(e,t){let r=this._defaultOptions||new cn;t=f(f({},r),t),t.id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);let o=this._getOverlayConfig(t),s=zn(this._injector,o),a=new Rr(s,t),l=this._attachContainer(s,a,t);if(a.containerInstance=l,!this.openDialogs.length){let d=this._overlayContainer.getContainerElement();l._focusTrapped?l._focusTrapped.pipe(ae(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(d)}):this._hideNonDialogContentFromAssistiveTechnology(d)}return this._attachDialogContent(e,a,l,t),this.openDialogs.push(a),a.closed.subscribe(()=>this._removeOpenDialog(a,!0)),this.afterOpened.next(a),a}closeAll(){Kl(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){Kl(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),Kl(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new Vn({positionStrategy:e.positionStrategy||xi().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,r){let o=r.injector||r.viewContainerRef?.injector,s=[{provide:cn,useValue:r},{provide:Rr,useValue:t},{provide:Di,useValue:e}],a;r.container?typeof r.container=="function"?a=r.container:(a=r.container.type,s.push(...r.container.providers(r))):a=Zl;let l=new ln(a,r.viewContainerRef,B.create({parent:o||this._injector,providers:s}));return e.attach(l).instance}_attachDialogContent(e,t,r,o){if(e instanceof gt){let s=this._createInjector(o,t,r,void 0),a={$implicit:o.data,dialogRef:t};o.templateContext&&(a=f(f({},a),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),r.attachTemplatePortal(new Fn(e,null,a,s))}else{let s=this._createInjector(o,t,r,this._injector),a=r.attachComponentPortal(new ln(e,o.viewContainerRef,s));t.componentRef=a,t.componentInstance=a.instance}}_createInjector(e,t,r,o){let s=e.injector||e.viewContainerRef?.injector,a=[{provide:mv,useValue:e.data},{provide:Rr,useValue:t}];return e.providers&&(typeof e.providers=="function"?a.push(...e.providers(t,e,r)):a.push(...e.providers)),e.direction&&(!s||!s.get(Fe,null,{optional:!0}))&&a.push({provide:Fe,useValue:pv(e.direction)}),B.create({parent:s||o,providers:a})}_removeOpenDialog(e,t){let r=this.openDialogs.indexOf(e);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,s)=>{o?s.setAttribute("aria-hidden",o):s.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let r=t.length-1;r>-1;r--){let o=t[r];o!==e&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Kl(i,n){let e=i.length;for(;e--;)n(i[e])}var qh=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=A({type:i});static \u0275inj=k({providers:[Xl],imports:[Bt,Nn,yr,Nn]})}return i})();function gv(i,n){}var ws=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},Ql="mdc-dialog--open",Yh="mdc-dialog--opening",Kh="mdc-dialog--closing",_v=150,vv=75,bv=(()=>{class i extends Zl{_animationStateChanged=new x;_animationsEnabled=!Ie();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Xh(this._config.enterAnimationDuration)??_v:0;_exitAnimationDuration=this._animationsEnabled?Xh(this._config.exitAnimationDuration)??vv:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Zh,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Yh,Ql)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Ql),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Ql),this._animationsEnabled?(this._hostElement.style.setProperty(Zh,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Kh)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Yh,Kh)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ke(i)))(r||i)}})();static \u0275cmp=S({type:i,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(t,r){t&2&&(nt("id",r._config.id),oe("aria-modal",r._config.ariaModal)("role",r._config.role)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null),L("_mat-animation-noopable",!r._animationsEnabled)("mat-mdc-dialog-container-with-actions",r._actionSectionCount>0))},features:[_e],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,r){t&1&&(h(0,"div",0)(1,"div",1),re(2,gv,0,0,"ng-template",2),m()())},dependencies:[xr],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return i})(),Zh="--mat-dialog-transition-duration";function Xh(i){return i==null?null:typeof i=="number"?i:i.endsWith("ms")?at(i.substring(0,i.length-2)):i.endsWith("s")?at(i.substring(0,i.length-1))*1e3:i==="0"?0:null}var ys=(function(i){return i[i.OPEN=0]="OPEN",i[i.CLOSING=1]="CLOSING",i[i.CLOSED=2]="CLOSED",i})(ys||{}),mt=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new da(1);_beforeClosed=new da(1);_result;_closeFallbackTimeout;_state=ys.OPEN;_closeInteractionType;constructor(n,e,t){this._ref=n,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=n.id,n.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(ie(r=>r.state==="opened"),ae(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(ie(r=>r.state==="closed"),ae(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),n.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),et(this.backdropClick(),this.keydownEvents().pipe(ie(r=>r.keyCode===27&&!this.disableClose&&!He(r)))).subscribe(r=>{this.disableClose||(r.preventDefault(),yv(this,r.type==="keydown"?"keyboard":"mouse"))})}close(n){let e=this._config.closePredicate;e&&!e(n,this._config,this.componentInstance)||(this._result=n,this._containerInstance._animationStateChanged.pipe(ie(t=>t.state==="closing"),ae(1)).subscribe(t=>{this._beforeClosed.next(n),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=ys.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(n){let e=this._ref.config.positionStrategy;return n&&(n.left||n.right)?n.left?e.left(n.left):e.right(n.right):e.centerHorizontally(),n&&(n.top||n.bottom)?n.top?e.top(n.top):e.bottom(n.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(n="",e=""){return this._ref.updateSize(n,e),this}addPanelClass(n){return this._ref.addPanelClass(n),this}removePanelClass(n){return this._ref.removePanelClass(n),this}getState(){return this._state}_finishDialogClose(){this._state=ys.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function yv(i,n,e){return i._closeInteractionType=n,i.close(e)}var Un=new b("MatMdcDialogData"),wv=new b("mat-mdc-dialog-default-options"),Dv=new b("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let i=c(B);return()=>Ei(i)}}),Si=(()=>{class i{_defaultOptions=c(wv,{optional:!0});_scrollStrategy=c(Dv);_parentDialog=c(i,{optional:!0,skipSelf:!0});_idGenerator=c(de);_injector=c(B);_dialog=c(Xl);_animationsDisabled=Ie();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new y;_afterOpenedAtThisLevel=new y;dialogConfigClass=ws;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Ct(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Le(void 0)));constructor(){this._dialogRefConstructor=mt,this._dialogContainerType=bv,this._dialogDataToken=Un}open(e,t){let r;t=f(f({},this._defaultOptions||new ws),t),t.id=t.id||this._idGenerator.getId("mat-mdc-dialog-"),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,$(f({},t),{positionStrategy:xi(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()==="0"||t.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:cn,useValue:t}]},templateContext:()=>({dialogRef:r}),providers:(s,a,l)=>(r=new this._dialogRefConstructor(s,t,l),r.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:l},{provide:this._dialogDataToken,useValue:a.data},{provide:this._dialogRefConstructor,useValue:r}])}));return r.componentRef=o.componentRef,r.componentInstance=o.componentInstance,this.openDialogs.push(r),this.afterOpened.next(r),r.afterClosed().subscribe(()=>{let s=this.openDialogs.indexOf(r);s>-1&&(this.openDialogs.splice(s,1),this.openDialogs.length||this._getAfterAllClosed().next())}),r}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Qh=(()=>{class i{_dialogRef=c(mt,{optional:!0});_elementRef=c(P);_dialog=c(Si);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=Cv(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=E({type:i})}return i})(),Ds=(()=>{class i extends Qh{id=c(de).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ke(i)))(r||i)}})();static \u0275dir=E({type:i,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(t,r){t&2&&nt("id",r.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[_e]})}return i})(),dn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=E({type:i,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[sd([Hl])]})}return i})(),un=(()=>{class i extends Qh{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ke(i)))(r||i)}})();static \u0275dir=E({type:i,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(t,r){t&2&&L("mat-mdc-dialog-actions-align-start",r.align==="start")("mat-mdc-dialog-actions-align-center",r.align==="center")("mat-mdc-dialog-actions-align-end",r.align==="end")},inputs:{align:"align"},features:[_e]})}return i})();function Cv(i,n){let e=i.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?n.find(t=>t.id===e.id):null}var ft=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=A({type:i});static \u0275inj=k({providers:[Si],imports:[qh,Bt,Nn,se]})}return i})();var Ev=["tooltip"],xv=20;var Sv=new b("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let i=c(B);return()=>jn(i,{scrollThrottle:xv})}}),Mv=new b("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Jh="tooltip-panel",Iv={passive:!0},Rv=8,Tv=8,kv=24,Av=200,Tr=(()=>{class i{_elementRef=c(P);_ngZone=c(R);_platform=c(J);_ariaDescriber=c(mh);_focusMonitor=c(Ft);_dir=c(Fe);_injector=c(B);_viewContainerRef=c(ze);_mediaMatcher=c(pi);_document=c(I);_renderer=c(ce);_animationsDisabled=Ie();_defaultOptions=c(Mv,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=em;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=lt(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=lt(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=at(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=at(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new y;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=Rv}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(X(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let r=this._createOverlay(t);this._detach(),this._portal=this._portal||new ln(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=r.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(X(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let s=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&s._origin instanceof P)return this._overlayRef;this._detach()}let t=this._injector.get(Vt).getAncestorScrollContainers(this._elementRef),r=`${this._cssClassPrefix}-${Jh}`,o=Mr(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return o.positionChanges.pipe(X(this._destroyed)).subscribe(s=>{this._updateCurrentPositionClass(s.connectionPair),this._tooltipInstance&&s.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=zn(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,r]:r,scrollStrategy:this._injector.get(Sv)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(X(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(X(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(X(this._destroyed)).subscribe(s=>{s.preventDefault(),s.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(X(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,r=this._getOrigin(),o=this._getOverlayPosition();t.withPositions([this._addOffset(f(f({},r.main),o.main)),this._addOffset(f(f({},r.fallback),o.fallback))])}_addOffset(e){let t=Tv,r=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=r?-t:t:e.originX==="end"&&(e.offsetX=r?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,r;t=="above"||t=="below"?r={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?r={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(r={originX:"end",originY:"center"});let{x:o,y:s}=this._invertPosition(r.originX,r.originY);return{main:r,fallback:{originX:o,originY:s}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,r;t=="above"?r={overlayX:"center",overlayY:"bottom"}:t=="below"?r={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?r={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(r={overlayX:"start",overlayY:"center"});let{x:o,y:s}=this._invertPosition(r.overlayX,r.overlayY);return{main:r,fallback:{overlayX:o,overlayY:s}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),je(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:r,originY:o}=e,s;if(t==="center"?this._dir&&this._dir.value==="rtl"?s=r==="end"?"left":"right":s=r==="start"?"left":"right":s=t==="bottom"&&o==="top"?"above":"below",s!==this._currentPosition){let a=this._overlayRef;if(a){let l=`${this._cssClassPrefix}-${Jh}-`;a.removePanelClass(l+this._currentPosition),a.addPanelClass(l+s)}this._currentPosition=s}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],r=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,r)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),r=this._elementRef.nativeElement;t!==r&&!r.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,Iv))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,r=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(r.userSelect=r.msUserSelect=r.webkitUserSelect=r.MozUserSelect="none"),(e==="on"||!t.draggable)&&(r.webkitUserDrag="none"),r.touchAction="none",r.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||je({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!He(e):!0;static \u0275fac=function(t){return new(t||i)};static \u0275dir=E({type:i,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,r){t&2&&L("mat-mdc-tooltip-disabled",r.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return i})(),em=(()=>{class i{_changeDetectorRef=c(Se);_elementRef=c(P);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=Ie();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new y;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>kv&&e.width>=Av}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,r=this._showAnimation,o=this._hideAnimation;if(t.classList.remove(e?o:r),t.classList.add(e?r:o),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let s=getComputedStyle(t);(s.getPropertyValue("animation-duration")==="0s"||s.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-tooltip-component"]],viewQuery:function(t,r){if(t&1&&Ze(Ev,7),t&2){let o;ee(o=te())&&(r._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(t,r){t&1&&M("mouseleave",function(s){return r._handleMouseLeave(s)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(t,r){t&1&&(Rt(0,"div",1,0),ld("animationend",function(s){return r._handleAnimationEnd(s)}),Rt(2,"div",2),v(3),Zt()()),t&2&&(xt(r.tooltipClass),L("mdc-tooltip--multiline",r._isMultiline),p(3),xe(r.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return i})();var Es=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=A({type:i});static \u0275inj=k({imports:[yr,Bt,se,Lt]})}return i})();var nm="todo-plus-data",It=class i{data={tasks:{},pages:{}};constructor(){this.load()}load(){let n=localStorage.getItem(nm);n&&(this.data=JSON.parse(n))}save(){localStorage.setItem(nm,JSON.stringify(this.data))}getData(){return this.data}getTask(n){return this.data.tasks[n]}saveTask(n){this.data.tasks[n.id]=n,this.save()}deleteTask(n){delete this.data.tasks[n];for(let e of Object.values(this.data.pages))e.taskIds=e.taskIds.filter(t=>t!==n);this.save()}deleteTaskChain(n){let e=this._findRootId(n);this._collectChain(e).forEach(r=>{delete this.data.tasks[r];for(let o of Object.values(this.data.pages))o.taskIds=o.taskIds.filter(s=>s!==r)}),this.save()}_findRootId(n){let e=this.data.tasks[n];return e?.carriedFromId?this._findRootId(e.carriedFromId):n}_collectChain(n){let e=[n];for(let t of Object.values(this.data.tasks))t.carriedFromId===n&&e.push(...this._collectChain(t.id));return e}getPage(n){return this.data.pages[n]}savePage(n){this.data.pages[n.date]=n,this.save()}getLlmConfig(){return this.data.llmConfig}setLlmConfig(n){this.data.llmConfig=n,this.save()}exportData(){return JSON.stringify(this.data,null,2)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})};function rm(){return Date.now().toString(36)+Math.random().toString(36).slice(2)}function xs(i){return i.toISOString().slice(0,10)}var om={IN_PROGRESS:0,TODO:1,DONE:2},Ss=class i{constructor(n){this.storage=n;this.loadDay(this._currentDate())}_currentDate=Z(xs(new Date));currentDate=this._currentDate.asReadonly();_tasks=Z([]);_aiSummary=Z("");tasks=Xe(()=>{let n=[...this._tasks()];return n.sort((e,t)=>{let r=om[e.state]-om[t.state];return r!==0?r:e.order-t.order}),n});aiSummary=this._aiSummary.asReadonly();loadDay(n){this._currentDate.set(n),this.storage.getPage(n)||this._createPage(n),this._syncCarryOvers(n);let e=this.storage.getPage(n),t=e.taskIds.map(r=>this.storage.getTask(r)).filter(r=>!!r);this._tasks.set(t),this._aiSummary.set(e.aiSummary||"")}_createPage(n){this.storage.savePage({date:n,taskIds:[]})}_syncCarryOvers(n){let e=this.storage.getPage(n),t=this._findLastPageBefore(n);if(!t)return;let r=new Set(e.taskIds.map(a=>this.storage.getTask(a)).filter(a=>!!a).map(a=>a.carriedFromId).filter(a=>!!a)),o=t.taskIds.map(a=>this.storage.getTask(a)).filter(a=>!!a&&a.state!=="DONE"),s=!1;o.forEach((a,l)=>{if(r.has(a.id))return;let d=$(f({},a),{id:rm(),carriedOver:!0,carriedFromId:a.id,order:e.taskIds.length+l});this.storage.saveTask(d),e.taskIds.push(d.id),s=!0}),s&&this.storage.savePage(e)}_findLastPageBefore(n){let e=new Date(n+"T12:00:00");for(let t=1;t<=60;t++){e.setDate(e.getDate()-1);let r=this.storage.getPage(xs(e));if(r&&r.taskIds.length>0)return r}}addTask(n){let e=this._currentDate(),t=this.storage.getPage(e),r={id:rm(),description:n.description||"",state:"TODO",startDate:e,endDate:"",ticketNumber:n.ticketNumber,order:t.taskIds.length,originDate:e,carriedOver:!1};this.storage.saveTask(r),t.taskIds.push(r.id),this.storage.savePage(t),this._tasks.update(o=>[...o,r])}updateTask(n){this.storage.saveTask(n),this._tasks.update(e=>e.map(t=>t.id===n.id?n:t))}deleteTask(n){this.storage.deleteTaskChain(n);let t=this.storage.getPage(this._currentDate()).taskIds.map(r=>this.storage.getTask(r)).filter(r=>!!r);this._tasks.set(t)}deleteAllTasks(){let n=this._currentDate(),e=this.storage.getPage(n);e.taskIds.forEach(t=>this.storage.deleteTask(t)),e.taskIds=[],this.storage.savePage(e),this._tasks.set([])}cycleState(n){let t={TODO:"IN_PROGRESS",IN_PROGRESS:"DONE",DONE:"TODO"}[n.state],r=t==="DONE"?xs(new Date):"",o=this._tasks(),s;if(t==="DONE"){let a=o.filter(l=>l.state==="DONE"&&l.id!==n.id).map(l=>l.order);s=a.length>0?Math.min(...a)-1:0}else if(t==="IN_PROGRESS"){let a=o.filter(l=>l.state==="IN_PROGRESS"&&l.id!==n.id).map(l=>l.order);s=a.length>0?Math.max(...a)+1:0}else{let a=o.filter(l=>l.state==="TODO"&&l.id!==n.id).map(l=>l.order);s=a.length>0?Math.max(...a)+1:0}this.updateTask($(f({},n),{state:t,endDate:r,order:s}))}reorder(n){let e=n.map((t,r)=>$(f({},t),{order:r}));e.forEach(t=>this.storage.saveTask(t)),this._tasks.set(e)}saveAiSummary(n){let e=this._currentDate(),t=this.storage.getPage(e);t.aiSummary=n,this.storage.savePage(t),this._aiSummary.set(n)}getPreviousDayTasks(){let n=this._currentDate(),e=new Date(n);e.setDate(e.getDate()-1);let t=this.storage.getPage(xs(e));return t?t.taskIds.map(r=>this.storage.getTask(r)).filter(r=>!!r):[]}static \u0275fac=function(e){return new(e||i)(O(It))};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})};var sm=[{id:"openai",label:"OpenAI",logo:"\u{1F7E2}",docUrl:"https://platform.openai.com/api-keys",models:[{id:"gpt-4.1-nano",label:"GPT-4.1 Nano (ultra rapide)"},{id:"gpt-4.1-mini",label:"GPT-4.1 Mini (rapide, \xE9conomique)"},{id:"gpt-4.1",label:"GPT-4.1"},{id:"gpt-4o-mini",label:"GPT-4o Mini"},{id:"gpt-4o",label:"GPT-4o"},{id:"o3-mini",label:"o3 Mini (raisonnement)"},{id:"o3",label:"o3 (raisonnement avanc\xE9)"},{id:"o4-mini",label:"o4 Mini (raisonnement)"},{id:"o1",label:"o1"},{id:"o1-pro",label:"o1 Pro"},{id:"gpt-5-mini",label:"GPT-5 Mini"},{id:"gpt-5",label:"GPT-5"},{id:"gpt-5-pro",label:"GPT-5 Pro"}]},{id:"anthropic",label:"Anthropic Claude",logo:"\u{1F7E4}",docUrl:"https://console.anthropic.com/settings/keys",models:[{id:"claude-3-haiku-20240307",label:"Claude 3 Haiku"},{id:"claude-3-7-sonnet-20250219",label:"Claude 3.7 Sonnet"},{id:"claude-haiku-4-5",label:"Claude Haiku 4.5 (rapide)"},{id:"claude-sonnet-4-5",label:"Claude Sonnet 4.5"},{id:"claude-4-sonnet-20250514",label:"Claude 4 Sonnet"},{id:"claude-opus-4-5",label:"Claude Opus 4.5 (puissant)"},{id:"claude-4-opus-20250514",label:"Claude 4 Opus"},{id:"claude-opus-4-6",label:"Claude Opus 4.6"},{id:"claude-opus-4-7",label:"Claude Opus 4.7 (dernier)"}]},{id:"gemini",label:"Google Gemini",logo:"\u{1F535}",docUrl:"https://aistudio.google.com/app/apikey",models:[{id:"gemini-2.0-flash-lite",label:"Gemini 2.0 Flash Lite (l\xE9ger)"},{id:"gemini-2.0-flash",label:"Gemini 2.0 Flash"},{id:"gemini-2.5-flash-lite",label:"Gemini 2.5 Flash Lite"},{id:"gemini-2.5-flash",label:"Gemini 2.5 Flash"},{id:"gemini-2.5-pro",label:"Gemini 2.5 Pro (puissant)"},{id:"gemini-3-flash-preview",label:"Gemini 3 Flash (preview)"},{id:"gemini-3-pro-preview",label:"Gemini 3 Pro (preview)"},{id:"gemini-3.1-flash-lite-preview",label:"Gemini 3.1 Flash Lite (preview)"},{id:"gemini-3.1-pro-preview",label:"Gemini 3.1 Pro (preview, dernier)"},{id:"gemini-flash-latest",label:"Gemini Flash Latest"},{id:"gemini-pro-latest",label:"Gemini Pro Latest"}]},{id:"mistral",label:"Mistral AI",logo:"\u{1F7E0}",docUrl:"https://console.mistral.ai/api-keys",models:[{id:"mistral/open-mistral-nemo",label:"Mistral Nemo (open)"},{id:"mistral/mistral-small-latest",label:"Mistral Small (dernier)"},{id:"mistral/mistral-medium-latest",label:"Mistral Medium (dernier)"},{id:"mistral/mistral-large-latest",label:"Mistral Large (dernier)"},{id:"mistral/mistral-large-3",label:"Mistral Large 3"},{id:"mistral/magistral-small-latest",label:"Magistral Small (raisonnement)"},{id:"mistral/magistral-medium-latest",label:"Magistral Medium (raisonnement)"},{id:"mistral/devstral-small-latest",label:"Devstral Small (code)"},{id:"mistral/devstral-latest",label:"Devstral (code, puissant)"},{id:"mistral/pixtral-large-2411",label:"Pixtral Large (vision)"}]}],Ms=class i{constructor(n){this.storage=n}async generateSummary(n){let e=this.storage.getLlmConfig();if(!e?.apiKey||!e?.enabled)return this.generateLocalSummary(n);if(!navigator.onLine)return this.generateLocalSummary(n)+`

\u26A0\uFE0F R\xE9sum\xE9 IA indisponible hors-ligne.`;let t=this.buildPrompt(n);try{switch(e.provider){case"openai":return await this.callOpenAI(e,t);case"anthropic":return await this.callAnthropic(e,t);case"gemini":return await this.callGemini(e,t);case"mistral":return await this.callMistral(e,t);default:return this.generateLocalSummary(n)}}catch(r){console.error("AI API error:",r);let s=!navigator.onLine||r?.message?.includes("Failed to fetch")?`

\u26A0\uFE0F R\xE9sum\xE9 IA indisponible hors-ligne.`:`

\u26A0\uFE0F Erreur API \u2014 r\xE9sum\xE9 local g\xE9n\xE9r\xE9 \xE0 la place.`;return this.generateLocalSummary(n)+s}}sortByTicket(n){return[...n].sort((e,t)=>e.ticketNumber&&!t.ticketNumber?-1:!e.ticketNumber&&t.ticketNumber?1:0)}buildPrompt(n){return`Voici les t\xE2ches de la journ\xE9e d'hier :
${this.sortByTicket(n).map(r=>`- ${r.ticketNumber?`[${r.ticketNumber}] `:""}${r.description} (${r.state})`).join(`
`)}

R\xE9dige directement un r\xE9sum\xE9 professionnel de cette journ\xE9e en fran\xE7ais, sans introduction ni formule de politesse, en 3 \xE0 5 phrases. Va droit au but.`}async callOpenAI(n,e){let t=/^o\d/.test(n.model),r={model:n.model,messages:[{role:"system",content:"Tu es un assistant de productivit\xE9. G\xE9n\xE8re un r\xE9sum\xE9 concis et professionnel en fran\xE7ais."},{role:"user",content:e}]};t&&(r.max_completion_tokens=2048);let o=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n.apiKey}`},body:JSON.stringify(r)});if(!o.ok)throw new Error(`OpenAI ${o.status}: ${await o.text()}`);let a=(await o.json()).choices[0];return a.finish_reason==="length"&&console.warn("OpenAI: r\xE9ponse tronqu\xE9e par la limite de tokens"),a.message.content.trim()}async callAnthropic(n,e){let t=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":n.apiKey,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:n.model,max_tokens:4096,system:"Tu es un assistant de productivit\xE9. G\xE9n\xE8re un r\xE9sum\xE9 concis et professionnel en fran\xE7ais.",messages:[{role:"user",content:e}]})});if(!t.ok)throw new Error(`Anthropic ${t.status}`);return(await t.json()).content[0].text.trim()}async callGemini(n,e){let t=`https://generativelanguage.googleapis.com/v1beta/models/${n.model}:generateContent?key=${n.apiKey}`,r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:`Tu es un assistant de productivit\xE9. G\xE9n\xE8re un r\xE9sum\xE9 concis et professionnel en fran\xE7ais.

${e}`}]}],generationConfig:{maxOutputTokens:4096}})});if(!r.ok)throw new Error(`Gemini ${r.status}`);return(await r.json()).candidates[0].content.parts[0].text.trim()}async callMistral(n,e){let t=n.model.replace(/^mistral\//,""),r=await fetch("https://api.mistral.ai/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n.apiKey}`},body:JSON.stringify({model:t,messages:[{role:"system",content:"Tu es un assistant de productivit\xE9. G\xE9n\xE8re un r\xE9sum\xE9 concis et professionnel en fran\xE7ais."},{role:"user",content:e}],max_tokens:4096})});if(!r.ok)throw new Error(`Mistral ${r.status}`);return(await r.json()).choices[0].message.content.trim()}generateLocalSummary(n){let e=this.sortByTicket(n.filter(s=>s.state==="DONE")),t=this.sortByTicket(n.filter(s=>s.state==="IN_PROGRESS")),r=this.sortByTicket(n.filter(s=>s.state==="TODO")),o=[];return e.length>0&&(o.push(`
\u2705 Termin\xE9 (${e.length}) :`),e.forEach(s=>o.push(`  \u2022 ${s.ticketNumber?`[${s.ticketNumber}] `:""}${s.description}`))),t.length>0&&(o.push(`
\u{1F504} En cours (${t.length}) :`),t.forEach(s=>o.push(`  \u2022 ${s.ticketNumber?`[${s.ticketNumber}] `:""}${s.description}`))),r.length>0&&(o.push(`
\u{1F4CC} Non d\xE9marr\xE9 (${r.length}) :`),r.forEach(s=>o.push(`  \u2022 ${s.ticketNumber?`[${s.ticketNumber}] `:""}${s.description}`))),n.length===0&&o.push("Aucune t\xE2che enregistr\xE9e pour la journ\xE9e pr\xE9c\xE9dente."),o.join(`
`)}static \u0275fac=function(e){return new(e||i)(O(It))};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})};function nc(i){let n=i.cloneNode(!0),e=n.querySelectorAll("[id]"),t=i.nodeName.toLowerCase();n.removeAttribute("id");for(let r=0;r<e.length;r++)e[r].removeAttribute("id");return t==="canvas"?cm(i,n):(t==="input"||t==="select"||t==="textarea")&&lm(i,n),am("canvas",i,n,cm),am("input, textarea, select",i,n,lm),n}function am(i,n,e,t){let r=n.querySelectorAll(i);if(r.length){let o=e.querySelectorAll(i);for(let s=0;s<r.length;s++)t(r[s],o[s])}}var Ov=0;function lm(i,n){n.type!=="file"&&(n.value=i.value),n.type==="radio"&&n.name&&(n.name=`mat-clone-${n.name}-${Ov++}`)}function cm(i,n){let e=n.getContext("2d");if(e)try{e.drawImage(i,0,0)}catch{}}function cc(i){let n=i.getBoundingClientRect();return{top:n.top,right:n.right,bottom:n.bottom,left:n.left,width:n.width,height:n.height,x:n.x,y:n.y}}function ic(i,n,e){let{top:t,bottom:r,left:o,right:s}=i;return e>=t&&e<=r&&n>=o&&n<=s}function Pv(i,n){let e=n.left<i.left,t=n.left+n.width>i.right,r=n.top<i.top,o=n.top+n.height>i.bottom;return e||t||r||o}function Or(i,n,e){i.top+=n,i.bottom=i.top+i.height,i.left+=e,i.right=i.left+i.width}function dm(i,n,e,t){let{top:r,right:o,bottom:s,left:a,width:l,height:d}=i,u=l*n,g=d*n;return t>r-g&&t<s+g&&e>a-u&&e<o+u}var Is=class{_document;positions=new Map;constructor(n){this._document=n}clear(){this.positions.clear()}cache(n){this.clear(),this.positions.set(this._document,{scrollPosition:this.getViewportScrollPosition()}),n.forEach(e=>{this.positions.set(e,{scrollPosition:{top:e.scrollTop,left:e.scrollLeft},clientRect:cc(e)})})}handleScroll(n){let e=ve(n),t=this.positions.get(e);if(!t)return null;let r=t.scrollPosition,o,s;if(e===this._document){let d=this.getViewportScrollPosition();o=d.top,s=d.left}else o=e.scrollTop,s=e.scrollLeft;let a=r.top-o,l=r.left-s;return this.positions.forEach((d,u)=>{d.clientRect&&e!==u&&e.contains(u)&&Or(d.clientRect,a,l)}),r.top=o,r.left=s,{top:a,left:l}}getViewportScrollPosition(){return{top:window.scrollY,left:window.scrollX}}};function Dm(i,n){let e=i.rootNodes;if(e.length===1&&e[0].nodeType===n.ELEMENT_NODE)return e[0];let t=n.createElement("div");return e.forEach(r=>t.appendChild(r)),t}function dc(i,n,e){for(let t in n)if(n.hasOwnProperty(t)){let r=n[t];r?i.setProperty(t,r,e?.has(t)?"important":""):i.removeProperty(t)}return i}function Mi(i,n){let e=n?"":"none";dc(i.style,{"touch-action":n?"":"none","-webkit-user-drag":n?"":"none","-webkit-tap-highlight-color":n?"":"transparent","user-select":e,"-ms-user-select":e,"-webkit-user-select":e,"-moz-user-select":e})}function um(i,n,e){dc(i.style,{position:n?"":"fixed",top:n?"":"0",opacity:n?"":"0",left:n?"":"-999em"},e)}function Rs(i,n){return n&&n!="none"?i+" "+n:i}function hm(i,n){i.style.width=`${n.width}px`,i.style.height=`${n.height}px`,i.style.transform=Pr(n.left,n.top)}function Pr(i,n){return`translate3d(${Math.round(i)}px, ${Math.round(n)}px, 0)`}var kr={capture:!0},ec={passive:!1,capture:!0},Fv=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-drag-resets-container",""],decls:0,vars:0,template:function(t,r){},styles:[`@layer cdk-resets {
  .cdk-drag-preview {
    background: none;
    border: none;
    padding: 0;
    color: inherit;
    inset: auto;
  }
}
.cdk-drag-placeholder *,
.cdk-drag-preview * {
  pointer-events: none !important;
}
`],encapsulation:2,changeDetection:0})}return i})(),ks=(()=>{class i{_ngZone=c(R);_document=c(I);_styleLoader=c(Me);_renderer=c(Ce).createRenderer(null,null);_cleanupDocumentTouchmove;_scroll=new y;_dropInstances=new Set;_dragInstances=new Set;_activeDragInstances=Z([]);_globalListeners;_draggingPredicate=e=>e.isDragging();_domNodesToDirectives=null;pointerMove=new y;pointerUp=new y;constructor(){}registerDropContainer(e){this._dropInstances.has(e)||this._dropInstances.add(e)}registerDragItem(e){this._dragInstances.add(e),this._dragInstances.size===1&&this._ngZone.runOutsideAngular(()=>{this._cleanupDocumentTouchmove?.(),this._cleanupDocumentTouchmove=this._renderer.listen(this._document,"touchmove",this._persistentTouchmoveListener,ec)})}removeDropContainer(e){this._dropInstances.delete(e)}removeDragItem(e){this._dragInstances.delete(e),this.stopDragging(e),this._dragInstances.size===0&&this._cleanupDocumentTouchmove?.()}startDragging(e,t){if(!(this._activeDragInstances().indexOf(e)>-1)&&(this._styleLoader.load(Fv),this._activeDragInstances.update(r=>[...r,e]),this._activeDragInstances().length===1)){let r=t.type.startsWith("touch"),o=a=>this.pointerUp.next(a),s=[["scroll",a=>this._scroll.next(a),kr],["selectstart",this._preventDefaultWhileDragging,ec]];r?s.push(["touchend",o,kr],["touchcancel",o,kr]):s.push(["mouseup",o,kr]),r||s.push(["mousemove",a=>this.pointerMove.next(a),ec]),this._ngZone.runOutsideAngular(()=>{this._globalListeners=s.map(([a,l,d])=>this._renderer.listen(this._document,a,l,d))})}}stopDragging(e){this._activeDragInstances.update(t=>{let r=t.indexOf(e);return r>-1?(t.splice(r,1),[...t]):t}),this._activeDragInstances().length===0&&this._clearGlobalListeners()}isDragging(e){return this._activeDragInstances().indexOf(e)>-1}scrolled(e){let t=[this._scroll];return e&&e!==this._document&&t.push(new Ne(r=>this._ngZone.runOutsideAngular(()=>{let o=this._renderer.listen(e,"scroll",s=>{this._activeDragInstances().length&&r.next(s)},kr);return()=>{o()}}))),et(...t)}registerDirectiveNode(e,t){this._domNodesToDirectives??=new WeakMap,this._domNodesToDirectives.set(e,t)}removeDirectiveNode(e){this._domNodesToDirectives?.delete(e)}getDragDirectiveForNode(e){return this._domNodesToDirectives?.get(e)||null}ngOnDestroy(){this._dragInstances.forEach(e=>this.removeDragItem(e)),this._dropInstances.forEach(e=>this.removeDropContainer(e)),this._domNodesToDirectives=null,this._clearGlobalListeners(),this.pointerMove.complete(),this.pointerUp.complete()}_preventDefaultWhileDragging=e=>{this._activeDragInstances().length>0&&e.preventDefault()};_persistentTouchmoveListener=e=>{this._activeDragInstances().length>0&&(this._activeDragInstances().some(this._draggingPredicate)&&e.preventDefault(),this.pointerMove.next(e))};_clearGlobalListeners(){this._globalListeners?.forEach(e=>e()),this._globalListeners=void 0}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function mm(i){let n=i.toLowerCase().indexOf("ms")>-1?1:1e3;return parseFloat(i)*n}function Nv(i){let n=getComputedStyle(i),e=tc(n,"transition-property"),t=e.find(a=>a==="transform"||a==="all");if(!t)return 0;let r=e.indexOf(t),o=tc(n,"transition-duration"),s=tc(n,"transition-delay");return mm(o[r])+mm(s[r])}function tc(i,n){return i.getPropertyValue(n).split(",").map(t=>t.trim())}var Lv=new Set(["position"]),rc=class{_document;_rootElement;_direction;_initialDomRect;_previewTemplate;_previewClass;_pickupPositionOnPage;_initialTransform;_zIndex;_renderer;_previewEmbeddedView=null;_preview;get element(){return this._preview}constructor(n,e,t,r,o,s,a,l,d,u){this._document=n,this._rootElement=e,this._direction=t,this._initialDomRect=r,this._previewTemplate=o,this._previewClass=s,this._pickupPositionOnPage=a,this._initialTransform=l,this._zIndex=d,this._renderer=u}attach(n){this._preview=this._createPreview(),n.appendChild(this._preview),fm(this._preview)&&this._preview.showPopover()}destroy(){this._preview.remove(),this._previewEmbeddedView?.destroy(),this._preview=this._previewEmbeddedView=null}setTransform(n){this._preview.style.transform=n}getBoundingClientRect(){return this._preview.getBoundingClientRect()}addClass(n){this._preview.classList.add(n)}getTransitionDuration(){return Nv(this._preview)}addEventListener(n,e){return this._renderer.listen(this._preview,n,e)}_createPreview(){let n=this._previewTemplate,e=this._previewClass,t=n?n.template:null,r;if(t&&n){let o=n.matchSize?this._initialDomRect:null,s=n.viewContainer.createEmbeddedView(t,n.context);s.detectChanges(),r=Dm(s,this._document),this._previewEmbeddedView=s,n.matchSize?hm(r,o):r.style.transform=Pr(this._pickupPositionOnPage.x,this._pickupPositionOnPage.y)}else r=nc(this._rootElement),hm(r,this._initialDomRect),this._initialTransform&&(r.style.transform=this._initialTransform);return dc(r.style,{"pointer-events":"none",margin:fm(r)?"0 auto 0 0":"0",position:"fixed",top:"0",left:"0","z-index":this._zIndex+""},Lv),Mi(r,!1),r.classList.add("cdk-drag-preview"),r.setAttribute("popover","manual"),r.setAttribute("dir",this._direction),e&&(Array.isArray(e)?e.forEach(o=>r.classList.add(o)):r.classList.add(e)),r}};function fm(i){return"showPopover"in i}var Vv={passive:!0},pm={passive:!1},Bv={passive:!1,capture:!0},jv=800,gm="cdk-drag-placeholder",_m=new Set(["position"]);function Cm(i,n,e={dragStartThreshold:5,pointerDirectionChangeThreshold:5}){let t=i.get(ce,null,{optional:!0})||i.get(Ce).createRenderer(null,null);return new oc(n,e,i.get(I),i.get(R),i.get(wt),i.get(ks),t)}var oc=class{_config;_document;_ngZone;_viewportRuler;_dragDropRegistry;_renderer;_rootElementCleanups;_cleanupShadowRootSelectStart;_preview=null;_previewContainer;_placeholderRef=null;_placeholder;_pickupPositionInElement;_pickupPositionOnPage;_marker;_anchor=null;_passiveTransform={x:0,y:0};_activeTransform={x:0,y:0};_initialTransform;_hasStartedDragging=Z(!1);_hasMoved=!1;_initialContainer;_initialIndex;_parentPositions;_moveEvents=new y;_pointerDirectionDelta;_pointerPositionAtLastDirectionChange;_lastKnownPointerPosition;_rootElement;_ownerSVGElement=null;_rootElementTapHighlight;_pointerMoveSubscription=ge.EMPTY;_pointerUpSubscription=ge.EMPTY;_scrollSubscription=ge.EMPTY;_resizeSubscription=ge.EMPTY;_lastTouchEventTime;_dragStartTime;_boundaryElement=null;_nativeInteractionsEnabled=!0;_initialDomRect;_previewRect;_boundaryRect;_previewTemplate;_placeholderTemplate;_handles=[];_disabledHandles=new Set;_dropContainer;_direction="ltr";_parentDragRef=null;_cachedShadowRoot;lockAxis=null;dragStartDelay=0;previewClass;scale=1;get disabled(){return this._disabled||!!(this._dropContainer&&this._dropContainer.disabled)}set disabled(n){n!==this._disabled&&(this._disabled=n,this._toggleNativeDragInteractions(),this._handles.forEach(e=>Mi(e,n)))}_disabled=!1;beforeStarted=new y;started=new y;released=new y;ended=new y;entered=new y;exited=new y;dropped=new y;moved=this._moveEvents;data;constrainPosition;constructor(n,e,t,r,o,s,a){this._config=e,this._document=t,this._ngZone=r,this._viewportRuler=o,this._dragDropRegistry=s,this._renderer=a,this.withRootElement(n).withParent(e.parentDragRef||null),this._parentPositions=new Is(t),s.registerDragItem(this)}getPlaceholderElement(){return this._placeholder}getRootElement(){return this._rootElement}getVisibleElement(){return this.isDragging()?this.getPlaceholderElement():this.getRootElement()}withHandles(n){this._handles=n.map(t=>be(t)),this._handles.forEach(t=>Mi(t,this.disabled)),this._toggleNativeDragInteractions();let e=new Set;return this._disabledHandles.forEach(t=>{this._handles.indexOf(t)>-1&&e.add(t)}),this._disabledHandles=e,this}withPreviewTemplate(n){return this._previewTemplate=n,this}withPlaceholderTemplate(n){return this._placeholderTemplate=n,this}withRootElement(n){let e=be(n);if(e!==this._rootElement){this._removeRootElementListeners();let t=this._renderer;this._rootElementCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,"mousedown",this._pointerDown,pm),t.listen(e,"touchstart",this._pointerDown,Vv),t.listen(e,"dragstart",this._nativeDragStart,pm)]),this._initialTransform=void 0,this._rootElement=e}return typeof SVGElement<"u"&&this._rootElement instanceof SVGElement&&(this._ownerSVGElement=this._rootElement.ownerSVGElement),this}withBoundaryElement(n){return this._boundaryElement=n?be(n):null,this._resizeSubscription.unsubscribe(),n&&(this._resizeSubscription=this._viewportRuler.change(10).subscribe(()=>this._containInsideBoundaryOnResize())),this}withParent(n){return this._parentDragRef=n,this}dispose(){this._removeRootElementListeners(),this.isDragging()&&this._rootElement?.remove(),this._marker?.remove(),this._destroyPreview(),this._destroyPlaceholder(),this._dragDropRegistry.removeDragItem(this),this._removeListeners(),this.beforeStarted.complete(),this.started.complete(),this.released.complete(),this.ended.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this._moveEvents.complete(),this._handles=[],this._disabledHandles.clear(),this._dropContainer=void 0,this._resizeSubscription.unsubscribe(),this._parentPositions.clear(),this._boundaryElement=this._rootElement=this._ownerSVGElement=this._placeholderTemplate=this._previewTemplate=this._marker=this._parentDragRef=null}isDragging(){return this._hasStartedDragging()&&this._dragDropRegistry.isDragging(this)}reset(){this._rootElement.style.transform=this._initialTransform||"",this._activeTransform={x:0,y:0},this._passiveTransform={x:0,y:0}}resetToBoundary(){if(this._boundaryElement&&this._rootElement&&Pv(this._boundaryElement.getBoundingClientRect(),this._rootElement.getBoundingClientRect())){let n=this._boundaryElement.getBoundingClientRect(),e=this._rootElement.getBoundingClientRect(),t=0,r=0;e.left<n.left?t=n.left-e.left:e.right>n.right&&(t=n.right-e.right),e.top<n.top?r=n.top-e.top:e.bottom>n.bottom&&(r=n.bottom-e.bottom);let o=this._activeTransform.x,s=this._activeTransform.y,a=o+t,l=s+r;this._rootElement.style.transform=Pr(a,l),this._activeTransform={x:a,y:l},this._passiveTransform={x:a,y:l}}}disableHandle(n){!this._disabledHandles.has(n)&&this._handles.indexOf(n)>-1&&(this._disabledHandles.add(n),Mi(n,!0))}enableHandle(n){this._disabledHandles.has(n)&&(this._disabledHandles.delete(n),Mi(n,this.disabled))}withDirection(n){return this._direction=n,this}_withDropContainer(n){this._dropContainer=n}getFreeDragPosition(){let n=this.isDragging()?this._activeTransform:this._passiveTransform;return{x:n.x,y:n.y}}setFreeDragPosition(n){return this._activeTransform={x:0,y:0},this._passiveTransform.x=n.x,this._passiveTransform.y=n.y,this._dropContainer||this._applyRootElementTransform(n.x,n.y),this}withPreviewContainer(n){return this._previewContainer=n,this}_sortFromLastPointerPosition(){let n=this._lastKnownPointerPosition;n&&this._dropContainer&&this._updateActiveDropContainer(this._getConstrainedPointerPosition(n),n)}_removeListeners(){this._pointerMoveSubscription.unsubscribe(),this._pointerUpSubscription.unsubscribe(),this._scrollSubscription.unsubscribe(),this._cleanupShadowRootSelectStart?.(),this._cleanupShadowRootSelectStart=void 0}_destroyPreview(){this._preview?.destroy(),this._preview=null}_destroyPlaceholder(){this._anchor?.remove(),this._placeholder?.remove(),this._placeholderRef?.destroy(),this._placeholder=this._anchor=this._placeholderRef=null}_pointerDown=n=>{if(this.beforeStarted.next(),this._handles.length){let e=this._getTargetHandle(n);e&&!this._disabledHandles.has(e)&&!this.disabled&&this._initializeDragSequence(e,n)}else this.disabled||this._initializeDragSequence(this._rootElement,n)};_pointerMove=n=>{let e=this._getPointerPositionOnPage(n);if(!this._hasStartedDragging()){let r=Math.abs(e.x-this._pickupPositionOnPage.x),o=Math.abs(e.y-this._pickupPositionOnPage.y);if(r+o>=this._config.dragStartThreshold){let a=Date.now()>=this._dragStartTime+this._getDragStartDelay(n),l=this._dropContainer;if(!a){this._endDragSequence(n);return}(!l||!l.isDragging()&&!l.isReceiving())&&(n.cancelable&&n.preventDefault(),this._hasStartedDragging.set(!0),this._ngZone.run(()=>this._startDragSequence(n)))}return}n.cancelable&&n.preventDefault();let t=this._getConstrainedPointerPosition(e);if(this._hasMoved=!0,this._lastKnownPointerPosition=e,this._updatePointerDirectionDelta(t),this._dropContainer)this._updateActiveDropContainer(t,e);else{let r=this.constrainPosition?this._initialDomRect:this._pickupPositionOnPage,o=this._activeTransform;o.x=t.x-r.x+this._passiveTransform.x,o.y=t.y-r.y+this._passiveTransform.y,this._applyRootElementTransform(o.x,o.y)}this._moveEvents.observers.length&&this._ngZone.run(()=>{this._moveEvents.next({source:this,pointerPosition:t,event:n,distance:this._getDragDistance(t),delta:this._pointerDirectionDelta})})};_pointerUp=n=>{this._endDragSequence(n)};_endDragSequence(n){if(this._dragDropRegistry.isDragging(this)&&(this._removeListeners(),this._dragDropRegistry.stopDragging(this),this._toggleNativeDragInteractions(),this._handles&&(this._rootElement.style.webkitTapHighlightColor=this._rootElementTapHighlight),!!this._hasStartedDragging()))if(this.released.next({source:this,event:n}),this._dropContainer)this._dropContainer._stopScrolling(),this._animatePreviewToPlaceholder().then(()=>{this._cleanupDragArtifacts(n),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)});else{this._passiveTransform.x=this._activeTransform.x;let e=this._getPointerPositionOnPage(n);this._passiveTransform.y=this._activeTransform.y,this._ngZone.run(()=>{this.ended.next({source:this,distance:this._getDragDistance(e),dropPoint:e,event:n})}),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)}}_startDragSequence(n){Ar(n)&&(this._lastTouchEventTime=Date.now()),this._toggleNativeDragInteractions();let e=this._getShadowRoot(),t=this._dropContainer;if(e&&this._ngZone.runOutsideAngular(()=>{this._cleanupShadowRootSelectStart=this._renderer.listen(e,"selectstart",zv,Bv)}),t){let r=this._rootElement,o=r.parentNode,s=this._placeholder=this._createPlaceholderElement(),a=this._marker=this._marker||this._document.createComment("");o.insertBefore(a,r),this._initialTransform=r.style.transform||"",this._preview=new rc(this._document,this._rootElement,this._direction,this._initialDomRect,this._previewTemplate||null,this.previewClass||null,this._pickupPositionOnPage,this._initialTransform,this._config.zIndex||1e3,this._renderer),this._preview.attach(this._getPreviewInsertionPoint(o,e)),um(r,!1,_m),this._document.body.appendChild(o.replaceChild(s,r)),this.started.next({source:this,event:n}),t.start(),this._initialContainer=t,this._initialIndex=t.getItemIndex(this)}else this.started.next({source:this,event:n}),this._initialContainer=this._initialIndex=void 0;this._parentPositions.cache(t?t.getScrollableParents():[])}_initializeDragSequence(n,e){this._parentDragRef&&e.stopPropagation();let t=this.isDragging(),r=Ar(e),o=!r&&e.button!==0,s=this._rootElement,a=ve(e),l=!r&&this._lastTouchEventTime&&this._lastTouchEventTime+jv>Date.now(),d=r?Rn(e):In(e);if(a&&a.draggable&&e.type==="mousedown"&&e.preventDefault(),t||o||l||d)return;if(this._handles.length){let C=s.style;this._rootElementTapHighlight=C.webkitTapHighlightColor||"",C.webkitTapHighlightColor="transparent"}this._hasMoved=!1,this._hasStartedDragging.set(this._hasMoved),this._removeListeners(),this._initialDomRect=this._rootElement.getBoundingClientRect(),this._pointerMoveSubscription=this._dragDropRegistry.pointerMove.subscribe(this._pointerMove),this._pointerUpSubscription=this._dragDropRegistry.pointerUp.subscribe(this._pointerUp),this._scrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(C=>this._updateOnScroll(C)),this._boundaryElement&&(this._boundaryRect=cc(this._boundaryElement));let u=this._previewTemplate;this._pickupPositionInElement=u&&u.template&&!u.matchSize?{x:0,y:0}:this._getPointerPositionInElement(this._initialDomRect,n,e);let g=this._pickupPositionOnPage=this._lastKnownPointerPosition=this._getPointerPositionOnPage(e);this._pointerDirectionDelta={x:0,y:0},this._pointerPositionAtLastDirectionChange={x:g.x,y:g.y},this._dragStartTime=Date.now(),this._dragDropRegistry.startDragging(this,e)}_cleanupDragArtifacts(n){um(this._rootElement,!0,_m),this._marker.parentNode.replaceChild(this._rootElement,this._marker),this._destroyPreview(),this._destroyPlaceholder(),this._initialDomRect=this._boundaryRect=this._previewRect=this._initialTransform=void 0,this._ngZone.run(()=>{let e=this._dropContainer,t=e.getItemIndex(this),r=this._getPointerPositionOnPage(n),o=this._getDragDistance(r),s=e._isOverContainer(r.x,r.y);this.ended.next({source:this,distance:o,dropPoint:r,event:n}),this.dropped.next({item:this,currentIndex:t,previousIndex:this._initialIndex,container:e,previousContainer:this._initialContainer,isPointerOverContainer:s,distance:o,dropPoint:r,event:n}),e.drop(this,t,this._initialIndex,this._initialContainer,s,o,r,n),this._dropContainer=this._initialContainer})}_updateActiveDropContainer({x:n,y:e},{x:t,y:r}){let o=this._initialContainer._getSiblingContainerFromPosition(this,n,e);!o&&this._dropContainer!==this._initialContainer&&this._initialContainer._isOverContainer(n,e)&&(o=this._initialContainer),o&&o!==this._dropContainer&&this._ngZone.run(()=>{let s=this._dropContainer.getItemIndex(this),a=this._dropContainer.getItemAtIndex(s+1)?.getVisibleElement()||null;this.exited.next({item:this,container:this._dropContainer}),this._dropContainer.exit(this),this._conditionallyInsertAnchor(o,this._dropContainer,a),this._dropContainer=o,this._dropContainer.enter(this,n,e,o===this._initialContainer&&o.sortingDisabled?this._initialIndex:void 0),this.entered.next({item:this,container:o,currentIndex:o.getItemIndex(this)})}),this.isDragging()&&(this._dropContainer._startScrollingIfNecessary(t,r),this._dropContainer._sortItem(this,n,e,this._pointerDirectionDelta),this.constrainPosition?this._applyPreviewTransform(n,e):this._applyPreviewTransform(n-this._pickupPositionInElement.x,e-this._pickupPositionInElement.y))}_animatePreviewToPlaceholder(){if(!this._hasMoved)return Promise.resolve();let n=this._placeholder.getBoundingClientRect();this._preview.addClass("cdk-drag-animating"),this._applyPreviewTransform(n.left,n.top);let e=this._preview.getTransitionDuration();return e===0?Promise.resolve():this._ngZone.runOutsideAngular(()=>new Promise(t=>{let r=a=>{(!a||this._preview&&ve(a)===this._preview.element&&a.propertyName==="transform")&&(s(),t(),clearTimeout(o))},o=setTimeout(r,e*1.5),s=this._preview.addEventListener("transitionend",r)}))}_createPlaceholderElement(){let n=this._placeholderTemplate,e=n?n.template:null,t;return e?(this._placeholderRef=n.viewContainer.createEmbeddedView(e,n.context),this._placeholderRef.detectChanges(),t=Dm(this._placeholderRef,this._document)):t=nc(this._rootElement),t.style.pointerEvents="none",t.classList.add(gm),t}_getPointerPositionInElement(n,e,t){let r=e===this._rootElement?null:e,o=r?r.getBoundingClientRect():n,s=Ar(t)?t.targetTouches[0]:t,a=this._getViewportScrollPosition(),l=s.pageX-o.left-a.left,d=s.pageY-o.top-a.top;return{x:o.left-n.left+l,y:o.top-n.top+d}}_getPointerPositionOnPage(n){let e=this._getViewportScrollPosition(),t=Ar(n)?n.touches[0]||n.changedTouches[0]||{pageX:0,pageY:0}:n,r=t.pageX-e.left,o=t.pageY-e.top;if(this._ownerSVGElement){let s=this._ownerSVGElement.getScreenCTM();if(s){let a=this._ownerSVGElement.createSVGPoint();return a.x=r,a.y=o,a.matrixTransform(s.inverse())}}return{x:r,y:o}}_getConstrainedPointerPosition(n){let e=this._dropContainer?this._dropContainer.lockAxis:null,{x:t,y:r}=this.constrainPosition?this.constrainPosition(n,this,this._initialDomRect,this._pickupPositionInElement):n;if(this.lockAxis==="x"||e==="x"?r=this._pickupPositionOnPage.y-(this.constrainPosition?this._pickupPositionInElement.y:0):(this.lockAxis==="y"||e==="y")&&(t=this._pickupPositionOnPage.x-(this.constrainPosition?this._pickupPositionInElement.x:0)),this._boundaryRect){let{x:o,y:s}=this.constrainPosition?{x:0,y:0}:this._pickupPositionInElement,a=this._boundaryRect,{width:l,height:d}=this._getPreviewRect(),u=a.top+s,g=a.bottom-(d-s),C=a.left+o,Y=a.right-(l-o);t=vm(t,C,Y),r=vm(r,u,g)}return{x:t,y:r}}_updatePointerDirectionDelta(n){let{x:e,y:t}=n,r=this._pointerDirectionDelta,o=this._pointerPositionAtLastDirectionChange,s=Math.abs(e-o.x),a=Math.abs(t-o.y);return s>this._config.pointerDirectionChangeThreshold&&(r.x=e>o.x?1:-1,o.x=e),a>this._config.pointerDirectionChangeThreshold&&(r.y=t>o.y?1:-1,o.y=t),r}_toggleNativeDragInteractions(){if(!this._rootElement||!this._handles)return;let n=this._handles.length>0||!this.isDragging();n!==this._nativeInteractionsEnabled&&(this._nativeInteractionsEnabled=n,Mi(this._rootElement,n))}_removeRootElementListeners(){this._rootElementCleanups?.forEach(n=>n()),this._rootElementCleanups=void 0}_applyRootElementTransform(n,e){let t=1/this.scale,r=Pr(n*t,e*t),o=this._rootElement.style;this._initialTransform==null&&(this._initialTransform=o.transform&&o.transform!="none"?o.transform:""),o.transform=Rs(r,this._initialTransform)}_applyPreviewTransform(n,e){let t=this._previewTemplate?.template?void 0:this._initialTransform,r=Pr(n,e);this._preview.setTransform(Rs(r,t))}_getDragDistance(n){let e=this._pickupPositionOnPage;return e?{x:n.x-e.x,y:n.y-e.y}:{x:0,y:0}}_cleanupCachedDimensions(){this._boundaryRect=this._previewRect=void 0,this._parentPositions.clear()}_containInsideBoundaryOnResize(){let{x:n,y:e}=this._passiveTransform;if(n===0&&e===0||this.isDragging()||!this._boundaryElement)return;let t=this._rootElement.getBoundingClientRect(),r=this._boundaryElement.getBoundingClientRect();if(r.width===0&&r.height===0||t.width===0&&t.height===0)return;let o=r.left-t.left,s=t.right-r.right,a=r.top-t.top,l=t.bottom-r.bottom;r.width>t.width?(o>0&&(n+=o),s>0&&(n-=s)):n=0,r.height>t.height?(a>0&&(e+=a),l>0&&(e-=l)):e=0,(n!==this._passiveTransform.x||e!==this._passiveTransform.y)&&this.setFreeDragPosition({y:e,x:n})}_getDragStartDelay(n){let e=this.dragStartDelay;return typeof e=="number"?e:Ar(n)?e.touch:e?e.mouse:0}_updateOnScroll(n){let e=this._parentPositions.handleScroll(n);if(e){let t=ve(n);this._boundaryRect&&t!==this._boundaryElement&&t.contains(this._boundaryElement)&&Or(this._boundaryRect,e.top,e.left),this._pickupPositionOnPage.x+=e.left,this._pickupPositionOnPage.y+=e.top,this._dropContainer||(this._activeTransform.x-=e.left,this._activeTransform.y-=e.top,this._applyRootElementTransform(this._activeTransform.x,this._activeTransform.y))}}_getViewportScrollPosition(){return this._parentPositions.positions.get(this._document)?.scrollPosition||this._parentPositions.getViewportScrollPosition()}_getShadowRoot(){return this._cachedShadowRoot===void 0&&(this._cachedShadowRoot=Tn(this._rootElement)),this._cachedShadowRoot}_getPreviewInsertionPoint(n,e){let t=this._previewContainer||"global";if(t==="parent")return n;if(t==="global"){let r=this._document;return e||r.fullscreenElement||r.webkitFullscreenElement||r.mozFullScreenElement||r.msFullscreenElement||r.body}return be(t)}_getPreviewRect(){return(!this._previewRect||!this._previewRect.width&&!this._previewRect.height)&&(this._previewRect=this._preview?this._preview.getBoundingClientRect():this._initialDomRect),this._previewRect}_nativeDragStart=n=>{if(this._handles.length){let e=this._getTargetHandle(n);e&&!this._disabledHandles.has(e)&&!this.disabled&&n.preventDefault()}else this.disabled||n.preventDefault()};_getTargetHandle(n){return this._handles.find(e=>n.target&&(n.target===e||e.contains(n.target)))}_conditionallyInsertAnchor(n,e,t){if(n===this._initialContainer)this._anchor?.remove(),this._anchor=null;else if(e===this._initialContainer&&e.hasAnchor){let r=this._anchor??=nc(this._placeholder);r.classList.remove(gm),r.classList.add("cdk-drag-anchor"),r.style.transform="",t?t.before(r):be(e.element).appendChild(r)}}};function vm(i,n,e){return Math.max(n,Math.min(e,i))}function Ar(i){return i.type[0]==="t"}function zv(i){i.preventDefault()}function As(i,n,e){let t=bm(n,i.length-1),r=bm(e,i.length-1);if(t===r)return;let o=i[t],s=r<t?-1:1;for(let a=t;a!==r;a+=s)i[a]=i[a+s];i[r]=o}function bm(i,n){return Math.max(0,Math.min(n,i))}var Ts=class{_dragDropRegistry;_element;_sortPredicate;_itemPositions=[];_activeDraggables;orientation="vertical";direction="ltr";constructor(n){this._dragDropRegistry=n}_previousSwap={drag:null,delta:0,overlaps:!1};start(n){this.withItems(n)}sort(n,e,t,r){let o=this._itemPositions,s=this._getItemIndexFromPointerPosition(n,e,t,r);if(s===-1&&o.length>0)return null;let a=this.orientation==="horizontal",l=o.findIndex(T=>T.drag===n),d=o[s],u=o[l].clientRect,g=d.clientRect,C=l>s?1:-1,Y=this._getItemOffsetPx(u,g,C),W=this._getSiblingOffsetPx(l,o,C),q=o.slice();return As(o,l,s),o.forEach((T,K)=>{if(q[K]===T)return;let ue=T.drag===n,Te=ue?Y:W,ye=ue?n.getPlaceholderElement():T.drag.getRootElement();T.offset+=Te;let Ht=Math.round(T.offset*(1/T.drag.scale));a?(ye.style.transform=Rs(`translate3d(${Ht}px, 0, 0)`,T.initialTransform),Or(T.clientRect,0,Te)):(ye.style.transform=Rs(`translate3d(0, ${Ht}px, 0)`,T.initialTransform),Or(T.clientRect,Te,0))}),this._previousSwap.overlaps=ic(g,e,t),this._previousSwap.drag=d.drag,this._previousSwap.delta=a?r.x:r.y,{previousIndex:l,currentIndex:s}}enter(n,e,t,r){let o=this._activeDraggables,s=o.indexOf(n),a=n.getPlaceholderElement();s>-1&&o.splice(s,1);let l=r==null||r<0?this._getItemIndexFromPointerPosition(n,e,t):r,d=o[l];if(d===n&&(d=o[l+1]),!d&&(l==null||l===-1||l<o.length-1)&&this._shouldEnterAsFirstChild(e,t)&&(d=o[0]),d&&!this._dragDropRegistry.isDragging(d)){let u=d.getRootElement();u.parentElement.insertBefore(a,u),o.splice(l,0,n)}else this._element.appendChild(a),o.push(n);a.style.transform="",this._cacheItemPositions()}withItems(n){this._activeDraggables=n.slice(),this._cacheItemPositions()}withSortPredicate(n){this._sortPredicate=n}reset(){this._activeDraggables?.forEach(n=>{let e=n.getRootElement();if(e){let t=this._itemPositions.find(r=>r.drag===n)?.initialTransform;e.style.transform=t||""}}),this._itemPositions=[],this._activeDraggables=[],this._previousSwap.drag=null,this._previousSwap.delta=0,this._previousSwap.overlaps=!1}getActiveItemsSnapshot(){return this._activeDraggables}getItemIndex(n){return this._getVisualItemPositions().findIndex(e=>e.drag===n)}getItemAtIndex(n){return this._getVisualItemPositions()[n]?.drag||null}updateOnScroll(n,e){this._itemPositions.forEach(({clientRect:t})=>{Or(t,n,e)}),this._itemPositions.forEach(({drag:t})=>{this._dragDropRegistry.isDragging(t)&&t._sortFromLastPointerPosition()})}withElementContainer(n){this._element=n}_cacheItemPositions(){let n=this.orientation==="horizontal";this._itemPositions=this._activeDraggables.map(e=>{let t=e.getVisibleElement();return{drag:e,offset:0,initialTransform:t.style.transform||"",clientRect:cc(t)}}).sort((e,t)=>n?e.clientRect.left-t.clientRect.left:e.clientRect.top-t.clientRect.top)}_getVisualItemPositions(){return this.orientation==="horizontal"&&this.direction==="rtl"?this._itemPositions.slice().reverse():this._itemPositions}_getItemOffsetPx(n,e,t){let r=this.orientation==="horizontal",o=r?e.left-n.left:e.top-n.top;return t===-1&&(o+=r?e.width-n.width:e.height-n.height),o}_getSiblingOffsetPx(n,e,t){let r=this.orientation==="horizontal",o=e[n].clientRect,s=e[n+t*-1],a=o[r?"width":"height"]*t;if(s){let l=r?"left":"top",d=r?"right":"bottom";t===-1?a-=s.clientRect[l]-o[d]:a+=o[l]-s.clientRect[d]}return a}_shouldEnterAsFirstChild(n,e){if(!this._activeDraggables.length)return!1;let t=this._itemPositions,r=this.orientation==="horizontal";if(t[0].drag!==this._activeDraggables[0]){let s=t[t.length-1].clientRect;return r?n>=s.right:e>=s.bottom}else{let s=t[0].clientRect;return r?n<=s.left:e<=s.top}}_getItemIndexFromPointerPosition(n,e,t,r){let o=this.orientation==="horizontal",s=this._itemPositions.findIndex(({drag:a,clientRect:l})=>{if(a===n)return!1;if(r){let d=o?r.x:r.y;if(a===this._previousSwap.drag&&this._previousSwap.overlaps&&d===this._previousSwap.delta)return!1}return o?e>=Math.floor(l.left)&&e<Math.floor(l.right):t>=Math.floor(l.top)&&t<Math.floor(l.bottom)});return s===-1||!this._sortPredicate(s,n)?-1:s}},sc=class{_document;_dragDropRegistry;_element;_sortPredicate;_rootNode;_activeItems;_previousSwap={drag:null,deltaX:0,deltaY:0,overlaps:!1};_relatedNodes=[];constructor(n,e){this._document=n,this._dragDropRegistry=e}start(n){let e=this._element.childNodes;this._relatedNodes=[];for(let t=0;t<e.length;t++){let r=e[t];this._relatedNodes.push([r,r.nextSibling])}this.withItems(n)}sort(n,e,t,r){let o=this._getItemIndexFromPointerPosition(n,e,t),s=this._previousSwap;if(o===-1||this._activeItems[o]===n)return null;let a=this._activeItems[o];if(s.drag===a&&s.overlaps&&s.deltaX===r.x&&s.deltaY===r.y)return null;let l=this.getItemIndex(n),d=n.getPlaceholderElement(),u=a.getRootElement();o>l?u.after(d):u.before(d),As(this._activeItems,l,o);let g=this._getRootNode().elementFromPoint(e,t);return s.deltaX=r.x,s.deltaY=r.y,s.drag=a,s.overlaps=u===g||u.contains(g),{previousIndex:l,currentIndex:o}}enter(n,e,t,r){let o=this._activeItems.indexOf(n);o>-1&&this._activeItems.splice(o,1);let s=r==null||r<0?this._getItemIndexFromPointerPosition(n,e,t):r;s===-1&&(s=this._getClosestItemIndexToPointer(n,e,t));let a=this._activeItems[s];a&&!this._dragDropRegistry.isDragging(a)?(this._activeItems.splice(s,0,n),a.getRootElement().before(n.getPlaceholderElement())):(this._activeItems.push(n),this._element.appendChild(n.getPlaceholderElement()))}withItems(n){this._activeItems=n.slice()}withSortPredicate(n){this._sortPredicate=n}reset(){let n=this._element,e=this._previousSwap;for(let t=this._relatedNodes.length-1;t>-1;t--){let[r,o]=this._relatedNodes[t];r.parentNode===n&&r.nextSibling!==o&&(o===null?n.appendChild(r):o.parentNode===n&&n.insertBefore(r,o))}this._relatedNodes=[],this._activeItems=[],e.drag=null,e.deltaX=e.deltaY=0,e.overlaps=!1}getActiveItemsSnapshot(){return this._activeItems}getItemIndex(n){return this._activeItems.indexOf(n)}getItemAtIndex(n){return this._activeItems[n]||null}updateOnScroll(){this._activeItems.forEach(n=>{this._dragDropRegistry.isDragging(n)&&n._sortFromLastPointerPosition()})}withElementContainer(n){n!==this._element&&(this._element=n,this._rootNode=void 0)}_getItemIndexFromPointerPosition(n,e,t){let r=this._getRootNode().elementFromPoint(Math.floor(e),Math.floor(t)),o=r?this._activeItems.findIndex(s=>{let a=s.getRootElement();return r===a||a.contains(r)}):-1;return o===-1||!this._sortPredicate(o,n)?-1:o}_getRootNode(){return this._rootNode||(this._rootNode=Tn(this._element)||this._document),this._rootNode}_getClosestItemIndexToPointer(n,e,t){if(this._activeItems.length===0)return-1;if(this._activeItems.length===1)return 0;let r=1/0,o=-1;for(let s=0;s<this._activeItems.length;s++){let a=this._activeItems[s];if(a!==n){let{x:l,y:d}=a.getRootElement().getBoundingClientRect(),u=Math.hypot(e-l,t-d);u<r&&(r=u,o=s)}}return o}},ym=.05,Em=.05,pt=(function(i){return i[i.NONE=0]="NONE",i[i.UP=1]="UP",i[i.DOWN=2]="DOWN",i})(pt||{}),Ge=(function(i){return i[i.NONE=0]="NONE",i[i.LEFT=1]="LEFT",i[i.RIGHT=2]="RIGHT",i})(Ge||{});function xm(i,n){return new ac(n,i.get(ks),i.get(I),i.get(R),i.get(wt))}var ac=class{_dragDropRegistry;_ngZone;_viewportRuler;element;disabled=!1;sortingDisabled=!1;lockAxis=null;autoScrollDisabled=!1;autoScrollStep=2;hasAnchor=!1;enterPredicate=()=>!0;sortPredicate=()=>!0;beforeStarted=new y;entered=new y;exited=new y;dropped=new y;sorted=new y;receivingStarted=new y;receivingStopped=new y;data;_container;_isDragging=!1;_parentPositions;_sortStrategy;_domRect;_draggables=[];_siblings=[];_activeSiblings=new Set;_viewportScrollSubscription=ge.EMPTY;_verticalScrollDirection=pt.NONE;_horizontalScrollDirection=Ge.NONE;_scrollNode;_stopScrollTimers=new y;_cachedShadowRoot=null;_document;_scrollableElements=[];_initialScrollSnap;_direction="ltr";constructor(n,e,t,r,o){this._dragDropRegistry=e,this._ngZone=r,this._viewportRuler=o;let s=this.element=be(n);this._document=t,this.withOrientation("vertical").withElementContainer(s),e.registerDropContainer(this),this._parentPositions=new Is(t)}dispose(){this._stopScrolling(),this._stopScrollTimers.complete(),this._viewportScrollSubscription.unsubscribe(),this.beforeStarted.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this.sorted.complete(),this.receivingStarted.complete(),this.receivingStopped.complete(),this._activeSiblings.clear(),this._scrollNode=null,this._parentPositions.clear(),this._dragDropRegistry.removeDropContainer(this)}isDragging(){return this._isDragging}start(){this._draggingStarted(),this._notifyReceivingSiblings()}enter(n,e,t,r){this._draggingStarted(),r==null&&this.sortingDisabled&&(r=this._draggables.indexOf(n)),this._sortStrategy.enter(n,e,t,r),this._cacheParentPositions(),this._notifyReceivingSiblings(),this.entered.next({item:n,container:this,currentIndex:this.getItemIndex(n)})}exit(n){this._reset(),this.exited.next({item:n,container:this})}drop(n,e,t,r,o,s,a,l={}){this._reset(),this.dropped.next({item:n,currentIndex:e,previousIndex:t,container:this,previousContainer:r,isPointerOverContainer:o,distance:s,dropPoint:a,event:l})}withItems(n){let e=this._draggables;return this._draggables=n,n.forEach(t=>t._withDropContainer(this)),this.isDragging()&&(e.filter(r=>r.isDragging()).every(r=>n.indexOf(r)===-1)?this._reset():this._sortStrategy.withItems(this._draggables)),this}withDirection(n){return this._direction=n,this._sortStrategy instanceof Ts&&(this._sortStrategy.direction=n),this}connectedTo(n){return this._siblings=n.slice(),this}withOrientation(n){if(n==="mixed")this._sortStrategy=new sc(this._document,this._dragDropRegistry);else{let e=new Ts(this._dragDropRegistry);e.direction=this._direction,e.orientation=n,this._sortStrategy=e}return this._sortStrategy.withElementContainer(this._container),this._sortStrategy.withSortPredicate((e,t)=>this.sortPredicate(e,t,this)),this}withScrollableParents(n){let e=this._container;return this._scrollableElements=n.indexOf(e)===-1?[e,...n]:n.slice(),this}withElementContainer(n){if(n===this._container)return this;let e=be(this.element),t=this._scrollableElements.indexOf(this._container),r=this._scrollableElements.indexOf(n);return t>-1&&this._scrollableElements.splice(t,1),r>-1&&this._scrollableElements.splice(r,1),this._sortStrategy&&this._sortStrategy.withElementContainer(n),this._cachedShadowRoot=null,this._scrollableElements.unshift(n),this._container=n,this}getScrollableParents(){return this._scrollableElements}getItemIndex(n){return this._isDragging?this._sortStrategy.getItemIndex(n):this._draggables.indexOf(n)}getItemAtIndex(n){return this._isDragging?this._sortStrategy.getItemAtIndex(n):this._draggables[n]||null}isReceiving(){return this._activeSiblings.size>0}_sortItem(n,e,t,r){if(this.sortingDisabled||!this._domRect||!dm(this._domRect,ym,e,t))return;let o=this._sortStrategy.sort(n,e,t,r);o&&this.sorted.next({previousIndex:o.previousIndex,currentIndex:o.currentIndex,container:this,item:n})}_startScrollingIfNecessary(n,e){if(this.autoScrollDisabled)return;let t,r=pt.NONE,o=Ge.NONE;if(this._parentPositions.positions.forEach((s,a)=>{a===this._document||!s.clientRect||t||dm(s.clientRect,ym,n,e)&&([r,o]=Uv(a,s.clientRect,this._direction,n,e),(r||o)&&(t=a))}),!r&&!o){let{width:s,height:a}=this._viewportRuler.getViewportSize(),l={width:s,height:a,top:0,right:s,bottom:a,left:0};r=Sm(l,e),o=Mm(l,n),t=window}t&&(r!==this._verticalScrollDirection||o!==this._horizontalScrollDirection||t!==this._scrollNode)&&(this._verticalScrollDirection=r,this._horizontalScrollDirection=o,this._scrollNode=t,(r||o)&&t?this._ngZone.runOutsideAngular(this._startScrollInterval):this._stopScrolling())}_stopScrolling(){this._stopScrollTimers.next()}_draggingStarted(){let n=this._container.style;this.beforeStarted.next(),this._isDragging=!0,this._initialScrollSnap=n.msScrollSnapType||n.scrollSnapType||"",n.scrollSnapType=n.msScrollSnapType="none",this._sortStrategy.start(this._draggables),this._cacheParentPositions(),this._viewportScrollSubscription.unsubscribe(),this._listenToScrollEvents()}_cacheParentPositions(){this._parentPositions.cache(this._scrollableElements),this._domRect=this._parentPositions.positions.get(this._container).clientRect}_reset(){this._isDragging=!1;let n=this._container.style;n.scrollSnapType=n.msScrollSnapType=this._initialScrollSnap,this._siblings.forEach(e=>e._stopReceiving(this)),this._sortStrategy.reset(),this._stopScrolling(),this._viewportScrollSubscription.unsubscribe(),this._parentPositions.clear()}_startScrollInterval=()=>{this._stopScrolling(),Vc(0,ua).pipe(X(this._stopScrollTimers)).subscribe(()=>{let n=this._scrollNode,e=this.autoScrollStep;this._verticalScrollDirection===pt.UP?n.scrollBy(0,-e):this._verticalScrollDirection===pt.DOWN&&n.scrollBy(0,e),this._horizontalScrollDirection===Ge.LEFT?n.scrollBy(-e,0):this._horizontalScrollDirection===Ge.RIGHT&&n.scrollBy(e,0)})};_isOverContainer(n,e){return this._domRect!=null&&ic(this._domRect,n,e)}_getSiblingContainerFromPosition(n,e,t){return this._siblings.find(r=>r._canReceive(n,e,t))}_canReceive(n,e,t){if(!this._domRect||!ic(this._domRect,e,t)||!this.enterPredicate(n,this))return!1;let r=this._getShadowRoot().elementFromPoint(e,t);return r?r===this._container||this._container.contains(r):!1}_startReceiving(n,e){let t=this._activeSiblings;!t.has(n)&&e.every(r=>this.enterPredicate(r,this)||this._draggables.indexOf(r)>-1)&&(t.add(n),this._cacheParentPositions(),this._listenToScrollEvents(),this.receivingStarted.next({initiator:n,receiver:this,items:e}))}_stopReceiving(n){this._activeSiblings.delete(n),this._viewportScrollSubscription.unsubscribe(),this.receivingStopped.next({initiator:n,receiver:this})}_listenToScrollEvents(){this._viewportScrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(n=>{if(this.isDragging()){let e=this._parentPositions.handleScroll(n);e&&this._sortStrategy.updateOnScroll(e.top,e.left)}else this.isReceiving()&&this._cacheParentPositions()})}_getShadowRoot(){if(!this._cachedShadowRoot){let n=Tn(this._container);this._cachedShadowRoot=n||this._document}return this._cachedShadowRoot}_notifyReceivingSiblings(){let n=this._sortStrategy.getActiveItemsSnapshot().filter(e=>e.isDragging());this._siblings.forEach(e=>e._startReceiving(this,n))}};function Sm(i,n){let{top:e,bottom:t,height:r}=i,o=r*Em;return n>=e-o&&n<=e+o?pt.UP:n>=t-o&&n<=t+o?pt.DOWN:pt.NONE}function Mm(i,n){let{left:e,right:t,width:r}=i,o=r*Em;return n>=e-o&&n<=e+o?Ge.LEFT:n>=t-o&&n<=t+o?Ge.RIGHT:Ge.NONE}function Uv(i,n,e,t,r){let o=Sm(n,r),s=Mm(n,t),a=pt.NONE,l=Ge.NONE;if(o){let d=i.scrollTop;o===pt.UP?d>0&&(a=pt.UP):i.scrollHeight-d>i.clientHeight&&(a=pt.DOWN)}if(s){let d=i.scrollLeft;e==="rtl"?s===Ge.RIGHT?d<0&&(l=Ge.RIGHT):i.scrollWidth+d>i.clientWidth&&(l=Ge.LEFT):s===Ge.LEFT?d>0&&(l=Ge.LEFT):i.scrollWidth-d>i.clientWidth&&(l=Ge.RIGHT)}return[a,l]}var Hv=(()=>{class i{_injector=c(B);constructor(){}createDrag(e,t){return Cm(this._injector,e,t)}createDropList(e){return xm(this._injector,e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),lc=new b("CDK_DRAG_PARENT");var Im=new b("CdkDragHandle"),Rm=(()=>{class i{element=c(P);_parentDrag=c(lc,{optional:!0,skipSelf:!0});_dragDropRegistry=c(ks);_stateChanges=new y;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._stateChanges.next(this)}_disabled=!1;constructor(){this._parentDrag?._addHandle(this)}ngAfterViewInit(){if(!this._parentDrag){let e=this.element.nativeElement.parentElement;for(;e;){let t=this._dragDropRegistry.getDragDirectiveForNode(e);if(t){this._parentDrag=t,t._addHandle(this);break}e=e.parentElement}}}ngOnDestroy(){this._parentDrag?._removeHandle(this),this._stateChanges.complete()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=E({type:i,selectors:[["","cdkDragHandle",""]],hostAttrs:[1,"cdk-drag-handle"],inputs:{disabled:[2,"cdkDragHandleDisabled","disabled",j]},features:[pe([{provide:Im,useExisting:i}])]})}return i})(),Tm=new b("CDK_DRAG_CONFIG"),km=new b("CdkDropList"),Am=(()=>{class i{element=c(P);dropContainer=c(km,{optional:!0,skipSelf:!0});_ngZone=c(R);_viewContainerRef=c(ze);_dir=c(Fe,{optional:!0});_changeDetectorRef=c(Se);_selfHandle=c(Im,{optional:!0,self:!0});_parentDrag=c(lc,{optional:!0,skipSelf:!0});_dragDropRegistry=c(ks);_destroyed=new y;_handles=new Ve([]);_previewTemplate=null;_placeholderTemplate=null;_dragRef;data;lockAxis=null;rootElementSelector;boundaryElement;dragStartDelay;freeDragPosition;get disabled(){return this._disabled||!!(this.dropContainer&&this.dropContainer.disabled)}set disabled(e){this._disabled=e,this._dragRef.disabled=this._disabled}_disabled=!1;constrainPosition;previewClass;previewContainer;scale=1;started=new x;released=new x;ended=new x;entered=new x;exited=new x;dropped=new x;moved=new Ne(e=>{let t=this._dragRef.moved.pipe(V(r=>({source:this,pointerPosition:r.pointerPosition,event:r.event,delta:r.delta,distance:r.distance}))).subscribe(e);return()=>{t.unsubscribe()}});_injector=c(B);constructor(){let e=this.dropContainer,t=c(Tm,{optional:!0});this._dragRef=Cm(this._injector,this.element,{dragStartThreshold:t&&t.dragStartThreshold!=null?t.dragStartThreshold:5,pointerDirectionChangeThreshold:t&&t.pointerDirectionChangeThreshold!=null?t.pointerDirectionChangeThreshold:5,zIndex:t?.zIndex}),this._dragRef.data=this,this._dragDropRegistry.registerDirectiveNode(this.element.nativeElement,this),t&&this._assignDefaults(t),e&&(e.addItem(this),e._dropListRef.beforeStarted.pipe(X(this._destroyed)).subscribe(()=>{this._dragRef.scale=this.scale})),this._syncInputs(this._dragRef),this._handleEvents(this._dragRef)}getPlaceholderElement(){return this._dragRef.getPlaceholderElement()}getRootElement(){return this._dragRef.getRootElement()}reset(){this._dragRef.reset()}resetToBoundary(){this._dragRef.resetToBoundary()}getFreeDragPosition(){return this._dragRef.getFreeDragPosition()}setFreeDragPosition(e){this._dragRef.setFreeDragPosition(e)}ngAfterViewInit(){je(()=>{this._updateRootElement(),this._setupHandlesListener(),this._dragRef.scale=this.scale,this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)},{injector:this._injector})}ngOnChanges(e){let t=e.rootElementSelector,r=e.freeDragPosition;t&&!t.firstChange&&this._updateRootElement(),this._dragRef.scale=this.scale,r&&!r.firstChange&&this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)}ngOnDestroy(){this.dropContainer&&this.dropContainer.removeItem(this),this._dragDropRegistry.removeDirectiveNode(this.element.nativeElement),this._ngZone.runOutsideAngular(()=>{this._handles.complete(),this._destroyed.next(),this._destroyed.complete(),this._dragRef.dispose()})}_addHandle(e){let t=this._handles.getValue();t.push(e),this._handles.next(t)}_removeHandle(e){let t=this._handles.getValue(),r=t.indexOf(e);r>-1&&(t.splice(r,1),this._handles.next(t))}_setPreviewTemplate(e){this._previewTemplate=e}_resetPreviewTemplate(e){e===this._previewTemplate&&(this._previewTemplate=null)}_setPlaceholderTemplate(e){this._placeholderTemplate=e}_resetPlaceholderTemplate(e){e===this._placeholderTemplate&&(this._placeholderTemplate=null)}_updateRootElement(){let e=this.element.nativeElement,t=e;this.rootElementSelector&&(t=e.closest!==void 0?e.closest(this.rootElementSelector):e.parentElement?.closest(this.rootElementSelector)),this._dragRef.withRootElement(t||e)}_getBoundaryElement(){let e=this.boundaryElement;return e?typeof e=="string"?this.element.nativeElement.closest(e):be(e):null}_syncInputs(e){e.beforeStarted.subscribe(()=>{if(!e.isDragging()){let t=this._dir,r=this.dragStartDelay,o=this._placeholderTemplate?{template:this._placeholderTemplate.templateRef,context:this._placeholderTemplate.data,viewContainer:this._viewContainerRef}:null,s=this._previewTemplate?{template:this._previewTemplate.templateRef,context:this._previewTemplate.data,matchSize:this._previewTemplate.matchSize,viewContainer:this._viewContainerRef}:null;e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.scale=this.scale,e.dragStartDelay=typeof r=="object"&&r?r:at(r),e.constrainPosition=this.constrainPosition,e.previewClass=this.previewClass,e.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(o).withPreviewTemplate(s).withPreviewContainer(this.previewContainer||"global"),t&&e.withDirection(t.value)}}),e.beforeStarted.pipe(ae(1)).subscribe(()=>{if(this._parentDrag){e.withParent(this._parentDrag._dragRef);return}let t=this.element.nativeElement.parentElement;for(;t;){let r=this._dragDropRegistry.getDragDirectiveForNode(t);if(r){e.withParent(r._dragRef);break}t=t.parentElement}})}_handleEvents(e){e.started.subscribe(t=>{this.started.emit({source:this,event:t.event}),this._changeDetectorRef.markForCheck()}),e.released.subscribe(t=>{this.released.emit({source:this,event:t.event})}),e.ended.subscribe(t=>{this.ended.emit({source:this,distance:t.distance,dropPoint:t.dropPoint,event:t.event}),this._changeDetectorRef.markForCheck()}),e.entered.subscribe(t=>{this.entered.emit({container:t.container.data,item:this,currentIndex:t.currentIndex})}),e.exited.subscribe(t=>{this.exited.emit({container:t.container.data,item:this})}),e.dropped.subscribe(t=>{this.dropped.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,previousContainer:t.previousContainer.data,container:t.container.data,isPointerOverContainer:t.isPointerOverContainer,item:this,distance:t.distance,dropPoint:t.dropPoint,event:t.event})})}_assignDefaults(e){let{lockAxis:t,dragStartDelay:r,constrainPosition:o,previewClass:s,boundaryElement:a,draggingDisabled:l,rootElementSelector:d,previewContainer:u}=e;this.disabled=l??!1,this.dragStartDelay=r||0,this.lockAxis=t||null,o&&(this.constrainPosition=o),s&&(this.previewClass=s),a&&(this.boundaryElement=a),d&&(this.rootElementSelector=d),u&&(this.previewContainer=u)}_setupHandlesListener(){this._handles.pipe(Re(e=>{let t=e.map(r=>r.element);this._selfHandle&&this.rootElementSelector&&t.push(this.element),this._dragRef.withHandles(t)}),he(e=>et(...e.map(t=>t._stateChanges.pipe(Le(t))))),X(this._destroyed)).subscribe(e=>{let t=this._dragRef,r=e.element.nativeElement;e.disabled?t.disableHandle(r):t.enableHandle(r)})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=E({type:i,selectors:[["","cdkDrag",""]],hostAttrs:[1,"cdk-drag"],hostVars:4,hostBindings:function(t,r){t&2&&L("cdk-drag-disabled",r.disabled)("cdk-drag-dragging",r._dragRef.isDragging())},inputs:{data:[0,"cdkDragData","data"],lockAxis:[0,"cdkDragLockAxis","lockAxis"],rootElementSelector:[0,"cdkDragRootElement","rootElementSelector"],boundaryElement:[0,"cdkDragBoundary","boundaryElement"],dragStartDelay:[0,"cdkDragStartDelay","dragStartDelay"],freeDragPosition:[0,"cdkDragFreeDragPosition","freeDragPosition"],disabled:[2,"cdkDragDisabled","disabled",j],constrainPosition:[0,"cdkDragConstrainPosition","constrainPosition"],previewClass:[0,"cdkDragPreviewClass","previewClass"],previewContainer:[0,"cdkDragPreviewContainer","previewContainer"],scale:[2,"cdkDragScale","scale",Tt]},outputs:{started:"cdkDragStarted",released:"cdkDragReleased",ended:"cdkDragEnded",entered:"cdkDragEntered",exited:"cdkDragExited",dropped:"cdkDragDropped",moved:"cdkDragMoved"},exportAs:["cdkDrag"],features:[pe([{provide:lc,useExisting:i}]),De]})}return i})(),wm=new b("CdkDropListGroup");var Om=(()=>{class i{element=c(P);_changeDetectorRef=c(Se);_scrollDispatcher=c(Vt);_dir=c(Fe,{optional:!0});_group=c(wm,{optional:!0,skipSelf:!0});_latestSortedRefs;_destroyed=new y;_scrollableParentsResolved=!1;static _dropLists=[];_dropListRef;connectedTo=[];data;orientation="vertical";id=c(de).getId("cdk-drop-list-");lockAxis=null;get disabled(){return this._disabled||!!this._group&&this._group.disabled}set disabled(e){this._dropListRef.disabled=this._disabled=e}_disabled=!1;sortingDisabled=!1;enterPredicate=()=>!0;sortPredicate=()=>!0;autoScrollDisabled=!1;autoScrollStep;elementContainerSelector=null;hasAnchor=!1;dropped=new x;entered=new x;exited=new x;sorted=new x;_unsortedItems=new Set;constructor(){let e=c(Tm,{optional:!0}),t=c(B);this._dropListRef=xm(t,this.element),this._dropListRef.data=this,e&&this._assignDefaults(e),this._dropListRef.enterPredicate=(r,o)=>this.enterPredicate(r.data,o.data),this._dropListRef.sortPredicate=(r,o,s)=>this.sortPredicate(r,o.data,s.data),this._setupInputSyncSubscription(this._dropListRef),this._handleEvents(this._dropListRef),i._dropLists.push(this),this._group&&this._group._items.add(this)}addItem(e){this._unsortedItems.add(e),e._dragRef._withDropContainer(this._dropListRef),this._dropListRef.isDragging()&&this._syncItemsWithRef(this.getSortedItems().map(t=>t._dragRef))}removeItem(e){if(this._unsortedItems.delete(e),this._latestSortedRefs){let t=this._latestSortedRefs.indexOf(e._dragRef);t>-1&&(this._latestSortedRefs.splice(t,1),this._syncItemsWithRef(this._latestSortedRefs))}}getSortedItems(){return Array.from(this._unsortedItems).sort((e,t)=>e._dragRef.getVisibleElement().compareDocumentPosition(t._dragRef.getVisibleElement())&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)}ngOnDestroy(){let e=i._dropLists.indexOf(this);e>-1&&i._dropLists.splice(e,1),this._group&&this._group._items.delete(this),this._latestSortedRefs=void 0,this._unsortedItems.clear(),this._dropListRef.dispose(),this._destroyed.next(),this._destroyed.complete()}_setupInputSyncSubscription(e){this._dir&&this._dir.change.pipe(Le(this._dir.value),X(this._destroyed)).subscribe(t=>e.withDirection(t)),e.beforeStarted.subscribe(()=>{let t=sn(this.connectedTo).map(r=>{if(typeof r=="string"){let o=i._dropLists.find(s=>s.id===r);return o}return r});if(this._group&&this._group._items.forEach(r=>{t.indexOf(r)===-1&&t.push(r)}),!this._scrollableParentsResolved){let r=this._scrollDispatcher.getAncestorScrollContainers(this.element).map(o=>o.getElementRef().nativeElement);this._dropListRef.withScrollableParents(r),this._scrollableParentsResolved=!0}if(this.elementContainerSelector){let r=this.element.nativeElement.querySelector(this.elementContainerSelector);e.withElementContainer(r)}e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.sortingDisabled=this.sortingDisabled,e.autoScrollDisabled=this.autoScrollDisabled,e.autoScrollStep=at(this.autoScrollStep,2),e.hasAnchor=this.hasAnchor,e.connectedTo(t.filter(r=>r&&r!==this).map(r=>r._dropListRef)).withOrientation(this.orientation)})}_handleEvents(e){e.beforeStarted.subscribe(()=>{this._syncItemsWithRef(this.getSortedItems().map(t=>t._dragRef)),this._changeDetectorRef.markForCheck()}),e.entered.subscribe(t=>{this.entered.emit({container:this,item:t.item.data,currentIndex:t.currentIndex})}),e.exited.subscribe(t=>{this.exited.emit({container:this,item:t.item.data}),this._changeDetectorRef.markForCheck()}),e.sorted.subscribe(t=>{this.sorted.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,container:this,item:t.item.data})}),e.dropped.subscribe(t=>{this.dropped.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,previousContainer:t.previousContainer.data,container:t.container.data,item:t.item.data,isPointerOverContainer:t.isPointerOverContainer,distance:t.distance,dropPoint:t.dropPoint,event:t.event}),this._changeDetectorRef.markForCheck()}),et(e.receivingStarted,e.receivingStopped).subscribe(()=>this._changeDetectorRef.markForCheck())}_assignDefaults(e){let{lockAxis:t,draggingDisabled:r,sortingDisabled:o,listAutoScrollDisabled:s,listOrientation:a}=e;this.disabled=r??!1,this.sortingDisabled=o??!1,this.autoScrollDisabled=s??!1,this.orientation=a||"vertical",this.lockAxis=t||null}_syncItemsWithRef(e){this._latestSortedRefs=e,this._dropListRef.withItems(e)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=E({type:i,selectors:[["","cdkDropList",""],["cdk-drop-list"]],hostAttrs:[1,"cdk-drop-list"],hostVars:7,hostBindings:function(t,r){t&2&&(oe("id",r.id),L("cdk-drop-list-disabled",r.disabled)("cdk-drop-list-dragging",r._dropListRef.isDragging())("cdk-drop-list-receiving",r._dropListRef.isReceiving()))},inputs:{connectedTo:[0,"cdkDropListConnectedTo","connectedTo"],data:[0,"cdkDropListData","data"],orientation:[0,"cdkDropListOrientation","orientation"],id:"id",lockAxis:[0,"cdkDropListLockAxis","lockAxis"],disabled:[2,"cdkDropListDisabled","disabled",j],sortingDisabled:[2,"cdkDropListSortingDisabled","sortingDisabled",j],enterPredicate:[0,"cdkDropListEnterPredicate","enterPredicate"],sortPredicate:[0,"cdkDropListSortPredicate","sortPredicate"],autoScrollDisabled:[2,"cdkDropListAutoScrollDisabled","autoScrollDisabled",j],autoScrollStep:[0,"cdkDropListAutoScrollStep","autoScrollStep"],elementContainerSelector:[0,"cdkDropListElementContainer","elementContainerSelector"],hasAnchor:[2,"cdkDropListHasAnchor","hasAnchor",j]},outputs:{dropped:"cdkDropListDropped",entered:"cdkDropListEntered",exited:"cdkDropListExited",sorted:"cdkDropListSorted"},exportAs:["cdkDropList"],features:[pe([{provide:wm,useValue:void 0},{provide:km,useExisting:i}])]})}return i})();var Pm=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=A({type:i});static \u0275inj=k({providers:[Hv],imports:[Lt]})}return i})();var Os=class i{transform(n){return n?new Date(n+"T12:00:00").toLocaleDateString(navigator.language,{day:"2-digit",month:"2-digit",year:"numeric"}):""}static \u0275fac=function(e){return new(e||i)};static \u0275pipe=ya({name:"localDate",type:i,pure:!0})};var Ps=class i{constructor(n,e){this.dialogRef=n;this.data=e}static \u0275fac=function(e){return new(e||i)(H(mt),H(Un))};static \u0275cmp=S({type:i,selectors:[["app-confirm-delete-dialog"]],decls:17,vars:1,consts:[[1,"dialog-container"],[1,"dialog-icon"],[1,"dialog-title"],[1,"task-name"],[1,"warning-text"],["align","center"],["mat-stroked-button","",3,"click"],["mat-raised-button","",1,"delete-btn",3,"click"]],template:function(e,t){e&1&&(h(0,"mat-dialog-content")(1,"div",0)(2,"mat-icon",1),v(3,"delete_forever"),m(),h(4,"h2",2),v(5,"Supprimer la t\xE2che ?"),m(),h(6,"p",3),v(7),m(),h(8,"p",4),v(9,"Cette action est irr\xE9versible."),m()()(),h(10,"mat-dialog-actions",5)(11,"button",6),M("click",function(){return t.dialogRef.close(!1)}),v(12,"Annuler"),m(),h(13,"button",7),M("click",function(){return t.dialogRef.close(!0)}),h(14,"mat-icon"),v(15,"delete"),m(),v(16," Supprimer "),m()()),e&2&&(p(7),le('"',t.data.description,'"'))},dependencies:[ft,un,dn,dt,Mt,ht,ut],styles:[".dialog-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-align:center;padding:16px 8px 0;min-width:300px}.dialog-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px;color:#d32f2f;margin-bottom:12px}.dialog-title[_ngcontent-%COMP%]{margin:0 0 12px;font-size:1.2rem;font-weight:600}.task-name[_ngcontent-%COMP%]{font-weight:600;color:#212121;margin:0 0 6px;word-break:break-word}.warning-text[_ngcontent-%COMP%]{color:#757575;font-size:.85rem;margin:0}mat-dialog-actions[_ngcontent-%COMP%]{gap:8px}.delete-btn[_ngcontent-%COMP%]{background-color:#d32f2f!important;color:#fff!important}.delete-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff!important}"]})};var Gv=["*"];function Wv(i,n){i&1&&G(0,"span",19)}function qv(i,n){i&1&&(h(0,"span",20),v(1,"\u2014"),m())}function Yv(i,n){i&1&&(h(0,"span",21),v(1,"\u2713"),m())}function Kv(i,n){if(i&1&&(h(0,"span",22),v(1),m()),i&2){let e=z();p(),le("#",e.task.ticketNumber)}}function Zv(i,n){i&1&&(h(0,"span",23),v(1,"\u21A9 Report\xE9e"),m())}function Xv(i,n){if(i&1&&(h(0,"span",24)(1,"mat-icon",14),v(2,"check_circle"),m(),v(3),Ea(4,"localDate"),m()),i&2){let e=z();p(3),le(" Termin\xE9 le : ",xa(4,1,e.task.endDate)," ")}}var Fs=class i{task;stateChanged=new x;deleted=new x;edit=new x;dialog=c(Si);get stateClass(){return{TODO:"todo",IN_PROGRESS:"in-progress",DONE:"done"}[this.task.state]}get stateLabel(){return{TODO:"\xC0 faire \u2014 cliquer pour En cours",IN_PROGRESS:"En cours \u2014 cliquer pour Termin\xE9",DONE:"Termin\xE9 \u2014 cliquer pour \xC0 faire"}[this.task.state]}cycleState(){let e={TODO:"IN_PROGRESS",IN_PROGRESS:"DONE",DONE:"TODO"}[this.task.state],t=new Date().toISOString().slice(0,10),r=e==="DONE"?t:"";this.stateChanged.emit($(f({},this.task),{state:e,endDate:r}))}delete(){this.dialog.open(Ps,{width:"380px",data:{description:this.task.description}}).afterClosed().subscribe(e=>{e&&this.deleted.emit(this.task.id)})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=S({type:i,selectors:[["app-task-card"]],inputs:{task:"task"},outputs:{stateChanged:"stateChanged",deleted:"deleted",edit:"edit"},ngContentSelectors:Gv,decls:28,vars:16,consts:[[1,"task-card",3,"ngClass"],["type","button",1,"state-checkbox",3,"click","ngClass","matTooltip"],[1,"checkbox-inner"],[3,"ngSwitch"],["class","icon-todo",4,"ngSwitchCase"],["class","icon-inprogress",4,"ngSwitchCase"],["class","icon-done",4,"ngSwitchCase"],[1,"task-content"],[1,"task-header"],["class","ticket-badge",4,"ngIf"],["class","carried-badge","matTooltip","Report\xE9e du jour pr\xE9c\xE9dent",4,"ngIf"],[1,"task-description"],[1,"task-dates"],[1,"date-chip"],[1,"date-icon"],["class","date-chip done-date",4,"ngIf"],[1,"task-actions"],["mat-icon-button","","matTooltip","Modifier",3,"click"],["mat-icon-button","","matTooltip","Supprimer","color","warn",3,"click"],[1,"icon-todo"],[1,"icon-inprogress"],[1,"icon-done"],[1,"ticket-badge"],["matTooltip","Report\xE9e du jour pr\xE9c\xE9dent",1,"carried-badge"],[1,"date-chip","done-date"]],template:function(e,t){e&1&&(Ee(),h(0,"div",0),Q(1),h(2,"button",1),M("click",function(){return t.cycleState()}),h(3,"span",2),Xt(4,3),re(5,Wv,1,0,"span",4)(6,qv,2,0,"span",5)(7,Yv,2,0,"span",6),Qt(),m()(),h(8,"div",7)(9,"div",8),re(10,Kv,2,1,"span",9)(11,Zv,2,0,"span",10),m(),h(12,"p",11),v(13),m(),h(14,"div",12)(15,"span",13)(16,"mat-icon",14),v(17,"calendar_today"),m(),v(18),Ea(19,"localDate"),m(),re(20,Xv,5,3,"span",15),m()(),h(21,"div",16)(22,"button",17),M("click",function(){return t.edit.emit(t.task)}),h(23,"mat-icon"),v(24,"edit"),m()(),h(25,"button",18),M("click",function(){return t.delete()}),h(26,"mat-icon"),v(27,"delete"),m()()()()),e&2&&(w("ngClass",t.stateClass),p(2),w("ngClass",t.stateClass)("matTooltip",t.stateLabel),p(2),w("ngSwitch",t.task.state),p(),w("ngSwitchCase","TODO"),p(),w("ngSwitchCase","IN_PROGRESS"),p(),w("ngSwitchCase","DONE"),p(3),w("ngIf",t.task.ticketNumber),p(),w("ngIf",t.task.carriedOver),p(),L("done-text",t.task.state==="DONE"),p(),xe(t.task.description),p(5),le(" Cr\xE9\xE9 le : ",xa(19,14,t.task.startDate)," "),p(2),w("ngIf",t.task.endDate))},dependencies:[rt,Ta,vt,po,ka,dt,Pn,ht,ut,Es,Tr,ft,Os],styles:[".task-card[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:12px;padding:14px 16px;border-radius:12px;background:#fff;border:1.5px solid #e0e0e0;box-shadow:0 2px 8px #0000000a;transition:box-shadow .2s,border-color .2s}.task-card[_ngcontent-%COMP%]:hover{box-shadow:0 4px 16px #0000001a}.task-card.todo[_ngcontent-%COMP%]{border-left:4px solid #bdbdbd}.task-card.in-progress[_ngcontent-%COMP%]{border-left:4px solid #FFB300;background:#fffde7}.task-card.done[_ngcontent-%COMP%]{border-left:4px solid #43a047;background:#f1f8e9}.state-checkbox[_ngcontent-%COMP%]{width:28px;height:28px;min-width:28px;border-radius:6px;border:2px solid #bdbdbd;background:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s;padding:0;flex-shrink:0;margin-top:2px}.state-checkbox.in-progress[_ngcontent-%COMP%]{border-color:#ffb300;background:#ffb300}.state-checkbox.done[_ngcontent-%COMP%]{border-color:#43a047;background:#43a047}.checkbox-inner[_ngcontent-%COMP%]{font-size:.9rem;font-weight:700;line-height:1}.icon-todo[_ngcontent-%COMP%]{display:block;width:10px;height:10px}.icon-inprogress[_ngcontent-%COMP%], .icon-done[_ngcontent-%COMP%]{color:#fff;font-size:1rem;line-height:1}.task-content[_ngcontent-%COMP%]{flex:1;min-width:0}.task-header[_ngcontent-%COMP%]{display:flex;gap:8px;margin-bottom:4px;flex-wrap:wrap}.ticket-badge[_ngcontent-%COMP%]{background:#e3f2fd;color:#1565c0;padding:2px 8px;border-radius:12px;font-size:.75rem;font-weight:600}.carried-badge[_ngcontent-%COMP%]{background:#fce4ec;color:#c62828;padding:2px 8px;border-radius:12px;font-size:.75rem;font-weight:500}.task-description[_ngcontent-%COMP%]{margin:0 0 6px;font-size:.95rem;line-height:1.5;word-break:break-word}.done-text[_ngcontent-%COMP%]{text-decoration:line-through;color:#9e9e9e}.task-dates[_ngcontent-%COMP%]{display:flex;gap:12px;flex-wrap:wrap}.date-chip[_ngcontent-%COMP%]{font-size:.75rem;color:#757575;display:flex;align-items:center;gap:3px}.date-icon[_ngcontent-%COMP%]{font-size:13px;width:13px;height:13px;line-height:1}.date-chip.done-date[_ngcontent-%COMP%]{color:#43a047;font-weight:500}.task-actions[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:0;flex-shrink:0}"]})};function Qv(i,n){if(i&1){let e=_t();h(0,"app-task-card",8),M("stateChanged",function(r){ke(e);let o=z(2);return Ae(o.taskUpdated.emit(r))})("deleted",function(r){ke(e);let o=z(2);return Ae(o.taskDeleted.emit(r))})("edit",function(r){ke(e);let o=z(2);return Ae(o.taskEdit.emit(r))}),h(1,"div",9)(2,"span",10),v(3,"\u283F"),m()()()}if(i&2){let e=n.$implicit;w("task",e)}}function Jv(i,n){if(i&1&&(Xt(0),h(1,"div",4),G(2,"span",5),v(3," \u{1F504} En cours "),h(4,"span",6),v(5),m()(),re(6,Qv,4,1,"app-task-card",7),Qt()),i&2){let e=z();p(5),le("(",e.inProgress().length,")"),p(),w("ngForOf",e.inProgress())("ngForTrackBy",e.trackById)}}function eb(i,n){i&1&&G(0,"div",11)}function tb(i,n){if(i&1){let e=_t();h(0,"app-task-card",8),M("stateChanged",function(r){ke(e);let o=z(2);return Ae(o.taskUpdated.emit(r))})("deleted",function(r){ke(e);let o=z(2);return Ae(o.taskDeleted.emit(r))})("edit",function(r){ke(e);let o=z(2);return Ae(o.taskEdit.emit(r))}),h(1,"div",9)(2,"span",10),v(3,"\u283F"),m()()()}if(i&2){let e=n.$implicit;w("task",e)}}function nb(i,n){if(i&1&&(Xt(0),h(1,"div",12),G(2,"span",5),v(3," \u{1F4CC} \xC0 faire "),h(4,"span",6),v(5),m()(),re(6,tb,4,1,"app-task-card",7),Qt()),i&2){let e=z();p(5),le("(",e.todo().length,")"),p(),w("ngForOf",e.todo())("ngForTrackBy",e.trackById)}}function ib(i,n){i&1&&G(0,"div",11)}function rb(i,n){if(i&1){let e=_t();h(0,"app-task-card",8),M("stateChanged",function(r){ke(e);let o=z(2);return Ae(o.taskUpdated.emit(r))})("deleted",function(r){ke(e);let o=z(2);return Ae(o.taskDeleted.emit(r))})("edit",function(r){ke(e);let o=z(2);return Ae(o.taskEdit.emit(r))}),h(1,"div",9)(2,"span",10),v(3,"\u283F"),m()()()}if(i&2){let e=n.$implicit;w("task",e)}}function ob(i,n){if(i&1&&(Xt(0),h(1,"div",13),G(2,"span",5),v(3," \u2705 Termin\xE9es "),h(4,"span",6),v(5),m()(),re(6,rb,4,1,"app-task-card",7),Qt()),i&2){let e=z();p(5),le("(",e.done().length,")"),p(),w("ngForOf",e.done())("ngForTrackBy",e.trackById)}}function sb(i,n){i&1&&(h(0,"div",14),v(1," \u{1F389} Aucune t\xE2che pour cette journ\xE9e."),G(2,"br"),v(3,'Cliquez sur "Nouvelle t\xE2che" pour commencer ! '),m())}var Ns=class i{tasks=[];taskUpdated=new x;taskDeleted=new x;taskEdit=new x;reordered=new x;inProgress(){return this.tasks.filter(n=>n.state==="IN_PROGRESS")}todo(){return this.tasks.filter(n=>n.state==="TODO")}done(){return this.tasks.filter(n=>n.state==="DONE")}trackById(n,e){return e.id}onDrop(n){let e=[...this.tasks];As(e,n.previousIndex,n.currentIndex),this.reordered.emit(e)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=S({type:i,selectors:[["app-task-list"]],inputs:{tasks:"tasks"},outputs:{taskUpdated:"taskUpdated",taskDeleted:"taskDeleted",taskEdit:"taskEdit",reordered:"reordered"},decls:7,vars:6,consts:[["cdkDropList","",1,"task-list",3,"cdkDropListDropped"],[4,"ngIf"],["class","group-divider",4,"ngIf"],["class","empty-state",4,"ngIf"],[1,"group-header","in-progress-header"],[1,"group-dot"],[1,"group-count"],["cdkDrag","",3,"task","stateChanged","deleted","edit",4,"ngFor","ngForOf","ngForTrackBy"],["cdkDrag","",3,"stateChanged","deleted","edit","task"],["cdkDragHandle","",1,"drag-handle"],[1,"drag-dots"],[1,"group-divider"],[1,"group-header","todo-header"],[1,"group-header","done-header"],[1,"empty-state"]],template:function(e,t){e&1&&(h(0,"div",0),M("cdkDropListDropped",function(o){return t.onDrop(o)}),re(1,Jv,7,3,"ng-container",1)(2,eb,1,0,"div",2)(3,nb,7,3,"ng-container",1)(4,ib,1,0,"div",2)(5,ob,7,3,"ng-container",1)(6,sb,4,0,"div",3),m()),e&2&&(p(),w("ngIf",t.inProgress().length>0),p(),w("ngIf",t.inProgress().length>0&&t.todo().length>0),p(),w("ngIf",t.todo().length>0),p(),w("ngIf",t.done().length>0&&(t.todo().length>0||t.inProgress().length>0)),p(),w("ngIf",t.done().length>0),p(),w("ngIf",t.tasks.length===0))},dependencies:[rt,Jn,vt,Pm,Om,Am,Rm,Fs],styles:[".task-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;min-height:80px}.group-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:.78rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;padding:4px 4px 2px;color:#888}.group-count[_ngcontent-%COMP%]{font-weight:400}.group-dot[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%;flex-shrink:0}.in-progress-header[_ngcontent-%COMP%]   .group-dot[_ngcontent-%COMP%]{background:#ffb300}.todo-header[_ngcontent-%COMP%]   .group-dot[_ngcontent-%COMP%]{background:#bdbdbd}.done-header[_ngcontent-%COMP%]   .group-dot[_ngcontent-%COMP%]{background:#43a047}.group-divider[_ngcontent-%COMP%]{border:none;border-top:1.5px dashed #e0e0e0;margin:6px 0}.empty-state[_ngcontent-%COMP%]{text-align:center;padding:48px 24px;color:#aaa;font-size:1rem;border:2px dashed #e0e0e0;border-radius:12px;line-height:1.8}.drag-handle[_ngcontent-%COMP%]{display:flex;align-items:center;cursor:grab;color:#bbb;padding:0 4px;font-size:1.2rem}.drag-handle[_ngcontent-%COMP%]:active{cursor:grabbing}.cdk-drag-preview[_ngcontent-%COMP%]{box-shadow:0 8px 32px #0000002e!important;border-radius:12px!important}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:.3}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}"]})};var Um=(()=>{class i{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||i)(H(ce),H(P))};static \u0275dir=E({type:i})}return i})(),ab=(()=>{class i extends Um{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ke(i)))(r||i)}})();static \u0275dir=E({type:i,features:[_e]})}return i})(),Ws=new b("");var lb={provide:Ws,useExisting:qt(()=>Ai),multi:!0};function cb(){let i=it()?it().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var db=new b(""),Ai=(()=>{class i extends Um{_compositionMode;_composing=!1;constructor(e,t,r){super(e,t),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!cb())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||i)(H(ce),H(P),H(db,8))};static \u0275dir=E({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,r){t&1&&M("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},standalone:!1,features:[pe([lb]),_e]})}return i})();function pc(i){return i==null||gc(i)===0}function gc(i){return i==null?null:Array.isArray(i)||typeof i=="string"?i.length:i instanceof Set?i.size:null}var zr=new b(""),_c=new b(""),ub=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Dt=class{static min(n){return hb(n)}static max(n){return mb(n)}static required(n){return fb(n)}static requiredTrue(n){return pb(n)}static email(n){return gb(n)}static minLength(n){return _b(n)}static maxLength(n){return vb(n)}static pattern(n){return bb(n)}static nullValidator(n){return Hm()}static compose(n){return Km(n)}static composeAsync(n){return Zm(n)}};function hb(i){return n=>{if(n.value==null||i==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<i?{min:{min:i,actual:n.value}}:null}}function mb(i){return n=>{if(n.value==null||i==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>i?{max:{max:i,actual:n.value}}:null}}function fb(i){return pc(i.value)?{required:!0}:null}function pb(i){return i.value===!0?null:{required:!0}}function gb(i){return pc(i.value)||ub.test(i.value)?null:{email:!0}}function _b(i){return n=>{let e=n.value?.length??gc(n.value);return e===null||e===0?null:e<i?{minlength:{requiredLength:i,actualLength:e}}:null}}function vb(i){return n=>{let e=n.value?.length??gc(n.value);return e!==null&&e>i?{maxlength:{requiredLength:i,actualLength:e}}:null}}function bb(i){if(!i)return Hm;let n,e;return typeof i=="string"?(e="",i.charAt(0)!=="^"&&(e+="^"),e+=i,i.charAt(i.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=i.toString(),n=i),t=>{if(pc(t.value))return null;let r=t.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function Hm(i){return null}function $m(i){return i!=null}function Gm(i){return ji(i)?qe(i):i}function Wm(i){let n={};return i.forEach(e=>{n=e!=null?f(f({},n),e):n}),Object.keys(n).length===0?null:n}function qm(i,n){return n.map(e=>e(i))}function yb(i){return!i.validate}function Ym(i){return i.map(n=>yb(n)?n:e=>n.validate(e))}function Km(i){if(!i)return null;let n=i.filter($m);return n.length==0?null:function(e){return Wm(qm(e,n))}}function vc(i){return i!=null?Km(Ym(i)):null}function Zm(i){if(!i)return null;let n=i.filter($m);return n.length==0?null:function(e){let t=qm(e,n).map(Gm);return eo(t).pipe(V(Wm))}}function bc(i){return i!=null?Zm(Ym(i)):null}function Fm(i,n){return i===null?[n]:Array.isArray(i)?[...i,n]:[i,n]}function Xm(i){return i._rawValidators}function Qm(i){return i._rawAsyncValidators}function uc(i){return i?Array.isArray(i)?i:[i]:[]}function Bs(i,n){return Array.isArray(i)?i.includes(n):i===n}function Nm(i,n){let e=uc(n);return uc(i).forEach(r=>{Bs(e,r)||e.push(r)}),e}function Lm(i,n){return uc(n).filter(e=>!Bs(i,e))}var js=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=vc(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=bc(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},hn=class extends js{name;get formDirective(){return null}get path(){return null}},jt=class extends js{_parent=null;name=null;valueAccessor=null},zs=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var qs=(()=>{class i extends zs{constructor(e){super(e)}static \u0275fac=function(t){return new(t||i)(H(jt,2))};static \u0275dir=E({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,r){t&2&&L("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[_e]})}return i})(),Ys=(()=>{class i extends zs{constructor(e){super(e)}static \u0275fac=function(t){return new(t||i)(H(hn,10))};static \u0275dir=E({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,r){t&2&&L("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[_e]})}return i})();var Fr="VALID",Ls="INVALID",Ii="PENDING",Nr="DISABLED",mn=class{},Us=class extends mn{value;source;constructor(n,e){super(),this.value=n,this.source=e}},Vr=class extends mn{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},Br=class extends mn{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},Ri=class extends mn{status;source;constructor(n,e){super(),this.status=n,this.source=e}},Hs=class extends mn{source;constructor(n){super(),this.source=n}},jr=class extends mn{source;constructor(n){super(),this.source=n}};function yc(i){return(Ks(i)?i.validators:i)||null}function wb(i){return Array.isArray(i)?vc(i):i||null}function wc(i,n){return(Ks(n)?n.asyncValidators:i)||null}function Db(i){return Array.isArray(i)?bc(i):i||null}function Ks(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function Jm(i,n,e){let t=i.controls;if(!(n?Object.keys(t):t).length)throw new F(1e3,"");if(!t[e])throw new F(1001,"")}function ef(i,n,e){i._forEachChild((t,r)=>{if(e[r]===void 0)throw new F(-1002,"")})}var Ti=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return Oe(this.statusReactive)}set status(n){Oe(()=>this.statusReactive.set(n))}_status=Xe(()=>this.statusReactive());statusReactive=Z(void 0);get valid(){return this.status===Fr}get invalid(){return this.status===Ls}get pending(){return this.status===Ii}get disabled(){return this.status===Nr}get enabled(){return this.status!==Nr}errors;get pristine(){return Oe(this.pristineReactive)}set pristine(n){Oe(()=>this.pristineReactive.set(n))}_pristine=Xe(()=>this.pristineReactive());pristineReactive=Z(!0);get dirty(){return!this.pristine}get touched(){return Oe(this.touchedReactive)}set touched(n){Oe(()=>this.touchedReactive.set(n))}_touched=Xe(()=>this.touchedReactive());touchedReactive=Z(!1);get untouched(){return!this.touched}_events=new y;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Nm(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Nm(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Lm(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Lm(n,this._rawAsyncValidators))}hasValidator(n){return Bs(this._rawValidators,n)}hasAsyncValidator(n){return Bs(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let t=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched($(f({},n),{sourceControl:t})),e&&n.emitEvent!==!1&&this._events.next(new Br(!0,t))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:t})}),n.onlySelf||this._parent?._updateTouched(n,t),e&&n.emitEvent!==!1&&this._events.next(new Br(!1,t))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let t=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty($(f({},n),{sourceControl:t})),e&&n.emitEvent!==!1&&this._events.next(new Vr(!1,t))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,t),e&&n.emitEvent!==!1&&this._events.next(new Vr(!0,t))}markAsPending(n={}){this.status=Ii;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Ri(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending($(f({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Nr,this.errors=null,this._forEachChild(r=>{r.disable($(f({},n),{onlySelf:!0}))}),this._updateValue();let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Us(this.value,t)),this._events.next(new Ri(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors($(f({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Fr,this._forEachChild(t=>{t.enable($(f({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors($(f({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Fr||this.status===Ii)&&this._runAsyncValidator(t,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Us(this.value,e)),this._events.next(new Ri(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity($(f({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Nr:Fr}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=Ii,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let t=Gm(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,r)=>t&&t._find(r),this)}getError(n,e){let t=e?this.get(e):this;return t?.errors?t.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,t){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||t)&&this._events.next(new Ri(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,t)}_initObservables(){this.valueChanges=new x,this.statusChanges=new x}_calculateStatus(){return this._allControlsDisabled()?Nr:this.errors?Ls:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Ii)?Ii:this._anyControlsHaveStatus(Ls)?Ls:Fr}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let t=!this._anyControlsDirty(),r=this.pristine!==t;this.pristine=t,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new Vr(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new Br(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Ks(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=wb(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=Db(this._rawAsyncValidators)}},ki=class extends Ti{constructor(n,e,t){super(yc(e),wc(t,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,t={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,t={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){ef(this,!0,n),Object.keys(n).forEach(t=>{Jm(this,!0,t),this.controls[t].setValue(n[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(t=>{let r=this.controls[t];r&&r.patchValue(n[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((t,r)=>{t.reset(n?n[r]:null,$(f({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new jr(this))}getRawValue(){return this._reduceChildren({},(n,e,t)=>(n[t]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&n(t,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&n(t))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,t,r)=>((t.enabled||this.disabled)&&(e[r]=t.value),e))}_reduceChildren(n,e){let t=n;return this._forEachChild((r,o)=>{t=e(t,r,o)}),t}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var hc=class extends ki{};var Dc=new b("",{factory:()=>Cc}),Cc="always";function Cb(i,n){return[...n.path,i]}function mc(i,n,e=Cc){Ec(i,n),n.valueAccessor.writeValue(i.value),(i.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(i.disabled),xb(i,n),Mb(i,n),Sb(i,n),Eb(i,n)}function Vm(i,n,e=!0){let t=()=>{};n?.valueAccessor?.registerOnChange(t),n?.valueAccessor?.registerOnTouched(t),Gs(i,n),i&&(n._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function $s(i,n){i.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function Eb(i,n){if(n.valueAccessor.setDisabledState){let e=t=>{n.valueAccessor.setDisabledState(t)};i.registerOnDisabledChange(e),n._registerOnDestroy(()=>{i._unregisterOnDisabledChange(e)})}}function Ec(i,n){let e=Xm(i);n.validator!==null?i.setValidators(Fm(e,n.validator)):typeof e=="function"&&i.setValidators([e]);let t=Qm(i);n.asyncValidator!==null?i.setAsyncValidators(Fm(t,n.asyncValidator)):typeof t=="function"&&i.setAsyncValidators([t]);let r=()=>i.updateValueAndValidity();$s(n._rawValidators,r),$s(n._rawAsyncValidators,r)}function Gs(i,n){let e=!1;if(i!==null){if(n.validator!==null){let r=Xm(i);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==n.validator);o.length!==r.length&&(e=!0,i.setValidators(o))}}if(n.asyncValidator!==null){let r=Qm(i);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==n.asyncValidator);o.length!==r.length&&(e=!0,i.setAsyncValidators(o))}}}let t=()=>{};return $s(n._rawValidators,t),$s(n._rawAsyncValidators,t),e}function xb(i,n){n.valueAccessor.registerOnChange(e=>{i._pendingValue=e,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&tf(i,n)})}function Sb(i,n){n.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&tf(i,n),i.updateOn!=="submit"&&i.markAsTouched()})}function tf(i,n){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function Mb(i,n){let e=(t,r)=>{n.valueAccessor.writeValue(t),r&&n.viewToModelUpdate(t)};i.registerOnChange(e),n._registerOnDestroy(()=>{i._unregisterOnChange(e)})}function nf(i,n){i==null,Ec(i,n)}function Ib(i,n){return Gs(i,n)}function Rb(i,n){if(!i.hasOwnProperty("model"))return!1;let e=i.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function Tb(i){return Object.getPrototypeOf(i.constructor)===ab}function rf(i,n){i._syncPendingControls(),n.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function kb(i,n){if(!n)return null;Array.isArray(n);let e,t,r;return n.forEach(o=>{o.constructor===Ai?e=o:Tb(o)?t=o:r=o}),r||t||e||null}function Ab(i,n){let e=i.indexOf(n);e>-1&&i.splice(e,1)}var Ob={provide:hn,useExisting:qt(()=>Ur)},Lr=Promise.resolve(),Ur=(()=>{class i extends hn{callSetDisabledState;get submitted(){return Oe(this.submittedReactive)}_submitted=Xe(()=>this.submittedReactive());submittedReactive=Z(!1);_directives=new Set;form;ngSubmit=new x;options;constructor(e,t,r){super(),this.callSetDisabledState=r,this.form=new ki({},vc(e),bc(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Lr.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),mc(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Lr.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Lr.then(()=>{let t=this._findContainer(e.path),r=new ki({});nf(r,e),t.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Lr.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){Lr.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),rf(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Hs(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||i)(H(zr,10),H(_c,10),H(Dc,8))};static \u0275dir=E({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,r){t&1&&M("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[pe([Ob]),_e]})}return i})();function Bm(i,n){let e=i.indexOf(n);e>-1&&i.splice(e,1)}function jm(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var Vs=class extends Ti{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,t){super(yc(e),wc(t,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Ks(e)&&(e.nonNullable||e.initialValueIsDefault)&&(jm(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new jr(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){Bm(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){Bm(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){jm(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var Pb=i=>i instanceof Vs;var Zs=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=E({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return i})();var fc=class extends Ti{constructor(n,e,t){super(yc(e),wc(t,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(n){return this.controls[this._adjustIndex(n)]}push(n,e={}){Array.isArray(n)?n.forEach(t=>{this.controls.push(t),this._registerControl(t)}):(this.controls.push(n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(n,e,t={}){this.controls.splice(n,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(n,e={}){let t=this._adjustIndex(n);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(n,e,t={}){let r=this._adjustIndex(n);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(n,e={}){ef(this,!1,n),n.forEach((t,r)=>{Jm(this,!1,r),this.at(r).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(n.forEach((t,r)=>{this.at(r)&&this.at(r).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n=[],e={}){this._forEachChild((t,r)=>{t.reset(n[r],$(f({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new jr(this))}getRawValue(){return this.controls.map(n=>n.getRawValue())}clear(n={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:n.emitEvent}))}_adjustIndex(n){return n<0?n+this.length:n}_syncPendingControls(){let n=this.controls.reduce((e,t)=>t._syncPendingControls()?!0:e,!1);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){this.controls.forEach((e,t)=>{n(e,t)})}_updateValue(){this.value=this.controls.filter(n=>n.enabled||this.disabled).map(n=>n.value)}_anyControls(n){return this.controls.some(e=>e.enabled&&n(e))}_setUpControls(){this._forEachChild(n=>this._registerControl(n))}_allControlsDisabled(){for(let n of this.controls)if(n.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(n){n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)}_find(n){return this.at(n)??null}};var Fb=(()=>{class i extends hn{callSetDisabledState;get submitted(){return Oe(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Xe(()=>this._submittedReactive());_submittedReactive=Z(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Gs(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return mc(t,e,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){Vm(e.control||null,e,!1),Ab(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,rf(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Hs(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,r=this.form.get(e.path);t!==r&&(Vm(t||null,e),Pb(r)&&(mc(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);nf(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&Ib(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Ec(this.form,this),this._oldForm&&Gs(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(t){return new(t||i)(H(zr,10),H(_c,10),H(Dc,8))};static \u0275dir=E({type:i,features:[_e,De]})}return i})();var of=new b("");var Nb={provide:jt,useExisting:qt(()=>Hr)},Hr=(()=>{class i extends jt{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new x;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,t,r,o,s){super(),this._ngModelWarningConfig=s,this._parent=e,this._setValidators(t),this._setAsyncValidators(r),this.valueAccessor=kb(this,o)}ngOnChanges(e){this._added||this._setUpControl(),Rb(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return Cb(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(t){return new(t||i)(H(hn,13),H(zr,10),H(_c,10),H(Ws,10),H(of,8))};static \u0275dir=E({type:i,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[pe([Nb]),_e,De]})}return i})();var Lb={provide:hn,useExisting:qt(()=>zt)},zt=(()=>{class i extends Fb{form=null;ngSubmit=new x;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ke(i)))(r||i)}})();static \u0275dir=E({type:i,selectors:[["","formGroup",""]],hostBindings:function(t,r){t&1&&M("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[pe([Lb]),_e]})}return i})();var Vb=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=A({type:i});static \u0275inj=k({})}return i})();function zm(i){return!!i&&(i.asyncValidators!==void 0||i.validators!==void 0||i.updateOn!==void 0)}var Xs=(()=>{class i{useNonNullable=!1;get nonNullable(){let e=new i;return e.useNonNullable=!0,e}group(e,t=null){let r=this._reduceControls(e),o={};return zm(t)?o=t:t!==null&&(o.validators=t.validator,o.asyncValidators=t.asyncValidator),new ki(r,o)}record(e,t=null){let r=this._reduceControls(e);return new hc(r,t)}control(e,t,r){let o={};return this.useNonNullable?(zm(t)?o=t:(o.validators=t,o.asyncValidators=r),new Vs(e,$(f({},o),{nonNullable:!0}))):new Vs(e,t,r)}array(e,t,r){let o=e.map(s=>this._createControl(s));return new fc(o,t,r)}_reduceControls(e){let t={};return Object.keys(e).forEach(r=>{t[r]=this._createControl(e[r])}),t}_createControl(e){if(e instanceof Vs)return e;if(e instanceof Ti)return e;if(Array.isArray(e)){let t=e[0],r=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(t,r,o)}else return this.control(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Qs=(()=>{class i{static withConfig(e){return{ngModule:i,providers:[{provide:of,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Dc,useValue:e.callSetDisabledState??Cc}]}}static \u0275fac=function(t){return new(t||i)};static \u0275mod=A({type:i});static \u0275inj=k({imports:[Vb]})}return i})();var xc=class{_box;_destroyed=new y;_resizeSubject=new y;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new Ne(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),t.unsubscribe(),this._elementObservables.delete(n)}}).pipe(ie(e=>e.some(t=>t.target===n)),ga({bufferSize:1,refCount:!0}),X(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},af=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=c(R);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let r=t?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new xc(r)),this._observers.get(r).observe(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Bb=["notch"],jb=["matFormFieldNotchedOutline",""],zb=["*"],lf=["iconPrefixContainer"],cf=["textPrefixContainer"],df=["iconSuffixContainer"],uf=["textSuffixContainer"],Ub=["textField"],Hb=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],$b=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Gb(i,n){i&1&&G(0,"span",21)}function Wb(i,n){if(i&1&&(h(0,"label",20),Q(1,1),me(2,Gb,1,0,"span",21),m()),i&2){let e=z(2);w("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),oe("for",e._control.disableAutomaticLabeling?null:e._control.id),p(2),fe(!e.hideRequiredMarker&&e._control.required?2:-1)}}function qb(i,n){if(i&1&&me(0,Wb,3,5,"label",20),i&2){let e=z();fe(e._hasFloatingLabel()?0:-1)}}function Yb(i,n){i&1&&G(0,"div",7)}function Kb(i,n){}function Zb(i,n){if(i&1&&re(0,Kb,0,0,"ng-template",13),i&2){z(2);let e=bn(1);w("ngTemplateOutlet",e)}}function Xb(i,n){if(i&1&&(h(0,"div",9),me(1,Zb,1,1,null,13),m()),i&2){let e=z();w("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),p(),fe(e._forceDisplayInfixLabel()?-1:1)}}function Qb(i,n){i&1&&(h(0,"div",10,2),Q(2,2),m())}function Jb(i,n){i&1&&(h(0,"div",11,3),Q(2,3),m())}function ey(i,n){}function ty(i,n){if(i&1&&re(0,ey,0,0,"ng-template",13),i&2){z();let e=bn(1);w("ngTemplateOutlet",e)}}function ny(i,n){i&1&&(h(0,"div",14,4),Q(2,4),m())}function iy(i,n){i&1&&(h(0,"div",15,5),Q(2,5),m())}function ry(i,n){i&1&&G(0,"div",16)}function oy(i,n){i&1&&(h(0,"div",18),Q(1,6),m())}function sy(i,n){if(i&1&&(h(0,"mat-hint",22),v(1),m()),i&2){let e=z(2);w("id",e._hintLabelId),p(),xe(e.hintLabel)}}function ay(i,n){if(i&1&&(h(0,"div",19),me(1,sy,2,2,"mat-hint",22),Q(2,7),G(3,"div",23),Q(4,8),m()),i&2){let e=z();p(),fe(e.hintLabel?1:-1)}}var $n=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=E({type:i,selectors:[["mat-label"]]})}return i})(),vf=new b("MatError"),Sc=(()=>{class i{id=c(de).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=E({type:i,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(t,r){t&2&&nt("id",r.id)},inputs:{id:"id"},features:[pe([{provide:vf,useExisting:i}])]})}return i})(),$r=(()=>{class i{align="start";id=c(de).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||i)};static \u0275dir=E({type:i,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,r){t&2&&(nt("id",r.id),oe("align",null),L("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return i})(),bf=new b("MatPrefix"),Mc=(()=>{class i{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||i)};static \u0275dir=E({type:i,selectors:[["","matPrefix",""],["","matIconPrefix",""],["","matTextPrefix",""]],inputs:{_isTextSelector:[0,"matTextPrefix","_isTextSelector"]},features:[pe([{provide:bf,useExisting:i}])]})}return i})(),yf=new b("MatSuffix"),Ic=(()=>{class i{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||i)};static \u0275dir=E({type:i,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[pe([{provide:yf,useExisting:i}])]})}return i})(),wf=new b("FloatingLabelParent"),hf=(()=>{class i{_elementRef=c(P);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=c(af);_ngZone=c(R);_parent=c(wf);_resizeSubscription=new ge;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return ly(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=E({type:i,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,r){t&2&&L("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return i})();function ly(i){let n=i;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var mf="mdc-line-ripple--active",Js="mdc-line-ripple--deactivating",ff=(()=>{class i{_elementRef=c(P);_cleanupTransitionEnd;constructor(){let e=c(R),t=c(ce);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Js),e.add(mf)}deactivate(){this._elementRef.nativeElement.classList.add(Js)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,r=t.contains(Js);e.propertyName==="opacity"&&r&&t.remove(mf,Js)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=E({type:i,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return i})(),pf=(()=>{class i{_elementRef=c(P);_ngZone=c(R);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,r){if(t&1&&Ze(Bb,5),t&2){let o;ee(o=te())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,r){t&2&&L("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:jb,ngContentSelectors:zb,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,r){t&1&&(Ee(),Et(0,"div",1),Rt(1,"div",2,0),Q(3),Zt(),Et(4,"div",3))},encapsulation:2,changeDetection:0})}return i})(),Gr=(()=>{class i{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||i)};static \u0275dir=E({type:i})}return i})();var Wr=new b("MatFormField"),cy=new b("MAT_FORM_FIELD_DEFAULT_OPTIONS"),gf="fill",dy="auto",_f="fixed",uy="translateY(-50%)",Oi=(()=>{class i{_elementRef=c(P);_changeDetectorRef=c(Se);_platform=c(J);_idGenerator=c(de);_ngZone=c(R);_defaults=c(cy,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=zi("iconPrefixContainer");_textPrefixContainerSignal=zi("textPrefixContainer");_iconSuffixContainerSignal=zi("iconSuffixContainer");_textSuffixContainerSignal=zi("textSuffixContainer");_prefixSuffixContainers=Xe(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=pd($n);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=lt(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||dy}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||gf;this._appearanceSignal.set(t)}_appearanceSignal=Z(gf);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||_f}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||_f}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new y;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Ie();constructor(){let e=this._defaults,t=c(Fe);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),_n(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Xe(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(r+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(Le([void 0,void 0]),V(()=>[t.errorState,t.userAriaDescribedBy]),pa(),ie(([[o,s],[a,l]])=>o!==a||s!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(X(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),et(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){vd({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Xe(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(a=>a.align==="start"):null,s=this._hintChildren?this._hintChildren.find(a=>a.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),s&&e.push(s.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let t=this._control.describedByIds,r;if(t){let o=this._describedByIds||e;r=e.concat(t.filter(s=>s&&!o.includes(s)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,s=e?.getBoundingClientRect().width??0,a=t?.getBoundingClientRect().width??0,l=r?.getBoundingClientRect().width??0,d=o?.getBoundingClientRect().width??0,u=this._currentDirection==="rtl"?"-1":"1",g=`${s+a}px`,Y=`calc(${u} * (${g} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,W=`var(--mat-mdc-form-field-label-transform, ${uy} translateX(${Y}))`,q=s+a+l+d;return[W,q]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-form-field"]],contentQueries:function(t,r,o){if(t&1&&(cd(o,r._labelChild,$n,5),lo(o,Gr,5)(o,bf,5)(o,yf,5)(o,vf,5)(o,$r,5)),t&2){Ca();let s;ee(s=te())&&(r._formFieldControl=s.first),ee(s=te())&&(r._prefixChildren=s),ee(s=te())&&(r._suffixChildren=s),ee(s=te())&&(r._errorChildren=s),ee(s=te())&&(r._hintChildren=s)}},viewQuery:function(t,r){if(t&1&&(dd(r._iconPrefixContainerSignal,lf,5)(r._textPrefixContainerSignal,cf,5)(r._iconSuffixContainerSignal,df,5)(r._textSuffixContainerSignal,uf,5),Ze(Ub,5)(lf,5)(cf,5)(df,5)(uf,5)(hf,5)(pf,5)(ff,5)),t&2){Ca(4);let o;ee(o=te())&&(r._textField=o.first),ee(o=te())&&(r._iconPrefixContainer=o.first),ee(o=te())&&(r._textPrefixContainer=o.first),ee(o=te())&&(r._iconSuffixContainer=o.first),ee(o=te())&&(r._textSuffixContainer=o.first),ee(o=te())&&(r._floatingLabel=o.first),ee(o=te())&&(r._notchedOutline=o.first),ee(o=te())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,r){t&2&&L("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[pe([{provide:Wr,useExisting:i},{provide:wf,useExisting:i}])],ngContentSelectors:$b,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,r){if(t&1&&(Ee(Hb),re(0,qb,1,1,"ng-template",null,0,hd),h(2,"div",6,1),M("click",function(s){return r._control.onContainerClick(s)}),me(4,Yb,1,0,"div",7),h(5,"div",8),me(6,Xb,2,2,"div",9),me(7,Qb,3,0,"div",10),me(8,Jb,3,0,"div",11),h(9,"div",12),me(10,ty,1,1,null,13),Q(11),m(),me(12,ny,3,0,"div",14),me(13,iy,3,0,"div",15),m(),me(14,ry,1,0,"div",16),m(),h(15,"div",17),me(16,oy,2,0,"div",18)(17,ay,5,1,"div",19),m()),t&2){let o;p(2),L("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),p(2),fe(!r._hasOutline()&&!r._control.disabled?4:-1),p(2),fe(r._hasOutline()?6:-1),p(),fe(r._hasIconPrefix?7:-1),p(),fe(r._hasTextPrefix?8:-1),p(2),fe(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),p(2),fe(r._hasTextSuffix?12:-1),p(),fe(r._hasIconSuffix?13:-1),p(),fe(r._hasOutline()?-1:14),p(),L("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let s=r._getSubscriptMessageType();p(),fe((o=s)==="error"?16:o==="hint"?17:-1)}},dependencies:[hf,pf,Aa,ff,$r],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return i})();var Ut=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=A({type:i});static \u0275inj=k({imports:[Jo,Oi,se]})}return i})();var hy=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return i})(),my={passive:!0},Cf=(()=>{class i{_platform=c(J);_ngZone=c(R);_renderer=c(Ce).createRenderer(null,null);_styleLoader=c(Me);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return We;this._styleLoader.load(hy);let t=be(e),r=this._monitoredElements.get(t);if(r)return r.subject;let o=new y,s="cdk-text-field-autofilled",a=d=>{d.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(s)?(t.classList.add(s),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!0}))):d.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(s)&&(t.classList.remove(s),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",a,my)));return this._monitoredElements.set(t,{subject:o,unlisten:l}),o}stopMonitoring(e){let t=be(e),r=this._monitoredElements.get(t);r&&(r.unlisten(),r.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ef=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=A({type:i});static \u0275inj=k({})}return i})();var xf=new b("MAT_INPUT_VALUE_ACCESSOR");var ea=(()=>{class i{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Pi=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,t,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=t,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=t?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var fy=["button","checkbox","file","hidden","image","radio","range","reset","submit"],py=new b("MAT_INPUT_CONFIG"),ta=(()=>{class i{_elementRef=c(P);_platform=c(J);ngControl=c(jt,{optional:!0,self:!0});_autofillMonitor=c(Cf);_ngZone=c(R);_formField=c(Wr,{optional:!0});_renderer=c(ce);_uid=c(de).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=c(py,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new y;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=lt(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Dt.required)??!1}set required(e){this._required=lt(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Nl().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=lt(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Nl().has(e));constructor(){let e=c(Ur,{optional:!0}),t=c(zt,{optional:!0}),r=c(ea),o=c(xf,{optional:!0,self:!0}),s=this._elementRef.nativeElement,a=s.nodeName.toLowerCase();o?Kt(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=s,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(s,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Pi(r,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=a==="select",this._isTextarea=a==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=s.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&_n(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){fy.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||i)};static \u0275dir=E({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,r){t&1&&M("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),t&2&&(nt("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),oe("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),L("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",j]},exportAs:["matInput"],features:[pe([{provide:Gr,useExisting:i}]),De]})}return i})(),na=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=A({type:i});static \u0275inj=k({imports:[Ut,Ut,Ef,se]})}return i})();function gy(i,n){i&1&&(h(0,"mat-error"),v(1," La description est obligatoire "),m())}var qr=class i{constructor(n,e,t){this.dialogRef=n;this.data=e;this.fb=t;this.form=this.fb.group({description:[this.data.task?.description||"",Dt.required],ticketNumber:[this.data.task?.ticketNumber||""]})}form;submit(){if(this.form.valid){let n=this.form.value;this.dialogRef.close({description:n.description,ticketNumber:n.ticketNumber||void 0})}}static \u0275fac=function(e){return new(e||i)(H(mt),H(Un),H(Xs))};static \u0275cmp=S({type:i,selectors:[["app-task-form"]],decls:22,vars:6,consts:[["mat-dialog-title",""],[1,"task-form",3,"formGroup"],["appearance","outline",1,"full-width"],["matInput","","formControlName","description","rows","3","placeholder","D\xE9crivez la t\xE2che..."],[4,"ngIf"],["matInput","","formControlName","ticketNumber","placeholder","ex: PROJ-123"],["matPrefix",""],["align","end"],["mat-button","",3,"click"],["mat-raised-button","","color","primary",3,"click","disabled"]],template:function(e,t){if(e&1&&(h(0,"h2",0)(1,"mat-icon"),v(2),m(),v(3),m(),h(4,"mat-dialog-content")(5,"form",1)(6,"mat-form-field",2)(7,"mat-label"),v(8,"Description *"),m(),G(9,"textarea",3),re(10,gy,2,0,"mat-error",4),m(),h(11,"mat-form-field",2)(12,"mat-label"),v(13,"N\xB0 de ticket (optionnel)"),m(),G(14,"input",5),h(15,"mat-icon",6),v(16,"confirmation_number"),m()()()(),h(17,"mat-dialog-actions",7)(18,"button",8),M("click",function(){return t.dialogRef.close()}),v(19,"Annuler"),m(),h(20,"button",9),M("click",function(){return t.submit()}),v(21),m()()),e&2){let r;p(2),xe(t.data.task?"edit":"add_task"),p(),le(" ",t.data.task?"Modifier la t\xE2che":"Nouvelle t\xE2che"," "),p(2),w("formGroup",t.form),p(5),w("ngIf",(r=t.form.get("description"))==null?null:r.hasError("required")),p(10),w("disabled",t.form.invalid),p(),le(" ",t.data.task?"Mettre \xE0 jour":"Cr\xE9er"," ")}},dependencies:[rt,vt,Qs,Zs,Ai,qs,Ys,zt,Hr,ft,Ds,un,dn,Ut,Oi,$n,Sc,Mc,na,ta,dt,Mt,ht,ut],styles:["mat-dialog-content[_ngcontent-%COMP%]{padding-top:8px!important}.task-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;min-width:400px}.full-width[_ngcontent-%COMP%]{width:100%}h2[mat-dialog-title][_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}@media(max-width:480px){.task-form[_ngcontent-%COMP%]{min-width:unset}.dates-row[_ngcontent-%COMP%]{flex-direction:column}}"]})};var ia=class i{constructor(n,e){this.dialogRef=n;this.data=e}static \u0275fac=function(e){return new(e||i)(H(mt),H(Un))};static \u0275cmp=S({type:i,selectors:[["app-confirm-all-delete-dialog"]],decls:17,vars:3,consts:[[1,"dialog-container"],[1,"dialog-icon"],[1,"dialog-title"],[1,"warning-text"],["align","center"],["mat-stroked-button","",3,"click"],["mat-raised-button","",1,"delete-btn",3,"click"]],template:function(e,t){e&1&&(h(0,"mat-dialog-content")(1,"div",0)(2,"mat-icon",1),v(3,"delete_sweep"),m(),h(4,"h2",2),v(5,"Supprimer toutes les t\xE2ches ?"),m(),h(6,"p",3),v(7),m(),h(8,"p",3),v(9,"Cette action est irr\xE9versible."),m()()(),h(10,"mat-dialog-actions",4)(11,"button",5),M("click",function(){return t.dialogRef.close(!1)}),v(12,"Annuler"),m(),h(13,"button",6),M("click",function(){return t.dialogRef.close(!0)}),h(14,"mat-icon"),v(15,"delete_sweep"),m(),v(16," Tout supprimer "),m()()),e&2&&(p(7),ud(" ",t.data.count," t\xE2che",t.data.count>1?"s":""," seront supprim\xE9e",t.data.count>1?"s":""," d\xE9finitivement. "))},dependencies:[ft,un,dn,dt,Mt,ht,ut],styles:[".dialog-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-align:center;padding:16px 8px 0;min-width:300px}.dialog-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px;color:#d32f2f;margin-bottom:12px}.dialog-title[_ngcontent-%COMP%]{margin:0 0 12px;font-size:1.2rem;font-weight:600}.warning-text[_ngcontent-%COMP%]{color:#757575;font-size:.85rem;margin:0 0 4px}mat-dialog-actions[_ngcontent-%COMP%]{gap:8px}.delete-btn[_ngcontent-%COMP%]{background-color:#d32f2f!important;color:#fff!important}.delete-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff!important}"]})};var Yr=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new y;constructor(n=!1,e,t=!0,r){this._multiple=n,this._emitChanges=t,this.compareWith=r,e&&e.length&&(n?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){this._verifyValueAssignment(n),n.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...n){this._verifyValueAssignment(n),n.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...n){this._verifyValueAssignment(n);let e=this.selected,t=new Set(n.map(o=>this._getConcreteValue(o)));n.forEach(o=>this._markSelected(o)),e.filter(o=>!t.has(this._getConcreteValue(o,t))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(n,t))return t;return n}else return n}};var Mf=(()=>{class i{_animationsDisabled=Ie();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,r){t&2&&L("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,r){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return i})();var _y=["text"],vy=[[["mat-icon"]],"*"],by=["mat-icon","*"];function yy(i,n){if(i&1&&G(0,"mat-pseudo-checkbox",1),i&2){let e=z();w("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function wy(i,n){if(i&1&&G(0,"mat-pseudo-checkbox",3),i&2){let e=z();w("disabled",e.disabled)}}function Dy(i,n){if(i&1&&(h(0,"span",4),v(1),m()),i&2){let e=z();p(),le("(",e.group.label,")")}}var Tc=new b("MAT_OPTION_PARENT_COMPONENT"),kc=new b("MatOptgroup");var Rc=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},Fi=(()=>{class i{_element=c(P);_changeDetectorRef=c(Se);_parent=c(Tc,{optional:!0});group=c(kc,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=c(de).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=Z(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new x;_text;_stateChanges=new y;constructor(){let e=c(Me);e.load(vi),e.load(fi),this._signalDisableRipple=!!this._parent&&Kt(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!He(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Rc(this,e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-option"]],viewQuery:function(t,r){if(t&1&&Ze(_y,7),t&2){let o;ee(o=te())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,r){t&1&&M("click",function(){return r._selectViaInteraction()})("keydown",function(s){return r._handleKeydown(s)}),t&2&&(nt("id",r.id),oe("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),L("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",j]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:by,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,r){t&1&&(Ee(vy),me(0,yy,1,2,"mat-pseudo-checkbox",1),Q(1),h(2,"span",2,0),Q(4,1),m(),me(5,wy,1,1,"mat-pseudo-checkbox",3),me(6,Dy,2,1,"span",4),G(7,"div",5)),t&2&&(fe(r.multiple?0:-1),p(5),fe(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),p(),fe(r.group&&r.group._inert?6:-1),p(),w("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[Mf,as],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return i})();function If(i,n,e){if(e.length){let t=n.toArray(),r=e.toArray(),o=0;for(let s=0;s<i+1;s++)t[s].group&&t[s].group===r[o]&&o++;return o}return 0}function Rf(i,n,e,t){return i<e?i:i+n>e+t?Math.max(0,i-t+n):e}var Tf=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=A({type:i});static \u0275inj=k({imports:[se]})}return i})();var Ac=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=A({type:i});static \u0275inj=k({imports:[cs,Tf,Fi,se]})}return i})();var Cy=["trigger"],Ey=["panel"],xy=[[["mat-select-trigger"]],"*"],Sy=["mat-select-trigger","*"];function My(i,n){if(i&1&&(h(0,"span",4),v(1),m()),i&2){let e=z();p(),xe(e.placeholder)}}function Iy(i,n){i&1&&Q(0)}function Ry(i,n){if(i&1&&(h(0,"span",11),v(1),m()),i&2){let e=z(2);p(),xe(e.triggerValue)}}function Ty(i,n){if(i&1&&(h(0,"span",5),me(1,Iy,1,0)(2,Ry,2,1,"span",11),m()),i&2){let e=z();p(),fe(e.customTrigger?1:2)}}function ky(i,n){if(i&1){let e=_t();h(0,"div",12,1),M("keydown",function(r){ke(e);let o=z();return Ae(o._handleKeydown(r))}),Q(2,1),m()}if(i&2){let e=z();xt(e.panelClass),L("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),oe("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var Ay=new b("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let i=c(B);return()=>jn(i)}}),Oy=new b("MAT_SELECT_CONFIG"),Py=new b("MatSelectTrigger"),Oc=class{source;value;constructor(n,e){this.source=n,this.value=e}},kf=(()=>{class i{_viewportRuler=c(wt);_changeDetectorRef=c(Se);_elementRef=c(P);_dir=c(Fe,{optional:!0});_idGenerator=c(de);_renderer=c(ce);_parentFormField=c(Wr,{optional:!0});ngControl=c(jt,{self:!0,optional:!0});_liveAnnouncer=c(Il);_defaultOptions=c(Oy,{optional:!0});_animationsDisabled=Ie();_popoverLocation;_initialized=new y;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let r=this.panel.nativeElement,o=If(e,this.options,this.optionGroups),s=t._getHostElement();e===0&&o===1?r.scrollTop=0:r.scrollTop=Rf(s.offsetTop,s.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Oc(this,e)}_scrollStrategyFactory=c(Ay);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new y;_errorStateTracker;stateChanges=new y;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=Z(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Dt.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Ct(()=>{let e=this.options;return e?e.changes.pipe(Le(e),he(()=>et(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(he(()=>this.optionSelectionChanges))});openedChange=new x;_openedStream=this.openedChange.pipe(ie(e=>e),V(()=>{}));_closedStream=this.openedChange.pipe(ie(e=>!e),V(()=>{}));selectionChange=new x;valueChange=new x;constructor(){let e=c(ea),t=c(Ur,{optional:!0}),r=c(zt,{optional:!0}),o=c(new yn("tabindex"),{optional:!0}),s=c(Ir,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Pi(e,this.ngControl,r,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=s?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Yr(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(X(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(X(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(Le(null),X(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute("aria-labelledby",e):r.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(ae(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&rs(this._trackedModal,"aria-owns",t),Pl(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;rs(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,r=t===40||t===38||t===37||t===39,o=t===13||t===32,s=this._keyManager;if(!s.isTyping()&&o&&!He(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let a=this.selected;s.onKeydown(e);let l=this.selected;l&&a!==l&&this._liveAnnouncer.announce(l.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,r=e.keyCode,o=r===40||r===38,s=t.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!s&&(r===13||r===32)&&t.activeItem&&!He(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!s&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let a=this.options.some(l=>!l.disabled&&!l.selected);this.options.forEach(l=>{l.disabled||(a?l.select():l.deselect())})}else{let a=t.activeItemIndex;t.onKeydown(e),this._multiple&&o&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==a&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!He(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Ci?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new wr(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=et(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(X(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),et(...this.options.map(t=>t._stateChanges)).pipe(X(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,r)=>this.sortComparator?this.sortComparator(t,r,e):e.indexOf(t)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(r=>r.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=ve(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-select"]],contentQueries:function(t,r,o){if(t&1&&lo(o,Py,5)(o,Fi,5)(o,kc,5),t&2){let s;ee(s=te())&&(r.customTrigger=s.first),ee(s=te())&&(r.options=s),ee(s=te())&&(r.optionGroups=s)}},viewQuery:function(t,r){if(t&1&&Ze(Cy,5)(Ey,5)(bs,5),t&2){let o;ee(o=te())&&(r.trigger=o.first),ee(o=te())&&(r.panel=o.first),ee(o=te())&&(r._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,r){t&1&&M("keydown",function(s){return r._handleKeydown(s)})("focus",function(){return r._onFocus()})("blur",function(){return r._onBlur()}),t&2&&(oe("id",r.id)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r.panelOpen?r.id+"-panel":null)("aria-expanded",r.panelOpen)("aria-label",r.ariaLabel||null)("aria-required",r.required.toString())("aria-disabled",r.disabled.toString())("aria-invalid",r.errorState)("aria-activedescendant",r._getAriaActiveDescendant()),L("mat-mdc-select-disabled",r.disabled)("mat-mdc-select-invalid",r.errorState)("mat-mdc-select-required",r.required)("mat-mdc-select-empty",r.empty)("mat-mdc-select-multiple",r.multiple)("mat-select-open",r.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",j],disableRipple:[2,"disableRipple","disableRipple",j],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Tt(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",j],placeholder:"placeholder",required:[2,"required","required",j],multiple:[2,"multiple","multiple",j],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",j],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Tt],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",j]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[pe([{provide:Gr,useExisting:i},{provide:Tc,useExisting:i}]),De],ngContentSelectors:Sy,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,r){if(t&1&&(Ee(xy),h(0,"div",2,0),M("click",function(){return r.open()}),h(3,"div",3),me(4,My,2,1,"span",4)(5,Ty,3,1,"span",5),m(),h(6,"div",6)(7,"div",7),io(),h(8,"svg",8),G(9,"path",9),m()()()(),re(10,ky,3,16,"ng-template",10),M("detach",function(){return r.close()})("backdropClick",function(){return r.close()})("overlayKeydown",function(s){return r._handleOverlayKeydown(s)})),t&2){let o=bn(1);p(3),oe("id",r._valueId),p(),fe(r.empty?4:5),p(6),w("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",r._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",r._scrollStrategy)("cdkConnectedOverlayOrigin",r._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",r._positions)("cdkConnectedOverlayWidth",r._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",r._popoverLocation)}},dependencies:[Ci,bs],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return i})();var Af=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=A({type:i});static \u0275inj=k({imports:[Bt,Ac,se,Lt,Ut,Ac]})}return i})();var Of=(()=>{class i{get vertical(){return this._vertical}set vertical(e){this._vertical=lt(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=lt(e)}_inset=!1;static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(t,r){t&2&&(oe("aria-orientation",r.vertical?"vertical":"horizontal"),L("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(t,r){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-top-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-right-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2,changeDetection:0})}return i})(),Pf=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=A({type:i});static \u0275inj=k({imports:[se]})}return i})();var Ly=["mat-internal-form-field",""],Vy=["*"],Ff=(()=>{class i{labelPosition="after";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,r){t&2&&L("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:Ly,ngContentSelectors:Vy,decls:1,vars:0,template:function(t,r){t&1&&(Ee(),Q(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return i})();var By=["switch"],jy=["*"];function zy(i,n){i&1&&(h(0,"span",11),io(),h(1,"svg",13),G(2,"path",14),m(),h(3,"svg",15),G(4,"path",16),m()())}var Uy=new b("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),sa=class{source;checked;constructor(n,e){this.source=n,this.checked=e}},Pc=(()=>{class i{_elementRef=c(P);_focusMonitor=c(Ft);_changeDetectorRef=c(Se);defaults=c(Uy);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new sa(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=Ie();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new x;toggleChange=new x;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){c(Me).load(vi);let e=c(new yn("tabindex"),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||"accent",this.id=this._uniqueId=c(de).getId("mat-mdc-slide-toggle-"),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new sa(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-slide-toggle"]],viewQuery:function(t,r){if(t&1&&Ze(By,5),t&2){let o;ee(o=te())&&(r._switchElement=o.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(t,r){t&2&&(nt("id",r.id),oe("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),xt(r.color?"mat-"+r.color:""),L("mat-mdc-slide-toggle-focused",r._focused)("mat-mdc-slide-toggle-checked",r.checked)("_mat-animation-noopable",r._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",j],color:"color",disabled:[2,"disabled","disabled",j],disableRipple:[2,"disableRipple","disableRipple",j],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Tt(e)],checked:[2,"checked","checked",j],hideIcon:[2,"hideIcon","hideIcon",j],disabledInteractive:[2,"disabledInteractive","disabledInteractive",j]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[pe([{provide:Ws,useExisting:qt(()=>i),multi:!0},{provide:zr,useExisting:i,multi:!0}]),De],ngContentSelectors:jy,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(t,r){if(t&1&&(Ee(),h(0,"div",1)(1,"button",2,0),M("click",function(){return r._handleClick()}),G(3,"div",3)(4,"span",4),h(5,"span",5)(6,"span",6)(7,"span",7),G(8,"span",8),m(),h(9,"span",9),G(10,"span",10),m(),me(11,zy,5,0,"span",11),m()()(),h(12,"label",12),M("click",function(s){return s.stopPropagation()}),Q(13),m()()),t&2){let o=bn(2);w("labelPosition",r.labelPosition),p(),L("mdc-switch--selected",r.checked)("mdc-switch--unselected",!r.checked)("mdc-switch--checked",r.checked)("mdc-switch--disabled",r.disabled)("mat-mdc-slide-toggle-disabled-interactive",r.disabledInteractive),w("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex)("disabled",r.disabled&&!r.disabledInteractive),oe("id",r.buttonId)("name",r.name)("aria-label",r.ariaLabel)("aria-labelledby",r._getAriaLabelledBy())("aria-describedby",r.ariaDescribedby)("aria-required",r.required||null)("aria-checked",r.checked)("aria-disabled",r.disabled&&r.disabledInteractive?"true":null),p(9),w("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0),p(),fe(r.hideIcon?-1:11),p(),w("for",r.buttonId),oe("id",r._labelId)}},dependencies:[as,Ff],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--mat-slide-toggle-track-height, 32px);
  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--mat-slide-toggle-handle-width);
  height: var(--mat-slide-toggle-handle-height);
  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--mat-slide-toggle-selected-handle-size, 24px);
  height: var(--mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--selected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));
}
.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));
}
.mdc-switch--unselected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));
}
.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--mat-slide-toggle-state-layer-size, 40px);
  height: var(--mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--mat-slide-toggle-selected-icon-size, 16px);
  height: var(--mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return i})(),Nf=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=A({type:i});static \u0275inj=k({imports:[Pc,se]})}return i})();function $y(i,n){if(i&1){let e=_t();h(0,"button",20),M("click",function(){let r=ke(e).$implicit,o=z(2);return Ae(o.selectProvider(r))}),h(1,"span",21),v(2),m(),h(3,"span",22),v(4),m()()}if(i&2){let e,t=n.$implicit,r=z(2);L("selected",((e=r.form.get("provider"))==null?null:e.value)===t.id),p(2),xe(t.logo),p(2),xe(t.label)}}function Gy(i,n){if(i&1&&(h(0,"mat-option",26),v(1),m()),i&2){let e=n.$implicit;w("value",e.id),p(),le(" ",e.label," ")}}function Wy(i,n){if(i&1&&(h(0,"mat-form-field",23)(1,"mat-label"),v(2,"Mod\xE8le"),m(),h(3,"mat-select",24),re(4,Gy,2,2,"mat-option",25),m()()),i&2){let e=z(2);p(4),w("ngForOf",e.currentProvider.models)}}function qy(i,n){if(i&1){let e=_t();h(0,"mat-form-field",23)(1,"mat-label"),v(2),m(),G(3,"input",27),h(4,"button",28),M("click",function(){ke(e);let r=z(2);return Ae(r.showKey=!r.showKey)}),h(5,"mat-icon"),v(6),m()(),h(7,"mat-hint")(8,"a",29)(9,"mat-icon",30),v(10,"open_in_new"),m(),v(11),m()()()}if(i&2){let e=z(2);p(2),le("Cl\xE9 API ",e.currentProvider.label),p(),w("type",e.showKey?"text":"password"),p(3),xe(e.showKey?"visibility_off":"visibility"),p(2),w("href",e.currentProvider.docUrl,nd),p(3),le(" Obtenir une cl\xE9 API ",e.currentProvider.label," ")}}function Yy(i,n){i&1&&(h(0,"div",31)(1,"mat-icon"),v(2,"info"),m(),h(3,"span"),v(4,"Sans cl\xE9 API, un r\xE9sum\xE9 local sera g\xE9n\xE9r\xE9 automatiquement."),m()())}function Ky(i,n){if(i&1&&(Xt(0),h(1,"p",15),v(2,"Fournisseur de LLM"),m(),h(3,"div",16),re(4,$y,5,4,"button",17),m(),G(5,"mat-divider",10),re(6,Wy,5,1,"mat-form-field",18)(7,qy,12,5,"mat-form-field",18)(8,Yy,5,0,"div",19),Qt()),i&2){let e,t=z();p(4),w("ngForOf",t.providers),p(2),w("ngIf",t.currentProvider),p(),w("ngIf",t.currentProvider),p(),w("ngIf",!t.currentProvider||!((e=t.form.get("apiKey"))!=null&&e.value))}}var aa=class i{dialogRef=c(mt);storage=c(It);fb=c(Xs);providers=sm;showKey=!1;form=this.fb.group({enabled:[!1],provider:["openai",Dt.required],model:["gpt-4o-mini",Dt.required],apiKey:[""]});get currentProvider(){return this.providers.find(n=>n.id===this.form.get("provider")?.value)}ngOnInit(){let n=this.storage.getLlmConfig();n&&this.form.patchValue($(f({},n),{enabled:n.enabled??!1}))}selectProvider(n){this.form.patchValue({provider:n.id,model:n.models[0].id})}save(){let n=this.form.value;this.storage.setLlmConfig({provider:n.provider,model:n.model,apiKey:n.apiKey||"",enabled:n.enabled??!1}),this.dialogRef.close(!0)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=S({type:i,selectors:[["app-settings-dialog"]],decls:26,vars:4,consts:[[1,"settings-header"],[1,"settings-icon"],["mat-dialog-title",""],[1,"settings-form",3,"formGroup"],[1,"toggle-row"],[1,"toggle-label"],[1,"toggle-icon"],[1,"toggle-title"],[1,"toggle-sub"],["formControlName","enabled","color","primary"],[1,"divider"],[4,"ngIf"],["align","end"],["mat-button","",3,"click"],["mat-raised-button","","color","primary",3,"click","disabled"],[1,"section-label"],[1,"provider-grid"],["type","button","class","provider-card",3,"selected","click",4,"ngFor","ngForOf"],["appearance","outline","class","full-width",4,"ngIf"],["class","info-box",4,"ngIf"],["type","button",1,"provider-card",3,"click"],[1,"provider-logo"],[1,"provider-name"],["appearance","outline",1,"full-width"],["formControlName","model"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["matInput","","formControlName","apiKey","placeholder","sk-...","autocomplete","off",3,"type"],["mat-icon-button","","matSuffix","","type","button",3,"click"],["target","_blank",1,"doc-link",3,"href"],[1,"hint-icon"],[1,"info-box"]],template:function(e,t){if(e&1&&(h(0,"div",0)(1,"mat-icon",1),v(2,"settings"),m(),h(3,"h2",2),v(4,"Param\xE8tres du r\xE9sum\xE9"),m()(),h(5,"mat-dialog-content")(6,"form",3)(7,"div",4)(8,"div",5)(9,"mat-icon",6),v(10,"auto_awesome"),m(),h(11,"div")(12,"div",7),v(13,"R\xE9sum\xE9 par IA"),m(),h(14,"div",8),v(15),m()()(),G(16,"mat-slide-toggle",9),m(),G(17,"mat-divider",10),re(18,Ky,9,4,"ng-container",11),m()(),h(19,"mat-dialog-actions",12)(20,"button",13),M("click",function(){return t.dialogRef.close()}),v(21,"Annuler"),m(),h(22,"button",14),M("click",function(){return t.save()}),h(23,"mat-icon"),v(24,"save"),m(),v(25," Sauvegarder "),m()()),e&2){let r,o;p(6),w("formGroup",t.form),p(9),xe((r=t.form.get("enabled"))!=null&&r.value?"Activ\xE9 \u2014 utilise le LLM configur\xE9":"D\xE9sactiv\xE9 \u2014 r\xE9sum\xE9 local uniquement"),p(3),w("ngIf",(o=t.form.get("enabled"))==null?null:o.value),p(4),w("disabled",t.form.invalid)}},dependencies:[rt,Jn,vt,Qs,Zs,Ai,qs,Ys,zt,Hr,ft,Ds,un,dn,Ut,Oi,$n,$r,Ic,na,ta,Af,kf,Fi,dt,Mt,Pn,ht,ut,Pf,Of,Nf,Pc],styles:[".settings-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:16px 24px 0}.settings-icon[_ngcontent-%COMP%]{color:#3f51b5;font-size:28px;width:28px;height:28px}h2[mat-dialog-title][_ngcontent-%COMP%]{margin:0;font-size:1.3rem}mat-dialog-content[_ngcontent-%COMP%]{padding-top:16px!important;min-width:440px}.settings-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.section-label[_ngcontent-%COMP%]{margin:0 0 8px;font-size:.8rem;font-weight:600;text-transform:uppercase;letter-spacing:.05em;color:#888}.provider-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:4px}.provider-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:6px;padding:14px 8px;border:2px solid #e0e0e0;border-radius:12px;background:#fff;cursor:pointer;transition:all .18s;font-family:inherit}.provider-card[_ngcontent-%COMP%]:hover{border-color:#7986cb;background:#f5f5ff}.provider-card.selected[_ngcontent-%COMP%]{border-color:#3f51b5;background:#e8eaf6;box-shadow:0 0 0 2px #3f51b533}.provider-logo[_ngcontent-%COMP%]{font-size:1.8rem;line-height:1}.provider-name[_ngcontent-%COMP%]{font-size:.82rem;font-weight:600;color:#333}.divider[_ngcontent-%COMP%]{margin:8px 0!important}.toggle-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:4px 0}.toggle-label[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}.toggle-icon[_ngcontent-%COMP%]{color:#764ba2}.toggle-title[_ngcontent-%COMP%]{font-weight:600;font-size:.95rem}.toggle-sub[_ngcontent-%COMP%]{font-size:.78rem;color:#888;margin-top:2px}.full-width[_ngcontent-%COMP%]{width:100%}.doc-link[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:3px;color:#3f51b5;text-decoration:none;font-size:.75rem}.doc-link[_ngcontent-%COMP%]:hover{text-decoration:underline}.hint-icon[_ngcontent-%COMP%]{font-size:12px;width:12px;height:12px}.info-box[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:10px 14px;background:#e3f2fd;border-radius:8px;font-size:.85rem;color:#1565c0}.info-box[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;flex-shrink:0}mat-dialog-actions[_ngcontent-%COMP%]{gap:8px}@media(max-width:480px){mat-dialog-content[_ngcontent-%COMP%]{min-width:unset}.provider-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}"]})};function Zy(i,n){i&1&&(h(0,"span",21),v(1,"Aujourd'hui"),m())}function Xy(i,n){i&1&&(h(0,"span",22),v(1,"Jour pass\xE9"),m())}function Qy(i,n){i&1&&(h(0,"span",23),v(1,"Jour futur"),m())}function Jy(i,n){if(i&1){let e=_t();h(0,"div",24)(1,"div",25)(2,"mat-icon",26),v(3,"auto_awesome"),m(),h(4,"span"),v(5),m(),h(6,"button",27),M("click",function(){ke(e);let r=z();return Ae(r.generateAiSummary())}),h(7,"mat-icon"),v(8,"refresh"),m()(),h(9,"button",28),M("click",function(){ke(e);let r=z();return Ae(r.clearSummary())}),h(10,"mat-icon"),v(11,"close"),m()()(),h(12,"pre",29),v(13),m()()}if(i&2){let e=z();p(5),le("",e.aiEnabled()?"R\xE9sum\xE9 IA":"R\xE9sum\xE9"," \u2014 journ\xE9e pr\xE9c\xE9dente"),p(),w("disabled",e.loadingAi()),p(7),xe(e.taskService.aiSummary())}}var la=class i{taskService=c(Ss);aiSummaryService=c(Ms);storageService=c(It);dialog=c(Si);loadingAi=Z(!1);aiEnabled(){return this.storageService.getLlmConfig()?.enabled??!1}formattedDate(){return new Date(this.taskService.currentDate()+"T12:00:00").toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}isToday(){return this.taskService.currentDate()===new Date().toISOString().slice(0,10)}isPast(){return this.taskService.currentDate()<new Date().toISOString().slice(0,10)}isFuture(){return this.taskService.currentDate()>new Date().toISOString().slice(0,10)}prevDay(){let n=new Date(this.taskService.currentDate()+"T12:00:00");n.setDate(n.getDate()-1),this.taskService.loadDay(n.toISOString().slice(0,10))}nextDay(){let n=new Date(this.taskService.currentDate()+"T12:00:00");n.setDate(n.getDate()+1),this.taskService.loadDay(n.toISOString().slice(0,10))}goToToday(){this.taskService.loadDay(new Date().toISOString().slice(0,10))}countTodo(){return this.taskService.tasks().filter(n=>n.state==="TODO").length}countInProgress(){return this.taskService.tasks().filter(n=>n.state==="IN_PROGRESS").length}countDone(){return this.taskService.tasks().filter(n=>n.state==="DONE").length}async generateAiSummary(){let n=this.taskService.getPreviousDayTasks();if(n.length===0){this.taskService.saveAiSummary("Aucune t\xE2che enregistr\xE9e pour la journ\xE9e pr\xE9c\xE9dente.");return}this.loadingAi.set(!0);let e=await this.aiSummaryService.generateSummary(n);this.taskService.saveAiSummary(e),this.loadingAi.set(!1)}clearSummary(){this.taskService.saveAiSummary("")}openAddTask(){this.dialog.open(qr,{width:"520px",data:{date:this.taskService.currentDate()}}).afterClosed().subscribe(e=>{e&&this.taskService.addTask(e)})}openEditTask(n){this.dialog.open(qr,{width:"520px",data:{task:n,date:this.taskService.currentDate()}}).afterClosed().subscribe(t=>{t&&this.taskService.updateTask(f(f({},n),t))})}openSettings(){this.dialog.open(aa,{width:"500px"})}deleteAll(){let n=this.taskService.tasks().length;this.dialog.open(ia,{width:"380px",data:{count:n}}).afterClosed().subscribe(t=>{t&&this.taskService.deleteAllTasks()})}onTaskUpdated(n){this.taskService.updateTask(n)}onTaskDeleted(n){this.taskService.deleteTask(n)}onReordered(n){this.taskService.reorder(n)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=S({type:i,selectors:[["app-journal"]],decls:42,vars:14,consts:[[1,"journal-container"],[1,"journal-header"],["mat-icon-button","","aria-label","Jour pr\xE9c\xE9dent",3,"click"],[1,"date-display"],[1,"date-title"],["class","date-subtitle",4,"ngIf"],["class","date-subtitle past",4,"ngIf"],["class","date-subtitle future",4,"ngIf"],["mat-icon-button","","aria-label","Jour suivant",3,"click"],["mat-icon-button","","aria-label","Aujourd'hui",1,"today-btn",3,"click","disabled"],["class","ai-summary-banner",4,"ngIf"],[1,"actions-bar"],["mat-raised-button","","color","primary",3,"click"],["mat-stroked-button","",1,"ai-btn",3,"click","disabled"],["mat-stroked-button","","color","warn",1,"delete-all-btn",3,"click","disabled"],["mat-icon-button","","aria-label","Param\xE8tres",3,"click"],[1,"stats-bar"],[1,"stat","todo"],[1,"stat","in-progress"],[1,"stat","done"],[3,"taskUpdated","taskDeleted","taskEdit","reordered","tasks"],[1,"date-subtitle"],[1,"date-subtitle","past"],[1,"date-subtitle","future"],[1,"ai-summary-banner"],[1,"ai-summary-header"],[1,"ai-icon"],["mat-icon-button","","matTooltip","R\xE9g\xE9n\xE9rer",1,"close-btn",3,"click","disabled"],["mat-icon-button","","matTooltip","Fermer",3,"click"],[1,"ai-summary-text"]],template:function(e,t){e&1&&(h(0,"div",0)(1,"header",1)(2,"button",2),M("click",function(){return t.prevDay()}),h(3,"mat-icon"),v(4,"chevron_left"),m()(),h(5,"div",3)(6,"h1",4),v(7),m(),re(8,Zy,2,0,"span",5)(9,Xy,2,0,"span",6)(10,Qy,2,0,"span",7),m(),h(11,"button",8),M("click",function(){return t.nextDay()}),h(12,"mat-icon"),v(13,"chevron_right"),m()(),h(14,"button",9),M("click",function(){return t.goToToday()}),h(15,"mat-icon"),v(16,"today"),m()()(),re(17,Jy,14,3,"div",10),h(18,"div",11)(19,"button",12),M("click",function(){return t.openAddTask()}),h(20,"mat-icon"),v(21,"add"),m(),v(22," Nouvelle t\xE2che "),m(),h(23,"button",13),M("click",function(){return t.generateAiSummary()}),h(24,"mat-icon"),v(25),m(),v(26),m(),h(27,"button",14),M("click",function(){return t.deleteAll()}),h(28,"mat-icon"),v(29,"delete_sweep"),m(),v(30," Tout supprimer "),m(),h(31,"button",15),M("click",function(){return t.openSettings()}),h(32,"mat-icon"),v(33,"settings"),m()()(),h(34,"div",16)(35,"span",17),v(36),m(),h(37,"span",18),v(38),m(),h(39,"span",19),v(40),m()(),h(41,"app-task-list",20),M("taskUpdated",function(o){return t.onTaskUpdated(o)})("taskDeleted",function(o){return t.onTaskDeleted(o)})("taskEdit",function(o){return t.openEditTask(o)})("reordered",function(o){return t.onReordered(o)}),m()()),e&2&&(p(7),xe(t.formattedDate()),p(),w("ngIf",t.isToday()),p(),w("ngIf",t.isPast()),p(),w("ngIf",t.isFuture()),p(4),w("disabled",t.isToday()),p(3),w("ngIf",t.taskService.aiSummary()),p(6),w("disabled",t.loadingAi()),p(2),xe(t.loadingAi()?"hourglass_empty":"auto_awesome"),p(),le(" ",t.loadingAi()?"G\xE9n\xE9ration...":t.aiEnabled()?"R\xE9sum\xE9 IA (J-1)":"R\xE9sum\xE9 local (J-1)"," "),p(),w("disabled",t.taskService.tasks().length===0),p(9),le("\u{1F4CC} ",t.countTodo()," \xE0 faire"),p(2),le("\u{1F504} ",t.countInProgress()," en cours"),p(2),le("\u2705 ",t.countDone()," termin\xE9es"),p(),w("tasks",t.taskService.tasks()))},dependencies:[rt,vt,dt,Mt,Pn,ht,ut,ft,Es,Tr,Ns],styles:[".journal-container[_ngcontent-%COMP%]{max-width:720px;margin:0 auto;padding:16px;min-height:100vh}.journal-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-bottom:16px}.date-display[_ngcontent-%COMP%]{flex:1;text-align:center}.date-title[_ngcontent-%COMP%]{margin:0;font-size:1.6rem;font-weight:700;color:var(--mat-sys-primary);text-transform:capitalize}.date-subtitle[_ngcontent-%COMP%]{font-size:.8rem;color:#888;display:block}.date-subtitle.past[_ngcontent-%COMP%]{color:#e57373}.date-subtitle.future[_ngcontent-%COMP%]{color:#64b5f6}.today-btn[_ngcontent-%COMP%]{margin-left:auto}.ai-summary-banner[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea22,#764ba222);border:1px solid rgba(102,126,234,.3333333333);border-radius:12px;padding:16px;margin-bottom:16px}.ai-summary-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-weight:600;color:#667eea;margin-bottom:8px}.ai-icon[_ngcontent-%COMP%]{color:#764ba2}.close-btn[_ngcontent-%COMP%]{margin-left:auto}.ai-summary-text[_ngcontent-%COMP%]{margin:0;font-family:inherit;font-size:.9rem;white-space:pre-wrap;line-height:1.6}.actions-bar[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin-bottom:12px;flex-wrap:wrap}.ai-btn[_ngcontent-%COMP%]{border-color:#764ba2!important;color:#764ba2!important}.delete-all-btn[_ngcontent-%COMP%]{margin-left:auto}.stats-bar[_ngcontent-%COMP%]{display:flex;gap:16px;margin-bottom:16px;font-size:.85rem;flex-wrap:wrap}.stat[_ngcontent-%COMP%]{padding:4px 12px;border-radius:20px;font-weight:500}.stat.todo[_ngcontent-%COMP%]{background:#f5f5f5}.stat.in-progress[_ngcontent-%COMP%]{background:#fff8e1}.stat.done[_ngcontent-%COMP%]{background:#e8f5e9}"]})};var Lf=[{path:"",component:la},{path:"**",redirectTo:""}];var Fc="Service workers are disabled or not supported by this browser",Ni=class{serviceWorker;worker;registration;events;constructor(n,e){if(this.serviceWorker=n,!n)this.worker=this.events=this.registration=new Ne(t=>t.error(new F(5601,!1)));else{let t=null,r=new y;this.worker=new Ne(d=>(t!==null&&d.next(t),r.subscribe(u=>d.next(u))));let o=()=>{let{controller:d}=n;d!==null&&(t=d,r.next(t))};n.addEventListener("controllerchange",o),o(),this.registration=this.worker.pipe(he(()=>n.getRegistration().then(d=>{if(!d)throw new F(5601,!1);return d})));let s=new y;this.events=s.asObservable();let a=d=>{let{data:u}=d;u?.type&&s.next(u)};n.addEventListener("message",a),e?.get(tt,null,{optional:!0})?.onDestroy(()=>{n.removeEventListener("controllerchange",o),n.removeEventListener("message",a)})}}postMessage(n,e){return new Promise(t=>{this.worker.pipe(ae(1)).subscribe(r=>{r.postMessage(f({action:n},e)),t()})})}postMessageWithOperation(n,e,t){let r=this.waitForOperationCompleted(t),o=this.postMessage(n,e);return Promise.all([o,r]).then(([,s])=>s)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(n){let e;return typeof n=="string"?e=t=>t.type===n:e=t=>n.includes(t.type),this.events.pipe(ie(e))}nextEventOfType(n){return this.eventsOfType(n).pipe(ae(1))}waitForOperationCompleted(n){return new Promise((e,t)=>{this.eventsOfType("OPERATION_COMPLETED").pipe(ie(r=>r.nonce===n),ae(1),V(r=>{if(r.result!==void 0)return r.result;throw new Error(r.error)})).subscribe({next:e,error:t})})}get isEnabled(){return!!this.serviceWorker}},e0=(()=>{class i{sw;messages;notificationClicks;notificationCloses;pushSubscriptionChanges;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new y;constructor(e){if(this.sw=e,!e.isEnabled){this.messages=Gt,this.notificationClicks=Gt,this.notificationCloses=Gt,this.pushSubscriptionChanges=Gt,this.subscription=Gt;return}this.messages=this.sw.eventsOfType("PUSH").pipe(V(r=>r.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(V(r=>r.data)),this.notificationCloses=this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(V(r=>r.data)),this.pushSubscriptionChanges=this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(V(r=>r.data)),this.pushManager=this.sw.registration.pipe(V(r=>r.pushManager));let t=this.pushManager.pipe(he(r=>r.getSubscription()));this.subscription=new Ne(r=>{let o=t.subscribe(r),s=this.subscriptionChanges.subscribe(r);return()=>{o.unsubscribe(),s.unsubscribe()}})}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(Fc));let t={userVisibleOnly:!0},r=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),o=new Uint8Array(new ArrayBuffer(r.length));for(let s=0;s<r.length;s++)o[s]=r.charCodeAt(s);return t.applicationServerKey=o,new Promise((s,a)=>{this.pushManager.pipe(he(l=>l.subscribe(t)),ae(1)).subscribe({next:l=>{this.subscriptionChanges.next(l),s(l)},error:a})})}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(Fc));let e=t=>{if(t===null)throw new F(5602,!1);return t.unsubscribe().then(r=>{if(!r)throw new F(5603,!1);this.subscriptionChanges.next(null)})};return new Promise((t,r)=>{this.subscription.pipe(ae(1),he(e)).subscribe({next:t,error:r})})}decodeBase64(e){return atob(e)}static \u0275fac=function(t){return new(t||i)(O(Ni))};static \u0275prov=_({token:i,factory:i.\u0275fac})}return i})(),t0=(()=>{class i{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}ongoingCheckForUpdate=null;constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=Gt,this.unrecoverable=Gt;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(Fc));if(this.ongoingCheckForUpdate)return this.ongoingCheckForUpdate;let e=this.sw.generateNonce();return this.ongoingCheckForUpdate=this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e).finally(()=>{this.ongoingCheckForUpdate=null}),this.ongoingCheckForUpdate}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new F(5601,!1));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e)}static \u0275fac=function(t){return new(t||i)(O(Ni))};static \u0275prov=_({token:i,factory:i.\u0275fac})}return i})(),Bf=new b("");function n0(){let i=c(Kr);if(!("serviceWorker"in navigator&&i.enabled!==!1))return;let n=c(Bf),e=c(R),t=c(tt);e.runOutsideAngular(()=>{let r=navigator.serviceWorker,o=()=>r.controller?.postMessage({action:"INITIALIZE"});r.addEventListener("controllerchange",o),t.onDestroy(()=>{r.removeEventListener("controllerchange",o)})}),e.runOutsideAngular(()=>{let r,{registrationStrategy:o}=i;if(typeof o=="function")r=new Promise(s=>o().subscribe(()=>s()));else{let[s,...a]=(o||"registerWhenStable:30000").split(":");switch(s){case"registerImmediately":r=Promise.resolve();break;case"registerWithDelay":r=Vf(+a[0]||0);break;case"registerWhenStable":r=Promise.race([t.whenStable(),Vf(+a[0])]);break;default:throw new F(5600,!1)}}r.then(()=>{t.destroyed||navigator.serviceWorker.register(n,{scope:i.scope,updateViaCache:i.updateViaCache,type:i.type}).catch(s=>console.error(pn(5604,!1)))})})}function Vf(i){return new Promise(n=>setTimeout(n,i))}function i0(){let i=c(Kr),n=c(B),e=!0;return new Ni(e&&i.enabled!==!1?navigator.serviceWorker:void 0,n)}var Kr=class{enabled;updateViaCache;type;scope;registrationStrategy};function jf(i,n={}){return Yt([e0,t0,{provide:Bf,useValue:i},{provide:Kr,useValue:n},{provide:Ni,useFactory:i0},Da(n0)])}var zf={providers:[$c(),vl(Lf),Uu(),jf("ngsw-worker.js",{enabled:!gd(),registrationStrategy:"registerWhenStable:30000"})]};var ca=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=S({type:i,selectors:[["app-root"]],decls:1,vars:0,template:function(e,t){e&1&&G(0,"router-outlet")},dependencies:[mr],styles:["[_nghost-%COMP%]{display:block}"]})};ja(ca,zf).catch(i=>console.error(i));
