import { useState } from "react"
import { FaWindowClose} from "react-icons/fa"

const InfoPanel = () => {
    const [panelDisplayStyle, setPanelDisplayStyle ] = useState()

    return (
        <div className="panel-container" style={{display: panelDisplayStyle}}>
            <p className="panel-text">
            <button type="button" className="panel-button"  onClick={()=>{setPanelDisplayStyle("none")}}><FaWindowClose/></button>
            This starry night dusk setting inspired the desire to create some celestial orbs using the 3D animation language Three JS and React Three Fiber helpers.          
            </p>
        </div>
    )
}

export default InfoPanel
