import { useState } from 'react'
import NavBarMain from './components/NavBarMain'
import Introduction from './components/Introduction'
import Stage from './components/Stage'
import Footer from './components/Footer'



//import StyleTest from './components/StyleTest'

function App() {

  const [showHideIntro, setShowHideIntro] = useState(true);
  const [showHideStage, setShowHideStage] = useState(false);

  function showHideComponent(arg) {
    console.log(arg)

    switch (arg) {
      case "showHideIntro":
        setShowHideIntro(true)
        setShowHideStage(false)
        break;
      case "showHideStage":
        setShowHideStage(!showHideStage)
        break;
      default:
        break;
    }

  }



return (
  <div>

    <NavBarMain showHideComponent={showHideComponent} />
    {showHideIntro && <Introduction />}
    {showHideStage && <Stage />}
    <Footer />

    
  </div>
);
}

export default App;
