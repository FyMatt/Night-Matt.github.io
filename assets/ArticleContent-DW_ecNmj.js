import{a as A,_ as C}from"./getArticles_api-DoJnZDJt.js";import{d as v,b as w,E as B,c as p,e as o,f as s,q as I,g as n,o as m,j as t,t as _,u as l,i as b,p as D,m as k,_ as E}from"./index-D2xq2Qxj.js";import"./index.esm-ChyYMOIm.js";const a=c=>(D("data-v-63766935"),c=c(),k(),c),M={class:"common-layout"},q=a(()=>t("img",{style:{width:"64px",height:"64px"},src:C,alt:"Fy logo"},null,-1)),S=a(()=>t("h1",{class:"top-title"},"首页",-1)),z=a(()=>t("div",{class:"flex-grow"},null,-1)),H=a(()=>t("h1",{class:"top-title"},[t("a",{href:"https://qm.qq.com/q/HMbbfXII2A"},"联系")],-1)),N={style:{color:"#CFD3DC","text-align":"center","font-size":"50px","font-weight":"bold"}},R={class:"main-bg"},V={style:{margin:"30px 50px 30px 50px"}},F={style:{color:"#ADBAC7","text-align":"center"}},L={style:{color:"#ADBAC7","text-align":"center"}},T={key:0,style:{color:"#ADBAC7","text-align":"center"}},j=["innerHTML"],X=a(()=>t("h1",null,"Copyright © 2024 枫烨 By.Matt ---- All Rights Reserved.",-1)),$=v({__name:"ArticleContent",async setup(c){let i,r;const u=I().params.id,e=([i,r]=w(()=>A(parseInt(u))),i=await i,r(),i);return B({message:"正在阅读 《"+e.title+"》",type:"success"}),document.title="Matt - "+e.title,(J,K)=>{const d=n("el-menu-item"),h=n("el-menu"),f=n("el-header"),g=n("el-main"),x=n("el-footer"),y=n("el-container");return m(),p("div",M,[o(y,null,{default:s(()=>[o(f,null,{default:s(()=>[o(h,{class:"el-menu-demo",mode:"horizontal",ellipsis:!1,"background-color":"#22272E",router:!0,"text-color":"#ADBAC7","active-text-color":"#4A7CE5"},{default:s(()=>[o(d,{index:"/"},{default:s(()=>[q,S]),_:1}),z,o(d,null,{default:s(()=>[H]),_:1})]),_:1})]),_:1}),o(g,null,{default:s(()=>[t("div",N,_(l(e).title),1),t("div",R,[t("div",V,[t("div",F,"发布时间: "+_(l(e).time),1),t("div",L,"类型: "+_(l(e).type),1),l(e).tag?(m(),p("div",T,"标签: "+_(l(e).tag),1)):b("",!0),t("div",{style:{"background-color":"#22272E",color:"#ADBAC7",padding:"20px",margin:"20px","font-size":"20px","word-wrap":"break-word"},innerHTML:l(e).content},null,8,j)])])]),_:1}),o(x,null,{default:s(()=>[X]),_:1})]),_:1})])}}}),U=E($,[["__scopeId","data-v-63766935"]]);export{U as default};
