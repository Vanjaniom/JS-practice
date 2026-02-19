function selector(id)
{
    return document.getElementById(id);
}

//CLock Hands
let hourhand = selector("hourHand");
let minutehand = selector("minHand");
let secondhand = selector("secHand");

//Digital Clock
let digitalHour = selector("hours");
let digitalMinute = selector("minutes");
let digitalSecond = selector("seconds");

//UI Time Updation
function updateTime()
{
    let time = new Date();
    let hours = time.getHours()%12;
    let minute = time.getMinutes();
    let second = time.getSeconds();
    console.log(hours,minute,second);

    digitalHour.innerHTML =`${hours}`.padStart(2,"0");
    digitalMinute.innerHTML=`${minute}`.padStart(2,"0");
    digitalSecond.innerHTML=`${second}`.padStart(2,"0");
    
}
updateTime();

//Clock Hands Updation
setInterval(()=>{
    updateTime();
},1000);
