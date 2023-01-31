import React, {Component} from 'react';
import {Route, HashRouter} from "react-router-dom";
import Navigation from '../components/Navbar';
import Reserve from '../components/Reserve';
import Contact from '../components/Contact';
import Menu from '../components/Menu';

class Header extends Component {   
    render() {
    return (
        <HashRouter>
            <div className="row Header" id="header">
              
                <Navigation/>
            </div>
    

    <div className="content">
          <Route exact path="/"/>
          <Route path="/reserve" component={Reserve}/>
          <Route path="/menu" component={Menu}/>
          <Route path="/contact" component={Contact}/>

          
        
        </div>
    </HashRouter>
    )
}
}

export default Header;