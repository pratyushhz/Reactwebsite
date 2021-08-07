import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Navbar from "./Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "./Footer";
const App = () => {
    return(
        <>
            <Navbar />
            <Switch>
                {/* <Home /> */}
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path ="/service" component={Services}/>
                <Route exact path ="/contact" component={Contact} />
                {/* if there is nothing to show redirect with home page */}
                <Redirect to="/" />
            </Switch>
            <Footer />
        </>
    )
}
export default App;