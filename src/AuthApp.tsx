/* eslint-disable react/jsx-curly-newline */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import background2 from './assets/img/background-2.jpg'
import { AuthContext, Auth } from './AuthComponent/Auth/AuthContext'
import Button from './AuthComponent/Buttons/Button'
import UserCard from './AuthComponent/Cards/UserCard'
import { app } from './config/firebase'
import BeautifulLogin from './widget/BeautifulLogin'

function AuthApp() {
  const [isLoading, setIsLoading] = useState(true)
  const signout = async () => {
    try {
      await app.auth().signOut()
    } catch (error) {
      // console.error(error.message)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }, [])

  return (
    <AuthContext>
      <Wrapper>
        {isLoading ? (
          <div style={{ height: '100vh', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.2)' }} />
        ) : (
          <Auth.Consumer>
            {user =>
              !user ? (
                <BeautifulLogin />
              ) : (
                <UserCard subtitle={user.email} lastSeen={user.metadata.lastSignInTime}>
                  <Button text="Log out" type="button" onClick={signout} />
                </UserCard>
              )
            }
          </Auth.Consumer>
        )}
      </Wrapper>
    </AuthContext>
  )
}

export default AuthApp

const Wrapper = styled.div`
  align-content: center;
  display: grid;
  height: 100vh;
  justify-content: center;
  position: relative;
  width: 100%;
  background: radial-gradient(
      218.51% 281.09% at 100% 100%,
      rgba(41, 128, 185, 0.5) 0%,
      rgba(109, 213, 250, 0.3) 45.83%,
      rgba(255, 255, 255, 0.2) 100%
    ),
    url(${background2});
  background-position: center;
  background-size: cover;
`
