import React from "react";
import "../CSS/App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Thankyou from "./Thankyou";


function App() {


  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
      
          <Route path="/thankyou">
            <Thankyou />
          </Route>

          <Route path="/">
            <Header />
            <Carousel />
            <Home />
        
            <Footer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
