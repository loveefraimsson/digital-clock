let container = document.getElementById("container");

setInterval(function() {
    let d = new Date();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();

    if (hour < 10) {
        hour = "0" + hour;
    }else {
        hour = hour;
    }

    if (minute < 10) {
        minute = "0" + minute;
    }else {
        minute = minute;
    }

    if (second < 10) {
        second = "0" + second;
    }else {
        second = second;
    }

    let clock = hour + ":" + minute + ":" + second;
    //console.log(clock); 

    container.innerHTML = clock;
}, 1000);
