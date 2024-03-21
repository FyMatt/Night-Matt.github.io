import{d as w,r as m,v as O,x,y as S,o as y,c as h,z as B,A as I,w as F,s as A,E as v,B as j,e as _,f as D,j as N,u as C,g as b,l as H,_ as M}from"./index-mMOjdpMZ.js";import{i as U,Q as k,a as L}from"./index.esm-ChyYMOIm.js";var R=Object.defineProperty,T=Object.defineProperties,J=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,V=(t,e,o)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,q=(t,e)=>{for(var o in e||(e={}))Q.call(e,o)&&V(t,o,e[o]);if(E)for(var o of E(e))z.call(e,o)&&V(t,o,e[o]);return t},G=(t,e)=>T(t,J(e));function c(t){let e=`请使用 '@${t}' 事件，不要放在 props 中`;return e+=`
Please use '@${t}' event instead of props`,e}var P=(t,e)=>{for(const[o,n]of e)t[o]=n;return t};const K=w({props:{mode:{type:String,default:"default"},defaultContent:{type:Array,default:[]},defaultHtml:{type:String,default:""},defaultConfig:{type:Object,default:{}},modelValue:{type:String,default:""}},setup(t,e){const o=m(null),n=O(null),s=m(""),i=()=>{if(!o.value)return;const d=I(t.defaultContent);U({selector:o.value,mode:t.mode,content:d||[],html:t.defaultHtml||t.modelValue||"",config:G(q({},t.defaultConfig),{onCreated(r){if(n.value=r,e.emit("onCreated",r),t.defaultConfig.onCreated){const l=c("onCreated");throw new Error(l)}},onChange(r){const l=r.getHtml();if(s.value=l,e.emit("update:modelValue",l),e.emit("onChange",r),t.defaultConfig.onChange){const u=c("onChange");throw new Error(u)}},onDestroyed(r){if(e.emit("onDestroyed",r),t.defaultConfig.onDestroyed){const l=c("onDestroyed");throw new Error(l)}},onMaxLength(r){if(e.emit("onMaxLength",r),t.defaultConfig.onMaxLength){const l=c("onMaxLength");throw new Error(l)}},onFocus(r){if(e.emit("onFocus",r),t.defaultConfig.onFocus){const l=c("onFocus");throw new Error(l)}},onBlur(r){if(e.emit("onBlur",r),t.defaultConfig.onBlur){const l=c("onBlur");throw new Error(l)}},customAlert(r,l){if(e.emit("customAlert",r,l),t.defaultConfig.customAlert){const u=c("customAlert");throw new Error(u)}},customPaste:(r,l)=>{if(t.defaultConfig.customPaste){const a=c("customPaste");throw new Error(a)}let u;return e.emit("customPaste",r,l,a=>{u=a}),u}})})};function p(d){const r=n.value;r!=null&&r.setHtml(d)}return x(()=>{i()}),S(()=>t.modelValue,d=>{d!==s.value&&p(d)}),{box:o}}}),W={ref:"box",style:{height:"100%"}};function X(t,e,o,n,s,i){return y(),h("div",W,null,512)}var Y=P(K,[["render",X]]);const Z=w({props:{editor:{type:Object},mode:{type:String,default:"default"},defaultConfig:{type:Object,default:{}}},setup(t){const e=m(null),o=n=>{if(e.value){if(n==null)throw new Error("Not found instance of Editor when create <Toolbar/> component");k.getToolbar(n)||L({editor:n,selector:e.value||"<div></div>",mode:t.mode,config:t.defaultConfig})}};return B(()=>{const{editor:n}=t;n!=null&&o(n)}),{selector:e}}}),ee={ref:"selector"};function te(t,e,o,n,s,i){return y(),h("div",ee,null,512)}var oe=P(Z,[["render",te]]);const re=async t=>{try{if(localStorage.getItem("matt_blob_userId")==null)return!1;{const o=F.api_baseUrl+"api/sendarticle",n=await A(o,t),{success:s}=JSON.parse(JSON.stringify(n));return s?v({message:"成功发布文章!",type:"success"}):v.error("发布失败!"),s}}catch{return v.error("出现错误,无法发布文章!"),!1}},ne={class:"editor-bg"},le={style:{border:"1px solid #ccc"}},ae=w({__name:"ArticleEditor",setup(t){const e=m(""),o=m(""),n=m(""),s=O(),i=m("<p></p>"),p={},d={placeholder:"请输入内容..."};j(()=>{const u=s.value;u!=null&&u.destroy()});const r=u=>{s.value=u};document.title="Article Editor";function l(){e.value&&o.value&&i.value.length>20?(re({title:e.value,type:o.value,content:i.value,tag:n.value,matt_blob_token:localStorage.getItem("matt_blob_token"),userId:localStorage.getItem("matt_blob_userId"),userPwd:localStorage.getItem("matt_blob_userPwd")}),e.value="",o.value="",i.value="",n.value="",v({message:"成功提交文章，请等待发布结果!",type:"success"})):v.error("标题、类别、内容不准为空!")}return(u,a)=>{const g=b("el-input"),$=b("el-button");return y(),h("div",ne,[_(g,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=f=>e.value=f),style:{width:"30vw",margin:"20px 1vw"},placeholder:"请输入标题"},null,8,["modelValue"]),_(g,{modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=f=>o.value=f),style:{width:"10vw",margin:"20px 1vw"},placeholder:"请输入类别"},null,8,["modelValue"]),_(g,{modelValue:n.value,"onUpdate:modelValue":a[2]||(a[2]=f=>n.value=f),style:{width:"10vw",margin:"20px 1vw"},placeholder:"请输入标签"},null,8,["modelValue"]),_($,{type:"success",onClick:a[3]||(a[3]=f=>l()),round:""},{default:D(()=>[H("发布")]),_:1}),N("div",le,[_(C(oe),{style:{"border-bottom":"2px solid #ccc"},editor:s.value,defaultConfig:p},null,8,["editor"]),_(C(Y),{style:{height:"80vh","overflow-y":"hidden"},modelValue:i.value,"onUpdate:modelValue":a[4]||(a[4]=f=>i.value=f),defaultConfig:d,onOnCreated:r},null,8,["modelValue"])])])}}}),ie=M(ae,[["__scopeId","data-v-f7a804d4"]]);export{ie as default};
