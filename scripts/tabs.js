document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".tab-button").forEach(t=>{t.addEventListener("click",(function(){let e=this.getAttribute("data-tab"),a=document.querySelector('.tabcontent[data-tab="'+e+'"]'),c=document.querySelector(".tab-button.active"),n=document.querySelector(".tabcontent.active");c.classList.remove("active"),t.classList.add("active"),n.classList.remove("active"),a.classList.add("active")}))})});
//# sourceMappingURL=tabs.js.map
