import styled from 'styled-components'

export const TextTitle = styled.h2`
  font-weight: bold;
  font-size: 40px;
  color: white;

  @media (max-width: 450px) {
    font-size: 28px;
  }
`

export const TextSubtitle = styled.p`
  font-weight: normal;
  font-size: 20px;
  line-height: 140%;
  color: rgba(255, 255, 255, 0.7);
`

export const TextDark = styled.p`
  font-weight: 600;
  font-size: 13px;
  line-height: 130%;
`

export const TextLight = styled.p`
  font-weight: 600;
  font-size: 13px;
  line-height: 130%;
  color: rgba(255, 255, 255, 0.7);
`
