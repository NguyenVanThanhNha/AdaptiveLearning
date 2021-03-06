import React from 'react';
import Home from "./Pages/home";
import About from "./Pages/about";
import Services from "./Pages/services";
import Blog from "./Pages/blog";
import Contact from "./Pages/contact";
import BlogDetails from "./Pages/blog_details";
import Dashboard from './Pages/dashboard';
import Courses from './Pages/courses'
import Lessons from './Pages/lessons'
import Math10 from './Pages/math10'
import Quiz from './Components/quiz/test1/Quiz_Test'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./scss/common.scss";
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import Lesson1 from './Components/m10lesson1/index';
import  Slideimg  from './Components/slideimg/slideimg';

// import Quiz from './Components/quiz/Quiz'
import TestLearningStyle from './Components/testlearningstyle/TestLearningStyle';
import BeautifulLogin from './widget/BeautifulLogin'
import PrivateRoute  from './AuthComponent/PrivateRoute'

import KommunicateChat from './chat';
import BarChartResult from './Components/testlearningstyle/BarChartResult';

function App() {
  const isLoggedIn = Boolean(localStorage.getItem('accessToken'))
  console.log(isLoggedIn)
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
           <Home/>
        </Route>

        <Switch>
          <Route path="/login">
              <div className="wrapperlogin">
                <BeautifulLogin />
              </div>    
          </Route>
          <PrivateRoute path="/dashboard">  
          </PrivateRoute>
        </Switch>

        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/services">
          <Services/>
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
        <Route exact path="/dashboard/testlearningstyle">
          <TestLearningStyle/>
        </Route>
        <Route exact path="/dashboard/testlearningstyleresult">
          <BarChartResult/>
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
        <Route exact path="/dashboard/courses/math10/c5l1/test1">
          <Quiz/>
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
      <KommunicateChat/>
      </div>
  );
}

export default App;

