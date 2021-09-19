import React from 'react';
import Home from "./Pages/home";
import About from "./Pages/about";
import Services from "./Pages/services";
import Learning from "./Pages/learning";
import Blog from "./Pages/blog";
import Contact from "./Pages/contact";
import BlogDetails from "./Pages/blog_details";
import Dashboard from './Pages/dashboard';
import Courses from './Pages/courses'
import Lessons from './Pages/lessons'
import Math10 from './Pages/math10'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./scss/common.scss";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Lesson1 from './Components/m10lesson1/index';
import  Slideimg  from './Components/slideimg/slideimg';
import { Slide } from '@material-ui/core';
// import Quiz from './Components/quiz/Quiz'
import Test from './Components/testlearningstyle/test';
import Quiz from './Components/quiz/Quiz';
import KommunicateChat from './chat';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
           {/* <Home/> */}
           {/* <Quiz/> */}
          <Test/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/services">
          <Services/>
        </Route>
        <Route exact path="/learning">
          <Learning/>
        </Route>
        <Route exact path="/blog">
          <Blog/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
        <Route exact path="/dashboard">
          <Dashboard/>
          </Route>
        <Route exact path="/dashboard/courses">
          <Courses/>
        </Route>
        <Route exact path="/dashboard/courses/math10">
          <Math10/>
        </Route>
        <Route exact path="/dashboard/courses/math10/c5l1">
          <Lesson1/>
        </Route>
        <Route exact path="/dashboard/courses/math10/c5l1/d1">
          <Slideimg/>
        </Route>
        <Route exact path="/dashboard/lessons">
          <Lessons/>
        </Route>
        <Route exact path="/blog_details/:id">
          <BlogDetails/>
        </Route>
        <Route exact path="/learning/math10/lesson1">
          <Lesson1/>
        </Route>
        
      </Router>
      {/* <AmplifySignOut buttonText="Custom Text"></AmplifySignOut>    </div> */}
      <KommunicateChat/>
      </div>
  );
}

export default App;

