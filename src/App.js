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
import Test from './Components/testlearningstyle';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./scss/common.scss";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Lesson1 from './Components/m10lesson1';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
 

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
           <Home/>
           {/* <Test/> */}
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
      </div>
  );
}

export default App;

// import React, {useState, useEffect} from 'react';
// import "./scss/common.scss";
// // import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
// import {Auth, Hub} from 'aws-amplify'

// const initialFormState = {
//   username: '', password: '', email: '', authCode: '', formType:'signUp'
// }



// function App() {
//   const [formState, updateFormState]= useState(initialFormState)
//   const [user, updateUser]= useState(null)
//   // useEffect(checkUser, [])
//   // async function checkUser(){
//   //   try {
//   //     const user= await Auth.currentAuthenticatedUser()
//   //     console.log('user: ', user)
//   //     updateUser(user)
//   //     updateFormState(()=> ({...formState, formType: "signedIn"}))
//   //   } catch (err) {

//   //   }
//   // }

//   function onChange(e){
//     e.persist()
//     updateFormState(()=> ({...formState, [e.target.name]: e.target.value}))
//   }

//   const {formType} = formState

//   async function signUp(){
//     const { username, email, password} = formState
//     await Auth.signUp({username, password, attributes:{email }})
//     updateFormState(()=> ({...formState, formType: "confirmSignup"}))

//   }
//   async function confirmSignup(){
//     const { username, authCode} = formState
//     await Auth.confirmSignUp(username, authCode)
//     updateFormState(()=> ({...formState, formType: "signIn"}))

//   }
//   async function signIn(){
//     const { username, password} = formState
//     await Auth.signIn(username, password)
//     updateFormState(()=> ({...formState, formType: "signedIn"}))
//   }
  
// async function signOutt() {
//   try {
//       await Auth.signOut({ global: true });
//   } catch (error) {
//       console.log('error signing out: ', error);
//   }
// }

//   return (
//     <div className="App">
//       {
//         formType ==='signUp' && (
//           <div>
//             <input name="username" onChange={onChange} placeholder="username"/>
//             <input name="password" type= "password" onChange={onChange} placeholder="password"/>
//             <input name="email" onChange={onChange} placeholder="email"/>
//             <button onClick={signUp}>Sign Up</button>
//           </div>
//         )
//       }
//       {
//         formType ==='confirmSignup' && (
//           <div>
//             <input name="authCode" onChange={onChange} placeholder="Confirmation code"/>
//             <button onClick={confirmSignup}>Confirm Sign Up</button>
//           </div>
//         )
//       }
//       {
//         formType ==='signIn' && (
//           <div>
//             <input name="username" onChange={onChange} placeholder="username"/>
//             <input name="password" type= "password" onChange={onChange} placeholder="password"/>
//             <button onClick={signIn}>Sign In</button>
//           </div>
//         )
//       }
//       {
//         formType ==='signedIn' && (
//           <div>
//             <h1>Hello</h1>
//             <button onClick={signOutt}>Sign Out</button>
//           </div>
//         )
//       }
//       {/* <AmplifySignOut /> */}

//     </div>
//   );
// }

// export default (App);
