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
                    <h2 className="sectiontitle">Project</h2>
                    <h4>Purpose</h4>
                    <p>WorkForce Director is a public safety personnel management web application with a focus on 24-hr employee scheduling, timekeeping, and payroll.  The application was a grassroots creation by the Minneapolis Police Department in the late 1990's and modernized by 2004 through a partnership with Sogeti LLC to update from VB6  to a web accessible and scalable VB.NET application. 
                       Since its upgrade, WorkForce Director has expanded its user base to serve 12+ public safety departments in the Greater Minneapolis Metro area.
                    <img src={agencies} alt="public safety agencies badges" style={{width:"525px", height:"200px", display:"block", margin:"10px", border:"5px solid cadetblue"}}/>
                    </p>
                    <h4>Technology</h4>
                    <p>
                        WorkForce Director is built on a VB.NET/ASPX web platform using SQL for its database engine. It leveraged CSS, .NET and third-party web components for its front-end, custom-built libraries for the logic layer, and SQL stored procedures for database integration. The system logic and database was architected with a data-table driven configuration approach to be easily customized by client and changed on-the-fly. For system integration, web services were built to provide payroll and HR data exchanges.
                    </p>
                    <h4>Learning</h4>
                    <p>
                        As the lead business analyst for the application for 7 years, my contributions were focused on the user experience, feature adoption and expansion, testing, and client configuration. My technical hands on experience included managing CSS, modifying front-end presentation code, and managing configuration data for local environments and client-sites.
                    </p>

                </section>

                <section id="wfdsection">
                    <h2 className="sectiontitle">User Interface</h2>
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
