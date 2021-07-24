import wfdlogo from "../images/wfdlogo.png"
import agencies from "../images/agencies.jpg"
import schedulerbefore from "../images/scheduler-before.png"
import schedulerafter from "../images/scheduler-after.png"
import adhocreport1 from "../images/adhocreport1.png"
import adhocreport2 from "../images/adhocreport2.png"


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
                    <h4>Purpose</h4>
                    <p>WorkForce Director is a public safety personnel management web application with a focus on 24-hr employee scheduling, timekeeping, and payroll.  The application was a grassroots creation by the Minneapolis Police Department in the late 1990's and modernized by 2004 through a partnership with Sogeti LLC to update from VB6  to a web accessible and scalable VB.NET application. 
                       Since its upgrade, WorkForce Director has expanded its user base to serve 12+ public safety departments in the Greater Minneapolis Metro area.
                    <img src={agencies} alt="public safety agencies badges" style={{width:"525px", height:"200px", display:"block", margin:"10px", border:"5px solid cadetblue"}}/>
                    </p>
                    <h4>Technology</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <h4>Learning</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                </section>

                <section id="wfdsection">
                    <h2>User Interface</h2>
                    <h4>Silverlight Scheduling Upgrade (before and after)</h4>                                
                    
                    <p>
                    <img src={schedulerbefore} alt="scheduler view before upgrade" style={{padding:"20px", width:"825px",height:"600px"}} />   
                    <img src={schedulerafter} alt="scheduler view after upgrade" style={{padding: "20px", width:"825px",height:"600px"}} />                  
                    </p>
                   
                    <h4>Ad Hoc Reporting Tool (custom-built)</h4>                                   
                                      
                    <p>
                    <img src={adhocreport1} alt="user interface adhoc report definition " style={{padding:"20px", width:"825px",height:"600px"}} />   
                    <img src={adhocreport2} alt="user interface adhoc report execution" style={{padding: "20px", width:"825px",height:"600px"}} />                  
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
