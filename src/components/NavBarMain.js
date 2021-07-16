import { FaTh } from 'react-icons/fa'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

/*
function showHint() {
        window.alert("Hold left or right mouse click and drag");
    }
<a href="#hint" onClick={showHint}>Screen Hint<FaRegComment className='fa-icon-sub' /></a>
*/

// 
const NavBarMain = ({ showHideComponent }) => {

    return (

        <Router>
            <div className="topnav">
                <nav>

                    <Link to="/" onClick={() => showHideComponent("showHideIntro")}>HOME</Link>
                    <Link to="/Stage" onClick={() => showHideComponent("showHideStage")}><FaTh className='fa-icon' />PROJECTS</Link>

                </nav>

                {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
                {/*  <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch> */}
            </div>
        </Router>

        
    )
}

export default NavBarMain
