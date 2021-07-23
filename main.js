function clock(){
    const date = new Date();

    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    if(hours<10){
        hours = '0' + hours;
    }
    if(mins<10){
        mins = '0' + mins;
    }
    if(secs<10){
        secs = '0' + secs
    }
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = ': ' + mins;
    document.getElementById('second').innerHTML = ': ' + secs;
}

setInterval(clock, 1000);

