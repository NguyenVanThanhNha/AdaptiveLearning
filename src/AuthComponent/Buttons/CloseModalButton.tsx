import React from 'react'
import styled from 'styled-components'
import closeIcon from '../../assets/icons/close.svg'

interface CloseModalProps {
  color?: 'error' | 'success'
  onClick?: () => void
}

interface WrapperProps {
  color: 'error' | 'success'
}

const CloseModal: React.FC<CloseModalProps> = ({ color = 'success', onClick }) => (
  <Wrapper color={color} onClick={onClick} />
)

const Wrapper = styled.div<WrapperProps>`
  align-items: center;
  background: ${({ color }) =>
    color === 'success'
      ? 'linear-gradient(to bottom right, rgb(12, 235, 235) 0%, rgb(32, 227, 178) 100%)'
      : 'rgba(255, 207, 206, 0.9)'};
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 35px;
  justify-content: center;
  position: absolute;
  right: -1em;
  top: -1em;
  transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
  width: 35px;
  z-index: 10;

  @media (max-width: 450px) {
    right: 0.5em;
  }

  :after {
    background: url(${closeIcon});
    background-position: center;
    background-repeat: no-repeat;
    content: '';
    height: 100%;
    width: 100%;
  }

  :hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 20px 40px, rgba(0, 0, 0, 0.3) 0px 0px 0px 0.5px inset,
      rgba(0, 0, 0, 0.1) 0px 10px 40px inset;
    filter: hue-rotate(10deg) brightness(120%) saturate(180%);
    transform: translateY(-2px);
  }
`

export default CloseModal
