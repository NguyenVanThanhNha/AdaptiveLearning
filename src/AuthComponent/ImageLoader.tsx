import React from 'react'
import styled from 'styled-components'

interface ImageLoaderProps {
  src: string
  alt: string
}

const ImageLoader: React.FC<ImageLoaderProps> = ({ alt, src }) => (
  <Image>
    <img src={src} alt={alt} />
  </Image>
)
const Image = styled.div`
  left: 0em;
  position: absolute;
  top: 2em;
  transform: scale(0.6);
  transform-origin: top left;
  transition: 0.3s ease-out;

  :hover {
    filter: hue-rotate(10deg) brightness(120%) saturate(180%);
    transform: scale(0.63);
  }
`

export default ImageLoader
