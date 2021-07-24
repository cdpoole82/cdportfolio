
import {useState} from 'react'
import InfoPanel from './InfoPanel'

function TestPage() {
    const [buttonColor1, setButtonColor] = useState("")

    
    return (
        <div style={{backgroundColor: "black", marginTop:"50px" }}>
            <h1>This is an H1 element that should be Lato and grey</h1>
            <h4>This is an H4 element that should be Lato and grey</h4>
            <p>This is text within a P element</p>
            <button type="button" onClick={() => {setButtonColor("none")}} style={{display: buttonColor1}}>Change me!</button>
            <InfoPanel/>
        </div>
    )
}

export default TestPage


