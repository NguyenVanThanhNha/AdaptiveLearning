import React from 'react'
import styled, { keyframes } from 'styled-components'
import CloseModal from '../Buttons/CloseModalButton'
import ImageLoader from '../ImageLoader'

interface CardProps {
  imageSrc: string
  alt: string
}

const Card: React.FC<CardProps> = ({ children, imageSrc, alt }) => (
  <Wrapper>
    <CloseModal />
    {children}
    <RightContainer>
      <ImageLoader src={imageSrc} alt={alt} />
    </RightContainer>
  </Wrapper>
)

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-15px); filter: blur(10px); }
  100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`

const Wrapper = styled.div`
  animation: ${animation} 0.7s forwards;
  backdrop-filter: blur(40px);
  background: rgba(50, 61, 109, 0.5);
  border-radius: 20px;
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  display: grid;
  grid-template-columns: auto 450px;
  justify-items: center;
  max-width: 100%;
  min-height: 500px;
  opacity: 0;
  position: relative;
  transition: 0.3s ease-out;
  width: 900px;

  @media (max-width: 1000px) {
    grid-template-columns: auto 250px;
    width: 700px;
  }

  @media (max-width: 768px) {
    grid-template-columns: auto 150px;
    width: 600px;
  }

  @media (max-width: 650px) {
    grid-template-columns: auto;
    width: 400px;
  }

  @media (max-width: 450px) {
    border-radius: 0;
    grid-template-columns: auto;
    width: 100vw;
  }
`

const RightContainer = styled.div`
  border-radius: 0 0 20px 0;
  overflow: hidden;
  position: relative;
  width: 100%;

  @media (max-width: 650px) {
    display: none;
  }
`

export default Card
