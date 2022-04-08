let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".displayTimer");
let stopTime = document.getElementById("stop-time");
const lapNodes = [];
let counter = 0;
let int = null;


// start button
document.getElementById("start").addEventListener("click", () => {
    if (int !== null) {
        clearInterval(int);
    
        stopTime.innerHTML= `${hours}:${minutes}:${seconds}:${milliseconds}`;
        
      int = null;
        document.getElementById("start").innerHTML = "Start";

    } else {
        int = setInterval(timeDisplay, 10);
        document.getElementById("start").innerHTML = "Pause";
   
    }
});
// rest button

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(int);

    timeRef.innerHTML = "00:00:00:000";
    int = null;

    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
});
// split button

document.getElementById("split").addEventListener("click", () => {
   
    const a = timeDisplay();
    lapNodes.push(a);
    var div = document.createElement("div");
    div.innerHTML = `<span>#${++counter}: </span> ${a.h}:${a.m}:${a.s}:${a.ms} <span id="spn"> Split</span>`;
    div.className = "styling";

    let lists = document.getElementById("list");
    lists.appendChild(div);
});

function timeDisplay() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (mints == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms =
        milliseconds < 10
            ? "00" + milliseconds
            : milliseconds < 100
            ? "0" + milliseconds
            : milliseconds;

    timeRef.innerHTML = `${h}:${m}:${s}:${ms}`;

    return { h, m, s, ms };
}
