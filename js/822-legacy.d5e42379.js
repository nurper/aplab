(self["webpackChunknews_feed"]=self["webpackChunknews_feed"]||[]).push([[822],{887:function(t,e,r){"use strict";r.d(e,{Z:function(){return b}});var n=r(6252),o=r(2262),i=r(3577),a=r(9963),u=r(5317),l=r(5157),s={key:0,class:"flex items-stretch border-b border-gray-100 dark:border-gray-700"},c=["onClick"],f={key:1,class:"text-center py-24 text-gray-500 dark:text-gray-400"},d=(0,n._)("p",null,"Nothing's here…",-1),g=[d],h={props:{title:{type:String,default:null},icon:{type:String,default:null},headerIcon:{type:String,default:null},rounded:{type:String,default:"md:rounded"},hasTable:Boolean,empty:Boolean,form:Boolean,hoverable:Boolean},emits:["header-icon-click","submit"],setup:function(t,e){var r=e.emit,d=t,h=(0,o.Fl)((function(){return d.form?"form":"div"})),p=(0,o.Fl)((function(){var t=[d.rounded];return d.hoverable&&t.push("hover:shadow-lg transition-shadow duration-500"),t})),b=(0,o.Fl)((function(){var t;return null!==(t=d.headerIcon)&&void 0!==t?t:u.Shd})),y=function(){r("header-icon-click")},v=function(t){r("submit",t)};return function(e,r){return(0,n.wg)(),(0,n.j4)((0,n.LL)((0,o.SU)(h)),{class:(0,i.C_)([(0,o.SU)(p),"bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900"]),onSubmit:v},{default:(0,n.w5)((function(){return[t.title?((0,n.wg)(),(0,n.iD)("header",s,[(0,n._)("p",{class:(0,i.C_)(["flex items-center py-3 grow font-bold",[t.icon?"px-4":"px-6"]])},[t.icon?((0,n.wg)(),(0,n.j4)(l.Z,{key:0,path:t.icon,class:"mr-3"},null,8,["path"])):(0,n.kq)("",!0),(0,n.Uk)(" "+(0,i.zw)(t.title),1)],2),(0,o.SU)(b)?((0,n.wg)(),(0,n.iD)("a",{key:0,href:"#",class:"flex items-center py-3 px-4 justify-center ring-blue-700 focus:ring","aria-label":"more options",onClick:(0,a.iM)(y,["prevent"])},[(0,n.Wm)(l.Z,{path:(0,o.SU)(b)},null,8,["path"])],8,c)):(0,n.kq)("",!0)])):(0,n.kq)("",!0),t.empty?((0,n.wg)(),(0,n.iD)("div",f,g)):((0,n.wg)(),(0,n.iD)("div",{key:2,class:(0,i.C_)({"p-6":!t.hasTable})},[(0,n.WI)(e.$slots,"default")],2))]})),_:3},8,["class"])}}};const p=h;var b=p},859:function(t,e,r){"use strict";r.d(e,{Z:function(){return s}});var n=r(6252),o={class:"my-6 -mx-6 border-t border-gray-100 dark:border-gray-700"};function i(t,e){return(0,n.wg)(),(0,n.iD)("hr",o)}var a=r(3744);const u={},l=(0,a.Z)(u,[["render",i]]);var s=l},6401:function(t,e,r){"use strict";r.d(e,{Z:function(){return c}});r(9653),r(7268);var n=r(6252),o=r(2262),i=r(3577),a=r(1088),u=r(5157),l={props:{label:{type:[String,Number],default:null},icon:{type:String,default:null},href:{type:String,default:null},target:{type:String,default:null},to:{type:[String,Object],default:null},type:{type:String,default:null},color:{type:String,default:"white"},as:{type:String,default:null},small:Boolean,outline:Boolean,active:Boolean,disabled:Boolean},setup:function(t){var e=t,r=(0,o.Fl)((function(){return e.as?e.as:e.to?"router-link":e.href?"a":"button"})),l=(0,o.Fl)((function(){var t;return"button"===r.value?null!==(t=e.type)&&void 0!==t?t:"button":null})),s=(0,o.Fl)((function(){return e.small&&e.icon?"px-1":"px-2"})),c=(0,o.Fl)((function(){var t=["inline-flex","cursor-pointer","justify-center","items-center","whitespace-nowrap","focus:outline-none","transition-colors","focus:ring","duration-150","border","rounded",e.active?"ring ring-black dark:ring-white":"ring-blue-700",e.small?"p-1":"p-2",(0,a.pQ)(e.color,e.outline,!e.disabled)];return e.disabled&&t.push("cursor-not-allowed",e.outline?"opacity-50":"opacity-70"),t}));return function(e,a){return(0,n.wg)(),(0,n.j4)((0,n.LL)((0,o.SU)(r)),{class:(0,i.C_)((0,o.SU)(c)),href:t.href,type:(0,o.SU)(l),to:t.to,target:t.target,disabled:t.disabled},{default:(0,n.w5)((function(){return[t.icon?((0,n.wg)(),(0,n.j4)(u.Z,{key:0,path:t.icon},null,8,["path"])):(0,n.kq)("",!0),t.label?((0,n.wg)(),(0,n.iD)("span",{key:1,class:(0,i.C_)((0,o.SU)(s))},(0,i.zw)(t.label),3)):(0,n.kq)("",!0)]})),_:1},8,["class","href","type","to","target","disabled"])}}};const s=l;var c=s},375:function(t,e,r){"use strict";r.d(e,{Z:function(){return u}});r(2526),r(1817),r(1539),r(2165),r(8783),r(3948);function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}r(1249);var o=r(6252),i={name:"JbButtons",props:{noWrap:Boolean,type:{type:String,default:"justify-start"},classAddon:{type:String,default:"mr-3 last:mr-0 mb-3"},mb:{type:String,default:"-mb-3"}},render:function(){var t=this,e=this.$slots&&this.$slots.default,r=["flex","items-center",this.type,this.noWrap?"flex-nowrap":"flex-wrap"];return this.mb&&r.push(this.mb),(0,o.h)("div",{class:r},e?this.$slots.default().map((function(e){return e&&e.children&&"object"===n(e.children)?(0,o.h)(e,{},e.children.map((function(e){return(0,o.h)(e,{class:[t.classAddon]})}))):(0,o.h)(e,{class:[t.classAddon]})})):null)}};const a=i;var u=a},229:function(t,e,r){"use strict";r.d(e,{Z:function(){return s}});var n=r(6252),o=r(3577),i=r(2262),a=r(8637),u={setup:function(t){var e=(0,a.oR)(),r=(0,i.Fl)((function(){return e.state.isFullScreen}));return function(t,e){return(0,n.wg)(),(0,n.iD)("section",{class:(0,o.C_)(["px-0 md:px-6",[(0,i.SU)(r)?"flex h-screen items-center justify-center":"py-6"]])},[(0,n.WI)(t.$slots,"default")],2)}}};const l=u;var s=l},1589:function(t,e,r){var n=r(7854),o=r(1400),i=r(6244),a=r(6135),u=n.Array,l=Math.max;t.exports=function(t,e,r){for(var n=i(t),s=o(e,n),c=o(void 0===r?n:r,n),f=u(l(c-s,0)),d=0;s<c;s++,d++)a(f,d,t[s]);return f.length=d,f}},4230:function(t,e,r){var n=r(1702),o=r(4488),i=r(1340),a=/"/g,u=n("".replace);t.exports=function(t,e,r,n){var l=i(o(t)),s="<"+e;return""!==r&&(s+=" "+r+'="'+u(i(n),a,"&quot;")+'"'),s+">"+l+"</"+e+">"}},7235:function(t,e,r){var n=r(857),o=r(2597),i=r(6061),a=r(3070).f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},1156:function(t,e,r){var n=r(4326),o=r(5656),i=r(8006).f,a=r(1589),u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],l=function(t){try{return i(t)}catch(e){return a(u)}};t.exports.f=function(t){return u&&"Window"==n(t)?l(t):i(o(t))}},857:function(t,e,r){var n=r(7854);t.exports=n},3429:function(t,e,r){var n=r(7293);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},6061:function(t,e,r){var n=r(5112);e.f=n},7268:function(t,e,r){"use strict";var n=r(2109),o=r(4230),i=r(3429);n({target:"String",proto:!0,forced:i("small")},{small:function(){return o(this,"small","","")}})},1817:function(t,e,r){"use strict";var n=r(2109),o=r(9781),i=r(7854),a=r(1702),u=r(2597),l=r(614),s=r(7976),c=r(1340),f=r(3070).f,d=r(9920),g=i.Symbol,h=g&&g.prototype;if(o&&l(g)&&(!("description"in h)||void 0!==g().description)){var p={},b=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:c(arguments[0]),e=s(h,this)?new g(t):void 0===t?g():g(t);return""===t&&(p[e]=!0),e};d(b,g),b.prototype=h,h.constructor=b;var y="Symbol(test)"==String(g("test")),v=a(h.toString),m=a(h.valueOf),w=/^Symbol\((.*)\)[^)]+$/,S=a("".replace),x=a("".slice);f(h,"description",{configurable:!0,get:function(){var t=m(this),e=v(t);if(u(p,t))return"";var r=y?x(e,7,-1):S(e,w,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:b})}},2165:function(t,e,r){var n=r(7235);n("iterator")},2526:function(t,e,r){"use strict";var n=r(2109),o=r(7854),i=r(5005),a=r(2104),u=r(6916),l=r(1702),s=r(1913),c=r(9781),f=r(133),d=r(7293),g=r(2597),h=r(3157),p=r(614),b=r(111),y=r(7976),v=r(2190),m=r(9670),w=r(7908),S=r(5656),x=r(4948),k=r(1340),j=r(9114),O=r(30),C=r(1956),_=r(8006),F=r(1156),B=r(5181),U=r(1236),P=r(3070),Z=r(5296),D=r(206),N=r(1320),$=r(2309),q=r(6200),W=r(3501),I=r(9711),L=r(5112),A=r(6061),E=r(7235),J=r(8003),Q=r(9909),T=r(2092).forEach,z=q("hidden"),M="Symbol",R="prototype",Y=L("toPrimitive"),G=Q.set,H=Q.getterFor(M),K=Object[R],V=o.Symbol,X=V&&V[R],tt=o.TypeError,et=o.QObject,rt=i("JSON","stringify"),nt=U.f,ot=P.f,it=F.f,at=Z.f,ut=l([].push),lt=$("symbols"),st=$("op-symbols"),ct=$("string-to-symbol-registry"),ft=$("symbol-to-string-registry"),dt=$("wks"),gt=!et||!et[R]||!et[R].findChild,ht=c&&d((function(){return 7!=O(ot({},"a",{get:function(){return ot(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=nt(K,e);n&&delete K[e],ot(t,e,r),n&&t!==K&&ot(K,e,n)}:ot,pt=function(t,e){var r=lt[t]=O(X);return G(r,{type:M,tag:t,description:e}),c||(r.description=e),r},bt=function(t,e,r){t===K&&bt(st,e,r),m(t);var n=x(e);return m(r),g(lt,n)?(r.enumerable?(g(t,z)&&t[z][n]&&(t[z][n]=!1),r=O(r,{enumerable:j(0,!1)})):(g(t,z)||ot(t,z,j(1,{})),t[z][n]=!0),ht(t,n,r)):ot(t,n,r)},yt=function(t,e){m(t);var r=S(e),n=C(r).concat(xt(r));return T(n,(function(e){c&&!u(mt,r,e)||bt(t,e,r[e])})),t},vt=function(t,e){return void 0===e?O(t):yt(O(t),e)},mt=function(t){var e=x(t),r=u(at,this,e);return!(this===K&&g(lt,e)&&!g(st,e))&&(!(r||!g(this,e)||!g(lt,e)||g(this,z)&&this[z][e])||r)},wt=function(t,e){var r=S(t),n=x(e);if(r!==K||!g(lt,n)||g(st,n)){var o=nt(r,n);return!o||!g(lt,n)||g(r,z)&&r[z][n]||(o.enumerable=!0),o}},St=function(t){var e=it(S(t)),r=[];return T(e,(function(t){g(lt,t)||g(W,t)||ut(r,t)})),r},xt=function(t){var e=t===K,r=it(e?st:S(t)),n=[];return T(r,(function(t){!g(lt,t)||e&&!g(K,t)||ut(n,lt[t])})),n};if(f||(V=function(){if(y(X,this))throw tt("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?k(arguments[0]):void 0,e=I(t),r=function(t){this===K&&u(r,st,t),g(this,z)&&g(this[z],e)&&(this[z][e]=!1),ht(this,e,j(1,t))};return c&&gt&&ht(K,e,{configurable:!0,set:r}),pt(e,t)},X=V[R],N(X,"toString",(function(){return H(this).tag})),N(V,"withoutSetter",(function(t){return pt(I(t),t)})),Z.f=mt,P.f=bt,U.f=wt,_.f=F.f=St,B.f=xt,A.f=function(t){return pt(L(t),t)},c&&(ot(X,"description",{configurable:!0,get:function(){return H(this).description}}),s||N(K,"propertyIsEnumerable",mt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:V}),T(C(dt),(function(t){E(t)})),n({target:M,stat:!0,forced:!f},{for:function(t){var e=k(t);if(g(ct,e))return ct[e];var r=V(e);return ct[e]=r,ft[r]=e,r},keyFor:function(t){if(!v(t))throw tt(t+" is not a symbol");if(g(ft,t))return ft[t]},useSetter:function(){gt=!0},useSimple:function(){gt=!1}}),n({target:"Object",stat:!0,forced:!f,sham:!c},{create:vt,defineProperty:bt,defineProperties:yt,getOwnPropertyDescriptor:wt}),n({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:St,getOwnPropertySymbols:xt}),n({target:"Object",stat:!0,forced:d((function(){B.f(1)}))},{getOwnPropertySymbols:function(t){return B.f(w(t))}}),rt){var kt=!f||d((function(){var t=V();return"[null]"!=rt([t])||"{}"!=rt({a:t})||"{}"!=rt(Object(t))}));n({target:"JSON",stat:!0,forced:kt},{stringify:function(t,e,r){var n=D(arguments),o=e;if((b(e)||void 0!==t)&&!v(t))return h(e)||(e=function(t,e){if(p(o)&&(e=u(o,this,t,e)),!v(e))return e}),n[1]=e,a(rt,null,n)}})}if(!X[Y]){var jt=X.valueOf;N(X,Y,(function(t){return u(jt,this)}))}J(V,M),W[z]=!0},1088:function(t,e,r){"use strict";r.d(e,{cE:function(){return n},Y8:function(){return i},bN:function(){return u},pQ:function(){return s}});var n={white:"bg-white text-black",light:"bg-gray-100 text-black",success:"bg-emerald-500 text-white",danger:"bg-red-500 text-white",warning:"bg-yellow-500 text-white",info:"bg-blue-500 text-white"},o={white:"hover:bg-gray-50",light:"hover:bg-gray-200",success:"hover:bg-emerald-600",danger:"hover:bg-red-600",warning:"hover:bg-yellow-600",info:"hover:bg-blue-600"},i={white:"border-gray-300",light:"border-gray-200 dark:border-gray-400",success:"border-emerald-600",danger:"border-red-600",warning:"border-yellow-600",info:"border-blue-600"},a={white:"text-black dark:text-gray-100",light:"text-gray-700 dark:text-gray-400",success:"text-emerald-500",danger:"text-red-500",warning:"text-yellow-500",info:"text-blue-500"},u={white:[a.white,i.white],light:[a.light,i.light],success:[a.success,i.success],danger:[a.danger,i.danger],warning:[a.warning,i.warning],info:[a.info,i.info]},l={white:"hover:bg-gray-100 hover:text-gray-900 dark:hover:text-gray-900",light:"hover:bg-gray-100 hover:text-gray-900 dark:hover:text-gray-900",success:"hover:bg-emerald-500 hover:text-white",danger:"hover:bg-red-500 hover:text-white",warning:"hover:bg-yellow-500 hover:text-white",info:"hover:bg-blue-500 hover:text-white"},s=function(t,e,r){var u=[e?a[t]:n[t],i[t]];return r&&u.push(e?l[t]:o[t]),u}}}]);
//# sourceMappingURL=822-legacy.d5e42379.js.map