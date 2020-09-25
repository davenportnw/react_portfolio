import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation/Navigation.js';
import Portfolio from './components/Portfolio/Portfolio.js';
import Resume from './components/Resume/Resume.js';



// class App extends Component {

function App() {
        return(
            <BrowserRouter>
            <div className="NavHeader">
                <Navigation/>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/portfolio" component={Portfolio}/>
                    <Route path="/resume" component={Resume}/>
                    <Route component={Error}/>
                </Switch>
            </div>
            </BrowserRouter>
            
        )
    
}

export default App;
