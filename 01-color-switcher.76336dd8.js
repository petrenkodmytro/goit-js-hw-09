const t=document.querySelector("body"),e=document.querySelector("button[ data-start]"),d=document.querySelector("button[ data-stop]");intervalId=null,d.disabled=!0,e.addEventListener("click",(function(){d.disabled=!1,e.disabled=!0,intervalId=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),d.addEventListener("click",(function(){clearInterval(intervalId),d.disabled=!0,e.disabled=!1,console.log(`Interval with id ${intervalId} has stopped!`)}));
//# sourceMappingURL=01-color-switcher.76336dd8.js.map
