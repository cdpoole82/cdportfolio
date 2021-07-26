
import { useState, useEffect } from "react";

const Clock = ({ deadline }) => {

    //const deadline = "Fri Aug 13 2021 15:00:00 GMT-0500";
    const [timer, setTimer] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

    useEffect(() => {

        const timeinterval = setInterval(updateClock, 1000);
        return () => clearInterval(timeinterval);

    })

    function updateClock() {

        const t = getTimeRemaining(deadline)
        setTimer(t)
        console.log(new Date().getTime())

    }

    //run within updateClock function to provide a clear format for time variables
    function getTimeRemaining(endtime) {

        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));

        return {
            total,
            days,
            hours,
            minutes,
            seconds
        };
    }

    return (
        <>

            <div id="clockdiv">
                <div>
                    <span>{timer.days}</span>
                    <div className="smalltext">Days</div>
                </div>
                <div>
                    <span>{timer.hours}</span>
                    <div className="smalltext">Hours</div>
                </div>
                <div>
                    <span>{timer.minutes}</span>
                    <div className="smalltext">Minutes</div>
                </div>
                <div>
                    <span>{timer.seconds}</span>
                    <div className="smalltext">Seconds</div>
                </div>
            </div>

        </>
    )

}

export default Clock
