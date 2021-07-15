import { useState } from 'react'
import NavBarMain from './components/NavBarMain'
import Introduction from './components/Introduction'
import Stage from './components/Stage'
import Footer from './components/Footer'

//import StyleTest from './components/StyleTest'

function App() {
  const [cssdisplay, setCSSDisplay] = useState("grid");
  
  function updateCSSDisplay(clickArg) {
     
    switch (clickArg) {
            case "Home":
                setCSSDisplay("grid");
                break;
            case "Projects":
                setCSSDisplay("none");
                break;
            case "Sphere1":
              window.alert("Load project 1...")
              break;
            case "Sphere2":
              window.alert("Load project 2...")
              break;
            case "Sphere3":
              window.alert("Load project 3...")
              break;
            default:
                setCSSDisplay("grid")
        }
       
  }

  return (
    <div>

      <NavBarMain updateCSSDisplay={updateCSSDisplay} />
      <Introduction cssdisplay={cssdisplay}  />
      <Stage updateCSSDisplay={updateCSSDisplay} />
      <Footer />


      {/* <StyleTest/> */}
    </div>
  );
}

export default App;
