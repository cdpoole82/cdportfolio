import { FaLinkedin,  FaRegPaperPlane} from "react-icons/fa"


const Footer = () => {
    return (
        <div className="footer">
            <p>
                Copyright 2021 - Christopher Poole
                <a href="https://www.linkedin.com/in/christopher-d-poole/" rel="noreferrer" target="_blank"><FaLinkedin className="fa-icon"/>LinkedIn</a>
                <a href="mailto:poole.christopher@gmail.com" method="post" enctype="text/plain"><FaRegPaperPlane className="fa-icon" />Email me</a> 
            
            </p>
                       
        </div>
    )
}

export default Footer
