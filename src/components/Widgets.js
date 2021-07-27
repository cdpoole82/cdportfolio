import Clock from "./Clock"


const Widgets = () => {
    return (
        <div className="widget-page">

            <div className="widget-framing">
                
                <Clock deadline="Sat Jan 1 2022 00:00:00 GMT-0600" />
                <h1 className="clocktitle">Countdown to Minnesota New Year 2022</h1>
            </div>            
        </div>
    )
}

export default Widgets
