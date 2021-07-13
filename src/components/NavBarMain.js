import { FaGithub, FaRegComment, FaTh } from 'react-icons/fa'

/*
function showHint() {
        window.alert("Hold left or right mouse click and drag");
    }
<a href="#hint" onClick={showHint}>Screen Hint<FaRegComment className='fa-icon-sub' /></a>
*/

// 
const NavBarMain = ({updateCSSDisplay}) => {
                    
    return (
        <div>
            <div className='topnav'>
                <a href="#home" onClick={() => updateCSSDisplay("Home")}>HOME</a>
                <a href="#projects" onClick={() => updateCSSDisplay("Projects")}><FaTh className='fa-icon' />PROJECTS</a>
                <a href="https://github.com/cdpoole82" rel="noreferrer" target="_blank"><FaGithub className='fa-icon' />GITHUB</a>
               
            </div>
            
        </div>

    )
}

export default NavBarMain
