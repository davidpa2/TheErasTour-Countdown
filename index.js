document.addEventListener('DOMContentLoaded', () => {
    // const targetDate = new Date('May 30, 2024 00:00:00');
    const targetDate = new Date('May 22, 2024 20:46:00');

    const spanDays = document.querySelector('span#days');
    const spanHours = document.querySelector('span#hours');
    const spanMinutes = document.querySelector('span#minutes');
    const spanSeconds = document.querySelector('span#seconds');

    const milisecondsOfASecond = 1000;
    const milisecondsOfAMinute = milisecondsOfASecond * 60;
    const milisecondsOfAnHour = milisecondsOfAMinute * 60;
    const milisecondsOfADay = milisecondsOfAnHour * 24

    /**
    * Update the countdown
    */
    function updateCountdown() {
        const now = new Date()
        const duration = targetDate - now;
        const remainingDays = Math.floor(duration / milisecondsOfADay);
        const remainingHours = Math.floor((duration % milisecondsOfADay) / milisecondsOfAnHour);
        const remainingMinutes = Math.floor((duration % milisecondsOfAnHour) / milisecondsOfAMinute);
        const remainingSeconds = Math.floor((duration % milisecondsOfAMinute) / milisecondsOfASecond);

        spanDays.textContent = remainingDays;
        spanHours.textContent = remainingHours;
        spanMinutes.textContent = remainingMinutes;
        spanSeconds.textContent = remainingSeconds;

        console.log(duration);
        // if (remainingSeconds == 59) {
        if (duration <= 0) {
            manageElements();
            loadFireworks();
        }
    }

    function manageElements() {
        let dateDiv = document.getElementById("dateDiv");
        dateDiv.setAttribute("class", "dateDivAnimation");

        dateDiv.childNodes.forEach(function (item) {
            if (item.textContent.trim() != "") {
                console.log(item.textContent);
                item.textContent = "THE ERAS TOUR";
            }
        })

        let timerP = document.getElementById("timerP");
        timerP.setAttribute("class", "hideElement");
        // timerP.replaceChildren("Ha llegado el día");
        
        let simpleTitle = document.getElementById("simpleTitle");
        simpleTitle.setAttribute("class", "hideElement");

        let dreamP = document.getElementById("dreamP");
        dreamP.textContent = "No puede ser, esto es increíble... ¡Ha llegado el día!"
        // timerP.replaceChildren("Ha llegado el día");
        // dreamP.setAttribute("class", "hideElement");
    }

    function loadFireworks() {
        setTimeout(() => {
            let styleSheet = document.createElement('link');
            styleSheet.rel = "stylesheet";
            styleSheet.href = "fireworks.css";
            document.body.append(styleSheet);
            document.body.classList.add('dark')
        }, 4000)
    }


    updateCountdown();

    // Refresh every second
    setInterval(updateCountdown, milisecondsOfASecond);
});