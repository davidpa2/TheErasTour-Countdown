document.addEventListener('DOMContentLoaded', () => {
    console.log('Loading countdown');

    const targetDate = new Date('May 30, 2024 00:00:00');

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
    }

    updateCountdown();

    // Refresh every second
    setInterval(updateCountdown, milisecondsOfASecond);
});