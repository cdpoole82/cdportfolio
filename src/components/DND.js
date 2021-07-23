
import dndlogo from "../images/dshield.jpg"
import SlideshowDnD from "./SlideshowDnD"

const Introduction = () => {

    return (
        <div className="dnd">

            <main id="dndmain">

                <header className="headerblock">
                    <img className="headerimagecontainer" src={dndlogo} alt="Dragon Logo" style={{ width: "250px", height: "250px" }} />
                    <h1 className="headertitle">Digital Dungeon Master</h1>
                    <p className="headersubtitle">A Game Utility Application
                    <span className="subtitlespan">Built on C#.NET and SQL Express</span>
                    </p>
                    <p>
                        <a className="attributions" href="http://www.freepik.com" rel="noreferrer" target="_blank">Header logo designed by dgim-studio / Freepik</a>
                        <a className="attributions" href="http://www.freepik.com" rel="noreferrer" target="_blank">Page background designed by dgim-studio / Freepik</a>
                    </p>

                </header>


                <section id="dndsection">
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

                <section id="dndgallery">
                    <SlideshowDnD />
                </section>


                <blockquote className="blockquoteintro">
                    <p>
                        "Do not meddle in the affairs of wizards, for they are subtle and quick to anger." -J.R.R Tolkien, The Fellowship of the Ring
                    </p>
                </blockquote>


            </main>




        </div>
    )
}

export default Introduction
