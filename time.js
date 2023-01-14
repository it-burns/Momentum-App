function getTime() {

    let timeCont = document.getElementById("clock-container");
    let greetings = document.getElementById("greetings-container");
    let name = document.getElementById('name-input').value;
    
    let clock = new Date();
    let hours = clock.getHours();
    let min = clock.getMinutes();
    let sec = clock.getSeconds();

    const amPM = hours >= 12 ? 'PM' : 'AM';

    let hour = hours % 12 || 12;
    
    const clockText = `${addZero(hour)}:${addZero(min)}:${addZero(sec)} ${amPM}`;
    
    timeCont.innerHTML = `${clockText}`;

    if (hours < 12) {
        greetings.innerHTML = `Good morning, ${name}`;
    } else if (hours > 12 && hours < 18 ) {
        greetings.innerHTML = `Good afternoon, ${name}`;
    } else {
        greetings.innerHTML = `Good evening, ${name}`;
    }
}

setInterval(getTime, 1000);

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}