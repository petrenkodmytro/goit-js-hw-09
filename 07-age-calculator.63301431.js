!function(){var e=[31,28,31,30,31,30,31,31,30,31,30,31],t=document.querySelector(".js-btn"),n=document.getElementById("data-input");t.addEventListener("click",(function(){console.log(n.value);var t,a=new Date,o=new Date(n.value),l={date:o.getDate(),month:o.getMonth()+1,year:o.getFullYear()},u=a.getFullYear(),c=a.getMonth(),d=a.getDate();(function(t){e[1]=t%4==0||t%100==0&&t%400==0?29:28;console.log(t,e[1])})(u),u-l.year,c>=l.month?t=c-l.month:(1,t=12+c-l.month);if(d>=l.date)d-l.date;else{t-=1;var r=e[c-2];r+d-l.date,t<0&&(t=11,1)}}))}();
//# sourceMappingURL=07-age-calculator.63301431.js.map
