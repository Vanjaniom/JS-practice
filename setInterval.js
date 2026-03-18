let time = 30;
let mess = document.querySelector("p");
let ss = setInterval(() => {
    mess.textContent = time;
    if(time===0)  clearInterval(ss)
    time--;
   
}, 1000);
