import { FaGithub } from 'react-icons/fa'
import { FaTh } from 'react-icons/fa'

function NavBarMain() {
    return (
        <div className='topnav fixed'>
            <a href="#home" className="">HOME</a>
            <a href="#portfolio" className=""><FaTh/> PROJECTS</a>
            <a href="https://github.com/cdpoole82" rel="noreferrer" target="_blank" className=""><FaGithub/> GITHUB</a>
            
        </div>
    )
}

export default NavBarMain
