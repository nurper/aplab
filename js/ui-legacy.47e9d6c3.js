"use strict";(self["webpackChunknews_feed"]=self["webpackChunknews_feed"]||[]).push([[522],{1472:function(l,n,e){e.d(n,{Z:function(){return m}});e(9653),e(8309);var t=e(6252),o=e(3577),u=e(2262),i=e(9963),a=["type","name","value"],c=(0,t._)("span",{class:"check"},null,-1),r={class:"control-label"},s={props:{options:{type:Object,default:function(){}},name:{type:String,required:!0},type:{type:String,default:"checkbox"},column:Boolean,modelValue:{type:[Object,Array,String,Number],default:null}},emits:["update:modelValue"],setup:function(l,n){var e=n.emit,s=l,d=(0,u.Fl)({get:function(){return s.modelValue},set:function(l){e("update:modelValue",l)}}),m=(0,u.Fl)((function(){return"radio"===s.type?"radio":"checkbox"}));return function(n,e){return(0,t.wg)(),(0,t.iD)("div",{class:(0,o.C_)(["flex justify-start flex-wrap -mb-3",{"flex-col":l.column}])},[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(l.options,(function(n,s){return(0,t.wg)(),(0,t.iD)("label",{key:s,class:(0,o.C_)([l.type,"mr-6 mb-3 last:mr-0"])},[(0,t.wy)((0,t._)("input",{"onUpdate:modelValue":e[0]||(e[0]=function(l){return(0,u.dq)(d)?d.value=l:null}),type:(0,u.SU)(m),name:l.name,value:s},null,8,a),[[i.YZ,(0,u.SU)(d)]]),c,(0,t._)("span",r,(0,o.zw)(n),1)],2)})),128))],2)}}};const d=s;var m=d},4533:function(l,n,e){e.d(n,{Z:function(){return d}});var t=e(6252),o=e(3577),u=e(2262),i={class:"mb-6 last:mb-0"},a={key:0,class:"block font-bold mb-2"},c={key:1,class:"text-xs text-gray-500 dark:text-gray-400 mt-1"},r={props:{label:{type:String,default:null},help:{type:String,default:null}},setup:function(l){var n=(0,t.Rr)(),e=(0,u.Fl)((function(){var l=[],e=n.default().length;return e>1&&l.push("grid grid-cols-1 gap-3"),2===e&&l.push("md:grid-cols-2"),l}));return function(n,r){return(0,t.wg)(),(0,t.iD)("div",i,[l.label?((0,t.wg)(),(0,t.iD)("label",a,(0,o.zw)(l.label),1)):(0,t.kq)("",!0),(0,t._)("div",{class:(0,o.C_)((0,u.SU)(e))},[(0,t.WI)(n.$slots,"default")],2),l.help?((0,t.wg)(),(0,t.iD)("div",c,(0,o.zw)(l.help),1)):(0,t.kq)("",!0)])}}};const s=r;var d=s},7498:function(l,n,e){e.r(n),e.d(n,{default:function(){return X}});var t=e(6252),o=e(2262),u=e(8637),i=e(5317),a=e(229),c=e(4650),r=e(7672),s=e(887),d=e(375),m=e(6401),f=e(3),U=e(859),S=e(7450),b=e(7213),w=e(4533),W=e(1472),p=e(4638),Z=e(7453),g=(0,t._)("p",null,"This is sample modal",-1),_=(0,t._)("p",null,"This is sample modal",-1),x=(0,t._)("p",null,"This is sample modal",-1),h=(0,t.Uk)("UI Components"),v=(0,t.Uk)(" Dark mode "),k={class:"text-center py-24 lg:py-12 text-gray-500 dark:text-gray-400"},y=(0,t.Uk)(" Modal examples "),O={class:"space-y-12"},V=(0,t._)("div",{class:"space-y-3"},[(0,t._)("p",null,"Click to see in action")],-1),C=(0,t._)("div",{class:"space-y-3"},[(0,t._)("h1",{class:"text-2xl"}," Unhandled exception "),(0,t._)("p",null,"Click to see in action")],-1),B=(0,t._)("div",{class:"space-y-3"},[(0,t._)("h1",{class:"text-2xl"}," Success "),(0,t._)("p",null,"Click to see in action")],-1),D=(0,t._)("h1",{class:"text-2xl text-gray-500 dark:text-gray-400"}," Notifications ",-1),H={class:"flex items-center justify-center mt-6"},N=(0,t._)("b",null,"Info state",-1),F=(0,t.Uk)(". Notification "),T=(0,t._)("b",null,"Success state",-1),q=(0,t.Uk)(". Notification "),I=(0,t._)("b",null,"Warning state",-1),M=(0,t.Uk)(". Notification "),j=(0,t._)("b",null,"Danger state",-1),z=(0,t.Uk)(". Notification "),A=(0,t._)("b",null,"White",-1),Y=(0,t.Uk)(". Notification "),E=(0,t._)("b",null,"Light",-1),R=(0,t.Uk)(". Notification "),K=(0,t.Uk)("Buttons"),L=(0,t.Uk)("Cards"),P={class:"grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2"},Q=(0,t._)("div",{class:"text-center py-24 lg:py-12 text-gray-500 dark:text-gray-400"}," With title ",-1),$=(0,t._)("div",{class:"text-center py-24 lg:py-12 text-gray-500 dark:text-gray-400"}," With title & icons ",-1),G={setup:function(l){var n=(0,o.iH)(["Admin","UI Components"]),e=(0,o.iH)(!1),G=(0,o.iH)(!1),J=(0,o.iH)(!1),X=(0,o.iH)([]),ll=(0,o.Fl)((function(){return X.value.indexOf("outline")>-1})),nl=(0,o.iH)([]),el=(0,o.Fl)((function(){return nl.value.indexOf("outline")>-1})),tl=(0,o.Fl)((function(){return nl.value.indexOf("small")>-1})),ol=(0,o.Fl)((function(){return nl.value.indexOf("disabled")>-1})),ul=(0,u.oR)(),il=function(){ul.dispatch("darkMode")};return function(l,u){return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(S.Z,{modelValue:e.value,"onUpdate:modelValue":u[0]||(u[0]=function(l){return e.value=l}),title:"Please confirm action","button-label":"Confirm","has-cancel":""},{default:(0,t.w5)((function(){return[g]})),_:1},8,["modelValue"]),(0,t.Wm)(S.Z,{modelValue:G.value,"onUpdate:modelValue":u[1]||(u[1]=function(l){return G.value=l}),"large-title":"Unhandled exception",button:"danger",shake:""},{default:(0,t.w5)((function(){return[_]})),_:1},8,["modelValue"]),(0,t.Wm)(S.Z,{modelValue:J.value,"onUpdate:modelValue":u[2]||(u[2]=function(l){return J.value=l}),"large-title":"Success",button:"success"},{default:(0,t.w5)((function(){return[x]})),_:1},8,["modelValue"]),(0,t.Wm)(r.Z,{"title-stack":n.value},null,8,["title-stack"]),(0,t.Wm)(c.Z,null,{default:(0,t.w5)((function(){return[h]})),_:1}),(0,t.Wm)(b.Z,{first:""},{default:(0,t.w5)((function(){return[v]})),_:1}),(0,t.Wm)(a.Z,null,{default:(0,t.w5)((function(){return[(0,t.Wm)(s.Z,{class:"md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto"},{default:(0,t.w5)((function(){return[(0,t._)("div",k,[(0,t.Wm)(m.Z,{label:"Toggle",outline:"",onClick:il})])]})),_:1})]})),_:1}),(0,t.Wm)(b.Z,null,{default:(0,t.w5)((function(){return[y]})),_:1}),(0,t.Wm)(a.Z,null,{default:(0,t.w5)((function(){return[(0,t._)("div",O,[(0,t.Wm)(s.Z,{title:"Confirm modal","header-icon":(0,o.SU)(i.r5M),class:"cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto",hoverable:"",onClick:u[3]||(u[3]=function(l){return e.value=!0})},{default:(0,t.w5)((function(){return[V,(0,t.Wm)(U.Z),(0,t.Wm)(d.Z,null,{default:(0,t.w5)((function(){return[(0,t.Wm)(m.Z,{label:"Confirm",color:"info"}),(0,t.Wm)(m.Z,{label:"Cancel",color:"info",outline:""})]})),_:1})]})),_:1},8,["header-icon"]),(0,t.Wm)(s.Z,{class:"cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto",hoverable:"",onClick:u[4]||(u[4]=function(l){return G.value=!0})},{default:(0,t.w5)((function(){return[C,(0,t.Wm)(U.Z),(0,t.Wm)(d.Z,null,{default:(0,t.w5)((function(){return[(0,t.Wm)(m.Z,{label:"Done",color:"danger"})]})),_:1})]})),_:1}),(0,t.Wm)(s.Z,{class:"cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto",hoverable:"",onClick:u[5]||(u[5]=function(l){return J.value=!0})},{default:(0,t.w5)((function(){return[B,(0,t.Wm)(U.Z),(0,t.Wm)(m.Z,{label:"Done",color:"success"})]})),_:1})])]})),_:1}),(0,t.Wm)(b.Z,{custom:""},{default:(0,t.w5)((function(){return[D,(0,t._)("div",H,[(0,t.Wm)(W.Z,{modelValue:X.value,"onUpdate:modelValue":u[6]||(u[6]=function(l){return X.value=l}),type:"switch",name:"notifications-switch",options:{outline:"Outline"}},null,8,["modelValue"])])]})),_:1}),(0,t.Wm)(a.Z,null,{default:(0,t.w5)((function(){return[(0,t.Wm)(f.Z,{color:"info",icon:(0,o.SU)(i.EaN),outline:(0,o.SU)(ll)},{right:(0,t.w5)((function(){return[(0,t.Wm)(m.Z,{icon:(0,o.SU)(i.fOx),label:"Button",color:"info",outline:(0,o.SU)(ll),small:""},null,8,["icon","outline"])]})),default:(0,t.w5)((function(){return[N,F]})),_:1},8,["icon","outline"]),(0,t.Wm)(f.Z,{color:"success",icon:(0,o.SU)(i.k6A),outline:(0,o.SU)(ll)},{right:(0,t.w5)((function(){return[(0,t.Wm)(m.Z,{icon:(0,o.SU)(i.fOx),label:"Button",color:"success",outline:(0,o.SU)(ll),small:""},null,8,["icon","outline"])]})),default:(0,t.w5)((function(){return[T,q]})),_:1},8,["icon","outline"]),(0,t.Wm)(f.Z,{color:"warning",icon:(0,o.SU)(i._gM),outline:(0,o.SU)(ll)},{right:(0,t.w5)((function(){return[(0,t.Wm)(m.Z,{icon:(0,o.SU)(i.fOx),label:"Button",color:"warning",outline:(0,o.SU)(ll),small:""},null,8,["icon","outline"])]})),default:(0,t.w5)((function(){return[I,M]})),_:1},8,["icon","outline"]),(0,t.Wm)(f.Z,{color:"danger",icon:(0,o.SU)(i.fr4),outline:(0,o.SU)(ll)},{right:(0,t.w5)((function(){return[(0,t.Wm)(m.Z,{icon:(0,o.SU)(i.fOx),label:"Button",color:"danger",outline:(0,o.SU)(ll),small:""},null,8,["icon","outline"])]})),default:(0,t.w5)((function(){return[j,z]})),_:1},8,["icon","outline"]),(0,t.Wm)(f.Z,{color:"white",icon:(0,o.SU)(i.ghH),outline:(0,o.SU)(ll)},{default:(0,t.w5)((function(){return[A,Y]})),_:1},8,["icon","outline"]),(0,t.Wm)(f.Z,{color:"light",icon:(0,o.SU)(i.zuO),outline:(0,o.SU)(ll)},{default:(0,t.w5)((function(){return[E,R]})),_:1},8,["icon","outline"])]})),_:1}),(0,t.Wm)(b.Z,null,{default:(0,t.w5)((function(){return[K]})),_:1}),(0,t.Wm)(a.Z,null,{default:(0,t.w5)((function(){return[(0,t.Wm)(s.Z,null,{default:(0,t.w5)((function(){return[(0,t.Wm)(w.Z,{label:"Settings"},{default:(0,t.w5)((function(){return[(0,t.Wm)(W.Z,{modelValue:nl.value,"onUpdate:modelValue":u[7]||(u[7]=function(l){return nl.value=l}),name:"buttons-switch",type:"switch",options:{outline:"Outline",small:"Small",disabled:"Disabled"}},null,8,["modelValue"])]})),_:1}),(0,t.Wm)(U.Z),(0,t.Wm)(d.Z,null,{default:(0,t.w5)((function(){return[(0,t.Wm)(m.Z,{color:"white",label:"Button",small:(0,o.SU)(tl),outline:(0,o.SU)(el),disabled:(0,o.SU)(ol)},null,8,["small","outline","disabled"]),(0,t.Wm)(m.Z,{color:"light",label:"Button",small:(0,o.SU)(tl),outline:(0,o.SU)(el),disabled:(0,o.SU)(ol)},null,8,["small","outline","disabled"]),(0,t.Wm)(m.Z,{color:"info",label:"Button",small:(0,o.SU)(tl),outline:(0,o.SU)(el),disabled:(0,o.SU)(ol)},null,8,["small","outline","disabled"]),(0,t.Wm)(m.Z,{color:"success",label:"Button",small:(0,o.SU)(tl),outline:(0,o.SU)(el),disabled:(0,o.SU)(ol)},null,8,["small","outline","disabled"]),(0,t.Wm)(m.Z,{color:"warning",label:"Button",small:(0,o.SU)(tl),outline:(0,o.SU)(el),disabled:(0,o.SU)(ol)},null,8,["small","outline","disabled"]),(0,t.Wm)(m.Z,{color:"danger",label:"Button",small:(0,o.SU)(tl),outline:(0,o.SU)(el),disabled:(0,o.SU)(ol)},null,8,["small","outline","disabled"])]})),_:1}),(0,t.Wm)(U.Z),(0,t.Wm)(d.Z,null,{default:(0,t.w5)((function(){return[(0,t.Wm)(m.Z,{color:"white",label:"Button",icon:(0,o.SU)(i.fOx),small:(0,o.SU)(tl),outline:(0,o.SU)(el),disabled:(0,o.SU)(ol)},null,8,["icon","small","outline","disabled"]),(0,t.Wm)(m.Z,{color:"light",label:"Button",icon:(0,o.SU)(i.fOx),small:(0,o.SU)(tl),outline:(0,o.SU)(el),disabled:(0,o.SU)(ol)},null,8,["icon","small","outline","disabled"]),(0,t.Wm)(m.Z,{color:"info",label:"Button",icon:(0,o.SU)(i.fOx),small:(0,o.SU)(tl),outline:(0,o.SU)(el),disabled:(0,o.SU)(ol)},null,8,["icon","small","outline","disabled"]),(0,t.Wm)(m.Z,{color:"success",label:"Button",icon:(0,o.SU)(i.fOx),small:(0,o.SU)(tl),outline:(0,o.SU)(el),disabled:(0,o.SU)(ol)},null,8,["icon","small","outline","disabled"]),(0,t.Wm)(m.Z,{color:"warning",label:"Button",icon:(0,o.SU)(i.fOx),small:(0,o.SU)(tl),outline:(0,o.SU)(el),disabled:(0,o.SU)(ol)},null,8,["icon","small","outline","disabled"]),(0,t.Wm)(m.Z,{color:"danger",label:"Button",icon:(0,o.SU)(i.fOx),small:(0,o.SU)(tl),outline:(0,o.SU)(el),disabled:(0,o.SU)(ol)},null,8,["icon","small","outline","disabled"])]})),_:1}),(0,t.Wm)(U.Z),(0,t.Wm)(d.Z,null,{default:(0,t.w5)((function(){return[(0,t.Wm)(m.Z,{color:"white",icon:(0,o.SU)(i.fOx),small:(0,o.SU)(tl),outline:(0,o.SU)(el),disabled:(0,o.SU)(ol)},null,8,["icon","small","outline","disabled"]),(0,t.Wm)(m.Z,{color:"light",icon:(0,o.SU)(i.fOx),small:(0,o.SU)(tl),outline:(0,o.SU)(el),disabled:(0,o.SU)(ol)},null,8,["icon","small","outline","disabled"]),(0,t.Wm)(m.Z,{color:"info",icon:(0,o.SU)(i.fOx),small:(0,o.SU)(tl),outline:(0,o.SU)(el),disabled:(0,o.SU)(ol)},null,8,["icon","small","outline","disabled"]),(0,t.Wm)(m.Z,{color:"success",icon:(0,o.SU)(i.fOx),small:(0,o.SU)(tl),outline:(0,o.SU)(el),disabled:(0,o.SU)(ol)},null,8,["icon","small","outline","disabled"]),(0,t.Wm)(m.Z,{color:"warning",icon:(0,o.SU)(i.fOx),small:(0,o.SU)(tl),outline:(0,o.SU)(el),disabled:(0,o.SU)(ol)},null,8,["icon","small","outline","disabled"]),(0,t.Wm)(m.Z,{color:"danger",icon:(0,o.SU)(i.fOx),small:(0,o.SU)(tl),outline:(0,o.SU)(el),disabled:(0,o.SU)(ol)},null,8,["icon","small","outline","disabled"])]})),_:1})]})),_:1})]})),_:1}),(0,t.Wm)(b.Z,null,{default:(0,t.w5)((function(){return[L]})),_:1}),(0,t.Wm)(a.Z,null,{default:(0,t.w5)((function(){return[(0,t._)("div",P,[(0,t.Wm)(s.Z,{title:"With Title",mb:""},{default:(0,t.w5)((function(){return[Q]})),_:1}),(0,t.Wm)(s.Z,{title:"Title & Icons",icon:(0,o.SU)(i.qOQ),"header-icon":(0,o.SU)(i.r5M),mb:""},{default:(0,t.w5)((function(){return[$]})),_:1},8,["icon","header-icon"])]),(0,t.Wm)(Z.Z,{icon:(0,o.SU)(i.fr4),title:"Empty variation"},null,8,["icon"]),(0,t.Wm)(s.Z,{empty:""})]})),_:1}),(0,t.Wm)(p.Z)],64)}}};const J=G;var X=J}}]);
//# sourceMappingURL=ui-legacy.47e9d6c3.js.map