import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'

export const app = firebase.initializeApp({
  apiKey: 'AIzaSyDRfQ2At5tQoKEGtb4UN94P_ot8ABiKZcQ',
  authDomain: 'amplify-login-5efd4.firebaseapp.com',
  projectId: 'amplify-login-5efd4',
  storageBucket: 'amplify-login-5efd4.appspot.com',
  messagingSenderId: '787641829451',
  appId: '1:787641829451:web:039b75434b50313082a5ce',
  measurementId: 'G-V2PWQFF32W',
})

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider()
export const githubAuthProvider = new firebase.auth.GithubAuthProvider()
