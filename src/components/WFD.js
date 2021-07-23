import wfdlogo from "../images/wfdlogo.png"
import schedulerbefore from "../images/scheduler-before.png"
import schedulerafter from "../images/scheduler-after.png"



const Introduction = () => {
       
    return (
        <div className="wfd">
                                 
            <main id="intromain">
                               
                <header className="headerblock">
                   <img className="headerimagecontainer" src={wfdlogo} alt="Workforce Director logo" style={{width:"250px",height:"100px"}} />
                   <h1 className="headertitle">Workforce Director</h1>
                   <p className="headersubtitle">A Public Safety Web Application
                   <span className="subtitlespan">Built on VB.NET and SQL Enterprise</span>
                   </p>
                   <p>
                   <a className="attributions" href="https://www.freepik.com/" rel="noreferrer" target="_blank">Page background designed by upklyak / Freepik</a>
                   </p>
                </header>

                
                <section id="wfdsectionright">
                    <h2>Project</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                </section>

                <section id="wfdsection">
                    <h2>User Interface</h2>
                    <p>
                        Silverlight Scheduling Upgrade (before and after)                                   
                    </p>  
                    <p>
                    <img src={schedulerbefore} alt="Workforce Director logo" style={{padding:"20px", width:"825px",height:"600px"}} />   
                    <img src={schedulerafter} alt="Workforce Director logo" style={{padding: "20px", width:"825px",height:"600px"}} />                  
                    </p>
                </section>

                
                <blockquote className="blockquoteintro">
                    <p>
                        <em>"True public safety requires a collaboration between law enforcement and the community. -Betsy Hodges"</em>
                    </p>
                </blockquote>

                
            </main>
            
        </div>
    )
}

export default Introduction
