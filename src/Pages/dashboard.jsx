import React from 'react';
import PageHeader from "../Components/page_header";
import LearningTab from "../Components/learning/learning_tab";
import Lesson1 from "../Components/m10lesson1"
import Layoutdashboard from "../Layoutsdashboard"
import { AmplifyAuthenticator, AmplifySignOut, AmplifySignIn,AmplifySignUp } from '@aws-amplify/ui-react'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import Lesson from './lessons'
import Amplify from '@aws-amplify/core'
import { Auth } from '@aws-amplify/auth'
import awsconfig from './aws-exports'

Amplify.configure(awsconfig)
Auth.configure(awsconfig)

const MyTheme = {
    signInButtonIcon: { 'display': 'none' },
    googleSignInButton: { 'backgroundColor': 'red', 'borderColor': 'red' }
}

const AuthStateApp = () => {
    const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState();

    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
        });
    }, []);

    // const signOut = (e) => {
    //     e.preventDefault();
    //     Auth.signOut();
    //     // window.location.reload() 
    //   }

    
  return authState === AuthState.SignedIn && user ? (
      <div className="App">
          <Lesson/>
          <AmplifySignOut />
      </div>
    ) : (
        <AmplifyAuthenticator theme={MyTheme}>
            <AmplifySignUp
                headerText="Start new journey!"
                slot="sign-up"
            ></AmplifySignUp>
            <AmplifySignIn
            headerText="Welcome to your class!"
            slot="sign-in"
            ></AmplifySignIn>
            
            <AmplifySignOut buttonText="Log out"></AmplifySignOut>
        
      </AmplifyAuthenticator >
      
  );
}

export default AuthStateApp;

