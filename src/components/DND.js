
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
                    <h4>Purpose</h4>
                    <p>
                    Programming is fun. Dungeons and Dragons is fun. Is coding Dungeons and Dragons fun…for sure! In 2014 I was gaming with friends running a game of 4th edition (the most unnecessarily complicated edition) and thought to myself, "Could I make running this experience easier? There is so much to track and I am very much anti-lots of paper." So, I decided to test this question by programming a desktop application to see what I could make easier and then try it out on my friends. Let's just say, there were definitely some mid-game crashes now and again, but generally we liked it (especially the combat tracker displayed on a second screen).
                    </p>
                    <h4>Technology</h4>
                    <p>
                        The Digital Dungeon Master (DDM) desktop application was built using Visual Studio with C#.NET framework and leveraged SQL Express for its database needs. The application was built with a primary window container allowing for multiple non-modal windows to be opened at one time to leverge several functions and reference information at one time.
                    </p>
                    <h4>Learning</h4>
                    <p>
                        Developing the DDM application gave me experience developing a desktop application vs working with the web applications I was use to professionally. It gave me experience using data-bindings for a simple database interface and how to juggle multiple non-modal windows at once including displaying data on a second screen.
                    </p>

                </section>

                <section id="dndimages">
                    <div className="dndslideshow" >
                    <SlideshowDnD />
                    </div>
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
