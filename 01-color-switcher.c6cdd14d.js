const e=document.querySelector("[data-start]");console.log(e);const t=document.querySelector("[data-stop]");console.log(t);const o=document.querySelector("body");let l=null;e.addEventListener("click",(()=>{l=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.disabled=!0})),t.addEventListener("click",(()=>{clearInterval(l),e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.c6cdd14d.js.map