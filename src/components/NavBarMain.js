import { FaGithub } from 'react-icons/fa'
import { FaTh } from 'react-icons/fa'

function NavBarMain() {
    return (
        <div className='w3-bar' id='myNavbar'>
            <a href="#home" className="w3-bar-item w3-button">HOME</a>
            <a href="#portfolio" className="w3-bar-item w3-button w3-hide-small"><FaTh/> PROJECTS</a>
            <a href="https://github.com/cdpoole82" rel="noreferrer" target="_blank" className="w3-bar-item w3-button w3-hide-small"><FaGithub/> GITHUB</a>
            
        </div>
    )
}

export default NavBarMain
