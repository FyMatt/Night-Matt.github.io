import{w as e,$ as c,E as s,s as l}from"./index-BD6kJNY7.js";const i="/assets/logo-Ca-P04kH.jpg",_=async()=>{try{const t=e.api_baseUrl+"api/articles",r=await c(t,{matt_blob_token:localStorage.getItem("matt_blob_token")}),{articles:a}=JSON.parse(JSON.stringify(r));return a}catch{s.error("出现错误,无法获取文章!");return}},g=async t=>{try{const r=e.api_baseUrl+"api/article",a=await l(r,{ArticleId:t,matt_blob_token:localStorage.getItem("matt_blob_token")}),{article:o}=JSON.parse(JSON.stringify(a));return o}catch{s.error("出现错误,无法获取文章!");return}};export{_ as $,i as _,g as a};
