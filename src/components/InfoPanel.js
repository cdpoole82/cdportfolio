import { useState } from "react"
import { FaWindowClose} from "react-icons/fa"

const InfoPanel = () => {
    const [panelDisplayStyle, setPanelDisplayStyle ] = useState()

    return (
        <div className="panel-container" style={{display: panelDisplayStyle}}>
            <p className="panel-text">
            <button type="button" className="panel-button"  onClick={()=>{setPanelDisplayStyle("none")}}><FaWindowClose/></button>
            This starry night at dusk setting inspired the desire to create celestial orbs using the 3D animation language Three JS and React Three Fiber helpers. <b>To explore:</b> use left-mouse to rotate, right-mouse to pan, and scroll to zoom.         
            </p>
        </div>
    )
}

export default InfoPanel
