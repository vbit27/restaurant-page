(()=>{"use strict";const e=()=>{const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("h1"),c=document.createElement("h3"),i=document.createElement("div"),a=document.createElement("img");return e.classList="container",t.classList="title-container",n.innerHTML="The tea you'll <br> never spill",n.classList="title",c.innerHTML="100% ORGANIC & FAIR TRADE",i.classList="img-container",a.setAttribute("src","../img/tea.jpg"),a.setAttribute("alt","tea cup"),t.appendChild(c),t.appendChild(n),e.appendChild(t),i.appendChild(a),e.appendChild(i),e};content.appendChild(e()),function(){const t=document.getElementById("content"),n=document.getElementById("home"),c=document.getElementById("menu"),i=document.getElementById("contact");function a(){t.innerHTML=""}n.addEventListener("click",(function(){a(),t.appendChild(e())})),c.addEventListener("click",(function(){a(),t.appendChild((()=>{const e=document.createElement("div");return e.classList="grid-container",[{img:"../img/tea1.jpg",name:"Green Tea"},{img:"../img/tea2.jpg",name:"Motcha Tea"},{img:"../img/tea3.jpg",name:"Herbal Tea"}].forEach((t=>function(t){const n=document.createElement("img"),c=document.createElement("h3"),i=document.createElement("div");n.setAttribute("src",t.img),c.innerHTML=t.name,i.classList="cell",function(t,n,c){c.appendChild(t),c.appendChild(n),e.appendChild(c)}(n,c,i)}(t))),e})())})),i.addEventListener("click",(function(){a(),t.appendChild((()=>{const e=document.createElement("p"),t=document.createElement("h3"),n=document.createElement("div"),c=document.createElement("h2"),i=document.createElement("div"),a=document.createElement("div");return e.innerHTML="Monday - Sunday <br> 10am - 11pm <br> Kreuzberg, Berlin <br> awesome-tea@berlin.com",t.innerHTML="Find us here:",n.classList="contact-cell-info",c.innerHTML="It's tea <br> time",i.classList="contact-cell-title",a.classList="grid-container-contact",n.appendChild(t),n.appendChild(e),i.appendChild(c),a.appendChild(i),a.appendChild(n),a})())}))}()})();