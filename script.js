// set inital value to zero
let count = 0;
let timerRunning = false; //Checks if timer is working or not
// select value and buttons
const value = document.querySelector("#value");
const hint = document.querySelector("#hint");
const btns = document.querySelectorAll(".btn");

let positive = "Positive";
let negative = "Negative";
let defaultValue = "TallyUp";

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    if (!timerRunning){
        enableButtons();
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--; // mod 2
        }
        else if (styles.contains("increase")){ // mod 1
            count++;
        }
        else if (styles.contains("doubleup")){
            count *= 2;
            // checks if answer is + or -
            // if - times by -1 to make it positive
            if (count < 0){
                count *= -1;
            }
        }
        else if (styles.contains("doubledown")){
            count*= -2;
            // multiply 2 values
            // = positive keep going down in value
            if (count > 0){
                count = -count;
            }
        }
        else if (styles.contains("2split")){
            if (count > 0){
                count /= 2;
            }
        }
        else if (styles.contains("4split")){
            if (count > 0){
                count /= 4;
            }
        }
        else {
            count = 0;
        }

        if (count > 0){
            value.style.color = "#B3000C";
            hint.textContent = positive;
            hint.style.color = "#fff";
        }
        else if (count < 0){
            value.style.color = "#DC3D2A";
            hint.textContent = negative;
            hint.style.color = "#CD20F7";
        }
        else {
            value.style.color = "#00B32C"
            hint.textContent = defaultValue;
            hint.style.color = "#0D5901";
        }
        value.textContent = count;
    }
  });
});


document.querySelector('.countdown').addEventListener('click', function() {
    const userNumber = parseInt(document.getElementById('userNumber').value);
    if (!isNaN(userNumber) && userNumber > 0 && !timerRunning) {
        timerRunning = true;
        disableButtons();
        startCountdown(userNumber);
    } else {
        alert('Enter valid value');
    }
});

function startCountdown(startFrom) {
    count = startFrom;
    const countdownInterval = setInterval(function() {
        value.textContent = count;
        if (count == 0) {
            clearInterval(countdownInterval);
            timerRunning = false;
            enableButtons();
        
        } else {
            count--;
        }
    }, 1000); // counter in ms
}

//functions below check to see if functions are working or not

function disableButtons() {
    btns.forEach(function (btn) {
        btn.disabled = true;
    });
}

function enableButtons() {
    btns.forEach(function (btn) {
        btn.disabled = false;
    });
}

