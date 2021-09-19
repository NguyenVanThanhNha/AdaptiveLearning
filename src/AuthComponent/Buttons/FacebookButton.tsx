import React from 'react'
import styled from 'styled-components'

interface FacebookButtonProps {
  onClick: () => void
}

const FacebookButton: React.FC<FacebookButtonProps> = ({ onClick }) => (
  <Wrapper onClick={onClick}>
    <IconWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 32 32"
        version="1"
      >
        <path
          fill="#FFFFFF"
          d="M32 30a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v28z"
        />
        <path
          fill="#4267b2"
          d="M22 32V20h4l1-5h-5v-2c0-2 1.002-3 3-3h2V5h-4c-3.675 0-6 2.881-6 7v3h-4v5h4v12h5z"
        />
      </svg>
    </IconWrapper>
    <Text>Sign in with Facebook</Text>
  </Wrapper>
)
const Wrapper = styled.button`
  cursor: pointer;
  height: 40px;
  border-width: 0;
  background: #4267b2;
  background-color: #3b5998;
  color: #737373;
  border-radius: 5px;
  white-space: nowrap;
  box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 0.05);
  transition-property: background-color, box-shadow;
  transition-duration: 150ms;
  transition-timing-function: ease-in-out;
  padding: 0;
  outline: none;

  :focus {
    box-shadow: rgba(12, 235, 235, 0.3) 0px 10px 40px, rgb(32, 227, 178) 0px 0px 0px 1px inset;
  }

  :hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 20px 40px, rgba(0, 0, 0, 0.3) 0px 0px 0px 0.5px inset,
      rgba(0, 0, 0, 0.1) 0px 10px 40px inset;
  }
`

const IconWrapper = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin: 8px 0 8px 8px;
  width: 18px;
  height: 18px;
  box-sizing: border-box;
`

const Text = styled.span`
  color: rgba(255, 255, 255, 0.87);
  display: inline-block;
  vertical-align: middle;
  padding: 0 16px;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Roboto', arial, sans-serif;
`

export default FacebookButton
