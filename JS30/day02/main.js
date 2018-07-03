document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');
    const secondNumber = document.querySelector('.second-number');
    const minuteNumber = document.querySelector('.minute-number');
    const hourNumber = document.querySelector('.hour-number');



    function setDate() {
        const now = new Date();

        const seconds = now.getSeconds();
        const secondsDegrees = (seconds * 6) + 90; //(( seconds/60 ) * 360)
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
        // console.log(seconds + " - " + secondsDegrees);
        secondNumber.innerHTML = seconds;

        const minutes = now.getMinutes();
        const minutesDegrees = (minutes * 6) + 90; //(( minutes/60 ) * 360)
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
        // console.log(minutes + " - " + minutesDegrees);
        minuteNumber.innerHTML = minutes;


        const hours = now.getHours();
        const hoursDegrees = (hours * 6) + 90; //(( hours/60 ) * 360)
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
        // console.log(hours + " - " + hoursDegrees);
        hourNumber.innerHTML = hours;
    }

    setInterval(setDate, 1000);
});



