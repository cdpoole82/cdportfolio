import Introduction from './components/Introduction'
import Stage from './components/Stage'
import WFD from './components/WFD'
import DND from './components/DND'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { MdRotate90DegreesCcw } from 'react-icons/md'
import { FaDatabase } from 'react-icons/fa'
import { GiSpikedDragonHead } from 'react-icons/gi'



//import StyleTest from './components/StyleTest'

function App() {

  
  return (
  
      <Router>
        <div >
          <nav className="topnav">
            <Link to="/Introduction">HOME</Link>
            <Link to="/WFD"><FaDatabase className='fa-icon' />WFD Application</Link>
            <Link to="/Stage"><MdRotate90DegreesCcw className='fa-icon' />3D Animation</Link>
            <Link to="/DND"><GiSpikedDragonHead className='fa-icon' />D&D Utility</Link>
          </nav>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Introduction />
            </Route>
            <Route path="/Introduction">
              <Introduction />
            </Route>
            <Route path="/Stage">
              <Stage/>
            </Route>    
            <Route path="/WFD">
              <WFD />
            </Route>     
            <Route path="/DND">
              <DND />
            </Route>    
          </Switch>
          <Footer />
        </div>
      </Router>
         
  );
}

export default App;
