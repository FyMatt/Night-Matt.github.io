import{$ as j,_ as J}from"./getArticles_api-CViNj0Ps.js";import{w as O,$ as U,E as I,d as z,r as W,a as S,b as C,c as g,e as a,f as i,g as c,o as _,h as f,i as v,j as t,F as T,k as E,u as X,l as M,t as h,p as G,m as K,n as Q,_ as Y}from"./index-BQOntmnO.js";const Z="/assets/tx-CSCotLVB.jpg",tt=async()=>{try{const u=O.api_baseUrl+"api/selfinfo",r=await U(u,{matt_blob_token:localStorage.getItem("matt_blob_token")}),{selfinfo:m}=JSON.parse(JSON.stringify(r));return m}catch{I.error("出现错误,无法获取自我介绍内容!");return}},n=u=>(G("data-v-58ea8d69"),u=u(),K(),u),et={class:"common-layout"},ot=n(()=>t("img",{style:{width:"64px",height:"64px"},src:J,alt:"Fy logo"},null,-1)),st=n(()=>t("h1",{class:"top-title"},"首页",-1)),nt=n(()=>t("div",{class:"flex-grow"},null,-1)),lt=n(()=>t("h1",{class:"top-title"},[t("a",{href:"https://qm.qq.com/q/HMbbfXII2A"},"联系")],-1)),at=n(()=>t("h1",{class:"top-title"},"写博客",-1)),it=n(()=>t("h1",{class:"top-title"},"登录",-1)),rt=n(()=>t("h1",{class:"top-title"},"退出",-1)),dt={class:"main-bg"},ct={style:{margin:"50px 0px 0px 50px"}},_t=["onClick"],ut={class:"main-list-title"},mt={class:"main-list-content"},pt={class:"main-list-detail"},gt={class:"main-detail-time"},ht={class:"main-detail-type"},ft={class:"main-right-bg"},vt={class:"right-info-list-bg"},yt={class:"right-top-title"},bt=n(()=>t("h1",{style:{color:"#91D5FF"}},"个人信息",-1)),xt=n(()=>t("img",{style:{width:"100px",height:"auto","padding-bottom":"5px","border-radius":"50px"},src:Z},null,-1)),wt=n(()=>t("div",{style:{"padding-bottom":"5px"}},"Matt",-1)),It=n(()=>t("div",{style:{"padding-bottom":"10px"}},"主要技术: C#.NET全栈工程师",-1)),kt={class:"right-info-list-bg"},St=["innerHTML"],Ct=["innerHTML"],Tt=n(()=>t("h1",null,"Copyright © 2024 枫烨 By.Matt ---- All Rights Reserved.",-1)),Et=z({__name:"Home",async setup(u){let r,m;const d={Id:localStorage.getItem("matt_blob_userId"),Pwd:localStorage.getItem("matt_blob_userPwd"),Token:localStorage.getItem("matt_blob_token")},y=W("");let p=S([{id:2,title:"这是文章标题2",content:"asdasdasdasdasdasdasdasdasdasd",time:"2024-3-18 16:10",type:"生活",tag:""}]);p=[],([r,m]=C(()=>j()),r=await r,m(),r).forEach(e=>{p.push(e)});let b=p,x=S([{title:"介绍",content:"内容"}]);x=[],([r,m]=C(()=>tt()),r=await r,m(),r).forEach(e=>{x.push(e)});function A(){return b.sort((e,o)=>e.tag==="置顶"&&o.tag!=="置顶"?-1:e.tag!=="置顶"&&o.tag==="置顶"?1:e.tag==="置顶"&&o.tag==="置顶"?e.id-o.id:e.tag&&!o.tag?-1:!e.tag&&o.tag?1:(e.tag===o.tag,e.id-o.id))}function V(e){b=$(e)}function $(e){if(e){const o=p.filter(l=>l.title.includes(e)||l.content.includes(e)||l.type.includes(e));return o.length==0&&I({message:"不存在关键内容.",type:"warning"}),o}else return p}function B(){localStorage.removeItem("matt_blob_userId"),localStorage.removeItem("matt_blob_userPwd"),localStorage.removeItem("matt_blob_timestamp"),I({message:"成功退出登录,3s后自动刷新!",type:"success"}),setTimeout(()=>{window.location.href="/"},3e3)}function F(e){const o=b.find(l=>l.id===e);Q.push({name:"article",params:{id:o==null?void 0:o.id}})}return(e,o)=>{const l=c("el-menu-item"),H=c("el-menu"),L=c("el-header"),N=c("el-input"),P=c("el-tag"),w=c("el-divider"),q=c("el-main"),D=c("el-footer"),R=c("el-container");return _(),g("div",et,[a(R,null,{default:i(()=>[a(L,null,{default:i(()=>[a(H,{class:"el-menu-demo",mode:"horizontal",ellipsis:!1,"background-color":"#22272E",router:!0,"text-color":"#ADBAC7","active-text-color":"#4A7CE5"},{default:i(()=>[a(l,{index:"/"},{default:i(()=>[ot,st]),_:1}),nt,a(l,null,{default:i(()=>[lt]),_:1}),d.Id&&d.Pwd&&d.Token?(_(),f(l,{key:0,index:"editor"},{default:i(()=>[at]),_:1})):v("",!0),!d.Id&&!d.Pwd&&d.Token?(_(),f(l,{key:1,index:"login"},{default:i(()=>[it]),_:1})):v("",!0),d.Id&&d.Pwd&&d.Token?(_(),f(l,{key:2,onClick:o[0]||(o[0]=s=>B())},{default:i(()=>[rt]),_:1})):v("",!0)]),_:1})]),_:1}),a(q,null,{default:i(()=>[t("div",dt,[t("div",ct,[a(N,{modelValue:y.value,"onUpdate:modelValue":o[1]||(o[1]=s=>y.value=s),style:{width:"50vw","margin-bottom":"20px"},placeholder:"请输入关键字...","show-word-limit":"",maxlength:"10",onInput:o[2]||(o[2]=s=>V(y.value)),clearable:""},null,8,["modelValue"])]),(_(!0),g(T,null,E(A(),s=>(_(),g("div",{key:s.id},[t("div",{class:"main-content-list-bg",onClick:k=>F(s.id)},[t("div",ut,[M(h(s.title)+" ",1),s.tag?(_(),f(P,{key:0,type:"info",style:{float:"right",color:"#4A7CE5","background-color":"#22272E"}},{default:i(()=>[M(h(s.tag),1)]),_:2},1024)):v("",!0)]),t("div",mt,h(s.content.length>100?s.content.slice(0,100)+"...":s.content),1),a(w,{"border-style":"dashed"}),t("div",pt,[t("div",gt,"发布时间: "+h(s.time),1),t("div",ht,"类型: "+h(s.type),1)])],8,_t)]))),128))]),t("div",ft,[t("div",vt,[t("div",yt,[bt,a(w,{"border-style":"double"}),xt,wt,It])]),(_(!0),g(T,null,E(X(x),(s,k)=>(_(),g("div",{key:k},[t("div",kt,[t("div",{class:"right-top-title",style:{color:"#91D5FF"},innerHTML:s.title},null,8,St),a(w,{"border-style":"double"}),t("div",{class:"content",style:{"padding-bottom":"10px"},innerHTML:s.content},null,8,Ct)])]))),128))])]),_:1}),a(D,null,{default:i(()=>[Tt]),_:1})]),_:1})])}}}),Bt=Y(Et,[["__scopeId","data-v-58ea8d69"]]);export{Bt as default};