import React, { createContext, useEffect, useState } from 'react'
import firebase from 'firebase/compat/app';
interface AuthContextProps {
  children: any
}

export const Auth = createContext<firebase.User | null>(null)

export const AuthContext: React.FC<AuthContextProps> = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null)

  const onAuthStateChange = (callback: {
    (value: React.SetStateAction<firebase.User | null>): void
    (arg0: firebase.User): void
  }) =>
    firebase.auth().onAuthStateChanged(usr => {
      if (usr) {
        callback(usr)
      } else {
        callback(null)
      }
    })

  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser)
    return () => {
      unsubscribe()
    }
  }, [])

  return <Auth.Provider value={user}>{children}</Auth.Provider>
}
