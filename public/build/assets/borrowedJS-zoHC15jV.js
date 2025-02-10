const y=document.getElementById("create_borrow_date"),g=document.getElementById("create_return_date");function B(){const e=new Date,t=e.getFullYear(),d=String(e.getMonth()+1).padStart(2,"0"),c=String(e.getDate()).padStart(2,"0"),l=String(e.getHours()).padStart(2,"0"),n=String(e.getMinutes()).padStart(2,"0");return`${t}-${d}-${c}T${l}:${n}`}const r=B();y.min=r;B();g.min=r;y.value=r;g.value=r;function I(e){document.getElementById("view-request-modal").style.display="block";function t(l){if(!l)return"";const n=new Date(l),i=n.getFullYear(),s=String(n.getMonth()+1).padStart(2,"0"),a=String(n.getDate()).padStart(2,"0"),o=String(n.getHours()).padStart(2,"0"),u=String(n.getMinutes()).padStart(2,"0");return`${i}-${s}-${a} ${o}:${u}`}document.getElementById("view_id").value=e.id||"",document.getElementById("view_ids").value=e.id||"",document.getElementById("view_sender").value=e.sender||"",document.getElementById("view_name").textContent=e.name||"",document.getElementById("view_address").textContent=e.address||"",document.getElementById("view_equipment").textContent=e.equipment||"",document.getElementById("view_quantity").textContent=e.quantity||"",document.getElementById("view_purpose").textContent=e.purpose||"",document.getElementById("view_contact").textContent=e.contact||"",document.getElementById("view_borrow_date").textContent=t(e["borrow-date"]||""),document.getElementById("view_return_date").textContent=t(e["return-date"]||"");const d=document.getElementById("reject_button"),c=document.getElementById("accept_button");d.replaceWith(d.cloneNode(!0)),c.replaceWith(c.cloneNode(!0)),document.getElementById("reject_button").addEventListener("click",function(n){n.preventDefault(),document.getElementById("response_accepted_info").style.display="none",document.getElementById("response_rejected_info").style.display="block";function i(s=null){Swal.fire({title:"Are you sure?",text:"This action cannot be undone!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes",cancelButtonText:"Cancel"}).then(a=>{if(a.isConfirmed){const o=s||document.getElementById("view_id").value;if(!o||o.trim()===""){Swal.fire("Error!","No record selected for deletion or the table is empty.","error");return}const u=document.getElementById("view-form");u.action=u.action.replace(":id",o),u.submit()}})}window.rejectRequest=i}),document.getElementById("accept_button").addEventListener("click",function(n){n.preventDefault(),document.getElementById("response_rejected_info").style.display="none",document.getElementById("response_accepted_info").style.display="block";function i(s=null){Swal.fire({title:"Are you sure?",text:"This action cannot be undone!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes",cancelButtonText:"Cancel"}).then(a=>{if(a.isConfirmed){const o=s||document.getElementById("view_ids").value;if(!o||o.trim()===""){Swal.fire("Error!","No record selected for deletion or the table is empty.","error");return}const u=document.getElementById("update-forms");u.action=u.action.replace(":id",o),u.submit()}})}window.acceptRequest=i})}window.viewBorrowed=I;function f(e){document.getElementById("update-request-modal").style.display="block";function t(c){if(!c)return"";const l=new Date(c),n=l.getFullYear(),i=String(l.getMonth()+1).padStart(2,"0"),s=String(l.getDate()).padStart(2,"0"),a=String(l.getHours()).padStart(2,"0"),o=String(l.getMinutes()).padStart(2,"0");return`${n}-${i}-${s}T${a}:${o}`}document.getElementById("update_name").value=e.name||"",document.getElementById("update_address").value=e.address||"",document.getElementById("update_equipment").value=e.equipment||"",document.getElementById("update_quantity").value=e.quantity||"",document.getElementById("customInputs").value=e.equipment||"",document.getElementById("update_purpose").value=e.purpose||"",document.getElementById("update_contact").value=e.contact||"",document.getElementById("update_borrow_date").value=t(e["borrow-date"]),document.getElementById("update_return_date").value=t(e["return-date"]),document.getElementById("update_equipment").value===""&&(document.getElementById("customInputs").style.display="block",document.getElementById("update_equipment").style.display="none");const d=document.getElementById("update-form");d&&e.id&&(d.action=`borrowed/update/${e.id}`)}window.editBorrowed=f;function w(e){Swal.fire({title:"Return equipment?",text:"",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Return",cancelButtonText:"Cancel"}).then(t=>{t.isConfirmed&&(window.location.href=`borrowed/deletes/${e}`)})}window.confirmDelete=w;function E(){const t=document.getElementById("search").value.toLowerCase(),c=document.getElementById("borrowedTable").getElementsByTagName("tr");let l=0,n=0;for(let a=1;a<c.length;a++){const o=c[a],u=o.getElementsByTagName("td");let p=!1;if(o.id!=="noDataRow"){l++;for(let m=0;m<u.length;m++)if(u[m]&&(u[m].textContent||u[m].innerText).toLowerCase().includes(t)){p=!0;break}p?(o.style.display="",n++):o.style.display="none"}}const i=document.getElementById("noDataRow");i.style.display=n===0?"":"none";const s=document.getElementById("countValue");s.textContent=`${n} of ${l}`}window.filterTable=E;function _(){document.getElementById("update-request-modal").style.display="none"}window.closeUpdateWalkInRequestModal=_;function v(){document.getElementById("view-request-modal").style.display="none"}window.closeRequestModal=v;function q(){document.getElementById("response_accepted_info").style.display="none",document.getElementById("response_rejected_info").style.display="none",document.getElementById("view_accepted_response").value="",document.getElementById("view_rejected_response").value="",acceptRequest(id=null),rejectRequest(id=null)}window.closeModal=q;function h(){document.getElementById("walk-in-request-modal").style.display="block",document.getElementById("Fullname").focus()}window.openWalkInRequestModal=h;function C(){document.getElementById("walk-in-request-modal").style.display="none"}window.closeWalkInRequestModal=C;document.getElementById("Fullname").addEventListener("input",function(e){this.value=this.value.replace(/[^A-Za-z\s]/g,"")});function S(e){var t=document.getElementById("customInput"),d=document.getElementById("equipment");e.value==="other"?(t.style.display="block",d.style.display="none",t.name="equipment"):(t.style.display="none",d.style.display="block",t.name="custom_input")}window.toggleInput=S;function R(e){var t=document.getElementById("customInputs"),d=document.getElementById("update_equipment");e.value==="other"?(t.style.display="block",d.style.display="none",t.name="equipment"):(t.style.display="none",d.style.display="block",t.name="custom_input")}window.toggleInputs=R;
