import { Component} from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";

import {Redirect, Route, Switch} from "react-router-dom"
import NotFound from "./Components/notFound/NotFound";

class App extends Component {

  render() {
    return (
      <>
        <Navbar />
        
        
          <Switch>
          <Redirect exact from="/" to="Home" />
          <Route path="/Home" component={Home} />
          <Route path="/Contact" component={Contact} />
          <Route path="/About" component={About} />
          <Route path="*" component={NotFound} />
          </Switch>
        
        <Footer />
      </>
    )
    
      
  }

}

export default App;
