import Clock from './Clock'
import bitmoji from '../images/bitmojiAJCDP.png'

const Canada = () => {

   

    return (
        <div className="canada-page">
            <div className="clock-framing">
                <h1 className="clocktitle-can">Countdown to Hugs</h1>
                <Clock deadline="Fri Aug 13 2021 15:00:00 GMT-0500" />
            </div>
            <div className="clock-framing">
                <img className="img-bitmoji" src={bitmoji} alt="bitmoji" style={{height:"400px", width: "400px"}} />
            </div>
        </div>
    )
}

export default Canada
