import React from 'react'
import styled, { keyframes } from 'styled-components'
import { TextLight, TextSubtitle, TextTitle } from '../Styles/TextStyles'

interface UserCardProps {
  subtitle: string | null
  lastSeen: string | undefined
}

const UserCard: React.FC<UserCardProps> = ({ children, subtitle, lastSeen }) => (
  <Wrapper>
    <Title>Hello again</Title>
    {subtitle && <Subtitle>{subtitle}</Subtitle>}
    {lastSeen && <Caption>Last seen: {new Date(lastSeen).toLocaleString()}</Caption>}
    {children}
  </Wrapper>
)

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-15px); filter: blur(10px); }
  100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`
const Wrapper = styled.div`
  align-items: center;
  animation: ${animation} 0.7s forwards;
  backdrop-filter: blur(40px);
  background: rgba(50, 61, 109, 0.5);
  border-radius: 20px;
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: center;
  max-width: 100%;
  min-height: 250px;
  opacity: 0;
  padding: 2em;
  position: relative;
  transition: 0.3s ease-out;
  width: 300px;
`

const Title = styled(TextTitle)``

const Subtitle = styled(TextSubtitle)``
const Caption = styled(TextLight)``

export default UserCard
