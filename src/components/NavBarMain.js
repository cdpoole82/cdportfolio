import { FaGithub, FaRegComment, FaTh } from 'react-icons/fa'

const NavBarMain = ({updateCSSDisplay}) => {

    function showHint() {
        window.alert("Hold left or right mouse click and drag");
    }

                
    return (
        <div>
            <div className='topnav'>
                <a href="#home" onClick={() => updateCSSDisplay("Home")}>HOME</a>
                <a href="#projects" onClick={() => updateCSSDisplay("Projects")}><FaTh className='fa-icon' />PROJECTS</a>
                <a href="https://github.com/cdpoole82" rel="noreferrer" target="_blank"><FaGithub className='fa-icon' />GITHUB</a>
                <a href="#hint" onClick={showHint}>Screen Hint<FaRegComment className='fa-icon-sub' /></a>
            </div>
            
        </div>

    )
}

export default NavBarMain
