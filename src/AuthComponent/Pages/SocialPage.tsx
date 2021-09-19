import React from 'react'
import styled from 'styled-components'
import Card from '../Cards/Card'
import socialIllustration from '../../assets/illustrations/social.svg'
import { TextSubtitle, TextTitle } from '../Styles/TextStyles'
import InlineLink from '../InlineLink'
import { googleAuthProvider, githubAuthProvider } from '../../config/firebase'
import GoogleButton from '../Buttons/GoogleButton'
import GithubButton from '../Buttons/GithubButton'

interface SocialPageProps {
  handleView: React.Dispatch<React.SetStateAction<string>>
  socialSignin: (provider: any) => Promise<void>
}

const SocialPage: React.FC<SocialPageProps> = ({ handleView, socialSignin }) => (
  <Card alt="social login" imageSrc={socialIllustration}>
    <LeftContainer>
      <TextContainer>
        <Title>Social Log in</Title>
        <Subtitle>Use your social accounts to log in.</Subtitle>
      </TextContainer>
      <ButtonContainer>
        <GoogleButton onClick={() => socialSignin(googleAuthProvider)} />
        <GithubButton onClick={() => socialSignin(githubAuthProvider)} />
      </ButtonContainer>
      <ExtraContainer>
        <InlineLink
          text="Log in with email?"
          textLink="Email log in"
          handleView={() => handleView('login')}
        />
        <InlineLink
          text="Don't have an account?"
          textLink="Sign up!"
          handleView={() => handleView('signup')}
        />
        <InlineLink
          text="Forgot your password?"
          textLink="Reset password"
          handleView={() => handleView('reset')}
        />
      </ExtraContainer>
    </LeftContainer>
  </Card>
)

const LeftContainer = styled.div`
  align-content: center;
  display: grid;
  gap: 1.5em;
  grid-template-rows: repeat(3, min-content);
  height: 100%;
  width: 320px;
`

const TextContainer = styled.div`
  display: grid;
  gap: 0.2em;
`

const Title = styled(TextTitle)``

const Subtitle = styled(TextSubtitle)``

const ButtonContainer = styled.div`
  display: grid;
  gap: 1em;
  grid-template-columns: 210px;
`

const ExtraContainer = styled.div`
  display: grid;
  gap: 0.5em;
  grid-template-rows: repeat(2, min-content);
`

export default SocialPage
