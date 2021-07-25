
import { useState } from "react";

const Clock = () => {

    const deadline = "2021-8-13";
    const [timer, setTimer] = useState({days: 0, hours: 0, minutes: 0, seconds: 0})
    
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

    function updateClock() {

        const t = getTimeRemaining(deadline)
        
        setTimer(t)
        
        if (t.total <= 0) {
            clearInterval(timeinterval);
        }

    }
    
    const timeinterval = setInterval(updateClock, 1000);
   
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
