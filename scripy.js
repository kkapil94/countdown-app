let daysl = document.getElementById("days")
let hoursl =document.getElementById("hours")
let minutesl =document.getElementById("minutes")
let secondl =document.getElementById("second")

let countDate = ("1 july 2022");
function rem(){
    let ewdate = new Date(countDate);
    let currentDate = Math.floor(new Date());
    const days = Math.floor((ewdate-currentDate)/(1000*60*60*24));
    const hours =Math.floor((ewdate-currentDate)/(1000*60*60)%24);
    const minutes = Math.floor((ewdate-currentDate)/(1000*60)%60);
    const second = Math.floor((ewdate-currentDate)/(1000)%60);
    daysl.innerHTML=days;
    hoursl.innerHTML=hours;
    minutesl.innerHTML=minutes;
    secondl.innerHTML=second;

};
rem();
setInterval(rem,1000);


