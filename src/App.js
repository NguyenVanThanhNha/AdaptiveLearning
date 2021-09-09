import React from 'react';
import Home from "./Pages/home";
import About from "./Pages/about";
import Services from "./Pages/services";
import Portfolios from "./Pages/portfolios";
import Blog from "./Pages/blog";
import Contact from "./Pages/contact";
import BlogDetails from "./Pages/blog_details";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./scss/common.scss";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
           <Home />
        </Route>
        <Route exact path="/about">
           <About/>
        </Route>
        <Route exact path="/services">
          <Services/>
        </Route>
        <Route exact path="/portfolios">
          <Portfolios/>
        </Route>
        <Route exact path="/blog">
          <Blog/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
        <Route exact path="/blog_details/:id">
          <BlogDetails/>
        </Route>
      </Router>
       
    </div>
  );
}

export default App;
