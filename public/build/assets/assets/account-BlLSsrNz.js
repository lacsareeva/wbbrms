function f(e){Swal.fire({title:"Are you sure?",text:"Once deleted, the staff account will be archived and cannot be retrieved.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"}).then(n=>{n.isConfirmed&&(window.location.href=`accounts/delete/${e}`)})}window.confirmRemove=f;function p(e){document.getElementById("edit-account-modal").style.display="block",document.getElementById("update-name").value=e.name||"",document.getElementById("update-mname").value=e.mname||"",document.getElementById("update-lname").value=e.lname||"",document.getElementById("update-suffix").value=e.suffix||"",document.getElementById("update-password").value=e.password||"",document.getElementById("update-email").value=e.email||"";const n=document.getElementById("update-form");n&&(n.action=`accounts/update/${e.id}`)}window.openEditModal=p;const s=document.getElementById("update-email"),t=document.getElementById("update-password"),l=document.getElementById("password_confirmation"),L=document.getElementById("update-form"),c=(e,n)=>{const r=e.parentElement,v=r.querySelector(".error");v.innerText=n,r.classList.add("error"),r.classList.remove("success")},o=e=>{const n=e.parentElement,r=n.querySelector(".error");r.innerText="",n.classList.add("success"),n.classList.remove("error")};function u(){let e=!0;return s.value.trim()===""?(c(s,"email is required*"),s.classList.add("invalid"),s.classList.remove("valid"),e=!1):s.value.includes("@")?(o(s),s.classList.remove("invalid"),s.classList.add("valid")):(c(s,"please provide @ in your email address*"),s.classList.add("invalid"),s.classList.remove("valid"),e=!1),t.value.trim()===""?(o(t),t.classList.remove("invalid"),t.classList.add("valid")):t.value.length<8?(c(t,"password must be atleast 8 character*"),t.classList.add("invalid"),t.classList.remove("valid"),e=!1):(o(t),t.classList.remove("invalid"),t.classList.add("valid")),l.value.trim()===""?(o(l),l.classList.remove("invalid"),l.classList.add("valid")):l.value!==t.value?(c(l,"password doesn't match*"),l.classList.add("invalid"),l.classList.remove("valid"),e=!1):(o(l),l.classList.remove("invalid"),l.classList.add("valid")),e}[s,t,l].forEach(e=>{e.addEventListener("input",u),e.addEventListener("change",u)});L.addEventListener("submit",function(e){u()||e.preventDefault()});const d=document.getElementById("create_email"),a=document.getElementById("create_password"),i=document.getElementById("create_password_confirmation"),E=document.getElementById("create_form");function m(){let e=!0;return d.value.trim()===""?(c(d,"email is required*"),d.classList.add("invalid"),d.classList.remove("valid"),e=!1):d.value.includes("@")?(o(d),d.classList.remove("invalid"),d.classList.add("valid")):(c(d,"please provide @ in your email address*"),d.classList.add("invalid"),d.classList.remove("valid"),e=!1),a.value.trim()===""?(o(a),a.classList.remove("invalid"),a.classList.add("valid")):a.value.length<8?(c(a,"password must be atleast 8 character*"),a.classList.add("invalid"),a.classList.remove("valid"),e=!1):(o(a),a.classList.remove("invalid"),a.classList.add("valid")),i.value.trim()===""?(o(i),i.classList.remove("invalid"),i.classList.add("valid")):i.value!==a.value?(c(i,"password doesn't match*"),i.classList.add("invalid"),i.classList.remove("valid"),e=!1):(o(i),i.classList.remove("invalid"),i.classList.add("valid")),e}[d,a,i].forEach(e=>{e.addEventListener("input",m),e.addEventListener("change",m)});E.addEventListener("submit",function(e){m()||e.preventDefault()});function y(){document.getElementById("edit-account-modal").style.display="none"}window.closeEditModal=y;function g(){document.getElementById("add-account-modal").style.display="none"}window.closeAddModal=g;function I(){document.getElementById("add-account-modal").style.display="block"}window.openAddAccountModal=I;document.getElementById("create_name").addEventListener("input",function(e){this.value=this.value.replace(/[^A-Za-z\s]/g,"")});document.getElementById("create_mname").addEventListener("input",function(e){this.value=this.value.replace(/[^A-Za-z\s]/g,"")});document.getElementById("create_lname").addEventListener("input",function(e){this.value=this.value.replace(/[^A-Za-z\s]/g,"")});
