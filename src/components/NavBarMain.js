import { FaGithub, FaRegComment, FaTh } from 'react-icons/fa'

function NavBarMain() {
    
    function showHint () {
        window.alert("Left click, drag! Right click, drag! Zoom In! Zoom Out!");
    }
        
    return (
        <div className='topnav'>
            <a href="#home">HOME</a>
            <a href="#projects"><FaTh className='fa-icon'/>PROJECTS</a>
            <a href="https://github.com/cdpoole82" rel="noreferrer" target="_blank"><FaGithub className='fa-icon'/>GITHUB</a>
            <a href ="#hint" onClick={showHint}>Screen Hint<FaRegComment className='fa-icon-sub'/></a>
                        
        </div>
    )
}

export default NavBarMain
