const clock = document.querySelector(".clock");

const display = document.querySelector("#display-text");

function app() {
    let date = new Date();
    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let period = "AM";
    let text = "nkanika"
    
    if (hrs == 0) {
        hrs = 12;
    } else if (hrs >= 12) {
      hrs = hrs - 12;
      period = "PM"; 
    }

    if (hrs == 1) {
        display.textContent = text + " ekiet";
    }else if (hrs == 2) {
        display.textContent = text + " iba";
    } else if (hrs == 3) {
        display.textContent = text + " ita";
    } else if (hrs == 4) {
        display.textContent = text + " inan";
    } else if (hrs == 5) {
        display.textContent = text + " ition";
    } else if (hrs == 6) {
        display.textContent = text + " itiokiet";
    } else if (hrs == 7) {
        display.textContent = text + " itiaba";
    } else if (hrs == 8) {
        display.textContent = text + " itiaita";
    } else if (hrs == 9) {
        display.textContent = text + " Usukkiet";
    } else if (hrs == 10) {
        display.textContent = text + " Duop";
    } else if (hrs == 11) {
        display.textContent = text + " Duopekiet";
    } else if (hrs == 12) {
        display.textContent = text + " Duopekeba";
    }


    clock.textContent = `${hrs} : ${min} : ${sec} ${period}`
    setTimeout(app, 1000);
}
app();