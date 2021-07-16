import cdp1 from "../images/cdp1.png"


const Introduction = () => {
       
    return (
        <div className="introduction">
                                 
            <main id="intromain">
                               
                <header className="introheader">
                   <img src={cdp1} alt="Christopher Poole" style={{float:"left", marginRight:"30px", width:"200px",height:"200px"}} />
                   <h1>Christopher Poole</h1>
                   <p>Welcome to my portfolio!</p>
                </header>

                <blockquote className="blockquoteintro">
                    <p>
                    "The mind is like a parachute; it works better when it's open." <em> -Unknown</em>
                    </p>
                
                </blockquote>

                <section id="introsection">
                    <h2>Manifesto</h2>
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

                
                <blockquote className="blockquoteintro">
                    <p>
                        "I shut my eyes in order to see." <em> -Paul Gauguin</em>
                    </p>
                </blockquote>

                
            </main>
            
        </div>
    )
}

export default Introduction
