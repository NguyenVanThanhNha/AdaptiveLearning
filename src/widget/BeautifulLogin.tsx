import firebase from 'firebase/compat/app'
import React, { useEffect, useState } from 'react'
import Banner from '../AuthComponent/Banner'
import LoginPage from '../AuthComponent/Pages/LoginPage'
import ResetPage from '../AuthComponent/Pages/ResetPage'
import SignupPage from '../AuthComponent/Pages/SignupPage'
import SocialPage from '../AuthComponent/Pages/SocialPage'
import { app } from '../config/firebase'

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

  const mailSignin = async (data: { email: string; password: string }) => {
    const { email, password } = data
    try {
      await app.auth().signInWithEmailAndPassword(email, password)
    } catch (error) {
      // setShowBanner({ message: error.message, show: true, type: 'error' })
    }
  }

  const mailSignUp = async (data: { email: string; password: string }) => {
    const { email, password } = data
    try {
      await app.auth().createUserWithEmailAndPassword(email, password)
    } catch (error) {
      setShowBanner({
        message: "",
        show: true,
        type: 'error',
      })
    }
  }

  const socialSignin = async (provider: firebase.auth.AuthProvider) => {
    try {
      await app.auth().signInWithPopup(provider)
    } catch (error) {
      setShowBanner({
        message:"",
        show: true,
        type: 'error',
      })
    }
  }

  const resetPassword = async (data: { email: string }) => {
    const { email } = data
    try {
      await app.auth().sendPasswordResetEmail(email)
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
      case 'social':
        return <SocialPage handleView={setView} socialSignin={socialSignin} />
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
