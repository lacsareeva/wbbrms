import"./bootstrap-z-Rg4TxU.js";import{m as i,S as o}from"./sweetalert2.esm.all-DfSU1UuE.js";window.Alpine=i;i.start();function l(){o.fire({icon:"success",title:"Login Successful",text:"You have successfully logged in!",timer:3e3,showConfirmButton:!1})}window.showLoginAlert=l;function s(e){var t=new FileReader;t.onload=function(){var n=document.getElementById("profilePictures");n?n.src=t.result:console.error("Image element not found!")},e.target.files&&e.target.files[0]?t.readAsDataURL(e.target.files[0]):console.error("No file selected!")}function a(){var e=document.getElementById("profilePictures");e?e.src=defaultImageUrl:console.error("Image element not found!")}window.previewImage=s;window.resetImage=a;document.getElementById("name").addEventListener("input",function(e){this.value=this.value.replace(/[^A-Za-z\s]/g,"")});document.getElementById("mname").addEventListener("input",function(e){this.value=this.value.replace(/[^A-Za-z\s]/g,"")});document.getElementById("lname").addEventListener("input",function(e){this.value=this.value.replace(/[^A-Za-z\s]/g,"")});document.getElementById("suffix").addEventListener("input",function(e){this.value=this.value.replace(/[^A-Za-z\s]/g,"")});function u(e){var t=document.getElementById("customInput"),n=document.getElementById("verification_id");e.value==="Other ID"?(t.style.display="block",n.style.display="none",t.name="verification_id"):(t.style.display="none",n.style.display="block",t.name="custom_input")}window.toggleInput=u;
