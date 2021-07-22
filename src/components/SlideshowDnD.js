import { Slide } from 'react-slideshow-image'

import img0 from "../images/CreatureSheet.jpg"
import img1 from "../images/CombatManagerUI.jpg"
import img2 from "../images/CombatUI2.jpg"
import img3 from "../images/CombatTrackerUI.jpg"
import img4 from "../images/ExploreUI.jpg"
import img5 from "../images/EncounterBuilderUI.jpg"


const SlideshowDnD = () => {

    const slideImages = [
        img0, img1, img2, img3, img4, img5
    ];

    return (
        <>
            <Slide easing="ease">
                <div>
                    <div className="slide" style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                    </div>
                </div>
                <div>
                    <div className="slide" style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                    </div>
                </div>
                <div>
                    <div className="slide" style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                    </div>
                </div>
                <div>
                    <div className="slide" style={{ 'backgroundImage': `url(${slideImages[3]})` }}>
                    </div>
                </div>
                <div>
                    <div className="slide" style={{ 'backgroundImage': `url(${slideImages[4]})` }}>
                    </div>
                </div>
                <div>
                    <div className="slide" style={{ 'backgroundImage': `url(${slideImages[5]})` }}>
                    </div>

                </div>
            </Slide>
        </>
    )
};

export default SlideshowDnD;