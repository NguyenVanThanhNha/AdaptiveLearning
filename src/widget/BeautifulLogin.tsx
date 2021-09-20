import React, { useEffect, useState } from 'react'
import Banner from '../AuthComponent/Banner'
import LoginPage from '../AuthComponent/Pages/LoginPage'
import ResetPage from '../AuthComponent/Pages/ResetPage'
import SignupPage from '../AuthComponent/Pages/SignupPage'
import ConfirmPage from '../AuthComponent/Pages/ConfirmPage' 
import SocialPage from '../AuthComponent/Pages/SocialPage'

import Amplify, { Auth, Hub, API } from "aws-amplify";
import awsmobile from '../aws-exports'
import WelcomePage from '../AuthComponent/Pages/WelcomePage'

Amplify.configure(awsmobile);

interface BeautifulLoginProps {}

interface ShowBannerProps {
  message: string
  show: boolean
  type: 'error' | 'success'
}

const BeautifulLogin: React.FC<BeautifulLoginProps> = () => {
  const [view, setView] = useState('login')
  const [showBanner, setShowBanner] = useState<ShowBannerProps>({
    message: '',
    show: false,
    type: 'success',
  })
 
  const [user, updateUser] = useState('a')
 
   const checkUser = async () => {
     try {
       const user = await Auth.currentAuthenticatedUser();
        console.log(user)
       updateUser(user);
 
      //  console.log("got user", user);
       const accessToken = user.signInUserSession.accessToken.jwtToken;
       console.log("got user", accessToken);
       localStorage.setItem('accessToken',accessToken);
 
     } catch (err) {
       console.log("checkUser error", err);
     }
   };

   const setAuthListener = async () => {
    Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case "signOut":
          console.log(data.payload.message);
          break;

        case "signIn":
          console.log(data.payload.message);
          break;
         default:
      }
    });
  };

   useEffect(() => {
    checkUser();
    setAuthListener();
  }, []);

  const mailSignin = async (data: { username: string; password: string }) => {
    const { username, password } = data
    try {
      await Auth.signIn({ username, password });
      setView('welcome')
      checkUser();
    
    } catch (error) {
    }
  }

  const mailSignUp = async (data: {  username: string; email: string; password: string }) => {
    const { username, email, password } = data
    updateUser(username)
    try {
      await Auth.signUp({  username, password, attributes: { email } });
      localStorage.setItem('firstLogin', '1')
      setView('confirm');
      checkUser();

    } catch (error) {
      setShowBanner({
        message: "Account already exists",
        show: true,
        type: 'error',
      })
    }
  }

  const mailConfirm = async (data: { authCode: string}) => {
    const { authCode } = data
    try {
      console.log(user)
      await Auth.confirmSignUp( user, authCode );
      console.log("confirm ok")
      setView('login');
    } catch (error) {
      setShowBanner({
        message: "",
        show: true,
        type: 'error',
      })
    }
  }

  const socialSignin = async () => {
    try {
    
    } catch (error) {
      setShowBanner({
        message: '',
        show: true,
        type: 'error',
      })
    }
  }

  const welcomePage = async () => {
    try {
    
    } catch (error) {
      setShowBanner({
        message: '',
        show: true,
        type: 'error',
      })
    }
  }

  const resetPassword = async (data: { email: string }) => {
    const { email } = data
    try {
      
      setShowBanner({
        message: 'Check your email and follow the steps to reset your password',
        show: true,
        type: 'success',
      })
    } catch (error) {
      setShowBanner({
        message: "",
        show: true,
        type: 'error',
      })
    }
  }

  const selectedView = () => {
    switch (view) {
      case 'login':
        return <LoginPage handleView={setView} mailSignin={mailSignin} />
      case 'signup':
        return <SignupPage handleView={setView} mailSignUp={mailSignUp} />
      case 'confirm':
        return <ConfirmPage handleView={setView} mailConfirm={mailConfirm}/>
      case 'social':
        return <SocialPage handleView={setView} socialSignin={socialSignin} />
      case 'welcome':
        return <WelcomePage handleView={setView} welcomePage={welcomePage}/>
      default:
        return <ResetPage handleView={setView} resetPassword={resetPassword} />
    }
  }

  useEffect(() => {
    setShowBanner({ message: '', show: false, type: 'success' })
  }, [view])

  return (
    <div
      style={{
        width: 'fit-content',
        height: 'fit-content',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {showBanner.show && <Banner message={showBanner.message} type={showBanner.type} />}
      {selectedView()}
    </div>
  )
}

export default BeautifulLogin
