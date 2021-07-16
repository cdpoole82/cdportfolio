import Introduction from './components/Introduction'
import Stage from './components/Stage'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { FaTh } from 'react-icons/fa'



//import StyleTest from './components/StyleTest'

function App() {

  
  return (
  
      <Router>
        <div >
          <nav className="topnav">
            <Link to="/Introduction">HOME</Link>
            <Link to="/Stage"><FaTh className='fa-icon' />PROJECTS</Link>
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
          </Switch>
          <Footer />
        </div>
      </Router>
         
  );
}

export default App;
