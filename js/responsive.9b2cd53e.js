"use strict";(self["webpackChunknews_feed"]=self["webpackChunknews_feed"]||[]).push([[473],{4638:function(t,e,l){l.d(e,{Z:function(){return _}});var r=l(6252),n=l(2262),a=l(3577),o=l(2119),s=l(5317),i=l(7213),u=l(5157);const d={class:"flex items-center justify-center flex-col md:flex-row text-2xl text-gray-500 dark:text-gray-400 mb-12"},c=(0,r._)("span",{class:"md:mr-3"},"Please star this project on",-1),g={href:"https://github.com/justboil/admin-one-vue-tailwind",class:"inline-flex items-center justify-center text-blue-500",target:"_blank"},h=(0,r._)("span",null,"GitHub",-1),b={class:"text-2xl text-gray-500 dark:text-gray-400 mb-12"},w=(0,r.Uk)(" Check out other components and layouts at"),p=(0,r._)("br",null,null,-1),f=(0,r.Uk)(" , "),m=(0,r._)("br",null,null,-1),x=(0,r.Uk)(" screen samples "),y=(0,r._)("h1",{class:"text-2xl text-gray-500 dark:text-gray-400"},[(0,r.Uk)(" Get more with "),(0,r._)("a",{href:"https://justboil.me/tailwind-admin-templates/vue-dashboard/",target:"_blank",class:"text-blue-500"},"Premium version")],-1);var k={setup(t){const e=(0,o.tv)(),l=e.getRoutes(),k=[];for(const r in l){const t=l[r].path,e=l[r].meta&&l[r].meta.title?l[r].meta.title:null;e&&k.push({path:t,title:e})}return(t,e)=>{const l=(0,r.up)("router-link");return(0,r.wg)(),(0,r.j4)(i.Z,{last:""},{default:(0,r.w5)((()=>[(0,r._)("h1",d,[c,(0,r._)("a",g,[(0,r.Wm)(u.Z,{path:(0,n.SU)(s.LcO),size:"36",class:"mr-1"},null,8,["path"]),h])]),(0,r._)("h1",b,[w,p,((0,r.wg)(),(0,r.iD)(r.HY,null,(0,r.Ko)(k,((t,e)=>((0,r.wg)(),(0,r.iD)(r.HY,{key:t.path},[(0,r.Wm)(l,{to:t.path,class:"text-blue-500"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,a.zw)(t.title),1)])),_:2},1032,["to"]),e+1<k.length?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[f],64)):(0,r.kq)("",!0)],64)))),64)),m,x]),y])),_:1})}}};const v=k;var _=v},4650:function(t,e,l){l.d(e,{Z:function(){return h}});var r=l(6252),n=l(2262),a=l(5317),o=l(8637),s=l(2597),i=l(6401);const u={class:"bg-white border-t border-b border-gray-100 p-6 dark:bg-gray-900 dark:border-gray-900 dark:text-white"},d={class:"text-3xl font-semibold leading-tight"};var c={setup(t){const e=(0,o.oR)(),l=(0,n.Fl)((()=>e.state.darkMode)),c=()=>{e.dispatch("darkMode")};return(t,e)=>((0,r.wg)(),(0,r.iD)("section",u,[(0,r.Wm)(s.Z,null,{default:(0,r.w5)((()=>[(0,r._)("h1",d,[(0,r.WI)(t.$slots,"default")]),(0,r.Wm)(i.Z,{label:(0,n.SU)(l)?"Light Mode":"Dark Mode",icon:(0,n.SU)(a.xEd),outline:(0,n.SU)(l),onClick:c},null,8,["label","icon","outline"])])),_:3})]))}};const g=c;var h=g},6401:function(t,e,l){l.d(e,{Z:function(){return d}});var r=l(6252),n=l(2262),a=l(3577),o=l(1088),s=l(5157),i={props:{label:{type:[String,Number],default:null},icon:{type:String,default:null},href:{type:String,default:null},target:{type:String,default:null},to:{type:[String,Object],default:null},type:{type:String,default:null},color:{type:String,default:"white"},as:{type:String,default:null},small:Boolean,outline:Boolean,active:Boolean,disabled:Boolean},setup(t){const e=t,l=(0,n.Fl)((()=>e.as?e.as:e.to?"router-link":e.href?"a":"button")),i=(0,n.Fl)((()=>"button"===l.value?e.type??"button":null)),u=(0,n.Fl)((()=>e.small&&e.icon?"px-1":"px-2")),d=(0,n.Fl)((()=>{const t=["inline-flex","cursor-pointer","justify-center","items-center","whitespace-nowrap","focus:outline-none","transition-colors","focus:ring","duration-150","border","rounded",e.active?"ring ring-black dark:ring-white":"ring-blue-700",e.small?"p-1":"p-2",(0,o.pQ)(e.color,e.outline,!e.disabled)];return e.disabled&&t.push("cursor-not-allowed",e.outline?"opacity-50":"opacity-70"),t}));return(e,o)=>((0,r.wg)(),(0,r.j4)((0,r.LL)((0,n.SU)(l)),{class:(0,a.C_)((0,n.SU)(d)),href:t.href,type:(0,n.SU)(i),to:t.to,target:t.target,disabled:t.disabled},{default:(0,r.w5)((()=>[t.icon?((0,r.wg)(),(0,r.j4)(s.Z,{key:0,path:t.icon},null,8,["path"])):(0,r.kq)("",!0),t.label?((0,r.wg)(),(0,r.iD)("span",{key:1,class:(0,a.C_)((0,n.SU)(u))},(0,a.zw)(t.label),3)):(0,r.kq)("",!0)])),_:1},8,["class","href","type","to","target","disabled"]))}};const u=i;var d=u},229:function(t,e,l){l.d(e,{Z:function(){return u}});var r=l(6252),n=l(3577),a=l(2262),o=l(8637),s={setup(t){const e=(0,o.oR)(),l=(0,a.Fl)((()=>e.state.isFullScreen));return(t,e)=>((0,r.wg)(),(0,r.iD)("section",{class:(0,n.C_)(["px-0 md:px-6",[(0,a.SU)(l)?"flex h-screen items-center justify-center":"py-6"]])},[(0,r.WI)(t.$slots,"default")],2))}};const i=s;var u=i},7672:function(t,e,l){l.d(e,{Z:function(){return h}});var r=l(6252),n=l(3577),a=l(2262),o=l(5317),s=l(2597),i=l(6401);const u={class:"p-6"};var d={props:{titleStack:{type:Array,default:()=>[]}},setup(t){return(e,l)=>((0,r.wg)(),(0,r.iD)("section",u,[(0,r.Wm)(s.Z,null,{default:(0,r.w5)((()=>[(0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.titleStack,((t,e)=>((0,r.wg)(),(0,r.iD)("li",{key:e,class:"title-stack-item inline-block pr-3 text-2xl text-gray-500 dark:text-gray-400 last:pr-0 last:font-black last:text-black dark:text-gray-100"},(0,n.zw)(t),1)))),128))]),(0,r.Wm)(i.Z,{href:"https://github.com/justboil/admin-one-vue-tailwind",color:"info",label:"Star on GitHub",target:"_blank",icon:(0,a.SU)(o.LcO)},null,8,["icon"])])),_:1})]))}},c=l(3744);const g=(0,c.Z)(d,[["__scopeId","data-v-fecf18ac"]]);var h=g},7213:function(t,e,l){l.d(e,{Z:function(){return i}});var r=l(6252),n=l(3577);const a={key:1,class:"text-2xl text-gray-500 dark:text-gray-400"};var o={props:{custom:Boolean,first:Boolean,last:Boolean},setup(t){return(e,l)=>((0,r.wg)(),(0,r.iD)("section",{class:(0,n.C_)(["py-24 px-6 lg:px-0 lg:max-w-2xl lg:mx-auto text-center",{"-mb-6":t.first,"-mt-6":t.last,"-my-6":!t.first&&!t.last}])},[t.custom?(0,r.WI)(e.$slots,"default",{key:0}):((0,r.wg)(),(0,r.iD)("h1",a,[(0,r.WI)(e.$slots,"default")]))],2))}};const s=o;var i=s},6340:function(t,e,l){l.r(e),l.d(e,{default:function(){return y}});var r=l(6252),n=l(2262),a=l(7672),o=l(4650),s=l(7213),i=l(229),u=l(4638);const d=(0,r.Uk)("Responsive layout"),c=(0,r.Uk)(" Mobile & Tablet "),g=(0,r._)("div",{class:"md:w-10/12 shadow-2xl md:mx-auto rounded-3xl border-8 border-white overflow-hidden"},[(0,r._)("img",{src:"https://static.justboil.me/templates/one/one-tailwind-vue-mobile.png",class:"block"})],-1),h=(0,r.Uk)(" Small laptop 1024px "),b=(0,r._)("div",{class:"md:w-10/12 shadow-2xl md:mx-auto rounded-3xl border-8 border-white overflow-hidden"},[(0,r._)("img",{src:"https://static.justboil.me/templates/one/one-tailwind-vue-1024.png",class:"block"})],-1),w=(0,r._)("div",{class:"md:w-10/12 shadow-2xl md:mx-auto rounded-3xl border-8 border-white overflow-hidden"},[(0,r._)("img",{src:"https://static.justboil.me/templates/one/one-tailwind-vue-1024-menu-open.png",class:"block"})],-1),p=(0,r.Uk)(" Laptop & desktop "),f=(0,r._)("div",{class:"md:w-10/12 shadow-2xl md:mx-auto rounded-3xl border-8 border-white overflow-hidden"},[(0,r._)("img",{src:"https://static.justboil.me/templates/one/one-tailwind-vue-widescreen.png",class:"block"})],-1);var m={setup(t){const e=(0,n.iH)(["Admin","Responsive layout"]);return(t,l)=>((0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(a.Z,{"title-stack":e.value},null,8,["title-stack"]),(0,r.Wm)(o.Z,null,{default:(0,r.w5)((()=>[d])),_:1}),(0,r.Wm)(s.Z,{first:""},{default:(0,r.w5)((()=>[c])),_:1}),(0,r.Wm)(i.Z,null,{default:(0,r.w5)((()=>[g])),_:1}),(0,r.Wm)(s.Z,null,{default:(0,r.w5)((()=>[h])),_:1}),(0,r.Wm)(i.Z,null,{default:(0,r.w5)((()=>[b])),_:1}),(0,r.Wm)(i.Z,null,{default:(0,r.w5)((()=>[w])),_:1}),(0,r.Wm)(s.Z,null,{default:(0,r.w5)((()=>[p])),_:1}),(0,r.Wm)(i.Z,null,{default:(0,r.w5)((()=>[f])),_:1}),(0,r.Wm)(u.Z)],64))}};const x=m;var y=x},1088:function(t,e,l){l.d(e,{cE:function(){return r},Y8:function(){return a},bN:function(){return s},pQ:function(){return u}});const r={white:"bg-white text-black",light:"bg-gray-100 text-black",success:"bg-emerald-500 text-white",danger:"bg-red-500 text-white",warning:"bg-yellow-500 text-white",info:"bg-blue-500 text-white"},n={white:"hover:bg-gray-50",light:"hover:bg-gray-200",success:"hover:bg-emerald-600",danger:"hover:bg-red-600",warning:"hover:bg-yellow-600",info:"hover:bg-blue-600"},a={white:"border-gray-300",light:"border-gray-200 dark:border-gray-400",success:"border-emerald-600",danger:"border-red-600",warning:"border-yellow-600",info:"border-blue-600"},o={white:"text-black dark:text-gray-100",light:"text-gray-700 dark:text-gray-400",success:"text-emerald-500",danger:"text-red-500",warning:"text-yellow-500",info:"text-blue-500"},s={white:[o.white,a.white],light:[o.light,a.light],success:[o.success,a.success],danger:[o.danger,a.danger],warning:[o.warning,a.warning],info:[o.info,a.info]},i={white:"hover:bg-gray-100 hover:text-gray-900 dark:hover:text-gray-900",light:"hover:bg-gray-100 hover:text-gray-900 dark:hover:text-gray-900",success:"hover:bg-emerald-500 hover:text-white",danger:"hover:bg-red-500 hover:text-white",warning:"hover:bg-yellow-500 hover:text-white",info:"hover:bg-blue-500 hover:text-white"},u=(t,e,l)=>{const s=[e?o[t]:r[t],a[t]];return l&&s.push(e?i[t]:n[t]),s}}}]);
//# sourceMappingURL=responsive.9b2cd53e.js.map