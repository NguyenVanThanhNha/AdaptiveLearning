import React from 'react'
import styled from 'styled-components'
import { TextLight } from './Styles/TextStyles'

interface InlineLinkProps {
  text: string
  textLink: string
  handleView: (e: any) => void
}

const InlineLink: React.FC<InlineLinkProps> = ({ text, textLink, handleView }) => (
  <Wrapper>
    {text}
    <Navigate role="button" tabIndex={0} onKeyDown={() => null} onClick={handleView}>
      {textLink}
    </Navigate>
  </Wrapper>
)

const Wrapper = styled(TextLight)``

const Navigate = styled.span`
  margin-left: 5px;
  color: rgb(32, 227, 178);
  cursor: pointer;
  font-weight: bold;
  transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
  outline: none;
  border-bottom: 3px solid transparent;

  :hover {
    filter: hue-rotate(10deg) brightness(120%) saturate(180%);
  }

  :focus {
    border-bottom: 3px solid;
    padding-bottom: 0.1em;
  }
`

export default InlineLink
