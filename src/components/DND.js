import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"
import dndlogo from "../images/dshield.jpg"


const Introduction = () => {
    /*image gallery pics*/
    const images = [

        {
            original: 'https://lh3.googleusercontent.com/GI8XZWrAYymFTioBrhaqW1k16CTLiv0CHQltkE1uTMX-1wCJjJBrhcj-EEdqJxuVBHm-iHFanyY5oXaw7cFKT-6qGMbR1ALQRlA0bXqweu3peeRdu6v6PCUXFmgKT8heGVyDOJTPcA=w2400',
            description: "Creature Database - used to manage heros and monster information"
        },
        {
            original: 'https://lh3.googleusercontent.com/USHLAoTxs5bTGZEOYP985ztOaKo6OtMSkP4E5kgZYMWAa82KB0VxJVGZAitEr23v_K9wOPAWMhyb3UOVxqwXjJWNc7qR-KrY95dPHSnYqXhfgzRhRan76LThuSrs_AmlHDvoGoft8g=w2400',
            description: "Adventure Explorer - used by the DM for information reference and logging"
        },              
        {
            original: 'https://lh3.googleusercontent.com/RwXo1sX5dSsZqUbmueTmCtPd0m3okWIfAgb9wQbkoF_1br-zo5H5m_Nqy8FFC7vwrvhPVBb_FGg9hpzP0NpBEsuqSv1zhzOS1EeusQpvkzmTMRQs4lncOpwvr-eR3acty1QZk3PNng=w2400',
            description: "Encounter Builder - used by the DM to construct encounter scenarios"
        },      
        
        {
            original: 'https://lh3.googleusercontent.com/mBD9svpi2DctNA9QKC1CvNHoQlSd81vcvLGJFrP1G-d8nSsoonKxk0Yz0FDBVnA10Vh9iGYcQ8Vq47Y-NwFMusOpHC3klQHMbB0VEN_LjMfy0npaUZdVqcxahsMPWkM09H0Gdv4aAQ=w2400',
            description: "Comabt Manager - used by the DM to execute combat updates"
        },
        {
            original: 'https://lh3.googleusercontent.com/TeAHDtGVYXIUks9-UuamK7nizu9urxqbpthc5yjJZ_Y1wUonApqtXF6i4f5UmDoAdtciHY09ohtIXSXDoBi2bB-YukUQn2mlKjAqmMx1Zn4F5y9NGErCUDYdsv6f9D7ExGAJfU8oEg=w2400',
            description: "Combat Viewer - used to display on a second screen combat information"
        }
    ]



    return (
        <div className="dnd">

            <main id="dndmain">

                <header className="dndheader">
                    <img src={dndlogo} alt="Workforce Director logo" style={{ float: "left", marginRight: "30px", width: "200px", height: "200px" }} />
                    <h1>Digital Dungeon Master</h1>
                    <p>A C#.NET Game Utility Application</p>
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
                    <ImageGallery items={images} showThumbnails={false} />
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
