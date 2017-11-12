const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function runTheClock() {
// getting current time
var date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

// setting up the current time
let hrPosition = (hr * 360 / 12) + (min * (360/60) / 12);
let minPosition = (min * 360 / 60) + (sec * (360/60) / 60);
let secPosition = sec * 360 / 60;

// rotates to the current position
HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

// runs the function every second on intervals
var interval = setInterval(runTheClock, 1000);