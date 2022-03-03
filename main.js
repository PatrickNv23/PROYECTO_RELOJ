const clock = document.querySelector(".time_clock");

const getTimeClock = () => {
    const objectDate = new Date();
    const elements = {
        hour: objectDate.getHours(),
        minutes: objectDate.getMinutes(),
        seconds: objectDate.getSeconds(),
    }

    clock.innerHTML = `${elements.hour
        } hrs : ${elements.minutes} min : ${elements.seconds} seg`;
};

setInterval(getTimeClock, 1000);