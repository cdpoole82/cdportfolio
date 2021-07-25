import Clock from './Clock'
import bitmoji from '../images/bitmojiAJCDP.png'

const Canada = () => {
    return (
        <div className="canada-page">
            <div className="framing">
                <h1 className="clocktitle">Countdown to Hugs</h1>
                <Clock />
            </div>
            <div className="framing">
                <img className="img-bitmoji" src={bitmoji} alt="bitmoji" style={{height:"400px", width: "400px"}} />
            </div>
        </div>
    )
}

export default Canada
