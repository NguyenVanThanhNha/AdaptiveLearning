import React from 'react'
import styled, { keyframes } from 'styled-components'
import { TextLight } from './Styles/TextStyles'

interface BannerProps {
  message: string
  type?: 'error' | 'success'
}

interface ElementProps {
  type: 'error' | 'success'
}

const Banner: React.FC<BannerProps> = ({ message = '', type = 'success' }) => (
  <Wrapper type={type}>
    <Text type={type}>{message}</Text>
  </Wrapper>
)

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-15px); filter: blur(10px); }
  100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`

const Wrapper = styled.div<ElementProps>`
  animation: ${animation} 0.3s forwards;
  backdrop-filter: blur(40px);
  background: ${({ type }) =>
    type === 'error'
      ? 'rgba(255, 85, 81, 0.72)'
      : 'linear-gradient(to bottom right,rgb(160 255 255) 0%,rgb(175 255 235) 100%)'};
  border-radius: 20px;
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  justify-self: center;
  padding: 1em 1.5em;
  position: absolute;
  top: -2em;
  width: 360px;
  z-index: 10;

  @media (max-width: 650px) {
    width: 250px;
  }
`

const Text = styled(TextLight)<ElementProps>`
  color: ${({ type }) => (type === 'error' ? 'white' : 'black')};
`

export default Banner
