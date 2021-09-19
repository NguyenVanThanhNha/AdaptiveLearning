import React from 'react'
import styled from 'styled-components'
import { Field, Form, Formik } from 'formik'
import * as yup from 'yup'
import Button from '../Buttons/Button'
import Input from '../Input'
import InlineLink from '../InlineLink'
import { TextSubtitle, TextTitle } from '../Styles/TextStyles'
import signupIllustration from '../../assets/illustrations/signup.svg'
import Card from '../Cards/Card'

interface SignupPageProps {
  handleView: React.Dispatch<React.SetStateAction<string>>
  mailSignUp: (data: { email: string; password: string }) => Promise<void>
}

const validationSchema = yup.object({
  email: yup.string().required().max(255),
  password: yup.string().required().min(8),
})

const SignupPage: React.FC<SignupPageProps> = ({ handleView, mailSignUp }) => (
  <Card alt="signup page" imageSrc={signupIllustration}>
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(data, { setSubmitting, resetForm }) => {
        setSubmitting(true)
        mailSignUp(data)
        setSubmitting(false)
        resetForm()
      }}
    >
      {({ values, isSubmitting }) => (
        <Form>
          <LeftContainer>
            <TextContainer>
              <Title>Join Us</Title>
              <Subtitle>And start coding now.</Subtitle>
            </TextContainer>
            <InputContainer>
              <Field name="email" label="Email Address" type="email" as={Input} />
              <Field name="password" label="Password" type="password" as={Input} />
            </InputContainer>
            <ButtonContainer>
              <Button text="Create Account" disabled={isSubmitting} type="submit" />
            </ButtonContainer>
            <ExtraContainer>
              <InlineLink
                text="Already have an account?"
                textLink="Sign in!"
                handleView={() => handleView('login')}
              />
            </ExtraContainer>
          </LeftContainer>
        </Form>
      )}
    </Formik>
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

const InputContainer = styled.div`
  display: grid;
  gap: 1em;
`

const ButtonContainer = styled.div``

const ExtraContainer = styled.div`
  display: grid;
  gap: 0.5em;
  grid-template-rows: repeat(2, min-content);
`
export default SignupPage
