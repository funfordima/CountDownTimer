window.addEventListener("DOMContentLoaded", function () {
    "use strict";

    // Timer

    let deadline = "2020-05-14";

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.now();
        let seconds = Math.floor((t / 1000) % 60);
        let minutes = Math.floor((t / 1000 / 60) % 60);
        let hours = Math.floor(t / 1000 / 60 / 60);

        if (t <= 0) return {
            "total": t,
            "hours": 0,
            "minutes": 0,
            "seconds": 0,
        }

        return {
            "total": t,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds,
        }
    }

    function setClock(id, endtime) {
        let timer = document.getElementById("timer");
        let hours = timer.querySelector(".hours");
        let minutes = timer.querySelector(".minutes");
        let seconds = timer.querySelector(".seconds");
        let timerId = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours < 10 ? "0" + t.hours : t.hours;
            minutes.textContent = t.minutes < 10 ? "0" + t.minutes : t.minutes;
            seconds.textContent = t.seconds < 10 ? "0" + t.seconds : t.seconds;

            if (t.total < 0) {
                clearInterval(timerId);
            }
        }
    }

    setClock("timer", deadline);
});