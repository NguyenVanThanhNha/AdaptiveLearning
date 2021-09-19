import React from 'react'
import styled from 'styled-components'
import { TextDark } from '../Styles/TextStyles'


interface ButtonProps {
  disabled?: boolean
  onClick?: () => void
  text: string
  type: 'button' | 'submit' | 'reset' | undefined
}

interface WrapperProps {
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset' | undefined
}

const Button: React.FC<ButtonProps> = ({ disabled = false, onClick, text, type}) => (
  <Wrapper type={type} disabled={disabled} onClick={onClick} tabIndex={0}>
    <Text>{text}</Text>
  </Wrapper>
)

const Wrapper = styled.button<WrapperProps>`
  background: ${({ disabled }) =>
    disabled
      ? 'rgba(0, 0, 0, 0.3)'
      : 'linear-gradient(to bottom right, rgb(12, 235, 235) 0%, rgb(32, 227, 178) 100%)'};
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.05);
  color: ${({ disabled }) => disabled && 'white'};
  cursor: pointer;
  height: 30px;
  outline: none;
  padding: 0.5em 0.6em;
  pointer-events: ${({ disabled }) => disabled && 'none'};
  transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
  width: 170px;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 20px 40px, rgba(0, 0, 0, 0.3) 0px 0px 0px 0.5px inset,
      rgba(0, 0, 0, 0.1) 0px 10px 40px inset;
    filter: hue-rotate(10deg) brightness(120%) saturate(180%);
    transform: translateY(-2px);
  }

  :focus {
    background: rgba(0, 0, 0, 0.3);
    box-shadow: rgba(12, 235, 235, 0.3) 0px 10px 40px, rgb(32, 227, 178) 0px 0px 0px 1px inset;
    color: white;
  }
`

const Text = styled(TextDark)`
  text-align: center;
  text-transform: none;
`

export default Button
