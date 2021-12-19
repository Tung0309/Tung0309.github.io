console.log("Bai 1: ");

function findEven(number) {
  for (let i = 4; i <= number; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
findEven(20);

console.log("Bai 2: ");
const header = document.getElementById("header");
function handleHover() {
  header.style.backgroundColor = "gray";
  header.style.color = "pink";
}
function handleOut() {
  header.style.backgroundColor = "pink";
  header.style.color = "gray";
}

console.log("bai 3: ");

function numberOneTriangle(line) {
  for (let i = 1; i <= line; i++) {
    let one = "";
    for (let k = 0; k < i; k++) {
      one += "1";
    }
    console.log(one);
  }
}
numberOneTriangle(5);

console.log("bai 4: ");

function time() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  if (hours < 9) {
    hours = "0" + hours;
  }
  if (minutes < 9) {
    minutes = "0" + minutes;
  }
  if (seconds < 9) {
    seconds = "0" + seconds;
  }
  var clock = hours + ":" + minutes + ":" + seconds;
  document.getElementById("time").innerHTML = clock;
}
setInterval(time, 1000);
