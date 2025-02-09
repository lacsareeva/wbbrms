import"./bootstrap-z-Rg4TxU.js";function S(){const n=document.getElementById("search").value.toLowerCase();let o=0,t=0,l=0,a=0,c=0,y=0,b=0,p=0;document.querySelectorAll(".container").forEach(w=>{if(w.style.display!=="none"){const u=w.querySelector("table");if(u){const h=u.getElementsByTagName("tr");let f=0,i=0,T=0,C=0,V=0,v=0,B=0,x=0;const s=u.querySelector("#noDataRow");for(let E=1;E<h.length;E++){const m=h[E],g=m.getElementsByTagName("td");let L=!1;if(m.id!=="noDataRow"){f++,T++,V++,B++;for(let r=0;r<g.length;r++)if(g[r]&&(g[r].textContent||g[r].innerText).toLowerCase().includes(n)){L=!0;break}L?(m.style.display="",i++,C++,v++,x++):m.style.display="none"}}s&&(s.style.display=i===0?"":"none",s.style.display=C===0?"":"none",s.style.display=v===0?"":"none",s.style.display=x===0?"":"none"),o+=f,t+=i,l+=T,a+=C,c+=V,y+=v,b+=B,p+=x}}});const R=document.getElementById("countValue");R.textContent=`${t} of ${o}`;const $=document.getElementById("countValues");$.textContent=`${a} of ${l}`;const D=document.getElementById("countValuess");D.textContent=`${y} of ${c}`;const d=document.getElementById("countValue1");d.textContent=`${p} of ${b}`}window.filterTable=S;document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("search"),n=document.getElementById("sortDoc"),o=document.querySelectorAll(".container");function t(){const l=e.value.toLowerCase(),a=n.value.toLowerCase();let c=0,y=0;o.forEach(p=>{if(p.style.display!=="none"){const q=p.querySelector("table");if(!q)return;const R=q.querySelectorAll("tbody tr");let $=0;R.forEach(d=>{const w=d.querySelector("td:nth-child(4)"),u=d.querySelectorAll("td");let h=!1,f=!1;if(d.id!=="noDataRow"){if(c++,u.forEach(i=>{i.textContent.toLowerCase().includes(l)&&(h=!0)}),w){const i=w.textContent.trim().toLowerCase();f=a===""||i===a}h&&f?(d.style.display="",$++,y++):d.style.display="none"}});const D=q.querySelector("#noDataRow");D&&(D.style.display=$===0?"":"none")}});const b=document.getElementById("countValue1");b&&(b.textContent=`${y} of ${c}`)}e.addEventListener("keyup",t),n.addEventListener("change",t)});function I(){const n=document.getElementById("search").value.toLowerCase().trim();let o=0,t=0,l=0,a=0,c=0,y=0,b=0,p=0;document.querySelectorAll(".container").forEach(w=>{if(w.style.display!=="none"){const u=w.querySelector("table");if(u){const h=u.getElementsByTagName("tr");let f=0,i=0,T=0,C=0,V=0,v=0,B=0,x=0;const s=u.querySelector("#noDataRow");for(let E=1;E<h.length;E++){const m=h[E],g=m.getElementsByTagName("td");let L=!1;if(m.id!=="noDataRow"){f++,T++,V++,B++;for(let r=0;r<g.length;r++)if((g[r].textContent||g[r].innerText).toLowerCase().trim()===n){L=!0;break}L?(m.style.display="",i++,C++,v++,x++):m.style.display="none"}}s&&(s.style.display=i===0?"":"none",s.style.display=C===0?"":"none",s.style.display=v===0?"":"none",s.style.display=x===0?"":"none"),o+=f,t+=i,l+=T,a+=C,c+=V,y+=v,b+=B,p+=x}}});const R=document.getElementById("countValue");R&&(R.textContent=`${t} of ${o}`);const $=document.getElementById("countValues");$.textContent=`${a} of ${l}`;const D=document.getElementById("countValuess");D.textContent=`${y} of ${c}`;const d=document.getElementById("countValue1");d.textContent=`${p} of ${b}`}window.searchReport=I;function P(e){switch(document.querySelectorAll(".container").forEach(o=>{o.style.display="none"}),document.getElementById(e).style.display="block",document.querySelectorAll(".report-btn button").forEach(o=>{o.classList.remove("active")}),e){case"requestContainer":document.getElementById("requestBtn").classList.add("active"),S();break;case"borrowContainer":document.getElementById("borrowBtn").classList.add("active"),S();break;case"blotterContainer":document.getElementById("blotterBtn").classList.add("active"),S();break;case"accountsContainer":document.getElementById("accountsBtn").classList.add("active"),S();break;case"announcementContainer":document.getElementById("announcementBtn").classList.add("active"),S();break}}window.showSection=P;const A=document.querySelector("#toPDF"),N=document.querySelector("#announcementContainer"),k=()=>{const e=new Date,n=e.getFullYear(),o=String(e.getMonth()+1).padStart(2,"0"),t=String(e.getDate()).padStart(2,"0");let l=e.getHours();const a=String(e.getMinutes()).padStart(2,"0"),c=l>=12?"PM":"AM";return l=l%12||12,`Date: ${n}-${o}-${t} Time: ${l.toString().padStart(2,"0")}:${a} ${c}`},F=function(e){const n=k(),o=`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Announcement Report</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                padding: 20px;
                -webkit-print-color-adjust: exact;
            }
            h2 {
                text-align: center;
                padding-bottom: 10px;
            }
            hr {
                margin: 10px 0;
            }
            #datetime {
                font-weight: bold;
            }
            table {
                width: 100%;
                border-collapse: collapse;
            }
            table,
            th,
            td {
                border: 1px solid #ccc;
            }
            th,
            td {
                padding: 12px;
                text-align: center;
            }
            th {
                background-color: #008C63;
                color: white;
            }
            .print-button{
                display:none;
            }
        </style>
    </head>
    <body>
        <div style="font-weight: bold">Name: ${userName}</div>
        <div style="font-weight: bold">Email: ${userEmail}</div>
        <div id="datetime">${n}</div>
        <hr>
        <main>${e.innerHTML}</main>
    </body>
    </html>
    `,t=window.open();t.document.write(o),setTimeout(()=>{t.print(),t.close()},400)};A.onclick=()=>{F(N)};const M=document.querySelector("#blotter_toPDF"),j=document.querySelector("#blotterContainer"),H=function(e){const n=k(),o=`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Blotter Report</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                padding: 20px;
                -webkit-print-color-adjust: exact;
            }
            h2 {
                text-align: center;
                padding-bottom: 10px;
            }
            hr {
                margin: 10px 0;
            }
            #datetime {
                font-weight: bold;
            }
            table {
                width: 100%;
                border-collapse: collapse;
            }
            table,
            th,
            td {
                border: 1px solid #ccc;
            }
            th,
            td {
                padding: 12px;
                text-align: center;
            }
            th {
                background-color: #008C63;
                color: white;
            }
            .print-button{
                display:none;
            }
        </style>
    </head>
    <body>
        <div style="font-weight: bold">Name: ${userName}</div>
        <div style="font-weight: bold">Email: ${userEmail}</div>
        <div id="datetime">${n}</div>
        <hr>
        <main>${e.innerHTML}</main>
    </body>
    </html>
    `,t=window.open();t.document.write(o),setTimeout(()=>{t.print(),t.close()},400)};M.onclick=()=>{H(j)};const O=document.querySelector("#borrow_toPDF"),Y=document.querySelector("#borrowContainer"),z=function(e){const n=k(),o=`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Borrowed Equipment Report</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                padding: 20px;
                -webkit-print-color-adjust: exact;
            }
            h2 {
                text-align: center;
                padding-bottom: 10px;
            }
            hr {
                margin: 10px 0;
            }
            #datetime {
                font-weight: bold;
            }
            table {
                width: 100%;
                border-collapse: collapse;
            }
            table,
            th,
            td {
                border: 1px solid #ccc;
            }
            th,
            td {
                padding: 12px;
                text-align: center;
            }
            th {
                background-color: #008C63;
                color: white;
            }
            .print-button{
                display:none;
            }
        </style>
    </head>
    <body>
        <div style="font-weight: bold">Name: ${userName}</div>
        <div style="font-weight: bold">Email: ${userEmail}</div>
        <div id="datetime">${n}</div>
        <hr>
        <main>${e.innerHTML}</main>
    </body>
    </html>
    `,t=window.open();t.document.write(o),setTimeout(()=>{t.print(),t.close()},400)};O.onclick=()=>{z(Y)};const G=document.querySelector("#account_toPDF"),J=document.querySelector("#accountsContainer"),K=function(e){const n=k(),o=`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Account's List Report</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                padding: 20px;
                -webkit-print-color-adjust: exact;
            }
            h2 {
                text-align: center;
                padding-bottom: 10px;
            }
            hr {
                margin: 10px 0;
            }
            #datetime {
                font-weight: bold;
            }
            table {
                width: 100%;
                border-collapse: collapse;
            }
            table,
            th,
            td {
                border: 1px solid #ccc;
            }
            th,
            td {
                padding: 12px;
                text-align: center;
            }
            th {
                background-color: #008C63;
                color: white;
            }
            .print-button{
                display:none;
            }
        </style>
    </head>
    <body>
        <div style="font-weight: bold">Name: ${userName}</div>
        <div style="font-weight: bold">Email: ${userEmail}</div>
        <div id="datetime">${n}</div>
        <hr>
        <main>${e.innerHTML}</main>
    </body>
    </html>
    `,t=window.open();t.document.write(o),setTimeout(()=>{t.print(),t.close()},400)};G.onclick=()=>{K(J)};const Q=document.querySelector("#request_toPDF"),U=document.querySelector("#requestContainer"),W=function(e){const n=k(),o=`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Request Document List Report</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                padding: 20px;
                -webkit-print-color-adjust: exact;
            }
            h2 {
                text-align: center;
                padding-bottom: 10px;
            }
            hr {
                margin: 10px 0;
            }
            #datetime {
                font-weight: bold;
            }
            table {
                width: 100%;
                border-collapse: collapse;
            }
            table,
            th,
            td {
                border: 1px solid #ccc;
            }
            th,
            td {
                padding: 12px;
                text-align: center;
            }
            th {
                background-color: #008C63;
                color: white;
            }
            .sortDoc{
                display:none;
            }
            .print-button{
                display:none;
            }
        </style>
    </head>
    <body>
        <div style="font-weight: bold">Name: ${userName}</div>
        <div style="font-weight: bold">Email: ${userEmail}</div>
        <div id="datetime">${n}</div>
        <hr>
        <main>${e.innerHTML}</main>
    </body>
    </html>
    `,t=window.open();t.document.write(o),setTimeout(()=>{t.print(),t.close()},400)};Q.onclick=()=>{W(U)};
