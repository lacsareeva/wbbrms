import"./bootstrap-z-Rg4TxU.js";function h(){const n=document.getElementById("search").value.toLowerCase();let e=0,t=0,i=0,r=0,d=0,g=0,f=0,C=0;document.querySelectorAll(".container").forEach(x=>{if(x.style.display!=="none"){const u=x.querySelector("table");if(u){const v=u.getElementsByTagName("tr");let $=0,m=0,E=0,b=0,R=0,y=0,D=0,w=0;const l=u.querySelector("#noDataRow");for(let p=1;p<v.length;p++){const a=v[p],c=a.getElementsByTagName("td");let T=!1;if(a.id!=="noDataRow"){$++,E++,R++,D++;for(let s=0;s<c.length;s++)if(c[s]&&(c[s].textContent||c[s].innerText).toLowerCase().includes(n)){T=!0;break}T?(a.style.display="",m++,b++,y++,w++):a.style.display="none"}}l&&(l.style.display=m===0?"":"none",l.style.display=b===0?"":"none",l.style.display=y===0?"":"none",l.style.display=w===0?"":"none"),e+=$,t+=m,i+=E,r+=b,d+=R,g+=y,f+=D,C+=w}}});const V=document.getElementById("countValue");V.textContent=`${t} of ${e}`;const B=document.getElementById("countValues");B.textContent=`${r} of ${i}`;const q=document.getElementById("countValuess");q.textContent=`${g} of ${d}`;const k=document.getElementById("countValue1");k.textContent=`${C} of ${f}`}window.filterTable=h;function P(){const n=document.getElementById("search").value.toLowerCase().trim();let e=0,t=0,i=0,r=0,d=0,g=0,f=0,C=0;document.querySelectorAll(".container").forEach(x=>{if(x.style.display!=="none"){const u=x.querySelector("table");if(u){const v=u.getElementsByTagName("tr");let $=0,m=0,E=0,b=0,R=0,y=0,D=0,w=0;const l=u.querySelector("#noDataRow");for(let p=1;p<v.length;p++){const a=v[p],c=a.getElementsByTagName("td");let T=!1;if(a.id!=="noDataRow"){$++,E++,R++,D++;for(let s=0;s<c.length;s++)if((c[s].textContent||c[s].innerText).toLowerCase().trim()===n){T=!0;break}T?(a.style.display="",m++,b++,y++,w++):a.style.display="none"}}l&&(l.style.display=m===0?"":"none",l.style.display=b===0?"":"none",l.style.display=y===0?"":"none",l.style.display=w===0?"":"none"),e+=$,t+=m,i+=E,r+=b,d+=R,g+=y,f+=D,C+=w}}});const V=document.getElementById("countValue");V&&(V.textContent=`${t} of ${e}`);const B=document.getElementById("countValues");B.textContent=`${r} of ${i}`;const q=document.getElementById("countValuess");q.textContent=`${g} of ${d}`;const k=document.getElementById("countValue1");k.textContent=`${C} of ${f}`}window.searchReport=P;function I(o){switch(document.querySelectorAll(".container").forEach(e=>{e.style.display="none"}),document.getElementById(o).style.display="block",document.querySelectorAll(".report-btn button").forEach(e=>{e.classList.remove("active")}),o){case"requestContainer":document.getElementById("requestBtn").classList.add("active"),h();break;case"borrowContainer":document.getElementById("borrowBtn").classList.add("active"),h();break;case"blotterContainer":document.getElementById("blotterBtn").classList.add("active"),h();break;case"accountsContainer":document.getElementById("accountsBtn").classList.add("active"),h();break;case"announcementContainer":document.getElementById("announcementBtn").classList.add("active"),h();break}}window.showSection=I;const N=document.querySelector("#toPDF"),A=document.querySelector("#announcementContainer"),S=()=>{const o=new Date,n=o.getFullYear(),e=String(o.getMonth()+1).padStart(2,"0"),t=String(o.getDate()).padStart(2,"0");let i=o.getHours();const r=String(o.getMinutes()).padStart(2,"0"),d=i>=12?"PM":"AM";return i=i%12||12,`Date: ${n}-${e}-${t} Time: ${i.toString().padStart(2,"0")}:${r} ${d}`},F=function(o){const n=S(),e=`
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
        <main>${o.innerHTML}</main>
    </body>
    </html>
    `,t=window.open();t.document.write(e),setTimeout(()=>{t.print(),t.close()},400)};N.onclick=()=>{F(A)};const M=document.querySelector("#blotter_toPDF"),j=document.querySelector("#blotterContainer"),H=function(o){const n=S(),e=`
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
        <main>${o.innerHTML}</main>
    </body>
    </html>
    `,t=window.open();t.document.write(e),setTimeout(()=>{t.print(),t.close()},400)};M.onclick=()=>{H(j)};const Y=document.querySelector("#borrow_toPDF"),O=document.querySelector("#borrowContainer"),z=function(o){const n=S(),e=`
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
        <main>${o.innerHTML}</main>
    </body>
    </html>
    `,t=window.open();t.document.write(e),setTimeout(()=>{t.print(),t.close()},400)};Y.onclick=()=>{z(O)};const G=document.querySelector("#account_toPDF"),J=document.querySelector("#accountsContainer"),K=function(o){const n=S(),e=`
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
        <main>${o.innerHTML}</main>
    </body>
    </html>
    `,t=window.open();t.document.write(e),setTimeout(()=>{t.print(),t.close()},400)};G.onclick=()=>{K(J)};const Q=document.querySelector("#request_toPDF"),U=document.querySelector("#requestContainer"),W=function(o){const n=S(),e=`
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
        <main>${o.innerHTML}</main>
    </body>
    </html>
    `,t=window.open();t.document.write(e),setTimeout(()=>{t.print(),t.close()},400)};Q.onclick=()=>{W(U)};
