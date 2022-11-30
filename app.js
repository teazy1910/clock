const hoursHand = document.querySelector("#hour-hand-analog");
const minutesHand = document.querySelector("#minutes-hand-analog");
const secondsHand = document.querySelector("#seconds-hand-analog");

function getTime() {
  const now = new Date();
  const hours = leadingZero(now.getHours());
  const minutes = leadingZero(now.getMinutes());
  const seconds = leadingZero(now.getSeconds());

  const timeInterval = 6;

  secondsHand.style.transform = "rotate(" + seconds * timeInterval + "deg)";
  minutesHand.style.transform =
    "rotate(" + (minutes * timeInterval + seconds / 10) + "deg)";
  hoursHand.style.transform = "rotate(" + (hours * 30 + minutes / 2) + "deg)";

  ////////////////////// Digitale Uhr ///////////////////////////////////////
  document.querySelector("#digital-container").innerHTML =
    hours + ":" + minutes + ":" + seconds;
}

setInterval(getTime, 1000);

///// Leading Zero /////////////
function leadingZero(zahl) {
  zahl = (zahl < 10 ? "0" : "") + zahl;
  return zahl;
}
