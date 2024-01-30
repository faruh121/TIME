let a = +prompt('Ввндите ваш часовой формат(в цифрах):Например( Великобритании GMT+1, в Западной Европе GMT+2, в Москве GMT+3, в Нью-Йорке GMT-4, в Индии GMT+5)')
if (a==3){
function updateClock() {
  let currentTime = new Date();
  let currentHours = currentTime.getUTCHours() + 3;
  let currentMinutes = currentTime.getUTCMinutes();
  let currentSeconds = currentTime.getUTCSeconds();

  currentHours = (currentHours < 10 ? "0" : "") + currentHours;
  currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
  currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

  let timeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;

  document.getElementById("clock").innerHTML = timeString;
}

setInterval(updateClock, 1000);
document.write('Время по мск!')
}
else if (a==1){
function updateClock() {
  let currentTime = new Date();
  let currentHours = currentTime.getUTCHours() + 1;
  let currentMinutes = currentTime.getUTCMinutes();
  let currentSeconds = currentTime.getUTCSeconds();

  currentHours = (currentHours < 10 ? "0" : "") + currentHours;
  currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
  currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

  let timeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;

  document.getElementById("clock").innerHTML = timeString;
}

setInterval(updateClock, 1000);
document.write('Время по Великобритании!')
}
else if (a==2){
function updateClock() {
  let currentTime = new Date();
  let currentHours = currentTime.getUTCHours() + 2;
  let currentMinutes = currentTime.getUTCMinutes();
  let currentSeconds = currentTime.getUTCSeconds();

  currentHours = (currentHours < 10 ? "0" : "") + currentHours;
  currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
  currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

  let timeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;

  document.getElementById("clock").innerHTML = timeString;
}

setInterval(updateClock, 1000);
document.write('Время по Европе!')
}
else if (a==5){
function updateClock() {
  let currentTime = new Date();
  let currentHours = currentTime.getUTCHours() + 5;
  let currentMinutes = currentTime.getUTCMinutes();
  let currentSeconds = currentTime.getUTCSeconds();

  currentHours = (currentHours < 10 ? "0" : "") + currentHours;
  currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
  currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

  let timeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;

  document.getElementById("clock").innerHTML = timeString;
}

setInterval(updateClock, 1000);
document.write('Время по Индии!')
}
else if (a==4){
function updateClock() {
  let currentTime = new Date();
  let currentHours = currentTime.getUTCHours() + 4;
  let currentMinutes = currentTime.getUTCMinutes();
  let currentSeconds = currentTime.getUTCSeconds();

  currentHours = (currentHours < 10 ? "0" : "") + currentHours;
  currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
  currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

  let timeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;

  document.getElementById("clock").innerHTML = timeString;
}

setInterval(updateClock, 1000);
document.write('Время по Нью-Йорку!')
}